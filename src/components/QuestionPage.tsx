// Spørsmålsside («/sporsmal/:slug») — v2 «test først»-format:
// spørsmålet øverst, fasit og forklaring under, «Neste spørsmål» gjør settet til en kortstokk.
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { getQuestionBySlug, questionPages } from '../data/questionPages'
import { trackEvent } from '../utils/analytics'

// --- Minimal innholds-renderer: avsnitt, punktlister, **fet** og [lenker](/sti) ---
function renderInline(text: string, keyPrefix: string): ReactNode[] {
    const parts: ReactNode[] = []
    const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g
    let last = 0
    let m: RegExpExecArray | null
    let i = 0
    while ((m = regex.exec(text)) !== null) {
        if (m.index > last) parts.push(text.slice(last, m.index))
        if (m[1] && m[2]) {
            parts.push(
                m[2].startsWith('/')
                    ? <Link key={`${keyPrefix}-${i}`} to={m[2]} style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>{m[1]}</Link>
                    : <a key={`${keyPrefix}-${i}`} href={m[2]} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{m[1]}</a>
            )
        } else if (m[3]) {
            parts.push(<strong key={`${keyPrefix}-${i}`}>{m[3]}</strong>)
        }
        last = m.index + m[0].length
        i++
    }
    if (last < text.length) parts.push(text.slice(last))
    return parts
}

function renderExplanation(text: string): ReactNode[] {
    return text.split('\n\n').map((para, pi) => {
        const lines = para.split('\n')
        const isList = lines.length > 1 && lines.every((l) => /^(-|\d+\.)\s/.test(l.trim()) || l.trim() === '')
        if (isList) {
            return (
                <ul key={pi} style={{ paddingLeft: '1.25rem', margin: '0 0 1rem', lineHeight: 1.7 }}>
                    {lines.filter((l) => l.trim()).map((l, li) => (
                        <li key={li}>{renderInline(l.trim().replace(/^(-|\d+\.)\s/, ''), `${pi}-${li}`)}</li>
                    ))}
                </ul>
            )
        }
        return (
            <p key={pi} style={{ margin: '0 0 1rem', lineHeight: 1.7 }}>
                {lines.map((l, li) => (
                    <span key={li}>
                        {renderInline(l, `${pi}-${li}`)}
                        {li < lines.length - 1 && <br />}
                    </span>
                ))}
            </p>
        )
    })
}

