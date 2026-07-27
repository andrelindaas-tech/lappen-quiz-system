# Sjekkliste før push — batch 25.–26. juli 2026

**Til kodeagenten: ikke push, ikke commit, ikke deploy.** André godkjenner selv når
listen under er gjennomgått. Rapporter resultatet av hvert punkt, og stopp ved første
feil i stedet for å prøve å reparere på egen hånd.

---

## 0. Linjeskift først — dette er den største fellen

`git status` viser 284 endrede filer. Det er feil bilde. **54 av dem har kun fått
byttet linjeskift** (CRLF mot LF), ikke noe reelt innhold. Repoet har verken
`.gitattributes` eller `core.autocrlf` satt, så ingenting normaliserer dette.

Committes de som de er, blir diffen uleselig og `git blame` ødelagt på hele kodebasen.

Slik ser du forskjellen:

```bash
git diff --stat                     # 284 filer — støy
git diff --stat --ignore-cr-at-eol  # 16 kildefiler + 214 bilder — det ekte
```

Slik finner og tilbakestiller du støyfilene:

```bash
git diff --name-only | while read f; do
  [ -z "$(git diff --ignore-cr-at-eol --numstat -- "$f")" ] && echo "$f"
done > /tmp/kun-crlf.txt

wc -l < /tmp/kun-crlf.txt          # skal vise 54
xargs git checkout -- < /tmp/kun-crlf.txt
```

Kjør `git diff --stat` på nytt etterpå. Da skal det stå 16 kildefiler pluss
bildefilene, ikke 284.

**Ikke** legg til `.gitattributes` eller kjør `git add --renormalize` i denne
omgangen. Det er en egen beslutning som ikke hører hjemme i en innholdsbatch.

---

## 1. Nye filer som MÅ committes — den viktigste enkeltsjekken

Dette er feilen som holdt nettstedet udeployet fra 20. til 26. juli. `App.tsx` ble
committet med importer til tre komponenter som aldri ble committet. Lokalt bygg var
grønt fordi filene lå på disk. Netlify feilet med `TS2307: Cannot find module`.

**`git commit -a` tar bare sporede filer.** Bruker du den, gjentar feilen seg med
dagens batch. Disse elleve filene er nye og må legges til eksplisitt:

```
src/components/NesteSteg.tsx                            ← importeres av TheoryTopic.tsx
src/components/traffic-signs/TrafficSignLookPage.tsx    ← importeres av App.tsx
src/data/trafficSignLooks.ts                            ← importeres av TrafficSignLookPage
scripts/indexnow.mjs                                    ← kalles fra package.json
public/99a356b0bcc6e8488ced5e26a483831a.txt             ← IndexNow-nøkkel
public/images/veimerking-sperrelinje.svg
public/images/veimerking-varsellinje.svg
public/images/veimerking-kombinert-linje.svg
public/images/veimerking-kjorefeltlinje-kantlinje.svg
public/images/veimerking-vikelinje-sperreomrade.svg
public/images/promille-infografikk.svg
```

Kjør denne før commit. Den lister untracked kode som sporede filer refererer til:

```bash
git ls-files -o --exclude-standard -- 'src/*' | grep -E '\.(ts|tsx)$' | while read -r f; do
  navn=$(basename "$f" | sed 's/\.[^.]*$//')
  treff=$(git grep -l -- "$navn" -- src 2>/dev/null)
  [ -n "$treff" ] && echo "ADVARSEL: $f er untracked, men refereres av: $treff"
done
```

Treff på `CarLightsDemo`, `Parking2DDemo`, `ParkingIsoDemo` eller `parking2DScenarios`
er falske positive — navnene står bare i en kommentar i `App.tsx`. Alt annet er ekte.

### Filer som IKKE skal committes

Andrés egne demoer. Rutene og importene deres er kommentert ut i `App.tsx` 26. juli
med en forklaring på hvordan de kobles inn igjen. **Filene skal ligge urørt på disk —
ikke slett dem.**

```
src/components/CarLightsDemo.tsx / .css
src/components/Parking2DDemo.tsx / .css
src/components/ParkingIsoDemo.tsx / .css
src/components/car3d/
src/data/parking2DScenarios.ts
.claude/
```

---

## 2. Kompilering og bygg

