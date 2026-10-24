# Leveranse: Rundkjøring – vikeplikt, feltvalg og blinklys

Laget 24. oktober 2026. Andre ba om at alt ble gjort i ett strekk uten kontrollpunkt A og B, og at han ser over til slutt.

## Tidsplan (sekunder)

Filmen er 2:29 (149,9 s), seks kapitler med fortellerstemme (Mia, ElevenLabs).

| Kapittel | Start | Slutt |
|---|---|---|
| 1 Inn: vikeplikt | 0,0 | 34,6 |
| 2 Inn: felt og plassering | 34,6 | 69,3 |
| 3 Blinklys inn og ut | 69,3 | 95,6 |
| 4 Inne: feltskifte | 95,6 | 111,8 |
| 5 Ut: gangfelt | 111,8 | 130,5 |
| 6 Husk dette | 130,5 | 145,9 |
| Sluttkort | 145,9 | 149,9 |

Talen er uendret. Det er lagt inn ekstra stillhet bare i eksisterende pauser mellom setninger:

- Kap. 2: 2 s før «Har rundkjøringen to felt», der bildet bytter fra ett til to felt.
- Kap. 3: 2,5 s før «Skal du lenger rundt» og 2,5 s før «Å blinke til venstre», så bilen rekker å kjøre inn og rundt.
- Lengre hale etter kap. 4 (4,5 s, en runde til) og kap. 5 (3,5 s, bilen kjører når gangfeltet er fritt).

Setningsstartene er målt med `ffmpeg silencedetect` (-38 dB) og ligger i `prepare.py`. `python -I prepare.py` lager WAV fra MP3-ene i `lyd/mp3/`, `fortelling.wav`, `fortelling.mp3` og `timing.json`.

## Hva som er gjort

- **Animasjon** (`film.js`): hvert bilde er en ren funksjon av tiden (`chapterState(i, u, a)`). Bevegelsene starter og slutter i de godkjente nøkkelbildene. Gul ring på den som har vikeplikt, turkis pil på vegen for den som kjører først, stiplede ruter, blå bil fra sør.
  1. Oversikt med de tre fasene, førerhøyde med skilt 202 og vikelinje, rød bil fra venstre, tilnærming med lav fart og stopp for grå bil.
  2. Ett felt: til høyre i feltet og mot midten. To felt ovenfra: rutene tegnes etter tur, feltpilene markeres.
  3. Høyreblink til første utkjøring, høyreblink ved utkjøringen før (nord) på vei mot vest, venstreblink «frivillig».
  4. Blå bil i venstre felt, hvit bil ved siden av, ingen fletting, en runde til og feltskifte når det er ledig.
  5. Speil og blindsone, gangfelt, gående og syklist, blå bil venter og kjører når det er fritt.
  6. Kjøringen fra kap. 3 ovenfra med de tre fasene, så oppsummeringskortet og sluttkortet.
- **Skjermtekst** (`information.js`): én tekst per setning, maks to linjer, ingen tekst går utenfor kanten.
- **Nettversjon** i `public/video/rundkjoring/`: `index.html`, `player.js`, `bundle.js`, `fortelling.mp3` (mono 64 kbit/s), `fortellertekst.txt`, `poster.webp`, `poster-mobil.webp`, `THREE-LICENSE.txt`.
- **Avspillerne**: kapittelvelgeren får egen linje under 520 px bredde, så teksten ikke kuttes. Rettet i rundkjøring, forbikjøring, trafikkuhell og vikeplikt.
- **Artikkelen**: `rundkjoring` er lagt til i `src/data/forklaringsfilmer.ts`, og filmen ligger som egen seksjon rett etter «Kort forklart» i `theoryData.ts`. `lastUpdated` er 2026-10-24.
- **Build**: typesjekk, Vite, SSR og prerender gikk gjennom (351/351 sider).

## Kontroller

