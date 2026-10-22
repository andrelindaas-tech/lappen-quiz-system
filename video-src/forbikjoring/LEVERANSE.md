# Leveranse: Forbikjøring – hvor mye vei trenger du?

Godkjent av Andre 21. oktober 2026. Nettversjon laget 21. oktober 2026.

## Hva

- Forklaringsfilm, 1:52, 6 kapitler, med fortellerstemme.
- Artikkel: /laeringsressurser/forbikjoring/
- Mobil (1080×1350, 4:5) og bredformat (1920×1080, 16:9) i samme spiller.

## Filer i `public/video/forbikjoring/` (til sammen 2,7 MB)

| Fil | Størrelse | Innhold |
|---|---|---|
| `THREE-LICENSE.txt` | 1 kB | lisens for Three.js (MIT) |
| `bundle.js` | 1,6 MB | animasjonen (Three.js, modeller, skilt og skrift bakt inn) |
| `fortellertekst.txt` | 1 kB | talen som tekst, ett avsnitt per kapittel (til teksten under filmen) |
| `fortelling.mp3` | 901 kB | fortellerstemmen (Mia, ElevenLabs), mono 64 kbit/s |
| `index.html` | 2 kB | avspilleren (lazy iframe-mål) |
| `player.js` | 3 kB | lydklokken styrer bildet; velger mobil (4:5) under 600 px bredde, ellers 16:9 |
| `poster-mobil.webp` | 89 kB | stillbilde 1080×1350 |
| `poster.webp` | 92 kB | stillbilde 1920×1080 (til forsiden eller deling) |

## Tidsplan (sekunder)

| Kapittel | Start | Slutt |
|---|---|---|
| 1 Før du kjører forbi | 0,0 | 17,7 |
| 2 Så lang tid tar det | 17,7 | 51,4 |
| 3 Fartsgrensen | 51,4 | 59,3 |
| 4 Forbikjøring forbudt | 59,3 | 84,8 |
| 5 Når du blir forbikjørt | 84,8 | 98,6 |
| 6 Husk dette | 98,6 | 108,6 |
| Sluttkort | 108,6 | 112,6 |

## Innbygging (gjøres av nettsideagenten)

Samme oppsett som `VeimerkingVideo.tsx`: lazy iframe i en boks med `aspect-[4/5.9] sm:aspect-[16/10.4]`, og fortellerteksten under filmen.

```tsx
<iframe
    src="/video/forbikjoring/index.html"
    title="Forbikjøring – hvor mye vei trenger du? Animasjon med fortellerstemme"
    loading="lazy"
    allow="autoplay; fullscreen"
/>
```

- Bildetekst, forslag: «Animasjon: slik vurderer du om det er plass til å kjøre forbi (1:52, med lyd). Velg kapittel nederst i spilleren.»
- Teksten under filmen: `fortellertekst.txt`, ett avsnitt per kapittel.
- Spilleren viser et stillbilde med avspillingsknapp til den startes. Ingen autoavspilling.

## Kontroller

- Avspilleren er åpnet i Chromium i to rammestørrelser (1000×700 og 400×640): ingen skriptfeil, riktig format (16:9 og 4:5) og riktig antall kapitler.
- Lengden på lyden er lik filmens tidsplan (112,6 s).
- `bundle.js` og `fortelling.mp3` er identiske med den godkjente forhåndsvisningen.
- Visuelt godkjent gjennom gjennomgangsrundene med Andre.
- Fortellerteksten er hentet fra det godkjente manuset (LES-blokkene), uendret.

## Gjenstår

- Ikke testet på fysisk mobil.
- Ikke bygd inn i artikkelen ennå.
- MP4 er ikke laget. Kan lages fra kildene ved behov.
- Ikke committet eller pushet.

## Kilder

`video-src/forbikjoring/`: `scene.js`, `information.js`, `style.js`, `prepare.py`, `timing.json`, modeller og skilt. Bygg med `node build.cjs` (lager `bundle.js`).
