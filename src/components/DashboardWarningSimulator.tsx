import { useRef, useState } from 'react'
import { dashboardLamps, dashboardQuestions, makeDashboardRound, type LampId } from '../data/dashboardLamps'
import './DashboardWarningSimulator.css'

function LampIcon({ id }: { id: LampId }) {
    const shapes: Record<LampId, React.ReactNode> = {
        oil: <><path d="M9 28h13l8-6h10l13 12 19-9 4 7-23 19H27L17 41H9zM31 15h17M39 15v8M9 29V19h13v9"/><path d="M78 42s-6 8-6 11a6 6 0 0 0 12 0c0-3-6-11-6-11Z"/></>,
        battery: <path d="M14 22h62v35H14zM24 22v-7h11v7M55 22v-7h11v7M24 39h13M54 39h13M60.5 32v14"/>,
        temperature: <path d="M41 41V13a5 5 0 0 1 10 0v28a10 10 0 1 1-10 0ZM52 19h9M52 29h9M46 27v24M10 62q8-7 16 0t16 0 16 0 16 0"/>,
        brake: <><circle cx="45" cy="36" r="23"/><path d="M13 14a38 38 0 0 0 0 44M77 14a38 38 0 0 1 0 44M45 23v17"/><circle cx="45" cy="49" r="2" fill="currentColor"/></>,
        belt: <><circle cx="43" cy="13" r="7"/><path d="m30 29 4-5h16l8 14-6 14H31l-6-18M35 52l-8 12M50 52l9 12M64 20 27 51M28 41l27 9"/></>,
        engine: <path d="M17 28h12V18h29l9 12h9v-5h7v30h-7v-6h-7l-7 8H29L17 46ZM8 30v17M8 38h9M35 10h17M43 10v8"/>,
        abs: <><circle cx="45" cy="36" r="25"/><path d="M12 14a38 38 0 0 0 0 44M78 14a38 38 0 0 1 0 44"/><text x="45" y="42" textAnchor="middle" fontSize="19" fontWeight="800" stroke="none" fill="currentColor">ABS</text></>,
        esp: <path d="m27 32 5-16h24l7 16v17H27ZM29 32h32M33 49v5M57 49v5M32 38h5M53 38h5M33 59q-13 3-4 7M57 59q-13 3-4 7"/>,
        tyre: <><path d="M24 12C13 25 9 46 20 58h50c11-12 7-33-4-46M26 58v6M37 58v6M48 58v6M59 58v6M45 22v20"/><circle cx="45" cy="50" r="2" fill="currentColor"/></>,
        indicator: <path d="M38 28H23V18L7 36l16 18V44h15M52 28h15V18l16 18-16 18V44H52"/>,
        dipped: <path d="M48 17q32 0 32 19T48 55ZM10 29l24-12M10 42l24-12M10 55l24-12M10 68l24-12"/>,
        main: <path d="M48 17q32 0 32 19T48 55ZM9 18h25M9 30h25M9 42h25M9 54h25"/>,
    }
    return <svg viewBox="0 0 90 76" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[id]}</svg>
}
const colors = { red: 'Rød', yellow: 'Gul', green: 'Grønn', blue: 'Blå' }

