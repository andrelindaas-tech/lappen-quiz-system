-- =========================================================================
-- DEBUGGING RPC FUNCTIONS FOR QUESTION INSPECTOR
-- =========================================================================
-- Disse funksjonene brukes av det interne debug-panelet.
-- De kjører med SECURITY DEFINER for å gi anon-rollen kontrollert,
-- read-only tilgang uten å gi direkte tabell-SELECT tilgang.
-- =========================================================================

-- =========================================================================
-- SIKKERHETS-TOGGLES (Kopier og kjør disse i SQL Editor for å styre tilgang):
-- 
-- 🔓 SLÅ PÅ TILGANG (Lokalt / Under testing):
--   GRANT EXECUTE ON FUNCTION public.get_questions_debug(integer, text, integer) TO anon;
--   GRANT EXECUTE ON FUNCTION public.get_question_categories() TO anon;
-- 
-- 🔒 SLÅ AV TILGANG (Produksjon / Etter testing):
--   REVOKE EXECUTE ON FUNCTION public.get_questions_debug(integer, text, integer) FROM anon;
--   REVOKE EXECUTE ON FUNCTION public.get_question_categories() FROM anon;
-- =========================================================================

-- 1. get_questions_debug: Henter siste N innlagte, filtrerer på kategori, eller henter enkelt-ID
CREATE OR REPLACE FUNCTION public.get_questions_debug(
  p_limit integer DEFAULT 50,
  p_category text DEFAULT NULL,
  p_id integer DEFAULT NULL
)
RETURNS SETOF public.questions
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT *
  FROM public.questions
  WHERE (p_id IS NULL OR id = p_id)
    AND (p_category IS NULL OR category = p_category)
  ORDER BY id DESC
  LIMIT p_limit;
END;
$$;

-- 2. get_question_categories: Henter unike kategorier og antall spørsmål i hver for filter-menyen
CREATE OR REPLACE FUNCTION public.get_question_categories()
RETURNS TABLE(category text, count bigint)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT q.category, COUNT(*)
  FROM public.questions q
  GROUP BY q.category
  ORDER BY count DESC;
END;
$$;

-- Standardinnstilling: Gi tilgang i starten (kan skrus av manuelt ved behov)
GRANT EXECUTE ON FUNCTION public.get_questions_debug(integer, text, integer) TO anon;
GRANT EXECUTE ON FUNCTION public.get_question_categories() TO anon;
