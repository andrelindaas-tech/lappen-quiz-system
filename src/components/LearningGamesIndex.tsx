import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { CircleGauge, Gamepad2, Timer, Trophy, Signpost, Route } from 'lucide-react'

export default function LearningGamesIndex() {
    return (
        <div className="start-screen" style={{ paddingBottom: '4rem' }}>
            <Helmet>
                <title>Interaktive Læringsspill for Teoriprøven Klasse B | Teori-test.no</title>
                <meta name="description" content="Lær teori til førerkortet gjennom morsomme interaktive spill og utfordringer. Test dine ferdigheter på stopplengde, bremselengde og mer." />
            </Helmet>

            <div className="section-container">
                <h1 style={{ textAlign: 'center' }}>Læringsspill for klasse B</h1>
                
                <div className="hero-section" style={{ marginBottom: '2.5rem' }}>
                    <p className="hero-description" style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>
                        Lær teorien raskere med interaktive utfordringer og spill.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', maxWidth: '700px', margin: '0 auto 1.5rem auto', lineHeight: '1.6' }}>
                        Her finner du læringsspill utviklet spesielt for teoriprøven klasse B. Gjennom simuleringer og praktiske oppgaver trener du opp den visuelle forståelsen din for fart, reaksjon, bremselengder og skilt.
                    </p>
                    <div className="features-strip" style={{ justifyContent: 'center' }}>
                        <div className="feature-item">
                            <span className="feature-icon" style={{ display: 'flex', alignItems: 'center' }}>
                                <Gamepad2 size={20} strokeWidth={2} />
                            </span>
                            <span>Praktisk øving</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon" style={{ display: 'flex', alignItems: 'center' }}>
                                <Timer size={20} strokeWidth={2} />
                            </span>
                            <span>Reaksjon & stopp</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon" style={{ display: 'flex', alignItems: 'center' }}>
                                <Trophy size={20} strokeWidth={2} />
                            </span>
                            <span>Samle poeng</span>
                        </div>
                    </div>
                </div>

                <div className="mode-selection-header" style={{ marginBottom: '1.5rem' }}>
                    <h2>Velg et læringsspill</h2>
                    <p>Spill, lær og test deg selv</p>
                </div>

                <div className="mode-cards">
                    <Link
                        to="/laeringsspill/stopplengde"
                        className="mode-card mode-card-full"
                        style={{ 
                            textDecoration: 'none', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            height: 'auto', 
                            minHeight: '250px',
                            cursor: 'pointer', 
                            textAlign: 'center', 
                            width: '100%',
                            padding: '1.5rem 1.25rem'
                        }}
                    >
                        <div className="card-badge-new">Beta</div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                            <div className="card-icon-box">
                                <CircleGauge size={24} strokeWidth={1.8} />
                            </div>
                        </div>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Stopplengde-utfordringen</h2>
                        <p style={{ flexGrow: 1, fontSize: '0.9rem', lineHeight: '1.5', margin: '0 0 1rem 0' }}>Klarer du å anslå total stopplengde for ulike hastigheter og føreforhold? Test deg selv og forstå reaksjons- og bremselengden.</p>
                        <span className="mode-badge mode-badge-full" style={{ alignSelf: 'center', marginTop: 'auto', padding: '6px 14px' }}>Spill nå</span>
                    </Link>

                    <div
                        className="mode-card"
                        style={{ 
                            opacity: 0.7, 
                            cursor: 'not-allowed', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            height: 'auto', 
                            minHeight: '250px',
                            textAlign: 'center', 
                            width: '100%', 
                            background: 'var(--color-bg-secondary)', 
                            border: '1px dashed var(--color-border)',
                            padding: '1.5rem 1.25rem'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                            <div className="card-icon-box">
                                <Signpost size={24} strokeWidth={1.8} />
                            </div>
                        </div>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Skiltsortereren</h2>
                        <p style={{ flexGrow: 1, fontSize: '0.9rem', lineHeight: '1.5', margin: '0 0 1rem 0' }}>Sorter skilt lynraskt i riktige kategorier (fareskilt, vikepliktskilt, forbudsskilt). Forbedre din skiltgjenkjenning.</p>
                        <span className="mode-badge" style={{ alignSelf: 'center', marginTop: 'auto', backgroundColor: 'var(--color-border)', color: 'var(--color-text-light)', padding: '6px 14px' }}>Kommer snart</span>
                    </div>

                    <Link
                        to="/laeringsspill/veimerking"
                        className="mode-card"
                        style={{ 
                            textDecoration: 'none', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            height: 'auto', 
                            minHeight: '250px',
                            cursor: 'pointer', 
                            textAlign: 'center', 
                            width: '100%',
                            padding: '1.5rem 1.25rem'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                            <div className="card-icon-box">
                                <Route size={24} strokeWidth={1.8} />
                            </div>
                        </div>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Veimerking-spillet</h2>
                        <p style={{ flexGrow: 1, fontSize: '0.9rem', lineHeight: '1.5', margin: '0 0 1rem 0' }}>Kan du reglene for heltrukne linjer, sperreområder og vikelinjer? Test deg selv med interaktive situasjoner.</p>
                        <span className="mode-badge mode-badge-full" style={{ alignSelf: 'center', marginTop: 'auto', padding: '6px 14px' }}>Spill nå</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