- `auditGround`: bakkekontakt for alle biler og personer hvert 0,5 s, 0 avvik.
- Overlapp med orienterte bokser: bil mot bil og person mot kjøretøy, 0 avvik.
- `auditCrosswalk`: ingen stillestående bil på et gangfelt.
- Tekstgrenser i mobil og bredformat: ingen tekst utenfor.
- Avspilleren er testet ved 360, 390 og 1280 px: ingen vannrett rulling, og spill, pause, hopp og kapittelvelger virker.
- To QA-runder med en egen agent på kontaktark, mot Andres tidligere tilbakemeldinger.

## Runde etter Andres gjennomgang

Andres tilbakemeldinger, rettet:

- **Bilene vrikket.** Banene var satt sammen av biter som ikke gikk jevnt over i hverandre, og kurven gjennom punktene skjøt over ved skjøtene. Nå går svingen inn og ut (radius 9 og 6 m) jevnt over i sirkelen, feltskiftet er en myk overgang mellom radiene, og hele banen glattes før den gjøres om til en kurve med punkter hver halve meter. Kontrollert for hele filmen: ingen svingninger i krumningen, bare hopp ved klipp.
- **Vikelinja lå oppå bilen.** Markeringene på vegen tegnes nå på bakken i 3D og havner under bilene.
- **Syklisten var ute på plenen.** Han sykler nå på sykkelvegen rundt rundkjøringen.
- **For få andre biler.** Kap. 6 har fått en rød bil som passerer foran den blå før den kjører inn, og en grå bil som venter i øst til den blå har passert.
- **Den blå ventet uten grunn i kap. 1.** Den røde er nå med fra oversikten og kjører rundt mens den blå nærmer seg. Den blå stopper ved vikelinja like før den røde kommer, står 2–3 s og kjører inn bak den.
- **Etikett 1 var borte i bredformat.** «1 Før du kjører inn» (kap. 1) og «Vik og velg felt» (kap. 6) står nå nærmere rundkjøringen i bredformat.

QA-runde 3 (egen agent), rettet:

- Kap. 5: bilen ventet skjevt foran gangfeltet. Den står nå rett.
- Kap. 4: en hvit bil kjører ved siden av den blå under «ikke fletting».
- Kap. 5: gående og syklist overlappet i bredformat. Syklisten kommer 1 s senere.
- Kap. 1 og 2: fronten sto over haitennene. Nå står bilen ved vikelinja uten å dekke haitennene, og bakenden er klar av gangfeltet.
- Kap. 5: kameraet er senket. Kap. 2: «Rett frem» flyttet så den ikke kuttes i bredformat.

## Funn fra QA-runde 2

Rettet etter runde 2:

- Kap. 4: kameraet følger blå bil når den hvite forlater rundkjøringen.
- Etiketter flyttet bort fra bilene. Ruten og feltmarkeringen ligger ikke lenger oppå bilen i kap. 2.
- Bredformat-kameraet i kap. 2 viser alle etikettene.
- Kap. 3 følger bilen ut mot vest.

Gjenstår, små:

- Sluttkortet: bildet bak fryser, og den grå bilen fra kap. 6 står da svakt synlig på gangfeltet i nord under kortet.

- Kap. 2: infofeltet er tomt et kort øyeblikk når teksten bytter. Det er en innfading på 0,25 s, som i de andre filmene.
- Kap. 3: kameraet bak bilen ved første utkjøring er tett. Gangfeltskiltet tar plass i bredformat i siste del.

## Hva som gjenstår

- Andre må høre gjennom uttalen. Agenten som lagde lyden, har ikke hørt den, og det har heller ikke videoagenten.
- Ikke testet på fysisk mobil.
- MP4 er ikke laget. Det lages bare hvis Andre sier ja.
- Ingen push og ingen deploy.
- Rydding i arbeidsmappen, fordi agenten ikke har slettetillatelse:
  - `vite.config.ts.timestamp-*.mjs` i rotmappen ble laget av et mislykket byggeforsøk og kan slettes.
  - `Claude outputs/rundkjoring-dist-for-skjermbilder.tgz` var bare til skjermbildene og kan slettes.
- MP3-filene og stillbildene får en C2PA-merking (Content Credentials) når de overføres til mappen. Selve lyden og bildet er uendret.
