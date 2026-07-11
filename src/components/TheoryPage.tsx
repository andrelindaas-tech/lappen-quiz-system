// Teori-siden — Oversikt over alle emner
import { useParams, useNavigate, Link } from 'react-router-dom'
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

const overviewArticleIds = ['temaliste-teoriproven-klasse-b']

const articleCategorySections = [
    {
        title: 'Om teoriprøven',
        description: 'Fakta om prøven: antall spørsmål, tid, pris, krav – og hvordan du øver gratis.',
        ids: ['teoriproven-bil', 'teoritentamen']
    },
    {
        title: 'Vikeplikt og kryss',
        description: 'Lær hvordan du vurderer kryss, rundkjøringer, trikk, buss og trafikklys.',
        ids: ['vikeplikt', 'rundkjoring', 'trafikklys-signaler', 'buss-fra-holdeplass', 'trikk-og-vikeplikt']
    },
    {
        title: 'Trafikkskilt',
        description: 'Forstå skiltgrupper, fareskilt og situasjoner der skilt styrer hva du skal gjøre.',
        ids: ['skilt', 'planovergang-regler']
    },
    {
        title: 'Fart og plassering',
        description: 'Øv på fartsgrenser, feltvalg, forbikjøring, kollektivfelt og riktig plassering.',
        ids: ['fartsgrenser', 'feltvalg-fletting-kollektivfelt', 'forbikjoring', 'kollektivfelt-og-elbil']
    },
    {
        title: 'Bremselengde og reaksjonstid',
        description: 'Lær stopplengde, reaksjonstid og hvordan føre påvirker bremsing.',
        ids: ['bremselengde', 'reaksjonstid', 'glatt-fore']
    },
    {
        title: 'Parkering og stans',
        description: 'Se reglene for stans, parkering og situasjoner der du må være ekstra varsom.',
        ids: ['stans-og-parkering', 'tunnelsikkerhet']
    },
    {
        title: 'Veimerking',
        description: 'Lær sperrelinjer, varsellinjer, kantlinjer og hva veimerkingen betyr i praksis.',
        ids: ['veimerking']
    },
    {
        title: 'Kjøretøy og teknisk',
        description: 'Alt om bilen, dekk, bremser, lys, vognkort, tilhenger og førerstøttesystemer.',
        ids: ['dekk-bremser-styring', 'sikkerhetskontroll', 'bilens-lys', 'vognkort-vekter', 'tilhenger', 'forerstottesystemer', 'automatlappen']
    },
    {
        title: 'Trafikanter og samspill',
        description: 'Forstå samspill, øvelseskjøring, miljø, barn i bil og forberedelse til prøvene.',
        ids: ['ovingskjoring', 'barn-i-bil-og-sikring', 'miljo', 'oppkjoring', 'tips-eksamen', 'stroket-teoriproven', 'vanlige-feil-teoriproven']
    },
    {
        title: 'Sikkerhet og førstehjelp',
        description: 'Lær sikkerhetsutstyr, promille, førstehjelp og hva du gjør ved trafikkuhell.',
        ids: ['sikkerhetsutstyr', 'trafikkuhell-forstehjelp', 'promille']
    },
    {
        title: 'Lover og ansvar',
        description: 'Forstå føreransvar, §3, prikker, forelegg, førerkortbeslag og forsikring.',
        ids: ['vegtrafikkloven-paragraf-3', 'plikter-ved-ulykke', 'prikker-pa-forerkortet', 'forerkortbeslag', 'boter-og-forelegg', 'forsikring-og-ansvar', 'myndighetspyramiden']
    }
]

