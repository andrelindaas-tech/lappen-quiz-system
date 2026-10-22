# Leveranse: Vikeplikt – hvem kjører først?

Godkjent av Andre 21. oktober 2026. Nettversjon laget 21. oktober 2026.

## Hva

- Forklaringsfilm, 2:15, 7 kapitler, med fortellerstemme.
- Artikkel: /laeringsressurser/vikeplikt/
- Også aktuell for: /laeringsressurser/buss-fra-holdeplass/ (kapittel 6 handler om buss fra holdeplass)
- Mobil (1080×1350, 4:5) og bredformat (1920×1080, 16:9) i samme spiller.

## Filer i `public/video/vikeplikt/` (til sammen 3,9 MB)

| Fil | Størrelse | Innhold |
|---|---|---|
| `THREE-LICENSE.txt` | 1 kB | lisens for Three.js (MIT) |
| `bundle.js` | 2,5 MB | animasjonen (Three.js, modeller, skilt og skrift bakt inn) |
| `fortellertekst.txt` | 2 kB | talen som tekst, ett avsnitt per kapittel (til teksten under filmen) |
| `fortelling.mp3` | 1,1 MB | fortellerstemmen (Mia, ElevenLabs), mono 64 kbit/s |
| `index.html` | 2 kB | avspilleren (lazy iframe-mål) |
| `player.js` | 3 kB | lydklokken styrer bildet; velger mobil (4:5) under 600 px bredde, ellers 16:9 |
| `poster-mobil.webp` | 148 kB | stillbilde 1080×1350 |
| `poster.webp` | 204 kB | stillbilde 1920×1080 (til forsiden eller deling) |

## Tidsplan (sekunder)

| Kapittel | Start | Slutt |
|---|---|---|
| 1 Hvem bestemmer? | 0,0 | 22,2 |
| 2 Høyreregelen | 22,2 | 40,4 |
| 3 Skilt går foran | 40,4 | 54,5 |
| 4 Ut fra en parkeringsplass | 54,5 | 76,5 |
| 5 Smal veg og hindring | 76,5 | 96,8 |
| 6 Buss fra holdeplass | 96,8 | 118,3 |
| 7 Husk dette | 118,3 | 131,1 |
| Sluttkort | 131,1 | 135,1 |

## Innbygging (gjøres av nettsideagenten)

Samme oppsett som `VeimerkingVideo.tsx`: lazy iframe i en boks med `aspect-[4/5.9] sm:aspect-[16/10.4]`, og fortellerteksten under filmen.

```tsx
<iframe
    src="/video/vikeplikt/index.html"
    title="Vikeplikt – hvem kjører først? Animasjon med fortellerstemme"
    loading="lazy"
    allow="autoplay; fullscreen"
/>
```

- Bildetekst, forslag: «Animasjon: slik finner du ut hvem som har vikeplikt (2:15, med lyd). Velg kapittel nederst i spilleren.»
- Teksten under filmen: `fortellertekst.txt`, ett avsnitt per kapittel.
- Spilleren viser et stillbilde med avspillingsknapp til den startes. Ingen autoavspilling.

## Kontroller

- Avspilleren er åpnet i Chromium i to rammestørrelser (1000×700 og 400×640): ingen skriptfeil, riktig format (16:9 og 4:5) og riktig antall kapitler.
- Lengden på lyden er lik filmens tidsplan (135,1 s).
- `bundle.js` og `fortelling.mp3` er identiske med den godkjente forhåndsvisningen.
- Bakkekontroll (personer og kjøretøy verken flyter, står under bakken eller kolliderer): 0 avvik.
- Fortellerteksten er hentet fra det godkjente manuset (LES-blokkene), uendret.

## Gjenstår

- Ikke testet på fysisk mobil.
- Ikke bygd inn i artikkelen ennå.
- MP4 er ikke laget. Kan lages fra kildene ved behov.
- Ikke committet eller pushet.

## Kilder

`video-src/vikeplikt/`: `scene.js`, `information.js`, `style.js`, `prepare.py`, `timing.json`, modeller og skilt. Bygg med `node build.cjs` (lager `bundle.js`).
