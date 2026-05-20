import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function LearningGamesIndex() {
    return (
        <div className="start-screen" style={{ paddingBottom: '4rem' }}>
            <Helmet>
                <title>Interaktive Læringsspill for Teoriprøven Klasse B | Teori-test.no</title>
                <meta name="description" content="Lær teori til førerkortet gjennom morsomme interaktive spill og utfordringer. Test dine ferdigheter på stopplengde, bremselengde og mer." />
            </Helmet>

            <h1>Læringsspill for klasse B</h1>
            
            <div className="hero-section" style={{ marginBottom: '2.5rem' }}>
                <p className="hero-description" style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>
                    Lær teorien raskere med interaktive utfordringer og spill.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', maxWidth: '700px', margin: '0 auto 1.5rem auto', lineHeight: '1.6' }}>
                    Her finner du læringsspill utviklet spesielt for teoriprøven klasse B. Gjennom simuleringer og praktiske oppgaver trener du opp den visuelle forståelsen din for fart, reaksjon, bremselengder og skilt.
                </p>
                <div className="features-strip" style={{ justifyContent: 'center' }}>
                    <div className="feature-item">
                        <span className="feature-icon">🎮</span>
                        <span>Praktisk øving</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">⏱️</span>
                        <span>Reaksjon & stopp</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">🏆</span>
                        <span>Samle poeng</span>
                    </div>
                </div>
            </div>

            <div className="mode-selection-header" style={{ marginBottom: '1.5rem' }}>
                <h2>Velg et læringsspill</h2>
                <p>Spill, lær og test deg selv</p>
            </div>

            <div className="mode-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
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
                    <div className="card-badge-new" style={{ top: '15px', right: '15px' }}>Ny</div>
                    <div style={{ height: '50px', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg viewBox="0 0 160 60" style={{ width: '120px', height: '45px', overflow: 'visible' }}>
                            <rect x="0" y="32" width="160" height="12" rx="4" fill="var(--color-border)" />
                            <line x1="20" y1="38" x2="35" y2="38" stroke="var(--color-bg)" strokeWidth="1.5" strokeDasharray="3 3" />
                            <line x1="55" y1="38" x2="70" y2="38" stroke="var(--color-bg)" strokeWidth="1.5" strokeDasharray="3 3" />
                            <line x1="90" y1="38" x2="105" y2="38" stroke="var(--color-bg)" strokeWidth="1.5" strokeDasharray="3 3" />
                            <line x1="125" y1="38" x2="140" y2="38" stroke="var(--color-bg)" strokeWidth="1.5" strokeDasharray="3 3" />
                            <rect x="25" y="46" width="30" height="4" rx="2" fill="var(--color-primary)" />
                            <rect x="55" y="46" width="60" height="4" rx="2" fill="#f59e0b" />
                            <rect x="120" y="16" width="10" height="20" rx="3" fill="var(--color-error)" />
                            <g transform="translate(15, 14) scale(0.35)">
                                <path d="M8 33 L11 26 C13 22 18 20 25 20 H33 L40 12 H70 C77 12 83 16 88 22 L98 24 C104 25 107 29 107 34 V38 H8 Z" fill="var(--color-primary)" />
                                <circle cx="31" cy="38" r="8" fill="#000" />
                                <circle cx="84" cy="38" r="8" fill="#000" />
                            </g>
                        </svg>
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
                    <div style={{ height: '50px', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg viewBox="0 0 100 60" style={{ width: '80px', height: '45px', overflow: 'visible' }}>
                            <rect x="47" y="24" width="6" height="30" fill="var(--color-text-light)" rx="1" />
                            <path d="M50 4 L80 46 H20 Z" fill="var(--color-bg)" stroke="var(--color-error)" strokeWidth="4" strokeLinejoin="round" />
                            <circle cx="50" cy="36" r="3.5" fill="var(--color-text)" />
                            <rect x="48.5" y="18" width="3" height="12" fill="var(--color-text)" rx="1" />
                        </svg>
                    </div>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Skiltsortereren</h2>
                    <p style={{ flexGrow: 1, fontSize: '0.9rem', lineHeight: '1.5', margin: '0 0 1rem 0' }}>Sorter skilt lynraskt i riktige kategorier (fareskilt, vikepliktskilt, forbudsskilt). Forbedre din skiltgjenkjenning.</p>
                    <span className="mode-badge" style={{ alignSelf: 'center', marginTop: 'auto', backgroundColor: 'var(--color-border)', color: 'var(--color-text-light)', padding: '6px 14px' }}>Kommer snart</span>
                </div>

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
                    <div style={{ height: '50px', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg viewBox="0 0 100 60" style={{ width: '80px', height: '45px', overflow: 'visible' }}>
                            <rect x="42" y="0" width="16" height="60" fill="var(--color-border)" rx="2" />
                            <rect x="0" y="22" width="100" height="16" fill="var(--color-border)" rx="2" />
                            <rect x="46" y="8" width="8" height="12" rx="2" fill="var(--color-primary)" />
                            <rect x="12" y="26" width="12" height="8" rx="2" fill="#f59e0b" />
                        </svg>
                    </div>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Vikeplikt-simulatoren</h2>
                    <p style={{ flexGrow: 1, fontSize: '0.9rem', lineHeight: '1.5', margin: '0 0 1rem 0' }}>Avgjør hvem som har vikeplikt i komplekse krysssituasjoner under tidspress. Perfekt for vikeplikt-trening.</p>
                    <span className="mode-badge" style={{ alignSelf: 'center', marginTop: 'auto', backgroundColor: 'var(--color-border)', color: 'var(--color-text-light)', padding: '6px 14px' }}>Kommer snart</span>
                </div>
            </div>
        </div>
    )
}

