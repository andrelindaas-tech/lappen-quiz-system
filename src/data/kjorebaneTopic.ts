import type { TheoryTopic } from './theoryData'

// Kjørebane, kjørefelt og veiskulder. Fagkontrollert mot trafikkreglene §§ 1, 4, 5, 7, 17 og 19
// og skiltforskriften § 23 nr. 3 (31.10.2026).
const fig = (src: string, alt: string, tekst: string) =>
    `![${alt}](/images/kjorebane/${src})\n*${tekst}*`

const td = 'style="padding: 12px 8px;"'
const tabell = (hode: string[], rader: string[][]) =>
    `<div class="responsive-theory-table-wrapper" style="margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);">${hode.map(h => `<th ${td}>${h}</th>`).join('')}</tr></thead><tbody>${rader.map((r, i) => `<tr${i < rader.length - 1 ? ' style="border-bottom: 1px solid var(--color-border);"' : ''}>${r.map(c => `<td ${td}>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`

export const kjorebaneTopic: TheoryTopic = {
    id: 'kjorebane-kjorefelt-veiskulder',
    title: 'Kjørebane, kjørefelt og veiskulder – se forskjellen',
    icon: '🛣️',
    shortDescription: 'Hva er forskjellen på kjørebane, kjørefelt og veiskulder? Se fire veier tegnet ovenfra, og lær hvorfor begrepene betyr noe for vikeplikt, parkering og plassering.',
    color: 'var(--apple-blue)',
    seoTitle: 'Kjørebane, kjørefelt og veiskulder – se forskjellen',
    seoDescription: 'En toveisvei har én kjørebane og to kjørefelt. Se fire veier tegnet ovenfra, forskjellen på veibane og kjørebane, og reglene der begrepene avgjør svaret.',
    author: 'Teori-test.no-redaksjonen',
    ogImage: '/images/kjorebane/00-oversikt.png',
    reviewedAgainst: 'Trafikkreglene §§ 1, 4, 5, 7, 17 og 19 og skiltforskriften § 23 (kontrollert 31.10.2026)',
    publishedDate: '2026-10-31',
    lastUpdated: '2026-10-31',
    sections: [
        {
            title: 'Kort svar',
            type: 'info',
            content: `- **Kjørebane** er den delen av veien som er laget for kjøring med kjøretøy. Den ligger mellom kantlinjene.
- **Kjørefelt** er et felt i kjørebanen med plass til én bilrekke. En vanlig toveisvei har ett felt i hver retning.
- **Veiskulder** er delen av veien utenfor kantlinjen. Den er ikke et kjørefelt.

En vanlig toveisvei har altså **én kjørebane og to kjørefelt**. Midtlinjen deler kjørebanen i to felt, men lager ikke to kjørebaner. Det gjør bare en fysisk midtdeler.`
        },
        {
            title: 'Slik ser det ut',
            type: 'text',
            content: fig('00-oversikt.svg', 'Toveisvei sett ovenfra med forklaring: kjørebanen ligger mellom de to hvite kantlinjene og har to kjørefelt, ett i hver retning, delt av gul midtlinje. Utenfor hver kantlinje ligger veiskulderen.', 'Kjørebanen ligger mellom kantlinjene. Midtlinjen deler den i to kjørefelt. Veiskulderen ligger utenfor kantlinjen.')
        },
        {
            title: 'Forskjellen i en tabell',
            type: 'table',
            content: tabell(['Begrep', 'Hva det er', 'Slik kjenner du det igjen'], [
                ['<strong>Kjørebane</strong>', 'Den delen av veien som er bestemt for kjøring med kjøretøy.', 'Området mellom kantlinjene. Kan ha ett eller flere kjørefelt og trafikk i én eller begge retninger.'],
                ['<strong>Kjørefelt</strong>', 'Et felt i kjørebanen, markert med oppmerking eller bredt nok for én bilrekke.', 'Plass til én rekke biler etter hverandre. Finnes også på vei uten midtlinje, hvis veien er bred nok.'],
                ['<strong>Veiskulder</strong>', 'Delen av veien utenfor kantlinjen.', 'Stripen utenfor den hvite kantlinjen. Kan være asfaltert, grus eller smal.'],
            ]) + '<p style="margin-top: 1rem;">Begrepene er definert i <a href="https://lovdata.no/dokument/SF/forskrift/1986-03-21-747#%C2%A71">trafikkreglene § 1</a>.</p>'
        },
        {
            title: 'Hva er kjørebane?',
            type: 'text',
            content: `Kjørebanen er området for vanlig kjøring. Den kan ha trafikk i én eller begge retninger, og den kan ha ett eller flere kjørefelt.

På en vanlig toveisvei ligger både ditt eget felt og feltet for møtende trafikk i samme kjørebane. Midtlinjen deler kjørebanen i kjørefelt, men den lager ikke to kjørebaner.

Veiskulder og fortau er andre deler av veien. De regnes ikke med når du skal telle kjørefelt.`
        },
        {
            title: 'Hva er kjørefelt?',
            type: 'text',
            content: `Et kjørefelt går langs kjørebanen og har plass til én bilrekke. Flere felt kan ligge ved siden av hverandre i samme retning, eller være fordelt på trafikk i hver sin retning.

Oppmerkingen gjør feltene lette å se. Men en vei uten midtlinje kan også ha to kjørefelt, hvis den er bred nok til to bilrekker. Se derfor både på oppmerkingen og bredden.

Å kjenne igjen et kjørefelt er noe annet enn å velge riktig felt. Reglene for det finner du i [feltvalg, fletting og kollektivfelt](/laeringsressurser/feltvalg-fletting-kollektivfelt).`
        },
        {
            title: 'Hva er veiskulder?',
            type: 'text',
            content: `Veiskulderen ligger utenfor kantlinjen. Den er en del av veien, men den er ikke et kjørefelt for bilen. Asfalt utenfor kantlinjen gjør ikke området til et ekstra felt du kan bruke for å komme forbi en kø.

Skulderen kan være bred eller smal, og ha asfalt eller grus. Den er ikke alltid trygg å kjøre ut på. Skiltet [farlig vegskulder](/trafikkskilt/fareskilt/farlig-vegskulder) varsler om dette.

Skulderen er viktig for andre trafikanter: syklende kan bruke høyre skulder, og gående skal bruke gangvei, fortau eller skulderen.`
        },
        {
            title: 'Fire veier som viser forskjellen',
            type: 'text',
            content: `### 1. Vanlig toveisvei med midtlinje

En vei med ett felt i hver retning, kantlinjer på begge sider og gul midtlinje. Ingen fysisk midtdeler.

Her har du **én kjørebane og to kjørefelt**. Kjørebanen går mellom kantlinjene, midtlinjen skiller feltene, og veiskuldrene ligger utenfor kantlinjene.

${fig('01-toveisvei.svg', 'Toveisvei sett ovenfra: én kjørebane mellom de hvite kantlinjene, to kjørefelt i hver sin retning skilt av gul midtlinje, og veiskulder på utsiden av hver kantlinje.', 'Den møtende bilen kjører i et annet kjørefelt enn deg, men i samme kjørebane.')}

### 2. Samme vei uten midtlinje

Vi fjerner midtlinjen, men lar bredden være den samme. Det er fortsatt plass til to bilrekker.

Veien har fremdeles **én kjørebane og to kjørefelt**. Feltene er vanskeligere å se, men plassen er der.

${fig('02-uten-midtlinje.svg', 'Den samme toveisveien uten midtlinje. Bredden er uendret, og det er fortsatt plass til én bilrekke i hver retning.', 'Uten midtlinje, men like bred: fortsatt to kjørefelt.')}

**Hva hvis veien er smalere?** En smal vei med plass til bare én bilrekke og møteplasser har ett kjørefelt som brukes av trafikk i begge retninger.

### 3. Fire felt uten fysisk midtdeler

To kjørefelt i hver retning. Kjøreretningene er skilt med gul sperrelinje, feltene i samme retning med hvit linje. Ingen fysisk midtdeler.

Her har veien **én kjørebane og fire kjørefelt**.

${fig('03-fire-felt-en-kjorebane.svg', 'Fire kjørefelt i én sammenhengende kjørebane: to felt i hver retning, skilt med dobbel gul sperrelinje mellom retningene og hvite stiplede linjer mellom feltene i samme retning.', 'Flere kjørefelt betyr ikke flere kjørebaner. Det er bare oppmerking mellom retningene.')}

### 4. To kjørebaner med fysisk midtdeler

Fortsatt to felt i hver retning, men nå er retningene skilt med en fysisk midtdeler med rekkverk.

Her har veien **to kjørebaner med to kjørefelt i hver**, altså fire kjørefelt til sammen. Midtdeleren og skuldrene telles ikke som felt. Kantlinjen mot midtdeleren er gul, fordi den markerer siden mot motgående trafikk.

${fig('04-to-kjorebaner.svg', 'To kjørebaner skilt av en fysisk midtdeler med rekkverk. Hver kjørebane har to felt i samme retning, gul kantlinje mot midtdeleren og hvit kantlinje på ytre side.', 'Først med fysisk midtdeler blir det to kjørebaner.')}`
        },
        {
            title: 'Oppsummert',
            type: 'table',
            content: tabell(['Vei', 'Kjørebaner', 'Kjørefelt'], [
                ['Toveisvei, ett felt i hver retning', '1', '2'],
                ['Samme vei uten midtlinje, like bred', '1', '2'],
                ['Smal vei med møteplasser', '1', '1'],
                ['To felt i hver retning, bare oppmerking mellom', '1', '4'],
                ['To felt i hver retning, fysisk midtdeler', '2', '4'],
            ])
        },
        {
            title: 'Veibane og kjørebane – er det det samme?',
            type: 'text',
            content: `Nei, ikke helt. Ordet **veibane** (vegbane) brukes i Statens vegvesens håndbøker og er videre enn kjørebane: det tar også med skulderen. Har veien asfaltert skulder, er veibanen derfor bredere enn kjørebanen.

I trafikkreglene og på teoriprøven er det **kjørebane**, **kjørefelt** og **vegskulder** du må kunne.`
        },
        {
            title: 'Derfor betyr begrepene noe',
            type: 'text',
            content: `Flere trafikkregler bruker ordene direkte. Da må du vite hvilken del av veien som er hva.

**Fra skulderen inn på kjørebanen.** Kjører du fra veiskulderen inn på kjørebanen, har du vikeplikt for annen trafikk ([trafikkreglene § 7 nr. 4](https://lovdata.no/dokument/SF/forskrift/1986-03-21-747#%C2%A77)). Det gjelder for eksempel når du har stanset på skulderen og skal kjøre videre.

**Syklende på skulderen når du svinger.** Når du svinger, har du vikeplikt for syklende som skal rett fram, både i kjørebanen og på skulderen ved siden av ([§ 7 nr. 3](https://lovdata.no/dokument/SF/forskrift/1986-03-21-747#%C2%A77)). Sjekk speil og blindsone før du svinger til høyre.

**Syklende og gående bruker skulderen.** Syklende kan bruke høyre skulder ([§ 5](https://lovdata.no/dokument/SF/forskrift/1986-03-21-747#%C2%A75)). Gående skal bruke gangvei, fortau eller skulderen ([§ 19](https://lovdata.no/dokument/SF/forskrift/1986-03-21-747#%C2%A719)). Hold god avstand når du passerer dem.

**Parkering i kjørebanen.** På forkjørsvei med fartsgrense over 50 km/t er det forbudt å parkere i kjørebanen ([§ 17 nr. 3](https://lovdata.no/dokument/SF/forskrift/1986-03-21-747#%C2%A717)). At en plass ligger utenfor kjørebanen, betyr ikke automatisk at parkering er lov der. Les mer om [stans og parkering](/laeringsressurser/stans-og-parkering).`
        },
        {
            title: 'Les veien med oppmerkingen',
            type: 'tip',
            content: 'Kantlinjen viser hvor kjørebanen slutter, og midtlinjen eller kjørefeltlinjen viser hvor feltene går. Vil du lære fargene, linjetypene og når du kan krysse dem, se [veimerking](/laeringsressurser/veimerking) – med film. Test deg etterpå i [veimerkingsspillet](/laeringsspill/veimerking).'
        }
    ],
    faq: [
        {
            question: 'Hva er forskjellen på kjørebane og kjørefelt?',
            answer: 'Kjørebanen er hele delen av veien som er laget for kjøring, mellom kantlinjene. Kjørefeltene er feltene inne i kjørebanen, hvert med plass til én bilrekke. En vanlig toveisvei har én kjørebane og to kjørefelt.'
        },
        {
            question: 'Hvor mange kjørebaner har en vanlig toveisvei?',
            answer: 'Én. Midtlinjen deler kjørebanen i to kjørefelt, men lager ikke to kjørebaner. Det blir to kjørebaner først når retningene er skilt med en fysisk midtdeler.'
        },
        {
            question: 'Er veiskulderen en del av kjørebanen?',
            answer: 'Nei. Veiskulderen er delen av veien utenfor kantlinjen. Den er en del av veien, men ikke av kjørebanen, og den er ikke et kjørefelt.'
        },
        {
            question: 'Kan jeg kjøre på veiskulderen?',
            answer: 'Skulderen er ikke et kjørefelt, og du skal ikke bruke den til å kjøre forbi kø. Du kan bruke den til å stanse når det er trygt og lovlig. Kjører du fra skulderen inn på kjørebanen igjen, har du vikeplikt.'
        },
        {
            question: 'Har en vei uten midtlinje to kjørefelt?',
            answer: 'Ja, hvis den er bred nok til to bilrekker. Er veien så smal at det bare er plass til én bilrekke, har den ett kjørefelt som brukes av trafikk i begge retninger.'
        },
        {
            question: 'Hva er forskjellen på veibane og kjørebane?',
            answer: 'Veibane (vegbane) brukes i Statens vegvesens håndbøker og tar også med skulderen. Kjørebanen er bare delen mellom kantlinjene.'
        }
    ],
    miniQuiz: [
        {
            question: 'En toveisvei har ett felt i hver retning og ingen fysisk midtdeler. Hvor mange kjørebaner har den?',
            options: ['Én', 'To', 'Tre', 'Det kommer an på midtlinjen'],
            correct: 'Én',
            explanation: 'Begge kjøreretningene ligger i samme kjørebane. Midtlinjen deler kjørebanen i to kjørefelt.'
        },
        {
            question: 'Midtlinjen fjernes, men veien er like bred og har plass til to bilrekker. Hvor mange kjørefelt har den?',
            options: ['Ett', 'To', 'Ingen', 'Det avgjøres av skiltingen'],
            correct: 'To',
            explanation: 'Et kjørefelt kan være markert med oppmerking eller være bredt nok til én bilrekke. Plassen til to bilrekker er der fortsatt.'
        },
        {
            question: 'Hva kalles delen av veien utenfor kantlinjen?',
            options: ['Kjørefelt', 'Veiskulder', 'Kjørebane', 'Midtdeler'],
            correct: 'Veiskulder',
            explanation: 'Kantlinjen viser hvor kjørebanen slutter. Utenfor ligger veiskulderen.'
        },
        {
            question: 'En vei har fysisk midtdeler og to felt i hver retning. Hvor mange kjørefelt har veien til sammen?',
            options: ['To', 'Tre', 'Fire', 'Seks'],
            correct: 'Fire',
            explanation: 'To kjørebaner med to kjørefelt i hver gir fire. Midtdeleren og skuldrene telles ikke.'
        },
        {
            question: 'Du har stanset på veiskulderen og skal kjøre inn på kjørebanen igjen. Hva gjelder?',
            options: ['Du har forkjørsrett', 'Høyreregelen gjelder', 'Du har vikeplikt for annen trafikk', 'Du kan kjøre ut når du har gitt tegn'],
            correct: 'Du har vikeplikt for annen trafikk',
            explanation: 'Den som kjører fra skulderen inn på kjørebanen, har vikeplikt (trafikkreglene § 7 nr. 4). Blinklys gir deg ingen rett.'
        },
        {
            question: 'Du skal svinge til høyre. En syklist på skulderen skal rett fram. Hvem har vikeplikt?',
            options: ['Syklisten', 'Du', 'Den som kommer først', 'Ingen, skulderen er ikke kjørebane'],
            correct: 'Du',
            explanation: 'Ved sving har du vikeplikt for syklende som skal rett fram, også når de sykler på skulderen.'
        },
        {
            question: 'Du kjører på forkjørsvei med fartsgrense 60 km/t. Kan du parkere i kjørebanen?',
            options: ['Ja, hvis du bruker nødblink', 'Ja, i inntil 5 minutter', 'Nei', 'Bare utenfor tettbygd strøk'],
            correct: 'Nei',
            explanation: 'På forkjørsvei med fartsgrense over 50 km/t er parkering i kjørebanen forbudt.'
        }
    ],
    sources: {
        title: 'Kilder',
        type: 'text',
        content: `Kontrollert mot lov og forskrift 31. oktober 2026.

- [Lovdata: Trafikkreglene § 1 (definisjoner), § 4, § 5, § 7, § 17 og § 19](https://lovdata.no/dokument/SF/forskrift/1986-03-21-747)
- [Lovdata: Skiltforskriften § 23 (farge på vegoppmerking)](https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219)
- [Statens vegvesen: Definisjoner i håndbøkene (vegbane, kjørefelt, midtdeler)](https://www.vegvesen.no/fag/publikasjoner/handboker/definisjoner/)

Illustrasjonene er skjematiske og ikke i målestokk.`
    },
}
