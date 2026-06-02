-- 1. get_questions_by_ids: Henter spesifikke spørsmål basert på en liste med ID-er (brukes i Fokusmodus)
-- SECURITY DEFINER tillater kjøring uten direkte SELECT-tilgang for anon-rollen.
-- SET search_path sikrer mot search path hijacking sårbarheter.
CREATE OR REPLACE FUNCTION public.get_questions_by_ids(p_ids integer[])
RETURNS SETOF public.questions
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT *
  FROM public.questions
  WHERE id = ANY(p_ids);
END;
$$;

-- 2. get_question_count: Henter totalt antall spørsmål i databasen (brukes til statistikk)
CREATE OR REPLACE FUNCTION public.get_question_count()
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_count bigint;
BEGIN
  SELECT COUNT(*) INTO v_count FROM public.questions;
  RETURN v_count;
END;
$$;

-- 3. get_random_questions: Henter tilfeldige spørsmål (brukes til quizer)
CREATE OR REPLACE FUNCTION public.get_random_questions(p_count integer)
RETURNS SETOF public.questions
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT *
  FROM public.questions
  ORDER BY random()
  LIMIT p_count;
END;
$$;

-- 4. get_random_questions_by_category: Henter tilfeldige spørsmål fra en bestemt kategori (brukes til kategoriquizer)
CREATE OR REPLACE FUNCTION public.get_random_questions_by_category(p_count integer, p_category text)
RETURNS SETOF public.questions
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT *
  FROM public.questions
  WHERE category = p_category
  ORDER BY random()
  LIMIT p_count;
END;
$$;
