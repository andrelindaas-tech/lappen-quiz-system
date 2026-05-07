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
}

export interface TheorySection {
    title: string
    content?: string
    type: 'text' | 'formula' | 'info' | 'warning' | 'tip' | 'example' | 'signs' | 'calculator' | 'pyramid' | 'table' | 'component'
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
}

export const theoryTopics: TheoryTopic[] = [
    {
        id: 'vikeplikt',
        title: 'Vikeplikt – komplett guide til teoriprøven',
        shortDescription: 'Vikeplikt er et av de vanligste stryketemaene på teoriprøven. Her får du en oversiktlig gjennomgang av de viktigste reglene du må kunne for førerkort klasse B. Tren på vikeplikt med våre øvingsspørsmål når du har lest gjennom.',
        icon: '🔺',
        color: '#ea580c',
        seoTitle: 'Vikeplikt i trafikken – høyreregelen, rundkjøring og gangfelt | Teori-test.no',
        seoDescription: 'Lær vikepliktreglene til teoriprøven: høyreregelen, vikeplikt i rundkjøring, gangfelt og fotgjengere – med eksempelspørsmål og forklaringer.',
        sections: [
            {
                title: '1. Grunnregelen: Høyreregelen',
                type: 'text',
                content: 'Den viktigste regelen i trafikken er høyreregelen: Du har vikeplikt for kjøretøy som kommer fra høyre, med mindre noe annet er bestemt av skilt eller oppmerking.\n- Hvor gjelder den? I alle kryss uten vikepliktskilt, stoppskilt eller forkjørsvei.\n- Viktig om T-kryss: Høyreregelen gjelder også i umerkede T-kryss. Selv om du kjører rett frem på den gjennomgående veien, må du vike for biler som kommer fra høyre i krysset.'
            },
            {
                title: '2. Myndighetspyramiden: Hva gjelder når?',
                type: 'info',
                content: 'I trafikken oppstår det ofte situasjoner der skilt, lys og generelle regler sier forskjellige ting. Da bruker vi myndighetspyramiden for å vite hva som gjelder. Reglene følges i denne rekkefølgen:\n1. Politi og manuelle dirigenter: Deres anvisninger overstyrer alt annet.\n2. Trafikklys: Grønt lys overstyrer skilt. (Blinker lyset gult, eller er slukket, er det skiltene som gjelder).\n3. Trafikkskilt og oppmerking: Vikepliktskilt og forkjørsvei overstyrer de generelle trafikkreglene.\n4. Trafikkregler (Høyreregelen): Dette er bunnen av pyramiden. Den gjelder bare når det ikke finnes politi, lys eller skilt som sier noe annet.\n\nKlassisk teoriprøvespørsmål: «Du ankommer et kryss der trafikklyset viser grønt, men det er også satt opp et vikepliktskilt. Hva er riktig?»\nA) Jeg har vikeplikt fordi skiltet gjelder.\nB) Jeg kan kjøre fordi trafikklyset gjelder foran skiltet.\nC) Høyreregelen gjelder.\n\nRiktig svar: B. Trafikklys (nivå 2 i pyramiden) står over trafikkskilt (nivå 3).'
            },
            {
                title: '3. Skilt som overstyrer høyreregelen',
                type: 'signs',
                content: 'Skilt forteller deg når høyreregelen ikke gjelder. Du må kjenne til disse tre:\n\n[Les vår guide til vikeplikt i rundkjøring](/laeringsressurser/rundkjoring)',
                signs: [
                    {
                        name: 'Vikepliktskilt',
                        description: 'Trekant med spissen ned og rød kant. Du skal vike for all kryssende trafikk. Senk farten og vær klar til å stoppe. Veien må være klar før du kjører.',
                        imageUrl: '/signs/vikeplikt.svg'
                    },
                    {
                        name: 'Stoppskilt',
                        description: 'Rød åttekant. Du MÅ stoppe helt opp (hjulene skal stå stille) ved stopplinjen, selv om krysset virker tomt. Se deg godt for til begge sider før du kjører videre.',
                        imageUrl: '/signs/stopp.svg'
                    },
                    {
                        name: 'Forkjørsvei',
                        description: 'Gul rute. Du har forkjørsrett. Kryssende trafikk har vikeplikt for deg. Dette gjelder helt til du ser skiltet for "Slutt på forkjørsvei".',
                        imageUrl: '/signs/forkjorsvei.svg'
                    }
                ]
            },
            {
                title: '4. Rundkjøringer',
                type: 'text',
                content: 'I norske rundkjøringer har du vikeplikt for trafikken som allerede befinner seg inne i rundkjøringen.\n- Vent ved vikepliktslinjen til du har en trygg luke.\n- Bruk alltid blinklys når du skal ut av rundkjøringen.\n\nVanlig misforståelse: Mange tror høyreregelen gjelder i rundkjøring. Det gjør den ikke – rundkjøringsskiltet opphever høyreregelen.'
            },
            {
                title: '5. Trikk og buss',
                type: 'warning',
                content: 'Det gjelder egne regler for kollektivtrafikk:\n- Trikk: Du har vikeplikt for trikken, selv om den kommer fra venstre. Dette er et viktig unntak fra høyreregelen.\n- Buss: Hvis en buss blinker seg ut fra en holdeplass i en 60-sone (eller lavere), har du vikeplikt og må la bussen kjøre ut.'
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
                answer: 'I et T-kryss uten skilt gjelder høyreregelen normalt. Den som kjører inn i krysset fra sidevei har vikeplikt for trafikk på hovedveien, men høyreregelen avgjør ellers.'
            }
        ]
    },

    {
        id: 'bremselengde',
        title: 'Bremselengde kalkulator – regn ut stopplengde | Teori-test.no',
        icon: '🚗',
        shortDescription: 'Bruk kalkulatoren og tast inn hastighet — se bremselengde og stopplengde for tørr vei, våt vei og is. Med formel og øvingsoppgaver til teoriprøven.',
        color: '#dc2626',
        seoTitle: 'Bremselengde og stopplengde – formel og kalkulator | Teori-test.no',
        seoDescription: 'Tast inn hastighet og se bremselengde for tørr vei, våt vei og is — direkte i kalkulatoren. Med formel, bremsefaktorer, vannplaning og øvingsoppgaver til teoriprøven.',
        hasCalculator: true,
        sections: [
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
                title: 'Formler',
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
                content: 'På våt vei dobles bremselengden. På is kan den bli opptil 10 ganger lengre! Ved 80 km/t på is kan stopplengden bli over 300 meter.'
            },
            {
                title: 'Faktorer som påvirker bremselengden',
                type: 'info',
                content: '• Fart — Dobbel fart gir 4 ganger lengre bremselengde\n• Veidekke — Is, snø, regn øker bremselengden betydelig\n• Dekkenes tilstand — Slitte dekk gir dårligere grep\n• Bremsenes tilstand — Slitte bremser reduserer bremsekraften\n• Bilens vekt — Tung bil trenger lengre avstand\n• Helning — Nedoverbakke øker bremselengden\n\nKlar til å teste kunnskapen? Ta [øvingsprøven om fartsregler](/quiz/fartsregler) eller les om [vikeplikt](/laeringsressurser/vikeplikt).'
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
        color: '#3b82f6',
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
        title: 'Veimerking til teoriprøven – komplett visuell guide (Klasse B)',
        icon: '🛣️',
        shortDescription: 'Lær all norsk veimerking til teoriprøven med visuelle illustrasjoner. Sperrelinje, varselslinje, gangfelt, pilmerking og mer — med eksempler og forklaringer.',
        color: '#0ea5e9',
        seoTitle: 'Veimerking til teoriprøven – komplett visuell guide (Klasse B) | Teori-test.no',
        seoDescription: 'Hva betyr hvit sperrelinje, varsellinje, kombinert linje eller vikelinje? Komplett guide til norsk veimerking med visuelle illustrasjoner – til teoriprøven.',
        sections: [
            {
                title: 'Veimerking til teoriprøven',
                type: 'text',
                content: 'Vegoppmerkingen er det mange undervurderer til teoriprøven. Skilt kan du lese — men linjene i veibanen krever at du forstår hva de betyr når du kjører forbi dem i 80 km/t uten tid til å tenke. Denne guiden gir deg oversikt over alle viktige markeringer med visuelle eksempler.'
            },
            {
                title: 'Hva er veimerking?',
                type: 'info',
                content: 'Veimerking er striper, symboler og tekst som er malt direkte på veibanen. De forteller deg hva du kan og ikke kan gjøre i akkurat det punktet du befinner deg. I motsetning til skilt som varsler deg i forkant, gjelder vegoppmerkingen der og da — akkurat der linjen er.\n\nVegoppmerkingen er plassert under skilt og lyssignal i myndighetspyramiden — men den er likevel bindende å følge der den ikke overstyres av noe høyere opp.'
            },
            {
                title: 'Hvite linjer — de vanligste',
                type: 'table',
                content: `<div style="display:flex;flex-direction:column;gap:1.5rem">
  <div>
    <strong style="font-size:1rem;color:var(--color-text)">Kjørefeltlinje (stiplet hvit)</strong>
    <div style="background:#2d2d2d;border-radius:6px;padding:12px 16px;margin:8px 0;position:relative;overflow:hidden">
      <div style="font-size:10px;color:#999;margin-bottom:6px">→ Felt A</div>
      <div style="height:3px;background:repeating-linear-gradient(90deg,white 0px,white 20px,transparent 20px,transparent 32px);border-radius:2px"></div>
      <div style="font-size:10px;color:#999;margin-top:6px">→ Felt B</div>
    </div>
    <p style="color:var(--color-text-light);line-height:1.6;margin:0">Den vanligste linjen på norske veier. Skiller kjørefelt i samme kjøreretning. Du kan krysse den når det er trygt og lovlig — for eksempel ved feltskifte eller forbikjøring der forholdene tillater det.</p>
  </div>
  <div>
    <strong style="font-size:1rem;color:var(--color-text)">Sperrelinje (heltrukken hvit)</strong>
    <div style="background:#2d2d2d;border-radius:6px;padding:12px 16px;margin:8px 0">
      <div style="font-size:10px;color:#999;margin-bottom:6px">→ Felt A</div>
      <div style="height:3px;background:white;border-radius:2px"></div>
      <div style="font-size:10px;color:#999;margin-top:6px">→ Felt B</div>
    </div>
    <p style="color:var(--color-text-light);line-height:1.6;margin:0">Forbyr overkjøring. Du har ikke lov til å krysse en hvit sperrelinje, hverken for å bytte felt eller kjøre forbi andre. Den brukes der sikt eller trafikkforhold gjør forbikjøring farlig. [Les mer om når forbikjøring er forbudt](/laeringsressurser/forbikjoring).</p>
  </div>
  <div>
    <strong style="font-size:1rem;color:var(--color-text)">Dobbel heltrukken linje</strong>
    <div style="background:#2d2d2d;border-radius:6px;padding:12px 16px;margin:8px 0">
      <div style="font-size:10px;color:#999;margin-bottom:6px">→ Din retning</div>
      <div style="height:2.5px;background:white;border-radius:2px;margin-bottom:4px"></div>
      <div style="height:2.5px;background:white;border-radius:2px"></div>
      <div style="font-size:10px;color:#999;margin-top:6px">← Motgående trafikk</div>
    </div>
    <p style="color:var(--color-text-light);line-height:1.6;margin:0">Absolutt forbud mot å krysse fra begge sider. Brukes på veier med mye trafikk eller særlig dårlig sikt. Ingen unntak.</p>
  </div>
  <div>
    <strong style="font-size:1rem;color:var(--color-text)">Kombinerte linjer (én stiplet + én heltrukken)</strong>
    <div style="background:#2d2d2d;border-radius:6px;padding:12px 16px;margin:8px 0">
      <div style="font-size:10px;color:#9fe1cb;margin-bottom:6px">→ Kan krysse (stiplet side)</div>
      <div style="height:2.5px;background:repeating-linear-gradient(90deg,white 0px,white 16px,transparent 16px,transparent 26px);border-radius:2px;margin-bottom:4px"></div>
      <div style="height:2.5px;background:white;border-radius:2px"></div>
      <div style="font-size:10px;color:#f09595;margin-top:6px">← Kan IKKE krysse (heltrukken side)</div>
    </div>
    <p style="color:var(--color-text-light);line-height:1.6;margin:0">Her gjelder regelen for linjen nærmest deg. Kjører du på siden med den stiplete linjen, kan du krysse om det er trygt. Kjører du på siden med den heltrukne, er det forbudt.</p>
  </div>
</div>`
            },
            {
                title: 'Interaktiv guide — klikk og lær',
                type: 'calculator',
                content: 'Klikk på linjene under for å se hva de betyr:'
            },
            {
                title: 'Gule linjer',
                type: 'text',
                content: '**Gul varsellinje**\nEn gul stiplet linje advarer om at sikten fremover er begrenset — for eksempel i en kurve eller over en bakketopp. Gul varsellinje betyr at det er risikabelt å kjøre forbi, men ikke nødvendigvis forbudt.\n\n**Gul sperrelinje**\nHeltrukken gul linje forbyr kjøring til venstre for linjen. Dette er spesielt viktig å kjenne til: det er forbudt å krysse eller kjøre til venstre for gul sperrelinje — selv om du har god sikt.\n\n**Kantlinje**\nMarkerer yttergrensen av kjørebanen mot veikanten eller skulder. Hvit kantlinje er standard — gul kantlinje langs fortau eller parkering indikerer stans- og parkeringsforbud.'
            },
            {
                title: 'Tverrgående merking',
                type: 'text',
                content: '**Stopplinje**\nEn bred hvit tverrstrek som markerer nøyaktig hvor du skal stoppe — ved rødt lys, stoppskilt eller på annen måte når du er pålagt å stanse. Du skal stoppe før linjen, ikke på den.\n\n**Vikelinje (haifinner)**\nEn rekke hvite trekanter på tvers av kjøreretningen din. De peker mot deg og forteller deg at du har vikeplikt. Du skal stanse ved vikelinjen om nødvendig.\n\n**Gangfelt**\nBrede hvite striper på tvers av veien. Fotgjengere har forkjørsrett i gangfelt — du plikter å stanse for fotgjengere som er i gangfeltet eller på vei ut i det.\n\n**Sykkelkryssing**\nStiplet oppmerking som ligner gangfelt men for syklister. Syklister har ikke automatisk forkjørsrett her — du må vurdere situasjonen.'
            },
            {
                title: 'Pilmerking',
                type: 'info',
                content: 'Piler i kjørefeltet forteller deg hvilken retning du skal kjøre. Der det er sperrelinjer er pilene påbud — du må kjøre i den retningen pilen viser. Der det bare er feltlinjer er pilen en anbefaling, men du bør følge den.\n\nTypiske kombinasjoner du ser i kryss: rett frem, venstre, høyre, eller kombinasjoner som "rett frem eller høyre".'
            },
            {
                title: 'Symboler i veibanen',
                type: 'text',
                content: 'Vikesymbol (omvendt trekant malt i asfalten) varsler deg om kommende vikeplikt — det gir deg ekstra tid til å forberede deg, og brukes ofte i forkant av vikelinjen.\n\nGangsymbol viser at fotgjengere bruker det området. Sykkelsymbol markerer sykkelfelt — her gjelder trafikkreglenes bestemmelser om sykkelfelt.\n\nTekst som "STOPP", "BUSS", "TAXI" og "SKOLE" gir stedsspesifikk informasjon. "STOPP" hører sammen med stoppskilt. "BUSS" markerer kollektivfelt.'
            },
            {
                title: 'De vanligste feilene på teoriprøven',
                type: 'warning',
                content: 'Disse scenarioene dukker jevnlig opp:\n\n- **Kombinerte linjer** er den hyppigste kilden til feil — mange tror begge sider av en kombinert linje har samme regler. Husk: linjen nærmest deg bestemmer.\n- **Gul sperrelinje** forveksles med hvit sperrelinje. Gul gjelder spesielt mot venstre — du kan ikke krysse eller kjøre til venstre for den uansett sikt.\n- **Gangfelt vs. sykkelkryssing** — fotgjengere har forkjørsrett i gangfelt, syklister har det ikke automatisk i sykkelkryssing.\n- **Vikelinje vs. stopplinje** — ved vikelinje kan du kjøre sakte forbi hvis veien er fri. Ved stopplinje skal du alltid stanse helt.'
            },
            {
                title: 'Klar til å teste?',
                type: 'tip',
                content: 'Veimerking er en fast del av teoriprøven. Kombiner denne artikkelen med [vår gratis øvingsprøve](/quiz) for å se om du klarer å identifisere riktig linje i typiske situasjonsbilder. Sjekk også [trafikkskilt-guiden](/laeringsressurser/skilt) for å forstå samspillet mellom skilt og veimerking.\n\n[Les om vikeplikt og høyreregelen](/laeringsressurser/vikeplikt)'
            }
        ],
        faq: [
            {
                question: 'Hva er forskjellen på sperrelinje og varsellinje?',
                answer: 'Sperrelinje (heltrukken) forbyr overkjøring fullstendig. Varsellinje (stiplet, lengre streker enn normal feltlinje) advarer om dårlig sikt og anbefaler å ikke kjøre forbi, men forbyr det ikke direkte.'
            },
            {
                question: 'Kan jeg krysse en hvit sperrelinje for å svinge inn i en avkjørsel?',
                answer: 'Ja — du kan krysse en hvit sperrelinje for å kjøre inn eller ut av en eiendom, men du kan ikke krysse den for forbikjøring.'
            },
            {
                question: 'Hva betyr gul varsellinje kontra hvit varsellinje?',
                answer: 'Gul varsellinje varsler om begrenset sikt for sikker forbikjøring. Hvit varsellinje indikerer risiko ved feltskifte. Begge er stiplete linjer med lengre streker enn vanlig feltlinje.'
            },
            {
                question: 'Hva er et sperreområde?',
                answer: 'Et sperreområde er avgrenset av heltrukne linjer med skravering inni. Det er forbudt å kjøre inn i et sperreområde.'
            },
            {
                question: 'Må jeg stoppe ved vikelinje?',
                answer: 'Ikke alltid — du skal stoppe dersom det er nødvendig for å overholde vikeplikten. Er veien fri, kan du passere vikelinjen uten å stanse.'
            }
        ]
    },

    {
        id: 'rundkjoring',
        title: 'Vikeplikt i rundkjøring',
        icon: '🔄',
        shortDescription: 'Lær reglene for vikeplikt, blinking og plassering i rundkjøring',
        color: '#2563eb',
        seoTitle: 'Vikeplikt i rundkjøring – regler, blinking og vanlige feil | Teori-test.no',
        seoDescription: 'Hvem har vikeplikt i rundkjøring? Lær reglene for innkjøring, feltskifte og blinking – med vanlige teoriprøve-feller og eksempler fra Statens vegvesen.',
        sections: [
            {
                title: 'Vikeplikt i rundkjøring',
                type: 'text',
                content: 'Rundkjøringen er ett av de temaene flest gjør feil på i teoriprøven. Reglene er enkle i teorien, men i praksis er det mange situasjoner som forvirrer — særlig feltskifte inne i rundkjøringen, riktig bruk av blinklys og hva som gjelder når du kjører ut.\n\nDenne artikkelen går gjennom alle vikepliktreglene i rundkjøring, svarer på de vanligste spørsmålene og hjelper deg å unngå fellene på teoriprøven.'
            },
            {
                title: 'Se det i praksis',
                type: 'component',
                content: '',
                component: 'RundkjoringAnimasjon'
            },
            {
                title: 'Hovedregelen: Du har alltid vikeplikt ved innkjøring',
                type: 'info',
                content: 'Når du kjører inn i en rundkjøring, har du vikeplikt for all trafikk som allerede befinner seg inne i rundkjøringen. Dette gjelder uansett hvilken retning de kommer fra — høyreregelen gjelder ikke her.\n\nDu skal senke farten når du nærmer deg rundkjøringen, stoppe om nødvendig ved vikepliktlinjen, og vente til det er trygt å kjøre inn. Vikepliktskiltet ved inngangen bekrefter dette. I Norge er alle rundkjøringer skiltet med vikeplikt ved innkjøringen.'
            },
            {
                title: 'Slik bruker du blinklys i rundkjøring',
                type: 'warning',
                content: 'Blinklys er et av de vanligste feilpunktene i rundkjøring. Her er reglene:\n\n**Ved høyresving (første avkjøring):** Blink til høyre i god tid før du kjører inn i rundkjøringen. Behold blinklyset på til du har kjørt ut.\n\n**Ved kjøring rett frem:** Ikke blink ved innkjøring. Blink til høyre når du er på høyde med utkjøringen rett før din egen.\n\n**Ved venstresving (mer enn halvveis rundt):** Det er ikke påbudt, men det anbefales å blinke til venstre ved innkjøring for å vise at du skal langt rundt. Bytt til høyre blink når du er på høyde med utkjøringen rett før din egen.\n\n**Tidspunkt:** I tettbygd strøk bør du blinke 50–80 meter før. Utenfor tettbygd strøk 150–250 meter før.'
            },
            {
                title: 'Feltskifte inne i rundkjøringen',
                type: 'warning',
                content: 'Dette er det temaet som forvirrer flest. Når du allerede er inne i rundkjøringen og skal skifte felt, har du vikeplikt for trafikk i feltet du skal inn i. Flettereglene gjelder ikke i rundkjøringer.\n\nEksempel: Du kjører i ytre felt og vil inn i indre felt — da har du vikeplikt for biler i indre felt.\n\nHusk alltid å blinke ved feltskifte, også inne i rundkjøringen, og sjekk blindsonen.'
            },
            {
                title: 'Riktig plassering i rundkjøringen',
                type: 'info',
                content: 'Plassering og blinking henger tett sammen — du skal plassere deg slik at det er lett for andre å forstå hvor du skal.\n\nI rundkjøringer med to kjørefelt gjelder følgende tommelfingerregel:\n\n- **Høyre kjørefelt:** For høyresving og kjøring rett frem (1. og 2. avkjøring)\n- **Venstre kjørefelt:** For venstresving og U-sving (3. og 4. avkjøring)\n\nI mini-rundkjøringer med ett kjørefelt gjelder de samme vikepliktreglene. Store kjøretøy kan kjøre over den lave midtøyen om nødvendig.'
            },
            {
                title: 'Vikeplikt når du kjører ut',
                type: 'info',
                content: 'Når du kjører ut av rundkjøringen har du vikeplikt for fotgjengere og syklister i gangfelt og sykkelfelt ved utkjøringen. Du har ikke vikeplikt for biler som fortsatt kjører inne i rundkjøringen.\n\nHusk å blinke til høyre i god tid — begynn når du passerer utkjøringen rett før din egen. Sjekk alltid blindsonen før du svinger ut.'
            },
            {
                title: 'Trikk, buss og utrykningskjøretøy',
                type: 'text',
                content: 'Trikk har ikke vikeplikt i rundkjøring. Du skal alltid gi vikeplikt for trikk, siden trikken kjører på skinner og ikke kan svinge unna.\n\nBuss følger de samme reglene som andre kjøretøy i rundkjøringen.\n\nUtrykningskjøretøy med blålys og sirene har alltid forkjørsrett. Kjør til høyre og stopp for å gi fri passasje.'
            },
            {
                title: 'De vanligste feilene på teoriprøven',
                type: 'tip',
                content: '- Tror høyreregelen gjelder ved innkjøring — den gjør det ikke\n- Glemmer å blinke til høyre ved utkjøring\n- Tror venstreblink ved innkjøring er påbudt — det er anbefalt, ikke lovpålagt\n- Glemmer vikeplikt for fotgjengere ved utkjøring\n- Tror trikk har vikeplikt i rundkjøring — det har den ikke\n- Glemmer blinklys og vikeplikt ved feltskifte inne i rundkjøringen\n- Tror flettereglene gjelder inne i rundkjøringen — de gjør det ikke'
            },
            {
                title: 'Klar til å teste kunnskapen?',
                type: 'info',
                content: 'Ta vikeplikt-quizen og se om du kan svare rett på de vanligste rundkjøringsspørsmålene fra teoriprøven. Les også vår komplette guide om [vikeplikt generelt](/laeringsressurser/vikeplikt).'
            }
        ],
        faq: [
            {
                question: 'Hvem har vikeplikt i rundkjøring?',
                answer: 'Den som kjører inn i rundkjøringen har alltid vikeplikt for trafikk som allerede er inne i rundkjøringen. Høyreregelen gjelder ikke i rundkjøringer.'
            },
            {
                question: 'Har man vikeplikt fra venstre i rundkjøring?',
                answer: 'Nei. Inne i rundkjøringen gjelder ikke høyreregelen. All trafikk som allerede er inne har forkjørsrett over deg som kjører inn, uansett hvilken side de kommer fra.'
            },
            {
                question: 'Hvem har vikeplikt ved feltskifte i rundkjøring?',
                answer: 'Den som skifter felt har vikeplikt for trafikk i feltet han skal inn i. Flettereglene gjelder ikke i rundkjøringer. Husk å bruke blinklys og sjekk blindsonen.'
            },
            {
                question: 'Skal man blinke til venstre inn i rundkjøringen?',
                answer: 'Det er ikke påbudt, men anbefalt hvis du skal mer enn halvveis rundt. Det hjelper andre trafikanter å forstå at du ikke skal umiddelbart til høyre. Blink alltid til høyre når du nærmer deg din utkjøring.'
            },
            {
                question: 'Har trikk vikeplikt i rundkjøring?',
                answer: 'Nei. Trikk har ikke vikeplikt i rundkjøring. Du skal alltid gi vikeplikt for trikk, siden trikken kjører på skinner og ikke kan svinge unna.'
            },
            {
                question: 'Hvem har vikeplikt ut av rundkjøring?',
                answer: 'Den som kjører ut av rundkjøringen har vikeplikt for fotgjengere og syklister i gangfelt og sykkelfelt ved utkjøringen. Husk å blinke til høyre og sjekk blindsonen.'
            },
            {
                question: 'Har man alltid vikeplikt fra høyre?',
                answer: 'Høyreregelen gjelder i vanlige kryss uten skilt, men ikke i rundkjøringer. I rundkjøringen er det alltid de som allerede er inne som har forkjørsrett.'
            },
            {
                question: 'Gjelder flettereglene i rundkjøring?',
                answer: 'Nei. Flettereglene gjelder ikke i rundkjøringer. Den som skifter felt har alltid vikeplikt, uansett posisjon.'
            }
        ]
    },

    {
        id: 'forbikjoring',
        title: 'Forbikjøring – regler, forbud og feller | Teori-test.no',
        icon: '🚗',
        shortDescription: 'Lær reglene for forbikjøring til teoriprøven klasse B: gangfelt, kryss, høyre side, forbikjøringsforbud, syklist, buss, traktor og motorvei.',
        color: '#eab308',
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
        color: '#f59e0b',
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
        title: 'Trafikkskilt – Komplett oversikt til teoriprøven for bil',
        icon: '🚦',
        shortDescription: 'Trafikkskilt er hjørnesteinen i trafikksikkerhet. Her får du vår komplette guide til de norske trafikkskiltene du må kjenne til for klasse B.',
        color: '#059669',
        seoTitle: 'Trafikkskilt til teoriprøven (Klasse B): Komplett oversikt 2026 | Teori-test.no',
        seoDescription: 'Sliter du med å huske trafikkskiltene? Få en enkel og komplett oversikt over forbudsskilt, fareskilt og vikeplikt. Lær de vanligste eksamensfellene her!',
        sections: [
            {
                title: '1. Knekk koden: Slik er norske trafikkskilt organisert',
                type: 'signs',
                content: 'Norske trafikkskilt er delt inn i faste kategorier basert på farge og form. Kjenner du fargekoden og formen, kan du ofte gjette deg til hva et ukjent skilt betyr på teoritentamen:',
                signs: [
                    {
                        name: 'Forbudsskilt',
                        description: 'Runde med rød kant: Forteller deg strengt hva du ikke har lov til.',
                        signId: 'prohibition-template'
                    },
                    {
                        name: 'Påbudsskilt',
                        description: 'Runde med blå bunn: Forteller deg hva du må gjøre.',
                        signId: 'mandatory-template'
                    },
                    {
                        name: 'Fareskilt',
                        description: 'Trekantede med rød kant: Varsler om fare fremover, slik at du kan senke farten.',
                        signId: 'danger-template'
                    },
                    {
                        name: 'Vikepliktsskilt',
                        description: 'Ulike former: Forteller hvem som skal vike for hvem i et veikryss eller på en strekning.',
                        signId: 'yield'
                    },
                    {
                        name: 'Opplysningsskilt',
                        description: 'Firkantede: Gir deg nyttig informasjon, uten å forby eller påby noe.',
                        signId: 'info-template'
                    },
                    {
                        name: 'Underskilt',
                        description: 'Rektangulære små skilt: Står alltid under et hovedskilt for å presisere når eller for hvem hovedskiltet gjelder.',
                        signId: 'sub-sign-template'
                    }
                ]
            },
            {
                title: '2. Vikepliktsskilt og forkjørsregulering',
                type: 'signs',
                content: 'Dette er skiltene som styrer hvem som har retten på sin side. Fordi konsekvensene er så store ved feil, har disse skiltene unike former, slik at du kjenner dem igjen selv om de er dekket av snø:\n\n[Les mer i vår komplette guide til vikeplikt og høyreregelen](/laeringsressurser/vikeplikt)',
                signs: [
                    {
                        name: 'Vikeplikt',
                        description: 'Trekant med spissen ned: Du skal vike for all trafikk på kryssende vei.',
                        signId: 'yield'
                    },
                    {
                        name: 'Stopp',
                        description: 'Rød åttekant: Du MÅ stoppe helt opp ved stopplinjen (eller før krysset), selv om veien virker helt klar. Bilen skal stå helt stille.',
                        signId: 'stop'
                    },
                    {
                        name: 'Forkjørsvei',
                        description: 'Gul rute / Diamant: Du har forkjørsrett. Trafikk fra sideveier har vikeplikt for deg.',
                        signId: 'priority-road'
                    },
                    {
                        name: 'Slutt på forkjørsvei',
                        description: 'Gul rute med grå skravering: Forkjørsretten din er over, og du må vanligvis forholde deg til høyreregelen igjen.',
                        signId: 'end-priority-road'
                    }
                ]
            },
            {
                title: '3. Forbudsskilt – Hva du ikke har lov til',
                type: 'signs',
                content: 'Disse skiltene er runde med en tydelig rød kant på hvit bunn.',
                signs: [
                    {
                        name: 'Fartsgrense 50',
                        description: 'Viser maksimal lovlig hastighet. Dette skiltet gjelder frem til du passerer et nytt fartsgrenseskilt.',
                        signId: 'speed-50'
                    },
                    {
                        name: 'Innkjøring forbudt',
                        description: 'Gjelder kun i den retningen du ser skiltet. Det betyr vanligvis at det er en enveiskjørt gate du forsøker å kjøre inn i fra feil side.',
                        signId: 'no-entry'
                    },
                    {
                        name: 'Parkering forbudt',
                        description: 'Du kan stoppe for å slippe av en passasjer, men du kan ikke forlate bilen.',
                        signId: 'no-parking'
                    },
                    {
                        name: 'All stans forbudt',
                        description: 'Her har du ikke engang lov til å stoppe for å slippe av eller plukke opp noen.',
                        signId: 'no-stopping'
                    }
                ]
            },
            {
                title: '4. Fareskilt – Vær forberedt',
                type: 'signs',
                content: 'Fareskiltene varsler om farlige forhold fremover. Avstanden fra skiltet til faren avhenger av fartsgrensen:\n- Inntil 60 km/t: ca. 50–150 meter før faren.\n- 70 km/t eller mer: ca. 150–250 meter før faren.\n- 90 km/t eller mer: ofte inntil 400 meter før faren.',
                signs: [
                    {
                        name: 'Farlig sving (Høyre)',
                        description: 'Varsler om en sving som er skarpere enn veien ellers gir inntrykk av.',
                        signId: 'dangerous-curve-right'
                    },
                    {
                        name: 'Glatt vei',
                        description: 'Vær forberedt på at underlaget kan være spesielt glatt, for eksempel ved regn eller frost.',
                        signId: 'slippery-road'
                    },
                    {
                        name: 'Vegarbeid',
                        description: 'Betyr at du må forvente nedsatt fartsgrense, arbeidere i veibanen og endret kjøremønster.',
                        signId: 'road-work'
                    },
                    {
                        name: 'Elg / Vilt',
                        description: 'Vær ekstremt oppmerksom på dyr i vegbanen, spesielt i skumring og demring.',
                        signId: 'moose'
                    }
                ]
            },
            {
                title: '5. Påbudsskilt – Ting du må gjøre',
                type: 'signs',
                content: 'Hvordan ser påbudsskilt ut? Påbudsskiltene er runde med blå bunn, hvit bord/kant og hvite symboler. Skiltene gir påbud om kjøreretning, bruk av kjørefelt og bestemte kjøremåter.',
                signs: [
                    {
                        name: 'Påbudt kjøreretning (Rett frem)',
                        description: 'Viser deg hvilken vei du må svinge i et kryss. Du kan ikke velge andre retninger.',
                        signId: 'mandatory-straight'
                    },
                    {
                        name: 'Påbudt rundkjøring',
                        description: 'Viser at du nærmer deg en rundkjøring og må følge kjøreretningen mot klokka.',
                        signId: 'roundabout'
                    }
                ]
            },
            {
                title: '6. Veivisningsskilt – Finn frem i trafikken',
                type: 'info',
                content: 'Veivisningsskilt hjelper deg å finne frem til riktig sted. Fargen på bakgrunnen forteller deg hva slags type mål skiltet peker mot:\n- Blå bakgrunn: Geografiske mål på motorvei.\n- Gul bakgrunn: Geografiske mål på vanlige veier.\n- Hvit bakgrunn: Lokale mål og bedrifter.\n- Oransje bakgrunn: Midlertidig omkjøring.\n- Brun bakgrunn: Turistmål og severdigheter.'
            },
            {
                title: 'Viktig: Midlertidig skilting overstyrer alt',
                type: 'warning',
                content: 'Trafikkskilt med gul bakgrunn (gule skilt) betyr at det er en midlertidig situasjon, for eksempel på grunn av vegarbeid. Disse skiltene overstyrer ALLTID de permanente skiltene på strekningen. Pass ekstremt godt på midlertidige fartsgrenser og vikeplikt her!'
            },
            {
                title: 'De 3 vanligste skilt-feilene på teoriprøven',
                type: 'warning',
                content: 'For å bestå teoriprøven hos Statens vegvesen på første forsøk, må du unngå disse klassiske tabbene:\n\n1. Forveksle stans og parkering: Mange blander «Parkering forbudt» (én skråstrek) med «All stans forbudt» (to skråstreker i kryss).\n2. Glemme hvor fareskilt gjelder: Fareskiltet gjelder ikke nøyaktig der stolpen står, det varsler om en fare et stykke lengre fremme.\n3. Misforstå fartsgrenser for gågate og gatetun: Fartsgrensen her er ikke 30 km/t, men gangfart (altså at du skal kjøre i samme tempo som folk går).'
            },
            {
                title: 'Ofte stilte spørsmål om trafikkskilt (FAQ)',
                type: 'info',
                content: 'Hvor mange spørsmål om skilt får jeg på teoriprøven?\nDu får 45 spørsmål totalt på teoriprøven for bil. Skilt, vikeplikt og vegoppmerking utgjør en svært stor del av disse oppgavene. Du kan maksimalt ha 7 feil for å bestå.\n\nHva er standard fartsgrense i Norge hvis det ikke er skiltet?\nDersom du ikke ser noen fartsgrenseskilt, er hovedregelen at fartsgrensen er 50 km/t i tettbygd strøk, og 80 km/t utenfor tettbygd strøk.\n\nHvilket trafikkskilt overstyrer alt annet?\nTrafikkskilt overstyres alltid av trafikklys og av manuell dirigering fra politiet. Hvis et lyskryss derimot slutter å fungere (blinker gult), er det skiltene som gjelder.\n\nFøler du deg klar? [Prøv skilt-quizen her](/quiz/skilt)'
            }
        ],
        faq: [
            {
                question: 'Hvor mange spørsmål om skilt får jeg på teoriprøven?',
                answer: 'Du får 45 spørsmål totalt på teoriprøven for bil. Skilt, vikeplikt og vegoppmerking utgjør en svært stor del av disse oppgavene. Du kan maksimalt ha 7 feil for å bestå.'
            },
            {
                question: 'Hva er standard fartsgrense i Norge hvis det ikke er skiltet?',
                answer: 'Dersom du ikke ser noen fartsgrenseskilt, er hovedregelen at fartsgrensen er 50 km/t i tettbygd strøk, og 80 km/t utenfor tettbygd strøk.'
            },
            {
                question: 'Hvilket trafikkskilt overstyrer alt annet?',
                answer: 'Trafikkskilt overstyres alltid av trafikklys og av manuell dirigering fra politiet. Hvis et lyskryss derimot slutter å fungere (blinker gult), er det skiltene som gjelder.'
            }
        ]
    },

    {
        id: 'fartsgrenser',
        title: 'Fartsgrenser i Norge: Alt du må vite til teoriprøven',
        icon: '⚡',
        shortDescription: 'Lær alle fartsgrenser i Norge til teoriprøven: 30, 50, 80 og 110 km/t, regler for skole og tilhenger, hva fartsbøter koster og prikker i førerkortet.',
        color: '#ef4444',
        seoTitle: 'Fartsgrenser i Norge: Alt du må vite til teoriprøven',
        seoDescription: 'Lær alle fartsgrenser i Norge til teoriprøven: 30, 50, 80 og 110 km/t, regler for skole og tilhenger, hva fartsbøter koster og prikker i førerkortet.',
        sections: [
            {
                title: 'Fartsgrenser i Norge: Alt du må vite til teoriprøven',
                type: 'text',
                content: 'Fartsgrenser er ett av de temaene du garantert møter på teoriprøven. Her får du en fullstendig oversikt over alle gjeldende fartsgrenser, hva bøtene koster, og hvordan prikkesystemet fungerer.'
            },
            {
                title: 'De generelle fartsgrensene',
                type: 'info',
                content: 'I Norge gjelder disse standardfartsgrensene der ingen skilt sier noe annet:\n\n• Tettbygd strøk: 50 km/t\n• Utenfor tettbygd strøk: 80 km/t\n• Motorvei: 100 eller 110 km/t\n\nHuskeregel: Ser du ingen fartsgrenseskilt og er i tettbygd strøk → 50 km/t. Er du utenfor tettbygd strøk → 80 km/t.'
            },
            {
                title: 'Lavere fartsgrenser og gangfart — når gjelder de?',
                type: 'text',
                content: 'På mange veier er fartsgrensen lavere enn standarden på 50 km/t. Dette er typisk i:\n\nGangfart (ca. 5-7 km/t): I gågater og på gatetun (blått skilt med hus og lekende barn) er fartsgrensen alltid gangfart. Dette er et klassisk lurespørsmål på teoriprøven! Du skal aldri kjøre fortere enn at du kan stoppe på en femøring, og de gående har alltid førsteprioritet.\n\n30 km/t: Gjelder ofte nær skoler, barnehager og i tette boliggater. Husk at hvis du kjører inn i en "30-sone", gjelder grensen for hele området og alle sideveier, helt til et skilt opphever sonen.\n\n40 km/t: Vanlig i bymiljøer og ved lekeplasser. Fysiske fartsdumper er ofte plassert i 30- og 40-soner.'
            },
            {
                title: 'Spesielle fartsgrenser du må huske',
                type: 'warning',
                content: 'Noen kjøretøy og situasjoner har egne regler — og disse er favoritter på teoriprøven.\n\nMed tilhenger (De nye reglene): Fartsgrensen avhenger av tilhengerens bremser og vekt:\n- Maks 60 km/t: Hvis tilhengeren er uten bremser, og den aktuelle totalvekten er over 300 kg.\n- Maks 80 km/t: Hvis tilhengeren har bremser (eller er uten bremser, men veier under 300 kg).\n- Maks 100 km/t (Tempo 100): Hvis både bil og tilhenger er spesialgodkjent for "Tempo 100", kan du kjøre i 100 km/t på motorvei som er skiltet med 100 eller 110.\n\n• Moped (45 km/t-moped): Maks 45 km/t uansett fartsgrense på veien.\n• Traktor: Maks 40 km/t.\n• Tunge kjøretøy over 3 500 kg: Maks 80 km/t på alle veier.'
            },
            {
                title: '110 km/t på motorvei — hva gjelder?',
                type: 'info',
                content: '110 km/t er den høyeste fartsgrensen i Norge og gjelder kun på utvalgte motorveistrekninger der det er skiltet. Det er ikke automatisk 110 km/t på alle motorveier — sjekk alltid skiltene.\n\nDe fleste motorveier er skiltet 100 km/t. Noen strekninger, særlig rundt Oslo og Bergen, er hevet til 110 km/t etter dokumenterte sikkerhetsvurderinger.'
            },
            {
                title: 'Fartsbøter og prikker i førerkortet (ved 50 km/t grense)',
                type: 'warning',
                content: 'Dette er noe veldig mange unge lurer på — og det er god grunn til det.\n\nPrikker i førerkortet:\nDu får prikker når du kjører mer enn 10 km/t over fartsgrensen (der grensen er 60 km/t eller lavere) eller mer enn 15 km/t over (der grensen er 70 km/t eller høyere). Samler du 8 prikker på 3 år mister du førerretten i 6 måneder.\n\nBøtesatser 2025 (ved 50 km/t fartsgrense):\n• Inntil 5 km/t over: 1 250 kr\n• 6–10 km/t over: 3 350 kr\n• 11–15 km/t over: 5 950 kr\n• 16–20 km/t over: 8 650 kr\n• Over 25 km/t over: Fra 13 450 kr + mulig tap av lappen\n\nVed kraftig overskridelse (vanligvis 30+ km/t over) mister du førerkortet og saken kan gå til retten.\n\nViktig for deg under 18 år: Du er på prøveperiode de to første årene. Én alvorlig forseelse kan bety at du mister lappen og må ta den på nytt.'
            },
            {
                title: 'Fartsgrenser og bremselengde — sammenhengen',
                type: 'text',
                content: 'Dette er et klassisk teoriprøve-spørsmål. Fart har dramatisk effekt på bremselengde fordi bremseenergien øker med kvadratet av farten:\n\n• 50 km/t → bremselengde ca. 13 meter (tørr asfalt)\n• 80 km/t → bremselengde ca. 32 meter\n• 100 km/t → bremselengde ca. 50 meter\n\nDobler du farten, firedobles bremselengden — ikke dobbles. For total stopplengde (reaksjonstid + bremsing) blir forskjellen enda større.\n\nTest deg selv: Å regne ut nøyaktig stopplengde er en gjenganger på teoriprøven. [Prøv vår interaktive bremselengde-kalkulator](/laeringsressurser/bremselengde) for å se nøyaktig hvor mange meter bilen din trenger for å stoppe på ulike underlag!'
            },
            {
                title: 'Tips for å huske fartsgrensene til teoriprøven',
                type: 'tip',
                content: '• Ingen skilt i by = 50. Det er alltid utgangspunktet i tettbygd strøk.\n• Ingen skilt på landet = 80. Gjelder utenfor tettbygd strøk.\n• Tilhenger = alltid maks 80, uansett hva veien er skiltet (uten Tempo 100).\n• Skolen er ofte 30, med eller uten fartsdump.\n• 110 km/t finnes bare der det er skiltet — anta aldri 110.'
            },
            {
                title: 'Vanlige spørsmål om fartsgrenser (FAQ)',
                type: 'info',
                content: 'Q: Hva er fartsgrensen der det ikke er satt opp skilt?\nA: I tettbygd strøk er den 50 km/t, og utenfor tettbygd strøk er den 80 km/t. Dette følger av trafikkreglene § 13.\n\nQ: Kan kommunen sette lavere fartsgrenser?\nA: Ja. Kommunen kan skilte lavere grenser enn de nasjonale standardene, for eksempel 30 km/t i boliggater.\n\nQ: Mister man lappen første gang man kjører for fort?\nA: Ikke nødvendigvis, men ved alvorlig overskridelse (typisk 30+ km/t over) kan førerretten inndras selv første gang.\n\nQ: Gjelder 50 km/t også på riksveier gjennom tettsteder?\nA: Ja. Fartsgrensen følger veitype og bebyggelse, ikke om veien er en riksvei eller kommunal vei.'
            }
        ]
    },

    {
        id: 'reaksjonstid',
        title: 'Reaksjonstid og stopplengde – slik regner du det ut (Klasse B)',
        icon: '⏱️',
        shortDescription: 'Lær hva reaksjonstid er, hvordan du regner ut reaksjonslengde og stopplengde til teoriprøven. Tabeller, formler og interaktiv test for klasse B.',
        color: '#2563eb',
        seoTitle: 'Reaksjonstid og stopplengde – slik regner du det ut (Klasse B) | Teori-test.no',
        seoDescription: 'Lær hva reaksjonstid er, hvordan du regner ut reaksjonslengde og stopplengde til teoriprøven. Tabeller, formler og interaktiv test for klasse B.',
        sections: [
            {
                title: 'Hva er reaksjonstid?',
                type: 'text',
                content: 'Før bilen begynner å bremse, har du allerede kjørt langt. Reaksjonstiden er den usynlige faren de fleste undervurderer — og en av de viktigste grunnene til ulykker på norske veier.\n\nReaksjonstid er tiden det tar fra du oppdager en fare til foten faktisk treffer bremsepedalen. For en uthvilt og edru sjåfør er dette normalt ca. 1 sekund. Det høres kort ut — men i løpet av det sekundet fortsetter bilen med full fart uten at du gjør noe som helst.\n\nI mørket er det spesielt viktig å huske på dette. Se også [lysbruk og mørkekjøring](/laeringsressurser/lysbruk-morkekjoring).'
            },
            {
                title: 'Test din egen reaksjonstid:',
                type: 'calculator',
                content: 'Sjekk hvor raskt du reagerer! Testen under simulerer en nødbrems-situasjon i 80 km/t. Klarer du å reagere raskere enn gjennomsnittet?'
            },
            {
                title: 'Reaksjonslengde — hvor langt kjører du før du bremser?',
                type: 'table',
                content: 'Formelen er: **Reaksjonslengde = (fart ÷ 10) × 3 meter**\n\n<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Hastighet</th><th style="padding: 12px 8px;">Reaksjonslengde</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">30 km/t</td><td style="padding: 12px 8px;">9 meter</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">50 km/t</td><td style="padding: 12px 8px;">15 meter</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">80 km/t</td><td style="padding: 12px 8px;">24 meter</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">100 km/t</td><td style="padding: 12px 8px;">30 meter</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">120 km/t</td><td style="padding: 12px 8px;">36 meter</td></tr></tbody></table></div>\n\nTenk på det slik: ved 80 km/t kjører du nesten tre bilengder før du i det hele tatt begynner å bremse.'
            },
            {
                title: 'Hva øker reaksjonstiden din?',
                type: 'info',
                content: 'Dette er faktorer som gjør at du reagerer langsommere — og som teoriprøven elsker å spørre om:\n\n- **Tretthet** — kan doble eller tredoble reaksjonstiden. En sjåfør som har vært våken i 20 timer reagerer like sakte som en med 0,8 i promille\n- **Alkohol og medisiner** — selv små mengder forsinker signalene fra øynene til hjernen til foten\n- **Mobilbruk** — ikke bare hånden på telefonen, men selve tankene dine er et annet sted. Reaksjonstiden øker med opptil 40 % selv med handsfree\n- **Uoppmerksomhet** — samtale med passasjer, radio, tanker om andre ting\n- **Mørke og dårlig sikt** — du oppdager faren senere og må reagere raskere\n- **Alder** — eldre sjåfører reagerer noe langsommere, men kompenserer med erfaring'
            },
            {
                title: 'Stopplengde = reaksjonslengde + bremselengde',
                type: 'table',
                content: 'Stopplengden er den totale avstanden fra du oppdager faren til bilen faktisk stopper. Bremselengden øker kvadratisk med farten — det vil si at dobbel fart gir firedobbel bremselengde.\n\n<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 1rem;"><table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;"><thead><tr style="background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);"><th style="padding: 12px 8px;">Hastighet</th><th style="padding: 12px 8px;">Reaksjonslengde</th><th style="padding: 12px 8px;">Bremselengde (tørr)</th><th style="padding: 12px 8px;">Stopplengde</th></tr></thead><tbody><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">30 km/t</td><td style="padding: 12px 8px;">9 m</td><td style="padding: 12px 8px;">4,5 m</td><td style="padding: 12px 8px;">13,5 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">50 km/t</td><td style="padding: 12px 8px;">15 m</td><td style="padding: 12px 8px;">12,5 m</td><td style="padding: 12px 8px;">27,5 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">80 km/t</td><td style="padding: 12px 8px;">24 m</td><td style="padding: 12px 8px;">32 m</td><td style="padding: 12px 8px;">56 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">100 km/t</td><td style="padding: 12px 8px;">30 m</td><td style="padding: 12px 8px;">50 m</td><td style="padding: 12px 8px;">80 m</td></tr><tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px 8px;">120 km/t</td><td style="padding: 12px 8px;">36 m</td><td style="padding: 12px 8px;">72 m</td><td style="padding: 12px 8px;">108 m</td></tr></tbody></table></div>'
            },
            {
                title: 'Tips: Vil du regne på andre forhold?',
                type: 'text',
                content: '[Bruk vår interaktive bremselengde-kalkulator for å beregne stopplengde ved ulike hastigheter og veiforhold](/laeringsressurser/bremselengde)'
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
                content: '• **Hva er normal reaksjonstid for en opplagt sjåfør?** → Ca. 1 sekund\n• **Hva skjer med reaksjonstiden ved tretthet?** → Den kan doble eller tredoble seg\n• **Hva er stopplengde?** → Reaksjonslengde + bremselengde\n• **Hva skjer med bremselengden når farten dobles?** → Den firedobles\n• **Hva er 3-sekunders regelen?** → Minimum avstand til bilen foran i normale forhold\n\n[Les også vår bremselengde-kalkulator](/laeringsressurser/bremselengde)'
            }
        ],
        faq: [
            {
                question: 'Hva er normal reaksjonstid?',
                answer: 'For en uthvilt og opplagt fører er normal reaksjonstid ca. 1 sekund.'
            },
            {
                question: 'Hva er forskjellen på reaksjonslengde og bremselengde?',
                answer: 'Reaksjonslengde er avstanden du kjører fra du oppdager faren til du starter å bremse. Bremselengde er avstanden bilen bruker på å stoppe etter at du har truffet bremsen.'
            },
            {
                question: 'Hvor mye øker bremselengden når farten dobles?',
                answer: 'Bremselengden firedobles når farten dobles (eksempel: fra 40 til 80 km/t).'
            }
        ]
    },

    {
        id: 'stans-og-parkering',
        title: 'Stans og parkering: Forskjellen du må kunne til teoriprøven',
        icon: '🅿️',
        shortDescription: 'Lær forskjellen mellom stans og parkering, avstandsreglene (kryss, gangfelt, busslomme) og unngå fellene på teoriprøven.',
        color: '#dc2626',
        seoTitle: 'Stans og parkering – regler og avstander til teoriprøven | Teori-test.no',
        seoDescription: 'Lær forskjellen på stans og parkering, avstandsreglene ved kryss, gangfelt og busslomme — og hva som gjelder på forkjørsvei. Unngå fellene på teoriprøven.',
        sections: [
            {
                title: 'Stans og parkering: Hva er egentlig forskjellen?',
                type: 'text',
                content: 'Reglene for stans og parkering er en klassisk gjenganger på teoriprøven for klasse B. Mange mister unødvendige poeng her fordi de blander sammen de to begrepene, eller glemmer de eksakte avstandsreglene for gangfelt og veikryss. Her gir vi deg en komplett og enkel oversikt over hva trafikkreglene faktisk sier, slik at du er trygg når disse oppgavene dukker opp på eksamen.'
            },
            {
                title: '1. Definisjonen på stans',
                type: 'info',
                content: 'For å forstå reglene, må vi først vite hva "stans" betyr i juridisk forstand. Stans er en kortvarig stans av kjøretøyet for å:\n\n- Slippe av eller ta på passasjerer (av- og påstigning).\n- Laste inn eller ut varer (av- og pålessing).\n\nSå lenge du gjør dette aktivt, regnes det som stans. Det er viktig å merke seg at hvis du stopper fordi trafikken krever det (for eksempel i kø, for rødt lys, eller for å overholde vikeplikt), regnes ikke dette som stans i lovens forstand. Det er rett og slett en del av det å kjøre bil.'
            },
            {
                title: '2. Definisjonen på parkering',
                type: 'text',
                content: 'Hva skiller så stans fra parkering? Trafikkreglene er veldig tydelige: Enhver hensetting av kjøretøyet, selv for en kort stund, regnes som parkering hvis det varer lenger enn det som kreves for å slippe av/på passasjerer eller laste av/på varer.\n\nTommelfingerregel: Hvis du forlater bilen for å stikke inn på kiosken for å kjøpe en pølse, har du parkert – selv om motoren går og det bare tar ett minutt.'
            },
            {
                title: '3. Kjenn igjen skiltene',
                type: 'signs',
                content: 'Det finnes to hovedskilt som regulerer dette, og du må ikke forveksle dem (se vår [komplette skilt-oversikt](/laeringsressurser/skilt) for mer):',
                signs: [
                    {
                        name: 'Parkering forbudt',
                        description: '(Én skråstrek): Skiltet er en blå sirkel med rød kant og én rød skråstrek. Her har du ikke lov til å parkere, men du har lov til å foreta en kort stans for å slippe av en venn eller lesse ut noen kasser.',
                        signId: 'no-parking'
                    },
                    {
                        name: 'All stans forbudt',
                        description: '(To skråstreker / et kryss): Skiltet har blå bunn, rød kant og to røde streker som danner et kryss. Her kan du verken parkere eller stoppe for å slippe av passasjerer. Det er totalt forbudt å stanse frivillig.',
                        signId: 'no-stopping'
                    }
                ]
            },
            {
                title: '4. Avstandsreglene (Puggestoff til eksamen!)',
                type: 'warning',
                content: 'Dette er tallene du rett og slett må pugge. Du har verken lov til å stanse eller parkere på følgende steder:\n\n- Gangfelt og sykkelkryssing: På selve feltet, og nærmere enn 5 meter foran feltet. (Du har imidlertid lov til å parkere umiddelbart etter feltet).\n- Veikryss: I selve krysset, eller nærmere enn 5 meter fra krysset. (Avstanden måles fra det punktet hvor fortauskanten, eller kanten av veibanen, begynner å runde).\n- Jernbane- og sporveiskryssing: Nærmere planovergangen enn 5 meter.\n- Uoversiktlige steder: I uoversiktlige svinger, bakketopper eller tunneler.\n- Motorvei og motortrafikkvei: Det er totalt forbudt å stanse eller parkere (unntatt på oppmerkede rasteplasser eller ved nødstopp).'
            },
            {
                title: '5. Spesialregel for busslommer',
                type: 'info',
                content: 'Busslommer har en egen avstandsregel som ofte testes. Du har ikke lov til å parkere i en busslomme (holdeplass for buss, taxi eller trikk), eller nærmere enn 20 meter før og 15 meter etter skiltet for holdeplassen.\n\nUnntak: Du har lov til å stanse kort for å slippe av eller på passasjerer i en busslomme, men kun hvis det ikke er til hinder for bussen eller taxien.'
            },
            {
                title: 'De 3 vanligste fellene på teoriprøven',
                type: 'warning',
                content: '1. Parkering ETTER gangfelt: På et bilde står en bil parkert rett etter et gangfelt. Mange svarer at dette er ulovlig på grunn av 5-metersregelen. Fasit: Dette er lovlig. Forbudet gjelder bare på og 5 meter foran gangfeltet.\n\n2. Forlate bilen "et lite øyeblikk": Du står i en sone med "Parkering forbudt", men går ut for å poste et brev. Er det stans eller parkering? Fasit: Du har parkert, og handlingen er ulovlig. Du forlot bilen for et annet ærend enn av/på-stigning eller lasting.\n\n3. Stans på forkjørsvei: Mange tror det er lov å parkere på en forkjørsvei hvis man står helt i kanten. Fasit: Hvis fartsgrensen på forkjørsveien er høyere enn 50 km/t, er det forbudt å parkere på kjørebanen.'
            },
            {
                title: 'Test dine kunnskaper',
                type: 'tip',
                content: 'Klarer du å skille skilt og situasjoner i praksis? Ta en [Gratis ekspresstest](/quiz?mode=hurtig) og se om du unngår fellene!'
            }
        ],
        faq: [
            {
                question: 'Er det lov å stanse på et fortau eller en gang- og sykkelvei?',
                answer: 'Nei, det er strengt forbudt å både stanse og parkere på fortau, gangveier og sykkelveier. Dette er for å sikre at myke trafikanter kan ferdes trygt uten å måtte gå ut i bilveien.'
            },
            {
                question: 'Hva skjer hvis jeg får motorstopp der det er stans forbudt?',
                answer: 'Motorstopp eller trafikkulykke regnes som "nødstopp". Da skal du sette på varselblinkere, få bilen så langt ut til siden som mulig, og sette ut varseltrekant (150-250 meter unna utenfor tettbygd strøk).'
            },
            {
                question: 'Kan jeg parkere mot kjøreretningen?',
                answer: 'Hovedregelen i Norge er at man skal parkere på høyre side av veien (i kjøreretningen). Unntaket er i enveiskjørte gater, hvor du kan parkere på venstre side hvis det er plass og ikke skiltet med forbud.'
            }
        ]
    },

    {
        id: 'promille',
        title: 'Alkohol og promille i trafikken',
        icon: '🚫',
        shortDescription: 'Visste du at du kan være straffbart påvirket selv om du føler deg edru? Lær promillegrensene, hva som skjer i kroppen og hvilke konsekvenser promillekjøring kan få.',
        color: '#3b82f6', // AG Blue
        seoTitle: 'Promillegrense i Norge: 0,2, straff og teoriprøve-regler | Teori-test.no',
        seoDescription: 'Lær promillegrensen i Norge: 0,2 promille, straff, reaksjonstid, legemidler og vanlige teoriprøve-feller. Kort forklart for klasse B.',
        sections: [
            {
                title: 'Kort forklart: promillegrensen i Norge',
                type: 'info',
                content: 'Promillegrensen i Norge er 0,2 for alle motorvognførere. Det finnes ingen egen 0,0-grense for unge sjåfører eller øvelseskjøring — 0,2 gjelder alle. Fra 0,5 promille mister du normalt førerretten. Over 1,2 promille er det fare for fengsel.'
            },
            {
                title: 'Straff etter promillenivå',
                type: 'table',
                content: `<table>
    <thead>
        <tr>
            <th>Promillenivå</th>
            <th>Straff</th>
            <th>Tap av førerkort</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0,2–0,5</td>
            <td>Stor bot</td>
            <td>Normalt ikke</td>
        </tr>
        <tr>
            <td>0,5–1,2</td>
            <td>Bot + betinget fengsel</td>
            <td>Ja, midlertidig</td>
        </tr>
        <tr>
            <td>Over 1,2</td>
            <td>Bot + ubetinget fengsel</td>
            <td>Ja, langvarig inndragning</td>
        </tr>
    </tbody>
</table>`
            },
            {
                title: 'Kan jeg kjøre dagen derpå?',
                type: 'warning',
                content: 'Mange tror de er edru dagen etter, men kroppen forbrenner alkohol i eget tempo — ca. 0,1–0,15 promille per time, og dette varierer fra person til person. Du kan ha promille selv om du føler deg fin.\n\nIkke bruk en kalkulator alene for å avgjøre om du kan kjøre. Forbrenning varierer mellom personer, og alkohol påvirker konsentrasjon og reaksjonstid selv ved lave nivåer. Er du i tvil — ikke kjør.'
            },
            {
                title: 'Promillegrensen i Norge',
                type: 'text',
                content: 'I Norge er promillegrensen 0,2 promille blodalkohol. Dette er en av de laveste grensene i Europa og gjelder alle bilførere. Selv et lite glass vin eller en flaske øl kan ta deg over grensen — spesielt på tom mage eller hvis du er sliten.'
            },
            {
                title: '⚠️ Teoriprøve-felle: Ingen strengere grense for unge',
                type: 'warning',
                content: 'Det er ingen strengere promillegrense for sjåfører under 20 år eller for øvelseskjøring i Norge. Grensen på 0,2 promille gjelder absolutt for alle motorvognførere, uansett alder eller erfaring.\n\nÅ tro at det er «nulltoleranse for de under 20» er en klassisk stryk-felle på teoriprøven. Husk: 0,2 promille gjelder for alle.'
            },
            {
                title: 'Slik påvirker alkohol kjøreevnen',
                type: 'info',
                content: '• 0,2–0,5 promille: Redusert konsentrasjonsevne og vanskeligere å bedømme fart og avstand\n• 0,5–1,0 promille: Klart svekket reaksjonstid, dårligere koordinasjon og overdreven selvtillit\n• Over 1,0 promille: Kraftig nedsatt kjøreevne — ekstrem ulykkesrisiko\n\nReaksjonstiden kan bli to til tre ganger lengre enn normalt. På motorvei ved 100 km/t betyr det 20–30 meter ekstra før du begynner å bremse.'
            },
            {
                title: 'Straff og konsekvenser',
                type: 'warning',
                content: 'Straffene øker med promillenivået:\n\n0,2–0,5 promille: Normalt kun en svært stor bot — du mister vanligvis ikke førerkortet (med mindre det er skjerpende omstendigheter som en ulykke)\n0,5–1,2 promille: Bot + automatisk tap av førerrett. Automatisk inndragning starter på 0,5 promille\nOver 1,2 promille: Fengsel opptil 1 år + tap av førerrett i lang tid\n\nI tillegg kan forsikringen din nekte å dekke skader ved promillekjøring, noe som kan føre til enorme erstatningskrav.'
            },
            {
                title: 'Ruskjøring og legemidler — den røde trekanten',
                type: 'warning',
                content: 'Promilleloven gjelder ikke bare alkohol. Det er også straffbart å kjøre under påvirkning av:\n• Narkotika (cannabis, kokain, amfetamin m.fl.)\n• Visse reseptbelagte legemidler (beroligende midler, sovemedisiner, smertestillende)\n\n🔺 Den røde trekanten: På medisinemballasje betyr en rød advarselstrekant at preparatet kan svekke kjøreevnen. Dette symbolet er et av de mest testede visuelle elementene på teoriprøven knyttet til rus og kjøring. Kjenn igjen dette skiltet!\n\nDin lege er pliktig til å informere deg hvis medisinene dine kan påvirke kjøreevnen. Sjekk alltid pakningsvedlegget.'
            },
            {
                title: 'Viktig å vite til teoriprøven',
                type: 'tip',
                content: 'Promillespørsmål er blant de hyppigst stilte på teoriprøven. Husk disse nøkkeltallene:\n\n• Promillegrense: 0,2 promille\n• Reaksjonstiden kan bli 2–3 ganger lengre\n• Alkohol øker selvtilliten mens den reduserer evnen\n• Straff starter allerede ved 0,2 promille\n\nLes spørsmålene nøye — de tester ofte om du kjenner til de eksakte grensene, ikke bare at alkohol er farlig.'
            },
            {
                title: 'Test kunnskapen din!',
                type: 'tip',
                content: 'Promille og ruspåvirkning er et av de temaene det oftest stilles spørsmål om på den ekte teoriprøven. Her på Teori-test.no kan du øve på akkurat disse spørsmålene i Ekspresstest eller Full prøve — helt gratis. Jo mer du øver, desto tryggere blir du på eksamensdagen. 🎯\n\n[Les om fartsgrenser i Norge](/laeringsressurser/fartsgrenser)'
            }
        ],
        miniQuiz: [
  {
    question: "Hva er promillegrensen i Norge for bilførere?",
    options: ["0,0 promille", "0,2 promille", "0,5 promille", "1,0 promille"],
    correct: "0,2 promille",
    explanation: "Promillegrensen i Norge er 0,2 for alle motorvognførere. Dette gjelder uansett alder og erfaring."
  },
  {
    question: "Gjelder det en strengere promillegrense for unge sjåfører?",
    options: ["Ja, 0,0 promille", "Ja, 0,1 promille", "Nei, 0,2 gjelder alle", "Ja, 0,5 promille"],
    correct: "Nei, 0,2 gjelder alle",
    explanation: "Det finnes ingen egen nullgrense for unge eller nyutdannede sjåfører i Norge. 0,2 promille gjelder alle motorvognførere."
  },
  {
    question: "Hva skjer normalt fra 0,5 promille?",
    options: ["Bare en advarsel", "Bot uten tap av førerkort", "Tap av førerretten", "Ingenting første gang"],
    correct: "Tap av førerretten",
    explanation: "Fra 0,5 promille mister du normalt førerretten midlertidig. Over 1,2 promille risikerer du ubetinget fengsel og langvarig inndragning."
  },
  {
    question: "Hva betyr en rød trekant på medisinpakningen?",
    options: ["Medisinen er farlig giftig", "Medisinen kan påvirke kjøreevnen", "Medisinen krever resept", "Medisinen er reseptfri"],
    correct: "Medisinen kan påvirke kjøreevnen",
    explanation: "Rød trekant på medisiner betyr at medisinen kan påvirke kjøreevnen. Du bør ikke kjøre bil uten å sjekke med lege eller apotek."
  },
  {
    question: "Hvordan påvirker alkohol reaksjonstiden?",
    options: ["Den forbedres litt", "Den påvirkes ikke", "Den forlenges betydelig", "Den halveres"],
    correct: "Den forlenges betydelig",
    explanation: "Alkohol forlenger reaksjonstiden betydelig. Selv ved lave promillenivåer er konsentrasjonen og reaksjonsevnen svekket — du oppdager farer senere og bremser tregere."
  }
],
        faq: [
  {
    question: "Hva er promillegrensen i Norge?",
    answer: "Promillegrensen i Norge er 0,2 for alle motorvognførere. Dette gjelder uansett alder og erfaring."
  },
  {
    question: "Er det nulltoleranse for unge sjåfører?",
    answer: "Nei. Det finnes ingen egen nullgrense for unge sjåfører i Norge. 0,2 promille gjelder alle motorvognførere."
  },
  {
    question: "Mister man førerkortet ved 0,5 promille?",
    answer: "Ja, normalt mister du førerretten midlertidig fra 0,5 promille. Over 1,2 promille risikerer du ubetinget fengsel og langvarig inndragning av førerkortet."
  },
  {
    question: "Kan medisiner påvirke kjøreevnen?",
    answer: "Ja. Medisiner med rød trekant på pakningen kan påvirke kjøreevnen. Sjekk alltid med lege eller apotek før du kjører."
  },
  {
    question: "Hvor lenge må man vente etter å ha drukket?",
    answer: "Kroppen forbrenner ca. 0,1–0,15 promille per time, men dette varierer mellom personer. Er du i tvil — ikke kjør. Bruk ikke kalkulator alene for å avgjøre om du er edru nok."
  }
]
    },

    {
        id: 'tilhenger',
        title: 'Tilhenger og henger: Regler, klasser og kalkulator',
        icon: '🚗',
        shortDescription: 'Alt du trenger om tilhenger til teoriprøven. 750 kg-regelen, campingvogn-regelen, klasse B96 og BE forklart enkelt med [gratis kalkulator](/laeringsressurser/tilhenger#henger-kalkulator).',
        color: '#3b82f6', // AG Blue
        seoTitle: 'Tilhenger klasse B: regler, vekt, B96, BE og kalkulator | Teori-test.no',
        seoDescription: 'Finn ut om du kan kjøre med tilhenger på klasse B. Se 750 kg-regelen, 3500 kg-regelen, B96, BE, fartsgrenser og bruk kalkulatoren.',
        sections: [
            {
                title: 'Kort forklart: tilhenger og førerkort',
                type: 'info',
                content: 'Med klasse B kan du trekke tilhenger på maks 750 kg tillatt totalvekt, eller tyngre tilhenger hvis bil + tilhenger har samlet tillatt totalvekt på maks 3500 kg. B96 gjelder opp til 4250 kg. BE kreves over dette. [Les om automatlappen og elbil med tilhenger](/laeringsressurser/automatlappen)'
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
                content: 'Når vi snakker om vekt for tilhenger og bil i dette regelverket, er det alltid "tillatt totalvekt" (også kalt registrert totalvekt) som gjelder – IKKE faktisk lastet vekt. Tillatt totalvekt finner du i vognkortet (del I og II).\n\nEksempel: Campingvognen din veier 800 kg lastet, men tillatt totalvekt i vognkortet er 1300 kg. Da bruker du 1300 kg i alle beregninger.\n\nTIP: Sjekk alltid vognkortet – ikke stol på gjetning.'
            },
            {
                title: 'Klasse B – grunnreglene for tilhenger',
                type: 'info',
                content: 'Med vanlig klasse B (personbil) kan du trekke tilhenger i to situasjoner:\n\n1. 750 kg-regelen:\nTilhengeren har tillatt totalvekt på 750 kg eller mindre. Kombinert vekt kan da være hva som helst.\n\n2. Campingvogn-regelen (også kalt 3500 kg-regelen):\nTilhengeren er TYNGRE enn 750 kg, men bilens tillatte totalvekt pluss tilhengerens tillatte totalvekt overstiger IKKE 3500 kg.\n\nEksempel: Bil med tillatt totalvekt 2200 kg + tilhenger 1100 kg = 3300 kg. Tilhengeren er over 750 kg, men kombinasjonen er under 3500 kg → Klasse B holder!'
            },
            {
                title: '⚠️ Husk bilens begrensninger',
                type: 'warning',
                content: 'Husk: selv om førerkortklassen din tillater en viss vekt, må du også sjekke bilens maksimale tillatte tilhengervekt i vognkortet. Denne grensen kan være lavere enn det klassereglene tillater, og varierer fra bil til bil. Vekten av tilhengeren må være innenfor det bilen har lov å trekke.'
            },
            {
                title: 'Klasse B96 – mellomklassen',
                type: 'text',
                content: 'B96 er en utvidelse av klasse B som gjelder når:\n- Tilhengeren veier MER enn 750 kg, OG\n- Kombinert tillatt totalvekt (bil + tilhenger) er MELLOM 3500 kg og 4250 kg.\n\nKrav for B96:\n- Bestå et 7-timers obligatorisk kurs (5 t teori + 2 t kjøring)\n- INGEN oppkjøring/praktisk prøve kreves\n- B96 "stemplet" i førerkortet etter bestått kurs\n\nEksempel: Bil with tillatt totalvekt 2500 kg + tilhenger 1200 kg = 3700 kg → B96.'
            },
            {
                title: 'Klasse BE – for de tyngste kombinasjonene',
                type: 'text',
                content: 'BE kreves når kombinert tillatt totalvekt overstiger 4250 kg.\n- Tilhengeren kan ha tillatt totalvekt opp til 3500 kg\n- Kombinert vekt kan gå opp til 7000 kg\n- Krever full teoriprøve for BE + praktisk oppkjøring\n\nEksempel: Bil 3000 kg + tilhenger 1500 kg = 4500 kg → Klasse BE.\n\nNB: Hestehengere og større båthengere havner ofte i BE-kategorien.'
            },
            {
                title: 'Fartsgrenser med tilhenger',
                type: 'info',
                content: 'Alle tilhengere kan kjøres i inntil 80 km/t der fartsgrensen tillater det — uavhengig av om tilhengeren har bremser eller ikke. Den gamle 60 km/t-grensen for tilhengere uten bremser gjelder ikke lenger.\n\nTempo 100: Noen tilhengere kan etter en egen teknisk godkjenning hos Statens vegvesen kjøres i inntil 100 km/t. Du får da et godkjenningsdokument og et merke som skal monteres på tilhengeren. Bruk Statens vegvesens egen kalkulator på vegvesen.no/tempo100 for å sjekke om din bil og tilhenger kvalifiserer.'
            },
            {
                title: 'Sjekkliste før avgang med tilhenger',
                type: 'tip',
                content: 'Bruk denne sjekklisten FØR du kjører – dette er pensumstoff på teoriprøven:\n- Koblingen: Henger/kule er låst og sikret (klikk-lyd)\n- Låsekabel: Nødbremsewire er festet til bilen (IKKE lås/kule)\n- Lys: Brems-, bak-, og blinklys fungerer (sjekk via bakspeil mens noen trykker)\n- Last: 100% sikret mot fremover – 50% sikret mot sideveis og bakover\n- Dekk: Riktig lufttrykk på tilhengerdekk (se vognkort)\n- Nummerskilt: Synlig, rent, og belyst (samme nr. som bil der tilhenger mangler eget)\n- Lastfordeling: Tyngde av last FORAN tilhengernes aksling → gir stabilitet\n\nHusk: Overvekt bakerst = svaiing og ustabilitet i høy hastighet.'
            },
            {
                title: 'Vanlige spørsmål om tilhenger (FAQ)',
                type: 'info',
                content: 'Q: Kan jeg øvelseskjøre med tilhenger hvis jeg bare har klasse B?\nA: Ja, du kan øvelseskjøre med tilhenger så lenge du følger reglene for klassen du skal ta (f.eks. BE). Ledsageren må ha hatt førerrett for den aktuelle klassen sammenhengende de siste 5 årene og være over 25 år. Husk «L»-skilt og ekstra speil.\n\nQ: Hva skjer hvis kombinert vekt overstiger 3500 kg og jeg bare har klasse B?\nA: Da kjører du uten gyldig førerkort for kjøretøyet. Dette kan føre til bøter og tap av førerretten. I verste fall kan forsikringsselskapet kreve at du må betale skaden selv ved en ulykke.\n\nQ: Trenger jeg ekstra speil for tilhenger?\nA: Ja, dersom tilhengeren eller lasten er så bred at den hindrer sikt bakover i bilens vanlige speil. Du skal kunne se langs hele siden av tilhengeren.\n\nQ: Gjelder 80 km/t-regelen også i 50-sonen?\nA: Nei, i tettbygd strøk følger du alltid de lokale fartsgrensene (skiltingen). 80 km/t-grensen er en maksgrense for tilhenger på veier der skiltingen ellers ville tillatt høyere fart.'
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
    question: "Når trenger jeg B96?",
    answer: "Du trenger B96 når samlet tillatt totalvekt for bil og tilhenger er mellom 3500 og 4250 kg."
  },
  {
    question: "Når trenger jeg BE?",
    answer: "Du trenger BE når samlet tillatt totalvekt for bil og tilhenger overstiger 4250 kg, eller når tilhengeren er tyngre enn bilen."
  },
  {
    question: "Hvor fort kan man kjøre med tilhenger?",
    answer: "Etter regelendringen i mars 2022 kan alle tilhengere kjøres i inntil 80 km/t der fartsgrensen tillater det. Med Tempo 100-godkjenning fra Statens vegvesen kan du kjøre i inntil 100 km/t."
  },
  {
    question: "Er det faktisk vekt eller tillatt totalvekt som gjelder?",
    answer: "Det er alltid tillatt totalvekt (også kalt teknisk tillatt totalvekt) som gjelder — ikke faktisk vekt. Tillatt totalvekt finner du i vognkortet og på et skilt på tilhengeren."
  }
]
    },

    {
        id: 'sikkerhet',
        title: 'Sikkerhetsutstyr',
        icon: '🦺',
        shortDescription: 'Bilbelte, barneseter, varseltrekant og førstehjelp',
        color: '#7c3aed',
        seoTitle: 'Sikkerhetsutstyr og bilbelte | Teori-test.no',
        seoDescription: 'Sikkerhetsutstyr i bil: bilbelte, barneseter, airbag, varseltrekant og førstehjelp for en trygg biltur.',
        sections: [
            {
                title: 'Bilbelte',
                type: 'text',
                content: 'Alle i bilen skal bruke bilbelte — både fører og passasjerer. Det er førerens ansvar at passasjerer under 15 år bruker belte. Bilbeltet reduserer risikoen for alvorlig skade med opptil 50 % ved en kollisjon.'
            },
            {
                title: 'Barnesikring',
                type: 'warning',
                content: 'Barn under 135 cm skal bruke godkjent barnesikringsutstyr (barnesete, pute eller sele tilpasset barnets vekt og høyde). Barn bør sitte bakovervendt så lenge som mulig, helst til 4 års alder. Det er ALDRI lov å plassere bakovervendt barnestol i forsetet dersom det er aktiv airbag.'
            },
            {
                title: 'Obligatorisk utstyr i bilen',
                type: 'info',
                content: '• Varseltrekant — Skal plasseres minst 100 meter bak bilen ved stopp på veien\n• Refleksvest — Skal brukes når du står utenfor bilen langs veien\n• Førstehjelpsutstyr — Anbefalt å ha i bilen\n• Brannslukkingsapparat — Anbefalt, men ikke påbudt for personbil\n• Reservehjul eller dekkverktøy — For å skifte punktert dekk'
            },
            {
                title: 'Airbag',
                type: 'text',
                content: 'Airbagen fungerer sammen med bilbeltet. Den utløses ved kraftig kollisjon og reduserer skade på hode og overkropp. Viktig å vite:\n\n• Airbag uten bilbelte kan gi alvorlige skader\n• Sittestillingen bør være riktig — minst 25 cm fra rattet\n• Bakovervendt barnesete skal ALDRI brukes foran aktiv airbag'
            },
            {
                title: 'Førstehjelp — ABC',
                type: 'tip',
                content: 'Ved ulykke, husk ABC:\n\nA — Airways (Luftveier): Sjekk at luftveiene er frie\nB — Breathing (Pust): Se, lytt og kjenn etter pust\nC — Circulation (Sirkulasjon): Start hjerte-lungeredning (HLR) ved behov\n\nRing 113 (AMK) ved alvorlige skader. Sikre ulykkesstedet først!'
            }
        ]
    },

    {
        id: 'miljo',
        title: 'Miljøvennlig kjøring',
        icon: '🌿',
        shortDescription: 'Spar drivstoff og reduser utslipp med riktig kjørestil',
        color: '#16a34a',
        seoTitle: 'Miljøvennlig kjøring – spar drivstoff | Teori-test.no',
        seoDescription: 'Lær hvordan du kjører miljøvennlig, sparer drivstoff og reduserer utslipp for å bestå teoriprøven klasse B.',
        sections: [
            {
                title: 'Økonomisk kjøring',
                type: 'text',
                content: 'Miljøvennlig kjøring handler om å redusere drivstofforbruk og utslipp gjennom smart kjørestil. En jevn og forutseende kjørestil kan redusere forbruket med 10–30 %.'
            },
            {
                title: 'Tips for miljøvennlig kjøring',
                type: 'info',
                content: '• Kjør jevnt — Unngå brå akselerasjon og hard bremsing\n• Gir opp tidlig — Bruk høyest mulig gir ved lav turtall\n• Bruk motorbremsen — Slipp gassen i god tid før stopp\n• Hold jevn fart — Bruk cruisekontroll på motorvei\n• Unngå tomgangskjøring — Slå av motoren ved lengre stopp\n• Planlegg turen — Velg korteste og mest effektive rute'
            },
            {
                title: 'Dekktrykk',
                type: 'warning',
                content: 'For lavt dekktrykk øker drivstofforbruket med opptil 5 % og sliter dekkene ujevnt. Sjekk dekktrykket minst én gang i måneden og alltid før lengre turer. Riktig dekktrykk finner du i bilens brukerveiledning eller på en plate i dørkarmen.'
            },
            {
                title: 'Ekstrautstyr som øker forbruket',
                type: 'text',
                content: 'Noen ting øker drivstofforbruket betydelig:\n\n• Takboks/takstativ — Øker luftmotstanden med opptil 20 %\n• Aircondition — Bruker ekstra energi, spesielt i bykjøring\n• Ekstra vekt — 100 kg ekstra øker forbruket med ca. 5 %\n• Åpne vinduer ved høy fart — Øker luftmotstanden\n\nFjern takboks og takstativ når det ikke er i bruk!'
            },
            {
                title: 'Elektrisk bil',
                type: 'tip',
                content: 'Elbiler har null lokale utslipp og lavere driftskostnader. Regenerativ bremsing (energigjenvinning) gjør at bilen lader batteriet når du slipper gassen. For å maksimere rekkevidden: bruk varme- og klimaanlegg med måte, og kjør jevnt.\n\n[Les om fartsgrenser i Norge](/laeringsressurser/fartsgrenser)'
            }
        ]
    },

    {
        id: 'vognkort-vekter',
        title: 'Vognkort og vekter: Slik forstår du tallene til teoriprøven',
        icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"><rect x="10" y="6" width="44" height="52" rx="3" fill="%23F4F4F6" stroke="%23D1D1D6" stroke-width="2"/><rect x="11" y="7" width="42" height="50" rx="2" fill="%23FFFFFF"/><rect x="25" y="12" width="14" height="10" rx="1" fill="%23C8102E"/><path d="M28 15 L32 19 L36 15 Z" fill="%23FFD100"/><text x="44" y="20" font-family="Arial, sans-serif" font-weight="bold" font-size="14" fill="%231A1A1A">1</text><rect x="20" y="25" width="24" height="2" rx="1" fill="%238E8E93"/><rect x="16" y="29" width="32" height="1.5" rx="0.75" fill="%23AEAEB2"/><rect x="14" y="34" width="36" height="6" rx="1" fill="%23E5E5EA"/><rect x="16" y="36.5" width="10" height="1" rx="0.5" fill="%238E8E93"/><rect x="30" y="36.5" width="16" height="1" rx="0.5" fill="%23C7C7CC"/><rect x="14" y="42" width="36" height="6" rx="1" fill="%23E5E5EA"/><rect x="16" y="44.5" width="12" height="1" rx="0.5" fill="%238E8E93"/><rect x="30" y="44.5" width="12" height="1" rx="0.5" fill="%23C7C7CC"/><rect x="14" y="50" width="36" height="6" rx="1" fill="%23E5E5EA"/><rect x="16" y="52.5" width="8" height="1" rx="0.5" fill="%238E8E93"/><rect x="30" y="52.5" width="18" height="1" rx="0.5" fill="%23C7C7CC"/></svg>',
        shortDescription: 'Lær å lese vognkortet: egenvekt, tillatt totalvekt, aktuell vekt, og hvordan du regner ut nøyaktig nyttelast for personbil.',
        color: '#8b5cf6',
        seoTitle: 'Vognkort og vekter: Slik regner du ut nyttelast (Klasse B)',
        seoDescription: 'Lær å lese vognkortet til teoriprøven. Vi forklarer egenvekt, tillatt totalvekt, aktuell vekt, og hvordan du regner ut nøyaktig nyttelast for personbil.',
        hasCalculator: true,
        sections: [
            {
                title: 'Vognkort og vekter: Slik forstår du tallene til teoriprøven',
                type: 'text',
                content: 'Vognkortet (spesielt del 1) inneholder avgjørende teknisk informasjon om bilen. På teoriprøven får du ofte se et bilde av et vognkort, etterfulgt av et spørsmål om hvor mye bagasje eller hvor mange passasjerer du kan ha med. For å løse disse oppgavene, må du forstå de fire viktigste vektbegrepene.'
            },
            {
                title: '1. De fire viktigste vektbegrepene',
                type: 'info',
                content: 'Disse begrepene finner du under punkt 8 ("Vekter") i bilens vognkort. Dette er definisjonene du må pugge:\n\n- Egenvekt: Dette er hva bilen veier når den er "tom" for passasjerer og bagasje. Men, egenvekten inkluderer alltid full drivstofftank (eller batteri), standardutstyr og vekten av bilens fører (som er standardisert til 75 kg).\n- Tillatt totalvekt: Dette er den absolutt maksimale vekten bilen er bygget, registrert og godkjent for å tåle. Dette tallet kan aldri lovlig overskrides.\n- Aktuell totalvekt (Aktuell vekt): Dette er det bilen faktisk veier akkurat nå, i dette øyeblikket ute på veien. Altså bilens egenvekt pluss alle passasjerer og all bagasje du har lastet inn. Aktuell vekt må aldri være høyere enn tillatt totalvekt.\n- Nyttelast: Dette er den maksimale vekten du har lov til å putte inn i bilen (passasjerer og bagasje).'
            },
            {
                title: 'Interaktiv Kalkulator for Tilhengervekt',
                type: 'calculator',
                content: 'Bruk kalkulatoren under for å se om du lovlig kan trekke tilhengeren med et vanlig Klasse B førerkort, eller om du trenger B96 eller BE. Test med ulike vekter for å se hvordan «campingvogn-regelen» fungerer i praksis:'
            },
            {
                title: '2. Slik regner du ut nyttelast (Formelen)',
                type: 'formula',
                content: 'Det klassiske regnestykket på eksamen er å finne ut hvor mange kilo bagasje du har plass til, hvis du for eksempel har med deg tre venner i bilen.\n\nFormelen er alltid den samme:\nTillatt totalvekt - Egenvekt = Nyttelast'
            },
            {
                title: 'Praktisk eksempel',
                type: 'example',
                content: 'I vognkortet står det at bilens Tillatte totalvekt er 2000 kg.\nBilens Egenvekt er 1500 kg.\n\nNyttelasten er da: 2000 - 1500 = 500 kg.\n\nDu skal ha med deg 3 passasjerer som veier 80 kg hver (totalt 240 kg). Føreren trenger du ikke å regne med, da personen allerede er inkludert i bilens egenvekt!\n\nRestvekt til bagasje: 500 kg (Nyttelast) - 240 kg (Passasjerer) = 260 kg. Du kan trygt laste inn 260 kg i bagasjerommet.'
            },
            {
                title: '3. Taklast og tilhengervekt',
                type: 'info',
                content: 'I tillegg til nyttelasten inni bilen, regulerer vognkortet hva du kan ha på taket og på slep:\n\n- Maks tillatt taklast: Maksimal vekt du kan ha på taket. Ligger typisk mellom 50-100 kg. Husk at selve takstativet og takboksen veier noe – dette må trekkes fra taklasten før du fyller boksen med ski og bagasje.\n- Maks tillatt tilhengervekt: Deler seg i to kategorier: "med brems" og "uten brems". (Les mer om fartsgrensene for tilhengere i vår [artikkel om fartsgrenser](/laeringsressurser/fartsgrenser)).'
            },
            {
                title: 'De 3 vanligste fellene på teoriprøven',
                type: 'warning',
                content: '1. Glemme føreren: Mange trekker fra vekten på 4 personer når de regner ut restvekt. Husk at sjåføren (75 kg) allerede er bakt inn i bilens "Egenvekt". Du skal bare trekke fra passasjerene.\n2. Forveksle Tillatt og Aktuell: "Tillatt" er maksgrensen skrevet i papirene. "Aktuell" er det bilen veier akkurat nå på vekta.\n3. Glemme takboksens egenvekt: Får du oppgitt at taklasten er 75 kg, og at takboksen veier 25 kg, har du bare lov til å legge 50 kg med utstyr inni boksen.'
            },
            {
                title: 'Klar for å teste regneferdighetene?',
                type: 'tip',
                content: 'Ta en [Gratis teoriprøve](/quiz) og se om du klarer å unngå overlast-fellene på eksamen!'
            }
        ],
        faq: [
            {
                question: 'Må jeg alltid ha vognkortet i bilen?',
                answer: 'Ja, del 1 av vognkortet skal alltid ligge i bilen under kjøring. Det beviser at bilen er lovlig registrert. Del 2 av vognkortet er et eierbevis og skal oppbevares trygt hjemme, aldri i bilen.'
            },
            {
                question: 'Hva skjer hvis jeg kjører med for høy aktuell totalvekt (overlast)?',
                answer: 'Bilen får vesentlig dårligere kjøreegenskaper, og bremselengden øker farlig mye. Ved kontroll kan du få kjøreforbud (du må laste ut) og et klekkelig gebyr.'
            },
            {
                question: 'Hvor finner jeg bilens vekter?',
                answer: 'Du finner alle vektbegrensninger under punkt 8 ("Vekter") i bilens vognkort del 1. Dette inkluderer også aksellast og tillatt tilhengervekt.'
            }
        ]
    },

    {
        id: 'temaliste-teoriproven-klasse-b',
        title: 'Temaliste teoriprøven klasse B – dette må du kunne',
        icon: '📋',
        shortDescription: 'Finn ut hva du kan bli spurt om på teoriprøven for klasse B. Komplett temakart med guider og forklaringer om vikeplikt, skilt, bremselengde, lys, kjøretøy og mer.',
        color: '#6366f1',
        seoTitle: 'Temaliste teoriprøven klasse B – dette må du kunne | Teori-test.no',
        seoDescription: 'Se hva du kan få på teoriprøven for klasse B. Praktisk temaliste med guider og forklaringer om vikeplikt, skilt, bremselengde, lys, sikkerhetskontroll og mer.',
        sections: [
            {
                title: 'Kort forklart',
                type: 'info',
                content: 'Temalisten viser hvilke områder du kan bli testet i på teoriprøven for klasse B. Bruk den som en sjekkliste: Forstår du temaet, kan du forklare regelen, og klarer du å bruke den i en trafikksituasjon?\n\nTeoriprøven klasse B tema dekker langt mer enn bare skilt og vikeplikt. Statens vegvesen temaliste klasse B inkluderer også kjøretøy, føreransvar, rus, mørke, bremselengde, ulykker og samhandling – alt er pensum til teoriprøven bil.'
            },
            {
                title: 'Slik bruker du temalisten',
                type: 'tip',
                content: '1. Finn temaet du er usikker på\n2. Les relevant guide eller forklaring på Teori-test.no\n3. Test deg med øvingsprøve eller tematest etterpå\n\nHva bør jeg øve på først? Start med temaene der du er mest usikker. Hva kommer på teoriprøven er ikke alltid åpenbart – mange stryker på temaer de trodde de hadde kontroll på. Bruk temaoversikten nedenfor til å kartlegge hullene i kunnskapen din.'
            },
            {
                title: '7 hovedtemaer – temakart for teoriprøven klasse B',
                type: 'table',
                content: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:0.85rem">
<div style="border:1px solid var(--color-border);border-radius:12px;padding:1rem 1.1rem">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem;margin-bottom:0.6rem;flex-wrap:wrap">
    <strong style="font-size:0.95rem;color:var(--color-text)">🚗 A – Fart, plassering og samhandling</strong>
    <span style="background:#f59e0b;color:#fff;font-size:0.7rem;font-weight:700;padding:2px 10px;border-radius:99px;white-space:nowrap">Delvis dekket</span>
  </div>
  <ul style="margin:0 0 0.75rem 0;padding-left:1.1rem;color:var(--color-text-light);font-size:0.85rem;line-height:1.65">
    <li>Avstand til forankjørende</li><li>Feltvalg og kollektivfelt</li><li>Rundkjøring og envegskjøring</li><li>Forbikjøring og fletting</li><li>Hest i trafikken og planovergang</li>
  </ul>
  <div style="display:flex;flex-wrap:wrap;gap:0.35rem">
    <a href="/laeringsressurser/fartsgrenser" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Fartsgrenser</a>
    <a href="/laeringsressurser/rundkjoring" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Rundkjøring</a>
    <a href="/laeringsressurser/forbikjoring" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Forbikjøring</a>
  </div>
</div>
<div style="border:1px solid var(--color-border);border-radius:12px;padding:1rem 1.1rem">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem;margin-bottom:0.6rem;flex-wrap:wrap">
    <strong style="font-size:0.95rem;color:var(--color-text)">💡 B – Sikt, føre og lys</strong>
    <span style="background:#22c55e;color:#fff;font-size:0.7rem;font-weight:700;padding:2px 10px;border-radius:99px;white-space:nowrap">Dekket godt</span>
  </div>
  <ul style="margin:0 0 0.75rem 0;padding-left:1.1rem;color:var(--color-text-light);font-size:0.85rem;line-height:1.65">
    <li>Sikt, vær og mørke</li><li>Bruk av lys</li><li>Bremselengde og stopplengde</li><li>Reaksjonslengde og veggrep</li>
  </ul>
  <div style="display:flex;flex-wrap:wrap;gap:0.35rem">
    <a href="/laeringsressurser/morkekjoring" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Mørkekjøring</a>
    <a href="/laeringsressurser/bremselengde" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Bremselengde</a>
    <a href="/laeringsressurser/reaksjonstid" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Reaksjonstid</a>
  </div>
</div>
<div style="border:1px solid var(--color-border);border-radius:12px;padding:1rem 1.1rem">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem;margin-bottom:0.6rem;flex-wrap:wrap">
    <strong style="font-size:0.95rem;color:var(--color-text)">🚦 C – Skilt, oppmerking og vikeplikt</strong>
    <span style="background:#22c55e;color:#fff;font-size:0.7rem;font-weight:700;padding:2px 10px;border-radius:99px;white-space:nowrap">Dekket godt</span>
  </div>
  <ul style="margin:0 0 0.75rem 0;padding-left:1.1rem;color:var(--color-text-light);font-size:0.85rem;line-height:1.65">
    <li>Skilt og skiltgrupper</li><li>Vegoppmerking</li><li>Vikeplikt og høyreregel</li><li>Lysregulering og politimannens tegn</li><li>Stoppeplikt</li>
  </ul>
  <div style="display:flex;flex-wrap:wrap;gap:0.35rem">
    <a href="/laeringsressurser/skilt" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Skilt</a>
    <a href="/laeringsressurser/veimerking" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Vegoppmerking</a>
    <a href="/laeringsressurser/vikeplikt" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Vikeplikt</a>
    <a href="/laeringsressurser/myndighetspyramiden" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Myndighetspyramiden</a>
  </div>
</div>
<div style="border:1px solid var(--color-border);border-radius:12px;padding:1rem 1.1rem">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem;margin-bottom:0.6rem;flex-wrap:wrap">
    <strong style="font-size:0.95rem;color:var(--color-text)">🧠 D – Fører, ansvar og risiko</strong>
    <span style="background:#f59e0b;color:#fff;font-size:0.7rem;font-weight:700;padding:2px 10px;border-radius:99px;white-space:nowrap">Delvis dekket</span>
  </div>
  <ul style="margin:0 0 0.75rem 0;padding-left:1.1rem;color:var(--color-text-light);font-size:0.85rem;line-height:1.65">
    <li>Reaksjonstid og sanser</li><li>Tretthet og uoppmerksomhet</li><li>Rus og pliktmessig avhold</li><li>Helsekrav og førerrett</li><li>Øvelseskjøring</li>
  </ul>
  <div style="display:flex;flex-wrap:wrap;gap:0.35rem">
    <a href="/laeringsressurser/promille" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Promille</a>
    <a href="/laeringsressurser/reaksjonstid" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Reaksjonstid</a>
    <a href="/laeringsressurser/ovingskjoring" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Øvingskjøring</a>
  </div>
</div>
<div style="border:1px solid var(--color-border);border-radius:12px;padding:1rem 1.1rem">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem;margin-bottom:0.6rem;flex-wrap:wrap">
    <strong style="font-size:0.95rem;color:var(--color-text)">🔧 E – Kjøretøyet</strong>
    <span style="background:#f59e0b;color:#fff;font-size:0.7rem;font-weight:700;padding:2px 10px;border-radius:99px;white-space:nowrap">Delvis dekket</span>
  </div>
  <ul style="margin:0 0 0.75rem 0;padding-left:1.1rem;color:var(--color-text-light);font-size:0.85rem;line-height:1.65">
    <li>Dekk, bremser og styring</li><li>Instrumentpanel og varsellys</li><li>Drivstoff og energikilde</li><li>Sikkerhetskontroll og kjetting</li><li>Førerstøttesystemer</li>
  </ul>
  <div style="display:flex;flex-wrap:wrap;gap:0.35rem">
    <a href="/laeringsressurser/sikkerhetskontroll" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Sikkerhetskontroll</a>
    <a href="/laeringsressurser/tilhenger" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Tilhenger</a>
    <a href="/laeringsressurser/automatlappen" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Automatlappen</a>
  </div>
</div>
<div style="border:1px solid var(--color-border);border-radius:12px;padding:1rem 1.1rem">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem;margin-bottom:0.6rem;flex-wrap:wrap">
    <strong style="font-size:0.95rem;color:var(--color-text)">⚖️ F – Lover, regler og myndighet</strong>
    <span style="background:#f59e0b;color:#fff;font-size:0.7rem;font-weight:700;padding:2px 10px;border-radius:99px;white-space:nowrap">Delvis dekket</span>
  </div>
  <ul style="margin:0 0 0.75rem 0;padding-left:1.1rem;color:var(--color-text-light);font-size:0.85rem;line-height:1.65">
    <li>Trafikkregler og vegtrafikkloven</li><li>Offentlige reaksjoner og bøter</li><li>Registrering, vognkort og forsikring</li>
  </ul>
  <div style="display:flex;flex-wrap:wrap;gap:0.35rem">
    <a href="/laeringsressurser/myndighetspyramiden" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Myndighetspyramiden</a>
    <a href="/laeringsressurser/vognkort-vekter" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Vognkort</a>
    <a href="/laeringsressurser/promille" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Promille</a>
  </div>
</div>
<div style="border:1px solid var(--color-border);border-radius:12px;padding:1rem 1.1rem">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem;margin-bottom:0.6rem;flex-wrap:wrap">
    <strong style="font-size:0.95rem;color:var(--color-text)">🚨 G – Uhell, førstehjelp og sikkerhet</strong>
    <span style="background:#94a3b8;color:#fff;font-size:0.7rem;font-weight:700;padding:2px 10px;border-radius:99px;white-space:nowrap">Kommer</span>
  </div>
  <ul style="margin:0 0 0.75rem 0;padding-left:1.1rem;color:var(--color-text-light);font-size:0.85rem;line-height:1.65">
    <li>Førstehjelp og trafikkuhell</li><li>Sikringsutstyr og varseltrekant</li><li>Tunnelsikkerhet</li><li>Snø på tak og isfrie ruter</li>
  </ul>
  <div style="display:flex;flex-wrap:wrap;gap:0.35rem">
    <a href="/laeringsressurser/sikkerhetskontroll" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Sikkerhetskontroll</a>
    <a href="/laeringsressurser/morkekjoring" style="font-size:0.78rem;color:var(--color-primary);text-decoration:none;border:1px solid var(--color-border);border-radius:6px;padding:2px 9px;background:var(--color-bg)">→ Mørkekjøring</a>
  </div>
</div>
</div>`
            },
            {
                title: 'Hva bør du øve på først?',
                type: 'tip',
                content: '1. Vikeplikt, skilt og myndighetspyramiden\nDette er typiske feiltemaer fordi flere regler virker samtidig. Les: [Vikeplikt](/laeringsressurser/vikeplikt), [Skilt](/laeringsressurser/skilt), [Myndighetspyramiden](/laeringsressurser/myndighetspyramiden)\n\n2. Fart, sikt og stopping\nBremselengde, reaksjonstid og mørke handler om å forstå risiko – ikke bare huske tall. Les: [Bremselengde](/laeringsressurser/bremselengde), [Reaksjonstid](/laeringsressurser/reaksjonstid), [Mørkekjøring](/laeringsressurser/morkekjoring)\n\n3. Kjøretøy, ansvar og sikkerhetskontroll\nDu må vite hva føreren har ansvar for, og forstå bilens tilstand og utstyr. Les: [Sikkerhetskontroll](/laeringsressurser/sikkerhetskontroll), [Vognkort](/laeringsressurser/vognkort-vekter), [Tilhenger](/laeringsressurser/tilhenger)'
            },
            {
                title: 'Dekkingsoversikt – Statens vegvesen temaliste klasse B',
                type: 'table',
                content: `<table style="width:100%;border-collapse:collapse;font-size:0.875rem">
<thead><tr style="border-bottom:2px solid var(--color-border)">
<th style="padding:8px 10px;text-align:left;color:var(--color-text-light);font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em">Tema</th>
<th style="padding:8px 10px;text-align:left;color:var(--color-text-light);font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em">Status</th>
<th style="padding:8px 10px;text-align:left;color:var(--color-text-light);font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em">Sider på Teori-test.no</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:8px 10px;color:var(--color-text)">A – Fart og samhandling</td><td style="padding:8px 10px"><span style="background:#f59e0b;color:#fff;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:99px">Delvis</span></td><td style="padding:8px 10px;color:var(--color-text-light)">Fartsgrenser, Rundkjøring</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:8px 10px;color:var(--color-text)">B – Sikt, føre og lys</td><td style="padding:8px 10px"><span style="background:#22c55e;color:#fff;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:99px">Godt</span></td><td style="padding:8px 10px;color:var(--color-text-light)">Bremselengde, Reaksjonstid, Mørkekjøring</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:8px 10px;color:var(--color-text)">C – Skilt og vikeplikt</td><td style="padding:8px 10px"><span style="background:#22c55e;color:#fff;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:99px">Godt</span></td><td style="padding:8px 10px;color:var(--color-text-light)">Vikeplikt, Skilt, Vegoppmerking, Myndighetspyramiden</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:8px 10px;color:var(--color-text)">D – Fører og risiko</td><td style="padding:8px 10px"><span style="background:#f59e0b;color:#fff;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:99px">Delvis</span></td><td style="padding:8px 10px;color:var(--color-text-light)">Promille, Reaksjonstid, Øvingskjøring</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:8px 10px;color:var(--color-text)">E – Kjøretøyet</td><td style="padding:8px 10px"><span style="background:#f59e0b;color:#fff;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:99px">Delvis</span></td><td style="padding:8px 10px;color:var(--color-text-light)">Sikkerhetskontroll, Tilhenger, Vognkort</td></tr>
<tr style="border-bottom:1px solid var(--color-border)"><td style="padding:8px 10px;color:var(--color-text)">F – Lover og myndighet</td><td style="padding:8px 10px"><span style="background:#f59e0b;color:#fff;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:99px">Delvis</span></td><td style="padding:8px 10px;color:var(--color-text-light)">Myndighetspyramiden, Vognkort, Promille</td></tr>
<tr><td style="padding:8px 10px;color:var(--color-text)">G – Uhell og sikkerhet</td><td style="padding:8px 10px"><span style="background:#94a3b8;color:#fff;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:99px">Kommer</span></td><td style="padding:8px 10px;color:var(--color-text-light)">Sikkerhetskontroll, Mørkekjøring</td></tr>
</tbody></table>`
            },
            {
                title: 'Klar for å øve?',
                type: 'info',
                content: 'Bruk læringsressursene ovenfor til å jobbe deg gjennom hvert tema, og test deg etterpå:\n- [Ta gratis teoriprøve](/quiz)\n- [Se alle læringsressurser](/laeringsressurser)\n- [Øv på skilt](/quiz/skilt)\n- [Øv på vikeplikt](/laeringsressurser/vikeplikt)'
            }
        ],
        faq: [
            {
                question: 'Hva kommer på teoriprøven klasse B?',
                answer: 'Teoriprøven klasse B dekker 7 hovedtemaer: fart og samhandling, sikt og lys, skilt og vikeplikt, føreransvar og risiko, kjøretøyet, lover og regler, samt ulykker og sikkerhet. Du får 45 spørsmål og kan ha maks 7 feil for å bestå.'
            },
            {
                question: 'Er temalisten det samme som pensum?',
                answer: 'Ja, i praksis. Statens vegvesen sin temaliste for klasse B beskriver hvilke emner du kan bli testet på. Det er ikke en fasit på hvilke spørsmål du får, men en oversikt over hva du må forstå for å bestå.'
            },
            {
                question: 'Må jeg kunne alle temaene på temalisten?',
                answer: 'Ja. Teoriprøven kan inneholde spørsmål fra alle temaene. Det er ikke mulig å velge bort noen områder. Fokuser ekstra på temaer der du er usikker.'
            },
            {
                question: 'Hva er vanskeligst på teoriprøven?',
                answer: 'De vanligste feilkildene er vikeplikt (spesielt i komplekse kryss), skiltgjenkjenning, bremselengde og myndighetspyramiden. Mange stryker fordi de pugger svar uten å forstå logikken bak reglene.'
            },
            {
                question: 'Hvordan bør jeg bruke temalisten når jeg øver?',
                answer: 'Gå gjennom hvert tema og spør deg selv: forstår jeg regelen, kan jeg forklare den, og vet jeg hvordan jeg bruker den i trafikken? Les relevant guide på Teori-test.no og test deg med øvingsspørsmål etterpå.'
            },
            {
                question: 'Hvor finner jeg Statens vegvesen sin temaliste?',
                answer: 'Statens vegvesen publiserer temalisten på sine nettsider under informasjon om teoriprøven for klasse B. Teori-test.no er bygget rundt denne temalisten og dekker de sentrale temaene systematisk.'
            }
        ]
    }
]

export const theoryArticles: TheoryTopic[] = [
    {
        id: 'automatlappen',
        title: 'Automatlappen og elbil',
        icon: '🚗',
        shortDescription: 'Forstå kode 78, elbilens særegenheter og hva automatlappen faktisk betyr i 2026.',
        color: '#10b981', // Emerald
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
        color: '#f97316',
        seoTitle: 'Sikkerhetskontroll oppkjøring klasse B – spørsmål med fasit | Teori-test.no',
        seoDescription: 'Se vanlige sikkerhetskontroll-spørsmål til oppkjøring klasse B med svar og fasit. Øv på bremser, dekk, lys, styring, motorrom og varsellamper.',
        sections: [
            {
                title: 'Hva skjer på sikkerhetskontrollen?',
                type: 'info',
                content: 'Kort forklart: På oppkjøringen får du vanligvis ett sikkerhetskontroll-spørsmål før kjøringen starter. Du må kunne vise eller forklare kontroll av for eksempel bremser, dekk, lys, styring, vognkort eller varsellamper. Sensor vil enten be deg utføre kontrollen praktisk eller forklare hvordan du ville gjort det.'
            },
            {
                title: 'Vanlige sikkerhetskontroll-spørsmål med fasit',
                type: 'table',
                content: `<table>\n    <thead>\n        <tr>\n            <th>Sensor spør</th>\n            <th>Slik kontrollerer du</th>\n            <th>Kort fasit</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Kontroller dekktrykket</td>\n            <td>Se i vognkortet eller dørkarmen for anbefalt trykk. Bruk trykkmåler på ventilen.</td>\n            <td>Riktig trykk = trygt. Lavt trykk = dårligere grep og høyere forbruk.</td>\n        </tr>\n        <tr>\n            <td>Kontroller mønsterdybden</td>\n            <td>Bruk mønsterdybdemåler eller 20-kroningen. Minimum 1,6 mm — anbefalt 3 mm.</td>\n            <td>Under 1,6 mm er ulovlig og farlig.</td>\n        </tr>\n        <tr>\n            <td>Kontroller bremsene</td>\n            <td>Trykk bremsepedalen ned. Den skal være fast og ikke synke. Sjekk bremsevæskenivå i motorrommet.</td>\n            <td>Myk pedal = luftboble i systemet.</td>\n        </tr>\n        <tr>\n            <td>Kontroller styringen</td>\n            <td>Kjør sakte og kjenn at bilen følger rattet uten å trekke til siden.</td>\n            <td>Trekking = feil hjulstilling eller dekk.</td>\n        </tr>\n        <tr>\n            <td>Kontroller lys foran</td>\n            <td>Slå på tenning. Sjekk nærlys, fjernlys og parkeringslys visuelt foran bilen.</td>\n            <td>Defekt lys = bot. Se [lysbruk](/laeringsressurser/lysbruk-morkekjoring).</td>\n        </tr>\n        <tr>\n            <td>Kontroller bremselys</td>\n            <td>Slå på tenning. Be noen se bakpå mens du tråkker bremsepedalen.</td>\n            <td>Eller bruk refleksjonen i en vegg/garasjeport.</td>\n        </tr>\n        <tr>\n            <td>Kontroller motorolje</td>\n            <td>Trekk ut oljepinnen, tørk, sett inn igjen og sjekk nivået. Skal være mellom min og max.</td>\n            <td>For lite olje = motorskade.</td>\n        </tr>\n        <tr>\n            <td>Kontroller kjølevæske</td>\n            <td>Sjekk nivå i ekspansjonsbeholderen. Skal være mellom min og max når motoren er kald.</td>\n            <td>Aldri åpne lokket på varm motor.</td>\n        </tr>\n        <tr>\n            <td>Kontroller bremsevæske</td>\n            <td>Se nivå i beholderne under panseret. Skal være mellom min og max.</td>\n            <td>Lavt nivå kan bety slitte bremser eller lekkasje.</td>\n        </tr>\n        <tr>\n            <td>Kontroller vindusvaskervæske</td>\n            <td>Sjekk beholdernivå. Fyll på ved behov.</td>\n            <td>Tomt = dårlig sikt = farlig.</td>\n        </tr>\n        <tr>\n            <td>Kontroller varsellamper</td>\n            <td>Start bilen og sjekk at alle varsellamper slukker etter oppstart.</td>\n            <td>Lamper som lyser = feil som må sjekkes.</td>\n        </tr>\n        <tr>\n            <td>Hva betyr ABS-lampen?</td>\n            <td>ABS-systemet er feil. Bremser fungerer normalt men uten ABS-funksjon.</td>\n            <td>Kjør til verksted snart.</td>\n        </tr>\n        <tr>\n            <td>Hva betyr oljelampen?</td>\n            <td>Lavt oljetrykk. Stopp umiddelbart og slå av motoren.</td>\n            <td>Fortsetter du å kjøre kan motoren bli ødelagt.</td>\n        </tr>\n        <tr>\n            <td>Kontroller sikkerhetsbeltene</td>\n            <td>Dra beltet ut raskt — det skal låse seg. Sjekk at det klikker skikkelig i låsen.</td>\n            <td>Defekt belte = ikke godkjent.</td>\n        </tr>\n        <tr>\n            <td>Les av vognkortet</td>\n            <td>Finn egenvekt, tillatt totalvekt og nyttelast. Nyttelast = totalvekt minus egenvekt.</td>\n            <td>Viktig for tilhenger og lastberegning.</td>\n        </tr>\n        <tr>\n            <td>Hva er største tillatte tilhengervekt?</td>\n            <td>Se vognkortets felt for største tilhengervekt.</td>\n            <td>Avhenger av bilmodell — alltid sjekk vognkortet.</td>\n        </tr>\n    </tbody>\n</table>`
            },
            {
                title: 'Hva er sikkerhetskontroll?',
                type: 'text',
                content: 'På oppkjøringen vil sensor alltid starte med å gi deg en oppgave knyttet til bilens tekniske stand. Mange gruer seg til dette, men det er egentlig en veldig overkommelig oppgave når du kjenner systematikken.\n\nIfølge Vegtrafikklovens § 23 er det du som fører som har ansvaret for at kjøretøyet er i forsvarlig og forskriftsmessig stand før kjøringen begynner. Sikkerhetskontrollen gjennomføres som regel i to deler: Først kan sensor be deg om å utføre en praktisk sjekk på bilen. Eller stille deg et teknisk spørsmål, og ofte et oppfølgingsspørsmål om hvordan man sjekker dette.\n\nHer er de vanligste oppgavene du kan få på førerprøven, delt inn i kategorier.'
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
                content: 'Bremsene er bilens viktigste sikkerhetssystem. Du kan bli bedt om å kontrollere flere deler av dette systemet.\n\nOppgave: Kontroller bremsekraftforsterkeren.\n\nSlik gjør du: Den tradisjonelle måten er å pumpe bremsepedalen 5-6 ganger mens motoren er av, til pedalen blir hard. Hold pedalen inne og start motoren. Pedalen skal da synke litt inn. På mange moderne biler med elektroniske løsninger fungerer ikke denne metoden; her må du bremse i lav fart og kjenne at bilen stopper effektivt med lite trykk på pedalen.\n\nSensors spørsmål: Er det forsvarlig å kjøre hvis den ikke virker?\n\nSvar: Nei, bremsepedalen blir veldig tung og bilen får dårligere bremseeffekt.\n\nOppgave: Kontroller om bremsene har skjevtrekk.\n\nSlik gjør du: Bygg opp litt fart (10-15 km/t) på en jevn og rett strekning, brems normalt, og hold bare løst i rattet. Bilen skal gå rett frem.\n\nSensors spørsmål: Hva kan være grunnen til skjevtrekk?\n\nSvar: Testen skal avdekke feil som gjør at hjulene bremser ulikt, noe som kan gjøre at man mister kontrollen under hard oppbremsing. (Merk at ulikt lufttrykk eller en svært sporete vei også kan gi skjevtrekk).\n\nOppgave: Varsellampe for to-krets bremsesystem.\n\nSlik gjør du: Skru på tenningen og finn den røde varsellampen med et utropstegn (!). Den skal lyse noen sekunder og så slukke.\n\nSensors spørsmål: Hva gjør du hvis lampen lyser under kjøring?\n\nSvar: Stopp umiddelbart og tilkall veihjelp, da den røde lampen indikerer en alvorlig mangel eller lekkasje med bremsesystemet.'
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
            }
        ]
    },

    {
        id: 'oppkjoring',
        title: 'Oppkjøring klasse B: Komplett guide',
        icon: '🚗',
        shortDescription: 'Du har bestått teoriprøven – nå er det bare oppkjøringen igjen. Lær hva det koster, hva som skjer på sikkerhetskontrollen og hva sensor faktisk ser etter. Ekspert-tips som hjelper deg bestå på første forsøk.',
        color: '#f59e0b',
        sections: []
    },

    {
        id: 'stroket-teoriproven',
        title: 'Strøket på teoriprøven? Her er grunnen og slik består du neste gang',
        icon: '🎓',
        shortDescription: '43% stryker på teoriprøven hvert år. Lær hvorfor så mange stryker, hva du må gjøre annerledes, og hvordan du består på neste forsøk.',
        color: '#f97316',
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
        title: 'Guide til øvingskjøring',
        icon: '🚗',
        shortDescription: 'Skal du lære bort kjøring til egne barn? Lær hvordan du formidler erfaring, hva du bør øve på først, de vanskeligste situasjonene – og hvordan du sparer penger på trafikkskolen.',
        color: '#10b981', // AG Green
        seoTitle: 'Guide til øvingskjøring – krav og regler | Teori-test.no',
        seoDescription: 'Alt du trenger å vite om øvingskjøring: krav til ledsager, elev og bil for klasse B førerkort.',
        sections: [
            {
                title: 'Hva er øvingskjøring?',
                type: 'text',
                content: 'Øvingskjøring er privat kjøretrening med en godkjent ledsager, og er en av de beste måtene å bygge opp kjøreerfaring på. Jo mer du øver, desto tryggere vil du stå i fagprøven — og som sjåfør generelt. Men det er viktig å gjøre det riktig fra starten av.'
            },
            {
                title: 'Krav til deg som elev',
                type: 'info',
                content: '• Minst 16 år gammel\n• Bestått trafikalt grunnkurs (TG) ved en godkjent trafikkskole\n• Oppfylle helsekravene for førerkort\n\nTrafikalt grunnkurs er obligatorisk og må gjennomføres FØR du kan begynne å øvingskjøre. Unntak: Er du over 25 år, kan du starte uten å ha fullført hele TG.'
            },
            {
                title: 'Krav til ledsageren',
                type: 'warning',
                content: 'Ledsageren har samme juridiske ansvar som en kjørelærer. Vedkommende må:\n• Være minst 25 år gammel\n• Ha hatt gyldig klasse B-førerkort sammenhengende i minst 5 år\n• Sitte i forsetet ved siden av deg\n• Være helt edru under kjøringen\n\nVelg en ledsager som er tålmodig og konstruktiv — det gjør øktene mye mer effektive.'
            },
            {
                title: 'Krav til bilen',
                type: 'info',
                content: '• Gyldig EU-kontroll\n• Forsikret for øvingskjøring — sjekk med forsikringsselskapet!\n• L-skilt festet foran og bak på bilen\n• Fungerende speil, bremser, lys og sikkerhetsbelter\n\nDe fleste kaskoforsikringer dekker øvingskjøring automatisk, men det lønner seg å bekrefte dette på forhånd.'
            },
            {
                title: 'Bygg deg opp trinn for trinn',
                type: 'tip',
                content: 'Start enkelt og øk vanskelighetsgraden gradvis:\n\nFase 1 – Grunnleggende: starte, stoppe, gire og parkere på tom p-plass\nFase 2 – Rolige boligveier, enkle kryss og rundkjøringer\nFase 3 – Bykjøring med fotgjengere, syklister og kø\nFase 4 – Landevei og motorvei\nFase 5 – Mørke, regn og vinterføre\n\nStatens vegvesen anbefaler minst 100–150 kjørte timer. Ikke spar på øvingen!'
            },
            {
                title: 'Tips for gode øvingsøkter',
                type: 'tip',
                content: '• Avtal på forhånd hva dere skal fokusere på\n• Gi eleven tid til å reagere — unngå å rykke til i rattet\n• Gi ros for det som går bra, ikke bare korriger feil\n• Avslutt på en positiv opplevelse for å holde motivasjonen oppe\n• Varier mellom kjente og ukjente strekninger for bredere erfaring'
            },
            {
                title: 'Teori + praksis = best forberedt',
                type: 'tip',
                content: 'Øvingskjøring gir deg den praktiske erfaringen, men god trafikal forståelse starter med teorien. Her på Teori-test.no kan du øve på vikeplikt, skiltgjenkjenning og trafikkregler mellom kjøreøktene — slik at du er best mulig forberedt til både teori- og fagprøven. 🎯\n\nNår du er klar for selve oppkjøringen, les vår komplette guide til hva du kan vente deg -> [Oppkjøring klasse B](/laeringsressurser/oppkjoring)'
            }
        ]
    },

    {
        id: 'tips-eksamen',
        title: 'Hvordan bestå teoriprøven på første forsøk (Klasse B)',
        icon: '💡',
        shortDescription: 'Å stryke koster både tid og penger. Faktisk stryker omtrent halvparten av alle som tar teoriprøven for bil. Slik forbereder du deg riktig, unngår fellene og består på første forsøk.',
        color: '#fb923c', // AG Bright Orange/Yellow
        seoTitle: 'Slik består du teoriprøven på første forsøk | Teori-test.no',
        seoDescription: 'Omtrent halvparten stryker på teoriprøven. Lær hvordan du unngår de vanligste fellene, forstår logikken og består på første forsøk. Øv gratis her.',
        sections: [
            {
                title: '1. Forstå logikken (ikke bare pugg)',
                type: 'text',
                content: 'Vegvesenet endrer ofte ordlyden i spørsmålene sine. Lærer du deg bare fasiten utenat, vil du slite når spørsmålet stilles på en ny måte. Fokuser på å forstå hvorfor reglene er som de er. Forstår du logikken bak trafikkreglene, som for eksempel [vikeplikt](/laeringsressurser/vikeplikt), kan du resonnere deg frem til riktig svar uansett hvordan oppgaven er formulert.'
            },
            {
                title: '2. Unngå de vanligste fellene',
                type: 'warning',
                content: 'Den vanligste årsaken til unødvendige feil er uoppmerksomhet. Ha dette i bakhodet under selve prøven:\n• Les spørsmålet to ganger: Se opp for små, avgjørende ord som "IKKE" eller "UNNTATT".\n• Bruk eliminasjonsmetoden: Fjern svaralternativene du vet med sikkerhet er feil først.\n• Studer bildene: De er ikke bare illustrasjoner, men inneholder ofte viktige hint om fartsgrenser, [skilt](/quiz/skilt) eller blindsoner.\n• Tenk trafikksikkerhet: Er du i tvil, velg alltid det alternativet som gir lavest risiko.'
            },
            {
                title: '3. Fakta om prøven',
                type: 'info',
                content: 'Husk å forhåndsbestille time hos Statens vegvesen og ta med gyldig legitimasjon.\n• Krav: Prøven har 45 spørsmål. Du må ha minst 38 riktige (maks 7 feil) for å bestå.\n• Pris: Teoriprøven koster 680 kr hos Statens vegvesen (2026). Stryker du må du betale på nytt og vente minst 2 uker.\n• Gyldighet: Bestått teoriprøve er gyldig i 3 år — innen den tid må du ha bestått kjøreprøven (oppkjøringen).\n• Varighet: Teoriprøven varer 90 minutter. De fleste er ferdig på under en time.\n• Alderskrav: Du kan ta teoriprøven fra du er 16 år. Du kan søke om time 6 måneder før du fyller 16.\n• Før prøven: Møt opp uthvilt og ha spist på forhånd. En trøtt hjerne gjør lettere slurvefeil.'
            },
            {
                title: '4. Øv målrettet og effektivt',
                type: 'tip',
                content: 'Den beste og gratis treningen er å simulere den ekte prøvesituasjonen. På Teori-test.no kan du øve gratis med verktøy som forbereder deg nøyaktig på det som møter deg:\n• [Full prøve-modus](/quiz?mode=eksamen): 45 spørsmål på 90 minutter – akkurat som på trafikkstasjonen.\n• [Ekspresstest](/quiz?mode=hurtig): Raske økter som passer perfekt på mobilen når du har noen minutter ledig.\n• [Fokus-modus](/quiz?mode=fokus): Et smart verktøy som husker hva du svarer feil på, slik at du kun trenger å terpe på svakhetene dine.'
            }
        ]
    }
];

export const theoryUtilityPages: TheoryTopic[] = [
    {
        id: 'personvern',
        title: 'Personvern & Cookies – Slik tar vi vare på dine data',
        icon: '🛡️',
        shortDescription: 'Teori-test.no er bygget på personvern. Vi samler ikke inn personopplysninger og lagrer dine resultater lokalt i din egen nettleser.',
        color: '#6366f1',
        seoTitle: 'Personvern & Cookies | Teori-test.no',
        seoDescription: 'Les om hvordan Teori-test.no håndterer personvern og cookies. Vi samler ikke inn personopplysninger og lagrer dine resultater lokalt i nettleseren din.',
        sections: [
            {
                title: 'Kort oppsummert',
                type: 'info',
                content: '• Vi krever **ingen registrering** eller innlogging.\n• Vi samler **ikke** inn navn, e-post eller telefonnummer.\n• Dine feilsvar i "Fokus mode" lagres **kun lokalt** i din egen nettleser.\n• Vi bruker kun anonymisert statistikk for å forbedre tjenesten.'
            },
            {
                title: 'Hva vi samler inn',
                type: 'text',
                content: 'Teori-test.no er designet for å være så anonym som overhodet mulig. Du kan bruke hele tjenesten uten å oppgi en eneste personopplysning. Vi har ingen database som lagrer hvem du er eller hva du svarer på prøvene våre.'
            },
            {
                title: 'Lokal lagring (localStorage)',
                type: 'tip',
                content: 'Når du svarer feil på et spørsmål, lagres dette spørsmålet i nettleseren din slik at du kan øve på det i "Fokus mode". Dette lagres i det som kalles *localStorage*. Dette er data som aldri forlater din maskin, og som vi ikke har tilgang til. Du kan når som helst slette disse dataene ved å tømme nettleserdataene dine.'
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
