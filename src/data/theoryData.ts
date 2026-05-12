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
        title: 'Veimerking til teoriprøven – komplett visuell guide (Klasse B)',
        icon: '🛣️',
        shortDescription: 'Lær all norsk veimerking til teoriprøven med visuelle illustrasjoner. Sperrelinje, varselslinje, gangfelt, pilmerking og mer — med eksempler og forklaringer.',
        color: 'var(--apple-indigo)',
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
        title: 'Trafikkskilt – Komplett oversikt til teoriprøven for bil',
        icon: '🚦',
        shortDescription: 'Trafikkskilt er hjørnesteinen i trafikksikkerhet. Her får du vår komplette guide til de norske trafikkskiltene du må kjenne til for klasse B.',
        color: 'var(--apple-blue)',
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
        color: 'var(--apple-blue)',
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
        color: 'var(--apple-red)',
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
        color: 'var(--apple-red)',
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
        title: 'Vognkort og vekter: Slik forstår du tallene til teoriprøven',
        icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"><rect x="10" y="6" width="44" height="52" rx="3" fill="%23F4F4F6" stroke="%23D1D1D6" stroke-width="2"/><rect x="11" y="7" width="42" height="50" rx="2" fill="%23FFFFFF"/><rect x="25" y="12" width="14" height="10" rx="1" fill="%23C8102E"/><path d="M28 15 L32 19 L36 15 Z" fill="%23FFD100"/><text x="44" y="20" font-family="Arial, sans-serif" font-weight="bold" font-size="14" fill="%231A1A1A">1</text><rect x="20" y="25" width="24" height="2" rx="1" fill="%238E8E93"/><rect x="16" y="29" width="32" height="1.5" rx="0.75" fill="%23AEAEB2"/><rect x="14" y="34" width="36" height="6" rx="1" fill="%23E5E5EA"/><rect x="16" y="36.5" width="10" height="1" rx="0.5" fill="%238E8E93"/><rect x="30" y="36.5" width="16" height="1" rx="0.5" fill="%23C7C7CC"/><rect x="14" y="42" width="36" height="6" rx="1" fill="%23E5E5EA"/><rect x="16" y="44.5" width="12" height="1" rx="0.5" fill="%238E8E93"/><rect x="30" y="44.5" width="12" height="1" rx="0.5" fill="%23C7C7CC"/><rect x="14" y="50" width="36" height="6" rx="1" fill="%23E5E5EA"/><rect x="16" y="52.5" width="8" height="1" rx="0.5" fill="%238E8E93"/><rect x="30" y="52.5" width="18" height="1" rx="0.5" fill="%23C7C7CC"/></svg>',
        shortDescription: 'Lær å lese vognkortet: egenvekt, tillatt totalvekt, aktuell vekt, og hvordan du regner ut nøyaktig nyttelast for personbil.',
        color: 'var(--apple-indigo)',
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
        color: 'var(--apple-blue)',
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
                content: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:1.25rem">
<!-- Tema A -->
<div style="border:1px solid var(--color-border);border-radius:14px;padding:1.5rem;background:var(--color-bg);display:flex;flex-direction:column;height:100%">
  <div style="display:grid;grid-template-columns:28px 1fr auto;gap:0.75rem;align-items:start;margin-bottom:1.25rem">
    <div style="background:var(--color-primary);color:#fff;width:28px;height:26px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:0.9rem;font-weight:800;margin-top:2px">A</div>
    <strong style="font-size:1.05rem;color:var(--color-text);line-height:1.3">Fart, plassering og samhandling</strong>
    <span style="background:#f59e0b;color:#fff;font-size:0.6rem;font-weight:700;padding:3px 10px;border-radius:99px;text-transform:uppercase;margin-top:4px">Delvis</span>
  </div>
  <ul style="margin:0 0 1.5rem 0;padding-left:1.3rem;color:var(--color-text-light);font-size:0.875rem;line-height:1.7;flex-grow:1">
    <li>Avstand til forankjørende</li><li>Feltvalg og kollektivfelt</li><li>Rundkjøring og envegskjøring</li><li>Forbikjøring og fletting</li><li>Hest i trafikken og planovergang</li>
  </ul>
  <div style="font-size:0.82rem;color:var(--color-text-light);border-top:1px solid var(--color-border);padding-top:1rem">
    <span style="opacity:0.7;font-weight:600">Les:</span> <a href="/laeringsressurser/fartsgrenser" style="color:var(--color-primary);text-decoration:none">Fartsgrenser</a> · <a href="/laeringsressurser/rundkjoring" style="color:var(--color-primary);text-decoration:none">Rundkjøring</a> · <a href="/laeringsressurser/forbikjoring" style="color:var(--color-primary);text-decoration:none">Forbikjøring</a>
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
    <li>Sikt, vær og mørke</li><li>Bruk av lys</li><li>Bremselengde og stopplengde</li><li>Reaksjonslengde og veggrep</li>
  </ul>
  <div style="font-size:0.82rem;color:var(--color-text-light);border-top:1px solid var(--color-border);padding-top:1rem">
    <span style="opacity:0.7;font-weight:600">Les:</span> <a href="/laeringsressurser/morkekjoring" style="color:var(--color-primary);text-decoration:none">Mørkekjøring</a> · <a href="/laeringsressurser/bremselengde" style="color:var(--color-primary);text-decoration:none">Bremselengde</a> · <a href="/laeringsressurser/reaksjonstid" style="color:var(--color-primary);text-decoration:none">Reaksjonstid</a>
  </div>
