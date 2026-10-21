# Kildekode for forklaringsfilmene

Én mappe per film. Det som publiseres på nettsiden ligger i `public/video/<tema>/`.
Arbeidsflyt og krav står i skillen `teori-test-video`.

- `veimerking/` – «Veimerking – forstå linjene» (v4, publisert)
- `lys-i-morket/` – «Lys i mørket» (møtende biler, publisert, uten tale)
- `forbikjoring/` – «Forbikjøring – hvor mye vei trenger du?»
- `trafikkuhell/` – «Trafikkuhell – sikre, varsle, hjelpe»
- `vikeplikt/` – «Vikeplikt – hvem kjører først?»

Blender-filer (`*.blend`) holdes utenfor git. De lages på nytt med skriptene i `blender/`, og filmene bruker de eksporterte `.glb`-filene.

Storyboard: `npm install`, kjør `node build.cjs` og `node stills.mjs . runde1 mobile`.
