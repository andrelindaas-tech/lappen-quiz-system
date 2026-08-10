// Beriket innhold for skiltsidene med mest søketrafikk (GSC-prioritert).
// Nøkkel = sign.slug. Vises på skiltets detaljside + inngår i FAQPage-schema.
// Faktagrunnlag: skiltforskriften/trafikkreglene + eksisterende kvalitetssikrede felt i trafficSigns.ts.

export interface TrafficSignExtra {
    /** Kort avsnitt: hvor i trafikken møter du typisk skiltet */
    whereYouMeetIt: string
    /** Vises som synlig FAQ + legges til FAQPage-schema */
    faq: { question: string; answer: string }[]
}

export const trafficSignExtras: Record<string, TrafficSignExtra> = {
    'innkjoring-forbudt': {
        whereYouMeetIt: 'Du møter skiltet der en enveiskjørt gate munner ut, ved avkjøringsramper på motorveg (for å hindre kjøring mot kjøreretningen) og ved innkjørsler som er stengt fra én side. Skiltet står alltid vendt mot retningen det er forbudt å kjøre inn fra — trafikk fra motsatt side kan ha full adgang.',
        faq: [
            { question: 'Gjelder innkjøring forbudt også for syklister?', answer: 'Ja, i utgangspunktet gjelder skiltet alle kjøretøy, også sykkel. Men svært ofte står det et underskilt («Gjelder ikke sykkel» e.l.) som unntar syklende. Uten underskilt må også syklister velge en annen vei.' },
            { question: 'Kan det komme biler mot meg selv om jeg passerte innkjøring forbudt-skiltet lovlig?', answer: 'Ja. Skiltet forbyr bare innkjøring fra én bestemt retning — det betyr ikke automatisk at vegen er enveiskjørt. Du kan derfor møte trafikk, med mindre annen skilting viser at gaten er enveiskjørt.' },
            { question: 'Hva er forskjellen på innkjøring forbudt og forbudt for alle kjøretøy?', answer: '«Innkjøring forbudt» (302) gjelder bare innkjøring fra den siden skiltet står. «Forbudt for alle kjøretøy» (306.0) stenger vegen for kjøretøytrafikk i begge retninger.' },
        ],
    },
    'vikeplikt-overfor-motende-kjorende': {
        whereYouMeetIt: 'Skiltet står ved smale bruer, innsnevringer, vegarbeid og andre flaskehalser der to biler ikke kan passere samtidig. I motsatt ende av innsnevringen står som regel skilt 214 («Møtende kjørende har vikeplikt») — det blå skiltet som gir motparten prioritet.',
        faq: [
            { question: 'Hvordan husker jeg hvem som skal vente?', answer: 'Se på fargene: rød pil = den som må vike. På skilt 212 er pilen som peker i din kjøreretning rød — altså er det du som har vikeplikt og må vente. På det blå skiltet 214 er det møtende trafikk som har vikeplikt.' },
            { question: 'Må jeg alltid stoppe helt ved dette skiltet?', answer: 'Nei, bare hvis det faktisk kommer møtende trafikk. Er innsnevringen fri, kan du kjøre gjennom — men senk farten og vær klar til å stanse før innsnevringen.' },
        ],
    },
    'vendingsforbud': {
        whereYouMeetIt: 'Skiltet brukes i kryss og på strekninger der en U-sving ville vært farlig — typisk ved høy fart, dårlig sikt, mye trafikk eller foran lysregulerte kryss i byer.',
        faq: [
            { question: 'Hvor langt gjelder vendingsforbudet?', answer: 'Forbudet gjelder fra skiltet og fram til neste vegkryss, med mindre noe annet er angitt med underskilt.' },
            { question: 'Kan jeg svinge til venstre inn en sideveg selv om det er vendingsforbud?', answer: 'Ja. Vendingsforbud forbyr bare å snu (ta U-sving). Å svinge til venstre inn på en sideveg er fortsatt lov, så lenge det ikke også står et svingforbudskilt.' },
        ],
    },
    'stopp': {
        whereYouMeetIt: 'Stoppskiltet brukes bare i spesielt farlige eller uoversiktlige kryss og foran enkelte planoverganger — steder der vanlig vikeplikt ikke gir god nok sikkerhet. Det er derfor et av de få skiltene som alltid krever handling uansett trafikk.',
        faq: [
            { question: 'Hvor skal jeg stanse ved stoppskilt?', answer: 'Foran stopplinjen. Mangler stopplinje, stanser du så nær den kryssende vegen som mulig, der du har best oversikt — og alltid med hjulene helt i ro.' },
            { question: 'Må jeg stoppe selv om det ikke kommer noen?', answer: 'Ja, alltid. I motsetning til vikepliktskiltet krever stoppskiltet full stans hver gang, uansett om krysset ser tomt ut. «Rullende stopp» regnes som brudd.' },
        ],
    },
    'forbikjoring-forbudt': {
        whereYouMeetIt: 'Skiltet står på strekninger med dårlig sikt eller høy risiko — foran bakketopper, i kurver, ved vegarbeid og på ulykkesbelastede strekninger. Ofte kombinert med heltrukken sperrelinje i veibanen.',
        faq: [
            { question: 'Kan jeg kjøre forbi en motorsykkel når det er forbikjøring forbudt?', answer: 'Ja, forbudet gjelder forbikjøring av motorvogn med flere enn to hjul. Tohjuls motorsykkel og moped kan forbikjøres — men bare når det kan skje trygt og med god avstand.' },
            { question: 'Når slutter forbikjøringsforbudet?', answer: 'Forbudet gjelder til det oppheves av skiltet «Slutt på forbikjøringsforbud» (336). Husk at sperrelinje i veibanen kan forby forbikjøring videre selv etter at skiltforbudet er opphevet.' },
        ],
    },
    'parkering-forbudt': {
        whereYouMeetIt: 'Et av de vanligste skiltene i byer og tettsteder — langs gater der parkerte biler ville hindret trafikk, sikt eller brøyting. Ofte med underskilt som angir tid, sone eller unntak.',
        faq: [
            { question: 'Kan jeg stoppe for å slippe av noen der det er parkering forbudt?', answer: 'Ja. Kort stans for av- og påstigning eller av- og pålessing er tillatt — det regnes ikke som parkering. Men bilen kan ikke forlates lenger enn det stansen krever.' },
            { question: 'Hvor langt gjelder parkering forbudt-skiltet?', answer: 'På den siden av vegen skiltet står, fram til neste vegkryss — eller til et nytt skilt endrer reguleringen. Med underskilt «Sone» gjelder forbudet i hele sonen til sone slutt-skiltet.' },
            { question: 'Hva er forskjellen på parkering forbudt og stans forbudt?', answer: 'Parkering forbudt (372) tillater kort stans for av-/påstigning og lasting. Stans forbudt (370) forbyr all stans, også «bare ett sekund» for å slippe ut en passasjer.' },
        ],
    },
    'sammenfletting': {
        whereYouMeetIt: 'Skiltet møter du der to kjørefelt blir til ett uten at noe felt er «hovedfeltet» — typisk etter vegarbeid, ved feltreduksjon på flerfeltsveg og der to veier løper sammen som likeverdige.',
        faq: [
            { question: 'Hvem har vikeplikt ved sammenfletting?', answer: 'Ingen av feltene har prioritet. Fletteprinsippet («glidelåsprinsippet») gjelder: kjør annenhver gang, tilpass farten og vis tydelig hva du gjør.' },
            { question: 'Hva er forskjellen på sammenfletting og kjørefelt slutter?', answer: 'Ved sammenfletting (530) fletter begge felt likeverdig, annenhver gang. Ved «kjørefelt slutter» (532) er det et vanlig feltskifte: du som ligger i feltet som opphører har vikeplikt for trafikken i feltet du skal inn i.' },
        ],
    },
    'stans-forbudt': {
        whereYouMeetIt: 'Skiltet brukes der selv en kort stans skaper fare eller kaos: i tunneler, på smale bruer, ved uoversiktlige svinger, foran skoler i rushtid og langs hovedveier med stor trafikk.',
        faq: [
            { question: 'Kan jeg stoppe kjapt for å slippe ut en passasjer?', answer: 'Nei. Stans forbudt betyr all frivillig stans er forbudt — også noen sekunder for av- eller påstigning. Det er dette som skiller skiltet fra parkering forbudt.' },
            { question: 'Hva om jeg må stoppe på grunn av kø eller rødt lys?', answer: 'Stans som skyldes trafikken — kø, rødt lys eller at du overholder vikeplikt — er selvsagt lov. Forbudet gjelder frivillig stans.' },
        ],
    },
    'gatetun': {
        whereYouMeetIt: 'Gatetun-skiltet står ved innkjøringen til boliggater og bykvartaler som er bygget for opphold og lek — ofte med fartsdempere, beplantning og felles areal for gående og kjørende.',
        faq: [
            { question: 'Hvor fort kan jeg kjøre i et gatetun?', answer: 'Bare i gangfart — i praksis under 10 km/t. Det finnes ingen «vanlig» fartsgrense i gatetun; du skal kjøre så sakte at lekende barn og gående ikke utsettes for fare.' },
            { question: 'Kan jeg parkere i et gatetun?', answer: 'Kun på plasser som er særskilt anvist for parkering. All annen parkering er forbudt, selv om det «ser ledig ut».' },
            { question: 'Hvem har vikeplikt når jeg kjører ut av et gatetun?', answer: 'Du. Når du kjører ut fra gatetun (eller gågate) har du vikeplikt for all annen trafikk — både kjørende, syklende og gående. Høyreregelen gjelder ikke til din fordel her.' },
        ],
    },
    'holdeplass-for-buss': {
        whereYouMeetIt: 'Skiltet markerer bussholdeplasser langs veg og gate. Reguleringen rundt skiltet er streng fordi bussene trenger fri lomme for å svinge inn og ut.',
        faq: [
            { question: 'Hvor nær en bussholdeplass kan jeg parkere?', answer: 'Det er forbudt å parkere nærmere enn 20 meter fra skiltet — på begge sider. Kort stans for av- og påstigning er tillatt hvis det ikke hindrer bussen.' },
            { question: 'Har jeg vikeplikt for buss som skal ut fra holdeplassen?', answer: 'Ja, der fartsgrensen er 60 km/t eller lavere har du vikeplikt for buss som gir tegn til å forlate holdeplassen. Bussen skal likevel forsikre seg om at det kan skje uten fare.' },
        ],
    },
    'moteplass': {
        whereYouMeetIt: 'M-skiltet står langs smale veier — typisk fjelloverganger, skogsbilveier og trange bygdeveier — og markerer lommene som gjør det mulig for to biler å passere hverandre.',
        faq: [
            { question: 'Hvem skal bruke møteplassen når to biler møtes?', answer: 'Den som har møteplassen på sin side av vegen, kjører inn i lommen og venter. Er lommen på venstre side for deg, stanser du i stedet på vegen rett overfor, slik at den møtende kan bruke lommen.' },
            { question: 'Kan jeg parkere på en møteplass?', answer: 'Nei. Møteplassen skal alltid være ledig for passering. Verken parkering, rasting eller U-sving er tillatt der.' },
        ],
    },
    'vikeplikt': {
        whereYouMeetIt: 'Norges kanskje viktigste skilt står ved innkjøring til forkjørsveier, foran rundkjøringer og i kryss der høyreregelen er satt til side. Formen — trekant med spissen ned — er unik, slik at du kjenner igjen skiltet selv bakfra eller med snø på.',
        faq: [
            { question: 'Må jeg stoppe helt ved vikepliktskilt?', answer: 'Bare hvis det er nødvendig for å slippe frem kryssende trafikk. Er det fri sikt og ingen å vike for, kan du kjøre — men du skal senke farten i god tid og vise tydelig at du akter å vike.' },
            { question: 'Hva betyr vikepliktskiltet foran en rundkjøring?', answer: 'At du har vikeplikt for trafikken som allerede er inne i rundkjøringen. Du trenger ikke stoppe hvis det er klart — tilpass farten og flett inn.' },
            { question: 'Hvorfor har vikepliktskiltet en spesiell form?', answer: 'Trekantformen med spissen ned brukes bare på dette skiltet. Det gjør at andre trafikanter kan se bakfra at du har vikeplikt — og at skiltet gjenkjennes selv om det er dekket av snø. Dette er en klassiker på teoriprøven.' },
        ],
    },
    'forbudt-for-alle-kjoretoy': {
        whereYouMeetIt: 'Skiltet stenger vegen for all kjøretøytrafikk i begge retninger — typisk ved gågater, anleggsområder, stengte bruer eller veier reservert for gående.',
        faq: [
            { question: 'Kan jeg sykle forbi skiltet «forbudt for alle kjøretøy»?', answer: 'Nei. Sykkel er definert som kjøretøy i trafikkreglene, så forbudet gjelder også syklende — med mindre et underskilt gjør unntak. Du kan imidlertid gå av og trille sykkelen, for da regnes du som gående.' },
            { question: 'Gjelder skiltet i begge retninger?', answer: 'Ja. I motsetning til «innkjøring forbudt», som bare gjelder fra én side, stenger dette skiltet vegen for kjøretøy begge veier.' },
        ],
    },
    'slutt-pa-saerskilt-fartsgrense-50': {
        whereYouMeetIt: 'Skiltet møter du der en skiltet 50-sone opphører — typisk når du forlater et tettsted eller en strekning med lokal fartsgrense.',
        faq: [
            { question: 'Hvilken fartsgrense gjelder etter dette skiltet?', answer: 'Den generelle fartsgrensen: 50 km/t i tettbygd strøk og 80 km/t utenfor tettbygd strøk. Skiltet betyr aldri «fri fart» — du må selv vurdere om du er i tettbygd strøk.' },
            { question: 'Hvorfor står dette skiltet der det allerede er 50-grense?', answer: 'Skiltet opphever den særskilte (skiltede) fartsgrensen. Hvis du fortsatt er i tettbygd strøk, gjelder den generelle grensen på 50 km/t videre — endringen er juridisk, ikke praktisk, før du forlater tettbebyggelsen.' },
        ],
    },
    'kjorefelt-slutter': {
        whereYouMeetIt: 'Skiltet varsler at feltet du ligger i opphører lenger fremme — vanlig på flerfeltsveier inn mot byer, etter forbikjøringsfelt og foran innsnevringer.',
        faq: [
            { question: 'Hvem har vikeplikt når kjørefeltet mitt slutter?', answer: 'Du. Dette er et vanlig feltskifte, så du som forlater feltet har vikeplikt for trafikken i feltet du skal inn i. Planlegg feltskiftet tidlig i stedet for å kjøre helt til feltet er borte.' },
            { question: 'Er ikke dette det samme som sammenfletting?', answer: 'Nei — det er nettopp forskjellen teoriprøven tester. Ved sammenfletting (530) fletter begge felt annenhver gang uten prioritet. Ved kjørefelt slutter (532) har du som ligger i det opphørende feltet vikeplikt.' },
        ],
    },
    'felt-for-fartsokning': {
        whereYouMeetIt: 'Skiltet står ved påkjøring til motorveg og motortrafikkveg og markerer akselerasjonsfeltet — feltet der du skal opp i fart før du fletter inn i hovedtrafikken.',
        faq: [
            { question: 'Skal jeg stoppe i påkjøringsfeltet hvis det er mye trafikk?', answer: 'Nei, bare i nødsfall. Poenget med feltet er å øke farten til trafikkflytens nivå og flette inn. En stans i akselerasjonsfeltet gjør innflettingen farligere for både deg og de bak.' },
            { question: 'Hvem har vikeplikt ved påkjøring på motorveg?', answer: 'Fletteprinsippet gjelder ved fartsøkningsfelt, men i praksis må du som kommer inn tilpasse deg: du skal ikke tvinge trafikken på motorvegen til å bremse. Bruk feltet til å matche farten og finn en luke.' },
        ],
    },
    'forbikjoringsforbud-for-lastebil': {
        whereYouMeetIt: 'Skiltet står typisk på motorveier og stigninger der forbikjørende lastebiler ville blokkert trafikken («elefantrace»), og på strekninger med mye tungtrafikk.',
        faq: [
            { question: 'Gjelder dette skiltet for bilen min?', answer: 'Bare hvis du kjører lastebil med tillatt totalvekt over 3 500 kg. Personbiler, SUV-er og vanlige varebiler kan kjøre forbi som normalt der det ellers er lov.' },
            { question: 'Hva betyr symbolene på skiltet?', answer: 'Den røde lastebilen til venstre viser hvem forbudet gjelder (lastebil over 3,5 tonn), og den svarte bilen til høyre viser at det er forbikjøring av motorvogn med flere enn to hjul som er forbudt.' },
        ],
    },
    'motortrafikkveg': {
        whereYouMeetIt: 'Skiltet møter du der en veg med motorvegliknende standard begynner — ofte to- eller trefelts hovedveier utenom byene. Reglene gjelder til skiltet «Slutt på motortrafikkveg».',
        faq: [
            { question: 'Hvem har ikke lov til å kjøre på motortrafikkveg?', answer: 'Samme adgangsregler som motorveg: gående, syklende, moped, traktor og andre kjøretøy som ikke lovlig kan holde minst 40 km/t har ikke adgang.' },
            { question: 'Hva er forskjellen på motorveg og motortrafikkveg?', answer: 'Adgangsreglene og forbudene (rygging, vending, stans) er de samme. Forskjellen er standarden: motortrafikkveg har ikke alltid midtdeler eller planskilte kryss, og kan ha møtende trafikk. Derfor er den ofte farligere ved høy fart.' },
        ],
    },
    'severdighet': {
        whereYouMeetIt: 'Det brune skiltet med «sløyfesymbolet» viser vei til severdigheter, kulturminner og historiske steder — vanlig langs turistveier og ved avkjøringer til attraksjoner.',
        faq: [
            { question: 'Hva betyr det brune skiltet med sløyfe-symbol?', answer: 'Symbolet markerer en severdighet av nasjonal eller regional verdi — for eksempel et kulturminne, en stavkirke eller et museum. Brun bunnfarge brukes på serviceskilt for severdigheter og turistmål.' },
        ],
    },
    'radioinformasjon': {
        whereYouMeetIt: 'Skiltet står foran lengre tunneler og over værutsatte fjelloverganger, der det er viktig å få med seg trafikkmeldinger om stenging, kolonnekjøring eller hendelser.',
        faq: [
            { question: 'Er jeg pålagt å høre på kanalen skiltet viser?', answer: 'Nei, skiltet er en opplysning, ikke et påbud. Men det er lurt å skru på kanalen — spesielt før tunneler og fjelloverganger, der meldinger om stenging eller ulykker kan komme raskt.' },
        ],
    },
    'rasfare': {
        whereYouMeetIt: 'Rasfare-skiltet står langs fjellsider, skjæringer og andre utsatte partier der stein, jord eller snø kan falle ned i vegen. Risikoen kan øke etter kraftig nedbør, snøsmelting og store temperatursvingninger.',
        faq: [
            { question: 'Hva varsler skiltet Rasfare om?', answer: 'Det varsler både om at et ras kan gå, og om at stein, jord eller snø fra et tidligere ras kan ligge i kjørebanen. Tilpass derfor farten slik at du kan stanse for hindringer.' },
            { question: 'Hva viser siden på rasfare-symbolet?', answer: 'Fjellsiden i symbolet viser hvilken side rasfaren normalt kommer fra. Skilt 114.1 viser rasfare fra høyre; en speilvendt variant brukes for fare fra venstre.' },
        ],
    },
    'farlig-vegskulder': {
        whereYouMeetIt: 'Skiltet brukes på veger med høy asfaltkant, løs grus, svak skulder eller bratt overgang utenfor kjørebanen. Det er særlig relevant på smale veger der du kan bli fristet til å legge hjulene utenfor asfalten ved møtende trafikk.',
        faq: [
            { question: 'Hva er farlig med vegskulderen?', answer: 'Skulderen kan være lavere enn kjørebanen, ha løst underlag eller være for svak til å bære bilen. Da kan kjøretøyet trekke til siden, miste veigrep eller bli vanskelig å styre tilbake på asfalten.' },
            { question: 'Hva gjør jeg hvis et hjul kommer utenfor asfaltkanten?', answer: 'Slipp gassen, hold bilen stabil og reduser farten uten brå bevegelser. Når farten er lavere og det er klart, styrer du rolig tilbake på kjørebanen.' },
        ],
    },
    'kai-strand-eller-ferjeleie': {
        whereYouMeetIt: 'Du møter skiltet ved ferjekaier, ramper, strender og andre steder der vegen går helt fram til vannet. Skiltet er ekstra viktig i mørke, tåke og vinterføre, når kaikanten kan være vanskelig å oppdage.',
        faq: [
            { question: 'Betyr skiltet at jeg skal kjøre direkte om bord i ferjen?', answer: 'Nei. Du skal følge bom, lyssignal, oppmerking og anvisninger fra personell. Ferjen kan være borte, rampen kan være stengt, eller det kan stå en kø foran kaien.' },
            { question: 'Hvorfor er dette et fareskilt?', answer: 'Fordi kjørearealet kan ende direkte ved vannet. For høy fart, glatt føre eller dårlig sikt kan gjøre det vanskelig å stanse før kaikanten eller ferjelemmen.' },
        ],
    },
    'avstandsskilt-planovergang-en-skrastrek': {
        whereYouMeetIt: 'Dette er den siste av tre røde og hvite avstandsmarkører på innkjøringen mot en planovergang. Når du ser én skråstrek, er du nærmere sporet enn ved skiltene med to eller tre streker.',
        faq: [
            { question: 'Hva betyr én rød skråstrek før jernbanen?', answer: 'Det er siste avstandsskilt i serien før planovergangen. Rekkefølgen mot sporet er tre, to og én skråstrek.' },
            { question: 'Kan jeg kjøre inn på sporet når bommen er på vei opp?', answer: 'Vent til signalene tillater kjøring, bommen er helt oppe og du ser at det er plass til hele bilen på den andre siden. Du må aldri bli stående på sporet.' },
        ],
    },
    'avstandsskilt-planovergang-to-skrastreker': {
        whereYouMeetIt: 'Skiltet med to røde skråstreker er den midterste markøren i serien før en planovergang. Du har passert skiltet med tre streker, og neste markør har én.',
        faq: [
            { question: 'Hva forteller antallet skråstreker?', answer: 'Strekene gjør tilnærmingen til planovergangen synlig. Antallet reduseres fra tre til to til én når du kommer nærmere sporet.' },
            { question: 'Er to skråstreker alltid en bestemt meteravstand?', answer: 'Skiltet viser først og fremst plasseringen som mellomste markør i serien. Den faktiske oppsettingsavstanden tilpasses veg og lokale forhold, så du bør ikke basere kjøringen på et eksakt metertall.' },
        ],
    },
    'avstandsskilt-planovergang-tre-skrastreker': {
        whereYouMeetIt: 'Skiltet med tre røde skråstreker er den første avstandsmarkøren på veg inn mot en planovergang. Det gir deg tid til å oppdage videre varsling og begynne å redusere farten.',
        faq: [
            { question: 'Er tre skråstreker nærmest planovergangen?', answer: 'Nei, tre streker står først og lengst fra sporet. Deretter følger to streker og til slutt én strek nærmest planovergangen.' },
            { question: 'Hva skal jeg se etter etter dette skiltet?', answer: 'Se etter de neste avstandsmarkørene, fareskilt for planovergang, lyssignal, bom og kø. Tilpass farten så du kan stanse før sporet.' },
        ],
    },
    'sporvogn': {
        whereYouMeetIt: 'Sporvogn-skiltet brukes der trikkeskinner krysser eller går inn i kjørearealet, særlig i bytrafikk og ved uoversiktlige kryss. Det kan også stå nær holdeplasser med passasjerer som må krysse vegen.',
        faq: [
            { question: 'Har sporvognen alltid forkjørsrett?', answer: 'Vikeplikten må vurderes sammen med trafikklys, skilt og trafikkreglene på stedet. Uansett må du huske at sporvognen følger skinnene, har lang bremselengde og ikke kan svinge unna.' },
            { question: 'Kan jeg stanse på trikkeskinnene i kø?', answer: 'Nei. Kjør bare inn på sporet når du vet at du kan komme helt over eller ut av sporvognens trasé. Å bli stående på skinnene kan blokkere sporvognen og skape fare.' },
        ],
    },
    'sidevind': {
        whereYouMeetIt: 'Sidevind-skiltet står ofte på broer, fjelloverganger, åpne sletter og ved tunnelåpninger. Vindkast merkes særlig brått når du kommer ut fra et skjermet parti eller passerer et stort kjøretøy.',
        faq: [
            { question: 'Hvilke kjøretøy påvirkes mest av sidevind?', answer: 'Høye og lette kjøretøy, biler med campingvogn, motorsykler og syklister er særlig utsatt. Alle kjøretøy kan likevel bli flyttet sideveis av kraftige vindkast.' },
            { question: 'Hvordan bør jeg kjøre i sterk sidevind?', answer: 'Reduser farten, hold begge hender på rattet og øk sideavstanden. Vær klar for et plutselig kast når skjermingen fra skog, tunnel eller lastebil forsvinner.' },
        ],
    },
    'annen-fare': {
        whereYouMeetIt: 'Skiltet med utropstegn brukes ved lokale eller midlertidige farer som ikke har et eget symbol. Det står normalt sammen med et underskilt som navngir eller beskriver faren.',
        faq: [
            { question: 'Hva betyr fareskiltet med utropstegn?', answer: 'Det betyr «annen fare». Selve utropstegnet sier ikke hvilken fare det er, så du må lese underskiltet og tolke skiltkombinasjonen samlet.' },
            { question: 'Kan Annen fare stå uten underskilt?', answer: 'Skiltforskriften legger opp til at farens art angis på underskilt. I trafikken bør du derfor straks se etter tekst eller symbol under hovedskiltet og tilpasse kjøringen til denne informasjonen.' },
        ],
    },
    'slutt-pa-gagate': {
        whereYouMeetIt: 'Skiltet står ved utkjøringen fra gågater i by- og sentrumsområder. Gående kan fortsatt befinne seg tett rundt bilen, selv om gågatereguleringen opphører ved skiltet.',
        faq: [
            { question: 'Hvem har vikeplikt når jeg kjører ut av en gågate?', answer: 'Du har vikeplikt for trafikantene på vegen du kjører inn på. Dette er en særskilt utkjøringssituasjon, så høyreregelen gir deg ikke prioritet.' },
            { question: 'Når kan jeg øke farten etter slutt på gågate?', answer: 'Først når du faktisk har forlatt gågaten og forholdene gjør det forsvarlig. Se etter ny fartsgrense og annen regulering, og ta fortsatt hensyn til gående rundt utkjøringen.' },
        ],
    },
    'havarilomme': {
        whereYouMeetIt: 'Havarilommer finnes særlig i tunneler og langs veger der det ikke er en trygg eller bred skulder. Lommen gjør det mulig å få et kjøretøy med problemer ut av det ordinære kjørefeltet.',
        faq: [
            { question: 'Kan jeg bruke en havarilomme som rasteplass?', answer: 'Nei. Havarilommen er beregnet for havari, akutt sykdom og andre nødsituasjoner. Vanlig pause, telefonbruk eller venting skal skje på en lovlig parkerings- eller rasteplass.' },
            { question: 'Hva gjør jeg ved havari i en tunnel?', answer: 'Forsøk å komme helt inn i havarilommen, slå på nødblink, stans motoren og ta på refleksvest før du går ut. Bruk tunnelens nødtelefon hvis den finnes, og følg sikkerhetsanvisningene på stedet.' },
        ],
    },
    'automatisk-trafikkontroll-strekningsmaling': {
        whereYouMeetIt: 'Strekningsmåling brukes blant annet i tunneler og på ulykkesutsatte vegstrekninger. Kameraer registrerer passering ved starten og slutten, slik at gjennomsnittsfarten kan beregnes.',
        faq: [
            { question: 'Hvordan virker strekningsmåling?', answer: 'Systemet måler tiden kjøretøyet bruker mellom to kontrollpunkter og beregner gjennomsnittsfarten. Overstiger gjennomsnittet fartsgrensen, kan kontrollen gi reaksjon.' },
            { question: 'Holder det å bremse ved kameraene?', answer: 'Nei. Fordi gjennomsnittsfarten måles over en hel strekning, må du holde lovlig fart mellom kontrollpunktene — ikke bare akkurat der kameraene står.' },
        ],
    },
    'bevegelig-bru': {
        whereYouMeetIt: 'Skiltet står før klaffebruer, svingbruer og andre bruer som kan åpnes for båt- og skipstrafikk. Slike steder har vanligvis bom, stopplinje og rødt signal som stenger vegen mens brua beveges.',
        faq: [
            { question: 'Hva skal jeg gjøre når rødt signal lyser ved en bevegelig bru?', answer: 'Stans foran stopplinjen eller i trygg avstand fra bommen. Vent til signalet tillater kjøring og bommen er helt oppe før du passerer.' },
            { question: 'Kan jeg kjøre over hvis bommen ikke har begynt å gå ned?', answer: 'Ikke dersom rødt signal eller annen anvisning krever stans. Ikke øk farten for å rekke over; brua kan være i ferd med å stenges.' },
        ],
    },
    'jernbanespor-enkeltsporet': {
        whereYouMeetIt: 'Andreaskorset står ved selve planovergangen, nærmere sporet enn fareskiltene og avstandsmarkørene. Varianten med ett kryss viser at vegen krysser ett jernbane- eller forstadsbanespor.',
        faq: [
            { question: 'Hva betyr ett Andreaskors ved en planovergang?', answer: 'Skilt 138.1 viser at planovergangen er enkeltsporet. Du skal kontrollere at tog ikke nærmer seg og gi fri veg, uansett om overgangen også har bom eller signal.' },
            { question: 'Har toget alltid prioritet ved planovergangen?', answer: 'Ja. Trafikanter skal gi fri veg og om nødvendig stanse for jernbanetog og sporvogn. Kjør aldri inn før du kan komme helt over sporet.' },
        ],
    },
    'jernbanespor-flersporet': {
        whereYouMeetIt: 'Dette Andreaskorset står ved planoverganger med to eller flere spor. Den ekstra, korte kryssarmen under hovedkrysset skiller skiltet visuelt fra enkeltsporet variant.',
        faq: [
            { question: 'Hva er forskjellen på skilt 138.1 og 138.2?', answer: '138.1 viser enkeltsporet planovergang. 138.2 har et ekstra kryss og viser at det er to eller flere spor.' },
            { question: 'Kan jeg kjøre når det første toget har passert?', answer: 'Ikke før signalet tillater det, bommen er helt oppe og du har kontrollert alle spor. Et nytt tog kan komme fra motsatt retning på nabosporet.' },
        ],
    },
    'fly': {
        whereYouMeetIt: 'Fly-skiltet brukes nær flyplasser og under inn- eller utflygingsruter der fly kan passere lavt over vegen. Lyd, skygge og luftstrøm kan komme plutselig og distrahere føreren.',
        faq: [
            { question: 'Må jeg stoppe når jeg ser fareskiltet Fly?', answer: 'Nei, ikke uten annen anvisning. Skiltet varsler at lavtflygende fly kan overraske deg. Hold jevn fart og konsentrer deg om trafikken.' },
            { question: 'Hva er den vanligste faren ved lavtflygende fly?', answer: 'At føreren blir skremt eller distrahert og gjør en brå manøver. Vær forberedt på kraftig lyd og skygge uten å miste kontrollen over bilen.' },
        ],
    },
    'militaer-aktivitet': {
        whereYouMeetIt: 'Skiltet brukes ved militære øvingsområder, leirer og veger der militære kjøretøy eller kolonner kan krysse. Du kan møte store, saktegående eller beltegående kjøretøy og midlertidig trafikkregulering.',
        faq: [
            { question: 'Hvem skal jeg følge hvis militærpolitiet regulerer trafikken?', answer: 'Anvisning fra militærpolitiet gjelder foran trafikklys, skilt, oppmerking og vanlige trafikkregler. Følg tegnene tydelig og uten opphold.' },
            { question: 'Kan jeg kjøre inn mellom kjøretøy i en militær kolonne?', answer: 'Du må ikke avbryte eller hindre en militær kjøretøykolonne. Hold avstand og vent til hele kolonnen har passert eller du får anvisning om noe annet.' },
        ],
    },
    'skilopere': {
        whereYouMeetIt: 'Skiltet står der preparerte skiløyper eller vanlige skitraséer krysser en veg. Brøytekanter, mørke og vegetasjon kan skjule skiløperen helt fram til kryssingspunktet.',
        faq: [
            { question: 'Hvorfor må jeg være ekstra forsiktig for skiløpere?', answer: 'Skiløpere kan ha høy fart og dårlig mulighet til å stoppe, særlig i nedoverbakke eller på isete spor. Senk farten før kryssingsstedet.' },
            { question: 'Betyr skiltet at skiløpere har et gangfelt?', answer: 'Nei. Skiltet varsler en fare, men oppretter ikke et gangfelt. Du skal likevel kjøre aktpågivende og være klar til å stanse for å unngå fare.' },
        ],
    },
    'ridende': {
        whereYouMeetIt: 'Skiltet står ofte nær ridesentre, staller og ridestier der hest og rytter krysser eller kommer ut i vegen. Hester kan reagere på motorlyd, horn og raske bevegelser.',
        faq: [
            { question: 'Hvordan passerer jeg en hest trygt?', answer: 'Reduser farten tidlig, hold stor sideavstand og passer rolig. Unngå horn, rusing av motor og brå akselerasjon som kan skremme hesten.' },
            { question: 'Må jeg følge tegn fra rytteren?', answer: 'Rytteren kjenner ofte hestens reaksjon og kan be deg vente eller passere saktere. Kjør hensynsfullt og vær klar til å stanse dersom situasjonen blir usikker.' },
        ],
    },
    'tungtrafikkfelt': {
        whereYouMeetIt: 'Tungtrafikkfelt brukes der tunge kjøretøy skal skilles fra annen trafikk, for eksempel på innfartsårer og strekninger med mye lastebiltrafikk. Tallet i lastebilsymbolet viser grensen for tillatt totalvekt.',
        faq: [
            { question: 'Kan en personbil kjøre i tungtrafikkfelt?', answer: 'Som hovedregel nei. Feltet er for motorvogner med tillatt totalvekt høyere enn vekten på skiltet og uniformerte utrykningskjøretøy. Underskilt kan gi flere grupper adgang.' },
            { question: 'Gjelder 7,5 tonn bilens faktiske vekt?', answer: 'Nei. Det er kjøretøyets tillatte totalvekt i vognkortet som avgjør, ikke den aktuelle vekten eller hvor mye last kjøretøyet har med.' },
        ],
    },
    'slutt-pa-tungtrafikkfelt': {
        whereYouMeetIt: 'Skiltet står der det reserverte tungtrafikkfeltet opphører. Store kjøretøy kan måtte flette inn i ordinære felt, slik at du bør følge ekstra godt med på blinklys og blindsoner.',
        faq: [
            { question: 'Hva oppheves av skilt 507?', answer: 'Den særskilte reguleringen som tungtrafikkfelt oppheves. Andre skilt, fartsgrenser og vegoppmerking gjelder fortsatt.' },
            { question: 'Hva bør jeg gjøre når tungtrafikkfeltet slutter?', answer: 'Tilpass fart og avstand slik at store kjøretøy kan skifte felt på en trygg måte. Unngå å ligge lenge ved siden av lastebilens førerhus eller tilhenger i blindsonen.' },
        ],
    },
    'holdeplass-for-sporvogn': {
        whereYouMeetIt: 'Skiltet markerer trikkeholdeplasser i bytrafikk. På holdeplasser uten trafikkøy kan passasjerene måtte gå direkte over kjørebanen mellom fortauet og sporvognen.',
        faq: [
            { question: 'Kan jeg passere en sporvogn som står på holdeplass?', answer: 'Ved passering på høyre side av sporvogn på holdeplass uten trafikkøy skal du stanse og gi fri veg for passasjerer som går av eller vil gå på.' },
            { question: 'Hvor nær holdeplasskiltet kan jeg stanse?', answer: 'Det er forbudt å stanse i holdeplassutvidelsen eller nærmere enn 20 meter fra skiltet. Kort av- eller påstigning er unntatt når den ikke hindrer sporvognen.' },
        ],
    },
    'automatisk-trafikkontroll-punktmaling': {
        whereYouMeetIt: 'Skiltet varsler en vanlig fotoboks eller et annet automatisk målepunkt. Kameraet registrerer farten når kjøretøyet passerer det bestemte punktet.',
        faq: [
            { question: 'Hva er forskjellen på punktmåling og strekningsmåling?', answer: 'Punktmåling registrerer farten ved ett sted og vises med ett kamera. Strekningsmåling beregner gjennomsnittsfarten mellom kontrollpunkter og vises med to kameraer.' },
            { question: 'Bør jeg bremse ved selve fotoboksen?', answer: 'Tilpass farten tidlig og jevnt. Bråbremsing rett foran boksen kan skape fare for trafikken bak, og fartsgrensen gjelder på hele strekningen.' },
        ],
    },
    'videokontroll-overvaking': {
        whereYouMeetIt: 'Videokontroll brukes blant annet i tunneler, på trafikkerte veger og i områder som overvåkes av sikkerhets- eller trafikkstyringshensyn. Skiltet viser et skråstilt overvåkingskamera.',
        faq: [
            { question: 'Betyr videoovervåkingsskiltet at farten måles?', answer: 'Ikke nødvendigvis. Skilt 558 opplyser om videokontroll eller overvåking. Automatisk fartskontroll varsles med skilt 556.1 eller 556.2.' },
            { question: 'Hvordan skiller jeg 558 fra fotoboksskiltet?', answer: 'Skilt 558 viser et skråstilt overvåkingskamera på en stolpe. Punktmåling viser et vanlig kamerasymbol med bølger, mens strekningsmåling viser to kameraer.' },
        ],
    },
    'dyr-rein': {
        whereYouMeetIt: 'Reinskiltet brukes i reinbeiteområder og ved flyttleier, særlig i Nord-Norge og fjellområder. Skiltingen kan være mest aktuell i perioder når rein drives eller trekker mellom beiteområder.',
        faq: [
            { question: 'Hva betyr skilt 146.2 Rein?', answer: 'Det varsler at rein ofte ferdes over eller langs vegen. Senk farten og forvent flere dyr selv om du først bare ser én.' },
            { question: 'Hvordan kjører jeg forbi en reinflokk?', answer: 'Vent om nødvendig, og passer rolig når vegen er klar. Unngå horn og høyt motorturtall som kan spre eller skremme flokken.' },
        ],
    },
    'dyr-hjort': {
        whereYouMeetIt: 'Hjorteskiltet står på strekninger med kjente trekk og mange observasjoner eller påkjørsler av hjort og rådyr. Risikoen er ofte størst ved skogkanter og i skumring eller grålysning.',
        faq: [
            { question: 'Gjelder hjorteskiltet også rådyr?', answer: 'Skilt 146.3 brukes som hjortevariant og kan også varsle strekninger der rådyr er problemet. Betydningen er at dyr ofte ferdes over eller langs vegen.' },
            { question: 'Hva gjør jeg når én hjort har krysset?', answer: 'Hold farten nede og se etter flere dyr fra samme side. Hjort og rådyr beveger seg ofte flere sammen.' },
        ],
    },
    'dyr-ku': {
        whereYouMeetIt: 'Kuskiltet brukes ved beiteområder, setergrender og faste kryssingssteder der storfe ofte kommer ut i eller over vegen. Skiltet kan være sesongbasert.',
        faq: [
            { question: 'Hva betyr fareskiltet med ku?', answer: 'Det varsler at storfe ofte krysser eller oppholder seg på eller langs vegen. Vær klar til å stanse for hele flokken.' },
            { question: 'Kan jeg kjøre mellom kyrne hvis det er en åpning?', answer: 'Vent til dyrene er under kontroll og du tydelig ser at passering er trygg. En ku kan snu brått eller følge resten av flokken tilbake.' },
        ],
    },
    'dyr-sau': {
        whereYouMeetIt: 'Sauevarianten står på veger gjennom beiteområder der sau og lam ofte oppholder seg i grøften eller kjørebanen. Faren kan være størst i beite- og sankesesongen.',
        faq: [
            { question: 'Hva betyr skilt 146.5 Sau?', answer: 'Det varsler at sau ofte ferdes over eller langs vegen. Se også etter lam, som kan komme etter et voksent dyr.' },
            { question: 'Hvordan bør jeg passere sau langs vegen?', answer: 'Senk farten kraftig, hold god avstand og vær forberedt på at dyret snur. Bruk ikke horn med mindre det er nødvendig for å avverge fare.' },
        ],
    },
    'forbudt-for-traktor-og-saktegaende-motorredskap': {
        whereYouMeetIt: 'Skiltet brukes på veger der traktorer og saktegående motorredskap kan skape farlige fartssprang eller hindre trafikkflyten, for eksempel på enkelte hovedveger, bruer og tunneler.',
        faq: [
            { question: 'Gjelder skiltet bare traktorer som går under 40 km/t?', answer: 'Nei. Alle traktorer er forbudt. Kravet om konstruktiv fart under 40 km/t gjelder den andre gruppen: motorredskap.' },
            { question: 'Kan en vanlig personbil passere skilt 306.3?', answer: 'Ja. Forbudet gjelder traktorer og bestemte motorredskap, ikke personbiler, med mindre annen skilting sier noe annet.' },
        ],
    },
    'forbudt-for-motorsykkel-og-moped': {
        whereYouMeetIt: 'Skiltet kan stå på veger eller områder der motorsykkel- og mopedtrafikk er forbudt av sikkerhets-, miljø- eller reguleringshensyn.',
        faq: [
            { question: 'Gjelder skilt 306.4 også for moped?', answer: 'Ja. Skiltforskriften sier uttrykkelig at forbudet gjelder både motorsykkel og moped.' },
            { question: 'Er dette det samme som forbudt for motorvogn?', answer: 'Nei. Et generelt motorvognforbud omfatter langt flere kjøretøy. Skilt 306.4 retter seg bare mot motorsykkel og moped.' },
        ],
    },
    'forbudt-for-lastebil-og-trekkbil': {
        whereYouMeetIt: 'Skiltet brukes i trange bygater, boligområder og på veger der lastebil- og trekkbiltrafikk bør ledes til en annen rute. Underskilt kan gi unntak for eksempelvis varelevering.',
        faq: [
            { question: 'Gjelder lastebilforbudet bare tunge lastebiler?', answer: 'Skilt 306.5 gjelder kjøretøytypene lastebil og trekkbil. Dersom forbudet bare skal gjelde over en bestemt tillatt totalvekt, brukes et vektskilt som 310.' },
            { question: 'Er en tom lastebil unntatt?', answer: 'Nei. Forbudet følger kjøretøytypen og gjelder også når lastebilen er tom, med mindre underskilt gir et unntak.' },
        ],
    },
    'forbudt-for-gaende': {
        whereYouMeetIt: 'Fotgjengerforbud brukes på strekninger som ikke er sikre for gående, blant annet ved enkelte tunneler, bruer, anleggsområder og veger uten gangareal.',
        faq: [
            { question: 'Gjelder skilt 306.7 også syklister?', answer: 'Nei, skiltet retter seg bare mot gående. Dersom også syklende og liten elektrisk motorvogn skal forbys, brukes andre varianter som 306.8.' },
            { question: 'Kan jeg gå på fortauet forbi skiltet?', answer: 'Skiltet gjelder etter sitt innhold for den aktuelle vegen og retningen. Følg anvist alternativ og ikke anta at fortauet gir et unntak uten at dette er skiltet.' },
        ],
    },
    'forbudt-for-ridende': {
        whereYouMeetIt: 'Skiltet brukes der ridning ikke er tillatt, for eksempel på veger, turveger eller områder der hestetrafikk skaper fare eller konflikt med annen ferdsel.',
        faq: [
            { question: 'Hva er forskjellen på 306.9 og fareskilt 155?', answer: '306.9 er rundt og forbyr ridning. Skilt 155 er trekantet og varsler bilføreren om at ryttere ofte krysser eller rir ut i vegen.' },
            { question: 'Gjelder forbudet bilførere?', answer: 'Nei, forbudet retter seg mot ridende. Bilførere kan passere hvis ikke andre skilt begrenser ferdselen.' },
        ],
    },
    'forbudt-for-liten-elektrisk-motorvogn': {
        whereYouMeetIt: 'Skiltet brukes i sentrumsområder, parker og andre steder der elsparkesykler og tilsvarende små elektriske motorvogner ikke skal brukes. Forbudet omfatter både veg og fortau.',
        faq: [
            { question: 'Gjelder skilt 306.10 elsparkesykkel?', answer: 'Ja. Elsparkesykkel er det vanligste eksemplet på liten elektrisk motorvogn, og kan ikke brukes forbi skiltet.' },
            { question: 'Kan jeg kjøre på fortauet i stedet?', answer: 'Nei. Skiltforskriften presiserer at forbudet gjelder ferdsel både på veg og fortau med liten elektrisk motorvogn.' },
        ],
    },
    'totalvektgrense-for-kjoretoy': {
        whereYouMeetIt: 'Skilt 318.1 står ofte før bruer, svake veger og andre konstruksjoner med begrenset bæreevne. Tallet varierer etter hvor stor aktuell totalvekt vegen tåler.',
        faq: [
            { question: 'Hva betyr aktuell totalvekt?', answer: 'Det er hva kjøretøyet faktisk veier akkurat nå, inkludert fører, passasjerer, drivstoff og last. Det er ikke det samme som tillatt totalvekt i vognkortet.' },
            { question: 'Hvordan vurderes et vogntog ved skilt 318.1?', answer: 'Hvert kjøretøy vurderes for seg. Både trekkjøretøyet og tilhengeren må hver for seg ha aktuell totalvekt innenfor skiltets grense.' },
        ],
    },
    'totalvektgrense-for-vogntog': {
        whereYouMeetIt: 'Skilt 318.2 brukes før veger og bruer der den samlede belastningen fra trekkjøretøy og tilhenger må begrenses. Vogntogsymbolet viser at vektene skal ses i sammenheng.',
        faq: [
            { question: 'Skal jeg legge sammen vektene ved skilt 318.2?', answer: 'Ja. Samlet aktuell totalvekt for trekkjøretøy og tilhenger må ikke være høyere enn tallet på skiltet.' },
            { question: 'Gjelder skiltet også et enkelt kjøretøy?', answer: 'Ja. Skiltforskriften sier at forbudet også gjelder et enkelt kjøretøy dersom dets aktuelle totalvekt er høyere enn den angitte grensen.' },
        ],
    },
    'rasteplass-med-toalett': {
        whereYouMeetIt: 'Skilt 613.2 står før eller ved rasteplasser som har toalett. Det er særlig nyttig på lengre strekninger, der neste stoppested kan ligge langt unna.',
        faq: [
            { question: 'Hva er forskjellen på skilt 613.1 og 613.2?', answer: 'Begge viser rasteplass. Variant 613.2 har i tillegg WC-symbol og opplyser dermed at rasteplassen har toalett.' },
            { question: 'Betyr skiltet at rasteplassen har bensinstasjon eller matservering?', answer: 'Nei. Skiltet lover bare rasteplass og toalett. Drivstoff, lading og servering vises med egne servicesymboler.' },
        ],
    },
}

export function getSignExtra(slug: string): TrafficSignExtra | undefined {
    return trafficSignExtras[slug]
}
