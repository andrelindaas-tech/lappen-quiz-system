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
}

export function getSignExtra(slug: string): TrafficSignExtra | undefined {
    return trafficSignExtras[slug]
}
