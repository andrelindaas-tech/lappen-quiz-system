import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { getWrongAnswersCount, clearWrongAnswers } from '../utils/wrongAnswersStore'
import { Helmet } from 'react-helmet-async'
import { Zap, Signpost, Target, Route, Gauge, Layers, CircleGauge, Wine, Truck, Wrench, ChevronDown, RefreshCw, Car, ChevronRight, BookOpen, HelpCircle } from 'lucide-react'

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
      "name": "Hvor mange feil kan man ha på teoriprøven for bil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Du får 45 spørsmål og må svare riktig på minst 38. Maksimalt 7 feil er tillatt for å bestå."
      }
    },
    {
      "@type": "Question",
      "name": "Finnes det en gratis teoriprøve-app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Teori-test.no fungerer som en app i nettleseren. Legg siden til på hjemskjermen for rask tilgang – helt gratis, ingen registrering."
      }
    },
    {
      "@type": "Question",
      "name": "Koster det noe å se fasiten etter prøven?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nei. Teori-test.no is 100% gratis – ingen skjulte kostnader, ingen registrering."
      }
    },
    {
      "@type": "Question",
      "name": "Hva er Fokusmodus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fokusmodus husker hvilke spørsmål du svarer feil på og lar deg øve kun på disse. Ingen konkurrenter tilbyr denne funksjonen."
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
                                    Simulerer den virkelige teoriprøven hos Statens Vegvesen med samme tidsbegrensning og beståttgrense (maks 7 feil av 45 oppgaver). Denne samler spørsmål fra alle kategorier for å gi deg et mest mulig realistisk bilde av dine vinnersjanser før den ekte eksamenen.
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
                                Fokus mode
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
                            { label: 'Sikkerhetskontroll', path: '/laeringsressurser/sikkerhetskontroll', icon: Wrench }
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
                        Teori-test.no er en gratis læringsplattform for deg som skal ta førerkort for klasse B. Her kan du øve til teoriprøven med kvalitetssikrede spørsmål, studere trafikkskilt in vår skiltguide, eller dykke ned i våre interaktive læringsartikler. Alt innhold er tilgjengelig helt gratis og uten registrering.
                    </p>

                    <div className="faq-section">
                        <h2>Ofte stilte spørsmål om teoriprøven (Klasse B)</h2>
                        
                        <div className="faq-container">
                            {[
                                {
                                    question: 'Hvor mange feil kan man ha på teoriprøven for bil?',
                                    answer: 'På den offisielle eksamenen hos Statens vegvesen får du 45 spørsmål. Du må svare riktig på minst 38 av dem for å bestå. Det betyr at du maksimalt kan ha 7 feil. Vår gratis teoriprøve er bygget opp på nøyaktig samme måte, slik at du får testet om du er klar til å ta lappen.'
                                },
                                {
                                    question: 'Finnes det en gratis teoriprøve-app jeg kan bruke?',
                                    answer: (
                                        <>
                                            Du trenger ikke å laste ned en egen app via App Store eller Google Play. Teori-test.no er utviklet for å fungere raskt og smidig på mobiltelefonen, akkurat som en vanlig app. For den beste opplevelsen anbefaler vi at du legger siden direkte på hjemskjermen din:
                                            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', listStyleType: 'disc' }}>
                                                <li><strong>iPhone (Safari):</strong> Åpne teori-test.no. Trykk på "Del"-ikonet (firkanten med pil opp) nederst på skjermen, bla ned og velg "Legg til på Hjem-skjerm".</li>
                                                <li><strong>Android (Chrome):</strong> Åpne teori-test.no. Trykk på menyikonet (tre prikker) øverst til høyre og velg "Legg til på startsiden" eller "Installer app".</li>
                                            </ul>
                                        </>
                                    )
                                },
                                {
                                    question: 'Hvilke temaer dekker øvingsprøven?',
                                    answer: 'Prøvene våre dekker hele pensum for personbil. Du vil få grundig trening i viktige temaer som trafikkskilt, regler for vikeplikt, fartsgrenser og generell trafikksikkerhet. Systemet trekker spørsmål tilfeldig, slik at ingen prøver er helt like.'
                                },
                                {
                                    question: 'Koster det noe å se fasiten etter prøven?',
                                    answer: 'Nei, det er ingen skjulte kostnader. Dette er en 100 % gratis teoriprøve. Når du har fullført testen, får du umiddelbart se resultatet ditt, en oversikt over eventuelle feil, og en forklaring på hva som er riktig svar.'
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
