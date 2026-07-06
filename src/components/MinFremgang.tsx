// «Min fremgang» — lokalt fremgangsdashbord (MVP uten innlogging).
// Design fra Claude design («Min fremgang» variant 5), oversatt til sidens CSS-variabler.
import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { BookOpen, Car, Zap, HelpCircle, Target, ClipboardCheck, TrendingUp } from 'lucide-react'
import { getStreak } from '../utils/streakStore'
import {
    getQuizResults,
    getTotals,
    getCountsByType,
    getArticlesReadCount,
    getDisplayName,
    setDisplayName,
} from '../utils/progressStore'
import { trackEvent } from '../utils/analytics'
import { useCountUp } from '../hooks/useCountUp'
import { theoryTopics, theoryArticles } from '../data/theoryData'

const TOTAL_ARTICLES = theoryTopics.length + theoryArticles.length

function typeIcon(name: string) {
    const n = name.toLowerCase()
    if (n.includes('full')) return <BookOpen size={18} strokeWidth={2} />
    if (n.includes('vikeplikt')) return <Car size={18} strokeWidth={2} />
    if (n.includes('ekspress') || n.includes('hurtig')) return <Zap size={18} strokeWidth={2} />
    if (n.includes('skilt')) return <HelpCircle size={18} strokeWidth={2} />
    if (n.includes('fokus')) return <Target size={18} strokeWidth={2} />
    return <ClipboardCheck size={18} strokeWidth={2} />
}

function formatDate(iso: string): string {
    try {
        return new Intl.DateTimeFormat('nb-NO', { day: 'numeric', month: 'long' }).format(new Date(iso))
    } catch {
        return ''
    }
}

const cardStyle: CSSProperties = {
    backgroundColor: 'var(--color-bg)',
    border: '1px solid var(--color-border)',
    borderRadius: '18px',
    padding: '18px',
    boxShadow: 'var(--shadow-sm)',
}

