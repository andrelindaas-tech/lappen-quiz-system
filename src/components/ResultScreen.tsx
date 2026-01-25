// Action Layer: Result Screen Component
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
    return (
        <div className="result-screen">
            <div className="result-icon">
                {result.passed ? '✅' : '❌'}
            </div>

            <h1 className={`result-status ${result.passed ? 'passed' : 'failed'}`}>
                {result.passed ? 'BESTÅTT!' : 'IKKE BESTÅTT'}
            </h1>

            <p className="result-mode-name">{mode.name}</p>

            <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--spacing-xl)' }}>
                {result.passed
                    ? 'Gratulerer! Du har bestått teoriprøven.'
                    : 'Du må øve mer og prøve igjen.'}
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
                        {result.errors} / {result.maxErrors}
                    </span>
                </div>

                <div className="result-stat">
                    <span className="result-stat-label">Prosent:</span>
                    <span className="result-stat-value">{result.percentage}%</span>
                </div>
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
