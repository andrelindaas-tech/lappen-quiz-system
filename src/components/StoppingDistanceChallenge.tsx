import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
    
    // Animation/Movement states
    const [carLeft, setCarLeft] = useState('12%')
    const [isMoving, setIsMoving] = useState(false)
    const [animatingPhase, setAnimatingPhase] = useState<'idle' | 'driving' | 'reacting' | 'braking' | 'finished'>('idle')
    const [roadScrolling, setRoadScrolling] = useState(false)
    const [isBraking, setIsBraking] = useState(false)
    const [carDipping, setCarDipping] = useState(false)
    const [tireSmoke, setTireSmoke] = useState(false)
    const [showGuessMarker, setShowGuessMarker] = useState(false)
    const [showResultSegments, setShowResultSegments] = useState(false)
    const [showReactionFlash, setShowReactionFlash] = useState(false)

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
        setAnimatingPhase('idle')
        setRoadScrolling(false)
        setIsBraking(false)
        setCarDipping(false)
        setTireSmoke(false)
        setShowGuessMarker(false)
        setShowResultSegments(false)
        setShowReactionFlash(false)
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

    const adjustGuess = (amount: number) => {
        setGuess(prev => {
            const newVal = Math.max(0, Math.min(scale, prev + amount))
            if (newVal > 0) {
                setHasMovedSlider(true)
                if (!hasAnswered) {
                    setFeedback({
                        type: '',
                        title: 'Når du er fornøyd med estimatet ditt, sjekk svaret.',
                        text: `Ditt estimat: ${newVal} meter.`
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
            return newVal
        })
    }

    const startAdjusting = (amount: number) => {
        if (hasAnswered) return
        adjustGuess(amount)
        
        const timeoutId = window.setTimeout(() => {
            const intervalId = window.setInterval(() => {
                adjustGuess(amount)
            }, 60)
            
            const stopAdjusting = () => {
                window.clearInterval(intervalId)
                window.removeEventListener('mouseup', stopAdjusting)
                window.removeEventListener('touchend', stopAdjusting)
            }
            window.addEventListener('mouseup', stopAdjusting)
            window.addEventListener('touchend', stopAdjusting)
        }, 250)

        const stopTimeout = () => {
            window.clearTimeout(timeoutId)
            window.removeEventListener('mouseup', stopTimeout)
            window.removeEventListener('touchend', stopTimeout)
        }
        window.addEventListener('mouseup', stopTimeout)
        window.addEventListener('touchend', stopTimeout)
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
        const isCorrect = Math.abs(diff) <= tolerance

        setHasAnswered(true)
        setAnimatingPhase('driving')
        setRoadScrolling(true)
        setIsMoving(true)
        setShowGuessMarker(true)
        setShowResultSegments(false)
        setCarLeft('12%')

        // Driving animation timeline:
        // 0ms -> 1000ms: Driving (wheels spin, road lines scroll, car stays at 12%)
        setTimeout(() => {
            // 1000ms -> 1500ms: Reaction flash & move to reactionEnd
            setAnimatingPhase('reacting')
            setShowReactionFlash(true)
            setTimeout(() => setShowReactionFlash(false), 300) // quick visual pulse

            setTimeout(() => {
                // 1500ms -> 3000ms: Hard Braking phase (lights glow, chassis dips, smoke/particles emit, road stops scrolling, car decelerates)
                setAnimatingPhase('braking')
                setIsBraking(true)
                setCarDipping(true)
                setTireSmoke(true)
                setRoadScrolling(false)

                const stopEndPos = percent(guess)
                setCarLeft(`${stopEndPos}%`)

                setTimeout(() => {
                    // 3000ms: Stop & Reveal Results
                    setAnimatingPhase('finished')
                    setIsMoving(false)
                    setIsBraking(false)
                    setCarDipping(false)
                    setTireSmoke(false)
                    setShowResultSegments(true)

                    if (isCorrect) {
                        setScore(prev => prev + 1)
                        setFeedback({
                            type: 'good',
                            title: 'Bra! Dette er et godt estimat.',
                            text: `Du valgte ${guess} meter. Beregnet teoretisk stopplengde er omtrent ${values.stopping} meter.`
                        })
                        confetti({
                            particleCount: 85,
                            spread: 65,
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
                }, 1500) // Braking transition duration
            }, 500) // Reaction duration
        }, 1000) // Driving duration
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
        setAnimatingPhase('idle')
        setRoadScrolling(false)
        setIsBraking(false)
        setCarDipping(false)
        setTireSmoke(false)
        setShowGuessMarker(false)
        setShowResultSegments(false)
        setShowReactionFlash(false)
        setFeedback({
            type: '',
            title: 'Velg en avstand og sjekk svaret.',
            text: 'Tallene er beregnede teoretiske verdier, ikke eksakte fasiter for alle biler og forhold.'
        })
    }

    // Road positioning calculations
    const reactionEnd = percent(values.reaction)
    const stopEnd = percent(values.stopping)
    const isOverlap = showResultSegments && showGuessMarker && Math.abs(percent(guess) - percent(values.stopping)) <= 14

    const surfaceClass = currentScenario.surface
        .toLowerCase()
        .replace('/', '-')
        .replace('æ', 'ae')
        .replace('ø', 'o')
        .replace('å', 'a')

    const getCarTransitionStyle = () => {
        if (animatingPhase === 'idle' || animatingPhase === 'driving') {
            return { transition: 'none' }
        }
        if (animatingPhase === 'reacting') {
            return { transition: 'left 500ms linear' }
        }
        if (animatingPhase === 'braking') {
            return { transition: 'left 1500ms cubic-bezier(0.25, 1, 0.5, 1)' }
        }
        return { transition: 'left 300ms ease' }
    }

    return (
        <div className="stopping-distance-challenge">
            <Helmet>
                <title>Stopplengde-utfordringen | Læringsspill | Teori-test.no</title>
                <meta name="description" content="Test din forståelse for reaksjonstid, bremselende og total stopplengde med vårt interaktive stopplengde-spill." />
            </Helmet>

            <nav style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem' }} aria-label="Brødsmulesti">
                <Link to="/laeringsspill" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                    Læringsspill
                </Link>
                <span style={{ color: 'var(--color-text-light)', margin: '0 8px' }}>/</span>
                <span style={{ color: 'var(--color-text-light)' }}>Stopplengde-utfordringen</span>
            </nav>

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
                        <div className="challenge-dashboard">
                            {/* Top: Large cinematic visual test */}
                            <section className="simulator-section" aria-labelledby="visual-title">
                                <div className="simulator-header">
                                    <div className="simulator-title-group">
                                        <span className="label" id="visual-title">Visuell simulator</span>
                                        <div className="scenario-badges header-badges">
                                            <span className="scenario-badge speed">{currentScenario.speed} km/t</span>
                                            <span className="scenario-badge surface">{currentScenario.surface}</span>
                                        </div>
                                    </div>
                                    {showReactionFlash && (
                                        <div className="reaction-flash-indicator">
                                            <span>! REAKSJON</span>
                                        </div>
                                    )}
                                </div>
                                
                                <div className="road-wrap-panel">
                                    <div className={`road ${roadScrolling ? 'scrolling' : ''} surface-${surfaceClass}`} aria-hidden="true">
                                        
                                        {/* Background Weather particle layers */}
                                        {surfaceClass === 'vat-asfalt' && (
                                            <div className="weather-overlay rain-overlay">
                                                {Array.from({ length: 25 }).map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className="rain-drop"
                                                        style={{
                                                            left: `${(i * 17) % 100}%`,
                                                            animationDelay: `${(i * 0.11) % 1.5}s`,
                                                            animationDuration: `${0.5 + ((i * 0.07) % 0.4)}s`,
                                                            opacity: 0.15 + ((i * 0.05) % 0.3)
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        {surfaceClass === 'sno-vinterfore' && (
                                            <div className="weather-overlay snow-overlay">
                                                {Array.from({ length: 30 }).map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className="snow-flake"
                                                        style={{
                                                            left: `${(i * 13) % 100}%`,
                                                            animationDelay: `${(i * 0.17) % 3}s`,
                                                            animationDuration: `${1.4 + ((i * 0.11) % 1.6)}s`,
                                                            opacity: 0.2 + ((i * 0.07) % 0.6),
                                                            transform: `scale(${0.6 + ((i * 0.09) % 0.8)})`
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        {surfaceClass === 'is' && (
                                            <div className="weather-overlay ice-overlay">
                                                <div className="frost-vignette" />
                                                <div className="ice-shimmer-pattern" />
                                            </div>
                                        )}

                                        {/* Result visual segments (shown after stopping) */}
                                        {showResultSegments && (
                                            <>
                                                <div
                                                    className="segment reaction animate-glow"
                                                    style={{ left: '12%', width: `${Math.max(4, reactionEnd - 12)}%` }}
                                                />
                                                <div
                                                    className="segment braking animate-glow"
                                                    style={{ left: `${reactionEnd}%`, width: `${Math.max(4, stopEnd - reactionEnd)}%` }}
                                                />
                                                <div
                                                    className={`stop-marker ${isOverlap ? 'overlap-adjust' : ''}`}
                                                    style={{ left: `${stopEnd}%` }}
                                                >
                                                    <div className="stop-marker-flag">Fasit: {values.stopping} m</div>
                                                </div>
                                            </>
                                        )}

                                        {/* User's guess marker (flag/cone) */}
                                        {showGuessMarker && (
                                            <div className={`guess-marker ${isOverlap ? 'overlap-adjust' : ''}`} style={{ left: `${percent(guess)}%` }}>
                                                <div className="guess-marker-flag">Ditt estimat: {guess} m</div>
                                            </div>
                                        )}

                                        {/* Interactive Car component */}
                                        <div
                                            className={`car ${isMoving ? 'moving' : ''} ${carDipping ? 'dipping' : ''} ${isBraking ? 'braking' : ''} phase-${animatingPhase} feedback-${feedback.type}`}
                                            style={{ left: carLeft, ...getCarTransitionStyle() }}
                                            aria-hidden="true"
                                        >
                                            <img
                                                src="/images/renault5.png"
                                                alt="Renault 5"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain',
                                                    display: 'block'
                                                }}
                                            />

                                            {/* Tire Smoke / Water / Snow Emitter sprays */}
                                            {tireSmoke && (
                                                <div className="tire-spray-emitters">
                                                    <div className="spray-emitter rear">
                                                        <span className="spray-drop drop-1" />
                                                        <span className="spray-drop drop-2" />
                                                        <span className="spray-drop drop-3" />
                                                    </div>
                                                    <div className="spray-emitter front">
                                                        <span className="spray-drop drop-1" />
                                                        <span className="spray-drop drop-2" />
                                                        <span className="spray-drop drop-3" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="meter-line-panel">
                                        <span className="meter-tick" style={{ left: '12%' }}>0 m</span>
                                        <span className="meter-tick" style={{ left: '52%' }}>{Math.round(scale / 2)} m</span>
                                        <span className="meter-tick" style={{ left: '92%' }}>{scale} m</span>
                                    </div>

                                    <div className="legend-bar">
                                        <span className="legend-item blue">Reaksjon</span>
                                        <span className="legend-item orange">Bremsing</span>
                                        <span className="legend-item green">Riktig stoppunkt</span>
                                    </div>
                                </div>
                            </section>

                            {/* Bottom: Control Panel split into left inputs and right explanation */}
                            <div className="control-panel">
                                <section className="task-panel" aria-labelledby="task-title">
                                    <span className="label hide-on-mobile" id="task-title">Situasjon</span>
                                    <p className="task-description">
                                        Du kjører i {currentScenario.speed} km/t på {currentScenario.surface.toLowerCase()}. Hvor mange meter trenger bilen omtrent før den står stille?
                                    </p>

                                    <span className="label">Hva blir total stopplengde omtrent?</span>
                                    
                                    <div className="slider-container-box">
                                        <div className="guess-display">
                                            <span className="number">{guess}</span>
                                            <span className="unit">meter</span>
                                        </div>

                                        <div className="slider-wrapper">
                                            <button 
                                                className="slider-adjust-btn minus" 
                                                onMouseDown={() => startAdjusting(-1)}
                                                onTouchStart={() => startAdjusting(-1)}
                                                disabled={hasAnswered}
                                                type="button"
                                                aria-label="Senk anslag med 1 meter"
                                            >
                                                -
                                            </button>
                                            
                                            <div className="slider-input-container">
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max={scale}
                                                    step="1"
                                                    value={guess}
                                                    onChange={handleSliderChange}
                                                    disabled={hasAnswered}
                                                    className="stopplengde-slider-tactile"
                                                    aria-label="Velg total stopplengde i meter"
                                                    style={{ '--slider-percentage': `${(guess / scale) * 100}%` } as React.CSSProperties}
                                                />
                                            </div>

                                            <button 
                                                className="slider-adjust-btn plus" 
                                                onMouseDown={() => startAdjusting(1)}
                                                onTouchStart={() => startAdjusting(1)}
                                                disabled={hasAnswered}
                                                type="button"
                                                aria-label="Øk anslag med 1 meter"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <div className="range-labels">
                                            <span>0 m</span>
                                            <span>{scale} m</span>
                                        </div>
                                        
                                        <p className="slider-instruction">
                                            {!hasMovedSlider && 'Start på 0 meter og dra slideren eller trykk på pluss/minus til ditt beste estimat.'}
                                            {hasMovedSlider && !hasAnswered && 'Når du er fornøyd med estimatet ditt, sjekk svaret.'}
                                            {hasAnswered && 'Du har sjekket svaret. Klikk på Neste oppgave for å gå videre.'}
                                        </p>
                                    </div>

                                    <div className="action-buttons">
                                        <button
                                            className="action-btn primary"
                                            onClick={handleCheckAnswer}
                                            disabled={!hasMovedSlider || hasAnswered}
                                            type="button"
                                        >
                                            Sjekk svaret
                                        </button>
                                        <button
                                            className="action-btn secondary"
                                            onClick={handleNext}
                                            disabled={!hasAnswered}
                                            type="button"
                                        >
                                            {currentIndex === scenarios.length - 1 ? 'Se resultat' : 'Neste oppgave'}
                                        </button>
                                    </div>
                                </section>

                                <section className="feedback-details-panel">
                                    <div className={`feedback-card ${feedback.type}`}>
                                        <h3 className="feedback-card-title">{feedback.title}</h3>
                                        <p className="feedback-card-text">{feedback.text}</p>
                                    </div>

                                    {/* Detailed math and explanation, reveals after answering */}
                                    {hasAnswered && animatingPhase === 'finished' ? (
                                        <div className="reveal-content-panel">
                                            <div className="breakdown-details">
                                                <div className="breakdown-row">
                                                    <span className="label-text"><span className="dot blue-dot" /> Reaksjonslengde</span>
                                                    <strong className="value-text">{values.reaction} m</strong>
                                                </div>
                                                <div className="breakdown-row">
                                                    <span className="label-text"><span className="dot orange-dot" /> Bremselengde</span>
                                                    <strong className="value-text">{values.braking} m</strong>
                                                </div>
                                                <div className="breakdown-row highlight">
                                                    <span className="label-text"><span className="dot green-dot" /> Total stopplengde</span>
                                                    <strong className="value-text">{values.stopping} m</strong>
                                                </div>
                                            </div>

                                            <div className="explanation-math-card">
                                                <h4>Utregning av teoretiske verdier</h4>
                                                <ul className="explanation-math-list">
                                                    <li>
                                                        <strong>Reaksjonslengde:</strong>
                                                        <div className="formula">({currentScenario.speed} km/t / 10) × 3 = <span>{values.reaction} meter</span></div>
                                                    </li>
                                                    <li>
                                                        <strong>Bremselengde på tørr vei:</strong>
                                                        <div className="formula">({currentScenario.speed} / 10)² / 2 = <span>{values.dryBraking} meter</span></div>
                                                    </li>
                                                    {currentScenario.multiplier > 1 && (
                                                        <li>
                                                            <strong>Føreregulering ({currentScenario.surface}):</strong>
                                                            <div className="formula">{values.dryBraking} m × {currentScenario.multiplier} = <span>{values.braking} meter</span></div>
                                                        </li>
                                                    )}
                                                    <li className="sum">
                                                        <strong>Total stopplengde:</strong>
                                                        <div className="formula">{values.reaction} m + {values.braking} m = <span>{values.stopping} meter</span></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="huskeregel-info-card">
                                            <h4>Huskeregelen for stopplengde</h4>
                                            <p>
                                                <strong>Reaksjonslengde + bremselengde = stopplengde.</strong>
                                            </p>
                                            <p>
                                                Farten betyr enormt mye for bremselengden: <strong>dobbel fart gir fire ganger så lang bremselengde</strong>, fordi bremselengden øker kvadratisk med farten!
                                            </p>
                                        </div>
                                    )}
                                </section>
                            </div>
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
