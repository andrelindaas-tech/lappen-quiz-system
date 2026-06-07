// Teori-siden — Oversikt over alle emner
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
    Shield, 
    Gauge, 
    Layers, 
    Route, 
    BookOpen, 
    ArrowRight,
    Zap,
    Wrench,
    Car,
    RefreshCcw,
    UserCheck,
    GraduationCap,
    HeartPulse,
    AlertTriangle,
    Snowflake
} from 'lucide-react'
import { theoryTopics, theoryArticles, theoryUtilityPages } from '../data/theoryData'
import TheoryTopic from './TheoryTopic'
import { parseInlineLinks } from '../utils/textUtils'

// Helper function to get Lucide icons for topics and articles
const getTopicIcon = (id: string) => {
    switch (id) {
        case 'vikeplikt':
            return <Shield size={24} strokeWidth={1.8} />
        case 'bremselengde':
            return <Gauge size={24} strokeWidth={1.8} />
        case 'myndighetspyramiden':
            return <Layers size={24} strokeWidth={1.8} />
        case 'veimerking':
            return <Route size={24} strokeWidth={1.8} />
        case 'automatlappen':
            return <Zap size={24} strokeWidth={1.8} />
        case 'sikkerhetskontroll':
            return <Wrench size={24} strokeWidth={1.8} />
        case 'oppkjoring':
            return <Car size={24} strokeWidth={1.8} />
        case 'stroket-teoriproven':
            return <RefreshCcw size={24} strokeWidth={1.8} />
        case 'ovingskjoring':
            return <UserCheck size={24} strokeWidth={1.8} />
        case 'tips-eksamen':
            return <GraduationCap size={24} strokeWidth={1.8} />
        case 'trafikkuhell-forstehjelp':
            return <HeartPulse size={24} strokeWidth={1.8} />
        case 'vanlige-feil-teoriproven':
            return <AlertTriangle size={24} strokeWidth={1.8} />
        case 'glatt-fore':
            return <Snowflake size={24} strokeWidth={1.8} />
        default:
            return <BookOpen size={24} strokeWidth={1.8} />
    }
}

// GA4 global type
declare function gtag(...args: unknown[]): void

