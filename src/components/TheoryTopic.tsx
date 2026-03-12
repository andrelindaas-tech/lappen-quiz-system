// Teori-emne detaljvisning
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import type { TheoryTopic as TopicType } from '../data/theoryData'
import BrakeCalculator from './BrakeCalculator'

// Helper function to safely parse markdown-style localized [links](/urls)
function parseInlineLinks(text: string) {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const parts = []
    let lastIndex = 0
    let match

    while ((match = linkRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index))
        }
        const textContent = match[1]
        const url = match[2]

        if (url.startsWith('/')) {
            parts.push(
                <Link key={match.index} to={url} style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>
                    {textContent}
                </Link>
            )
        } else {
            parts.push(
                <a key={match.index} href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>
                    {textContent}
                </a>
            )
        }
        lastIndex = linkRegex.lastIndex
    }

    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex))
    }

    return parts.length > 0 ? parts : text
}

// Renders content string with support for paragraphs, bullet lists (- ) and numbered lists (1. )
function renderContent(text: string) {
    const lines = text.split('\n')
    const output: React.ReactNode[] = []
    let ulItems: string[] = []
    let olItems: string[] = []
    let key = 0

    const flushUl = () => {
        if (ulItems.length > 0) {
            output.push(
                <ul key={key++} className="theory-list">
                    {ulItems.map((item, i) => <li key={i}>{parseInlineLinks(item)}</li>)}
                </ul>
            )
            ulItems = []
        }
    }
    const flushOl = () => {
        if (olItems.length > 0) {
            output.push(
                <ol key={key++} className="theory-list theory-list-ol">
                    {olItems.map((item, i) => <li key={i}>{parseInlineLinks(item)}</li>)}
                </ol>
            )
            olItems = []
        }
    }

    for (const line of lines) {
        if (line.startsWith('- ')) {
            flushOl()
            ulItems.push(line.slice(2))
        } else if (/^\d+\.\s/.test(line)) {
            flushUl()
            olItems.push(line.replace(/^\d+\.\s/, ''))
        } else {
            flushUl()
            flushOl()
            if (line.trim() !== '') {
                output.push(<p key={key++}>{parseInlineLinks(line)}</p>)
            }
        }
    }
    flushUl()
    flushOl()

    return output
}

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

            {/* Dynamic SEO Header Tags */}
            <Helmet>
                <title>{topic.seoTitle || `${topic.title} | Teori-test.no`}</title>
                <meta name="description" content={topic.seoDescription || topic.shortDescription} />
            </Helmet>

            <button className="theory-back-btn" onClick={onBack}>
                ← Tilbake til emner
            </button>

            <div className="theory-topic-header">
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
                                {renderContent(section.content)}
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
