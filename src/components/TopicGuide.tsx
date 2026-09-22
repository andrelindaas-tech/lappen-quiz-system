import { useRef } from 'react'
import Link from './InternalLink'
import './TopicGuide.css'

// The grouping is an editorial guide, not the official curriculum taxonomy.
const groups: { title: string; goal: string; items: [string, string, string][]; practice?: [string, string] }[] = [
    { title: 'Vikeplikt og kryss', goal: 'Avgjør hvem som skal kjøre først.', items: [
        ['vikeplikt', 'Vikeplikt og høyreregel', 'Finn riktig regel, også når du møter gående og syklister.'],
        ['rundkjoring', 'Rundkjøring', 'Vurder vikeplikt, plassering og blinklys.'],
        ['trafikklys-signaler', 'Trafikklys og signaler', 'Forstå lysene og hvilke anvisninger som går foran andre.'],
        ['buss-fra-holdeplass', 'Buss fra holdeplass', 'Vit når du skal slippe bussen ut.'],
        ['trikk-og-vikeplikt', 'Trikk og vikeplikt', 'Forstå særreglene når du møter trikken.'],
        ['rygging-og-vending', 'Rygging og vending', 'Kontroller sikt, plass og vikeplikt før du flytter bilen.']
    ], practice: ['/quiz/vikeplikt/', 'Øv på vikeplikt'] },
    { title: 'Trafikkskilt', goal: 'Les skiltene og forstå hva de betyr for deg.', items: [
        ['skilt', 'Skiltgrupper og betydning', 'Skill mellom fare, forbud, påbud og informasjon.'],
        ['planovergang-regler', 'Planovergang', 'Vurder lys, bommer og kryssing av jernbane.']
    ], practice: ['/trafikkskilt/', 'Utforsk skiltguiden'] },
    { title: 'Fart og plassering', goal: 'Tilpass farten og velg riktig plass på veien.', items: [
        ['fartsgrenser', 'Fartsgrenser', 'Skill mellom tillatt fart og forsvarlig fart.'],
        ['feltvalg-fletting-kollektivfelt', 'Feltvalg og fletting', 'Lær feltskifte, fletting, enveiskjøring og kontroll av blindsoner.'],
        ['forbikjoring', 'Forbikjøring', 'Vurder sikt og sikkerhetsmarginer, også når du passerer syklister.'],
        ['kollektivfelt-og-elbil', 'Kollektivfelt', 'Les vilkårene for hvem som kan bruke feltet.'],
        ['motorvei-regler', 'Motorvei', 'Planlegg påkjøring og avkjøring, og hold avstand til bilen foran.'],
        ['lysbruk-morkekjoring', 'Lysbruk og mørkekjøring', 'Tilpass lys og fart når sikten blir dårlig.']
    ] },
    { title: 'Bremselengde og reaksjonstid', goal: 'Forstå hvor langt bilen beveger seg før den stanser.', items: [
        ['bremselengde', 'Reaksjonslengde, bremselengde og stopplengde', 'Se hvordan fart og føre påvirker strekningen.'],
        ['reaksjonstid', 'Reaksjonstid', 'Se hvordan uoppmerksomhet påvirker tiden før du bremser.'],
        ['glatt-fore', 'Glatt føre og veigrep', 'Tilpass fart, avstand og kjøring til underlaget.']
    ] },
    { title: 'Parkering og stans', goal: 'Vurder hvor du kan stoppe og sette fra deg bilen.', items: [
        ['stans-og-parkering', 'Stans og parkering', 'Skill mellom stans og parkering, og lær avstandsreglene.'],
        ['rygging-og-vending', 'Inn og ut av parkeringsplassen', 'Kontroller området rundt bilen og frontens utsving.'],
        ['tunnelsikkerhet', 'Stans i tunnel', 'Vit hva du gjør ved kø, motorstopp og brann.']
    ] },
    { title: 'Veimerking', goal: 'Bruk linjer og symboler til å forstå veien.', items: [
        ['veimerking', 'Linjer, piler og symboler', 'Skill mellom sperrelinje, varsellinje og annen oppmerking.'],
        ['feltvalg-fletting-kollektivfelt', 'Oppmerking ved feltskifte og fletting', 'Se hvordan oppmerkingen påvirker plassering og vikeplikt.']
    ] },
    { title: 'Kjøretøy og teknisk', goal: 'Kjenn bilen og kontroller at den er trygg å bruke.', items: [
        ['dekk-bremser-styring', 'Dekk, bremser og styring', 'Forstå veigrep og tegn på feil.'],
        ['sikkerhetskontroll', 'Sikkerhetskontroll', 'Vit hva du skal kontrollere før kjøring.'],
        ['bilens-lys', 'Bilens lys', 'Prøv lysene på en 3D-bil og lær når du bruker dem.'],
        ['varsellamper-i-bilen', 'Varsellamper', 'Vurder når du må stanse og undersøke bilen.'],
        ['vognkort-vekter', 'Vognkort og vekter', 'Finn tillatte vekter og opplysninger om kjøretøyet.'],
        ['tilhenger', 'Tilhenger', 'Vurder førerrett, vekt og sikker kjøring.'],
        ['forerstottesystemer', 'Førerstøttesystemer', 'Forstå hjelpen fra bilen og ansvaret du beholder.']
    ], practice: ['/laeringsressurser/tilhengerkalkulator/', 'Prøv tilhengerkalkulatoren'] },
    { title: 'Trafikanter og samspill', goal: 'Forstå deg selv og ta hensyn til andre.', items: [
        ['kjoreprosessen-og-risiko', 'Kjøreprosessen og risiko', 'Oppdag, vurder og håndter situasjoner i trafikken.'],
        ['syn-og-fartsblindhet', 'Syn og fartsblindhet', 'Forstå hvordan sansene påvirker vurderingene dine.'],
        ['trotthet-og-mikrosovn', 'Trøtthet og mikrosøvn', 'Kjenn igjen tegn på at du bør stanse.'],
        ['medisiner-og-bilkjoring', 'Medisiner og bilkjøring', 'Vurder om du er i stand til å kjøre trygt.'],
        ['miljo', 'Miljøvennlig kjøring', 'Planlegg kjøringen og reduser unødvendig energibruk.'],
        ['ovingskjoring', 'Øvelseskjøring', 'Forstå rollene og kravene ved privat øving.']
    ] },
    { title: 'Sikkerhet og førstehjelp', goal: 'Forebygg skader og vit hva du gjør når noe skjer.', items: [
        ['sikkerhetsutstyr', 'Sikkerhetsutstyr', 'Lær om bilbelter og sikring av passasjerer og last.'],
        ['barn-i-bil-og-sikring', 'Barn i bil', 'Velg og bruk riktig sikring.'],
        ['trafikkuhell-forstehjelp', 'Trafikkuhell og førstehjelp', 'Sikre, varsle og hjelpe ved en ulykke.'],
        ['promille', 'Promille og rus', 'Forstå hvordan rus påvirker kjøreevnen og ansvaret.'],
        ['tunnelsikkerhet', 'Sikkerhet i tunnel', 'Velg riktig handling ved nødsituasjoner.']
    ] },
    { title: 'Lover og ansvar', goal: 'Forstå pliktene dine som fører og eier.', items: [
        ['vegtrafikkloven-paragraf-3', 'Grunnregelen i trafikken', 'Kjør hensynsfullt, aktpågivende og varsomt.'],
        ['myndighetspyramiden', 'Hva gjelder foran hva?', 'Prioriter anvisninger, lys, skilt og regler riktig.'],
        ['plikter-ved-ulykke', 'Plikter ved ulykke', 'Vit når og hvordan du skal stanse og hjelpe.'],
        ['forsikring-og-ansvar', 'Forsikring og ansvar', 'Skill mellom forsikringsdekning og føreransvar.'],
        ['prikker-pa-forerkortet', 'Prikker på førerkortet', 'Forstå prikkbelastning og prøveperiode.'],
        ['boter-og-forelegg', 'Bøter og forelegg', 'Skill mellom ulike reaksjoner på overtredelser.'],
        ['forerkortbeslag', 'Førerkortbeslag', 'Forstå forskjellen på beslag og tap av førerrett.']
    ] }
]

