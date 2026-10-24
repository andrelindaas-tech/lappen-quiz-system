# Leveranse: Stopplengde – reaksjonslengde og bremselengde

Laget 24. oktober 2026. Andre godkjente piloten (kapittel 2), lyden og filmen etter to QA-runder.

## Tidsplan (sekunder)

Filmen er 2:14 (134,4 s), sju kapitler med fortellerstemme (Mia, ElevenLabs, Eleven v4).

| Kapittel | Start | Slutt |
|---|---|---|
| 1 Tre deler av stoppet | 0,0 | 15,9 |
| 2 Reaksjonslengde | 15,9 | 37,5 |
| 3 Dobbel reaksjonstid | 37,5 | 52,8 |
| 4 Slik regner du bremselengden | 52,8 | 75,6 |
| 5 Dobbel fart | 75,6 | 102,0 |
| 6 Stopplengde | 102,0 | 118,7 |
| 7 Husk dette | 118,7 | 130,4 |
| Sluttkort | 130,4 | 134,4 |

Talen er uendret. Ekstra stillhet er lagt inn bare i eksisterende pauser:

- Kap. 1: 1 s etter «så bremser du», så bilen rekker å stoppe før neste setning.
- Kap. 5: 1,5 s før «Er bremselengden oppgitt».
- Kap. 6: 3 s hale etter siste setning.

Setningsstartene er målt med `ffmpeg silencedetect` (-38 dB / 0,2 s) og ligger i `prepare.py`. `python -I prepare.py` lager WAV fra MP3-ene i `lyd/mp3/`, `fortelling.wav`, `fortelling.mp3` og `timing.json`. `--anslag` gir en anslått tidsplan uten lyd (bare til utvikling).

## Hva som er gjort

- **Fysikk** (`film.js`, `motion`): konstant fart i reaksjonstiden, så jevn retardasjon a = v² / (2 · bremselengde). Eksakte verdier i regningen (40 / 3,6 = 11,111 m/s), avrunding bare i det som vises. Fronten står på streken når faren oppdages, og alle lengder måles fra fronten. Bremselysene tennes når reaksjonstiden er over. Stripene og stolpene vokser med fronten og blir liggende.
- **Kapitlene:**
  1. Ballen triller ut, streken tennes, turkis under reaksjonen, oransje under bremsingen, klammen «Stopplengde» til slutt.
  2. Klokken teller 0,0–1,0 s mens stripen vokser til 11,1 m. Bilen kjører to ganger: under «Mens du reagerer … samme fart», og under siste setning, så stripen er 11,1 m når «11 meter» sies. Notisarket følger talen. Bremsingen tones ut.
  3. To biler i samme fart, 1 og 2 s reaksjonstid. Klokkene teller i etikettene foran stolpene. Bare reaksjonslengdene vises.
  4. Huskeregelen i notisarket mens den forklares. Bilen bremser fra streken (som i manuset), først mens regelen forklares og så slik at stripen når 8 m når «8 meter» sies. Dette avviker fra storyboardet (der hadde bilen også reaksjonslengde), og er godkjent av Andre.
  5. 40 og 80 km/t bremser fra samme strek, 8 og 32 m. Notisarket viser 8 × 8 og forholdsmetoden.
  6. Begge kjører hele stoppet. Ballen ligger ved 30 m mellom feltene. 19,1 og 54,2 m.
  7. Oppsummeringstabellen og sluttkortet «Regn ut din egen stopplengde på teori-test.no».
- **Skjermtekst** (`information.js`): ett poeng per setning, maks to linjer.
- **Kamera:** fast innenfor hver sammenligning, myk overgang mellom kapitlene. Bredformat har bredere utsnitt, notisarket nede til høyre og oppsummeringskortet ved siden av stolpene.
- **Nettversjon** i `public/video/stopplengde/`: `index.html`, `player.js`, `bundle.js`, `fortelling.mp3` (mono 64 kbit/s), `fortellertekst.txt`, `poster.webp`, `poster-mobil.webp`, `THREE-LICENSE.txt`.

## Kontroller

- Sluttposisjoner logget mot tallene: 19,111 / 8 / 32 / 54,222 m (og 30,222 m for 2 s reaksjon pluss brems, som ikke vises). Farten er 0 i enden.
- Stripene på vegen og stolpene under vegen slutter ved fronten hver 0,02 s når bilen er synlig. Ingen bil ruller bakover.
- Bremselysene er av rett før og på rett etter reaksjonstiden, for alle kombinasjonene.
- Ingen tekst utenfor kanten i mobil eller bredformat.
- Avspilleren er testet ved 360, 390 og 1280 px: ingen vannrett rulling, og spill, pause, hopp og kapittelvelger virker.
- To QA-runder med en egen agent på kontaktark (ett bilde i sekundet, begge formater).

## Funn fra siste QA-runde

Rettet: notisarket og oppsummeringskortet dekket grafikk i bredformat, klokken lå på biltaket i kap. 2, bilene overlappet i kap. 3, og den stiplede 30 m-linjen sto igjen i kap. 7.

Bevisst ikke endret:

- «40 ÷ 3,6 = 11,1 m/s» i notisarket (som i instruksen), «≈» i infofeltet.
- Vegen er tom i første setning av kap. 1, 3 og 5. I riktig fart er bilen bare i bildet ca. 1 s før streken.
- Ballen ligger mellom feltene i kap. 6, uten kollisjon.

## Hva som gjenstår

- Ikke testet på fysisk mobil.
- MP4 er ikke laget. Det lages bare hvis Andre sier ja.
- Ingen push og ingen deploy.
