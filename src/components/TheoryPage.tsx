// Teori-siden — Oversikt over alle emner
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
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
    AlertTriangle
} from 'lucide-react'
import { theoryTopics, theoryArticles, theoryUtilityPages } from '../data/theoryData'
import TheoryTopic from './TheoryTopic'
import { TilhengerKalkulator } from './TilhengerKalkulator'
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
        default:
            return <BookOpen size={24} strokeWidth={1.8} />
    }
}

// GA4 global type
declare function gtag(...args: unknown[]): void

export default function TheoryPage() {
    const { articleId } = useParams()
    const navigate = useNavigate()

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
        <div className="start-screen" style={{ paddingBottom: '4rem' }}>
            <Helmet>
                <title>{baseTitle}</title>
                <meta name="description" content={baseDescription} />
            </Helmet>

            <div className="section-container">
                <section className="theory-section-group">
                    <h1 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Læringsressurser</h1>
                    <p className="theory-subtitle" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        Lær viktig teori for førerprøven. Velg et emne for å komme i gang.
                    </p>

                    <div className="theory-cards">
                        {theoryTopics.map(topic => (
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

                <section className="theory-section-group">
                    <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Nyttige artikler</h2>
                    <p className="theory-subtitle" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        Tips og råd for å hjelpe deg på veien mot førerkortet.
                    </p>

                    <div className="theory-cards article-grid">
                        {theoryArticles.map(article => (
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
            </div>
        </div>
    )
}
