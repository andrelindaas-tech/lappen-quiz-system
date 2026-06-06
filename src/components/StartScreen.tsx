import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { getWrongAnswersCount, clearWrongAnswers } from '../utils/wrongAnswersStore'
import { Helmet } from 'react-helmet-async'
import { Zap, Signpost, Target, Route, Gauge, Layers, CircleGauge, Wine, Truck, Wrench, ChevronDown, RefreshCw, Car, ChevronRight, BookOpen, HelpCircle, Snowflake, Gamepad2 } from 'lucide-react'

export default function StartScreen() {
    const [fokusCount, setFokusCount] = useState(0)
    const [useTimerForFull, setUseTimerForFull] = useState(false)
    const [activeFaq, setActiveFaq] = useState<number | null>(null)
    const navigate = useNavigate()

    // Load wrong answers count on mount and when returning from quiz
    useEffect(() => {
        const count = getWrongAnswersCount()
        setFokusCount(count)
        console.log(`🎯 Fokusmodus has ${count} questions`)
    }, [])

    const toggleFaq = (index: number) => {
        setActiveFaq(prev => prev === index ? null : index)
    }

    const handleClearFokus = () => {
        if (confirm('Er du sikker på at du vil nullstille alle lagrede feilsvar i fokusmodus?')) {
            clearWrongAnswers()
            setFokusCount(0)
        }
    }

    return (
        <div className="start-screen">
            <Helmet>
                <title>Gratis teoriprøve klasse B 2026 – 45 spørsmål og fasit | Teori-test.no</title>
                <meta name="description" content="Øv gratis til teoriprøven for klasse B. Ta full prøve med 45 spørsmål, vikeplikt-test, skilt-test og interaktive guider. Ingen registrering." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://teori-test.no/" />
                <meta property="og:title" content="Gratis teoriprøve klasse B 2026 – 45 spørsmål og fasit | Teori-test.no" />
                <meta property="og:description" content="Øv gratis til teoriprøven for klasse B. Ta full prøve med 45 spørsmål, vikeplikt-test, skilt-test og interaktive guider. Ingen registrering." />
                <meta name="twitter:title" content="Gratis teoriprøve klasse B 2026 – 45 spørsmål og fasit | Teori-test.no" />
                <meta name="twitter:description" content="Øv gratis til teoriprøven for klasse B. Ta full prøve med 45 spørsmål, vikeplikt-test, skilt-test og interaktive guider. Ingen registrering." />
                <script type="application/ld+json">
                    {`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Er teoriprøvene på Teori-test.no gratis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Du kan øve gratis uten registrering og uten å laste ned app."
      }
    },
    {
      "@type": "Question",
      "name": "Er dette den ekte teoriprøven?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nei. Dette er en øvingsprøve laget for å ligne formatet på teoriprøven for klasse B, slik at du kan trene før den ekte prøven hos Statens vegvesen."
      }
    },
    {
      "@type": "Question",
      "name": "Får jeg se fasit og forklaring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Etter prøven får du se riktige svar og korte forklaringer, slik at du kan lære av feilene dine."
      }
    },
    {
      "@type": "Question",
      "name": "Hvilke temaer kan jeg øve på?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spørsmålene dekker de viktigste kategoriene i pensum for teoriprøven klasse B. Du kan øve på blant annet vikeplikt, trafikkskilt, veimerking, bremselengde, forbikjøring, promille, glatt føre, kjøretøy, sikkerhetskontroll og trafikkregler."
      }
    },
    {
      "@type": "Question",
      "name": "Hva er fokusmodus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fokusmodus lar deg øve videre på spørsmål du tidligere har svart feil på. Dette lagres lokalt i nettleseren din."
      }
    },
    {
      "@type": "Question",
      "name": "Finnes det en gratis teoriprøve-app jeg kan bruke?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Du trenger ikke laste ned en egen app. Teori-test.no fungerer i nettleseren på mobil, nettbrett og PC. For rask tilgang kan brukeren legge siden til på hjemskjermen."
      }
    }
  ]
}
                    `}
                </script>
            </Helmet>

            {/* HERO SECTION */}
            <header className="section-container hero-container">
                <div className="hero-section-clean">
                    <h1 className="hero-title">
                        Norges enkleste måte å øve til teoriprøven – helt gratis.
                    </h1>
                    <p className="hero-description">
                        Teori-test.no er laget for deg som snart skal ta teoriprøven for klasse B. Her finner du kvalitetssikrede teorioppgaver som dekker hele pensum – fra fartsgrenser og vikeplikt til vegoppmerking og trafikkskilt. I tillegg til øvingsprøver finner du interaktive læringsartikler med visuelle guider og simulatorer. Du trenger ikke å lage bruker, betale, eller laste ned noe.
                    </p>
                </div>
            </header>

            {/* TRUST BADGES ROW */}
            <div className="section-container trust-badges-container">
                <div className="trust-badges-row">
                    {['100% gratis', 'Ingen registrering', '45 spørsmål', 'Oppdatert 2026', 'Klasse B-pensum'].map((text, i) => (
                        <div key={i} className="trust-badge">
                            <span className="trust-badge-check">✓</span>
                            {text}
                        </div>
                    ))}
                </div>
            </div>

            {/* MODE CARDS SECTION */}
            <section id="mode-selection" className="section-container">
                <div className="mode-selection-header">
                    <h2>Velg prøvetype</h2>
                    <p>Velg mellom en rask øvingstest eller fullverdig eksamensprøve</p>
                </div>

                <div className="mode-cards">
                    {/* Full Quiz Card */}
                    <div
                        className="mode-card mode-card-full"
                        onClick={() => navigate(`/quiz?mode=eksamen${useTimerForFull ? '&timer=true' : ''}`)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                navigate(`/quiz?mode=eksamen${useTimerForFull ? '&timer=true' : ''}`)
                            }
                        }}
                    >
                        <div className="mode-card-full-left">
                            <div className="card-icon-box">
                                <BookOpen size={24} strokeWidth={1.8} />
                            </div>
                            <div>
                                <h3 className="card-title">
                                    Full prøve
                                    <span className="mode-badge mode-badge-full">Offisielt format</span>
                                </h3>
                                <p className="card-desc">
                                    Simulerer den virkelige teoriprøven hos Statens vegvesen med samme tidsbegrensning og beståttgrense (maks 7 feil av 45 oppgaver). Denne samler spørsmål fra alle kategorier for å gi deg et mest mulig realistisk bilde av sjansene dine for å bestå før den ekte eksamenen.
                                </p>
                            </div>
                        </div>

                        <div className="mode-card-full-right">
                            <div className="card-stats-box">
                                <div className="card-stats-item">
                                    <span className="card-stats-label">TID</span>
                                    <strong className="card-stats-value">90 min</strong>
                                </div>
                                <div className="card-stats-item">
                                    <span className="card-stats-label">KRAV</span>
                                    <strong className="card-stats-value">Maks 7 feil</strong>
                                </div>
                            </div>

                            {/* Timer toggle checkbox */}
                            <div
                                className="card-timer-toggle"
                                onClick={(e) => {
                                    e.stopPropagation() // Prevent card click
                                    setUseTimerForFull(!useTimerForFull)
                                }}
                            >
                                <input
                                    type="checkbox"
                                    id="timer-toggle"
                                    checked={useTimerForFull}
                                    onChange={() => { }} // Handled by parent div
                                    style={{ pointerEvents: 'none', marginRight: '4px' }}
                                />
                                <label htmlFor="timer-toggle" style={{ cursor: 'pointer' }}>
                                    Tidsbegrensning (90 min)
                                </label>
                            </div>

                            <div className="card-action-btn card-action-btn-primary">
                                Start full prøve <ChevronRight size={14} />
                            </div>
                        </div>
                    </div>

                    {/* Vikeplikt Card */}
                    <div
                        className="mode-card"
                        onClick={() => navigate('/quiz/vikeplikt')}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') navigate('/quiz/vikeplikt')
                        }}
                    >
                        <div className="mode-card-main">
                            <div className="card-icon-box">
                                <Car size={24} strokeWidth={1.8} />
                            </div>
                            <h3 className="card-title">Vikeplikt-test</h3>
                            <p className="card-desc">
                                Målrettet øving på en vanlig strykfelle. Test din forståelse for høyreregler, svingeregler, forkjørsvei, rundkjøringer og spesielle vikepliktsituasjoner med visualiseringer.
                            </p>
                        </div>
                        <div className="mode-card-footer">
                            <span className="card-meta">Med visuelle kryss-diagrammer</span>
                            <div className="card-action-btn">
                                Start test <ChevronRight size={14} />
                            </div>
                        </div>
                    </div>

                    {/* Ekspresstest Card */}
                    <div
                        className="mode-card"
                        onClick={() => navigate('/quiz?mode=hurtig')}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') navigate('/quiz?mode=hurtig')
                        }}
                    >
                        <div className="mode-card-main">
                            <div className="card-icon-box">
                                <Zap size={24} strokeWidth={1.8} />
                            </div>
                            <h3 className="card-title">Ekspresstest</h3>
                            <p className="card-desc">
                                10 raske spørsmål når du vil ta en kjapp sjekk. Passer perfekt når du har dårlig tid på bussen, skolen eller i pausen.
                            </p>
                        </div>
                        <div className="mode-card-footer">
                            <span className="card-meta">15 minutter • 10 spørsmål</span>
                            <div className="card-action-btn">
                                Start test <ChevronRight size={14} />
                            </div>
                        </div>
                    </div>

                    {/* Skilt Card */}
                    <div
                        className="mode-card"
                        onClick={() => navigate('/quiz/skilt')}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') navigate('/quiz/skilt')
                        }}
                    >
                        <div className="mode-card-main">
                            <div className="card-icon-box">
                                <HelpCircle size={24} strokeWidth={1.8} />
                            </div>
                            <h3 className="card-title">Skilt-test</h3>
                            <p className="card-desc">
                                Øv på trafikkskilt og vikepliktskilt. Lær deg betydningen av de viktigste forbuds-, påbuds-, opplysnings- og fareskiltene du garantert vil møte på veien.
                            </p>
                        </div>
                        <div className="mode-card-footer">
                            <span className="card-meta">Med skiltillustrasjoner</span>
                            <div className="card-action-btn">
                                Start test <ChevronRight size={14} />
                            </div>
                        </div>
                    </div>

                    {/* Fokusmodus Card */}
                    <div
                        className={`mode-card ${fokusCount === 0 ? 'disabled' : ''}`}
                        onClick={() => {
                            if (fokusCount > 0) {
                                navigate('/quiz?mode=fokus')
                            }
                        }}
                        role="button"
                        tabIndex={fokusCount > 0 ? 0 : -1}
                        onKeyDown={(e) => {
                            if ((e.key === 'Enter' || e.key === ' ') && fokusCount > 0) {
                                navigate('/quiz?mode=fokus')
                            }
                        }}
                    >
                        <div className="mode-card-main">
                            <div className="card-icon-box">
                                <Target size={24} strokeWidth={1.8} />
                            </div>
                            <h3 className="card-title">
                                Fokusmodus
                                {fokusCount > 0 && <span className="mode-badge mode-badge-full">Smart øving</span>}
                            </h3>
                            <p className="card-desc">
                                Øv på spørsmål du har svart feil på tidligere. Vårt system lagrer feilsvarte spørsmål i din lokale nettleser helt anonymt, slik at du kan eliminere svake punkter frem mot selve prøvedagen.
                            </p>
                        </div>
                        <div className="mode-card-footer">
                            <span className="card-meta">
                                Lagrede feilsvar: <strong style={{ color: 'var(--color-primary)' }}>{fokusCount} spørsmål</strong>
                            </span>
                            <div className="card-actions-wrapper" onClick={(e) => e.stopPropagation()}>
                                {fokusCount > 0 && (
                                    <button 
                                        onClick={handleClearFokus}
                                        className="card-reset-btn"
                                        title="Tøm lagrede feilsvar"
                                    >
                                        <RefreshCw size={14} />
                                    </button>
                                )}
                                <button 
                                    disabled={fokusCount === 0}
                                    onClick={() => navigate('/quiz?mode=fokus')}
                                    className={`card-action-btn ${fokusCount === 0 ? 'card-action-btn-disabled' : ''}`}
                                >
                                    Start test <ChevronRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GUIDES AND CHIPS TILE */}
            <section className="section-container">
                <div className="theory-full-width-tile">
                    <h2>Interaktive guider og artikler</h2>
                    <p>
                        Forstå reglene bak spørsmålene med visuelle eksempler, kalkulatorer og korte forklaringer.
                    </p>

                    <div className="theory-chips-container">
                        {[
                            { label: 'Vikeplikt og rundkjøring', path: '/laeringsressurser/vikeplikt', icon: Route },
                            { label: 'Bremselengde og stopplengde', path: '/laeringsressurser/bremselengde', icon: Gauge },
                            { label: 'Myndighetspyramiden', path: '/laeringsressurser/myndighetspyramiden', icon: Layers },
                            { label: 'Veimerking', path: '/laeringsressurser/veimerking', icon: Route },
                            { label: 'Trafikkskilt', path: '/laeringsressurser/skilt', icon: Signpost },
                            { label: 'Fartsgrenser', path: '/laeringsressurser/fartsgrenser', icon: CircleGauge },
                            { label: 'Promille og rus', path: '/laeringsressurser/promille', icon: Wine },
                            { label: 'Tilhenger og vekt', path: '/laeringsressurser/tilhenger', icon: Truck },
                            { label: 'Sikkerhetskontroll', path: '/laeringsressurser/sikkerhetskontroll', icon: Wrench },
                            { label: 'Glatt føre', path: '/laeringsressurser/glatt-fore', icon: Snowflake }
                        ].map((topic, i) => {
                            const IconComponent = topic.icon
                            return (
                                <Link 
                                    key={i} 
                                    to={topic.path} 
                                    className="theory-chip"
                                >
                                    <IconComponent size={14} strokeWidth={2} />
                                    {topic.label}
                                </Link>
                            )
                        })}
                    </div>

                    <Link 
                        to="/laeringsressurser" 
                        className="button button-secondary"
                    >
                        Se alle artikler →
                    </Link>
                </div>
            </section>

            {/* COMPACT MORE THAN A TEST SECTION */}
            <section className="section-container section-divider">
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 className="start-screen-section-title" style={{ marginBottom: '0.5rem' }}>Alt du trenger for å øve smartere</h2>
                </div>
                
                <div className="compact-features-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '1.5rem'
                }}>
                    {[
                        { 
                            title: 'Skiltguide', 
                            desc: 'Se skiltet, forstå regelen og unngå vanlige misforståelser.',
                            icon: Signpost
                        },
                        { 
                            title: 'Forklaringer', 
                            desc: 'Få korte svar når du lurer på hvorfor et svar er riktig.',
                            icon: HelpCircle
                        },
                        { 
                            title: 'Praktisk øving', 
                            desc: 'Bruk kalkulatorer, minispill og visuelle eksempler når tekst ikke er nok.',
                            icon: Gamepad2
                        },
                        { 
                            title: 'Fokusmodus', 
                            desc: 'Tren videre på spørsmålene du faktisk bommer på.',
                            icon: Target
                        }
                    ].map((item, i) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={i} style={{ 
                                display: 'flex', 
                                gap: '1rem', 
                                alignItems: 'flex-start',
                                padding: '1rem',
                                borderRadius: '12px',
                                background: 'var(--color-bg-secondary)',
                                border: '1px solid var(--color-border)',
                                cursor: 'default'
                            }} className="compact-feature-item">
                                <div style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    padding: '10px', 
                                    borderRadius: '10px', 
                                    background: 'var(--color-bg)', 
                                    color: 'var(--color-primary)',
                                    border: '1px solid var(--color-border)',
                                    flexShrink: 0
                                }}>
                                    <IconComponent size={20} strokeWidth={2} />
                                </div>
                                <div>
                                    <h4 style={{ margin: '0 0 4px 0', fontSize: '1.05rem', fontWeight: 'bold' }}>{item.title}</h4>
                                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: '1.45' }}>{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div style={{ 
                    textAlign: 'center', 
                    fontSize: '0.88rem', 
                    color: 'var(--color-text-light)',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    marginTop: '2rem',
                    opacity: 0.9,
                    fontWeight: '555'
                }}>
                    <span>Gratis å bruke</span>
                    <span style={{ color: 'var(--color-border)' }}>•</span>
                    <span>Ingen konto</span>
                    <span style={{ color: 'var(--color-border)' }}>•</span>
                    <span>Ingen app å laste ned</span>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="section-container section-divider">
                <h2 className="start-screen-section-title">Slik fungerer det</h2>
                <div className="how-it-works-grid">
                    {[
                        { title: 'Velg prøve eller tema', desc: 'Start med full prøve, tematest eller guide.' },
                        { title: 'Svar på spørsmål', desc: 'Øv i samme format som teoriprøven.' },
                        { title: 'Se forklaring', desc: 'Lær hvorfor svaret er riktig eller feil.' },
                        { title: 'Repeter feil', desc: 'Fokusmodus hjelper deg å øve videre.' }
                    ].map((step, i) => (
                        <div key={i} className="step-card">
                            <div className="step-badge">
                                {i + 1}
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SEO & FAQ SECTION */}
            <section className="section-container section-divider">
                <div className="start-screen-seo">
                    <h2>Om Teori-test.no</h2>
                    <p>
                        Teori-test.no er en gratis læringsplattform for deg som skal ta førerkort for klasse B. Her kan du øve til teoriprøven med kvalitetssikrede spørsmål, studere trafikkskilt i vår skiltguide, eller dykke ned i våre interaktive læringsartikler. Alt innhold er tilgjengelig helt gratis og uten registrering.
                    </p>

                    {/* COMPACT FACT BOX */}
                    <div className="fact-box-container" style={{
                        marginTop: '2.5rem',
                        marginBottom: '2.5rem',
                        padding: '1.5rem',
                        background: 'var(--color-bg-secondary)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '12px',
                    }}>
                        <h3 style={{
                            margin: '0 0 1.25rem 0',
                            fontSize: '1.15rem',
                            fontWeight: '800',
                            color: 'var(--color-text)',
                            textAlign: 'center'
                        }}>
                            Teoriprøven klasse B: kort fakta
                        </h3>
                        
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                            gap: '1rem',
                        }}>
                            {[
                                '45 spørsmål på teoriprøven for klasse B',
                                '90 minutter ordinær tid',
                                'Maks 7 feil for å bestå',
                                '17,5 år er tidligste alder for å ta prøven',
                                '3 år gyldighet etter bestått teoriprøve',
                                'Minst 2 uker ventetid ved stryk'
                            ].map((fact, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    gap: '0.75rem',
                                    alignItems: 'center',
                                    padding: '0.75rem 1rem',
                                    background: 'var(--color-bg)',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: '8px',
                                    fontSize: '0.9rem',
                                    color: 'var(--color-text)',
                                    lineHeight: '1.4',
                                    cursor: 'default'
                                }} className="compact-fact-card">
                                    <span style={{
                                        color: 'var(--color-primary)',
                                        fontWeight: '900',
                                        fontSize: '1.1rem'
                                    }}>✓</span>
                                    <span>{fact}</span>
                                </div>
                            ))}
                        </div>

                        <p style={{
                            margin: '1.25rem 0 0 0',
                            fontSize: '0.78rem',
                            color: 'var(--color-text-light)',
                            textAlign: 'center',
                            fontStyle: 'italic',
                            lineHeight: '1.45'
                        }}>
                            Regler kan endres. Sjekk alltid Statens vegvesen for oppdatert informasjon før du bestiller prøve.
                        </p>
                    </div>

                    <div className="faq-section">
                        <h2>Ofte stilte spørsmål</h2>
                        
                        <div className="faq-container">
                            {[
                                {
                                    question: 'Er teoriprøvene på Teori-test.no gratis?',
                                    answer: 'Ja. Du kan øve gratis uten registrering og uten å laste ned app.'
                                },
                                {
                                    question: 'Er dette den ekte teoriprøven?',
                                    answer: 'Nei. Dette er en øvingsprøve laget for å ligne formatet på teoriprøven for klasse B, slik at du kan trene før den ekte prøven hos Statens vegvesen.'
                                },
                                {
                                    question: 'Får jeg se fasit og forklaring?',
                                    answer: 'Ja. Etter prøven får du se riktige svar og korte forklaringer, slik at du kan lære av feilene dine.'
                                },
                                {
                                    question: 'Hvilke temaer kan jeg øve på?',
                                    answer: 'Spørsmålene dekker de viktigste kategoriene i pensum for teoriprøven klasse B. Du kan øve på blant annet vikeplikt, trafikkskilt, veimerking, bremselengde, forbikjøring, promille, glatt føre, kjøretøy, sikkerhetskontroll og trafikkregler.'
                                },
                                {
                                    question: 'Hva er fokusmodus?',
                                    answer: 'Fokusmodus lar deg øve videre på spørsmål du tidligere har svart feil på. Dette lagres lokalt i nettleseren din.'
                                },
                                {
                                    question: 'Finnes det en gratis teoriprøve-app jeg kan bruke?',
                                    answer: (
                                        <>
                                            Du trenger ikke laste ned en egen app. Teori-test.no fungerer i nettleseren på mobil, nettbrett og PC. For rask tilgang kan brukeren legge siden til på hjemskjermen:
                                            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', listStyleType: 'disc' }}>
                                                <li><strong>iPhone/Safari:</strong> Åpne teori-test.no, trykk Del-ikonet og velg "Legg til på Hjem-skjerm".</li>
                                                <li><strong>Android/Chrome:</strong> Åpne teori-test.no, trykk menyen og velg "Legg til på startsiden" eller "Installer app".</li>
                                            </ul>
                                        </>
                                    )
                                }
                             ].map((faq, index) => {
                                const isOpen = activeFaq === index
                                return (
                                    <div key={index} className="faq-item">
                                        <button 
                                            className="faq-trigger" 
                                            onClick={() => toggleFaq(index)}
                                            aria-expanded={isOpen}
                                        >
                                            <span>{faq.question}</span>
                                            <span 
                                                className="faq-icon-arrow"
                                                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                            >
                                                <ChevronDown size={18} strokeWidth={2.5} />
                                            </span>
                                        </button>
                                        {isOpen && (
                                            <div className="faq-content">
                                                {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
