import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import confetti from 'canvas-confetti'
import './StoppingDistanceChallenge.css'

interface Scenario {
    speed: number
    surface: string
    multiplier: number
}

const ALL_SCENARIOS: Scenario[] = [
    { speed: 50, surface: 'Tørr asfalt', multiplier: 1 },
    { speed: 80, surface: 'Tørr asfalt', multiplier: 1 },
    { speed: 50, surface: 'Våt asfalt', multiplier: 2 },
    { speed: 60, surface: 'Snø/vinterføre', multiplier: 4 },
    { speed: 30, surface: 'Is', multiplier: 9 },
    { speed: 100, surface: 'Tørr asfalt', multiplier: 1 },
    { speed: 60, surface: 'Våt asfalt', multiplier: 2 },
    { speed: 80, surface: 'Våt asfalt', multiplier: 2 },
    { speed: 40, surface: 'Snø/vinterføre', multiplier: 4 },
    { speed: 110, surface: 'Tørr asfalt', multiplier: 1 },
]

function shuffle<T>(array: T[]): T[] {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}

export default function StoppingDistanceChallenge() {
    const [scenarios, setScenarios] = useState<Scenario[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [guess, setGuess] = useState(0)
    const [hasMovedSlider, setHasMovedSlider] = useState(false)
    const [hasAnswered, setHasAnswered] = useState(false)
    const [isGameOver, setIsGameOver] = useState(false)
    const [feedback, setFeedback] = useState({ type: '', title: 'Velg en avstand og sjekk svaret.', text: 'Tallene er beregnede teoretiske verdier, ikke eksakte fasiter for alle biler og forhold.' })
    const [carLeft, setCarLeft] = useState('12%')
    const [isMoving, setIsMoving] = useState(false)

    // Initial setup and restarts
    const initGame = () => {
        setScenarios(shuffle(ALL_SCENARIOS))
        setCurrentIndex(0)
        setScore(0)
        setGuess(0)
        setHasMovedSlider(false)
        setHasAnswered(false)
        setIsGameOver(false)
        setFeedback({
            type: '',
            title: 'Velg en avstand og sjekk svaret.',
            text: 'Tallene er beregnede teoretiske verdier, ikke eksakte fasiter for alle biler og forhold.'
        })
        setCarLeft('12%')
        setIsMoving(false)
    }

    useEffect(() => {
        initGame()
    }, [])

    useEffect(() => {
        if (isGameOver && score > 0) {
            const duration = 2500
            const end = Date.now() + duration

            const frame = () => {
                confetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0, y: 0.8 },
                    colors: ['#3b82f6', '#22d3ee', '#10b981']
                })
                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1, y: 0.8 },
                    colors: ['#3b82f6', '#22d3ee', '#10b981']
                })

                if (Date.now() < end) {
                    requestAnimationFrame(frame)
                }
            }
            frame()
        }
    }, [isGameOver, score])

    if (scenarios.length === 0) {
        return <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--color-text-light)' }}>Laster spill...</div>
    }

    const currentScenario = scenarios[currentIndex]

    // Calculation formulas
    const calculate = (scenario: Scenario) => {
        const reaction = (scenario.speed / 10) * 3
        const dryBraking = Math.pow(scenario.speed / 10, 2) / 2
        const braking = dryBraking * scenario.multiplier
        const stopping = reaction + braking

        return {
            reaction: Math.round(reaction),
            dryBraking: Math.round(dryBraking),
            braking: Math.round(braking),
            stopping: Math.round(stopping)
        }
    }

    const values = calculate(currentScenario)
    const scale = Math.max(80, Math.ceil((values.stopping + 20) / 20) * 20)

    const percent = (meters: number) => {
        return 12 + (meters / scale) * 80
    }

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value)
        setGuess(val)
        if (val > 0) {
            setHasMovedSlider(true)
            if (!hasAnswered) {
                setFeedback({
                    type: '',
                    title: 'Når du er fornøyd med estimatet ditt, sjekk svaret.',
                    text: `Ditt estimat: ${val} meter.`
                })
            }
        } else {
            setHasMovedSlider(false)
            if (!hasAnswered) {
                setFeedback({
                    type: '',
                    title: 'Velg en avstand og sjekk svaret.',
                    text: 'Start på 0 meter og dra slideren til ditt beste estimat.'
                })
            }
        }
    }

    const handleCheckAnswer = () => {
        if (!hasMovedSlider) {
            setFeedback({
                type: 'warn',
                title: 'Dra slideren først.',
                text: 'Startverdien er 0 meter. Flytt slideren til avstanden du tror er riktig før du sjekker svaret.'
            })
            return
        }

        const diff = guess - values.stopping
        const tolerance = Math.max(3, values.stopping * 0.1)
        const carEnd = percent(Math.max(0, guess))

        setIsMoving(true)
        setCarLeft(`${Math.min(94, carEnd)}%`)
        setTimeout(() => {
            setIsMoving(false)
        }, 900)

        const isCorrect = Math.abs(diff) <= tolerance
        if (isCorrect) {
            setScore(prev => prev + 1)
            setFeedback({
                type: 'good',
                title: 'Bra! Dette er et godt estimat.',
                text: `Du valgte ${guess} meter. Beregnet teoretisk stopplengde er omtrent ${values.stopping} meter.`
            })
            // Spray confetti on correct answer!
            confetti({
                particleCount: 80,
                spread: 60,
                origin: { y: 0.7 },
                colors: ['#3b82f6', '#22d3ee', '#10b981', '#f59e0b']
            })
        } else if (diff < 0) {
            setFeedback({
                type: 'danger',
                title: 'For kort. Her undervurderer du stopplengden.',
                text: `Du valgte ${guess} meter, men bilen trenger omtrent ${values.stopping} meter. Ved ${currentScenario.speed} km/t rekker bilen allerede å kjøre ${values.reaction} meter før bremsingen starter.`
            })
        } else {
            setFeedback({
                type: 'warn',
                title: 'Trygt, men litt for langt.',
                text: `Du valgte ${guess} meter. Riktig estimat er omtrent ${values.stopping} meter. På teoriprøven er poenget å forstå reaksjon + bremsing.`
            })
        }

        setHasAnswered(true)
    }

    const handleNext = () => {
        if (currentIndex === scenarios.length - 1) {
            setIsGameOver(true)
            return
        }

        setCurrentIndex(prev => prev + 1)
        setGuess(0)
        setHasMovedSlider(false)
        setHasAnswered(false)
        setCarLeft('12%')
        setIsMoving(false)
        setFeedback({
            type: '',
            title: 'Velg en avstand og sjekk svaret.',
            text: 'Tallene er beregnede teoretiske verdier, ikke eksakte fasiter for alle biler og forhold.'
        })
    }

    // Road positioning calculations
    const reactionEnd = percent(values.reaction)
    const stopEnd = percent(values.stopping)

    return (
        <div className="stopping-distance-challenge">
            <Helmet>
                <title>Stopplengde-utfordringen | Læringsspill | Teori-test.no</title>
                <meta name="description" content="Test din forståelse for reaksjonstid, bremselende og total stopplengde med vårt interaktive stopplengde-spill." />
            </Helmet>

            <div className="site-bar">
                <div className="brand">Teori-test.no</div>
                <div className="section-pill">Læringsspill</div>
            </div>

            <section className="article-card" aria-labelledby="page-title">
                <span className="kicker">Mini-spill for klasse B</span>
                <h1 className="challenge-title" id="page-title">Stopplengde-utfordringen</h1>
                <p className="intro">
                    Dra slideren til stopplengden du tror passer. Etter svaret får du fasit, utregning og en kort forklaring på hvorfor fart og føre betyr så mye.
                </p>

                <div className="challenge">
                    <div className="challenge-head">
                        <div>
                            <h2>Klarer du å anslå stopplengden?</h2>
                            <p className="subtitle">
                                Dra slideren, sjekk svaret og lær hvorfor tallet blir som det blir.
                            </p>
                        </div>
                        <div className="game-stats">
                            <div className="progress-pill">
                                {isGameOver ? 'Fullført' : `Oppgave ${currentIndex + 1} av ${scenarios.length}`}
                            </div>
                            <div className="score-pill">{score} poeng</div>
                        </div>
                    </div>

                    {!isGameOver ? (
                        <div className="challenge-grid">
                            <section className="task-box" aria-labelledby="task-title">
                                <span className="label" id="task-title">Situasjon</span>
                                <div className="scenario">
                                    <span className="badge">{currentScenario.speed} km/t</span>
                                    <span className="badge surface">{currentScenario.surface}</span>
                                </div>
                                <p className="task-copy">
                                    Du kjører i {currentScenario.speed} km/t på {currentScenario.surface.toLowerCase()}. Hvor mange meter trenger bilen omtrent før den står stille?
                                </p>

                                <span className="label">Hva blir total stopplengde omtrent?</span>
                                <div className="slider-row">
                                    <div className="guess-value">
                                        <strong>{guess}</strong>
                                        <span>meter</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max={scale}
                                        step="1"
                                        value={guess}
                                        onChange={handleSliderChange}
                                        disabled={hasAnswered}
                                        className="stopplengde-slider"
                                        aria-label="Velg total stopplengde i meter"
                                    />
                                    <div className="range-ends">
                                        <span>0 m</span>
                                        <span>{scale} m</span>
                                    </div>
                                    <p className="slider-hint">
                                        {!hasMovedSlider && 'Start på 0 meter og dra slideren til ditt beste estimat.'}
                                        {hasMovedSlider && !hasAnswered && 'Når du er fornøyd med estimatet ditt, sjekk svaret.'}
                                        {hasAnswered && 'Du har sjekket svaret. Klikk på Neste oppgave for å gå videre.'}
                                    </p>
                                </div>

                                <div className="actions">
                                    <button
                                        className="primary"
                                        onClick={handleCheckAnswer}
                                        disabled={!hasMovedSlider || hasAnswered}
                                        type="button"
                                    >
                                        Sjekk svaret
                                    </button>
                                    <button
                                        className="secondary"
                                        onClick={handleNext}
                                        disabled={!hasAnswered}
                                        type="button"
                                    >
                                        {currentIndex === scenarios.length - 1 ? 'Se resultat' : 'Neste oppgave'}
                                    </button>
                                </div>

                                <div className="rule">
                                    <strong>Huskeregelen</strong>
                                    <p>
                                        Reaksjonslengde + bremselengde = stopplengde. Dobbel fart gir omtrent fire ganger bremselengde.
                                    </p>
                                </div>
                            </section>

                            <section className="result-box" aria-labelledby="visual-title">
                                <span className="label" id="visual-title">Visuell test</span>
                                <div className="road-wrap">
                                    <div className="road" aria-hidden="true">
                                        {hasAnswered && (
                                            <>
                                                <div
                                                    className="segment reaction"
                                                    style={{ left: '12%', width: `${Math.max(4, reactionEnd - 12)}%` }}
                                                />
                                                <div
                                                    className="segment braking"
                                                    style={{ left: `${reactionEnd}%`, width: `${Math.max(4, stopEnd - reactionEnd)}%` }}
                                                />
                                                <div
                                                    className="stop-marker"
                                                    style={{ left: `${stopEnd}%` }}
                                                />
                                            </>
                                        )}

                                        <div
                                            className={`car ${isMoving ? 'moving' : ''}`}
                                            style={{ left: carLeft }}
                                            aria-hidden="true"
                                        >
                                            <svg viewBox="0 0 110 50" role="img" style={{ overflow: 'visible' }}>
                                                <defs>
                                                    <linearGradient id="body-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#1e3a8a" />
                                                        <stop offset="35%" stopColor="#3b82f6" />
                                                        <stop offset="70%" stopColor="#60a5fa" />
                                                        <stop offset="100%" stopColor="#2563eb" />
                                                    </linearGradient>
                                                    <linearGradient id="window-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" stopColor="#334155" />
                                                        <stop offset="100%" stopColor="#0f172a" />
                                                    </linearGradient>
                                                    <linearGradient id="wheel-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="#e2e8f0" />
                                                        <stop offset="100%" stopColor="#64748b" />
                                                    </linearGradient>
                                                </defs>

                                                {/* Brake light glow trail behind the car when moving */}
                                                {isMoving && (
                                                    <path
                                                        d="M 8 26 L -12 24 L -12 30 L 8 28 Z"
                                                        fill="rgba(239, 68, 68, 0.45)"
                                                        filter="blur(2px)"
                                                    />
                                                )}

                                                {/* Car drop/chassis shadow */}
                                                <ellipse cx="58" cy="42" rx="46" ry="3.5" fill="rgba(0, 0, 0, 0.4)" filter="blur(1px)" />

                                                {/* Wheel wells */}
                                                <path d="M 20.5 38 A 10.5 10.5 0 0 1 41.5 38 Z" fill="#0f172a" opacity="0.5" />
                                                <path d="M 73.5 38 A 10.5 10.5 0 0 1 94.5 38 Z" fill="#0f172a" opacity="0.5" />

                                                {/* Car Body */}
                                                <path
                                                    d="M 8 34 C 8 30, 9 27, 12 25 C 15 23, 21 21, 27 21 C 32 21, 35 20, 39 16 C 43 12, 47 11, 52 11 H 70 C 76 11, 80 12, 84 17 L 91 22 L 100 24 C 104 25, 107 28, 107 32 C 107 34, 106 36, 105 37 L 105 38 H 8 Z"
                                                    fill="url(#body-grad)"
                                                />

                                                {/* Windows / Cabin */}
                                                <path
                                                    d="M 41 14.5 H 68 C 73 14.5, 77 16.5, 80 21.5 H 35 Z"
                                                    fill="url(#window-grad)"
                                                />
                                                <path
                                                    d="M 56 14.5 V 21.5"
                                                    stroke="#475569"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path d="M 43 14.5 L 53 21.5 H 56 L 46 14.5 Z" fill="rgba(255, 255, 255, 0.12)" />

                                                {/* LED Headlight (Front/Right) */}
                                                <path
                                                    d="M 100 25 C 103 26, 106 28, 106 29 L 103 31 C 101 29, 99 27, 100 25 Z"
                                                    fill="#e0f2fe"
                                                    filter="drop-shadow(0 0 1.5px #38bdf8)"
                                                />

                                                {/* LED Taillight (Rear/Left) */}
                                                <path
                                                    d="M 8 26 C 9 24, 13 24, 15 25 L 14 27 C 12 26, 9 26, 8 26 Z"
                                                    fill="#fee2e2"
                                                    filter="drop-shadow(0 0 1.5px #ef4444)"
                                                />

                                                {/* Rear Wheel (cx=31, cy=38) */}
                                                <circle cx="31" cy="38" r="8.5" fill="#1e293b" stroke="#0f172a" strokeWidth="1" />
                                                <circle cx="31" cy="38" r="5.5" fill="url(#wheel-grad)" />
                                                <g className="wheel-spokes" style={{ transformOrigin: '31px 38px' }}>
                                                    <circle cx="31" cy="38" r="1.5" fill="#475569" />
                                                    <line x1="31" y1="38" x2="31" y2="32.5" stroke="#f8fafc" strokeWidth="1" />
                                                    <line x1="31" y1="38" x2="36.2" y2="39.8" stroke="#f8fafc" strokeWidth="1" />
                                                    <line x1="31" y1="38" x2="34.2" y2="43.3" stroke="#f8fafc" strokeWidth="1" />
                                                    <line x1="31" y1="38" x2="27.8" y2="43.3" stroke="#f8fafc" strokeWidth="1" />
                                                    <line x1="31" y1="38" x2="25.8" y2="39.8" stroke="#f8fafc" strokeWidth="1" />
                                                </g>

                                                {/* Front Wheel (cx=84, cy=38) */}
                                                <circle cx="84" cy="38" r="8.5" fill="#1e293b" stroke="#0f172a" strokeWidth="1" />
                                                <circle cx="84" cy="38" r="5.5" fill="url(#wheel-grad)" />
                                                <g className="wheel-spokes" style={{ transformOrigin: '84px 38px' }}>
                                                    <circle cx="84" cy="38" r="1.5" fill="#475569" />
                                                    <line x1="84" y1="38" x2="84" y2="32.5" stroke="#f8fafc" strokeWidth="1" />
                                                    <line x1="84" y1="38" x2="89.2" y2="39.8" stroke="#f8fafc" strokeWidth="1" />
                                                    <line x1="84" y1="38" x2="87.2" y2="43.3" stroke="#f8fafc" strokeWidth="1" />
                                                    <line x1="84" y1="38" x2="80.8" y2="43.3" stroke="#f8fafc" strokeWidth="1" />
                                                    <line x1="84" y1="38" x2="78.8" y2="39.8" stroke="#f8fafc" strokeWidth="1" />
                                                </g>

                                                {/* Chassis Underbody Line */}
                                                <path
                                                    d="M 12 38 H 102"
                                                    stroke="#0f172a"
                                                    strokeWidth="1"
                                                    strokeLinecap="round"
                                                    fill="none"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="meter-line" style={{ position: 'relative', height: '20px', marginTop: '9px' }}>
                                        <span style={{ position: 'absolute', left: '12%', transform: 'translateX(-50%)' }}>0 m</span>
                                        <span style={{ position: 'absolute', left: '52%', transform: 'translateX(-50%)' }}>{Math.round(scale / 2)} m</span>
                                        <span style={{ position: 'absolute', left: '92%', transform: 'translateX(-50%)' }}>{scale} m</span>
                                    </div>

                                    <div className="legend">
                                        <span className="blue">Reaksjon</span>
                                        <span className="orange">Bremsing</span>
                                        <span className="green">Riktig stoppunkt</span>
                                    </div>
                                </div>

                                <div className={`feedback ${feedback.type}`}>
                                    <p className="feedback-title">{feedback.title}</p>
                                    <p>{feedback.text}</p>
                                </div>

                                {/* Details - shown only after answering */}
                                {hasAnswered && (
                                    <>
                                        <div className="details">
                                            <div className="detail-row">
                                                <span>Reaksjonslengde</span>
                                                <strong>{values.reaction} m</strong>
                                            </div>
                                            <div className="detail-row">
                                                <span>Bremselengde</span>
                                                <strong>{values.braking} m</strong>
                                            </div>
                                            <div className="detail-row">
                                                <span>Total stopplengde</span>
                                                <strong>{values.stopping} m</strong>
                                            </div>
                                        </div>

                                        <div className="math-box">
                                            <h3>Utregningen bak svaret</h3>
                                            <ul className="formula-list">
                                                <li><strong>Reaksjonslengde:</strong> ({currentScenario.speed} / 10) × 3 = {values.reaction} m</li>
                                                <li><strong>Bremselengde tørr vei:</strong> ({currentScenario.speed} / 10)² / 2 = {Math.round(Math.pow(currentScenario.speed / 10, 2) / 2)} m</li>
                                                <li><strong>Føre:</strong> {currentScenario.surface} gir ca. {currentScenario.multiplier}× bremselengde = {values.braking} m</li>
                                                <li><strong>Stopplengde:</strong> {values.reaction} m + {values.braking} m = {values.stopping} m</li>
                                            </ul>
                                        </div>
                                    </>
                                )}
                            </section>
                        </div>
                    ) : (
                        <section className="completion">
                            <div className="completion-inner">
                                <p className="kicker">Fullført</p>
                                <h3>Bra jobbet med stopplengde!</h3>
                                <span className="completion-score">{score} av {scenarios.length} riktige</span>
                                <p>
                                    {score === scenarios.length ? (
                                        "Full pott! Du har eksepsjonelt god kontroll på sammenhengen mellom fart, føre, reaksjon og bremsing."
                                    ) : score >= Math.ceil(scenarios.length / 2) ? (
                                        "Godt jobbet! Se spesielt på oppgavene du bommet på, og legg merke til hvordan fart og dårlig føre øker stopplengden drastisk."
                                    ) : (
                                        "Dette er et tema mange undervurderer. Bruk utregningen bak hvert svar, og prøv igjen for å forbedre forståelsen din."
                                    )}
                                </p>
                                <button className="primary" onClick={initGame} type="button" style={{ margin: '0 auto' }}>
                                    Prøv på nytt
                                </button>
                            </div>
                        </section>
                    )}
                </div>
            </section>
        </div>
    )
}
