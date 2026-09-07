export interface RoadMarkingScenario {
    id: number
    title: string
    category: string
    question: string
    options: [string, string, string, string]
    correct: 0 | 1 | 2 | 3
    explanation: string
    remember: string
    hint: string
    visualDescription: string
}

// Faglig kontroll: 5. september 2026. Skiltforskriften kapittel 11 (§§ 21–22),
// stoppskilt 204 (§ 6) og trafikkreglene § 9 nr. 2 for uregulert gangfelt.
// https://lovdata.no/forskrift/2005-10-07-1219/§22
// https://lovdata.no/forskrift/1986-03-21-747/§9
export const ROAD_MARKING_SCENARIOS: RoadMarkingScenario[] = [
    {
        id: 1, title: 'Hvit sperrelinje', category: 'Linjer og felt',
        question: 'Du vil skifte til venstre felt. Kan du krysse den hvite linjen?',
        options: ['Ja, hvis jeg bruker blinklys.', 'Nei, den heltrukne linjen sperrer for feltskifte.', 'Ja, hvis feltet ved siden av er tomt.', 'Ja, linjen varsler bare at jeg må være ekstra oppmerksom.'], correct: 1,
        explanation: 'Den hvite sperrelinjen skiller felt i samme retning. Du skal ikke kjøre på eller over den. Blinklys og ledig plass gjør ikke feltskiftet tillatt.',
        remember: 'Heltrukken mellom feltene? Bli i feltet ditt.',
        hint: 'Se på både formen på linjen og hvor den ligger.',
        visualDescription: 'To felt går mot høyre. Bilen din er i det nederste feltet. Mellom feltene ligger en heltrukken hvit linje.',
    },
    {
        id: 2, title: 'Gul varsellinje', category: 'Linjer og felt',
        question: 'Den gule linjen har lange streker og korte mellomrom. Hva varsler den?',
        options: ['Sikten er for kort til vanlig forbikjøring.', 'Det er alltid forbudt å krysse linjen.', 'Det er et eget felt for buss.', 'Veien går snart fra to kjørefelt til ett.'], correct: 0,
        explanation: 'Gul varsellinje advarer om for kort sikt til vanlig forbikjøring. Den er ikke et absolutt kryssingsforbud, men forbikjøring må fortsatt være trygg og lovlig.',
        remember: 'Lang strek, kort opphold: et varsel om sikt.',
        hint: 'Sammenlign lengden på strekene med mellomrommene.',
        visualDescription: 'En vei med motgående trafikk. Midtlinjen er gul og består av lange streker med korte mellomrom.',
    },
    {
        id: 3, title: 'Kombinert linje', category: 'Linjer og felt',
        question: 'Hvilken av de to gule linjene gjelder for bilen din?',
        options: ['Den heltrukne linjen på motsatt side.', 'Begge linjene gir meg kryssingsforbud.', 'Ingen av linjene når jeg har god sikt.', 'Den stiplede linjen nærmest mitt kjørefelt.'], correct: 3,
        explanation: 'Ved kombinert linje følger du linjen nærmest ditt eget kjørefelt. Her ligger varsellinjen nærmest deg. Kryssing er ikke i seg selv forbudt, men sikten og trafikken må gjøre det trygt og lovlig.',
        remember: 'Din side av veien. Din linje.',
        hint: 'Start ved bilen merket DU og se mot midten av veien.',
        visualDescription: 'Bilen din kjører mot høyre i nederste felt. Midtlinjen er dobbel: stiplet nærmest deg, heltrukken på motsatt side.',
    },
    {
        id: 4, title: 'Vikelinje', category: 'Kryss og samspill',
        question: 'Du nærmer deg trekantene ved vikepliktskiltet. Må du alltid stoppe helt?',
        options: ['Ja, trekantene betyr alltid full stans.', 'Nei, jeg stanser når det er nødvendig for å vike.', 'Nei, kryssende trafikk skal vike for meg.', 'Ja, men bare hvis jeg skal svinge til venstre.'], correct: 1,
        explanation: 'Vikelinjen viser hvor vikeplikten inntrer. Tilpass farten og slipp frem trafikken du har vikeplikt for. Stans hvis det er nødvendig for å overholde vikeplikten.',
        remember: 'Vikeplikt krever at du viker, ikke alltid at du stopper.',
        hint: 'Se på formen på tverrlinjen og skiltet ved siden av.',
        visualDescription: 'Bilen din nærmer seg et T-kryss nedenfra. Hvite trekanter går på tvers av ditt felt. Ved siden av står et vikepliktskilt.',
    },
    {
        id: 5, title: 'Sperreområde', category: 'Oppmerking i praksis',
        question: 'Det er kø i feltet ditt. Kan du bruke det skraverte området for å komme forbi?',
        options: ['Nei, jeg kan ikke kjøre på sperreområdet.', 'Ja, dersom jeg holder lav fart.', 'Ja, hvis jeg skal svinge av snart.', 'Ja, hvit skravering er bare veiledende.'], correct: 0,
        explanation: 'Skraveringen ligger innenfor en heltrukken linje. Dette er et sperreområde som du ikke skal kjøre på. Kø eller en kommende avkjøring endrer ikke regelen.',
        remember: 'Skravert og heltrukket rundt: hold deg utenfor.',
        hint: 'Legg merke til linjen som omgir skraveringen.',
        visualDescription: 'Du står bak to biler i nederste felt. Begge kjørefeltene går i samme retning. Mellom dem ligger et hvitt skravert felt avgrenset av heltrukne hvite linjer.',
    },
    {
        id: 6, title: 'Stopplinje og stoppskilt', category: 'Kryss og samspill',
        question: 'Du kommer til stoppskiltet og den brede hvite linjen. Hva gjør du?',
        options: ['Kjører sakte videre hvis krysset er tomt.', 'Stanser først når jeg ser kryssende trafikk.', 'Kjører frem over linjen før jeg stanser.', 'Stanser helt foran og inntil stopplinjen.'], correct: 3,
        explanation: 'Stoppskiltet krever full stans, også når krysset er tomt. Stopplinjen viser hvor du skal stanse. Linjen alene gir ikke stopplikt; det er skiltet eller lyssignalet som påbyr stans.',
        remember: 'Skiltet sier at du skal stoppe. Linjen viser hvor.',
        hint: 'Les linjen sammen med det åttekantede skiltet.',
        visualDescription: 'Bilen din nærmer seg et kryss nedenfra. En bred heltrukken hvit linje går på tvers av feltet, og et STOP-skilt står til høyre.',
    },
    {
        id: 7, title: 'Skillelinje ved kollektivfelt', category: 'Linjer og felt',
        question: 'Hva forteller den brede stiplede linjen ved feltet merket BUSS?',
        options: ['At det vanlige feltet snart tar slutt.', 'Den skiller vanlig kjørefelt fra et felt for spesiell bruk.', 'At alle kan bruke bussfeltet ved kø.', 'At jeg alltid har vikeplikt for trafikken i bussfeltet.'], correct: 1,
        explanation: 'Skillelinjen brukes mot blant annet kollektivfelt, sykkelfelt og fartsendringsfelt. Her viser BUSS og skiltet at feltet er et kollektivfelt. Linjen gir ikke i seg selv rett til å bruke feltet.',
        remember: 'Bred stiplet linje? Sjekk hva feltet er satt av til.',
        hint: 'Se både på linjens bredde, teksten i veien og skiltet.',
        visualDescription: 'Bilen din kjører mot høyre i øverste felt. En bred stiplet hvit linje skiller det fra nederste felt, som er merket BUSS og skiltet som kollektivfelt.',
    },
    {
        id: 8, title: 'Gul sperrelinje', category: 'Linjer og felt',
        question: 'Bilen foran kjører sakte. Kan du krysse den gule heltrukne linjen for å kjøre forbi?',
        options: ['Ja, hvis det ikke kommer noen imot.', 'Ja, hvis bilen foran kjører under fartsgrensen.', 'Nei, sperrelinjen forbyr det.', 'Ja, hvis føreren foran gir tegn til at jeg kan passere.'], correct: 2,
        explanation: 'Gul sperrelinje skiller motgående kjøreretninger. Du skal ikke kjøre på eller til venstre for den. God sikt og en saktegående bil gjør ikke kryssing for forbikjøring tillatt.',
        remember: 'Fri sikt opphever ikke en sperrelinje.',
        hint: 'Er linjen brutt opp, eller er den sammenhengende?',
        visualDescription: 'Bilen din følger en annen bil mot høyre. Mellom din kjøreretning og motgående felt ligger en heltrukken gul linje.',
    },
    {
        id: 9, title: 'Kantlinje', category: 'Linjer og felt',
        question: 'Hva viser de hvite linjene langs ytterkantene av veien?',
        options: ['Hvor kjørebanen slutter.', 'At parkering er forbudt på hele strekningen.', 'At veikanten er et eget sykkelfelt.', 'Hvor kjørefelt i samme retning skilles fra hverandre.'], correct: 0,
        explanation: 'Kantlinjene markerer kjørebanens ytterkant og hjelper deg med plasseringen. Det er plasseringen langs veikanten som skiller dem fra linjer mellom kjørefelt.',
        remember: 'Se hvor linjen ligger, ikke bare hvilken farge den har.',
        hint: 'De markerte linjene ligger ytterst, ikke mellom feltene.',
        visualDescription: 'En vei med gul midtlinje. Langs begge ytterkantene av kjørebanen ligger heltrukne hvite linjer.',
    },
    {
        id: 10, title: 'Kjørefeltlinje', category: 'Linjer og felt',
        question: 'Du vil skifte felt over den hvite stiplede linjen. Hva gjelder?',
        options: ['Blinklys gir meg rett til å skifte felt.', 'Trafikken i det andre feltet må slippe meg inn.', 'Stiplet linje betyr at jeg aldri kan skifte felt.', 'Jeg kan skifte felt når det er trygt, og må vike for trafikken der.'], correct: 3,
        explanation: 'Kjørefeltlinjen har korte streker og lange mellomrom. Den kan krysses, men ved feltskifte har du vikeplikt for trafikk i feltet du vil inn i. Sjekk speil og blindsone og gi tegn.',
        remember: 'Stiplet åpner for feltskifte. Du har fortsatt vikeplikt.',
        hint: 'Linjen tillater en manøver, men hvem har ansvaret ved feltskiftet?',
        visualDescription: 'To felt går mot høyre. Mellom dem ligger en hvit linje med korte streker og lange mellomrom. Bilen din er i nederste felt.',
    },
    {
        id: 11, title: 'Dobbel sperrelinje', category: 'Linjer og felt',
        question: 'Hvem gjelder de doble, heltrukne gule linjene for?',
        options: ['Bare trafikken i min retning.', 'Bare tunge kjøretøy.', 'Begge kjøreretningene.', 'Bare kjøretøy som skal svinge av veien.'], correct: 2,
        explanation: 'Begge kjøreretningene har en sperrelinje nærmest sitt felt. Derfor gjelder forbudet mot å kjøre på eller til venstre for linjen fra begge sider.',
        remember: 'Heltrukken på begge sider: sperret for begge retninger.',
        hint: 'Undersøk hvilken linje føreren på hver side møter.',
        visualDescription: 'Bilen din kjører mot høyre, motgående bil mot venstre. To parallelle heltrukne gule linjer ligger mellom retningene.',
    },
    {
        id: 12, title: 'Pil og sperrelinje', category: 'Oppmerking i praksis',
        question: 'Feltet ditt har høyrepil og en sperrelinje til venstre. Du skulle egentlig rett frem. Hva gjør du?',
        options: ['Følger feltet til høyre og finner en ny rute.', 'Skifter raskt til venstre felt.', 'Kjører rett frem fordi pilen bare er et råd.', 'Stanser i feltet og rygger tilbake for å velge riktig felt.'], correct: 0,
        explanation: 'Når feltet er avgrenset av sperrelinje, viser pilen påbudt kjøreretning. Du må følge høyresvingen. Planlegg en ny rute etterpå i stedet for å bryte oppmerkingen.',
        remember: 'Feil felt? Følg pilen og finn en ny vei.',
        hint: 'Les pilen og den heltrukne linjen som én beskjed.',
        visualDescription: 'Bilen din kjører mot høyre i nederste felt. Feltet svinger nedover til høyre og har en høyrepil. En heltrukken hvit linje skiller det fra feltet rett frem.',
    },
    {
        id: 13, title: 'Midlertidig oppmerking', category: 'Oppmerking i praksis',
        question: 'Ved veiarbeidet erstatter oransje vegbanereflektorer den vanlige oppmerkingen. Hva følger du?',
        options: ['Den gamle linjen, selv om den er erstattet.', 'Reflektorene som viser det midlertidige kjørefeltet.', 'Den veien som ser kortest ut.', 'Den gamle linjen til jeg ser en ny gul linje.'], correct: 1,
        explanation: 'Ved midlertidige endringer kan oransje vegbanereflektorer erstatte vanlig oppmerking. Følg den midlertidige føringen, skiltene og eventuelle anvisninger. Gul linje er ikke en generell kode for veiarbeid i Norge.',
        remember: 'Oransje reflektorer kan vise den midlertidige veien.',
        hint: 'Oppgaven sier at den gamle oppmerkingen er erstattet.',
        visualDescription: 'Et felt føres til siden ved veiarbeid. Oransje vegbanereflektorer viser begge sidene av den midlertidige traseen. Den gamle hvite linjen er tildekket.',
    },
    {
        id: 14, title: 'Gangfelt', category: 'Kryss og samspill',
        question: 'En gående er på vei ut i gangfeltet uten trafikklys. Hva gjør du?',
        options: ['Kjører først hvis personen ennå er på fortauet.', 'Tuter for å vise at jeg kommer.', 'Holder farten til den gående har nådd mitt kjørefelt.', 'Tilpasser farten og viker for den gående.'], correct: 3,
        explanation: 'Ved gangfelt uten trafikklys eller politiregulering har du vikeplikt for gående som er i gangfeltet eller på vei ut i det. Senk farten i god tid og stans når det er nødvendig.',
        remember: 'Se etter mennesker, ikke bare striper.',
        hint: 'Se på den gåendes plassering ved gangfeltet.',
        visualDescription: 'Bilen din nærmer seg et gangfelt fra venstre. En gående på fortauet nederst er på vei ut i gangfeltet. Det er ingen trafikklys.',
    },
]