export default function TheoryPage() {
    const { articleId } = useParams()
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        if (articleId) {
            const slugMap: Record<string, string> = {
                'vognkort-og-vekt': 'vognkort-vekter',
                'sikkerhet': 'sikkerhetsutstyr',
                'morkekjoring': 'lysbruk-morkekjoring',
                'trafikkuhell': 'trafikkuhell-forstehjelp',
            }
            const correctId = slugMap[articleId.toLowerCase()]
            if (correctId) {
                navigate(`/laeringsressurser/${correctId}`, { replace: true })
            }
        }
    }, [articleId, navigate])

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

    const handleClearSearch = () => {
        setSearchQuery('')
    }

    // Filter topics based on search query
    const filteredTopics = useMemo(() => {
        const query = searchQuery.trim().toLowerCase()
        if (!query) return theoryTopics
        return theoryTopics.filter(t => 
            t.title.toLowerCase().includes(query) ||
            t.shortDescription.toLowerCase().includes(query) ||
            (t.seoTitle && t.seoTitle.toLowerCase().includes(query)) ||
            (t.seoDescription && t.seoDescription.toLowerCase().includes(query)) ||
            t.id.toLowerCase().includes(query)
        )
    }, [searchQuery])

    // Filter articles based on search query
    const filteredArticles = useMemo(() => {
        const query = searchQuery.trim().toLowerCase()
        if (!query) return theoryArticles
        return theoryArticles.filter(a => 
            a.title.toLowerCase().includes(query) ||
            a.shortDescription.toLowerCase().includes(query) ||
            (a.seoTitle && a.seoTitle.toLowerCase().includes(query)) ||
            (a.seoDescription && a.seoDescription.toLowerCase().includes(query)) ||
            a.id.toLowerCase().includes(query)
        )
    }, [searchQuery])

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
                />
            </div>
        )
    }

    return (
        <div className="start-screen" style={{ paddingBottom: '4rem' }}>
            <Helmet>
                <title>{baseTitle}</title>
                <meta name="description" content={baseDescription} />
            </Helmet>

            <div className="section-container">
                {/* Header Title Section */}
                <section className="theory-section-group" style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <h1 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Læringsressurser</h1>
                    <p className="theory-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Lær viktig teori for førerprøven. Velg et emne for å komme i gang.
                    </p>

                    {/* Interactive Search Bar */}
                    <div className="theory-search-wrapper" style={{ padding: '0 var(--spacing-sm)' }}>
                        <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
                            <input
                                type="text"
                                placeholder="Søk etter tema eller artikkel (f.eks. vikeplikt, glatt føre)..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '16px',
                                    fontSize: '1.05rem',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid var(--color-border)',
                                    backgroundColor: 'var(--color-bg)',
                                    color: 'var(--color-text)',
                                    boxShadow: 'var(--shadow-sm)',
                                    outline: 'none',
                                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--color-primary)';
                                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.15)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'var(--color-border)';
                                    e.target.style.boxShadow = 'var(--shadow-sm)';
                                }}
                            />
                            {searchQuery && (
                                <button
                                    onClick={handleClearSearch}
                                    style={{
                                        position: 'absolute',
                                        right: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--color-text-light)',
                                        cursor: 'pointer',
                                        fontSize: '1.2rem',
                                        padding: '4px',
                                    }}
                                    title="Nullstill søk"
                                >
                                    ×
                                </button>
                            )}
                        </div>
                    </div>
                </section>

                {/* Conditional rendering based on search results */}
                {filteredTopics.length === 0 && filteredArticles.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                            Ingen emner eller artikler matchet søket ditt. Prøv et annet ord.
                        </p>
                        <button
                            onClick={handleClearSearch}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: 'var(--color-bg-secondary)',
                                border: '1px solid var(--color-border)',
                                borderRadius: 'var(--radius-sm)',
                                color: 'var(--color-text)',
                                fontSize: '0.95rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                            }}
                            className="practice-card"
                        >
                            Nullstill søk
                        </button>
                    </div>
                ) : (
                    <>
                        {filteredTopics.length > 0 && (
                            <section className="theory-section-group">
                                {searchQuery ? (
                                    <>
                                        <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Læringsemner</h2>
                                        <p className="theory-subtitle" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                                            Relevante emner som matchet søket ditt.
                                        </p>
                                    </>
                                ) : null}

                                <div className="theory-cards">
                                    {filteredTopics.map(topic => (
                                        <div
                                            key={topic.id}
                                            className="theory-card"
                                            onClick={() => handleSelectTopic(topic.id)}
                                        >
                                            <div className="card-icon-box">
                                                {getTopicIcon(topic.id)}
                                            </div>
                                            <h2 className="theory-card-title">{topic.title}</h2>
                                            <p className="theory-card-desc">{parseInlineLinks(topic.shortDescription)}</p>
                                            <span className="theory-card-badge">
                                                Les mer <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {filteredArticles.length > 0 && (
                            <section className="theory-section-group">
                                <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Nyttige artikler</h2>
                                <p className="theory-subtitle" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                                    {searchQuery ? 'Relevante artikler som matchet søket ditt.' : 'Tips og råd for å hjelpe deg på veien mot førerkortet.'}
                                </p>

                                <div className="theory-cards article-grid">
                                    {filteredArticles.map(article => (
                                        <div
                                            key={article.id}
                                            className="theory-card article-card"
                                            onClick={() => handleSelectTopic(article.id)}
                                        >
                                            <div className="card-icon-box">
                                                {getTopicIcon(article.id)}
                                            </div>
                                            <h3 className="theory-card-title">{article.title}</h3>
                                            <p className="theory-card-desc">{parseInlineLinks(article.shortDescription)}</p>
                                            <span className="theory-card-badge">
                                                Les artikkel <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
