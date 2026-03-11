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
    seoTitle?: string
    seoDescription?: string
}

export const theoryTopics: TheoryTopic[] = [
    {
        id: 'bremselengde',
        title: 'Bremselengde',
        icon: '🛑',
        shortDescription: 'Lær å beregne bremselengde, reaksjonslengde og stopplengde',
        color: '#dc2626',
        seoTitle: 'Bremselengde og stopplengde – formel og kalkulator | Teori-test.no',
        seoDescription: 'Lær å beregne bremselengde, reaksjonslengde og stopplengde til teoriprøven. Interaktiv kalkulator for 30–120 km/t.',
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
        seoTitle: 'Reaksjonstid og stopplengde – beregning | Teori-test.no',
        seoDescription: 'Forstå hvordan reaksjonstiden påvirker stopplengden. Lær formelen for reaksjonslengde til teoriprøven på tørr og glatt vei.',
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
                content: '• Tretthet — Kan doble eller tredoble reaksjonstiden\n• Alkohol — Selv små mengder forsinker reaksjonene\n• Mobilbruk — Tar oppmerksomheten bort fra veien\n• Uoppmerksomhet — Snakking, radio, mat\n• Medisiner — Noen medisiner gir tretthet\n• Mørke — Vanskeligere å oppdage farer\n• Alder — Eldre sjåfører reagerer noe langsommere'
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
        seoTitle: 'Vikeplikt – regler for kryss og rundkjøring | Teori-test.no',
        seoDescription: 'Lær hvem som skal vike med høyreregel, vikepliktskilt og forkjørsvei. Viktig vikeplikt-teori for førerkort klasse B.',
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
                        description: 'Trekant med spissen ned og rød kant. Du skal vike for all trafikk på kryssende vei. Senk farten og vær klar til å stoppe. Du trenger ikke stoppe helt hvis veien er klar.',
                        imageUrl: '/signs/vikeplikt.svg'
                    },
                    {
                        name: 'Stoppskilt',
                        description: 'Rødt åttekantskilt med hvit tekst «STOPP». Du MÅ stoppe helt opp ved stopplinjen eller ved krysset før du kjører videre — selv om veien virker klar. Se til begge sider før du fortsetter.',
                        imageUrl: '/signs/stopp.svg'
                    },
                    {
                        name: 'Forkjørsvei',
                        description: 'Gul rute på hvit bakgrunn med svart kant. Betyr at du har forkjørsrett — kryssende trafikk skal vike for deg. Skiltet gjelder til det blir opphevet av «slutt på forkjørsvei»-skilt.',
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
        seoTitle: 'Trafikkskilt – oversikt for teoriprøven | Teori-test.no',
        seoDescription: 'De viktigste trafikkskiltene du må kjenne til for klasse B: fareskilt, forbudsskilt og vikepliktskilt.',
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
                content: 'Fokuser ekstra på forskjellen mellom "Parkering forbudt" (én strek) og "All stans forbudt" (X-strek). Mange svarer feil på dette. Husk også at "Innkjøring forbudt" bare gjelder i den retningen du ser skiltet.'
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
                content: 'Elbiler har null lokale utslipp og lavere driftskostnader. Regenerativ bremsing (energigjenvinning) gjør at bilen lader batteriet når du slipper gassen. For å maksimere rekkevidden: bruk varme- og klimaanlegg med måte, og kjør jevnt.'
            }
        ]
    }
]

export const theoryArticles: TheoryTopic[] = [
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
                content: 'Husk å forhåndsbestille time hos Statens vegvesen og ta med gyldig legitimasjon.\n• Krav: Prøven har 45 spørsmål. Du må ha minst 38 riktige (maks 7 feil) for å bestå.\n• Tid: Du har 90 minutter. Det er mer enn nok tid for de aller fleste, så unngå å stresse.\n• Før prøven: Møt opp uthvilt og ha spist på forhånd. En trøtt hjerne gjør lettere slurvefeil.'
            },
            {
                title: '4. Øv målrettet og effektivt',
                type: 'tip',
                content: 'Den beste treningen er å simulere den ekte prøvesituasjonen. På Teori-test.no kan du øve gratis med verktøy som forbereder deg nøyaktig på det som møter deg:\n• [Full prøve-modus](/quiz?mode=eksamen): 45 spørsmål på 90 minutter – akkurat som på trafikkstasjonen.\n• [Ekspresstest](/quiz?mode=hurtig): Raske økter som passer perfekt på mobilen når du har noen minutter ledig.\n• [Fokus-modus](/quiz?mode=fokus): Et smart verktøy som husker hva du svarer feil på, slik at du kun trenger å terpe på svakhetene dine.'
            }
        ]
    },
    {
        id: 'ovingskjoring',
        title: 'Guide til øvingskjøring',
        icon: '🚗',
        shortDescription: 'Alt du trenger å vite om krav, ledsager og progresjon',
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
                content: 'Øvingskjøring gir deg den praktiske erfaringen, men god trafikal forståelse starter med teorien. Her på Teori-test.no kan du øve på vikeplikt, skiltgjenkjenning og trafikkregler mellom kjøreøktene — slik at du er best mulig forberedt til både teori- og fagprøven. 🎯'
            }
        ]
    },
    {
        id: 'promille',
        title: 'Alkohol og promille i trafikken',
        icon: '🚫',
        shortDescription: 'Promillegrenser, straff og hvordan alkohol påvirker kjøreevnen',
        color: '#3b82f6', // AG Blue
        seoTitle: 'Alkohol og promille i trafikken – regler og konsekvenser | Teori-test.no',
        seoDescription: 'Lær alt om promillegrenser, straff og hvordan rus påvirker kjøreevnen din. Avgjørende for teoriprøven.',
        sections: [
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
                content: 'Promille og ruspåvirkning er et av de temaene det oftest stilles spørsmål om på den ekte teoriprøven. Her på Teori-test.no kan du øve på akkurat disse spørsmålene i Ekspresstest eller Full prøve — helt gratis. Jo mer du øver, desto tryggere blir du på eksamensdagen. 🎯'
            }
        ]
    }
]
