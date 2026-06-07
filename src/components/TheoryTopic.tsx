// Teori-emne detaljvisning
import React from 'react'
import { Helmet } from 'react-helmet-async'
import type { TheoryTopic as TopicType } from '../data/theoryData'
import { 
    Shield, 
    Gauge, 
    Layers, 
    Route, 
    BookOpen, 
    Zap,
    Wrench,
    Car,
    RefreshCcw,
    UserCheck,
    GraduationCap,
    HeartPulse,
    AlertTriangle,
    Snowflake,
    Timer
} from 'lucide-react'
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
import { TilhengerKalkulator } from './TilhengerKalkulator'


// Renders content string with support for paragraphs, bullet lists (- ), numbered lists (1. ) and code blocks (```)
function renderContent(text: string) {
    const lines = text.split('\n')
    const output: React.ReactNode[] = []
    let ulItems: string[] = []
    let olItems: string[] = []
    let codeLines: string[] = []
    let inCodeBlock = false
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
    const flushCode = () => {
        if (codeLines.length > 0) {
            output.push(
                <pre key={key++} className="theory-code-block">
                    <code>{codeLines.join('\n')}</code>
                </pre>
            )
            codeLines = []
        }
    }

    for (const line of lines) {
        if (line.trim().startsWith('```')) {
            if (inCodeBlock) {
                flushCode()
                inCodeBlock = false
            } else {
                flushUl()
                flushOl()
                inCodeBlock = true
            }
        } else if (inCodeBlock) {
            codeLines.push(line)
        } else if (line.startsWith('- ')) {
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
    flushCode()

    return output
}

const getTopicIcon = (id: string, iconFromData: string) => {
    if (iconFromData && (iconFromData.startsWith('data:image') || iconFromData.startsWith('/'))) {
        return <img src={iconFromData} alt="" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
    }

    const iconProps = {
        size: 48,
        strokeWidth: 1.5,
        color: 'var(--color-primary)'
    }

    switch (id) {
        case 'vikeplikt':
            return <Shield {...iconProps} />
        case 'bremselengde':
            return <Gauge {...iconProps} />
        case 'myndighetspyramiden':
            return <Layers {...iconProps} />
        case 'veimerking':
            return <Route {...iconProps} />
        case 'reaksjonstid':
            return <Timer {...iconProps} />
        case 'automatlappen':
            return <Zap {...iconProps} />
        case 'sikkerhetskontroll':
            return <Wrench {...iconProps} />
        case 'oppkjoring':
            return <Car {...iconProps} />
        case 'stroket-teoriproven':
            return <RefreshCcw {...iconProps} />
        case 'ovingskjoring':
            return <UserCheck {...iconProps} />
        case 'tips-eksamen':
            return <GraduationCap {...iconProps} />
        case 'trafikkuhell-forstehjelp':
            return <HeartPulse {...iconProps} />
        case 'vanlige-feil-teoriproven':
            return <AlertTriangle {...iconProps} />
        case 'glatt-fore':
            return <Snowflake {...iconProps} />
        default:
            return <BookOpen {...iconProps} />
    }
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
                <span className="theory-topic-icon-lg">
                    {getTopicIcon(topic.id, topic.icon)}
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
                                    {topic.id === 'tilhenger' && <TilhengerKalkulator />}
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

                {topic.sources && (
                    <div className="theory-sources-section" style={{ marginTop: '2rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                        <h4 className="theory-section-title" style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{topic.sources.title}</h4>
                        <div className="theory-section-content" style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
                            {topic.sources.content && renderContent(topic.sources.content)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
