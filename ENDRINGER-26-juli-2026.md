# Endringer 25.–26. juli 2026 — til gjennomgang

Alt er ukommittert. Ingenting er pushet.

Reell størrelse på batchen: **16 kildefiler og 214 bildefiler**. `git status` sier 284,
men 54 av dem har bare fått byttet linjeskift — se `KODEAGENT-SJEKKLISTE.md` punkt 0.

---

## Nye sider (5)

| URL | Hva det er | Hvorfor |
|---|---|---|
| `/laeringsressurser/teoriprove-gyldig-fravaer` | Artikkel: er teoriprøven gyldig fravær på videregående | «er teoriprøven gyldig fravær» er toppen av stigende søk, +450 %. Null dekning før. Regelen endret 1. august 2025 |
| `/trafikkskilt/blaa-skilt` | 82 blå skilt med bilde | Du rangerte 9.–21. plass på «blått skilt med rød strek» uten klikk, fordi siden Google viste var kategorikort |
| `/trafikkskilt/rode-skilt` | 46 røde skilt | Samme |
| `/trafikkskilt/trekantede-skilt` | 23 trekantede skilt | Samme |
| `/trafikkskilt/skiltnummer` | Alle 214 skilt sortert på nummer | «skilt 302» og «906 skilt» hadde 53 og 102 visninger uten treffside |

Sitemap går fra 309 til 310 URL-er (de fire skiltsidene lå allerede inne fra i går).

---

## Sider som er fjernet eller slått sammen

Tre spørsmålssider kolliderte med FAQ i eksisterende artikler. Fjernet fra
`questionPages.ts` og 301-et til artikkelen som eier spørsmålet:

- `/sporsmal/hvor-langt-fra-gangfelt-kan-du-parkere` → stans-og-parkering
- `/sporsmal/hva-betyr-blinkende-gult-lys` → trafikklys-signaler
- `/sporsmal/er-det-lov-a-kjore-forbi-pa-hoyre-side` → forbikjoring

Fire quiz-URL-er som Google hadde indeksert fordi ruta godtok hvilken som helst
kategori. Nå whitelistet, resten gir 404:

- `/quiz/fareskilt`, `/quiz/forbudsskilt`, `/quiz/underskilt` → `/quiz/skilt`
- `/quiz/fart_og_plassering` → `/quiz/fartsregler`

---

## Artikler som er endret

Sortert etter hvor mye som er rørt.

**trafikalt-grunnkurs** — prisseksjonen sa «et par tusenlapper», som var for lavt.
Nå: 3 880 og 4 500 kr hos to navngitte skoler, med tabell, dato og kilder. Nytt
tipsavsnitt om at mørkekjøringen ofte er den dyreste delen og faktureres separat.
To nye FAQ-spørsmål. Kildeliste lagt til — artikkelen hadde ingen.

**automatlappen** — kode B78, ny seksjon, kilder.

**veimerking** — duplisert forklaring av kombinert linje fjernet, fem nye SVG-er
lagt inn, tekst justert til illustrasjonene.

**bremselengde** — ny seksjon om 22 mot 24 meter, kilder.

**buss-fra-holdeplass** — tittel, hjemmel (trafikkreglene § 7 nr. 5) og kilder.

**promille** — «Kort forklart» flyttet øverst, AI-generert bilde byttet med SVG.

**forerstottesystemer** — endret innhold (21 linjer).

**teoriproven-bil** — én ny lenke til fraværsartikkelen, i avsnittet om oppmøte
på trafikkstasjonen.

**14 artikler til** har fått én til tre linjer hver — dette er de 27 interne
lenkene til skiltkategorier: forbikjoring, glatt-fore, skilt, forsikring-og-ansvar,
feltvalg-fletting-kollektivfelt, vanlige-feil-teoriproven, medisiner-og-bilkjoring,
trikk-og-vikeplikt, tips-eksamen, vikeplikt, trafikklys-signaler, motorvei-regler,
rundkjoring, kollektivfelt-og-elbil, myndighetspyramiden, stans-og-parkering.

---

## Komponenter og funksjonalitet

**QuizContainer.tsx** — tre ting. Whitelist av gyldige kategorier med 404 på resten.
Crawlbar tekstblokk på alle fire quizsider, lagt inn i både lastetilstanden og
sluttilstanden fordi prerenderingen fanger den første. Og lenkene er nå trimmet til
**maks to per quiz**, slik du ba om:

| Quiz | Lenke 1 | Lenke 2 |
|---|---|---|
| skilt | Skiltguiden | Slå opp skilt på nummer |
| vikeplikt | Vikeplikt – komplett guide | Vikepliktspillet |
| fartsregler | Fartsgrenser i Norge | Bremselengde og stopplengde |
| veimerking | Veimerking forklart med bilder | Veimerking-spillet |

Reaksjonstid-lenken er droppet fordi bremselengde-siden dekker det samme.
Vikepliktskilt-lenken er droppet til fordel for spillet, som holder 8m30s per
bruker i GA4 — det klart mest engasjerende innholdet du har.

**NesteSteg.tsx** (ny) — bro fra artikkel til quiz, vises på alle 55 artikler etter
minitesten. Bakgrunn: bare 31,9 % av Google-brukerne når `/quiz`, mot 52 % fra
ChatGPT. Sporer `article_bridge_click`.

**MinFremgang.tsx** — Fokusmodus-kortet er koblet til `getWrongAnswersCount()`, som
lå ubrukt i koden fra før.

**TrafficSignBank.tsx** — ny blokk «Husker du bare hvordan skiltet så ut?» med fire
pillelenker til farge- og nummersidene. Dette er en navigasjonsside, ikke en quiz, så
jeg har latt de fire stå — si fra hvis du vil ned til to her også.

**TrafficSignDetailPage.tsx** — `og:image` lagt til. 214 sider manglet det helt.

**textUtils.tsx + theory.css** — `.responsive-theory-table` hadde ingen CSS i det
hele tatt, til tross for at 35 tabeller brukte klassen. Tabellceller får nå
`data-label` automatisk, og under 700 px stables radene.

---

## Bilder og filer

- **214 skiltbilder** komprimert i original filsti: 64,3 MB → 5,0 MB
- **6 nye SVG-er** i `public/images/` — fem om veimerking, én om promille
- **`scripts/indexnow.mjs`** + nøkkelfil i `public/` + `npm run indexnow`
- **`src/data/trafficSignLooks.ts`** (ny) — farge- og formgrupper utledet fra
  skiltnummerserien
- **`src/components/traffic-signs/TrafficSignLookPage.tsx`** (ny)

---

## Det du bør se på selv

1. **De seks SVG-ene** i lyst og mørkt tema.
2. **Tabellene på mobil** — tre artikler holder.
3. **Prisene i trafikalt grunnkurs** — jeg hentet dem fra to prislister 26. juli.
   Du kjenner bransjen bedre enn meg og ser fort om spennet virker representativt.
4. **Fraværsartikkelen** — særlig påstanden om at timene kan bli stående på
   vitnemålet selv om de forsvinner fra fraværsgrensen. Det er min lesning av Udirs
   tabell, ikke noe Udir sier rett ut om teoriprøven. Den er formulert med forbehold
   i artikkelen, men det er den setningen jeg er minst sikker på.
