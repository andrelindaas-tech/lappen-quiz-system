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
                <title>Gratis teoriprøve klasse B 2026 | Teori-test.no</title>
                <meta name="description" content="Øv gratis på teoriprøven for førerkort klasse B. 45 spørsmål i offisielt format — ingen registrering, ingen betaling." />
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
                    Vi oppdaterer stadig siden med nye spørsmål og smarte funksjoner for å hjelpe deg på vei mot førerkortet. Du trenger ikke å lage bruker, betale, eller laste ned noe. Det er bare å sette i gang.
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
                        <span className="feature-icon">🆕</span>
                        <span>Nye spørsmål</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon" style={{ transform: 'scale(1.2)', display: 'inline-block' }}>🇳🇴</span>
                        <span>Norske forhold</span>
                    </div>
                </div>
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
                    <p>45 spørsmål - Maks 7 feil</p>
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
                    <p>10 spørsmål – maks 2 feil</p>
                    <span className="mode-badge" style={{ backgroundColor: 'var(--color-success)', color: 'white' }}>Tema-test</span>
                </button>

                <button
                    className="mode-card mode-card-express"
                    onClick={() => navigate('/quiz?mode=hurtig')}
                >
                    <div className="mode-icon">⚡️</div>
                    <h2>Ekspresstest</h2>
                    <p>10 spørsmål - Maks 2 feil</p>
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
                    <p>10 skilte spørsmål - Maks 1 feil</p>
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
                            : `Øv på feil du har gjort`
                        }
                    </p>
                    <span className="mode-badge mode-badge-fokus">
                        {fokusCount === 0 ? '0 feil' : `${fokusCount} feil`}
                    </span>
                </button>
            </div>

            {/* Quick Links / Chips Layer */}
            <div className="learning-resources-chips" style={{ marginTop: '3.5rem', marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '500', color: 'var(--color-text-light)', marginBottom: '1.25rem' }}>
                    💡 Lær mer om de vanligste fellene på teoriprøven:
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', maxWidth: '700px' }}>
                    <Link to="/laeringsressurser/myndighetspyramiden" className="theory-chip">
                        👮 Myndighetspyramiden
                    </Link>
                    <Link to="/laeringsressurser/vognkort-vekter" className="theory-chip">
                        ⚖️ Regn ut nyttelast
                    </Link>
                    <Link to="/laeringsressurser/fartsgrenser" className="theory-chip">
                        🛑 Fartsgrenser & tilhenger
                    </Link>
                    <Link to="/laeringsressurser/skilt" className="theory-chip">
                        🚸 Forstå skiltene
                    </Link>
                    <Link to="/laeringsressurser/vikeplikt" className="theory-chip">
                        🔺 Alt om vikeplikt
                    </Link>
                </div>
            </div>

            {/* SEO Content Section */}
            <div className="seo-section">
                <h2>Norges enkleste måte å øve til teoriprøven</h2>
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