</div>

<!-- Tema C -->
<div style="border:1px solid var(--color-border);border-radius:14px;padding:1.5rem;background:var(--color-bg);display:flex;flex-direction:column;height:100%">
  <div style="display:grid;grid-template-columns:28px 1fr auto;gap:0.75rem;align-items:start;margin-bottom:1.25rem">
    <div style="background:var(--color-primary);color:#fff;width:28px;height:26px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:0.9rem;font-weight:800;margin-top:2px">C</div>
    <strong style="font-size:1.05rem;color:var(--color-text);line-height:1.3">Skilt, oppmerking og vikeplikt</strong>
    <span style="background:#22c55e;color:#fff;font-size:0.6rem;font-weight:700;padding:3px 10px;border-radius:99px;text-transform:uppercase;margin-top:4px">Godt</span>
  </div>
  <ul style="margin:0 0 1.5rem 0;padding-left:1.3rem;color:var(--color-text-light);font-size:0.875rem;line-height:1.7;flex-grow:1">
    <li>Skilt og skiltgrupper</li><li>Vegoppmerking</li><li>Vikeplikt og høyreregel</li><li>Lysregulering og politimannens tegn</li><li>Stoppeplikt</li>
  </ul>
  <div style="font-size:0.82rem;color:var(--color-text-light);border-top:1px solid var(--color-border);padding-top:1rem">
    <span style="opacity:0.7;font-weight:600">Les:</span> <a href="/laeringsressurser/skilt" style="color:var(--color-primary);text-decoration:none">Skilt</a> · <a href="/laeringsressurser/veimerking" style="color:var(--color-primary);text-decoration:none">Vegoppmerking</a> · <a href="/laeringsressurser/vikeplikt" style="color:var(--color-primary);text-decoration:none">Vikeplikt</a> · <a href="/laeringsressurser/myndighetspyramiden" style="color:var(--color-primary);text-decoration:none">Myndighetspyramiden</a>
  </div>
</div>

