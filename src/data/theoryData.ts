// Teoridata — Alt innhold på norsk

export interface MiniQuizQuestion {
    question: string
    options: string[]
    correct: string
    explanation: string
}

export interface SignItem {
    name: string
    description: string
    imageUrl?: string
    signId?: string
    alt?: string
}

export interface TheorySection {
    title: string
    content?: string
    type: 'text' | 'formula' | 'info' | 'warning' | 'tip' | 'example' | 'signs' | 'calculator' | 'pyramid' | 'table' | 'component' | 'summary'
    signs?: SignItem[]
    componentId?: string
    component?: string
}

export interface TheoryTopic {
    id: string
    title: string
    icon: string
    shortDescription: string
    color: string
    sections: TheorySection[]
    hasCalculator?: boolean
    seoTitle?: string
    seoDescription?: string
    faq?: { question: string, answer: string }[]
    miniQuiz?: MiniQuizQuestion[]
    sources?: TheorySection
}

export const theoryTopics: TheoryTopic[] = [
    {
        id: 'vikeplikt',
        title: 'Vikeplikt – komplett guide til teoriprøven',
        shortDescription: 'Vikeplikt er et av de vanligste stryketemaene på teoriprøven. Her får du en oversiktlig gjennomgang av de viktigste reglene du må kunne for førerkort klasse B. Tren på vikeplikt med våre øvingsspørsmål når du har lest gjennom.',
        icon: '/signs/vikeplikt.svg',
        color: 'var(--apple-blue)',
        seoTitle: 'Vikeplikt i trafikken – høyreregelen, rundkjøring og gangfelt | Teori-test.no',
        seoDescription: 'Lær vikepliktreglene til teoriprøven: høyreregelen, vikeplikt i rundkjøring, gangfelt og fotgjengere – med eksempelspørsmål og forklaringer.',
        sections: [
            {
                title: '1. Grunnregelen: Høyreregelen',
                type: 'text',
                content: 'Den viktigste regelen i trafikken er høyreregelen: Du har vikeplikt for kjøretøy som kommer fra høyre, med mindre noe annet er bestemt av skilt eller oppmerking.\n- Hvor gjelder den? I alle kryss uten vikepliktskilt, stoppskilt eller forkjørsvei.\n- Viktig om T-kryss: Høyreregelen gjelder også i umerkede T-kryss. Selv om du kjører rett frem på den gjennomgående veien, må du vike for biler som kommer fra høyre i krysset.\n\n![Illustrasjon av høyreregelen der grønn bil viker for blå bil fra høyre](/hoyreregelen.png)'
            },
            {
                title: '2. Myndighetspyramiden: Hva gjelder når?',
                type: 'info',
                content: 'I trafikken oppstår det ofte situasjoner der skilt, lys og generelle regler sier forskjellige ting. Da bruker vi myndighetspyramiden for å vite hva som gjelder. Reglene følges i denne rekkefølgen:\n1. Politi og manuelle dirigenter: Deres anvisninger overstyrer alt annet.\n2. Trafikklys: Grønt lys overstyrer skilt. (Blinker lyset gult, eller er slukket, er det skiltene som gjelder).\n3. Trafikkskilt og oppmerking: Vikepliktskilt og forkjørsvei overstyrer de generelle trafikkreglene.\n4. Trafikkregler (Høyreregelen): Dette er bunnen av pyramiden. Den gjelder bare når det ikke finnes politi, lys eller skilt som sier noe annet.\n\nKlassisk teoriprøvespørsmål: «Du ankommer et kryss der trafikklyset viser grønt, men det er også satt opp et vikepliktskilt. Hva er riktig?»\nA) Jeg har vikeplikt fordi skiltet gjelder.\nB) Jeg kan kjøre fordi trafikklyset gjelder foran skiltet.\nC) Høyreregelen gjelder.\n\nRiktig svar: B. Trafikklys (nivå 2 i pyramiden) står over trafikkskilt (nivå 3).'
            },
            {
                title: '3. Når skilt bestemmer vikeplikten',
                type: 'signs',
                content: 'Høyreregelen gjelder bare når ingenting annet er bestemt. Hvis det står skilt eller er vegoppmerking som regulerer krysset, skal du følge dette først.',
                signs: [
                    {
                        name: 'Vikepliktskilt',
                        description: 'Trekant med spissen ned betyr at du har vikeplikt. Du må senke farten, vurdere trafikken på veien du skal inn på, og bare kjøre når det er klart.',
                        imageUrl: '/signs/vikeplikt.svg'
                    },
                    {
                        name: 'Stoppskilt',
                        description: 'Rødt åttekantet skilt betyr at du alltid skal stoppe helt. Hjulene skal stå stille ved stopplinjen, eller før krysset hvis det ikke er stopplinje. Etterpå kjører du først når det er trygt.',
                        imageUrl: '/signs/stopp.svg'
                    },
                    {
                        name: 'Forkjørsvei',
                        description: 'Gult diamantformet skilt betyr at du kjører på forkjørsvei. Trafikk fra sideveier har som regel vikeplikt for deg, men du må fortsatt følge med og tilpasse farten.',
                        imageUrl: '/signs/forkjorsvei.svg'
                    }
                ]
            },
            {
                title: '4. Rundkjøringer',
                type: 'text',
                content: 'I norske rundkjøringer har du vikeplikt for trafikken som allerede befinner seg inne i rundkjøringen.\n- Vent ved vikepliktslinjen til du har en trygg luke.\n- Bruk alltid blinklys når du skal ut av rundkjøringen.\n\nVanlig misforståelse: Mange tror høyreregelen gjelder i rundkjøring. I praksis møter du normalt vikepliktskilt før rundkjøringen, og da skal du vike for trafikk som allerede er inne i rundkjøringen.\n\n[Usikker på rundkjøringer? Les guiden om vikeplikt i rundkjøring](/laeringsressurser/rundkjoring)'
            },
            {
                title: '5. Trikk og buss',
                type: 'warning',
                content: 'Det gjelder egne regler for kollektivtrafikk:\n- Trikk: Du har vikeplikt for trikken, selv om den kommer fra venstre. Dette er et viktig unntak fra høyreregelen.\n- Buss: Hvis en buss blinker seg ut fra en holdeplass i en 60-sone (eller lavere), skal du senke farten og gi bussen mulighet til å kjøre ut, så lenge det kan skje uten fare.'
            },
            {
                title: '6. Fotgjengere og syklister',
                type: 'text',
                content: 'Som bilist må du alltid ta hensyn til myke trafikanter:\n- Fotgjengere: Du har vikeplikt for gående i gangfelt, enten du kjører rett frem eller svinger. Husk at det er strengt forbudt å kjøre forbi foran et gangfelt hvis du ikke har full oversikt — [les mer om regler for forbikjøring](/laeringsressurser/forbikjoring).\n- Syklister: Hvis du skal svinge og krysser et sykkelfelt, har du vikeplikt for syklister som befinner seg i feltet.'
            },
            {
                title: '7. Utkjøring fra privat vei',
                type: 'text',
                content: 'Du har alltid vikeplikt for all trafikk (inkludert fotgjengere og syklister) når du kjører ut fra parkeringsplasser og garasjer, privat eiendom eller gårdsplass, bensinstasjoner, og gang- og sykkelvei.\n\nEr du i tvil i trafikken, er det beste rådet å ta det rolig og la den andre passere. Det er alltid bedre å vente litt enn å skape en farlig situasjon.\n\nKlar til å teste kunnskapen? [Les også hvordan du består teoriprøven på første forsøk](/laeringsressurser/tips-eksamen) når eksamensdagen nærmer seg.'
            }
        ],
        faq: [
            {
                question: 'Hva er vikeplikt?',
                answer: 'Vikeplikt betyr at du må vente og la andre trafikanter passere før du kan kjøre videre. Du har vikeplikt når skilt, trafikklys, oppmerking eller trafikkregler krever det.'
            },
            {
                question: 'Hva er høyreregelen?',
                answer: 'Høyreregelen sier at du skal gi vikeplikt for trafikk som kommer fra høyre, når det ikke er skiltet eller oppmerkert noe annet. Regelen gjelder i kryss der ingen har forkjørsrett.'
            },
            {
                question: 'Har man vikeplikt i rundkjøring?',
                answer: 'Ja, du har vikeplikt for trafikk som allerede er inne i rundkjøringen. Du skal stoppe eller vike for biler som kjører i selve rundkjøringen før du kjører inn.'
            },
            {
                question: 'Hva betyr vikeplikt for fotgjengere?',
                answer: 'Du skal alltid gi fotgjengere vikeplikt i gangfelt. Du må også gi vikeplikt for fotgjengere når du svinger inn på en sidevei eller ut fra en parkeringsplass.'
            },
            {
                question: 'Hvem har vikeplikt i et T-kryss?',
                answer: 'I et T-kryss uten skilt eller oppmerking gjelder høyreregelen. Det betyr at du kan måtte vike for trafikk fra høyre, selv om veien du kjører på virker større eller går rett frem.'
            }
        ],
        miniQuiz: [
            {
                question: 'Du kommer til et uregulert kryss uten skilt eller trafikklys. En bil kommer fra høyre. Hva gjør du?',
                options: ['Kjører først hvis du er på den bredeste veien', 'Viker for bilen fra høyre', 'Kjører først hvis du skal rett frem', 'Viker bare hvis bilen fra høyre allerede er inne i krysset'],
                correct: 'Viker for bilen fra høyre',
                explanation: 'I uregulerte kryss gjelder høyreregelen. Du skal vike for trafikk fra høyre, selv om din vei virker større.'
            },
            {
                question: 'Du har grønt lys, men det står også et vikepliktskilt ved krysset. Hva gjelder?',
                options: ['Vikepliktskiltet gjelder alltid', 'Høyreregelen gjelder', 'Trafikklyset gjelder så lenge det fungerer', 'Du må alltid stoppe helt opp'],
                correct: 'Trafikklyset gjelder så lenge det fungerer',
                explanation: 'Trafikklys står høyere enn skilt i myndighetspyramiden. Så lenge lyset fungerer, følger du lyssignalet.'
            },
            {
                question: 'Trafikklyset blinker gult, og du har vikepliktskilt. Hva må du gjøre?',
                options: ['Kjøre som om du har grønt lys', 'Følge vikepliktskiltet', 'Følge høyreregelen selv om skiltet står der', 'Stoppe uansett, som ved stoppskilt'],
                correct: 'Følge vikepliktskiltet',
                explanation: 'Blinkende gult betyr at trafikklyset ikke regulerer trafikken på vanlig måte. Da må du følge skilt og oppmerking.'
            },
            {
                question: 'Du skal kjøre inn i en rundkjøring. Det kommer en bil fra venstre som allerede er inne i rundkjøringen. Hva er riktig?',
                options: ['Du kan kjøre først fordi bilen kommer fra venstre', 'Du må vike for bilen som allerede er i rundkjøringen', 'Høyreregelen gjelder alltid i rundkjøringer', 'Du kan kjøre hvis du skal ta første avkjøring'],
                correct: 'Du må vike for bilen som allerede er i rundkjøringen',
                explanation: 'Ved innkjøring i rundkjøring har du normalt vikepliktskilt. Du skal vike for trafikk som allerede er i rundkjøringen.'
            },
            {
                question: 'Du kjører i 50-sone og en buss på bussholdeplass blinker ut. Hva er riktig?',
                options: ['Du skal gi bussen mulighet til å kjøre ut hvis det kan skje uten fare', 'Bussen har aldri prioritet fra holdeplass', 'Du må alltid bråbremse for bussen', 'Regelen gjelder bare i 80-sone'],
                correct: 'Du skal gi bussen mulighet til å kjøre ut hvis det kan skje uten fare',
                explanation: 'I områder med fartsgrense 60 km/t eller lavere skal du gi buss mulighet til å kjøre ut fra holdeplass, så lenge det kan skje uten fare.'
            },
            {
                question: 'Du skal svinge til høyre inn i en sidevei. En fotgjenger skal krysse sideveien du svinger inn i. Hva gjør du?',
                options: ['Kjører først fordi du allerede er på kjørebanen', 'Viker for fotgjengeren', 'Tut for å varsle og kjører forsiktig forbi', 'Viker bare hvis det er gangfelt med skilt'],
                correct: 'Viker for fotgjengeren',
                explanation: 'Når du svinger inn på en ny vei, skal du vike for gående og syklende som skal krysse den veien du svinger inn i.'
            },
            {
                question: 'Du kjører ut fra en parkeringsplass og skal inn på en vanlig vei. Hva gjelder?',
                options: ['Høyreregelen gjelder, så biler fra venstre må vike for deg', 'Du har vikeplikt for trafikken på veien du kjører inn på', 'Du har forkjørsrett hvis du kommer sakte', 'Du har bare vikeplikt hvis det står skilt'],
                correct: 'Du har vikeplikt for trafikken på veien du kjører inn på',
                explanation: 'Når du kjører ut fra parkeringsplass, privat vei, gårdsplass eller lignende, har du vikeplikt for trafikken på veien du kjører inn på.'
            },
            {
                question: 'Du nærmer deg et gangfelt. En bil i feltet ved siden av har stanset rett før gangfeltet. Hva bør du gjøre?',
                options: ['Kjøre forbi hvis du ikke ser noen fotgjengere', 'Senke farten og være forberedt på å stoppe', 'Kjøre raskt forbi før fotgjengeren kommer', 'Bare stoppe hvis det står gangfeltskilt'],
                correct: 'Senke farten og være forberedt på å stoppe',
                explanation: 'En stanset bil kan skjule fotgjengere. Du må være ekstra forsiktig og klar til å stoppe før gangfelt.'
            }
        ]
    },

    {
        id: 'bremselengde',
        title: 'Bremselengde kalkulator – regn ut stopplengde | Teori-test.no',
        icon: '🚗',
        shortDescription: 'Bruk kalkulatoren og tast inn hastighet — se bremselengde og stopplengde for tørr vei, våt vei og is. Med formel og øvingsoppgaver til teoriprøven.',
        color: 'var(--apple-red)',
        seoTitle: 'Bremselengde og stopplengde – formel og kalkulator | Teori-test.no',
        seoDescription: 'Tast inn hastighet og se bremselengde for tørr vei, våt vei og is — direkte i kalkulatoren. Med formel, bremsefaktorer, vannplaning og øvingsoppgaver til teoriprøven.',
        hasCalculator: true,
        sections: [
            {
                title: 'Kort svar: Formel for bremselengde',
                type: 'text',
                content: 'På teoriprøven for klasse B kan du på tørr vei ved nødbremsing bruke denne huskeregelen:\n\n**Bremselengde = (fart / 10) × (fart / 10) / 2**\n\nEksempel ved 80 km/t:\n\n**8 × 8 / 2 = 32 meter**\n\nDet betyr at bremselengden ved 80 km/t på tørr vei er omtrent 32 meter. Husk at dette bare er selve bremselengden. Total stopplengde blir lengre, fordi du også må legge til reaksjonslengden.'
            },
            {
                                title: 'Hva er bremselengde?',
                type: 'text',
                content: 'Bremselengde er den avstanden bilen tilbakelegger fra du begynner å bremse til bilen står stille. Bremselengden avhenger av farten, veidekke, bremsenes tilstand og bilens vekt.\n\nLes mer om hvordan sikt påvirker farten i [lysbruk og mørkekjøring](/laeringsressurser/lysbruk-morkekjoring).'
            },
            {
                title: 'Prøv kalkulatoren!',
                type: 'calculator',
                content: 'Kalkulatoren nedenfor viser stopplengde (bremselengde + reaksjonslengde) for ulike hastigheter og veiforhold. Bremselengden alene er stopplengden minus reaksjonslengden. **Er du kun ute etter bremselengden, finner du den i den grønnmarkerte raden i tabellen nederst.**'
            },
            {
                title: 'Stopplengdetabell (Oversikt)',
                type: 'table',
                content: '<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Hastighet</th><th style="padding: 12px 8px;">Reaksjonslengde</th><th style="padding: 12px 8px;">Bremselengde (tørr)</th><th style="padding: 12px 8px;">Stopplengde (tørr)</th><th style="padding: 12px 8px;">Stopplengde (våt)</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">30 km/t</td><td style="padding: 12px 8px;">9 m</td><td style="padding: 12px 8px;">4,5 m</td><td style="padding: 12px 8px;"><b>13,5 m</b></td><td style="padding: 12px 8px;">18 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">50 km/t</td><td style="padding: 12px 8px;">15 m</td><td style="padding: 12px 8px;">12,5 m</td><td style="padding: 12px 8px;"><b>27,5 m</b></td><td style="padding: 12px 8px;">40 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">60 km/t</td><td style="padding: 12px 8px;">18 m</td><td style="padding: 12px 8px;">18 m</td><td style="padding: 12px 8px;"><b>36 m</b></td><td style="padding: 12px 8px;">54 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">80 km/t</td><td style="padding: 12px 8px;">24 m</td><td style="padding: 12px 8px;">32 m</td><td style="padding: 12px 8px;"><b>56 m</b></td><td style="padding: 12px 8px;">88 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">100 km/t</td><td style="padding: 12px 8px;">30 m</td><td style="padding: 12px 8px;">50 m</td><td style="padding: 12px 8px;"><b>80 m</b></td><td style="padding: 12px 8px;">130 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">110 km/t</td><td style="padding: 12px 8px;">33 m</td><td style="padding: 12px 8px;">60,5 m</td><td style="padding: 12px 8px;"><b>93,5 m</b></td><td style="padding: 12px 8px;">154 m</td></tr></tbody></table></div>'
            },
            {
                title: 'Formel for bremselengde, reaksjonslengde og stopplengde',
                type: 'formula',
                content: 'Reaksjonslengde = (Fart ÷ 10) × 3 meter\n\nBremselengde (tørr vei) = (Fart ÷ 10)² ÷ 2 meter\n\nStopplengde = Reaksjonslengde + Bremselengde'
            },
            {
                title: 'Eksempel: 80 km/t på tørr vei',
                type: 'example',
                content: 'Reaksjonslengde = (80 ÷ 10) × 3 = 24 meter\nBremselengde = (80 ÷ 10)² ÷ 2 = 32 meter\nStopplengde = 24 + 32 = 56 meter\n\nDet betyr at du trenger minst 56 meter for å stoppe helt!'
            },
            {
                title: 'Viktig å huske',
                type: 'warning',
                content: 'Det er særlig to ting som gjør bremselengden mye lengre: høyere fart og dårligere veigrep.\n\n### 1. Når farten dobles, firedobles bremselengden\n\nPå tørr vei øker bremselengden kraftig når farten øker. Dobler du farten, blir bremselengden omtrent fire ganger så lang.\n\n![Illustrasjon som viser at når farten dobles, firedobles bremselengden](/bremselengde-dobbel-fart.png)\n\n*Når farten dobles, blir bremselengden fire ganger så lang. Dette er en av de viktigste huskereglene til teoriprøven.*\n\n### 2. Dårlig føre gjør bremselengden enda lengre\n\nPå våt vei kan bremselengden bli omtrent dobbelt så lang som på tørr vei. På snø og is kan den bli mange ganger lengre. Ved 80 km/t kan stopplengden på is bli over 300 meter.\n\n**Husk forskjellen:**\n\n* Høyere fart øker bremselengden fordi bilen har mer bevegelsesenergi.\n* Dårlig føre øker bremselengden fordi dekkene får dårligere grep.'
            },
            {
                title: 'Faktorer som påvirker bremselengden',
                type: 'info',
                content: '• Fart — Dobbel fart gir 4 ganger lengre bremselengde\n• Veidekke — Is, snø, regn øker bremselengden betydelig\n• Dekkenes tilstand — Slitte dekk gir dårligere grep\n• Bremsenes tilstand — Slitte bremser reduserer bremsekraften\n• Bilens vekt — Tung bil trenger lengre avstand\n• Helning — Nedoverbakke øker bremselengden\n\nKlar til å teste kunnskapen? Ta [øvingsprøven om fartsregler](/quiz/fart_og_plassering) eller les om [vikeplikt](/laeringsressurser/vikeplikt).'
            },
            {
                title: 'Slik endres bremselengden med veiforhold',
                type: 'table',
                content: '<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Veiforhold</th><th style="padding: 12px 8px;">Bremsefaktor</th><th style="padding: 12px 8px;">Eksempel: 80 km/t (32 m tørr)</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Tørr asfalt</td><td style="padding: 12px 8px;"><b>1×</b></td><td style="padding: 12px 8px;">32 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Våt asfalt</td><td style="padding: 12px 8px;"><b>2×</b></td><td style="padding: 12px 8px;">64 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Vått vinterføre</td><td style="padding: 12px 8px;"><b>4×</b></td><td style="padding: 12px 8px;">128 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Is / snø</td><td style="padding: 12px 8px;"><b>8–10×</b></td><td style="padding: 12px 8px;">256–320 m</td></tr><tr><td style="padding: 12px 8px;">Vannplaning</td><td style="padding: 12px 8px;"><b>∞</b></td><td style="padding: 12px 8px;">Bremser virker ikke</td></tr></tbody></table></div>'
            },
            {
                title: 'Øvingsoppgaver — fart og føre kombinert',
                type: 'text',
                content: 'Test deg selv på disse to kombinasjonsoppgavene:\n\n**Oppgave 1:** Du kjører 60 km/t på vått vinterføre. Hva er bremselengden?\nBremselengde tørr = (60÷10)² ÷ 2 = 18 m. Vått vinterføre = 4×: **18 × 4 = 72 meter**\n\n**Oppgave 2:** Du dobler farten fra 50 til 100 km/t på tørr asfalt. Hva skjer med bremselengden?\nVed 50 km/t: (50÷10)² ÷ 2 = 12,5 m. Ved 100 km/t: (100÷10)² ÷ 2 = 50 m. **Bremselengden firedobles.**\n\nHusk: Dobbel fart = firedobbel bremselengde. Dette er den viktigste huskeregelen på teoriprøven.'
            },
            {
                title: 'Vannplaning — når bremselengden blir uendelig',
                type: 'warning',
                content: 'Vannplaning oppstår når vannet ikke rekker å presses vekk under dekket, og bilen begynner å gli på et vannlag. Dette skjer typisk ved høy fart, slitte dekk eller mye vann på veien.\n\nNår du hydraplaner (vannplaner):\n- Dekket mister kontakt med veibanen\n- Bremsene virker ikke\n- Rattet responderer ikke\n- Bilen lar seg ikke styres\n\n**Hva du skal gjøre:** Ikke brems hardt. Ta foten av gassen, hold rattet stødig og la bilen sakke av seg selv til dekket får kontakt igjen.\n\n**Forebygging:** Reduser farten ved kraftig regn, skift dekk i tide og kjør i hjulsporene til bilen foran (der vannet er presset vekk).\n\n[Les om reaksjonstid og reaksjonslengde](/laeringsressurser/reaksjonstid)'
            },
            {
                title: '🚗 Interaktivt bremsespill',
                type: 'tip',
                content: 'Vil du teste reaksjonstiden din i en simulator og se om du klarer å anslå riktig bremselengde og stopplengde på ulikt føre?\n\n👉 **[Prøv Stopplengde-utfordringen her!](/laeringsspill/stopplengde)**'
            }
        ],
        faq: [
            {
                question: "Hva er bremselengden ved 80 km/t på tørr vei?",
                answer: "Ved 80 km/t er bremselengden 32 meter på tørr vei. Reaksjonslengden er 24 meter, så total stopplengde blir 56 meter."
            },
            {
                question: "Hva er forskjellen på bremselengde og stopplengde?",
                answer: "Bremselengde er avstanden fra du begynner å bremse til bilen stopper helt. Stopplengde er bremselengde pluss reaksjonslengde — altså hele avstanden fra du oppdager faren til bilen står stille."
            },
            {
                question: "Hvordan regner man ut bremselengde?",
                answer: "Formelen er: (fart ÷ 10)² ÷ 2. Eksempel ved 80 km/t: (80 ÷ 10)² ÷ 2 = 64 ÷ 2 = 32 meter."
            },
            {
                question: "Hvor lang er stopplengden ved 80 km/t på is?",
                answer: "På is er bremselengden opptil 10 ganger lengre enn på tørr vei. Ved 80 km/t blir stopplengden på is over 344 meter."
            },
            {
                question: "Hva påvirker bremselengden?",
                answer: "Bremselengden påvirkes av fart, veidekke (tørr/våt/is/snø), dekkenes tilstand, bremsenes tilstand, bilens vekt og om du kjører i bakke."
            },
            {
                question: "Hva er stopplengden ved 50 km/t?",
                answer: "Ved 50 km/t er reaksjonslengden 15 meter og bremselengden 12,5 meter på tørr vei. Total stopplengde er 27,5 meter."
            }
        ],
        miniQuiz: [
            {
                question: "Hva er bremselengden din om du nødbremser på tørr asfalt og kjører 60 km/t?",
                options: ["18 meter", "25 meter", "36 meter", "64 meter"],
                correct: "18 meter",
                explanation: "Bruk huskeregelen: hastighet × hastighet ÷ 200.\n\n60 × 60 = 3600\n3600 ÷ 200 = 18 meter\n\nMerk: stopplengden er 36 meter (18m bremselengde + 18m reaksjonslengde), men spørsmålet gjelder kun bremselengden."
            },
            {
                question: "Bremselengden er 20 meter på tørr asfalt. Hva blir den på våt asfalt?",
                options: ["10 meter", "20 meter", "40 meter", "80 meter"],
                correct: "40 meter",
                explanation: "Våt asfalt dobler alltid bremselengden sammenlignet med tørr asfalt.\n\n20 meter × 2 = 40 meter\n\nHuskeregel: tørr → våt = gang med 2."
            },
            {
                question: "Du dobler farten fra 50 til 100 km/t. Hva skjer med bremselengden?",
                options: ["Den dobles", "Den tredobles", "Den firedobles", "Den blir åtte ganger lengre"],
                correct: "Den firedobles",
                explanation: "Når farten dobles, firedobles bremselengden. Dette er den viktigste huskeregelen.\n\nVed 50 km/t: 50 × 50 ÷ 200 = 12,5 meter\nVed 100 km/t: 100 × 100 ÷ 200 = 50 meter\n12,5 × 4 = 50 meter ✓"
            },
            {
                question: "Hva skjer med bremselengden ved vannplaning?",
                options: ["Den dobles", "Den firedobles", "Den blir ti ganger lengre", "Bremselengden er uendelig"],
                correct: "Bremselengden er uendelig",
                explanation: "Ved vannplaning mister dekket kontakt med veien og bilen flyter på et vannlag.\n\nBremsene virker ikke — bremselengden er i praksis uendelig.\n\nHva gjør du? Slipp gassen rolig, ikke brems brått, hold rattet rett."
            },
            {
                question: "Bremselengden er 32 meter på tørr asfalt ved 80 km/t. Hva blir den på vått vinterføre?",
                options: ["64 meter", "96 meter", "128 meter", "256 meter"],
                correct: "128 meter",
                explanation: "Vått vinterføre gir 4 ganger lengre bremselengde enn tørr asfalt.\n\n32 meter × 4 = 128 meter\n\nHuskeregel: tørr → vinterføre = gang med 4."
            }
        ]
    },

    {
        id: 'myndighetspyramiden',
        title: 'Myndighetspyramiden: Hvem bestemmer egentlig i trafikken?',
        icon: '👮',
        shortDescription: 'I trafikken vil du ofte oppleve at ulike signaler gir deg motstridende beskjeder. Hvem skal du høre på? Lær hierarkiet for å unngå fellene på prøven.',
        color: 'var(--apple-blue)',
        seoTitle: 'Myndighetspyramiden – hvem bestemmer? | Teori-test.no',
        seoDescription: 'Myndighetspyramiden viser hva som gjelder først i trafikken: politi, trafikklys, skilt/vegoppmerking og trafikkregler. Se rekkefølgen, eksempler og vanlige feller på teoriprøven.',
        sections: [
            {
                title: 'Kort forklart: Myndighetspyramiden',
                type: 'info',
                content: 'Myndighetspyramiden viser hva du skal følge når politi, trafikklys, skilt, vegoppmerking og trafikkregler gir ulike beskjeder. Rekkefølgen er:\n1. Politi og manuell dirigering\n2. Trafikklys\n3. Trafikkskilt og vegoppmerking\n4. Trafikkregler\n\nDet som står høyere i pyramiden overstyrer alltid det som står lavere. Noen kaller den også trafikkpyramiden, men prinsippet er det samme.'
            },
            {
                title: 'Illustrasjon av pyramiden',
                type: 'pyramid',
                content: ''
            },
            {
                title: 'Hva er myndighetspyramiden?',
                type: 'text',
                content: 'I trafikken vil du ofte oppleve at ulike signaler gir deg motstridende beskjeder. Hvem skal du egentlig høre på? Kanskje ruller du frem mot et travelt veikryss hvor trafikklyset lyser knallgrønt, samtidig som det står et tydelig vikepliktskilt montert på den samme stolpen. For å gjøre det enda mer krevende, står det kanskje en politibetjent midt i krysset og signaliserer at du må stoppe.\n\nLøsningen på dette potensielle kaoset er et av de viktigste fundamentene i trafikkopplæringen. Noen kaller den også trafikkpyramiden, men prinsippet er det samme: det handler om hva som har høyest myndighet i trafikken.'
            },
            {
                title: 'Nivå 1: Politi og manuell dirigering (Øverste myndighet)',
                type: 'warning',
                content: 'På den absolutte toppen av pyramiden finner vi mennesker med formell myndighet til å dirigere trafikken. Deres tegn og anvisninger overstyrer absolutt alle andre reguleringer – inkludert røde trafikklys, stoppskilt, oppmerking i veien og generelle trafikkregler.\n\nHvem har denne myndigheten? Selv om vi gjerne refererer til dette som "politi", gjelder det ikke utelukkende dem. Statens vegvesen, Tolletaten og militærpolitiet (MP) har også lovhjemmel til å dirigere trafikk, og du plikter å følge deres anvisninger på nøyaktig lik linje med politiet. (Skolepatruljer har ikke samme formelle myndighet, men du har likevel en plikt til å stoppe for dem av hensyn til sikkerheten).\n\nHvorfor er det slik? Mennesker har evnen til å vurdere og tilpasse seg situasjoner i sanntid. Hvis det har skjedd en alvorlig ulykke, et lyskryss har hengt seg opp, eller det pågår veiarbeid, må autorisert personell kunne overstyre den forhåndsprogrammerte teknologien for å rydde opp i kaoset og ivareta sikkerheten. Viser betjenten at du skal kjøre, så kjører du, selv om lyset lyser rødt.'
            },
            {
                title: 'Nivå 2: Lyssignal (Trafikklys)',
                type: 'info',
                content: 'Hvis det ikke er noen som manuelt dirigerer trafikken på stedet, er det trafikklysene som overtar rollen som øverste beslutningstaker. Et fungerende trafikklys overstyrer både trafikkskilt, all vegoppmerking og de generelle trafikkreglene.\n\nLogikken bak: Lyssignaler brukes bevisst i ulykkesutsatte, tungt trafikkerte eller spesielt komplekse kryss for å skape en trygg og mekanisk styrt trafikkflyt. Systemet er designet for å fjerne tvil. Har du grønt lys, kan du kjøre, selv om det står et vikepliktskilt under lyset. Lyssignalet (Nivå 2) nøytraliserer skiltet (Nivå 3).\n\nDet viktige unntaket (Blinkende gult lys): Et gult, blinkende lys betyr at anlegget er ute av drift, eller at krysset er ekstra farlig. Et blinkende gult lys gir deg ingen rettigheter eller forkjørsrett. Det er et varsel om at du må flytte deg et hakk ned i pyramiden og forholde deg til skiltingen på stedet i stedet.'
            },
            {
                title: 'Nivå 3: Trafikkskilt og vegoppmerking',
                type: 'text',
                content: 'Når trafikklyset er slått av, blinker gult, eller du befinner deg i et kryss som ikke har lysregulering, er det [trafikkskiltene](/laeringsressurser/skilt) og stripene malt i veibanen som regulerer trafikken. Disse overstyrer i sin tur de generelle trafikkreglene som ligger i bunnen av pyramiden.\n\n**Skilt:** Et vanlig eksempel er et kryss med et vikepliktskilt. Skiltet forteller deg utvetydig at du må vike for kryssende trafikk, noe som overstyrer den generelle høyreregelen.\n\n**Vegoppmerking:** [Vegoppmerking](/laeringsressurser/veimerking) har samme nivå i pyramiden som trafikkskilt. Når vegoppmerkingen er synlig, skal du også følge stopplinjer og vikepliktslinjer.'
            },
            {
                title: 'Nivå 4: Trafikkregler (Nederst i pyramiden)',
                type: 'text',
                content: 'Helt i bunnen, som en grunnmur for all ferdsel i samfunnet, ligger de generelle trafikkreglene og forskriftene. Dette er basisreglene vi alltid forholder oss til når det verken er politi, trafikklys eller skilt til stede for å regulere situasjonen.\n\n**Høyreregelen:** Den aller viktigste regelen på dette nivået er høyreregelen. Kjører du gjennom et rolig boligfelt uten lyskryss og uten noen form for vikepliktskilt, er det høyreregelen som dikterer at du har [vikeplikt](/laeringsressurser/vikeplikt) for all trafikk som kommer fra din høyre side.'
            },
            {
                title: 'Hva overstyrer hva i trafikken?',
                type: 'table',
                content: `<table class="theory-table">
                    <thead><tr><th>Situasjon</th><th>Hva gjelder?</th><th>Fordi…</th></tr></thead>
                    <tbody>
                        <tr><td>Politi dirigerer</td><td>Politiets tegn</td><td>Nivå 1 overstyrer alt</td></tr>
                        <tr><td>Grønt lys + vikepliktskilt</td><td>Følg trafikklyset</td><td>Nivå 2 overstyrer Nivå 3 – men fører kan likevel ha vikeplikt ved sving</td></tr>
                        <tr><td>Blinkende gult lys + vikepliktskilt</td><td>Vikepliktskiltet</td><td>Blinkende gult = Nivå 2 er ute av spill</td></tr>
                        <tr><td>Vikepliktskilt + bil fra venstre</td><td>Vikepliktskiltet</td><td>Nivå 3 overstyrer høyreregelen (Nivå 4)</td></tr>
                        <tr><td>Ingen skilt, ingen lys</td><td>Høyreregelen</td><td>Nivå 4 gjelder som grunnregel</td></tr>
                    </tbody>
                </table>`
            },
            {
                title: 'Hva er riktig om myndighetspyramiden på teoriprøven? De vanligste fellene',
                type: 'tip',
                content: 'Teoriprøven elsker å teste om du virkelig forstår og stoler på hierarkiet. Når du skal svare på hva som er riktig om myndighetspyramiden under eksamen, er det spesielt viktig å kjenne til disse typiske scenariene som ofte forvirrer elever:\n\n**1. Grønt lys og Stoppskilt**\nSituasjon: Du kommer frem til et kryss. Lyset viser grønt, men det står et knallrødt Stoppskilt plassert rett under trafikklyset på samme stolpe.\nFasit: Du kan kjøre uten å stoppe. Lyssignalet befinner seg på Nivå 2, og overstyrer dermed Stoppskiltet som befinner seg på Nivå 3.\n\n**2. Blinkende gult lys og vikepliktskilt**\nSituasjon: Du nærmer deg et kryss hvor trafikklyset blinker gult. Du har et vikepliktskilt.\nFasit: Blinkende gult lys betyr at anlegget er satt ut av spill. Du må følge skiltet. Du har [vikeplikt](/laeringsressurser/vikeplikt).\n\n**3. Grønt lys og venstresving**\nSituasjon: Du skal svinge til venstre. Det kommer møtende trafikk rett frem. Du har vanlig grønt lys.\nFasit: Du har vikeplikt for møtende trafikk. Grønt lys gir lov til å kjøre, men opphever ikke vikeplikten ved venstresving. En grønn PIL ville vært annerledes.\n\n**4. Fotgjengerfelt uten skilt**\nSituasjon: Du svinger inn på en ny vei. Det ligger et gangfelt. En person vil over.\nFasit: Kjørende som svinger inn på en ny vei, har alltid vikeplikt for gående eller syklende som skal krysse. Du må stoppe.'
            },
            {
                title: 'Klar for å teste kunnskapen din?',
                type: 'info',
                content: 'Å ha en dyp forståelse for trafikkens rangordning er helt avgjørende for å ferdes trygt på veien. Har du kontroll på myndighetspyramiden, er du ett stort skritt nærmere å bestå. Ta gjerne en [gratis teoriprøve](/quiz) hos oss for å se om du klarer å sortere signalene riktig i praksis.'
            }
        ],
        faq: [
            {
                question: 'Hva er myndighetspyramiden i trafikken?',
                answer: 'Myndighetspyramiden viser hvem som har høyest myndighet i trafikken. Rekkefølgen fra øverst til nederst er: 1) Politi og dirigering, 2) Trafikklys, 3) Trafikkskilt og vegoppmerking, 4) Trafikkregler. Noen kaller den også trafikkpyramiden.'
            },
            {
                question: 'Hvem har høyest myndighet i trafikken?',
                answer: 'Politiet har høyest myndighet i trafikken. Hvis en politibetjent dirigerer trafikken, skal du følge politiets anvisninger selv om trafikklyset viser grønt.'
            },
            {
                question: 'Hva overstyrer hva i myndighetspyramiden?',
                answer: 'Politidirigeringen overstyrer trafikklys. Trafikklys overstyrer trafikkskilt. Trafikkskilt overstyrer de generelle trafikkreglene. Politiet er alltid øverst.'
            },
            {
                question: 'Er det bare politiet som er på toppen av myndighetspyramiden?',
                answer: 'Nei. Selv om politiet oftest brukes som eksempel, inkluderer det øverste nivået alle med offisiell myndighet til å dirigere trafikk. Dette gjelder Statens vegvesen, Tolletaten og militærpolitiet.'
            },
            {
                question: 'Hva skjer hvis trafikklyset er defekt eller blinker gult?',
                answer: 'Ved defekt eller blinkende gult lys, bortfaller lyssignalet fra pyramiden. Da må du forholde deg til neste nivå, som er trafikkskilt og vegoppmerking. Er det ingen skilt der, gjelder de vanlige trafikkreglene (som høyreregelen).'
            },
            {
                question: 'Hvorfor overstyrer skilt de generelle trafikkreglene?',
                answer: 'Skilt brukes for å regulere spesifikke og lokale utfordringer på en vei, for eksempel en farlig sving eller et kryss med mye trafikk. Spesielle lokale bestemmelser (skilt) veier alltid tyngre enn generelle regler.'
            },
            {
                question: 'Hva er riktig om myndighetspyramiden på teoriprøven?',
                answer: 'På teoriprøven er det vanlig å bli testet på rekkefølgen: politi øverst, deretter trafikklys, så skilt og vegoppmerking, og til slutt trafikkregler nederst. Politiets anvisninger gjelder alltid, uansett hva skilt eller lys viser.'
            }
        ],
        miniQuiz: [
            {
                question: 'Politi dirigerer trafikken og trafikklyset viser grønt. Hva skal du følge?',
                options: [
                    'Trafikklyset – grønt lys gjelder alltid',
                    'Politiets tegn',
                    'Høyreregelen',
                    'Ingen av delene – du bestemmer selv'
                ],
                correct: 'Politiets tegn',
                explanation: 'Politi/manuell dirigering står øverst i myndighetspyramiden og går foran trafikklys.'
            },
            {
                question: 'Trafikklyset blinker gult, og du ser et vikepliktskilt. Hva gjelder?',
                options: [
                    'Blinkende gult betyr forkjørsrett',
                    'Du følger vikepliktskiltet',
                    'Høyreregelen gjelder',
                    'Du kan kjøre uten å bremse'
                ],
                correct: 'Du følger vikepliktskiltet',
                explanation: 'Blinkende gult betyr at trafikklyset ikke regulerer krysset på vanlig måte. Da følger du skilt og øvrige regler.'
            },
            {
                question: 'Du har grønt lys og skal svinge til venstre. Det kommer møtende trafikk rett frem. Hva gjør du?',
                options: [
                    'Du kjører – grønt lys gjelder',
                    'Du viker for møtende trafikk',
                    'Du blokkerer krysset og venter',
                    'Du bruker nødstans'
                ],
                correct: 'Du viker for møtende trafikk',
                explanation: 'Vanlig grønt lys gir lov til å kjøre, men opphever ikke vikeplikten ved venstresving. Grønn pil ville vært annerledes.'
            },
            {
                question: 'Et vikepliktskilt sier at du må vike, men bilen kommer fra venstre. Kan du bruke høyreregelen?',
                options: [
                    'Ja, høyreregelen gjelder alltid',
                    'Ja, hvis veien er smal',
                    'Nei, skiltet går foran høyreregelen',
                    'Det avhenger av hastigheten'
                ],
                correct: 'Nei, skiltet går foran høyreregelen',
                explanation: 'Trafikkskilt står over generelle trafikkregler i myndighetspyramiden.'
            },
            {
                question: 'Hva står lavest i myndighetspyramiden?',
                options: [
                    'Trafikkskilt',
                    'Trafikklys',
                    'De generelle trafikkreglene',
                    'Vegoppmerking'
                ],
                correct: 'De generelle trafikkreglene',
                explanation: 'Generelle trafikkregler gjelder når ingen høyere myndighet, trafikklys, skilt eller vegoppmerking sier noe annet.'
            }
        ]
    },

    {
        id: 'veimerking',
        title: 'Veimerking til teoriprøven: linjer, sperrelinjer og vikelinje',
        icon: '',
        shortDescription: 'Veimerking hjelper deg å forstå hvor du skal plassere bilen, når du kan skifte felt, hvor du må vike, og hvor det er farlig eller forbudt å kjøre over en linje. På teoriprøven blir du ofte testet på forskjellen mellom stiplet linje, sperrelinje, varsellinje, kombinert linje og vikelinje.',
        color: 'var(--apple-indigo)',
        seoTitle: 'Veimerking: sperrelinje, varsellinje og kombinert linje | Teori-test.no',
        seoDescription: 'Lær hva hvit sperrelinje, gul varsellinje, kombinert linje og vikelinje betyr til teoriprøven. Se bilder, regler og vanlige feil.',
        sections: [

            {
                title: 'Kort forklart: De viktigste linjene',
                type: 'table',
                content: '<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Veimerking</th><th style="padding: 12px 8px;">Kort forklart</th><th style="padding: 12px 8px;">Vanlige misforståelser</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Kjørefeltlinje</b></td><td style="padding: 12px 8px;" data-label="Kort forklart">Kort stiplet hvit linje som skiller kjørefelt i samme kjøreretning. Kan krysses når det er trygt og lovlig.</td><td style="padding: 12px 8px;" data-label="Vanlige misforståelser">Mange forveksler den med hvit varsellinje, som har lengre streker og varsler at du må være ekstra oppmerksom.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Hvit sperrelinje</b></td><td style="padding: 12px 8px;" data-label="Kort forklart">Heltrukken hvit linje. Skal som hovedregel ikke krysses for feltskifte eller forbikjøring.</td><td style="padding: 12px 8px;" data-label="Vanlige misforståelser">Mange tror den bare gjelder forbikjøring, men den gjelder også feltskifte i samme kjøreretning.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Gul varsellinje</b></td><td style="padding: 12px 8px;" data-label="Kort forklart">Gul varsellinje brukes mellom motgående trafikkretninger og varsler ofte at sikten eller forholdene gjør forbikjøring risikabelt, eller at du nærmer deg sperrelinje.</td><td style="padding: 12px 8px;" data-label="Vanlige misforståelser">Den betyr ikke automatisk forbud mot å krysse, men du må vurdere om det er trygt og lovlig.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Hvit varsellinje</b></td><td style="padding: 12px 8px;" data-label="Kort forklart">Lang stiplet hvit linje som varsler at du må være ekstra oppmerksom, for eksempel før et felt slutter eller ved vanskeligere feltskifte.</td><td style="padding: 12px 8px;" data-label="Vanlige misforståelser">Mange tror den er en vanlig kjørefeltlinje eller at den gir et absolutt kryssingsforbud.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Gul sperrelinje</b></td><td style="padding: 12px 8px;" data-label="Kort forklart">Heltrukken gul linje mellom motgående trafikkretninger. Du skal ikke krysse eller kjøre til venstre for den.</td><td style="padding: 12px 8px;" data-label="Vanlige misforståelser">Den gjelder selv om du mener du har god sikt.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Kombinert linje</b></td><td style="padding: 12px 8px;" data-label="Kort forklart">To linjer ved siden av hverandre, én stiplet og én heltrukken. Regelen følger linjen nærmest deg.</td><td style="padding: 12px 8px;" data-label="Vanlige misforståelser">Mange ser bare den stiplede linjen og glemmer å sjekke hvilken linje som ligger på egen side.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Vikelinje</b></td><td style="padding: 12px 8px;" data-label="Kort forklart">Hvite trekanter, ofte kalt «haifinner», på tvers av veien. Viser hvor du har vikeplikt.</td><td style="padding: 12px 8px;" data-label="Vanlige misforståelser">Du må ikke alltid stoppe helt, men du må stanse hvis det er nødvendig for å overholde vikeplikten.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Stopplinje</b></td><td style="padding: 12px 8px;" data-label="Kort forklart">Bred hvit tverrlinje. Viser hvor du skal stoppe helt ved stoppskilt eller rødt lys.</td><td style="padding: 12px 8px;" data-label="Vanlige misforståelser">«Rullende stopp» er ikke godkjent stans. Ved stoppskilt skal bilen stå helt stille.</td></tr></tbody></table></div>'
            },
            {
                title: 'Gul og hvit veimerking',
                type: 'text',
                content: 'Fargen på linjen gir deg viktig informasjon.\n\nGul veimerking brukes vanligvis mot eller mellom motgående trafikkretninger. Den markerer grensen mellom kjørefelt der trafikken går i motsatte retninger. Gul oppmerking kan også brukes ved midlertidig oppmerking (for eksempel ved vegarbeid).\n\nHvit veimerking brukes vanligvis for å skille kjørefelt i samme retning (der trafikken går samme vei), markere kantlinjer eller vise oppmerking i vegkryss, gangfelt og spesielle felt.\n\n*Vanlige misforståelser:* Mange tror at gul alltid betyr forbud og hvit alltid betyr "fritt fram". Det stemmer ikke. Du må se på både farge, linjetype (heltrukken eller stiplet) og den konkrete situasjonen.'
            },
            {
                title: 'Hvite linjer — de vanligste',
                type: 'table',
                content: '<div style="display:flex;flex-direction:column;gap:1.5rem"><div><strong style="font-size:1rem;color:var(--color-text)">Kjørefeltlinje (stiplet hvit)</strong><div style="background:#2d2d2d;border-radius:6px;padding:12px 16px;margin:8px 0;position:relative;overflow:hidden"><div style="font-size:10px;color:#999;margin-bottom:6px">→ Felt A</div><div style="height:3px;background:repeating-linear-gradient(90deg,white 0px,white 20px,transparent 20px,transparent 32px);border-radius:2px"></div><div style="font-size:10px;color:#999;margin-top:6px">→ Felt B</div></div><p style="color:var(--color-text-light);line-height:1.6;margin:0">Den vanligste linjen på norske veier. Skiller kjørefelt i samme kjøreretning. Du kan krysse den når det er trygt og lovlig — for eksempel ved feltskifte eller forbikjøring der forholdene tillater det.</p></div><div><strong style="font-size:1rem;color:var(--color-text)">Sperrelinje (heltrukken hvit)</strong><div style="background:#2d2d2d;border-radius:6px;padding:12px 16px;margin:8px 0"><div style="font-size:10px;color:#999;margin-bottom:6px">→ Felt A</div><div style="height:3px;background:white;border-radius:2px"></div><div style="font-size:10px;color:#999;margin-top:6px">→ Felt B</div></div><p style="color:var(--color-text-light);line-height:1.6;margin:0">Forbyr overkjøring. Du har ikke lov til å krysse en hvit sperrelinje, hverken for å bytte felt eller kjøre forbi andre. Den brukes der sikt eller trafikkforhold gjør forbikjøring farlig. [Les mer om når forbikjøring er forbudt](/laeringsressurser/forbikjoring).</p></div><div><strong style="font-size:1rem;color:var(--color-text)">Dobbel heltrukken linje</strong><div style="background:#2d2d2d;border-radius:6px;padding:12px 16px;margin:8px 0"><div style="font-size:10px;color:#999;margin-bottom:6px">→ Din retning</div><div style="height:2.5px;background:white;border-radius:2px;margin-bottom:4px"></div><div style="height:2.5px;background:white;border-radius:2px"></div><div style="font-size:10px;color:#999;margin-top:6px">← Motgående trafikk</div></div><p style="color:var(--color-text-light);line-height:1.6;margin:0">Dobbel heltrukken linje betyr at trafikk fra begge retninger skal holde seg på sin side av linjen. Du skal ikke krysse den for feltskifte eller forbikjøring.</p></div><div><strong style="font-size:1rem;color:var(--color-text)">Kombinerte linjer (én stiplet + én heltrukken)</strong><div style="background:#2d2d2d;border-radius:6px;padding:12px 16px;margin:8px 0"><div style="font-size:10px;color:#9fe1cb;margin-bottom:6px">→ Kan krysse (stiplet side)</div><div style="height:2.5px;background:repeating-linear-gradient(90deg,white 0px,white 16px,transparent 16px,transparent 26px);border-radius:2px;margin-bottom:4px"></div><div style="height:2.5px;background:white;border-radius:2px"></div><div style="font-size:10px;color:#f09595;margin-top:6px">← Kan IKKE krysse (heltrukken side)</div></div><p style="color:var(--color-text-light);line-height:1.6;margin:0">Her gjelder regelen for linjen nærmest deg. Kjører du på siden med den stiplete linjen, kan du krysse om det er trygt. Kjører du på siden med den heltrukne, er det forbudt.</p></div></div>'
            },
            {
                title: 'Hvit sperrelinje',
                type: 'text',
                content: 'En hvit sperrelinje er en heltrukken hvit linje som skiller kjørefelt i samme kjøreretning. Den brukes der det kan være farlig eller uønsket å skifte felt, for eksempel før kryss, ved dårlig oversikt eller der trafikken må holdes i bestemte felt.\n\nDu skal som hovedregel ikke kjøre på eller over en hvit sperrelinje. Det betyr at du ikke skal bruke den til feltskifte eller [forbikjøring](/laeringsressurser/forbikjoring). Les mer om [reglene for forbikjøring](/laeringsressurser/forbikjoring).\n\n*Vanlige misforståelser:* Hvit sperrelinje gjelder ikke bare forbikjøring. Den forbyr også vanlige feltskifter før for eksempel kryss eller i tunneler.'
            },
            {
                title: 'Gul varsellinje',
                type: 'table',
                content: '<p style="color:var(--color-text-light); line-height:1.6; margin-bottom:1.5rem;">Gul varsellinje brukes mellom motgående trafikkretninger og varsler ofte at sikten eller forholdene gjør forbikjøring risikabelt, eller at du nærmer deg sperrelinje. Den betyr ikke automatisk forbud mot å krysse, men du må vurdere om det er trygt og lovlig.</p><div style="background:#2d2d2d; border-radius:8px; padding:20px; margin:16px 0; max-width:600px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);"><div style="font-size:0.85rem; font-weight:500; color:var(--color-text-light); margin-bottom:10px; display:flex; justify-content:space-between;"><span>← Motgående trafikk</span><span>Din retning →</span></div><svg viewBox="0 0 400 80" style="width:100%; height:auto; display:block; background:#1a1a1a; border-radius:6px; border:1px solid #333;"><line x1="0" y1="4" x2="400" y2="4" stroke="#ffffff" stroke-width="4" /><line x1="0" y1="76" x2="400" y2="76" stroke="#ffffff" stroke-width="4" /><path d="M 120 22 L 80 22 M 92 15 L 80 22 L 92 29" stroke="rgba(255, 255, 255, 0.45)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" /><path d="M 280 58 L 320 58 M 308 51 L 320 58 L 308 65" stroke="rgba(255, 255, 255, 0.45)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" /><line x1="0" y1="40" x2="400" y2="40" stroke="#ffd100" stroke-width="5" stroke-dasharray="48, 16" /></svg></div><p style="color:var(--color-text-light); line-height:1.6; margin-top:1.5rem;"><em>Vanlige misforståelser:</em> En gul varsellinje er ikke et absolutt kryssingsforbud på samme måte som en sperrelinje, men den varsler at forbikjøring er risikabelt og krever ekstra aktsomhet og sikkerhetsvurdering.</p>'
            },
            {
                title: 'Hvit varsellinje',
                type: 'table',
                content: '<p style="color:var(--color-text-light); line-height:1.6; margin-bottom:1.5rem;">Hvit varsellinje brukes ved hvit oppmerking, typisk mellom kjørefelt i samme kjøreretning eller der trafikken går samme vei. Den varsler om fare eller spesielle forhold ved feltskifte.</p><p style="color:var(--color-text-light); line-height:1.6; margin-bottom:1.5rem;">Den kan ligne på en vanlig feltlinje, men varsellinjen har et annet mønster med lengre streker og kortere mellomrom. Akkurat som den gule varsellinjen, betyr ikke en hvit varsellinje automatisk at det er forbudt å krysse den, men den signaliserer at du må være ekstra på vakt før du skifter felt.</p><div style="background:#2d2d2d; border-radius:8px; padding:20px; margin:16px 0; max-width:600px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);"><div style="font-size:0.85rem; font-weight:500; color:var(--color-text-light); margin-bottom:10px; display:flex; justify-content:space-between;"><span>Felt A (Din retning) →</span><span>Felt B (Samme retning) →</span></div><svg viewBox="0 0 400 80" style="width:100%; height:auto; display:block; background:#1a1a1a; border-radius:6px; border:1px solid #333;"><line x1="0" y1="4" x2="400" y2="4" stroke="#ffffff" stroke-width="4" /><line x1="0" y1="76" x2="400" y2="76" stroke="#ffffff" stroke-width="4" /><path d="M 80 22 L 120 22 M 108 15 L 120 22 L 108 29" stroke="rgba(255, 255, 255, 0.45)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" /><path d="M 280 58 L 320 58 M 308 51 L 320 58 L 308 65" stroke="rgba(255, 255, 255, 0.45)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" /><line x1="0" y1="40" x2="400" y2="40" stroke="#ffffff" stroke-width="5" stroke-dasharray="48, 16" /></svg></div><p style="color:var(--color-text-light); line-height:1.6; margin-top:1rem;"><em>Vanlige misforståelser:</em> Mange forveksler hvit varsellinje med en vanlig kjørefeltlinje og utfører feltskifter uten ekstra oppmerksomhet. Se alltid etter lengden på strekene!</p>'
            },
            {
                title: 'Kombinerte linjer',
                type: 'text',
                content: 'Kombinert linje består av to linjer ved siden av hverandre (for eksempel en stiplet linje og en heltrukken linje). Da gjelder alltid regelen for den linjen som ligger nærmest din side av veien.\n\nHvis den stiplede linjen ligger nærmest din side, kan du krysse linjene når det er trygt og lovlig. Hvis den heltrukne linjen ligger nærmest din side, er det strengt forbudt å krysse eller kjøre over linjene.\n\n*Vanlige misforståelser:* Mange glemmer å sjekke hvilken linje som ligger nærmest eget kjøretøy, og antar feilaktig at de ikke har lov til å krysse i det hele tatt, eller omvendt.'
            },
            {
                title: 'Vikelinje',
                type: 'text',
                content: 'Vikelinje viser hvor du skal vike eller stanse når du har [vikeplikt](/laeringsressurser/vikeplikt). Den består av en rekke hvite trekanter («haifinner») på tvers av kjørebanen og gjerne et vikesymbol i asfalten i forkant.\n\nVikelinjen betyr ikke alltid at du må stoppe helt. Du skal stanse dersom det er nødvendig for å overholde vikeplikten. Hvis det er fri sikt og ingen kryssende trafikk du har vikeplikt for, kan du kjøre videre med tilpasset fart uten å stoppe helt. Les mer i vår [komplette guide til vikeplikt](/laeringsressurser/vikeplikt).\n\n*Vanlige misforståelser:* Noen tror at vikelinje krever full stans uansett trafikk. Det er kun ved stopplinje og stoppskilt at du har stopplikt.'
            },
            {
                title: 'Stopplinje',
                type: 'text',
                content: 'Stopplinje viser hvor du skal stanse helt når du har stopplikt ved stoppskilt eller rødt trafikklys.\n\nVed stoppskilt skal bilen stanse helt (hjulene må stå helt stille) før stopplinjen, slik at du har full kontroll og oversikt før du kjører videre.\n\n*Vanlige misforståelser:* Å utføre et såkalt «rullende stopp» (hvor bilen ruller sakte over linjen uten å stanse fullstendig) er ulovlig og regnes som et alvorlig brudd på trafikkreglene.'
            },
            {
                title: 'Sperreområde',
                type: 'text',
                content: 'Sperreområde er et markert område i kjørebanen, ofte med skrå, hvite eller gule striper (skravering). Det viser et område du ikke skal kjøre i, over, eller bruke som kjørefelt.\n\nSperreområder brukes for å lede trafikken riktig, skille trafikkstrømmer eller beskytte områder der det ikke er trygt eller ønskelig å kjøre.\n\n*Vanlige misforståelser:* Noen tror at sperreområdet kan brukes til å snike forbi kø, eller som et ekstra kjørefelt når man skal svinge. Det er strengt forbudt.'
            },
            {
                title: 'Pilmerking',
                type: 'info',
                content: 'Piler i kjørefeltet viser hvilken retning feltet er beregnet for. Du må lese pilene sammen med skilt, trafikklys, sperrelinjer og plasseringen din i feltet. Hvis du ligger i et felt som bare går til venstre, må du følge feltets retning eller skifte felt i god tid der det er lovlig.'
            },
            {
                title: 'Symboler i veibanen',
                type: 'text',
                content: 'Vikesymbol (omvendt trekant malt i asfalten) varsler deg om kommende vikeplikt — det gir deg ekstra tid til å forberede deg, og brukes ofte i forkant av vikelinjen.\n\nGangsymbol viser at fotgjengere bruker det området. Sykkelsymbol markerer sykkelfelt — her gjelder trafikkreglenes bestemmelser om sykkelfelt.\n\nTekst som "STOPP", "BUSS", "TAXI" og "SKOLE" gir stedsspesifikk informasjon. "STOPP" hører sammen med stoppskilt. "BUSS" markerer kollektivfelt.'
            },
            {
                title: 'Gangfelt og annen oppmerking',
                type: 'text',
                content: 'Gangfelt er også veimerking. Det viser hvor gående kan krysse vegen, og hvor førere må være særlig oppmerksomme.\n\nDu må alltid tilpasse farten når du nærmer deg gangfelt, og være klar til å stanse for gående som er i eller på vei ut i gangfeltet.\n\nAndre symboler og piler i kjørebanen kan vise påbudt kjøreretning, feltbruk, sykkelfelt eller annen viktig informasjon. Slike symboler må leses sammen med [skilt](/trafikkskilt), trafikklys og situasjonen rundt deg.'
            },
            {
                title: 'Interaktiv guide — klikk og lær',
                type: 'calculator',
                content: 'Klikk på linjene under for å se hva de betyr:'
            },
            {
                title: '🎮 Test deg selv med Veimerking-spillet',
                type: 'tip',
                content: 'Klar for å teste det du har lært? Prøv vårt interaktive **[Veimerking-spill](/laeringsspill/veimerking)** og se om du klarer full pott!'
            }
        ],
        faq: [
            {
                question: 'Hva betyr hvit sperrelinje?',
                answer: 'En hvit sperrelinje er en heltrukken hvit linje. Den skiller kjørefelt i samme kjøreretning og betyr at det er forbudt å krysse linjen, enten det er for feltskifte eller forbikjøring.'
            },
            {
                question: 'Hva betyr gul varsellinje?',
                answer: 'Gul varsellinje brukes mellom motgående trafikkretninger og varsler ofte at sikten eller forholdene gjør forbikjøring risikabelt, eller at du nærmer deg sperrelinje. Den betyr ikke automatisk forbud mot å krysse, men du må vurdere om det er trygt og lovlig.'
            },
            {
                question: 'Kan jeg krysse en varsellinje?',
                answer: 'Ja, en varsellinje (både gul og hvit) gir ikke et automatisk forbud mot å krysse, men den fungerer som et tydelig varsel om at du må utvise ekstra oppmerksomhet og at kryssing/forbikjøring kan være risikabelt.'
            },
            {
                question: 'Hva betyr kombinert linje?',
                answer: 'Kombinert linje består av to linjer ved siden av hverandre (f.eks. én stiplet og én heltrukken). Du må alltid forholde deg til reglene for den linjen som ligger nærmest din side av veien.'
            },
            {
                question: 'Hva er vikelinje?',
                answer: 'En vikelinje består av hvite trekanter («haifinner») på tvers av kjørebanen. Den viser nøyaktig hvor du skal vike for kryssende trafikk ved vikeplikt. Du må kun stanse dersom det er nødvendig for å slippe frem andre.'
            },
            {
                question: 'Hva er forskjellen på gul og hvit veimerking?',
                answer: 'Gul veimerking skiller vanligvis trafikk i motsatte retninger (eller markerer midlertidig vegarbeid), mens hvit veimerking skiller kjørefelt i samme kjøreretning, markerer kantlinjer eller viser oppmerking i vegkryss.'
            },
            {
                question: 'Hva er et sperreområde?',
                answer: 'Et sperreområde er avgrenset av heltrukne linjer med skravering inni. Det er forbudt å kjøre inn i eller over et sperreområde.'
            },
            {
                question: 'Kan jeg krysse en hvit sperrelinje for å svinge inn i avkjørsel?',
                answer: 'Som hovedregel skal du ikke krysse sperrelinje. Det finnes enkelte praktiske unntak, for eksempel inn- og utkjøring til eiendom der dette kan gjøres trygt og ikke er forbudt av skilt eller annen regulering. På teoriprøven bør du likevel huske hovedregelen: sperrelinje skal ikke krysses for feltskifte eller forbikjøring.'
            }
        ],
        miniQuiz: [
            {
                question: "Du kjører langs en hvit sperrelinje. Hva betyr det?",
                options: [
                    "Du kan krysse linjen hvis det er lite trafikk",
                    "Du skal ikke krysse linjen for feltskifte eller forbikjøring",
                    "Linjen gjelder bare for motgående trafikk",
                    "Linjen betyr at du må stoppe"
                ],
                correct: "Du skal ikke krysse linjen for feltskifte eller forbikjøring",
                explanation: "Hvit sperrelinje er heltrukken og skal ikke krysses for feltskifte eller forbikjøring."
            },
            {
                question: "Du ser en gul varsellinje mellom motgående kjørefelt. Hva betyr den?",
                options: [
                    "Forbikjøring er alltid strengt forbudt",
                    "Den varsler at sikten/forholdene gjør forbikjøring risikabelt eller at sperrelinje nærmer seg, men er ikke et automatisk kryssingsforbud",
                    "Du har forkjørsrett og kan fritt kjøre forbi",
                    "Du må stoppe før linjen"
                ],
                correct: "Den varsler at sikten/forholdene gjør forbikjøring risikabelt eller at sperrelinje nærmer seg, men er ikke et automatisk kryssingsforbud",
                explanation: "Gul varsellinje brukes mellom motgående retninger og advarer om økt risiko (f.eks. på grunn av sikt). Den er ikke et automatisk forbud mot å krysse, men krever at du gjør en grundig sikkerhetsvurdering."
            },
            {
                question: "Du kjører ved siden av en kombinert linje. Hvilken del av linjen bestemmer om du kan krysse?",
                options: [
                    "Linjen lengst fra deg",
                    "Linjen nærmest deg",
                    "Den gule linjen uansett plassering",
                    "Den bredeste linjen"
                ],
                correct: "Linjen nærmest deg",
                explanation: "Ved kombinert linje er det alltid linjen nærmest din side av veien som bestemmer om du kan krysse eller ikke."
            },
            {
                question: "Hva betyr en vikelinje med hvite trekanter på tvers av kjøreretningen?",
                options: [
                    "Du har vikeplikt og må stoppe hvis det er nødvendig",
                    "Du må alltid stoppe helt",
                    "Du har forkjørsrett",
                    "Du kan bare kjøre rett frem"
                ],
                correct: "Du har vikeplikt og må stoppe hvis det er nødvendig",
                explanation: "Vikelinje («haifinner») viser at du har vikeplikt. Du må stoppe dersom det er nødvendig for å overholde vikeplikten, men du trenger ikke å stoppe helt hvis veien er klar."
            },
            {
                question: "Hva er forskjellen på vikelinje og stopplinje?",
                options: [
                    "Det er ingen forskjell",
                    "Ved vikelinje må du alltid stoppe, ved stopplinje kan du kjøre hvis det er klart",
                    "Ved stopplinje skal du stoppe helt når du har stopplikt eller rødt lys, mens ved vikelinje stopper du bare hvis vikeplikten krever det",
                    "Stopplinje gjelder bare for fotgjengere"
                ],
                correct: "Ved stopplinje skal du stoppe helt når du har stopplikt eller rødt lys, mens ved vikelinje stopper du bare hvis vikeplikten krever det",
                explanation: "Ved stopplinje (for eksempel ved stoppskilt) skal du stoppe helt opp slik at hjulene står stille. Ved vikelinje stopper du bare hvis det er nødvendig for å overholde vikeplikten."
            },
            {
                question: "Hva kreves av deg når du møter en stopplinje ved et stoppskilt?",
                options: [
                    "Du kan rulle sakte over linjen hvis det er fri sikt",
                    "Bilen må stanses helt opp (hjulene må stå helt stille) før du kjører videre",
                    "Du må stoppe i nøyaktig 5 sekunder uansett",
                    "Du skal kun blinke med lysene"
                ],
                correct: "Bilen må stanses helt opp (hjulene må stå helt stille) før du kjører videre",
                explanation: "Ved stoppskilt er det påbudt å foreta en fullstendig stans (rullende stopp er ulovlig). Hjulene må stå helt i ro."
            },
            {
                question: "Hva er regelen for å kjøre i et sperreområde (skravert felt med heltrukken linje)?",
                options: [
                    "Det er tillatt om du skal svinge",
                    "Det er strengt forbudt å kjøre inn i eller over et sperreområde",
                    "Det kan brukes til å kjøre forbi kø",
                    "Det gjelder kun for lastebiler"
                ],
                correct: "Det er strengt forbudt å kjøre inn i eller over et sperreområde",
                explanation: "Sperreområder brukes for å lede trafikk og skille strømmer. Det er forbudt å kjøre på, over eller oppholde seg i et sperreområde."
            },
            {
                question: "Hva er formålet med en hvit varsellinje ved feltskifte?",
                options: [
                    "Den gir deg automatisk forkjørsrett ved feltskifte",
                    "Den varsler om fare eller spesielle forhold ved feltskifte, men gir ikke et automatisk forbud",
                    "Den betyr at du må stanse helt",
                    "Den viser at feltskifte er forbudt"
                ],
                correct: "Den varsler om fare eller spesielle forhold ved feltskifte, men gir ikke et automatisk forbud",
                explanation: "Hvit varsellinje signaliserer fare eller spesielle forhold ved feltskifte (f.eks. nær kryss eller tunnell). Du kan krysse den, men må utvise ekstra aktsomhet."
            }
        ]
    },
    {
        id: 'rundkjoring',
        title: 'Vikeplikt i rundkjøring – regler, blinklys og feltvalg',
        icon: '🔄',
        shortDescription: 'Rundkjøring er et av temaene mange gjør feil på til teoriprøven. I denne guiden lærer du hva som gjelder ved innkjøring, plassering, feltskifte og utkjøring fra rundkjøring.',
        color: 'var(--apple-blue)',
        seoTitle: 'Rundkjøring regler – vikeplikt, blinklys og feltvalg | Teori-test.no',
        seoDescription: 'Lær regler for rundkjøring til teoriprøven: vikeplikt, blinklys, feltvalg, feltskifte, fotgjengere og vanlige feil. Med bilder og miniQuiz.',
        sections: [
            {
                title: 'Kort forklart',
                type: 'info',
                content: 'Når du skal inn i en rundkjøring, har du normalt vikeplikt for trafikk som allerede er inne i rundkjøringen. Du må senke farten, følge vikepliktskilt og vikepliktslinje, og bare kjøre inn når det er trygt.\n\nDu skal blinke til høyre når du skal ut av rundkjøringen. Skal du langt rundt, kan venstreblink før og inne i rundkjøringen hjelpe andre å forstå hvor du skal, men det viktigste er at du alltid blinker riktig ut.'
            },
            {
                title: 'Hovedregelen: Vikeplikt ved innkjøring',
                type: 'warning',
                content: 'Når du nærmer deg en rundkjøring, skal du se etter vikepliktskilt og vikepliktslinje. Du må vike for trafikk som allerede er inne i rundkjøringen.\n\nDette er en vanlig teorifelle: Mange tenker “bilen kommer fra venstre, så jeg kan kjøre”. Slik fungerer det ikke i rundkjøring. Ved innkjøring følger du vikeplikten, ikke høyreregelen.\n\nDu skal:\n- senke farten\n- se etter trafikk inne i rundkjøringen\n- stoppe om nødvendig\n- kjøre inn først når du har trygg luke'
            },
            {
                title: 'Rundkjøring med ett felt',
                type: 'text',
                content: 'Bildet viser en rundkjøring med ett kjørefelt. Her er prinsippet enkelt: Du viker for trafikk som allerede er inne, kjører inn når det er klart, følger kjørefeltet rundt og blinker til høyre når du skal ut.\n\nI små rundkjøringer skjer alt raskt. Derfor er lav fart og tydelig blinklys ekstra viktig.\n\n![Rundkjøring med ett felt som viser vikeplikt ved innkjøring og riktig kjøremønster](/Rundkjoring_med_kjoretoybaner.png)'
            },
            {
                title: 'Rundkjøring med to felt',
                type: 'text',
                content: 'I rundkjøringer med to felt bør du velge riktig felt før du kjører inn. Som tommelfingerregel gjelder dette:\n\n- Høyre felt: når du skal til høyre eller rett frem\n- Venstre felt: når du skal til venstre eller snu\n- Følg alltid skilt, piler og vegoppmerking hvis de viser noe annet\n\nPlassering handler ikke bare om regler. Det handler også om å gjøre det lett for andre å forstå hva du skal.\n\n![Rundkjøring med to felt som viser plassering, feltvalg og kjøremønster](/Rundkjoring_med_kjoretoybaner_to_felt.png)'
            },
            {
                title: 'Slik bruker du blinklys i rundkjøring',
                type: 'warning',
                content: 'Blinklys er et av de vanligste feilpunktene i rundkjøring.\n\nSkal du til høyre ved første avkjøring, blinker du til høyre før du kjører inn og holder blinklyset på til du har kjørt ut.\n\nSkal du rett frem, blinker du vanligvis ikke inn i rundkjøringen. Du blinker til høyre når du nærmer deg avkjøringen du skal ut av.\n\nSkal du til venstre eller mer enn halvveis rundt, kan du blinke til venstre for å vise at du skal langt rundt. Du må likevel bytte til høyre blinklys før du kjører ut.\n\nBlink i god tid, men ikke så tidlig at andre kan misforstå hvilken avkjøring du skal ta.'
            },
            {
                title: 'Feltskifte inne i rundkjøringen',
                type: 'warning',
                content: 'Hvis du skifter felt inne i rundkjøringen, har du vikeplikt for trafikk i feltet du skal inn i. Blinklys gir deg ikke rett til å skifte felt.\n\nFør du skifter felt skal du:\n- sjekke speil\n- sjekke blindsone\n- blinke\n- vente til det er trygt\n\nFlettereglene gjelder ikke på samme måte inne i rundkjøringen. Den som skifter felt, må passe på.'
            },
            {
                title: 'Når du kjører ut av rundkjøringen',
                type: 'info',
                content: 'Når du skal ut, skal du blinke til høyre. Start blinkingen når du passerer avkjøringen før den du skal ut av, så lenge det ikke kan misforstås.\n\nDu må også være oppmerksom på fotgjengere og syklister ved utkjøringen. Hvis det er gangfelt eller sykkelfelt der du kjører ut, må du vike for dem som skal krysse.\n\nDette er en klassisk teoriprøvefelle: Du er nesten ferdig med rundkjøringen, men har fortsatt ansvar for myke trafikanter.'
            },
            {
                title: 'Trikk, buss og utrykningskjøretøy',
                type: 'text',
                content: 'Vær ekstra oppmerksom på trikk. Trikk følger skinner, kan ha egne signaler og kan ikke svinge unna slik en bil kan. Du må ikke presse deg foran trikken.\n\nBuss følger i hovedsak de samme reglene som andre kjøretøy i rundkjøringen.\n\nHvis et utrykningskjøretøy kommer med blålys og sirene, skal du gi fri vei så langt det er trygt. Senk farten, hold til siden og unngå å blokkere rundkjøringen.'
            },
            {
                title: 'Vanlige feil på teoriprøven',
                type: 'tip',
                content: 'Mange feil i rundkjøring handler om misforståelser:\n\n- Å tro at høyreregelen gjelder ved innkjøring\n- Å glemme å blinke til høyre ved utkjøring\n- Å tro at venstreblink ved innkjøring alltid er påbudt\n- Å velge feil felt før rundkjøringen\n- Å skifte felt uten å vike\n- Å glemme fotgjengere og syklister ved utkjøring\n- Å tro at blinklys gir rett til å kjøre eller skifte felt'
            },
            {
                title: 'Klar til å øve?',
                type: 'info',
                content: 'Når du kan rundkjøring, blir mange vikepliktspørsmål lettere. Les også vår komplette guide om [vikeplikt](/laeringsressurser/vikeplikt), eller test deg selv med [vikeplikt-quizen](/quiz/vikeplikt).'
            }
        ],
        faq: [
            {
                question: 'Hvem har vikeplikt i rundkjøring?',
                answer: 'Den som kjører inn i rundkjøringen har normalt vikeplikt for trafikk som allerede er inne i rundkjøringen.'
            },
            {
                question: 'Gjelder høyreregelen i rundkjøring?',
                answer: 'Nei, ved innkjøring i rundkjøring følger du vikepliktskilt og vikepliktslinje. Du skal vike for trafikk som allerede er inne.'
            },
            {
                question: 'Skal man blinke til venstre i rundkjøring?',
                answer: 'Det er ikke alltid påbudt, men det kan være nyttig hvis du skal til venstre eller mer enn halvveis rundt. Du skal blinke til høyre når du skal ut.'
            },
            {
                question: 'Hvem har vikeplikt ved feltskifte i rundkjøring?',
                answer: 'Den som skifter felt har vikeplikt for trafikk i feltet han eller hun skal inn i.'
            },
            {
                question: 'Hvilket felt skal man bruke i rundkjøring?',
                answer: 'Som tommelfingerregel bruker du høyre felt til høyre eller rett frem, og venstre felt til venstre eller U-sving. Følg alltid skilt og vegoppmerking hvis de viser noe annet.'
            },
            {
                question: 'Må man vike for fotgjengere når man kjører ut av rundkjøring?',
                answer: 'Ja, du må vike for fotgjengere i gangfelt og være oppmerksom på syklister ved utkjøringen.'
            }
        ],
        miniQuiz: [
            {
                question: 'Du nærmer deg en rundkjøring. En bil er allerede inne i rundkjøringen. Hva gjør du?',
                options: [
                    'Kjører først fordi høyreregelen gjelder',
                    'Viker for bilen som allerede er inne i rundkjøringen',
                    'Kjører først hvis du skal rett frem',
                    'Stopper bare hvis bilen blinker'
                ],
                correct: 'Viker for bilen som allerede er inne i rundkjøringen',
                explanation: 'Ved innkjøring i rundkjøring har du normalt vikeplikt for trafikk som allerede er inne.'
            },
            {
                question: 'Du skal ta første avkjøring til høyre. Hvordan bør du bruke blinklys?',
                options: [
                    'Blinke til høyre før du kjører inn og holde blinklyset på til du er ute',
                    'Ikke blinke før du har kjørt ut',
                    'Blinke til venstre først',
                    'Bare blinke hvis det er biler bak deg'
                ],
                correct: 'Blinke til høyre før du kjører inn og holde blinklyset på til du er ute',
                explanation: 'Ved første avkjøring til høyre bør du blinke til høyre før rundkjøringen og fortsette til du har kjørt ut.'
            },
            {
                question: 'Du skal rett frem i en vanlig rundkjøring. Hva er riktig?',
                options: [
                    'Blinke til venstre inn og ikke blinke ut',
                    'Ikke blinke inn, men blinke til høyre når du skal ut',
                    'Blinke til høyre før du kjører inn',
                    'Bruke nødblink gjennom rundkjøringen'
                ],
                correct: 'Ikke blinke inn, men blinke til høyre når du skal ut',
                explanation: 'Skal du rett frem, blinker du vanligvis ikke inn. Du blinker til høyre når du skal ut.'
            },
            {
                question: 'Du ligger i indre felt og skal skifte til ytre felt for å kjøre ut. Hva gjelder?',
                options: [
                    'Biler i ytre felt må slippe deg ut',
                    'Flettereglene gjelder alltid',
                    'Du har vikeplikt for trafikk i feltet du skal inn i',
                    'Du kan skifte felt hvis du blinker'
                ],
                correct: 'Du har vikeplikt for trafikk i feltet du skal inn i',
                explanation: 'Den som skifter felt, har vikeplikt for trafikk i feltet han eller hun skal inn i.'
            },
            {
                question: 'Du skal til venstre i en rundkjøring med to felt og ingen skilt eller piler som sier noe annet. Hvilket felt er vanligvis riktig?',
                options: [
                    'Høyre felt',
                    'Venstre felt',
                    'Vilkårlig felt',
                    'Kollektivfelt'
                ],
                correct: 'Venstre felt',
                explanation: 'Som tommelfingerregel bruker du venstre felt når du skal til venstre eller snu.'
            },
            {
                question: 'Du kjører ut av en rundkjøring og krysser et gangfelt. En fotgjenger skal over. Hva gjør du?',
                options: [
                    'Kjører først fordi du kommer fra rundkjøringen',
                    'Viker for fotgjengeren',
                    'Tut og kjør videre',
                    'Viker bare hvis fotgjengeren allerede er midt i gangfeltet'
                ],
                correct: 'Viker for fotgjengeren',
                explanation: 'Når du kjører ut av rundkjøringen, må du vike for fotgjengere i gangfelt ved utkjøringen.'
            },
            {
                question: 'Må du alltid blinke til venstre når du skal mer enn halvveis rundt?',
                options: [
                    'Ja, det er alltid påbudt',
                    'Nei, men det kan være nyttig for å vise hvor du skal',
                    'Nei, blinklys brukes ikke i rundkjøring',
                    'Ja, men bare i små rundkjøringer'
                ],
                correct: 'Nei, men det kan være nyttig for å vise hvor du skal',
                explanation: 'Venstreblink kan være nyttig når du skal langt rundt, men det viktigste er at du blinker til høyre når du skal ut.'
            }
        ]
    },

    {
        id: 'forbikjoring',
        title: 'Forbikjøring – regler, forbud og feller | Teori-test.no',
        icon: '🚗',
        shortDescription: 'Lær reglene for forbikjøring til teoriprøven klasse B: gangfelt, kryss, høyre side, forbikjøringsforbud, syklist, buss, traktor og motorvei.',
        color: 'var(--apple-orange)',
        seoTitle: 'Forbikjøring – regler, forbud og feller | Teori-test.no',
        seoDescription: 'Lær reglene for forbikjøring til teoriprøven klasse B: gangfelt, kryss, høyre side, forbikjøringsforbud, syklist, buss, traktor og motorvei.',
        sections: [
            {
                title: 'Forbikjøring på teoriprøven: når er det lov, og når må du vente?',
                type: 'text',
                content: 'Forbikjøring virker enkelt: du tar igjen et kjøretøy, kjører forbi og legger deg inn igjen. På teoriprøven er det sjelden så enkelt. Der testes du på om du forstår sikt, fart, plassering, skilt, veimerking og risiko samtidig.\n\nDen tryggeste huskeregelen er denne:\n\nDu skal bare kjøre forbi når du ser langt nok, har plass nok, ikke bryter skilt eller oppmerking, og kan komme trygt inn igjen uten å forstyrre andre.\n\nEr du i tvil, er riktig svar som regel: vent.'
            },
            {
                title: 'Kort forklart: hovedregelen',
                type: 'info',
                content: 'Hovedregelen i trafikkreglene er at forbikjøring skal skje til venstre.\n\nFør du starter en forbikjøring må du forsikre deg om at:\n• veien er fri langt nok fremover\n• kjøretøyet foran ikke selv har gitt tegn til forbikjøring\n• ingen bakfra allerede har begynt å kjøre forbi deg\n• du kan komme inn igjen uten fare, hindring eller unødig forstyrrelse\n\nEtter forbikjøringen skal du legge deg tilbake til høyre når det kan skje trygt.'
            },
            {
                title: 'Sjekklisten før du kjører forbi',
                type: 'tip',
                content: 'Før en forbikjøring bør du tenke:\n\nSikt: Ser jeg langt nok frem?\nPlass: Har jeg plass til å komme inn igjen?\nFart: Rekker jeg forbikjøringen uten å skape fare?\nBakover: Er noen allerede i ferd med å kjøre forbi meg?\nSkilt og linjer: Er det forbikjøringsforbud, sperrelinje eller dårlig sikt?\nMyke trafikanter: Kan fotgjengere, syklister eller barn være skjult?\n\nHusk også at høy fart gir lengre bremselengde, så du trenger mer plass enn du tror. På teoriprøven er det ofte ikke nok at forbikjøringen “kan gå”. Den må være trygg og lovlig.'
            },
            {
                title: 'Når er forbikjøring på høyre side lov?',
                type: 'warning',
                content: 'Forbikjøring på høyre side er unntaket, ikke hovedregelen.\n\nDet kan være lov i noen situasjoner:\n• kjøretøyet foran svinger til venstre eller tydelig forbereder venstresving\n• trafikken er så tett at alle felt i samme retning er opptatt og felt beveger seg ulikt\n• du kjører lovlig i et felt for bestemte trafikanter, for eksempel kollektivfelt der du har lov å kjøre\n• forbikjøring av sporvogn kan i noen tilfeller skje til høyre\n\nDet betyr ikke at du kan bruke høyre felt som en “snarvei” fordi bilen foran kjører sakte i venstre felt. I vanlig fri trafikk skal forbikjøring skje til venstre.'
            },
            {
                title: 'Forbikjøring ved gangfelt',
                type: 'warning',
                content: 'Dette er en klassisk teoriprøvefelle.\n\nDu må ikke kjøre forbi et kjøretøy som hindrer sikten til et gangfelt. Grunnen er enkel: det kan være en fotgjenger foran bilen du ikke ser.\n\nTypisk situasjon:\nEn bil foran deg senker farten eller stopper før et gangfelt. Du ser ikke hele gangfeltet. Da skal du ikke kjøre forbi. Du skal senke farten og være klar til å stoppe.\n\nDette henger tett sammen med vikeplikt og høyreregelen, spesielt når du vurderer fotgjengere, kryss og sideveier.\n\nKort fasit:\nHvis kjøretøyet foran skjuler sikten til gangfeltet, skal du vente.'
            },
            {
                title: 'Forbikjøring i kryss',
                type: 'text',
                content: 'Forbikjøring like foran eller i veikryss er som hovedregel forbudt.\n\nDet finnes unntak, for eksempel hvis:\n• det er flere kjørefelt i samme retning\n• kjøretøyet foran tydelig skal svinge til venstre, og du passerer til høyre\n• krysset er regulert av trafikklys eller politi\n• trafikk fra sidevei har vikeplikt etter skilt\n\nMen på teoriprøven bør du være varsom: selv om et unntak kan gjøre forbikjøring lovlig, kan situasjonen fortsatt være utrygg. Ser du ikke godt nok, venter du.'
            },
            {
                title: 'Bakketopp, sving og dårlig sikt',
                type: 'warning',
                content: 'Du skal ikke kjøre forbi der sikten er hindret av bakketopp, kurve eller andre forhold.\n\nHvis du ikke ser langt nok til å fullføre forbikjøringen og komme inn igjen trygt, er riktig valg å vente.\n\nDette gjelder særlig på landevei. En traktor eller saktegående bil kan friste deg til å kjøre forbi, men hvis veien svinger eller går over en topp, vet du ikke hva som kommer imot.'
            },
            {
                title: 'Forbikjøringsforbud-skiltet',
                type: 'info',
                content: 'Skilt 334, forbikjøringsforbud, betyr at du ikke har lov til å kjøre forbi motorvogn med flere enn to hjul.\n\n![Forbikjøringsforbud skilt 334 med rød bil og svart bil](/signs/skilt-334.svg)\n*Skilt 334: Forbikjøringsforbud. Du kan ikke kjøre forbi motorvogn med flere enn to hjul.*\n\nForbudet gjelder frem til det blir opphevet av skilt, eller over strekningen som er angitt med underskilt.\n\nViktig nyanse:\nForbudsskiltet gjelder forbikjøring av motorvogn med flere enn to hjul. Det betyr ikke automatisk at enhver passering av en tohjuling er forbudt. Men du må fortsatt følge alle andre regler: sikt, avstand, fart, veimerking og sikkerhet.\n\nLurer du på flere trafikkskilt? Se vår [komplette skiltguide](/laeringsressurser/skilt) eller prøv [skilt-testen](/quiz/skilt).'
            },
            {
                title: 'Sperrelinje og varsellinje',
                type: 'text',
                content: 'Veimerking kan gjøre forbikjøring forbudt eller sterkt frarådet.\n\n• Sperrelinje: skal ikke krysses for forbikjøring.\n• Gul varsellinje: varsler at sikten fremover er for kort til vanlig forbikjøring.\n• Kombinert linje: du må følge linjen på din side.\n\nHvis du møter både et ønske om å kjøre forbi og en sperrelinje i veien, er svaret enkelt: du venter.\n\n[Les mer om sperrelinje, varsellinje og veimerking](/laeringsressurser/veimerking).'
            },
            {
                title: 'Forbikjøring av syklist, moped og traktor',
                type: 'tip',
                content: 'Du kan bare kjøre forbi en syklist, moped eller traktor når det kan skje trygt.\n\nFor syklist må du ha god sideavstand. En vanlig tommelfingerregel er å holde minst 1,5 meter sideavstand ved forbikjøring av syklist, og mer hvis farten er høy eller forholdene er trange.\n\n![Forbikjøring av syklist med minst 1,5 meter sideavstand](/forbikjoring-syklist.png)\n*Hold minst 1,5 meter sideavstand som tommelfingerregel, og mer ved høy fart eller trange forhold.*\n\nEr veien smal, det kommer møtende trafikk, eller sikten er dårlig, skal du vente. Ikke press deg forbi.\n\nVed traktor og saktegående kjøretøy er feilen ofte utålmodighet. Husk at traktoren kan svinge inn på en gårdsvei, være bredere enn du tror, eller skjule sikten fremover.'
            },
            {
                title: 'Buss ved holdeplass',
                type: 'warning',
                content: 'Buss ved holdeplass krever ekstra aktsomhet.\n\nI tettbygd strøk med fartsgrense 60 km/t eller lavere har du vikeplikt når bussen gir tegn for å kjøre ut fra holdeplass, så lenge du kan slippe den ut uten fare.\n\nDu må også være forberedt på at passasjerer kan komme foran eller bak bussen. Barn og fotgjengere kan være skjult.'
            },
            {
                title: 'Vanlige teoriprøvefeller',
                type: 'info',
                content: '• Du kjører forbi fordi bilen foran kjører sakte, men overser dårlig sikt.\n• Du passerer ved gangfelt fordi “det ser klart ut”.\n• Du bruker høyre felt som forbikjøringsfelt på motorvei.\n• Du glemmer at sperrelinje forbyr forbikjøring.\n• Du kjører forbi traktor rett før sving eller bakketopp.\n• Du ser forbikjøringsforbud-skilt, men tenker ikke over hva skiltet faktisk gjelder.\n\nNår du har lest reglene, kan du teste deg med [gratis teoriprøve](/quiz) eller [skilt-testen](/quiz/skilt).'
            }
        ],
        miniQuiz: [
            {
                question: 'Bilen foran stopper før et gangfelt. Du ser ikke hele gangfeltet. Hva gjør du?',
                options: ['Kjører forbi raskt', 'Senker farten og venter', 'Tut så bilen foran flytter seg', 'Kjører forbi på høyre side'],
                correct: 'Senker farten og venter',
                explanation: 'Du må ikke kjøre forbi når kjøretøyet foran skjuler sikten til gangfeltet.'
            },
            {
                question: 'Du kjører på motorvei. Bilen foran ligger sakte i venstre felt. Kan du kjøre forbi på høyre side?',
                options: ['Ja, alltid', 'Ja, hvis du holder fartsgrensen', 'Nei, ikke i vanlig fri trafikk', 'Bare hvis bilen foran kjører under 80 km/t'],
                correct: 'Nei, ikke i vanlig fri trafikk',
                explanation: 'Forbikjøring skal som hovedregel skje til venstre. Høyre side er bare unntak i bestemte situasjoner.'
            },
            {
                question: 'Du ligger bak en traktor før en bakketopp. Hva er tryggest?',
                options: ['Kjøre forbi før toppen', 'Vente til du har fri sikt', 'Blink med lysene', 'Kjøre tett bak traktoren'],
                correct: 'Vente til du har fri sikt',
                explanation: 'Ved bakketopp ser du ikke langt nok frem. Du må vente.'
            },
            {
                question: 'Kjøretøyet foran blinker til venstre og skal svinge. Hvilken side kan du passere på hvis det er trygt?',
                options: ['Venstre', 'Høyre', 'Midt i veien', 'Du må alltid vente'],
                correct: 'Høyre',
                explanation: 'Når forankjørende tydelig skal svinge til venstre, kan forbikjøring skje til høyre hvis det er trygt.'
            },
            {
                question: 'Hva betyr skiltet forbikjøringsforbud?',
                options: ['Du kan ikke kjøre forbi noen trafikanter', 'Du kan ikke kjøre forbi motorvogn med flere enn to hjul', 'Du kan bare kjøre forbi i 50-soner', 'Du kan bare kjøre forbi på høyre side'],
                correct: 'Du kan ikke kjøre forbi motorvogn med flere enn to hjul',
                explanation: 'Skilt 334 gjelder forbikjøring av motorvogn med flere enn to hjul.'
            }
        ],
        faq: [
            {
                question: 'Er forbikjøring på høyre side lov?',
                answer: 'Som hovedregel nei. Det er bare lov i bestemte unntak, for eksempel når kjøretøyet foran tydelig skal svinge til venstre, ved tett feltvis kø eller i felt for bestemte trafikanter.'
            },
            {
                question: 'Er forbikjøring i kryss lov?',
                answer: 'Som hovedregel er forbikjøring like foran eller i veikryss forbudt. Det finnes unntak, men på teoriprøven må du alltid vurdere sikt, plassering, skilt og risiko.'
            },
            {
                question: 'Kan jeg kjøre forbi ved gangfelt?',
                answer: 'Ikke hvis kjøretøyet foran eller ved siden av deg hindrer sikten til gangfeltet. Da kan en fotgjenger være skjult.'
            },
            {
                question: 'Kan jeg kjøre forbi en syklist ved sperrelinje?',
                answer: 'Du må være svært forsiktig. Sperrelinje skal ikke krysses for forbikjøring, og du må bare passere syklist hvis du kan holde trygg avstand og følge reglene.'
            },
            {
                question: 'Hva betyr forbikjøringsforbud-skiltet?',
                answer: 'Det betyr at du ikke kan kjøre forbi motorvogn med flere enn to hjul. Forbudet gjelder til det oppheves av skilt eller etter angitt strekning.'
            },
            {
                question: 'Hva testes ofte om forbikjøring på teoriprøven?',
                answer: 'Teoriprøven tester ofte om du forstår sikt, gangfelt, kryss, sperrelinje, forbikjøring på høyre side og faren ved å kjøre forbi saktegående kjøretøy på uoversiktlig vei.'
            },
            {
                question: 'Hvor stor avstand bør du holde ved forbikjøring av syklist?',
                answer: 'En vanlig tommelfingerregel er minst 1,5 meter sideavstand, og mer hvis farten er høy, veien er smal eller forholdene er uoversiktlige.'
            }
        ]
    },

    {
        id: 'lysbruk-morkekjoring',
        title: 'Lysbruk og mørkekjøring til teoriprøven',
        icon: '💡',
        shortDescription: 'Lær reglene for lysbruk til teoriprøven: nærlys, fjernlys, tåkelys, baklys i tunnel, blending, mørkesyn, refleks og vanlige feller.',
        color: 'var(--apple-orange)',
        seoTitle: 'Lysbruk og mørkekjøring – regler og feller | Teori-test.no',
        seoDescription: 'Lær reglene for lysbruk til teoriprøven: nærlys, fjernlys, tåkelys, baklys i tunnel, blending, mørkesyn, refleks og vanlige feller.',
        sections: [
            {
                title: 'Hovedregel for lysbruk',
                type: 'info',
                content: 'Lysbruk handler ikke bare om å se veien. Det handler like mye om å bli sett av andre. På teoriprøven får du ofte spørsmål der du må velge riktig lys ut fra situasjonen: mørke, tunnel, tåke, møtende trafikk, parkering eller dårlig sikt.\n\nDen korte huskeregelen er:\n\n**Du skal bruke lys som gjør at du ser nok, blir sett av andre, og ikke blender noen.**\n\nModerne biler har automatisk lys, men det betyr ikke at bilen alltid velger riktig. Føreren har fortsatt ansvaret.'
            },
            {
                title: 'Kort fasit: hvilket lys bruker du når?',
                type: 'table',
                content: `<table class="theory-table">
                    <thead><tr><th>Situasjon</th><th>Riktig lys</th><th>Typisk feil</th></tr></thead>
                    <tbody>
                        <tr><td>Vanlig kjøring i dagslys</td><td>Kjørelys eller nærlys</td><td>Tro at baklys alltid er tent</td></tr>
                        <tr><td>Tunnel</td><td>Nærlys/baklys tent</td><td>Kjøre med bare automatisk kjørelys</td></tr>
                        <tr><td>Mørk landevei uten trafikk</td><td>Fjernlys</td><td>Glemme å blende ned</td></tr>
                        <tr><td>Møtende trafikk</td><td>Nærlys</td><td>Blende møtende bil med fjernlys</td></tr>
                        <tr><td>Kjøring bak annen bil</td><td>Nærlys</td><td>Fjernlys i speilene til bilen foran</td></tr>
                        <tr><td>Tåke, kraftig regn eller snø</td><td>Riktig tåkelys etter forholdene</td><td>Bruke fjernlys i tett tåke</td></tr>
                        <tr><td>Stans/parkering i mørket</td><td>Parkeringslys</td><td>La nærlys/fjernlys stå på</td></tr>
                    </tbody>
                </table>`
            },
            {
                title: 'Kjørelys, nærlys og baklys',
                type: 'text',
                content: 'Motorvogn skal ha påbudt fjernlys, nærlys eller godkjent kjørelys tent under kjøring.\n\nPå dagtid kan kjørelys være nok. Men viktig: baklys trenger ikke alltid være tent når bilen bare bruker kjørelys. Det betyr at bilen kan være synlig forfra, men dårlig synlig bakfra.\n\nDette er spesielt viktig i:\n- tunnel\n- skumring\n- regn\n- tåke\n- snøvær\n- mørke\n\nHvis du er usikker, bør du velge en lysinnstilling som tenner både lys foran og bak.\n\n**Automatisk kjørelys: bilen tenker ikke alltid for deg**\nMange biler har AUTO-innstilling. Den kan fungere godt, men den er ikke en garanti.\n\nSensoren kan feilvurdere lysforhold, særlig i:\n- tunnel\n- regnvær\n- tåke\n- snøvær\n- skumring\n- sterkt motlys\n\nPå teoriprøven er poenget ofte at føreren har ansvaret, ikke bilen. Du må vite hvilke lys som faktisk er tent.'
            },
            {
                title: 'Kjøring i tunnel: husk baklys',
                type: 'tip',
                content: 'Når du kjører inn i tunnel, skal baklysene være tent. Dette er en vanlig felle fordi mange biler bruker automatisk kjørelys der baklysene ikke nødvendigvis er på.\n\n![Automatisk kjørelys og nærlys i tunnel med baklys tent](/tunnel-lys.png)\n*Automatisk kjørelys tenner ikke alltid baklys. I tunnel må bilen være synlig bakfra.*\n\nRiktig handling:\n- sjekk at bilen har riktig lysinnstilling\n- sørg for at baklysene er tent\n- bruk lys som gjør bilen synlig for trafikken bak\n\nEn enkel regel: Hvis du er i tvil i tunnel, bruk nærlys.'
            },
            {
                title: 'Fjernlys: når skal du blende ned?',
                type: 'warning',
                content: 'Fjernlys gir best sikt på mørke veier, men du må blende ned når lyset kan blende andre.\n\nDu skal blende ned når:\n- du møter en annen bil\n- du kjører bak en annen bil\n- du møter gående, syklende eller andre trafikanter som kan bli blendet\n- veien er godt opplyst og fjernlys ikke er nødvendig\n\nNår fjernlys ikke er nødvendig eller ikke er lov å bruke, skal du bruke nærlys.\n\n**Hva gjør du hvis du blir blendet?**\nHvis en møtende bil blender deg, skal du ikke stirre rett inn i lysene. Se heller mot høyre veikant, senk farten og hold god avstand.\n\nIkke svar med å blende tilbake. Unødig eller hensynsløs bruk av lyssignal er forbudt, og det gjør situasjonen farligere.'
            },
            {
                title: 'Tåkelys: når er det lov?',
                type: 'info',
                content: 'Tåkelys er laget for dårlig sikt, men brukes ofte feil.\n\nViktig regel for klasse B:\n**Du kan ikke bruke tåkelys sammen med nærlys.**\n\nPå dagtid kan tåkelys foran brukes som kjørelys i stedet for nærlys. Men tåkelys skal ikke brukes som pynt, eller fordi det “ser kult ut”. Den lille show-offen er kanskje kul på parkeringsplassen, men på veien kan den blende andre og gi feil lysbilde.\n\nTåkelys er mest aktuelt ved:\n- tett tåke\n- kraftig regn\n- snøvær\n- svært dårlig sikt\n\nFjernlys i tett tåke er ofte en dårlig idé, fordi lyset reflekteres tilbake og gjør sikten verre.\n\n**Kan du bruke tåkelys sammen med nærlys?**\nNei. For bil klasse B er hovedregelen at kurve-/tåkelys ikke kan brukes sammen med nærlys.\n\nDette er en typisk teoriprøvefelle. Mange tror at “mer lys alltid er bedre”, men feil kombinasjon kan blende andre eller gi dårligere sikt.'
            },
            {
                title: 'Parkeringslys og stans i mørket',
                type: 'text',
                content: 'Parkeringslys brukes når bilen står stille eller er parkert på vei og må være synlig for andre trafikanter.\n\nVed stans eller parkering i mørke skal du ikke la fjernlys eller nærlys stå på slik at de blender andre. Da er parkeringslys riktig.\n\nParkeringslys er derimot ikke vanlig kjørelys. Når du kjører, trenger du fjernlys, nærlys eller godkjent kjørelys etter forholdene.'
            },
            {
                title: 'Mørkekjøring: sikt, fart og risiko',
                type: 'warning',
                content: 'Mørkekjøring handler ikke bare om lys. Det handler om å forstå hvor lite du faktisk ser.\n\nFarten må alltid tilpasses sikten. Du skal kunne stanse på den veistrekningen du har oversikt over. Hvis du bare ser 40 meter frem, men trenger mer enn 40 meter for å stoppe, kjører du for fort for forholdene.\n\nDette henger tett sammen med [bremselengde](/laeringsressurser/bremselengde) og [reaksjonstid](/laeringsressurser/reaksjonstid). I mørket må du oppdage faren, reagere og rekke å stoppe.'
            },
            {
                title: 'Refleks sett fra bilførerens perspektiv',
                type: 'tip',
                content: 'Statens vegvesen oppgir at en bilfører som kjører i 50 km/t med nærlys, bare har rundt 2 sekunder på å oppdage en fotgjenger uten refleks. Med refleks blir det rundt 10 sekunder.\n\nDet betyr at refleks ikke bare er “lurt”. Det kan være forskjellen mellom å rekke å reagere og å oppdage personen for sent.\n\nSom bilfører må du derfor:\n- senke farten i mørke områder\n- være ekstra oppmerksom ved gangfelt og bussholdeplasser\n- se etter bevegelser i veikanten\n- huske at mørke klær er vanskelige å oppdage'
            },
            {
                title: 'Trafikant i mørket: hva er mørkekjøring?',
                type: 'info',
                content: '“Trafikant i mørket” kalles ofte mørkekjøring. Det er en del av trafikalt grunnkurs og handler om å forstå risiko ved kjøring i mørke.\n\nKurset gjennomføres i perioden der det er mørkt nok ute, og Statens vegvesen opplyser at det varer 3 timer. Du er passasjer i bil, deltar i demonstrasjoner og reflekterer over erfaringene med lærer og andre elever.\n\nPå teoriprøven er det ikke selve kurset som er viktigst, men forståelsen:\n- du ser mindre enn du tror\n- farten må ned når sikten blir kortere\n- riktig lysbruk er avgjørende\n- refleks og synlighet redder tid'
            },
            {
                title: 'Vanlige teoriprøvefeller om lysbruk',
                type: 'warning',
                content: '- Du tror automatisk kjørelys alltid tenner baklys.\n- Du bruker tåkelys sammen med nærlys.\n- Du glemmer å blende ned fra fjernlys.\n- Du bruker fjernlys i tett tåke.\n- Du kjører for fort i mørket fordi veien virker kjent.\n- Du glemmer at mørke klær uten refleks er vanskelig å oppdage.\n- Du bruker parkeringslys som om det var kjørelys.\n- Du stoler mer på bilens automatikk enn på egen kontroll.\n\nNår du har lest reglene, kan du teste deg med [gratis teoriprøve](/quiz).'
            }
        ],
        faq: [
            {
                question: 'Kan man bruke tåkelys og nærlys samtidig?',
                answer: 'Nei. For vanlig personbil kan kurve-/tåkelys ikke brukes sammen med nærlys.'
            },
            {
                question: 'Når skal man bruke fjernlys?',
                answer: 'Fjernlys brukes på mørke veier når det gir bedre sikt og ikke blender andre trafikanter.'
            },
            {
                question: 'Når skal man blende ned fjernlys?',
                answer: 'Du skal blende ned når fjernlyset kan blende møtende trafikk, forankjørende eller andre trafikanter.'
            },
            {
                question: 'Må baklys være tent i tunnel?',
                answer: 'Ja. Når du kjører inn i tunnel, skal baklysene være tent slik at bilen er synlig bakfra.'
            },
            {
                question: 'Er automatisk kjørelys nok?',
                answer: 'Ikke alltid. Automatisk kjørelys kan fungere i mange situasjoner, men føreren har ansvaret for at riktig lys er tent.'
            },
            {
                question: 'Hva er mørkekjøring?',
                answer: 'Mørkekjøring, eller Trafikant i mørket, er en del av trafikalt grunnkurs. Det handler om risiko, sikt, lysbruk og synlighet i mørket.'
            },
            {
                question: 'Hvorfor er refleks viktig for bilføreren?',
                answer: 'Refleks gjør at bilføreren oppdager fotgjengere tidligere. Ifølge Statens vegvesen kan føreren i 50 km/t med nærlys ha rundt 2 sekunder på å oppdage en fotgjenger uten refleks, men rundt 10 sekunder med refleks.'
            }
        ],
        miniQuiz: [
            {
                question: 'Kan du bruke tåkelys foran sammen med nærlys på vanlig personbil?',
                options: [
                    'Ja, alltid',
                    'Ja, men bare i mørket',
                    'Nei',
                    'Bare på motorvei'
                ],
                correct: 'Nei',
                explanation: 'Kurve-/tåkelys kan ikke brukes sammen med nærlys for bil klasse B.'
            },
            {
                question: 'Du kjører inn i en tunnel med automatisk kjørelys. Hva må du passe på?',
                options: [
                    'At fjernlyset er på',
                    'At baklysene er tent',
                    'At tåkelysene er tent',
                    'At parkeringslysene er av'
                ],
                correct: 'At baklysene er tent',
                explanation: 'Ved kjøring i tunnel skal bilen være synlig også bakfra. Automatisk kjørelys tenner ikke alltid baklys.'
            },
            {
                question: 'Når skal du blende ned fra fjernlys?',
                options: [
                    'Når lyset kan blende andre trafikanter',
                    'Bare når du kjører i by',
                    'Bare når bilen foran blinker',
                    'Aldri på landevei'
                ],
                correct: 'Når lyset kan blende andre trafikanter',
                explanation: 'Fjernlys må ikke brukes slik at andre blir blendet.'
            },
            {
                question: 'Hva er riktig hvis du blir blendet av en møtende bil?',
                options: [
                    'Se rett på lysene',
                    'Blende tilbake med fjernlys',
                    'Se mot høyre veikant og senk farten',
                    'Lukke øynene et øyeblikk'
                ],
                correct: 'Se mot høyre veikant og senk farten',
                explanation: 'Se bort fra lysene, reduser farten og hold kontroll.'
            },
            {
                question: 'Hvorfor kan fjernlys være dårlig i tett tåke?',
                options: [
                    'Det bruker for mye strøm',
                    'Lyset kan reflekteres tilbake og gi dårligere sikt',
                    'Det slår av baklysene',
                    'Det virker bare på motorvei'
                ],
                correct: 'Lyset kan reflekteres tilbake og gi dårligere sikt',
                explanation: 'Kraftig lys i tåke kan reflekteres tilbake mot deg og gjøre sikten dårligere.'
            },
            {
                question: 'Hva er en vanlig feil med automatisk kjørelys?',
                options: [
                    'At nærlys alltid er for sterkt',
                    'At baklysene ikke nødvendigvis er tent',
                    'At bilen ikke kan bruke fjernlys',
                    'At bremselysene slutter å virke'
                ],
                correct: 'At baklysene ikke nødvendigvis er tent',
                explanation: 'Mange biler har kjørelys foran uten at baklysene er tent i dagslys.'
            }
        ]
    },

    {
        id: 'skilt',
        title: 'Trafikkskilt til teoriprøven klasse B',
        icon: '🚦',
        shortDescription: 'Lær trafikkskilt til teoriprøven klasse B: fareskilt, vikeplikt, forbudsskilt, påbudsskilt, opplysningsskilt, underskilt og vanlige skiltfeller.',
        color: 'var(--apple-blue)',
        seoTitle: 'Trafikkskilt til teoriprøven – skiltgrupper og vanlige feil | Teori-test.no',
        seoDescription: 'Lær trafikkskilt til teoriprøven klasse B: fareskilt, vikeplikt, forbudsskilt, påbudsskilt, opplysningsskilt, underskilt og vanlige skiltfeller.',
        sections: [
            {
                title: 'Trafikkskilt til teoriprøven klasse B',
                type: 'text',
                content: 'Trafikkskilt handler ikke bare om å kjenne igjen et symbol. På teoriprøven må du forstå hva skiltet betyr i en konkret situasjon: Skal du bremse, vike, stoppe, svinge, la være å kjøre inn eller bare være ekstra oppmerksom?\n\nDet smarteste er å lære systemet først. Form og farge forteller ofte hvilken type regel som gjelder før du rekker å lese detaljene.'
            },
            {
                title: 'Direkte svar',
                type: 'info',
                content: 'Norske trafikkskilt er delt inn i hovedgrupper som fareskilt, vikeplikt- og forkjørsskilt, forbudsskilt, påbudsskilt, opplysningsskilt, serviceskilt, vegvisningsskilt, underskilt og markeringsskilt. Til teoriprøven klasse B bør du først lære form og farge, deretter hva skiltet betyr i trafikken.'
            },
            {
                title: 'Kort forklart',
                type: 'warning',
                content: '- Trekant med rød kant varsler fare.\n- Rundt skilt med rød kant betyr ofte forbud.\n- Blått rundt skilt betyr påbud.\n- Blå firkant gir ofte opplysning.\n- STOPP-skiltet er åttekantet og krever full stans.\n- Underskilt endrer eller presiserer hovedskiltet.\n- Teoriprøven spør ofte om hva du skal gjøre, ikke bare hva skiltet heter.\n\nLes også:\n[Vikeplikt](/laeringsressurser/vikeplikt), [rundkjøring](/laeringsressurser/rundkjoring), [forbikjøring](/laeringsressurser/forbikjoring), [veimerking](/laeringsressurser/veimerking) og vår [trafikkskilt-guide](/trafikkskilt).'
            },
            {
                title: 'Form og farge: slik kjenner du igjen skilt',
                type: 'table',
                content: '<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Form/farge</th><th style="padding: 12px 8px;">Betyr ofte</th><th style="padding: 12px 8px;">Eksempel</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Trekant med rød kant</b></td><td style="padding: 12px 8px;" data-label="Betyr ofte">Fare</td><td style="padding: 12px 8px;" data-label="Eksempel">Barn, elg, glatt vei</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Omvendt trekant</b></td><td style="padding: 12px 8px;" data-label="Betyr ofte">Vikeplikt</td><td style="padding: 12px 8px;" data-label="Eksempel">Vikeplikt</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Åttekant</b></td><td style="padding: 12px 8px;" data-label="Betyr ofte">Full stans</td><td style="padding: 12px 8px;" data-label="Eksempel">STOPP</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Gul diamant</b></td><td style="padding: 12px 8px;" data-label="Betyr ofte">Forkjørsvei</td><td style="padding: 12px 8px;" data-label="Eksempel">Forkjørsveg</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Rundt med rød kant</b></td><td style="padding: 12px 8px;" data-label="Betyr ofte">Forbud</td><td style="padding: 12px 8px;" data-label="Eksempel">Innkjøring forbudt, fartsgrense</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Rundt blått</b></td><td style="padding: 12px 8px;" data-label="Betyr ofte">Påbud</td><td style="padding: 12px 8px;" data-label="Eksempel">Påbudt rundkjøring</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Blå firkant</b></td><td style="padding: 12px 8px;" data-label="Betyr ofte">Opplysning</td><td style="padding: 12px 8px;" data-label="Eksempel">Gangfelt</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Hvitt underskilt</b></td><td style="padding: 12px 8px;" data-label="Betyr ofte">Presisering</td><td style="padding: 12px 8px;" data-label="Eksempel">Avstand, tid, kjøretøygruppe</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Gul/svart markering</b></td><td style="padding: 12px 8px;" data-label="Betyr ofte">Veiforløp eller hindring</td><td style="padding: 12px 8px;" data-label="Eksempel">Retningsmarkering</td></tr></tbody></table></div>'
            },
            {
                title: 'De 9 skiltkategoriene',
                type: 'signs',
                content: 'Kjenner du form og farge, kan du ofte plassere et ukjent skilt i riktig gruppe – før du leser detaljene. Klikk deg inn på de ulike [skiltkategoriene i guiden](/trafikkskilt) for en fullstendig oversikt.',
                signs: [
                    {
                        name: 'Fareskilt',
                        description: '100-serien\nVarsler fare på eller ved veien. Skiltet betyr ikke automatisk ny fartsgrense, men du må tilpasse farten.\nEksempler: Barn (142), Elg (146), Glatt kjørebane (116)\nTeorifelle: Fareskilt varsler fare, men regulerer ikke farten alene.',
                        imageUrl: '/signs/fareskilt/skilt-142-barn.jpg',
                        alt: 'Trekantet fareskilt med rød kant og hvit bunn som viser to barn som løper, skilt 142 barn'
                    },
                    {
                        name: 'Vikeplikt- og forkjørsskilt',
                        description: '200-serien\nBestemmer hvem som skal vike, stoppe eller har prioritet. STOPP (204) krever alltid full stans.\nEksempler: Vikeplikt (202), STOPP (204), Forkjørsveg (206)\nTeorifelle: Vikeplikt og stopplikt er ikke det samme.',
                        imageUrl: '/signs/vikeplikt-og-forkjorsskilt/skilt-202-vikeplikt.jpg',
                        alt: 'Opp-ned trekantet vikepliktskilt med rød kant og hvit bunn, skilt 202 vikeplikt'
                    },
                    {
                        name: 'Forbudsskilt',
                        description: '300-serien\nForteller hva som er forbudt. Diagonal strek betyr ofte at forbudet eller reguleringen opphører.\nEksempler: Innkjøring forbudt (302), Forbikjøring forbudt (334), Fartsgrense (362)\nTeorifelle: Opphørsskilt betyr at forbudet slutter, ikke at et nytt forbud starter.',
                        imageUrl: '/signs/forbudsskilt/skilt-302-innkjoring-forbudt.jpg',
                        alt: 'Rødt rundt forbudsskilt med hvit tverrstripe i midten, skilt 302 innkjøring forbudt'
                    },
                    {
                        name: 'Påbudsskilt',
                        description: '400-serien\nForteller hva du må gjøre. Skiltene are runde og blå med hvitt symbol.\nEksempler: Påbudt kjøreretning (402), Påbudt rundkjøring (406)\nTeorifelle: Påbudt rundkjøring viser kjøreretning. Vikeplikt reguleres normalt med eget skilt.',
                        imageUrl: '/signs/pabudsskilt/skilt-406-pabudt-rundkjoring.jpg',
                        alt: 'Rundt blått påbudsskilt med tre hvite piler som danner en sirkel, skilt 406 påbudt rundkjøring'
                    },
                    {
                        name: 'Opplysningsskilt',
                        description: '500-serien\nGir informasjon om regler, steder eller trafikale forhold. Noen opplysningsskilt er også regulerende.\nEksempler: Motorveg (502), Gangfelt (516), Envegskjøring (526)\nTeorifelle: Noen opplysningsskilt betyr at en bestemt regel gjelder fra skiltet.',
                        imageUrl: '/signs/opplysningsskilt/skilt-516-gangfelt.jpg',
                        alt: 'Blått firkantet opplysningsskilt med hvit trekant og symbol av en person som går i gangfelt, skilt 516 gangfelt'
                    },
                    {
                        name: 'Serviceskilt',
                        description: '600-serien\nViser service og tilbud langs veien, som bensinstasjon, rasteplass eller førstehjelp.\nEksempler: Førstehjelp (602), Bensinstasjon (605), Rasteplass (613)',
                        imageUrl: '/signs/serviceskilt/skilt-605-bensinstasjon.jpg',
                        alt: 'Serviceskilt med symbol av en bensinpumpe, skilt 605 bensinstasjon'
                    },
                    {
                        name: 'Vegvisningsskilt',
                        description: '700-serien\nHjelper deg å finne retning, sted, avstand og veitype. Farge kan vise hvilken type vei eller mål skiltet gjelder.\nEksempler: Vegviser (713), stedsnavnskilt, avkjøringsviser',
                        imageUrl: '/signs/vegvisningsskilt/skilt-713-vegviser.jpg',
                        alt: 'Vegvisningsskilt som viser veien og avstanden til et reisemål, skilt 713 vegviser'
                    },
                    {
                        name: 'Underskilt',
                        description: '800-serien\nPresiserer hovedskiltet. Det kan vise avstand, tid, kjøretøygruppe eller unntak.\nEksempler: Avstand (802), Tid (806), Kjøretøygruppe (808)\nTeorifelle: Underskilt må alltid leses sammen med hovedskiltet.',
                        imageUrl: '/signs/underskilt/skilt-802-avstand.jpg',
                        alt: 'Hvitt rektangulært underskilt med angitt avstand i meter, skilt 802 avstand'
                    },
                    {
                        name: 'Markeringsskilt',
                        description: '900-serien\nMarkerer hindringer, veiforløp, svinger eller midlertidige endringer. De hjelper deg å plassere bilen riktig.\nEksempler: Retningsmarkering (904), bakgrunnsmarkering, hindermarkering',
                        imageUrl: '/signs/markeringsskilt/skilt-904-retningsmarkering.jpg',
                        alt: 'Rektangulært markeringsskilt med gule og svarte piler som peker mot høyre, skilt 904 retningsmarkering'
                    }
                ]
            },
            {
                title: 'Fareskilt',
                type: 'signs',
                content: 'Fareskilt varsler fare på eller ved veien. De er vanligvis trekantede med rød kant og hvit bunn. Se alle [fareskilt i vår oversikt](/trafikkskilt/fareskilt).\n\nEksempler: Barn, Elg, Glatt vei, Farlig sving\n\n**Viktig teorifelle:** Et fareskilt betyr ikke automatisk lavere fartsgrense. Det betyr at du må tilpasse farten etter faren.',
                signs: [
                    {
                        name: 'Fareskilt 142 Barn',
                        description: 'Varsler om barn i nærheten av veien. Tilpass farten.',
                        imageUrl: '/signs/fareskilt/skilt-142-barn.jpg',
                        alt: 'Trekantet fareskilt med rød kant og hvit bunn som viser to løpende barn, skilt 142 barn'
                    }
                ]
            },
            {
                title: 'Vikeplikt- og forkjørsskilt',
                type: 'signs',
                content: 'Disse skiltene bestemmer hvem som skal kjøre først, hvem som skal vike, og når du må stanse helt. Se alle [vikeplikt- og forkjørsskilt](/trafikkskilt/vikeplikt-og-forkjorsskilt) i guiden.\n\nViktige skilt: Vikeplikt, STOPP, Forkjørsveg, Slutt på forkjørsveg, Vikeplikt overfor møtende kjørende\n\n**Viktig teorifelle:** Vikeplikt og stopplikt er ikke det samme. Ved STOPP-skilt må bilen stanse helt, også hvis veien ser klar ut.',
                signs: [
                    {
                        name: 'Skilt 202 Vikeplikt',
                        description: 'Omvendt trekant. Du skal vike for trafikk på veien du kjører inn på.',
                        imageUrl: '/signs/vikeplikt-og-forkjorsskilt/skilt-202-vikeplikt.jpg',
                        alt: 'Opp-ned trekantet vikepliktskilt med rød kant og hvit bunn, skilt 202 vikeplikt'
                    },
                    {
                        name: 'Skilt 204 STOPP',
                        description: 'Åttekantet. Du må stanse helt før du kjører videre, uansett om veien er klar.',
                        imageUrl: '/signs/vikeplikt-og-forkjorsskilt/skilt-204-stopp.jpg',
                        alt: 'Åttekantet rødt STOPP-skilt med hvit kant og hvit tekst, skilt 204 STOPP'
                    }
                ]
            },
            {
                title: 'Forbudsskilt',
                type: 'signs',
                content: 'Forbudsskilt forteller hva som er forbudt. De er ofte runde med rød kant. Se alle [forbudsskilt](/trafikkskilt/forbudsskilt) for detaljer.\n\nEksempler: Innkjøring forbudt, Forbikjøring forbudt, Fartsgrense, Parkering forbudt\n\n**Viktig teorifelle:** Et opphørsskilt betyr at et tidligere forbud slutter å gjelde. Det er ikke et nytt forbud.',
                signs: [
                    {
                        name: 'Skilt 302 Innkjøring forbudt',
                        description: 'Rund med rød kant. Du har ikke lov til å kjøre inn.',
                        imageUrl: '/signs/forbudsskilt/skilt-302-innkjoring-forbudt.jpg',
                        alt: 'Rødt rundt forbudsskilt med hvit tverrstripe, skilt 302 innkjøring forbudt'
                    },
                    {
                        name: 'Skilt 362 Fartsgrense 50',
                        description: 'Fartsgrensen gjelder fra skiltet og frem til nytt skilt eller tettsted.',
                        imageUrl: '/signs/forbudsskilt/skilt-362-50-fartsgrense.jpg',
                        alt: 'Rundt forbudsskilt med rød kant og tallet 50 i midten, skilt 362 fartsgrense 50'
                    },
                    {
                        name: 'Skilt 364 Slutt på særskilt fartsgrense',
                        description: 'Diagonal strek betyr at den særskilte fartsgrensen opphører.',
                        imageUrl: '/signs/forbudsskilt/skilt-364-50-slutt-pa-saerskilt-fartsgrense.jpg',
                        alt: 'Grått rundt skilt med fem tynne svarte diagonale striper over tallet 50, skilt 364 slutt på særskilt fartsgrense'
                    }
                ]
            },
            {
                title: 'Påbudsskilt',
                type: 'signs',
                content: 'Påbudsskilt forteller hva du må gjøre. De er runde, blå og har hvitt symbol. Se alle [påbudsskilt](/trafikkskilt/pabudsskilt) for en full oversikt.\n\nEksempel: Påbudt rundkjøring, Påbudt kjøreretning, Påbudt kjørefelt\n\n**Viktig teorifelle:** Påbudt rundkjøring viser hvilken retning du skal kjøre rundt trafikkøya. Vikeplikt inn i rundkjøringen reguleres normalt med eget vikepliktskilt.',
                signs: [
                    {
                        name: 'Påbudsskilt 406 Påbudt rundkjøring',
                        description: 'Blå sirkel med pil. Du skal kjøre i pilens retning rundt trafikkøya.',
                        imageUrl: '/signs/pabudsskilt/skilt-406-pabudt-rundkjoring.jpg',
                        alt: 'Blått rundt påbudsskilt med tre hvite piler i sirkel, skilt 406 påbudt rundkjøring'
                    }
                ]
            },
            {
                title: 'Opplysningsskilt',
                type: 'signs',
                content: 'Opplysningsskilt gir informasjon om regler, steder eller situasjoner på veien. Mange er blå firkanter eller rektangler. Se alle [opplysningsskilt](/trafikkskilt/opplysningsskilt) for mer informasjon.\n\nEksempel: Gangfelt, Envegskjøring, Motorveg, Tettbygd strøk\n\n**Viktig teorifelle:** Noen opplysningsskilt gir mer enn informasjon. De kan også fortelle at en bestemt trafikkregel gjelder fra skiltet.',
                signs: [
                    {
                        name: 'Opplysningsskilt 516 Gangfelt',
                        description: 'Du har vikeplikt for gående som er i gangfeltet eller på vei ut i det.',
                        imageUrl: '/signs/opplysningsskilt/skilt-516-gangfelt.jpg',
                        alt: 'Blått firkantet opplysningsskilt med symbol av en person i et gangfelt, skilt 516 gangfelt'
                    }
                ]
            },
            {
                title: 'Serviceskilt og vegvisningsskilt',
                type: 'signs',
                content: 'Serviceskilt viser tilbud langs veien, som bensinstasjon, rasteplass eller førstehjelp. Vegvisningsskilt hjelper deg å finne retning, sted og veitype. Se oversikten over [vegvisningsskilt](/trafikkskilt/vegvisningsskilt) og [serviceskilt](/trafikkskilt/serviceskilt) i guiden.\n\nDisse er vanligvis ikke de vanskeligste teoriskiltene, men du bør kjenne hovedprinsippet.',
                signs: [
                    {
                        name: 'Serviceskilt 605 Bensinstasjon',
                        description: 'Viser at det finnes bensinstasjon i nærheten.',
                        imageUrl: '/signs/serviceskilt/skilt-605-bensinstasjon.jpg',
                        alt: 'Serviceskilt med tegning av en bensinpumpe, skilt 605 bensinstasjon'
                    },
                    {
                        name: 'Vegvisningsskilt 713 Vegviser',
                        description: 'Viser retning og avstand til steder og veier.',
                        imageUrl: '/signs/vegvisningsskilt/skilt-713-vegviser.jpg',
                        alt: 'Pekende vegvisningsskilt med stedsnavn og avstandsangivelse, skilt 713 vegviser'
                    }
                ]
            },
            {
                title: 'Underskilt',
                type: 'signs',
                content: 'Underskilt står under et hovedskilt og presiserer betydningen. Det kan handle om avstand, tid, kjøretøytype eller hvem regelen gjelder for. Se alle [underskilt](/trafikkskilt/underskilt) i skiltguiden.\n\nEksempel: Et parkering forbudt-skilt med underskilt om tid kan bety at forbudet bare gjelder bestemte klokkeslett.\n\n**Viktig teorifelle:** Mange leser hovedskiltet og glemmer underskiltet. På teoriprøven er underskilt oppskriften på riktig svar.',
                signs: [
                    {
                        name: 'Underskilt 802 Avstand',
                        description: 'Angir avstand fra skiltet til stedet regelen gjelder.',
                        imageUrl: '/signs/underskilt/skilt-802-avstand.jpg',
                        alt: 'Hvitt rektangulært underskilt med svart kant og tall som angir avstand, skilt 802 avstand'
                    },
                    {
                        name: 'Underskilt 806 Tid',
                        description: 'Angir tidsrommet en regel gjelder. For eksempel parkeringsforbud i bestemte timer.',
                        imageUrl: '/signs/underskilt/skilt-806-tid.jpg',
                        alt: 'Hvitt underskilt med svarte tall i parentes og klokkeslett, skilt 806 tid'
                    }
                ]
            },
            {
                title: 'Markeringsskilt',
                type: 'signs',
                content: 'Markeringsskilt viser hindringer, veiforløp eller farlige steder. De hjelper deg å forstå hvor veien går, særlig i svinger, ved innsnevring eller ved arbeid på veien. Se alle [markeringsskilt](/trafikkskilt/markeringsskilt) i guiden.',
                signs: [
                    {
                        name: 'Markeringsskilt 904 Retningsmarkering',
                        description: 'Viser veiforløpets retning, særlig i skarpe svinger.',
                        imageUrl: '/signs/markeringsskilt/skilt-904-retningsmarkering.jpg',
                        alt: 'Markeringsskilt med gule og svarte piler som peker kjøreretningen, skilt 904 retningsmarkering'
                    }
                ]
            },
            {
                title: 'Finn skilt med visuelt søk',
                type: 'info',
                content: 'Leter du etter et bestemt skilt, men husker ikke hva det heter? I vår [trafikkskilt-guide](/trafikkskilt) kan du søke etter skilt basert på kjennetegn, farger eller skiltnummer.\n\nDu kan for eksempel søke etter:\n- «blått skilt med hvit pil» for å finne påbudsskilt\n- «rødt rundt skilt» for å finne forbudsskilt\n- «skilt 204» (eller andre numre) hvis du vet skiltkoden\n- «vikepliktskilt» for å søke etter funksjon eller tema\n\nPrøv det visuelle søket direkte i [skiltguiden](/trafikkskilt) for å raskt finne betydningen og reglene for skiltet.'
            },
            {
                title: 'Vanlige feil med trafikkskilt',
                type: 'table',
                content: '<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Feil</th><th style="padding: 12px 8px;">Hvorfor det er en felle</th><th style="padding: 12px 8px;">Slik unngår du den</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Overser underskilt</b></td><td style="padding: 12px 8px;" data-label="Hvorfor det er en felle">Underskilt kan endre når eller hvem skiltet gjelder for.</td><td style="padding: 12px 8px;" data-label="Slik unngår du den">Les alltid hovedskilt og underskilt sammen.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Blander STOPP og vikeplikt</b></td><td style="padding: 12px 8px;" data-label="Hvorfor det er en felle">STOPP krever full stans, vikeplikt gjør ikke alltid det.</td><td style="padding: 12px 8px;" data-label="Slik unngår du den">Se etter åttekantet form.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Tror fareskilt endrer fartsgrensen</b></td><td style="padding: 12px 8px;" data-label="Hvorfor det er en felle">Fareskilt varsler fare, men setter ikke automatisk ny grense.</td><td style="padding: 12px 8px;" data-label="Slik unngår du den">Tilpass farten etter forholdene.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Leser opphørsskilt som forbud</b></td><td style="padding: 12px 8px;" data-label="Hvorfor det er en felle">Diagonal strek betyr ofte at forbudet slutter.</td><td style="padding: 12px 8px;" data-label="Slik unngår du den">Se etter streken og spør: opphører regelen her?</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Glemmer situasjonen rundt skiltet</b></td><td style="padding: 12px 8px;" data-label="Hvorfor det er en felle">Teoriprøven spør ofte hva du skal gjøre, ikke bare navnet.</td><td style="padding: 12px 8px;" data-label="Slik unngår du den">Se på vei, felt, trafikk og eventuelle underskilt.</td></tr></tbody></table></div>'
            },
            {
                title: 'Slik lærer du trafikkskilt effektivt',
                type: 'tip',
                content: '**Start med form og farge**\n\nIkke begynn med å pugge alle skilt enkeltvis. Lær først hva form og farge betyr. Da kan du plassere skiltet i riktig gruppe før du husker detaljene.\n\n**Øv i korte økter**\n\nDet er bedre å ta korte skiltøkter ofte enn én lang økt sjelden. Bruk gjerne 10–15 minutter på skiltquiz og repeter skiltene du bommer på.\n\n**Lær skilt i situasjon**\n\nPå teoriprøven er spørsmålet ofte: "Hva skal du gjøre her?" Ikke bare: "Hva heter skiltet?" Øv derfor på bilder og situasjoner der skiltet står sammen med vei, trafikk og oppmerking.\n\n**Prioriter de viktigste skiltene først**\n\nTil klasse B bør du prioritere:\n- vikeplikt og STOPP\n- fareskilt\n- forbudsskilt\n- påbudsskilt\n- underskilt\n- skilt som påvirker fart, plassering og vikeplikt'
            },
            {
                title: 'Klar for å teste deg selv?',
                type: 'info',
                content: 'For å bestå teoriprøven må du kjenne igjen skiltene raskt og vite nøyaktig hva de krever av deg i trafikken. Vi tilbyr to effektive og gratis måter å øve på:\n\n- **Klassisk teoritest:** Ta vår grundige [Skiltquiz](/quiz/skilt) med 45 spørsmål for å sjekke om du har kunnskapen som kreves til prøven.\n- **Morsom spill-læring:** Spill [Skiltduellen](/laeringsspill/skiltduellen) for å teste reaksjonstiden din og se hvor raskt du klarer å kjenne igjen de ulike skiltene.'
            },
            {
                title: 'Kilder',
                type: 'text',
                content: '- Statens vegvesen: Trafikkskilt\n- Statens vegvesen: Filer og fargekoder for trafikkskilt\n- Lovdata: Skiltforskriften'
            }
        ],
        faq: [
            {
                question: 'Hvor mange trafikkskilt finnes i Norge?',
                answer: 'Det finnes over 300 offentlige trafikkskilt og skiltvarianter i Norge. Skiltene er regulert i skiltforskriften, som også omfatter trafikklyssignaler og vegoppmerking.'
            },
            {
                question: 'Må jeg kunne alle skilt til teoriprøven?',
                answer: 'Du bør ikke prøve å pugge alle skilt uten system. Lær først skiltgruppene, formene og fargene. Deretter bør du øve ekstra på skilt som handler om vikeplikt, fare, forbud, påbud, fart og underskilt.'
            },
            {
                question: 'Hva er forskjellen på fareskilt og forbudsskilt?',
                answer: 'Fareskilt varsler fare og er vanligvis trekantede med rød kant. Forbudsskilt forteller hva som er forbudt og er ofte runde med rød kant.'
            },
            {
                question: 'Hva er forskjellen på vikeplikt og STOPP?',
                answer: 'Vikeplikt betyr at du ikke skal hindre eller forstyrre trafikken du skal vike for. STOPP betyr at du i tillegg må stanse helt før du kjører videre.'
            },
            {
                question: 'Hvordan lærer jeg trafikkskilt raskest?',
                answer: 'Start med form og farge, ta korte skiltquiz-økter, og øv på skilt i trafikale situasjoner. Det viktigste er å forstå hva du skal gjøre når du møter skiltet.'
            }
        ],
        miniQuiz: [
            {
                question: 'Hva betyr et trekantet skilt med rød kant?',
                options: ['Forbud', 'Fare', 'Påbud', 'Opplysning'],
                correct: 'Fare',
                explanation: 'Trekantede skilt med rød kant er fareskilt. De varsler fare og betyr at du må være ekstra oppmerksom.'
            },
            {
                question: 'Hva er forskjellen på vikepliktskilt og STOPP-skilt?',
                options: ['Begge krever alltid full stans', 'Bare STOPP-skilt krever full stans', 'Vikepliktskilt gjelder bare i rundkjøringer', 'STOPP-skilt betyr bare at du skal senke farten'],
                correct: 'Bare STOPP-skilt krever full stans',
                explanation: 'Ved STOPP-skilt må du stanse helt. Ved vikeplikt må du vike, men du må ikke alltid stoppe hvis situasjonen er klar.'
            },
            {
                question: 'Hva betyr et underskilt?',
                options: ['Det gjelder alene uten hovedskilt', 'Det opphever alltid hovedskiltet', 'Det presiserer eller begrenser hovedskiltet', 'Det er bare informasjon uten betydning'],
                correct: 'Det presiserer eller begrenser hovedskiltet',
                explanation: 'Underskilt må leses sammen med hovedskiltet. Det kan fortelle når, hvor langt eller hvem skiltet gjelder for.'
            },
            {
                question: 'Hva betyr et rundt blått skilt?',
                options: ['Fare', 'Forbud', 'Påbud', 'Slutt på forbud'],
                correct: 'Påbud',
                explanation: 'Runde blå skilt er påbudsskilt. De forteller hva du må gjøre.'
            },
            {
                question: 'Et fartsgrenseskilt med diagonal strek betyr vanligvis at:',
                options: ['fartsgrensen blir strengere', 'den særskilte fartsgrensen opphører', 'du alltid må kjøre saktere enn 50 km/t', 'skiltet bare gjelder tunge kjøretøy'],
                correct: 'den særskilte fartsgrensen opphører',
                explanation: 'Diagonal strek gjennom et forbudsskilt betyr ofte at forbudet eller reguleringen opphører.'
            }
        ]
    },


    {
        id: 'fartsgrenser',
        title: 'Fartsgrenser i Norge: Alt du må vite til teoriprøven',
        icon: '⚡',
        shortDescription: 'Lær alle fartsgrenser i Norge til teoriprøven: 30, 50, 80 og 110 km/t, regler for skole og tilhenger, hva fartsbøter koster og prikker i førerkortet.',
        color: 'var(--apple-red)',
        seoTitle: 'Fartsgrenser i Norge: Alt du må vite til teoriprøven',
        seoDescription: 'Lær alle fartsgrenser i Norge til teoriprøven: 30, 50, 80 og 110 km/t, regler for skole og tilhenger, hva fartsbøter koster og prikker i førerkortet.',
        sections: [
            {
                title: 'Fartsgrenser i Norge: Alt du må vite til teoriprøven',
                type: 'text',
                content: 'Fartsgrenser er ett av de temaene du garantert møter på teoriprøven. Her får du en fullstendig oversikt over alle gjeldende fartsgrenser, hva bøtene koster, og hvordan prikkesystemet fungerer.'
            },
            {
                title: 'Kort forklart',
                type: 'info',
                content: 'I tettbygd strøk er fartsgrensen 50 km/t hvis ikke skilt viser noe annet. Utenfor tettbygd strøk er fartsgrensen 80 km/t hvis ikke skilt viser noe annet. Høyeste fartsgrense i Norge er 110 km/t på enkelte skiltede motorveier. På gågate og gatetun skal du kjøre i gangfart. Med tilhenger er hovedregelen maks 80 km/t, eller opptil 100 km/t med Tempo 100-godkjenning.'
            },
            {
                title: 'Fartsgrenser du må kunne til teoriprøven',
                type: 'table',
                content: `<div class="responsive-theory-table-wrapper" style="margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Situasjon</th><th style="padding: 12px 8px;">Fartsgrense</th><th style="padding: 12px 8px;">Typisk teorifelle</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Tettbygd strøk</td><td style="padding: 12px 8px;">50 km/t</td><td style="padding: 12px 8px;">Gjelder når ingen skilt viser noe annet</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Utenfor tettbygd strøk</td><td style="padding: 12px 8px;">80 km/t</td><td style="padding: 12px 8px;">Gjelder også når særskilt fartsgrense opphører uten ny skiltet grense</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Motorvei</td><td style="padding: 12px 8px;">Skiltet fart, ofte 90, 100 eller 110 km/t</td><td style="padding: 12px 8px;">Det er ikke automatisk 110 på motorvei</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Gågate/gatetun</td><td style="padding: 12px 8px;">Gangfart</td><td style="padding: 12px 8px;">Du skal kunne stanse trygt for gående</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Tilhenger</td><td style="padding: 12px 8px;">Som hovedregel maks 80 km/t</td><td style="padding: 12px 8px;">Over 80 krever Tempo 100</td></tr><tr><td style="padding: 12px 8px;">Skole/boligområde</td><td style="padding: 12px 8px;">Ofte 30 km/t</td><td style="padding: 12px 8px;">Soneskilt gjelder til sonen oppheves</td></tr></tbody></table></div>`
            },
            {
                title: 'Fartsgrenseskilt på norsk vei',
                type: 'text',
                content: '![Fartsgrenseskilt på norsk landevei](/norsk_vei_80.png)\n*Fartsgrensen bestemmes av skilt, området du kjører i og forholdene på stedet.*'
            },
            {
                title: 'De generelle fartsgrensene',
                type: 'info',
                content: 'I Norge gjelder disse standardfartsgrensene der ingen skilt sier noe annet:\n\n• Tettbygd strøk: 50 km/t\n• Utenfor tettbygd strøk: 80 km/t\n• Motorvei: følg skiltet fart, ofte 90, 100 eller 110 km/t\n\nHuskeregel: Ser du ingen fartsgrenseskilt og er i tettbygd strøk → 50 km/t. Er du utenfor tettbygd strøk → 80 km/t.'
            },
            {
                title: 'Hva betyr tettbygd strøk?',
                type: 'text',
                content: 'Tettbygd strøk betyr område med tett bebyggelse og mer blandet trafikk. Det kan være gående, syklende, kryss, avkjørsler, butikker, skoler eller boliger. På teoriprøven er poenget at du må vurdere omgivelsene, ikke bare lete etter skilt.'
            },
            {
                title: 'Lavere fartsgrenser og gangfart — når gjelder de?',
                type: 'text',
                content: 'På mange veier er fartsgrensen lavere enn standarden på 50 km/t. Dette er typisk i:\n\nGangfart (ca. 5-7 km/t): I gågater og på gatetun (blått skilt med hus og lekende barn) er fartsgrensen alltid gangfart. Dette er et klassisk lurespørsmål på teoriprøven. Du skal aldri kjøre fortere enn at du kan stoppe trygt og kontrollert, og de gående har alltid førsteprioritet.\n\n30 km/t: Gjelder ofte nær skoler, barnehager og i tette boliggater. Husk at hvis du kjører inn i en "30-sone", gjelder grensen for hele området og alle sideveier, helt til et skilt opphever sonen.\n\n40 km/t: Vanlig i bymiljøer og ved lekeplasser. Fysiske fartsdumper er ofte plassert i 30- og 40-soner.'
            },
            {
                title: 'Spesielle fartsgrenser du må huske',
                type: 'warning',
                content: 'Noen kjøretøy og situasjoner har egne regler — og disse er favoritter på teoriprøven.\n\nMed tilhenger: En bil med tilhenger kan som hovedregel kjøre i opptil 80 km/t der veien tillater det. Dette gjelder også for tilhenger uten brems, forutsatt at tilhengeren er i forsvarlig stand og lasten er sikret. For å kjøre over 80 km/t, maksimalt 100 km/t på egnede veier, må trekkbil og tilhenger ha Tempo 100-godkjenning. Les mer i vår guide til [tilhenger](/laeringsressurser/tilhenger) og hos [Statens vegvesen om fartsgrenser for tilhengere](https://www.vegvesen.no/om-oss/presse/aktuelt/2022/03/nye-fartsgrenser-for-tilhengere/).\n\n• Moped (45 km/t-moped): Maks 45 km/t uansett fartsgrense på veien.\n• Traktor: Maks 40 km/t.\n• Tunge kjøretøy over 3 500 kg: Maks 80 km/t på alle veier.'
            },
            {
                title: '110 km/t på motorvei — hva gjelder?',
                type: 'info',
                content: '110 km/t er den høyeste fartsgrensen i Norge og gjelder kun på utvalgte motorveistrekninger der det er skiltet. Det er ikke automatisk 110 km/t på alle motorveier — sjekk alltid skiltene.\n\nMange motorveier er skiltet lavere, for eksempel 90 eller 100 km/t. Skiltet fart gjelder, men forholdene avgjør om du må kjøre saktere.'
            },
            {
                title: 'Fartsbøter og prikker i førerkortet (ved 50 km/t grense)',
                type: 'warning',
                content: 'Dette er noe veldig mange unge lurer på — og det er god grunn til det.\n\nPrikker i førerkortet:\nDu får prikker når du kjører mer enn 10 km/t over fartsgrensen der grensen er 60 km/t eller lavere, eller mer enn 15 km/t over der grensen er 70 km/t eller høyere. Samler du 8 prikker på 3 år mister du førerretten i 6 måneder.\n\nGjeldende fartsbøter ved 50 km/t fartsgrense:\n• Inntil 5 km/t over: 1 250 kr\n• 6-10 km/t over: 3 350 kr\n• 11-15 km/t over: 5 950 kr\n• 16-20 km/t over: 8 650 kr\n• 21-25 km/t over: 13 450 kr\n\nVed kraftig overskridelse kan du miste førerkortet og saken kan gå til retten.\n\nViktig for deg under 18 år: Du er på prøveperiode de to første årene. Én alvorlig forseelse kan bety at du mister lappen og må ta den på nytt.\n\nMerk: Bøtesatsene fastsettes nasjonalt og kan endres. Kontroller alltid [Lovdata](https://lovdata.no/) eller Politiets nettsider for oppdaterte satser.'
            },
            {
                title: 'Fartsgrenser og bremselengde — sammenhengen',
                type: 'text',
                content: 'Dette er et klassisk teoriprøve-spørsmål. Fart har dramatisk effekt på bremselengde fordi bremseenergien øker med kvadratet av farten:\n\n• 50 km/t → bremselengde ca. 13 meter (tørr asfalt)\n• 80 km/t → bremselengde ca. 32 meter\n• 100 km/t → bremselengde ca. 50 meter\n\nDobler du farten, firedobles bremselengden — ikke dobles. For total stopplengde (reaksjonstid + bremsing) blir forskjellen enda større.\n\nTest deg selv: Å regne ut nøyaktig stopplengde er en gjenganger på teoriprøven. [Prøv vår interaktive bremselengde-kalkulator](/laeringsressurser/bremselengde) for å se nøyaktig hvor mange meter bilen din trenger for å stoppe på ulike underlag!'
            },
            {
                title: 'Teorifelle: når fartsgrensen opphører',
                type: 'tip',
                content: 'Når en særskilt fartsgrense opphører, går du tilbake til generell fartsgrense. Utenfor tettbygd strøk betyr det normalt 80 km/t. I tettbygd strøk er utgangspunktet 50 km/t. Du må alltid vurdere området og skiltingen.'
            },
            {
                title: 'Tips for å huske fartsgrensene til teoriprøven',
                type: 'tip',
                content: '• Ingen skilt i by = 50. Det er alltid utgangspunktet i tettbygd strøk.\n• Ingen skilt på landet = 80. Gjelder utenfor tettbygd strøk.\n• Tilhenger = som hovedregel maks 80 km/t, eller opptil 100 km/t med Tempo 100-godkjenning.\n• Skolen er ofte 30, med eller uten fartsdump.\n• 110 km/t finnes bare der det er skiltet — anta aldri 110.'
            },
            {
                title: 'Kilder og videre lesing',
                type: 'text',
                content: 'Les mer hos [Statens vegvesen om fartsgrenser og fartstilpasning](https://www.vegvesen.no/trafikkinformasjon/trafikksikkerhet/sikker-kjoring/hold-fartsgrensen/) og [Trygg Trafikk om fart](https://www.tryggtrafikk.no/wiki/fart/). For regler om tilhenger kan du også lese vår guide om [tilhenger](/laeringsressurser/tilhenger).'
            }
        ],
        faq: [
            {
                question: 'Hva er maks fartsgrense i Norge?',
                answer: 'Høyeste skiltede fartsgrense i Norge er 110 km/t på enkelte motorveier. Du må likevel alltid tilpasse farten etter sikt, føre, trafikk og forholdene på stedet.'
            },
            {
                question: 'Hva er vanlig fartsgrense i tettbygd strøk?',
                answer: 'Vanlig fartsgrense i tettbygd strøk er 50 km/t hvis ikke skilt viser noe annet. Lavere grenser er vanlige ved skoler, boligområder og sentrum.'
            },
            {
                question: 'Hva betyr tettbygd strøk?',
                answer: 'Tettbygd strøk er områder med tett bebyggelse og mer blandet trafikk, for eksempel gående, syklende, kryss, butikker, skoler og boliger.'
            },
            {
                question: 'Hvor fort er gangfart?',
                answer: 'Gangfart betyr svært lav fart, omtrent som gåtempo. I teorisammenheng forklares det ofte som ca. 5-7 km/t, men poenget er at du skal kunne stoppe trygt for gående.'
            },
            {
                question: 'Hva er fartsgrensen på motorvei?',
                answer: 'Motorvei kan ha ulike skiltede fartsgrenser, ofte 90, 100 eller 110 km/t. Skiltet fart gjelder, men du må kjøre saktere hvis forholdene krever det.'
            },
            {
                question: 'Hvor fort kan du kjøre med tilhenger?',
                answer: 'Hovedregelen er at bil med tilhenger kan kjøre inntil 80 km/t der veien tillater det. Over 80 km/t krever Tempo 100-godkjenning.'
            }
        ],
        miniQuiz: [
            {
                question: 'Hva er høyeste skiltede fartsgrense i Norge?',
                options: ['90 km/t', '100 km/t', '110 km/t', '120 km/t'],
                correct: '110 km/t',
                explanation: '110 km/t er høyeste skiltede fartsgrense i Norge, og gjelder bare på enkelte motorveistrekninger.'
            },
            {
                question: 'Hva er vanlig fartsgrense i tettbygd strøk når ingen skilt viser noe annet?',
                options: ['30 km/t', '50 km/t', '60 km/t', '80 km/t'],
                correct: '50 km/t',
                explanation: 'I tettbygd strøk er utgangspunktet 50 km/t når skilting ikke sier noe annet.'
            },
            {
                question: 'Hva betyr gangfart på gatetun eller gågate?',
                options: ['Omtrent gåtempo og svært lav fart', 'Alltid 30 km/t', 'Samme som vanlig byfart', 'At du kan kjøre så fort veien tillater'],
                correct: 'Omtrent gåtempo og svært lav fart',
                explanation: 'Gangfart betyr at du må kjøre så sakte at du kan stoppe trygt for gående.'
            },
            {
                question: 'Hva gjelder som hovedregel for bil med tilhenger?',
                options: ['Maks 60 km/t uansett', 'Maks 80 km/t, eller opptil 100 km/t med Tempo 100', 'Alltid samme fart som veien er skiltet', 'Maks 110 km/t hvis motorvei'],
                correct: 'Maks 80 km/t, eller opptil 100 km/t med Tempo 100',
                explanation: 'Hovedregelen er maks 80 km/t med tilhenger. Tempo 100-godkjenning kan gi opptil 100 km/t på egnede veier.'
            }
        ]
    },
    {
        id: 'reaksjonstid',
        title: 'Reaksjonstid og stopplengde: slik regner du det ut til teoriprøven',
        icon: '',
        shortDescription: 'Reaksjonstid er tiden det tar fra du oppdager en fare til du faktisk handler. På teoriprøven handler dette ofte om hvor langt bilen rekker å kjøre før du begynner å bremse. Den avstanden kalles reaksjonslengde.',
        color: 'var(--apple-blue)',
        seoTitle: 'Reaksjonstid bil: reaksjonslengde, formel og test | Teoriprøven',
        seoDescription: 'Lær hva reaksjonstid er, test reaksjonstiden din, og se hvordan du regner ut reaksjonslengde ved 30, 50, 80 og 100 km/t.',
        sections: [
            {
                title: 'Kort forklart',
                type: 'info',
                content: 'Reaksjonstid er tiden fra du oppdager en fare til du handler. Reaksjonslengde er avstanden bilen kjører i denne tiden. Ved 1 sekund reaksjonstid finner du reaksjonslengden ved å dele farten i km/t på 3,6. Stopplengde er reaksjonslengde pluss bremselengde.\n\nEn vanlig tommelfingerregel er at en opplagt fører bruker ca. 1 sekund på å reagere. Ved 50 km/t kjører bilen omtrent 14 meter på 1 sekund før bremsingen starter. Ved 80 km/t er det omtrent 22 meter.\n\nVed 30 km/t kjører bilen omtrent 8 meter på 1 sekund. Derfor kan også lav fart gi for lang stopplengde hvis du er uoppmerksom eller reagerer sent.'
            },
            {
                title: 'Hva er reaksjonstid?',
                type: 'text',
                content: 'I bilkjøring er reaksjonstid den korte forsinkelsen mellom fare og handling. Du kan ha sett faren, men bilen bremser ikke før du faktisk rekker å reagere og trykke på bremsepedalen.\n\nFor en uthvilt, edru og oppmerksom fører brukes ofte ca. 1 sekund som enkel verdi i teorien. I virkeligheten kan reaksjonstiden bli både kortere og lengre. Den påvirkes av blant annet trøtthet, rus, medisiner, stress, mobilbruk, erfaring, sikt og hvor overraskende situasjonen er.\n\nViktig teoripoeng: Bilen bremser ikke i reaksjonstiden. Den fortsetter i samme fart.'
            },
            {
                title: 'Slik henger reaksjonslengde og bremselengde sammen',
                type: 'text',
                content: '![Illustrasjon av oppmerksomhetsperiode, reaksjonslengde, bremselengde og total stopplengde for en bil.](/images/stopplengde-oversikt.png)\n*Stopplengden er reaksjonslengden pluss bremselengden. Reaksjonslengden er avstanden bilen kjører fra du oppdager faren til bremsingen starter.*'
            },
            {
                title: 'Prøv reaksjonstidstesten',
                type: 'calculator',
                content: 'Sjekk hvor raskt du reagerer. Testen under simulerer en nødbrems-situasjon i 80 km/t og viser hvordan reaksjonstiden din påvirker reaksjonslengde og total stopplengde.\n\nResultatet er ikke en medisinsk måling, men en pedagogisk demonstrasjon. Poenget er å se at selv små forskjeller i reaksjonstid kan gi flere meter ekstra før bremsingen starter.'
            },
            {
                title: 'Reaksjonslengde: hvor langt kjører du før du bremser?',
                type: 'text',
                content: 'Reaksjonslengde er avstanden bilen kjører i løpet av reaksjonstiden. Hvis reaksjonstiden er 1 sekund, kan du finne reaksjonslengden ved å regne om farten fra km/t til meter per sekund.\n\nDen mest presise enkle formelen er:\n\n```text\nReaksjonslengde ved 1 sekund = fart i km/t / 3,6\n```\n\nEn huskeregel er:\n\n```text\nReaksjonslengde ved 1 sekund ≈ (fart / 10) x 3\n```\n\nEksempel ved 50 km/t:\n\n```text\n50 / 3,6 = ca. 13,9 meter\n```\n\nDet betyr at du kjører omtrent 14 meter før bremsingen starter, selv med normal reaksjonstid.'
            },
            {
                title: 'Hvor langt kjører bilen på 1 sekund?',
                type: 'table',
                content: '<div class="responsive-theory-table-wrapper" style="margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Fart</th><th style="padding: 12px 8px;">Meter per sekund</th><th style="padding: 12px 8px;">Reaksjonslengde ved 1 sekund</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>30 km/t</b></td><td style="padding: 12px 8px;" data-label="Meter per sekund">ca. 8,3 m</td><td style="padding: 12px 8px;" data-label="Reaksjonslengde ved 1 sekund">ca. 8 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>50 km/t</b></td><td style="padding: 12px 8px;" data-label="Meter per sekund">ca. 13,9 m</td><td style="padding: 12px 8px;" data-label="Reaksjonslengde ved 1 sekund">ca. 14 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>80 km/t</b></td><td style="padding: 12px 8px;" data-label="Meter per sekund">ca. 22,2 m</td><td style="padding: 12px 8px;" data-label="Reaksjonslengde ved 1 sekund">ca. 22 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>100 km/t</b></td><td style="padding: 12px 8px;" data-label="Meter per sekund">ca. 27,8 m</td><td style="padding: 12px 8px;" data-label="Reaksjonslengde ved 1 sekund">ca. 28 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>120 km/t</b></td><td style="padding: 12px 8px;" data-label="Meter per sekund">ca. 33,3 m</td><td style="padding: 12px 8px;" data-label="Reaksjonslengde ved 1 sekund">ca. 33 m</td></tr></tbody></table></div>'
            },
            {
                title: 'Reaksjonslengde ved 1 og 2 sekunder',
                type: 'table',
                content: '<div class="responsive-theory-table-wrapper" style="margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Fart</th><th style="padding: 12px 8px;">Ved 1 sekund</th><th style="padding: 12px 8px;">Ved 2 sekunder</th><th style="padding: 12px 8px;">Hva betyr det?</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>30 km/t</b></td><td style="padding: 12px 8px;" data-label="Ved 1 sekund">ca. 8 m</td><td style="padding: 12px 8px;" data-label="Ved 2 sekunder">ca. 17 m</td><td style="padding: 12px 8px;" data-label="Hva betyr det?">Du kan rulle forbi et gangfelt før du bremser.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>50 km/t</b></td><td style="padding: 12px 8px;" data-label="Ved 1 sekund">ca. 14 m</td><td style="padding: 12px 8px;" data-label="Ved 2 sekunder">ca. 28 m</td><td style="padding: 12px 8px;" data-label="Hva betyr det?">En liten forsinkelse kan utgjøre flere billengder.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>80 km/t</b></td><td style="padding: 12px 8px;" data-label="Ved 1 sekund">ca. 22 m</td><td style="padding: 12px 8px;" data-label="Ved 2 sekunder">ca. 44 m</td><td style="padding: 12px 8px;" data-label="Hva betyr det?">Du kjører over 40 meter før bremsingen starter.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>100 km/t</b></td><td style="padding: 12px 8px;" data-label="Ved 1 sekund">ca. 28 m</td><td style="padding: 12px 8px;" data-label="Ved 2 sekunder">ca. 56 m</td><td style="padding: 12px 8px;" data-label="Hva betyr det?">Avstand til bilen foran blir svært viktig.</td></tr></tbody></table></div>'
            },
            {
                title: 'Stopplengde = reaksjonslengde + bremselengde',
                type: 'text',
                content: 'Stopplengde er hele avstanden fra du oppdager faren til bilen står stille.\n\n```text\nStopplengde = reaksjonslengde + bremselengde\n```\n\nReaksjonslengden handler om deg som fører: hvor raskt du oppfatter faren og handler. Bremselengden handler om bilen, farten, bremsene, dekkene og underlaget.\n\nPå teoriprøven må du lese oppgaven nøye. Noen oppgaver spør bare etter reaksjonslengde. Andre spør etter bremselengde. Noen spør etter total stopplengde.\n\n[Bruk vår interaktive bremselengde-kalkulator for å beregne stopplengde ved ulike hastigheter og veiforhold](/laeringsressurser/bremselengde)'
            },
            {
                title: 'Hvordan regne ut bremselengde?',
                type: 'formula',
                content: 'På teoriprøven får du ofte oppgaver hvor du skal beregne bremselengde på tørr asfalt. I denne artikkelen presenteres formelen under som en vanlig forenklet teoriregel for tørr asfalt:\n\n```text\nBremselengde på tørr asfalt ≈ (fart / 10) x (fart / 10) / 2\n```\n\nEksempel ved 80 km/t:\n```text\n80 / 10 = 8\n8 x 8 = 64\n64 / 2 = 32 meter bremselengde\n```\n\nDa kan stopplengden ved 80 km/t med 1 sekund reaksjonstid bli:\n```text\n22 meter reaksjonslengde + 32 meter bremselengde = ca. 54 meter stopplengde\n```\n\nNoen lærekilder bruker en grovere huskeregel der bremselengden beregnes som `(fart / 10) x (fart / 10)`. Det gir høyere tall. Les alltid oppgaveteksten: den kan oppgi egne forutsetninger eller bruke en enklere huskeregel.'
            },
            {
                title: 'Eksempler på stopplengde',
                type: 'table',
                content: '<div class="responsive-theory-table-wrapper" style="margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Fart</th><th style="padding: 12px 8px;">Reaksjonslengde</th><th style="padding: 12px 8px;">Bremselengde på tørr asfalt</th><th style="padding: 12px 8px;">Stopplengde</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>30 km/t</b></td><td style="padding: 12px 8px;" data-label="Reaksjonslengde">ca. 8 m</td><td style="padding: 12px 8px;" data-label="Bremselengde på tørr asfalt">ca. 4,5 m</td><td style="padding: 12px 8px;" data-label="Stopplengde">ca. 13 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>50 km/t</b></td><td style="padding: 12px 8px;" data-label="Reaksjonslengde">ca. 14 m</td><td style="padding: 12px 8px;" data-label="Bremselengde på tørr asfalt">ca. 12,5 m</td><td style="padding: 12px 8px;" data-label="Stopplengde">ca. 27 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>80 km/t</b></td><td style="padding: 12px 8px;" data-label="Reaksjonslengde">ca. 22 m</td><td style="padding: 12px 8px;" data-label="Bremselengde på tørr asfalt">ca. 32 m</td><td style="padding: 12px 8px;" data-label="Stopplengde">ca. 54 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>100 km/t</b></td><td style="padding: 12px 8px;" data-label="Reaksjonslengde">ca. 28 m</td><td style="padding: 12px 8px;" data-label="Bremselengde på tørr asfalt">ca. 50 m</td><td style="padding: 12px 8px;" data-label="Stopplengde">ca. 78 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>120 km/t</b></td><td style="padding: 12px 8px;" data-label="Reaksjonslengde">ca. 33 m</td><td style="padding: 12px 8px;" data-label="Bremselengde på tørr asfalt">ca. 72 m</td><td style="padding: 12px 8px;" data-label="Stopplengde">ca. 105 m</td></tr></tbody></table></div>'
            },
            {
                title: 'Ekspertforklaring',
                type: 'info',
                content: 'På teoriprøven må du skille mellom oppmerksomhet, reaksjonstid, reaksjonslengde, bremselengde og stopplengde.\n\nDårlig sikt gjør ofte at du oppdager faren senere. Det kan skje i mørke, regn, snø, tåke eller i et uoversiktlig trafikkmiljø (lær mer om riktig [lysbruk og mørkekjøring](/laeringsressurser/lysbruk-morkekjoring) for å oppdage farer tidligere). Trøtthet, mobilbruk, rus, stress og medisiner kan gjøre selve reaksjonen tregere når du først har oppdaget faren.\n\nBegge deler øker risikoen, men på ulike måter. Hvis du oppdager faren sent, har du mindre avstand igjen. Hvis reaksjonstiden blir lengre, ruller bilen lenger før bremsingen starter.\n\nDerfor handler reaksjonstid ikke bare om et regnestykke. Det handler også om å være aktpågivende, holde god nok avstand og tilpasse farten slik at du faktisk rekker å handle.'
            },
            {
                title: 'Hva øker reaksjonstiden?',
                type: 'warning',
                content: 'Dette er typiske faktorer som kan gjøre at du reagerer langsommere:\n\n- trøtthet eller lite søvn\n- alkohol, rusmidler eller enkelte medisiner\n- mobilbruk, også når du bruker handsfree\n- stress, sterke følelser eller distraksjoner\n- lite erfaring eller usikkerhet\n- overraskende situasjoner med mye å tolke samtidig\n\nDårlig sikt gjør ikke nødvendigvis selve reaksjonen tregere, men du kan oppdage faren senere. Det gir deg mindre tid og avstand til å handle.\n\nTeoriprøven tester ofte om du forstår at reaksjonstid ikke er konstant. En fører som er trøtt eller uoppmerksom, kan bruke mye mer enn 1 sekund.'
            },
            {
                title: 'Praktisk eksempel',
                type: 'example',
                content: 'Du kjører i 80 km/t. Et barn løper ut i veien 50 meter foran deg. Du er uthvilt — reaksjonstiden din er 1 sekund. I løpet av det sekundet kjører du 24 meter. Da gjenstår 26 meter til barnet — men du trenger 32 meter for å stoppe. Du rekker det ikke.\n\nHadde du kjørt 60 km/t ville stopplengden vært 36 meter — du hadde stoppet med god margin.'
            },
            {
                title: '3-sekunders regelen',
                type: 'tip',
                content: 'Hold alltid minst 3 sekunders avstand til bilen foran. Velg et fast punkt på veien. Når bilen foran passerer det, tell "én-og-tjue, to-og-tjue, tre-og-tjue". Passerer du punktet før du er ferdig, er du for tett. I dårlig vær, mørke eller ved tretthet — øk til 4–6 sekunder.'
            },
            {
                title: 'Vanlige teoriprøvespørsmål',
                type: 'text',
                content: '• **Hva er normal reaksjonstid for en opplagt sjåfør?** → Ca. 1 sekund\n• **Hva skjer med reaksjonstiden ved tretthet?** → Den kan doble eller tredoble seg\n• **Hva er stopplengde?** → Reaksjonslengde + bremselengde\n• **Hva skjer med bremselengden når farten dobles?** → Den firedobles\n• **Hva er 3-sekunders regelen?** → Minimum avstand til bilen foran i normale forhold\n\nLes også våre guider om [bremselengde og stopplengde](/laeringsressurser/bremselengde) og gjeldende [fartsgrenser og fartstilpasning](/laeringsressurser/fartsgrenser). Du kan også [øv på fartsregler](/quiz/fartsregler) direkte i vår fartsquiz.'
            }
        ],
        faq: [
            {
                question: 'Hva er reaksjonstid?',
                answer: 'Reaksjonstid er tiden fra du oppdager en fare til du handler, for eksempel ved å flytte foten til bremsepedalen.'
            },
            {
                question: 'Hva er reaksjonslengde?',
                answer: 'Reaksjonslengde er avstanden bilen kjører i reaksjonstiden. Ved 50 km/t og 1 sekund reaksjonstid er reaksjonslengden ca. 14 meter.'
            },
            {
                question: 'Hva er forskjellen på reaksjonstid og reaksjonslengde?',
                answer: 'Reaksjonstid er tiden det tar før du handler. Reaksjonslengde er avstanden bilen kjører i denne tiden.'
            },
            {
                question: 'Hvordan regner du ut reaksjonslengde?',
                answer: 'Du kan dele farten i km/t på 3,6 for å finne meter per sekund. Ved 80 km/t blir det ca. 22 meter på 1 sekund.'
            },
            {
                question: 'Hvorfor deler man km/t på 3,6?',
                answer: 'Fordi 1 km/t tilsvarer 1000 meter delt på 3600 sekunder. Når du deler km/t på 3,6, får du omtrent meter per sekund.'
            },
            {
                question: 'Hva er forskjellen på reaksjonslengde og bremselengde?',
                answer: 'Reaksjonslengde er avstanden bilen kjører før du begynner å bremse. Bremselengde er avstanden bilen bruker fra bremsingen starter til bilen står stille.'
            },
            {
                question: 'Hva er stopplengde?',
                answer: 'Stopplengde er reaksjonslengde pluss bremselengde. Det er hele avstanden fra du oppdager faren til bilen står stille.'
            },
            {
                question: 'Hva påvirker reaksjonstiden?',
                answer: 'Trøtthet, rus, enkelte medisiner, mobilbruk, stress og distraksjoner kan øke reaksjonstiden. Dårlig sikt gjør ofte at du oppdager faren senere, og gir deg mindre tid og avstand til å handle.'
            },
            {
                question: 'Hvor langt kjører bilen på 1 sekund i 30 km/t?',
                answer: 'I 30 km/t kjører bilen ca. 8,3 meter på 1 sekund.'
            },
            {
                question: 'Hvor langt kjører bilen på 1 sekund i 50 km/t?',
                answer: 'I 50 km/t kjører bilen ca. 13,9 meter på 1 sekund, altså omtrent 14 meter.'
            },
            {
                question: 'Hvor langt kjører bilen på 1 sekund i 80 km/t?',
                answer: 'I 80 km/t kjører bilen ca. 22,2 meter på 1 sekund.'
            },
            {
                question: 'Hva er reaksjonslengde ved 100 km/t?',
                answer: 'Ved 100 km/t kjører bilen ca. 27,8 meter på 1 sekund. Med 1 sekund reaksjonstid blir reaksjonslengden derfor omtrent 28 meter.'
            }
        ],
        miniQuiz: [
            {
                question: 'Hva betyr reaksjonstid?',
                options: [
                    'Tiden bilen bruker på å bremse',
                    'Tiden fra du oppdager en fare til du handler',
                    'Avstanden bilen bruker etter at du har bremset',
                    'Den totale stopplengden'
                ],
                correct: 'Tiden fra du oppdager en fare til du handler',
                explanation: 'Reaksjonstid er tiden før handlingen starter. Bilen fortsetter å kjøre i denne tiden.'
            },
            {
                question: 'Hva er reaksjonslengde?',
                options: [
                    'Avstanden bilen kjører i reaksjonstiden',
                    'Avstanden bilen bruker etter at bremsene virker',
                    'Avstanden mellom to trafikkskilt',
                    'Avstanden du bør parkere fra et gangfelt'
                ],
                correct: 'Avstanden bilen kjører i reaksjonstiden',
                explanation: 'Reaksjonslengde er hvor langt bilen rekker å kjøre før du begynner å bremse.'
            },
            {
                question: 'Hvor langt kjører du omtrent på 1 sekund i 50 km/t?',
                options: [
                    '5 meter',
                    '10 meter',
                    '14 meter',
                    '30 meter'
                ],
                correct: '14 meter',
                explanation: '50 km/t delt på 3,6 er ca. 13,9 meter per sekund.'
            },
            {
                question: 'Du kjører i 50 km/t og bruker 2 sekunder på å reagere. Omtrent hvor lang blir reaksjonslengden?',
                options: [
                    'ca. 14 meter',
                    'ca. 20 meter',
                    'ca. 28 meter',
                    'ca. 50 meter'
                ],
                correct: 'ca. 28 meter',
                explanation: 'Ved 50 km/t kjører bilen ca. 14 meter per sekund. På 2 sekunder blir det ca. 28 meter.'
            },
            {
                question: 'Hva er stopplengde?',
                options: [
                    'Reaksjonslengde + bremselengde',
                    'Bare bremselengden',
                    'Bare reaksjonstiden',
                    'Avstanden til bilen bak'
                ],
                correct: 'Reaksjonslengde + bremselengde',
                explanation: 'Stopplengden er hele avstanden fra du oppdager faren til bilen står stille.'
            },
            {
                question: 'Hva er riktig?',
                options: [
                    'Dårlig sikt kan gjøre at du oppdager faren senere, mens trøtthet kan gjøre reaksjonen tregere',
                    'Dårlig sikt gjør alltid selve reaksjonen tregere',
                    'Trøtthet påvirker bare bremselengden',
                    'Mobilbruk påvirker bare styringen, ikke reaksjonstiden'
                ],
                correct: 'Dårlig sikt kan gjøre at du oppdager faren senere, mens trøtthet kan gjøre reaksjonen tregere',
                explanation: 'Sikt og reaksjonstid påvirker risikoen på ulike måter. Dårlig sikt kan gjøre at du ser faren senere. Trøtthet, rus, medisiner, stress og mobilbruk kan gjøre reaksjonen tregere.'
            }
        ],
        sources: {
            title: 'Kilder',
            type: 'text',
            content: '- **Statens vegvesen:** [Temaliste til teoriprøve klasse B](https://www.vegvesen.no/globalassets/forerkort/ta-forerkort/temaliste-til-teoriprove-klasse-b-bokmal.pdf)\n- **Lovdata:** [Vegtrafikkloven § 3](https://lovdata.no/lov/1965-06-18-4/%C2%A73)'
        }
    },

    {
        id: 'stans-og-parkering',
        title: 'Stans og parkering: forskjellen og reglene du må kunne til teoriprøven',
        icon: '🅿️',
        shortDescription: 'Reglene for stans og parkering er en klassisk gjenganger på teoriprøven for klasse B. Mange mister unødvendige poeng her fordi de blander sammen de to begrepene, eller glemmer de eksakte avstandsreglene for gangfelt og veikryss.',
        color: 'var(--apple-blue)',
        seoTitle: 'Stans og parkering – 5-metersregelen og teorifeller | Teori-test.no',
        seoDescription: 'Lær forskjellen på stans og parkering, 5-metersregelen ved gangfelt og veikryss, og vanlige feller på teoriprøven. Med eksempler og miniQuiz.',
        sections: [
            {
                title: 'Kort forklart: forskjellen på stans og parkering',
                type: 'text',
                content: 'Forskjellen på stans og parkering er at stans er et kort opphold, for eksempel for av- og påstigning eller av- og pålessing. Parkering er når bilen blir stående av andre grunner, selv om føreren sitter i bilen. Stopper du for å handle, hente en pakke eller ringe, regnes det normalt som parkering.'
            },
            {
                title: '',
                type: 'table',
                content: `<div style="overflow-x:auto; margin: 1rem 0;"><table style="width:100%;border-collapse:collapse;font-size:0.9rem;text-align:left">
<thead>
<tr style="border-bottom:2px solid var(--color-border)">
<th style="padding:12px 8px;color:var(--color-text-light)">Begrep</th>
<th style="padding:12px 8px;color:var(--color-text-light)">Hva betyr det?</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:12px 8px;font-weight:500;color:var(--color-text)">Stans</td><td style="padding:12px 8px;color:var(--color-text-light)">Kortvarig stopp, typisk for å slippe av eller på passasjerer, eller laste av/på</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:12px 8px;font-weight:500;color:var(--color-text)">Parkering</td><td style="padding:12px 8px;color:var(--color-text-light)">Bilen blir stående av andre grunner, også hvis føreren sitter i bilen</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:12px 8px;font-weight:500;color:var(--color-text)">Trafikal stans</td><td style="padding:12px 8px;color:var(--color-text-light)">Stopp på grunn av trafikken, for eksempel kø, rødt lys eller vikeplikt</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:12px 8px;font-weight:500;color:var(--color-text)">Stans forbudt</td><td style="padding:12px 8px;color:var(--color-text-light)">Verken stans eller parkering er tillatt</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:12px 8px;font-weight:500;color:var(--color-text)">Parkering forbudt</td><td style="padding:12px 8px;color:var(--color-text-light)">Du kan stanse kort, men ikke parkere</td></tr>
</tbody>
</table></div>`
            },
            {
                title: '',
                type: 'text',
                content: 'Det viktigste på teoriprøven er å forstå forskjellen mellom et lovlig kort stopp og en ulovlig parkering.'
            },
            {
                title: 'Hva er trafikal stans?',
                type: 'text',
                content: 'Trafikal stans betyr at du stopper fordi trafikken krever det. Dette regnes ikke som vanlig stans eller parkering.\n\nEksempler på trafikal stans:\n\n- Du stopper for rødt lys\n- Du venter i kø\n- Du stanser for å overholde vikeplikt\n- Du stopper for fotgjengere i gangfelt\n- Du venter fordi trafikken foran deg står stille\n\nDette er viktig fordi et skilt med stans forbudt ikke betyr at du kan ignorere rødt lys eller vikeplikt. Trafikken går alltid først.'
            },
            {
                title: 'Må du alltid kunne stanse?',
                type: 'text',
                content: 'Ja. Etter trafikkreglene skal du alltid kjøre slik at du kan stanse for enhver påregnelig hindring. Det betyr at fart, sikt, føre og trafikkforhold bestemmer hvor fort du kan kjøre. Dette gjelder selv om fartsgrensen er høyere.\n\nDenne regelen henger tett sammen med bremselengde, reaksjonstid og sikt. Du må kunne stoppe trygt hvis det dukker opp en fotgjenger, syklist, bil eller annen hindring foran deg.'
            },
            {
                title: '5-metersregelen ved gangfelt og veikryss',
                type: 'text',
                content: '5-metersregelen er en av de viktigste reglene du må kunne.\n\nDu har ikke lov til å stanse eller parkere:\n\n- på gangfelt\n- nærmere enn 5 meter foran gangfelt\n- i veikryss\n- nærmere enn 5 meter fra veikryss\n\nPoenget er sikt. Hvis du stanser for nær et gangfelt eller veikryss, kan du skjule fotgjengere, syklister eller biler for andre trafikanter.\n\n![5-metersregelen ved gangfelt – parkering foran og etter gangfelt](/stans-og-parkering-5-meter.png)\n*Du må holde minst 5 meter foran gangfeltet. Etter gangfeltet kan parkering være lovlig hvis det ellers er trygt og tillatt.*\n\n### Hvor mange meter fra gangfelt kan jeg parkere?\n\nDet er ulovlig å stanse eller parkere på gangfeltet, eller nærmere enn 5 meter foran gangfeltet i kjøreretningen. Etter gangfeltet kan du derimot parkere lovlig, så lenge det ikke finnes andre forbud eller forhold som gjør parkeringen farlig.\n\nRegelen finnes for å sikre god sikt. Hvis biler står tett inntil gangfeltet før kryssingen, kan de skjule fotgjengere for andre trafikanter. Da rekker ikke føreren nødvendigvis å oppdage personen i tide.\n\n### Gjelder 5-metersregelen i T-kryss?\n\nJa, T-kryss er også veikryss. Du må ikke stanse eller parkere i selve krysset eller slik at du hindrer sikt og ferdsel.\n\nI et T-kryss kan målingen være litt mer forvirrende enn i et vanlig kryss, fordi den rette siden av veien ikke alltid har en tydelig avrunding i kantstein eller veikant. På teoriprøven er hovedpoenget likevel enkelt: Ikke parker i eller tett ved munningen av et T-kryss.\n\n### 5-metersregelen i vegkryss\n\nDet er ikke lov å stanse eller parkere i et vegkryss, eller nærmere enn 5 meter fra vegkrysset. Avstanden måles fra punktet der fortauskant, kantlinje eller vegkant begynner å runde.\n\n5-metersregelen gjelder i begge retninger, uansett om gata er enveiskjørt eller toveiskjørt. Målet er å sikre sikt og plass til trafikk som skal inn og ut av krysset.\n\n![5-metersregelen i vegkryss – parkering minst 5 meter fra kryss](/stans-og-parkering-5-meter-kryss.png)\n*Du må holde minst 5 meter avstand fra vegkrysset, målt fra der kanten begynner å runde.*'
            },
            {
                title: 'Forbudt å stanse vs. forbudt å parkere',
                type: 'table',
                content: `<div style="overflow-x:auto; margin: 1rem 0;"><table style="width:100%;border-collapse:collapse;font-size:0.9rem;text-align:left">
<thead>
<tr style="border-bottom:2px solid var(--color-border)">
<th style="padding:12px 8px;color:var(--color-text-light)">Situasjon</th>
<th style="padding:12px 8px;color:var(--color-text-light)">Forbudt å stanse</th>
<th style="padding:12px 8px;color:var(--color-text-light)">Forbudt å parkere</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:12px 8px;color:var(--color-text)">På gangfelt eller sykkelkryssing</td><td style="padding:12px 8px;color:var(--color-error)">Ja</td><td style="padding:12px 8px;color:var(--color-error)">Ja</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:12px 8px;color:var(--color-text)">Nærmere enn 5 meter foran gangfelt</td><td style="padding:12px 8px;color:var(--color-error)">Ja</td><td style="padding:12px 8px;color:var(--color-error)">Ja</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:12px 8px;color:var(--color-text)">I veikryss eller nærmere enn 5 meter fra kryss</td><td style="padding:12px 8px;color:var(--color-error)">Ja</td><td style="padding:12px 8px;color:var(--color-error)">Ja</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:12px 8px;color:var(--color-text)">På fortau, gangvei eller sykkelvei</td><td style="padding:12px 8px;color:var(--color-error)">Ja</td><td style="padding:12px 8px;color:var(--color-error)">Ja</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:12px 8px;color:var(--color-text)">I uoversiktlig kurve eller på bakketopp</td><td style="padding:12px 8px;color:var(--color-error)">Ja</td><td style="padding:12px 8px;color:var(--color-error)">Ja</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:12px 8px;color:var(--color-text)">I tunnel</td><td style="padding:12px 8px;color:var(--color-error)">Ja</td><td style="padding:12px 8px;color:var(--color-error)">Ja</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:12px 8px;color:var(--color-text)">På motorvei</td><td style="padding:12px 8px;color:var(--color-error)">Ja</td><td style="padding:12px 8px;color:var(--color-error)">Ja</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:12px 8px;color:var(--color-text)">Der skiltet viser “Stans forbudt”</td><td style="padding:12px 8px;color:var(--color-error)">Ja</td><td style="padding:12px 8px;color:var(--color-error)">Ja</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:12px 8px;color:var(--color-text)">Der skiltet viser “Parkering forbudt”</td><td style="padding:12px 8px;color:var(--color-success)">Nei, kort stans kan være lov</td><td style="padding:12px 8px;color:var(--color-error)">Ja</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:12px 8px;color:var(--color-text)">Foran inn- eller utkjørsel</td><td style="padding:12px 8px;color:var(--color-success)">Ofte kort stans mulig hvis du ikke hindrer</td><td style="padding:12px 8px;color:var(--color-error)">Ja, hvis du hindrer adkomst</td></tr>
</tbody>
</table></div>`
            },
            {
                title: '',
                type: 'text',
                content: 'Hvis det er forbudt å stanse, er parkering også forbudt. Men hvis det bare er parkering forbudt, kan kort stans være lov.\n\nLes også guiden om [trafikkskilt](/laeringsressurser/skilt) hvis du vil lære forskjellen på stans forbudt-skiltet og parkering forbudt-skiltet.'
            },
            {
                title: 'Kan du stanse på venstre side av veien?',
                type: 'text',
                content: 'Som hovedregel skal stans og parkering skje på høyre side av veien i kjøreretningen. Å stanse eller parkere på venstre side kan være farlig fordi bilen står mot trafikkretningen og kan skape dårlig sikt eller uventede situasjoner.\n\nPå enveiskjørt vei kan venstre side være tillatt hvis det ellers er lovlig.'
            },
            {
                title: 'Kan man parkere på forkjørsvei?',
                type: 'text',
                content: 'Ja, det kan være lov å parkere på forkjørsvei hvis det ikke er skiltet forbud og du ikke bryter andre regler. Du kan likevel ikke parkere der bilen hindrer sikt, skaper fare, står for nær veikryss eller gangfelt, eller sperrer trafikken.\n\nForkjørsvei betyr ikke automatisk parkeringsforbud. Du må alltid se etter skilt, vegoppmerking og om bilen står trygt.'
            },
            {
                title: 'Skilt for stans og parkering',
                type: 'text',
                content: 'Det er spesielt to skilt du må kjenne:\n\n### Stans forbudt\n\nDette skiltet betyr at du ikke kan stanse frivillig. Du kan altså ikke stoppe for å slippe av en passasjer, hente noen, laste av varer eller vente.\n\nUnntak: Du må selvfølgelig fortsatt stanse ved trafikal stans, for eksempel rødt lys, kø eller vikeplikt.\n\n### Parkering forbudt\n\nDette skiltet betyr at du ikke kan parkere, men du kan normalt stanse kort for av- og påstigning eller av- og pålessing.\n\nTypisk teorifelle: Mange tror parkering forbudt betyr at bilen aldri kan stoppe. Det er feil. Kort stans kan være lov, men bilen skal ikke bli stående.'
            },
            {
                title: 'Veimerking og parkering',
                type: 'text',
                content: 'Skilt er ikke det eneste som regulerer stans og parkering. Også vegoppmerking kan fortelle deg hva som er lov.\n\nEksempler:\n\n- Gangfelt viser hvor du må være ekstra oppmerksom på fotgjengere\n- Gul kantlinje kan bety stans- eller parkeringsforbud\n- Oppmerkede parkeringsfelt viser hvor bilen skal stå\n- Sykkelfelt og kollektivfelt har egne regler\n\nLes mer i guiden om [veimerking til teoriprøven](/laeringsressurser/veimerking).'
            },
            {
                title: 'Kan jeg parkere mot kjøreretningen?',
                type: 'text',
                content: 'Som hovedregel skal kjøretøy parkeres på høyre side av veien i kjøreretningen. På enveiskjørte veier kan det være tillatt å parkere på venstre side dersom det ellers er lovlig og ikke skaper fare.\n\nPå teoriprøven bør du alltid tenke: Er bilen plassert slik at andre trafikanter ser den tydelig, og kommer trygt forbi?'
            },
            {
                title: 'Typiske teorifeller',
                type: 'warning',
                content: '### 1. “Jeg stopper bare i ett minutt”\n\nKort tid hjelper ikke hvis stedet har stanseforbud. På gangfelt, foran gangfelt, i veikryss eller der skiltet viser stans forbudt, kan selv et kort stopp være feil.\n\n### 2. Parkering forbudt betyr ikke stans forbudt\n\nVed parkering forbudt kan du normalt stanse kort for av- og påstigning. Men du kan ikke bli stående og vente.\n\n### 3. 5 meter foran gangfelt\n\nDu skal ikke stanse eller parkere nærmere enn 5 meter foran gangfeltet. Etter gangfeltet kan parkering være lovlig, men bare hvis det ellers er trygt og tillatt.\n\n### 4. T-kryss teller også som kryss\n\nMange glemmer T-kryss. Ikke parker i eller tett ved munningen av et T-kryss, selv om det ikke ser ut som et “vanlig” fireveis kryss.\n\n### 5. Trafikal stans er ikke parkering\n\nHvis du stopper for rødt lys, kø eller vikeplikt, er det trafikal stans. Det er noe annet enn å stoppe frivillig for å vente, handle eller slippe av noen.\n\n### 6. Fortau er ikke en nødløsning\n\nDu kan ikke parkere på fortau, gangvei eller sykkelvei bare fordi veien er trang. Det kan hindre gående, syklister, barnevogner og rullestolbrukere.\n\n### 7. Forkjørsvei betyr ikke automatisk parkeringsforbud\n\nDet kan være lov å parkere på forkjørsvei, men bare hvis det ikke er skiltet forbud og bilen ikke skaper fare, hindrer sikt eller står ulovlig nær kryss eller gangfelt.'
            },
            {
                title: 'Hva bør du kunne til teoriprøven?',
                type: 'tip',
                content: 'Du bør kunne:\n\n- forskjellen på stans og parkering\n- hva trafikal stans betyr\n- 5-metersregelen ved gangfelt og veikryss\n- forskjellen på stans forbudt og parkering forbudt\n- når kort stans er lov\n- hvor du aldri må stanse\n- hvordan skilt og veimerking regulerer parkering\n\nSe også [temalisten for teoriprøven klasse B](/laeringsressurser/temaliste-teoriproven-klasse-b) for å få oversikt over hvilke temaer du bør kunne.'
            }
        ],
        faq: [
            {
                question: 'Hva er forskjellen på stans og parkering?',
                answer: 'Stans er et kort opphold, for eksempel for av- og påstigning eller av- og pålessing. Parkering er når bilen blir stående av andre grunner, også hvis føreren sitter i bilen.'
            },
            {
                question: 'Hva betyr trafikal stans?',
                answer: 'Trafikal stans er når du stopper på grunn av trafikken, for eksempel rødt lys, kø, vikeplikt eller fotgjengere i gangfelt.'
            },
            {
                question: 'Hvor mange meter fra gangfelt kan man parkere?',
                answer: 'Du må stå minst 5 meter foran gangfeltet i kjøreretningen. Etter gangfeltet kan parkering være lovlig hvis det ellers er trygt og tillatt.'
            },
            {
                question: 'Hvor mange meter fra veikryss kan man parkere?',
                answer: 'Du skal ikke stanse eller parkere i veikryss eller nærmere enn 5 meter fra veikryss.'
            },
            {
                question: 'Er det tillatt å stanse på venstre side av veien?',
                answer: 'Som hovedregel skal stans og parkering skje på høyre side i kjøreretningen. På enveiskjørt vei kan venstre side være tillatt hvis det ellers er lovlig.'
            },
            {
                question: 'Har du lov til å stanse i tunnel?',
                answer: 'Nei, du skal ikke stanse eller parkere i tunnel med mindre trafikken eller en nødsituasjon gjør det nødvendig.'
            },
            {
                question: 'Kan man parkere på forkjørsvei?',
                answer: 'Ja, det kan være lov hvis det ikke er skiltet forbud og bilen ikke står farlig, hindrer sikt eller bryter andre regler.'
            },
            {
                question: 'Kan jeg stanse der det er parkering forbudt?',
                answer: 'Ja, kort stans for av- og påstigning eller av- og pålessing kan normalt være lov. Men du kan ikke parkere eller bli stående.'
            },
            {
                question: 'Kan jeg stanse der det er stans forbudt?',
                answer: 'Nei, ikke frivillig. Stans forbudt betyr at både stans og parkering er forbudt. Trafikal stans, som kø eller rødt lys, er noe annet.'
            },
            {
                question: 'Kan jeg parkere på fortau?',
                answer: 'Nei, du skal ikke parkere på fortau, gangvei eller sykkelvei. Det kan hindre og skape fare for myke trafikanter.'
            }
        ],
        miniQuiz: [
            {
                question: "Hva er riktig forskjell på stans og parkering?",
                options: [
                    "Stans er alltid ulovlig, parkering er alltid lovlig",
                    "Parkering er når bilen blir stående av andre grunner enn kort av- og påstigning eller lasting",
                    "Parkering er bare når føreren forlater bilen",
                    "Stans og parkering betyr det samme"
                ],
                correct: "Parkering er når bilen blir stående av andre grunner enn kort av- og påstigning eller lasting",
                explanation: "Parkering kan være parkering selv om føreren sitter i bilen. Det avgjørende er hvorfor bilen står der."
            },
            {
                question: "Du stanser fordi trafikklyset viser rødt. Hva kalles dette?",
                options: [
                    "Ulovlig parkering",
                    "Trafikal stans",
                    "Parkering forbudt",
                    "Frivillig stans"
                ],
                correct: "Trafikal stans",
                explanation: "Når trafikken tvinger deg til å stoppe, er det trafikal stans."
            },
            {
                question: "Hvor nærme foran et gangfelt kan du stanse eller parkere?",
                options: [
                    "1 meter",
                    "3 meter",
                    "5 meter",
                    "Du kan stå helt inntil hvis du bare skal være rask"
                ],
                correct: "5 meter",
                explanation: "Du skal ikke stanse eller parkere på eller nærmere enn 5 meter foran gangfelt."
            },
            {
                question: "Hva betyr skiltet “Parkering forbudt”?",
                options: [
                    "Du kan aldri stoppe bilen",
                    "Du kan stanse kort, men ikke parkere",
                    "Du kan parkere hvis du sitter i bilen",
                    "Det gjelder bare om natten"
                ],
                correct: "Du kan stanse kort, men ikke parkere",
                explanation: "Parkering forbudt betyr at parkering er forbudt, men kort stans kan være lov."
            },
            {
                question: "Hva betyr “Stans forbudt”?",
                options: [
                    "Du kan stoppe i maks 2 minutter",
                    "Du kan stoppe hvis du blir sittende i bilen",
                    "Du kan ikke stanse frivillig",
                    "Du kan parkere, men ikke laste av varer"
                ],
                correct: "Du kan ikke stanse frivillig",
                explanation: "Ved stans forbudt er både stans og parkering forbudt, bortsett fra trafikal stans."
            },
            {
                question: "Hva er en vanlig teorifelle i T-kryss?",
                options: [
                    "At T-kryss ikke regnes som kryss",
                    "At du alltid kan parkere på den rette veien",
                    "At T-kryss også kan ha stans- og parkeringsforbud nær krysset",
                    "At 5-metersregelen bare gjelder motorvei"
                ],
                correct: "At T-kryss også kan ha stans- og parkeringsforbud nær krysset",
                explanation: "T-kryss er også veikryss, og du må ikke parkere slik at du hindrer sikt eller ferdsel."
            },
            {
                question: "Du stopper på et sted med parkering forbudt for å slippe av en passasjer. Er det alltid feil?",
                options: [
                    "Ja, bilen kan aldri stoppe der",
                    "Nei, kort stans for av- og påstigning kan være lov",
                    "Ja, hvis motoren er på",
                    "Nei, du kan stå der så lenge du vil hvis du sitter i bilen"
                ],
                correct: "Nei, kort stans for av- og påstigning kan være lov",
                explanation: "Ved parkering forbudt kan kort stans være lov, men bilen skal ikke bli stående."
            }
        ]
    },

    {
        id: 'promille',
        title: 'Promillegrense i Norge: alkohol og bilkjøring',
        icon: '🚫',
        shortDescription: 'Promillegrensen for bil i Norge er 0,2 promille. Det betyr at du ikke bør drikke alkohol hvis du skal kjøre. Selv små mengder alkohol kan svekke reaksjonstid, oppmerksomhet, vurderingsevne og evnen til å lese trafikkbildet riktig.\n\nPå teoriprøven må du kunne både grensen, hvordan alkohol påvirker kjøringen, og hvorfor du fortsatt kan være påvirket dagen derpå.',
        color: 'var(--apple-red)',
        seoTitle: 'Promillegrense i Norge (0,2) | Alkohol og bilkjøring',
        seoDescription: 'Lær promillegrensen for bil i Norge, hvordan alkohol påvirker kjøringen, hva som gjelder dagen derpå, og hva du må kunne til teoriprøven.',
        sections: [
            {
                title: '',
                type: 'text',
                content: '![Person med bilnøkkel som lar være å drikke alkohol før bilkjøring.](/images/promille-hero.jpg)\n*Skal du kjøre, er det tryggeste valget å la alkoholen stå.*'
            },
            {
                title: 'Kort forklart',
                type: 'info',
                content: '- Promillegrensen for bil i Norge er 0,2 promille.\n- Grensen gjelder alle motorvognførere, også unge førere og ved øvelseskjøring.\n- Du kan være straffbart påvirket selv om du føler deg edru.\n- Alkohol svekker reaksjonsevne, oppmerksomhet og vurderingsevne.\n- Du kan fortsatt ha promille dagen derpå.\n- Er du i tvil, skal du ikke kjøre.'
            },
            {
                title: 'Hva er promillegrensen i Norge?',
                type: 'text',
                content: 'Promillegrensen for førere av motorvogn i Norge er 0,2 promille. Har du høyere alkoholkonsentrasjon i blodet enn dette, regnes du som påvirket etter vegtrafikkloven.\n\nDet finnes ikke en egen 0,0-grense for unge sjåfører eller øvelseskjøring. Grensen på 0,2 gjelder alle motorvognførere. Likevel er det viktigste rådet enkelt: har du drukket alkohol, bør du la bilen stå.'
            },
            {
                title: '',
                type: 'text',
                content: '![Infografikk som viser promillegrensen for bilkjøring i Norge på 0,2 promille.](/images/promille-infografikk.jpg)\n*Promillegrensen er 0,2 promille, men det tryggeste er å ikke drikke før du skal kjøre.*'
            },
            {
                title: 'Beregning av promille',
                type: 'calculator',
                componentId: 'promille',
                content: 'Bruk kalkulatoren som en veiledende illustrasjon av hvordan alkohol kan henge igjen i kroppen. Den kan ikke avgjøre om du er lovlig eller trygg nok til å kjøre.'
            },
            {
                title: 'Kan jeg kjøre dagen derpå?',
                type: 'warning',
                content: 'Mange tror de er edru dagen etter fordi de har sovet, dusjet eller drukket kaffe. Det stemmer ikke. Kroppen forbrenner alkohol i sitt eget tempo, og du kan fortsatt ha promille selv om du føler deg fin.\n\nDet finnes geen sikker “12-timersregel” som passer for alle. Hvis du har drukket mye, drukket sent, sovet lite eller føler deg redusert, bør du ikke kjøre.'
            },
            {
                title: 'Slik påvirker alkohol kjøreevnen',
                type: 'table',
                content: `Alkohol påvirker flere ferdigheter du trenger i trafikken:

<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Hva påvirkes?</th><th style="padding: 12px 8px;">Hvorfor er det farlig?</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px; font-weight: 600;">Reaksjonstid</td><td style="padding: 12px 8px;">Du bruker lengre tid på å oppdage fare og begynne å bremse. Se også vår guide om [reaksjonstid og stopplengde](/laeringsressurser/bremselengde).</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px; font-weight: 600;">Oppmerksomhet</td><td style="padding: 12px 8px;">Du kan overse skilt, fotgjengere, kryss eller endringer i trafikken.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px; font-weight: 600;">Vurderingsevne</td><td style="padding: 12px 8px;">Du kan undervurdere fart, avstand og risiko.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px; font-weight: 600;">Koordinasjon</td><td style="padding: 12px 8px;">Styring, bremsing og plassering kan bli mindre presis.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px; font-weight: 600;">Selvkontroll</td><td style="padding: 12px 8px;">Alkohol kan gi overdreven selvtillit og dårligere risikovurdering.</td></tr></tbody></table></div>`
            },
            {
                title: 'Fakta om promillekjøring',
                type: 'info',
                content: 'Selv om nesten alle sier at de er imot promillekjøring, skjer det fortsatt mange farlige kjøreturer. Av-og-til viser til anslag om rundt 14 000 kjøreturer med alkoholpåvirket sjåfør hver dag i Norge.\n\nRisikoen øker raskt: En sjåfør med lav promille, 0,2-0,5, har omtrent dobbelt så høy skaderisiko som en edru sjåfør. Ved promille over 1,5 er risikoen oppgitt til å være mange titalls ganger høyere.\n\nPoenget til teoriprøven er enkelt: også lav promille kan svekke reaksjonstid, oppmerksomhet og vurderingsevne. Derfor er det tryggeste valget å ikke drikke hvis du skal kjøre.'
            },
            {
                title: 'Straff og konsekvenser',
                type: 'table',
                content: `Bruk av alkohol og motorvogn kan medføre strenge reaksjoner. Straffen og tapet av førerrett avhenger av den konkrete situasjonen og promillenivået.

<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Promillenivå</th><th style="padding: 12px 8px;">Mulige konsekvenser</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px; font-weight: 600;">Over 0,2 promille</td><td style="padding: 12px 8px;">Kjøringen regnes som straffbar. Vanlig reaksjon er bot (som regel basert på månedslønn).</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px; font-weight: 600;">Over 0,5 promille</td><td style="padding: 12px 8px;">Bot og fengselsreaksjon kan bli aktuelt. Midlertidig tap av førerrett er normalt.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px; font-weight: 600;">Over 1,2 promille</td><td style="padding: 12px 8px;">Strengere straff, ofte med ubetinget fengsel og langvarig tap av førerrett.</td></tr></tbody></table></div>\n\nI tillegg kan promillekjøring få store økonomiske konsekvenser. Forsikringen kan bli redusert eller nektet (regress), og du kan bli personlig ansvarlig for skader du påfører andre.`
            },
            {
                title: 'Alkohol, narkotika og medisiner',
                type: 'text',
                content: 'Reglene handler ikke bare om alkohol. Det er også forbudt å kjøre når du er påvirket av narkotika, cannabis eller legemidler som gjør deg uskikket til å kjøre.\n\nLegemidler med rød varseltrekant kan påvirke kjøreevnen. Det betyr ikke alltid at du aldri kan kjøre, men du må lese pakningsvedlegget og følge råd fra lege eller apotek. Kombinasjon av alkohol og medisiner kan være ekstra farlig.'
            },
            {
                title: 'Vanlige misforståelser',
                type: 'info',
                content: '- **“Jeg føler meg edru, så jeg kan kjøre.”** Feil. Du kan være påvirket selv om du føler deg normal.\n- **“Kaffe, dusj eller mat fjerner promille.”** Feil. Det er utelukkende tid som forbrenner alkohol.\n- **“Unge sjåfører har 0,0-grense.”** Feil. I Norge er grensen 0,2 for alle motorvognførere.\n- **“Litt alkohol påvirker ikke kjøringen.”** Feil. Også lave nivåer kan svekke reaksjon og vurdering.\n- **“Promillekalkulatoren sier det går bra.”** Ikke nok. Kalkulatoren er bare veiledende.'
            },
            {
                title: 'Dette må du kunne til teoriprøven',
                type: 'tip',
                content: '- Promillegrensen for bil er 0,2.\n- Grensen gjelder alle motorvognførere.\n- Alkohol svekker reaksjonstid, oppmerksomhet og dømmekraft.\n- Du kan ha promille dagen derpå.\n- Narkotika og trafikkfarlige legemidler kan også gjøre deg uskikket til å kjøre.\n- Er du i tvil, skal du ikke kjøre.\n\nSe også våre andre læringsressurser, som for eksempel guiden om [norske fartsgrenser](/laeringsressurser/fartsgrenser).\n\nKlar for å teste deg? [Prøv vår gratis ekspresstest eller fullverdige simulator](/quiz) for å se om du er klar til den ekte teoriprøven!'
            },
            {
                title: 'Kilder og juridisk grunnlag',
                type: 'text',
                content: '- Politiet: Rus og ruskontroll\n- Lovdata: Vegtrafikkloven § 22\n- Av-og-til: Alt du må vite om promillegrensen'
            }
        ],
        miniQuiz: [
            {
                question: "Hva er promillegrensen for bilførere i Norge?",
                options: [
                    "0,0 promille",
                    "0,2 promille",
                    "0,5 promille",
                    "1,0 promille"
                ],
                correct: "0,2 promille",
                explanation: "Promillegrensen i Norge er 0,2 promille for alle førere av motorvogn."
            },
            {
                question: "Gjelder det en egen, strengere promillegrense (f.eks. 0,0) for unge sjåfører eller ved øvelseskjøring?",
                options: [
                    "Ja, 0,0 promille for alle under 20 år",
                    "Ja, 0,0 promille for de med prøvetid",
                    "Nei, grensen på 0,2 promille gjelder for alle",
                    "Ja, 0,1 promille for øvelseskjøring"
                ],
                correct: "Nei, grensen på 0,2 promille gjelder for alle",
                explanation: "Det er ingen egen promillegrense for unge førere eller ved øvelseskjøring i Norge. Grensen på 0,2 promille gjelder alle motorvognførere."
            },
            {
                question: "Hvorfor er det uforsvarlig å stole på en 12-timersregel for å kjøre dagen derpå?",
                options: [
                    "Fordi kaffe og søvn øker promillen",
                    "Fordi alkoholforbrenningen er individuell og kan ta lengre tid",
                    "Fordi 12-timersregelen bare gjelder i helgene",
                    "Fordi politiet har 24-timersgrense"
                ],
                correct: "Fordi alkoholforbrenningen er individuell og kan ta lengre tid",
                explanation: "Alkoholforbrenning varierer fra person til person og påvirkes av kropp, søvn, mat og mengde alkohol. Du kan fortsatt ha promille dagen derpå selv etter 12 timer."
            },
            {
                question: "Hva betyr det hvis en medisinpakning er merket med en rød advarseltrekant?",
                options: [
                    "At medisinen kun kan kjøpes reseptfritt",
                    "At medisinen er ulovlig i Norge",
                    "At legemiddelet kan svekke kjøreevnen din",
                    "At du aldri har lov til å kjøre bil mens du går på den"
                ],
                correct: "At legemiddelet kan svekke kjøreevnen din",
                explanation: "Rød trekant betyr at medisinen kan påvirke kjøreevnen din. Du må lese pakningsvedlegget og rådføre deg med lege eller apotek før du kjører."
            },
            {
                question: "Hvordan påvirkes kjøreevnen din av selv små mengder alkohol?",
                options: [
                    "Reaksjonstiden forlenges og vurderingsevnen svekkes",
                    "Du reagerer raskere og blir mer oppmerksom",
                    "Kun koordinasjonen påvirkes, ikke selvkontrollen",
                    "Kjøreevnen påvirkes ikke under 0,5 promille"
                ],
                correct: "Reaksjonstiden forlenges og vurderingsevnen svekkes",
                explanation: "Selv lave promillenivåer svekker konsentrasjonen, forlenger reaksjonstiden og gir dårligere vurderingsevne."
            }
        ],
        faq: [
            {
                question: "Hva er promillegrensen i Norge?",
                answer: "Promillegrensen i Norge er 0,2 promille for alle førere av motorvogn."
            },
            {
                question: "Hva er promillegrensen for bil?",
                answer: "Promillegrensen for bil er 0,2 promille, uavhengig av førerens alder, erfaring eller om det er øvelseskjøring."
            },
            {
                question: "Can jeg kjøre med 0,2 i promille?",
                answer: "Promillegrensen er på nøyaktig 0,2 promille. Har du 0,2 eller høyere i promille regnes du som straffbart påvirket etter vegtrafikkloven. Det sikreste er derfor alltid å ikke drikke alkohol i det hele tatt når du skal kjøre."
            },
            {
                question: "Er det nulltoleranse for unge sjåfører?",
                answer: "Nei, det er ikke en egen 0,0-promillegrense for unge sjåfører i Norge. Grensen på 0,2 promille gjelder absolutt alle førere, også nybegynnere, unge førere under 20 år og ved øvelseskjøring."
            },
            {
                question: "Hvor lenge må jeg vente med å kjøre dagen derpå?",
                answer: "Det finnes ingen fast regel (som f.eks. en '12-timersregel') fordi kroppen forbrenner alkohol i sitt eget tempo (normalt rundt 0,10 til 0,15 promille per time). Hvis du har drukket mye eller sent på kvelden, kan du fortsatt ha ulovlig promille neste dag. Er du i tvil, skal du la bilen stå."
            },
            {
                question: "Kan medisiner eller cannabis påvirke kjøreevnen?",
                answer: "Ja. Kjøring under påvirkning av narkotika eller trafikkfarlige legemidler (merket med rød varseltrekant) er sidestilt med promillekjøring og er straffbart. Følg alltid råd fra lege og apotek."
            }
        ]
    },

    {
        id: 'tilhenger',
        title: 'Tilhenger og henger: Regler, klasser og kalkulator',
        icon: '🚗',
        shortDescription: 'Alt du trenger om tilhenger til teoriprøven. 750 kg-regelen, campingvogn-regelen, klasse B96 og BE forklart enkelt med [gratis kalkulator](/laeringsressurser/tilhenger#henger-kalkulator).',
        color: 'var(--apple-red)',
        seoTitle: 'Tilhenger klasse B: regler, vekt, B96, BE og kalkulator | Teori-test.no',
        seoDescription: 'Finn ut om du kan kjøre med tilhenger på klasse B. Se 750 kg-regelen, 3500 kg-regelen, B96, BE, fartsgrenser og bruk kalkulatoren.',
        sections: [
            {
                title: 'Kort forklart: tilhenger og førerkort',
                type: 'info',
                content: 'Med klasse B kan du trekke tilhenger på maks 750 kg tillatt totalvekt, eller tyngre tilhenger hvis bil + tilhenger har samlet tillatt totalvekt på maks 3500 kg. B96 gjelder opp til 4250 kg. BE kreves over dette. [Les om automatlappen og elbil med tilhenger](/laeringsressurser/automatlappen)'
            },
            {
                title: 'Kort svar: Hvilken tilhenger kan du kjøre med klasse B?',
                type: 'tip',
                content: '- Klasse B: tilhenger maks 750 kg tillatt totalvekt.\n- Eller tyngre tilhenger hvis bil + tilhenger har samlet tillatt totalvekt maks 3500 kg.\n- B kode 96 (B96): samlet tillatt totalvekt maks 4250 kg.\n- BE: tyngre kombinasjoner, men fortsatt innenfor bilens og tilhengerens tekniske grenser.\n- Sjekk alltid: førerkortklasse, bilens vognkort og tilhengerens vognkort.'
            },
            {
                title: 'Tilhengerkalkulator',
                type: 'calculator',
                content: 'Tast inn tillatt totalvekt for bil og tilhenger under for å sjekke hvilken førerkortklasse du trenger for å kjøre lovlig.'
            },
            {
                title: 'Førerkortklasser for tilhenger',
                type: 'table',
                content: `<table>
    <thead>
        <tr>
            <th>Klasse</th>
            <th>Når gjelder det?</th>
            <th>Maks samlet tillatt totalvekt</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Klasse B</td>
            <td>Tilhenger maks 750 kg, eller vogntog maks 3500 kg</td>
            <td>3500 kg</td>
        </tr>
        <tr>
            <td>B96</td>
            <td>Vogntog over 3500 kg</td>
            <td>4250 kg</td>
        </tr>
        <tr>
            <td>BE</td>
            <td>Tyngre kombinasjoner</td>
            <td>opptil 7000 kg</td>
        </tr>
    </tbody>
</table>`
            },
            {
                title: 'Hva betyr "tillatt totalvekt"?',
                type: 'text',
                content: 'Når vi snakker om vekt for tilhenger og bil i dette regelverket, er det alltid "tillatt totalvekt" (også kalt registrert totalvekt) som gjelder – IKKE faktisk lastet vekt. Tillatt totalvekt finner du i vognkortet (del I og II).\n\nEksempel: Campingvognen din veier 800 kg lastet, men tillatt totalvekt i vognkortet er 1300 kg. Da bruker du 1300 kg i alle beregninger.\n\nTips: Sjekk alltid vognkortet – ikke stol på gjetning.'
            },
            {
                title: 'Klasse B – grunnreglene for tilhenger',
                type: 'info',
                content: 'Med vanlig klasse B (personbil) kan du trekke tilhenger i to situasjoner:\n\n1. 750 kg-regelen:\nTilhengeren har tillatt totalvekt på 750 kg eller mindre. Da kan samlet tillatt totalvekt være over 3500 kg, men bilen må fortsatt være godkjent for å trekke tilhengeren. Sjekk alltid bilens vognkort.\n\n2. Campingvogn-regelen (også kalt 3500 kg-regelen):\nTilhengeren er TYNGRE enn 750 kg, men bilens tillatte totalvekt pluss tilhengerens tillatte totalvekt overstiger IKKE 3500 kg.\n\nCampingvognregelen er ofte brukt om regelen der du kan trekke tilhenger over 750 kg med klasse B hvis samlet tillatt totalvekt for bil og tilhenger ikke er over 3500 kg.\n\nEksempel: Bil med tillatt totalvekt 2200 kg + tilhenger 1100 kg = 3300 kg. Tilhengeren er over 750 kg, men kombinasjonen er under 3500 kg → Klasse B holder!'
            },
            {
                title: '⚠️ Husk bilens begrensninger',
                type: 'warning',
                content: 'Husk: selv om førerkortklassen din tillater en viss vekt, må du også sjekke bilens maksimale tillatte tilhengervekt i vognkortet. Denne grensen kan være lavere enn det klassereglene tillater, og varierer fra bil til bil. Vekten av tilhengeren må være innenfor det bilen har lov å trekke.'
            },
            {
                title: 'Klasse B96 – mellomklassen',
                type: 'text',
                content: 'B96 er en utvidelse av klasse B som gjelder når:\n- Tilhengeren veier MER enn 750 kg, OG\n- Kombinert tillatt totalvekt (bil + tilhenger) er MELLOM 3500 kg og 4250 kg.\n\nKrav for B96:\n- Bestå et 7-timers obligatorisk kurs (5 t teori + 2 t kjøring)\n- INGEN oppkjøring/praktisk prøve kreves\n- B96 "stemplet" i førerkortet etter bestått kurs\n\nEksempel: Bil med tillatt totalvekt 2500 kg + tilhenger 1200 kg = 3700 kg → B96.'
            },
            {
                title: 'Klasse BE – for de tyngste kombinasjonene',
                type: 'text',
                content: 'BE kreves når kombinert tillatt totalvekt overstiger 4250 kg.\n- Tilhengeren kan ha tillatt totalvekt opp til 3500 kg\n- Kombinert vekt kan gå opp til 7000 kg\n- Krever full teoriprøve for BE + praktisk oppkjøring\n\nEksempel: Bil 3000 kg + tilhenger 1500 kg = 4500 kg → Klasse BE. BE gjelder tyngre kombinasjoner, innenfor grensene i bilens og tilhengerens vognkort.\n\nNB: Hestehengere og større båthengere havner ofte i BE-kategorien.'
            },
            {
                title: 'Lastsikring og plassering av last på tilhenger',
                type: 'text',
                content: 'Som fører har du ansvar for at lasten på tilhengeren er plassert og sikret på en trygg og lovlig måte. Dårlig sikret last kan forskyve seg eller falle av når du akselererer, bremser eller svinger. Hvis lasten flytter seg, kan vektfordelingen bli feil, og bilen med tilhenger kan bli ustabil eller vanskelig å kontrollere.\n\nPlasser lasten lavt, mest mulig midt på tilhengeren og med tyngdepunktet nær akslingen. Unngå for mye vekt helt bakerst eller høyt stablet last. Feil vektfordeling kan gi dårligere kjøreegenskaper, økt slingring og større veltefare.\n\nLasten bør som hovedregel ligge innenfor tilhengeren. Hvis noe stikker ut foran eller bak, må det være forsvarlig sikret, tydelig merket ved behov og ikke være til fare for andre trafikanter.\n\n![Riktig og feil plassering av last på tilhenger med bil, som viser hvordan vektfordeling påvirker stabilitet.](/lastsikring-tilhenger.png)\n*Forlastet eller baklastet tilhenger gir feil kuletrykk og dårligere stabilitet. Plasser lasten lavt og med tyngdepunktet nær midten av tilhengeren.*'
            },
            {
                title: 'Husk før du kjører med henger',
                type: 'tip',
                content: '- Sikre lasten før du kjører.\n- Plasser tung last lavt og nær akslingen.\n- Unngå for mye vekt bakerst på tilhengeren.\n- Sjekk lys, kobling, sikkerhetswire og dekk før avreise.'
            },
            {
                title: 'Fartsgrenser med tilhenger',
                type: 'info',
                content: 'Alle tilhengere kan kjøres i inntil 80 km/t der fartsgrensen tillater det — uavhengig av om tilhengeren har bremser eller ikke. Den gamle 60 km/t-grensen for tilhengere uten bremser gjelder ikke lenger.\n\nTempo 100: Noen tilhengere kan etter en egen teknisk godkjenning hos Statens vegvesen kjøres i inntil 100 km/t. Du får da et godkjenningsdokument og et merke som skal monteres på tilhengeren. Autorisert Tempo 100-sjekk kan gjøres hos Statens vegvesen.'
            },
            {
                title: 'Sjekkliste før avgang med tilhenger',
                type: 'tip',
                content: 'Bruk denne sjekklisten FØR du kjører – dette er pensumstoff på teoriprøven:\n- Koblingen: Henger/kule er låst og sikret (klikk-lyd)\n- Låsekabel: Nødbremsewire er festet til bilen (IKKE lås/kule)\n- Lys: Brems-, bak-, og blinklys fungerer (sjekk via bakspeil mens noen trykker)\n- Last: 100% sikret mot fremover – 50% sikret mot sideveis og bakover\n- Dekk: Riktig lufttrykk på tilhengerdekk (se vognkort)\n- Nummerskilt: Synlig, rent, og belyst (samme nr. som bil der tilhenger mangler eget)\n- Lastfordeling: Tyngste last lavt og nær akslingen. Unngå for mye vekt helt foran eller helt bakerst.\n\nHusk: Overvekt bakerst = svaiing og ustabilitet i høy hastighet.'
            }
        ],
        miniQuiz: [
  {
    question: "Bil veier 2200 kg og tilhenger har tillatt totalvekt 1100 kg. Holder klasse B?",
    options: ["Ja, klasse B holder", "Nei, du trenger B96", "Nei, du trenger BE", "Avhenger av bilens egenvekt"],
    correct: "Ja, klasse B holder",
    explanation: "Samlet tillatt totalvekt er 2200 + 1100 = 3300 kg. Dette er under 3500 kg — og siden det er under 3500 kg-grensen, holder det med vanlig klasse B selv om tilhengeren er over 750 kg."
  },
  {
    question: "Hva er maks tillatt totalvekt for tilhenger med klasse B (enkel regel)?",
    options: ["500 kg", "750 kg", "1000 kg", "3500 kg"],
    correct: "750 kg",
    explanation: "Med klasse B kan du trekke tilhenger med tillatt totalvekt på maks 750 kg. Vil du trekke tyngre, gjelder 3500 kg-regelen for hele kombinasjonen — eller du trenger B96/BE."
  },
  {
    question: "Hva er maks fart med tilhenger uten Tempo 100-godkjenning?",
    options: ["60 km/t", "70 km/t", "80 km/t", "100 km/t"],
    correct: "80 km/t",
    explanation: "Etter regelendringen i mars 2022 kan alle tilhengere kjøres i inntil 80 km/t der fartsgrensen tillater det. Den gamle 60 km/t-grensen for tilhengere uten bremser gjelder ikke lenger."
  },
  {
    question: "Hva trengs for å kjøre med tilhenger i 100 km/t?",
    options: ["Bare BE-kort", "Tempo 100-godkjenning fra Statens vegvesen", "Ingenting ekstra", "Spesialdekk"],
    correct: "Tempo 100-godkjenning fra Statens vegvesen",
    explanation: "For å kjøre i 100 km/t med tilhenger trenger du en egen teknisk godkjenning fra Statens vegvesen. Du får da et godkjenningsdokument og et merke som monteres på tilhengeren."
  },
  {
    question: "Hva betyr tillatt totalvekt på tilhengeren?",
    options: ["Vekten av selve tilhengeren tom", "Maks vekt tilhengeren kan veie med last", "Vekten av lasten alene", "Kombinert vekt av bil og tilhenger"],
    correct: "Maks vekt tilhengeren kan veie med last",
    explanation: "Tillatt totalvekt er den maksimale vekten tilhengeren lovlig kan veie inkludert all last. Det er denne vekten du bruker når du beregner om klasse B, B96 eller BE gjelder."
  }
],
        faq: [
            {
                question: "Hvor tung tilhenger kan jeg kjøre med klasse B?",
                answer: "Med klasse B kan du trekke tilhenger med tillatt totalvekt på maks 750 kg. Alternativt kan du trekke tyngre tilhenger hvis samlet tillatt totalvekt for bil og tilhenger ikke overstiger 3500 kg."
            },
            {
                question: "Hva er reglene for tilhenger med klasse B?",
                answer: "Hovedreglene er at du kan trekke tilhenger på maks 750 kg tillatt totalvekt. Dersom tilhengeren er tyngre enn 750 kg, kan du kjøre den med klasse B dersom samlet tillatt totalvekt for bil + tilhenger ikke overstiger 3500 kg (campingvognregelen)."
            },
            {
                question: "Hva er campingvognregelen?",
                answer: "Campingvognregelen er ofte brukt om regelen der du kan trekke tilhenger over 750 kg med klasse B hvis samlet tillatt totalvekt for bil og tilhenger ikke er over 3500 kg."
            },
            {
                question: "Når trenger jeg B96?",
                answer: "Du trenger B96 dersom samlet tillatt totalvekt for bil og tilhenger er mellom 3500 og 4250 kg. Dette krever et obligatorisk 7-timers kurs, men ingen ny oppkjøring."
            },
            {
                question: "Når trenger jeg BE?",
                answer: "BE gjelder tyngre kombinasjoner, innenfor grensene i bilens og tilhengerens vognkort. Du trenger BE dersom samlet tillatt totalvekt for bil og tilhenger overstiger 4250 kg."
            },
            {
                question: "Hvor fort kan man kjøre med tilhenger?",
                answer: "Alle tilhengere kan kjøres i inntil 80 km/t der fartsgrensen tillater det. Dersom tilhengeren har godkjent Tempo 100 fra Statens vegvesen, kan du kjøre i inntil 100 km/t."
            },
            {
                question: "Hva er forskjellen på tillatt totalvekt og faktisk vekt?",
                answer: "Tillatt totalvekt er den maksimale vekten kjøretøyet eller tilhengeren har lov til å veie med full last (oppgitt i vognkortet), og bestemmer førerkortklassen din. Faktisk vekt er hva kjøretøyet og lasten veier der og da på veien."
            },
            {
                question: "Hvordan sjekker jeg vognkortet for bil og tilhenger?",
                answer: "I bilens vognkort sjekker du tillatt totalvekt og bilens maksimale tilhengervekt (med/uten brems). I tilhengerens vognkort sjekker du tilhengerens tillatte totalvekt. Begge vognkort må sjekkes for å sikre at du ikke overskrider tekniske eller førerkortmessige grenser."
            }
        ]
    },

    {
        id: 'miljo',
        title: 'Miljøvennlig kjøring – økonomisk kjøring til teoriprøven',
        icon: '🌿',
        shortDescription: 'Spar drivstoff og reduser utslipp med riktig kjørestil',
        color: 'var(--apple-green)',
        seoTitle: 'Miljøvennlig kjøring – økonomisk kjøring til teoriprøven | Teori-test.no',
        seoDescription: 'Lær miljøvennlig og økonomisk kjøring til teoriprøven: jevn fart, riktig gir, dekktrykk, tomgang, takboks, elbil og vanlige teorifeller.',
        sections: [
            {
                title: 'Miljøvennlig kjøring – økonomisk kjøring til teoriprøven',
                type: 'text',
                content: 'Miljøvennlig kjøring handler om å bruke bilen på en måte som gir lavere forbruk, mindre utslipp og mindre slitasje. På teoriprøven kan du få spørsmål om kjørestil, dekktrykk, tomgang, takboks, girvalg, fart og hvordan du kan spare energi med elbil.\n\nDen korte versjonen er enkel: Kjør jevnt, planlegg tidlig, unngå unødvendig bremsing og ikke frakt rundt på ting du ikke trenger. Bilen din er ikke et rullende bodrom, selv om det av og til føles praktisk.\n\n![Miljøvennlig kjøring med bil og fornybar energi](/Mijovennlig_kjoring_artikel_bilde.png)'
            },
            {
                title: 'Kort forklart',
                type: 'info',
                content: 'Miljøvennlig og økonomisk kjøring betyr at du:\n\n- kjører jevnt og forutseende\n- holder riktig fart\n- unngår brå akselerasjon og hard bremsing\n- bruker riktig gir\n- slipper gassen tidlig og bruker motorbrems\n- har riktig dekktrykk\n- unngår unødvendig tomgang\n- fjerner takboks og ekstra vekt når du ikke trenger det\n\nMålet er ikke å kjøre saktest mulig. Målet er å kjøre smart, trygt og forutsigbart.'
            },
            {
                title: 'Hva betyr økonomisk kjøring?',
                type: 'text',
                content: 'Økonomisk kjøring er en kjørestil som reduserer energibruk. For bensin- og dieselbiler betyr det lavere drivstofforbruk. For elbiler betyr det bedre rekkevidde og mindre behov for lading.\n\nEn jevn kjørestil kan redusere forbruket betydelig, særlig i bytrafikk der mange akselererer og bremser unødvendig. På teoriprøven handler dette ofte om å velge det alternativet som gir roligst og mest forutseende kjøring.'
            },
            {
                title: 'Kjør jevnt og planlegg tidlig',
                type: 'warning',
                content: 'Den viktigste regelen er å se langt frem og planlegge i god tid.\n\nHvis du ser at trafikklyset blir rødt, slipper du gassen tidlig i stedet for å kjøre helt frem og bremse hardt. Hvis trafikken foran sakker ned, tilpasser du farten rolig. Hvis du nærmer deg rundkjøring eller kø, reduserer du farten tidlig.\n\nDette sparer drivstoff og energi fordi bilen bruker mindre kraft på akselerasjon og mindre energi går tapt i bremsing.\n\nGod økonomisk kjøring er derfor også god trafikksikkerhet: Du får bedre tid til å oppdage farer og reagere riktig.'
            },
            {
                title: 'Riktig gir og lavt turtall',
                type: 'text',
                content: 'I bil med manuelt gir bør du gire opp tidlig og bruke høyest mulig gir uten at motoren lugger. Høyt turtall gir ofte høyere forbruk.\n\nSom hovedregel:\n\n- akselerer rolig\n- gir opp tidlig\n- unngå å kjøre lenge på unødvendig høyt turtall\n- gir ned når motoren begynner å trekke dårlig\n\nI automatbil gjør bilen mye av dette selv, men kjørestilen din betyr fortsatt mye. Brå gasspådrag og hard bremsing øker forbruket uansett girkasse.'
            },
            {
                title: 'Bruk motorbrems og slipp gassen tidlig',
                type: 'info',
                content: 'Motorbrems betyr at du slipper gassen og lar bilen bremse gradvis ved hjelp av motoren. I moderne biler kan dette redusere eller stoppe drivstofftilførselen mens bilen ruller.\n\nDette er spesielt nyttig når du nærmer deg:\n\n- kryss\n- rundkjøring\n- rødt lys\n- kø\n- nedoverbakker\n\nDu skal likevel alltid ha kontroll. Motorbrems er ikke en erstatning for bremsene når du faktisk må stoppe raskt.'
            },
            {
                title: 'Tomgangskjøring',
                type: 'warning',
                content: 'Unngå unødvendig tomgang. Hvis du står stille over tid, bruker bilen drivstoff uten å frakte deg noe sted. Det gir utslipp, støy og dårlig luft, særlig i tettbygde områder.\n\nPå teoriprøven er riktig svar ofte å slå av motoren ved lengre stopp, så lenge det er praktisk og trygt.'
            },
            {
                title: 'Dekktrykk påvirker forbruket',
                type: 'text',
                content: 'For lavt dekktrykk gjør at bilen ruller tyngre. Det kan gi høyere forbruk, dårligere kjøreegenskaper og mer dekkslitasje.\n\n![Dekktrykk og miljøpåvirkning – lavt dekktrykk gir økt forbruk, dårligere grep og lengre bremselengde](/Mijovennlig_kjoring_artikel_bilde_2.png)\n\nDu bør sjekke dekktrykket jevnlig, og alltid før langtur eller tung last. Riktig dekktrykk finner du vanligvis:\n\n- i bilens instruksjonsbok\n- på innsiden av dørkarmen\n- ved tanklokk eller ladeluke på enkelte biler\n\nHusk at dekktrykket ofte skal justeres når bilen er tungt lastet. For lavt dekktrykk kan også gi lengre bremselengde og dårligere grep, særlig på våt vei.\n\nLes også om [sikkerhetskontroll](/laeringsressurser/sikkerhetskontroll) hvis du vil lære mer om dekk, lys og kontroll av bilen.'
            },
            {
                title: 'Takboks, last og luftmotstand',
                type: 'info',
                content: 'Takboks og takstativ øker luftmotstanden. Det kan gi merkbart høyere forbruk, spesielt i høy fart.\n\nEkstra vekt påvirker også forbruket. Jo tyngre bilen er, desto mer energi trengs for å akselerere og holde farten.\n\nDette bør du gjøre:\n\n- ta av takboks når den ikke er i bruk\n- fjern unødvendig tung last\n- pakk smart og lavt\n- hold vinduer lukket i høy fart hvis mulig\n\nEn tom takboks på motorveien er i praksis en liten motvind du selv har skrudd fast på taket. Lite elegant. Ganske dyrt.'
            },
            {
                title: 'Aircondition og varme',
                type: 'text',
                content: 'Klimaanlegg, setevarme, bakrutevarme og kupévarme bruker energi. Det betyr mest i elbil, men også fossilbiler bruker mer energi når utstyr belaster motoren eller det elektriske systemet.\n\nDu skal selvfølgelig bruke varme og ventilasjon når det trengs for sikt og sikkerhet. Isfrie ruter og god sikt er viktigere enn å spare noen få prosent strøm eller drivstoff.\n\nRiktig prioritering er:\n\n1. Sikker sikt først\n2. Komfort etterpå\n3. Sparing når det er praktisk'
            },
            {
                title: 'Fart og forbruk',
                type: 'text',
                content: 'Høy fart gir betydelig mer luftmotstand. Derfor øker forbruket mye når farten blir høy, spesielt på motorvei. Selv små økninger i hastighet kan gi merkbart høyere drivstofforbruk eller kortere rekkevidde for elbil.\n\nTabellen under viser et forenklet eksempel på hvordan forbruket kan øke ved høyere hastighet:\n\n| Hastighet | Økt forbruk |\n|---|---:|\n| 80 km/t | Referanse |\n| 90 km/t | ca. +10 % |\n| 100 km/t | ca. +20 % |\n| 110 km/t | ca. +30 % |\n| 120 km/t | ca. +40 % |\n\nTallene er omtrentlige og vil variere med biltype, vær, last, dekk, takboks og kjørestil. Poenget er likevel viktig til teoriprøven: Høyere fart gir høyere luftmotstand og økt energibruk.\n\n### Tips for hastighetstilpasning\n\n- Hold jevn fart når forholdene tillater det.\n- Unngå unødvendig høy fart, særlig på motorvei.\n- Slipp gassen tidlig når du ser at trafikken foran bremser.\n- Bruk cruisekontroll der det passer, men ikke når føret krever ekstra aktiv kontroll.\n- Tilpass farten etter sikt, føre, trafikk og fartsgrense.\n\nLes også om [fartsgrenser i Norge](/laeringsressurser/fartsgrenser).'
            },
            {
                title: 'Miljøvennlig kjøring med elbil',
                type: 'info',
                content: 'Elbiler har ingen lokale utslipp under kjøring, men energibruk og rekkevidde påvirkes fortsatt av kjørestilen din.\n\n![Elbil på vei med vindkraft – miljøvennlig kjøring og energieffektiv kjørestil](/Mijovennlig_kjoring_artikel_bilde_3.png)\n\nFor å kjøre mer økonomisk med elbil bør du:\n\n- akselerere rolig\n- holde jevn fart\n- bruke regenerativ bremsing smart\n- forvarme bilen mens den står til lading når det er mulig\n- unngå unødvendig høy fart\n- bruke varme og klimaanlegg fornuftig\n- ha riktig dekktrykk\n\nRegenerativ bremsing betyr at bilen kan hente tilbake energi når du slipper gassen eller bremser lett. Men det beste er fortsatt å planlegge tidlig, slik at du slipper unødvendige oppbremsinger.'
            },
            {
                title: 'Typiske teorifeller',
                type: 'warning',
                content: 'På teoriprøven kan miljøvennlig kjøring dukke opp i spørsmål som handler om både miljø, sikkerhet og kjøretøyteknikk.\n\nVanlige feller:\n\n- Å tro at miljøvennlig kjøring betyr å kjøre saktest mulig\n- Å bremse hardt i stedet for å slippe gassen tidlig\n- Å kjøre med for lavt dekktrykk\n- Å la takboksen stå på hele året\n- Å la motoren gå unødvendig på tomgang\n- Å spare strøm eller drivstoff på bekostning av sikt og sikkerhet\n- Å tro at elbil ikke påvirkes av fart, kulde eller kjørestil'
            },
            {
                title: 'Oppsummering',
                type: 'info',
                content: 'Miljøvennlig kjøring er egentlig bare smart kjøring. Du sparer energi, reduserer utslipp, sliter mindre på bilen og får bedre kontroll i trafikken.\n\nHusk dette til teoriprøven:\n\n- Se langt frem\n- Kjør jevnt\n- Slipp gassen tidlig\n- Bruk riktig gir\n- Hold riktig dekktrykk\n- Fjern unødvendig last og takboks\n- Unngå tomgang\n- Prioriter alltid sikkerhet og sikt'
            }
        ],
        faq: [
            {
                question: 'Hva er miljøvennlig kjøring?',
                answer: 'Miljøvennlig kjøring betyr å kjøre på en måte som reduserer energibruk, utslipp og slitasje. Det handler blant annet om jevn fart, riktig gir, riktig dekktrykk og å unngå unødvendig tomgang.'
            },
            {
                question: 'Hva er økonomisk kjøring?',
                answer: 'Økonomisk kjøring er en kjørestil som bruker minst mulig drivstoff eller strøm uten at det går ut over sikkerheten.'
            },
            {
                question: 'Hvordan kan jeg redusere drivstofforbruket?',
                answer: 'Du kan redusere forbruket ved å kjøre jevnt, planlegge tidlig, bruke riktig gir, holde riktig dekktrykk, unngå tomgang og fjerne takboks eller unødvendig last.'
            },
            {
                question: 'Hvorfor bruker bilen mer drivstoff i høy fart?',
                answer: 'I høy fart øker luftmotstanden kraftig. Bilen må bruke mer energi på å presse seg gjennom luften, og forbruket øker.'
            },
            {
                question: 'Hvorfor øker takboks drivstofforbruket?',
                answer: 'Takboks øker luftmotstanden. Jo høyere fart du kjører i, desto mer energi bruker bilen.'
            },
            {
                question: 'Er elbil alltid miljøvennlig å kjøre?',
                answer: 'Elbil har ingen lokale utslipp under kjøring, men energibruken påvirkes fortsatt av fart, temperatur, dekktrykk, last og kjørestil.'
            },
            {
                question: 'Skal man slå av motoren ved tomgang?',
                answer: 'Ved lengre stopp bør du slå av motoren hvis det er praktisk og trygt. Unødvendig tomgang gir forbruk, utslipp og støy.'
            }
        ],
        miniQuiz: [
            {
                question: 'Hva er det viktigste prinsippet i økonomisk og miljøvennlig kjøring?',
                options: [
                    'Å kjøre saktest mulig hele tiden',
                    'Å kjøre jevnt og forutseende',
                    'Å bremse sent og hardt',
                    'Å bruke lavest mulig gir'
                ],
                correct: 'Å kjøre jevnt og forutseende',
                explanation: 'Jevn og forutseende kjøring reduserer unødvendig akselerasjon og bremsing. Det gir lavere forbruk og bedre trafikksikkerhet.'
            },
            {
                question: 'Du ser at trafikklyset foran blir rødt. Hva er mest miljøvennlig?',
                options: [
                    'Holde farten helt frem og bremse hardt',
                    'Slippe gassen tidlig og la bilen rulle rolig ned i fart',
                    'Gire ned kraftig og øke turtallet',
                    'Akselerere for å komme nærmere køen'
                ],
                correct: 'Slippe gassen tidlig og la bilen rulle rolig ned i fart',
                explanation: 'Når du slipper gassen tidlig, bruker bilen mindre energi og du unngår unødvendig hard bremsing.'
            },
            {
                question: 'Hva kan for lavt dekktrykk føre til?',
                options: [
                    'Lavere forbruk og bedre komfort',
                    'Høyere forbruk, mer dekkslitasje og dårligere grep',
                    'Kortere bremselengde på alle underlag',
                    'At bilen bruker mindre energi i høy fart'
                ],
                correct: 'Høyere forbruk, mer dekkslitasje og dårligere grep',
                explanation: 'For lavt dekktrykk gir høyere rullemotstand. Det kan øke forbruket, gi dårligere kjøreegenskaper og slite dekkene mer.'
            },
            {
                question: 'Hvorfor bør du ta av takboks når du ikke bruker den?',
                options: [
                    'Fordi den øker luftmotstanden og forbruket',
                    'Fordi den gjør bilen lettere å parkere, men påvirker ikke forbruket',
                    'Fordi den bare er lovlig om vinteren',
                    'Fordi den reduserer dekktrykket'
                ],
                correct: 'Fordi den øker luftmotstanden og forbruket',
                explanation: 'Takboks og takstativ øker luftmotstanden. Det kan gi merkbart høyere energibruk, særlig i høy fart.'
            },
            {
                question: 'Hva er riktig om klimaanlegg, varme og energisparing?',
                options: [
                    'Du bør aldri bruke det hvis du vil spare energi',
                    'Sikt og sikkerhet går foran energisparing',
                    'Aircondition påvirker bare elbiler',
                    'Bakrutevarme er forbudt under kjøring'
                ],
                correct: 'Sikt og sikkerhet går foran energisparing',
                explanation: 'Du skal alltid prioritere sikt og sikkerhet. Bruk varme, ventilasjon og klimaanlegg når det trengs for trygg kjøring.'
            },
            {
                question: 'Hva skjer vanligvis med forbruket når farten øker mye på motorvei?',
                options: [
                    'Forbruket går ned fordi motoren jobber jevnere',
                    'Forbruket øker fordi luftmotstanden blir større',
                    'Forbruket er alltid likt uansett hastighet',
                    'Forbruket påvirkes bare av dekktrykk'
                ],
                correct: 'Forbruket øker fordi luftmotstanden blir større',
                explanation: 'Høyere fart gir mer luftmotstand. Derfor øker energibruken betydelig når farten blir høy.'
            },
            {
                question: 'Hva betyr regenerativ bremsing i en elbil?',
                options: [
                    'At bilen bruker mer drivstoff når du bremser',
                    'At bilen kan hente tilbake noe energi når du slipper gassen eller bremser lett',
                    'At bremsene ikke slites i det hele tatt',
                    'At bilen lader raskere jo hardere du bremser'
                ],
                correct: 'At bilen kan hente tilbake noe energi når du slipper gassen eller bremser lett',
                explanation: 'Regenerativ bremsing gjør at elbilen kan hente tilbake noe energi ved lett bremsing eller når du slipper gassen.'
            }
        ]
    },

    {
        id: 'vognkort-vekter',
        title: 'Vognkort og vekter',
        shortDescription: 'Lær å lese vognkortet til teoriprøven: egenvekt, tillatt totalvekt, nyttelast, aksellast, vogntogvekt og tilhengervekt.',
        icon: '📋',
        color: 'var(--apple-teal)',
        seoTitle: 'Vognkort og vekter – egenvekt, nyttelast og totalvekt | Teori-test.no',
        seoDescription: 'Lær å lese vognkortet til teoriprøven: egenvekt, tillatt totalvekt, nyttelast, aksellast, vogntogvekt og tilhengervekt. Med eksempler og miniQuiz.',
        sections: [
            {
                title: 'Kort forklart: hva viser vognkortet?',
                type: 'text',
                content: 'Vognkortet viser bilens tekniske data og lovlige vektgrenser. De viktigste tallene til teoriprøven er egenvekt, tillatt totalvekt, nyttelast, tillatt vogntogvekt, aksellast og tillatt hengervekt med eller uten brems. Det er den tekniske delen av vognkortet, del 1, som skal ligge i bilen under kjøring. Del 2 er eierdelen og bør oppbevares trygt hjemme.'
            },
            {
                title: 'Vognkort og vekter: Slik forstår du tallene til teoriprøven',
                type: 'text',
                content: 'Vognkortet forteller deg hva bilen er godkjent for: hvor mye den kan veie, hvor mye du kan laste, hvor mye den kan trekke, og hvilke tekniske grenser du må følge. På teoriprøven får du ofte et bilde av et vognkort og må regne ut nyttelast, tilhengervekt eller om bilen er lovlig lastet.'
            },
            {
                title: '',
                type: 'table',
                content: `<div style="overflow-x:auto; margin: 1rem 0;">\n<table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">\n    <thead>\n        <tr style="border-bottom: 2px solid var(--color-border);">\n            <th style="padding: 1rem 0.5rem; text-align: left; font-weight: 700;">Begrep</th>\n            <th style="padding: 1rem 0.5rem; text-align: left; font-weight: 700;">Hva betyr det?</th>\n            <th style="padding: 1rem 0.5rem; text-align: left; font-weight: 700;">Typisk teorifelle</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr style="border-bottom: 1px solid var(--color-border);">\n            <td style="padding: 1rem 0.5rem; font-weight: 600;">Egenvekt med fører</td>\n            <td style="padding: 1rem 0.5rem;">Bilens vekt uten passasjerer og bagasje, men med fører på 75 kg</td>\n            <td style="padding: 1rem 0.5rem;">Mange trekker fra føreren én gang til</td>\n        </tr>\n        <tr style="border-bottom: 1px solid var(--color-border);">\n            <td style="padding: 1rem 0.5rem; font-weight: 600;">Tillatt totalvekt</td>\n            <td style="padding: 1rem 0.5rem;">Maks lovlig vekt for bilen med last og passasjerer</td>\n            <td style="padding: 1rem 0.5rem;">Må aldri overskrides</td>\n        </tr>\n        <tr style="border-bottom: 1px solid var(--color-border);">\n            <td style="padding: 1rem 0.5rem; font-weight: 600;">Aktuell totalvekt</td>\n            <td style="padding: 1rem 0.5rem;">Det bilen faktisk veier akkurat nå</td>\n            <td style="padding: 1rem 0.5rem;">Endrer seg med passasjerer og last</td>\n        </tr>\n        <tr style="border-bottom: 1px solid var(--color-border);">\n            <td style="padding: 1rem 0.5rem; font-weight: 600;">Nyttelast</td>\n            <td style="padding: 1rem 0.5rem;">Hvor mye bilen kan laste av passasjerer og bagasje</td>\n            <td style="padding: 1rem 0.5rem;">Takboks og bagasje teller med</td>\n        </tr>\n        <tr style="border-bottom: 1px solid var(--color-border);">\n            <td style="padding: 1rem 0.5rem; font-weight: 600;">Tillatt vogntogvekt</td>\n            <td style="padding: 1rem 0.5rem;">Maks samlet vekt for bil og tilhenger</td>\n            <td style="padding: 1rem 0.5rem;">Kan begrense selv om hengervekten ser høy nok ut</td>\n        </tr>\n        <tr style="border-bottom: 1px solid var(--color-border);">\n            <td style="padding: 1rem 0.5rem; font-weight: 600;">Tillatt hengervekt med brems</td>\n            <td style="padding: 1rem 0.5rem;">Maks tilhenger bilen kan trekke når tilhengeren har brems</td>\n            <td style="padding: 1rem 0.5rem;">Må sjekkes mot førerkortklasse</td>\n        </tr>\n        <tr style="border-bottom: 1px solid var(--color-border);">\n            <td style="padding: 1rem 0.5rem; font-weight: 600;">Tillatt hengervekt uten brems</td>\n            <td style="padding: 1rem 0.5rem;">Maks tilhenger bilen kan trekke uten tilhengerbrems</td>\n            <td style="padding: 1rem 0.5rem;">Er ofte mye lavere</td>\n        </tr>\n        <tr style="border-bottom: 1px solid var(--color-border);">\n            <td style="padding: 1rem 0.5rem; font-weight: 600;">Tillatt taklast</td>\n            <td style="padding: 1rem 0.5rem;">Maks vekt på taket, inkludert takstativ og takboks</td>\n            <td style="padding: 1rem 0.5rem;">Takboksen veier også noe</td>\n        </tr>\n    </tbody>\n</table>\n</div>`
            },
            {
                title: 'De fire viktigste vektbegrepene',
                type: 'text',
                content: '### Egenvekt\n\nEgenvekt er hva bilen veier når den er tom for passasjerer og bagasje. I vognkortet er føreren normalt inkludert med 75 kg. Det betyr at du ikke skal trekke fra føreren en gang til når du regner nyttelast.\n\n### Tillatt totalvekt\n\nTillatt totalvekt er den maksimale vekten bilen er godkjent for. Dette er grensen bilen aldri lovlig kan overstige.\n\nEksempel: Hvis tillatt totalvekt er 2000 kg, kan bilen aldri veie mer enn 2000 kg med passasjerer, bagasje, takboks og last.\n\n### Aktuell totalvekt\n\nAktuell totalvekt er det bilen faktisk veier akkurat nå. Den endrer seg etter hvor mange passasjerer du har, hvor mye bagasje du har lastet, og om du har utstyr på taket.\n\n### Nyttelast\n\nNyttelast er hvor mye du kan laste i bilen. Det inkluderer passasjerer og bagasje, og ofte også ekstrautstyr som takboks og last på taket.\n\nFormelen er:\n\n**Tillatt totalvekt - egenvekt = nyttelast**'
            },
            {
                title: 'Slik regner du ut nyttelast',
                type: 'example',
                content: 'Det klassiske regnestykket på teoriprøven er å finne ut hvor mange kilo bagasje du kan ha med når du allerede har passasjerer i bilen.\n\nEksempel:\n\n- Tillatt totalvekt: 2000 kg\n- Egenvekt med fører: 1500 kg\n- Nyttelast: 2000 - 1500 = 500 kg\n\nDu skal ha med 3 passasjerer som veier 80 kg hver:\n\n- Passasjerer: 3 × 80 kg = 240 kg\n- Rest til bagasje: 500 - 240 = 260 kg\n\nDu kan altså laste 260 kg bagasje. Føreren er allerede inkludert i egenvekten.'
            },
            {
                title: 'Interaktiv kalkulator for tilhengervekt',
                type: 'calculator',
                content: 'Bruk kalkulatoren under for å se om du lovlig kan trekke tilhengeren med vanlig klasse B, eller om du trenger B96 eller BE. Test med ulike vekter for å se hvordan 3500 kg-regelen fungerer i praksis.'
            },
            {
                title: 'Slik leser du tilhengervekt i vognkortet',
                type: 'text',
                content: 'Når du skal finne ut hvilken tilhenger bilen kan trekke, må du se i punkt 8 i vognkortet: **Vekter**. Her finner du de viktigste tallene for bil, last og tilhenger.\n\nI eksempelet under ser du blant annet:\n\n- **Tillatt totalvekt:** 1985 kg\n- **Egenvekt med fører:** 1400 kg\n- **Tillatt nyttelast inkl. passasjerer:** 585 kg\n- **Tillatt vogntogvekt:** 3385 kg\n- **Tillatt hengervekt med brems:** 1400 kg\n- **Tillatt hengervekt uten brems:** 650 kg\n- **Tillatt koblingslast:** 75 kg\n- **Tillatt taklast:** 75 kg\n\n![Vognkort vekter – tillatt totalvekt, nyttelast og tilhengervekt med brems og uten brems](/Tilhenger%20vekter.png)\n*I vognkortet finner du bilens tillatte totalvekt, nyttelast, vogntogvekt og hvor tung tilhenger bilen kan trekke med og uten brems.*\n\nDet er spesielt to tall mange blander:\n\n**Tillatt hengervekt med brems** betyr hvor tung tilhenger bilen teknisk kan trekke når tilhengeren har egne bremser.\n\n**Tillatt hengervekt uten brems** betyr hvor tung tilhenger bilen kan trekke når tilhengeren ikke har egne bremser. Dette tallet er ofte mye lavere.\n\nHusk at du må sjekke tre ting samtidig:\n\n1. Hva bilen har lov til å trekke ifølge vognkortet\n2. Hva tilhengeren er registrert for\n3. Hva førerkortklassen din gir deg lov til å kjøre\n\nEn vanlig teorifelle er å bare se på førerkortregelen for klasse B og glemme bilens tekniske begrensning. Selv om førerkortet ditt tillater en bestemt kombinasjon, kan bilen ha en lavere grense i vognkortet.\n\nLes også vår guide om [regler for tilhenger](/laeringsressurser/tilhenger) hvis du vil forstå klasse B, B96 og BE bedre.'
            },
            {
                title: 'Eksempel: Kan bilen trekke denne tilhengeren?',
                type: 'example',
                content: 'Bilen har tillatt hengervekt med brems på 1400 kg. Tilhengeren har tillatt totalvekt på 1300 kg.\n\nDa er tilhengeren innenfor bilens tekniske grense.\n\nMen du må fortsatt sjekke førerkortregelen. Med klasse B kan bilens og tilhengerens tillatte totalvekt som hovedregel være maks 3500 kg samlet, med unntak for lett tilhenger på maks 750 kg.\n\nDerfor må du alltid sjekke både:\n\n- vognkortet til bilen\n- vognkortet til tilhengeren\n- førerkortklassen din'
            },
            {
                title: 'Hva betyr tillatt vogntogvekt?',
                type: 'text',
                content: 'Tillatt vogntogvekt er maksimal samlet vekt for bil og tilhenger. Selv om bilen har lov til å trekke en bestemt hengervekt, må samlet vekt for bil og tilhenger ikke overstige tillatt vogntogvekt i vognkortet.\n\nEksempel:\n\n- Bilens aktuelle totalvekt: 1900 kg\n- Tilhengerens aktuelle totalvekt: 1300 kg\n- Samlet vogntogvekt: 3200 kg\n\nHvis vognkortet sier at tillatt vogntogvekt er 3385 kg, er dette innenfor grensen.'
            },
            {
                title: 'Taklast og takboks',
                type: 'info',
                content: 'Maks tillatt taklast viser hvor mye du kan ha på taket. Dette inkluderer både takstativ, takboks og innholdet i takboksen.\n\nEksempel:\n\n- Tillatt taklast: 75 kg\n- Takstativ og takboks veier: 25 kg\n- Maks bagasje i takboksen: 75 - 25 = 50 kg\n\nEn vanlig teorifelle er å glemme at selve takboksen også veier noe.'
            },
            {
                title: 'Overlast gjør bilen farligere',
                type: 'warning',
                content: 'Hvis bilen er for tungt lastet, blir den vanskeligere å styre og stoppe. Overlast kan gi:\n\n- lengre bremselengde\n- dårligere veigrep\n- økt slitasje\n- høyere risiko ved unnamanøver\n- gebyr eller kjøreforbud ved kontroll\n\nLes også om [bremselengde og stopplengde](/laeringsressurser/bremselengde), siden tung bil trenger lengre avstand for å stoppe trygt.'
            },
            {
                title: 'Fartsgrenser med tilhenger',
                type: 'text',
                content: 'Når du trekker tilhenger, må du også kunne reglene for fart. Fartsgrensen avhenger blant annet av tilhengeren, vekt og teknisk godkjenning.\n\nLes mer om [fartsgrenser med tilhenger](/laeringsressurser/fartsgrenser).'
            },
            {
                title: 'De vanligste fellene på teoriprøven',
                type: 'warning',
                content: '### 1. Glemme at føreren er inkludert\n\nFøreren er normalt inkludert i egenvekten med 75 kg. Når du regner nyttelast, skal du derfor bare trekke fra passasjerer og bagasje.\n\n### 2. Forveksle tillatt og aktuell vekt\n\nTillatt vekt er maksgrensen i vognkortet. Aktuell vekt er det bilen faktisk veier akkurat nå.\n\n### 3. Bare sjekke førerkortregelen for tilhenger\n\nDu må også sjekke bilens tillatte hengervekt og tillatt vogntogvekt i vognkortet.\n\n### 4. Glemme tilhenger uten brems\n\nTillatt hengervekt uten brems er ofte mye lavere enn hengervekt med brems.\n\n### 5. Glemme takboksens egenvekt\n\nHvis taklasten er 75 kg og takboksen veier 25 kg, har du bare 50 kg igjen til bagasje i takboksen.'
            }
        ],
        faq: [
            {
                question: 'Må jeg alltid ha vognkortet i bilen?',
                answer: 'Ja, del 1 av vognkortet skal ligge i bilen under kjøring. Del 2 er eierbevis og bør oppbevares trygt hjemme.'
            },
            {
                question: 'Hvor finner jeg bilens vekter?',
                answer: 'Du finner vektopplysningene i vognkortet, vanligvis under punkt 8: Vekter.'
            },
            {
                question: 'Hvor finner jeg tillatt hengervekt i vognkortet?',
                answer: 'Du finner tillatt hengervekt i punkt 8 "Vekter". Der står det vanligvis tillatt hengervekt med brems og uten brems.'
            },
            {
                question: 'Hva betyr tillatt hengervekt med brems?',
                answer: 'Det er den høyeste vekten bilen teknisk kan trekke når tilhengeren har egne bremser.'
            },
            {
                question: 'Hva betyr tillatt hengervekt uten brems?',
                answer: 'Det er den høyeste vekten bilen teknisk kan trekke når tilhengeren ikke har egne bremser. Denne grensen er ofte lavere.'
            },
            {
                question: 'Hva betyr tillatt vogntogvekt?',
                answer: 'Tillatt vogntogvekt er maksimal samlet vekt for bil og tilhenger.'
            },
            {
                question: 'Hva er forskjellen på egenvekt og tillatt totalvekt?',
                answer: 'Egenvekt er hva bilen veier uten last og passasjerer, men med føreren inkludert med 75 kg. Tillatt totalvekt er den maksimale godkjente vekten bilen kan ha med fører, passasjerer og last.'
            },
            {
                question: 'Hva skjer hvis jeg kjører med overlast?',
                answer: 'Bilen kan få dårligere kjøreegenskaper og lengre bremselengde. Ved kontroll kan du få gebyr, og du kan bli pålagt å laste av før du kjører videre.'
            }
        ],
        miniQuiz: [
            {
                question: 'Hva betyr egenvekt med fører?',
                options: [
                    'Bilens vekt uten drivstoff',
                    'Bilens vekt inkludert fører, men uten passasjerer og bagasje',
                    'Bilens maksimale lovlige vekt',
                    'Vekten av bilen og tilhengeren samlet'
                ],
                correct: 'Bilens vekt inkludert fører, men uten passasjerer og bagasje',
                explanation: 'Egenvekt med fører inkluderer føreren, normalt beregnet til 75 kg.'
            },
            {
                question: 'Hvordan regner du ut nyttelast?',
                options: [
                    'Egenvekt + tillatt totalvekt',
                    'Tillatt totalvekt - egenvekt',
                    'Tillatt vogntogvekt - egenvekt',
                    'Tillatt hengervekt - aktuell vekt'
                ],
                correct: 'Tillatt totalvekt - egenvekt',
                explanation: 'Nyttelast er hvor mye bilen kan laste, og regnes ut ved å trekke egenvekt fra tillatt totalvekt.'
            },
            {
                question: 'Bilen har tillatt totalvekt 2000 kg og egenvekt 1500 kg. Hvor stor er nyttelasten?',
                options: [
                    '300 kg',
                    '400 kg',
                    '500 kg',
                    '3500 kg'
                ],
                correct: '500 kg',
                explanation: '2000 - 1500 = 500 kg.'
            },
            {
                question: 'Hvor finner du tillatt hengervekt med brems?',
                options: [
                    'I punktet for farge',
                    'I punktet for antall sitteplasser',
                    'Under vekter i vognkortet',
                    'Bare på tilhengerens skilt'
                ],
                correct: 'Under vekter i vognkortet',
                explanation: 'Tillatt hengervekt med og uten brems står under vektopplysningene i vognkortet.'
            },
            {
                question: 'Hva må du sjekke før du trekker tilhenger?',
                options: [
                    'Bare bilens hestekrefter',
                    'Bare om tilhengeren har lys',
                    'Bilens vognkort, tilhengerens vognkort og førerkortklassen din',
                    'Bare om du har klasse B'
                ],
                correct: 'Bilens vognkort, tilhengerens vognkort og førerkortklassen din',
                explanation: 'Du må sjekke både tekniske grenser og hva førerkortet ditt tillater.'
            },
            {
                question: 'Hva betyr tillatt vogntogvekt?',
                options: [
                    'Maks samlet vekt for bil og tilhenger',
                    'Maks vekt på taket',
                    'Maks vekt av føreren',
                    'Maks vekt uten passasjerer'
                ],
                correct: 'Maks samlet vekt for bil og tilhenger',
                explanation: 'Vogntogvekt er samlet vekt for bil og tilhenger.'
            },
            {
                question: 'Hvorfor kan overlast være farlig?',
                options: [
                    'Bilen får bedre veigrep',
                    'Bremselengden kan øke og kjøreegenskapene bli dårligere',
                    'Motoren stopper alltid',
                    'Det påvirker bare drivstofforbruket'
                ],
                correct: 'Bremselengden kan øke og kjøreegenskapene bli dårligere',
                explanation: 'Overlast kan gi lengre bremselengde, dårligere styring og farligere kjøreegenskaper.'
            }
        ]
    },

    {
        id: 'temaliste-teoriproven-klasse-b',
        title: 'Temaliste teoriprøven klasse B – dette må du kunne',
        icon: '📋',
        shortDescription: 'Finn ut hva du kan bli spurt om på teoriprøven for klasse B. Praktisk temaoversikt med guider og forklaringer om vikeplikt, skilt, bremselengde, lys, kjøretøy og mer.',
        color: 'var(--apple-blue)',
        seoTitle: 'Temaliste teoriprøven klasse B – dette må du kunne | Teori-test.no',
        seoDescription: 'Se hva du kan få på teoriprøven for klasse B. Praktisk temaoversikt med guider og forklaringer om vikeplikt, trafikkskilt, veimerking, bilens lys og mer.',
        sections: [
            {
                title: 'Kort forklart',
                type: 'info',
                content: 'Temalisten viser hvilke fagområder teoriprøven for klasse B bygger på. Den er ikke en fasit på hvilke spørsmål du får, men en oversikt over hva du bør forstå før prøven.'
            },
            {
                title: 'Slik bruker du temalisten',
                type: 'tip',
                content: '1. Finn temaet du er usikker på.\n2. Les relevant guide på Teori-test.no.\n3. Test deg med øvingsprøve eller tematest.\n4. Bruk fokusmodus på spørsmål du svarer feil på.'
            },
            {
                title: '7 hovedtemaer – temakart for teoriprøven klasse B',
                type: 'table',
                content: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:1.25rem">
<!-- Tema A -->
<div style="border:1px solid var(--color-border);border-radius:14px;padding:1.5rem;background:var(--color-bg);display:flex;flex-direction:column;height:100%">
  <div style="display:grid;grid-template-columns:28px 1fr auto;gap:0.75rem;align-items:start;margin-bottom:1.25rem">
    <div style="background:var(--color-primary);color:#fff;width:28px;height:26px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:0.9rem;font-weight:800;margin-top:2px">A</div>
    <strong style="font-size:1.05rem;color:var(--color-text);line-height:1.3">Fart, plassering og samhandling</strong>
    <span style="background:#22c55e;color:#fff;font-size:0.6rem;font-weight:700;padding:3px 10px;border-radius:99px;text-transform:uppercase;margin-top:4px">Godt</span>
  </div>
  <ul style="margin:0 0 1.5rem 0;padding-left:1.3rem;color:var(--color-text-light);font-size:0.875rem;line-height:1.7;flex-grow:1">
    <li>Avstand til forankjørende</li><li>Feltvalg og kollektivfelt</li><li>Rundkjøring og envegskjøring</li><li>Forbikjøring og fletting</li><li>Planovergang og sporvogn</li><li>Stans og parkering</li>
  </ul>
  <div style="font-size:0.82rem;color:var(--color-text-light);border-top:1px solid var(--color-border);padding-top:1rem">
    <span style="opacity:0.7;font-weight:600">Les:</span> <a href="/laeringsressurser/fartsgrenser" style="color:var(--color-primary);text-decoration:none">Fartsgrenser</a> · <a href="/laeringsressurser/rundkjoring" style="color:var(--color-primary);text-decoration:none">Rundkjøring</a> · <a href="/laeringsressurser/forbikjoring" style="color:var(--color-primary);text-decoration:none">Forbikjøring</a> · <a href="/laeringsressurser/stans-og-parkering" style="color:var(--color-primary);text-decoration:none">Stans og parkering</a>
  </div>
</div>

<!-- Tema B -->
<div style="border:1px solid var(--color-border);border-radius:14px;padding:1.5rem;background:var(--color-bg);display:flex;flex-direction:column;height:100%">
  <div style="display:grid;grid-template-columns:28px 1fr auto;gap:0.75rem;align-items:start;margin-bottom:1.25rem">
    <div style="background:var(--color-primary);color:#fff;width:28px;height:26px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:0.9rem;font-weight:800;margin-top:2px">B</div>
    <strong style="font-size:1.05rem;color:var(--color-text);line-height:1.3">Sikt, føre og lys</strong>
    <span style="background:#22c55e;color:#fff;font-size:0.6rem;font-weight:700;padding:3px 10px;border-radius:99px;text-transform:uppercase;margin-top:4px">Godt</span>
  </div>
  <ul style="margin:0 0 1.5rem 0;padding-left:1.3rem;color:var(--color-text-light);font-size:0.875rem;line-height:1.7;flex-grow:1">
    <li>Sikt, vær og mørke</li><li>Bruk av lys (nærlys, fjernlys, tåkelys)</li><li>Bremselengde og stopplengde</li><li>Reaksjonslengde og veggrep</li>
  </ul>
  <div style="font-size:0.82rem;color:var(--color-text-light);border-top:1px solid var(--color-border);padding-top:1rem">
    <span style="opacity:0.7;font-weight:600">Les:</span> <a href="/laeringsressurser/lysbruk-morkekjoring" style="color:var(--color-primary);text-decoration:none">Mørkekjøring</a> · <a href="/laeringsressurser/bilens-lys" style="color:var(--color-primary);text-decoration:none">Bilens lys</a> · <a href="/laeringsressurser/bremselengde" style="color:var(--color-primary);text-decoration:none">Bremselengde</a> · <a href="/laeringsressurser/reaksjonstid" style="color:var(--color-primary);text-decoration:none">Reaksjonstid</a> · <a href="/laeringsressurser/glatt-fore" style="color:var(--color-primary);text-decoration:none">Glatt føre</a>
  </div>
</div>

<!-- Tema C -->
<div style="border:1px solid var(--color-border);border-radius:14px;padding:1.5rem;background:var(--color-bg);display:flex;flex-direction:column;height:100%">
  <div style="display:grid;grid-template-columns:28px 1fr auto;gap:0.75rem;align-items:start;margin-bottom:1.25rem">
    <div style="background:var(--color-primary);color:#fff;width:28px;height:26px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:0.9rem;font-weight:800;margin-top:2px">C</div>
    <strong style="font-size:1.05rem;color:var(--color-text);line-height:1.3">Trafikkskilt, veimerking og vikeplikt</strong>
    <span style="background:#22c55e;color:#fff;font-size:0.6rem;font-weight:700;padding:3px 10px;border-radius:99px;text-transform:uppercase;margin-top:4px">Godt</span>
  </div>
  <ul style="margin:0 0 1.5rem 0;padding-left:1.3rem;color:var(--color-text-light);font-size:0.875rem;line-height:1.7;flex-grow:1">
    <li>Trafikkskilt og skiltgrupper</li><li>Veimerking</li><li>Vikeplikt og høyreregel</li><li>Lysregulering og politimannens tegn</li><li>Stoppeplikt</li>
  </ul>
  <div style="font-size:0.82rem;color:var(--color-text-light);border-top:1px solid var(--color-border);padding-top:1rem">
    <span style="opacity:0.7;font-weight:600">Les:</span> <a href="/trafikkskilt" style="color:var(--color-primary);text-decoration:none">Trafikkskilt</a> · <a href="/laeringsressurser/veimerking" style="color:var(--color-primary);text-decoration:none">Veimerking</a> · <a href="/laeringsressurser/vikeplikt" style="color:var(--color-primary);text-decoration:none">Vikeplikt</a> · <a href="/laeringsressurser/myndighetspyramiden" style="color:var(--color-primary);text-decoration:none">Myndighetspyramiden</a> · <a href="/laeringsressurser/trafikklys-signaler" style="color:var(--color-primary);text-decoration:none">Trafikklys og signaler</a>
  </div>
</div>

<!-- Tema D -->
<div style="border:1px solid var(--color-border);border-radius:14px;padding:1.5rem;background:var(--color-bg);display:flex;flex-direction:column;height:100%">
  <div style="display:grid;grid-template-columns:28px 1fr auto;gap:0.75rem;align-items:start;margin-bottom:1.25rem">
    <div style="background:var(--color-primary);color:#fff;width:28px;height:26px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:0.9rem;font-weight:800;margin-top:2px">D</div>
    <strong style="font-size:1.05rem;color:var(--color-text);line-height:1.3">Fører, ansvar og risiko</strong>
    <span style="background:#22c55e;color:#fff;font-size:0.6rem;font-weight:700;padding:3px 10px;border-radius:99px;text-transform:uppercase;margin-top:4px">Godt</span>
  </div>
  <ul style="margin:0 0 1.5rem 0;padding-left:1.3rem;color:var(--color-text-light);font-size:0.875rem;line-height:1.7;flex-grow:1">
    <li>Reaksjonstid og sanser</li><li>Tretthet og uoppmerksomhet</li><li>Rus, promille og pliktmessig avhold</li><li>Helsekrav, førerrett og øvelseskjøring</li><li>Miljøvennlig kjøring</li>
  </ul>
  <div style="font-size:0.82rem;color:var(--color-text-light);border-top:1px solid var(--color-border);padding-top:1rem">
    <span style="opacity:0.7;font-weight:600">Les:</span> <a href="/laeringsressurser/promille" style="color:var(--color-primary);text-decoration:none">Promille og rus</a> · <a href="/laeringsressurser/reaksjonstid" style="color:var(--color-primary);text-decoration:none">Reaksjonstid</a> · <a href="/laeringsressurser/ovingskjoring" style="color:var(--color-primary);text-decoration:none">Øvelseskjøring</a> · <a href="/laeringsressurser/miljo" style="color:var(--color-primary);text-decoration:none">Miljøvennlig kjøring</a>
  </div>
</div>

<!-- Tema E -->
<div style="border:1px solid var(--color-border);border-radius:14px;padding:1.5rem;background:var(--color-bg);display:flex;flex-direction:column;height:100%">
  <div style="display:grid;grid-template-columns:28px 1fr auto;gap:0.75rem;align-items:start;margin-bottom:1.25rem">
    <div style="background:var(--color-primary);color:#fff;width:28px;height:26px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:0.9rem;font-weight:800;margin-top:2px">E</div>
    <strong style="font-size:1.05rem;color:var(--color-text);line-height:1.3">Kjøretøyet</strong>
    <span style="background:#f59e0b;color:#fff;font-size:0.6rem;font-weight:700;padding:3px 10px;border-radius:99px;text-transform:uppercase;margin-top:4px">Delvis</span>
  </div>
  <ul style="margin:0 0 1.5rem 0;padding-left:1.3rem;color:var(--color-text-light);font-size:0.875rem;line-height:1.7;flex-grow:1">
    <li>Dekk, bremser og styring</li><li>Sikkerhetskontroll og varsellamper</li><li>Vognkort, tilhenger og vekter</li><li>Drivstoff, energikilder og elbil</li><li>Førerstøttesystemer og automatlappen</li>
  </ul>
  <div style="font-size:0.82rem;color:var(--color-text-light);border-top:1px solid var(--color-border);padding-top:1rem">
    <span style="opacity:0.7;font-weight:600">Les:</span> <a href="/laeringsressurser/dekk-bremser-styring" style="color:var(--color-primary);text-decoration:none">Dekk, bremser og styring</a> · <a href="/laeringsressurser/sikkerhetskontroll" style="color:var(--color-primary);text-decoration:none">Sikkerhetskontroll</a> · <a href="/laeringsressurser/tilhenger" style="color:var(--color-primary);text-decoration:none">Tilhenger</a> · <a href="/laeringsressurser/vognkort-vekter" style="color:var(--color-primary);text-decoration:none">Vognkort og vekter</a> · <a href="/laeringsressurser/automatlappen" style="color:var(--color-primary);text-decoration:none">Automatlappen</a> · <a href="/laeringsressurser/bilens-lys" style="color:var(--color-primary);text-decoration:none">Bilens lys</a>
  </div>
</div>

<!-- Tema F -->
<div style="border:1px solid var(--color-border);border-radius:14px;padding:1.5rem;background:var(--color-bg);display:flex;flex-direction:column;height:100%">
  <div style="display:grid;grid-template-columns:28px 1fr auto;gap:0.75rem;align-items:start;margin-bottom:1.25rem">
    <div style="background:var(--color-primary);color:#fff;width:28px;height:26px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:0.9rem;font-weight:800;margin-top:2px">F</div>
    <strong style="font-size:1.05rem;color:var(--color-text);line-height:1.3">Lover, regler og myndighet</strong>
    <span style="background:#f59e0b;color:#fff;font-size:0.6rem;font-weight:700;padding:3px 10px;border-radius:99px;text-transform:uppercase;margin-top:4px">Delvis</span>
  </div>
  <ul style="margin:0 0 1.5rem 0;padding-left:1.3rem;color:var(--color-text-light);font-size:0.875rem;line-height:1.7;flex-grow:1">
    <li>Vegtrafikkloven og trafikkregler</li><li>Offentlige reaksjoner, bøter og prikker</li><li>Registrering, forsikring og omregistrering</li><li>Myndighetspyramiden</li>
  </ul>
  <div style="font-size:0.82rem;color:var(--color-text-light);border-top:1px solid var(--color-border);padding-top:1rem">
    <span style="opacity:0.7;font-weight:600">Les:</span> <a href="/laeringsressurser/myndighetspyramiden" style="color:var(--color-primary);text-decoration:none">Myndighetspyramiden</a> · <a href="/laeringsressurser/vognkort-vekter" style="color:var(--color-primary);text-decoration:none">Vognkort og vekter</a> · <a href="/laeringsressurser/promille" style="color:var(--color-primary);text-decoration:none">Promille</a>
  </div>
</div>

<!-- Tema G -->
<div style="border:1px solid var(--color-border);border-radius:14px;padding:1.5rem;background:var(--color-bg);display:flex;flex-direction:column;height:100%">
  <div style="display:grid;grid-template-columns:28px 1fr auto;gap:0.75rem;align-items:start;margin-bottom:1.25rem">
    <div style="background:var(--color-primary);color:#fff;width:28px;height:26px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:0.9rem;font-weight:800;margin-top:2px">G</div>
    <strong style="font-size:1.05rem;color:var(--color-text);line-height:1.3">Uhell, førstehjelp og sikkerhet</strong>
    <span style="background:#22c55e;color:#fff;font-size:0.6rem;font-weight:700;padding:3px 10px;border-radius:99px;text-transform:uppercase;margin-top:4px">Godt</span>
  </div>
  <ul style="margin:0 0 1.5rem 0;padding-left:1.3rem;color:var(--color-text-light);font-size:0.875rem;line-height:1.7;flex-grow:1">
    <li>Førstehjelp og plikter ved uhell</li><li>Sikkerhetsutstyr og varseltrekant</li><li>Tunnelsikkerhet og nødtelefon</li><li>Snø på tak og isfrie ruter</li>
  </ul>
  <div style="font-size:0.82rem;color:var(--color-text-light);border-top:1px solid var(--color-border);padding-top:1rem">
    <span style="opacity:0.7;font-weight:600">Les:</span> <a href="/laeringsressurser/trafikkuhell-forstehjelp" style="color:var(--color-primary);text-decoration:none">Trafikkuhell og førstehjelp</a> · <a href="/laeringsressurser/sikkerhetsutstyr" style="color:var(--color-primary);text-decoration:none">Sikkerhetsutstyr</a> · <a href="/laeringsressurser/glatt-fore" style="color:var(--color-primary);text-decoration:none">Glatt føre</a> · <a href="/laeringsressurser/lysbruk-morkekjoring" style="color:var(--color-primary);text-decoration:none">Mørkekjøring</a>
  </div>
</div>
</div>`
            },
            {
                title: 'Forberedelser og veien videre',
                type: 'info',
                content: 'Disse sidene handler ikke bare om pensum, men om hvordan du forbereder deg, unngår vanlige feil og kommer videre etter teoriprøven.\n\n- [Vanlige feil på teoriprøven](/laeringsressurser/vanlige-feil-teoriproven)\n- [Tips til teoriprøven](/laeringsressurser/tips-eksamen)\n- [Strøket på teoriprøven?](/laeringsressurser/stroket-teoriproven)\n- [Oppkjøring](/laeringsressurser/oppkjoring)'
            },
            {
                title: 'Dekkingsoversikt – Statens vegvesen temaliste klasse B',
                type: 'table',
                content: `<div style="margin-bottom:1.5rem;padding:1rem;border-radius:10px;background:rgba(0,0,0,0.02);border:1px solid var(--color-border);color:var(--color-text-light);font-size:0.875rem;line-height:1.6">Vi bygger ut siden fortløpende. Nye artikler, guider og oppgaver legges til etter hvert for å dekke temalisten på en god måte. Du finner også mer informasjon på <a href="https://www.vegvesen.no/forerkort/ta-forerkort/teoriprove/" target="_blank" rel="noopener noreferrer" style="color:var(--color-primary);text-decoration:none">Statens vegvesen sine sider om teoriprøven</a>.</div><table style="width:100%;border-collapse:collapse;font-size:0.875rem">
<thead><tr style="border-bottom:2px solid var(--color-border)">
<th style="padding:8px 10px;text-align:left;color:var(--color-text-light);font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em">Tema</th>
<th style="padding:8px 10px;text-align:left;color:var(--color-text-light);font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em">Status</th>
<th style="padding:8px 10px;text-align:left;color:var(--color-text-light);font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em">Sider på Teori-test.no</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:8px 10px;color:var(--color-text)">A – Fart og samhandling</td><td style="padding:8px 10px"><span style="background:#22c55e;color:#fff;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:99px">Godt</span></td><td style="padding:8px 10px;color:var(--color-text-light)">Fartsgrenser, Rundkjøring, Forbikjøring, Stans og parkering</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:8px 10px;color:var(--color-text)">B – Sikt, føre og lys</td><td style="padding:8px 10px"><span style="background:#22c55e;color:#fff;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:99px">Godt</span></td><td style="padding:8px 10px;color:var(--color-text-light)">Bremselengde, Reaksjonstid, Mørkekjøring, Bilens lys, Glatt føre</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:8px 10px;color:var(--color-text)">C – Trafikkskilt og vikeplikt</td><td style="padding:8px 10px"><span style="background:#22c55e;color:#fff;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:99px">Godt</span></td><td style="padding:8px 10px;color:var(--color-text-light)">Vikeplikt, Trafikkskilt, Veimerking, Myndighetspyramiden, Trafikklys og signaler</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:8px 10px;color:var(--color-text)">D – Fører og risiko</td><td style="padding:8px 10px"><span style="background:#22c55e;color:#fff;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:99px">Godt</span></td><td style="padding:8px 10px;color:var(--color-text-light)">Promille og rus, Reaksjonstid, Øvelseskjøring, Miljøvennlig kjøring</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:8px 10px;color:var(--color-text)">E – Kjøretøyet</td><td style="padding:8px 10px"><span style="background:#f59e0b;color:#fff;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:99px">Delvis</span></td><td style="padding:8px 10px;color:var(--color-text-light)">Dekk, bremser og styring, Sikkerhetskontroll, Tilhenger, Vognkort og vekter, Automatlappen, Bilens lys</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:8px 10px;color:var(--color-text)">F – Lover og myndighet</td><td style="padding:8px 10px"><span style="background:#f59e0b;color:#fff;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:99px">Delvis</span></td><td style="padding:8px 10px;color:var(--color-text-light)">Myndighetspyramiden, Vognkort og vekter, Promille, Trafikkuhell og førstehjelp</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:8px 10px;color:var(--color-text)">G – Uhell og sikkerhet</td><td style="padding:8px 10px"><span style="background:#22c55e;color:#fff;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:99px">Godt</span></td><td style="padding:8px 10px;color:var(--color-text-light)">Trafikkuhell og førstehjelp, Sikkerhetsutstyr, Glatt føre, Mørkekjøring</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:8px 10px;color:var(--color-text)">Forberedelser og veien videre</td><td style="padding:8px 10px"><span style="background:#22c55e;color:#fff;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:99px">Godt</span></td><td style="padding:8px 10px;color:var(--color-text-light)">Vanlige feil, Tips til teoriprøven, Strøket på teoriprøven?, Oppkjøring</td></tr>
</tbody></table>`
            }
        ],
        faq: [
            {
                question: 'Hva kommer på teoriprøven klasse B?',
                answer: 'Teoriprøven klasse B dekker 7 hovedtemaer: fart og samhandling, sikt og lys, skilt og vikeplikt, føreransvar og risiko, kjøretøyet, lover og regler, samt ulykker og sikkerhet. Du får 45 spørsmål og kan ha maks 7 feil for å bestå.'
            },
            {
                question: 'Er temalisten det samme som pensum?',
                answer: 'Ja, i praksis. Læreplanen for klasse B (Håndbok V851) fra Statens vegvesen beskriver hvilke emner du kan bli testet på. Det er ikke en fasit på hvilke spørsmål du får, men en oversikt over hva du må forstå for å bestå.'
            },
            {
                question: 'Må jeg kunne alle temaene?',
                answer: 'Ja. Teoriprøven trekker tilfeldige oppgaver fra hele læreplanen. Det er ikke mulig å velge bort enkelte områder, og du bør ha god kontroll på alle hovedtemaene for å minimere risikoen for å stryke.'
            },
            {
                question: 'Hvordan bør jeg bruke temalisten når jeg øver?',
                answer: 'Bruk listen som en personlig sjekkliste. Finn temaene du er mest usikker på, les guidene våre på Teori-test.no, og test deretter kunnskapene dine med tematilpassede quizer. Avslutt med å ta fulle øvingsprøver under tidsbegrensning.'
            },
            {
                question: 'Hvor finner jeg Statens vegvesen sin temaliste?',
                answer: 'Statens vegvesen publiserer den offisielle læreplanen for klasse B på sine nettsider. Vår temaliste og våre læringsressurser er systematisk bygget rundt disse kravene for å gi deg best mulig forberedelse.'
            }
        ]
    },{
        id: 'dekk-bremser-styring',
        title: 'Dekk, bremser og styring: dette må du kunne til teoriprøven',
        icon: '',
        shortDescription: 'Lær hva du må kunne om dekk, lufttrykk, bremser, ABS, servostyring og veigrep til teoriprøven. Med regler, eksempler og typiske teorifeller.',
        color: 'var(--apple-orange)',
        seoTitle: 'Dekk, bremser og styring | Teoriprøven klasse B',
        seoDescription: 'Lær hva du må kunne om dekk, lufttrykk, bremser, ABS, servostyring og veigrep til teoriprøven. Med regler, eksempler og typiske teorifeller.',
        sections: [
            {
                title: 'Kort forklart',
                type: 'summary',
                content: 'Dekkene er bilens eneste kontakt med veien, og sammen med bremser og styring er de helt avgjørende for sikkerheten. For lav mønsterdybde, feil lufttrykk eller feil dekktype gir dårligere grep og økt skrensfare. Bremsene må virke jevnt og effektivt (med fungerende ABS), og styringen må reagere presist uten dødgang.\n\nHusk at du som fører alltid har ansvaret for at kjøretøyet er i forsvarlig og forskriftsmessig stand.'
            },
            {
                title: 'Dekk: veigrepet starter her',
                type: 'text',
                content: 'Dekkene er det eneste som faktisk berører veien. Derfor påvirker de både bremselengde, styring, stabilitet, drivstofforbruk og risikoen for skrens.\n\nDu må særlig kunne dette til teoriprøven:'
            },
            {
                title: 'Krav til dekk og veigrep',
                type: 'table',
                content: '<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Tema</th><th style="padding: 12px 8px;">Hva du må kunne</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Mønsterdybde sommer</b></td><td style="padding: 12px 8px;">Minimum 1,6 mm på sommerføre.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Mønsterdybde vinter</b></td><td style="padding: 12px 8px;">Minimum 3 mm på vinterføre.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Veigrep</b></td><td style="padding: 12px 8px;">Føreren er ansvarlig for at bilen har tilstrekkelig veigrep hele året.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Sommerdekk på vinterføre</b></td><td style="padding: 12px 8px;">Ikke lov hvis dekkene ikke gir tilstrekkelig veigrep på is eller snø.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Piggdekk</b></td><td style="padding: 12px 8px;">Bruker du piggdekk, skal bilen ha piggdekk på alle hjul.</td></tr><tr><td style="padding: 12px 8px;"><b>Tilhenger</b></td><td style="padding: 12px 8px;">Tilhengerens dekk må oppfylle samme krav til mønsterdybde som bilen.</td></tr></tbody></table></div>'
            },
            {
                title: 'Viktig teorifelle om mønsterdybde',
                type: 'warning',
                content: 'Lovlig mønsterdybde betyr ikke automatisk at veigrepet er godt nok. Slitte, gamle eller feil dekk kan være farlige selv om de akkurat oppfyller minimumskravet.'
            },
            {
                title: 'Sommerdekk, vinterdekk og føre',
                type: 'text',
                content: 'Sommerdekk er laget for varmere vær og bar eller våt vei. Vinterdekk er laget for lavere temperaturer, snø og is. På vinterføre må bilen ha dekk som gir tilstrekkelig veigrep. Det kan bety vinterdekk med eller uten pigger, kjetting eller annet utstyr som gir bedre feste.\n\nFor teoriprøven er hovedpoenget dette: du skal ikke bare tenke på kalenderen. Du må også vurdere føret.'
            },
            {
                title: 'Lufttrykk: for lavt, riktig og for høyt',
                type: 'calculator',
                componentId: 'dekktrykk',
                content: 'Feil lufttrykk endrer hvordan dekket ligger mot veien. Det påvirker kontaktflaten, dekkslitasjen, stabiliteten, bremselengden og drivstofforbruket. Dra i slideren eller trykk på knappene under for å se effekten av ulikt lufttrykk:'
            },
            {
                title: 'Hvordan ser du feil på dekkene?',
                type: 'table',
                content: '<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Det du ser eller merker</th><th style="padding: 12px 8px;">Mulig årsak</th><th style="padding: 12px 8px;">Hvorfor det er farlig</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Slitasje på begge ytterkanter</td><td style="padding: 12px 8px;">For lavt lufttrykk</td><td style="padding: 12px 8px;">Dårligere stabilitet og økt varme i dekket.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Slitasje på midten</td><td style="padding: 12px 8px;">For høyt lufttrykk</td><td style="padding: 12px 8px;">Mindre kontaktflate og dårligere grep.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Slitasje bare på én side</td><td style="padding: 12px 8px;">Feil hjulstilling eller styringsproblem</td><td style="padding: 12px 8px;">Bilen kan trekke skjevt og bli mindre stabil.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Vibrasjoner i rattet</td><td style="padding: 12px 8px;">Ubalanse, skade eller feil på hjul/dekk</td><td style="padding: 12px 8px;">Kan gjøre styringen usikker.</td></tr><tr><td style="padding: 12px 8px;">Bilen trekker til siden</td><td style="padding: 12px 8px;">Feil lufttrykk, dekkfeil, bremsefeil eller hjulstilling</td><td style="padding: 12px 8px;">Kan gi dårlig kontroll og økt risiko i bremsing.</td></tr></tbody></table></div>'
            },
            {
                title: 'Bremser: slik påvirker de stopp og kontroll',
                type: 'text',
                content: 'Bremsene skal redusere farten sikkert og jevnt. Hvis bremsene er dårlige, kan bilen bruke lengre tid på å stoppe, trekke til siden eller bli vanskelig å kontrollere ved hard bremsing.\n\nDette bør du kunne:'
            },
            {
                title: 'Bremsesystemets deler og funksjoner',
                type: 'table',
                content: '<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Begrep</th><th style="padding: 12px 8px;">Kort forklaring</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Driftsbrems/fotbrems</b></td><td style="padding: 12px 8px;">Bremsen du bruker med bremsepedalen under kjøring. Skal virke på alle 4 hjul, og gi jevn og effektiv bremsing.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Parkeringsbrems</b></td><td style="padding: 12px 8px;">Mekanisk håndbrekk eller elektronisk brems som holder bilen i ro når den står parkert. Skal virke på minst 2 hjul.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Bremsekraftforsterker</b></td><td style="padding: 12px 8px;">Hjelper deg å presse bremsevæsken med økt kraft slik at du ikke må trykke ekstremt hardt på pedalen.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>ABS (Blokkeringsfrie bremser)</b></td><td style="padding: 12px 8px;">Hindrer at hjulene låser seg ved hard bremsing, slik at du kan beholde styringen.</td></tr><tr><td style="padding: 12px 8px;"><b>Tokrets bremsesystem</b></td><td style="padding: 12px 8px;">Deler systemet i to uavhengige kretser slik at bilen fortsatt har bremseeffekt dersom en slange eller krets lekker.</td></tr></tbody></table></div>'
            },
            {
                title: 'Bremsekraftforsterker',
                type: 'text',
                content: 'Bremsekraftforsterkeren hjelper deg med å få nok bremsekraft uten å måtte bruke ekstrem kraft på pedalen. En vanlig kontroll er at du pumper bremsepedalen 5-6 ganger med motoren av (til den blir hard), holder pedalen inne og starter motoren. Hvis pedalen synker litt inn når motoren starter, tyder det på at bremsekraftforsterkeren virker.\n\nHvis pedalen fortsetter å sige innover når du holder hardt trykk, kan det tyde på feil eller lekkasje i bremsesystemet. Da skal bilen ikke kjøres, men skal ikke brukes videre før feilen er kontrollert og rettet.\n\nSe også vår komplette guide til [sikkerhetskontroll av bilen](/laeringsressurser/sikkerhetskontroll).'
            },
            {
                title: 'ABS (Blokkeringsfrie bremser)',
                type: 'warning',
                content: 'ABS står for blokkeringsfrie bremser. Systemet hindrer at hjulene låser seg ved hard bremsing. Det viktigste på teoriprøven er at ABS hjelper deg med å beholde styringskontrollen.\n\nMed ABS skal du trykke bestemt på bremsepedalen og holde trykket. Du skal ikke pumpe bremsen slik man gjorde på eldre biler uten ABS.\n\n**Viktig teorifelle:** ABS opphever ikke fysikken. På glatt føre trenger bilen fortsatt lang avstand for å stoppe. Les mer om [bremselengde og stopplengde](/laeringsressurser/bremselengde).'
            },
            {
                title: 'Styring: bilen skal følge det du gjør med rattet',
                type: 'text',
                content: 'Styringen skal reagere presist når du vrir på rattet. Hvis bilen ikke følger rattet, trekker til siden, lager ulyder eller har unormal dødgang, kan det være feil på styring, hjulstilling, dekk eller servostyring.\n\nDu bør kunne disse begrepene:'
            },
            {
                title: 'Viktige styrebegreper',
                type: 'table',
                content: '<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Begrep</th><th style="padding: 12px 8px;">Hva betyr det?</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Servostyring</b></td><td style="padding: 12px 8px;">Hjelper deg å dreie rattet lettere (elektrisk eller hydraulisk). Kan sjekkes ved å vri litt på rattet når du starter motoren – rattet skal umiddelbart bli lettere å dreie.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Dødgang</b></td><td style="padding: 12px 8px;">Hvor mye du kan bevege på rattet før hjulene faktisk begynner å røre på seg. På moderne biler skal det være lite eller ingen merkbar dødgang. Stor dødgang er et faresignal.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Retningsstabilitet</b></td><td style="padding: 12px 8px;">At bilen holder kursen rett frem på flat vei uten at du må korrigere hele tiden.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Selvoppretting</b></td><td style="padding: 12px 8px;">At rattet automatisk søker tilbake mot midtstilling av seg selv etter at du har svingt og slipper opp grepet under fart.</td></tr><tr><td style="padding: 12px 8px;"><b>Hjulstilling</b></td><td style="padding: 12px 8px;">Vinkelen hjulene står i (spissing/camber). Feil hjulstilling gjør at dekkene slites skjevt (på én side) og at retningsstabiliteten blir dårligere.</td></tr></tbody></table></div>'
            },
            {
                title: 'Skjevtrekk under kjøring',
                type: 'info',
                content: 'Hvis bilen trekker til én side når du bremser, kan feilen ligge i bremsene (f.eks. ujevn bremseeffekt). Hvis den trekker til én side under vanlig kjøring rett frem, kan det skyldes feil lufttrykk i dekkene, skjev hjulstilling eller dekkfeil.'
            },
            {
                title: 'Understyring og overstyring',
                type: 'text',
                content: '![Illustrasjon av understyring og overstyring i en sving, der bilen enten fortsetter rett frem eller bakenden slipper](/understyring-overstyring.png)\n\n*Understyring betyr at bilen ikke svinger nok og vil rett frem. Overstyring betyr at bakenden slipper og bilen roterer mer enn føreren ønsker.*\n\nUnderstyring og overstyring handler om hva som skjer når bilen mister grep i en sving.'
            },
            {
                title: 'Forskjellen på understyring og overstyring',
                type: 'table',
                content: '<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Situasjon</th><th style="padding: 12px 8px;">Hva skjer?</th><th style="padding: 12px 8px;">Vanlig årsak</th><th style="padding: 12px 8px;">Riktig tanke</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Understyring</b></td><td style="padding: 12px 8px;">Forhjulene mister grep, og bilen svinger mindre enn rattutslaget skulle tilsi. Bilen fortsetter mer rett frem.</td><td style="padding: 12px 8px;">For høy fart inn i svingen, glatt vei, slitte dekk foran eller brå akselerasjon (forhjulsdrift).</td><td style="padding: 12px 8px;">Senk farten i god tid før svingen, rett opp rattet litt for å gjenvinne grep, og unngå brå styring.</td></tr><tr><td style="padding: 12px 8px;"><b>Overstyring</b></td><td style="padding: 12px 8px;">Bakhjulene mister grep, og bakenden av bilen slipper ut til siden. Bilen svinger mer enn rattutslaget og kan spinne rundt.</td><td style="padding: 12px 8px;">For høy fart, glatt føre, brå sving eller gasspådrag (bakhjulsdrift), samt feil lastfordeling.</td><td style="padding: 12px 8px;">Styr forsiktig i den retningen bakenden slipper ut (motstyring). Unngå panikkbremsing.</td></tr></tbody></table></div>'
            },
            {
                title: 'Kjørestil reduserer risikoen',
                type: 'tip',
                content: 'Det viktigste til teoriprøven er ikke å kunne avansert kjøreteknikk. Det viktigste er å forstå at riktig fart, gode dekk og rolig kjøring reduserer risikoen for at bilen mister grep. Planlegg kjøringen og kjør miljøvennlig for å holde god sikkerhetsmargin. Les mer i vår artikkel om [miljøvennlig kjøring](/laeringsressurser/miljo).'
            },
            {
                title: 'Slik henger alt sammen',
                type: 'text',
                content: 'Dekk, bremser og styring må fungere sammen. Selv gode bremser hjelper lite hvis dekkene ikke har grep. God styring hjelper lite hvis bilen har for høy fart inn i en sving. Og riktig lufttrykk kan påvirke både bremselengde, styring og stabilitet.'
            },
            {
                title: 'Sammenheng mellom feil og symptomer',
                type: 'table',
                content: '<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Problem</th><th style="padding: 12px 8px;">Påvirker dekk</th><th style="padding: 12px 8px;">Påvirker bremser</th><th style="padding: 12px 8px;">Påvirker styring</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>For lavt lufttrykk</b></td><td style="padding: 12px 8px;">Ja (slitasje ytterkanter)</td><td style="padding: 12px 8px;">Ja (lengre bremselengde)</td><td style="padding: 12px 8px;">Ja (svampete, ustabil)</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Slitte vinterdekk</b></td><td style="padding: 12px 8px;">Ja (mister grep)</td><td style="padding: 12px 8px;">Ja (betydelig lengre stopp)</td><td style="padding: 12px 8px;">Ja (redusert sidegrep)</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Feil hjulstilling</b></td><td style="padding: 12px 8px;">Ja (skjevslitasje)</td><td style="padding: 12px 8px;">Nei, men merkes ved bremsing</td><td style="padding: 12px 8px;">Ja (dårlig stabilitet, trekker)</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>ABS-feil</b></td><td style="padding: 12px 8px;">Nei</td><td style="padding: 12px 8px;">Ja (hjulene kan låse seg)</td><td style="padding: 12px 8px;">Ja (mister styring ved full brems)</td></tr><tr><td style="padding: 12px 8px;"><b>For høy fart i sving</b></td><td style="padding: 12px 8px;">Ja (skrens/vannplaning)</td><td style="padding: 12px 8px;">Ja (vanskeligere å bremse ned)</td><td style="padding: 12px 8px;">Ja (skaper under-/overstyring)</td></tr></tbody></table></div>'
            },
            {
                title: 'Typiske teorifeller å passe opp for',
                type: 'warning',
                content: 'Her er de vanligste fellene på teoriprøven for dette temaet:\n\n- **Ansvar:** Du som fører er ansvarlig for at bilen har tilstrekkelig veigrep hele året, ikke bare for å følge de formelle piggdekkdatoene.\n- **Mønsterdybde:** Lovlig mønsterdybde (f.eks. 1,6 mm på sommeren) betyr ikke nødvendigvis at dekket er trygt på våt vei. Det er minstekravet.\n- **Sommerdekk:** Sommerdekk skal aldri brukes på vinterføre hvis de ikke gir godt nok veigrep.\n- **Lufttrykk:** Feil lufttrykk kan gi betydelig lengre bremselengde og dårligere grep selv om dekket ser normalt ut ved visuell sjekk.\n- **ABS:** ABS hjelper deg å styre under full bremsing, men det forkorter ikke nødvendigvis bremselengden. På glatt føre trenger du uansett lang avstand.\n- **Bremsing med ABS:** Med ABS skal du holde hardt og jevnt trykk på bremsepedalen, aldri pumpe den.\n- **Skjevtrekk:** Hvis bilen trekker til siden under bremsing, er det tegn på feil ved bremsene (ujevn virkning) eller hjulstilling.\n- **Begreper:** Husk at understyring betyr at forhjulene sklir og bilen vil rett frem. Overstyring betyr at bakhjulene slipper og bakenden kommer.'
            }
        ],
        faq: [
            {
                question: 'Hva er minimum mønsterdybde på dekk?',
                answer: 'På sommerføre er minimum mønsterdybde 1,6 mm. På vinterføre er minimum 3 mm. Føreren må likevel alltid sørge for at bilen har tilstrekkelig veigrep og er trygg på det aktuelle føret.'
            },
            {
                question: 'Kan jeg bruke sommerdekk på vinterføre?',
                answer: 'Nei, ikke hvis sommerdekkene ikke gir tilstrekkelig veigrep på is eller snø. På vinterføre må bilen ha dekk eller utstyr (f.eks. kjetting) som gir godt nok feste.'
            },
            {
                question: 'Hvor finner jeg riktig lufttrykk for min bil?',
                answer: 'Riktig lufttrykk finner du vanligvis i bilens instruksjonsbok, på en etikett i dørkarmen (som oftest førersiden) eller ved tanklokket. Trykket kan variere med last og bilmodell.'
            },
            {
                question: 'Hva gjør ABS?',
                answer: 'ABS (blokkeringsfrie bremser) hindrer hjulene i å låse seg ved hard bremsing. Det gjør at du kan beholde styringskontrollen og unngå hindringer mens du bremser maksimalt.'
            },
            {
                question: 'Hva er forskjellen på understyring og overstyring?',
                answer: 'Understyring betyr at forhjulene mister grep og bilen vil fortsette rett frem i svingen. Overstyring betyr at bakhjulene mister grep og bakenden av bilen slipper ut til siden.'
            },
            {
                question: 'Hvorfor er dekktrykk viktig på teoriprøven?',
                answer: 'Fordi feil lufttrykk påvirker alt fra veigrep, stabilitet og bremselengde til drivstofforbruk, rekkevidde og dekkslitasje. Det er en viktig del av sikkerheten.'
            }
        ],
        miniQuiz: [
            {
                question: 'Hva er minimum mønsterdybde på sommerdekk?',
                options: ['1,0 mm', '1,6 mm', '3,0 mm', '4,0 mm'],
                correct: '1,6 mm',
                explanation: 'På sommerføre er minimumskravet 1,6 mm mønsterdybde, men føreren må fortsatt vurdere om veigrepet er godt nok.'
            },
            {
                question: 'Hva kan for lavt lufttrykk føre til?',
                options: ['Bedre stabilitet i svinger', 'Kortere bremselengde på våt vei', 'Økt dekkslitasje og dårligere veigrep', 'At ABS slutter å virke'],
                correct: 'Økt dekkslitasje og dårligere veigrep',
                explanation: 'For lavt lufttrykk gjør dekket svampete, øker slitasjen på dekkskuldrene, øker rullemotstanden (mer forbruk) og svekker bilens stabilitet og veigrep.'
            },
            {
                question: 'Hva er hovedoppgaven to ABS?',
                options: ['Å gjøre bilen raskere i svinger', 'Å hindre at hjulene låser seg ved hard bremsing', 'Å øke lufttrykket i dekkene', 'Å holde bilen parkert i bakke'],
                correct: 'Å hindre at hjulene låser seg ved hard bremsing',
                explanation: 'ABS hindrer hjulene i å låse seg, slik at dekkene fortsatt roterer og du beholder styringskontrollen til å svinge unna hindringer under hard bremsing.'
            },
            {
                question: 'Hva betyr understyring?',
                options: ['Bakhjulene mister grep og bilen roterer', 'Forhjulene mister grep og bilen vil mer rett frem', 'Rattet låser seg', 'Bremsene virker bare på bakhjulene'],
                correct: 'Forhjulene mister grep og bilen vil mer rett frem',
                explanation: 'Understyring skjer når forhjulene mister sidegrepet, slik at bilen fortsetter mer i fartsretningen (rett frem) enn dit du svinger med hjulene.'
            },
            {
                question: 'Hva kan det bety hvis bilen trekker til én side når du bremser?',
                options: ['At bremsene, dekkene eller hjulstillingen bør kontrolleres', 'At bilen alltid har for høyt lufttrykk', 'At ABS fungerer perfekt', 'At parkeringsbremsen er på'],
                correct: 'At bremsene, dekkene eller hjulstillingen bør kontrolleres',
                explanation: 'Skjevtrekk under bremsing betyr vanligvis at bremsene tar ujevnt (for eksempel at en bremsekaliper henger eller det er lekkasje), men kan også skyldes dekktrykk eller hjulstilling.'
            }
        ]
    },
    {
        id: 'trafikklys-signaler',
        title: 'Trafikklys, politiets tegn og signaler',
        icon: '🚦',
        shortDescription: 'Trafikklys og signaler forteller deg når du skal stoppe, kjøre eller være ekstra oppmerksom. På teoriprøven må du forstå både vanlige trafikklys, pillys, blinkende gult lys og signaler fra politiet.',
        color: 'var(--apple-orange)',
        seoTitle: 'Trafikklys, politiets tegn og signaler | Teoriprøven',
        seoDescription: 'Lær hva rødt, gult og grønt lys betyr, hvordan pillys fungerer, og hva som gjelder først av politi, trafikklys, skilt og veimerking.',
        sections: [
            {
                title: 'Kort forklart',
                type: 'text',
                content: `Trafikklys regulerer trafikken i kryss, ved gangfelt, i kjørefelt og på steder der trafikken må styres ekstra tydelig. Du må ikke bare se hvilken farge som lyser, men også om signalet gjelder hele kjøreretningen, et bestemt felt eller en bestemt retning.

Det viktigste å huske:
- Rødt lys betyr stopp.
- Rødt og gult lys samtidig betyr at det snart blir grønt, men du skal fortsatt vente.
- Grønt lys betyr at du kan kjøre dersom veien er fri.
- Gult lys betyr stopp hvis du kan stanse trygt.
- Grønn pil betyr at du kan kjøre i pilens retning, men du må fortsatt være oppmerksom.
- Blinkende gult lys betyr at signalanlegget ikke regulerer trafikken som vanlig.
- Politiets tegn og signaler gjelder foran trafikklys, skilt, veimerking og vanlige trafikkregler.`
            },
            {
                title: 'Hva gjelder først?',
                type: 'text',
                content: `Hvis flere signaler eller regler virker motstridende, må du følge den som har høyest rang. Dette er samme prinsipp som i myndighetspyramiden, men her er hovedpoenget enkelt:
1. Politi eller trafikkdirigent
2. Trafikklys og lyssignaler
3. Trafikkskilt og veimerking
4. Vanlige trafikkregler

Eksempel: Hvis trafikklyset viser grønt, men en politibetjent gir tegn om å stoppe, skal du stoppe. Politiets tegn går foran trafikklyset.

[Les mer i artikkelen om myndighetspyramiden](/laeringsressurser/myndighetspyramiden).`
            },
            {
                title: 'Vanlige trafikklys',
                type: 'table',
                content: `<div class="theory-table-wrapper">
<table class="theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
<thead>
<tr style="border-bottom: 2px solid var(--color-border); font-weight: bold;">
<th style="padding: 10px 8px;">Signal</th>
<th style="padding: 10px 8px;">Hva betyr det?</th>
<th style="padding: 10px 8px;">Hva skal du gjøre?</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom: 1px solid var(--color-border);">
<td style="padding: 12px 8px;"><strong>Rødt lys</strong></td>
<td style="padding: 12px 8px;">Du har ikke lov til å kjøre inn i krysset.</td>
<td style="padding: 12px 8px;">Stans før stopplinjen.</td>
</tr>
<tr style="border-bottom: 1px solid var(--color-border);">
<td style="padding: 12px 8px;"><strong>Rødt og gult lys</strong></td>
<td style="padding: 12px 8px;">Det blir snart grønt, men du har fortsatt ikke lov til å kjøre.</td>
<td style="padding: 12px 8px;">Gjør deg klar, men vent.</td>
</tr>
<tr style="border-bottom: 1px solid var(--color-border);">
<td style="padding: 12px 8px;"><strong>Grønt lys</strong></td>
<td style="padding: 12px 8px;">Du kan kjøre hvis veien er fri.</td>
<td style="padding: 12px 8px;">Kjør rolig og sjekk trafikken rundt deg.</td>
</tr>
<tr style="border-bottom: 1px solid var(--color-border);">
<td style="padding: 12px 8px;"><strong>Gult lys</strong></td>
<td style="padding: 12px 8px;">Lyset skifter til rødt.</td>
<td style="padding: 12px 8px;">Stans hvis du kan gjøre det trygt.</td>
</tr>
<tr style="border-bottom: 1px solid var(--color-border);">
<td style="padding: 12px 8px;"><strong>Blinkende gult lys</strong></td>
<td style="padding: 12px 8px;">Trafikklyset regulerer ikke trafikken på vanlig måte.</td>
<td style="padding: 12px 8px;">Kjør forsiktig og følg skilt, veimerking og vanlige regler.</td>
</tr>
</tbody>
</table>
</div>`
            },
            {
                title: 'Rødt lys',
                type: 'text',
                content: `Rødt lys betyr at du skal stanse. Du skal stoppe før stopplinjen. Hvis det ikke finnes stopplinje, skal du stoppe før krysset eller før gangfeltet.

Du skal ikke kjøre inn i krysset på rødt lys, selv om det ser tomt ut. Rødt lys gjelder helt til signalet endres.

**Vanlig misforståelse:** Mange tror det er greit å rulle sakte fram hvis det ikke kommer trafikk. Det er feil. Rødt lys betyr stopp.`
            },
            {
                title: 'Rødt og gult lys samtidig',
                type: 'text',
                content: `Når rødt og gult lys lyser samtidig, betyr det at lyset snart skifter til grønt. Du kan forberede deg på å kjøre, men du har fortsatt ikke lov til å kjøre.

Dette signalet er lett å misforstå på teoriprøven. Rødt og gult betyr ikke "kjør hvis det er klart". Det betyr vent.`
            },
            {
                title: 'Grønt lys',
                type: 'text',
                content: `Grønt lys betyr at du kan kjøre, men bare hvis det er trygt. Du må fortsatt ta hensyn til fotgjengere, syklister, kø, utrykningskjøretøy og trafikk som allerede er inne i krysset.

Hvis det er kø på andre siden av krysset, skal du ikke kjøre inn selv om du har grønt lys dersom du kan bli stående og blokkere krysset.

**Vanlig misforståelse:** Grønt lys betyr ikke at du kan kjøre uten å se deg for. Det betyr at du har lov til å kjøre når det er trygt.`
            },
            {
                title: 'Gult lys',
                type: 'text',
                content: `Gult lys betyr at signalet er i ferd med å skifte til rødt. Du skal stoppe hvis du kan gjøre det uten fare.

Hvis du er så nær krysset at en hard oppbremsing kan skape fare, kan du fortsette gjennom krysset. Men du skal ikke øke farten for å rekke lyset.

**Kort sagt:** Gult lys betyr stopp hvis du kan stanse trygt.`
            },
            {
                title: 'Pillys og filterlys',
                type: 'text',
                content: `Pillys gjelder bare trafikk i den retningen pilen viser. Dette er viktig på teoriprøven, fordi et pillys kan gi en annen beskjed enn hovedlyset.

En grønn pil betyr at du kan kjøre i pilens retning. Du må likevel være oppmerksom på fotgjengere, syklister og andre trafikanter som kan krysse eller befinne seg i området.

En gul pil betyr stopp for trafikk i pilens retning hvis du kan stoppe trygt. Den fungerer på samme måte som vanlig gult lys, men gjelder bare retningen pilen viser.

En rød pil betyr at du ikke kan kjøre i pilens retning.

![Pillys og filterlys](/trafikklys-signalvalg-abc-1.svg)
*Forskjellen på pilsignal og vanlig rundt signal: Vanlig rundt grønt lys gjelder trafikken signalet styrer, og du kan kjøre i lovlig retning når veien er fri. Skal du svinge til venstre, må du fortsatt ta hensyn til møtende trafikk. Grønn pil gir tillatelse til å kjøre kun i pilens retning (du har fortsatt aktsomhetsplikt).*

**Forklaring til illustrasjon: røde og grønne pillys**
- **A:** Rød pil til venstre betyr at du ikke kan kjøre til venstre. Rødt hovedlys betyr også stopp for trafikk rett frem.
- **B:** Rød og gul pil betyr at signalet for venstresving snart blir grønt, men du må fortsatt vente. Rødt og gult hovedlys betyr også vent.
- **C:** Grønn pil til venstre betyr at du kan kjøre til venstre når det er trygt. Grønt hovedlys betyr at trafikk rett frem kan kjøre hvis veien er fri.

![Gul pil, gult lys og grønn pil](/trafikklys-signalvalg-abc-2.svg)

**Forklaring til illustrasjon: gul pil, gult lys og grønn pil**
- **A:** Gul pil gjelder bare trafikk i pilens retning. Du skal stoppe hvis du kan gjøre det trygt.
- **B:** Vanlig gult lys gjelder trafikken signalet styrer, og betyr at du skal stoppe hvis du kan stanse trygt.
- **C:** Grønn pil til høyre sammen med rødt hovedlys betyr at du kan kjøre til høyre, men du må fortsatt være oppmerksom på andre trafikanter.`
            },
            {
                title: 'Blinkende gult lys',
                type: 'text',
                content: `Blinkende gult lys betyr at signalanlegget ikke regulerer trafikken på vanlig måte. Da skal du kjøre ekstra forsiktig og følge skilt, veimerking og vanlige trafikkregler.

Ved et kryss med blinkende gult lys kan for eksempel vikepliktskilt, stoppskilt eller høyreregelen avgjøre hvem som skal kjøre først.

**Vanlig misforståelse:** Blinkende gult betyr ikke at du har forkjørsrett. Det betyr at du må være ekstra oppmerksom.`
            },
            {
                title: 'Trafikklys ute av drift',
                type: 'text',
                content: `Hvis trafikklyset er helt mørkt eller ute av drift, må du ikke behandle krysset som om du har grønt lys. Da gjelder skilt, veimerking og vanlige trafikkregler.

Se etter:
- vikepliktskilt
- stoppskilt
- forkjørsveg
- veimerking
- høyreregelen

Hvis du er usikker, senk farten og vær forberedt på å stoppe.`
            },
            {
                title: 'Politiets tegn og signaler',
                type: 'text',
                content: `Politiets tegn og signaler gjelder foran trafikklys. Det betyr at du alltid skal følge politiets tegn hvis de dirigerer trafikken.

Politiet kan bruke håndtegn, kroppsstilling, lykt, fløyte eller andre tydelige signaler. Det viktigste for teoriprøven er å forstå at politiet kan overstyre både trafikklys og skilt.

Eksempler:
- **Politiet viser stopp:** Du skal stoppe, selv om lyset er grønt.
- **Politiet vinker deg fram:** Du kan kjøre, selv om du ellers ville hatt vikeplikt.
- **Politiet dirigerer trafikken i et kryss:** Følg tegnene, ikke trafikklyset.`
            },
            {
                title: 'Trafikkdirigent og vegarbeid',
                type: 'text',
                content: `Ved vegarbeid kan trafikken dirigeres av trafikkdirigent, midlertidige lys eller skilt. Du skal følge dirigentens tegn og kjøre med lav fart.

Midlertidige signaler og manuell dirigering brukes ofte når ett kjørefelt er stengt, ved innsnevringer eller der trafikken må slippes gjennom én retning av gangen.`
            },
            {
                title: 'Sammen med skilt og veimerking',
                type: 'text',
                content: `Trafikklys må ofte leses sammen med skilt og veimerking. Stopplinjen viser hvor du skal stoppe. Piler i kjørefeltet viser hvilken retning feltet er beregnet for. Skilt kan vise vikeplikt, påbudt kjøreretning eller forbud mot å svinge.

Når du nærmer deg et lyskryss, bør du derfor se etter:
- hvilken farge som lyser
- om lyset har pil
- hvilken retning pilen gjelder
- stopplinje
- gangfelt og sykkelfelt
- skilt og kjørefeltpiler

[Les også om veimerking](/laeringsressurser/veimerking) og [trafikkskilt](/trafikkskilt).`
            },
            {
                title: 'Typiske teorifeller',
                type: 'text',
                content: `- Rødt og gult lys betyr ikke at du kan kjøre. Du skal vente.
- Gult lys betyr ikke "fort deg gjennom". Du skal stoppe hvis du kan gjøre det trygt.
- Grønt lys betyr ikke at alt er fritt. Du må fortsatt vurdere trafikken.
- Grønn pil gjelder bare retningen pilen viser.
- Blinkende gult lys gir ikke forkjørsrett.
- Politiets tegn går foran trafikklys.
- Hvis trafikklyset er ute av drift, gjelder skilt, veimerking og vanlige regler.`
            },
            {
                title: 'Kort sjekkliste til teoriprøven',
                type: 'text',
                content: `Du bør kunne:
- hva rødt, rødt/gult, gult og grønt lys betyr
- hva pillys betyr
- hva blinkende gult lys betyr
- hva du gjør når trafikklys er ute av drift
- at politiets tegn går foran trafikklys
- at grønt lys fortsatt krever oppmerksomhet
- at gult lys betyr stopp hvis du kan stanse trygt`
            }
        ],
        faq: [
            {
                question: 'Hva betyr rødt og gult lys samtidig?',
                answer: 'Rødt og gult lys samtidig betyr at signalet snart skifter til grønt, men du skal fortsatt vente. Du har ikke lov til å kjøre før det blir grønt.'
            },
            {
                question: 'Hva betyr gult lys?',
                answer: 'Gult lys betyr at signalet skifter til rødt. Du skal stoppe hvis du kan gjøre det trygt. Hvis du er for nær til å stoppe uten fare, kan du fortsette.'
            },
            {
                question: 'Hva betyr grønn pil i trafikklys?',
                answer: 'Grønn pil betyr at du kan kjøre i pilens retning. Pilen gjelder bare den retningen den peker, og du må fortsatt være oppmerksom på andre trafikanter.'
            },
            {
                question: 'Hva betyr blinkende gult lys?',
                answer: 'Blinkende gult lys betyr at trafikklyset ikke regulerer trafikken på vanlig måte. Du må kjøre forsiktig og følge skilt, veimerking og vanlige trafikkregler.'
            },
            {
                question: 'Hva gjelder først av politi og trafikklys?',
                answer: 'Politiets tegn og signaler gjelder foran trafikklys. Hvis politiet viser stopp, skal du stoppe selv om trafikklyset er grønt.'
            },
            {
                question: 'Hva gjør jeg hvis trafikklyset er ute av drift?',
                answer: 'Da skal du følge skilt, veimerking og vanlige trafikkregler, for eksempel vikeplikt eller høyreregelen. Kjør rolig og vær forberedt på å stoppe.'
            }
        ],
        miniQuiz: [
            {
                question: 'Hva betyr rødt og gult lys samtidig?',
                options: [
                    'Du kan kjøre hvis veien er fri',
                    'Du skal vente, men gjøre deg klar til grønt',
                    'Du har forkjørsrett',
                    'Trafikklyset er ute av drift'
                ],
                correct: 'Du skal vente, men gjøre deg klar til grønt',
                explanation: 'Rødt og gult betyr at lyset snart blir grønt, men du har fortsatt ikke lov til å kjøre.'
            },
            {
                question: 'Hva betyr gult lys?',
                options: [
                    'Kjør raskt gjennom krysset',
                    'Stopp hvis du kan gjøre det trygt',
                    'Du har alltid forkjørsrett',
                    'Lyset gjelder bare fotgjengere'
                ],
                correct: 'Stopp hvis du kan gjøre det trygt',
                explanation: 'Gult lys varsler rødt lys. Du skal stoppe hvis det kan gjøres uten fare.'
            },
            {
                question: 'Hva betyr blinkende gult lys?',
                options: [
                    'Du har forkjørsrett',
                    'Du skal alltid stoppe helt',
                    'Trafikklyset regulerer ikke trafikken på vanlig måte',
                    'Du kan ignorere alle skilt'
                ],
                correct: 'Trafikklyset regulerer ikke trafikken på vanlig måte',
                explanation: 'Ved blinkende gult må du følge skilt, veimerking og vanlige regler.'
            },
            {
                question: 'Hva gjelder først hvis politiet viser stopp, men trafikklyset er grønt?',
                options: [
                    'Trafikklyset',
                    'Skiltet nærmest deg',
                    'Politiets tegn',
                    'Høyreregelen'
                ],
                correct: 'Politiets tegn',
                explanation: 'Politiets tegn og signaler går foran trafikklys.'
            },
            {
                question: 'Hva betyr grønn pil til høyre sammen med rødt hovedlys?',
                options: [
                    'Du kan kjøre rett frem og til høyre',
                    'Du kan kjøre til høyre når det er trygt',
                    'Du må alltid stoppe til lyset blir helt grønt',
                    'Pilen gjelder bare gående'
                ],
                correct: 'Du kan kjøre til høyre når det er trygt',
                explanation: 'Grønn pil gjelder bare retningen pilen viser. Du må fortsatt være oppmerksom.'
            }
        ]
    },
    {
        id: 'feltvalg-fletting-kollektivfelt',
        title: 'Feltvalg og fletting: kjørefelt, kollektivfelt og påkjøring',
        shortDescription: 'Feltvalg handler om å lese skilt, vegoppmerking og trafikklys tidlig nok til å plassere seg trygt. Lær reglene for feltskifte, fletting og kollektivfelt.',
        icon: '🛣️',
        color: 'var(--apple-blue)',
        seoTitle: 'Feltvalg og fletting: regler for kjørefelt og kollektivfelt',
        seoDescription: 'Lær forskjellen på feltskifte og fletting, hvordan du bruker kollektivfelt og sambruksfelt, og hva som gjelder ved påkjøring og feltvalg til teoriprøven.',
        sections: [
            {
                title: '1. Kort forklart',
                type: 'text',
                content: 'Feltvalg betyr å velge riktig kjørefelt i god tid. Feltskifte betyr at du bytter fra ett felt til et annet, og da har du vikeplikt for trafikken i feltet du skal inn i. Fletting gjelder når to vanlige kjørefelt i samme retning blir til ett; da skal førerne tilpasse farten og slippe hverandre inn vekselvis. Kollektivfelt og sambruksfelt kan bare brukes når skilt og eventuelle underskilt tillater det.'
            },
            {
                title: '2. Hva betyr feltvalg?',
                type: 'text',
                content: 'Feltvalg er plasseringen din før du kommer til en situasjon der veien deler seg, feltene får ulike retninger, eller ett felt har egne regler. Riktig feltvalg gjør trafikken mer forutsigbar for alle rundt deg.\n\nDu må velge felt tidlig nok til at du slipper brå feltbytter. Det gjelder særlig før kryss, [rundkjøringer](/laeringsressurser/rundkjoring), avkjøringer, påkjøringer til motorvei, kollektivfelt og steder der feltpiler viser hvilken retning feltet gjelder for.\n\nEt godt feltvalg bygger på fem ting:\n- skilt over eller ved kjørefeltet\n- vegoppmerking, som piler, kjørefeltlinjer og sperrelinjer\n- trafikklys og pilsignaler\n- hvor du skal videre\n- trafikkflyt, avstand og sikt\n\nHvis du oppdager for sent at du ligger i feil felt, er det ofte tryggere å følge feltet videre og finne en ny lovlig vei tilbake enn å presse deg inn i siste øyeblikk.'
            },
            {
                title: '3. Feltskifte, fletting og påkjøring er ikke det samme',
                type: 'table',
                content: '<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px; font-weight: 600;">Situasjon</th><th style="padding: 12px 8px; font-weight: 600;">Hva betyr det?</th><th style="padding: 12px 8px; font-weight: 600;">Hovedregel</th><th style="padding: 12px 8px; font-weight: 600;">Typisk teorifelle</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px; font-weight: 600; white-space: nowrap;">Feltvalg</td><td style="padding: 12px 8px;">Du velger riktig felt før kryss, rundkjøring eller avkjøring</td><td style="padding: 12px 8px;">Planlegg tidlig og plasser deg tydelig</td><td style="padding: 12px 8px; color: #E24B4A;">Å bytte felt for sent</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px; font-weight: 600; white-space: nowrap;">Feltskifte</td><td style="padding: 12px 8px;">Du bytter fra ett kjørefelt til et annet</td><td style="padding: 12px 8px;">Du har vikeplikt for trafikken i feltet du skal inn i</td><td style="padding: 12px 8px; color: #E24B4A;">Å tro at blinklys gir deg rett til å skifte felt</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px; font-weight: 600; white-space: nowrap;">Fletting</td><td style="padding: 12px 8px;">To vanlige felt i samme retning går sammen til ett</td><td style="padding: 12px 8px;">Førerne skal tilpasse farten og slippe hverandre inn vekselvis</td><td style="padding: 12px 8px; color: #E24B4A;">Å tro at ett felt alltid har absolutt forkjørsrett</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px; font-weight: 600; white-space: nowrap;">Påkjøring med vikeplikt</td><td style="padding: 12px 8px;">Du kjører inn på en vei der du har vikeplikt</td><td style="padding: 12px 8px;">Du må vente på trygg luke</td><td style="padding: 12px 8px; color: #E24B4A;">Å tro at all påkjøring til motorvei er fletting</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px; font-weight: 600; white-space: nowrap;">Akselerasjonsfelt</td><td style="padding: 12px 8px;">Du bruker feltet til å komme opp i fart før innkjøring</td><td style="padding: 12px 8px;">Kom opp i fart, observer og finn luke</td><td style="padding: 12px 8px; color: #E24B4A;">Å legge seg inn for tidlig eller for sakte</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px; font-weight: 600; white-space: nowrap;">Kollektivfelt</td><td style="padding: 12px 8px;">Et felt reservert for bestemte trafikantgrupper</td><td style="padding: 12px 8px;">Skilt og underskilt avgjør hvem som kan bruke feltet</td><td style="padding: 12px 8px; color: #E24B4A;">Å overse tidsrom eller vilkår på underskilt</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px; font-weight: 600; white-space: nowrap;">Sambruksfelt</td><td style="padding: 12px 8px;">Et felt for kjøretøy som oppfyller bestemte vilkår</td><td style="padding: 12px 8px;">Følg skiltet, ofte krav til antall personer</td><td style="padding: 12px 8px; color: #E24B4A;">Å tro at alle personbiler kan bruke feltet</td></tr></tbody></table></div>'
            },
            {
                title: '4. Fletting: glidelåsprinsippet',
                type: 'text',
                content: 'Ved fletting blir to vanlige kjørefelt i samme retning til ett felt. Da skal førerne tilpasse farten slik at bilene kan fortsette vekselvis, omtrent som en glidelås.\n\nDet betyr ikke at du skal presse deg frem. Det betyr heller ikke at du skal stoppe unødvendig tidlig og lage lang kø bak deg. Målet er flyt: finn plassen din i rekken, tilpass farten og gjør valget ditt tydelig.\n\nSlik gjør du fletting riktig:\n- bruk begge felt frem til flettingen\n- se langt frem og finn en naturlig luke\n- bruk speil, blindsone og blinklys\n- legg deg ikke rett ved siden av en annen bil hvis du snart skal flette\n- tilpass farten to trafikken i feltet ved siden av\n- slipp inn annenhver bil når det er tett trafikk\n\n![Illustrasjon av fletting der kjøretøy tilpasser farten for å slippe hverandre inn vekselvis.](/images/feltvalg-fletting-glidelas.png)\n*Ved fletting skal trafikken i feltene tilpasse farten og slippe hverandre inn vekselvis.*\n\n**Bildeoppgave:**\nDu kjører i feltet som snart flettes sammen med feltet ved siden av. Hvordan bør du opptre?\n*Riktig svar:* Tilpass farten, finn plass i rekken og samarbeid med trafikken i det andre feltet slik at bilene kan kjøre videre vekselvis.'
            },
            {
                title: '5. Feltskifte: du har vikeplikt',
                type: 'text',
                content: 'Ved vanlig feltskifte er regelen strengere enn ved fletting. Hvis du skal skifte fra ett kjørefelt til et annet, har du [vikeplikt](/laeringsressurser/vikeplikt) for kjøretøy som allerede er i feltet du skal inn i.\n\nBlinklys er bare et signal om hva du ønsker å gjøre. Det gir deg ikke rett til å skifte felt. Før du legger deg inn må du kontrollere speil, blindsone, avstand og fart. Hvis feltet ikke er ledig, venter du.\n\nDette er typisk feltskifte:\n- du bytter felt på motorvei for å kjøre forbi (les om [forbikjøring](/laeringsressurser/forbikjoring))\n- du legger deg fra høyre til venstre felt før en [rundkjøring](/laeringsressurser/rundkjoring)\n- du vil inn i et svingefelt før et kryss\n- du vil ut av kollektivfelt eller inn i kollektivfelt\n- du bytter felt fordi feltet ditt går i feil retning\n\n**Hovedpoenget til teoriprøven:**\nHvis feltet du skal inn i allerede har trafikk, må du ikke hindre eller forstyrre den trafikken.'
            },
            {
                title: '6. Påkjøring og akselerasjonsfelt',
                type: 'text',
                content: 'Et akselerasjonsfelt, også kalt fartsøkningsfelt, brukes for å komme opp i fart før du kjører inn på en større vei. Dette er vanlig ved påkjøring til motorvei eller motortrafikkvei.\n\nDen viktigste feilen er å kjøre for sakte. Hvis du kommer inn på motorveien med for lav fart, tvinger du andre til å bremse eller skifte felt (les om [reaksjonstid](/laeringsressurser/reaksjonstid) og fartstilpasning). Bruk feltet til å øke farten, observere trafikken og finne en trygg luke.\n\n![Illustrasjon av bil i akselerasjonsfelt som skal inn på motorvei.](/images/feltvalg-akselerasjonsfelt.png)\n*Bruk akselerasjonsfeltet til å komme opp i fart, observere og finne en trygg luke.*\n\nSjekk dette før du legger deg inn:\n- Er det vikepliktskilt, eller er dette en sammenfletting?\n- Er linjen mellom feltene heltrukken eller stiplet? (les om [veimerking](/laeringsressurser/veimerking))\n- Har du nok fart til å passe inn i trafikkflyten? (se [fartsgrenser](/laeringsressurser/fartsgrenser))\n- Har du kontrollert speil og blindsone?\n- Har du gitt tegn i god tid?\n- Er det plass foran eller bak kjøretøyet du skal flette inn ved?\n\nHvis påkjøringen har vikepliktskilt eller kort innkjøring uten reelt akselerasjonsfelt, må du vente til det er trygt å kjøre inn. Ikke bland dette med fletting.'
            },
            {
                title: '7. Kollektivfelt',
                type: 'text',
                content: 'Kollektivfelt er felt som først og fremst er satt av til kollektivtrafikk og bestemte trafikantgrupper. Hvem som kan bruke feltet avgjøres av [skilt](/laeringsressurser/skilt) og eventuelle underskilt.\n\nPå teoriprøven må du være ekstra oppmerksom på underskilt. Et kollektivfeltskilt alene gir ikke alltid nok informasjon. Underskilt kan begrense bruken etter kjøretøytype, passasjerer, tidspunkt eller lokale regler.\n\n![Illustrasjon av kollektivfelt merket for buss og taxi med underskilt om elbil uten passasjer.](/images/kollektivfelt-elbil-underskilt.png)\n*Kollektivfelt kan ha underskilt som begrenser hvem som kan bruke feltet. Les alltid både hovedskilt og underskilt.*\n\nI bildet står det: *Gjelder ikke elmotorvogn uten passasjer 06-09*. Det betyr at unntaket for elbil uten passasjer ikke gjelder i dette tidsrommet. Kjører du elbil alene klokken 08.15, skal du ikke bruke kollektivfeltet her.\n\n**Viktig å huske:**\n- Les både hovedskilt og underskilt.\n- Ikke anta at elbil alltid kan bruke kollektivfelt.\n- Reglene kan være tidsstyrte og lokale.\n- Du må fortsatt skifte felt trygt når du skal inn eller ut av kollektivfeltet.\n- Hvis du er usikker på om du har lov til å bruke feltet, velg vanlig kjørefelt.\n\n**Bildeoppgave:**\nDu kjører elbil uten passasjer klokken 08.15 og ser skiltet på bildet. Kan du bruke kollektivfeltet?\n*Riktig svar:* Nei. Underskiltet sier at dette ikke gjelder for elmotorvogn uten passasjer i tidsrommet 06-09.'
            },
            {
                title: '8. Sambruksfelt',
                type: 'text',
                content: 'Sambruksfelt er felt som kan brukes av kjøretøy som oppfyller bestemte vilkår. Det vanligste poenget er antall personer i bilen, men du må alltid lese skiltet og eventuelle underskilt.\n\nForskjellen på kollektivfelt og sambruksfelt er at kollektivfelt normalt handler om bestemte trafikantgrupper, mens sambruksfelt handler om vilkår for bruk av feltet. En personbil kan derfor være lovlig i et sambruksfelt hvis vilkårene er oppfylt, men ikke hvis føreren kjører alene og skiltet krever flere personer.\n\n**Typisk teorifelle:**\nDu ser et felt som virker "ledig" og tenker at du kan bruke det for å komme raskere frem. Men spesialfelt er ikke vanlige forbikjøringsfelt. Først må du sjekke om kjøretøyet og situasjonen din oppfyller vilkårene.'
            },
            {
                title: '9. Feltpiler, skilt og trafikklys',
                type: 'text',
                content: 'Feltpiler viser hvilken retning et kjørefelt skal brukes til. Hvis venstre felt har pil til venstre, skal du ikke bruke det feltet for å kjøre rett frem. Hvis høyre felt har pil rett frem, skal du ikke svinge til høyre.\n\nTrafikklys kan også gjelde bestemte felt eller retninger. Et grønt pilsignal betyr at du kan kjøre i pilens retning når det er trygt og lovlig, men du må fortsatt lese feltplassering, skilt og vikeplikt i situasjonen.\n\nSe etter dette i god tid:\n- piler malt i kjørefeltet (se [veimerking](/laeringsressurser/veimerking))\n- skilt over feltet (se [skilt](/laeringsressurser/skilt))\n- egne signaler for venstresving eller høyresving\n- sperrelinjer som gjør feltbytte ulovlig\n- felt som er reservert for buss, taxi, sykkel eller sambruk\n\nNår du har valgt felt, bør du holde plasseringen rolig og tydelig. Sen feltbytte i kryss er en av de vanligste måtene å skape usikkerhet på.'
            },
            {
                title: '10. Envegskjøring og feltvalg',
                type: 'text',
                content: 'På enveiskjørt vei kan det være flere felt i samme retning. Da må du velge felt ut fra hvor du skal videre, hva skilt og vegoppmerking viser, og hvordan trafikken flyter.\n\nSkal du til venstre, er det ofte naturlig å plassere seg mot venstre i god tid. Skal du rett frem eller til høyre, må du følge feltpiler og skilt. Det viktigste er at plasseringen din gjør handlingen forutsigbar for andre.\n\nHvis du må bytte felt på en enveiskjørt vei, gjelder fortsatt regelen for feltskifte: du har vikeplikt for trafikken i feltet du skal inn i.'
            },
            {
                title: '11. Ekspertforklaring',
                type: 'info',
                content: 'På teoriprøven er det ofte ikke nok å kjenne navnet på skiltet. Du må forstå hvilken type handling situasjonen krever.\n\nStill deg disse spørsmålene i riktig rekkefølge:\n1. Er dette et vanlig feltskifte?\n2. Er det en flettesituasjon der to vanlige felt blir til ett?\n3. Har jeg vikeplikt ved innkjøring eller påkjøring?\n4. Er feltet reservert, for eksempel kollektivfelt eller sambruksfelt?\n5. Sier underskiltet noe om tid, kjøretøytype eller passasjerer?\n\nHvis du bytter felt frivillig, har du som regel vikeplikt for trafikken i feltet du skal inn i. Hvis to vanlige felt i samme retning reduseres til ett, er det fletting, og farten skal tilpasses gjensidig. Hvis feltet er et kollektivfelt eller sambruksfelt, avgjør skilt og underskilt om du kan bruke det.\n\nDen beste strategien er å lese situasjonen utenfra og inn: først skilt, så oppmerking, så trafikklys, så trafikkflyt, og til slutt plasseringen din.'
            },
            {
                title: '12. Typiske teorifeller',
                type: 'warning',
                content: '- Blinklys gir deg ikke rett til å skifte felt.\n- Fletting er ikke det samme som vanlig feltskifte.\n- Påkjøring til motorvei er ikke alltid fletting; noen steder har du vikeplikt.\n- Du skal ikke skifte felt over heltrukken linje.\n- Kollektivfelt kan ha tidsbegrensninger og lokale regler.\n- Elbil kan ikke alltid bruke kollektivfelt.\n- Sambruksfelt krever at vilkårene på skiltet er oppfylt.\n- Feltpiler gjelder kjørefeltet du ligger i, ikke bare retningen du ønsker.\n- Det er bedre å kjøre en omvei enn å presse seg inn fra feil felt.\n- Underskilt kan endre hele svaret på en bildeoppgave.'
            },
            {
                title: '13. Slik bør du tenke på teoriprøven',
                type: 'tip',
                content: 'Når du får et bilde med flere felt, start med å finne ut hva slags felt du ser. Er det et vanlig kjørefelt, et svingefelt, et kollektivfelt, et sambruksfelt eller et akselerasjonsfelt?\n\nDeretter ser du på handlingen: Skal du bare fortsette, skifte felt, flette, svinge eller kjøre inn på en ny vei? Hver handling har sin egen regel. Det er derfor to bilder som ser ganske like ut, kan ha helt ulike svar.\n\n**En god huskeregel:**\n*Felt først, handling etterpå.*\n\nFørst forstår du hvilket felt du er i. Deretter vurderer du hva du har lov til å gjøre fra det feltet.'
            }
        ],
        faq: [
            {
                question: 'Hva er feltvalg?',
                answer: 'Feltvalg betyr å velge riktig kjørefelt ut fra hvor du skal, skilt, vegoppmerking, trafikklys og trafikkflyt. Du bør velge felt tidlig nok til at du slipper brå eller farlige feltskifter.'
            },
            {
                question: 'Hva er forskjellen på feltskifte og fletting?',
                answer: 'Ved feltskifte bytter du fra ett kjørefelt til et annet, og da har du vikeplikt for trafikken i feltet du skal inn i. Ved fletting blir to vanlige felt i samme retning til ett, og førerne skal tilpasse farten gjensidig.'
            },
            {
                question: 'Hvem har vikeplikt ved fletting?',
                answer: 'Ved fletting skal førerne tilpasse farten og slippe hverandre inn vekselvis. Det er ikke det samme som vanlig feltskifte, der den som skifter felt har vikeplikt.'
            },
            {
                question: 'Hva betyr glidelåsprinsippet?',
                answer: 'Glidelåsprinsippet betyr at bilene slipper hverandre inn vekselvis når to felt blir til ett. Målet er jevn trafikkflyt uten at noen presser seg frem eller stopper unødvendig tidlig.'
            },
            {
                question: 'Må jeg blinke ved fletting?',
                answer: 'Ja, du bør bruke blinklys når du skal bevege deg inn i et annet felt eller gjøre plasseringen din tydelig. Men blinklys gir deg ikke rett til å presse deg inn.'
            },
            {
                question: 'Hva gjelder ved vanlig feltskifte?',
                answer: 'Når du skifter kjørefelt, har du vikeplikt for kjøretøy som allerede er i feltet du skal inn i. Du må kontrollere speil, blindsone, avstand og fart før du legger deg inn.'
            },
            {
                question: 'Hva er et akselerasjonsfelt?',
                answer: 'Et akselerasjonsfelt er et felt der du øker farten for å tilpasse deg trafikken på veien du skal inn på. Det brukes ofte ved påkjøring til motorvei eller motortrafikkvei.'
            },
            {
                question: 'Er påkjøring til motorvei alltid fletting?',
                answer: 'Nei. Noen påkjøringer har akselerasjonsfelt og fletting, mens andre har tydelig vikeplikt eller kort innkjøring. Du må lese skilt og oppmerking i situasjonen.'
            },
            {
                question: 'Hvem kan bruke kollektivfelt?',
                answer: 'Hvem som kan bruke kollektivfelt avgjøres av skilt og underskilt. Feltet kan være reservert for bestemte kjøretøy eller trafikantgrupper, og reglene kan være lokale eller tidsstyrte.'
            },
            {
                question: 'Kan elbil bruke kollektivfelt?',
                answer: 'Ikke alltid. Elbilregler i kollektivfelt kan variere etter sted, tidspunkt og underskilt. Hvis underskiltet begrenser bruk for elmotorvogn uten passasjer, må du følge den begrensningen.'
            },
            {
                question: 'Hva er sambruksfelt?',
                answer: 'Sambruksfelt er et felt som kan brukes av kjøretøy som oppfyller bestemte vilkår, ofte et krav om flere personer i bilen. Vilkårene står på skilt eller underskilt.'
            },
            {
                question: 'Hva gjør jeg hvis jeg ligger i feil felt?',
                answer: 'Hvis du ligger i feil felt og ikke kan skifte trygt og lovlig, bør du følge feltet videre og finne en ny lovlig vei tilbake. Ikke press deg inn i siste øyeblikk.'
            }
        ],
        miniQuiz: [
            {
                question: 'Hva er hovedforskjellen på feltskifte og fletting?',
                options: [
                    'Ved feltskifte har den som skifter felt vikeplikt. Ved fletting skal trafikken tilpasse farten gjensidig.',
                    'Ved fletting har alltid bilen i venstre felt forkjørsrett.',
                    'Ved feltskifte trenger du bare å blinke, så må andre slippe deg inn.'
                ],
                correct: 'Ved feltskifte har den som skifter felt vikeplikt. Ved fletting skal trafikken tilpasse farten gjensidig.',
                explanation: 'Blinklys varsler andre om hva du vil gjøre, men det gir deg ikke rett til å skifte felt. Fletting gjelder når to vanlige felt i samme retning blir til ett.'
            },
            {
                question: 'Du kjører i et akselerasjonsfelt inn på motorvei. Hva bør du gjøre?',
                options: [
                    'Øke farten, observere speil og blindsone, gi tegn og finne en trygg luke.',
                    'Stoppe i enden av feltet og vente til hele motorveien er tom.',
                    'Kjøre rett inn i hovedfeltet fordi trafikken på motorveien always har plikt til å vike.'
                ],
                correct: 'Øke farten, observere speil og blindsone, gi tegn og finne en trygg luke.',
                explanation: 'Akselerasjonsfeltet skal hjelpe deg å tilpasse farten til trafikken på hovedveien. Du må likevel kontrollere at det er trygt å legge deg inn.'
            },
            {
                question: 'Kan elbil alltid kjøre i kollektivfelt?',
                options: [
                    'Nei, du må følge skilt, underskilt og lokale regler.',
                    'Ja, elbil kan alltid bruke alle kollektivfelt.',
                    'Ja, men bare hvis du blinker.'
                ],
                correct: 'Nei, du må følge skilt, underskilt og lokale regler.',
                explanation: 'Kollektivfelt kan ha egne vilkår, tidsbegrensninger og lokale regler. Les alltid underskiltet.'
            },
            {
                question: 'Hva betyr glidelåsprinsippet ved fletting?',
                options: [
                    'Bilene slipper hverandre inn vekselvis, omtrent annenhver bil.',
                    'Alle biler i høyre felt må stoppe helt.',
                    'Den største bilen skal alltid først.'
                ],
                correct: 'Bilene slipper hverandre inn vekselvis, omtrent annenhver bil.',
                explanation: 'Fletting handler om gjensidig fartstilpasning og samarbeid når to vanlige felt blir til ett.'
            },
            {
                question: 'Du skal skifte fra høyre til venstre kjørefelt. Det ligger en bil i venstre felt litt bak deg. Hva må du gjøre?',
                options: [
                    'Vente til du har trygg avstand og ikke hindrer bilen i venstre felt.',
                    'Blinke og legge deg inn med en gang.',
                    'Bremse hardt slik at bilen i venstre felt må slippe deg inn.'
                ],
                correct: 'Vente til du har trygg avstand og ikke hindrer bilen i venstre felt.',
                explanation: 'Ved feltskifte har du vikeplikt for trafikken i feltet du skal inn i.'
            },
            {
                question: 'Du kjører elbil uten passasjer klokken 08.15. Skiltet ved kollektivfeltet sier: Gjelder ikke elmotorvogn uten passasjer 06-09. Kan du bruke kollektivfeltet?',
                options: [
                    'Nei, ikke i dette tidsrommet.',
                    'Ja, fordi alle elbiler kan bruke kollektivfelt.',
                    'Ja, hvis det er lite trafikk.'
                ],
                correct: 'Nei, ikke i dette tidsrommet.',
                explanation: 'Underskiltet begrenser bruken for elmotorvogn uten passasjer mellom 06 og 09. Da må du velge vanlig kjørefelt.'
            },
            {
                question: 'Hva er en vanlig feil ved feltvalg før kryss?',
                options: [
                    'Å bytte felt for sent og skape usikkerhet for andre.',
                    'Å velge felt tidlig.',
                    'Å følge kjørefeltpilene.'
                ],
                correct: 'Å bytte felt for sent og skape usikkerhet for andre.',
                explanation: 'Riktig feltvalg handler om å planlegge tidlig. Sen og brå plassering kan skape farlige situasjoner.'
            }
        ],
        sources: {
            title: 'Kilder',
            type: 'text',
            content: '- Statens vegvesen: [Temaliste til teoriprøve klasse B](https://www.vegvesen.no/globalassets/forerkort/ta-forerkort/temaliste-til-teoriprove-klasse-b-bokmal.pdf)\n- Lovdata: [Trafikkreglene](https://lovdata.no/dokument/SF/forskrift/1986-03-21-747)\n- Norges Trafikkskoleforbund: [Fletting i trafikken](https://ntsf.no/ta-forerkort/tips/fletting-i-trafikken)'
        }
    },
    {
        id: 'forerstottesystemer',
        title: 'Førerstøttesystemer på teoriprøven: hjelpemidler, ikke selvkjøring',
        icon: '🚗',
        shortDescription: 'Førerstøttesystemer kan hjelpe deg med å bremse, holde avstand, varsle om fare eller holde bilen i feltet. Men de erstatter ikke føreren. På teoriprøven er det viktigste å forstå at du fortsatt må følge med, tilpasse farten og gripe inn når systemene ikke fungerer godt nok.',
        color: 'var(--apple-blue)',
        seoTitle: 'Førerstøttesystemer: ABS, ESP og adaptiv cruise | Teori-test.no',
        seoDescription: 'Lær hva ABS, ESP, adaptiv cruise control, filholder og nødbrems gjør – og hvorfor du fortsatt har ansvaret som fører. Med teorifeller og miniQuiz.',
        sections: [
            {
                title: 'Kort forklart: Hva er førerstøttesystemer?',
                type: 'info',
                content: 'Førerstøttesystemer (ofte kalt ADAS - Advanced Driver Assistance Systems) er elektroniske hjelpemidler i bilen. De kan varsle om fare, hjelpe med styring og fart, eller gripe inn i kritiske situasjoner. Hovedregelen til teoriprøven er enkel:\n\n**Systemene hjelper føreren, men de erstatter aldri førerens ansvar.**\n\nDet betyr at uansett hvilke systemer som er aktivert i bilen, er det du som fører som er ansvarlig for bilens plassering, fart, sikkerhet og eventuelle regelbrudd.\n\n![Illustrasjon av førerstøttesystemer i bil, med ABS, ESP, adaptiv cruise control, filholder, blindsonevarsler og automatisk nødbrems.](/images/forerstottesystemer_oversikt.png)\n*En oversikt over de viktigste førerstøttesystemene i en moderne bil, og hvor de hjelper deg under kjøring.*'
            },
            {
                title: 'Tabell: Vanlige førerstøttesystemer på teoriprøven',
                type: 'table',
                content: '<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">System</th><th style="padding: 12px 8px;">Hva det hjelper med</th><th style="padding: 12px 8px;">Hva du fortsatt må gjøre</th><th style="padding: 12px 8px;">Vanlig teorifelle</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>ABS</b> (Blokkeringsfrie bremser)</td><td style="padding: 12px 8px;">Hindrer at hjulene låser seg ved hard bremsing, slik at du kan styre.</td><td style="padding: 12px 8px;">Bremse hardt og holde trykket på pedalen, og styr unna faren.</td><td style="padding: 12px 8px;">Å tro at ABS-bremser alltid gir kortere bremselengde. (På løs snø eller grus kan den bli lengre).</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>ESP / Antiskrens</b></td><td style="padding: 12px 8px;">Hjelper med å stabilisere bilen ved skrensfare ved å bremse enkelthjul.</td><td style="padding: 12px 8px;">Tilpass farten etter forholdene og unngå brå rattbevegelser.</td><td style="padding: 12px 8px;">Å tro at ESP opphever glatt føre og tillater høyere fart i svinger.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Antispinn</b></td><td style="padding: 12px 8px;">Reduserer hjulspinn ved igangkjøring eller akselerasjon.</td><td style="padding: 12px 8px;">Kjør rolig, gi forsiktig gass og tilpass deg glatt underlag.</td><td style="padding: 12px 8px;">Å tro at bilen får bedre faktisk veigrep enn dekkene og føret tillater.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Adaptiv cruise control</b></td><td style="padding: 12px 8px;">Holder valgt fart og tilpasser avstanden til kjøretøyet foran.</td><td style="padding: 12px 8px;">Følg med på trafikken, vær klar til å bremse selv, og tilpass farten etter sikt og føre.</td><td style="padding: 12px 8px;">Å tro at systemet fungerer som en autopilot og reagerer riktig i alle situasjoner.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Filholder / Kjørefeltassistent</b></td><td style="padding: 12px 8px;">Varsler eller styrer forsiktig for å holde bilen innenfor kjørefeltet.</td><td style="padding: 12px 8px;">Hold hendene på rattet, se på veien, styr selv og bruk blinklys ved filskifte.</td><td style="padding: 12px 8px;">Å tro at systemet fungerer like godt uten synlige linjer i veibanen.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Automatisk nødbrems</b></td><td style="padding: 12px 8px;">Varsler og bremser automatisk hvis en kollisjon er nært forestående.</td><td style="padding: 12px 8px;">Hold tilstrekkelig avstand, les trafikkbildet fremover og brems tidlig.</td><td style="padding: 12px 8px;">Å tro at nødbremsen alltid oppdager alle hindringer og avverger enhver kollisjon.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Blindsonevarsler</b></td><td style="padding: 12px 8px;">Varsler med lys/lyd hvis det ligger et kjøretøy i blindsonen din.</td><td style="padding: 12px 8px;">Sjekk alltid speil og ta skulderblikk før du skifter kjørefelt.</td><td style="padding: 12px 8px;">Å stole blindt på varsellampen og droppe skulderblikket (kan overse raske MC/sykler).</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Ryggekamera / Parkeringssensor</b></td><td style="padding: 12px 8px;">Hjelper deg å oppdage hindringer bak bilen under rygging.</td><td style="padding: 12px 8px;">Se deg rundt i alle retninger, sjekk speil og blindsoner før og under rygging.</td><td style="padding: 12px 8px;">Å tro at kameraet viser alt og erstatter plikten til fysisk observasjon.</td></tr><tr><td style="padding: 12px 8px;"><b>Skiltgjenkjenning / ISA</b></td><td style="padding: 12px 8px;">Leser fartsskilt og kan varsle eller tilpasse bilens fartsgrense automatisk.</td><td style="padding: 12px 8px;">Følg med på fysiske skilt, og tilpass farten etter vær, sikt og føre.</td><td style="padding: 12px 8px;">Å tro at bilen alltid viser riktig fartsgrense (systemet kan feile på midlertidige skilt).</td></tr></tbody></table></div>'
            },
            {
                title: 'ABS og ESP: De viktigste sikkerhetssystemene',
                type: 'text',
                content: 'De to mest kjente og utbredte førerstøttesystemene er ABS og ESP. De jobber aktivt med bilens veigrep under kjøring:\n\n### ABS (Blokkeringsfrie bremser)\nHovedoppgaven til ABS-bremser er å hindre at hjulene låser seg helt når du bremser maksimalt. Hvis hjulene låser seg, mister du all mulighet til å styre bilen. Med ABS kan du bremse maksimalt og samtidig styre unna en hindring. Les mer om hvordan veigrep og fart påvirker [bremselengde og stopplengde](/laeringsressurser/bremselengde).\n\n**Teorifelle:** Mange tror ABS-bremser alltid gir kortere bremselengde. På enkelte underlag, som løs snø eller grus, kan bremselengden bli lengre med ABS. På [glatt føre](/laeringsressurser/glatt-fore) er hovedpoenget at ABS hjelper deg å beholde styringen, ikke at bilen stopper raskere.\n\n### ESP / Antiskrens\nESP (Electronic Stability Program) overvåker bilens retning og hjulenes rotasjon. Hvis bilen begynner å skli (understyring eller overstyring), griper ESP inn ved å bremse ett eller flere hjul individuelt for å rette opp bilen.\n\n**Teorifelle:** ESP kan hjelpe deg med å hente inn en skrens, men systemet opphever ikke fysikkens lover. Kjører du for fort inn i en sving på glatt føre, vil bilen skli ut uansett om ESP er aktivert eller ikke.'
            },
            {
                title: 'Adaptiv cruise control og filholder: Komfort, ikke selvkjøring',
                type: 'text',
                content: 'Disse systemene hjelper deg med den daglige kjøringen på lengre strekninger, men krever at føreren er 100 % oppmerksom:\n\n### Adaptiv cruise control (ACC)\nI motsetning til vanlig cruise control som kun holder en fast hastighet, bruker adaptiv cruise control radar eller kamera for å måle avstanden til bilen foran. Hvis bilen foran bremser, kan bilen bremse eller redusere farten for å holde avstanden.\n\n**Viktig:** Du har fortsatt ansvaret. Hvis bilen foran bremser brått, eller det oppstår en situasjon systemet ikke oppfatter (f.eks. en bil som svinger inn rett foran deg), må du være klar til å bremse selv.\n\n### Filholder / Kjørefeltassistent\nFilholderen bruker et kamera øverst i frontruten for å lese oppmerkingen i veibanen. Hvis du er i ferd med å drifte ut av kjørefeltet uten å bruke blinklys, vil systemet varsle deg eller gi et lite styreinnrykk for å holde deg i feltet. Les mer om kjørefelt og vegoppmerking i vår guide om [veimerking](/laeringsressurser/veimerking) og [feltvalg, fletting og kollektivfelt](/laeringsressurser/feltvalg-fletting-kollektivfelt).\n\n**Viktig:** Filholderen fungerer best når det er synlig vegoppmerking. Ved vegarbeid, slitte linjer eller snødekt vei kan systemet fungere dårligere eller slå seg av.'
            },
            {
                title: 'Automatisk nødbrems, blindsonevarsling og ryggehjelp',
                type: 'text',
                content: 'Sikkerhetssystemene rundt bilen hjelper til i kritiske øyeblikk og ved finmanøvrering:\n\n### Automatisk nødbrems (AEB)\nSystemet kan bruke kamera/radar til å oppdage andre kjøretøy, fotgjengere eller syklister foran bilen. Hvis det oppstår en akutt kollisjonsfare og du ikke reagerer på varslene, kan bilen bremse automatisk for å redusere risikoen for eller skadene av et sammenstøt.\n\n### Blindsonevarsler\nBlindsonevarsleren bruker sensorer på siden og bak på bilen for å oppdage kjøretøy som befinner seg i blindsonen din. En lampe (ofte i sidespeilet) lyser eller blinker hvis du setter på blinklyset for å skifte felt mens det ligger en bil der.\n\n**Teorifelle:** Blindsonevarsleren erstatter aldri din plikt til å sjekke blindsonen selv med skulderblikk. Sensorer kan overse raske motorsykler eller syklister.\n\n### Ryggekamera og parkeringssensor\nNår du setter bilen i revers, viser ryggekameraet området bak bilen, og sensorer piper når du nærmer deg hindringer. Dette er utmerkede hjelpemidler ved parkering, men kameraet har en begrenset vinkel og kan ha blindsoner rett under eller på sidene. Du må fortsatt gjøre en fysisk observasjon rundt hele bilen før du begynner å rygge.'
            },
            {
                title: 'Når systemene kan svikte',
                type: 'warning',
                content: 'Førerstøttesystemene er helt avhengige av sensorer, radarer og kameraer plassert rundt omkring på bilen (spesielt i fronten, på støtfangere og bak frontruten). Disse kan lett settes ut av spill av ytre forhold:\n\n- **Snø, is og sludd:** Kan dekke til radarer i grillen eller kameraet i frontruten. Bilen vil da ofte gi beskjed om at støttesystemene er utilgjengelige.\n- **Skitt, søle og veisalt:** En skitten bil kan blokkere linsene til ryggekameraet og blindsone-sensorene.\n- **Kraftig regn og tåke:** Reduserer sikten for kamerasystemene, noe som gjør det vanskelig for bilen å registrere kjøretøy eller fotgjengere.\n- **Dårlig vegoppmerking:** Snø, slaps, slitasje eller vegarbeid gjør at filholderen ikke klarer å lese kjørefeltene.\n- **Feil skiltgjenkjenning:** Skiltgjenkjenning (ISA) kan lese skilt på avkjøringsveier eller overse midlertidige fartsgrenser ved vegarbeid. Du må alltid forholde deg til de faktiske skiltene langs veien.\n\nHusk at du alltid må sjekke at sensorer og lykter er rene og fungerer før du kjører. Dette lærer du mer om i vår guide til [sikkerhetskontroll av bilen](/laeringsressurser/sikkerhetskontroll).\n\n![Bil på vintervei der snø og dårlig vegoppmerking kan gjøre at filholder, kamera og andre førerstøttesystemer fungerer dårligere.](/images/forerstottesystemer_vinter.png)\n*Snø og is kan blokkere sensorer og kameraer, og gjøre at førerstøttesystemene slutter å virke.*'
            },
            {
                title: 'Vanlige misforståelser',
                type: 'example',
                content: 'Her er tre klassiske feil mange gjør på teoriprøven når det gjelder førerstøtte:\n\n1. **«Bilen har adaptiv cruise control, så jeg kan slappe av og lese på telefonen.»**\n**Feil:** Du har det fulle føreransvaret under hele kjøringen. Du skal være konsentrert, holde hendene på rattet og være klar til å overta kontrollen umiddelbart.\n\n2. **«ABS-bremser gjør at jeg stopper raskere på glatt føre.»**\n**Feil:** På glatt føre er hovedpoenget at ABS hjelper deg å beholde styringen, ikke at bilen stopper raskere. På enkelte underlag, som løs snø eller grus, kan bremselengden faktisk bli lengre med ABS.\n\n3. **«Jeg trenger ikke å se meg over skulderen før feltbytte når jeg har blindsonevarsler.»**\n**Feil:** Blindsonevarsleren er kun et hjelpemiddel. Du har vikeplikt ved feltbytte og må alltid utføre visuell kontroll (speil + skulderblikk) for å sikre at feltet er ledig.'
            },
            {
                title: 'Slik kan spørsmål komme på teoriprøven',
                type: 'tip',
                content: 'På den ekte teoriprøven hos Statens vegvesen blir du ofte testet i din forståelse av føreransvar og praktisk bruk av systemene:\n\n- **Scenariooppgaver:** Du får beskrevet en situasjon der et støttesystem feiler (f.eks. filholderen mister linjene på grunn av snø, eller adaptiv cruise control bremser ikke for en parkert bil). Spørsmålet vil handle om hvem som har ansvaret og hva du som fører må gjøre.\n- **Faktaspørsmål om ABS og ESP:** Du må vite nøyaktig hva ABS hjelper med (beholde styring, ikke nødvendigvis kortere bremselengde) og hva ESP gjør (stabiliserer bilen ved skrens).\n- **Regelspørsmål om rygging og feltvalg:** Du blir spurt om ryggekameraet fritar deg for plikten til å observere blindsoner, eller om blindsonevarsleren erstatter sidespeil/skulderblikk.\n\nVil du sjekke om du er klar til eksamen? Gå til forsiden og [ta vår gratis teoriprøve](/) for å teste deg selv på lignende oppgaver.'
            }
        ],
        faq: [
            {
                question: 'Hva er førerstøttesystemer?',
                answer: 'Førerstøttesystemer (ADAS) er elektroniske hjelpemidler i bilen som kan varsle, hjelpe eller gripe inn i bestemte situasjoner, for eksempel ved bremsing, feltplassering, avstand eller rygging.'
            },
            {
                question: 'Er førerstøttesystemer det samme som selvkjøring?',
                answer: 'Nei. De fleste systemer i dagens vanlige biler er kun hjelpemidler (nivå 2 automasjon). Føreren må alltid følge med på veien, holde hendene på rattet og være klar til å overta styringen umiddelbart.'
            },
            {
                question: 'Hva gjør ABS?',
                answer: 'ABS (blokkeringsfrie bremser) hindrer at hjulene låser seg helt når du bremser maksimalt. Det gjør at dekkene fortsatt ruller slik at du beholder evnen til å styre unna en hindring mens du bremser.'
            },
            {
                question: 'Gjør ABS bremselengden kortere?',
                answer: 'Ikke nødvendigvis. På enkelte underlag, som løs snø eller grus, kan bremselengden bli lengre med ABS. På glatt føre er hovedpoenget at ABS hjelper deg å beholde styringen, ikke at bilen stopper raskere.'
            },
            {
                question: 'Hva gjør ESP?',
                answer: 'ESP (antiskrens) hjelper til med å holde bilen stabil dersom den begynner å skli. Systemet bremser ett eller flere hjul individuelt for å motvirke understyring eller overstyring og få bilen tilbake i riktig retning.'
            },
            {
                question: 'Kan jeg stole på filholderen?',
                answer: 'Nei, du må bruke den som et hjelpemiddel og ikke stole blindt på den. Den krever tydelig vegoppmerking og kan fungere dårlig eller slå seg helt av ved snø, slaps, slitte linjer eller i vegarbeidsområder.'
            },
            {
                question: 'Hva er det viktigste å huske om førerstøttesystemer til teoriprøven?',
                answer: 'Det viktigste er at du som fører alltid har det fulle ansvaret for kjøringen. Systemene fritar deg aldri for plikten til å tilpasse farten, holde avstand, observere trafikkbildet og gripe inn når teknologien svikter.'
            }
        ],
        miniQuiz: [
            {
                question: 'Hva er hovedoppgaven til ABS-bremser?',
                options: [
                    'Å gjøre bremselengden kortest mulig under alle forhold',
                    'Å hindre at hjulene låser seg slik at du kan styre under hard bremsing',
                    'Å holde bilen automatisk i riktig kjørefelt',
                    'Å forhindre at motoren kveles ved bråstopp'
                ],
                correct: 'Å hindre at hjulene låser seg slik at du kan styre under hard bremsing',
                explanation: 'ABS forhindrer blokkering av hjulene. Dette gjør at dekkene fortsatt roterer og kan overføre styrekrefter, slik at du kan styre unna hindringer selv under full oppbremsing.'
            },
            {
                question: 'Hva er riktig om adaptiv cruise control (ACC)?',
                options: [
                    'Den fritar føreren for ansvaret med å følge med på veien',
                    'Den kan hjelpe med å holde fart og avstand, men føreren må fortsatt være klar til å gripe inn',
                    'Den fungerer bare under lukeparkering',
                    'Den tar over all styring av bilen uansett hastighet'
                ],
                correct: 'Den kan hjelpe med å holde fart og avstand, men føreren må fortsatt være klar til å gripe inn',
                explanation: 'Adaptiv cruise control regulerer fart og avstand til kjøretøyet foran, men føreren har fortsatt 100 % ansvar for kjøringen og må gripe inn dersom systemet ikke reagerer tilstrekkelig.'
            },
            {
                question: 'Når kan filholderen (kjørefeltassistenten) fungere dårligere?',
                options: [
                    'Når vegoppmerkingen er slitt, dekket av snø eller vanskelig å lese',
                    'Når veioppmerkingen er helt tørr og nylagt asfalt',
                    'Når bilen har lite spylevæske igjen',
                    'Kun når det er mørkt ute'
                ],
                correct: 'Når vegoppmerkingen er slitt, dekket av snø eller vanskelig å lese',
                explanation: 'Filholderen bruker kamera til å registrere oppmerkingen i veien. Hvis linjene er slitt, snødekt eller vanskelige å skille fra veibanen, vil ikke systemet fungere optimalt og kan slå seg av.'
            },
            {
                question: 'Hva er riktig om ESP / antiskrens?',
                options: [
                    'Det hjelper med å stabilisere bilen ved skrensfare, men føreren må fortsatt tilpasse fart og avstand',
                    'Det gjør at du kan kjøre i samme hastighet på glatt føre som på tørr vei',
                    'Det erstatter behovet for vinterdekk på vinterføre',
                    'Det kobler ut bremsene hvis bilen begynner å skli'
                ],
                correct: 'Det hjelper med å stabilisere bilen ved skrensfare, men føreren må fortsatt tilpasse fart og avstand',
                explanation: 'ESP hjelper til med å gjenvinne kontrollen ved skrens ved å bremse enkeltvise hjul, men det opphever ikke fysikkens lover og kan ikke skape veigrep dersom farten er altfor høy etter forholdene.'
            },
            {
                question: 'Hva bør du gjøre selv om bilen din har ryggekamera?',
                options: [
                    'Stole fullt ut på skjermen og rygge uten å se deg rundt',
                    'Fortsatt bruke speil, se deg rundt bilen og fysisk kontrollere blindsoner',
                    'Rygge raskere fordi sensorene vil piping-varsle i tide',
                    'Slå av kameraet for å unngå å bli distrahert'
                ],
                correct: 'Fortsatt bruke speil, se deg rundt bilen og fysisk kontrollere blindsoner',
                explanation: 'Ryggekamera og sensorer har begrensede vinkler og kan ha blindsoner. Du har alltid det fulle ansvaret ved rygging og må sikre fri bane ved å se deg fysisk rundt.'
            }
        ],
        sources: {
            title: 'Kilder',
            type: 'text',
            content: '- Statens vegvesen: [avanserte førerstøttesystemer (ADAS)](https://www.vegvesen.no/fag/trafikk/its-portalen/its-i-statens-vegvesen/metr/forerstottesystemer/)\n- Trygg Trafikk: [kjøretøyteknologi](https://www.tryggtrafikk.no/wiki/kjoretoyteknologi/)'
        }
    }
]

export const theoryArticles: TheoryTopic[] = [
    {
        id: 'automatlappen',
        title: 'Automatlappen og elbil',
        icon: '🚗',
        shortDescription: 'Forstå kode 78, elbilens særegenheter og hva automatlappen faktisk betyr i 2026.',
        color: 'var(--apple-green)',
        seoTitle: 'Automatlappen og elbil: kode 78, regler og oppkjøring i 2026 | Teori-test.no',
        seoDescription: 'Skal du ta lappen på elbil eller automatgir? Lær hva kode 78 betyr, om du kan kjøre tilhenger, hvordan regenerering fungerer og om automatlappen er en begrensning i 2026.',
        sections: [
            {
                title: 'Kort forklart: Hva er automatlappen?',
                type: 'info',
                content: 'Automatlappen er vanlig førerkort klasse B, men oppkjøringen tas i bil med automatgir. Når du består, får du førerrett for personbil, men med kode 78 i førerkortet.\n\nDet betyr:\n• Du kan kjøre personbil med automatgir.\n• Du kan kjøre elbil, siden elbiler i praksis kjøres som automat.\n• Du kan ikke kjøre bil med manuelt gir.\n• Vil du senere kjøre manuell bil, må du ta ny oppkjøring med manuelt gir.\n\nStatens vegvesen skriver at hvis du kjører opp med automatgir, får førerkortet en kode som viser at du kun kan kjøre automatgir. Hvis du senere trenger manuell bil, må du kjøre opp på nytt med manuelt gir.'
            },
            {
                title: 'Automat eller manuell?',
                type: 'component',
                component: 'AutomatVsManuellSammenligning'
            },
            {
                title: 'Er automatlappen en begrensning i 2026?',
                type: 'text',
                content: 'For mange er svaret: mindre enn før.\n\nAutomatgir er blitt mye vanligere, og elbiler har gjort automatlappen langt mer praktisk enn den var for noen år siden. Statens vegvesen opplyste at 62 prosent av alle oppkjøringer i 2024 ble gjennomført med automatgir, mot bare 6 prosent i 2016. For klasse B var andelen 61 prosent.\n\nDet betyr ikke at manuell er ubrukelig. Det betyr bare at automat ikke lenger er “litt spesielt”. Det er blitt normalen for veldig mange.\n\nDu bør likevel vurdere manuell hvis du:\n• ofte skal låne eldre biler\n• skal kjøre varebil eller firmabil med manuelt gir\n• vil ha maksimal fleksibilitet ved bilutleie i utlandet\n• ønsker å slippe kode 78 i førerkortet\n\nDu kan fint velge automat hvis du:\n• primært skal kjøre elbil\n• vil bruke mer energi på trafikkforståelse enn giring\n• ikke har behov for manuell bil\n• vil gjøre opplæringen litt enklere i starten'
            },
            {
                title: 'Lappen på elbil: Hva er annerledes?',
                type: 'text',
                content: 'Å ta lappen på elbil ligner mye på å ta lappen i annen automatbil. Du må fortsatt kunne trafikkregler, vikeplikt, skilt, plassering, fartstilpasning, observasjon og sikker kjøring. Sensor vurderer ikke om bilen er kul og stillegående. Sensor vurderer deg.\n\nMen elbil har noen praktiske forskjeller du bør kjenne til.\n\n1. Elbil har umiddelbar kraft\nElmotoren gir kraft med en gang du trykker på pedalen. Det kan gjøre bilen lettkjørt, men også litt brå hvis du ikke er myk med høyrefoten.\n\n2. Regenerering: Bilen bremser når du slipper gassen\nMange elbiler har regenerativ bremsing. Det betyr at bilen gjenvinner energi når du slipper gasspedalen, og bruker motoren til å bremse bilen. På noen elbiler kan dette være så kraftig at bilen føles som den “bremser selv”.\n\n3. Elbiler er ofte tyngre\nElbiler har store batterier, og mange elbiler veier mer enn tilsvarende bensin- eller dieselbiler. Det påvirker blant annet bremselengde, dekk, energibruk og hvor mye bilen kan laste eller trekke. [Les om bremselengde og stopplengde](/laeringsressurser/bremselengde)'
            },
            {
                title: 'Elbil + tilhenger: Hva er reglene?',
                type: 'info',
                content: 'Du kan trekke tilhenger med elbil, men du må sjekke to ting: Hva førerkortet ditt gir deg lov til, og hva bilen faktisk er godkjent for i vognkortet. Med førerkort klasse B kan du trekke tilhenger på maks 750 kg, eller tyngre hvis samlet vekt er maks 3500 kg. [Les vår komplette tilhenger-guide](/laeringsressurser/tilhenger)'
            },
            {
                title: 'Kan du kjøre tilhenger med automatlappen?',
                type: 'warning',
                content: 'Ja, kode 78 handler om girtype, ikke om tilhenger i seg selv. Har du klasse B med kode 78, kan du kjøre bil med automatgir og tilhenger innenfor reglene for klasse B. Men bilen må være automat, og tilhengeren må være lovlig etter vognkort og førerkortklasse.'
            },
            {
                title: 'Støttesystemer i elbil: Hjelp, ikke autopilot',
                type: 'tip',
                content: 'Bilen kan hjelpe deg med adaptiv cruisekontroll og filholder, men den er ikke en kjørelærer med superkrefter. Du må fortsatt ha full kontroll. Stol ikke blindt på systemene, spesielt ved snø eller dårlig veimerking.'
            },
            {
                title: 'Bør du velge automat eller manuell?',
                type: 'text',
                content: 'Velg automat hvis du hovedsakelig skal kjøre moderne biler eller elbil. Velg manuell hvis du ønsker full fleksibilitet for eldre biler, jobb-biler eller leiebiler i utlandet.\n\nEn praktisk fordel med automatopplæringen er at den ofte koster noe mindre enn manuell. Når du slipper å bruke tid på å lære clutch og girskift, kan du bruke kjøretimene på trafikkforståelse, plassering og samhandling i stedet. Mange elever trenger derfor færre timer totalt. Det er ikke en garanti — det avhenger av eleven — men det er et reelt argument for automat hvis du primært skal kjøre moderne biler uansett.'
            },
            {
                title: 'Hvordan fjerner du kode 78?',
                type: 'info',
                content: 'Hvis du har automatlappen og senere vil kunne kjøre manuelt gir, må du kjøre opp på nytt med manuell bil. Når du består oppkjøring med manuelt gir, kan begrensningen fjernes. [Les vår guide til oppkjøringen](/laeringsressurser/oppkjoring)'
            }
        ],
        miniQuiz: [
            {
                question: 'Hva betyr kode 78 på førerkortet?',
                options: ['Du kan bare kjøre elbil', 'Du kan bare kjøre automatgir', 'Du kan ikke kjøre tilhenger', 'Du må fornye førerkortet hvert år'],
                correct: 'Du kan bare kjøre automatgir',
                explanation: 'Kode 78 betyr at førerkortet er begrenset til biler med automatgir. Du får denne koden hvis du kjører opp med automatgir.'
            },
            {
                question: 'Kan du kjøre elbil med kode 78 i førerkortet?',
                options: ['Nei, elbil krever spesielt førerkort', 'Ja, elbiler kjøres som automatbiler', 'Bare hvis elbilen er under 3500 kg', 'Nei, du trenger kode 100'],
                correct: 'Ja, elbiler kjøres som automatbiler',
                explanation: 'Elbiler har ikke manuell girkasse og kjøres som automatbiler. Du kan derfor kjøre elbil med kode 78.'
            },
            {
                question: 'Kan du trekke tilhenger med automatlappen (kode 78)?',
                options: ['Nei, kode 78 forbyr tilhenger', 'Ja, så lenge bilen er automat og du holder deg innenfor klasse B-reglene', 'Bare tilhenger under 500 kg', 'Bare med spesialgodkjenning'],
                correct: 'Ja, så lenge bilen er automat og du holder deg innenfor klasse B-reglene',
                explanation: 'Kode 78 handler om girtype, ikke tilhenger. Du kan kjøre tilhenger med automatlappen så lenge bilen er automat og du følger reglene for klasse B.'
            },
            {
                question: 'Hva er regenerativ bremsing på elbil?',
                options: ['En ekstra bremsepedal', 'Bilen bremser og gjenvinner energi når du slipper gasspedalen', 'Automatisk nødbrems', 'En type ABS-system'],
                correct: 'Bilen bremser og gjenvinner energi når du slipper gasspedalen',
                explanation: 'Regenerativ bremsing betyr at elmotoren brukes til å bremse bilen og samtidig lade batteriet. På glatt føre bør du være ekstra jevn med pedalene.'
            },
            {
                question: 'Hva må du gjøre for å fjerne kode 78 fra førerkortet?',
                options: ['Søke skriftlig til Statens vegvesen', 'Ta ny teoriprøve', 'Bestå ny oppkjøring med manuelt gir', 'Vente 2 år'],
                correct: 'Bestå ny oppkjøring med manuelt gir',
                explanation: 'For å fjerne kode 78 må du kjøre opp på nytt med manuell bil og bestå. Du trenger ikke ta teoriprøven på nytt.'
            }
        ],
        faq: [
            {
                question: 'Hva betyr kode 78 på førerkortet?',
                answer: 'Kode 78 betyr at førerkortet ditt er begrenset til biler med automatgir. Du får denne koden hvis du kjører opp med automatgir.'
            },
            {
                question: 'Kan jeg kjøre elbil med automatlappen?',
                answer: 'Ja. Elbiler kjøres som automatbiler, så du kan kjøre elbil med førerkort klasse B med kode 78.'
            },
            {
                question: 'Kan jeg kjøre manuell bil med automatlappen?',
                answer: 'Nei. Har du kode 78, kan du ikke kjøre bil med manuelt gir. Da må du først bestå ny oppkjøring med manuelt gir.'
            },
            {
                question: 'Kan jeg trekke tilhenger med automatlappen?',
                answer: 'Ja, så lenge bilen har automatgir og du holder deg innenfor reglene for klasse B, B96 eller BE. Du må også sjekke bilens vognkort.'
            },
            {
                question: 'Er automatlappen dumt hvis jeg skal jobbe med bil?',
                answer: 'Ikke nødvendigvis, men det kommer an på jobben. Noen arbeidsgivere bruker bare biler med automatgir. Andre har varebiler eller eldre biler med manuelt gir. Hvis du vil ha maksimal fleksibilitet, er manuell fortsatt tryggest.'
            },
            {
                question: 'Er elbil annerledes på oppkjøring?',
                answer: 'Ja og nei. Du vurderes etter samme grunnleggende ferdigheter: sikkerhet, trafikkforståelse, observasjon og samhandling. Men du bør være trygg på elbilens kraft, regenerering, støttesystemer og hvordan bilen oppfører seg i lav fart.'
            }
        ]
    },

    {
        id: 'sikkerhetskontroll',
        title: 'Sikkerhetskontroll klasse B: Den komplette guiden',
        icon: '🔧',
        shortDescription: 'Lær deg de tekniske kontrollspørsmålene til oppkjøringen. Slik sjekker du bremser, styring, lys og dekk på en enkel måte.',
        color: 'var(--apple-indigo)',
        seoTitle: 'Sikkerhetskontroll klasse B: spørsmål og svar til oppkjøring',
        seoDescription: 'Se vanlige spørsmål fra sensor på sikkerhetskontroll klasse B. Lær kontroll av bremser, dekk, lys, varsellamper og motorrom før oppkjøringen.',
        sections: [
            {
                title: 'Hva skjer på sikkerhetskontrollen?',
                type: 'info',
                content: 'På oppkjøringen får du en stikkprøve med én eller flere sikkerhetskontrolloppgaver. Sensor kan be deg kontrollere eller forklare noe ved bilen, for eksempel bremser, dekk, lys, styring, vognkort, væsker i motorrommet eller varsellamper.\n\nKort forklart: Du skal vise at du forstår om bilen er trygg å kjøre. Et godt svar består av tre deler: hva du kontrollerer, hvordan du kontrollerer det, og hvorfor feilen kan være farlig.'
            },
            {
                title: 'Vanlige sikkerhetskontroll-spørsmål med fasit',
                type: 'table',
                content: `<table>\n    <thead>\n        <tr>\n            <th>Sensor spør</th>\n            <th>Slik kontrollerer du</th>\n            <th>Kort fasit</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Kontroller dekktrykket</td>\n            <td>Se i vognkortet eller dørkarmen for anbefalt trykk. Bruk trykkmåler på ventilen.</td>\n            <td>Riktig trykk = trygt. Lavt trykk = dårligere grep og høyere forbruk.</td>\n        </tr>\n        <tr>\n            <td>Kontroller mønsterdybden</td>\n            <td>Bruk mønsterdybdemåler eller 20-kroningen. Minimum 1,6 mm — anbefalt 3 mm.</td>\n            <td>Under 1,6 mm er ulovlig og farlig.</td>\n        </tr>\n        <tr>\n            <td>Kontroller bremsene</td>\n            <td>Trykk bremsepedalen ned. Den skal være fast og ikke synke. Sjekk bremsevæskenivå i motorrommet.</td>\n            <td>Myk pedal = luftboble i systemet.</td>\n        </tr>\n        <tr>\n            <td>Kontroller styringen</td>\n            <td>Kjør sakte og kjenn at bilen følger rattet uten å trekke til siden.</td>\n            <td>Trekking = feil hjulstilling eller dekk.</td>\n        </tr>\n        <tr>\n            <td>Kontroller lys foran</td>\n            <td>Slå på tenning. Sjekk nærlys, fjernlys og parkeringslys visuelt foran bilen.</td>\n            <td>Defekt lys = bot. Se [lysbruk](/laeringsressurser/lysbruk-morkekjoring).</td>\n        </tr>\n        <tr>\n            <td>Kontroller bremselys</td>\n            <td>Slå på tenning. Be noen se bakpå mens du tråkker bremsepedalen.</td>\n            <td>Eller bruk refleksjonen i en vegg/garasjeport.</td>\n        </tr>\n        <tr>\n            <td>Kontroller motorolje</td>\n            <td>Trekk ut oljepinnen, tørk, sett inn igjen og sjekk nivået. Skal være mellom min og max.</td>\n            <td>For lite olje = motorskade.</td>\n        </tr>\n        <tr>\n            <td>Kontroller kjølevæske</td>\n            <td>Sjekk nivå i ekspansjonsbeholderen. Skal være mellom min og max når motoren er kald.</td>\n            <td>Aldri åpne lokket på varm motor.</td>\n        </tr>\n        <tr>\n            <td>Kontroller bremsevæske</td>\n            <td>Se nivå i beholderne under panseret. Skal være mellom min og max.</td>\n            <td>Lavt nivå kan bety slitte bremser eller lekkasje.</td>\n        </tr>\n        <tr>\n            <td>Kontroller vindusvaskervæske</td>\n            <td>Sjekk beholdernivå. Fyll på ved behov.</td>\n            <td>Tomt = dårlig sikt = farlig.</td>\n        </tr>\n        <tr>\n            <td>Kontroller varsellamper</td>\n            <td>Start bilen og sjekk at alle varsellamper slukker etter oppstart.</td>\n            <td>Lamper som lyser = feil som må sjekkes.</td>\n        </tr>\n        <tr>\n            <td>Hva betyr ABS-lampen?</td>\n            <td>Vanlig brems kan fortsatt virke, men ABS-funksjonen kan være ute av drift.</td>\n            <td>Kjør til verksted snart.</td>\n        </tr>\n        <tr>\n            <td>Hva betyr oljelampen?</td>\n            <td>Lavt oljetrykk. Stopp umiddelbart og slå av motoren.</td>\n            <td>Fortsetter du å kjøre kan motoren bli ødelagt.</td>\n        </tr>\n        <tr>\n            <td>Kontroller sikkerhetsbeltene</td>\n            <td>Dra beltet ut raskt — det skal låse seg. Sjekk at det klikker skikkelig i låsen.</td>\n            <td>Defekt belte = ikke godkjent.</td>\n        </tr>\n        <tr>\n            <td>Les av vognkortet</td>\n            <td>Finn egenvekt, tillatt totalvekt og nyttelast. Nyttelast = totalvekt minus egenvekt.</td>\n            <td>Viktig for tilhenger og lastberegning.</td>\n        </tr>\n        <tr>\n            <td>Hva er største tillatte tilhengervekt?</td>\n            <td>Se vognkortets felt for største tilhengervekt.</td>\n            <td>Avhenger av bilmodell — alltid sjekk vognkortet.</td>\n        </tr>\n    </tbody>\n</table>`
            },
            {
                title: 'Hva er sikkerhetskontroll?',
                type: 'text',
                content: 'Føreren har ansvar for at bilen er i forsvarlig og forskriftsmessig stand før kjøring. Dette følger av Vegtrafikkloven § 23. På sikkerhetskontrollen viser du at du forstår praktiske kontroller, ikke at du er bilmekaniker.\n\nLes mer hos [Statens vegvesen om oppkjøring](https://www.vegvesen.no/forerkort/ta-forerkort/oppkjoring/) og se også vår guide til [dekk, bremser og styring](/laeringsressurser/dekk-bremser-styring).'
            },
            {
                title: 'Slik svarer du sensor',
                type: 'tip',
                content: 'Når sensor spør, trenger du ikke bruke vanskelige fagord. Svar rolig og praktisk:\n\n1. Jeg kontrollerer ...\n2. Jeg ser eller kjenner etter ...\n3. Feilen er farlig fordi ...\n\nEksempel: "Jeg kontrollerer bremselysene ved å trykke inn bremsepedalen og se at lysene bak tennes. Det er viktig fordi trafikken bak må se når jeg bremser."'
            },
            {
                title: 'Interaktiv Guide: Hva sjekker du i motorrommet?',
                type: 'calculator',
                componentId: 'motorrom',
                content: 'Klikk på de ulike symbolene under for å lære deg de viktigste sjekkpunktene i motorrommet før oppkjøringen.'
            },
            {
                title: '1. Bremser',
                type: 'info',
                content: 'Bremsene er bilens viktigste sikkerhetssystem. Du kan bli bedt om å kontrollere flere deler av dette systemet.\n\nOppgave: Kontroller bremsekraftforsterkeren.\n\nSlik gjør du: Den tradisjonelle måten er å pumpe bremsepedalen 5-6 ganger mens motoren er av, til pedalen blir hard. Hold pedalen inne og start motoren. Pedalen skal da synke litt inn. På mange moderne biler med elektroniske løsninger fungerer ikke denne metoden; her må du bremse i lav fart og kjenne at bilen stopper effektivt med lite trykk på pedalen.\n\nSensors spørsmål: Er det forsvarlig å kjøre hvis den ikke virker?\n\nSvar: Nei, bremsepedalen blir veldig tung og bilen får dårligere bremseeffekt.\n\nOppgave: Kontroller om bremsene har skjevtrekk.\n\nSlik gjør du: Bygg opp litt fart (10-15 km/t) på en jevn og rett strekning, brems normalt, og hold bare løst i rattet. Bilen skal gå rett frem.\n\nSensors spørsmål: Hva kan være grunnen til skjevtrekk?\n\nSvar: Testen skal avdekke feil som gjør at hjulene bremser ulikt, noe som kan gjøre at man mister kontrollen under hard oppbremsing. (Merk at ulikt lufttrykk eller en svært sporete vei også kan gi skjevtrekk).\n\nOppgave: Varsellampe for to-krets bremsesystem.\n\nSlik gjør du: Skru på tenningen og finn den røde varsellampen med et utropstegn (!). Den skal lyse noen sekunder og så slukke.\n\nSensors spørsmål: Hva gjør du hvis lampen lyser under kjøring?\n\nSvar: Stans trygt og finn årsaken før du kjører videre, fordi den røde lampen kan indikere en alvorlig feil i bremsesystemet.'
            },
            {
                title: '2. Styring',
                type: 'info',
                content: 'Bilen skal lystre dine bevegelser presist og uten stor motstand.\n\nOppgave: Kontroller servostyringen.\n\nSlik gjør du: Prøv å svinge på rattet mens motoren er slått av; du vil raskt møte motstand og rattet vil føles tungt. Hold presset mot rattet mens du starter motoren. Rattet skal da gi etter og motstanden forsvinne.\n\nSensors spørsmål: Er det forsvarlig å kjøre dersom den ikke fungerer?\n\nSvar: På mange moderne biler blir styringen så tung at det regnes som uforsvarlig. En rød varsellampe for styringen indikerer også at man ikke skal kjøre bilen.\n\nOppgave: Sjekk at bilen er retningsstabil.\n\nSlik gjør du: Kjør i lav fart (ca. 20 km/t) rett frem på et flatt underlag, løsne grepet forsiktig og se om bilen fortsetter rett frem. Kjør deretter ut av en sving, slipp opp grepet, og sjekk at rattet går tilbake av seg selv (selvoppretting).'
            },
            {
                title: '3. Dekk og hjul',
                type: 'info',
                content: 'Dekkene er bilens eneste kontakt med asfalten, og tilstanden deres er et svært vanlig eksamensspørsmål.\n\nOppgave: Kontroller slitasjen på hjulene.\n\nSlik gjør du: Se på mønsterdybden ytterst, innerst og på midten av dekket (slitebanen) og vurder om det er jevnt slitt.\n\nSensors spørsmål: Hva kan ulik slitasje fortelle deg?\n\nSvar: Er dekket mest slitt på midten, har du kjørt med for høyt lufttrykk. Er det slitt både innerst og ytterst, har lufttrykket vært for lavt. Hvis dekket kun er slitt på den ene siden, tyder det på at feil i hjulopphenget gjør at hjulet ikke ruller riktig på veien.\n\nOppgave: Mål mønsterdybden.\n\nSlik gjør du: Bruk et måleinstrument eller finn dekkets egne slitasjeindikatorer for å se at gummien ikke er slitt helt ned.\n\nSensors spørsmål: Hva er kravene?\n\nSvar: Minstekravet til sommerdekk er 1,6 mm, og for vinterdekk er kravet minimum 3,0 mm.'
            },
            {
                title: '4. Lys og Sikt',
                type: 'info',
                content: 'Gode lys er avgjørende for at du ser andre, og at andre ser deg.\n\nOppgave: Kontroller bremselysene.\n\nSlik gjør du: Bruk en varseltrekantboks eller en snøkost til å skyve inn bremsepedalen, og flytt setet frem slik at det holder objektet på plass mot pedalen. Gå ut og sjekk at alle tre bremselysene bak virker.\n\nSensors spørsmål: Er det forsvarlig å kjøre dersom bremselysene ikke virker?\n\nSvar: Nei. Trafikken bak vil ikke oppfatte at du bremser, noe som raskt kan medføre farlige situasjoner.\n\nOppgave: Kontroller parkeringslyset.\n\nSlik gjør du: Vri lysbryteren til symbolet for parkeringslys. Gå ut og sjekk.\n\nSensors spørsmål: I hvilke situasjoner er det viktig å bruke parkeringslyset?\n\nSvar: Ved stans i mørket for å slippe av passasjerer. Dette gjør at du ikke forveksles med en kjørende bil, slik at andre kan passere deg med fjernlysene på og lettere se fotgjengerne som går ut av bilen.\n\nOppgave: Nødsignallyset (varselblink).\n\nSensors spørsmål: I hvilke situasjoner vil du bruke nødsignallyset?\n\nSvar: Ved nødstopp og trafikkuhell for å varsle andre trafikanter. Et viktig tilleggspoeng her er å huske å slå av bilens andre lys (spesielt i mørket) slik at varselblinkene synes best mulig.'
            },
            {
                title: '5. Motorrom og Sikkerhetsutstyr',
                type: 'warning',
                content: 'Oppgave: Sjekk at batteriet sitter fast.\n\nSlik gjør du: Åpne panseret, ta et godt tak i batteriet (gjerne i håndtakene på toppen) og beveg det frem og tilbake for å kjenne at det sitter stramt.\n\nSensors spørsmål: Hva er risikoen med et løst batteri?\n\nSvar: Et løst batteri kan forårsake kortslutninger og tretthetsbrudd i ledningene. Det inneholder i tillegg batterisyre som kan gjøre stor skade på bilen dersom batteriet velter og syren renner ut.\n\nOppgave: Kontroller sikkerhetsbeltene.\n\nSlik gjør du: Dra beltet helt ut for å se etter flisete kanter eller skader i stoffet. Dra hardt i beltet for å sjekke at beltestrammeren låser seg, og slipp det for å se at rullen trekker beltet raskt tilbake.\n\nSensors spørsmål: Hva er risikoen ved slappe ruller?\n\nSvar: Beltet vil ikke holde seg godt nok inntil kroppen, og vil dermed ikke fungere som det skal ved en bråstopp eller ulykke.\n\nOppgave: Airbag.\n\nSensors spørsmål: Har det noen betydning for hvem du plasserer i forsetet når bilen har airbag?\n\nSvar: Barn i bakovervendt barnesete skal aldri sitte foran en aktiv airbag, fordi airbagen utløses med en så voldsom kraft at barnet og setet vil bli skadet. Personer under 140 cm bør heller ikke sitte foran en aktiv airbag på grunn av airbagens treffpunkt.'
            },
            {
                title: 'Test deg selv: Det interaktive dashbordet',
                type: 'calculator',
                componentId: 'dashboard',
                content: 'På oppkjøringen forventes det at du forstår den grunnleggende logikken bak varsellampene, og spesielt fargekoden. Rødt lys betyr at du må stanse bilen på et trygt sted og slå av motoren. Gult lys betyr som regel at du kan fortsette kjøringen, men at bilen må kontrolleres. Prøv simulatoren under for å teste refleksene dine.\n\n[Les vår komplette guide til oppkjøringen](/laeringsressurser/oppkjoring)'
            },
            {
                title: 'Typiske feil på sikkerhetskontrollen',
                type: 'warning',
                content: 'Mange gjør sikkerhetskontrollen vanskeligere enn den er. Sensor forventer ikke at du er bilmekaniker, men du må vise praktisk forståelse.\n\nVanlige feil:\n- Bare peke uten å forklare hvorfor kontrollen er viktig.\n- Si at du ville kjørt videre med rød varsellampe.\n- Blande varsellamper og kontrollamper.\n- Glemme at dekk, bremser, lys og sikt handler om trafikksikkerhet.\n- Ikke kunne forklare hvor olje, kjølevæske, bremsevæske og spylervæske finnes.\n\nLes også om [bilens lys](/laeringsressurser/bilens-lys), [sikkerhetsutstyr](/laeringsressurser/sikkerhetsutstyr) og [vognkort og vekter](/laeringsressurser/vognkort-vekter).'
            }
        ],
        faq: [
            {
                question: 'Hva er sikkerhetskontroll på oppkjøring?',
                answer: 'Sikkerhetskontroll er delen av oppkjøringen der sensor ber deg kontrollere eller forklare noe ved bilen. Det kan handle om bremser, dekk, lys, styring, vognkort, væsker i motorrommet eller varsellamper.'
            },
            {
                question: 'Hvilke spørsmål kan sensor stille på sikkerhetskontroll klasse B?',
                answer: 'Sensor kan spørre hvordan du kontrollerer bremser, bremselys, dekk, styring, varsellamper, olje, spylervæske, bremsevæske, kjølevæske, sikkerhetsbelter eller opplysninger i vognkortet.'
            },
            {
                question: 'Må jeg kunne alt i motorrommet til oppkjøringen?',
                answer: 'Nei, men du bør kjenne de viktigste punktene: olje, spylervæske, kjølevæske, bremsevæske og batteri. Du bør også kunne forklare hvorfor kontrollen er viktig.'
            },
            {
                question: 'Hva skjer hvis jeg svarer feil på sikkerhetskontrollen?',
                answer: 'En liten feil betyr ikke automatisk stryk, men sikkerhetskontrollen er en del av helhetsvurderingen. Alvorlig manglende forståelse for bremser, styring eller varsellamper kan trekke ned.'
            },
            {
                question: 'Hva betyr varsellampe for tokrets bremsesystem?',
                answer: 'Den kan bety feil i bremsesystemet, lav bremsevæske eller at parkeringsbremsen ikke er helt løst. Hvis lampen lyser under kjøring, må du stanse trygt og finne årsaken.'
            },
            {
                question: 'Hvordan kontrollerer jeg bremsene før kjøring?',
                answer: 'Du kan kjenne at bremsepedalen har fast motstand, se etter varsellamper og teste bremsene forsiktig ved lav fart. Bilen skal bremse jevnt og ikke trekke tydelig til én side.'
            },
            {
                question: 'Hva bør jeg kunne om dekk på sikkerhetskontrollen?',
                answer: 'Du bør kunne sjekke mønsterdybde, lufttrykk, synlige skader og om dekkene passer årstid og bil. Dårlige dekk gir dårligere veigrep og lengre bremselengde.'
            }
        ],
        miniQuiz: [
            {
                question: 'Hva er hovedpoenget med sikkerhetskontrollen på oppkjøringen?',
                options: ['Å vise at du kan kontrollere og forklare om bilen er trygg å kjøre', 'Å vise at du kan reparere bilen selv', 'Å pugge alle tekniske deler i motoren', 'Å finne ut hvor fort bilen kan kjøre'],
                correct: 'Å vise at du kan kontrollere og forklare om bilen er trygg å kjøre',
                explanation: 'Sensor vil se at du forstår enkle kontroller og hvorfor feil kan være farlige.'
            },
            {
                question: 'Hva bør du gjøre hvis rød varsellampe for bremsesystemet lyser under kjøring?',
                options: ['Stanse trygt og finne årsaken før du kjører videre', 'Kjøre videre hvis bilen virker normal', 'Skru av og på lysene', 'Bare kontrollere dekktrykket'],
                correct: 'Stanse trygt og finne årsaken før du kjører videre',
                explanation: 'Røde varsellamper kan bety alvorlig feil. Bremsesystemet er kritisk for sikkerheten.'
            },
            {
                question: 'Hva er et godt svar hvis sensor ber deg kontrollere bremselys?',
                options: ['Jeg sjekker at bremselysene tennes når bremsepedalen trykkes inn', 'Jeg ser bare om frontlysene virker', 'Jeg trenger ikke sjekke bremselys på dagtid', 'Jeg trykker på hornet'],
                correct: 'Jeg sjekker at bremselysene tennes når bremsepedalen trykkes inn',
                explanation: 'Bremselys varsler trafikken bak deg om at du bremser.'
            },
            {
                question: 'Hva bør du sjekke på dekkene?',
                options: ['Mønsterdybde, skader og lufttrykk', 'Bare fargen på felgene', 'Bare om bilen står rett', 'Bare om dekkene er rene'],
                correct: 'Mønsterdybde, skader og lufttrykk',
                explanation: 'Dekkene påvirker veigrep, bremselengde og styring.'
            },
            {
                question: 'Hva er en vanlig feil på sikkerhetskontroll?',
                options: ['Å forklare hva du sjekker og hvorfor', 'Å bare peke uten å forklare hvorfor kontrollen er viktig', 'Å svare rolig og praktisk', 'Å koble kontrollen til trafikksikkerhet'],
                correct: 'Å bare peke uten å forklare hvorfor kontrollen er viktig',
                explanation: 'Et godt svar viser både hva du kontrollerer og hvorfor det har betydning for sikkerheten.'
            }
        ]
    },

    {
        id: 'oppkjoring',
        title: 'Oppkjøring klasse B: Komplett guide',
        icon: '🚗',
        shortDescription: 'Du har bestått teoriprøven – nå er det bare oppkjøringen igjen. Lær hva det koster, hva som skjer på sikkerhetskontrollen og hva sensor faktisk ser etter. Ekspert-tips som hjelper deg bestå på første forsøk.',
        color: 'var(--apple-orange)',
        seoTitle: 'Oppkjøring klasse B: slik består du førerprøven',
        seoDescription: 'Se hvordan oppkjøring klasse B foregår, hva sensor vurderer, vanlige feil, sikkerhetskontroll og hvordan du forbereder deg best mulig.',
        sections: []
    },

    {
        id: 'stroket-teoriproven',
        title: 'Strøket på teoriprøven? Her er grunnen og slik består du neste gang',
        icon: '🎓',
        shortDescription: '43% stryker på teoriprøven hvert år. Lær hvorfor så mange stryker, hva du må gjøre annerledes, og hvordan du består på neste forsøk.',
        color: 'var(--apple-indigo)',
        seoTitle: 'Strøket på teoriprøven? Her er grunnen og slik består du neste gang',
        seoDescription: '43% stryker på teoriprøven hvert år. Lær hvorfor så mange stryker, hva du må gjøre annerledes, og hvordan du består på neste forsøk.',
        sections: [
            {
                title: 'Hvorfor stryker så mange?',
                type: 'text',
                content: 'Hvert år stryker over 90 000 nordmenn på teoriprøven. Det er ikke fordi de er dårlige sjåfører — det er fordi de forbereder seg på feil måte.\n\nHvis du nettopp har fått beskjeden "ikke bestått", er du i godt selskap. Og du har to uker på deg til å gjøre det annerledes.\n\nKjøreskolelærer Andreas Amundsen ved Wright trafikkskole i Porsgrunn har sett mønsteret many ganger: folk leser for å bestå, ikke for å forstå. Han peker på at overgangen fra lærebøker til apper har gjort at mange fokuserer på å trykke riktig svar fremfor å faktisk forstå trafikkreglene.\n\nEn annen overraskende faktor: mange elever bruker bare 15–20 minutter på en prøve de har 90 minutter til rådighet. Det er nok til å trykke seg gjennom 45 spørsmål — men ikke nok til å tenke seg om.\n\nStatens vegvesen har i tillegg innført et nytt digitalt system kalt eTeori, som gjør det vanskeligere å pugge seg til bestått. Systemet bruker større variasjon i spørsmålsstilling og oppgaveformer. Prosjektleder Gunn Marit Høistad i Statens vegvesen sa det rett ut: målet er at det skal lønne seg å forstå pensum fremfor å bare øve seg på å bestå prøven.'
            },
            {
                title: 'Hva skjer etter stryk?',
                type: 'warning',
                content: 'Du må vente to uker før du kan ta teoriprøven på nytt. Du må bestille ny time og betale ny prøveavgift — sjekk gjeldende pris på vegvesen.no. Det er ingen grense på antall forsøk, men stryk koster deg både tid og penger.\n\nI Vestfold og Telemark strøk 46% av alle som tok prøven i 2024 — omtrent på linje med landsgjennomsnittet på 47%.'
            },
            {
                title: 'De vanligste feilene — og hva du gjør med dem',
                type: 'info',
                content: 'Ifølge Amundsen er dette de typiske fallgruvene:\n\n• **Bremselengde og stopplengde** krever at du kan bruke litt matematikk, ikke bare gjenkjenne et svar du har sett før. Mange vet ikke at bremselengden firedobles når farten dobles. Bruk [vår interaktive bremselengde-kalkulator](/laeringsressurser/bremselengde) for å forstå sammenhengen mellom fart og stopplengde — det er langt mer effektivt enn å pugge tabeller.\n\n• **Vikepliktregler** i kryss og rundkjøringer er det temaet flest bommer på. Det handler ikke om å huske reglene utenat — det handler om å forstå logikken bak hvem som har forkjørsrett og hvorfor. Test deg selv med [vår gratis vikeplikt-quiz](/quiz/vikeplikt) — 10 spørsmål som dekker de vanligste situasjonene på teoriprøven.\n\n• **Trafikkskilt** du sjelden ser i hverdagen er en klassisk felle. Mange kjenner igjen de vanlige skiltene, men sliter med de mer uvanlige. [Vår skilt-quiz](/quiz/skilt) og [trafikkskilt-artikkel](/laeringsressurser/skilt) gir deg målrettet trening på nettopp dette.'
            },
            {
                title: 'Slik gjør du det annerledes neste gang',
                type: 'tip',
                content: 'De to ukene du har til rådighet er nok — hvis du bruker dem riktig.\n\n1. **Les for å forstå, ikke for å bestå**: Som Amundsen sier: målet er ikke å trykke riktig — det er å forstå hvorfor det er riktig. [Myndighetspyramiden](/laeringsressurser/myndighetspyramiden) er et system med logikk. Vikeplikt handler om hvem som er i fare. Bremselengde er fysikk og matematikk. Forstår du prinsippet, klarer du spørsmålet uansett hvordan det er formulert i eTeori.\n\n2. **Bruk god tid på selve prøven**: Du har 90 minutter. Bruk dem. Les hvert spørsmål grundig og tenk gjennom hvert alternativ. De som stryker bruker gjennomsnittlig under 20 minutter. De som består bruker tiden de har.\n\n3. **Øv målrettet — ikke generelt**: Ikke generaløv — finn ut hva du er usikker på og angrip det. Hvis du bommet på vikeplikt, ta vikeplikt-quizen. Hvis du slet med bremselengde, bruk kalkulatoren til du forstår matematikken. Målrettet øving på svake punkter er langt mer effektivt enn å ta tilfeldige prøver på nytt.\n\n4. **Test deg selv under realistiske forhold**: Ta hele prøver på 45 spørsmål med tidsbegrensning. Nervøsitet og tidspress er faktorer — tren på dem. [Vår gratis fullprøve](/quiz?mode=eksamen) er bygget opp nøyaktig som den offisielle prøven hos Statens vegvesen.'
            }
        ],
        faq: [
            {
                question: 'Hvor lenge må jeg vente etter stryk på teoriprøven?',
                answer: 'To uker fra prøvedatoen.'
            },
            {
                question: 'Hva koster det å ta teoriprøven på nytt?',
                answer: 'Teoriprøven koster 480 kr (2026). Du betaler ny prøveavgift hver gang du tar prøven.'
            },
            {
                question: 'Hvor mange ganger kan jeg ta teoriprøven?',
                answer: 'Det er ingen grense på antall forsøk, men du må vente to uker mellom hver gang.'
            },
            {
                question: 'Hva er de vanligste grunnene til stryk?',
                answer: 'For kort forberedelsestid, pugging uten forståelse, og å bruke for lite tid på selve prøven.'
            },
            {
                question: 'Hvilke temaer bør jeg fokusere på?',
                answer: 'Vikeplikt, bremselengde og trafikkskilt er de vanligste feilkildene. Vi har gratis quiz og kalkulatorer for alle tre.'
            }
        ]
    },

    {
        id: 'ovingskjoring',
        title: 'Øvelseskjøring klasse B: regler, krav og tips',
        icon: '🚗',
        shortDescription: 'Lær kravene til øvelseskjøring klasse B: alder, trafikalt grunnkurs, ledsager, L-skilt, ekstra speil, ansvar og smart mengdetrening.',
        color: 'var(--apple-green)',
        seoTitle: 'Øvelseskjøring klasse B: regler, ledsager og L-skilt',
        seoDescription: 'Se krav til øvelseskjøring klasse B: alder, trafikalt grunnkurs, ledsager, L-skilt, ekstra speil, ansvar og tips til trygg mengdetrening.',
        sections: [
            {
                title: 'Hva er øvelseskjøring?',
                type: 'text',
                content: 'Øvelseskjøring, ofte kalt øvingskjøring, er privat kjøretrening med en godkjent ledsager. For klasse B må du vite kravene til elev, ledsager og bil før dere starter. Her får du en enkel oversikt over reglene, hva bilen må ha, hvem som har ansvaret, og hvordan dere øver smart fram mot oppkjøringen.'
            },
            {
                title: 'Kort forklart',
                type: 'info',
                content: 'For å øvelseskjøre med personbil må du som hovedregel være minst 16 år. Er du under 25 år, må du ha fullført trafikalt grunnkurs og ha med øvelseskjøringsbevis og legitimasjon. Ledsager må være minst 25 år og ha hatt førerkort klasse B sammenhengende i minst 5 år. Bilen skal ha rød L på hvit bakgrunn bak på bilen, ekstra speil for ledsager og være i forsvarlig stand. Les mer hos [Statens vegvesen om øvelseskjøring med personbil](https://www.vegvesen.no/forerkort/ta-forerkort/ovelseskjoring/ovelseskjoring-i-de-ulike-forerkortklassene/personbil/).'
            },
            {
                title: 'Krav før dere starter',
                type: 'table',
                content: '<div class="responsive-theory-table-wrapper" style="margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Tema</th><th style="padding: 12px 8px;">Krav</th><th style="padding: 12px 8px;">Typisk feil</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Elev</td><td style="padding: 12px 8px;">Minst 16 år. Under 25 år må ha fullført trafikalt grunnkurs og ha med øvelseskjøringsbevis og legitimasjon.</td><td style="padding: 12px 8px;">Glemmer bevis eller legitimasjon.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Over 25 år</td><td style="padding: 12px 8px;">Kan øvelseskjøre uten å ha tatt hele trafikalt grunnkurs, men må ha gyldig legitimasjon.</td><td style="padding: 12px 8px;">Tror alle over 25 har samme krav som yngre elever.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Ledsager</td><td style="padding: 12px 8px;">Minst 25 år og hatt førerkort klasse B sammenhengende i minst 5 år.</td><td style="padding: 12px 8px;">Bruker ledsager som ikke oppfyller 5-årskravet.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Ansvar</td><td style="padding: 12px 8px;">Ledsager regnes som ansvarlig fører under øvelseskjøringen.</td><td style="padding: 12px 8px;">Ledsager følger ikke godt nok med.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Bil</td><td style="padding: 12px 8px;">Klasse B, tillatt totalvekt maks 3500 kg, forsvarlig stand og ekstra speil for ledsager.</td><td style="padding: 12px 8px;">Mangler ekstra speil.</td></tr><tr><td style="padding: 12px 8px;">L-skilt</td><td style="padding: 12px 8px;">Godt synlig rød L på hvit bakgrunn bak på bilen, kun under øvelseskjøring.</td><td style="padding: 12px 8px;">Lar L-skiltet stå på etter økten.</td></tr></tbody></table></div>'
            },
            {
                title: 'Krav til deg som elev',
                type: 'info',
                content: 'Du må være minst 16 år for å øvelseskjøre med personbil. Er du under 25 år, må du ha fullført trafikalt grunnkurs før du starter. Ta alltid med legitimasjon og øvelseskjøringsbevis når du kjører.'
            },
            {
                title: 'Krav til ledsageren',
                type: 'warning',
                content: 'Ledsageren må være minst 25 år, ha hatt førerkort klasse B sammenhengende i minst 5 år og sitte ved siden av deg. Ledsager regnes som ansvarlig fører og må være egnet til å kjøre: ikke ruspåvirket, syk, trøtt eller uoppmerksom. Telefonen bør ligge bort, og ledsageren må følge aktivt med.'
            },
            {
                title: 'Krav til bilen',
                type: 'info',
                content: 'Bilen må være i forsvarlig stand, ha ekstra speil for ledsager og rød L på hvit bakgrunn godt synlig bak på bilen. Sjekk også forsikring, lys, bremser, speil og sikkerhetsbelter før dere starter. Øver du med automatgir og kjører opp med automat, får du automatkode på førerkortet.'
            },
            {
                title: 'Slik øver dere smart',
                type: 'tip',
                content: 'Start på rolige steder og øk vanskelighetsgraden gradvis. Begynn med igangsetting, bremsing, giring, plassering og parkering. Gå deretter videre til boligfelt, kryss, [rundkjøringer](/laeringsressurser/rundkjoring), landevei, bykjøring, mørke og krevende føre. Korte, planlagte økter er ofte bedre enn lange turer uten mål. Avtal før økten hva dere skal trene på, og snakk kort om hva som gikk bra etterpå.'
            },
            {
                title: 'Teori + praksis = best forberedt',
                type: 'tip',
                content: 'Øvelseskjøring gir praktisk erfaring, men god trafikal forståelse starter med teorien. Mellom kjøreøktene bør du øve på [vikeplikt](/laeringsressurser/vikeplikt), [trafikkskilt](/laeringsressurser/skilt), [sikkerhetskontroll](/laeringsressurser/sikkerhetskontroll) og vanlige trafikkregler. Når du nærmer deg førerprøven, les vår guide til [oppkjøring klasse B](/laeringsressurser/oppkjoring).'
            }
        ],
        faq: [
            {
                question: 'Når kan jeg begynne å øvelseskjøre med bil?',
                answer: 'Du kan begynne å øvelseskjøre med personbil fra du er 16 år. Er du under 25 år, må du ha fullført trafikalt grunnkurs først.'
            },
            {
                question: 'Hva må jeg ha med når jeg øvelseskjører?',
                answer: 'Du må ha med legitimasjon med bilde. Er du under 25 år, må du også ha øvelseskjøringsbevis eller bevis for fullført trafikalt grunnkurs.'
            },
            {
                question: 'Hvem kan være ledsager ved øvelseskjøring?',
                answer: 'Ledsager må være minst 25 år og ha hatt førerkort klasse B sammenhengende i minst 5 år. Ledsager må også være egnet til å kjøre og følge aktivt med.'
            },
            {
                question: 'Hvem har ansvaret under øvelseskjøring?',
                answer: 'Ledsager regnes som ansvarlig fører under øvelseskjøringen, selv om eleven sitter bak rattet.'
            },
            {
                question: 'Må bilen ha L-skilt og ekstra speil?',
                answer: 'Ja. Bilen skal ha godt synlig rød L på hvit bakgrunn bak på bilen og ekstra speil for ledsager.'
            },
            {
                question: 'Kan jeg øvelseskjøre med passasjerer?',
                answer: 'Ja, men bare når eleven er trygg nok og ledsager vurderer at det er forsvarlig. I starten er det ofte best å kjøre uten passasjerer.'
            },
            {
                question: 'Kan jeg øvelseskjøre med automatgir?',
                answer: 'Ja. Du kan øvelseskjøre med automatgir, men hvis du kjører opp med automatgir får du førerkort med kode for automat.'
            }
        ],
        miniQuiz: [
            {
                question: 'Hvor gammel må du være for å øvelseskjøre med personbil?',
                options: ['15 år', '16 år', '17 år', '18 år'],
                correct: '16 år',
                explanation: 'Du kan begynne å øvelseskjøre med personbil når du er 16 år, så lenge kravene ellers er oppfylt.'
            },
            {
                question: 'Hva er kravet til ledsager?',
                options: ['Minst 21 år og hatt førerkort i 2 år', 'Minst 25 år og hatt klasse B sammenhengende i minst 5 år', 'Bare gyldig førerkort uansett alder', 'Må være trafikklærer'],
                correct: 'Minst 25 år og hatt klasse B sammenhengende i minst 5 år',
                explanation: 'Dette er hovedkravet til ledsager ved privat øvelseskjøring klasse B.'
            },
            {
                question: 'Hvor skal L-skiltet være?',
                options: ['Foran på bilen', 'Godt synlig bak på bilen', 'I frontruten', 'Det er valgfritt'],
                correct: 'Godt synlig bak på bilen',
                explanation: 'L-skiltet skal være godt synlig bak på bilen under øvelseskjøringen.'
            },
            {
                question: 'Hva må bilen ha for ledsager?',
                options: ['Ekstra speil', 'Ekstra pedalsett', 'Taklys', 'Varseltrekant på dashbordet'],
                correct: 'Ekstra speil',
                explanation: 'Ledsager skal ha ekstra speil slik at han eller hun har oversikt bakover.'
            },
            {
                question: 'Hvem regnes som ansvarlig fører under privat øvelseskjøring?',
                options: ['Eleven', 'Ledsager', 'Bileier', 'Trafikkstasjonen'],
                correct: 'Ledsager',
                explanation: 'Ledsager regnes som ansvarlig fører under privat øvelseskjøring.'
            }
        ]
    },

    {
        id: 'tips-eksamen',
        title: 'Hvordan bestå teoriprøven på første forsøk (klasse B)',
        icon: '💡',
        shortDescription: 'Å bestå teoriprøven handler ikke bare om å pugge flest mulig spørsmål. Du må forstå hvorfor reglene finnes, kjenne igjen typiske feller og øve på en måte som ligner den ekte prøven.',
        color: 'var(--apple-yellow)',
        seoTitle: 'Bestå teoriprøven – tips for klasse B | Teori-test.no',
        seoDescription: 'Slik øver du smartere til teoriprøven klasse B. Få fakta om 45 spørsmål, maks 7 feil, pris, vanlige feller, prøvedagen og miniQuiz.',
        sections: [
            {
                title: 'Kort forklart: Slik øker du sjansen for å bestå',
                type: 'text',
                content: 'Det viktigste er dette:\n1. Øv på full prøve med 45 spørsmål.\n2. Gå gjennom feilene dine etter hver prøve.\n3. Prioriter temaene du bommer mest på.\n4. Lær reglene bak svarene, ikke bare riktig alternativ.\n5. Ta prøven når du jevnlig klarer maks 7 feil.\n\nPå [Teori-test.no](/) kan du øve gratis med full prøve, temaprøver og forklaringer som hjelper deg å forstå hvorfor svaret er riktig.'
            },
            {
                title: 'Fakta om teoriprøven klasse B',
                type: 'info',
                content: 'For klasse B gjelder dette:\n• Antall spørsmål: 45 spørsmål\n• Krav for å bestå: Minst 38 riktige\n• Maks antall feil: 7 feil\n• Tid: 90 minutter\n• Pris: 480 kr hos Statens vegvesen fra 1. februar 2026\n• Ved stryk: Du kan ta ny prøve tidligst etter 2 uker\n• Gyldighet: Bestått teoriprøve er gyldig i 3 år\n• Når kan du ta prøven?: Tidligst 6 måneder før alderskravet, altså 17,5 år for klasse B\n\nDu må bestille time hos Statens vegvesen og ta med gyldig legitimasjon. Møt heller litt tidlig enn å starte prøven med puls som en nødblink.'
            },
            {
                title: 'Hva bør du øve mest på?',
                type: 'text',
                content: 'Noen temaer går igjen fordi de tester forståelse, ikke bare hukommelse.\n\n**Vikeplikt og høyreregelen**\nVikeplikt er et av de viktigste temaene. Du bør kunne høyreregelen, vikepliktskilt, rundkjøringer, gangfelt, buss fra holdeplass og utkjøring fra parkering eller privat vei.\nLes mer: [komplett guide til vikeplikt](/laeringsressurser/vikeplikt)\n\n**Skilt og vegoppmerking**\nDu må kjenne igjen skilt, men også forstå hva de betyr i praksis. Sperrelinjer, vikelinjer, stopplinjer og kjørefeltpiler kan være avgjørende i bildeoppgaver.\nLes mer: [guide til trafikkskilt](/laeringsressurser/skilt) og [veimerking](/laeringsressurser/veimerking)\n\n**Bremselengde og reaksjonstid**\nDette er klassiske teoriprøve-temaer. Du bør forstå forskjellen på reaksjonslengde, bremselengde og stopplengde, og hvordan fart, føre og dekk påvirker risikoen.\nLes mer: [kalkulator for bremselengde](/laeringsressurser/bremselengde)\n\n**Lys, mørke og sikt**\nMørkekjøring, refleks, nærlys, fjernlys og tåkelys handler om å se og bli sett. Husk at moderne autolys ikke alltid betyr at baklysene er tent.\n\n**Sikkerhetskontroll og kjøretøy**\nDu bør kunne grunnleggende kontroll av dekk, lys, bremser, varsellamper og sikkerhetsutstyr. Dette er nyttig både til teoriprøven og oppkjøringen.'
            },
            {
                title: 'Vanlige feil på teoriprøven',
                type: 'warning',
                content: 'Mange feil kommer ikke av at eleven ikke kan trafikkreglene, men av at spørsmålet leses for raskt.\n\nSe spesielt etter ord som:\n- ikke\n- alltid\n- aldri\n- må\n- kan\n- bør\n- unntatt\n\nEt spørsmål kan virke lett, men ett lite ord kan snu hele betydningen.\n\nEksempel: "Du kan alltid kjøre forbi en syklist hvis du holder god avstand."\nDette høres nesten riktig ut, men "alltid" gjør påstanden feil. Du må også ha fri sikt, nok plass, riktig fart og ingen hindringer som gjør forbikjøringen farlig.'
            },
            {
                title: 'Slik bør du øve de siste 7 dagene',
                type: 'tip',
                content: '**7–5 dager før prøven**\nTa en full prøve og finn ut hvilke temaer du faktisk sliter med. Ikke bruk all tiden på det du allerede kan.\nFokuser på: vikeplikt, skilt og oppmerking, fart og bremselengde, rus, tretthet og reaksjonstid, og sikkerhetskontroll.\n\n**4–2 dager før prøven**\nTa flere korte økter. Gå gjennom feilene dine nøye. Målet er ikke bare å se riktig svar, men å forstå hvorfor de andre alternativene er feil.\n\n**Dagen før prøven**\nTa én full prøve. Hvis du består komfortabelt, stopp mens hjernen fortsatt er samarbeidsvillig. Sov godt. Ikke sitt oppe til klokken 02 og pugger stopplengde med panikk i blikket.\n\n**På prøvedagen**\nMøt uthvilt, spis litt på forhånd og ha med legitimasjon. Les hvert spørsmål rolig. Bruk tiden du har. 90 minutter er mer enn nok for de fleste.'
            },
            {
                title: 'På selve prøven: slik tenker du',
                type: 'text',
                content: 'Når du får et spørsmål, bruk denne rekkefølgen:\n1. Hva spør de egentlig om?\n2. Finnes det skilt, lys eller oppmerking i bildet?\n3. Er det noen myke trafikanter?\n4. Hvilket svar gir lavest risiko?\n5. Kan noen av alternativene elimineres?\n\nHvis du er usikker, velg ofte det tryggeste og mest forutsigbare alternativet. Teoriprøven tester i stor grad om du tenker trafikksikkert.'
            },
            {
                title: 'Hvis du stryker',
                type: 'info',
                content: 'Hvis du stryker, må du vente minst 2 uker før du kan ta ny teoriprøve. Det viktigste er å bruke perioden riktig.\n\nIkke bare ta samme type prøve om og om igjen. Se på hvilke temaer du bommet på, og øv målrettet. Hvis du for eksempel bommer på vikeplikt og skilt, hjelper det lite å bare øve på promille og miljø.\n\nStryk er kjedelig, men det er også veldig konkret: det viser deg hva du bør øve på før neste forsøk.'
            },
            {
                title: 'Når er du klar?',
                type: 'text',
                content: 'Du er trolig klar når du:\n- består flere fullprøver på rad\n- har maks 5–6 feil, ikke akkurat 7 hver gang\n- forstår hvorfor svarene er riktige\n- kjenner igjen typiske bildeoppgaver\n- ikke blir stresset av vanskelige formuleringer\n\nDa har du et godt utgangspunkt for å bestå den ekte teoriprøven. [Ta en gratis øvingsprøve nå for å sjekke om du er klar](/quiz?mode=eksamen).'
            },
            {
                title: 'Kildeinformasjon',
                type: 'text',
                content: 'Kilde for gjennomføring, regelverk og priser i denne guiden er hentet direkte fra [Statens vegvesen sine offisielle nettsider](https://www.vegvesen.no/).'
            }
        ],
        miniQuiz: [
            {
                question: 'Hvor mange feil kan du ha på teoriprøven for klasse B?',
                options: ['5 feil', '7 feil', '10 feil', '12 feil'],
                correct: '7 feil',
                explanation: 'Du får 45 spørsmål og må ha minst 38 riktige. Det betyr maks 7 feil.'
            },
            {
                question: 'Hva er den smarteste måten å øve på?',
                options: ['Bare pugge riktige svar', 'Bare lese skiltlisten én gang', 'Øve på full prøve og gå gjennom feilene', 'Kun øve dagen før prøven'],
                correct: 'Øve på full prøve og gå gjennom feilene',
                explanation: 'Du lærer mest når du ser hvilke temaer du bommer på og forstår hvorfor.'
            },
            {
                question: 'Hva bør du gjøre hvis et spørsmål virker lett?',
                options: ['Svare med én gang uten å lese alt', 'Se etter ord som "ikke", "alltid" og "unntatt"', 'Hoppe over spørsmålet', 'Velge det lengste svaret'],
                correct: 'Se etter ord som "ikke", "alltid" og "unntatt"',
                explanation: 'Små ord kan endre hele betydningen av spørsmålet.'
            },
            {
                question: 'Når kan du tidligst ta teoriprøven for klasse B?',
                options: ['Når du er 16 år', 'Når du er 17 år', '6 måneder før alderskravet for førerkortet', 'Før du har startet opplæring'],
                correct: '6 måneder før alderskravet for førerkortet',
                explanation: 'For klasse B betyr det tidligst 17,5 år.'
            },
            {
                question: 'Hva bør du gjøre hvis du stryker?',
                options: ['Ta ny prøve samme dag', 'Vente minst 2 uker og øve på temaene du bommet på', 'Bare lese gjennom fasiten én gang', 'Bestille oppkjøring i stedet'],
                correct: 'Vente minst 2 uker og øve på temaene du bommet på',
                explanation: 'Ved stryk kan du ta ny prøve tidligst etter 2 uker.'
            },
            {
                question: 'Hva er ofte det tryggeste valget hvis du er usikker i en trafikkoppgave?',
                options: ['Det raskeste alternativet', 'Det alternativet som gir lavest risiko', 'Det alternativet som lar deg komme først frem', 'Det mest aggressive alternativet'],
                correct: 'Det alternativet som gir lavest risiko',
                explanation: 'Teoriprøven tester om du tenker trafikksikkert og forutsigbart.'
            }
        ],
        faq: [
            {
                question: 'Hvor mange spørsmål er det på teoriprøven klasse B?',
                answer: 'Teoriprøven for klasse B har 45 spørsmål.'
            },
            {
                question: 'Hvor mange feil kan man ha på teoriprøven?',
                answer: 'Du kan ha maks 7 feil. Du må ha minst 38 riktige for å bestå.'
            },
            {
                question: 'Hvor lenge varer teoriprøven?',
                answer: 'Du har 90 minutter på teoriprøven for klasse B.'
            },
            {
                question: 'Hva koster teoriprøven i 2026?',
                answer: 'Hos Statens vegvesen koster teoriprøven 480 kr fra 1. februar 2026.'
            },
            {
                question: 'Hvor lenge er teoriprøven gyldig?',
                answer: 'Bestått teoriprøve er gyldig i 3 år.'
            },
            {
                question: 'Hva skjer hvis jeg stryker?',
                answer: 'Hvis du stryker, kan du ta ny teoriprøve tidligst etter 2 uker. Du må betale for ny prøve.'
            },
            {
                question: 'Hvordan øver jeg best til teoriprøven?',
                answer: 'Ta fullprøver, gå gjennom feilene dine og øv ekstra på temaene du sliter med. Det viktigste er å forstå reglene, ikke bare pugge svar.'
            }
        ]
    },

    {
        id: 'trafikkuhell-forstehjelp',
        title: 'Trafikkuhell og førstehjelp: Hva gjør du først?',
        icon: '🚑',
        shortDescription: 'Lær den livsviktige rekkefølgen ved trafikkuhell: Stans, sikre, varsle og hjelpe. Dette må du kunne til teoriprøven klasse B.',
        color: 'var(--apple-red)',
        seoTitle: 'Trafikkuhell og førstehjelp – hva gjør du først? | Teori-test.no',
        seoDescription: 'Hva gjør du først ved trafikkuhell? Lær riktig rekkefølge: stans, sikre, varsle og hjelpe. Kort forklart for teoriprøven klasse B.',
        sections: [
            {
                title: 'Hva gjør du først?',
                type: 'text',
                content: 'Du kommer rundt en sving og ser at en bil har kjørt av veien. En person står ved veikanten, en annen sitter fortsatt i bilen, og trafikken passerer tett forbi. Hva gjør du først?\n\nPå teoriprøven handler dette temaet ikke om at du skal være ambulansearbeider. Det handler om at du forstår rekkefølgen: stans, sikre, varsle og hjelpe. Gjør du ting i feil rekkefølge, kan situasjonen bli farligere for både deg, de skadde og andre trafikanter.'
            },
            {
                title: 'Kort forklart: Riktig rekkefølge ved trafikkuhell',
                type: 'info',
                content: 'Ved trafikkuhell bør du tenke slik:\n\n1. Stans hvis du er innblandet eller kommer først til stedet.\n2. Sikre deg selv og skadestedet før du går inn i situasjonen.\n3. Varsle 113 ved personskade eller alvorlig uhell.\n4. Hjelp skadde så godt du kan.\n5. Bli på stedet til politiet eller nødetatene sier noe annet, hvis det er personskade.\n\nDen korte versjonen er: Ikke skap en ny ulykke mens du prøver å hjelpe i den første.'
            },
            {
                title: 'Riktig rekkefølge ved trafikkuhell',
                type: 'table',
                content: '<div style="margin: 1rem 0; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color); box-shadow: 0 4px 12px rgba(0,0,0,0.1);"><img src="/trafikkuhell-prosedyre.jpg" alt="Illustrasjon av rekkefølge ved trafikkuhell: Stans, sikre, varsle og hjelpe" style="width: 100%; display: block;" /></div>'
            },
            {
                title: 'Dette er ikke bare teori',
                type: 'text',
                content: 'I 2024 ble det registrert 3 166 politirapporterte trafikkulykker med personskade i Norge. I disse ulykkene ble 4 061 personer skadd, 578 hardt skadd og 87 personer mistet livet, ifølge SSB. Tallene er ikke med her for å skremme deg, men for å vise at de første minuttene betyr mye. Derfor må du vite rekkefølgen.'
            },
            {
                title: 'Plikter ved trafikkuhell',
                type: 'warning',
                content: 'Hvis du er innblandet i et trafikkuhell, skal du stanse straks. Det gjelder uansett om du mener ulykken var din skyld eller ikke. Du har også plikt til å hjelpe personer og dyr som er kommet til skade. På teoriprøven er dette en klassisk felle: skyldspørsmålet kommer etterpå. Først kommer plikten til å stanse og hjelpe.'
            },
            {
                title: '1. Stans og gjør deg synlig',
                type: 'tip',
                content: 'Stans på et trygt sted hvis du kan. Sett på nødblink, og ta på refleksvest før du går ut av bilen.\n\nRefleksvesten skal være lett tilgjengelig fra førerplassen, for eksempel i bildøren eller hanskerommet. Hvis vesten ligger nederst i bagasjerommet, hjelper den lite akkurat når du trenger den. Dette henger også sammen med [sikkerhetskontroll](/laeringsressurser/sikkerhetskontroll) av bilen og hvilket utstyr du skal ha tilgjengelig.'
            },
            {
                title: '2. Sikre skadestedet',
                type: 'text',
                content: 'Før du hjelper andre, må du sørge for at situasjonen ikke blir farligere. En ulykke kan bli verre hvis andre kjøretøy kjører inn i ulykkesstedet.\n\nSjekk:\n- Kommer det trafikk bakfra?\n- Er det dårlig sikt, sving eller bakketopp? I mørke blir det ekstra viktig å forstå lysbruk, refleks og sikt.\n- Er det fare for brann?\n- Står bilen farlig plassert?\n\nSett ut varseltrekant hvis kjøretøyet står til fare eller hinder. Varseltrekanten må stå langt nok unna til at andre førere får tid til å oppdage faren og reagere. Se vår guide om [reaksjonstid](/laeringsressurser/reaksjonstid). På vei med høy fart bør den stå minst 150 meter fra stedet. Hvis ulykken ligger rett etter en sving, skal varslingen komme før svingen.'
            },
            {
                title: '3. Varsle 113 ved personskade',
                type: 'text',
                content: 'Ved personskade eller alvorlig uhell skal du ringe 113. Operatøren hjelper deg med hva du skal se etter og hva du bør gjøre videre.\n\nHvis du er usikker på om det er alvorlig nok, er det bedre å ringe én gang for mye enn én gang for lite.'
            },
            {
                title: '4. Hjelp skadde så godt du kan',
                type: 'info',
                content: 'Du skal hjelpe, men du skal ikke gjøre mer enn du har forutsetning for. Det viktigste er:\n- Sjekk om personen er våken og puster normalt\n- Sørg for frie luftveier hos bevisstløse\n- Stanse store blødninger med trykk\n- Holde skadde varme\n- Ikke flytt hardt skadde unødvendig (unntatt ved brann eller akutt livsfare)'
            },
            {
                title: 'Hva bør du ikke gjøre?',
                type: 'warning',
                content: 'Unngå disse vanlige feilene:\n- Løpe rett inn i fare uten å sikre stedet\n- Flytte hardt skadde uten grunn\n- Gi mat eller drikke til en alvorlig skadet person\n- Vente for lenge med å ringe 113\n- Sette varseltrekanten for nær ulykkesstedet'
            },
            {
                title: 'Trafikkuhell uten personskade',
                type: 'text',
                content: 'Hvis det bare er materielle skader:\n- Sikre stedet\n- Flytte kjøretøy hvis det er trygt og nødvendig\n- Utveksle navn, adresse og registreringsnummer\n- Fylle ut skademelding\n- Kontakte politiet hvis situasjonen er uklar.'
            },
            {
                title: 'Ulykke i tunnel',
                type: 'warning',
                content: 'I tunnel må du tenke på brann og røyk. Sett bilen til siden, slå på nødblink og forlat bilen hvis nødvendig. Bruk tunnelens nødtelefon – da får veitrafikksentralen vite nøyaktig hvor du er. Ved brann: kom deg bort fra røyken.'
            },
            {
                title: 'Oppsummert',
                type: 'text',
                content: 'Ved trafikkuhell er riktig rekkefølge avgjørende: Stans. Sikre. Varsle. Hjelp. Bli på stedet.\n\nPå teoriprøven bør du alltid tenke sikkerhet først. Du skal forstå ansvaret ditt som fører.'
            }
        ],
        faq: [
            {
                question: 'Hva gjør du først ved trafikkuhell?',
                answer: 'Først må du sikre deg selv og skadestedet. Deretter varsler du og hjelper skadde.'
            },
            {
                question: 'Skal du ringe 113 eller 112 ved trafikkulykke?',
                answer: 'Ved personskade ringer du 113. Ved brann, fare eller behov for politi kan nødetatene koble deg videre.'
            },
            {
                question: 'Har du plikt til å hjelpe hvis du bare kommer forbi?',
                answer: 'Ja, hvis det er nødvendig og du kan hjelpe uten å utsette deg selv eller andre for fare.'
            },
            {
                question: 'Kan du flytte en skadet person?',
                answer: 'Som hovedregel bør du ikke flytte hardt skadde unødvendig. Flytt bare hvis personen er i umiddelbar livsfare.'
            },
            {
                question: 'Hvor skal varseltrekanten stå?',
                answer: 'Den skal stå slik at andre trafikanter rekker å oppdage faren. På vei med høy fart betyr det minst 150 meter.'
            },
            {
                question: 'Hva gjør du ved trafikkuhell uten personskade?',
                answer: 'Sikre stedet, flytt kjøretøy hvis det er trygt, og utveksle opplysninger med de involverte.'
            }
        ],
        miniQuiz: [
            {
                question: "Du kommer først til en bil som har kjørt ut etter en uoversiktlig sving. Hva er riktig første tanke?",
                options: ["Løpe rett bort til bilen", "Sikre deg selv og varsle andre trafikanter", "Flytte den skadde ut med en gang", "Ringe forsikringsselskapet"],
                correct: "Sikre deg selv og varsle andre trafikanter",
                explanation: "Du må hindre at ulykken blir verre før du hjelper."
            },
            {
                question: "En skadet person sitter fast i bilen, men bilen brenner ikke. Hva bør du gjøre?",
                options: ["Dra personen raskt ut", "Gi personen noe å drikke", "La personen sitte, ring 113 og følg instruksene", "Be personen gå litt rundt"],
                correct: "La personen sitte, ring 113 og følg instruksene",
                explanation: "Hardt skadde bør ikke flyttes unødvendig."
            },
            {
                question: "Hvor bør varseltrekanten stå ved ulykke etter en uoversiktlig sving?",
                options: ["Rett bak bilen", "Før svingen, slik at trafikken varsles i tide", "Ved siden av bilen", "Den trengs ikke hvis nødblink er på"],
                correct: "Før svingen, slik at trafikken varsles i tide",
                explanation: "Varslingen må komme før faren."
            },
            {
                question: "En person er bevisstløs etter en trafikkulykke og puster snorkende eller unormalt. Hva er riktig?",
                options: ["Vente og se om det går over", "Gi personen noe å drikke", "Ring 113 og sørg for frie luftveier etter veiledning", "Flytte personen langt bort fra bilen uansett"],
                correct: "Ring 113 og sørg for frie luftveier etter veiledning",
                explanation: "Ved bevisstløshet og unormal pust er frie luftveier kritisk."
            },
            {
                question: "Du er innblandet i et uhell, men mener den andre hadde all skyld. Hva gjelder?",
                options: ["Du kan kjøre videre", "Du må stanse og hjelpe ved behov", "Du trenger bare å ta bilde", "Du skal vente hjemme på telefon"],
                correct: "Du må stanse og hjelpe ved behov",
                explanation: "Plikten til å stanse og hjelpe gjelder uavhengig av skyld."
            },
            {
                question: "Ved trafikkuhell uten personskade, hva er vanligvis riktig?",
                options: ["La bilene stå farlig for å bevare bevis", "Sikre stedet, flytt kjøretøy hvis trygt, og utveksle opplysninger", "Ring alltid 113", "Kjør videre hvis skaden er liten"],
                correct: "Sikre stedet, flytt kjøretøy hvis trygt, og utveksle opplysninger",
                explanation: "Ved materielle skader handler det om sikkerhet og opplysninger."
            }
        ]
    },

    {
        id: 'sikkerhetsutstyr',
        title: 'Sikkerhetsutstyr i bil: påbudt utstyr, bilbelte og airbag',
        icon: '🛡️',
        shortDescription: 'Lær hva som er påbudt å ha i bilen, og hvordan bilbelte, barnesikring, airbag, varseltrekant og refleksvest brukes riktig.',
        color: 'var(--apple-blue)',
        seoTitle: 'Sikkerhetsutstyr i bil: påbudt utstyr, belte og airbag',
        seoDescription: 'Se hva som er påbudt å ha i bilen, hvordan refleksvest og varseltrekant brukes, og reglene for bilbelte, barnesikring og airbag til teoriprøven.',
        sections: [
            {
                title: 'Sikkerhetsutstyr i bilen',
                type: 'text',
                content: 'På teoriprøven kan du få spørsmål om hvilket sikkerhetsutstyr bilen må ha, hvordan bilbelte og airbag beskytter deg, og hvordan barn skal sikres riktig. Her får du en enkel oversikt over påbudt utstyr i bilen, vanlig sikkerhetsutstyr og typiske teorifeller.'
            },
            {
                title: 'Kort forklart',
                type: 'info',
                content: 'Det viktigste påbudte utstyret i bilen er varseltrekant og minst én godkjent refleksvest som ligger lett tilgjengelig for føreren. Bilbelte skal brukes der det er montert, og barn må sikres med godkjent utstyr som passer barnets høyde og vekt. Airbag er et tillegg til bilbelte, ikke en erstatning. Bakovervendt barnesete skal aldri brukes foran en aktiv airbag.'
            },
            {
                title: 'Hva er påbudt å ha i bilen?',
                type: 'table',
                content: '<div class="responsive-theory-table-wrapper" style="margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Utstyr</th><th style="padding: 12px 8px;">Påbudt?</th><th style="padding: 12px 8px;">Dette må du huske</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Varseltrekant</td><td style="padding: 12px 8px;">Ja</td><td style="padding: 12px 8px;">Bilen skal ha minst én varseltrekant. Ved stans eller uhell skal den plasseres slik at andre trafikanter ser faren i tide, om mulig minst 150 meter fra bilen.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Refleksvest</td><td style="padding: 12px 8px;">Ja</td><td style="padding: 12px 8px;">Det skal ligge minst én godkjent refleksvest lett tilgjengelig for føreren, for eksempel i bildøren eller hanskerommet.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Bilbelte</td><td style="padding: 12px 8px;">Ja, der det er montert</td><td style="padding: 12px 8px;">Alle skal bruke bilbelte der det finnes. Bilbeltet skal ligge stramt over hofte og skulder, ikke over magen eller under armen.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Barnesikring</td><td style="padding: 12px 8px;">Ja, for barn</td><td style="padding: 12px 8px;">Barn under 135 cm skal bruke godkjent barnesikringsutstyr som passer barnets høyde og vekt.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Førstehjelpspakke</td><td style="padding: 12px 8px;">Nei</td><td style="padding: 12px 8px;">Ikke påbudt i vanlig personbil, men smart å ha med.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Reservedekk/reparasjonssett</td><td style="padding: 12px 8px;">Nei</td><td style="padding: 12px 8px;">Ikke alltid påbudt, men du må vite hvordan bilen er utstyrt og hva du gjør ved punktering.</td></tr><tr><td style="padding: 12px 8px;">Brannslukker</td><td style="padding: 12px 8px;">Nei</td><td style="padding: 12px 8px;">Ikke påbudt i vanlig personbil, men kan være nyttig i enkelte situasjoner.</td></tr></tbody></table></div>'
            },
            {
                title: 'Bilbelte, airbag og barnesikring',
                type: 'text',
                content: `Bilbelte er det viktigste sikkerhetsutstyret i bilen. Det holder kroppen på plass ved bråbrems eller kollisjon, og gjør at airbagen virker slik den skal. Airbag alene er ikke nok. Sitter du uten bilbelte, eller sitter for nær airbagen, kan airbagen skade deg.

Barn skal sikres ekstra godt. Barn under 135 cm skal bruke godkjent barnesikringsutstyr som passer barnets høyde og vekt. Barn mellom 135 og 150 cm skal bruke godkjent utstyr hvis det finnes i bilen. Føreren har ansvar for at passasjerer under 15 år er riktig sikret.

Viktig teorifelle: Bakovervendt barnesete skal aldri plasseres foran en aktiv airbag. Airbagen må være koblet ut hvis bakovervendt barnesete skal brukes i forsetet. Les mer hos [Statens vegvesen om sikring av barn i bil](https://www.vegvesen.no/trafikkinformasjon/trafikksikkerhet/sikker-kjoring/sikring-av-barn-i-bil/regelverket-for-sikring-av-barn/).`
            },
            {
                title: 'Slik bruker du varseltrekant og refleksvest',
                type: 'tip',
                content: `Hvis bilen stanser på et farlig sted, skal du først tenke egen sikkerhet. Ta på refleksvest før du går ut hvis det er mulig. Sett ut varseltrekanten slik at andre trafikanter oppdager faren tidlig. På vei med høy fart, dårlig sikt eller mørke må varseltrekanten stå langt nok unna til at andre rekker å reagere.

Refleksvesten bør ligge innen armlengdes avstand fra føreren, for eksempel i dørlommen eller hanskerommet. Ikke fest refleksvesten rundt setet, fordi det kan hindre sideairbag i å virke riktig. Se [Statens vegvesen om refleksvest](https://www.vegvesen.no/trafikkinformasjon/trafikksikkerhet/sikker-kjoring/refleksvest/) og [Lovdata om varseltrekant og refleksvest](https://lovdata.no/dokument/SF/forskrift/1994-10-04-918/%C2%A741-2).`
            },
            {
                title: 'Typiske teorifeller',
                type: 'warning',
                content: `På teoriprøven handler sikkerhetsutstyr ofte om å velge det tryggeste svaret, ikke bare huske en regel.

Vanlige feller:
- Tro at førstehjelpspakke er påbudt i vanlig personbil.
- Tro at airbag erstatter bilbelte.
- Plassere bakovervendt barnesete foran aktiv airbag.
- Glemme at føreren har ansvar for barn under 15 år.
- Legge bilbeltet over magen eller under armen.
- La refleksvesten ligge i bagasjerommet i stedet for lett tilgjengelig.
- Tro at varseltrekanten skal stå rett bak bilen uansett situasjon.`
            },
            {
                title: 'Ved trafikkuhell',
                type: 'text',
                content: `Ved trafikkuhell er riktig rekkefølge: stans, sikre, varsle og hjelpe. Sikre deg selv og stedet først. Bruk refleksvest, nødblink og varseltrekant. Ved personskade ringer du 113 og følger instruksene du får.

Les mer om [trafikkuhell og førstehjelp](/laeringsressurser/trafikkuhell-forstehjelp), [bilens lys](/laeringsressurser/bilens-lys), [dekk, bremser og styring](/laeringsressurser/dekk-bremser-styring) og [sikkerhetskontroll](/laeringsressurser/sikkerhetskontroll).`
            }
        ],
        faq: [
            {
                question: 'Hva er påbudt sikkerhetsutstyr i bil?',
                answer: 'Vanlig personbil skal ha varseltrekant og minst én godkjent refleksvest som er lett tilgjengelig for føreren. I tillegg skal bilbelte brukes der det er montert, og barn skal sikres med godkjent barnesikringsutstyr.'
            },
            {
                question: 'Er refleksvest påbudt i bilen?',
                answer: 'Ja. Det skal ligge minst én godkjent refleksvest i bilen, og den skal være lett tilgjengelig for føreren, for eksempel i bildøren eller hanskerommet.'
            },
            {
                question: 'Er varseltrekant påbudt i bilen?',
                answer: 'Ja. Bilen skal ha minst én varseltrekant. Ved stans eller uhell skal den plasseres slik at andre trafikanter ser faren i tide, om mulig minst 150 meter fra bilen.'
            },
            {
                question: 'Er førstehjelpspakke påbudt i bil?',
                answer: 'Nei, førstehjelpspakke er ikke påbudt i vanlig personbil, men det er smart å ha med. På teoriprøven er det viktig å skille mellom påbudt utstyr og anbefalt utstyr.'
            },
            {
                question: 'Hvordan beskytter bilbelte?',
                answer: 'Bilbeltet holder kroppen på plass ved bråbrems eller kollisjon. Det reduserer risikoen for alvorlige skader og gjør at airbag og andre sikkerhetssystemer virker best mulig.'
            },
            {
                question: 'Kan barn sitte foran airbag?',
                answer: 'Barn i bakovervendt barnesete skal aldri sitte foran en aktiv airbag. Barn under 140 cm bør heller ikke sitte foran en aktiv airbag hvis den ikke er koblet ut.'
            },
            {
                question: 'Når må barn bruke barnesete eller beltestol?',
                answer: 'Barn under 135 cm skal bruke godkjent barnesikringsutstyr som passer barnets høyde og vekt. Barn mellom 135 og 150 cm skal bruke slikt utstyr hvis det finnes i bilen.'
            },
            {
                question: 'Hvem har ansvar for at barn er sikret i bilen?',
                answer: 'Føreren har ansvar for at passasjerer under 15 år er riktig sikret.'
            }
        ],
        miniQuiz: [
            {
                question: 'Hva er påbudt å ha i vanlig personbil?',
                options: ['Førstehjelpsutstyr og brannslukker', 'Varseltrekant og minst én lett tilgjengelig refleksvest', 'Reservehjul og jekk', 'Startkabler og lommelykt'],
                correct: 'Varseltrekant og minst én lett tilgjengelig refleksvest',
                explanation: 'Førstehjelpspakke og brannslukker kan være smart, men er ikke påbudt i vanlig personbil.'
            },
            {
                question: 'Hvor bør refleksvesten ligge?',
                options: ['Lett tilgjengelig for føreren, for eksempel i døren eller hanskerommet', 'I bagasjerommet', 'Under reservehjulet', 'Hjemme i garasjen'],
                correct: 'Lett tilgjengelig for føreren, for eksempel i døren eller hanskerommet',
                explanation: 'Du skal kunne ta den på før du går ut av bilen ved stans eller uhell.'
            },
            {
                question: 'Hva er riktig om barn og aktiv airbag?',
                options: ['Bakovervendt barnesete skal ikke brukes foran aktiv airbag', 'Airbag erstatter barnesete', 'Barn bør alltid sitte foran airbag', 'Airbag gjør belte unødvendig'],
                correct: 'Bakovervendt barnesete skal ikke brukes foran aktiv airbag',
                explanation: 'Airbagen kan skade barnet alvorlig hvis den utløses.'
            },
            {
                question: 'Hva gjør bilbeltet?',
                options: ['Holder kroppen på plass og reduserer skade ved bråstopp eller kollisjon', 'Erstatter airbag', 'Gjelder bare på motorvei', 'Skal ligge løst over magen'],
                correct: 'Holder kroppen på plass og reduserer skade ved bråstopp eller kollisjon',
                explanation: 'Airbag er laget for å virke sammen med bilbeltet, ikke erstatte det.'
            },
            {
                question: 'Er førstehjelpspakke påbudt i vanlig personbil?',
                options: ['Nei, men det er anbefalt å ha med', 'Ja, alltid', 'Bare på motorvei', 'Bare om vinteren'],
                correct: 'Nei, men det er anbefalt å ha med',
                explanation: 'Dette er en vanlig teorifelle: nyttig utstyr er ikke alltid påbudt utstyr.'
            }
        ]
    },

    {
        id: 'buss-fra-holdeplass',
        title: 'Buss fra holdeplass: når har du vikeplikt?',
        icon: '🚌',
        shortDescription: 'Lær regelen for buss som skal ut fra holdeplass, når 60 km/t-grensen betyr noe, og hvilke teorifeller du må unngå.',
        color: 'var(--apple-blue)',
        seoTitle: 'Buss fra holdeplass: når har du vikeplikt?',
        seoDescription: 'Se når du har vikeplikt for buss fra holdeplass, hva som gjelder ved 60 km/t eller lavere, blinklys, busslomme og typiske teorifeller.',
        sections: [
            {
                title: 'Buss fra holdeplass',
                type: 'text',
                content: `Spørsmål om buss fra holdeplass er en klassiker på teoriprøven. Det virker enkelt, men mange bommer fordi de glemmer at fartsgrensen, blinklys og situasjonen rundt holdeplassen må vurderes samtidig.`
            },
            {
                title: 'Kort forklart',
                type: 'info',
                content: `På vei med fartsgrense 60 km/t eller lavere har du vikeplikt for buss som skal kjøre ut fra holdeplass. Du skal senke farten og gi bussen mulighet til å kjøre ut når det kan skje uten fare. Bussen skal normalt bruke blinklys og må også opptre forsiktig, men på teoriprøven må du vurdere hele situasjonen rundt holdeplassen.`
            },
            {
                title: 'Buss som skal ut fra holdeplass',
                type: 'text',
                content: `![Illustrasjon av buss som blinker ut fra holdeplass i 50-sone](/buss-fra-holdeplass.png)
*I 60 km/t eller lavere skal du gi bussen mulighet til å kjøre ut når det kan skje uten fare.*`
            },
            {
                title: 'Når må du slippe bussen ut?',
                type: 'table',
                content: `<div class="responsive-theory-table-wrapper" style="margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Situasjon</th><th style="padding: 12px 8px;">Hva gjør du?</th><th style="padding: 12px 8px;">Typisk teorifelle</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Fartsgrense 60 km/t eller lavere</td><td style="padding: 12px 8px;">Senk farten og gi bussen mulighet til å kjøre ut</td><td style="padding: 12px 8px;">Mange tror regelen bare gjelder i busslomme</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Bussen blinker ut</td><td style="padding: 12px 8px;">Vær klar til å slippe den ut hvis det er trygt</td><td style="padding: 12px 8px;">Du skal ikke akselerere forbi</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Det er gående ved holdeplassen</td><td style="padding: 12px 8px;">Vær ekstra oppmerksom og klar til å stoppe</td><td style="padding: 12px 8px;">Fotgjengere kan komme ut foran eller bak bussen</td></tr><tr><td style="padding: 12px 8px;">Høyere fartsgrense enn 60 km/t</td><td style="padding: 12px 8px;">Bussen har ikke samme særregel, men du må fortsatt kjøre hensynsfullt</td><td style="padding: 12px 8px;">Hensynsplikten gjelder alltid</td></tr></tbody></table></div>`
            },
            {
                title: 'Slik løser du spørsmålet på teoriprøven',
                type: 'tip',
                content: `Bruk denne korte testen:

1. Er fartsgrensen 60 km/t eller lavere?
2. Skal bussen ut fra holdeplassen?
3. Kan du senke farten og slippe den ut uten å skape fare?

Hvis svaret er ja, er riktig løsning som regel å senke farten rolig og gi bussen plass. Se samtidig i speil, vurder trafikken bak deg og se etter fotgjengere ved holdeplassen.`
            },
            {
                title: 'Typiske teorifeller',
                type: 'warning',
                content: `Vanlige feil er å tro at du alltid har forkjørsrett fordi du allerede kjører på veien, eller at regelen bare gjelder når bussen står i en egen busslomme. En annen felle er å bare se på bussen og glemme fotgjengere som kan krysse veien ved holdeplassen.`
            },
            {
                title: 'Les mer',
                type: 'text',
                content: `Dette henger tett sammen med [vikeplikt](/laeringsressurser/vikeplikt), [fartsgrenser](/laeringsressurser/fartsgrenser), [stans og parkering](/laeringsressurser/stans-og-parkering) og [feltvalg og kollektivfelt](/laeringsressurser/feltvalg-fletting-kollektivfelt). Se også [holdeplass for buss-skiltet](/trafikkskilt/opplysningsskilt/holdeplass-for-buss) i skiltguiden og Statens vegvesen om [vikeplikt for buss og trikk](https://www.vegvesen.no/trafikkinformasjon/trafikksikkerhet/trafikkregler/vikeplikt/vikeplikt-og-trikk/).`
            }
        ],
        faq: [
            {
                question: 'Når har du vikeplikt for buss fra holdeplass?',
                answer: 'På vei med fartsgrense 60 km/t eller lavere har du vikeplikt for buss som gir tegn om at den skal kjøre ut fra holdeplass.'
            },
            {
                question: 'Gjelder regelen bare når bussen står i busslomme?',
                answer: 'Nei. Regelen gjelder når bussen skal forlate holdeplassen, uansett om holdeplassen har busslomme eller ikke.'
            },
            {
                question: 'Må bussen bruke blinklys?',
                answer: 'Bussen skal normalt bruke blinklys og unngå å skape farlige situasjoner. Du må likevel vurdere hele situasjonen hvis det er tydelig at bussen skal kjøre ut fra holdeplassen.'
            },
            {
                question: 'Hva bør du passe ekstra på ved bussholdeplass?',
                answer: 'Vær ekstra oppmerksom på fotgjengere som kan komme ut foran eller bak bussen, og senk farten tidlig.'
            },
            {
                question: 'Kan du stanse i busslomme?',
                answer: 'Du skal ikke stanse eller parkere slik at du hindrer buss eller passasjerer. Busslomme og holdeplass er laget for kollektivtrafikk, så velg et annet trygt sted hvis du må stanse.'
            },
            {
                question: 'Hva betyr holdeplass for buss-skiltet?',
                answer: 'Skiltet viser at stedet er holdeplass for buss. Som bilfører må du være ekstra oppmerksom på buss som skal ut og passasjerer som kan krysse veien.'
            }
        ],
        miniQuiz: [
            {
                question: 'Du kjører i 50-sone. En buss ved holdeplass blinker ut. Hva er riktig?',
                options: ['Akselerere forbi før bussen rekker ut', 'Senk farten og gi bussen mulighet til å kjøre ut', 'Tute for å varsle at du kjører først', 'Bare stoppe hvis det er gangfelt'],
                correct: 'Senk farten og gi bussen mulighet til å kjøre ut',
                explanation: 'Ved 60 km/t eller lavere har du vikeplikt for buss som gir tegn om at den skal forlate holdeplassen.'
            },
            {
                question: 'Hva er en viktig fare ved bussholdeplass?',
                options: ['At bussen alltid rygger', 'At fotgjengere kan komme ut foran eller bak bussen', 'At fartsgrensen alltid blir 30 km/t', 'At du alltid må stoppe helt'],
                correct: 'At fotgjengere kan komme ut foran eller bak bussen',
                explanation: 'Du må se etter både bussen og myke trafikanter rundt holdeplassen.'
            },
            {
                question: 'Gjelder bussregelen ved fartsgrense 80 km/t?',
                options: ['Ja, alltid samme regel', 'Nei, ikke den særskilte regelen for 60 km/t eller lavere', 'Bare hvis bussen har passasjerer', 'Bare i tunnel'],
                correct: 'Nei, ikke den særskilte regelen for 60 km/t eller lavere',
                explanation: 'Den særskilte vikeplikten gjelder ved fartsgrense 60 km/t eller lavere, men du skal alltid kjøre hensynsfullt.'
            },
            {
                question: 'Hva bør du gjøre hvis du vurderer å stanse i en busslomme?',
                options: ['Stanse der hvis det er praktisk', 'Unngå å stanse slik at buss eller passasjerer hindres', 'Parkere der så lenge nødblink er på', 'Bare stanse hvis du står under ett minutt'],
                correct: 'Unngå å stanse slik at buss eller passasjerer hindres',
                explanation: 'Busslomme og holdeplass er for kollektivtrafikk. Ikke stans slik at du skaper hinder eller fare.'
            }
        ]
    },

    {
        id: 'trikk-og-vikeplikt',
        title: 'Trikk og vikeplikt: reglene du må kunne',
        icon: '🚋',
        shortDescription: 'Lær når du må vike for trikk, hvorfor trikken er et unntak fra høyreregelen, og hva som gjelder i kryss, sving og rundkjøring.',
        color: 'var(--apple-purple)',
        seoTitle: 'Trikk og vikeplikt: reglene til teoriprøven',
        seoDescription: 'Se når du har vikeplikt for trikk, hva som gjelder for trikk i rundkjøring, forbikjøring av trikk, sving, holdeplass og teorifeller.',
        sections: [
            {
                title: 'Trikk og vikeplikt',
                type: 'text',
                content: `Trikkespørsmål på teoriprøven handler ofte om at trikken ikke oppfører seg som en vanlig bil. Den går på skinner, kan ikke svinge unna og trenger lang bremselengde. Derfor må du som bilfører gi trikken god plass og være ekstra oppmerksom der vei og spor møtes.

Det viktigste er ikke å pugge en løs setning om at "trikken har forkjørsrett". Du må forstå situasjonen: Hvor kommer trikken fra? Skal du krysse sporene? Finnes det trafikklys, vikepliktskilt eller rundkjøring? Og kan du komme deg helt over uten å bli stående i sporet?`
            },
            {
                title: 'Kort forklart',
                type: 'info',
                content: `Som hovedregel har du vikeplikt for trikken og skal gi den fri vei. Det betyr at du ikke skal hindre trikken, presse deg inn foran den eller bli stående i sporet. Dette gjelder også i situasjoner der trikken kommer fra venstre. Samtidig må trikkeføreren følge trafikklys og skilt, for eksempel når trikken skal inn i rundkjøring eller inn på forkjørsvei.`
            },
            {
                title: 'Situasjoner du må kjenne igjen',
                type: 'table',
                content: `<div class="responsive-theory-table-wrapper" style="margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Situasjon</th><th style="padding: 12px 8px;">Hovedregel</th><th style="padding: 12px 8px;">Teorifelle</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Trikk kommer fra venstre i kryss</td><td style="padding: 12px 8px;">Du må normalt vike</td><td style="padding: 12px 8px;">Høyreregelen løser ikke alt når trikk er med</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Du skal svinge og krysser trikkespor</td><td style="padding: 12px 8px;">Vik for trikken og kontroller speil/blindsone</td><td style="padding: 12px 8px;">Trikken kan komme bakfra i samme retning</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Trikk ved rundkjøring</td><td style="padding: 12px 8px;">Trikken må følge skilt inn, men du skal gi den fri vei ut</td><td style="padding: 12px 8px;">Ikke press deg inn foran trikken</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Kø over trikkespor</td><td style="padding: 12px 8px;">Vent før sporet hvis du ikke kommer helt over</td><td style="padding: 12px 8px;">Ikke bli stående og sperre skinnegangen</td></tr><tr><td style="padding: 12px 8px;">Forbi trikk ved holdeplass</td><td style="padding: 12px 8px;">Kjør svært forsiktig og vurder gående</td><td style="padding: 12px 8px;">Passasjerer kan krysse foran eller bak trikken</td></tr></tbody></table></div>`
            },
            {
                title: 'Hvorfor er trikk spesielt viktig?',
                type: 'text',
                content: `Trikken kan ikke svinge unna hindringer, og den kan bruke lang tid på å stoppe. Hvis du sperrer sporet, kan du skape farlige situasjoner og forsinkelser. I praksis betyr det at du må planlegge tidlig: se etter skinner, skilt, trafikklys og om trikken nærmer seg.

På teoriprøven er det ofte nok å oppdage at det er trikkespor i bildet. Da bør du straks tenke: Kan det komme trikk? Skal jeg krysse sporet? Kan jeg bli stående i veien for trikken?`
            },
            {
                title: 'Hva betyr å gi fri vei?',
                type: 'tip',
                content: `Å gi fri vei betyr mer enn å stoppe helt. Du skal opptre slik at trikken kan fortsette uten at du hindrer eller forstyrrer den. Det kan bety å vente før et kryss, la være å kjøre inn i en luke som er for liten, eller stoppe før trikkesporet hvis det er kø foran deg.`
            },
            {
                title: 'Gi trikken nok plass',
                type: 'warning',
                content: `Trikken trenger ekstra plass rundt seg. På rett strekning bør du holde god avstand til sporene, og i sving kan trikken trenge betydelig mer sideplass fordi bakenden kan slå ut. Dette er en typisk teorifelle i bygater: Ikke legg deg tett inntil trikken eller prøv å smette forbi når den svinger.`
            },
            {
                title: 'Trikk i rundkjøring',
                type: 'text',
                content: `Trikk i rundkjøring er en av de mest søkte teorifellene. Når trikken skal inn i rundkjøringen, må den følge skilt og signaler som andre trafikanter. Men når trikken er i eller skal ut av rundkjøringen, må du som bilfører være svært forsiktig og gi den fri vei.

Ikke legg deg slik at du sperrer sporet. Hvis du er usikker på om du kommer trygt gjennom uten å hindre trikken, venter du.`
            },
            {
                title: 'Forbikjøring av trikk',
                type: 'warning',
                content: `Forbikjøring av trikk krever ekstra aktsomhet. Du må ha god sikt, nok plass og være sikker på at du ikke skaper fare for passasjerer som går av eller på. Ved holdeplass kan gående komme ut foran eller bak trikken.

Husk også de vanlige reglene om [forbikjøring](/laeringsressurser/forbikjoring), særlig ved gangfelt, kryss og uoversiktlige steder.`
            },
            {
                title: 'Når du svinger over trikkespor',
                type: 'text',
                content: `Hvis du skal svinge over trikkespor, må du planlegge svingen tidlig. Bruk speil, sjekk blindsone, gi tegn og kontroller at det ikke kommer trikk bakfra eller fra siden. Dette er spesielt viktig i bygater der trikken kan ligge i samme kjøreretning som deg.

Ikke start svingen hvis du ikke er sikker på at du kan fullføre den uten å bli stående i sporet. Kø, fotgjengere, rødt lys eller biler foran deg kan gjøre at riktig svar er å vente.`
            },
            {
                title: 'Trikk ved holdeplass',
                type: 'warning',
                content: `Ved trikkeholdeplass må du også tenke på passasjerene. Folk kan gå ut i veien for å komme til eller fra trikken, og sikten kan være begrenset. Kjør sakte, hold god avstand og vær forberedt på å stanse.

Dette er litt annerledes enn regelen om [buss fra holdeplass](/laeringsressurser/buss-fra-holdeplass). Bussregelen er knyttet til fartsgrense 60 km/t eller lavere og buss som blinker ut. Trikk handler først og fremst om å gi fri vei og ikke hindre et kjøretøy som går på skinner.`
            },
            {
                title: 'Typiske teorifeller',
                type: 'warning',
                content: `Den vanligste feilen er å svare høyreregelen uten å ta hensyn til at det er en trikk i situasjonen. En annen felle er å tenke at grønt lys alltid betyr at du kan kjøre uten å se etter trikkespor. Du må fortsatt kontrollere at du ikke hindrer trikken eller skaper fare for passasjerer og gående.

Se også etter kø. Hvis du kjører inn over trikkesporet og blir stående der, kan du hindre trikken selv om du egentlig hadde grønt lys da du startet.`
            },
            {
                title: 'Les mer',
                type: 'text',
                content: `Denne regelen hører naturlig sammen med [vikeplikt](/laeringsressurser/vikeplikt), [rundkjøring](/laeringsressurser/rundkjoring), [trafikklys og signaler](/laeringsressurser/trafikklys-signaler) og [forbikjøring](/laeringsressurser/forbikjoring). Se også Statens vegvesen om [vikeplikt for buss og trikk](https://www.vegvesen.no/trafikkinformasjon/trafikksikkerhet/trafikkregler/vikeplikt/vikeplikt-og-trikk/).`
            }
        ],
        faq: [
            {
                question: 'Har du vikeplikt for trikk?',
                answer: 'Ja, som hovedregel har bilførere vikeplikt for trikk og skal gi den fri vei.'
            },
            {
                question: 'Må du vike for trikk som kommer fra venstre?',
                answer: 'Ja, normalt må du vike for trikk også når den kommer fra venstre. Dette er en vanlig teorifelle.'
            },
            {
                question: 'Har trikken alltid forkjørsrett?',
                answer: 'Nei. Trikkeføreren må også følge trafikklys og skilt, for eksempel ved innkjøring i rundkjøring eller inn på forkjørsvei.'
            },
            {
                question: 'Hva gjelder for trikk i rundkjøring?',
                answer: 'Trikken må følge skilt inn i rundkjøringen, men som bilfører må du være svært forsiktig og gi trikken fri vei når den er i eller skal ut av rundkjøringen.'
            },
            {
                question: 'Kan du kjøre forbi trikk?',
                answer: 'Bare hvis det kan skje trygt, med god sikt og nok plass. Ved holdeplass må du være ekstra oppmerksom på passasjerer og gående.'
            },
            {
                question: 'Hvorfor må du gi trikken ekstra plass?',
                answer: 'Trikken går på skinner, kan ikke svinge unna og trenger lang strekning for å stoppe. I sving kan trikken også trenge ekstra sideplass.'
            },
            {
                question: 'Hva betyr det å gi fri vei for trikk?',
                answer: 'Det betyr at du ikke skal hindre eller forstyrre trikken. Du må vente hvis du ikke kan krysse sporet uten å bli stående i veien.'
            },
            {
                question: 'Hva gjør du hvis det er kø over trikkesporet?',
                answer: 'Da venter du før sporet til du er sikker på at du kommer helt over. Du skal ikke bli stående og sperre trikken.'
            },
            {
                question: 'Hva må du passe på ved trikkeholdeplass?',
                answer: 'Vær ekstra oppmerksom på passasjerer og gående som kan krysse veien foran eller bak trikken.'
            },
            {
                question: 'Hvorfor skal du ikke kjøre tett inntil en trikk i sving?',
                answer: 'Trikken kan trenge ekstra sideplass i sving, og bakenden kan slå ut. Derfor må du holde god avstand.'
            }
        ],
        miniQuiz: [
            {
                question: 'En trikk kommer fra venstre i et kryss. Hva er riktig hovedregel?',
                options: ['Du kjører først fordi trikken kommer fra venstre', 'Du viker normalt for trikken', 'Trikken må alltid stoppe', 'Høyreregelen gjelder alltid foran trikkeregler'],
                correct: 'Du viker normalt for trikken',
                explanation: 'Trikk er en viktig teorifelle: du skal normalt gi trikken fri vei, også når den kommer fra venstre.'
            },
            {
                question: 'Hvorfor er det farlig å kjøre for nær trikken?',
                options: ['Trikken kan plutselig rygge', 'Trikken kan ikke svinge unna og trenger plass', 'Trikken har alltid nødblink på', 'Trikken har kortere bremselengde enn bil'],
                correct: 'Trikken kan ikke svinge unna og trenger plass',
                explanation: 'Trikken følger skinnene og kan ikke manøvrere rundt hindringer slik en bil kan.'
            },
            {
                question: 'Hva må trikken også følge?',
                options: ['Trafikklys og skilt', 'Bare høyreregelen', 'Bare fotgjengere', 'Ingen trafikkregler'],
                correct: 'Trafikklys og skilt',
                explanation: 'Trikken har sterke vikepliktsregler rundt seg, men trikkeføreren må også følge signaler og skilt.'
            },
            {
                question: 'Det er kø foran deg, og du kan bli stående på trikkesporet. Hva gjør du?',
                options: ['Kjører inn fordi du har grønt lys', 'Venter før sporet til du kan komme helt over', 'Stopper midt på sporet', 'Tuter så trikken må vente'],
                correct: 'Venter før sporet til du kan komme helt over',
                explanation: 'Du skal ikke kjøre inn i en situasjon der du kan bli stående og hindre trikken.'
            },
            {
                question: 'Hva bør du kontrollere før du svinger over trikkespor?',
                options: ['Bare fartsgrensen', 'Speil, blindsone, tegn og om det kommer trikk', 'Bare bilen foran', 'Om det er parkeringsplass i nærheten'],
                correct: 'Speil, blindsone, tegn og om det kommer trikk',
                explanation: 'Trikken kan komme bakfra eller fra siden, og du må være sikker på at du kan krysse sporet trygt.'
            },
            {
                question: 'Hvorfor må du holde ekstra avstand til trikken i sving?',
                options: ['Fordi trikken kan trenge mer sideplass', 'Fordi trikken alltid rygger', 'Fordi bilen mister bremsene', 'Fordi vikeplikt ikke gjelder i sving'],
                correct: 'Fordi trikken kan trenge mer sideplass',
                explanation: 'Trikken følger skinnene og kan trenge ekstra plass i sving. Ikke legg deg tett inntil den.'
            },
            {
                question: 'Hva er riktig om forbikjøring av trikk ved holdeplass?',
                options: ['Det er alltid trygt hvis trikken står stille', 'Du må være ekstra oppmerksom på passasjerer og gående', 'Du kan alltid kjøre forbi på høyre side', 'Trikken har aldri passasjerer ved holdeplass'],
                correct: 'Du må være ekstra oppmerksom på passasjerer og gående',
                explanation: 'Passasjerer kan gå ut i veien foran eller bak trikken, og sikten kan være begrenset.'
            }
        ]
    },

    {
        id: 'planovergang-regler',
        title: 'Planovergang regler: slik krysser du trygt',
        icon: '🚦',
        shortDescription: 'Lær hva du må gjøre ved planovergang, hvordan lys, bom og skilt skal tolkes, og hvilke svar som ofte er riktige på teoriprøven.',
        color: 'var(--apple-orange)',
        seoTitle: 'Planovergang regler: stopp, lys, bom og skilt',
        seoDescription: 'Lær reglene ved planovergang til teoriprøven klasse B: rødt lys, bom, skilt, stopp-plikt, kø og trygg kryssing av jernbane.',
        sections: [
            {
                title: 'Planovergang på teoriprøven',
                type: 'text',
                content: `En planovergang er et sted der vei og jernbane krysser hverandre i samme nivå. På teoriprøven handler temaet om sikker vurdering: du må kunne tolke skilt, lys og bom, vurdere kø og aldri bli stående på sporet.`
            },
            {
                title: 'Kort forklart',
                type: 'info',
                content: `Du skal aldri kjøre inn på en planovergang hvis rødt lys, lydsignal, bom eller skilt viser at du skal stoppe. Du må også la være å kjøre inn hvis trafikken foran gjør at du kan bli stående på sporet. Vent til du har fri vei hele veien over.`
            },
            {
                title: 'Planovergang med bom og rødt signal',
                type: 'text',
                content: `![Illustrasjon av planovergang med bom og rødt lys](/planovergang-med-bom.png)
*Ved rødt lys, lydsignal eller bom skal du stanse og vente. Ikke kjør inn på overgangen før det er trygt og du har fri vei helt over.*`
            },
            {
                title: 'Hva betyr skilt, bom og signaler?',
                type: 'table',
                content: `<div class="responsive-theory-table-wrapper" style="margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Tegn ved planovergang</th><th style="padding: 12px 8px;">Hva gjør du?</th><th style="padding: 12px 8px;">Teorifelle</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Fareskilt for planovergang</td><td style="padding: 12px 8px;">Senk farten og gjør deg klar til å stoppe</td><td style="padding: 12px 8px;">Skiltet betyr ikke at du kan kjøre uten å kontrollere</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Avstandsskilt før planovergang</td><td style="padding: 12px 8px;">Forbered deg tidlig</td><td style="padding: 12px 8px;">De varsler at planovergangen nærmer seg</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Rødt blinklys eller lydsignal</td><td style="padding: 12px 8px;">Stans og vent</td><td style="padding: 12px 8px;">Ikke kjør fordi du tror toget er langt unna</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Bom går ned eller er nede</td><td style="padding: 12px 8px;">Stans før bommen</td><td style="padding: 12px 8px;">Kjør aldri rundt bommen</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Stoppskilt før planovergang</td><td style="padding: 12px 8px;">Stans helt og kontroller før du kjører</td><td style="padding: 12px 8px;">Hjulene skal stå stille</td></tr><tr><td style="padding: 12px 8px;">Kø på andre siden</td><td style="padding: 12px 8px;">Vent før du kjører inn</td><td style="padding: 12px 8px;">Ikke bli stående på sporet</td></tr></tbody></table></div>`
            },
            {
                title: 'Planovergang med og uten bom',
                type: 'text',
                content: `Planovergang kan være sikret med bom, lys og lydsignal, men den kan også være mindre sikret. Uansett må du som fører kontrollere at det er trygt å krysse. Ved planovergang uten bom er det ekstra viktig å senke farten, se begge veier og lytte.`
            },
            {
                title: 'Slik tenker du som bilfører',
                type: 'tip',
                content: `Senk farten når du nærmer deg planovergang. Se etter skilt, lys, bom og kø. Hvis du ikke er sikker på at du kommer helt over, skal du vente. Hvis du allerede er på vei over når signalet starter, skal du normalt komme deg helt over og bort fra sporet, ikke stoppe midt på overgangen.`
            },
            {
                title: 'Typiske teorifeller',
                type: 'warning',
                content: `Mange svarer feil fordi de bare ser på toget og ikke på køen etter planovergangen. Du kan ikke kjøre inn hvis du risikerer å bli stående på sporet. En annen felle er å tro at hvitt blink eller slukket signal betyr at du kan kjøre uten å se. Du må fortsatt kontrollere at det er trygt.`
            },
            {
                title: 'Les mer',
                type: 'text',
                content: `Planovergang henger sammen med [trafikkskilt](/laeringsressurser/skilt), [trafikklys og signaler](/laeringsressurser/trafikklys-signaler), [stans og parkering](/laeringsressurser/stans-og-parkering) og [myndighetspyramiden](/laeringsressurser/myndighetspyramiden). Se også skiltguiden for [planovergang med bom](/trafikkskilt/fareskilt/planovergang-med-bom) og [planovergang uten bom](/trafikkskilt/fareskilt/planovergang-uten-bom). For regelverk kan du se [trafikkreglene på Lovdata](https://lovdata.no/forskrift/1986-03-21-747) og [skiltforskriften på Lovdata](https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219).`
            }
        ],
        faq: [
            {
                question: 'Hva er en planovergang?',
                answer: 'En planovergang er et sted der vei og jernbane krysser hverandre i samme nivå.'
            },
            {
                question: 'Kan du kjøre inn på planovergang hvis det er kø på andre siden?',
                answer: 'Nei. Du skal ikke kjøre inn hvis du kan bli stående på sporet. Vent til du har fri vei helt over.'
            },
            {
                question: 'Hva gjør du når rødt lys blinker ved planovergang?',
                answer: 'Du skal stanse og vente til signalet tillater at du kan kjøre videre.'
            },
            {
                question: 'Kan du kjøre rundt en bom ved planovergang?',
                answer: 'Nei. Du skal aldri kjøre rundt en bom som er nede eller på vei ned.'
            },
            {
                question: 'Hva gjør du hvis du allerede er på planovergangen når signalet starter?',
                answer: 'Da skal du normalt fortsette rolig og komme deg helt over og bort fra sporet. Du skal ikke stoppe midt på overgangen.'
            },
            {
                question: 'Hva betyr planovergang uten bom for deg som bilfører?',
                answer: 'Du må være ekstra oppmerksom, senke farten, se begge veier og lytte før du krysser. Mindre sikring betyr ikke mindre ansvar.'
            },
            {
                question: 'Hva gjør du hvis bilen stopper på sporet?',
                answer: 'Kom deg og passasjerene raskt ut av bilen og bort fra sporet. Varsle nødetater eller ansvarlig trafikkstyring så raskt som mulig.'
            }
        ],
        miniQuiz: [
            {
                question: 'Du nærmer deg planovergang, og det er kø rett etter sporet. Hva gjør du?',
                options: ['Kjører inn hvis det ikke kommer tog', 'Venter før sporet til du har fri vei over', 'Stopper på sporet og venter', 'Kjører over så lenge bommen er oppe'],
                correct: 'Venter før sporet til du har fri vei over',
                explanation: 'Du må aldri risikere å bli stående på jernbanesporet.'
            },
            {
                question: 'Hva betyr rødt blinklys ved planovergang?',
                options: ['Kjør forsiktig', 'Stans og vent', 'Bare tunge kjøretøy må stoppe', 'Kjør hvis du ikke ser toget'],
                correct: 'Stans og vent',
                explanation: 'Rødt lys ved planovergang betyr at du skal stanse.'
            },
            {
                question: 'Hva er riktig når bommen går ned?',
                options: ['Kjøre raskt over før den lukker helt', 'Stanse før bommen', 'Kjøre rundt bommen hvis du har oversikt', 'Følge bilen foran tett over sporet'],
                correct: 'Stanse før bommen',
                explanation: 'Du skal aldri kjøre rundt eller presse deg forbi en bom ved planovergang.'
            },
            {
                question: 'Hva er riktig ved planovergang uten bom?',
                options: ['Kjøre i samme fart som ellers', 'Senk farten, se og lytt før du krysser', 'Stoppe midt på sporet for å se bedre', 'Bare kontrollere hvis det er mørkt'],
                correct: 'Senk farten, se og lytt før du krysser',
                explanation: 'Ved planovergang uten bom må du selv kontrollere ekstra nøye at det er trygt.'
            },
            {
                question: 'Bilen stopper på jernbanesporet. Hva er viktigst først?',
                options: ['Bli sittende og starte bilen på nytt', 'Få alle ut og bort fra sporet', 'Sette ut varseltrekant midt på sporet', 'Ringe forsikringsselskapet først'],
                correct: 'Få alle ut og bort fra sporet',
                explanation: 'Liv og sikkerhet kommer først. Kom dere bort fra sporet og varsle så raskt som mulig.'
            }
        ]
    },

    {
        id: 'kollektivfelt-og-elbil',
        title: 'Elbil i kollektivfelt: regler og underskilt',
        icon: '⚡',
        shortDescription: 'Lær når elbil kan bruke kollektivfelt, hvordan underskilt begrenser adgangen, og hva som er typiske teorifeller.',
        color: 'var(--apple-green)',
        seoTitle: 'Elbil i kollektivfelt: regler, underskilt og sambruksfelt',
        seoDescription: 'Se når elbil kan kjøre i kollektivfelt, hva underskilt betyr, forskjellen på kollektivfelt og sambruksfelt, og hva du må kunne til teoriprøven.',
        sections: [
            {
                title: 'Elbil i kollektivfelt',
                type: 'text',
                content: `Denne artikkelen handler spesielt om elbil i kollektivfelt. Den brede forklaringen av feltvalg finner du i hovedguiden om [feltvalg, fletting og kollektivfelt](/laeringsressurser/feltvalg-fletting-kollektivfelt). Her fokuserer vi på det teoriprøven ofte tester: elbil, underskilt, taxi, sambruksfelt og når du må velge vanlig kjørefelt.`
            },
            {
                title: 'Kort forklart',
                type: 'info',
                content: `Elbil og hydrogenbil kan som hovedregel bruke kollektivfelt, men underskilt kan begrense eller fjerne denne retten. Hvis underskiltet sier at det ikke gjelder elmotorvogn, kan elbil ikke bruke feltet i den perioden eller på den strekningen skiltet gjelder.`
            },
            {
                title: 'Hvem kan bruke kollektivfeltet?',
                type: 'table',
                content: `<div class="responsive-theory-table-wrapper" style="margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Kjøretøy</th><th style="padding: 12px 8px;">Kan bruke feltet?</th><th style="padding: 12px 8px;">Viktig å huske</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Buss</td><td style="padding: 12px 8px;">Ja</td><td style="padding: 12px 8px;">Kollektivfeltet er primært for buss</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Drosje/taxi</td><td style="padding: 12px 8px;">Ja, hvis skiltet viser taxi</td><td style="padding: 12px 8px;">Gjelder drosje med taklykt når skiltet åpner for taxi</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Elbil og hydrogenbil</td><td style="padding: 12px 8px;">Som hovedregel ja</td><td style="padding: 12px 8px;">Underskilt kan si at elmotorvogn ikke har adgang</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Motorsykkel, moped og sykkel</td><td style="padding: 12px 8px;">Ofte ja</td><td style="padding: 12px 8px;">Ikke hvis motorvei/motortrafikkvei forbyr kjøretøytypen</td></tr><tr><td style="padding: 12px 8px;">Vanlig bensin- eller dieselbil</td><td style="padding: 12px 8px;">Nei, med mindre det er sambruksfelt og kravene er oppfylt</td><td style="padding: 12px 8px;">Sambruksfelt har egne skilt, for eksempel 2+</td></tr></tbody></table></div>`
            },
            {
                title: 'Underskilt er avgjørende',
                type: 'warning',
                content: `På teoriprøven er det ofte underskiltet som avgjør svaret. Hvis skiltet under kollektivfeltet begrenser elbil, gjelder begrensningen selv om du kjører elektrisk. Et typisk underskilt kan si "Gjelder ikke elmotorvogn". Tidsangivelser må også leses nøye. Et skilt kan for eksempel gjelde mandag til fredag, bestemte klokkeslett eller bestemte kjøretøygrupper.`
            },
            {
                title: 'Tidsbegrensning og motorvei',
                type: 'tip',
                content: `Hvis kollektivfeltet har tidsbegrensning, gjelder regelen bare i tiden som står på skiltet. Les også om skiltet gjelder hverdager, bestemte klokkeslett eller bestemte kjøretøy.

På motorvei og motortrafikkvei kan kjøretøy som ikke lovlig kan kjøre over 40 km/t, for eksempel vanlig moped og sykkel, ikke bruke kollektivfeltet selv om de ellers ofte kan bruke kollektivfelt.`
            },
            {
                title: 'Feltvalg og samspill',
                type: 'tip',
                content: `Selv om du har lov til å bruke kollektivfeltet, må du vurdere om det er lurt. Ikke hindre buss, vær oppmerksom på syklister og mopeder, og planlegg feltskifte tidlig før kryss eller avkjøring.`
            },
            {
                title: 'Kollektivfelt eller sambruksfelt?',
                type: 'text',
                content: `Kollektivfelt er først og fremst for kollektivtrafikk og bestemte kjøretøygrupper. Sambruksfelt handler om hvor mange personer som sitter i bilen, for eksempel 2+. På teoriprøven er forskjellen viktig: En vanlig bil kan ikke bruke kollektivfelt bare fordi det er flere personer i bilen, med mindre skiltingen faktisk viser sambruksfelt eller åpner for det.`
            },
            {
                title: 'Les mer',
                type: 'text',
                content: `Dette henger sammen med [feltvalg, fletting og kollektivfelt](/laeringsressurser/feltvalg-fletting-kollektivfelt), [trafikkskilt](/laeringsressurser/skilt) og [trafikklys og signaler](/laeringsressurser/trafikklys-signaler). Se også Statens vegvesen om [hvem som kan kjøre i kollektivfelt](https://www.vegvesen.no/trafikkinformasjon/trafikksikkerhet/trafikkregler/kollektivfelt/).`
            }
        ],
        faq: [
            {
                question: 'Kan elbil kjøre i kollektivfelt?',
                answer: 'Som hovedregel kan elbil og hydrogenbil kjøre i kollektivfelt, men underskilt kan begrense eller forby dette.'
            },
            {
                question: 'Hva betyr underskilt i kollektivfelt?',
                answer: 'Underskilt kan fortelle hvem som får bruke feltet, hvem som ikke får bruke det, eller hvilke tider regelen gjelder.'
            },
            {
                question: 'Kan vanlig bil bruke sambruksfelt?',
                answer: 'Ja, hvis bilen oppfyller kravet på skiltet, for eksempel minst to personer i bilen ved 2+.'
            },
            {
                question: 'Hva er forskjellen på kollektivfelt og sambruksfelt?',
                answer: 'Kollektivfelt er for kollektivtrafikk og bestemte kjøretøygrupper. Sambruksfelt kan brukes av kjøretøy som oppfyller kravet til antall personer, for eksempel 2+.'
            },
            {
                question: 'Må du alltid bruke kollektivfelt hvis du kan?',
                answer: 'Nei. Du må fortsatt velge felt hensynsfullt og unngå å hindre kollektivtrafikk eller skape farlige feltskifter.'
            },
            {
                question: 'Hva betyr underskiltet "Gjelder ikke elmotorvogn"?',
                answer: 'Det betyr at elbil og hydrogenbil ikke kan bruke kollektivfeltet der og når underskiltet gjelder.'
            },
            {
                question: 'Kan taxi alltid bruke kollektivfelt?',
                answer: 'Taxi kan bruke kollektivfelt når skiltingen åpner for taxi. Det gjelder drosje med taklykt.'
            }
        ],
        miniQuiz: [
            {
                question: 'Hva er viktigst når du vurderer om elbil kan bruke kollektivfelt?',
                options: ['Bilens farge', 'Underskiltet og skiltingen på stedet', 'Om du har dårlig tid', 'Om feltet er tomt'],
                correct: 'Underskiltet og skiltingen på stedet',
                explanation: 'Underskilt kan begrense elbilens adgang til kollektivfelt.'
            },
            {
                question: 'Hva betyr et sambruksfelt med 2+?',
                options: ['Minst to personer i bilen', 'Maks to personer i bilen', 'Bare to-hjuls kjøretøy', 'Bare busser med to dører'],
                correct: 'Minst to personer i bilen',
                explanation: '2+ betyr at kjøretøyet må ha minst to personer om bord, hvis ikke andre regler på skiltet sier noe annet.'
            },
            {
                question: 'Hva bør du gjøre før du forlater kollektivfeltet?',
                options: ['Skifte felt brått', 'Planlegge tidlig, sjekke speil og blindsoner', 'Bare blinke etter feltskifte', 'Stoppe i feltet'],
                correct: 'Planlegge tidlig, sjekke speil og blindsoner',
                explanation: 'Feltskifte krever god observasjon og tydelig tegn.'
            },
            {
                question: 'Et underskilt sier "Gjelder ikke elmotorvogn". Hva betyr det for elbil?',
                options: ['Elbil kan fortsatt kjøre der', 'Elbil kan ikke bruke feltet der underskiltet gjelder', 'Bare elbil med passasjer kan kjøre der', 'Det gjelder bare om natten'],
                correct: 'Elbil kan ikke bruke feltet der underskiltet gjelder',
                explanation: 'Underskiltet begrenser retten elbil vanligvis har til å bruke kollektivfelt.'
            },
            {
                question: 'Hva er forskjellen på kollektivfelt og sambruksfelt?',
                options: ['Kollektivfelt handler om bestemte kjøretøygrupper, sambruksfelt om antall personer', 'Det er alltid det samme', 'Sambruksfelt er bare for busser', 'Kollektivfelt er bare for vanlige personbiler'],
                correct: 'Kollektivfelt handler om bestemte kjøretøygrupper, sambruksfelt om antall personer',
                explanation: 'Dette er en vanlig teorifelle: les skiltet og se om det faktisk er kollektivfelt eller sambruksfelt.'
            }
        ]
    },

    {
        id: 'tunnelsikkerhet',
        title: 'Stans i tunnel: har du lov?',
        icon: '🚇',
        shortDescription: 'Lær hvordan du kjører trygt i tunnel, hva du gjør ved stans eller brann, og hvilke svar som ofte er riktige på teoriprøven.',
        color: 'var(--apple-gray)',
        seoTitle: 'Har du lov til å stanse i tunnel? Regler og sikkerhet',
        seoDescription: 'Se når det er lov å stanse i tunnel, hva du gjør ved motorstopp, brann, kø, nødblink, havarilomme, nødtelefon og lys i tunnel.',
        sections: [
            {
                title: 'Har du lov til å stanse i tunnel?',
                type: 'text',
                content: `Som hovedregel skal du ikke stanse i tunnel. På teoriprøven er spørsmålet ofte formulert som "har du lov til å stanse i en tunnel?" Riktig tankegang er at stans bare er aktuelt når det er nødvendig, for eksempel ved kø, ulykke, motorstopp eller annen fare.`
            },
            {
                title: 'Kort forklart',
                type: 'info',
                content: `Du har ikke lov til å stanse i tunnel uten grunn. Må du stanse på grunn av kø, motorstopp eller fare, skal du gjøre bilen synlig og varsle riktig. Husk rekkefølgen nødblink, havarilomme hvis mulig og nødtelefon. Ved brann eller røyk må du varsle, følge skilt og komme deg raskt i sikkerhet.`
            },
            {
                title: 'Hva gjør du i ulike situasjoner?',
                type: 'table',
                content: `<div class="responsive-theory-table-wrapper" style="margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Situasjon</th><th style="padding: 12px 8px;">Riktig handling</th><th style="padding: 12px 8px;">Husk</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Vanlig kjøring i tunnel</td><td style="padding: 12px 8px;">Hold avstand, bruk lys og tilpass farten</td><td style="padding: 12px 8px;">Sikt og lysforhold kan endre seg raskt</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Bilen stanser</td><td style="padding: 12px 8px;">Nødblink, havarilomme hvis mulig, nødtelefon</td><td style="padding: 12px 8px;">Nødtelefon gir veitrafikksentralen posisjonen din</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Kø i tunnel</td><td style="padding: 12px 8px;">Hold avstand og følg med på meldinger/skilt</td><td style="padding: 12px 8px;">Ikke tett igjen rommet foran deg</td></tr><tr><td style="padding: 12px 8px;">Brann eller røyk</td><td style="padding: 12px 8px;">Varsle og kom deg i sikkerhet</td><td style="padding: 12px 8px;">Følg nødutganger, skilt og anvisninger</td></tr></tbody></table></div>`
            },
            {
                title: 'Når er stans i tunnel lov?',
                type: 'warning',
                content: `Det er forbudt å stanse i tunnel hvis det ikke er nødvendig. Hvis du likevel må stanse på grunn av feil, kø eller ulykke, må du gjøre bilen synlig og varsle riktig. Bruk nødblink, ta på refleksvest før du går ut hvis det er trygt, og bruk nødtelefon der den finnes.`
            },
            {
                title: 'Tunnelvett: før og under kjøring',
                type: 'tip',
                content: `Sjekk at lysene er på før du kjører inn. Hold ekstra god avstand, følg med på informasjonsskilt og lytt til radio hvis det kommer meldinger. Ikke kjør inn i tunnel som er stengt med rødt lys, bom eller tydelig skilting.

Hvis det oppstår kø, hold avstand til bilen foran. Da får nødetater og andre trafikanter mer plass hvis situasjonen utvikler seg.`
            },
            {
                title: 'Brann eller røyk i tunnel',
                type: 'warning',
                content: `Ved brann eller røyk skal du varsle og komme deg i sikkerhet. Bruk nødtelefon hvis du kan, fordi den gir riktig posisjon til veitrafikksentralen. Hvis du bruker brannslukningsapparat fra tunnelen, kan det også utløse alarm. Følg nødutgangsskilt og anvisninger, og ikke bli sittende og vente i røyk.`
            },
            {
                title: 'Typiske teorifeller',
                type: 'tip',
                content: `En vanlig felle er å velge mobiltelefon før nødtelefon. Nødtelefonen er ofte bedre i tunnel fordi den forteller veitrafikksentralen hvor du er. En annen felle er å kjøre inn i en tunnel som er stengt med rødt lys eller bom. Rødt lys og stengt tunnel skal respekteres.`
            },
            {
                title: 'Les mer',
                type: 'text',
                content: `Les mer om [stans og parkering](/laeringsressurser/stans-og-parkering), [bilens lys](/laeringsressurser/bilens-lys), [trafikkuhell og førstehjelp](/laeringsressurser/trafikkuhell-forstehjelp) og [sikkerhetsutstyr](/laeringsressurser/sikkerhetsutstyr). Se også Statens vegvesen sin side [Trygg i tunnel](https://www.vegvesen.no/trafikkinformasjon/trafikksikkerhet/trygg-i-tunnel/) og Lovdata om [stans og parkering](https://lovdata.no/forskrift/1986-03-21-747/%C2%A717).`
            }
        ],
        faq: [
            {
                question: 'Hva gjør du hvis bilen stanser i tunnel?',
                answer: 'Sett på nødblink, prøv å komme deg til havarilomme hvis mulig, ta på refleksvest hvis du må ut, og bruk nødtelefon der den finnes.'
            },
            {
                question: 'Hvorfor bør du bruke nødtelefon i tunnel?',
                answer: 'Nødtelefonen gir veitrafikksentralen informasjon om hvilken tunnel du er i og hvor i tunnelen du ringer fra.'
            },
            {
                question: 'Er det lov å stanse i tunnel?',
                answer: 'Det er forbudt å stanse i tunnel hvis det ikke er nødvendig. Ved feil, kø eller ulykke må du stanse så trygt som mulig og varsle.'
            },
            {
                question: 'Har du lov til å stanse i en tunnel?',
                answer: 'Bare hvis det er nødvendig, for eksempel ved kø, ulykke, motorstopp eller fare. Du skal ikke stanse i tunnel uten grunn.'
            },
            {
                question: 'Hva gjør du ved røyk eller brann i tunnel?',
                answer: 'Varsle, følg skilt og anvisninger, og kom deg raskt i sikkerhet. Ikke bli sittende og vente hvis røyk eller brann gjør situasjonen farlig.'
            },
            {
                question: 'Hva er en enkel huskeregel ved stans i tunnel?',
                answer: 'Nødblink, havarilomme hvis mulig og nødtelefon. Deretter følger du anvisninger og vurderer om du må forlate bilen.'
            },
            {
                question: 'Hvorfor bør du lytte til radio i tunnel?',
                answer: 'Ved hendelser kan det komme viktige meldinger om stengt tunnel, kø, brann eller evakuering.'
            }
        ],
        miniQuiz: [
            {
                question: 'Hva er riktig hvis bilen stanser i tunnel?',
                options: ['Slå av lysene for å spare strøm', 'Bruke nødblink og varsle via nødtelefon hvis mulig', 'Bli sittende uten å varsle', 'Rygge langt tilbake til åpningen'],
                correct: 'Bruke nødblink og varsle via nødtelefon hvis mulig',
                explanation: 'Nødblink gjør bilen synlig, og nødtelefonen gir riktig posisjon til veitrafikksentralen.'
            },
            {
                question: 'Hva bør du gjøre før du kjører inn i tunnel?',
                options: ['Øke farten', 'Sjekke lys, avstand og trafikken foran', 'Slå av nærlys', 'Ligge tett bak bilen foran'],
                correct: 'Sjekke lys, avstand og trafikken foran',
                explanation: 'God avstand og riktig lys er viktig i tunnel.'
            },
            {
                question: 'Hva betyr rødt lys eller bom før tunnel?',
                options: ['Kjør hvis du ikke ser andre biler', 'Tunnelen er stengt, du skal ikke kjøre inn', 'Bare lastebiler må stoppe', 'Kjør sakte inn'],
                correct: 'Tunnelen er stengt, du skal ikke kjøre inn',
                explanation: 'Rødt lys og bom skal respekteres.'
            },
            {
                question: 'Har du lov til å stanse i tunnel uten grunn?',
                options: ['Ja, hvis du bare stanser kort', 'Nei, stans er bare aktuelt når det er nødvendig', 'Ja, hvis nødblink er på', 'Ja, hvis du står nær tunnelåpningen'],
                correct: 'Nei, stans er bare aktuelt når det er nødvendig',
                explanation: 'Stans i tunnel er forbudt uten nødvendig grunn. Ved feil, kø eller fare må du varsle og sikre riktig.'
            },
            {
                question: 'Hvorfor er nødtelefon ofte bedre enn mobiltelefon i tunnel?',
                options: ['Den gir riktig posisjon til veitrafikksentralen', 'Den gjør bilen raskere', 'Den virker som brannslukker', 'Den åpner alltid bommen automatisk'],
                correct: 'Den gir riktig posisjon til veitrafikksentralen',
                explanation: 'Nødtelefonen er knyttet til tunnelen og hjelper veitrafikksentralen å finne riktig sted.'
            }
        ]
    },

    {
        id: 'barn-i-bil-og-sikring',
        title: 'Barn i bil og sikring: reglene du må kunne',
        icon: '👶',
        shortDescription: 'Lær reglene for barnesete, beltestol, høydegrenser, airbag og førerens ansvar når barn er passasjerer i bilen.',
        color: 'var(--apple-pink)',
        seoTitle: 'Barn i bil og sikring: barnesete, airbag og ansvar',
        seoDescription: 'Se reglene for sikring av barn i bil til teoriprøven: ansvar, barnesete, bilpute, beltestol, 135 cm, 140 cm, airbag og bilbelte.',
        sections: [
            {
                title: 'Barn i bil og sikring',
                type: 'text',
                content: `Spørsmål om barn i bil handler ikke bare om barnesete. Du må også kunne førerens ansvar, høydegrenser, airbag og hva som er trygg plassering. Dette er viktig både på teoriprøven og i vanlig kjøring.`
            },
            {
                title: 'Kort forklart',
                type: 'info',
                content: `Barn under 135 cm skal bruke godkjent barnesikringsutstyr som passer barnets høyde og vekt. Barn mellom 135 og 150 cm skal bruke slikt utstyr hvis det finnes i bilen. Føreren har ansvar for at passasjerer under 15 år er riktig sikret. Bakovervendt barnesete skal aldri brukes foran aktiv airbag. Utstyret må være godkjent, for eksempel etter ECE R44.03, R44.04 eller R129.`
            },
            {
                title: 'Reglene du må kunne',
                type: 'table',
                content: `<div class="responsive-theory-table-wrapper" style="margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Tema</th><th style="padding: 12px 8px;">Regel</th><th style="padding: 12px 8px;">Teorifelle</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Barn under 135 cm</td><td style="padding: 12px 8px;">Skal bruke godkjent barnesikringsutstyr</td><td style="padding: 12px 8px;">Vanlig bilbelte er ikke nok</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Barn 135-150 cm</td><td style="padding: 12px 8px;">Skal bruke utstyr hvis det finnes i bilen</td><td style="padding: 12px 8px;">Beltestol kan fortsatt være riktig</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Passasjer under 15 år</td><td style="padding: 12px 8px;">Føreren har ansvar for sikringen</td><td style="padding: 12px 8px;">Barnet har ikke hovedansvaret selv</td></tr><tr><td style="padding: 12px 8px;">Bakovervendt sete foran</td><td style="padding: 12px 8px;">Ikke foran aktiv airbag</td><td style="padding: 12px 8px;">Airbag må være koblet ut</td></tr></tbody></table></div>`
            },
            {
                title: 'Airbag og plassering',
                type: 'warning',
                content: `Bakovervendt barnesete skal aldri plasseres foran en aktiv airbag. Hvis airbagen utløses, kan barnet bli alvorlig skadet. Barn under 140 cm bør heller ikke sitte foran en aktiv airbag hvis den ikke er koblet ut. Baksetet er ofte det tryggeste valget.

Sideairbag er normalt ikke et problem når barnet sitter riktig sikret, men barnet bør ikke lene seg mot døren eller sitte slik at airbagen kan treffe feil.`
            },
            {
                title: 'Godkjent utstyr og bil uten bilbelte',
                type: 'tip',
                content: `Velg barnesete, beltestol eller pute etter barnets høyde og vekt, ikke alder alene. Sjekk at utstyret er godkjent og riktig montert.

I bil uten bilbelte er reglene strengere: Barn under 3 år skal ikke transporteres i bilen. Barn over 3 år kan ikke sitte foran hvis det ikke finnes bilbelte. Dette er en typisk teorifelle fordi mange blander "kort tur" med lovlig sikring.`
            },
            {
                title: 'Slik tenker du på teoriprøven',
                type: 'tip',
                content: `Velg svaret som gir best faktisk beskyttelse, ikke bare det som virker mest praktisk. Riktig sikring handler om barnets høyde, vekt, setetype og plassering i bilen. Hvis et svar sier at airbag kan erstatte barnesete eller bilbelte, er det feil.`
            },
            {
                title: 'Les mer',
                type: 'text',
                content: `Dette henger sammen med [sikkerhetsutstyr](/laeringsressurser/sikkerhetsutstyr), [bilbelte og airbag](/laeringsressurser/sikkerhetsutstyr), [sikkerhetskontroll](/laeringsressurser/sikkerhetskontroll) og [trafikkuhell og førstehjelp](/laeringsressurser/trafikkuhell-forstehjelp). Se også Statens vegvesen om [regelverket for sikring av barn i bil](https://www.vegvesen.no/trafikkinformasjon/trafikksikkerhet/sikker-kjoring/sikring-av-barn-i-bil/regelverket-for-sikring-av-barn/).`
            }
        ],
        faq: [
            {
                question: 'Når må barn bruke barnesete eller beltestol?',
                answer: 'Barn under 135 cm skal bruke godkjent barnesikringsutstyr som passer barnets høyde og vekt.'
            },
            {
                question: 'Hvem har ansvar for barn i bil?',
                answer: 'Føreren har ansvar for at passasjerer under 15 år er riktig sikret med bilbelte eller godkjent barnesikringsutstyr.'
            },
            {
                question: 'Hvem har ansvar for at barn er sikret i bilen?',
                answer: 'Føreren har ansvar for at passasjerer under 15 år er riktig sikret.'
            },
            {
                question: 'Kan bakovervendt barnesete stå foran airbag?',
                answer: 'Nei, ikke foran en aktiv airbag. Airbagen må være koblet ut hvis bakovervendt sete skal brukes foran.'
            },
            {
                question: 'Hva gjelder for barn mellom 135 og 150 cm?',
                answer: 'De skal bruke godkjent sikringsutstyr hvis det finnes i bilen.'
            },
            {
                question: 'Hva betyr godkjent barnesikringsutstyr?',
                answer: 'Utstyret skal være godkjent etter relevant standard, for eksempel ECE R44.03, R44.04 eller R129, og passe barnets høyde og vekt.'
            },
            {
                question: 'Kan barn under 3 år sitte i bil uten bilbelte?',
                answer: 'Nei. Barn under 3 år skal ikke transporteres i bil uten bilbelte.'
            },
            {
                question: 'Er sideairbag farlig for barn?',
                answer: 'Sideairbag er normalt ikke farlig når barnet sitter riktig sikret, men barnet bør ikke lene seg mot døren eller sitte feil plassert.'
            }
        ],
        miniQuiz: [
            {
                question: 'Hva gjelder for barn under 135 cm?',
                options: ['De kan bruke vanlig belte uten ekstra utstyr', 'De skal bruke godkjent barnesikringsutstyr', 'De må alltid sitte foran', 'De trenger bare airbag'],
                correct: 'De skal bruke godkjent barnesikringsutstyr',
                explanation: 'Barn under 135 cm skal sikres med godkjent utstyr som passer høyde og vekt.'
            },
            {
                question: 'Hvem har ansvar for at passasjerer under 15 år er riktig sikret?',
                options: ['Passasjeren selv', 'Føreren', 'Bilprodusenten', 'Den eldste passasjeren'],
                correct: 'Føreren',
                explanation: 'Føreren har ansvar for at passasjerer under 15 år er riktig sikret.'
            },
            {
                question: 'Hva er riktig om bakovervendt barnesete og airbag?',
                options: ['Det kan stå foran aktiv airbag', 'Det skal ikke brukes foran aktiv airbag', 'Airbag erstatter barnesete', 'Airbag gjør plassering uviktig'],
                correct: 'Det skal ikke brukes foran aktiv airbag',
                explanation: 'Aktiv airbag foran bakovervendt barnesete kan skade barnet alvorlig.'
            },
            {
                question: 'Hva bør du velge barnesikringsutstyr etter?',
                options: ['Barnets høyde og vekt', 'Bilens farge', 'Hvor kort turen er', 'Om barnet vil sitte foran'],
                correct: 'Barnets høyde og vekt',
                explanation: 'Barnesete, beltestol og pute må passe barnets størrelse og være godkjent.'
            },
            {
                question: 'Hva gjelder for barn under 3 år i bil uten bilbelte?',
                options: ['Det er greit på korte turer', 'Barnet skal ikke transporteres i bilen', 'Barnet kan sitte på fanget', 'Barnet kan sitte foran hvis airbag er av'],
                correct: 'Barnet skal ikke transporteres i bilen',
                explanation: 'Barn under 3 år skal ikke transporteres i bil uten bilbelte.'
            }
        ]
    },

    {
        id: 'bilens-lys',
        title: 'Bilens lys til teoriprøven klasse B',
        icon: '💡',
        shortDescription: 'Lær riktig bruk av bilens lys til teoriprøven: nærlys, fjernlys, tåkelys, nødblink og autolys. Lær også typiske feller du bør unngå.',
        color: 'var(--apple-yellow)',
        seoTitle: 'Bilens lys – nærlys, fjernlys og tåkelys | Teori-test.no',
        seoDescription: 'Lær riktig bruk av bilens lys til teoriprøven klasse B: nærlys, fjernlys, kjørelys, tåkelys, baklys, bremselys, blinklys, nødblink og autolys i tunnel.',
        sections: [
            {
                title: 'Bilens lys til teoriprøven klasse B',
                type: 'text',
                content: 'Bilens lys handler ikke bare om å se veien. Like viktig er det at andre ser deg, forstår hva du skal gjøre, og ikke blir blendet.\n\nPå teoriprøven klasse B kan du få spørsmål om nærlys, fjernlys, kjørelys, tåkelys, baklys, bremselys, blinklys, nødblink, parkeringslys, skiltlys og ryggelys. Ofte handler spørsmålet ikke bare om hva lyset heter, men om når du skal bruke det.'
            },
            {
                title: 'Kort forklart',
                type: 'info',
                content: 'Nærlys eller kjørelys skal være tent under kjøring. Fjernlys gir best sikt, men må ikke blende andre trafikanter. Tåkelys foran skal ikke brukes sammen med nærlys. Baklys må være tent når forholdene krever det, for eksempel i mørke, tunnel og dårlig sikt.\n\nHusk dette til teoriprøven:\n\n- Du skal bruke lys etter forholdene.\n- Kjørelys foran betyr ikke alltid at baklysene er tent.\n- Fjernlys må blendes ned når det kan blende andre.\n- Tåkelys foran kan brukes som kjørelys på dagtid, men ikke sammen med nærlys.\n- Nødblink brukes ved fare, ikke som parkeringslys.\n- Føreren har ansvaret, også når bilen har autolys.\n\n![Bilens frontlys på personbil – nærlys, kjørelys og riktig lysbruk til teoriprøven klasse B](/bilens_lys_hovedbilde.png)'
            },
            {
                title: 'Oversikt: bilens lys og typiske teorifeller',
                type: 'text',
                content: 'Les også:\n- [Mørkekjøring](/laeringsressurser/lysbruk-morkekjoring)\n- [Sikkerhetskontroll](/laeringsressurser/sikkerhetskontroll)\n- [Trafikkuhell og førstehjelp](/laeringsressurser/trafikkuhell-forstehjelp)'
            },
            {
                title: 'Tabell: bilens lys og typiske teorifeller',
                type: 'table',
                content: `<div class="responsive-theory-table-wrapper" style="margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Lys</th><th style="padding: 12px 8px;">Når brukes det?</th><th style="padding: 12px 8px;">Typisk teorifelle</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Nærlys</b></td><td style="padding: 12px 8px;">Ved kjøring i mørke, tunnel, regn, snø, tåke eller dårlig sikt</td><td style="padding: 12px 8px;">Å tro at kjørelys alltid er nok</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Kjørelys</b></td><td style="padding: 12px 8px;">På dagtid og ved gode siktforhold</td><td style="padding: 12px 8px;">Baklys er ikke alltid tent sammen med kjørelys</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Fjernlys</b></td><td style="padding: 12px 8px;">På mørke veier når det ikke blender andre</td><td style="padding: 12px 8px;">Å glemme å blende ned for møtende eller forankjørende</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Tåkelys foran</b></td><td style="padding: 12px 8px;">Ved tåke eller svært dårlig sikt, eller som kjørelys på dagtid i stedet for nærlys</td><td style="padding: 12px 8px;">Skal ikke brukes sammen med nærlys</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Kurvelys</b></td><td style="padding: 12px 8px;">Ved lav fart i svinger, avhengig av bilens system</td><td style="padding: 12px 8px;">Å tro at det er ekstra lys du kan bruke fritt</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Baklys</b></td><td style="padding: 12px 8px;">Gjør bilen synlig bakfra, særlig i mørke, tunnel og dårlig sikt</td><td style="padding: 12px 8px;">Mange biler har ikke baklys tent med bare kjørelys</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Bremselys</b></td><td style="padding: 12px 8px;">Lyser automatisk når du bremser</td><td style="padding: 12px 8px;">Defekte bremselys gjør at bilen bak får mindre tid til å reagere</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Blinklys/retningslys</b></td><td style="padding: 12px 8px;">Ved sving, feltskifte, forbikjøring og ut av rundkjøring</td><td style="padding: 12px 8px;">Å blinke for sent, eller glemme å blinke ut av rundkjøring</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Nødblink/nødsignallys</b></td><td style="padding: 12px 8px;">Ved fare, stans, ulykke eller motorstopp</td><td style="padding: 12px 8px;">Å bruke nødblink som parkeringstillatelse</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Parkeringslys</b></td><td style="padding: 12px 8px;">Når bilen står parkert eller stanset og må være synlig</td><td style="padding: 12px 8px;">Å kjøre med bare parkeringslys</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Skiltlys</b></td><td style="padding: 12px 8px;">Lyser opp registreringsskiltet bak</td><td style="padding: 12px 8px;">Lett å glemme ved sikkerhetskontroll</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Ryggelys</b></td><td style="padding: 12px 8px;">Lyser når bilen settes i revers</td><td style="padding: 12px 8px;">Det varsler rygging, men gir deg ikke forkjørsrett</td></tr><tr><td style="padding: 12px 8px;"><b>Autolys</b></td><td style="padding: 12px 8px;">Automatisk lysfunksjon på nyere biler</td><td style="padding: 12px 8px;">Kan lure deg i tunnel, regn, tåke eller skumring</td></tr></tbody></table></div>`
            },
            {
                title: 'Nærlys og kjørelys',
                type: 'text',
                content: 'Nærlys er det vanlige lyset du bruker når du kjører i mørke, i tunnel eller når sikten er dårlig. Nærlys gjør bilen synlig og lyser opp veien uten å blende møtende trafikk slik fjernlys kan gjøre.\n\nKjørelys brukes typisk på dagtid når sikten er god. Mange moderne biler har automatiske kjørelys foran. Men her kommer en viktig teorifelle: baklysene er ikke nødvendigvis tent når du kjører med kjørelys.\n\nDerfor må du selv vurdere forholdene. Er det tunnel, regn, snø, tåke, skumring eller mørkt, bør du sørge for at både lys foran og bak er tent.'
            },
            {
                title: 'Fjernlys',
                type: 'warning',
                content: 'Fjernlys gir mye bedre sikt på mørke veier. Det er lurt å bruke fjernlys når det hjelper deg å se lenger frem, særlig på landevei uten møtende trafikk.\n\nNærlys kan brukes sammen med fjernlys, men fjernlys må ikke brukes slik at du blender eller forstyrrer andre trafikanter.\n\nDu må blende ned når fjernlyset kan blende:\n\n- møtende trafikk\n- bilen foran deg\n- ved bakketopper\n- i svinger der noen plutselig kan komme imot\n- når andre trafikanter kan bli forstyrret av lyset\n\nRiktig tankegang er: Bruk fjernlys når det gir bedre sikt, men blend ned i tide.'
            },
            {
                title: 'Tåkelys og kurvelys',
                type: 'text',
                content: 'Tåkelys foran lyser lavt og bredt. De kan være nyttige ved tåke, kraftig snøvær eller svært dårlig sikt.\n\nDen viktige regelen er enkel: Tåkelys foran skal ikke brukes sammen med nærlys.\n\nPå dagtid kan tåkelys brukes som kjørelys i stedet for nærlys, men ikke som “ekstra lys” sammen med nærlys. Det kan blende og forstyrrer andre trafikanter.\n\nKurvelys hjelper bilen å lyse opp svingen ved lav fart. På nyere biler styres dette ofte automatisk. Det er ikke et lys du bruker fritt for å få mer lys i vanlig kjøring.'
            },
            {
                title: 'Baklys, bremselys og skiltlys',
                type: 'info',
                content: 'Baklys gjør bilen synlig bakfra. Dette er ekstra viktig i tunnel, mørke og dårlig sikt.\n\nBremselys tennes automatisk når du bremser. De forteller trafikken bak deg at farten reduseres. Defekte bremselys er farlig fordi føreren bak får mindre tid til å reagere.\n\nSkiltlys lyser opp registreringsskiltet bak. Det er lett å glemme, men det hører med til bilens lysutstyr og kan komme i spørsmål om sikkerhetskontroll.'
            },
            {
                title: 'Blinklys og nødblink',
                type: 'warning',
                content: 'Blinklys, også kalt retningslys, brukes for å vise andre trafikanter hvor du har tenkt deg.\n\nDu bruker blinklys ved:\n\n- svinging\n- feltskifte\n- forbikjøring\n- utkjøring fra veikant\n- kjøring ut av rundkjøring\n\nBlink i god tid, men ikke så tidlig at andre misforstår deg.\n\nNødblink brukes når bilen eller situasjonen skaper fare. Det kan være ved motorstopp, trafikkuhell, farlig stans eller plutselig kø.\n\nNødblink gjør deg mer synlig, men det gjør ikke en ulovlig stans lovlig.'
            },
            {
                title: 'Parkeringslys og ryggelys',
                type: 'text',
                content: 'Parkeringslys brukes når bilen står parkert eller stanset og må være synlig. De lyser svakere enn nærlys.\n\nDu skal ikke kjøre vanlig med bare parkeringslys. De gir for lite lys og gjør deg dårlig synlig.\n\nRyggelys tennes når bilen settes i revers. Det varsler andre om at bilen rygger eller kan komme bakover. Men ryggelys betyr ikke at du har forkjørsrett. Du har fortsatt ansvar for å rygge forsiktig.'
            },
            {
                title: 'Autolys i tunnel og dårlig sikt',
                type: 'tip',
                content: 'Autolys er praktisk, men du kan ikke stole blindt på automatikken. Sensoren kan reagere for sent, eller bilen kan ha lys foran uten at baklysene er tent.\n\nDette er spesielt viktig ved:\n\n- tunnel\n- regn\n- snø\n- tåke\n- skumring\n- gråvær\n- mørk vei med mye skygge\n\nEt godt eksempel er når du kjører inn i tunnel på dagtid. Bilen kan se “opplyst” ut foran, men baklysene kan fortsatt være av. Da blir du vanskeligere å se bakfra.\n\nTil teoriprøven bør du huske dette: Føreren har ansvaret, ikke automatikken. Er du usikker, slå på nærlys manuelt.'
            },
            {
                title: 'Typiske teoriprøve-feller om bilens lys',
                type: 'warning',
                content: '1. “Kjørelys er alltid nok.”\n\nFeil. I tunnel, mørke og dårlig sikt må du passe på at også baklysene er tent.\n\n2. “Tåkelys og nærlys gir ekstra god sikt.”\n\nFeil. Tåkelys foran skal ikke brukes sammen med nærlys.\n\n3. “Fjernlys er best når det er mørkt.”\n\nBare hvis du ikke blender andre.\n\n4. “Nødblink betyr at jeg kan stoppe hvor jeg vil.”\n\nFeil. Nødblink varsler fare, men gjør ikke en farlig eller ulovlig stans grei.\n\n5. “Autolys ordner alt.”\n\nFeil. Du som fører må kontrollere at riktig lys er tent.'
            }
        ],
        faq: [
            {
                question: 'Hva er forskjellen på nærlys og kjørelys?',
                answer: 'Kjørelys brukes ofte på dagtid i gode siktforhold. Nærlys brukes når du trenger bedre synlighet, for eksempel i mørke, tunnel eller dårlig sikt.'
            },
            {
                question: 'Er baklys alltid tent når kjørelys er på?',
                answer: 'Nei. På mange biler er baklysene ikke tent med bare kjørelys. Dette er en viktig teoriprøvefelle.'
            },
            {
                question: 'Når skal jeg bruke fjernlys?',
                answer: 'Bruk fjernlys på mørke veier når det gir bedre sikt, men blend ned når du kan blende andre trafikanter.'
            },
            {
                question: 'Kan jeg bruke tåkelys sammen med nærlys?',
                answer: 'Nei. Tåkelys foran skal ikke brukes sammen med nærlys.'
            },
            {
                question: 'Når bruker jeg nødblink?',
                answer: 'Når bilen eller situasjonen skaper fare, for eksempel ved motorstopp, ulykke eller farlig stans. Nødblink er ikke en unnskyldning for ulovlig parkering.'
            },
            {
                question: 'Hva bør jeg gjøre med autolys i tunnel?',
                answer: 'Sjekk at riktig lys er tent, også baklys. Er du usikker, slå på nærlys manuelt.'
            },
            {
                question: 'Hvilke lys er røde bak på bilen?',
                answer: 'Baklys og bremselys er røde. Ryggelys er hvitt, og blinklys/retningslys er oransje.'
            },
            {
                question: 'Kan dette komme på teoriprøven klasse B?',
                answer: 'Ja. Bruk av lys, mørke, siktforhold og kontroll av bilens lys er relevante temaer til teoriprøven klasse B.'
            }
        ],
        miniQuiz: [
            {
                question: 'Du kjører inn i en tunnel på dagtid. Bilen står på autolys/kjørelys. Hva bør du sjekke?',
                options: ['Om baklysene er tent', 'Om fjernlyset er på hele tiden', 'Om du kan slå av alle lys', 'Om nødblink bør brukes i tunnelen'],
                correct: 'Om baklysene er tent',
                explanation: 'I tunnel må bilen være synlig også bakfra. Autolys/kjørelys kan lure deg hvis baklysene ikke er tent.'
            },
            {
                question: 'Kan du bruke tåkelys foran sammen med nærlys?',
                options: ['Ja, alltid', 'Ja, men bare i mørke', 'Nei', 'Bare på motorvei'],
                correct: 'Nei',
                explanation: 'Tåkelys foran skal ikke brukes sammen med nærlys.'
            },
            {
                question: 'Når må du blende ned fra fjernlys?',
                options: ['Når fjernlyset kan blende møtende eller forankjørende trafikk', 'Bare når du kjører i by', 'Aldri hvis veien er mørk', 'Bare hvis bilen foran blinker med nødblink'],
                correct: 'Når fjernlyset kan blende møtende eller forankjørende trafikk',
                explanation: 'Fjernlys er nyttig, men skal ikke brukes slik at andre blir blendet.'
            },
            {
                question: 'Hvilke lys viser bilen bak at du bremser?',
                options: ['Skiltlys', 'Bremselys', 'Ryggelys', 'Parkeringslys'],
                correct: 'Bremselys',
                explanation: 'Bremselysene tennes når du bremser, slik at trafikken bak ser at farten reduseres.'
            },
            {
                question: 'Hva bør du bruke ved motorstopp eller farlig stans?',
                options: ['Nødblink, og eventuelt varseltrekant hvis bilen står farlig', 'Bare fjernlys', 'Bare parkeringslys', 'Ryggelys'],
                correct: 'Nødblink, og eventuelt varseltrekant hvis bilen står farlig',
                explanation: 'Nødblink varsler fare. Står bilen til fare eller hinder, må du også tenke sikring av stedet.'
            },
            {
                question: 'Hva betyr ryggelys for andre trafikanter?',
                options: ['At bilen kan komme bakover', 'At bilen har forkjørsrett', 'At bilen står parkert', 'At føreren gir deg tegn til å kjøre først'],
                correct: 'At bilen kan komme bakover',
                explanation: 'Ryggelys varsler at bilen rygger eller kan rygge, men føreren har fortsatt ansvar.'
            }
        ]
    },

    {
        id: 'vanlige-feil-teoriproven',
        title: '10 vanlige feil på teoriprøven klasse B',
        icon: '⚠️',
        shortDescription: 'Se 10 vanlige feil på teoriprøven klasse B. Lær hva du bør øve på.',
        color: 'var(--apple-red)',
        seoTitle: '10 vanlige feil på teoriprøven klasse B | Teori-test.no',
        seoDescription: '43 % stryker på teoriprøven klasse B hvert år. Se de 10 vanligste feilene: vikeplikt, rundkjøring, skilt og bremselengde – og lær hva du bør øve på.',
        sections: [
            {
                title: '10 vanlige feil på teoriprøven klasse B',
                type: 'text',
                content: 'Mange stryker ikke fordi de aldri har øvd, men fordi de bommer på typiske teorifeller. På teoriprøven klasse B må du forstå reglene i konkrete situasjoner, ikke bare kjenne ordene.\n\nI 2024 ble det gjennomført 218 460 teoriprøver i Norge, og 57 prosent ble bestått, ifølge Statens vegvesen. For klasse B har prøven 45 spørsmål, du får 90 minutter, og du må ha minst 38 riktige. Det betyr at du kan ha maks 7 feil.'
            },
            {
                title: 'Direkte svar',
                type: 'info',
                content: 'Vanlige feil på teoriprøven klasse B handler ofte om vikeplikt, rundkjøring, privat vei og parkering, skilt, stopplikt, buss og trikk, bremselengde, følgeavstand, vegoppmerking og lesing av spørsmål. Listen under er basert på typiske teorifeller, Statens vegvesens temalister og research, ikke offisiell feilstatistikk per tema.\n\n![Infografikk med 10 vanlige feil på teoriprøven klasse B, blant annet vikeplikt, rundkjøring, skilt, bremselengde, følgeavstand og lesefeil](/vanlige-feil-teoriproven-infografikk.png)'
            },
            {
                title: 'Kort forklart',
                type: 'warning',
                content: 'Dette bør du øve ekstra på:\n\n- vikeplikt i kryss uten skilt\n- rundkjøring, feltvalg og blinklys\n- utkjøring fra privat vei, parkering og bensinstasjon\n- skiltgrupper og prioritetsskilt\n- bremselengde, reaksjonslengde og stoppavstand\n- følgeavstand og fartstilpasning\n- vegoppmerking og feltskifte\n- nøkkelord i spørsmålene, som “ikke”, “alltid”, “kan” og “må”\n\nLes også:\n[Vikeplikt](/laeringsressurser/vikeplikt), [rundkjøring](/laeringsressurser/rundkjoring), [skilt](/laeringsressurser/skilt) og [bremselengde](/laeringsressurser/bremselengde).'
            },
            {
                title: 'Oversikt: 10 vanlige feil og øvetiltak',
                type: 'table',
                content: `<div class="responsive-theory-table-wrapper" style="margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Rang</th><th style="padding: 12px 8px;">Feiltype</th><th style="padding: 12px 8px;">Estimert hyppighet</th><th style="padding: 12px 8px;">Slik øver du</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">1</td><td style="padding: 12px 8px;">Høyreregelen i kryss uten skilt</td><td style="padding: 12px 8px;">Svært høy</td><td style="padding: 12px 8px;">Øv på uregulerte kryss og spør alltid: kommer noen fra høyre?</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">2</td><td style="padding: 12px 8px;">Rundkjøring</td><td style="padding: 12px 8px;">Svært høy</td><td style="padding: 12px 8px;">Del opp øvingen: innkjøring, feltvalg, vikeplikt, blinklys og utkjøring</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">3</td><td style="padding: 12px 8px;">Utkjøring fra privat vei, parkering eller bensinstasjon</td><td style="padding: 12px 8px;">Høy</td><td style="padding: 12px 8px;">Husk hovedregelen: ut fra område betyr ofte vikeplikt</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">4</td><td style="padding: 12px 8px;">Skiltforveksling</td><td style="padding: 12px 8px;">Høy</td><td style="padding: 12px 8px;">Lær skiltgruppene først: fare, forbud, påbud, opplysning og vikeplikt</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">5</td><td style="padding: 12px 8px;">Stopplikt og prioritetsskilt</td><td style="padding: 12px 8px;">Høy</td><td style="padding: 12px 8px;">Tren på forskjellen mellom vikeplikt, stopplikt og forkjørsvei</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">6</td><td style="padding: 12px 8px;">Buss, trikk og særregler</td><td style="padding: 12px 8px;">Middels-høy</td><td style="padding: 12px 8px;">Repeter buss fra holdeplass, trikk og situasjoner der særregler gjelder</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">7</td><td style="padding: 12px 8px;">Bremselengde, reaksjonslengde og stoppavstand</td><td style="padding: 12px 8px;">Høy</td><td style="padding: 12px 8px;">Forstå forskjellen på reaksjon, bremsing og total stoppavstand</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">8</td><td style="padding: 12px 8px;">Følgeavstand og fartstilpasning</td><td style="padding: 12px 8px;">Middels-høy</td><td style="padding: 12px 8px;">Bruk tresekundersregelen og øk avstanden ved dårlig sikt eller glatt vei</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">9</td><td style="padding: 12px 8px;">Vegoppmerking, sperrelinje og feltskifte</td><td style="padding: 12px 8px;">Middels-høy</td><td style="padding: 12px 8px;">Sammenlign sperrelinje, varsellinje, feltpiler og regler for feltskifte</td></tr><tr><td style="padding: 12px 8px;">10</td><td style="padding: 12px 8px;">Leser feil, overser nøkkelord eller gjetter for tidlig</td><td style="padding: 12px 8px;">Middels-høy</td><td style="padding: 12px 8px;">Les spørsmålet to ganger og se etter ord som "ikke", "alltid", "kan" og "må"</td></tr></tbody></table></div>`
            },
            {
                title: '1. Høyreregelen i kryss uten skilt',
                type: 'text',
                content: 'En vanlig feil er å tro at den største eller retteste veien automatisk har prioritet. Det stemmer ikke.\n\nI kryss uten skilt, trafikklys eller oppmerking gjelder høyreregelen. Da skal du vike for trafikk fra høyre, selv om veien du kjører på virker større.\n\n**Hvorfor mange bommer:**\nKandidaten ser på veibredde, retning eller “hvem som virker mest naturlig først”, i stedet for å spørre: finnes det regulering her?\n\n**Slik tenker du riktig:**\nFinn først ut om krysset er regulert. Hvis det ikke er skilt, lys eller oppmerking, sjekk høyre side.'
            },
            {
                title: '2. Rundkjøring: vikeplikt, feltvalg og blinklys',
                type: 'text',
                content: 'Rundkjøring er vanskelig fordi flere regler brukes samtidig. Du må tenke på plassering, vikeplikt, feltvalg, blinklys og andre trafikanter.\n\nSom hovedregel skal du vike for trafikk som allerede er inne i rundkjøringen når du møter vikepliktskilt før innkjøring. Du skal også blinke tydelig når du skal ut.\n\n**Hvorfor mange bommer:**\nDe blander innkjøring, feltvalg og utkjøring i én vurdering. Da blir spørsmålet fort mer komplisert enn det ser ut.\n\n**Slik tenker du riktig:**\nDel rundkjøringen i fire: før innkjøring, inne i rundkjøringen, eventuelt feltskifte, og utkjøring.'
            },
            {
                title: '3. Utkjøring fra privat vei, parkering eller bensinstasjon',
                type: 'text',
                content: 'Mange glemmer at utkjøring fra privat område ofte gir vikeplikt. Det gjelder for eksempel når du kjører ut fra parkeringsplass, bensinstasjon, gårdsplass eller privat vei.\n\n**Hvorfor mange bommer:**\nSituasjonen ser “ledig” ut, og da svarer noen ut fra magefølelse i stedet for regel.\n\n**Slik tenker du riktig:**\nHusk denne regelen: ut fra område = regn med vikeplikt.'
            },
            {
                title: '4. Forveksler skiltgrupper',
                type: 'text',
                content: 'Skilt handler ikke bare om å pugge enkeltskilt. Du må forstå systemet.\n\nFareskilt varsler fare. Forbudsskilt forteller hva som er forbudt. Påbudsskilt forteller hva du må gjøre. Opplysningsskilt gir informasjon.\n\n**Hvorfor mange bommer:**\nDe prøver å huske hvert skilt alene, uten å forstå form og farge først.\n\n**Slik tenker du riktig:**\nLær rekkefølgen: form → kategori → betydning. Da blir enkeltskiltene lettere.'
            },
            {
                title: '5. Glemmer full stans ved STOPP-skilt',
                type: 'text',
                content: 'STOPP-skilt betyr at du skal stanse helt. Det gjelder selv om du ikke ser trafikk akkurat der og da.\n\n**Hvorfor mange bommer:**\nDe blander vikeplikt og stopplikt. Ved vikeplikt må du gi plass. Ved stopplikt må du først stanse helt.\n\n**Slik tenker du riktig:**\nSTOPP betyr full stopp først, vurdering etterpå.'
            },
            {
                title: '6. Buss og trikk',
                type: 'text',
                content: 'Buss og trikk har særregler som ofte skaper usikkerhet. Når fartsgrensen er 60 km/t eller lavere, skal du normalt gi buss mulighet til å kjøre ut fra holdeplass når den gir tegn. Det må likevel skje uten fare.\n\nFor trikk må du være ekstra oppmerksom, fordi trikk ofte har prioritet og ikke kan svinge unna slik en bil kan.\n\n**Hvorfor mange bommer:**\nDe svarer enten for absolutt eller for passivt: “bussen kan alltid kjøre” eller “jeg trenger aldri å slippe den ut”.\n\n**Slik tenker du riktig:**\nSe etter fartsgrense, tegn fra bussen og om situasjonen kan løses trygt.'
            },
            {
                title: '7. Bremselengde, reaksjonslengde og stoppavstand',
                type: 'text',
                content: 'Dette er en klassisk teorifelle. Reaksjonslengde er strekningen bilen kjører mens du oppfatter fare og reagerer. Bremselengde er strekningen bilen bruker på å stoppe etter at du bremser. Stoppavstand er summen av begge.\n\n**Hvorfor mange bommer:**\nDe tror bremselengden øker litt når farten øker. I virkeligheten øker bremselengden kraftig. Dobbel fart kan gi omtrent firedoblet bremselengde under like forhold.\n\n**Slik tenker du riktig:**\nSkille alltid mellom reaksjon, bremsing og total stoppavstand.'
            },
            {
                title: '8. Følgeavstand og fartstilpasning',
                type: 'text',
                content: 'For kort avstand gir mindre tid til å oppdage fare og reagere. En vanlig huskeregel er tresekundersregelen: Når bilen foran passerer et punkt, bør det gå minst tre sekunder før du passerer samme punkt.\n\n**Hvorfor mange bommer:**\nDe tenker meter i stedet for tid, og glemmer at avstanden må økes ved høy fart, mørke, regn, snø eller glatt vei.\n\n**Slik tenker du riktig:**\nBruk tre sekunder som minimum under gode forhold. Øk avstanden når forholdene blir dårligere.'
            },
            {
                title: '9. Vegoppmerking, sperrelinje og feltskifte',
                type: 'text',
                content: 'Vegoppmerking kan avgjøre hva du har lov til å gjøre. Sperrelinje, varsellinje, kjørefelt, piler og gangfelt kan endre hele situasjonen.\n\n**Hvorfor mange bommer:**\nDe ser på trafikken, men overser linjene i veien. På teoriprøven er oppmerkingen ofte nøkkelen.\n\n**Slik tenker du riktig:**\nLes veien som et skilt. Spør: Hva forteller linjene meg før jeg velger svar?'
            },
            {
                title: '10. Leser spørsmålet for fort',
                type: 'text',
                content: 'Noen feil skyldes ikke at du mangler kunnskap, men at du svarer for raskt. Teoriprøven bruker ofte små ord som endrer hele betydningen.\n\nSe ekstra nøye etter:\n\n- ikke\n- alltid\n- aldri\n- kan\n- må\n- bør\n- først\n- bare\n\n**Hvorfor mange bommer:**\nDe kjenner igjen temaet og klikker på et svar før de har lest hele situasjonen.\n\n**Slik tenker du riktig:**\nLes spørsmålet to ganger. Finn ut hva situasjonen faktisk spør om, ikke bare hvilket tema den ligner på.'
            },
            {
                title: 'Hvorfor skjer disse feilene?',
                type: 'info',
                content: '![Tekstkort om at de vanskeligste spørsmålene på teoriprøven kombinerer flere regler samtidig](/teoriproven-flere-regler-samtidig.png)\n\nDe vanskeligste spørsmålene på teoriprøven kombinerer ofte flere regler samtidig. Det er derfor vikeplikt, rundkjøring og vegoppmerking kan føles vanskeligere enn rene faktaspørsmål.\n\nEt skiltspørsmål kan handle om ett skilt. En rundkjøring kan derimot handle om skilt, vikeplikt, feltvalg, blinklys, fotgjengere og trafikkflyt samtidig.\n\nDerfor bør du ikke bare pugge regler. Du bør øve på situasjoner.'
            },
            {
                title: 'Hva bør du prioritere først?',
                type: 'table',
                content: `<div class="responsive-theory-table-wrapper" style="margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Tema</th><th style="padding: 12px 8px;">Hvorfor viktig</th><th style="padding: 12px 8px;">Slik øver du</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Vikeplikt</td><td style="padding: 12px 8px;">Mange spørsmål handler om hvem som skal kjøre først</td><td style="padding: 12px 8px;">Øv på kryss uten skilt og kryss med vikepliktskilt</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Rundkjøring</td><td style="padding: 12px 8px;">Flere regler brukes samtidig</td><td style="padding: 12px 8px;">Del opp i innkjøring, feltvalg og utkjøring</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Skilt</td><td style="padding: 12px 8px;">Skilt styrer mange situasjoner</td><td style="padding: 12px 8px;">Lær form og kategori før enkeltskilt</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">Bremselengde</td><td style="padding: 12px 8px;">Fart påvirker risiko kraftig</td><td style="padding: 12px 8px;">Øv på forskjellen mellom reaksjonslengde, bremselengde og stoppavstand</td></tr><tr><td style="padding: 12px 8px;">Vegoppmerking</td><td style="padding: 12px 8px;">Linjer og felt avgjør hva du kan gjøre</td><td style="padding: 12px 8px;">Sammenlign sperrelinje, varsellinje og feltskifte</td></tr></tbody></table></div>`
            },
            {
                title: 'Snart: feilstatistikk fra Teori-test.no',
                type: 'text',
                content: 'Etter hvert ønsker vi å vise anonymisert statistikk fra quizene på Teori-test.no. Da kan du se hvilke temaer brukerne faktisk bommer mest på når de øver.\n\nDette vil ikke være offisiell statistikk fra Statens vegvesens teoriprøve, men det kan gjøre øvingen mer presis. Målet er enkelt: hjelpe deg å bruke tiden på det som gir størst effekt.'
            },
            {
                title: 'Klar for å teste deg?',
                type: 'tip',
                content: '[Ta en gratis teoriprøve](/prove)'
            },
            {
                title: 'Kilder og research',
                type: 'text',
                content: 'Artikkelen bygger på informasjon fra Statens vegvesen om gjennomføring av teoriprøven, offentlig statistikk om teoriprøver i 2024 og temalister for klasse B.\n\n*Artikkelen er skrevet og redigert av Teori-test.no, med researchbidrag fra Ingrid Johansen.*'
            }
        ],
        faq: [
            {
                question: 'Hva er de vanligste feilene på teoriprøven?',
                answer: 'Vanlige feil handler ofte om vikeplikt, rundkjøring, skilt, stopplikt, bremselengde, følgeavstand, vegoppmerking og lesing av spørsmål. Det er særlig situasjoner der flere regler må brukes samtidig som skaper problemer.'
            },
            {
                question: 'Hvor mange feil kan man ha på teoriprøven klasse B?',
                answer: 'Du kan ha maks 7 feil. Teoriprøven klasse B har 45 spørsmål, og du må ha minst 38 riktige for å bestå.'
            },
            {
                question: 'Hva er vanskeligst på teoriprøven?',
                answer: 'Mange synes vikeplikt, rundkjøring, skilt og bremselengde er vanskeligst. Disse temaene krever ofte at du forstår situasjonen, ikke bare husker en regel.'
            },
            {
                question: 'Hva skjer hvis jeg stryker på teoriprøven?',
                answer: 'Hvis du stryker, må du vente før du kan ta ny prøve. Bruk ventetiden til å øve målrettet på temaene du fikk problemer med, i stedet for å bare ta tilfeldige prøver.'
            },
            {
                question: 'Er dette offisiell feilstatistikk fra Statens vegvesen?',
                answer: 'Nei. Listen er en praktisk oversikt over typiske teorifeller, basert på temalister, offentlig informasjon og research. Når Teori-test.no har nok anonymiserte quizdata, kan artikkelen oppdateres med egne feiltrender.'
            }
        ],
        miniQuiz: [
            {
                question: 'Du kommer til et kryss uten skilt, lys eller oppmerking. En bil kommer fra høyre. Hva er riktig?',
                options: ['Du kjører først hvis din vei virker større', 'Bilen fra høyre skal normalt få kjøre først', 'Den som kjører rett frem har alltid prioritet', 'Den som kommer først til krysset bestemmer'],
                correct: 'Bilen fra høyre skal normalt få kjøre først',
                explanation: 'I uregulerte kryss gjelder høyreregelen. Veibredde eller “følelse av hovedvei” avgjør ikke alene.'
            },
            {
                question: 'Du møter STOPP-skilt, men ser ingen andre trafikanter. Hva må du gjøre?',
                options: ['Senke farten og kjøre videre hvis det er klart', 'Stanse helt før du vurderer å kjøre videre', 'Bare stanse hvis det kommer trafikk fra høyre', 'Behandle det som vanlig vikepliktskilt'],
                correct: 'Stanse helt før du vurderer å kjøre videre',
                explanation: 'STOPP-skilt betyr full stans. Det gjelder også når du ikke ser trafikk.'
            },
            {
                question: 'Hvorfor er rundkjøringer ofte vanskelige på teoriprøven?',
                options: ['Fordi alle rundkjøringer har samme feltregel', 'Fordi blinklys aldri er nødvendig', 'Fordi vikeplikt, feltvalg, plassering og tegn kan komme samtidig', 'Fordi trafikk inne i rundkjøringen alltid har vikeplikt'],
                correct: 'Fordi vikeplikt, feltvalg, plassering og tegn kan komme samtidig',
                explanation: 'Rundkjøring blir vanskelig fordi flere regler må brukes i samme situasjon.'
            },
            {
                question: 'Hva skjer med bremselengden hvis farten dobles, under like forhold?',
                options: ['Den blir omtrent halvparten så lang', 'Den blir omtrent lik', 'Den blir omtrent dobbelt så lang', 'Den kan bli omtrent fire ganger så lang'],
                correct: 'Den kan bli omtrent fire ganger så lang',
                explanation: 'Bremselengden øker kraftig med fart. Dobbel fart kan gi omtrent firedoblet bremselengde.'
            },
            {
                question: 'Du kjører ut fra en bensinstasjon og inn på en vei. Hva bør du regne med?',
                options: ['At du normalt har vikeplikt', 'At trafikken på veien alltid har vikeplikt for deg', 'At høyreregelen alltid gir deg prioritet', 'At blinklys gir deg rett til å kjøre først'],
                correct: 'At du normalt har vikeplikt',
                explanation: 'Utkjøring fra parkeringsplass, bensinstasjon, privat vei eller lignende er en typisk vikepliktssituasjon.'
            },
            {
                question: 'Hva er en vanlig prøvefelle i teorispørsmål?',
                options: ['At alle svar alltid er like riktige', 'At små ord som “ikke”, “alltid” og “kan” endrer betydningen', 'At spørsmål om skilt aldri handler om situasjon', 'At du bør svare raskest mulig'],
                correct: 'At små ord som “ikke”, “alltid” og “kan” endrer betydningen',
                explanation: 'Mange feil skjer fordi kandidaten leser for raskt og overser nøkkelord.'
            }
        ]
    },
    {
        id: 'glatt-fore',
        title: 'Glatt føre: dette må du kunne til teoriprøven',
        icon: '❄️',
        shortDescription: 'Glatt føre betyr at bilen har dårligere veigrep enn normalt. Det kan oppstå på snø og is, men også på våt vei, slaps eller underkjølt regn. Lær hvordan du tilpasser kjøringen og unngår vanlige feller.',
        color: 'var(--apple-blue)',
        seoTitle: 'Glatt føre og glatt kjørebane | Teoriprøven klasse B',
        seoDescription: 'Lær hva glatt føre betyr for fart, bremselengde, ABS, dekk og veigrep. Se vanlige teorifeller og hva du må gjøre på snø, is og våt vei.',
        sections: [
            {
                title: 'Innledning',
                type: 'text',
                content: 'Glatt føre betyr at bilen har dårligere veigrep enn normalt. Det kan skje på snø og is, men også på våt vei, slaps, underkjølt regn, løv, grus eller asfalt som ser helt bar ut.\n\nPå teoriprøven må du forstå hvorfor glatt føre gir lengre bremselengde, dårligere styring og større risiko for skrens. Det viktigste er ikke å kunne avansert kjøreteknikk, men å vite hvordan du som fører skal tilpasse fart, avstand og kjøremåte etter føret.\n\n![Bil på snødekket vei i skog, eksempel på glatt føre og redusert veigrep.](/images/glatt-fore-hero.png)\n*Glatt føre krever lavere fart, større avstand og roligere kjøring.*'
            },
            {
                title: 'Kort forklart: Glatt føre',
                type: 'table',
                content: '<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Tema</th><th style="padding: 12px 8px;">Kort forklart</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Glatt føre</b></td><td style="padding: 12px 8px;">Betyr at veigrepet er redusert. Bilen bruker lengre tid på å stoppe og kan lettere skli.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Fart</b></td><td style="padding: 12px 8px;">Du må senke farten etter forholdene, selv om fartsgrensen på skiltet er høyere.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Avstand</b></td><td style="padding: 12px 8px;">Du må holde vesentlig større avstand til bilen foran (øk 3-sekundersregelen).</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Bremselengde</b></td><td style="padding: 12px 8px;">Kan bli opptil 4 ganger (snø) til 10 ganger (is) lengre enn på tørr asfalt.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>ABS</b></td><td style="padding: 12px 8px;">Hjelper deg å beholde styringskontrollen ved hard bremsing, men gir ikke automatisk kortere bremselengde.</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>Dekk</b></td><td style="padding: 12px 8px;">Som fører har du ansvar for at bilen har tilstrekkelig veigrep etter forholdene.</td></tr></tbody></table></div>'
            },
            {
                title: 'Hva regnes som glatt føre?',
                type: 'text',
                content: 'Glatt føre is ikke bare snø og is. Det handler om alle situasjoner der dekkene får dårligere feste mot veibanen. Vanlige former for glatt føre inkluderer:\n- Snø og is\n- Slaps (halvsmeltet snø og vann)\n- Våt asfalt (spesielt rett etter at det har begynt å regne etter en tørrperiode, da oljerester og støv flyter opp)\n- Underkjølt regn (regn som fryser i det sekundet det treffer den kalde veien)\n- Vannplaning (når dekkene mister kontakt med veien og flyter oppå vannet)\n- Løv, grus eller leire på veibanen\n\n**Husk:** Veien kan være ekstremt glatt selv om den ser helt bar og tørr ut (for eksempel underkjølt rim eller svart is).'
            },
            {
                title: 'Hvor blir det ofte glatt først?',
                type: 'text',
                content: 'Noen partier av veien er mer utsatt for glatt føre enn andre. Her må du være ekstra forberedt:\n- **Broer og viadukter:** Luften sirkulerer både over og under broen, noe som gjør at kjørebanen her kjøles ned raskere enn veien på bakken.\n- **Skyggepartier:** Sola slipper ikke til i svinger omgitt av skog eller fjellvegger, og rim eller is blir liggende lenge etter at andre steder har tørket opp.\n- **Kryss og rundkjøringer:** Start, stopp og akselerasjon fra mange kjøretøy polerer snøen og isen, slik at det blir ekstremt glatt akkurat der du trenger bremsekraft.'
            },
            {
                title: 'Hvorfor glatt føre ofte overrasker',
                type: 'info',
                content: 'Glatt føre er farligst når føreren ikke forventer det. Når veien er dekket av snø, kjører de fleste automatisk mer forsiktig. Den største risikoen oppstår ofte når veien ser bar eller bare litt våt ut, men temperaturen ligger rundt null grader.\n\nDa kan små forskjeller i temperatur gjøre at én del av veien har godt grep, mens neste sving, bro eller skyggeparti er isete. Dette kalles ofte **flekkvis glatt føre**. Som fører må du derfor ikke bare vurdere hvordan veien ser ut akkurat der du er, men også hva som kan vente lenger fremme.\n\nEt godt tegn på faglig forståelse er å tenke på **overganger**: fra sol til skygge, fra vanlig vei til bro, fra tørr vei til våt vei, fra spor med bar asfalt til snø/slaps, eller fra rett strekning til kryss og rundkjøring. Det er ofte i slike overganger bilen mister grep.\n\nTil teoriprøven er hovedpoenget dette: **Du skal tilpasse farten etter det dårligste føret du kan møte, ikke bare etter det beste grepet du har akkurat nå.**'
            },
            {
                title: 'Glatt føre til ulike årstider',
                type: 'text',
                content: 'Mange forbinder glatt føre utelukkende med vinteren, men det kan oppstå hele året:\n- **Vår:** Snøsmelting om dagen renner ut i veibanen og fryser til farlig is (såkalt "svart is") når temperaturen faller om natten.\n- **Sommer:** Kraftig regnvær kan gi vannplaning. På ekstremt varme dager kan asfalten begynne å "blø" (bindemiddelet i asfalten smelter og flyter opp), noe som gir en glatt overflate.\n- **Høst:** Vått løv som faller på veien danner en glatt film som minner om is. Den første frostnatten kommer også ofte overraskende på bilister som ikke har skiftet til vinterdekk.'
            },
            {
                title: 'Hva er vannplaning?',
                type: 'warning',
                content: 'Vannplaning skjer når dekket mister direkte kontakt med veibanen fordi det ligger et lag med vann mellom dekket og asfalten. Bilen flyter på vannet, og du får svært dårlig kontroll over styring og bremsing.\n\n**Hovedårsaker til vannplaning:**\n1. **For høy fart:** Dekkets mønster rekker ikke å drenere bort vannet i tide.\n2. **Slitte dekk:** Dårlig mønsterdybde reduserer dekkets evne til å lede vann bort fra kontaktflaten.\n3. **Mye vann i veibanen:** Spesielt i dype hjulspor i asfalten der vannet samler seg.\n\n**Hva gjør du om du opplever vannplaning?**\nSlipp gassen rolig, hold rattet stødig i kjøreretningen og unngå brå bremsing eller brå styring. Når farten synker, vil dekkene gjenvinne veigrepet slik at du får kontroll over bilen igjen.'
            },
            {
                title: 'Fart og bremselengde på glatt føre',
                type: 'text',
                content: 'Bremselengden øker med kvadratet av farten. Det betyr at dersom du dobler farten (f.eks. fra 40 til 80 km/t), blir bremselengden **fire ganger** så lang.\n\nPå glatt føre blir denne effekten ekstremt forsterket fordi friksjonen mellom dekk og vei er minimal. Bremselengden kan bli 4 ganger lengre på snø, og opptil 10 ganger lengre på is, sammenlignet med tørr asfalt.\n\n![Illustrasjon av bremselengde på snø, med forskjell mellom 50 km/t og 60 km/t.](/images/glatt-fore-bremselengde.png)\n*På glatt føre kan små fartsøkninger gi merkbart lengre stopplengde. Tallene må forstås som eksempel, ikke en fast regel.*\n\n[Lær mer om forholdet mellom reaksjonstid, bremselengde og stopplengde](/laeringsressurser/bremselengde)'
            },
            {
                title: 'Sammenligning av bremselengder',
                type: 'table',
                content: '<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table class="responsive-theory-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Fart</th><th style="padding: 12px 8px;">Bremselengde på tørr asfalt</th><th style="padding: 12px 8px;">Bremselengde på snø (x4)</th><th style="padding: 12px 8px;">Bremselengde på is (x10)</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>50 km/t</b></td><td style="padding: 12px 8px;" data-label="Tørr asfalt">ca. 12,5 meter</td><td style="padding: 12px 8px;" data-label="På snø">ca. 50 meter</td><td style="padding: 12px 8px;" data-label="På is">ca. 125 meter</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;"><b>60 km/t</b></td><td style="padding: 12px 8px;" data-label="Tørr asfalt">ca. 18 meter</td><td style="padding: 12px 8px;" data-label="På snø">ca. 72 meter</td><td style="padding: 12px 8px;" data-label="På is">ca. 180 meter</td></tr></tbody></table></div>\n\n*Tallene er forenklede eksempler. Faktisk bremselengde avhenger av dekk, fart, føre, temperatur og bil.*'
            },
            {
                title: 'ABS-bremser på glatt føre',
                type: 'text',
                content: 'ABS (blokkeringsfrie bremser) er standard på moderne biler. Systemet forhindrer at hjulene låser seg helt når du nødbremser.\n\n**Hva må du kunne til teoriprøven om ABS?**\n- **Styringskontroll:** Det viktigste med ABS er at du beholder evnen til å svinge (styre unna hindringer) mens du bremser maksimalt. Låste forhjul kan ikke svinge bilen.\n- **Riktig bruk:** Tråkk bremsepedalen hardt og bestemt inn, og hold trykket oppe. Du vil merke at pedalen rister, noe som er helt normalt. Du skal **ikke pumpe** bremsen slik man gjorde på gamle biler uten ABS.\n- **Ingen mirakelkur:** ABS opphever ikke fysikkens lover. ABS gir ikke automatisk kortere bremselengde på glatt føre. Hovedpoenget er at du kan beholde styringen under hard bremsing. Du trenger fortsatt lang avstand for å stoppe.\n\n[Les mer om dekk, bremser og styring](/laeringsressurser/dekk-bremser-styring)'
            },
            {
                title: 'Dekk og veigrep',
                type: 'text',
                content: 'Dekkene er bilens eneste kontaktpunkt med veibanen. Du som fører har det juridiske ansvaret for at kjøretøyet har tilstrekkelig veigrep hele året, uavhengig av kalenderdatoer.\n- **Mønsterdybde:**\n  * **Vinterdekk:** Minst **3,0 mm** mønsterdybde (anbefalt 4 mm for sikker kjøring på slaps/snø).\n  * **Sommerdekk:** Minst **1,6 mm** mønsterdybde (anbefalt 3 mm på våt vei for å unngå vannplaning).\n- **Piggdekkregler:** Piggdekk er tillatt fra **1. november** til første søndag etter 2. påskedag i Sør-Norge (i Nord-Norge fra 16. oktober til 30. april). **Viktig felle:** Piggdekk kan brukes utenom disse datoene dersom føret krever det. Føret trumfer alltid datoen!\n- **Piggfrie vinterdekk:** Det er lovlig å bruke piggfrie vinterdekk om sommeren, men gummien er myk og blir glatt på varm asfalt, og bremselengden øker betydelig. Det frarådes derfor sterkt.'
            },
            {
                title: 'Slik kjører du på glatt føre',
                type: 'tip',
                content: 'For å unngå ulykker på glatt føre bør du kjøre etter følgende prinsipper:\n1. **Kjør defensivt:** Planlegg kjøringen godt frem i tid. Se langt frem slik at du kan oppdage farer og svinger tidlig.\n2. **Tilpass farten før svingen:** Brems ned mens bilen kjører rett frem. Går du inn i en sving med for høy fart, øker sjansen for skrens betydelig.\n3. **Myke bevegelser:** Unngå brå rattutslag, hard akselerasjon og bråbremsing. Dette kan provosere frem tap av veigrep.\n4. **Øk følgeavstanden:** Bruk tresekundersregelen som et absolutt minimum på tørt føre, men øk avstanden til **5–6 sekunder** eller mer på snø og is.'
            },
            {
                title: 'Hvis bilen begynner å skli (skrens)',
                type: 'text',
                content: 'Dersom du mister grepet, må du reagere riktig ut fra hva slags skrens bilen får:\n- **Understyring (bilen svinger for lite):** Forhjulene mister grep og bilen vil fortsette rett frem i svingen. Dette skyldes ofte for høy fart inn i svingen eller brått rattutslag. **Handling:** Slipp gasspedalen og rett opp rattet litt til forhjulene gjenvinner grep, før du svinger rolig igjen.\n- **Overstyring (bilen svinger for mye):** Bakhjulene mister grep og bakenden sklir ut til siden. **Handling:** Slipp gassen rolig, hold rattet stødig i kjøreretningen og unngå brå bremsing eller brå styring. Hvis bakenden sklir ut, styrer du forsiktig i den retningen bakenden sklir (motstyring).'
            },
            {
                title: 'Fareskilt: Glatt kjørebane',
                type: 'signs',
                content: 'Når du kjører i områder der det er spesielt stor fare for glatt vei under visse forhold, vil du møte fareskiltet for glatt kjørebane. Når du ser dette skiltet, skal du umiddelbart senke farten og øke avstanden.',
                signs: [
                    {
                        name: 'Fareskilt 116: Glatt kjørebane',
                        description: 'Varsler om strekning der kjørebanen under spesielle forhold (f.eks. ved frost eller regn) kan være spesielt glatt. Tilpass kjøringen umiddelbart.',
                        imageUrl: '/signs/fareskilt/skilt-116-glatt-kjorebane.jpg'
                    }
                ]
            },
            {
                title: 'Mer om fareskiltet',
                type: 'text',
                content: 'Fareskilt 116 settes ofte opp sammen med et underskilt som presiserer når eller over hvilken strekning faren gjelder (f.eks. «Gjelder ved væromslag» eller en lengde som «Gjelder over 3 km»).\n\n[Se alle fareskilt og detaljer i Skiltbanken](/trafikkskilt/fareskilt/glatt-kjorebane)'
            },
            {
                title: 'Kilder og regelverk',
                type: 'text',
                content: 'For mer detaljert informasjon og formelle regler om veigrep, dekk og kjetting, se følgende offentlige kilder:\n- **Statens vegvesen:** [Krav til dekk og kjetting på bil](https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/dekk-og-kjetting/)\n- **Lovdata:** [Forskrift om bruk av kjøretøy (kapittel 1: hjul, dekk og kjetting)](https://lovdata.no/dokument/SF/forskrift/1990-01-25-92)'
            }
        ],
        faq: [
            {
                question: 'Hva er underkjølt regn?',
                answer: 'Underkjølt regn er regn som faller som væske, men som fryser umiddelbart til is i det sekundet det treffer en kald veibane eller bilrute. Dette danner et tynt, glassklart islag (ofte kalt svart is) som er ekstremt vanskelig å se, og veien blir såpeglatt på noen få sekunder.'
            },
            {
                question: 'Hva gjør du hvis du får vannplaning?',
                answer: 'Slipp gassen rolig, hold rattet stødig i kjøreretningen og unngå brå bremsing eller brå styring. Hjulene vil gjenvinne grep når farten synker.'
            },
            {
                question: 'Har firehjulstrekk (4WD/AWD) kortere bremselengde på glatt føre?',
                answer: 'Nei, dette er en vanlig teorifelle. Firehjulstrekk og allhjulsdrift gir bedre fremdrift og grep under akselerasjon, men når du bremser, bremses alle biler på alle fire hjul uansett drivverk. Bremselengden avhenger kun av dekk, veigrep og fart.'
            },
            {
                question: 'Hvem har ansvaret for at bilen har godt nok veigrep?',
                answer: 'Det er alltid føreren (du) som har det fulle juridiske ansvaret for at kjøretøyet har tilstrekkelig veigrep og er utstyrt etter forholdene (for eksempel ved å ha vinterdekk på vinterføre), uansett om det er sommer eller vinter på kalenderen.'
            },
            {
                question: 'Hva er minstekravet til mønsterdybde på vinterdekk?',
                answer: 'Lovens minstekrav til mønsterdybde på vinterdekk (både piggdekk og piggfrie) er 3,0 mm. Det anbefales imidlertid å ha minst 4 mm mønsterdybde for å sikre god drenering av slaps og vann.'
            },
            {
                question: 'Når er det tillatt å bruke piggdekk i Sør-Norge?',
                answer: 'Det er som hovedregel tillatt å kjøre med piggdekk fra 1. november til første søndag etter 2. påskedag. Men reglene sier også at du kan kjøre med piggdekk utenom disse datoene dersom føret gjør det nødvendig. Føret trumfer alltid datoen!'
            },
            {
                question: 'Hva skjer med bremselengden hvis du dobler farten?',
                answer: 'Bremselengden øker med kvadratet av fartsøkningen. Dobbel fart gir fire ganger så lang bremselengde. På glatt føre (for eksempel på is) vil denne firedoblingen utgjøre en enorm og livsfarlig økning i antall meter.'
            },
            {
                question: 'Kan man bruke piggfrie vinterdekk om sommeren?',
                answer: 'Det er formelt lovlig, men frarådes sterkt. Piggfrie vinterdekk har en veldig myk gummi som er laget for kuldegrader. På varm sommerasfalt gir dette dekket vesentlig lengre bremselengde, dårligere sidestabilitet, og det slites ekstremt raskt.'
            }
        ],
        miniQuiz: [
            {
                question: 'Hva er det viktigste du gjør når du oppdager glatt føre?',
                options: [
                    'Øker farten for å bli raskere ferdig med strekningen',
                    'Senker farten og øker avstanden til kjøretøyet foran',
                    'Kjører nærmere veikanten for å finne bedre grep',
                    'Bremser hardt gjentatte ganger for å teste grepet kontinuerlig'
                ],
                correct: 'Senker farten og øker avstanden til kjøretøyet foran',
                explanation: 'Lavere fart reduserer bremselengden betraktelig, og økt avstand gir deg en reaksjons- og bremsemargin dersom kjøretøyet foran må stoppe brått.'
            },
            {
                question: 'Hva hjelper ABS-bremser deg mest med på glatt føre?',
                options: [
                    'Å oppnå kortere bremselengde enn på tørr asfalt',
                    'Å beholde styringskontrollen ved hard bremsing',
                    'Å automatisk rette opp en skrens på bakhjulene',
                    'Å kjøre raskere og tryggere gjennom skarpe svinger'
                ],
                correct: 'Å beholde styringskontrollen ved hard bremsing',
                explanation: 'ABS forhindrer at hjulene låser seg ved maksimal bremsing. Siden hjulene fortsetter å rulle litt, beholder du styreevnen og kan styre utenom hindringer mens du bremser.'
            },
            {
                question: 'Hvor på veien fryser det vanligvis først når temperaturen faller mot null grader?',
                options: [
                    'Inne i lange tunneler',
                    'På broer, viadukter og i skyggepartier',
                    'Midt i veibanen på høyt trafikkerte motorveier',
                    'Kun på toppen av bratte bakker'
                ],
                correct: 'På broer, viadukter og i skyggepartier',
                explanation: 'Broer kjøles ned raskt av luften på alle kanter, både over og under. I skyggepartier slipper ikke sola til for å varme opp veien, så fuktighet fryser raskt og blir liggende lenge.'
            },
            {
                question: 'Hva øker risikoen for vannplaning mest?',
                options: [
                    'Lav hastighet og nye dekk med god mønsterdybde',
                    'Høy hastighet, slitte dekk med dårlig mønsterdybde og dype hjulspor fylt med vann',
                    'Kjøring på tørr asfalt med høyt lufttrykk i dekkene',
                    'Forsiktig bremsing på flat veibane ved lett yr'
                ],
                correct: 'Høy hastighet, slitte dekk med dårlig mønsterdybde og dype hjulspor fylt med vann',
                explanation: 'Vannplaning skjer når dekkene ikke rekker å lede bort vannet i veibanen. Høy fart og slitte dekk (mangel på dype spor til å lede vann bort) gjør at bilen mister veigrep og flyter opp.'
            },
            {
                question: 'Hvilken påstand om firehjulstrekk (4WD/AWD) på glatt føre er riktig?',
                options: [
                    'Firehjulstrekk gir kortere bremselengde enn tohjulstrekk',
                    'Firehjulstrekk gir bedre fremdrift under akselerasjon, men bremselengden er den samme',
                    'Med firehjulstrekk trenger du ikke tenke på minstekravet til dekk',
                    'Firehjulstrekk fjerner faren for vannplaning helt'
                ],
                correct: 'Firehjulstrekk gir bedre fremdrift under akselerasjon, men bremselengden er den samme',
                explanation: 'Firehjulstrekk fordeler motorkraften på alle fire hjul, noe som forbedrer grepet når du skal i gang eller kjøre oppover. Men alle biler bremser med alle fire hjul, så bremselengen på glatt føre reduseres ikke.'
            }
        ]
    },
];

export const theoryUtilityPages: TheoryTopic[] = [
    {
        id: 'personvern',
        title: 'Personvern & Cookies – Slik tar vi vare på dine data',
        icon: '🛡️',
        shortDescription: 'Teori-test.no er bygget på personvern. Vi samler ikke inn personopplysninger og lagrer dine resultater lokalt i din egen nettleser.',
        color: 'var(--apple-blue)',
        seoTitle: 'Personvern & Cookies | Teori-test.no',
        seoDescription: 'Les om hvordan Teori-test.no håndterer personvern og cookies. Vi samler ikke inn personopplysninger og lagrer dine resultater lokalt i nettleseren din.',
        sections: [
            {
                title: 'Kort oppsummert',
                type: 'info',
                content: '• Vi krever **ingen registrering** eller innlogging.\n• Vi samler **ikke** inn navn, e-post eller telefonnummer.\n• Dine feilsvar i "Fokusmodus" lagres **kun lokalt** i din egen nettleser.\n• Vi bruker kun anonymisert statistikk for å forbedre tjenesten.'
            },
            {
                title: 'Hva vi samler inn',
                type: 'text',
                content: 'Teori-test.no er designet for å være så anonym som overhodet mulig. Du kan bruke hele tjenesten uten å oppgi en eneste personopplysning. Vi har ingen database som lagrer hvem du er eller hva du svarer på prøvene våre.'
            },
            {
                title: 'Lokal lagring (localStorage)',
                type: 'tip',
                content: 'Når du svarer feil på et spørsmål, lagres dette spørsmålet i nettleseren din slik at du kan øve på det i "Fokusmodus". Dette lagres i det som kalles *localStorage*. Dette er data som aldri forlater din maskin, og som vi ikke har tilgang til. Du kan når som helst slette disse dataene ved å tømme nettleserdataene dine.'
            },
            {
                title: 'Cookies og statistikk',
                type: 'text',
                content: 'Vi bruker Google Analytics for å forstå hvordan nettstedet vårt blir brukt (f.eks. hvilke artikler som er mest populære). Dataene som sendes til Google er anonymisert (IP-maskering), og kan ikke spores tilbake til deg som enkeltperson.'
            },
            {
                title: 'Kontakt oss',
                type: 'text',
                content: 'Dersom du har spørsmål om personvern, er du velkommen til å sende oss en e-post. Vi svarer så raskt vi kan.'
            }
        ]
    }
];
