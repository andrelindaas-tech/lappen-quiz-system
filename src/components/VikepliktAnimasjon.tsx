import { useEffect, useRef, useState } from 'react'
import { trackEvent } from '../utils/analytics'
import { VIKEPLIKT_SCENARIER } from '../data/vikepliktAnimasjonScenarier'
import './VikepliktAnimasjon.css'

const bilde = (slug: string) => `/images/vikeplikt/animasjon/vikeplikt-${slug}.webp`
const altTekst = (s: { name: string; first: string; setup: string }) => `${s.name}, sett ovenfra: ${s.setup} ${s.first} kjører først.`

// Interaktiv vikeplikt-animasjon (åtte situasjoner, «Se animasjon» og «Test deg selv»).
// Google leser ikke canvas. Derfor vises først et stillbilde (WebP) fra animasjonen, og
// under animasjonen står alle åtte situasjonene som vanlig tekst med eget stillbilde.
// Animasjonskoden lastes først når boksen nærmer seg skjermen, så artikkelen ikke blir tregere.
export default function VikepliktAnimasjon() {
    const root = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = root.current
        if (!el) return
        if (!('IntersectionObserver' in window)) { setVisible(true); return }
        const io = new IntersectionObserver((entries) => {
            if (entries.some((e) => e.isIntersecting)) { setVisible(true); io.disconnect() }
        }, { rootMargin: '300px' })
        io.observe(el)
        return () => io.disconnect()
    }, [])

    useEffect(() => {
        if (!visible || !root.current) return
        let cleanup: (() => void) | undefined
        let cancelled = false
        import('./vikepliktAnimasjonEngine').then(({ mountVikepliktAnimasjon }) => {
            if (cancelled || !root.current) return
            cleanup = mountVikepliktAnimasjon(root.current)
            trackEvent('game_view', { game_name: 'vikeplikt_animasjon' })
        })
        return () => { cancelled = true; cleanup?.() }
    }, [visible])

    return (
        <div className="vpa" ref={root}>
            <h3>Se vikeplikten i åtte situasjoner</h3>
            <p className="vpa-sub">Sett ovenfra. Animasjonen viser situasjonene etter tur. Trykk på en situasjon for å velge selv, eller test deg selv før svaret vises.</p>
            <div className="vpa-row">
                <div className="vpa-tabs" id="vpa-tabs" role="group" aria-label="Velg situasjon" />
                <div className="vpa-seg" id="vpa-modes" role="group" aria-label="Velg visning">
                    <button type="button" data-m="watch" aria-pressed="true">Se animasjon</button>
                    <button type="button" data-m="quiz" aria-pressed="false">Test deg selv</button>
                </div>
            </div>
            {visible
                ? <canvas id="vpa-cv" aria-label="Animasjon av vikeplikt sett ovenfra" />
                : <img className="vpa-poster" src={bilde(VIKEPLIKT_SCENARIER[0].slug)} alt={altTekst(VIKEPLIKT_SCENARIER[0])} width="1200" height="576" />}
            <div className="vpa-ctl">
                <button id="vpa-play" type="button">⏸ Pause</button>
                <button id="vpa-restart" type="button">↺ Fra start</button>
                <label>Hastighet{' '}
                    <select id="vpa-spd" defaultValue="1"><option value="0.5">0,5×</option><option value="1">1×</option><option value="2">2×</option></select>
                </label>
                <input id="vpa-scrub" type="range" min="0" max="1000" defaultValue="0" aria-label="Tidslinje" />
                <span className="vpa-time" id="vpa-time">0,0 s</span>
            </div>
            <div className="vpa-grid">
                <div className="vpa-card">
                    <h4>Sjekkliste</h4>
                    <ol id="vpa-steps" />
                </div>
                <div className="vpa-card">
                    <h4>Nå</h4>
                    <p className="verdict" id="vpa-verdict" />
                    <div id="vpa-quiz" hidden><p>Hvem kjører først?</p><div id="vpa-qbtns" /></div>
                    <p className="fb" id="vpa-fb" hidden />
                    <p id="vpa-cap" />
                </div>
            </div>
            {/* Lukket som standard så artikkelen ikke blir lengre. Teksten og bildene ligger
                likevel i HTML-en, så Google leser dem. */}
            <details className="vpa-list">
                <summary><h3>De åtte situasjonene forklart</h3><span>Vis bilde og forklaring for hver situasjon</span></summary>
                {VIKEPLIKT_SCENARIER.map((s) => (
                    <figure key={s.id} className="vpa-item">
                        <img src={bilde(s.slug)} alt={altTekst(s)} width="1200" height="576" loading="lazy" />
                        <figcaption>
                            <h4>{s.name}</h4>
                            <p>{s.setup}</p>
                            <p><strong>{s.first} kjører først.</strong> {s.why}</p>
                        </figcaption>
                    </figure>
                ))}
            </details>
        </div>
    )
}
