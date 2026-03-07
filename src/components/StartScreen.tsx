// Start Screen Component - Mode Selection
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getWrongAnswersCount } from '../utils/wrongAnswersStore'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'

export default function StartScreen() {
    const [fokusCount, setFokusCount] = useState(0)
    const [useTimerForFull, setUseTimerForFull] = useState(false)
    const navigate = useNavigate()

    // Manage Metadata for Home Page
    useDocumentMetadata({
        title: 'Teori-test.no – Gratis øvingsprøve for førerkort klasse B',
        description: 'Øv gratis på teoriprøven for førerkort klasse B (personbil). Realistiske øvingsprøver med trafikkregler, skilt, sikkerhet og mer.'
    })

    // Load wrong answers count on mount and when returning from quiz
    useEffect(() => {
        const count = getWrongAnswersCount()
        setFokusCount(count)
        console.log(`🎯 Fokus mode has ${count} questions`)
    }, [])

    return (
        <div className="start-screen">
            <h1>Øv til teoriprøven – enkelt og gratis</h1>

            <div className="hero-section">
                <p className="hero-description">
                    Her finner du kvalitetssikrede teorioppgaver for klasse B. Vi oppdaterer stadig siden med nye spørsmål og smarte funksjoner for å hjelpe deg på vei mot førerkortet.
                </p>
                <div className="features-strip">
                    <div className="feature-item">
                        <span className="feature-icon">✅</span>
                        <span>Gratis øving</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">🆕</span>
                        <span>Nye spørsmål</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon" style={{ transform: 'scale(1.2)', display: 'inline-block' }}>🇳🇴</span>
                        <span>Norske forhold</span>
                    </div>
                </div>
            </div>

            <div className="mode-selection-header">
                <h2>Velg prøvetype</h2>
                <p>Velg mellom en rask øvingstest eller full eksamensprøve</p>
            </div>

            <div className="mode-cards">
                <button
                    className="mode-card mode-card-express"
                    onClick={() => navigate('/quiz?mode=hurtig')}
                >
                    <div className="mode-icon">⚡️</div>
                    <h2>Ekspresstest</h2>
                    <p>10 spørsmål - Maks 2 feil</p>
                    <span className="mode-badge mode-badge-express">Rask øving</span>
                </button>

                <button
                    className="mode-card mode-card-full"
                    onClick={() => navigate(`/quiz?mode=eksamen${useTimerForFull ? '&timer=true' : ''}`)}
                >
                    <div className="mode-icon">📝</div>
                    <h2>Full prøve</h2>
                    <p>45 spørsmål - Maks 7 feil</p>
                    <span className="mode-badge mode-badge-full">Offisiell format</span>

                    {/* Timer toggle checkbox */}
                    <div
                        className="timer-toggle"
                        onClick={(e) => {
                            e.stopPropagation() // Prevent card click
                            setUseTimerForFull(!useTimerForFull)
                        }}
                    >
                        <input
                            type="checkbox"
                            id="timer-toggle"
                            checked={useTimerForFull}
                            onChange={() => { }} // Handled by parent div
                        />
                        <label htmlFor="timer-toggle">
                            ⏱️  Tidsbegrensning (90 min)
                        </label>
                    </div>
                </button>

                <button
                    className="mode-card mode-card-skilt"
                    onClick={() => navigate('/quiz/skilt')}
                >
                    <div className="mode-icon">🚥</div>
                    <h2>Skilt-test</h2>
                    <p>10 skilte spørsmål - Maks 1 feil</p>
                    <span className="mode-badge mode-badge-skilt">Kun skilter</span>
                </button>

                <button
                    className="mode-card mode-card-fokus"
                    onClick={() => navigate('/quiz?mode=fokus')}
                    disabled={fokusCount === 0}
                >
                    <div className="mode-icon">🎯</div>
                    <h2>Fokus mode</h2>
                    <p>
                        {fokusCount === 0
                            ? 'Ingen feil å øve på ennå'
                            : `Øv på feil du har gjort`
                        }
                    </p>
                    <span className="mode-badge mode-badge-fokus">
                        {fokusCount === 0 ? '0 feil' : `${fokusCount} feil`}
                    </span>
                </button>
            </div>
        </div>
    )
}
