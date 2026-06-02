-- Steng direkte SELECT-tilgang til questions-tabellen for anonyme API-brukere (hindrer skraping)
REVOKE SELECT ON public.questions FROM anon;
