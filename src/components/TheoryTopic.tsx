// Teori-emne detaljvisning
import React from 'react'
import { Helmet } from 'react-helmet-async'
import type { TheoryTopic as TopicType } from '../data/theoryData'
import BrakeCalculator from './BrakeCalculator'
import { parseInlineLinks } from '../utils/textUtils'
import { SignIllustration } from './SignIllustration'


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
    extraComponent?: React.ReactNode
}

export default function TheoryTopic({ topic, onBack, extraComponent }: TheoryTopicProps) {
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

    const faqData = topic.faq ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": topic.faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    } : null

    return (
        <div className="theory-topic-detail">
            {/* Inject JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
            {faqData && (
                <script type="application/ld+json">
                    {JSON.stringify(faqData)}
                </script>
            )}

            {/* Dynamic SEO Header Tags */}
            <Helmet>
                <title>{topic.seoTitle || `${topic.title} | Teori-test.no`}</title>
                <meta name="description" content={topic.seoDescription || topic.shortDescription} />
                <meta property="og:title" content={topic.seoTitle || `${topic.title} | Teori-test.no`} />
                <meta property="og:description" content={topic.seoDescription || topic.shortDescription} />
                <meta name="twitter:title" content={topic.seoTitle || `${topic.title} | Teori-test.no`} />
                <meta name="twitter:description" content={topic.seoDescription || topic.shortDescription} />
            </Helmet>

            <button className="theory-back-btn" onClick={onBack}>
                ← Tilbake til emner
            </button>

            <div className="theory-topic-header">
                <span className="theory-topic-icon-lg">{topic.icon}</span>
                <div>
                    <h1 style={{ fontSize: '2rem', margin: '0 0 var(--spacing-sm)' }}>{topic.title}</h1>
                    <p className="theory-topic-desc">{parseInlineLinks(topic.shortDescription)}</p>
                </div>
            </div>

            <div className="theory-sections">
                {topic.sections.map((section, index) => (
                    <div key={index} className={`theory-section theory-section-${section.type}`}>
                        <h3 className="theory-section-title">{section.title}</h3>

                        {section.type === 'signs' && section.signs ? (
                            <div className="theory-section-content">
                                {renderContent(section.content)}
                                <div className="theory-signs-grid">
                                    {section.signs.map((sign, i) => (
                                        <div key={i} className="theory-sign-item">
                                            <div className="theory-sign-visual">
                                                {sign.signId ? (
                                                    <SignIllustration signId={sign.signId} className="theory-sign-svg" />
                                                ) : (
                                                    <img
                                                        src={sign.imageUrl}
                                                        alt={sign.name}
                                                        className="theory-sign-img"
                                                    />
                                                )}
                                            </div>
                                            <div className="theory-sign-text">
                                                <strong>{sign.name}</strong>
                                                <p>{sign.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : section.type === 'calculator' ? (
                            <div className="theory-section-content">
                                {renderContent(section.content)}
                                <div style={{ marginTop: '1.5rem' }}>
                                    <BrakeCalculator />
                                </div>
                            </div>
                        ) : (
                            <div className="theory-section-content">
                                {renderContent(section.content)}
                            </div>
                        )}
                    </div>
                ))}
                
                {extraComponent && (
                    <div className="theory-extra-component" style={{ marginTop: '2rem' }}>
                        {extraComponent}
                    </div>
                )}
            </div>
        </div>
    )
}
