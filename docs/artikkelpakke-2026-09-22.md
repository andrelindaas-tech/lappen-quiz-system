# Artikkelpakke – september 2026

Pakken bygger på main 8f53e43 og leveres via grenen codex/artikler-oversikt-billys. Produksjon skal først oppdateres etter kontroll av Netlify-forhåndsvisningen.

## Omfang

- Rygging og vending: ny artikkel, interaktive situasjoner og ferdige illustrasjoner.
- Temaliste: utfellbare grupper, veiledning og korrekte interaktive merker.
- Tilhenger: kalkulator, bilillustrasjon og presise tekster om vekter og førerkort.
- Bilens lys: oppdatert artikkel med innebygd 3D-modell og lyskontroller.
- Smårettinger: interne lenker, misvisende kalkulatorhenvisninger og oppdiktede lokale resultater i Skiltduellen.
- Prerender stopper bygget ved enhver mislykket side.

Konto/premium, resultatanalyse, databaseendringer og andre prototyper er ikke inkludert. Kun nødvendige 3D-kildefiler og ferdig GLB følger med, ikke Blender-arbeidsfiler.

## Lokal kontroll

38 tester bestått; produksjonsbygg med 348/348 sider. Kontrollerte canonical, JSON-LD og lokale filer/lenker på hovedsidene. Nettleserkontroll av utfelling, kalkulator, vendeoppgave og 3D-bil med lysvalg, av/på og kamera. Mobilkontroll uten horisontal overflyt. Korrigert mørk-modus-kontrast.

Netlify skal bruke npm run build, publisere dist og ha prosjektets eksisterende miljøvariabler tilgjengelig under bygg. Vite bygger 3D-visningen som egen HTML-inngang. Iframe-siden er noindex. Eksisterende varsel om store JavaScript-bunter gjenstår.
