import type { TheorySection, TheoryTopic } from './theoryData'

// The short answers are examples for practice, not an official sensor question bank.
const questions = (title: string, rows: [string, string, string][]): TheorySection => ({
    title: title.replace(/: spørsmål.*$/, ''), type: 'text', collapsible: true, open: /spørsmål 1–/.test(title),
    content: rows.map(([q, how, meaning]) => `### ${q.replace(/^\d+\. /, '')}\n**Slik kontrollerer du:** ${how}\n**Dette betyr det:** ${meaning}`).join('\n\n'),
})

export const sikkerhetskontrollTopic: TheoryTopic = {
    id: 'sikkerhetskontroll',
    title: 'Sikkerhetskontroll klasse B – spørsmål og svar til oppkjøringen',
    icon: '🔧', color: 'var(--apple-indigo)',
    shortDescription: 'Øv på sikkerhetskontrollen før oppkjøring. Her lærer du hva du skal sjekke på bilen, hvordan du gjør det, og hva en feil betyr.',
    seoTitle: 'Sikkerhetskontroll klasse B – spørsmål fra sensor med svar',
    seoDescription: '33 øvingsspørsmål sensor kan stille på sikkerhetskontrollen, med svar og fasit: bremser, dekk, lys, væsker og varsellamper. Øv gratis før oppkjøringen.',
    author: 'Teori-test.no-redaksjonen', lastUpdated: '2026-10-11',
    sections: [
        { title: 'Hva spør sensor om på sikkerhetskontrollen?', type: 'info', content: 'Før kjøreturen får du en sikkerhetskontrolloppgave, for eksempel å sjekke bremser, dekk eller lys. Sensor kan også spørre hva en feil kan skyldes, og hvorfor den er farlig.\n\nÅpne temaene nedenfor og øv på bilen du skal kjøre opp med. Spørsmålene er våre øvingseksempler, ikke en offisiell liste fra Statens vegvesen.\n\n**Husk:** Vis kontrollen → si hva som er normalt → forklar hva en feil betyr.\n\nParker trygt før du øver. Lær bilens kontrollmetoder sammen med trafikklæreren; noen kontroller varierer mellom biler.' },
        questions('Bremser og styring: spørsmål 1–5', [
            ["1. Hvordan kontrollerer du bremsepedalen?", "Med bilen i ro og sikret mot rulling: Trykk hardt på bremsepedalen og hold trykket. Pedalen skal gi motstand og ikke fortsette å synke. Bruk bilens kontrollmetode.", "Synker pedalen unormalt, kan det være feil i bremsene. Ikke kjør før feilen er undersøkt."],
            ["2. Hvordan undersøker du om bremsene trekker skjevt?", "Brems kontrollert i lav fart på et flatt, oversiktlig sted sammen med trafikklæreren. Hold i rattet. Bilen skal bremse rett frem.", "Trekker bilen til siden, kan det skyldes bremsene, dekkene eller underlaget. Få årsaken undersøkt."],
            ["3. Hvordan kontrollerer du bremsekraftforsterkeren?", "På bil med vanlig vakuumforsterker: Slå av motoren og trykk på pedalen flere ganger til den blir hard. Hold pedalen inne og start motoren. Pedalen skal synke litt.", "Forsterkeren gjør det lettere å bremse. Elektriske systemer testes annerledes; lær metoden for skolebilen."],
            ["4. Hvordan kontrollerer du parkeringsbremsen?", "Sett på parkeringsbremsen og sjekk at den holder bilen i ro. Gjør prøven sammen med trafikklæreren, med fotbremsen klar.", "Bilen skal ikke rulle. En tent lampe alene viser ikke om bremsen holder."],
            ["5. Hva ser du etter ved kontroll av styringen?", "Med bilen klar til kjøring: Drei forsiktig på rattet og sjekk at hjulene følger bevegelsen. Prøv styringen i lav fart på et trygt sted.", "Styringen skal reagere uten unormal slakk, motstand eller lyd. Få endringer undersøkt."],
        ]),
        questions('Dekk og hjul: spørsmål 6–8', [
            ["6. Hvordan finner og måler du riktig dekktrykk?", "Finn anbefalt trykk på bilens trykketikett eller i instruksjonsboken. Mål på kalde dekk og juster ved behov.", "Feil lufttrykk gir dårligere kjøreegenskaper og økt dekkslitasje."],
            ["7. Hvor stor mønsterdybde må dekkene ha?", "Mål i hovedrillene med en mønsterdybdemåler, flere steder på dekket. Minstekravet for personbil inntil 3 500 kg er 3 mm i vinterperioden og 1,6 mm ellers.", "Vinterperioden er 1. november–første søndag etter andre påskedag, og 16. oktober–30. april i Nordland, Troms og Finnmark. Dekkene må gi godt nok grep uansett dato. Se [vinterdekk og piggdekk](/laeringsressurser/vinterdekk-og-piggdekk/)."],
            ["8. Hvilke skader og slitasjemønstre ser du etter?", "Se etter kutt, buler og ujevn slitasje på dekket. Sjekk også at felgen ikke har synlige skader.", "Buler og alvorlige skader må undersøkes før kjøring. Ujevn slitasje kan blant annet skyldes feil lufttrykk eller hjulstilling."],
        ]),
        questions('Lys og sikt: spørsmål 9–11', [
            ["9. Hvordan kontrollerer du lysene på bilen?", "Slå på lysene og gå rundt bilen. Sjekk at nærlys, fjernlys, baklys og blinklys virker, og at lyktene er rene og hele.", "Lysene skal gi sikt og gjøre bilen synlig. Sjekk at baklysene er på i tunnel; AUTO-stillingen er ikke alltid nok."],
            ["10. Hvordan kontrollerer du bremselysene?", "Trykk på bremsepedalen mens en hjelper ser bak bilen, eller bruk en refleksjon i en vegg eller et vindu. Alle bremselysene skal tennes, også det øverste.", "Bremselysene varsler dem bak deg om at du bremser. Lys som ikke virker, må repareres."],
            ["11. Hvordan kontrollerer du viskere og spyler?", "Bruk spyleren og viskerne. Væsken skal treffe ruten, og viskerne skal fjerne vann og smuss uten store striper.", "Fyll spylervæske ved behov. Dårlig resultat kan også skyldes slitte viskerblader eller tette dyser."],
        ]),
        questions('Væsker og motorrom: spørsmål 12–14', [
            ["12. Hvordan kontrollerer du motoroljen?", "Parker plant og slå av motoren. Trekk opp peilepinnen, tørk av og sett den helt inn igjen. Trekk opp på nytt: Nivået skal være mellom MIN og MAX. Med elektronisk måling leser du av i bilens meny. Følg bilens krav til temperatur og ventetid.", "For lite eller for mye olje kan skade motoren. Etterfyll med riktig olje og mengde; ikke fyll over MAX."],
            ["13. Hvordan kontrollerer du kjølevæsken?", "Med kald motor: Finn kjølevæskebeholderen og se at nivået er mellom MIN og MAX. Les av utenfra. På noen biler skal kontrollen gjøres av verksted.", "For lite kjølevæske kan føre til overoppheting. Få årsaken undersøkt. Åpne aldri lokket når systemet er varmt."],
            ["14. Hvordan kontrollerer du bremsevæsken?", "Finn bremsevæskebeholderen og les av uten å åpne lokket. Nivået skal være mellom MIN og MAX. På noen biler er dette en verkstedoppgave.", "Lavt nivå kan skyldes slitasje eller lekkasje. Er nivået under MIN, må bilen undersøkes før kjøring; ikke bare fyll på."],
        ]),
        { title: 'Utforsk motorrommet – hva skal du faktisk kontrollere?', type: 'calculator', componentId: 'motorrom', content: 'Trykk på et punkt for å se hva du skal sjekke. Velg mellom bil med peilepinne, elektronisk oljemåling og elbil. Delene kan stå andre steder i bilen din.' },
        questions('Varsellamper: spørsmål 15–17', [
            ["15. Hva betyr varsellampen for tokrets bremsesystem?", "Finn den røde bremselampen, ofte (!) i en sirkel. Den kan lyse ved aktiv parkeringsbrems, lav bremsevæske eller feil i bremsesystemet. Les også meldingen i displayet.", "Tokrets betyr to separate bremsekretser. Lyser lampen under kjøring, stans trygt og finn årsaken før du fortsetter."],
            ["16. Hva betyr en ABS-lampe som blir stående på?", "Sjekk om ABS-lampen slukker etter oppstart, og les eventuelle meldinger. ABS hindrer at hjulene låser seg ved bremsing.", "Lyser den fortsatt, kan ABS være ute av drift selv om de vanlige bremsene virker. Følg bilens anvisning. Ved flere bremsevarsler eller dårlig bremsevirkning: stans trygt."],
            ["17. Skal alle lamper slukke etter oppstart?", "Se hvilke lamper som lyser og les meldingene. Lamper for feil skal normalt slukke etter oppstart. Lysindikatorer og parkeringsbrems kan fortsatt lyse.", "Rød oljetrykklampe under kjøring: Stans trygt og slå av motoren. En lampe for aktiv parkeringsbrems betyr derimot at bremsen er på."],
        ]),
        { title: 'Øv på varsellampene', type: 'calculator', componentId: 'dashboard', content: 'Trykk på lampene og lær hva de betyr. Du kan også teste deg selv. Se også [guiden til varsellamper](/laeringsressurser/varsellamper-i-bilen/).' },
        questions('Belter, karosseri og last: spørsmål 18–20', [
            ["18. Hvordan kontrollerer du sikkerhetsbeltet?", "Trekk beltet ut og se etter rifter og vridninger. Fest det i låsen, sjekk at det sitter fast, og løsne det igjen. Beltet skal trekkes inn. Test låsefunksjonen slik bilens instruksjonsbok beskriver.", "Et skadet belte eller en lås som svikter, må repareres. Beltet skal holde deg på plass ved en kollisjon."],
            ["19. Hva er riktig om bilens karosseri?", "Gå rundt bilen. Se etter løse deler, skader og skarpe kanter. Sjekk at dører og panser er ordentlig lukket.", "Løse deler og skarpe kanter kan skade andre. Ved kollisjon skal kupeen beskytte dem inni, mens deformasjonssonene tar opp støt."],
            ["20. Hvordan finner du hvor mye bilen kan lastes?", "Finn tillatt totalvekt og nyttelast i vognkortet. Regn med passasjerer, bagasje og ekstrautstyr. Vei bilen hvis du er usikker.", "Bilen kan være for tung selv om det er plass til mer bagasje. Se [vognkort og vekter](/laeringsressurser/vognkort-vekter/)."],
        ]),
        questions('Dekkmerking og punktering', [
            ["Hvordan sjekker du dimensjon og bæreevne?", "Les tallene på dekksiden og sammenlign med vognkortet. Sjekk dimensjon, belastningsindeks og hastighetsindeks. Bildet viser hva merkingen betyr.", "Dekkene må være godkjent for bilen og tåle vekten og hastigheten de skal brukes til."],
            ["Hva gjør du ved punktering?", "Stans på et trygt sted, ta på refleksvest og varsle andre ved behov. Finn reservehjul eller reparasjonssett, og les bruksanvisningen.", "Reparasjonssett virker ikke på alle skader. Bestill veihjelp hvis du ikke kan ordne punkteringen trygt."],
        ]),
        questions('Flere lyskontroller', [
            ["Hvordan oppdager du feil innstilling av nærlyset?", "Slå på nærlyset mot en vegg og se etter tydelige avvik i lysbildet. Vis eventuell høyderegulering. Verksted kan kontrollere innstillingen nøyaktig.", "For høye lys blender, og for lave lys gir kort sikt. Tung last kan gjøre at lysene peker høyere."],
            ["Hvordan kontrollerer du fjernlys, lyshorn og tåkelys?", "Slå på fjernlys, prøv lyshornet og vis bryterne for tåkelysene bilen har. Sjekk utenfra at lysene virker. Fjernlys har blå indikator.", "Sterke lys kan blende andre. Se [hvordan bilens lys brukes](/laeringsressurser/bilens-lys/)."],
            ["Hva bør du sjekke ved parkeringslys og nødblink?", "Slå på parkeringslys og sjekk lys foran, bak og ved skiltet. Prøv deretter nødblink: Alle blinklysene skal blinke samtidig.", "Lysene gjør bilen synlig ved stans. Nødblink erstatter ikke trygg plassering av bilen."],
        ]),
        questions('Vognkort, tilhenger og sikring av last', [
            ["Hvordan vurderer du om bilen kan trekke en bestemt tilhenger?", "Sjekk vognkortene og førerkortklassen, eller legg dem inn i [Statens vegvesens tilhengerkalkulator](https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/tilhenger/tilhengerkalkulator/). Med klasse B kan hengeren ha tillatt totalvekt inntil 750 kg. Er den tyngre, kan summen av tillatte totalvekter være maks 3 500 kg.", "Bilen må også være godkjent for den aktuelle hengervekten. Førerkortet og bilens vektgrenser må begge være i orden."],
            ["Hvordan kontrollerer du bagasje og taklast?", "Legg tung bagasje lavt og nær bakseteryggen, og fest den. Sjekk at ingen ting ligger løst. Finn tillatt taklast og grensene for takstativ og boks.", "Takstativ og boks teller med i taklasten. Løse ting kan treffe personer ved bråbremsing, og tung taklast gjør bilen mindre stabil."],
        ]),
        questions('Speil, avdugging og ventilasjon', [
            ["Hvordan får du bort dugg fra ruter og speil?", "Slå på avdugging for frontruten, bakrutevarme og eventuell speilvarme. Sjekk at rutene blir klare og speilene er riktig innstilt.", "Vent til du har fri sikt før du kjører. Fjern også snø og is utenfra."],
            ["Hva gjør resirkulering av luften?", "Finn knappen med pil som går rundt inne i en bil. Den lar luften sirkulere i kupeen i stedet for å hente frisk luft utenfra.", "Langvarig resirkulering kan gi dugg. Bruk avdugging hvis rutene dugger."],
        ]),
        questions('Nødutstyr, horn og airbag', [
            ["Hvor er refleksvesten og varseltrekanten?", "Vis hvor vesten ligger; den skal være lett å nå fra førerplassen. Finn varseltrekanten og vis hvordan den settes opp mens bilen står trygt parkert.", "Ved nødstopp skal andre varsles i god tid. Plasser trekanten så trafikken rekker å reagere, uten å utsette deg selv for fare."],
            ["Hvordan kontrollerer du horn og airbagindikator?", "Prøv hornet kort på et egnet sted. Se at airbaglampen følger bilens normale oppstartskontroll og deretter slukker.", "En airbaglampe som fortsetter å varsle feil, må undersøkes. Ikke forveksle den med lampen for avslått passasjerairbag."],
            ["Hva må du sjekke før et bakovervendt barnesete brukes foran?", "Sjekk at bilen og barnesetet tillater plasseringen. Slå av passasjerairbagen etter bilens anvisning og kontroller indikatoren.", "Et bakovervendt barnesete må aldri stå foran en aktiv airbag. Ikke anta at bilen slår den av automatisk."],
        ]),
        questions('Elbil: rekkevidde før turen', [
            ["Hvordan vurderer du om bilen har nok strøm?", "Se på batteriprosent og beregnet rekkevidde. Sammenlign med turens lengde og planlegg lading med god margin.", "Kulde, høy fart og bakker kan øke forbruket. Kilometerne på skjermen er et anslag."],
        ]),
        { title: 'Før oppkjøringen: Øv med riktig bil', type: 'tip', content: 'Be trafikklæreren velge et spørsmål. Vis kontrollen på bilen, si hva som er normalt, og forklar hva en feil betyr. Bytt spørsmål og prøv igjen.\n\nLes videre om [oppkjøring klasse B](/laeringsressurser/oppkjoring/) og [dekk, bremser og styring](/laeringsressurser/dekk-bremser-styring/).' },
    ],
    faq: [
        { question: 'Hvilke spørsmål får jeg på sikkerhetskontrollen?', answer: 'Du kan for eksempel bli bedt om å sjekke lys, bremser eller dekk, og forklare hva en feil kan føre til. Du vet ikke på forhånd hvilken oppgave du får.' },
        { question: 'Må jeg kunne sikkerhetskontroll på elbil?', answer: 'Ja. Du må også kunne sjekke dekk, bremser, lys og sikkerhetsutstyr på elbil. En ren elbil har ingen forbrenningsmotor å kontrollere motoroljen på.' },
        { question: 'Hva om bilen ikke har peilepinne?', answer: 'Mange bensin- og dieselbiler viser oljenivået i bilens meny. Instruksjonsboken forklarer hvordan du måler. På en ren elbil faller denne oljekontrollen bort.' },
        { question: 'Blir jeg automatisk underkjent ved ett feil svar?', answer: 'Sensor vurderer oppkjøringen som en helhet, også sikkerhetskontrollen. Ett svar alene gir derfor ikke grunnlag for å si om du består.' },
    ],
    sources: { title: 'Kilder og avgrensning', type: 'text', content: `Bygger på Statens vegvesen. Bilene er ulike, så bruk instruksjonsboken for bilen du øver på. Oppgavene her erstatter ikke opplæring med trafikklærer.

- [Statens vegvesen: Førerkort klasse B og praktisk prøve](https://www.vegvesen.no/forerkort/ta-forerkort/veien-til-forerkortet/personbil-b/)
- [Statens vegvesen: Dekk og kjetting](https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/dekk-og-kjetting/)` },
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
                question: 'Hvilket svar viser minst forståelse av sikkerhetskontrollen?',
                options: ['Å forklare hva du sjekker og hvorfor', 'Å bare peke uten å forklare hvorfor kontrollen er viktig', 'Å svare rolig og praktisk', 'Å koble kontrollen til trafikksikkerhet'],
                correct: 'Å bare peke uten å forklare hvorfor kontrollen er viktig',
                explanation: 'Et godt svar viser både hva du kontrollerer og hvorfor det har betydning for sikkerheten.'
            }
        ]
}