const interactiveArticles: Record<string, string> = {
    'bilens-lys': 'Interaktiv 3D-modell',
    'rygging-og-vending': 'Interaktive situasjoner',
    'rundkjoring': 'Interaktiv øvelse',
    'buss-fra-holdeplass': 'Situasjonsoppgaver',
    'stans-og-parkering': 'Situasjonsoppgaver',
    'bremselengde': 'Kalkulator',
    'reaksjonstid': 'Reaksjonstest',
    'sikkerhetskontroll': 'Interaktiv gjennomgang',
    'varsellamper-i-bilen': 'Interaktiv øvelse',
    'vognkort-vekter': 'Interaktivt vognkort',
    'barn-i-bil-og-sikring': 'Situasjonsoppgaver'
}
const featured: Record<string, { href: string; title: string; description: string; kind: string }> = {
    'Vikeplikt og kryss': { href: '/laeringsspill/vikeplikt/', title: 'Hvem kjører først?', description: 'Velg rekkefølgen i krysset og øv på å bruke vikepliktsreglene.', kind: 'Situasjonsspill' },
    'Trafikkskilt': { href: '/laeringsspill/skiltduellen/', title: 'Kjenner du igjen skiltet?', description: 'Test skiltkunnskapene dine i Skiltduellen.', kind: 'Skiltspill' },
    'Bremselengde og reaksjonstid': { href: '/laeringsspill/stopplengde/', title: 'Rekker du å stoppe?', description: 'Prøv stopplengdeutfordringen og utforsk avstanden bilen trenger.', kind: 'Interaktiv utfordring' },
    'Veimerking': { href: '/laeringsspill/veimerking/', title: 'Forstår du linjene på veien?', description: 'Øv på å kjenne igjen og tolke veimerking.', kind: 'Læringsspill' },
    'Kjøretøy og teknisk': { href: '/laeringsressurser/tilhengerkalkulator/', title: 'Hvilken førerkortklasse trenger du?', description: 'Legg inn tillatte totalvekter for bil og tilhenger og se hvilken førerkortklasse vektene krever.', kind: 'Kalkulator' }
}

