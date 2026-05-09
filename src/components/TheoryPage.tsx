// Teori-siden — Oversikt over alle emner
import { useParams, useNavigate } from 'react-router-dom'
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
        </div>
    )
}