// Put the question bank before the interactive guides; merge related additions.
const intro = sikkerhetskontrollTopic.sections[0]
intro.image = {
    src: '/images/sikkerhetskontroll/elev-kontrollerer-dekk.webp',
    width: 1200,
    height: 800,
    alt: 'Elev og trafikklærer undersøker et forhjul på en mørkegrå bil.',
    caption: 'Øv på å vise kontrollen og forklare hva man skal sjekke. Illustrasjonsbilde.',
}
const rest = sikkerhetskontrollTopic.sections.slice(1)
const questionGroups: TheorySection[] = []
const aliases: Record<string, string> = {
    'Dekk og hjul': 'Dekk, felger og punktering',
    'Dekkmerking og punktering': 'Dekk, felger og punktering',
    'Lys og sikt': 'Lys, lykter og viskere',
    'Flere lyskontroller': 'Lys, lykter og viskere',
}
for (const section of rest.filter(s => s.collapsible)) {
    const title = aliases[section.title] || section.title
    const existing = questionGroups.find(s => s.title === title)
    if (existing) existing.content += '\n\n' + section.content
    else questionGroups.push({ ...section, title })
}
const tireGroup = questionGroups.find(section => section.title === 'Dekk, felger og punktering')
if (tireGroup) tireGroup.image = {
    src: '/images/sikkerhetskontroll/dekkmerking-forklart.webp',
    width: 1200,
    height: 820,
    alt: 'Dekkmerking 205/55 R17 95T: bredde 205 mm, profil 55 prosent, radialdekk og 17-tommers felg, lastindeks 95 (690 kg), hastighetsindeks T (190 km/t). Datokode 2324 viser uke 23 i 2024. M+S og fjell med snøfnugg viser vintermerking.',
}
const warningGroup = questionGroups.find(section => section.title === 'Varsellamper')
if (warningGroup) warningGroup.image = {
    src: '/images/sikkerhetskontroll/bremsevarsler-forklart.webp',
    width: 1200,
    height: 560,
    alt: 'Rød bremselampe med utropstegn, rød P for parkeringsbrems og gul ABS-lampe, med forklaring av symbolene.',
    caption: 'Ved ABS-varsel: Følg bilens instruksjonsbok. Stans trygt hvis bremsevirkningen endres eller den røde bremselampen også lyser. Rød P kan bety at parkeringsbremsen er på.',
}
const emergencyGroup = questionGroups.find(section => section.title === 'Nødutstyr, horn og airbag')
if (emergencyGroup) emergencyGroup.image = {
    src: '/images/sikkerhetskontroll/nodstopp-vest-og-varseltrekant.webp',
    width: 1200,
    height: 660,
    alt: 'Refleksvesten ligger i dørlomma ved førersetet, ikke i bagasjerommet. Ved stans: slå på nødblinket, sett ut varseltrekanten i god avstand bak bilen og vent utenfor veibanen.',
    caption: 'Ha vesten der du når den fra førersetet. Sett trekanten lenger bak ved høy fart, i sving eller før en bakketopp.',
}
sikkerhetskontrollTopic.sections = [intro, ...questionGroups, ...rest.filter(s => !s.collapsible)]