export default function TopicGuide() {
    const root = useRef<HTMLDivElement>(null)
    const toggleAll = (open: boolean) => root.current?.querySelectorAll('details').forEach(section => { section.open = open })
    return <div className="topic-guide" ref={root}>
        <div className="topic-guide-tools"><button type="button" onClick={() => toggleAll(true)}>Vis alle</button><button type="button" onClick={() => toggleAll(false)}>Lukk alle</button></div>
        {groups.map((group, index) => {
            const feature = featured[group.title]
            const count = group.items.filter(([id]) => interactiveArticles[id]).length + (feature ? 1 : 0)
            return <details key={group.title} open={index === 0}>
                <summary><span className="topic-guide-number" aria-hidden="true">{index + 1}</span><span className="topic-guide-label"><strong>{group.title}</strong><span>{group.goal}</span><small>{group.items.length} undertemaer{count > 0 && <span className="topic-guide-count"> · {count} {count === 1 ? 'interaktiv ressurs' : 'interaktive ressurser'}</span>}</small></span><span className="topic-guide-toggle" aria-hidden="true" /></summary>
                {feature && <div className="topic-guide-feature"><p className="topic-guide-feature-label">Lær ved å prøve <span>· {feature.kind}</span></p><Link to={feature.href}><strong>{feature.title}</strong><span>{feature.description}</span><span className="topic-guide-try">{feature.kind === 'Kalkulator' ? 'Prøv kalkulatoren' : 'Prøv øvelsen'} <span aria-hidden="true">→</span></span></Link></div>}
                <ul>{group.items.map(([id, title, goal]) => <li key={id}><Link to={`/laeringsressurser/${id}/`}><span><strong>{title}</strong>{interactiveArticles[id] && <span className="topic-guide-badge">{interactiveArticles[id]}</span>}<span>{goal}</span></span><span aria-hidden="true">→</span></Link></li>)}</ul>
                {group.practice && group.practice[0] !== feature?.href && <Link className="topic-guide-practice" to={group.practice[0]}>{group.practice[1]} <span aria-hidden="true">→</span></Link>}
            </details>
        })}
    </div>
}
