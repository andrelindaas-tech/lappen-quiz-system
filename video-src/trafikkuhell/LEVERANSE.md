# Leveranse: Trafikkuhell – sikre, varsle, hjelpe

Godkjent av Andre 21. oktober 2026. Nettversjon laget 21. oktober 2026.

## Hva

- Forklaringsfilm, 1:46, 6 kapitler, med fortellerstemme.
- Artikkel: /laeringsressurser/trafikkuhell-forstehjelp/
- Mobil (1080×1350, 4:5) og bredformat (1920×1080, 16:9) i samme spiller.

## Filer i `public/video/trafikkuhell/` (til sammen 3,6 MB)

| Fil | Størrelse | Innhold |
|---|---|---|
| `THREE-LICENSE.txt` | 1 kB | lisens for Three.js (MIT) |
| `bundle.js` | 2,5 MB | animasjonen (Three.js, modeller, skilt og skrift bakt inn) |
| `fortellertekst.txt` | 1 kB | talen som tekst, ett avsnitt per kapittel (til teksten under filmen) |
| `fortelling.mp3` | 851 kB | fortellerstemmen (Mia, ElevenLabs), mono 64 kbit/s |
| `index.html` | 2 kB | avspilleren (lazy iframe-mål) |
| `player.js` | 3 kB | lydklokken styrer bildet; velger mobil (4:5) under 600 px bredde, ellers 16:9 |
| `poster-mobil.webp` | 106 kB | stillbilde 1080×1350 |
| `poster.webp` | 139 kB | stillbilde 1920×1080 (til forsiden eller deling) |

## Tidsplan (sekunder)

| Kapittel | Start | Slutt |
|---|---|---|
| 1 Stans | 0,0 | 18,5 |
| 2 Sikre deg selv | 18,5 | 30,2 |
| 3 Sikre stedet | 30,2 | 57,3 |
| 4 Varsle | 57,3 | 69,2 |
| 5 Hjelp | 69,2 | 89,4 |
| 6 Bli på stedet | 89,4 | 102,3 |
| Sluttkort | 102,3 | 106,3 |

## Innbygging (gjøres av nettsideagenten)

Samme oppsett som `VeimerkingVideo.tsx`: lazy iframe i en boks med `aspect-[4/5.9] sm:aspect-[16/10.4]`, og fortellerteksten under filmen.

```tsx
<iframe
    src="/video/trafikkuhell/index.html"
    title="Trafikkuhell – sikre, varsle, hjelpe. Animasjon med fortellerstemme"
    loading="lazy"
    allow="autoplay; fullscreen"
/>
```

- Bildetekst, forslag: «Animasjon: dette gjør du ved et trafikkuhell (1:46, med lyd). Velg kapittel nederst i spilleren.»
- Teksten under filmen: `fortellertekst.txt`, ett avsnitt per kapittel.
- Spilleren viser et stillbilde med avspillingsknapp til den startes. Ingen autoavspilling.

## Kontroller

- Avspilleren er åpnet i Chromium i to rammestørrelser (1000×700 og 400×640): ingen skriptfeil, riktig format (16:9 og 4:5) og riktig antall kapitler.
- Lengden på lyden er lik filmens tidsplan (106,3 s).
- `bundle.js` og `fortelling.mp3` er identiske med den godkjente forhåndsvisningen.
- Bakkekontroll (personer og kjøretøy verken flyter, står under bakken eller kolliderer): 0 avvik.
- Fortellerteksten er hentet fra det godkjente manuset (LES-blokkene), uendret.

## Gjenstår

- Ikke testet på fysisk mobil.
- Ikke bygd inn i artikkelen ennå.
- MP4 er ikke laget. Kan lages fra kildene ved behov.
- Ikke committet eller pushet.

## Kilder

`video-src/trafikkuhell/`: `scene.js`, `information.js`, `style.js`, `prepare.py`, `timing.json`, modeller og skilt. Bygg med `node build.cjs` (lager `bundle.js`).
