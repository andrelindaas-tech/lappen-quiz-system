// Action Layer: Result Screen Component
import { useEffect } from 'react'
import CategoryResult from './CategoryResult'
import confetti from 'canvas-confetti'
import { useCountUp } from '../hooks/useCountUp'
import type { QuizResult } from '../logic/quizEngine'
import type { QuizMode } from '../types/quiz.types'

interface ResultScreenProps {
    result: QuizResult
    questionIds?: number[]
    preview?: boolean
    mode: QuizMode
    onRestart: () => void
    onReview: () => void
    onReturnHome: () => void
}

export default function ResultScreen({ result, mode, onRestart, onReview, onReturnHome }: ResultScreenProps) {
    // Celebrate only the concrete achievement of clearing all saved Fokus questions.
    useEffect(() => {
        const isFokusCleared = mode.isFokusMode && result.passed && result.errors === 0

        if (isFokusCleared) {
            // Celebrate!
            const duration = 3000
            const end = Date.now() + duration

            const frame = () => {
                confetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#2dd4bf', '#f59e0b', '#38bdf8']
                })
                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#2dd4bf', '#f59e0b', '#38bdf8']
                })

                if (Date.now() < end) {
                    requestAnimationFrame(frame)
                }
            }

            frame()
        }
    }, [mode.isFokusMode, mode.name, result.passed, result.errors])

    // Special message for Fokusmodus cleared
    const isFokusCleared = mode.isFokusMode && result.passed && result.errors === 0
    const requiredCorrect = Math.max(0, result.totalCount - result.maxErrors)
    const thresholdPercent = result.totalCount ? requiredCorrect / result.totalCount * 100 : 0
    const errorReference = result.errors === 1 ? 'det ene feilsvaret' : `de ${result.errors} feilsvarene`
    const resultSummary = isFokusCleared
        ? 'Du svarte riktig på alle spørsmålene i denne fokustesten. Ingen av disse feilsvarene er lenger lagret i Fokusmodus.'
        : result.unanswered
            ? `Du svarte riktig på ${result.correctCount} av ${result.totalCount} spørsmål. ${result.unanswered} ble ikke besvart. Se gjennom feil og ubesvarte før du øver videre.`
        : result.errors === 0
            ? `Du svarte riktig på alle ${result.totalCount} spørsmål i denne testen.`
            : `Du svarte riktig på ${result.correctCount} av ${result.totalCount} spørsmål. Se gjennom ${errorReference}, og ta en ny ${mode.name === 'Ekspresstest' ? 'ekspresstest' : 'test'}.`

    // Bare markøren animeres; resultatet skal være riktig fra første visning.
    const animPercentage = useCountUp(result.percentage)

    return (
        <div className="result-screen">
            <h2 className="result-status">
                {mode.isFokusMode ? 'Resultat fra fokustesten' : result.passed ? 'Bestått på denne øvingstesten' : 'Ikke bestått på denne øvingstesten'}
            </h2>

            <p className="result-mode-name">{mode.name}</p>
            {!mode.isFokusMode && <p>{result.errors} feil · Maks {result.maxErrors} feil</p>}

            <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--spacing-xl)' }}>
                {resultSummary}
            </p>

            <div className="score-bar-container" style={{ margin: 'var(--spacing-lg) 0 var(--spacing-xl) 0', width: '100%', display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1rem', fontWeight: 600 }}>
                    <span style={{ color: 'var(--color-text)' }}>Riktige svar: {result.correctCount} av {result.totalCount}</span>
                    <span style={{ color: 'var(--color-primary)' }}>{result.percentage}%</span>
                </div>
                <div style={{ position: 'relative', width: '100%', height: '14px', background: 'linear-gradient(to right, #E24B4A 0%, #EF9F27 40%, #97C459 70%, #1D9E75 100%)', borderRadius: '7px' }}>
                    {!mode.isFokusMode && <div aria-hidden="true" style={{ position: 'absolute', left: `${thresholdPercent}%`, top: '-4px', height: '22px', borderLeft: '2px dashed var(--color-text)' }} />}
                    <div style={{ position: 'absolute', left: `${animPercentage}%`, transform: 'translateX(-50%)', top: '-3px', width: '3px', height: '20px', backgroundColor: 'var(--color-text)', borderRadius: '1.5px', border: '1px solid var(--color-bg)', boxShadow: 'var(--shadow-sm)' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
                    <span>
                        {mode.isExamMode
                            ? `Denne testen: ${result.errors} feil · Teoriprøven: maks ${result.maxErrors} feil`
                            : mode.isFokusMode
                                ? `${result.errors} spørsmål gjenstår i Fokusmodus`
                                : `${result.errors} feil i denne testen`}
                    </span>
                </div>
            </div>

            {!mode.isFokusMode && <p>Krav i denne testen: {requiredCorrect} riktige av {result.totalCount}.</p>}
            <p className="category-result-note">Bestått her er ingen garanti for å bestå teoriprøven hos Statens vegvesen.</p>

            {Boolean(result.unanswered) && <p>{result.unanswered} spørsmål ble ikke besvart. De teller som feil i totalscoren.</p>}
            {result.timeTaken !== undefined && <div className="result-details">
                    <div className="result-stat">
                        <span className="result-stat-label">Tid brukt:</span>
                        <span className="result-stat-value">
                            {Math.floor(result.timeTaken / 60)}m {result.timeTaken % 60}s
                            {mode.timeLimitMinutes && ` / ${mode.timeLimitMinutes}m`}
                        </span>
                    </div>
            </div>}

            <CategoryResult breakdown={result.categoryBreakdown} unanswered={result.unanswered} onReview={onReview} />

            {/* Neste steg: spill + Min fremgang (synliggjør retention-flatene der motivasjonen er høyest) */}
            <div style={{ margin: 'var(--spacing-xl) 0', padding: 'var(--spacing-md) var(--spacing-lg)', borderRadius: '12px', background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: 'var(--color-text)' }}>Hva nå?</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', margin: '0 0 0.35rem 0' }}>
                    {result.errors > 0 ? 'Når du har gått gjennom svarene: Forklar regelen med egne ord, og ta en ny test for å se om du bruker den riktig.' : 'Ta en ny test med andre spørsmål, eller velg et annet tema for å øve bredere.'}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', margin: 0 }}>
                    Se utviklingen din over tid i{' '}
                    <a href="/min-fremgang/" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>Min fremgang</a>
                    {' '}— lagres kun lokalt på din enhet.
                </p>
            </div>

            <div className="result-actions">
                {!result.passed && result.errors > 0 && <button className="button" onClick={onReview}>{result.unanswered ? 'Se feil og ubesvarte' : 'Se feilsvarene'} ({result.errors})</button>}
                <button
                    className={!result.passed && result.errors > 0 ? 'button button-secondary' : 'button'}
                    onClick={onRestart}
                >
                    Ta testen på nytt
                </button>

                {result.passed && result.errors > 0 && (
                    <button
                        className="button button-secondary"
                        onClick={onReview}
                    >
                        {result.unanswered ? 'Se feil og ubesvarte' : 'Se feilsvarene'} ({result.errors})
                    </button>
                )}

                <button
                    className="button button-secondary"
                    onClick={onReturnHome}
                >
                    Tilbake til start
                </button>
            </div>
        </div>
    )
}
