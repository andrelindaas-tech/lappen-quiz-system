import { useEffect, useReducer, useRef, useState } from 'react'
import { ArrowRight, BookOpen, Check, ChevronRight, Eye, Flag, Lightbulb, Maximize2, RotateCcw, Route, Target, Trophy, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import Link from './InternalLink'
import RoadMarkingScene from './RoadMarkingScene'
import { ROAD_MARKING_SCENARIOS as scenarios } from '../data/roadMarkingScenarios'
import { initialRoadMarkingState, roadMarkingReducer } from '../utils/roadMarkingGame'
import { trackEvent } from '../utils/analytics'
import './RoadMarkingGame.css'

const letters = ['A', 'B', 'C', 'D']

export default function RoadMarkingGame() {
    const [state, dispatch] = useReducer(roadMarkingReducer, initialRoadMarkingState)
    const [showHint, setShowHint] = useState(false)
    const [highlight, setHighlight] = useState(false)
    const questionRef = useRef<HTMLHeadingElement>(null)
    const feedbackRef = useRef<HTMLDivElement>(null)
    const resultRef = useRef<HTMLHeadingElement>(null)
    const sceneDialogRef = useRef<HTMLDialogElement>(null)
    const sceneZoomRef = useRef<HTMLDivElement>(null)
    const startedAt = useRef(0)
    const answerLock = useRef(false)
    const viewed = useRef(false)
    const completed = useRef(false)
    const scenario = scenarios.find(s => s.id === state.queue[state.round])!
    const answer = state.answers[state.round]
    const score = state.answers.filter(a => a.correct).length
    const missed = state.answers.filter(a => !a.correct)
    const progress = (state.answers.length / state.queue.length) * 100
    let streak = 0
    for (let i = state.answers.length - 1; i >= 0 && state.answers[i].correct; i--) streak++

    useEffect(() => {
        if (!viewed.current) {
            viewed.current = true
            trackEvent('game_view', { game_name: 'veimerking', total: scenarios.length })
        }
    }, [])

    useEffect(() => {
        if (state.phase === 'playing') {
            setShowHint(false)
            setHighlight(false)
            answerLock.current = false
            questionRef.current?.focus({ preventScroll: true })
            questionRef.current?.closest('.rmg-game')?.scrollIntoView({ block: 'start' })
        }
        if (state.phase === 'results') {
            resultRef.current?.focus({ preventScroll: true })
            resultRef.current?.scrollIntoView({ block: 'center' })
        }
    }, [state.phase, state.round, state.retry])

    useEffect(() => {
        if (answer) {
            feedbackRef.current?.focus({ preventScroll: true })
            feedbackRef.current?.scrollIntoView({ block: 'nearest' })
        }
    }, [answer])

    useEffect(() => {
        if (state.phase === 'results' && !completed.current) {
            completed.current = true
            trackEvent('game_completed', {
                game_name: 'veimerking', score, total: state.queue.length,
                mode: state.retry ? 'retry' : 'full',
                duration_seconds: Math.round((Date.now() - startedAt.current) / 1000),
            })
        }
    }, [state.phase, state.queue.length, state.retry, score])

    function start(retry = false) {
        if (state.phase === 'results') trackEvent('game_replay', { game_name: 'veimerking', score, total: state.queue.length, mode: retry ? 'retry' : 'full' })
        const total = retry ? missed.length : scenarios.length
        startedAt.current = Date.now()
        completed.current = false
        dispatch({ type: retry ? 'retry' : 'start' })
        trackEvent('game_started', { game_name: 'veimerking', total, mode: retry ? 'retry' : 'full' })
    }

    function select(option: number) {
        if (answerLock.current || answer || state.phase !== 'playing') return
        answerLock.current = true
        dispatch({ type: 'answer', option, scenarioId: scenario.id })
        trackEvent('game_round_completed', {
            game_name: 'veimerking', round_number: state.round + 1, scenario_id: scenario.id,
            is_correct: option === scenario.correct, score: score + Number(option === scenario.correct),
            total: state.queue.length, mode: state.retry ? 'retry' : 'full', hint_used: showHint,
        })
    }

    function enlargeScene() {
        sceneDialogRef.current?.showModal()
        const scene = sceneZoomRef.current
        if (scene) scene.scrollLeft = (scene.scrollWidth - scene.clientWidth) / 2
    }

    const isIntro = state.phase === 'intro'
    return <div className="road-marking-game">
        <Helmet>
            <title>Veimerking-spill – test deg på linjer og oppmerking</title>
            <meta name="description" content="Gratis spill om veimerking: sperrelinjer, varsellinjer, vikelinjer og sperreområder. Interaktive situasjoner som trener deg til teoriprøven klasse B." />
            <meta property="og:title" content="Veimerking-spill – test deg på linjer og oppmerking" />
            <meta property="og:description" content="Gratis spill om veimerking: sperrelinjer, varsellinjer, vikelinjer og sperreområder. Interaktive situasjoner som trener deg til teoriprøven klasse B." />
            <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'VideoGame', name: 'Veimerking-spillet', url: 'https://teori-test.no/laeringsspill/veimerking', description: 'Interaktivt læringsspill om veimerking: sperrelinjer, varsellinjer, vikelinjer og sperreområder. Laget for teoriprøven klasse B.', genre: 'Educational', gamePlatform: 'Web browser', applicationCategory: 'Game', isAccessibleForFree: true, inLanguage: 'nb' })}</script>
            <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Læringsspill', item: 'https://teori-test.no/laeringsspill' }, { '@type': 'ListItem', position: 2, name: 'Veimerking-spillet' }] })}</script>
        </Helmet>
        <nav className="rmg-breadcrumb" aria-label="Brødsmulesti"><Link to="/laeringsspill">Læringsspill</Link><ChevronRight size={14} aria-hidden="true" /><span aria-current="page">Veimerking</span></nav>
        <header className="rmg-page-heading">
            <div><p className="rmg-eyebrow"><Route size={15} aria-hidden="true" /> LÆR Å LESE VEIEN</p><h1>Veimerking-spillet</h1></div>
            <span className="rmg-free-label"><span /> Gratis · Klasse B</span>
        </header>

        {isIntro && <>
            <section className="rmg-intro">
                <div className="rmg-intro-copy">
                    <span className="rmg-label">Små linjer. Stor betydning.</span>
                    <h2>Se situasjonen.<br />Finn din vei.</h2>
                    <p>Kan du skifte felt? Må du stoppe? Lær å lese oppmerkingen gjennom 14 situasjoner du kan møte på veien.</p>
                    <div className="rmg-intro-facts"><span><Target size={17} aria-hidden="true" /> 14 bildeoppgaver</span><span><BookOpen size={17} aria-hidden="true" /> Forklaring etter hvert svar</span></div>
                    <button className="rmg-primary" onClick={() => start()}>Start øvingen <ArrowRight size={19} aria-hidden="true" /></button>
                    <p className="rmg-small">Ingen tidspress. Ingen innlogging.</p>
                </div>
                <div className="rmg-intro-visual">
                    <div className="rmg-visual-topline"><span><span className="rmg-live-dot" /> DIN VEI TIL BEDRE OVERSIKT</span><span>01 / 14</span></div>
                    <RoadMarkingScene scenarioId={3} description={scenarios[2].visualDescription} />
                    <div className="rmg-preview-note"><div className="rmg-note-icon"><Eye size={20} aria-hidden="true" /></div><div><strong>Hvilken linje gjelder for deg?</strong><p>Se nøye. Det er forskjell på de to sidene.</p></div></div>
                </div>
            </section>
            <div className="rmg-how">
                {[{ icon: Eye, title: 'Se og vurder', text: 'Les veien fra bilen merket DU.' }, { icon: Lightbulb, title: 'Forstå hvorfor', text: 'Få forklaringen og en kort huskeregel.' }, { icon: RotateCcw, title: 'Øv på det du bommet på', text: 'Ta en ny runde med bare feilene dine.' }].map(({ icon: Icon, title, text }, i) => <div key={title}><span className="rmg-step-number">0{i + 1}</span><Icon size={20} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></div>)}
            </div>
        </>}

        {state.phase === 'playing' && <section className="rmg-game" aria-label={state.retry ? 'Øv på feilene' : 'Veimerkingsoppgaver'}>
            <div className="rmg-toolbar">
                <div><span className="rmg-round">{state.retry ? 'Øv på feilene' : 'Oppgave'} <strong>{state.round + 1}</strong><span> / {state.queue.length}</span></span><span className="rmg-category">{scenario.category}</span></div>
                <div className="rmg-score"><Check size={16} aria-hidden="true" /><strong>{score}</strong> riktige{streak > 1 && <span className="rmg-streak">{streak} på rad</span>}</div>
            </div>
            <div className="rmg-progress" role="progressbar" aria-label="Besvarte oppgaver" aria-valuemin={0} aria-valuemax={state.queue.length} aria-valuenow={state.answers.length}><span style={{ width: `${progress}%` }} /></div>
            <div className="rmg-play-layout">
                <div className="rmg-situation">
                    <div className="rmg-visual-topline"><span>SE SITUASJONEN</span><button className="rmg-enlarge" onClick={enlargeScene}><Maximize2 size={14} aria-hidden="true" />Forstørr bilde</button></div>
                    <RoadMarkingScene scenarioId={scenario.id} description={scenario.visualDescription} highlight={highlight || Boolean(answer)} />
                    <div className="rmg-scene-caption"><span><span className="rmg-car-dot" /> Bilen din er merket DU</span><button aria-pressed={highlight || Boolean(answer)} onClick={() => setHighlight(v => !v)} disabled={Boolean(answer)}><Eye size={15} aria-hidden="true" />{answer || highlight ? 'Markering vist' : 'Vis markering'}</button></div>
                    <dialog className="rmg-scene-dialog" ref={sceneDialogRef} aria-labelledby="rmg-dialog-title">
                        <div className="rmg-dialog-header"><h2 id="rmg-dialog-title">Se situasjonen nærmere</h2><form method="dialog"><button autoFocus aria-label="Lukk forstørret bilde"><X size={22} aria-hidden="true" /></button></form></div>
                        <div className="rmg-zoom-stage" ref={sceneZoomRef} tabIndex={0} aria-label="Forstørret bilde, bla sidelengs for å se hele situasjonen"><RoadMarkingScene scenarioId={scenario.id} description={scenario.visualDescription} highlight={highlight || Boolean(answer)} /></div>
                        <p className="rmg-zoom-help">Sveip sideveis i bildet for å se hele situasjonen.</p>
                        <p>{scenario.visualDescription}</p>
                    </dialog>
                    <div className="rmg-observation"><span className="rmg-note-icon"><Eye size={20} aria-hidden="true" /></span><div><strong>{answer ? scenario.title : 'Hva forteller veien deg?'}</strong><p>{answer ? 'Se oppmerkingen sammen med forklaringen.' : 'Se på fargen, linjetypen og plasseringen før du svarer.'}</p></div></div>
                </div>
                <div className="rmg-question-panel">
                    <p className="rmg-eyebrow">{answer ? 'SE FORKLARINGEN' : 'HVA GJØR DU?'}</p>
                    <h2 ref={questionRef} tabIndex={-1}>{scenario.question}</h2>
                    <div className="rmg-options" role="group" aria-label="Svaralternativer">
                        {scenario.options.map((text, i) => <button key={`${scenario.id}-${i}`} className={`rmg-option${answer ? i === scenario.correct ? ' is-correct' : i === answer.option ? ' is-wrong' : ' is-muted' : ''}`} disabled={Boolean(answer)} onClick={() => select(i)}>
                            <span className="rmg-option-letter" aria-hidden="true">{answer && i === scenario.correct ? <Check size={17} /> : answer && i === answer.option ? <X size={17} /> : letters[i]}</span>
                            <span>{text}{answer && (i === scenario.correct || i === answer.option) && <small>{i === scenario.correct ? 'Riktig svar' : 'Ditt svar'}</small>}</span>
                        </button>)}
                    </div>
                    {!answer && <div className="rmg-hint"><button aria-expanded={showHint} aria-controls="rmg-hint-text" onClick={() => { setShowHint(v => !v); setHighlight(true) }}><Lightbulb size={17} aria-hidden="true" />{showHint ? 'Skjul hint' : 'Trenger du et hint?'}</button>{showHint && <p id="rmg-hint-text">{scenario.hint}</p>}</div>}
                    {answer && <div ref={feedbackRef} tabIndex={-1} className={`rmg-feedback ${answer.correct ? 'is-correct' : 'is-wrong'}`} role="region" aria-label={answer.correct ? 'Riktig svar' : 'Ikke helt riktig'}>
                        <h3>{answer.correct ? <Check size={19} aria-hidden="true" /> : <Lightbulb size={19} aria-hidden="true" />}{answer.correct ? 'Riktig – godt sett!' : 'Ikke helt. Se forskjellen.'}</h3>
                        <p>{scenario.explanation}</p>
                        <div className="rmg-remember"><strong>Husk</strong><span>{scenario.remember}</span></div>
                        <button className="rmg-primary" onClick={() => dispatch({ type: 'next' })}>{state.round + 1 === state.queue.length ? 'Se resultatet' : 'Neste oppgave'}<ArrowRight size={18} aria-hidden="true" /></button>
                    </div>}
                </div>
            </div>
            <div className="rmg-game-bottom"><span><Flag size={14} aria-hidden="true" />{state.retry ? 'En ny sjanse til å få reglene til å sitte.' : 'Ta den tiden du trenger. Her øver du på å forstå.'}</span><span>{state.answers.length} av {state.queue.length} besvart</span></div>
        </section>}

        {state.phase === 'results' && <section className="rmg-results">
            <div className="rmg-result-top"><span className="rmg-trophy"><Trophy size={32} aria-hidden="true" /></span><p className="rmg-eyebrow">{state.retry ? 'REPETISJON FULLFØRT' : 'ØVING FULLFØRT'}</p><h2 tabIndex={-1} ref={resultRef}>{score === state.queue.length ? 'Alle linjene på plass!' : 'Du er et steg videre.'}</h2><p className="rmg-result-score"><strong>{score}</strong> / {state.queue.length} riktige</p><p>{missed.length ? `Du har ${missed.length} ${missed.length === 1 ? 'situasjon' : 'situasjoner'} å øve mer på. Ta en ny runde mens du husker forklaringene.` : 'Godt jobbet! Test forståelsen videre med flere veimerkingsspørsmål.'}</p>
                <div className="rmg-result-actions">{missed.length > 0 ? <button className="rmg-primary" onClick={() => start(true)}><RotateCcw size={18} aria-hidden="true" />Øv på {missed.length === 1 ? 'feilen' : `de ${missed.length} feilene`}</button> : <Link className="rmg-primary" to="/quiz/veimerking">Ta veimerking-quizen<ArrowRight size={18} aria-hidden="true" /></Link>}<button className="rmg-secondary" onClick={() => start()}>Spill alle på nytt</button></div>
            </div>
            <div className="rmg-review"><h3>Dette tar du med deg</h3><p>Klikk på en oppgave for å se svaret og huskeregelen.</p>{state.answers.map((item, i) => {
                const s = scenarios.find(s => s.id === item.scenarioId)!
                return <details key={s.id}><summary><span className={item.correct ? 'rmg-review-correct' : 'rmg-review-wrong'}>{item.correct ? <Check size={17} aria-label="Riktig" /> : <RotateCcw size={17} aria-label="Øv mer" />}</span><span><small>Oppgave {i + 1}</small>{s.title}</span><ChevronRight size={18} aria-hidden="true" /></summary><div className="rmg-review-body"><RoadMarkingScene scenarioId={s.id} description={s.visualDescription} highlight /><div><p><strong>Ditt svar:</strong> {s.options[item.option]}</p>{!item.correct && <p><strong>Riktig svar:</strong> {s.options[s.correct]}</p>}<p>{s.explanation}</p><div className="rmg-remember"><strong>Husk</strong><span>{s.remember}</span></div></div></div></details>
            })}</div>
        </section>}
        <div className="rmg-theory-link"><BookOpen size={17} aria-hidden="true" /><span>Vil du lære mer? <Link to="/laeringsressurser/veimerking">Les guiden til veimerking</Link> eller <Link to="/quiz/veimerking">test forståelsen i veimerking-quizen<ArrowRight size={14} aria-hidden="true" /></Link>.</span></div>
        <p className="rmg-source">Regelgrunnlag: <a href="https://lovdata.no/forskrift/2005-10-07-1219/§22" target="_blank" rel="noopener noreferrer">Skiltforskriften, kapittel 11</a> og <a href="https://lovdata.no/forskrift/1986-03-21-747/§9" target="_blank" rel="noopener noreferrer">trafikkreglene</a>. Illustrasjonene er forenklet.</p>
    </div>
}
