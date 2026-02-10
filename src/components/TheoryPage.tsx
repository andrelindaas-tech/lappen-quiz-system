// Teori-siden — Oversikt over alle emner
import { useState } from 'react'
import { theoryTopics } from '../data/theoryData'
import TheoryTopic from './TheoryTopic'

export default function TheoryPage() {
    const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null)

    const selectedTopic = theoryTopics.find(t => t.id === selectedTopicId)

    if (selectedTopic) {
        return (
            <div className="container">
                <TheoryTopic
                    topic={selectedTopic}
                    onBack={() => setSelectedTopicId(null)}
                />
            </div>
        )
    }

    return (
        <div className="theory-page">
            <h1>📖 Teoristoff</h1>
            <p className="theory-subtitle">
                Lær viktig teori for førerprøven. Velg et emne for å komme i gang.
            </p>

            <div className="theory-cards">
                {theoryTopics.map(topic => (
                    <button
                        key={topic.id}
                        className="theory-card"
                        onClick={() => setSelectedTopicId(topic.id)}
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
        </div>
    )
}