export default function MinFremgang() {
    const [name, setName] = useState(() => getDisplayName())
    const [nameInput, setNameInput] = useState('')
    const [showAll, setShowAll] = useState(false)

    const streak = getStreak()
    const results = getQuizResults()
    const totals = getTotals()
    const byType = getCountsByType()
    const articlesRead = getArticlesReadCount()
    const articleProgress = Math.min(100, Math.round((articlesRead / TOTAL_ARTICLES) * 100))

    // Levende tall og linjer (teller mykt opp ved åpning)
    const animStreak = useCountUp(streak.count)
    const animArticles = useCountUp(articlesRead)
    const animProgress = useCountUp(articleProgress, 900)
    const animTests = useCountUp(totals.tests)
    const animQuestions = useCountUp(totals.questions, 900)

    useEffect(() => {
        trackEvent('progress_viewed', {
            tests_taken: totals.tests,
            has_name: name ? true : false,
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function saveName() {
        const trimmed = nameInput.trim()
        if (trimmed.length >= 1) {
            setDisplayName(trimmed)
            setName(trimmed)
        }
    }

    const visibleResults = showAll ? results.slice(0, 20) : results.slice(0, 4)

    return (
        <div className="container" style={{ maxWidth: '480px', margin: '0 auto', paddingBottom: 'var(--spacing-2xl)' }}>
            <Helmet>
                <title>Min fremgang | Teori-test.no</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            {/* Ramme rundt hele dashbordet (jf. Claude design-mockup) */}
            <div style={{
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)',
                borderRadius: '26px',
                padding: '8px 16px 20px',
                boxShadow: 'var(--shadow-lg)',
                marginTop: 'var(--spacing-lg)',
            }}>

            {/* Header */}
            <div style={{ padding: '16px 4px 14px' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>
                    Min fremgang
                </h1>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', margin: '3px 0 0' }}>
                    {name ? `Hei, ${name} 👋` : 'Hei! 👋'}
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                {/* Navn-prompt (kun til navn er satt) */}
                {!name && (
                    <div style={cardStyle}>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '8px' }}>
                            Hva skal vi kalle deg?
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <input
                                type="text"
                                value={nameInput}
                                maxLength={24}
                                placeholder="Navn eller kallenavn"
                                onChange={(e) => setNameInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && saveName()}
                                style={{
                                    flex: 1,
                                    padding: '10px 12px',
                                    borderRadius: '10px',
                                    border: '1px solid var(--color-border)',
                                    backgroundColor: 'var(--color-bg-secondary)',
                                    color: 'var(--color-text)',
                                    fontSize: '0.9rem',
                                }}
                            />
                            <button
                                type="button"
                                onClick={saveName}
                                style={{
                                    padding: '10px 16px',
                                    borderRadius: '10px',
                                    border: 'none',
                                    backgroundColor: 'var(--color-primary)',
                                    color: '#fff',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                }}
                            >
                                Lagre
                            </button>
                        </div>
                    </div>
                )}

                {/* Streak-banner */}
                <div style={{
                    background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.14) 0%, rgba(45, 212, 191, 0.05) 100%)',
                    border: '1px solid rgba(45, 212, 191, 0.28)',
                    borderRadius: '18px',
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                }}>
                    <div style={{
                        flex: 'none', width: '52px', height: '52px', borderRadius: '15px',
                        backgroundColor: 'rgba(45, 212, 191, 0.16)', color: 'var(--color-primary)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <TrendingUp size={24} strokeWidth={2.2} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '7px' }}>
                            <span style={{ fontSize: '2.1rem', fontWeight: 800, lineHeight: 1 }}>{animStreak}</span>
                            <span style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                                {streak.count === 1 ? 'dag på rad' : 'dager på rad'}
                            </span>
                        </div>
                        <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                            {streak.count === 0 ? 'Fullfør en prøve i dag for å starte!' : 'Hold den gående! 🔥'}
                        </span>
                    </div>
                </div>

                {/* Artikler + prøver totalt */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '13px' }}>
                    <div style={cardStyle}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-light)' }}>Artikler lest</span>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px', margin: '5px 0 9px' }}>
                            <span style={{ fontSize: '1.75rem', fontWeight: 800, lineHeight: 1 }}>{animArticles}</span>
                            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>/ {TOTAL_ARTICLES}</span>
                        </div>
                        <div style={{ height: '6px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '100px', overflow: 'hidden' }}>
                            <div style={{ width: `${animProgress}%`, height: '100%', backgroundColor: 'var(--color-primary)', borderRadius: '100px' }} />
                        </div>
                    </div>
                    <div style={cardStyle}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-light)' }}>Prøver totalt</span>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px', marginTop: '5px' }}>
                            <span style={{ fontSize: '1.75rem', fontWeight: 800, lineHeight: 1 }}>{animTests}</span>
                            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>tatt</span>
                        </div>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                            {new Intl.NumberFormat('nb-NO').format(animQuestions)} spørsmål
                        </span>
                    </div>
                </div>

                {/* Prøver per type */}
                {byType.length > 0 && (
                    <div style={cardStyle}>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '14px' }}>Prøver tatt per type</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {byType.map((t) => (
                                <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
                                    <div style={{
                                        flex: 'none', width: '36px', height: '36px', borderRadius: '10px',
                                        backgroundColor: 'rgba(45, 212, 191, 0.14)', color: 'var(--color-primary)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        {typeIcon(t.name)}
                                    </div>
                                    <span style={{ flex: 1, fontSize: '0.9rem', fontWeight: 600 }}>{t.name}</span>
                                    <span style={{ fontSize: '1rem', fontWeight: 800 }}>{t.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Siste resultater / tom tilstand */}
                {results.length > 0 ? (
                    <div style={cardStyle}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                            <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>Siste resultater</div>
                            {results.length > 4 && (
                                <button
                                    type="button"
                                    onClick={() => setShowAll(!showAll)}
                                    style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-primary)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                                >
                                    {showAll ? 'Vis færre' : 'Se alle'}
                                </button>
                            )}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                            {visibleResults.map((r, i) => (
                                <div key={r.date + i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ flex: 1, fontSize: '0.9rem', fontWeight: 600 }}>
                                        {r.name} <span style={{ color: 'var(--color-text-light)', fontWeight: 500 }}>· {formatDate(r.date)}</span>
                                    </span>
                                    <span style={{ fontSize: '0.9rem', fontWeight: 800 }}>{r.correct}/{r.total}</span>
                                    <span style={{
                                        width: '9px', height: '9px', borderRadius: '50%',
                                        backgroundColor: r.passed ? 'var(--color-primary)' : '#e3a948',
                                    }} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div style={{ ...cardStyle, textAlign: 'center', padding: '28px 18px' }}>
                        <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '6px' }}>Ingen prøver ennå</div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', margin: '0 0 14px' }}>
                            Ta din første øvingsprøve, så begynner oversikten å fylle seg.
                        </p>
                        <Link
                            to="/quiz?mode=hurtig"
                            style={{
                                display: 'inline-block', padding: '10px 22px', borderRadius: '10px',
                                backgroundColor: 'var(--color-primary)', color: '#fff',
                                textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem',
                            }}
                        >
                            Start en ekspresstest →
                        </Link>
                    </div>
                )}

                {/* Lokal lagring-notis */}
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', textAlign: 'center', lineHeight: 1.5, padding: '0 12px' }}>
                    Fremgangen lagres kun lokalt på denne enheten – ingen konto, ingen innsamling.
                    Bytter du til en annen mobil eller PC, starter oversikten på nytt der.
                </p>
            </div>

            </div>
        </div>
    )
}
