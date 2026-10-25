import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { ChevronRight } from 'lucide-react'
import Link from './InternalLink'
import { trackEvent } from '../utils/analytics'

// «Mer enn spørsmål» på forsiden: én modul med faner i stedet for kort, demo og skiltguide under hverandre.
// Alle panelene ligger i HTML-en (inaktive er skjult), så lenkene kan crawles. Rundkjøringsdemoen lastes
// først når noen velger fanen.
type Fane = {
    id: string
    fane: string
    label: string
    title: string
    text: string
    image?: string
    signs?: boolean
    demo?: boolean
    links: { text: string; to: string; external?: boolean }[]
}

const FANER: Fane[] = [
    {
        id: 'spill', fane: 'Spill', label: '5 læringsspill', title: 'Lær gjennom spill', image: '/images/forside/laeringsspill.webp',
        text: 'Korte spill om vikeplikt, skilt, stopplengde, veimerking og parkering. Du får forklaring etter hver oppgave, og du trenger ikke logge inn.',
        links: [{ text: 'Vikepliktspillet', to: '/laeringsspill/vikeplikt' }, { text: 'Skiltduellen', to: '/laeringsspill/skiltduellen' }, { text: 'Alle spillene', to: '/laeringsspill' }],
    },
    {
        id: 'filmer', fane: 'Filmer', label: '7 forklaringsfilmer', title: 'Se det forklart', image: '/images/forside/forklaringsfilm.webp',
        text: 'Korte animasjoner med forteller og skjermtekst, rett i artiklene. Om rundkjøring, vikeplikt, forbikjøring, stopplengde og mer.',
        links: [{ text: 'Rundkjøring', to: '/laeringsressurser/rundkjoring' }, { text: 'Vikeplikt', to: '/laeringsressurser/vikeplikt' }, { text: 'Stopplengde', to: '/laeringsressurser/bremselengde' }],
    },
    {
        id: '3d', fane: '3D', label: '3D og interaktivt', title: 'Utforsk bilen', image: '/images/forside/bilens-lys.webp',
        text: 'Se bilens lys i 3D, og finn fram i motorrommet før sikkerhetskontrollen på oppkjøringen.',
        links: [{ text: 'Bilens lys i 3D', to: '/laeringsressurser/bilens-lys' }, { text: 'Motorrommet', to: '/laeringsressurser/sikkerhetskontroll' }],
    },
    {
        id: 'kalkulatorer', fane: 'Kalkulatorer', label: 'Kalkulatorer', title: 'Regn det ut', image: '/images/forside/kalkulator.webp',
        text: 'Regn ut stopplengden i ulik fart, og sjekk hvor tung tilhenger du kan trekke med førerkortet ditt.',
        links: [{ text: 'Bremselengde og stopplengde', to: '/laeringsressurser/bremselengde' }, { text: 'Tilhengerkalkulator', to: '/laeringsressurser/tilhengerkalkulator' }],
    },
    {
        id: 'skilt', fane: 'Skilt', label: '250 norske trafikkskilt', title: 'Skiltguide', signs: true,
        text: 'Alle skiltgruppene forklart, med de vanligste misforståelsene ved hvert skilt. Test deg etterpå.',
        links: [{ text: 'Åpne skiltguiden', to: '/trafikkskilt' }, { text: 'Skilttest', to: '/quiz/skilt' }, { text: 'Skiltduellen', to: '/laeringsspill/skiltduellen' }],
    },
    {
        id: 'rundkjoring', fane: 'Rundkjøringsdemo', label: 'Interaktiv demo', title: 'Rundkjøring: plassering, tegn og vikeplikt', demo: true,
        text: 'Firearmet rundkjøring med ett kjørefelt. Du kommer inn nedenfra. Trafikken kjører til høyre om midtøya.',
        links: [{ text: 'Åpne hele demoen', to: '/rundkjoring-visning.html', external: true }, { text: 'Artikkel og film om rundkjøring', to: '/laeringsressurser/rundkjoring' }],
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

function RundkjoringDemoFrame() {
    const frame = useRef<HTMLIFrameElement>(null)
    const [height, setHeight] = useState(720)
    useEffect(() => {
        const el = frame.current
        if (!el) return
        const syncTheme = () => el.contentWindow?.postMessage({ type: 'teori-test-theme', theme: document.body.classList.contains('dark-mode') ? 'dark' : 'light' }, '*')
        const onMessage = (event: MessageEvent) => {
            if (event.source !== el.contentWindow) return
            if (event.data?.type === 'roundabout-ready') syncTheme()
            if (event.data?.type === 'roundabout-height') setHeight(Math.max(360, Math.min(1100, Number(event.data.height) || 0)))
        }
        window.addEventListener('message', onMessage)
        window.addEventListener('teori-test-theme-change', syncTheme)
        el.addEventListener('load', syncTheme)
        return () => { window.removeEventListener('message', onMessage); window.removeEventListener('teori-test-theme-change', syncTheme); el.removeEventListener('load', syncTheme) }
    }, [])
    return (
        <iframe ref={frame} className="tt-v2-showcase-demo" src="/rundkjoring-visning.html?embed=1"
            title="Interaktiv demonstrasjon av plassering, tegn og vikeplikt i rundkjøring" scrolling="no" style={{ height: `${height}px` }} />
    )
}

export default function MerEnnSporsmal() {
    const id = useId()
    const [aktiv, setAktiv] = useState(FANER[0].id)
    const [demoLastet, setDemoLastet] = useState(false)
    const tabs = useRef<(HTMLButtonElement | null)[]>([])

    const velg = (fane: string, fokus = false) => {
        setAktiv(fane)
        if (fane === 'rundkjoring') setDemoLastet(true)
        if (fokus) tabs.current[FANER.findIndex(f => f.id === fane)]?.focus()
        trackEvent('forside_fane', { fane })
    }
    const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
        const i = FANER.findIndex(f => f.id === aktiv)
        const next = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? FANER.length - 1 : -2
        if (next === -2) return
        e.preventDefault()
        velg(FANER[(next + FANER.length) % FANER.length].id, true)
    }

    return (
        <div className="tt-v2-showcase">
            <div className="tt-v2-showcase-tabs" role="tablist" aria-label="Velg hva du vil utforske" onKeyDown={onKey}>
                {FANER.map((f, i) => (
                    <button key={f.id} ref={el => { tabs.current[i] = el }} type="button" role="tab" id={`${id}-tab-${f.id}`}
                        aria-selected={aktiv === f.id} aria-controls={`${id}-panel-${f.id}`} tabIndex={aktiv === f.id ? 0 : -1}
                        className="tt-v2-showcase-tab" onClick={() => velg(f.id)}>
                        {f.fane}
                    </button>
                ))}
            </div>
            {FANER.map(f => (
                <div key={f.id} role="tabpanel" id={`${id}-panel-${f.id}`} aria-labelledby={`${id}-tab-${f.id}`}
                    hidden={aktiv !== f.id} className={`tt-v2-showcase-panel${f.demo ? ' is-demo' : ''}`}>
                    {f.demo ? (
                        <>
                            <div className="tt-v2-showcase-copy is-wide">
                                <span className="tt-v2-roundabout-label">{f.label}</span>
                                <h3>{f.title}</h3>
                                <p>{f.text}</p>
                                <Lenker links={f.links} />
                            </div>
                            {demoLastet && <RundkjoringDemoFrame />}
                        </>
                    ) : (
                        <>
                            <div className="tt-v2-showcase-media">
                                {f.signs ? (
                                    <div className="tt-v2-showcase-signs" aria-hidden="true">
                                        <img src="/signs/vikeplikt.svg" alt="" loading="lazy" decoding="async" />
                                        <img src="/signs/stopp.svg" alt="" loading="lazy" decoding="async" />
                                        <img src="/signs/forkjorsvei.svg" alt="" loading="lazy" decoding="async" />
                                        <img src="/signs/forbudsskilt/skilt-362-50-fartsgrense.jpg" alt="" loading="lazy" decoding="async" />
                                    </div>
                                ) : (
                                    <img src={f.image} alt="" width={640} height={360} loading="lazy" decoding="async" />
                                )}
                            </div>
                            <div className="tt-v2-showcase-copy">
                                <span className="tt-v2-roundabout-label">{f.label}</span>
                                <h3>{f.title}</h3>
                                <p>{f.text}</p>
                                <Lenker links={f.links} />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}
