import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { getWrongAnswersCount } from '../utils/wrongAnswersStore'
import { Helmet } from 'react-helmet-async'
import { SignIllustration } from './SignIllustration'

export default function StartScreen() {
    const [fokusCount, setFokusCount] = useState(0)
    const [useTimerForFull, setUseTimerForFull] = useState(false)
    const navigate = useNavigate()

    // Manage Metadata for Home Page (Now handled directly in Helmet)
    // useDocumentMetadata removed in favor of static title/description in Helmet

    // Load wrong answers count on mount and when returning from quiz
    useEffect(() => {
        const count = getWrongAnswersCount()
        setFokusCount(count)
        console.log(`🎯 Fokus mode has ${count} questions`)
    }, [])

    return (
        <div className="start-screen">
            <Helmet>
                <title>Gratis teoriprøve klasse B 2026 – 45 spørsmål og fasit | Teori-test.no</title>
                <meta name="description" content="Øv gratis til teoriprøven for klasse B. Ta full prøve med 45 spørsmål, vikeplikt-test, skilt-test og interaktive guider. Ingen registrering." />
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
        "text": "Nei. Teori-test.no er 100% gratis – ingen skjulte kostnader, ingen registrering."
      }
    },
    {
      "@type": "Question",
      "name": "Hva er Fokus mode?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fokus mode husker hvilke spørsmål du svarer feil på og lar deg øve kun på disse. Ingen konkurrenter tilbyr denne funksjonen."
      }
    }
  ]
}
                    `}
                </script>
            </Helmet>
            <h1>Gratis teoriprøve for personbil (Klasse B)</h1>

            <div className="hero-section">
                <p className="hero-description" style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>
                    Norges enkleste måte å øve til teoriprøven – helt gratis.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '1rem', maxWidth: '700px', margin: '0 auto 1rem auto', lineHeight: '1.6' }}>
                    Teori-test.no er laget for deg som snart skal ta teoriprøven for klasse B. Her finner du kvalitetssikrede teorioppgaver som dekker hele pensum – fra fartsgrenser og vikeplikt til vegoppmerking og trafikkskilt.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
                    I tillegg til øvingsprøver finner du interaktive læringsartikler med visuelle guider og simulatorer — for temaer som veimerking, <Link to="/laeringsressurser/bremselengde" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>bremselengde</Link> og vikeplikt. Du trenger ikke å lage bruker, betale, eller laste ned noe.
                </p>
                
                <button 
                    className="cta-button primary-action" 
                    style={{ fontSize: '1.1rem', padding: '15px 30px', fontWeight: 'bold', cursor: 'pointer', borderRadius: '8px', backgroundColor: '#007BFF', color: '#fff', border: 'none', marginBottom: '1.5rem' }}
                    onClick={() => document.getElementById('mode-selection')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Start gratis teoriprøve
                </button>
                <div className="features-strip">
                    <div className="feature-item">
                        <span className="feature-icon">✅</span>
                        <span>Gratis øving</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">📚</span>
                        <span>Interaktive guider</span>
                    </div>
                    <div className="feature-item">
                        <img src="/norway-flag.svg" alt="Norsk flagg" style={{ height: '1.1rem', width: 'auto', verticalAlign: 'middle', borderRadius: '2px' }} />
                        <span>Basert på Statens vegvesens temaliste for klasse B</span>
                    </div>
                </div>
            </div>

            <div className="trust-badges-row" style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                gap: 'var(--spacing-sm)', 
                marginTop: '1.5rem', 
                marginBottom: '2.5rem' 
            }}>
                {['100% gratis', 'Ingen registrering', '45 spørsmål', 'Oppdatert 2026', 'Klasse B-pensum'].map((text, i) => (
                    <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: 'var(--color-bg-secondary)',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        color: 'var(--color-text-light)',
                        border: '1px solid var(--color-border)',
                        whiteSpace: 'nowrap',
                        fontWeight: 500
                    }}>
                        <span style={{ color: 'var(--color-success)', fontWeight: 'bold' }}>✓</span>
                        {text}
                    </div>
                ))}
            </div>

            <div id="mode-selection" className="mode-selection-header">
                <h2>Velg prøvetype</h2>
                <p>Velg mellom en rask øvingstest eller full eksamensprøve</p>
            </div>

            <div className="mode-cards">
                <button
                    className="mode-card mode-card-full"
                    onClick={() => navigate(`/quiz?mode=eksamen${useTimerForFull ? '&timer=true' : ''}`)}
                >
                    <div className="mode-icon">📝</div>
                    <h2>Full prøve</h2>
                    <p>45 spørsmål som ekte prøve — maks 7 feil</p>
                    <span className="mode-badge mode-badge-full">Offisiell format</span>

                    {/* Timer toggle checkbox */}
                    <div
                        className="timer-toggle"
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
                        />
                        <label htmlFor="timer-toggle">
                            ⏱️  Tidsbegrensning (90 min)
                        </label>
                    </div>
                </button>

                <button
                    className="mode-card mode-card-vikeplikt"
                    onClick={() => navigate('/quiz/vikeplikt')}
                >
                    <div className="card-badge-new">Ny</div>
                    <div className="mode-icon">
                        <img src="/signs/vikeplikt.svg" alt="Vikeplikt" style={{ height: '4.4rem', width: 'auto', display: 'block', margin: '0 auto' }} />
                    </div>
                    <h2>Vikeplikt</h2>
                    <p>Målrettet øving på en vanlig strykfelle</p>
                    <span className="mode-badge" style={{ backgroundColor: 'var(--color-success)', color: 'white' }}>Tema-test</span>
                </button>

                <button
                    className="mode-card mode-card-express"
                    onClick={() => navigate('/quiz?mode=hurtig')}
                >
                    <div className="mode-icon">⚡️</div>
                    <h2>Ekspresstest</h2>
                    <p>Rask 10-spørsmåls sjekk av kunnskapen</p>
                    <span className="mode-badge mode-badge-express">Rask øving</span>
                </button>

                <button
                    className="mode-card mode-card-skilt"
                    onClick={() => navigate('/quiz/skilt')}
                >
                    <div className="mode-icon">
                        <div style={{ height: '4.4rem', width: '4.4rem', margin: '0 auto' }}>
                            <SignIllustration signId="speed-50" />
                        </div>
                    </div>
                    <h2>Skilt-test</h2>
                    <p>Øv på trafikkskilt og vikepliktskilt</p>
                    <span className="mode-badge mode-badge-skilt">Kun skilter</span>
                </button>

                <button
                    className="mode-card mode-card-fokus"
                    onClick={() => navigate('/quiz?mode=fokus')}
                    disabled={fokusCount === 0}
                >
                    <div className="mode-icon">🎯</div>
                    <h2>Fokus mode</h2>
                    <p>
                        {fokusCount === 0
                            ? 'Ingen feil å øve på ennå'
                            : 'Øv på spørsmål du har svart feil på'
                        }
                    </p>
                    <span className="mode-badge mode-badge-fokus">
                        {fokusCount === 0 ? '0 feil' : `${fokusCount} feil`}
                    </span>
                </button>

            </div>

            <div className="theory-full-width-tile" style={{
                marginTop: '3.5rem',
                marginBottom: '3rem',
                backgroundColor: 'var(--color-bg)',
                borderRadius: 'var(--radius-lg)',
                padding: '3rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.5rem' }}>Interaktive læringsguider</h2>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem', maxWidth: '600px' }}>
                    Forstå teorien bak reglene — med kalkulatorer, visuelle guider og forklaringer
                </p>

                <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '12px', 
                    justifyContent: 'center', 
                    marginBottom: '2rem' 
                }}>
                    {[
                        { label: '🔺 Vikeplikt og rundkjøring', path: '/laeringsressurser/vikeplikt' },
                        { label: '🚗 Bremselengde og stopplengde', path: '/laeringsressurser/bremselengde' },
                        { label: '👮 Myndighetspyramiden', path: '/laeringsressurser/myndighetspyramiden' },
                        { label: '🛣️ Veimerking', path: '/laeringsressurser/veimerking' },
                        { label: '🚦 Trafikkskilt', path: '/laeringsressurser/skilt' },
                        { label: '⚡ Fartsgrenser', path: '/laeringsressurser/fartsgrenser' },
                        { label: '🍺 Promille og rus', path: '/laeringsressurser/promille' },
                        { label: '🚛 Tilhenger og vekt', path: '/laeringsressurser/tilhenger' },
                        { label: '🔧 Sikkerhetskontroll', path: '/laeringsressurser/sikkerhetskontroll' }
                    ].map((topic, i) => (
                        <Link 
                            key={i} 
                            to={topic.path} 
                            className="theory-chip" 
                            style={{ 
                                backgroundColor: 'var(--color-bg)', 
                                padding: '8px 16px', 
                                fontSize: '0.9rem' 
                            }}
                        >
                            {topic.label}
                        </Link>
                    ))}
                </div>

                <Link 
                    to="/laeringsressurser" 
                    className="cta-button" 
                    style={{ 
                        fontSize: '1rem', 
                        padding: '12px 24px', 
                        backgroundColor: 'transparent', 
                        border: '2px solid var(--color-primary)', 
                        color: 'var(--color-primary)',
                        fontWeight: '700',
                        textDecoration: 'none',
                        borderRadius: '8px'
                    }}
                >
                    Se alle guider →
                </Link>
            </div>
            <section className="how-it-works" style={{
                marginTop: '4rem',
                marginBottom: '4rem',
                padding: '0 20px'
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem', fontWeight: '800' }}>Slik fungerer det</h2>
                <div className="how-it-works-grid">
                    {[
                        { icon: '📋', title: 'Velg prøve eller tema', desc: 'Full prøve, tematest eller interaktiv guide' },
                        { icon: '✏️', title: 'Svar på spørsmål', desc: '45 spørsmål som ekte teoriprøve' },
                        { icon: '💡', title: 'Se fasit og forklaring', desc: 'Forstå hvorfor svaret er riktig eller feil' },
                        { icon: '🎯', title: 'Øv på feilene dine', desc: 'Fokus mode husker hva du bør øve mer på' }
                    ].map((step, i) => (
                        <div key={i} style={{
                            backgroundColor: 'var(--color-bg)',
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--color-border)',
                            boxShadow: 'var(--shadow-md)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-15px',
                                left: '20px',
                                backgroundColor: 'var(--color-primary)',
                                color: '#fff',
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                fontSize: '0.9rem'
                            }}>{i + 1}</div>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{step.icon}</div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>{step.title}</h3>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SEO Content Section */}
            <div className="seo-section">
                <h2>Om Teori-test.no</h2>
                <p>
                    Teori-test.no er laget for deg som snart skal ta teoriprøven for klasse B (personbil). Her finner du hundrevis av øvingsspørsmål som dekker hele pensum – fra fartsgrenser og vikeplikt til vegoppmerking og trafikkskilt. Du trenger ikke lage bruker, betale, eller laste ned noe.
                </p>

                <div className="faq-section" style={{ marginTop: '2rem' }}>
                    <h2>Ofte stilte spørsmål om teoriprøven (Klasse B)</h2>

                    <h3>Spørsmål 1: Hvor mange feil kan man ha på teoriprøven for bil?</h3>
                    <p>
                        På den offisielle eksamenen hos Statens vegvesen får du 45 spørsmål. Du må svare riktig på minst 38 av dem for å bestå. Det betyr at du maksimalt kan ha 7 feil. Vår gratis teoriprøve er bygget opp på nøyaktig samme måte, slik at du får testet om du er klar til å ta lappen.
                    </p>

                    <h3>Spørsmål 2: Finnes det en gratis teoriprøve-app jeg kan bruke?</h3>
                    <p>
                        Du trenger ikke å laste ned en egen app via App Store eller Google Play. Teori-test.no er utviklet for å fungere raskt og smidig på mobiltelefonen, akkurat som en vanlig app. For den beste opplevelsen anbefaler vi at du legger siden direkte på hjemskjermen din:
                    </p>
                    <ul>
                        <li><strong>iPhone (Safari):</strong> Åpne teori-test.no. Trykk på "Del"-ikonet (firkanten med pil opp) nederst på skjermen, bla ned og velg "Legg til på Hjem-skjerm".</li>
                        <li><strong>Android (Chrome):</strong> Åpne teori-test.no. Trykk på menyikonet (tre prikker) øverst til høyre og velg "Legg til på startsiden" eller "Installer app".</li>
                    </ul>

                    <h3>Spørsmål 3: Hvilke temaer dekker øvingsprøven?</h3>
                    <p>
                        Prøvene våre dekker hele pensum for personbil. Du vil få grundig trening i viktige temaer som trafikkskilt, regler for vikeplikt, fartsgrenser og generell trafikksikkerhet. Systemet trekker spørsmål tilfeldig, slik at ingen prøver er helt like.
                    </p>

                    <h3>Spørsmål 4: Koster det noe å se fasiten etter prøven?</h3>
                    <p>
                        Nei, det er ingen skjulte kostnader. Dette er en 100 % gratis teoriprøve. Når du har fullført testen, får du umiddelbart se resultatet ditt, en oversikt over eventuelle feil, og en forklaring på hva som er riktig svar.
                    </p>
                </div>
            </div>
        </div>
    )
}
