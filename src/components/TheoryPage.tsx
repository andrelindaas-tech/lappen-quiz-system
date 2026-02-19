// Teori-siden — Oversikt over alle emner
import { useState } from 'react'
import { theoryTopics, theoryArticles } from '../data/theoryData'
import TheoryTopic from './TheoryTopic'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'
import { useEffect } from 'react'

export default function TheoryPage() {
    const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null)

    // Sync state with URL hash
    useEffect(() => {
        const handleHash = () => {
            const parts = window.location.hash.split('/')
            if (parts.length >= 3 && parts[1] === 'teori') {
                setSelectedTopicId(parts[2])
            } else {
                setSelectedTopicId(null)
            }
        }
        window.addEventListener('hashchange', handleHash)
        handleHash()
        return () => window.removeEventListener('hashchange', handleHash)
    }, [])

    // Combine topics and articles for content lookup
    const allContent = [...theoryTopics, ...theoryArticles]
    const selectedTopic = allContent.find(t => t.id === selectedTopicId)

    // Manage Metadata
    useDocumentMetadata({
        title: selectedTopic ? `Læringsressurser: ${selectedTopic.title}` : 'Læringsressurser for førerkort',
        description: selectedTopic ? selectedTopic.shortDescription : 'Teori, tips og artikler som hjelper deg gjennom førerprøven. Gratis og enkelt.'
    })

    const handleSelectTopic = (id: string) => {
        window.location.hash = `#/teori/${id}`
    }

    const handleBack = () => {
        window.location.hash = `#/teori`
    }

    if (selectedTopic) {
        return (
            <div className="container">
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
