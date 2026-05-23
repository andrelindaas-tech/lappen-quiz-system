// Teori-siden — Oversikt over alle emner
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { theoryTopics, theoryArticles, theoryUtilityPages } from '../data/theoryData'
import TheoryTopic from './TheoryTopic'
import { TilhengerKalkulator } from './TilhengerKalkulator'
import { parseInlineLinks } from '../utils/textUtils'

// GA4 global type
declare function gtag(...args: unknown[]): void

export default function TheoryPage() {
    const { articleId } = useParams()
    const navigate = useNavigate()

    // Using react-router-dom, we don't need manual popstate tracking anymore
    const selectedTopicId = articleId || null

    // Combine topics and articles for content lookup
    const allContent = [...theoryTopics, ...theoryArticles, ...theoryUtilityPages]
    const selectedTopic = allContent.find(t => t.id === selectedTopicId)

    // Determine base metadata (overridden by TheoryTopic if one is selected)
    const baseTitle = 'Læringsressurser for teoriprøven | Teori-test.no'
    const baseDescription = 'Gratis guider om vikeplikt, bremselengde, trafikkskilt og mer. Alt du trenger for å bestå teoriprøven klasse B.'

    const handleSelectTopic = (id: string) => {
        const path = `/laeringsressurser/${id}`
        navigate(path)
        if (typeof gtag !== 'undefined') {
            setTimeout(() => {
                gtag('event', 'page_view', { page_path: path, page_title: document.title })
            }, 100)
        }
    }

    const handleBack = () => {
        navigate('/laeringsressurser')
        if (typeof gtag !== 'undefined') {
            setTimeout(() => {
                gtag('event', 'page_view', { page_path: '/laeringsressurser', page_title: document.title })
            }, 100)
        }
    }

    if (selectedTopic) {
        // Set an intermediate Helmet here so the title updates immediately,
        // before TheoryTopic's own Helmet mounts and takes over.
        const articleSeoTitle = selectedTopic.seoTitle || `${selectedTopic.title} | Teori-test.no`
        const articleSeoDesc = selectedTopic.seoDescription || selectedTopic.shortDescription
        return (
            <div className="container">
                <Helmet>
                    <title>{articleSeoTitle}</title>
                    <meta name="description" content={articleSeoDesc} />
                </Helmet>
                <TheoryTopic
                    key={selectedTopic.id}
                    topic={selectedTopic}
                    onBack={handleBack}
                    extraComponent={selectedTopic.id === 'tilhenger' ? <TilhengerKalkulator /> : undefined}
                />
            </div>
        )
    }

    return (
        <div className="theory-page">
            <Helmet>
                <title>{baseTitle}</title>
                <meta name="description" content={baseDescription} />
            </Helmet>

            <section className="theory-section-group">
                <h1>📚 Læringsressurser</h1>
                <p className="theory-subtitle">
                    Lær viktig teori for førerprøven. Velg et emne for å komme i gang.
                </p>

                <div className="theory-cards">
                    {theoryTopics.map(topic => (
                        <div
                            key={topic.id}
                            className="theory-card"
                            onClick={() => handleSelectTopic(topic.id)}
                            style={{ '--card-accent-color': topic.color } as React.CSSProperties}
                        >
                            <h2 className="theory-card-title">{topic.title}</h2>
                            <p className="theory-card-desc">{parseInlineLinks(topic.shortDescription)}</p>
                            <span className="theory-card-badge">
                                Les mer →
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="theory-section-group" style={{ marginTop: 'var(--spacing-2xl)' }}>
                <h2>💡 Nyttige Artikler</h2>
                <p className="theory-subtitle">
                    Tips og råd for å hjelpe deg på veien mot førerkortet.
                </p>

                <div className="theory-cards article-grid">
                    {theoryArticles.map(article => (
                        <div
                            key={article.id}
                            className="theory-card article-card"
                            onClick={() => handleSelectTopic(article.id)}
                            style={{ '--card-accent-color': article.color } as React.CSSProperties}
                        >
                            <h3 className="theory-card-title">{article.title}</h3>
                            <p className="theory-card-desc">{parseInlineLinks(article.shortDescription)}</p>
                            <span className="theory-card-badge">
                                Les artikkel →
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="theory-section-group" style={{ marginTop: 'var(--spacing-2xl)' }}>
                <h2>🛑 Utforsk trafikkskilt</h2>
                <p className="theory-subtitle">
                    Se de viktigste skiltene til teoriprøven, sortert etter skiltgruppe. Lær vikeplikt- og forbudsskilt.
                </p>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-md)',
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-xl)',
                    boxShadow: 'var(--shadow-sm)',
                    position: 'relative',
                    overflow: 'hidden'
                }} className="practice-card">
                    <div style={{
                        position: 'absolute',
                        top: '-100px',
                        right: '-100px',
                        width: '250px',
                        height: '250px',
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
                        pointerEvents: 'none'
                    }} />

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 'var(--spacing-lg)',
                    }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 'var(--spacing-xs)' }}>
                                Skiltbanken (MVP)
                            </h3>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>
                                Øv på vikeplikt, innkjøringsforbud, fartsgrenser og andre viktige skilt du møter på teoriprøven. Les detaljerte forklaringer og unngå de vanligste misforståelsene.
                            </p>
                        </div>

                        <div style={{
                            display: 'flex',
                            gap: 'var(--spacing-sm)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexWrap: 'nowrap',
                            backgroundColor: 'var(--color-bg-secondary)',
                            padding: '12px var(--spacing-md)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--color-border)',
                        }}>
                            {[
                                { path: '/signs/vikeplikt-og-forkjorsskilt/skilt-202-vikeplikt.jpg', alt: 'Vikeplikt' },
                                { path: '/signs/vikeplikt-og-forkjorsskilt/skilt-204-stopp.jpg', alt: 'Stopp' },
                                { path: '/signs/forbudsskilt/skilt-302-innkjoring-forbudt.jpg', alt: 'Innkjøring forbudt' },
                                { path: '/signs/opplysningsskilt/skilt-516-gangfelt.jpg', alt: 'Gangfelt' }
                            ].map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img.path}
                                    alt={img.alt}
                                    title={img.alt}
                                    style={{
                                        width: '42px',
                                        height: '42px',
                                        objectFit: 'contain',
                                        transition: 'transform 0.2s ease',
                                    }}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                            ))}
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-md)',
                        flexWrap: 'wrap',
                        marginTop: 'var(--spacing-xs)',
                        borderTop: '1px solid var(--color-border)',
                        paddingTop: 'var(--spacing-md)',
                    }}>
                        <Link
                            to="/trafikkskilt"
                            style={{
                                padding: '10px 20px',
                                backgroundColor: 'var(--color-primary)',
                                color: '#ffffff',
                                textDecoration: 'none',
                                borderRadius: 'var(--radius-sm)',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                boxShadow: 'var(--shadow-sm)',
                                transition: 'background-color 0.2s ease',
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
                        >
                            Åpne skiltbanken
                        </Link>
                        <Link
                            to="/trafikkskilt/vikeplikt-og-forkjorsskilt"
                            style={{
                                color: 'var(--color-primary)',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                            onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
                        >
                            Vikeplikt- og forkjørsskilt →
                        </Link>
                        <span style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>•</span>
                        <Link
                            to="/trafikkskilt/forbudsskilt"
                            style={{
                                color: 'var(--color-primary)',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                            onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
                        >
                            Forbudsskilt →
                        </Link>
                        <span style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>•</span>
                        <Link
                            to="/trafikkskilt/fareskilt"
                            style={{
                                color: 'var(--color-primary)',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                            onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
                        >
                            Fareskilt →
                        </Link>
                        <span style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>•</span>
                        <Link
                            to="/trafikkskilt/opplysningsskilt"
                            style={{
                                color: 'var(--color-primary)',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                            onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
                        >
                            Opplysningsskilt →
                        </Link>
                        <span style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>•</span>
                        <Link
                            to="/trafikkskilt/pabudsskilt"
                            style={{
                                color: 'var(--color-primary)',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                            onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
                        >
                            Påbudsskilt →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
