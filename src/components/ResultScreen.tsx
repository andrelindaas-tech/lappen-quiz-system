// Action Layer: Result Screen Component
import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import type { QuizResult } from '../logic/quizEngine'
import type { QuizMode } from '../types/quiz.types'

interface ResultScreenProps {
    result: QuizResult
    mode: QuizMode
    onRestart: () => void
    onReview: () => void
    onReturnHome: () => void
}

export default function ResultScreen({ result, mode, onRestart, onReview, onReturnHome }: ResultScreenProps) {
    // Trigger confetti when passing full test or clearing Fokus mode
    useEffect(() => {
        const isFullPass = mode.name === 'Full prøve' && result.passed
        const isFokusCleared = mode.isFokusMode && result.passed && result.errors === 0

        if (isFullPass || isFokusCleared) {
            // Celebrate!
            const duration = 3000
            const end = Date.now() + duration

            const frame = () => {
                confetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#9333ea', '#f59e0b', '#3b82f6']
                })
                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#9333ea', '#f59e0b', '#3b82f6']
                })

                if (Date.now() < end) {
                    requestAnimationFrame(frame)
                }
            }

            frame()
        }
    }, [mode.isFokusMode, mode.name, result.passed, result.errors])

    // Special message for Fokus mode cleared
    const isFokusCleared = mode.isFokusMode && result.passed && result.errors === 0

    return (
        <div className="result-screen">
            <div className="result-icon">
                {isFokusCleared ? '🎉' : result.passed ? '✅' : '❌'}
            </div>

            <h1 className={`result-status ${result.passed ? 'passed' : 'failed'}`}>
                {isFokusCleared ? 'FOKUS MODE CLEARED!' : result.passed ? 'BESTÅTT!' : 'IKKE BESTÅTT'}
            </h1>

            <p className="result-mode-name">{mode.name}</p>

            <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--spacing-xl)' }}>
                {isFokusCleared
                    ? '🌟 Fantastisk! Du har mestret alle feilene dine!'
                    : result.passed
                        ? (mode.name === 'Full prøve' ? 'Gratulerer! Du har bestått teoriprøven.' : 'Bra jobba! Du besto øvingstesten.')
                        : (mode.isFokusMode ? 'Du har fortsatt noen feil å jobbe med. Prøv igjen!' : 'Du må øve mer og prøve igjen.')}
            </p>

            <div className="result-details">
                <div className="result-stat">
                    <span className="result-stat-label">Antall spørsmål:</span>
                    <span className="result-stat-value">{result.totalCount}</span>
                </div>

                <div className="result-stat">
                    <span className="result-stat-label">Riktige svar:</span>
                    <span className="result-stat-value">{result.correctCount}</span>
                </div>

                <div className="result-stat">
                    <span className="result-stat-label">Feil:</span>
                    <span className="result-stat-value" style={{
                        color: result.errors > result.maxErrors ? 'var(--color-error)' : 'inherit'
                    }}>
                        {result.errors} <span style={{ fontSize: '0.85em', opacity: 0.8, fontWeight: 'normal', marginLeft: '0.25rem' }}>(Maks {result.maxErrors})</span>
                    </span>
                </div>

                <div className="result-stat">
                    <span className="result-stat-label">Prosent:</span>
                    <span className="result-stat-value">{result.percentage}%</span>
                </div>

                {/* Show time taken if timer was used */}
                {result.timeTaken !== undefined && (
                    <div className="result-stat">
                        <span className="result-stat-label">Tid brukt:</span>
                        <span className="result-stat-value">
                            {Math.floor(result.timeTaken / 60)}m {result.timeTaken % 60}s
                            {mode.timeLimitMinutes && ` / ${mode.timeLimitMinutes}m`}
                        </span>
                    </div>
                )}
            </div>

            <div className="result-actions">
                <button
                    className="button"
                    onClick={onRestart}
                >
                    🔄 Prøv igjen ({mode.name})
                </button>

                {result.errors > 0 && (
                    <button
                        className="button button-secondary"
                        onClick={onReview}
                    >
                        📖 Se feilene dine ({result.errors})
                    </button>
                )}

                <button
                    className="button button-secondary"
                    onClick={onReturnHome}
                >
                    🏠 Tilbake til start
                </button>
            </div>
        </div>
    )
}
