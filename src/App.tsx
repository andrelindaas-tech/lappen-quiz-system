// Main App Component
import { useState, useEffect, useCallback, Suspense, lazy } from 'react'
import { Routes, Route, NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import StartScreen from './components/StartScreen'

const QuizContainer = lazy(() => import('./components/QuizContainer'))
const TheoryPage = lazy(() => import('./components/TheoryPage'))
const OppkjoringPage = lazy(() => import('./components/OppkjoringPage'))
const LearningGamesIndex = lazy(() => import('./components/LearningGamesIndex'))
const StoppingDistanceChallenge = lazy(() => import('./components/StoppingDistanceChallenge'))
const TrafficSignBank = lazy(() => import('./components/traffic-signs/TrafficSignBank'))
const TrafficSignCategoryPage = lazy(() => import('./components/traffic-signs/TrafficSignCategoryPage'))
const TrafficSignDetailPage = lazy(() => import('./components/traffic-signs/TrafficSignDetailPage'))
import ThemeToggle from './components/ThemeToggle'
import DailyStreak from './components/DailyStreak'
import { recordCompletion } from './utils/streakStore'
import './index.css'
import './fokus.css'
import './theory.css'
import ScrollToTop from './components/ScrollToTop'
import { Helmet } from 'react-helmet-async'

// GA4 global type
declare function gtag(...args: unknown[]): void

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode')
        return saved !== 'false' // Default to true (Antigravity theme)
    })

    const [streakBounce, setStreakBounce] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const handleQuizComplete = useCallback(() => {
        recordCompletion()
        setStreakBounce(true)
    }, [])

    const handleBounceComplete = useCallback(() => {
        setStreakBounce(false)
    }, [])

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
        localStorage.setItem('darkMode', isDarkMode.toString())
    }, [isDarkMode])

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev)
    }

    const handleReturnHome = () => {
        navigate('/')
    }

    // Send GA4 page_view for SPA navigation and close mobile menu on route transitions
    useEffect(() => {
        setIsMobileMenuOpen(false)
        if (typeof gtag !== 'undefined') {
            // Use setTimeout to allow react-helmet-async to update the document.title first
            setTimeout(() => {
                gtag('event', 'page_view', {
                    page_path: location.pathname + location.search,
                    page_title: document.title
                })
            }, 100)
        }
    }, [location])

    return (
        <>
            <ScrollToTop />
            <Helmet>
                <link rel="canonical" href={"https://teori-test.no" + location.pathname} />
                <meta property="og:url" content={`https://teori-test.no${location.pathname}`} />
            </Helmet>
            <header style={{
                position: 'sticky',
                top: 0,
                zIndex: 100,
                backgroundColor: 'var(--color-header-bg)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderBottom: '1px solid var(--color-border)',
                padding: 'var(--spacing-md) 0',
                transition: 'background-color 0.3s ease, border-color 0.3s ease'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 0,
                    paddingBottom: 0
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <span className="header-logo-text">
                                Teori-test.no
                            </span>
                        </Link>
                        <nav className="nav-tabs" style={{ gap: 'var(--spacing-xl)', marginLeft: 'var(--spacing-md)' }}>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) => `nav-tab ${isActive || location.pathname.startsWith('/quiz') ? 'nav-tab-active' : ''}`}
                                style={{ padding: '0.5rem 0.25rem', textDecoration: 'none' }}
                            >
                                <span className="nav-text-desktop">Øvingsprøve</span>
                                <span className="nav-text-mobile">
                                    <span className="nav-text-mobile-narrow">Prøve</span>
                                    <span className="nav-text-mobile-wide">Øvingsprøve</span>
                                </span>
                            </NavLink>
                            <NavLink
                                to="/laeringsressurser"
                                className={({ isActive }) => `nav-tab nav-tab-laeringsressurser ${isActive || location.pathname.startsWith('/laeringsressurser') || location.pathname.startsWith('/laeringsspill') ? 'nav-tab-active' : ''}`}
                                style={{ padding: '0.5rem 0.25rem', textDecoration: 'none' }}
                            >
                                <span className="nav-text-desktop">Læringsressurser</span>
                            </NavLink>
                            <NavLink
                                to="/trafikkskilt"
                                className={({ isActive }) => `nav-tab ${isActive || location.pathname.startsWith('/trafikkskilt') ? 'nav-tab-active' : ''}`}
                                style={{ padding: '0.5rem 0.25rem', textDecoration: 'none' }}
                            >
                                <span className="nav-text-desktop">Skiltbanken</span>
                                <span className="nav-text-mobile">Skilt</span>
                            </NavLink>
                        </nav>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                        <DailyStreak shouldBounce={streakBounce} onBounceComplete={handleBounceComplete} />
                        <ThemeToggle isDark={isDarkMode} onToggle={toggleDarkMode} />
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setIsMobileMenuOpen(prev => !prev)}
                            aria-label="Meny"
                            aria-expanded={isMobileMenuOpen}
                            title="Meny"
                        >
                            {isMobileMenuOpen ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="mobile-menu-dropdown">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) => `mobile-menu-item ${isActive || location.pathname.startsWith('/quiz') ? 'mobile-menu-item-active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Øvingsprøve
                        </NavLink>
                        <NavLink
                            to="/laeringsressurser"
                            className={({ isActive }) => `mobile-menu-item ${isActive || location.pathname.startsWith('/laeringsressurser') || location.pathname.startsWith('/laeringsspill') ? 'mobile-menu-item-active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Læringsressurser
                        </NavLink>
                        <NavLink
                            to="/trafikkskilt"
                            className={({ isActive }) => `mobile-menu-item ${isActive || location.pathname.startsWith('/trafikkskilt') ? 'mobile-menu-item-active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Skiltbanken
                        </NavLink>
                    </div>
                )}
            </header>

            <main>
                <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', padding: '4rem', color: 'var(--color-text-light)' }}>Laster...</div>}>
                    <Routes>
                        <Route path="/" element={<StartScreen />} />
                        <Route path="/quiz" element={<QuizContainer onReturnHome={handleReturnHome} onQuizComplete={handleQuizComplete} />} />
                        <Route path="/quiz/:category" element={<QuizContainer onReturnHome={handleReturnHome} onQuizComplete={handleQuizComplete} />} />
                        <Route path="/laeringsressurser/oppkjoring" element={<OppkjoringPage />} />
                        <Route path="/laeringsressurser/:articleId?" element={<TheoryPage />} />
                        <Route path="/laeringsspill" element={<LearningGamesIndex />} />
                        <Route path="/laeringsspill/stopplengde" element={<StoppingDistanceChallenge />} />
                        <Route path="/trafikkskilt" element={<TrafficSignBank />} />
                        <Route path="/trafikkskilt/:categorySlug" element={<TrafficSignCategoryPage />} />
                        <Route path="/trafikkskilt/:categorySlug/:signSlug" element={<TrafficSignDetailPage />} />
                        {/* Fallback route */}
                        <Route path="*" element={<StartScreen />} />
                    </Routes>
                </Suspense>
            </main>

            <footer className="site-footer">
                <div className="container">
                    <div className="footer-inner">

                        {/* Left: source & status */}
                        <div className="footer-meta">
                            <p className="footer-status">✓ Sist verifisert og oppdatert: Mai 2026</p>
                            <p className="footer-source">Innholdet er basert på Statens vegvesens temaliste for klasse B.</p>
                        </div>

                        {/* Right: links & copyright */}
                        <div className="footer-links-block">
                            <nav className="footer-links" aria-label="Foterlenker">
                                <Link to="/laeringsressurser/om-oss" className="footer-link">Om oss</Link>
                                <Link to="/laeringsressurser/kontakt" className="footer-link">Kontakt</Link>
                                <Link to="/laeringsressurser/personvern" className="footer-link">Personvern &amp; Cookies</Link>
                            </nav>
                            <p className="footer-copyright">© 2026 Teori-test.no</p>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}