export default function DashboardWarningSimulator() {
    const [mode, setMode] = useState<'explore' | 'quiz'>('explore')
    const [selectedId, setSelectedId] = useState<LampId>('oil')
    const [blinking, setBlinking] = useState(false)
    const [visited, setVisited] = useState<LampId[]>(['oil'])
    const [round, setRound] = useState(() => dashboardQuestions.slice(0, 5))
    const [answers, setAnswers] = useState<number[]>([])
    const [index, setIndex] = useState(0)
    const [finished, setFinished] = useState(false)
    const [retry, setRetry] = useState(false)
    const heading = useRef<HTMLHeadingElement>(null)
    const question = round[index]
    const answered = answers[index] !== undefined
    const selected = dashboardLamps.find(lamp => lamp.id === (mode === 'quiz' ? question.lamp : selectedId))!
    const isBlinking = mode === 'quiz' ? !!question.blinking : (selected.id === 'indicator' || blinking)
    const score = answers.filter((answer, i) => answer === round[i].correct).length
    const missed = round.filter((q, i) => answers[i] !== q.correct)
    function startRound(onlyMissed = false) {
        setRound(makeDashboardRound(onlyMissed ? missed : dashboardQuestions, onlyMissed ? missed.length : 5))
        setAnswers([]); setIndex(0); setFinished(false); setRetry(onlyMissed); setMode('quiz')
    }
    function next() {
        if (index === round.length - 1) setFinished(true)
        else setIndex(index + 1)
        requestAnimationFrame(() => heading.current?.focus())
    }
    return <div className="dw" aria-label="Interaktivt dashbord">
        <div className="dw-top"><div><span className="dw-eyebrow">BAK RATTET</span><h3>Lær å lese dashbordet</h3></div><span className="dw-count">12 lamper · 2 måter å lære</span></div>
        <div className="dw-modes" role="group" aria-label="Velg læringsmodus">
            <button type="button" aria-pressed={mode === 'explore'} onClick={() => setMode('explore')}>Utforsk lampene</button>
            <button type="button" aria-pressed={mode === 'quiz'} onClick={() => { if (mode !== 'quiz') { if (!answers.length && index === 0) startRound(); else setMode('quiz') } }}>Test deg selv</button>
        </div>
        <p className="dw-intro">{mode === 'explore' ? 'Trykk på en lampe. Lær hva den betyr, og hva du bør gjøre.' : finished ? 'Runden er ferdig. Se hva du kan, og øv videre på det du bommet på.' : 'Se på lampen og les situasjonen. Hva ville du gjort?'}</p>
        {!finished || mode === 'explore' ? <div className="dw-cluster">
            <div className="dw-cluster-top"><span>TEORI-TEST / INSTRUMENTPANEL</span><span className="dw-live">{mode === 'explore' ? `${visited.length} av 12 utforsket` : `${retry ? 'Øv på feil' : 'Kunnskapstest'} · ${index + 1}/${round.length}`}</span></div>
            <div className="dw-instruments" aria-hidden="true"><div className="dw-dial"><span>0</span><small>km/t</small></div><div className="dw-center"><span>SE. FORSTÅ. HANDLE.</span><strong>{mode === 'explore' ? 'Kjenn igjen signalet' : 'Hva forteller lampen?'}</strong><small>{isBlinking ? 'Blinkende lys' : 'Fast lys'} · {colors[selected.color].toLowerCase()} lampe</small></div><div className="dw-dial dw-dial-right"><span>P</span><small>øving</small></div></div>
            <div className="dw-lamps" role="group" aria-label={mode === 'explore' ? 'Velg en lampe' : 'Lamper i instrumentpanelet'}>
                {dashboardLamps.map((lamp, i) => {
                    const active = lamp.id === selected.id
                    const symbol = <><span className={`dw-symbol ${active && isBlinking ? 'dw-blink' : ''}`}><LampIcon id={lamp.id}/></span><span className="dw-lamp-label">{mode === 'explore' ? lamp.name : String(i + 1).padStart(2, '0')}</span></>
                    return mode === 'explore'
                        ? <button type="button" key={lamp.id} className={`dw-lamp dw-${lamp.color} ${active ? 'dw-active' : ''}`} aria-pressed={active} onClick={() => { setSelectedId(lamp.id); setBlinking(false); setVisited(prev => prev.includes(lamp.id) ? prev : [...prev, lamp.id]) }}>{symbol}</button>
                        : <div key={lamp.id} className={`dw-lamp dw-${lamp.color} ${active ? 'dw-active' : ''}`} aria-label={active ? `${colors[lamp.color]} lampe: ${lamp.symbol}. ${isBlinking ? 'Blinkende lys' : 'Fast lys'}.` : undefined} aria-hidden={!active}>{symbol}</div>
                })}
            </div>
            {mode === 'explore' && <div className="dw-legend"><span><i className="dw-red"/>Rød: reager</span><span><i className="dw-yellow"/>Gul: undersøk</span><span><i className="dw-green"/>Grønn / blå: informasjon</span></div>}
        </div> : null}
        {mode === 'explore' ? <div className="dw-card" aria-live="polite">
            <div className="dw-card-heading"><span className={`dw-detail-icon dw-${selected.color}`}><LampIcon id={selected.id}/></span><div><span className="dw-eyebrow">{colors[selected.color]} lampe</span><h4>{selected.name}</h4></div></div>
            {selected.blinkMeaning && <div className="dw-light-mode" role="group" aria-label="Lampens lysmønster"><button type="button" aria-pressed={!blinking} onClick={() => setBlinking(false)}>Fast lys</button><button type="button" aria-pressed={blinking} onClick={() => setBlinking(true)}>Blinkende lys</button></div>}
            <p>{blinking && selected.blinkMeaning ? selected.blinkMeaning : selected.meaning}</p>
            <div className="dw-action"><strong>Dette gjør du</strong><p>{blinking && selected.blinkAction ? selected.blinkAction : selected.action}</p></div>
            <p className="dw-remember"><strong>Husk: </strong>{selected.remember}</p>
            <button type="button" className="dw-primary" onClick={() => startRound()}>Test det du har lært <span aria-hidden="true">→</span></button>
        </div> : finished ? <div className="dw-card dw-result">
            <span className="dw-eyebrow">{retry ? 'ØVINGSRESULTAT' : 'DITT RESULTAT'}</span><h4 ref={heading} tabIndex={-1}>{score} av {round.length} riktige</h4>
            <p>{score === round.length ? 'Du løste alle situasjonene i denne runden!' : 'God øving handler også om å forstå feilene. Ta en titt på forklaringene under.'}</p>
            {missed.length > 0 && <div className="dw-review">{missed.map(q => <details key={q.id}><summary>{dashboardLamps.find(l => l.id === q.lamp)!.name} · {q.blinking ? 'blinkende lys' : 'fast lys'}</summary><p>{q.prompt}</p><p><strong>Du svarte: </strong>{q.options[answers[round.indexOf(q)]]}</p><p><strong>Riktig handling: </strong>{q.options[q.correct]}</p><p>{q.explanation}</p></details>)}</div>}
            <div className="dw-result-actions">{missed.length > 0 && <button type="button" className="dw-primary" onClick={() => startRound(true)}>Øv på {missed.length === 1 ? 'feilen' : `de ${missed.length} feilene`}</button>}<button type="button" className={missed.length ? 'dw-secondary' : 'dw-primary'} onClick={() => startRound()}>Ny runde med 5 spørsmål</button><button type="button" className="dw-secondary" onClick={() => setMode('explore')}>Utforsk lampene</button></div>
        </div> : <div className="dw-card">
            <div className="dw-progress-label"><span>{retry ? 'Øv på feil' : 'Test deg selv'} · spørsmål {index + 1} av {round.length}</span><span>{score} riktige</span></div><progress value={answers.length} max={round.length} aria-label="Besvarte spørsmål"/>
            <h4 ref={heading} tabIndex={-1} className="dw-question">{question.prompt}</h4>
            <div className="dw-options">{question.options.map((option, i) => <button type="button" key={`${question.id}-${i}`} disabled={answered} className={answered ? (i === question.correct ? 'dw-correct' : i === answers[index] ? 'dw-wrong' : '') : ''} onClick={() => setAnswers(prev => prev.length === index ? [...prev, i] : prev)}><span className="dw-letter">{String.fromCharCode(65 + i)}</span><span>{option}{answered && i === question.correct && <small>✓ Riktig svar</small>}{answered && i === answers[index] && i !== question.correct && <small>✕ Ditt svar</small>}</span></button>)}</div>
            {answered && <><div className="dw-feedback" role="status"><strong>{answers[index] === question.correct ? 'Riktig!' : 'Ikke helt riktig.'}</strong><p>{question.explanation}</p></div><button type="button" className="dw-primary" onClick={next}>{index === round.length - 1 ? 'Se resultatet' : 'Neste spørsmål'} <span aria-hidden="true">→</span></button></>}
        </div>}
        <p className="dw-footnote">Symboler og meldinger varierer mellom biler. Bruk alltid bilens instruksjonsbok ved et faktisk varsel.</p>
    </div>
}
