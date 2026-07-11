// Hub for spørsmålssidene («/sporsmal») — v2: temakort med ikoner, nummererte
// spørsmålsrader uten svar-teaser, og «kortstokk»-CTA øverst.
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Gauge, Zap, Car, Route, Shield, HeartPulse, Snowflake, HelpCircle, ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { getQuestionsByTopic, questionPages } from '../data/questionPages'

function topicIcon(topic: string): ReactNode {
    const t = topic.toLowerCase()
    if (t.includes('fart') || t.includes('stopplengde')) return <Gauge size={20} strokeWidth={2} />
    if (t.includes('lys') || t.includes('signal')) return <Zap size={20} strokeWidth={2} />
    if (t.includes('parkering')) return <Car size={20} strokeWidth={2} />
    if (t.includes('forbikjøring') || t.includes('plassering')) return <Route size={20} strokeWidth={2} />
    if (t.includes('førerkort') || t.includes('prikker')) return <Shield size={20} strokeWidth={2} />
    if (t.includes('ulykker') || t.includes('plikter')) return <HeartPulse size={20} strokeWidth={2} />
    if (t.includes('dekk') || t.includes('føre')) return <Snowflake size={20} strokeWidth={2} />
    return <HelpCircle size={20} strokeWidth={2} />
}

export default function QuestionsIndex() {
    const groups = getQuestionsByTopic()
    const first = questionPages[0]
    let runningIndex = 0

    return (
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto', paddingBottom: 'var(--spacing-2xl)' }}>
            <Helmet>
                <title>Ofte spurte teorispørsmål – oppgaver med fasit og forklaring</title>
                <meta name="description" content={`${questionPages.length} av de mest googlede spørsmålene fra teoriprøven klasse B – test deg selv først, og få fasit med ekstra god forklaring etterpå.`} />
                <meta property="og:title" content="Ofte spurte teorispørsmål – oppgaver med fasit og forklaring" />
                <meta property="og:description" content={`${questionPages.length} av de mest googlede spørsmålene fra teoriprøven klasse B – test deg selv først, og få fasit med ekstra god forklaring etterpå.`} />
            </Helmet>

            {/* Hero */}
            <div style={{ padding: 'var(--spacing-xl) 0 var(--spacing-md)', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 'var(--spacing-sm)' }}>
                    Ofte spurte teorispørsmål
                </h1>
                <p style={{ color: 'var(--color-text-light)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '560px', margin: '0 auto' }}>
                    Oppgavene folk faktisk lurer på — med fasit og ekstra god forklaring.
                    Test deg selv først, les hvorfor etterpå. Nye spørsmål legges til jevnlig.
                </p>
            </div>

            {/* Kortstokk-CTA */}
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px', flexWrap: 'wrap',
                background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.14) 0%, rgba(45, 212, 191, 0.05) 100%)',
                border: '1px solid rgba(45, 212, 191, 0.3)',
                borderRadius: '18px', padding: '18px 20px', marginBottom: 'var(--spacing-xl)',
            }}>
                <div>
                    <div style={{ fontWeight: 800, fontSize: '1.05rem' }}>Ta hele runden</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                        {questionPages.length} spørsmål · {groups.length} temaer · med fasit og forklaring
                    </div>
                </div>
                <Link to={`/sporsmal/${first.slug}`} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '11px 22px', borderRadius: '10px',
                    backgroundColor: 'var(--color-primary)', color: '#fff',
                    textDecoration: 'none', fontWeight: 700, whiteSpace: 'nowrap',
                }}>
                    Start på nr. 1 <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
            </div>

            {/* Temakort i grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '14px' }}>
                {groups.map((group) => {
                    const startIndex = runningIndex
                    runningIndex += group.items.length
                    return (
                        <section key={group.topic} style={{
                            backgroundColor: 'var(--color-bg)',
                            border: '1px solid var(--color-border)',
                            borderRadius: '18px',
                            padding: '16px',
                            boxShadow: 'var(--shadow-sm)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                <div style={{
                                    flex: 'none', width: '38px', height: '38px', borderRadius: '11px',
                                    backgroundColor: 'rgba(45, 212, 191, 0.14)', color: 'var(--color-primary)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    {topicIcon(group.topic)}
                                </div>
                                <div>
                                    <h2 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>{group.topic}</h2>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>
                                        {group.items.length} {group.items.length === 1 ? 'spørsmål' : 'spørsmål'}
                                    </span>
                                </div>
                            </div>
                            <div>
                                {group.items.map((q, i) => (
                                    <Link
                                        key={q.slug}
                                        to={`/sporsmal/${q.slug}`}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '12px',
                                            padding: '11px 8px',
                                            borderTop: '1px solid var(--color-border)',
                                            textDecoration: 'none', color: 'var(--color-text)',
                                        }}
                                    >
                                        <span style={{
                                            flex: 'none', fontFamily: 'monospace', fontSize: '0.75rem', fontWeight: 700,
                                            color: 'var(--color-text-light)', width: '22px', textAlign: 'right',
                                        }}>
                                            {String(startIndex + i + 1).padStart(2, '0')}
                                        </span>
                                        <span style={{ flex: 1, fontSize: '0.95rem', fontWeight: 600, lineHeight: 1.4 }}>
                                            {q.question}
                                        </span>
                                        <ArrowRight size={15} strokeWidth={2.2} style={{ flex: 'none', color: 'var(--color-primary)' }} />
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )
                })}
            </div>

            {/* Bunn-CTA */}
            <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', marginBottom: 'var(--spacing-sm)' }}>
                    Klar for den ekte utfordringen?
                </p>
                <Link to="/quiz?mode=eksamen" style={{
                    display: 'inline-block', padding: '12px 28px', borderRadius: '10px',
                    backgroundColor: 'var(--color-primary)', color: '#fff', textDecoration: 'none', fontWeight: 700,
                }}>
                    Ta en gratis teoriprøve med 45 spørsmål →
                </Link>
            </div>
        </div>
    )
}
