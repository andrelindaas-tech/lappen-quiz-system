// Teori-emne detaljvisning
import type { TheoryTopic as TopicType } from '../data/theoryData'
import BrakeCalculator from './BrakeCalculator'

interface TheoryTopicProps {
    topic: TopicType
    onBack: () => void
}

export default function TheoryTopic({ topic, onBack }: TheoryTopicProps) {
    // Generate JSON-LD for this specific topic
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": topic.title,
        "description": topic.shortDescription,
        "inLanguage": "nb",
        "datePublished": "2026-02-21",
        "author": {
            "@type": "Organization",
            "name": "Teori-test.no",
            "url": "https://teori-test.no"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Teori-test.no",
            "url": "https://teori-test.no"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://teori-test.no/teori/${topic.id}`
        }
    }

    return (
        <div className="theory-topic-detail">
            {/* Inject JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>

            <button className="theory-back-btn" onClick={onBack}>
                ← Tilbake til emner
            </button>

            <div className="theory-topic-header" style={{ borderLeftColor: topic.color }}>
                <span className="theory-topic-icon-lg">{topic.icon}</span>
                <div>
                    <h2>{topic.title}</h2>
                    <p className="theory-topic-desc">{topic.shortDescription}</p>
                </div>
            </div>

            <div className="theory-sections">
                {topic.sections.map((section, index) => (
                    <div key={index} className={`theory-section theory-section-${section.type}`}>
                        <h3 className="theory-section-title">{section.title}</h3>

                        {section.type === 'signs' && section.signs ? (
                            <div className="theory-signs-grid">
                                {section.signs.map((sign, i) => (
                                    <div key={i} className="theory-sign-item">
                                        <img
                                            src={sign.imageUrl}
                                            alt={sign.name}
                                            className="theory-sign-img"
                                        />
                                        <div className="theory-sign-text">
                                            <strong>{sign.name}</strong>
                                            <p>{sign.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="theory-section-content">
                                {section.content.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {topic.hasCalculator && (
                <BrakeCalculator />
            )}
        </div>
    )
}
