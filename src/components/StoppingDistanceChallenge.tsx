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

            const reactionEndVal = Math.min(values.reaction, guess)
            const reactionEndPos = percent(reactionEndVal)
            setCarLeft(`${reactionEndPos}%`)

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
    const isOverlap = showResultSegments && showGuessMarker && Math.abs(guess - values.stopping) <= 8

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
            return { transition: 'left 1500ms cubic-bezier(0.1, 0.6, 0.25, 1)' }
        }
        return { transition: 'left 300ms ease' }
    }

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
                        <div className="challenge-dashboard">
                            {/* Top: Large cinematic visual test */}
                            <section className="simulator-section" aria-labelledby="visual-title">
                                <div className="simulator-header">
                                    <span className="label" id="visual-title">Visuell simulator</span>
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
                                            <svg viewBox="0 0 110 50" role="img" style={{ overflow: 'visible' }}>
                                                <defs>
                                                    <linearGradient id="body-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#0f172a" />
                                                        <stop offset="30%" stopColor="#1e3a8a" />
                                                        <stop offset="65%" stopColor="#3b82f6" />
                                                        <stop offset="90%" stopColor="#60a5fa" />
                                                        <stop offset="100%" stopColor="#1d4ed8" />
                                                    </linearGradient>
                                                    <linearGradient id="window-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" stopColor="#1e293b" />
                                                        <stop offset="100%" stopColor="#020617" />
                                                    </linearGradient>
                                                    <linearGradient id="wheel-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="#f8fafc" />
                                                        <stop offset="50%" stopColor="#94a3b8" />
                                                        <stop offset="100%" stopColor="#475569" />
                                                    </linearGradient>
                                                    <linearGradient id="headlight-beam-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="rgba(224, 242, 254, 0.4)" />
                                                        <stop offset="30%" stopColor="rgba(56, 189, 248, 0.15)" />
                                                        <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
                                                    </linearGradient>
                                                    <linearGradient id="brakelight-beam-grad" x1="100%" y1="0%" x2="0%" y2="0%">
                                                        <stop offset="0%" stopColor="rgba(239, 68, 68, 0.4)" />
                                                        <stop offset="40%" stopColor="rgba(239, 68, 68, 0.12)" />
                                                        <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
                                                    </linearGradient>
                                                </defs>

                                                {/* Dynamic underglow matching state/feedback */}
                                                <ellipse cx="58" cy="42" rx="46" ry="4.5" className="underglow" />

                                                {/* Volumetric beams that display dynamically */}
                                                <polygon points="104,26 240,8 240,46 104,30" fill="url(#headlight-beam-grad)" className="headlight-beam" />
                                                <polygon points="8,26 -70,16 -70,36 8,28" fill="url(#brakelight-beam-grad)" className="brakelight-beam" />

                                                {/* Car drop shadow */}
                                                <ellipse cx="58" cy="43.5" rx="48" ry="3.5" fill="rgba(0, 0, 0, 0.55)" filter="blur(1.5px)" />

                                                {/* Wheel wells/housing */}
                                                <path d="M 19.5 38 A 11.5 11.5 0 0 1 42.5 38 Z" fill="#020617" opacity="0.75" />
                                                <path d="M 72.5 38 A 11.5 11.5 0 0 1 95.5 38 Z" fill="#020617" opacity="0.75" />

                                                {/* Car Body - Sleek sports sedan outline */}
                                                <path
                                                    d="M 6 34 C 6 30, 7 27, 10 25 C 13 23, 20 21, 26 21 C 31 21, 35 19, 39 15 C 43 11, 48 9.5, 54 9.5 H 72 C 78 9.5, 82 11, 86 16 L 93 21 L 102 23 C 106 24, 109 27, 109 31 C 109 33.5, 108 36, 106 37 L 106 38 H 6 Z"
                                                    fill="url(#body-grad)"
                                                />

                                                {/* Chrome trim details */}
                                                <path d="M 10 25 Q 26 21 39 15" fill="none" stroke="#94a3b8" strokeWidth="0.8" opacity="0.5" />
                                                <path d="M 6 34 H 106" fill="none" stroke="#0f172a" strokeWidth="1" />

                                                {/* Windows / Cabin with sport lines */}
                                                <path
                                                    d="M 40 13 H 70 C 74.5 13, 78 15, 81.5 20 H 34.5 Z"
                                                    fill="url(#window-grad)"
                                                />
                                                <path d="M 56.5 13 V 20" stroke="#475569" strokeWidth="1.2" />
                                                {/* Sleek window pillar slope */}
                                                <path d="M 70 13 L 79.5 20" stroke="#475569" strokeWidth="1" />
                                                
                                                {/* Window reflection streaks */}
                                                <path d="M 42 13 L 51 20 H 54 L 45 13 Z" fill="rgba(255, 255, 255, 0.16)" />
                                                <path d="M 59 13 L 67 20 H 70 L 62 13 Z" fill="rgba(255, 255, 255, 0.08)" />

                                                {/* Panel doors creases */}
                                                <path d="M 33 21 V 38" stroke="rgba(0, 0, 0, 0.25)" strokeWidth="0.8" />
                                                <path d="M 57 21 V 38" stroke="rgba(0, 0, 0, 0.25)" strokeWidth="0.8" />
                                                <path d="M 81 21 C 81 26, 82 28, 85 30" fill="none" stroke="rgba(0, 0, 0, 0.25)" strokeWidth="0.8" />

                                                {/* Body crease highlights */}
                                                <path d="M 12 28 Q 58 26.5 103 28.5" fill="none" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="0.8" />
                                                <path d="M 12 29 Q 58 27.5 103 29.5" fill="none" stroke="rgba(0, 0, 0, 0.3)" strokeWidth="0.8" />

                                                {/* Sport Door Handles */}
                                                <rect x="42.5" y="23.5" width="6" height="1.2" rx="0.4" fill="#cbd5e1" stroke="#334155" strokeWidth="0.4" />
                                                <rect x="67.5" y="23.5" width="6" height="1.2" rx="0.4" fill="#cbd5e1" stroke="#334155" strokeWidth="0.4" />

                                                {/* Sports Side Mirror */}
                                                <path d="M 34.5 19.5 C 33.5 19.5, 30.5 18, 30.5 17.5 C 30.5 17, 32.5 17, 34.5 18.5" fill="#1e3a8a" stroke="#0f172a" strokeWidth="0.5" />

                                                {/* Futuristic LED Headlight */}
                                                <path
                                                    d="M 102 24 C 105 25, 108 27.5, 108 29.5 L 105 31.5 C 103 29.5, 101 26.5, 102 24 Z"
                                                    fill="#e0f2fe"
                                                    stroke="#0284c7"
                                                    strokeWidth="0.5"
                                                    filter="drop-shadow(0 0 2px #38bdf8)"
                                                />
                                                <circle cx="104.5" cy="27.5" r="1" fill="#ffffff" />
                                                <circle cx="106" cy="29" r="0.8" fill="#ffffff" />

                                                {/* LED Taillight wrap-around */}
                                                <path
                                                    className="taillight"
                                                    d="M 6 26.5 C 7.5 25, 11 25.2, 13 25.8 L 12.5 28 C 10.5 27.2, 7.5 27.2, 6 26.5 Z"
                                                    fill="#991b1b"
                                                    stroke="#7f1d1d"
                                                    strokeWidth="0.5"
                                                />
                                                <path d="M 5.8 26.5 H 12" stroke="#ff3333" strokeWidth="0.8" filter="drop-shadow(0 0 1px #ef4444)" />

                                                {/* Stationary Brake Calipers (behind wheel spokes) */}
                                                <g className="brake-caliper rear-caliper">
                                                    <path d="M 8.5 33.5 A 7 7 0 0 1 12.5 31" stroke="none" fill="none" /> {/* Placeholder/aligner */}
                                                    <path d="M 36.5 33.5 A 7 7 0 0 0 32.5 31" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                                                </g>
                                                <g className="brake-caliper front-caliper">
                                                    <path d="M 89.5 33.5 A 7 7 0 0 0 85.5 31" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                                                </g>

                                                {/* Rear Wheel (hub: 31, 38) */}
                                                <circle cx="31" cy="38" r="9" fill="#090d16" stroke="#1e293b" strokeWidth="0.8" />
                                                {/* Alloy Rim face */}
                                                <circle cx="31" cy="38" r="6.2" fill="url(#wheel-grad)" />
                                                {/* Rim Inner Lip */}
                                                <circle cx="31" cy="38" r="5" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                                                {/* Wheel spokes group (spins) */}
                                                <g className="wheel-spokes" style={{ transformOrigin: '31px 38px' }}>
                                                    <circle cx="31" cy="38" r="1.8" fill="#334155" />
                                                    <line x1="31" y1="38" x2="31" y2="32" stroke="#f8fafc" strokeWidth="1" />
                                                    <line x1="31" y1="38" x2="36.7" y2="39.8" stroke="#f8fafc" strokeWidth="1" />
                                                    <line x1="31" y1="38" x2="34.5" y2="43.5" stroke="#f8fafc" strokeWidth="1" />
                                                    <line x1="31" y1="38" x2="27.5" y2="43.5" stroke="#f8fafc" strokeWidth="1" />
                                                    <line x1="31" y1="38" x2="25.3" y2="39.8" stroke="#f8fafc" strokeWidth="1" />
                                                    {/* Wheel bolts */}
                                                    <circle cx="31" cy="35" r="0.4" fill="#cbd5e1" />
                                                    <circle cx="33.8" cy="37" r="0.4" fill="#cbd5e1" />
                                                    <circle cx="32.8" cy="40.3" r="0.4" fill="#cbd5e1" />
                                                    <circle cx="29.2" cy="40.3" r="0.4" fill="#cbd5e1" />
                                                    <circle cx="28.2" cy="37" r="0.4" fill="#cbd5e1" />
                                                </g>

                                                {/* Front Wheel (hub: 84, 38) */}
                                                <circle cx="84" cy="38" r="9" fill="#090d16" stroke="#1e293b" strokeWidth="0.8" />
                                                {/* Alloy Rim face */}
                                                <circle cx="84" cy="38" r="6.2" fill="url(#wheel-grad)" />
                                                {/* Rim Inner Lip */}
                                                <circle cx="84" cy="38" r="5" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                                                {/* Wheel spokes group (spins) */}
                                                <g className="wheel-spokes" style={{ transformOrigin: '84px 38px' }}>
                                                    <circle cx="84" cy="38" r="1.8" fill="#334155" />
                                                    <line x1="84" y1="38" x2="84" y2="32" stroke="#f8fafc" strokeWidth="1" />
                                                    <line x1="84" y1="38" x2="89.7" y2="39.8" stroke="#f8fafc" strokeWidth="1" />
                                                    <line x1="84" y1="38" x2="87.5" y2="43.5" stroke="#f8fafc" strokeWidth="1" />
                                                    <line x1="84" y1="38" x2="80.5" y2="43.5" stroke="#f8fafc" strokeWidth="1" />
                                                    <line x1="84" y1="38" x2="78.3" y2="39.8" stroke="#f8fafc" strokeWidth="1" />
                                                    {/* Wheel bolts */}
                                                    <circle cx="84" cy="35" r="0.4" fill="#cbd5e1" />
                                                    <circle cx="86.8" cy="37" r="0.4" fill="#cbd5e1" />
                                                    <circle cx="85.8" cy="40.3" r="0.4" fill="#cbd5e1" />
                                                    <circle cx="82.2" cy="40.3" r="0.4" fill="#cbd5e1" />
                                                    <circle cx="81.2" cy="37" r="0.4" fill="#cbd5e1" />
                                                </g>

                                                {/* Chassis Underbody Line */}
                                                <path
                                                    d="M 12 38.5 H 102"
                                                    stroke="#0f172a"
                                                    strokeWidth="1.2"
                                                    strokeLinecap="round"
                                                    fill="none"
                                                />
                                            </svg>

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
                                    <span className="label" id="task-title">Situasjon</span>
                                    <div className="scenario-badges">
                                        <span className="scenario-badge speed">{currentScenario.speed} km/t</span>
                                        <span className="scenario-badge surface">{currentScenario.surface}</span>
                                    </div>
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
