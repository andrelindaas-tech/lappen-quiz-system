// Teoridata — Alt innhold på norsk

export interface SignItem {
    name: string
    description: string
    imageUrl: string
}

export interface TheorySection {
    title: string
    content: string
    type: 'text' | 'formula' | 'info' | 'warning' | 'tip' | 'example' | 'signs'
    signs?: SignItem[]
}

export interface TheoryTopic {
    id: string
    title: string
    icon: string
    shortDescription: string
    color: string
    sections: TheorySection[]
    hasCalculator?: boolean
}

export const theoryTopics: TheoryTopic[] = [
    {
        id: 'bremselengde',
        title: 'Bremselengde',
        icon: '🛑',
        shortDescription: 'Lær å beregne bremselengde, reaksjonslengde og stopplengde',
        color: '#dc2626',
        hasCalculator: true,
        sections: [
            {
                title: 'Hva er bremselengde?',
                type: 'text',
                content: 'Bremselengde er den avstanden bilen tilbakelegger fra du begynner å bremse til bilen står stille. Bremselengden avhenger av farten, veidekke, bremsenes tilstand og bilens vekt.'
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
                content: '• Fart — Dobbel fart gir 4 ganger lengre bremselengde\n• Veidekke — Is, snø, regn øker bremselengden betydelig\n• Dekkenes tilstand — Slitte dekk gir dårligere grep\n• Bremsenes tilstand — Slitte bremser reduserer bremsekraften\n• Bilens vekt — Tung bil trenger lengre avstand\n• Helning — Nedoverbakke øker bremselengden'
            },
            {
                title: 'Prøv kalkulatoren!',
                type: 'tip',
                content: 'Bruk kalkulatoren nedenfor til å se hvordan ulike hastigheter påvirker bremselengden. Test med 30, 50, 80 og 100 km/t for å se forskjellen!'
            }
        ]
    },
    {
        id: 'reaksjonstid',
        title: 'Reaksjonstid og stopplengde',
        icon: '⏱️',
        shortDescription: 'Forstå hvordan reaksjonstiden påvirker stopplengden',
        color: '#2563eb',
        sections: [
            {
                title: 'Hva er reaksjonstid?',
                type: 'text',
                content: 'Reaksjonstid er tiden det tar fra du oppdager en fare til du begynner å bremse. Normal reaksjonstid er ca. 1 sekund for en opplagt og frisk sjåfør. I løpet av dette sekundet fortsetter bilen med uforminsket fart.'
            },
            {
                title: 'Formel for reaksjonslengde',
                type: 'formula',
                content: 'Reaksjonslengde = (Fart ÷ 10) × 3 meter\n\nVed 50 km/t: (50 ÷ 10) × 3 = 15 meter\nVed 80 km/t: (80 ÷ 10) × 3 = 24 meter\nVed 100 km/t: (100 ÷ 10) × 3 = 30 meter'
            },
            {
                title: 'Hva påvirker reaksjonstiden?',
                type: 'info',
                content: '• Tretthet — Kan doble eller tredoble reaksjonstiden\n• Alkohol — Selv små mengder forsinker reaksjonene\n• Mobilbruk — Tar oppmerksomheten bort fra veien\n• Uoppmerksomhet — Snakking, radio, mat\n• Medisiner — Noen medisiner gir trøtthet\n• Mørke — Vanskeligere å oppdage farer\n• Alder — Eldre sjåfører reagerer noe langsommere'
            },
            {
                title: 'Stopplengde = Reaksjon + Bremsing',
                type: 'text',
                content: 'Stopplengden er den totale avstanden bilen tilbakelegger fra du oppdager en fare til bilen står stille. Den består av to deler:\n\n1. Reaksjonslengde — avstanden du kjører mens hjernen behandler informasjonen\n2. Bremselengde — avstanden fra bremsing starter til bilen stopper\n\nBegge øker med hastigheten, men bremselengden øker mye raskere (kvadratisk).'
            },
            {
                title: 'Eksempler på stopplengde',
                type: 'example',
                content: 'Ved 30 km/t (tørr vei): 9 + 4,5 = ca. 14 meter\nVed 50 km/t (tørr vei): 15 + 12,5 = ca. 28 meter\nVed 80 km/t (tørr vei): 24 + 32 = ca. 56 meter\nVed 100 km/t (tørr vei): 30 + 50 = ca. 80 meter\nVed 120 km/t (tørr vei): 36 + 72 = ca. 108 meter'
            },
            {
                title: 'Tommelfingerregel',
                type: 'tip',
                content: 'Hold alltid minst 3 sekunders avstand til bilen foran. I dårlige forhold (regn, snø, is) bør avstanden økes til 4–6 sekunder.'
            }
        ]
    },
    {
        id: 'vikeplikt',
        title: 'Vikeplikt',
        icon: '🔺',
        shortDescription: 'Hvem skal vike? Regler for kryss, rundkjøring og trikk',
        color: '#ea580c',
        sections: [
            {
                title: 'Grunnregel: Høyreregel',
                type: 'text',
                content: 'Den viktigste vikepliktsregelen i Norge er høyreregelen: Du har vikeplikt for kjøretøy som kommer fra høyre, med mindre noe annet er bestemt ved skilt eller oppmerking. Denne regelen gjelder i kryss uten skilt.'
            },
            {
                title: 'Vikepliktskilt',
                type: 'signs',
                content: '',
                signs: [
                    {
                        name: 'Vikepliktskilt',
                        description: 'Du skal vike for all trafikk på kryssende vei',
                        imageUrl: '/signs/vikeplikt.svg'
                    },
                    {
                        name: 'Stoppskilt',
                        description: 'Du MÅ stoppe helt opp før du kjører videre',
                        imageUrl: '/signs/stopp.svg'
                    },
                    {
                        name: 'Forkjørsvei',
                        description: 'Du har forkjørsrett, kryssende trafikk skal vike',
                        imageUrl: '/signs/forkjorsvei.svg'
                    }
                ]
            },
            {
                title: 'Rundkjøring',
                type: 'text',
                content: 'I en rundkjøring har du vikeplikt for trafikk som allerede er inne i rundkjøringen. Det betyr at du må vente til det er trygt å kjøre inn. Husk å bruke blinklys når du kjører ut av rundkjøringen!'
            },
            {
                title: 'Trikk og buss',
                type: 'warning',
                content: 'Trikk har som regel forkjørsrett. Du har vikeplikt for trikk selv om den kommer fra venstre (unntak fra høyreregelen). Buss som forlater holdeplass med blinklys har forkjørsrett når fartsgrensen er 60 km/t eller lavere.'
            },
            {
                title: 'Vikeplikt ved utkjøring',
                type: 'text',
                content: 'Du har alltid vikeplikt når du kjører ut fra:\n• Parkeringsplass\n• Eiendom (gårdsplass, garasje)\n• Bensinstasjon\n• Gang- eller sykkelvei\n\nDu skal vike for ALL trafikk — også fotgjengere og syklister.'
            },
            {
                title: 'Husk!',
                type: 'tip',
                content: 'Ved tvil — ta det rolig og la den andre passere. Det er bedre å vente litt for lenge enn å forårsake en ulykke.'
            }
        ]
    },
    {
        id: 'skilt',
        title: 'Skilt-oversikt',
        icon: '🚦',
        shortDescription: 'De viktigste trafikkskiltene du må kjenne til',
        color: '#059669',
        sections: [
            {
                title: 'Skilttyper etter form og farge',
                type: 'text',
                content: 'Norske trafikkskilt er delt inn i kategorier basert på form og farge:\n\n• Forbudsskilt — Runde med rød kant (forbud og påbud)\n• Fareskilt — Trekantede med rød kant (varsling om fare)\n• Opplysningsskilt — Firkantede, blå eller grønne (informasjon)\n• Veivisningsskilt — Rektangulære (retning og avstand)\n• Underskilt — Supplerer hovedskiltet med tilleggsinformasjon'
            },
            {
                title: 'Forbudsskilt',
                type: 'info',
                content: '• Innkjøring forbudt — Rød sirkel med hvit vannrett strek\n• All motorkjøretøytrafikk forbudt — Rød ring, hvit bunn\n• Fartsgrense — Rød ring med tall (30, 40, 50, 60, 70, 80, 90, 100, 110)\n• Forbikjøring forbudt — Rød ring med to biler\n• Parkering forbudt — Blå sirkel med rød kant og kryss\n• Stopp forbudt — Blå sirkel med rød kant og X'
            },
            {
                title: 'Fareskilt',
                type: 'warning',
                content: '• Farlig sving — Trekant med svingete pil\n• Glatt vei — Trekant med bil i skrens\n• Vegarbeid — Trekant med person med spade\n• Barn — Trekant med to barnefigurer\n• Vilt — Trekant med elg/hjort\n• Jernbanekryssing — Trekant med togskinner'
            },
            {
                title: 'Fartsgrenser i Norge',
                type: 'text',
                content: 'Standard fartsgrenser (når ikke annet er skiltet):\n\n• I tettbygd strøk: 50 km/t\n• Utenfor tettbygd strøk: 80 km/t\n• Motorvei: Skiltet (vanligvis 100 eller 110 km/t)\n\nHusk at forbudet gjelder fra skiltet til neste fartsgrenseskilt eller til tettbygd strøk.'
            },
            {
                title: 'Tips for eksamen',
                type: 'tip',
                content: 'Fokuser ekstra på forskjellen mellom \"Parkering forbudt\" (én strek) og \"All stans forbudt\" (X-strek). Mange svarer feil på dette. Husk også at \"Innkjøring forbudt\" bare gjelder i den retningen du ser skiltet.'
            }
        ]
    },
    {
        id: 'sikkerhet',
        title: 'Sikkerhetsutstyr',
        icon: '🦺',
        shortDescription: 'Bilbelte, barneseter, varseltrekant og førstehjelp',
        color: '#7c3aed',
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
                content: 'Elbiler har null lokale utslipp og lavere driftskostnader. Regenerativ bremsing (energigjenvinning) gjør at bilen lader batteriet når du slipper gassen. For å maksimere rekkevidden: bruk varme- og klimaanlegg med måte, og kjør jevnt.'
            }
        ]
    }
]