```bash
npx tsc --noEmit          # skal være stille
node scripts/generate-sitemap.js
npm run build
```

Sitemap skal ende på **310 URL-er**. Bygget må fullføre prerenderingen av alle 310
uten feil. Dette er det viktigste punktet i hele listen, fordi ruter, data og
komponenter er endret samtidig.

Merk: bygget kan ikke kjøres i et Linux-miljø mot dette `node_modules`, fordi det er
installert på Windows og mangler `@rollup/rollup-linux-x64-gnu`. Kjør på Andrés maskin.

---

## 3. Prerendering — sjekk at sidene faktisk har innhold

Grønt bygg betyr ikke at sidene har tekst. Prerenderingen fanger lastetilstanden, så
en side kan bygges feilfritt og likevel være tom for crawleren. Det var nettopp
problemet på `/quiz/skilt`, som lå på posisjon 7,7 med null tegn synlig tekst.

Sjekk at disse har reelt innhold i `dist/`, ikke bare en tom `<div id="root">`:

```
dist/quiz/skilt/index.html
dist/quiz/vikeplikt/index.html
dist/quiz/fartsregler/index.html
dist/quiz/veimerking/index.html
dist/trafikkskilt/blaa-skilt/index.html
dist/trafikkskilt/rode-skilt/index.html
dist/trafikkskilt/trekantede-skilt/index.html
dist/trafikkskilt/skiltnummer/index.html
dist/laeringsressurser/teoriprove-gyldig-fravaer/index.html
```

For hver: tell tegn synlig tekst og antall `<a href`. Alle skal ha begge deler.
Rapporter tallene, ikke bare «ok».

---

## 4. Ruter og omdirigeringer

Fire nye statiske ruter må ligge **før** den dynamiske `:categorySlug`-ruta i
`src/App.tsx`, ellers fanger den dynamiske dem først. Bekreft rekkefølgen.

Sju nye 301-er i `public/_redirects`. Bekreft at `netlify.toml` sin SPA-catch-all
(`/* → /index.html 200`) fortsatt ligger **etter** dem.

Sjekk at ukjente quiz-kategorier gir 404 og ikke en tom side. Whitelisten står i
`QuizContainer.tsx` som `GYLDIGE_QUIZ_KATEGORIER`. Test `/quiz/tulleord` lokalt.

---

## 5. Lenker og data

- Alle interne lenker i `theoryData.ts` skal peke på en `id` som finnes. Ingen døde.
- De fire quizene skal ha **nøyaktig to** lenker hver i `QUIZ_INFO`.
- Skiltbanken har fire pillelenker med hardkodede antall (82 blå, 46 røde,
  23 trekantede, 214 totalt). Disse er verifisert mot `trafficSigns.ts` 26. juli.
  Endres skiltdataene, må tallene oppdateres eller gjøres dynamiske.
- 214 skiltbilder er komprimert i original filsti. Åpne fem tilfeldige og se at de
  faktisk vises og er lesbare — filstørrelsen gikk fra 64,3 MB til 5,0 MB.

---

## 6. Se på det med øynene

Disse kan ikke verifiseres med kommandoer:

- **Tabeller på mobil.** 35 tabeller bruker `.responsive-theory-table`, som ikke
  hadde CSS i det hele tatt før nå. Under 700 px skal radene stables med
  ledetekst foran hver celle. Sjekk minst tre artikler.
- **De seks nye SVG-ene** i `public/images/` — fem om veimerking, én om promille.
  Sjekk i både lyst og mørkt tema. All tekst skal ligge innenfor bakgrunnsflaten.
- **Den nye artikkelen** `/laeringsressurser/teoriprove-gyldig-fravaer` — at
  kildelisten rendrer, at alle fire eksterne lenker virker, og at den dukker opp
  under «Om teoriprøven» på `/laeringsressurser`.

---

## 7. Etter at André har godkjent og pushet

Ikke gjør dette før deploy er ute:

1. Bekreft at `https://teori-test.no/99a356b0bcc6e8488ced5e26a483831a.txt` serveres
   som ren tekst, ikke som SPA-fallback.
2. `npm run indexnow`
3. Send inn sitemap på nytt i Search Console.
4. Noter baseline i et notat: klikk per uke, visninger, snittposisjon. Uten den er
   det umulig å skille effekten av denne batchen fra sesongoppgangen i august.
