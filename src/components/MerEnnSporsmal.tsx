import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { ChevronRight, Pause, Play } from 'lucide-react'
import Link from './InternalLink'
import { trackEvent } from '../utils/analytics'

// «Mer enn spørsmål» på forsiden: faner med ett forhåndsvisningsfelt.
// Fanene byttes automatisk mens seksjonen er synlig, til brukeren selv velger en fane eller trykker pause.
// Ingen automatisk visning ved «redusert bevegelse». Alle panelene ligger i HTML-en, så lenkene kan crawles.
type Fane = {
    id: string
    fane: string
    label: string
    title: string
    text: string
    punkter: string[]
    image: string
    alt: string
    links: { text: string; to: string; external?: boolean }[]
}

const VARIGHET_MS = 8000

const FANER: Fane[] = [
    {
        id: 'spill', fane: 'Spill', label: '5 læringsspill', title: 'Lær gjennom spill',
        image: '/images/forside/laeringsspill.webp', alt: 'Vikepliktspillet: kryss sett ovenfra med en rød og en blå bil',
        text: 'Korte spill der du bruker reglene i stedet for bare å lese om dem. Du får forklaring etter hver oppgave, og du trenger ikke logge inn.',
        punkter: [
            'Vikeplikt er et tema mange bommer på. I spillet velger du selv rekkefølgen bilene skal kjøre i, og ser svaret animert.',
            'Skiltduellen trener deg i å kjenne igjen skiltene sikkert, før du møter dem i oppgavene.',
            'Stopplengdespillet viser hvorfor dobbel fart gir fire ganger så lang bremselengde.',
        ],
        links: [{ text: 'Vikepliktspillet', to: '/laeringsspill/vikeplikt' }, { text: 'Skiltduellen', to: '/laeringsspill/skiltduellen' }, { text: 'Alle spillene', to: '/laeringsspill' }],
    },
    {
        id: 'filmer', fane: 'Filmer', label: '7 forklaringsfilmer', title: 'Se det forklart',
        image: '/images/forside/forklaringsfilm.webp', alt: 'Forklaringsfilmen om rundkjøring',
        text: 'Korte animasjoner på to til tre minutter, med forteller og skjermtekst. Du ser situasjonen i bevegelse og forstår hvorfor regelen er som den er.',
        punkter: [
            'Mange oppgaver på prøven viser et bilde av en trafikksituasjon. Filmene trener deg i å lese slike situasjoner.',
            'Hver film tar for seg feil som går igjen, som vikeplikt for buss og feltvalg i rundkjøring.',
            'Teksten fra filmen står under, så du kan lese i ditt eget tempo.',
        ],
        links: [{ text: 'Rundkjøring', to: '/laeringsressurser/rundkjoring' }, { text: 'Vikeplikt', to: '/laeringsressurser/vikeplikt' }, { text: 'Stopplengde', to: '/laeringsressurser/bremselengde' }],
    },
    {
        id: '3d', fane: '3D', label: '3D og interaktivt', title: 'Utforsk bilen',
        image: '/images/forside/bilens-lys.webp', alt: 'Frontlykten på en bil i 3D',
        text: 'Se bilen fra alle kanter, og prøv lysene og motorrommet selv.',
        punkter: [
            'Lysbruk går igjen på teoriprøven. I 3D slår du lysene av og på og ser forskjellen mellom dem.',
            'Motorrommet viser hvor du sjekker olje, kjølevæske og bremsevæske. Det trenger du til spørsmål om bilen på teoriprøven og til sikkerhetskontrollen på førerprøven.',
        ],
        links: [{ text: 'Bilens lys i 3D', to: '/laeringsressurser/bilens-lys' }, { text: 'Motorrommet', to: '/laeringsressurser/sikkerhetskontroll' }],
    },
    {
        id: 'kalkulatorer', fane: 'Kalkulatorer', label: 'Kalkulatorer', title: 'Regn det ut',
        image: '/images/forside/kalkulator.webp', alt: 'Bremselengden ved 15, 30, 60 og 120 km/t',
        text: 'Regn ut stopplengden i ulik fart, og sjekk hvor tung tilhenger du kan trekke.',
        punkter: [
            'Stopplengde er et klassisk prøvetema. I oppgaven vår om dobbel fart svarer over halvparten feil.',
            'Kalkulatoren viser reaksjonslengde og bremselengde hver for seg, så du ser hvor meterne kommer fra.',
            'Tilhengerkalkulatoren viser om du trenger B, B96 eller BE.',
        ],
        links: [{ text: 'Bremselengde og stopplengde', to: '/laeringsressurser/bremselengde' }, { text: 'Tilhengerkalkulator', to: '/laeringsressurser/tilhengerkalkulator' }],
    },
    {
        id: 'skilt', fane: 'Skilt', label: '250 norske trafikkskilt', title: 'Skiltguide',
        image: '', alt: '',
        text: 'Alle skiltgruppene forklart, fra fareskilt til opplysningsskilt.',
        punkter: [
            'Mange oppgaver spør hva et skilt betyr, eller hva du skal gjøre når du ser det.',
            'For skiltene som oftest misforstås, har vi egne guider med vanlige feil og eksempler.',
            'Test deg etterpå med skilttesten eller Skiltduellen.',
        ],
        links: [{ text: 'Åpne skiltguiden', to: '/trafikkskilt' }, { text: 'Skilttest', to: '/quiz/skilt' }, { text: 'Skiltduellen', to: '/laeringsspill/skiltduellen' }],
    },
    {
        id: 'rundkjoring', fane: 'Rundkjøringsdemo', label: 'Interaktiv demo', title: 'Rundkjøring steg for steg',
        image: '/images/forside/rundkjoring-demo.webp', alt: 'Rundkjøring sett ovenfra med rute gjennom rundkjøringen',
        text: 'Velg hvor du skal, og se kjøringen gjennom rundkjøringen steg for steg.',
        punkter: [
            'Viser plassering, vikeplikt og blinklys inn og ut, det du må kunne i rundkjøring.',
            'Du kan sammenligne plasseringen for høyre, rett frem og venstre, og øve selv etterpå.',
        ],
        links: [{ text: 'Åpne demoen', to: '/rundkjoring-visning.html', external: true }, { text: 'Artikkel og film om rundkjøring', to: '/laeringsressurser/rundkjoring' }],
    },
]

