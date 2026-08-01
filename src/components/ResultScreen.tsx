// Action Layer: Result Screen Component
import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { useCountUp } from '../hooks/useCountUp'
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
    const errorReference = result.errors === 1 ? 'det ene feilsvaret' : `de ${result.errors} feilsvarene`
    const resultSummary = isFokusCleared
        ? 'Du svarte riktig på alle spørsmålene i denne fokustesten. Ingen av disse feilsvarene er lenger lagret i Fokusmodus.'
        : result.errors === 0
            ? `Du svarte riktig på alle ${result.totalCount} spørsmål i denne testen.`
            : `Du svarte riktig på ${result.correctCount} av ${result.totalCount} spørsmål. Se gjennom ${errorReference} og velg hva du vil øve videre på.`

    // Levende tall: score og prosent teller mykt opp
    const animCorrect = useCountUp(result.correctCount)
    const animPercentage = useCountUp(result.percentage)

    const categoryMetadata: { [key: string]: { name: string; url: string } } = {
        vikeplikt: { name: "Vikeplikt og kryss", url: "/laeringsressurser/vikeplikt" },
        skilt: { name: "Trafikkskilt", url: "/laeringsressurser/skilt" },
        fart_og_plassering: { name: "Fart og plassering", url: "/laeringsressurser/fartsgrenser" },
        bremselengde: { name: "Bremselengde og reaksjonstid", url: "/laeringsressurser/bremselengde" },
        parkering: { name: "Parkering og stans", url: "/laeringsressurser/stans-og-parkering" },
        veimerking: { name: "Veimerking", url: "/laeringsressurser/veimerking" },
        kjoretoy: { name: "Kjøretøy og teknisk", url: "/laeringsressurser/dekk-bremser-styring" },
        trafikanter: { name: "Trafikanter og samspill", url: "/laeringsressurser/vikeplikt" },
        sikkerhet: { name: "Sikkerhet og førstehjelp", url: "/laeringsressurser/sikkerhetskontroll" },
        lover: { name: "Lover og ansvar", url: "/laeringsressurser/vegtrafikkloven-paragraf-3" }
    };

    const showBreakdown = mode.isExamMode && result.categoryBreakdown && Object.keys(result.categoryBreakdown).length > 1;

    const breakdownItems = showBreakdown ? Object.keys(result.categoryBreakdown!).map(key => {
        const metadata = categoryMetadata[key] || { name: key, url: "/laeringsressurser" };
        const data = result.categoryBreakdown![key];
        const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        return {
            key,
            name: metadata.name,
            url: metadata.url,
            correct: data.correct,
            total: data.total,
            percentage: pct
        };
    })
    .filter(item => item.total >= 3)
    .sort((a, b) => a.percentage - b.percentage) : [];

    const getBarColor = (pct: number) => {
        if (pct < 60) return '#E24B4A';
        if (pct <= 75) return '#EF9F27';
        return '#1D9E75';
    };

    return (
        <div className="result-screen">
            <h2 className="result-status">
                Resultat fra testen
            </h2>

            <p className="result-mode-name">{mode.name}</p>

            <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--spacing-xl)' }}>
                {resultSummary}
            </p>

            <div className="score-bar-container" style={{ margin: 'var(--spacing-lg) 0 var(--spacing-xl) 0', width: '100%', display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1rem', fontWeight: 600 }}>
                    <span style={{ color: 'var(--color-text)' }}>Riktige svar: {animCorrect} av {result.totalCount}</span>
                    <span style={{ color: 'var(--color-primary)' }}>{animPercentage}%</span>
                </div>
                <div style={{ position: 'relative', width: '100%', height: '14px', background: 'linear-gradient(to right, #E24B4A 0%, #EF9F27 40%, #97C459 70%, #1D9E75 100%)', borderRadius: '7px' }}>
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
                    <span>100%</span>
                </div>
            </div>

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
                    <span className="result-stat-value">{result.errors}</span>
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

            {showBreakdown && (
                <div className="category-breakdown-section" style={{ margin: 'var(--spacing-xl) 0', textAlign: 'left' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--color-text)' }}>Dine svake områder</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '0.25rem' }}>Øv mer på temaene du bommet på</p>
                    <p style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', fontStyle: 'italic', marginBottom: 'var(--spacing-lg)' }}>
                        Tips: «Øv nå» åpnes i ny fane, så du beholder denne oversikten.
                    </p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                        {breakdownItems.map(item => (
                            <div key={item.key} style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: 'var(--spacing-sm) 0', borderBottom: '1px solid var(--color-border)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                                    <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>{item.name}</span>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                                        {item.correct} av {item.total} ({item.percentage}%)
                                    </span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ flex: 1, height: '8px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '4px', overflow: 'hidden' }}>
                                        <div style={{ width: `${item.percentage}%`, height: '100%', backgroundColor: getBarColor(item.percentage), borderRadius: '4px' }} />
                                    </div>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600, whiteSpace: 'nowrap' }} className="practice-link">
                                        Øv nå →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Neste steg: spill + Min fremgang (synliggjør retention-flatene der motivasjonen er høyest) */}
            <div style={{ margin: 'var(--spacing-xl) 0', padding: 'var(--spacing-md) var(--spacing-lg)', borderRadius: '12px', background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: 'var(--color-text)' }}>Hva nå?</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', margin: '0 0 0.35rem 0' }}>
                    Tren vurderingsevnen i{' '}
                    <a href="/laeringsspill/vikeplikt" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>vikepliktspillet</a>
                    {' '}— trykk på bilene i riktig rekkefølge.
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', margin: 0 }}>
                    Se utviklingen din over tid i{' '}
                    <a href="/min-fremgang" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>Min fremgang</a>
                    {' '}— lagres kun lokalt på din enhet.
                </p>
            </div>

            <div className="result-actions">
                <button
                    className="button"
                    onClick={onRestart}
                >
                    Ta testen på nytt
                </button>

                {result.errors > 0 && (
                    <button
                        className="button button-secondary"
                        onClick={onReview}
                    >
                        Se feilsvarene ({result.errors})
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
