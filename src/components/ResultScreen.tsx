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

    // Special message for Fokusmodus cleared
    const isFokusCleared = mode.isFokusMode && result.passed && result.errors === 0

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
        lover: { name: "Lover og ansvar", url: "/laeringsressurser/temaliste-teoriproven-klasse-b" }
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
            <div className="result-icon">
                {isFokusCleared ? '🎉' : result.passed ? '✅' : '❌'}
            </div>

            <h1 className={`result-status ${result.passed ? 'passed' : 'failed'}`}>
                {isFokusCleared ? 'FOKUSMODUS FULLFØRT!' : result.passed ? 'BESTÅTT!' : 'IKKE BESTÅTT'}
            </h1>

            <p className="result-mode-name">{mode.name}</p>

            <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--spacing-xl)' }}>
                {isFokusCleared
                    ? '🌟 Fantastisk! Du har mestret alle feilene dine!'
                    : result.passed
                        ? (mode.name === 'Full prøve' ? 'Gratulerer! Du har bestått teoriprøven.' : 'Bra jobba! Du besto øvingstesten.')
                        : (mode.isFokusMode ? 'Du har fortsatt noen feil å jobbe med. Prøv igjen!' : 'Du må øve mer og prøve igjen.')}
            </p>

            <div className="score-bar-container" style={{ margin: 'var(--spacing-lg) 0 var(--spacing-xl) 0', width: '100%', display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1rem', fontWeight: 600 }}>
                    <span style={{ color: 'var(--color-text)' }}>Din score: {result.correctCount} av {result.totalCount}</span>
                    <span style={{ color: result.passed ? 'var(--color-success)' : 'var(--color-error)' }}>{result.percentage}%</span>
                </div>
                <div style={{ position: 'relative', width: '100%', height: '14px', background: 'linear-gradient(to right, #E24B4A 0%, #EF9F27 40%, #97C459 70%, #1D9E75 100%)', borderRadius: '7px' }}>
                    <div style={{ position: 'absolute', left: `${result.percentage}%`, transform: 'translateX(-50%)', top: '-3px', width: '3px', height: '20px', backgroundColor: 'var(--color-text)', borderRadius: '1.5px', border: '1px solid var(--color-bg)', boxShadow: 'var(--shadow-sm)' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
                    <span>Bestått-grense: {result.totalCount - result.maxErrors} av {result.totalCount}</span>
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
