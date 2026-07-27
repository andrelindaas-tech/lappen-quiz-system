# Oppdrag: rydd og stage batchen for push

**Ikke commit og ikke push før André sier fra.** Kjør stegene i rekkefølge, stopp ved
første avvik, og rapporter tallene — ikke bare «ok».

Bakgrunn: nettstedet har stått udeployet siden 20. juli. Årsaken var at `App.tsx` ble
committet med importer til tre komponenter som aldri ble committet, så Netlify feilet
med `TS2307`. Det er fikset lokalt. Nå skal batchen stages riktig slik at feilen ikke
gjentar seg med dagens nye filer.

---

## Steg 1 — slett to filer som blokkerer git

En tidligere økt la igjen disse og fikk ikke slettet dem. `index.lock` blokkerer alle
git-kommandoer.

```powershell
Remove-Item .git\index.lock, .git\skrivetest -Force -ErrorAction SilentlyContinue
```

Bekreft at `git status` svarer normalt etterpå.

---

## Steg 2 — rydd linjeskift-støyen

`git status` viser 284 endrede filer. 54 av dem har kun byttet linjeskift (CRLF/LF)
uten innholdsendring. Committes de, blir diffen uleselig og `git blame` ødelagt.

PowerShell:

```powershell
git diff --name-only | ForEach-Object {
  if (-not (git diff --ignore-cr-at-eol --numstat -- $_)) { $_ }
} | ForEach-Object { git checkout -- $_ }
```

Git bash:

```bash
git diff --name-only | while read -r f; do
  [ -z "$(git diff --ignore-cr-at-eol --numstat -- "$f")" ] && echo "$f"
done | xargs git checkout --
```

**Forventet:** nøyaktig 54 filer tilbakestilt. Etterpå skal `git diff --name-only | measure`
vise omtrent 230 — det er 16 kildefiler pluss 214 komprimerte skiltbilder.

**Kontroll:** bekreft at App.tsx-fiksen overlevde. Denne skal returnere 1:

```powershell
(Select-String -Path src\App.tsx -Pattern "MIDLERTIDIG FRAKOBLET").Count
```

---

## Steg 3 — legg til de nye filene eksplisitt

`git add -a` og `git commit -a` tar **kun sporede filer**. Disse elleve er nye. Blir de
glemt, feiler Netlify med samme `TS2307` som i dag.

```bash
git add src/components/NesteSteg.tsx \
        src/components/traffic-signs/TrafficSignLookPage.tsx \
        src/data/trafficSignLooks.ts \
        scripts/indexnow.mjs \
        public/99a356b0bcc6e8488ced5e26a483831a.txt \
        public/images/veimerking-sperrelinje.svg \
        public/images/veimerking-varsellinje.svg \
        public/images/veimerking-kombinert-linje.svg \
        public/images/veimerking-kjorefeltlinje-kantlinje.svg \
        public/images/veimerking-vikelinje-sperreomrade.svg \
        public/images/promille-infografikk.svg \
        KODEAGENT-SJEKKLISTE.md ENDRINGER-26-juli-2026.md KODEAGENT-STAGING.md
```

---

## Steg 4 — legg til endrede sporede filer

```bash
git add -u
```

`-u` tar bare filer git allerede sporer, så untrackede demofiler blir liggende utenfor.

---

## Steg 5 — kontroller at demoene IKKE er med

Andrés egne testfiler skal bli liggende lokalt. **Ikke slett dem, ikke stage dem.**

```bash
git status --short | grep -E "Parking|CarLights|car3d|parking2D"
```

Alle treff skal begynne med `??`. Begynner noe med `A`, fjern det:

```bash
git restore --staged <fil>
```

---

## Steg 6 — sjekk at ingen staget fil peker på untracked kode

Dette er sjekken som ville forhindret hele problemet.

```bash
git ls-files -o --exclude-standard -- 'src/*' | grep -E '\.(ts|tsx)$' | while read -r f; do
  navn=$(basename "$f" | sed 's/\.[^.]*$//')
  treff=$(git grep --cached -l -- "$navn" -- src 2>/dev/null)
  [ -n "$treff" ] && echo "ADVARSEL: $f er untracked, men refereres av: $treff"
done
```

Treff på `CarLightsDemo`, `Parking2DDemo`, `ParkingIsoDemo` eller `parking2DScenarios`
er falske positive — navnene står bare i en kommentar i `App.tsx`. **Alle andre treff
skal behandles som en ekte feil**: filen må enten stages eller referansen fjernes.

