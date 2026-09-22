import type { TheoryTopic } from './theoryData'

const tableStyle = 'width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;'
const headerStyle = 'background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);'
const rowStyle = 'border-bottom: 1px solid var(--color-border);'
const cellStyle = 'padding: 12px 8px;'

export const vikepliktTopic: TheoryTopic = {
    id: 'vikeplikt',
    title: 'Vikeplikt – slik finner du hvem som skal kjøre først',
    shortDescription: 'Her lærer du en enkel metode for å finne hvem som skal kjøre først – i kryss, rundkjøringer, gangfelt og utkjøringer.',
    icon: '/signs/vikeplikt-og-forkjorsskilt/skilt-202-vikeplikt.jpg',
    color: 'var(--apple-blue)',
    seoTitle: 'Vikeplikt i trafikken – høyreregelen, rundkjøring og gangfelt | Teori-test.no',
    seoDescription: 'Lær vikepliktreglene til teoriprøven: høyreregelen, vikeplikt i rundkjøring, gangfelt og fotgjengere – med eksempelspørsmål og forklaringer.',
    author: 'Teori-test.no-redaksjonen',
    reviewedAgainst: 'Trafikkreglene og Statens vegvesens veiledning',
    publishedDate: '2026-02-21',
    lastUpdated: '2026-08-23',
    heroImage: {
        src: '/images/vikeplikt/vikeplikt-t-kryss-vikepliktskilt.webp',
        alt: 'T-kryss med vikepliktskilt og biler på den kryssende veien',
        caption: 'Her er vikeplikten skiltet tydelig: Du må sette ned farten og slippe fram trafikken på veien du skal kjøre inn på.'
    },
    sections: [
        {
            title: 'Kort forklart',
            type: 'info',
            content: `Vikeplikt betyr at du skal la en annen trafikant passere først. Du må vise det tydelig ved å sette ned farten i god tid eller stanse når det er nødvendig, slik at den andre ikke blir hindret eller forstyrret.

Når du skal finne ut hvem som har vikeplikt, finner du som regel svaret ett av fire steder: i **trafikklyset**, i **skilt eller oppmerking**, i **høyreregelen** eller i en **særregel**.

Med særregler mener vi regler som gjelder fordi en trafikant gjør noe bestemt. Det kan være at noen svinger, skifter felt, rygger eller kjører ut fra en parkeringsplass.

De fire gruppene er ikke rangert. Hvis for eksempel politiet, trafikklyset og skiltene gir forskjellige beskjeder, bruker du myndighetspyramiden for å finne ut hva du skal følge først. Deretter ser du på hva trafikantene skal gjøre. Høyreregelen blir først aktuell dersom ingen annen regel avgjør situasjonen.

På teoriprøven kan en oppgave se vanskelig ut fordi du møter flere biler, skilt og trafikanter på samme bilde. Løsningen er å ta én ting om gangen. I denne guiden lærer du en fast måte å lese situasjonen på, slik at du kan bruke reglene i kryss, rundkjøringer, gangfelt og utkjøringer.

[Start vikepliktquizen med situasjonsoppgaver og forklaringer →](/quiz/vikeplikt)`,
            component: 'VikepliktSituasjonerIllustrasjon'
        },
        {
            title: 'Hva skal du følge når du får flere beskjeder?',
            type: 'pyramid',
            content: `Se for deg at du kommer til et kryss med både trafikklys og vikepliktskilt. Samtidig står en politibetjent i krysset og dirigerer trafikken. Hvem skal du følge?

I slike situasjoner kan du bruke **myndighetspyramiden**. Den viser hvilke beskjeder som gjelder foran andre:

1. Beskjed fra politiet eller andre som har myndighet til å dirigere trafikken
2. Trafikklys
3. Trafikkskilt og veioppmerking
4. De alminnelige trafikkreglene

I trafikkreglene brukes fagordet **anvisning** om slike beskjeder. Trafikkreglene § 3 sier at en beskjed fra politiet eller en annen person med myndighet gjelder foran andre beskjeder. Trafikklys, skilt og oppmerking gjelder igjen foran de vanlige trafikkreglene. Så lenge et trafikklys er i drift, gjelder det også foran et vikepliktskilt.

Myndighetspyramiden forteller hva du skal følge når beskjedene ikke sier det samme. Men den løser ikke alltid hele situasjonen. Selv om du får grønt lys, må du fortsatt se på hvor du skal kjøre og hvem du krysser veien til.

[Les hele forklaringen av myndighetspyramiden](/laeringsressurser/myndighetspyramiden).`
        },
        {
            title: 'Hva betyr en grønn pil i trafikklyset?',
            type: 'text',
            content: `Et vanlig grønt lys og en grønn pil betyr ikke helt det samme.

Et vanlig grønt lys gir deg lov til å passere signalet dersom veien er fri. Skal du svinge, kan du likevel måtte vike for andre trafikanter som fortsetter rett fram og krysser veien du svinger inn på.

En grønn pil gjelder bare i retningen pilen peker. Når pilen lyser, skal andre trafikanter som krysser veien din, ha rødt lys. Derfor kalles dette **konfliktfri kjøring**. Du må likevel kontrollere at veien er fri og kjøre forsiktig.`,
            image: {
                src: '/images/vikeplikt/gronn-pil-trafikklys.svg',
                alt: 'Trafikklys med rødt hovedsignal og en separat grønn pil mot høyre',
                caption: 'Den grønne pilen gjelder bare for kjøring i retningen pilen viser. Her kan føreren svinge til høyre selv om hovedsignalet er rødt.'
            }
        },
        {
            title: 'Vanlig grønt lys og grønn pil',
            type: 'table',
            content: `<div class="responsive-theory-table-wrapper"><table class="responsive-theory-table" style="${tableStyle}"><thead><tr style="${headerStyle}"><th style="${cellStyle}">Signal</th><th style="${cellStyle}">Hva betyr det?</th><th style="${cellStyle}">Hva må du passe på?</th></tr></thead><tbody><tr style="${rowStyle}"><td style="${cellStyle}"><strong>Vanlig grønt lys</strong></td><td style="${cellStyle}">Du kan passere signalet dersom veien er fri.</td><td style="${cellStyle}">Ved svinging kan du fortsatt måtte vike for andre trafikanter.</td></tr><tr><td style="${cellStyle}"><strong>Grønn pil</strong></td><td style="${cellStyle}">Du kan kjøre i pilens retning, som skal være konfliktfritt regulert.</td><td style="${cellStyle}">Kontroller likevel at veien er fri og kjør oppmerksomt.</td></tr></tbody></table></div>`
        },
        {
            title: 'Data fra teoritesten: Over halvparten svarte feil om grønn pil',
            type: 'info',
            content: `I ett av våre kvalitetssikrede spørsmål om grønn pil var **135 av 244 førstesvar feil – 55,3 prosent**. Til sammenligning var feilandelen 25 prosent i gjennomsnitt for de 70 vikepliktsspørsmålene vi analyserte.

Den vanligste feilen var å tro at høyresvingende biler kan få grønn pil samtidig som kryssende fotgjengere har grønt. **76 av 244 brukere – 31,1 prosent – valgte dette alternativet.** Det utgjorde 56,3 prosent av alle feilsvarene på spørsmålet.

**Husk dette:** En grønn pil gjelder bare i retningen pilen viser. Når pilen lyser grønt, skal trafikanter som krysser kjøreretningen din ikke få grønt samtidig. Du må likevel se at veien er fri og kjøre oppmerksomt.

*Tallene er hentet fra teori-test.no i perioden 15. mai–19. august 2026 og bygger på første registrerte svar per anonym nettleser-ID. Gjentatte forsøk er ikke tatt med.*`
        },
        {
            title: 'Slik løser du en vikepliktsoppgave steg for steg',
            type: 'text',
            content: `Det er lett å se rett på bilene og spørre: «Hvem kommer fra høyre?» Vent litt med det. Høyreregelen er bare én av flere regler, og ofte er situasjonen allerede avgjort av politiet, et trafikklys, et skilt eller det en av trafikantene skal gjøre.

Bruk de fem spørsmålene under som en fast sjekkliste. Dette er en pedagogisk metode fra teori-test.no, ikke en egen regel i trafikkreglene. De tre første spørsmålene hjelper deg med å finne ut hvilken beskjed du skal følge. De to siste hjelper deg med å velge riktig vikepliktsregel.

### 1. Dirigerer politiet trafikken?
Hvis politiet eller en annen person med myndighet dirigerer trafikken, følger du denne beskjeden. Den gjelder selv om trafikklyset eller skiltene viser noe annet.

### 2. Er det trafikklys?
Hvis ingen dirigerer trafikken, ser du etter trafikklys. Følg lyset som gjelder for kjørefeltet ditt. Et trafikklys som er i drift, gjelder foran et vikepliktskilt. Blinker lyset gult eller er det slukket, må du i stedet lese skiltene og bruke de vanlige vikepliktsreglene.

### 3. Finnes det skilt eller oppmerking?
Deretter ser du etter vikepliktskilt, stoppskilt, forkjørsveg, vikelinje eller stopplinje. Skilt og oppmerking forteller ofte direkte hvem som skal vente. Møter du et vikepliktskilt, kan du altså ikke bruke høyreregelen som grunn til å kjøre først.

[Se hvordan vikelinje, stopplinje og annen veioppmerking brukes på teoriprøven](/laeringsressurser/veimerking).

### 4. Hva skal hver trafikant gjøre?
Nå ser du på hva hver trafikant skal gjøre. Skal noen svinge til venstre, skifte felt, rygge eller kjøre ut fra en parkeringsplass? Slike handlinger har egne regler. Det samme gjelder når du svinger og krysser veien til gående eller syklende. Derfor betyr ikke grønt lys at du kan svinge uten å se deg for.

[Se hvordan vikeplikten gjelder ved rygging og vending](/laeringsressurser/rygging-og-vending/).

[Les forskjellen på feltskifte, fletting og vikeplikt](/laeringsressurser/feltvalg-fletting-kollektivfelt).

### 5. Gjelder høyreregelen?
Bruk høyreregelen først når ingen av punktene over avgjør situasjonen. Da har du vikeplikt for kjøretøy som kommer fra høyre. Dette kan også gjelde i et umerket T-kryss. Det spiller ingen rolle hvilken vei som ser størst ut, eller at du selv skal rett fram.

**Kort huskeregel:** Se etter politi, lys, skilt og handling – og deretter høyre.`
        },
        {
            title: 'Høyreregelen: Når har du vikeplikt fra høyre?',
            type: 'text',
            content: `Høyreregelen betyr at du har vikeplikt for kjøretøy som kommer fra høyre. Den brukes i kryss der verken politi, trafikklys, skilt, oppmerking eller andre regler avgjør hvem som skal kjøre først.

Regelen kan også gjelde i et T-kryss. Det spiller ingen rolle om veien din ser større ut, eller om du selv skal rett fram. Se derfor alltid etter trafikk fra høyre før du kjører inn i et uregulert kryss.`,
            image: {
                src: '/images/vikeplikt/hoyreregelen-vikeplikt-fra-hoyre.webp',
                alt: 'Uregulert kryss der en grønn bil har vikeplikt for en blå bil som kommer fra høyre',
                caption: 'I et uregulert kryss uten skilt eller trafikklys skal den grønne bilen vike for den blå bilen som kommer fra høyre.'
            }
        },
        {
            title: 'De vanligste vikepliktssituasjonene',
            type: 'table',
            content: `<p>Sjekklisten hjelper deg med å finne riktig regel. Tabellen gir deg hovedregelen i situasjoner som går igjen både på teoriprøven og i trafikken.</p><div class="responsive-theory-table-wrapper"><table class="responsive-theory-table" style="${tableStyle}"><thead><tr style="${headerStyle}"><th style="${cellStyle}">Situasjon</th><th style="${cellStyle}">Hvem skal vike?</th><th style="${cellStyle}">Det viktigste å se etter</th></tr></thead><tbody><tr style="${rowStyle}"><td style="${cellStyle}">Uregulert kryss</td><td style="${cellStyle}">Kjørende viker for kjøretøy fra høyre.</td><td style="${cellStyle}">Ingen lys, skilt eller særregel avgjør først.</td></tr><tr style="${rowStyle}"><td style="${cellStyle}">Venstresving</td><td style="${cellStyle}">Den som svinger til venstre, viker for møtende kjøretøy.</td><td style="${cellStyle}">Kjøreretning og konfliktpunkt.</td></tr><tr style="${rowStyle}"><td style="${cellStyle}">Vikepliktskilt</td><td style="${cellStyle}">Den som møter skilt 202, viker for kjørende i begge retninger på kryssende vei.</td><td style="${cellStyle}">Skilt og vikelinje.</td></tr><tr style="${rowStyle}"><td style="${cellStyle}">Stoppskilt</td><td style="${cellStyle}">Den som møter skilt 204, stanser helt og viker.</td><td style="${cellStyle}">Stopplinje eller riktig stansested.</td></tr><tr style="${rowStyle}"><td style="${cellStyle}">Inn i rundkjøring</td><td style="${cellStyle}">Den som kjører inn, viker normalt for trafikken som allerede er inne.</td><td style="${cellStyle}">Vikepliktskilt og vikelinje ved innkjøringen.</td></tr><tr style="${rowStyle}"><td style="${cellStyle}">Ut fra parkeringsplass, eiendom eller lignende</td><td style="${cellStyle}">Den som kjører ut, viker for annen trafikant.</td><td style="${cellStyle}">Om trafikanten kommer fra et område som utløser utkjøringsregelen.</td></tr><tr style="${rowStyle}"><td style="${cellStyle}">Feltskifte</td><td style="${cellStyle}">Den som skifter felt, viker for trafikken i feltet det skal kjøres inn i.</td><td style="${cellStyle}">Feltlinjer, speil og blindsone.</td></tr><tr style="${rowStyle}"><td style="${cellStyle}">Gangfelt uten lysregulering</td><td style="${cellStyle}">Kjørende viker for gående i gangfeltet eller på vei ut i det.</td><td style="${cellStyle}">Fotgjengerens plassering og bevegelse.</td></tr><tr style="${rowStyle}"><td style="${cellStyle}">Buss fra holdeplass, 60 km/t eller lavere</td><td style="${cellStyle}">Kjørende viker når bussføreren gir tegn om å kjøre ut.</td><td style="${cellStyle}">Fartsgrense, holdeplass og tegn.</td></tr><tr><td style="${cellStyle}">Trikk</td><td style="${cellStyle}">Andre trafikanter skal som hovedregel gi fri vei.</td><td style="${cellStyle}">Trafikklys og skilt kan gi trikken vikeplikt.</td></tr></tbody></table></div>`
        },
        {
            title: 'Vikeplikt, stopp og forkjørsveg er ikke det samme',
            type: 'signs',
            content: `Tre skilt går igjen i svært mange vikepliktsoppgaver. De hører til samme skiltgruppe, men krever forskjellige handlinger. Den enkleste måten å skille dem på er å spørre om du må stanse, hvem du skal vike for, og hvor lenge skiltet gjelder.

[Se alle vikeplikt- og forkjørsskiltene i skiltguiden](/trafikkskilt/vikeplikt-og-forkjorsskilt).`,
            signs: [
                {
                    name: 'Vikeplikt – skilt 202',
                    description: 'Du har vikeplikt for kjørende fra begge retninger på veien du skal inn på eller krysse. Senk farten tidlig. Du må stanse når det er nødvendig, men ikke alltid.',
                    imageUrl: '/signs/vikeplikt-og-forkjorsskilt/skilt-202-vikeplikt.jpg',
                    alt: 'Vikepliktskilt 202, trekant med rød kant og spissen ned',
                    href: '/trafikkskilt/vikeplikt-og-forkjorsskilt/vikeplikt'
                },
                {
                    name: 'Stopp – skilt 204',
                    description: 'Du skal alltid stanse helt før du vurderer om du kan kjøre videre. Stopp ved stopplinjen, eller så nær den kryssende veien som mulig dersom linjen mangler.',
                    imageUrl: '/signs/vikeplikt-og-forkjorsskilt/skilt-204-stopp.jpg',
                    alt: 'Stoppskilt 204, rødt åttekantet skilt med teksten STOPP',
                    href: '/trafikkskilt/vikeplikt-og-forkjorsskilt/stopp'
                },
                {
                    name: 'Forkjørsveg – skilt 206',
                    description: 'Trafikken fra sideveiene er pålagt vikeplikt. Forkjørsveien gjelder over en strekning, men du må fortsatt kjøre aktsomt og være forberedt på at andre kan gjøre feil.',
                    imageUrl: '/signs/vikeplikt-og-forkjorsskilt/skilt-206-forkjorsveg.jpg',
                    alt: 'Skilt 206 forkjørsveg, gul rute med hvit og svart kant',
                    href: '/trafikkskilt/vikeplikt-og-forkjorsskilt/forkjorsveg'
                }
            ],
            image: {
                src: '/images/vikeplikt/vikepliktskilt-i-norsk-kryss.webp',
                alt: 'Vikepliktskilt og vikelinje i et norsk veikryss med gangfelt',
                caption: 'Vikepliktskiltet og trekantene i veibanen gjør vikeplikten tydelig før krysset.'
            }
        },
        {
            title: 'Fire eksempler du bør kunne løse',
            type: 'text',
            content: `Reglene blir lettere å huske når du ser dem fra førerens plass. Bruk den samme tankegangen hver gang: Hva styrer trafikken her? Hva skal hver trafikant gjøre? Trenger vi til slutt høyreregelen?

### Eksempel 1: Umerket T-kryss
Du nærmer deg et T-kryss og skal rett fram. Veien din ser ut som den naturlige fortsettelsen, mens en annen bil kommer fra en mindre vei på høyre side. Det finnes verken trafikklys, skilt eller oppmerking, og ingen kommer fra en utkjøring. Da gjelder høyreregelen. Bilen kommer fra høyre, og derfor er det du som har vikeplikt.

### Eksempel 2: Grønt lys og vikepliktskilt
Så lenge signalanlegget er i drift, gjelder trafikklyset foran vikepliktskiltet. Du kan passere signalet på grønt. Skal du svinge, må du likevel vike for blant andre gående og syklende som skal rett fram der du krysser veien deres.

### Eksempel 3: Inn i rundkjøring
Ved innkjøringen møter du normalt både vikepliktskilt og vikelinje. Du skal derfor vente på trafikken som allerede er i rundkjøringen. Det er skiltingen – ikke en egen regel om å vike til venstre – som avgjør.

[Se den interaktive guiden til plassering, tegn og vikeplikt i rundkjøring](/laeringsressurser/rundkjoring).

### Eksempel 4: Ut fra en parkeringsplass
Utkjøringsregelen gjelder blant annet når du kommer fra en parkeringsplass, garasje, eiendom, bensinstasjon, gårdsvei eller et lignende område. Da har du vikeplikt for annen trafikant.

Du har også vikeplikt når du kjører inn på eller krysser en vei fra sykkelvei, gangvei eller fortau. Du må derfor slippe fram en syklist på gang- og sykkelveien du krysser, selv om syklisten kommer fra venstre.`
        },
        {
            title: 'Fotgjengere og syklister: Se både trafikant og sted',
            type: 'text',
            content: `Fotgjengere og syklister blir ofte behandlet som én gruppe i teorien, men vikeplikten er ikke alltid den samme. Du må se hvem trafikanten er, hvor personen befinner seg, og om du selv skal svinge eller krysse personens vei.

Ved et gangfelt uten politi eller trafikklys har du som kjørende vikeplikt for gående som er i gangfeltet eller på vei ut i det. En person som går av sykkelen og triller den over, regnes også som gående.

Sykler personen over gangfeltet, gir ikke gangfeltet den syklende samme prioritet som en gående. Det betyr likevel ikke at du kan holde farten dersom det er fare for sammenstøt. Plikten til å opptre hensynsfullt og unngå fare gjelder uansett hvem som formelt har vikeplikt.

Skal du svinge og krysse veien til gående, syklende eller førere av små elektriske motorvogner som fortsetter rett fram, er det du som har vikeplikt. Det samme gjelder når du svinger inn over et fortau.`
        },
        {
            title: 'Buss og trikk: To regler som ofte blandes',
            type: 'warning',
            content: `Buss og trikk er store, tunge kjøretøy som trenger plass, men reglene er ikke like.

Kjører du på en vei med fartsgrense 60 km/t eller lavere, har du vikeplikt når en buss gir tegn om at den skal forlate holdeplassen. Sett ned farten tidlig og gi bussføreren mulighet til å kjøre ut uten fare. [Les hele forklaringen om buss fra holdeplass](/laeringsressurser/buss-fra-holdeplass).

Når du møter en trikk, skal du som hovedregel gi fri vei og om nødvendig stanse. Men «trikken har alltid forkjørsrett» er en for enkel huskeregel. Trikken må også følge trafikklys og skilt, og kan selv ha vikeplikt når den for eksempel skal inn i en rundkjøring eller inn på en forkjørsvei. [Les mer om trikk og vikeplikt](/laeringsressurser/trikk-og-vikeplikt).`
        },
        {
            title: 'Dette viser de anonyme svarene våre',
            type: 'info',
            content: `At vikeplikt oppleves som krevende, ser vi også i våre egne quizer. Tallene kan ikke fortelle hvordan alle norske elever ville gjort det på den offisielle teoriprøven, men de viser at mange i vårt eget utvalg svarer feil på spørsmål innen dette temaet.

### Vikeplikt er vanskelig for mange
I vår kvalitetssikrede analyse av **18 418 første registrerte svar på 70 vikepliktsspørsmål** var **25,0 prosent av svarene feil**.

Tallene er samlet inn på teori-test.no fra 15. mai til 19. august 2026. Svarene behandles anonymt og brukes bare som samlet statistikk.

Statistikken bygger på første registrerte svar per anonym nettleser-ID og spørsmål. Gjentatte forsøk, feilmerkede spørsmål og spørsmål som ikke besto den faglige kontrollen, er ikke tatt med.

Vi bruker resultatene til å finne regler som trenger bedre forklaringer, bilder eller øvingsoppgaver. De hjelper oss også med å oppdage spørsmål som bør kvalitetssikres før svarene tolkes som en reell faglig misforståelse.`
        },
        {
            title: 'Vanlige misforståelser om vikeplikt',
            type: 'warning',
            content: `Vikepliktsoppgaver blir ofte vanskelige fordi en enkel huskeregel brukes i feil situasjon:

- **«Den bredeste veien har forkjørsrett.»** Veiens størrelse avgjør ikke vikeplikten.
- **«I et T-kryss må bilen fra sideveien alltid vike.»** I et uregulert T-kryss kan høyreregelen avgjøre.
- **«Blinklys gir meg rett til å kjøre.»** Blinklys forteller hva du planlegger, men gir deg ikke forkjørsrett.
- **«Grønt lys betyr at ingen andre kan ha prioritet.»** Du kan fortsatt ha vikeplikt når du svinger.
- **«Grønn pil kan vises samtidig som kryssende fotgjengere har grønt.»** Et grønt pilsignal skal bare brukes når kjøringen i pilens retning kan skje konfliktfritt.
- **«Vikepliktskilt betyr full stans.»** Du må stanse hvis det er nødvendig. Bare stoppskiltet krever full stans hver gang.
- **«Alle i et gangfelt regnes som gående.»** En som sykler over, regnes ikke som gående. Går personen av og triller, er personen gående.
- **«Jeg kan kjøre fordi den andre har vikeplikt.»** Du har fortsatt plikt til å opptre hensynsfullt og unngå fare.`
        },
        {
            title: 'Øv videre på vikeplikt',
            type: 'summary',
            content: `Du merker først om reglene sitter når du bruker dem i nye situasjoner. Ta minitesten nedenfor, eller gå videre til en av de større øvelsene:

- [Start hele vikepliktquizen med flere situasjoner og forklaringer →](/quiz/vikeplikt)
- [Prøv vikepliktspillet og tren visuelt steg for steg →](/laeringsspill/vikeplikt)`
        }
    ],
    faq: [
        {
            question: 'Hva betyr vikeplikt?',
            answer: 'Vikeplikt betyr at du ikke skal hindre eller forstyrre trafikanten du skal vike for. Du må redusere farten i god tid eller stanse hvis det er nødvendig, slik at det er tydelig at du slipper den andre fram.'
        },
        {
            question: 'Hva er høyreregelen?',
            answer: 'Høyreregelen betyr at du har vikeplikt for kjøretøy som kommer fra høyre når verken politi, trafikklys, skilt, oppmerking eller andre regler avgjør situasjonen. Den kan også gjelde i et uregulert T-kryss.'
        },
        {
            question: 'Må jeg alltid stoppe ved vikepliktskilt?',
            answer: 'Nei. Du må stanse hvis det er nødvendig for å overholde vikeplikten eller få tilstrekkelig oversikt. Ved stoppskilt må du derimot alltid stanse helt.'
        },
        {
            question: 'Hvem har vikeplikt i et T-kryss?',
            answer: 'I et T-kryss uten trafikklys, skilt, oppmerking eller andre regler som avgjør situasjonen, gjelder høyreregelen. Den som kjører rett frem på den gjennomgående veien har ikke automatisk forkjørsrett.'
        },
        {
            question: 'Har jeg vikeplikt når jeg kjører inn i en rundkjøring?',
            answer: 'Ved norske rundkjøringer møter du normalt vikepliktskilt og vikelinje før innkjøringen. Da har du vikeplikt for trafikken som allerede er i rundkjøringen.'
        },
        {
            question: 'Hva gjelder når lyset er grønt og det står et vikepliktskilt?',
            answer: 'Når signalanlegget er i drift, gjelder trafikklyset foran vikepliktskiltet. Skal du svinge, må du fortsatt overholde vikeplikt som følger av svingen.'
        },
        {
            question: 'Har biler vikeplikt for en syklist i gangfeltet?',
            answer: 'En som sykler over et gangfelt regnes ikke som gående og får ikke samme prioritet som en gående i gangfeltet. Hvis personen går av og triller sykkelen, regnes personen som gående. Alle må uansett opptre slik at fare unngås.'
        },
        {
            question: 'Er femtrinnsmetoden en offisiell regel?',
            answer: 'Nei. Femtrinnsmetoden er en pedagogisk sjekkliste laget av teori-test.no. Rekkefølgen mellom beskjeder fra politiet, trafikklys, skilt og trafikkregler følger trafikkreglene § 3. De siste trinnene hjelper deg med å finne hvilken vikepliktsregel som gjelder i situasjonen.'
        }
    ],
    miniQuiz: [
        {
            question: 'Du kommer til et uregulert kryss. En bil kommer fra høyre. Hva gjør du?',
            options: ['Jeg kjører først hvis min vei er bredest', 'Jeg viker for bilen fra høyre', 'Jeg kjører først hvis jeg skal rett frem'],
            correct: 'Jeg viker for bilen fra høyre',
            explanation: 'Når verken politi, trafikklys, skilt, oppmerking eller en regel knyttet til handlingen avgjør situasjonen, gjelder høyreregelen.'
        },
        {
            question: 'Trafikklyset viser grønt, og det står et vikepliktskilt på stolpen. Hva gjelder?',
            options: ['Vikepliktskiltet gjelder foran lyset', 'Trafikklyset gjelder foran vikepliktskiltet', 'Høyreregelen gjelder'],
            correct: 'Trafikklyset gjelder foran vikepliktskiltet',
            explanation: 'Trafikklyset gjelder foran vikepliktskiltet så lenge signalanlegget er i drift. Skal du svinge, kan du likevel ha vikeplikt som følger av svingen.'
        },
        {
            question: 'Du kjører ut fra en parkeringsplass. En syklist kommer fra venstre på gang- og sykkelveien du krysser. Hvem viker?',
            options: ['Syklisten, fordi syklisten kommer fra venstre', 'Du, fordi du kjører ut fra en parkeringsplass', 'Den som kommer sist til kryssingspunktet'],
            correct: 'Du, fordi du kjører ut fra en parkeringsplass',
            explanation: 'Regelen om utkjøring fra parkeringsplass avgjør situasjonen før høyreregelen blir aktuell.'
        },
        {
            question: 'Du møter et vikepliktskilt. Veien er fri, og du har god oversikt. Må du alltid stanse helt?',
            options: ['Ja, alle vikepliktskilt krever full stans', 'Nei, jeg stanser bare når det er nødvendig for å overholde vikeplikten eller få oversikt', 'Nei, vikepliktskiltet gjelder bare når det kommer trafikk fra høyre'],
            correct: 'Nei, jeg stanser bare når det er nødvendig for å overholde vikeplikten eller få oversikt',
            explanation: 'Du må sette ned farten og stanse når det er nødvendig. Ved stoppskilt må du derimot alltid stanse helt.'
        },
        {
            question: 'Du skal inn i en rundkjøring. Ved innkjøringen står det vikepliktskilt, og en bil kjører allerede i rundkjøringen. Hva gjør du?',
            options: ['Jeg viker for bilen som allerede er i rundkjøringen', 'Jeg kjører først fordi bilen kommer fra venstre', 'Den største bilen kjører først'],
            correct: 'Jeg viker for bilen som allerede er i rundkjøringen',
            explanation: 'Vikeplikten følger av skiltet og vikelinjen ved innkjøringen.'
        },
        {
            question: 'En person sykler over et gangfelt foran deg. Har personen samme prioritet som en gående i gangfeltet?',
            options: ['Ja, alle som bruker gangfeltet regnes som gående', 'Nei, en som sykler over regnes ikke som gående', 'Ja, men bare hvis syklisten kommer fra høyre'],
            correct: 'Nei, en som sykler over regnes ikke som gående',
            explanation: 'Går personen av og triller sykkelen, regnes personen som gående. Du må uansett senke farten og unngå fare.'
        },
        {
            question: 'Du kjører på en vei med fartsgrense 50 km/t. En buss gir tegn om at den skal forlate holdeplassen. Hva gjelder?',
            options: ['Jeg har vikeplikt for bussen', 'Bussen har alltid vikeplikt når den forlater en holdeplass', 'Jeg har bare vikeplikt hvis bussen kommer fra høyre'],
            correct: 'Jeg har vikeplikt for bussen',
            explanation: 'Regelen gjelder på vei med fartsgrense 60 km/t eller lavere når bussen gir tegn om å forlate holdeplassen. Bussføreren skal samtidig unngå fare.'
        },
        {
            question: 'En trikk skal kjøre inn i en rundkjøring og møter vikepliktskilt. Hvem har vikeplikt på vei inn?',
            options: ['Andre trafikanter har alltid vikeplikt for trikken', 'Trikken har vikeplikt når den kjører inn', 'Høyreregelen avgjør alltid'],
            correct: 'Trikken har vikeplikt når den kjører inn',
            explanation: 'Trikken må følge skiltingen. Hovedregelen om å gi trikken fri vei betyr ikke at trikken kan se bort fra trafikklys og skilt.'
        }
    ],
    closingNote: {
        title: 'Slik kvalitetssikrer vi innholdet',
        type: 'info',
        content: 'Artiklene på teori-test.no skrives og kontrolleres mot trafikkreglene, skiltforskriften og Statens vegvesens veiledning. Vi bruker anonyme svardata fra våre egne quizer til å finne hvilke regler som trenger bedre forklaring. Finner du en feil, retter vi den og oppdaterer datoen.'
    },
    sources: {
        title: 'Kilder og faglig grunnlag',
        type: 'text',
        content: `- [Trafikkreglene §§ 3, 7, 8, 9, 10 og 11 – Lovdata](https://lovdata.no/dokument/SF/forskrift/1986-03-21-747)
- [Skiltforskriften §§ 5 og 6 – Lovdata](https://lovdata.no/forskrift/2005-10-07-1219/%C2%A75)
- [Vikeplikt – Statens vegvesen](https://www.vegvesen.no/trafikkinformasjon/trafikksikkerhet/trafikkregler/vikeplikt/)
- [Vikeplikt for buss og trikk – Statens vegvesen](https://www.vegvesen.no/trafikkinformasjon/trafikksikkerhet/trafikkregler/vikeplikt/vikeplikt-og-trikk/)
- [Vikepliktsregler når du sykler – Statens vegvesen](https://www.vegvesen.no/trafikkinformasjon/trafikksikkerhet/trafikkregler/vikeplikt/vikeplikt-for-syklister/)
- [Håndbok N303 Trafikksignalanlegg – Statens vegvesen](https://www.vegvesen.no/globalassets/fag/handboker/hb-n303.pdf)`
    }
}