export default function QuestionPage() {
    const { slug } = useParams<{ slug: string }>()
    const q = slug ? getQuestionBySlug(slug) : undefined
    const [selected, setSelected] = useState<number | null>(null)

    // Nullstill svar når man går til neste spørsmål
    useEffect(() => {
        setSelected(null)
    }, [slug])

    if (!q) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: 'var(--spacing-2xl)' }}>
                <Helmet>
                    <title>Fant ikke spørsmålet | Teori-test.no</title>
                    <meta name="robots" content="noindex, nofollow" />
                </Helmet>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Fant ikke spørsmålet</h1>
                <p style={{ color: 'var(--color-text-light)' }}>
                    <Link to="/sporsmal" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Se alle spørsmål og svar →</Link>
                </p>
            </div>
        )
    }

    const index = questionPages.findIndex((p) => p.slug === q.slug)
    const next = questionPages[index + 1]
    const correctOption = q.options.find((o) => o.correct)
    const related = questionPages.filter((p) => p.topic === q.topic && p.slug !== q.slug).slice(0, 3)
    const answered = selected !== null

    const quizStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'Quiz',
        about: { '@type': 'Thing', name: q.topic },
        educationalAlignment: { '@type': 'AlignmentObject', alignmentType: 'educationalSubject', targetName: 'Teoriprøven klasse B' },
        hasPart: [{
            '@type': 'Question',
            name: q.question,
            text: q.question,
            acceptedAnswer: { '@type': 'Answer', text: `${correctOption?.text}. ${q.answerShort}` },
            suggestedAnswer: q.options.filter((o) => !o.correct).map((o) => ({ '@type': 'Answer', text: o.text })),
        }],
    }
    const breadcrumbStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Teorispørsmål', item: 'https://teori-test.no/sporsmal' },
            { '@type': 'ListItem', position: 2, name: q.question },
        ],
    }

    return (
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto', paddingBottom: 'var(--spacing-2xl)' }}>
            <Helmet>
                <title>{q.question}</title>
                <meta name="description" content={q.answerShort} />
                <meta property="og:title" content={q.question} />
                <meta property="og:description" content={q.answerShort} />
                <script type="application/ld+json">{JSON.stringify(quizStructuredData)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbStructuredData)}</script>
            </Helmet>

            {/* Topplinje: tilbake + tema + posisjon */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', margin: 'var(--spacing-md) 0', flexWrap: 'wrap' }}>
                <Link to="/sporsmal" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
                    ← Alle spørsmål
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{
                        fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)',
                        backgroundColor: 'rgba(45, 212, 191, 0.12)', padding: '3px 10px', borderRadius: '100px',
                    }}>{q.topic}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>
                        {index + 1} av {questionPages.length}
                    </span>
                </div>
            </div>

            {/* Spørsmålskortet — utfordringen først */}
            <div style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: '18px',
                padding: '22px 20px',
                boxShadow: 'var(--shadow-sm)',
            }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.3, margin: '0 0 var(--spacing-lg)' }}>
                    {q.question}
                </h1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {q.options.map((opt, i) => {
                        const isCorrect = !!opt.correct
                        const isSelected = selected === i
                        let border = '1px solid var(--color-border)'
                        let bg = 'var(--color-bg-secondary)'
                        if (answered && isCorrect) { border = '1.5px solid var(--color-success, #10b981)'; bg = 'rgba(16, 185, 129, 0.10)' }
                        else if (answered && isSelected && !isCorrect) { border = '1.5px solid var(--color-error, #ef4444)'; bg = 'rgba(239, 68, 68, 0.08)' }
                        return (
                            <button
                                key={i}
                                type="button"
                                disabled={answered}
                                onClick={() => {
                                    setSelected(i)
                                    trackEvent('question_page_answered', { slug: q.slug, correct: isCorrect })
                                }}
                                style={{
                                    textAlign: 'left', padding: '14px 16px', borderRadius: '12px',
                                    border, backgroundColor: bg, color: 'var(--color-text)',
                                    fontSize: '1rem', cursor: answered ? 'default' : 'pointer', lineHeight: 1.5,
                                    transition: 'border-color 0.15s ease, background-color 0.15s ease',
                                }}
                            >
                                {answered && isCorrect ? '✅ ' : answered && isSelected ? '❌ ' : ''}{opt.text}
                            </button>
                        )
                    })}
                </div>

                {answered && (
                    <div style={{ marginTop: 'var(--spacing-lg)' }}>
                        <p style={{ margin: '0 0 12px', fontWeight: 600, color: selected !== null && q.options[selected]?.correct ? 'var(--color-success, #10b981)' : 'var(--color-text)' }}>
                            {selected !== null && q.options[selected]?.correct
                                ? 'Riktig! 🎉'
                                : 'Ikke helt — riktig svar er markert i grønt.'}
                        </p>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {next ? (
                                <Link to={`/sporsmal/${next.slug}`} style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                                    padding: '11px 20px', borderRadius: '10px',
                                    backgroundColor: 'var(--color-primary)', color: '#fff',
                                    textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem',
                                }}>
                                    Neste spørsmål <ArrowRight size={16} strokeWidth={2.5} />
                                </Link>
                            ) : (
                                <Link to="/quiz?mode=eksamen" style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                                    padding: '11px 20px', borderRadius: '10px',
                                    backgroundColor: 'var(--color-primary)', color: '#fff',
                                    textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem',
                                }}>
                                    Ferdig! Ta en full prøve <ArrowRight size={16} strokeWidth={2.5} />
                                </Link>
                            )}
                            <a href="#forklaring" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                padding: '11px 20px', borderRadius: '10px',
                                border: '1px solid var(--color-border)', color: 'var(--color-text)',
                                textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem',
                            }}>
                                Les forklaringen <ChevronDown size={16} strokeWidth={2.5} />
                            </a>
                        </div>
                    </div>
                )}
            </div>

            {/* Fasit og forklaring — alltid i HTML (Google), visuelt under utfordringen */}
            <div id="forklaring" style={{ marginTop: 'var(--spacing-xl)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '6px' }}>
                    Kort svar
                </div>
                <p style={{ margin: '0 0 var(--spacing-lg)', lineHeight: 1.65, fontWeight: 500, fontSize: '1.05rem' }}>{q.answerShort}</p>

                <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 'var(--spacing-sm)' }}>Hvorfor er dette riktig?</h2>
                <div style={{ color: 'var(--color-text)' }}>{renderExplanation(q.explanation)}</div>

                {q.sources && q.sources.length > 0 && (
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginTop: 'var(--spacing-md)' }}>
                        Kilde: {q.sources.map((src, i) => (
                            <span key={src.url}>
                                {i > 0 && ', '}
                                <a href={src.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>{src.name}</a>
                            </span>
                        ))}
                    </p>
                )}
            </div>

            {/* Veier videre */}
            <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px',
                marginTop: 'var(--spacing-xl)',
            }}>
                {q.articleId && (
                    <Link to={`/laeringsressurser/${q.articleId}`} style={{
                        display: 'block', padding: '14px 16px', borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)',
                        textDecoration: 'none', color: 'var(--color-text)',
                    }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Lær hele temaet</div>
                        <div style={{ fontWeight: 700, marginTop: '4px', color: 'var(--color-primary)' }}>{q.articleLabel || 'Les guiden'} →</div>
                    </Link>
                )}
                <Link to={q.quizPath || '/quiz?mode=hurtig'} style={{
                    display: 'block', padding: '14px 16px', borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(45, 212, 191, 0.4)', backgroundColor: 'rgba(45, 212, 191, 0.08)',
                    textDecoration: 'none', color: 'var(--color-text)',
                }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Øv gratis</div>
                    <div style={{ fontWeight: 700, marginTop: '4px', color: 'var(--color-primary)' }}>{q.quizLabel || 'Ta en øvingsprøve'} →</div>
                </Link>
            </div>

            {/* Relaterte spørsmål */}
            {related.length > 0 && (
                <div style={{ marginTop: 'var(--spacing-xl)' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 'var(--spacing-sm)' }}>Flere spørsmål om {q.topic.toLowerCase()}</h2>
                    <ul style={{ paddingLeft: '1.25rem', lineHeight: 2 }}>
                        {related.map((r) => (
                            <li key={r.slug}>
                                <Link to={`/sporsmal/${r.slug}`} style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>{r.question}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