---

## Steg 7 — bygg lokalt

```bash
npx tsc --noEmit
npm run build
```

Begge må være grønne. Bygget skal prerendre **310 ruter, 0 failed**.

---

## Steg 8 — rapporter og stopp

Send André:

- antall filer tilbakestilt i steg 2 (forventet 54)
- `git diff --cached --stat` — siste linje med totaler
- resultatet av steg 5 og 6
- byggresultatet fra steg 7

**Ikke commit. Ikke push.** Vent på klarsignal.

Når han gir det, er dette commit-meldingen:

```
fix: koble fra uferdige demoruter som brøt Netlify-bygget siden 20. juli

App.tsx importerte ParkingIsoDemo, Parking2DDemo og CarLightsDemo, som aldri
ble committet. Lokalt bygg var grønt, Netlify feilet med TS2307. Rutene lå
ikke i sitemap og ingenting lenket til dem. Komponentfilene beholdes lokalt.

feat: ny artikkel om teoriprøve og gyldig fravær, fire skiltsider etter farge
og nummer, priser med kilder i trafikalt grunnkurs, crawlbar tekst på quizsider,
responsive tabeller, og 214 komprimerte skiltbilder (64,3 MB til 5,0 MB)
```

Etter push: følg `KODEAGENT-SJEKKLISTE.md` punkt 7 for IndexNow og sitemap.

---

## Steg 9 — rett linjeskift i én fil (funnet under gjennomgang av steg 8)

Steg 2 fjernet de 54 filene som *bare* hadde linjeskift-endringer. Men én fil har
**både** ekte endringer og full CRLF-til-LF-konvertering, så den slapp gjennom filteret.

`src/data/trafficSigns.ts` — 9 292 linjer støy rundt 157 ekte endringer. HEAD har
filen som CRLF, arbeidskopien er LF. Til sammenligning er `theoryData.ts` LF både
før og nå, så det er kun denne ene filen som er snudd.

**Ikke bruk PowerShell med backtick-escaping her.** Backtick er PowerShells escape-tegn
og markdowns kodemarkør samtidig, så `"\`r\`n"` blir ødelagt ved kopiering og
erstatningen gjør ingenting. Det skjedde ved første forsøk 26. juli.

Bruk Node i stedet — det er garantert installert i dette prosjektet, og kommandoen
inneholder ingen tegn som kolliderer med noe skall:

```bash
node -e "const f='src/data/trafficSigns.ts',fs=require('fs');fs.writeFileSync(f,fs.readFileSync(f,'utf8').replace(/\r\n/g,'\n').replace(/\n/g,'\r\n'))"
git add src/data/trafficSigns.ts
```

Første `replace` samler alt til LF, andre gjør alt til CRLF. Rekkefølgen hindrer
doble linjeskift dersom filen allerede er blandet.

### Kontroll — rå diff og ignore-cr-diff skal nå være omtrent like

Dette er den egentlige testen, og den er bedre enn absolutte tall: når linjeskiftene
stemmer med HEAD, forsvinner forskjellen mellom de to målingene.

```bash
git diff --cached --shortstat
git diff --cached --shortstat --ignore-cr-at-eol
```

| | Nå | Skal bli |
|---|---|---|
| Rå | 6 517 inn / 5 135 ut | omtrent 1 871 / 489 |
| Med `--ignore-cr-at-eol` | 1 870 inn / 488 ut | uendret, 1 870 / 488 |
| Antall filer | 244 | 244, uendret |

**Måler du bare med `--ignore-cr-at-eol`, tester du ingenting** — det flagget skjuler
nettopp det vi vil bekrefte er borte. Kjør begge og sammenlign.

Kontroller også at filen faktisk ble konvertert:

```bash
git show :src/data/trafficSigns.ts | file -
```

Svaret må inneholde `CRLF`. Gjør det ikke det, kjørte ikke konverteringen.

Blir filtallet noe annet enn 244, er noe kommet til eller falt ut — stopp og rapporter.

Linjeskift påvirker ikke kompilering, så `npm run build` trenger ikke kjøres på nytt.

Rapporter begge tallsettene og resultatet av `file`-sjekken, og stopp. **Fortsatt ingen
commit og ingen push** før André gir klarsignal. Commit-meldingen i steg 8 gjelder uendret.
