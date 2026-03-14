// Start Screen Component - Mode Selection
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getWrongAnswersCount } from '../utils/wrongAnswersStore'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'

export default function StartScreen() {
    const [fokusCount, setFokusCount] = useState(0)
    const [useTimerForFull, setUseTimerForFull] = useState(false)
    const navigate = useNavigate()

    // Manage Metadata for Home Page
    useDocumentMetadata({
        title: 'Teori-test.no – Gratis øvingsprøve for førerkort klasse B',
        description: 'Øv gratis på teoriprøven for førerkort klasse B (personbil). Realistiske øvingsprøver med trafikkregler, skilt, sikkerhet og mer.'
    })

    // Load wrong answers count on mount and when returning from quiz
    useEffect(() => {
        const count = getWrongAnswersCount()
        setFokusCount(count)
        console.log(`🎯 Fokus mode has ${count} questions`)
    }, [])

    return (
        <div className="start-screen">
            <h1>Gratis teoriprøve for personbil (Klasse B)</h1>

            <div className="hero-section">
                <p className="hero-description" style={{ fontWeight: 'bold', color: 'var(--color-primary-light, #fff)' }}>
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
                    className="mode-card mode-card-express"
                    onClick={() => navigate('/quiz?mode=hurtig')}
                >
                    <div className="mode-icon">⚡️</div>
                    <h2>Ekspresstest</h2>
                    <p>10 spørsmål - Maks 2 feil</p>
                    <span className="mode-badge mode-badge-express">Rask øving</span>
                </button>

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
                    className="mode-card mode-card-skilt"
                    onClick={() => navigate('/quiz/skilt')}
                >
                    <div className="mode-icon">🚥</div>
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