<!-- Tema D -->
<div style="border:1px solid var(--color-border);border-radius:14px;padding:1.5rem;background:var(--color-bg);display:flex;flex-direction:column;height:100%">
  <div style="display:grid;grid-template-columns:28px 1fr auto;gap:0.75rem;align-items:start;margin-bottom:1.25rem">
    <div style="background:var(--color-primary);color:#fff;width:28px;height:26px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:0.9rem;font-weight:800;margin-top:2px">D</div>
    <strong style="font-size:1.05rem;color:var(--color-text);line-height:1.3">Fører, ansvar og risiko</strong>
    <span style="background:#f59e0b;color:#fff;font-size:0.6rem;font-weight:700;padding:3px 10px;border-radius:99px;text-transform:uppercase;margin-top:4px">Delvis</span>
  </div>
  <ul style="margin:0 0 1.5rem 0;padding-left:1.3rem;color:var(--color-text-light);font-size:0.875rem;line-height:1.7;flex-grow:1">
    <li>Reaksjonstid og sanser</li><li>Tretthet og uoppmerksomhet</li><li>Rus og pliktmessig avhold</li><li>Helsekrav og førerrett</li><li>Øvelseskjøring</li>
  </ul>
  <div style="font-size:0.82rem;color:var(--color-text-light);border-top:1px solid var(--color-border);padding-top:1rem">
    <span style="opacity:0.7;font-weight:600">Les:</span> <a href="/laeringsressurser/promille" style="color:var(--color-primary);text-decoration:none">Promille</a> · <a href="/laeringsressurser/reaksjonstid" style="color:var(--color-primary);text-decoration:none">Reaksjonstid</a> · <a href="/laeringsressurser/ovingskjoring" style="color:var(--color-primary);text-decoration:none">Øvelseskjøring</a>
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
    <li>Dekk, bremser og styring</li><li>Instrumentpanel og varsellys</li><li>Drivstoff og energikilde</li><li>Sikkerhetskontroll og kjetting</li><li>Førerstøttesystemer</li>
  </ul>
  <div style="font-size:0.82rem;color:var(--color-text-light);border-top:1px solid var(--color-border);padding-top:1rem">
    <span style="opacity:0.7;font-weight:600">Les:</span> <a href="/laeringsressurser/sikkerhetskontroll" style="color:var(--color-primary);text-decoration:none">Sikkerhetskontroll</a> · <a href="/laeringsressurser/tilhenger" style="color:var(--color-primary);text-decoration:none">Tilhenger</a> · <a href="/laeringsressurser/automatlappen" style="color:var(--color-primary);text-decoration:none">Automatlappen</a>
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
    <li>Trafikkregler og vegtrafikkloven</li><li>Offentlige reaksjoner og bøter</li><li>Registrering, vognkort og forsikring</li>
  </ul>
  <div style="font-size:0.82rem;color:var(--color-text-light);border-top:1px solid var(--color-border);padding-top:1rem">
    <span style="opacity:0.7;font-weight:600">Les:</span> <a href="/laeringsressurser/myndighetspyramiden" style="color:var(--color-primary);text-decoration:none">Myndighetspyramiden</a> · <a href="/laeringsressurser/vognkort-vekter" style="color:var(--color-primary);text-decoration:none">Vognkort</a> · <a href="/laeringsressurser/promille" style="color:var(--color-primary);text-decoration:none">Promille</a>
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
    <li><a href="/laeringsressurser/trafikkuhell-forstehjelp" style="color:inherit;text-decoration:none;border-bottom:1px dashed var(--color-border)">Førstehjelp og trafikkuhell</a></li><li><a href="/laeringsressurser/sikkerhetsutstyr" style="color:inherit;text-decoration:none;border-bottom:1px dashed var(--color-border)">Sikringsutstyr og varseltrekant</a></li><li><a href="/laeringsressurser/trafikkuhell-forstehjelp" style="color:inherit;text-decoration:none;border-bottom:1px dashed var(--color-border)">Tunnelsikkerhet</a></li><li>Snø på tak og isfrie ruter</li>
  </ul>
  <div style="font-size:0.82rem;color:var(--color-text-light);border-top:1px solid var(--color-border);padding-top:1rem">
    <span style="opacity:0.7;font-weight:600">Les:</span> <a href="/laeringsressurser/trafikkuhell-forstehjelp" style="color:var(--color-primary);text-decoration:none">Trafikkuhell</a> · <a href="/laeringsressurser/sikkerhetsutstyr" style="color:var(--color-primary);text-decoration:none">Sikkerhetsutstyr</a> · <a href="/laeringsressurser/morkekjoring" style="color:var(--color-primary);text-decoration:none">Mørkekjøring</a>
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
                content: `<div style="margin-bottom:1.5rem;padding:1rem;border-radius:10px;background:rgba(0,0,0,0.02);border:1px solid var(--color-border);color:var(--color-text-light);font-size:0.875rem;line-height:1.6">Vi bygger ut siden fortløpende. Nye artikler, guider og oppgaver legges til etter hvert for å dekke hele temalisten på en god måte.</div><table style="width:100%;border-collapse:collapse;font-size:0.875rem">
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
<tr><td style="padding:8px 10px;color:var(--color-text)">G – Uhell og sikkerhet</td><td style="padding:8px 10px"><span style="background:#22c55e;color:#fff;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:99px">Godt</span></td><td style="padding:8px 10px;color:var(--color-text-light)">Trafikkuhell & Førstehjelp, Sikkerhetsutstyr, Mørkekjøring</td></tr>
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
        color: 'var(--apple-orange)',
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
        title: 'Guide til øvingskjøring',
        icon: '🚗',
        shortDescription: 'Skal du lære bort kjøring til egne barn? Lær hvordan du formidler erfaring, hva du bør øve på først, de vanskeligste situasjonene – og hvordan du sparer penger på trafikkskolen.',
        color: 'var(--apple-green)',
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
        title: 'Sikkerhetsutstyr i bilen',
        icon: '🛡️',
        shortDescription: 'Lær om bilbelte, barnesikring, airbag, varseltrekant og refleksvest. Alt du trenger å vite om påbudt og anbefalt utstyr.',
        color: 'var(--apple-blue)',
        seoTitle: 'Sikkerhetsutstyr i bil: regler for bilbelte, barnesikring og airbag | Teori-test.no',
        seoDescription: 'Hva er påbudt sikkerhetsutstyr i bilen? Lær reglene for bilbelte, barnesikring og airbag. Se også krav til varseltrekant og refleksvest.',
        sections: [
            {
                title: 'Sikkerhetsutstyr i bilen',
                type: 'text',
                content: 'Sikkerhetsutstyr handler om to ting: å beskytte dem som sitter i bilen, og å gjøre deg synlig og trygg hvis noe skjer langs veien.\n\nPå teoriprøven kan du få spørsmål om bilbelte, barnesikring, airbag, refleksvest, varseltrekant og hva du bør gjøre ved stans eller trafikkuhell.'
            },
            {
                title: 'Kort forklart',
                type: 'info',
                content: 'Dette bør du kunne:\n\n• Alle skal bruke bilbelte.\n• Barn under 135 cm skal bruke godkjent barnesikring.\n• Bakovervendt barnesete må aldri brukes foran aktiv airbag.\n• Bilen skal ha varseltrekant.\n• Refleksvest skal ligge lett tilgjengelig fra førerplassen.\n• Førstehjelpsutstyr og brannslukker er lurt å ha, men ikke påbudt i vanlig personbil.'
            },
            {
                title: 'Bilbelte',
                type: 'text',
                content: 'Alle i bilen skal bruke bilbelte, både fører og passasjerer. Bilbeltet holder kroppen på plass ved bråbrems or kollisjon, og fungerer sammen med airbag og bilens øvrige sikkerhetssystemer.\n\nSom fører har du ansvar for at passasjerer under 15 år er riktig sikret. Voksne passasjerer har selv ansvar for å bruke bilbelte, men som fører bør du likevel passe på at alle er sikret før du kjører.\n\nVanlige feil:\n- beltet ligger under armen\n- beltet ligger over halsen\n- beltet er vridd\n- passasjerer dropper belte “bare på en kort tur”\n\nKorte turer er ikke et unntak. Ulykker bestiller ikke langkjøring først.'
            },
            {
                title: 'Barnesikring',
                type: 'text',
                content: 'Barn under 135 cm skal bruke godkjent barnesikringsutstyr som passer barnets høyde og vekt. Det kan være barnesete, beltestol eller pute, avhengig av barnet.\n\nBarn bør sitte bakovervendt så lenge som mulig. Det gir bedre beskyttelse for hode, nakke og rygg ved en kollisjon.\n\nViktig regel: Bakovervendt barnesete skal aldri plasseres foran en aktiv airbag. Hvis airbagen utløses, kan det være svært farlig for barnet.'
            },
            {
                title: 'Airbag',
                type: 'info',
                content: 'Airbag er laget for å fungere sammen med bilbeltet. Den skal dempe slag mot hode og overkropp ved kraftig kollisjon, men den erstatter aldri bilbeltet.\n\nDette bør du kunne:\n• Airbag + bilbelte gir best beskyttelse.\n• Airbag uten bilbelte kan gi alvorlige skader.\n• Du bør sitte riktig og ha god avstand til rattet.\n• Bakovervendt barnesete må ikke brukes foran aktiv airbag.'
            },
            {
                title: 'Varseltrekant',
                type: 'warning',
                content: 'Bilen skal ha minst én varseltrekant. Den brukes hvis bilen står til fare eller hinder for trafikken og ikke kan flyttes trygt med en gang.\n\nVarseltrekanten skal plasseres slik at andre trafikanter rekker å oppdage faren. Ved høy fart, sving eller bakketopp må den stå i god avstand før bilen eller ulykkesstedet.\n\nIkke tenk bare “bak bilen”. Tenk: Hvor må varslingen stå for at andre rekker å reagere?'
            },
            {
                title: 'Refleksvest',
                type: 'tip',
                content: 'Refleksvesten skal ligge lett tilgjengelig fra førerplassen, for eksempel i bildøren eller hanskerommet. Poenget er at du skal kunne ta den på før du går ut av bilen.\n\nDen bør brukes hvis du må forlate bilen langs veien, særlig ved motorstopp, punktering, trafikkuhell, mørke eller dårlig sikt.'
            },
            {
                title: 'Anbefalt utstyr i bilen',
                type: 'text',
                content: 'Dette er smart å ha, selv om alt ikke er påbudt i vanlig personbil:\n\n- førstehjelpsutstyr\n- brannslukker\n- lommelykt\n- varme klær eller teppe\n- isskrape og snøkost\n- dekkreparasjonssett eller reservehjul hvis bilen har det\n- startkabler eller ladet startbooster\n- mobiltelefon med strøm\n\nPoenget er ikke å fylle bilen som en ekspedisjon. Poenget er å kunne håndtere en vanlig nødsituasjon uten å stå helt hjelpeløs.'
            },
            {
                title: 'Ved trafikkuhell',
                type: 'text',
                content: 'Ved trafikkuhell er riktig rekkefølge:\n\n**Stans – sikre – varsle – hjelpe**\n\nSikre deg selv og stedet først. Bruk refleksvest, nødblink og varseltrekant. Ved personskade ringer du 113 og følger instruksene du får.\n\n[Les mer om trafikkuhell og førstehjelp](/laeringsressurser/trafikkuhell-forstehjelp)'
            }
        ],
        miniQuiz: [
            {
                question: 'Hva er påbudt å ha i bilen?',
                options: ['Førstehjelpsutstyr og brannslukker', 'Varseltrekant og refleksvest', 'Reservehjul og jekk', 'Startkabler og lommelykt'],
                correct: 'Varseltrekant og refleksvest',
                explanation: 'I en vanlig personbil er varseltrekant og refleksvest påbudt utstyr.'
            },
            {
                question: 'Hvor bør refleksvesten ligge?',
                options: ['I bagasjerommet', 'I hanskerommet eller bildøren', 'Under reservehjulet', 'Hjemme i garasjen'],
                correct: 'I hanskerommet eller bildøren',
                explanation: 'Refleksvesten skal ligge lett tilgjengelig fra førerplassen slik at du kan ta den på før du går ut av bilen.'
            },
            {
                question: 'Kan bakovervendt barnesete stå foran aktiv airbag?',
                options: ['Ja, det er tryggest', 'Bare hvis barnet er over 10 kg', 'Nei, det kan være svært farlig', 'Ja, hvis stolen er godkjent'],
                correct: 'Nei, det kan være svært farlig',
                explanation: 'Airbagen utløses med voldsom kraft og kan skade barnet alvorlig hvis det sitter i bakovervendt sete.'
            },
            {
                question: 'Hva gjør du først hvis bilen stanser farlig langs veien?',
                options: ['Ringer etter veihjelp', 'Gjør deg synlig og sikre stedet', 'Begynner å reparere feilen', 'Går ut og vinker til andre biler'],
                correct: 'Gjør deg synlig og sikre stedet',
                explanation: 'Ta på refleksvest, sett ut varseltrekant og bruk nødblink for å hindre påkjørsel.'
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
                content: 'Les også:\n- [Mørkekjøring](/laeringsressurser/morkekjoring)\n- [Sikkerhetskontroll](/laeringsressurser/sikkerhetskontroll)\n- [Trafikkuhell og førstehjelp](/laeringsressurser/trafikkuhell)\n\n| Lys | Når brukes det? | Typisk teorifelle |\n|---|---|---|\n| Nærlys | Ved kjøring i mørke, tunnel, regn, snø, tåke eller dårlig sikt | Å tro at kjørelys alltid er nok |\n| Kjørelys | På dagtid og ved gode siktforhold | Baklys er ikke alltid tent sammen med kjørelys |\n| Fjernlys | På mørke veier når det ikke blender andre | Å glemme å blende ned for møtende eller forankjørende |\n| Tåkelys foran | Ved tåke/svært dårlig sikt, eller som kjørelys på dagtid i stedet for nærlys | Skal ikke brukes sammen med nærlys |\n| Kurvelys | Ved lav fart i svinger, avhengig av bilens system | Å tro at det er ekstra lys du kan bruke fritt |\n| Baklys | Gjør bilen synlig bakfra, særlig i mørke, tunnel og dårlig sikt | Mange biler har ikke baklys tent med bare kjørelys |\n| Bremselys | Lyser automatisk når du bremser | Defekte bremselys gjør at bilen bak får mindre tid til å reagere |\n| Blinklys/retningslys | Ved sving, feltskifte, forbikjøring og ut av rundkjøring | Å blinke for sent, eller glemme å blinke ut av rundkjøring |\n| Nødblink/nødsignallys | Ved fare, stans, ulykke eller motorstopp | Å bruke nødblink som “parkeringstillatelse” |\n| Parkeringslys | Når bilen står parkert eller stanset og må være synlig | Å kjøre med bare parkeringslys |\n| Skiltlys | Lyser opp registreringsskiltet bak | Lett å glemme ved sikkerhetskontroll |\n| Ryggelys | Lyser når bilen settes i revers | Det varsler rygging, men gir deg ikke forkjørsrett |\n| Autolys | Automatisk lysfunksjon på nyere biler | Kan lure deg i tunnel, regn, tåke eller skumring |'
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
    }
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
