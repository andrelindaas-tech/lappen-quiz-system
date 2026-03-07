// Teori-siden — Oversikt over alle emner
import { useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { theoryTopics, theoryArticles } from '../data/theoryData'
import TheoryTopic from './TheoryTopic'

// GA4 global type
declare function gtag(...args: unknown[]): void

export default function TheoryPage() {
    const { articleId } = useParams()
    const navigate = useNavigate()

    // Using react-router-dom, we don't need manual popstate tracking anymore
    const selectedTopicId = articleId || null

    // Combine topics and articles for content lookup
    const allContent = [...theoryTopics, ...theoryArticles]
    const selectedTopic = allContent.find(t => t.id === selectedTopicId)

    // Determine base metadata (overridden by TheoryTopic if one is selected)
    const baseTitle = 'Læringsressurser for førerkort | Teori-test.no'
    const baseDescription = 'Teori, tips og artikler som hjelper deg gjennom førerprøven. Gratis og enkelt.'

    const handleSelectTopic = (id: string) => {
        const path = `/laeringsressurser/${id}`
        navigate(path)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', { page_path: path, page_title: document.title })
        }
    }

    const handleBack = () => {
        navigate('/laeringsressurser')
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', { page_path: '/laeringsressurser', page_title: document.title })
        }
    }

    if (selectedTopic) {
        return (
            <div className="container">
                {/* TheoryTopic internal Helmet tag will override the base Helmet tag */}
                <TheoryTopic
                    key={selectedTopic.id}
                    topic={selectedTopic}
                    onBack={handleBack}
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
                        <button
                            key={topic.id}
                            className="theory-card"
                            onClick={() => handleSelectTopic(topic.id)}
                            style={{ borderTopColor: topic.color }}
                        >
                            <span className="theory-card-icon">{topic.icon}</span>
                            <h2 className="theory-card-title">{topic.title}</h2>
                            <p className="theory-card-desc">{topic.shortDescription}</p>
                            <span
                                className="theory-card-badge"
                                style={{ backgroundColor: topic.color }}
                            >
                                Les mer →
                            </span>
                        </button>
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
                        <button
                            key={article.id}
                            className="theory-card article-card"
                            onClick={() => handleSelectTopic(article.id)}
                            style={{ borderTopColor: article.color }}
                        >
                            <div className="article-card-content">
                                <span className="theory-card-icon">{article.icon}</span>
                                <div>
                                    <h3 className="theory-card-title">{article.title}</h3>
                                    <p className="theory-card-desc">{article.shortDescription}</p>
                                </div>
                            </div>
                            <span
                                className="theory-card-badge"
                                style={{ backgroundColor: article.color }}
                            >
                                Les artikkel →
                            </span>
                        </button>
                    ))}
                </div>
            </section>
        </div>
    )
}
