// Start Screen Component - Mode Selection
import type { QuizMode } from '../types/quiz.types'

interface StartScreenProps {
    onStartQuiz: (mode: QuizMode) => void
}

export default function StartScreen({ onStartQuiz }: StartScreenProps) {
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
        description: '45 spørsmål - Maks 7 feil'
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
                    <div className="mode-icon">⚡</div>
                    <h2>{expressMode.name}</h2>
                    <p>{expressMode.description}</p>
                    <span className="mode-badge mode-badge-express">Rask øving</span>
                </button>

                <button
                    className="mode-card mode-card-full"
                    onClick={() => onStartQuiz(fullMode)}
                >
                    <div className="mode-icon">📋</div>
                    <h2>{fullMode.name}</h2>
                    <p>{fullMode.description}</p>
                    <span className="mode-badge mode-badge-full">Offisiell format</span>
                </button>
            </div>
        </div>
    )
}
