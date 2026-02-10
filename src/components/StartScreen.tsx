// Start Screen Component - Mode Selection
import { useState, useEffect } from 'react'
import type { QuizMode } from '../types/quiz.types'
import { getWrongAnswersCount } from '../utils/wrongAnswersStore'

interface StartScreenProps {
    onStartQuiz: (mode: QuizMode) => void
}

export default function StartScreen({ onStartQuiz }: StartScreenProps) {
    const [fokusCount, setFokusCount] = useState(0)
    const [useTimerForFull, setUseTimerForFull] = useState(false)

    // Load wrong answers count on mount and when returning from quiz
    useEffect(() => {
        const count = getWrongAnswersCount()
        setFokusCount(count)
        console.log(`🎯 Fokus mode has ${count} questions`)
    }, [])

    const expressMode: QuizMode = {
        name: 'Ekspresstest',
        questionCount: 10,
        maxErrors: 2,
        description: '10 spørsmål - Maks 2 feil'
    }

    const fullMode: QuizMode = {
        name: 'Full prøve',
        questionCount: 45,
        maxErrors: 7,
        description: '45 spørsmål - Maks 7 feil',
        timeLimitMinutes: 90,
        useTimer: useTimerForFull
    }

    const skiltMode: QuizMode = {
        name: 'Skilt-test',
        questionCount: 10,
        maxErrors: 1,
        description: '10 skilte spørsmål - Maks 1 feil',
        category: 'skilt'
    }

    const fokusMode: QuizMode = {
        name: 'Fokus mode',
        questionCount: fokusCount,
        maxErrors: 0, // Must get all correct to clear Fokus mode
        description: `Øv på ${fokusCount} feil${fokusCount === 1 ? '' : ''}`,
        isFokusMode: true
    }

    return (
        <div className="start-screen">
            <h1>Velg prøvetype</h1>
            <p style={{
                color: 'var(--color-text-light)',
                fontSize: 'var(--font-size-lg)',
                marginBottom: 'var(--spacing-xl)'
            }}>
                Velg mellom en rask øvingstest eller full eksamensprøve
            </p>

            <div className="mode-cards">
                <button
                    className="mode-card mode-card-express"
                    onClick={() => onStartQuiz(expressMode)}
                >
                    <div className="mode-icon">⚡️</div>
                    <h2>{expressMode.name}</h2>
                    <p>{expressMode.description}</p>
                    <span className="mode-badge mode-badge-express">Rask øving</span>
                </button>

                <button
                    className="mode-card mode-card-full"
                    onClick={() => onStartQuiz(fullMode)}
                >
                    <div className="mode-icon">📝</div>
                    <h2>{fullMode.name}</h2>
                    <p>{fullMode.description}</p>
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
                    onClick={() => onStartQuiz(skiltMode)}
                >
                    <div className="mode-icon">🚥</div>
                    <h2>{skiltMode.name}</h2>
                    <p>{skiltMode.description}</p>
                    <span className="mode-badge mode-badge-skilt">Kun skilter</span>
                </button>

                <button
                    className="mode-card mode-card-fokus"
                    onClick={() => onStartQuiz(fokusMode)}
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