function Lenker({ links }: { links: Fane['links'] }) {
    return (
        <ul className="tt-v2-showcase-links">
            {links.map(l => (
                <li key={l.to + l.text}>
                    {l.external
                        ? <a className="tt-v2-text-link" href={l.to} target="_blank" rel="noopener">{l.text} <ChevronRight size={14} aria-hidden="true" /></a>
                        : <Link className="tt-v2-text-link" to={l.to}>{l.text} <ChevronRight size={14} aria-hidden="true" /></Link>}
                </li>
            ))}
        </ul>
    )
}

export default function MerEnnSporsmal() {
    const id = useId()
    const [aktiv, setAktiv] = useState(FANER[0].id)
    const [auto, setAuto] = useState(false)       // automatisk visning slått på (etter innlasting)
    const [stoppet, setStoppet] = useState(false) // brukeren har tatt over
    const [synlig, setSynlig] = useState(false)
    const [hvile, setHvile] = useState(false)     // mus over eller fokus inne i modulen
    const rot = useRef<HTMLDivElement>(null)
    const tabs = useRef<(HTMLButtonElement | null)[]>([])

    useEffect(() => {
        if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
        setAuto(true)
        const el = rot.current
        if (!el || !('IntersectionObserver' in window)) return
        const obs = new IntersectionObserver(([e]) => setSynlig(e.isIntersecting), { threshold: 0.4 })
        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    const kjorer = auto && !stoppet && synlig && !hvile

    const neste = () => setAktiv(a => FANER[(FANER.findIndex(f => f.id === a) + 1) % FANER.length].id)
    const velg = (fane: string, fokus = false) => {
        setStoppet(true)
        setAktiv(fane)
        if (fokus) tabs.current[FANER.findIndex(f => f.id === fane)]?.focus()
        trackEvent('forside_fane', { fane })
    }
    const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
        const i = FANER.findIndex(f => f.id === aktiv)
        const n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? FANER.length - 1 : -2
        if (n === -2) return
        e.preventDefault()
        velg(FANER[(n + FANER.length) % FANER.length].id, true)
    }

    return (
        <div className="tt-v2-showcase" ref={rot}
            onMouseEnter={() => setHvile(true)} onMouseLeave={() => setHvile(false)}
            onFocus={() => setHvile(true)} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setHvile(false) }}>
            <div className="tt-v2-showcase-bar">
                <div className="tt-v2-showcase-tabs" role="tablist" aria-label="Velg hva du vil utforske" onKeyDown={onKey}>
                    {FANER.map((f, i) => (
                        <button key={f.id} ref={el => { tabs.current[i] = el }} type="button" role="tab" id={`${id}-tab-${f.id}`}
                            aria-selected={aktiv === f.id} aria-controls={`${id}-panel-${f.id}`} tabIndex={aktiv === f.id ? 0 : -1}
                            className="tt-v2-showcase-tab" onClick={() => velg(f.id)}>
                            {f.fane}
                        </button>
                    ))}
                </div>
                {auto && !stoppet && (
                    <button type="button" className="tt-v2-showcase-pause" onClick={() => setStoppet(true)} aria-label="Stopp automatisk visning">
                        <Pause size={16} aria-hidden="true" />
                    </button>
                )}
                {auto && stoppet && (
                    <button type="button" className="tt-v2-showcase-pause" onClick={() => setStoppet(false)} aria-label="Start automatisk visning">
                        <Play size={16} aria-hidden="true" />
                    </button>
                )}
            </div>
            {auto && !stoppet && (
                <div className="tt-v2-showcase-progress" aria-hidden="true">
                    <span key={aktiv} style={{ animationDuration: `${VARIGHET_MS}ms`, animationPlayState: kjorer ? 'running' : 'paused' }} onAnimationEnd={neste} />
                </div>
            )}
            {FANER.map(f => (
                <div key={f.id} role="tabpanel" id={`${id}-panel-${f.id}`} aria-labelledby={`${id}-tab-${f.id}`}
                    hidden={aktiv !== f.id} className="tt-v2-showcase-panel">
                    <div className="tt-v2-showcase-media">
                        {f.image ? (
                            <img src={f.image} alt={f.alt} width={640} height={360} loading="lazy" decoding="async" />
                        ) : (
                            <div className="tt-v2-showcase-signs" aria-hidden="true">
                                <img src="/signs/vikeplikt.svg" alt="" loading="lazy" decoding="async" />
                                <img src="/signs/stopp.svg" alt="" loading="lazy" decoding="async" />
                                <img src="/signs/forkjorsvei.svg" alt="" loading="lazy" decoding="async" />
                                <img src="/signs/forbudsskilt/skilt-362-50-fartsgrense.jpg" alt="" loading="lazy" decoding="async" />
                            </div>
                        )}
                    </div>
                    <div className="tt-v2-showcase-copy">
                        <span className="tt-v2-roundabout-label">{f.label}</span>
                        <h3>{f.title}</h3>
                        <p>{f.text}</p>
                        <p className="tt-v2-showcase-why">Slik hjelper det deg på teoriprøven:</p>
                        <ul className="tt-v2-showcase-points">
                            {f.punkter.map(p => <li key={p}>{p}</li>)}
                        </ul>
                        <Lenker links={f.links} />
                    </div>
                </div>
            ))}
        </div>
    )
}