// Helper function to get Lucide icons for topics and articles
const getTopicIcon = (id: string) => {
    switch (id) {
        case 'vikeplikt':
        case 'trikk-og-vikeplikt':
        case 'vegtrafikkloven-paragraf-3':
        case 'forsikring-og-ansvar':
            return <Shield size={24} strokeWidth={1.8} />
        case 'bremselengde':
            return <Gauge size={24} strokeWidth={1.8} />
        case 'myndighetspyramiden':
            return <Layers size={24} strokeWidth={1.8} />
        case 'veimerking':
        case 'feltvalg-fletting-kollektivfelt':
        case 'buss-fra-holdeplass':
        case 'planovergang-regler':
        case 'kollektivfelt-og-elbil':
            return <Route size={24} strokeWidth={1.8} />
        case 'automatlappen':
            return <Zap size={24} strokeWidth={1.8} />
        case 'sikkerhetskontroll':
            return <Wrench size={24} strokeWidth={1.8} />
        case 'oppkjoring':
        case 'forerstottesystemer':
            return <Car size={24} strokeWidth={1.8} />
        case 'stroket-teoriproven':
            return <RefreshCcw size={24} strokeWidth={1.8} />
        case 'ovingskjoring':
        case 'barn-i-bil-og-sikring':
            return <UserCheck size={24} strokeWidth={1.8} />
        case 'tips-eksamen':
        case 'teoriproven-bil':
        case 'teoritentamen':
            return <GraduationCap size={24} strokeWidth={1.8} />
        case 'trafikkuhell-forstehjelp':
        case 'plikter-ved-ulykke':
            return <HeartPulse size={24} strokeWidth={1.8} />
        case 'vanlige-feil-teoriproven':
        case 'tunnelsikkerhet':
        case 'prikker-pa-forerkortet':
        case 'forerkortbeslag':
        case 'boter-og-forelegg':
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

    const categorizedSections = useMemo(() => {
        const contentById = new Map([...theoryTopics, ...theoryArticles].map(item => [item.id, item]))
        return articleCategorySections
            .map(section => ({
                ...section,
                items: section.ids
                    .map(id => contentById.get(id))
                    .filter((item): item is NonNullable<typeof item> => Boolean(item))
            }))
            .filter(section => section.items.length > 0)
    }, [])

    const overviewArticles = useMemo(() => {
        const contentById = new Map([...theoryTopics, ...theoryArticles].map(item => [item.id, item]))
        return overviewArticleIds
            .map(id => contentById.get(id))
            .filter((item): item is NonNullable<typeof item> => Boolean(item))
    }, [])

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
                    <p className="theory-subtitle" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                        Lær viktig teori for førerprøven. Velg et emne for å komme i gang.
                    </p>

                    {/* Teorispørsmål-promo (testflate) */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                        <Link to="/sporsmal" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '10px 18px', borderRadius: '100px',
                            border: '1px solid rgba(45, 212, 191, 0.4)',
                            backgroundColor: 'rgba(45, 212, 191, 0.08)',
                            textDecoration: 'none', color: 'var(--color-text)',
                            fontSize: '0.9rem', fontWeight: 600,
                        }}>
                            <span style={{
                                fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.05em',
                                backgroundColor: 'var(--color-primary)', color: '#fff',
                                padding: '2px 8px', borderRadius: '100px',
                            }}>NYTT</span>
                            Ofte spurte teorispørsmål — med fasit og ekstra god forklaring
                            <span style={{ color: 'var(--color-primary)' }}>→</span>
                        </Link>
                    </div>

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
                        {!searchQuery ? (
                            <>
                                {overviewArticles.length > 0 && (
                                    <section className="theory-section-group">
                                        <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Slik er teorien delt inn</h2>
                                        <p className="theory-subtitle" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                                            Start her for å se de 10 hovedtemaene som brukes både på artikkelsiden og i resultatanalysen etter full prøve.
                                        </p>

                                        <div className="theory-cards article-grid">
                                            {overviewArticles.map(article => (
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
                                                        Se temakart <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                {categorizedSections.map(section => (
                                    <section className="theory-section-group" key={section.title}>
                                        <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{section.title}</h2>
                                        <p className="theory-subtitle" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                                            {section.description}
                                        </p>

                                        <div className="theory-cards article-grid">
                                            {section.items.map(item => (
                                                <div
                                                    key={item.id}
                                                    className="theory-card article-card"
                                                    onClick={() => handleSelectTopic(item.id)}
                                                >
                                                    <div className="card-icon-box">
                                                        {getTopicIcon(item.id)}
                                                    </div>
                                                    <h3 className="theory-card-title">{item.title}</h3>
                                                    <p className="theory-card-desc">{parseInlineLinks(item.shortDescription)}</p>
                                                    <span className="theory-card-badge">
                                                        Les mer <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                ))}
                            </>
                        ) : (
                            <>
                                {filteredTopics.length > 0 && (
                                    <section className="theory-section-group">
                                        <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Læringsemner</h2>
                                        <p className="theory-subtitle" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                                            Relevante emner som matchet søket ditt.
                                        </p>

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
                                            Relevante artikler som matchet søket ditt.
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
                    </>
                )}
            </div>
        </div>
    )
}
