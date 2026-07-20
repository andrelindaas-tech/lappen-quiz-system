// Spørsmålssider («/sporsmal/») — kuraterte enkeltspørsmål med fasit og forklaring.
// Hver side sikter på ett dokumentert søk (GSC) som ingen artikkel eier fra før.
// Regel: ett søk = én eier. Ikke dupliser spørsmål som pilaren/artikkel-FAQ alt dekker.

export interface QuestionOption {
    text: string
    correct?: boolean
}

export interface QuestionPageData {
    slug: string
    question: string // brukes som tittel og H1
    answerShort: string // direkte svar øverst (featured snippet-format)
    options: QuestionOption[]
    explanation: string // avsnitt skilles med \n\n, lenker som [tekst](/sti)
    topic: string // gruppering på hub-siden
    articleId?: string // relatert artikkel i /laeringsressurser
    articleLabel?: string
    quizPath?: string
    quizLabel?: string
    sources?: { name: string; url: string }[]
}

export const questionPages: QuestionPageData[] = [
    // ===== Fart, reaksjon og stopplengde =====
    {
        slug: 'hvor-langt-kjorer-du-per-sekund',
        question: 'Hvor langt beveger du deg per sekund?',
        answerShort: 'Del farten på 3,6. I 60 km/t kjører du 16,7 meter hvert sekund, i 80 km/t hele 22,2 meter.',
        options: [
            { text: 'I 50 km/t: cirka 5 meter per sekund' },
            { text: 'I 50 km/t: cirka 13,9 meter per sekund', correct: true },
            { text: 'I 50 km/t: cirka 25 meter per sekund' },
            { text: 'I 50 km/t: cirka 50 meter per sekund' },
        ],
        explanation: 'Formelen er enkel: **fart i km/t ÷ 3,6 = meter per sekund**.\n\nHer er tallene for de vanligste fartsgrensene:\n- 30 km/t → 8,3 m/s\n- 40 km/t → 11,1 m/s\n- 50 km/t → 13,9 m/s\n- 60 km/t → 16,7 m/s\n- 70 km/t → 19,4 m/s\n- 80 km/t → 22,2 m/s\n- 90 km/t → 25,0 m/s\n- 100 km/t → 27,8 m/s\n\nDette er grunnen til at reaksjonstiden din er så viktig: bruker du ett sekund på å reagere i 80 km/t, har bilen allerede beveget seg 22 meter — lengre enn et bolighus — før du i det hele tatt rører bremsen.\n\nVil du forstå hele regnestykket? [Les guiden om reaksjonstid](/laeringsressurser/reaksjonstid) og [bremselengde](/laeringsressurser/bremselengde).',
        topic: 'Fart, reaksjon og stopplengde',
        articleId: 'reaksjonstid',
        articleLabel: 'Reaksjonstid – komplett guide',
        quizPath: '/quiz?mode=hurtig',
        quizLabel: 'Øv med en ekspresstest',
    },
    {
        slug: 'reaksjonslengde-ved-30-km-t',
        question: 'Du kjører i 30 km/t og har 1 sekunds reaksjonstid. Hva blir reaksjonslengden?',
        answerShort: 'Cirka 8,3 meter. På ett sekund beveger du deg farten delt på 3,6 — altså 30 ÷ 3,6 = 8,3 meter.',
        options: [
            { text: 'Cirka 3 meter' },
            { text: 'Cirka 8,3 meter', correct: true },
            { text: 'Cirka 15 meter' },
            { text: 'Cirka 30 meter' },
        ],
        explanation: 'Reaksjonslengden er strekningen bilen beveger seg fra du oppdager faren til du faktisk begynner å bremse. Med 1 sekunds reaksjonstid er reaksjonslengden rett og slett så langt du kjører på ett sekund: fart ÷ 3,6.\n\nTil overslag på prøven kan du også bruke huskeregelen **(fart ÷ 10) × 3**, som gir 9 meter her. Den runder av 3,6 til «litt over 3» og gir alltid et litt høyere tall — trygt å bruke når alternativene ligger langt fra hverandre, men står både 8,3 og 9 i alternativene, er det eksakte svaret 8,3 meter.\n\nDobles reaksjonstiden til 2 sekunder, dobles reaksjonslengden — [les mer om reaksjonstid her](/laeringsressurser/reaksjonstid).',
        topic: 'Fart, reaksjon og stopplengde',
        articleId: 'reaksjonstid',
        articleLabel: 'Reaksjonstid – komplett guide',
        quizPath: '/quiz?mode=hurtig',
        quizLabel: 'Øv med en ekspresstest',
    },
    {
        slug: 'reaksjonstiden-oker-fra-1-til-2-sekunder',
        question: 'Hva skjer med reaksjonslengden dersom reaksjonstiden øker fra 1 til 2 sekunder?',
        answerShort: 'Reaksjonslengden dobles. Den er direkte proporsjonal med reaksjonstiden: dobbelt tid = dobbelt strekning.',
        options: [
            { text: 'Den er uendret' },
            { text: 'Den dobles', correct: true },
            { text: 'Den firedobles' },
            { text: 'Den halveres' },
        ],
        explanation: 'Reaksjonslengde = fart × reaksjonstid. Kjører du i 60 km/t (16,7 m/s) med 1 sekunds reaksjonstid, er reaksjonslengden 16,7 meter. Med 2 sekunder blir den 33,4 meter — nøyaktig det dobbelte.\n\n**Den klassiske fellen:** Mange svarer «firedobles» fordi de blander med bremselengden. Det er ved dobbel *fart* at bremselengden firedobles — reaksjonslengden følger tiden lineært.\n\nTrøtthet, mobilbruk og rus er typiske grunner til at reaksjonstiden øker. [Les guiden om reaksjonstid](/laeringsressurser/reaksjonstid).',
        topic: 'Fart, reaksjon og stopplengde',
        articleId: 'reaksjonstid',
        articleLabel: 'Reaksjonstid – komplett guide',
        quizPath: '/quiz?mode=hurtig',
        quizLabel: 'Øv med en ekspresstest',
    },
    {
        slug: 'stopplengde-60-km-t-18-meter-bremselengde',
        question: 'Du bremser i 60 km/t med 1 sekunds reaksjonstid og 18 meter bremselengde. Hva blir stopplengden?',
        answerShort: 'Cirka 34,7 meter. Reaksjonslengden i 60 km/t er 16,7 meter (60 ÷ 3,6), pluss bremselengden på 18 meter.',
        options: [
            { text: 'Cirka 18 meter' },
            { text: 'Cirka 28 meter' },
            { text: 'Cirka 34,7 meter', correct: true },
            { text: 'Cirka 52 meter' },
        ],
        explanation: 'Stopplengde = reaksjonslengde + bremselengde. Oppgaven gir deg bremselengden (18 m), så jobben er å finne reaksjonslengden: 60 ÷ 3,6 = 16,7 meter. Til sammen: 16,7 + 18 = 34,7 meter.\n\nMed huskeregelen (6 × 3 = 18 m reaksjon) får du 36 meter — nært nok til å velge riktig alternativ når de ligger spredt.\n\nVil du gjøre dette på autopilot? [Lær «stryk nullen»-metoden i bremselengde-guiden](/laeringsressurser/bremselengde) eller [tren i stopplengde-spillet](/laeringsspill/stopplengde).',
        topic: 'Fart, reaksjon og stopplengde',
        articleId: 'bremselengde',
        articleLabel: 'Bremselengde og stopplengde – slik regner du ut',
        quizPath: '/laeringsspill/stopplengde',
        quizLabel: 'Tren i stopplengde-spillet',
    },
    {
        slug: 'hvor-fort-22-2-meter-i-sekundet',
        question: 'Hvor fort kjører du hvis bilen beveger seg 22,2 meter i sekundet?',
        answerShort: '80 km/t. Gang meter per sekund med 3,6 for å få km/t: 22,2 × 3,6 = 80.',
        options: [
            { text: '60 km/t' },
            { text: '70 km/t' },
            { text: '80 km/t', correct: true },
            { text: '90 km/t' },
        ],
        explanation: 'Dette er den samme omregningen som ellers, bare motsatt vei: **m/s × 3,6 = km/t**.\n\nTallet 22,2 går igjen på teoriprøven fordi det tilsvarer 80 km/t — en vanlig fartsgrense på landevei. Kjenner du igjen 8,3 (30 km/t), 13,9 (50 km/t), 16,7 (60 km/t) og 22,2 (80 km/t), sparer du regnetid på prøven.\n\n[Se hele tabellen for meter per sekund](/sporsmal/hvor-langt-kjorer-du-per-sekund) eller [les reaksjonstid-guiden](/laeringsressurser/reaksjonstid).',
        topic: 'Fart, reaksjon og stopplengde',
        articleId: 'reaksjonstid',
        articleLabel: 'Reaksjonstid – komplett guide',
        quizPath: '/quiz?mode=hurtig',
        quizLabel: 'Øv med en ekspresstest',
    },
    {
        slug: 'hva-er-tresekundersregelen',
        question: 'Hva er tresekundersregelen?',
        answerShort: 'En enkel metode for trygg avstand til bilen foran: Når den passerer et fast punkt, skal det gå minst tre sekunder før du passerer samme punkt.',
        options: [
            { text: 'Du skal vente tre sekunder før du kjører på grønt lys' },
            { text: 'Det skal gå minst tre sekunder fra bilen foran passerer et punkt til du passerer samme punkt', correct: true },
            { text: 'Du skal blinke i minst tre sekunder før feltskifte' },
            { text: 'Maks tre sekunders stans er lov der det er stans forbudt' },
        ],
        explanation: 'Slik bruker du regelen i praksis: Velg et fast punkt ved veien — et skilt, en stolpe eller en veimerking. Når bilen foran passerer punktet, teller du rolig «en-tusen-og-en, en-tusen-og-to, en-tusen-og-tre». Passerer du punktet før du er ferdig, ligger du for nært.\n\nHvorfor tre sekunder? Det gir rom for både reaksjonstiden din (typisk ca. 1 sekund) og forskjeller i bremselengde. På glatt føre, i mørke eller med tung last bør avstanden økes godt utover tre sekunder.\n\n[Les mer om reaksjonstid](/laeringsressurser/reaksjonstid) og [bremselengde](/laeringsressurser/bremselengde).',
        topic: 'Fart, reaksjon og stopplengde',
        articleId: 'reaksjonstid',
        articleLabel: 'Reaksjonstid – komplett guide',
        quizPath: '/quiz?mode=hurtig',
        quizLabel: 'Øv med en ekspresstest',
    },

    // ===== Trafikklys og signaler =====
    {
        slug: 'er-det-lov-a-kjore-pa-gult-lys',
        question: 'Er det lov å kjøre på gult lys?',
        answerShort: 'Som hovedregel nei. Gult lys betyr stopp — du skal stanse hvis du kan gjøre det uten fare. Bare når du er kommet så nær at stans skaper fare, kan du fortsette.',
        options: [
            { text: 'Ja, gult betyr «skynd deg over»' },
            { text: 'Nei, gult betyr stopp — du fortsetter bare hvis stans er farlig', correct: true },
            { text: 'Ja, hvis det ikke er fotgjengere i nærheten' },
            { text: 'Bare hvis du blinker samtidig' },
        ],
        explanation: 'Mange tror gult lys er en «gråsone» der det er fritt frem. Det stemmer ikke: gult lys varsler at rødt kommer, og hovedregelen er at du skal stanse.\n\nUnntaket gjelder når du er så nær krysset at stans vil være farlig — for eksempel hvis du må bråbremse med en bil tett bak deg, eller du allerede er inne i krysset. Da er det tryggere å fortsette.\n\nPå teoriprøven formuleres dette ofte som: «Du rekker å stanse trygt før krysset — hva gjør du?» Svaret er alltid å stanse.\n\n[Les hele guiden om trafikklys og signaler](/laeringsressurser/trafikklys-signaler).',
        topic: 'Trafikklys og signaler',
        articleId: 'trafikklys-signaler',
        articleLabel: 'Trafikklys og signaler – komplett guide',
        quizPath: '/quiz?mode=hurtig',
        quizLabel: 'Øv med en ekspresstest',
    },
    {
        slug: 'hva-betyr-blinkende-gult-lys',
        question: 'Hva betyr blinkende gult lys?',
        answerShort: 'At signalanlegget er ute av drift eller varsler om fare. Blinkende gult gir ingen prioritet — følg skilt og vikepliktregler, og vær ekstra oppmerksom.',
        options: [
            { text: 'Du har forkjørsrett gjennom krysset' },
            { text: 'Anlegget er ute av drift — følg skilt og vikepliktregler', correct: true },
            { text: 'Lyset skifter snart til grønt' },
            { text: 'Kun kollektivtrafikk kan kjøre' },
        ],
        explanation: 'Når trafikklyset blinker gult, er lysreguleringen i praksis «koblet ut». Da rykker du ett nivå ned i [myndighetspyramiden](/laeringsressurser/myndighetspyramiden): skiltene og vegoppmerkingen gjelder, og finnes ikke de, gjelder høyreregelen.\n\nTypisk teorifelle: Blinkende gult lys sammen med et vikepliktskilt. Da har du vikeplikt — skiltet gjelder for fullt når lyset er ute av spill.\n\nBlinkende gult brukes også som ren fareblinking, for eksempel ved gangfelt — sett ned farten og vær klar til å stanse.\n\n[Les guiden om trafikklys og signaler](/laeringsressurser/trafikklys-signaler).',
        topic: 'Trafikklys og signaler',
        articleId: 'myndighetspyramiden',
        articleLabel: 'Myndighetspyramiden forklart',
        quizPath: '/quiz?mode=hurtig',
        quizLabel: 'Øv med en ekspresstest',
    },

    // ===== Parkering =====
    {
        slug: 'hvor-langt-fra-gangfelt-kan-du-parkere',
        question: 'Hvor langt fra et gangfelt kan du parkere?',
        answerShort: 'Du må stanse/parkere minst 5 meter foran gangfeltet. Avstanden regnes i kjøreretningen — rett etter gangfeltet gjelder ikke 5-metersregelen.',
        options: [
            { text: 'Minst 1 meter foran' },
            { text: 'Minst 5 meter foran', correct: true },
            { text: 'Minst 10 meter på begge sider' },
            { text: 'Parkering ved gangfelt er alltid forbudt uansett avstand' },
        ],
        explanation: 'Grunnen til regelen er sikt: en bil parkert rett foran gangfeltet skjuler fotgjengere — særlig barn — for trafikken som nærmer seg. Fem meter gir førere en sjanse til å oppdage den som skal krysse.\n\nHusk at regelen gjelder *foran* gangfeltet, altså på den siden trafikken kommer fra i din kjøreretning. Etter gangfeltet kan du i utgangspunktet parkere (så lenge ingen andre forbud gjelder).\n\nDen samme 5-metersregelen gjelder også foran veikryss. [Les hele guiden om stans og parkering](/laeringsressurser/stans-og-parkering) — dette er en klassisk teorifelle.',
        topic: 'Parkering og stans',
        articleId: 'stans-og-parkering',
        articleLabel: 'Stans og parkering – 5-metersregelen',
        quizPath: '/quiz?mode=hurtig',
        quizLabel: 'Øv med en ekspresstest',
        sources: [{ name: 'Trafikkreglene § 17 (Lovdata)', url: 'https://lovdata.no/dokument/SF/forskrift/1986-03-21-747' }],
    },

    // ===== Forbikjøring =====
    {
        slug: 'er-det-lov-a-kjore-forbi-pa-hoyre-side',
        question: 'Er det lov å kjøre forbi på høyre side?',
        answerShort: 'Hovedregelen er forbikjøring til venstre. Passering på høyre er bare lov i bestemte tilfeller — blant annet når kjøretøyet foran skal svinge til venstre, eller i saktegående kø i flere felt.',
        options: [
            { text: 'Ja, alltid når det er flere felt' },
            { text: 'Nei, aldri under noen omstendighet' },
            { text: 'Bare når kjøretøyet foran skal svinge til venstre, eller i kø i flere felt', correct: true },
            { text: 'Bare på motorvei' },
        ],
        explanation: 'De viktigste unntakene fra venstreregelen:\n- Kjøretøyet foran har plassert seg for å svinge til venstre og gitt tegn — da passerer du på høyre.\n- I tett, saktegående kø i flere felt regnes det ikke som forbikjøring at feltene beveger seg ulikt.\n- Der feltene har ulike kjøremål (for eksempel eget felt for høyresving).\n\nPå motorvei er «snik-forbikjøring» på høyre i normal fart ikke lov — du skal tilbake til høyre felt etter forbikjøring og passere andre på venstre side.\n\n[Les hele guiden om forbikjøring](/laeringsressurser/forbikjoring) — med reglene for når forbikjøring er helt forbudt.',
        topic: 'Forbikjøring og plassering',
        articleId: 'forbikjoring',
        articleLabel: 'Forbikjøring – regler, forbud og feller',
        quizPath: '/quiz?mode=hurtig',
        quizLabel: 'Øv med en ekspresstest',
    },

    // ===== Førerkort og prikker =====
    {
        slug: 'hvor-fort-ma-du-kjore-for-a-miste-lappen',
        question: 'Hvor fort må du kjøre for å miste lappen?',
        answerShort: 'Normalt mister du førerkortet ved 26 km/t over fartsgrensen der grensen er 60 km/t eller lavere, og ved 36 km/t over der grensen er 70 eller høyere. I en 60-sone ryker lappen altså rundt 86 km/t.',
        options: [
            { text: 'I 60-sone: ved cirka 86 km/t', correct: true },
            { text: 'I 60-sone: ved cirka 70 km/t' },
            { text: 'I 60-sone: ved cirka 100 km/t' },
            { text: 'Du kan ikke miste lappen for fart alene' },
        ],
        explanation: 'Grensene følger tapsforskriften og gjelder ved normale forhold:\n- Fartsgrense 60 eller lavere: tap av førerett normalt fra 26 km/t over (30-sone: ca. 56 km/t, 50-sone: ca. 76 km/t)\n- Fartsgrense 70 eller høyere: tap normalt fra 36 km/t over (80-sone: ca. 116 km/t)\n\nTapsperioden øker med hastigheten — fra noen måneder til flere år ved ekstreme hastigheter. Og husk: lavere overtredelser gir [prikker](/laeringsressurser/prikker-pa-forerkortet) og [bøter](/laeringsressurser/boter-og-forelegg), som også kan koste deg lappen når de hoper seg opp.\n\n[Les mer om førerkortbeslag](/laeringsressurser/forerkortbeslag).',
        topic: 'Førerkort og prikker',
        articleId: 'forerkortbeslag',
        articleLabel: 'Førerkortbeslag – regler og tapsperioder',
        quizPath: '/quiz?mode=hurtig',
        quizLabel: 'Øv med en ekspresstest',
        sources: [{ name: 'Tapsforskriften (Lovdata)', url: 'https://lovdata.no/dokument/SF/forskrift/2003-12-19-1660' }],
    },
    {
        slug: 'kan-du-miste-lappen-i-proveperioden',
        question: 'Kan du miste lappen i prøveperioden?',
        answerShort: 'Ja. De to første årene med førerkort klasse B er prøveperiode, og da teller hver prikk dobbelt. Når du når 8 prikker i løpet av 3 år, mister du føreretten i 6 måneder.',
        options: [
            { text: 'Nei, i prøveperioden får du bare advarsler' },
            { text: 'Ja — prikkene dobles, så to overtredelser kan være nok', correct: true },
            { text: 'Bare hvis du kjører i ruspåvirket tilstand' },
            { text: 'Prøveperioden gjelder bare øvelseskjøring' },
        ],
        explanation: 'En overtredelse som normalt gir 3 prikker, gir 6 prikker i prøveperioden. To slike — for eksempel to fartsovertredelser — kan dermed være nok til å passere grensen på 8 prikker og miste lappen i et halvt år.\n\nFår du 4 prikker, mottar du et varselbrev. Og mister du føreretten i prøveperioden, må du normalt ta full ny førerprøve (både teori og oppkjøring) for å få den tilbake.\n\nAlvorlige overtredelser — som ruskjøring eller svært høy fart — gir førerkortbeslag direkte, uavhengig av prikksystemet.\n\n[Les hele guiden om prikker](/laeringsressurser/prikker-pa-forerkortet) og [førerkortbeslag](/laeringsressurser/forerkortbeslag).',
        topic: 'Førerkort og prikker',
        articleId: 'prikker-pa-forerkortet',
        articleLabel: 'Prikker på førerkortet – slik fungerer det',
        quizPath: '/quiz?mode=hurtig',
        quizLabel: 'Øv med en ekspresstest',
    },

    // ===== Ulykker og vilt =====
    {
        slug: 'hva-gjor-du-hvis-du-kjorer-pa-et-dyr',
        question: 'Hva gjør du hvis du kjører på et dyr?',
        answerShort: 'Sikre skadestedet, skaff oversikt, og ring politiet på 02800 ved påkjørsel av større dyr som elg, hjort eller rådyr. Merk stedet der dyret forsvant, og ikke forfølg skadet vilt selv.',
        options: [
            { text: 'Kjøre videre hvis dyret forsvinner inn i skogen' },
            { text: 'Sikre stedet, ringe politiet på 02800 og merke hvor dyret forsvant', correct: true },
            { text: 'Forsøke å avlive dyret selv så det ikke lider' },
            { text: 'Bare ringe hvis bilen fikk skader' },
        ],
        explanation: 'Du har hjelpe- og varslingsplikt etter en viltpåkjørsel — også når dyret stikker av. Et påkjørt dyr kan løpe langt med alvorlige skader, og kommunens ettersøksjakt trenger å vite hvor det forsvant.\n\nGjør dette:\n1. Sikre skadestedet: nødblink, refleksvest, varseltrekant ved behov.\n2. Ring politiet på 02800 (eller 112 ved personskade).\n3. Merk stedet der dyret forsvant — bruk viltbånd hvis du har, eller noe synlig.\n4. Ikke følg etter skadet vilt, og ikke forsøk å avlive det selv.\n\nÅ la være å melde fra er straffbart. Påkjørsel av hund og husdyr skal også meldes.\n\n[Les hele guiden om trafikkuhell og førstehjelp](/laeringsressurser/trafikkuhell-forstehjelp) og [pliktene dine ved ulykke](/laeringsressurser/plikter-ved-ulykke).',
        topic: 'Ulykker og plikter',
        articleId: 'trafikkuhell-forstehjelp',
        articleLabel: 'Trafikkuhell og førstehjelp',
        quizPath: '/quiz?mode=hurtig',
        quizLabel: 'Øv med en ekspresstest',
    },

    // ===== Dekk og føre =====
    {
        slug: 'nar-er-det-lov-a-bruke-piggdekk',
        question: 'Når er det lov å bruke piggdekk?',
        answerShort: 'Fra 1. november til første søndag etter 2. påskedag. I Nordland, Troms og Finnmark fra 16. oktober til 30. april. Er det vinterføre, er piggdekk lov også utenom periodene.',
        options: [
            { text: 'Hele året, uansett føre' },
            { text: 'Fra 1. november til første søndag etter 2. påskedag (lenger i nord)', correct: true },
            { text: 'Kun fra 1. desember til 1. mars' },
            { text: 'Bare når kommunen har varslet piggdekksesong' },
        ],
        explanation: 'Piggdekkperioden er styrt av datoer, men med en viktig sikkerhetsventil: Er det vinterføre — snø eller is på veien — kan du bruke piggdekk uansett dato. Poenget er at du aldri skal tvinges til å kjøre på sommerdekk på vinterføre.\n\nMerk også:\n- Bruker du piggdekk, skal du ha det på alle fire hjul.\n- Enkelte byer (blant annet Oslo, Bergen, Stavanger og Trondheim) krever piggdekkgebyr.\n- Piggfrie vinterdekk kan brukes hele året, men mønsterdybdekravet om vinteren er minst 3 mm.\n\n[Les mer om dekk, bremser og styring](/laeringsressurser/dekk-bremser-styring) og [kjøring på glatt føre](/laeringsressurser/glatt-fore).',
        topic: 'Dekk og føre',
        articleId: 'dekk-bremser-styring',
        articleLabel: 'Dekk, bremser og styring',
        quizPath: '/quiz?mode=hurtig',
        quizLabel: 'Øv med en ekspresstest',
    },

    // ===== Veimerking og linjer =====
    {
        slug: 'bot-for-a-kjore-pa-eller-over-sperrelinje',
        question: 'Du kjører på eller over gul eller hvit sperrelinje. Hvor stor blir boten?',
        answerShort: 'Boten (forenklet forelegg) er 6 550 kroner etter satsene som gjelder fra 15. februar 2026.',
        options: [
            { text: '3 350 kroner' },
            { text: '6 350 kroner' },
            { text: '6 550 kroner', correct: true },
            { text: '10 750 kroner' },
        ],
        explanation: 'Å kjøre **på eller over gul eller hvit sperrelinje** kan avgjøres med forenklet forelegg — en standardisert bot politiet kan skrive ut på stedet. Satsen er 6 550 kroner fra 15. februar 2026. Samme sats gjelder kjøring i sperreområde, på fortau og i sykkelfelt.\n\nSatsene justeres jevnlig (de økte senest i februar 2026), så på prøven er det viktigere at du kan **rangeringen** enn kronebeløpet utenat: sperrelinje ligger i mellomsjiktet — over lysfeil (4 100 kr), under kollektivfelt (8 650 kr) og langt under rødt lys, vikepliktsbrudd og ulovlig forbikjøring (10 750 kr).\n\nSkjer kryssingen som ledd i en ulovlig forbikjøring — for eksempel forbi bakketopp eller i kryss — kan forholdet i stedet straffes som ulovlig forbikjøring med høyere bot og prikker.\n\nHusk også hovedregelen: [hvit sperrelinje](/laeringsressurser/veimerking) skal ikke krysses, hverken for feltskifte eller forbikjøring.',
        topic: 'Veimerking og linjer',
        articleId: 'veimerking',
        articleLabel: 'Veimerking – komplett guide',
        quizPath: '/quiz/veimerking',
        quizLabel: 'Ta veimerking-quizen',
        sources: [
            { name: 'Forskrift om forenklet forelegg i vegtrafikksaker (Lovdata)', url: 'https://lovdata.no/dokument/SF/forskrift/1990-06-29-492' },
        ],
    },
    {
        slug: 'gir-kryssing-av-sperrelinje-prikker',
        question: 'Får du prikker på førerkortet for å krysse en sperrelinje?',
        answerShort: 'Nei. Å kjøre på eller over en sperrelinje gir bot, men ikke prikker. Det er kjøring i sperreområde (avgrenset av gule linjer) som gir 3 prikker.',
        options: [
            { text: 'Ja, alltid 3 prikker' },
            { text: 'Ja, 2 prikker i prøveperioden' },
            { text: 'Nei, det gir bot, men ikke prikker', correct: true },
            { text: 'Bare hvis sperrelinjen er gul' },
        ],
        explanation: 'Dette skillet overrasker mange — til og med politiet omtaler det ofte feil: Prikkbelastningsforskriften nevner **kjøring i sperreområde** begrenset av heltrukken gul linje eller parallelle gule sperrelinjer (oppmerking 1014). Det gir 3 prikker.\n\nÅ kjøre **på eller over selve sperrelinjen** (oppmerking 1004) står derimot ikke i prikklisten. Det gir bot (forenklet forelegg på 6 550 kroner i 2026), men altså ikke prikker.\n\nTo viktige forbehold:\n- Krysser du sperrelinjen som ledd i en **ulovlig forbikjøring**, er det forbikjøringen som straffes — og den gir både høyere bot og 3 prikker.\n- Er forholdet alvorlig nok, kan politiet anmelde i stedet for å bruke forenklet forelegg.\n\nUsikker på forskjellen? [Sperrelinje er en linje, sperreområde er et skravert felt](/laeringsressurser/veimerking) — begge er forklart med illustrasjoner i veimerking-guiden. Se også [prikker på førerkortet](/laeringsressurser/prikker-pa-forerkortet).',
        topic: 'Veimerking og linjer',
        articleId: 'veimerking',
        articleLabel: 'Veimerking – komplett guide',
        quizPath: '/quiz/veimerking',
        quizLabel: 'Ta veimerking-quizen',
        sources: [
            { name: 'Forskrift om prikkbelastning (Lovdata)', url: 'https://lovdata.no/dokument/SF/forskrift/2003-09-19-1164' },
            { name: 'Forskrift om forenklet forelegg i vegtrafikksaker (Lovdata)', url: 'https://lovdata.no/dokument/SF/forskrift/1990-06-29-492' },
        ],
    },
]

/** Grupper spørsmålene etter tema (til hub-siden) */
export function getQuestionsByTopic(): { topic: string; items: QuestionPageData[] }[] {
    const groups = new Map<string, QuestionPageData[]>()
    for (const q of questionPages) {
        const list = groups.get(q.topic) || []
        list.push(q)
        groups.set(q.topic, list)
    }
    return [...groups.entries()].map(([topic, items]) => ({ topic, items }))
}

export function getQuestionBySlug(slug: string): QuestionPageData | undefined {
    return questionPages.find((q) => q.slug === slug)
}
