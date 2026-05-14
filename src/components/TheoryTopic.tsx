// Teori-emne detaljvisning
import React from 'react'
import { Helmet } from 'react-helmet-async'
import type { TheoryTopic as TopicType } from '../data/theoryData'
import BrakeCalculator from './BrakeCalculator'
import TrailerWeightSimulator from './TrailerWeightSimulator'
import DashboardWarningSimulator from './DashboardWarningSimulator'
import { parseInlineLinks } from '../utils/textUtils'
import { SignIllustration } from './SignIllustration'
import AuthorityPyramid from './AuthorityPyramid'
import ReaksjonstidTest from './ReaksjonstidTest'
import VeimerkingInteraktiv from './VeimerkingInteraktiv'
import MotorromInteraktiv from './MotorromInteraktiv'
import RundkjoringAnimasjon from './RundkjoringAnimasjon'
import MiniQuiz from './MiniQuiz'
import AutomatVsManuellSammenligning from './AutomatVsManuellSammenligning'


// Renders content string with support for paragraphs, bullet lists (- ), numbered lists (1. ), images, headings (###) and markdown tables (| col |)
function renderContent(text: string) {
    const lines = text.split('\n')
    const output: React.ReactNode[] = []
    let ulItems: string[] = []
    let olItems: string[] = []
    let tableLines: string[] = []
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
    const flushTable = () => {
        if (tableLines.length === 0) return
        const rows = tableLines.filter(l => !l.match(/^\|[\s\-|:]+\|$/))
        if (rows.length === 0) { tableLines = []; return }
        const parseRow = (row: string) =>
            row.split('|').map(c => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1)
        const headers = parseRow(rows[0])
        const body = rows.slice(1)
        output.push(
            <div key={key++} className="theory-table-wrapper">
                <table className="theory-table">
                    <thead>
                        <tr>{headers.map((h, i) => <th key={i}>{parseInlineLinks(h)}</th>)}</tr>
                    </thead>
                    <tbody>
                        {body.map((row, ri) => (
                            <tr key={ri}>{parseRow(row).map((cell, ci) => <td key={ci}>{parseInlineLinks(cell)}</td>)}</tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
        tableLines = []
    }

    for (const line of lines) {
        const trimmed = line.trim()
        if (trimmed.startsWith('|')) {
            flushUl()
            flushOl()
            tableLines.push(trimmed)
        } else if (line.startsWith('- ')) {
            flushTable()
            flushOl()
            ulItems.push(line.slice(2))
        } else if (/^\d+\.\s/.test(line)) {
            flushTable()
            flushUl()
            olItems.push(line.replace(/^\d+\.\s/, ''))
        } else if (trimmed.startsWith('![')) {
            flushTable()
            flushUl()
            flushOl()
            const match = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/)
            if (match) {
                output.push(<img key={key++} src={match[2]} alt={match[1]} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', margin: '1rem 0' }} />)
            } else {
                if (trimmed !== '') output.push(<p key={key++}>{parseInlineLinks(line)}</p>)
            }
        } else if (trimmed.startsWith('### ')) {
            flushTable()
            flushUl()
            flushOl()
            output.push(<h3 key={key++} className="theory-content-heading">{trimmed.slice(4)}</h3>)
        } else {
            flushTable()
            flushUl()
            flushOl()
            if (trimmed !== '') {
                output.push(<p key={key++}>{parseInlineLinks(line)}</p>)
            }
        }
    }
    flushTable()
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
        "dateModified": "2026-02-21",
        "image": topic.icon.startsWith('http') ? topic.icon : "https://teori-test.no/og-image.png",
        "author": {
            "@type": "Organization",
            "name": "Teori-test.no",
            "url": "https://teori-test.no/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Teori-test.no",
            "url": "https://teori-test.no/"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://teori-test.no/laeringsressurser/${topic.id}`
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

    const seoTitle = topic.seoTitle || `${topic.title} | Teori-test.no`
    const seoDesc = topic.seoDescription || topic.shortDescription
    const canonicalUrl = `https://teori-test.no/laeringsressurser/${topic.id}`

    return (
        <div className="theory-topic-detail">
            {/* All head management in one Helmet block to prevent race conditions */}
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDesc} />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDesc} />
                <meta property="og:url" content={canonicalUrl} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={seoTitle} />
                <meta name="twitter:description" content={seoDesc} />
                <script type="application/ld+json">{`${JSON.stringify(structuredData)}`}</script>
            </Helmet>
            {/* FAQ JSON-LD must be in a separate Helmet block if rendered conditionally */}
            {faqData && (
                <Helmet>
                    <script type="application/ld+json">{`${JSON.stringify(faqData)}`}</script>
                </Helmet>
            )}

            <button className="theory-back-btn" onClick={onBack}>
                ← Tilbake til emner
            </button>

            <div className="theory-topic-header">
                <span className="theory-topic-icon-lg">
                    {topic.icon.startsWith('data:image') || topic.icon.startsWith('/')
                        ? <img src={topic.icon} alt={topic.title} style={{ width: '64px', height: '64px', objectFit: 'contain' }} /> 
                        : topic.icon}
                </span>
                <div className="theory-topic-header-text">
                    <h1 className="theory-topic-title">{topic.title}</h1>
                    <p className="theory-topic-desc">{parseInlineLinks(topic.shortDescription)}</p>
                </div>
            </div>

            <div className="theory-sections">
                {topic.sections.map((section, index) => (
                    <div key={index} className={`theory-section theory-section-${section.type}`}>
                        <h3 className="theory-section-title">{section.title}</h3>

                        {section.type === 'pyramid' && (
                            <div className="theory-section-content">
                                {section.content && renderContent(section.content)}
                                <AuthorityPyramid />
                            </div>
                        )}

                        {section.type === 'signs' && section.signs ? (
                            <div className="theory-section-content">
                                {section.content && renderContent(section.content)}
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
                                {section.content && renderContent(section.content)}
                                <div style={{ marginTop: '1.5rem' }}>
                                    {topic.id === 'bremselengde' && <BrakeCalculator />}
                                    {topic.id === 'vognkort-vekter' && <TrailerWeightSimulator />}
                                    {section.componentId === 'motorrom' && <MotorromInteraktiv />}
                                    {section.componentId === 'dashboard' && <DashboardWarningSimulator />}
                                    {topic.id === 'sikkerhetskontroll' && !section.componentId && <DashboardWarningSimulator />}
                                    {topic.id === 'reaksjonstid' && <ReaksjonstidTest />}
                                    {topic.id === 'veimerking' && <VeimerkingInteraktiv />}
                                </div>
                            </div>
                        ) : section.type === 'component' ? (
                            <div className="theory-section-content">
                                {section.component === 'RundkjoringAnimasjon' && <RundkjoringAnimasjon />}
                                {section.component === 'AutomatVsManuellSammenligning' && <AutomatVsManuellSammenligning />}
                            </div>
                        ) : section.type === 'table' ? (
                            <div className="theory-section-content" dangerouslySetInnerHTML={{ __html: section.content || '' }} />
                        ) : (
                            <div className="theory-section-content">
                                {section.content && renderContent(section.content)}
                            </div>
                        )}
                    </div>
                ))}
                
                {topic.faq && (
                    <div className="theory-faq-section">
                        <h2 className="theory-section-title">Ofte stilte spørsmål</h2>
                        <div className="theory-faq-list">
                            {topic.faq.map((item, i) => (
                                <div key={i} className="theory-faq-item">
                                    <h3 className="theory-faq-question">{item.question}</h3>
                                    <div className="theory-faq-answer">
                                        {parseInlineLinks(item.answer)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                {topic.miniQuiz && topic.miniQuiz.length > 0 && (
                    <div className="theory-section theory-section-info" style={{ marginTop: '0' }}>
                        <h3 className="theory-section-title">Test deg selv</h3>
                        <div className="theory-section-content">
                            <MiniQuiz questions={topic.miniQuiz} />
                        </div>
                    </div>
                )}

                {extraComponent && (
                    <div className="theory-extra-component" style={{ marginTop: '2rem' }}>
                        {extraComponent}
                    </div>
                )}
            </div>
        </div>
    )
}
