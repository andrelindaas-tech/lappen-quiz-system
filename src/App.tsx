// Main App Component
import { useState, useEffect, useCallback, Suspense, lazy } from 'react'
import { Routes, Route, Link, useNavigate, useLocation, Navigate, useParams } from 'react-router-dom'
import StartScreen from './components/StartScreen'

const QuizContainer = lazy(() => import('./components/QuizContainer'))
const TheoryPage = lazy(() => import('./components/TheoryPage'))
const OppkjoringPage = lazy(() => import('./components/OppkjoringPage'))
const LearningGamesIndex = lazy(() => import('./components/LearningGamesIndex'))
const StoppingDistanceChallenge = lazy(() => import('./components/StoppingDistanceChallenge'))
const RoadMarkingGame = lazy(() => import('./components/RoadMarkingGame'))
const SignSpeedGamePage = lazy(() => import('./pages/SignSpeedGamePage'))
const TrafficSignBank = lazy(() => import('./components/traffic-signs/TrafficSignBank'))
const TrafficSignCategoryPage = lazy(() => import('./components/traffic-signs/TrafficSignCategoryPage'))
const TrafficSignDetailPage = lazy(() => import('./components/traffic-signs/TrafficSignDetailPage'))
const MinFremgang = lazy(() => import('./components/MinFremgang'))
const NotFound = lazy(() => import('./components/NotFound'))
import ThemeToggle from './components/ThemeToggle'
import DailyStreak from './components/DailyStreak'
import { recordCompletion } from './utils/streakStore'
import './index.css'
import './fokus.css'
import './theory.css'
import ScrollToTop from './components/ScrollToTop'
import { Helmet } from 'react-helmet-async'
import { ClipboardCheck, Signpost, BookOpen, Gamepad2, TrendingUp } from 'lucide-react'

// GA4 global type
declare function gtag(...args: unknown[]): void

function LegacyTeoriRedirect() {
    const { articleId } = useParams()
    const slugMap: Record<string, string> = {
        'vognkort-og-vekt': 'vognkort-vekter',
        'sikkerhet': 'sikkerhetsutstyr',
        'morkekjoring': 'lysbruk-morkekjoring',
        'trafikkuhell': 'trafikkuhell-forstehjelp',
    }
    const targetId = articleId ? (slugMap[articleId.toLowerCase()] || articleId) : ''
    return <Navigate to={`/laeringsressurser/${targetId}`} replace />
}

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode')
        return saved !== 'false' // Default to true (Antigravity theme)
    })

    const [streakBounce, setStreakBounce] = useState(false)
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

    const [showHeader, setShowHeader] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    // Reset header visibility on page/route transition
    useEffect(() => {
        setShowHeader(true)
    }, [location.pathname])

    // Track scroll direction to hide header on scroll down, show on scroll up on mobile
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            
            // Keep header visible when close to the top
            if (currentScrollY < 80) {
                setShowHeader(true)
                setLastScrollY(currentScrollY)
                return
            }

            if (currentScrollY > lastScrollY) {
                // Scrolling down -> hide header
                setShowHeader(false)
            } else {
                // Scrolling up -> show header
                setShowHeader(true)
            }
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    // Send GA4 page_view for SPA navigation and close mobile menu on route transitions
    useEffect(() => {
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
            <div className="ambient-glow-1" />
            <div className="ambient-glow-2" />
            <Helmet>
                <link rel="canonical" href={"https://teori-test.no" + location.pathname} />
                <meta property="og:url" content={`https://teori-test.no${location.pathname}`} />
            </Helmet>
            
            <div className={`sticky-header-wrapper ${!showHeader ? 'header-hidden' : ''}`}>
                <header style={{
                    backgroundColor: 'var(--color-header-bg)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderBottom: '1px solid var(--color-border)',
                    padding: '0.85rem 0',
                    transition: 'background-color 0.3s ease, border-color 0.3s ease'
                }}>
                <div className="section-container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 0,
                    paddingBottom: 0
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
                        <Link to="/" className="logo-wrapper" style={{ textDecoration: 'none' }}>
                            <div className="logo-icon-container">
                                <div className="logo-icon-glow" />
                                <svg viewBox="0 0 100 100" fill="none" className="logo-svg">
                                    <defs>
                                        <linearGradient id="roadGlow" x1="0%" y1="100%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#2dd4bf" />
                                            <stop offset="50%" stopColor="#0d9488" />
                                            <stop offset="100%" stopColor="#0f766e" />
                                        </linearGradient>
                                        <linearGradient id="roadSurface" x1="0%" y1="100%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.03" />
                                            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.2" />
                                        </linearGradient>
                                    </defs>
                                    <path 
                                        d="M 22,92 C 50,85 32,58 58,46 C 75,41 84,41 85,41 L 85,41 C 84,41 79,41 70,44 C 50,56 70,82 76,92 Z" 
                                        fill="url(#roadSurface)"
                                    />
                                    <path 
                                        d="M 22,92 C 50,85 32,58 58,46 C 75,41 84,41 85,41" 
                                        stroke="url(#roadGlow)" 
                                        strokeWidth="4.5" 
                                        strokeLinecap="round"
                                    />
                                    <path 
                                        d="M 76,92 C 70,82 50,56 70,44 C 79,41 84,41 85,41" 
                                        stroke="url(#roadGlow)" 
                                        strokeWidth="4.5" 
                                        strokeLinecap="round"
                                    />
                                    <path 
                                        d="M 49,92 C 60,83.5 41,57 64,45 C 77,41.5 84,41 85,41" 
                                        stroke={isDarkMode ? '#ffffff' : '#0d9488'} 
                                        strokeWidth="2" 
                                        strokeDasharray="3 4.5" 
                                        strokeLinecap="round" 
                                        className={isDarkMode ? 'opacity-85' : 'opacity-95'}
                                    />
                                </svg>
                            </div>
                            <div className="logo-text-container">
                                <span className="header-logo-text">
                                    Teori-test<span style={{ color: 'var(--color-primary)' }}>.no</span>
                                </span>
                                <span className="logo-subtitle">Klasse B Førerkort</span>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                        <DailyStreak shouldBounce={streakBounce} onBounceComplete={handleBounceComplete} />
                        <ThemeToggle isDark={isDarkMode} onToggle={toggleDarkMode} />
                    </div>
                </div>
            </header>

            {!location.pathname.startsWith('/quiz') && location.pathname !== '/laeringsspill/stopplengde' && location.pathname !== '/laeringsspill/skiltduellen' && (
                <div className="sub-navigation">
                    <div className="sub-nav-container">
                        <div className="sub-nav-scroll-wrapper">
                            <div className="sub-nav-chips">
                                <Link
                                    to="/"
                                    className={`sub-nav-chip ${location.pathname === '/' ? 'active' : ''}`}
                                >
                                    <span className="sub-nav-chip-icon">
                                        <ClipboardCheck size={16} strokeWidth={2.2} />
                                    </span>
                                    Øvingsprøve
                                </Link>
                                <Link
                                    to="/trafikkskilt"
                                    className={`sub-nav-chip ${location.pathname.startsWith('/trafikkskilt') ? 'active' : ''}`}
                                >
                                    <span className="sub-nav-chip-icon">
                                        <Signpost size={16} strokeWidth={2.2} />
                                    </span>
                                    Skiltguide
                                </Link>
                                <Link
                                    to="/laeringsressurser"
                                    className={`sub-nav-chip ${location.pathname.startsWith('/laeringsressurser') ? 'active' : ''}`}
                                >
                                    <span className="sub-nav-chip-icon">
                                        <BookOpen size={16} strokeWidth={2.2} />
                                    </span>
                                    Artikler
                                </Link>
                                <Link
                                    to="/laeringsspill"
                                    className={`sub-nav-chip ${location.pathname.startsWith('/laeringsspill') ? 'active' : ''}`}
                                >
                                    <span className="sub-nav-chip-icon">
                                        <Gamepad2 size={16} strokeWidth={2.2} />
                                    </span>
                                    Minispill
                                </Link>
                                <Link
                                    to="/min-fremgang"
                                    className={`sub-nav-chip ${location.pathname.startsWith('/min-fremgang') ? 'active' : ''}`}
                                >
                                    <span className="sub-nav-chip-icon">
                                        <TrendingUp size={16} strokeWidth={2.2} />
                                    </span>
                                    Min fremgang
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </div>

            <main>
                <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', padding: '4rem', color: 'var(--color-text-light)' }}>Laster...</div>}>
                    <Routes>
                        <Route path="/" element={<StartScreen />} />
                        <Route path="/quiz" element={<QuizContainer onReturnHome={handleReturnHome} onQuizComplete={handleQuizComplete} />} />
                        <Route path="/quiz/:category" element={<QuizContainer onReturnHome={handleReturnHome} onQuizComplete={handleQuizComplete} />} />
                        <Route path="/laeringsressurser/oppkjoring" element={<OppkjoringPage />} />
                        <Route path="/laeringsressurser/:articleId?" element={<TheoryPage />} />
                        <Route path="/teori/:articleId" element={<LegacyTeoriRedirect />} />
                        <Route path="/laeringsspill" element={<LearningGamesIndex />} />
                        <Route path="/laeringsspill/stopplengde" element={<StoppingDistanceChallenge />} />
                        <Route path="/laeringsspill/veimerking" element={<RoadMarkingGame />} />
                        <Route path="/laeringsspill/skiltduellen" element={<SignSpeedGamePage />} />
                        <Route path="/trafikkskilt" element={<TrafficSignBank />} />
                        <Route path="/trafikkskilt/:categorySlug" element={<TrafficSignCategoryPage />} />
                        <Route path="/trafikkskilt/:categorySlug/:signSlug" element={<TrafficSignDetailPage />} />
                        <Route path="/min-fremgang" element={<MinFremgang />} />
                        {/* Fallback route: ekte 404 med noindex (unngår soft-404) */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </main>

            <footer className="site-footer">
                <div className="section-container" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                    <div className="footer-centered-content">
                        {/* Navigation Links */}
                        <nav className="footer-nav" aria-label="Footerlenker">
                            <Link to="/laeringsressurser/teoriproven-bil" className="footer-link">Om teoriprøven</Link>
                            <span className="footer-separator" aria-hidden="true">•</span>
                            <Link to="/laeringsressurser/om-oss" className="footer-link">Om oss</Link>
                            <span className="footer-separator" aria-hidden="true">•</span>
                            <Link to="/laeringsressurser/kontakt" className="footer-link">Kontakt</Link>
                            <span className="footer-separator" aria-hidden="true">•</span>
                            <Link to="/laeringsressurser/personvern" className="footer-link">Personvern &amp; Cookies</Link>
                        </nav>

                        {/* Copyright & Disclaimer */}
                        <p className="footer-copyright-and-disclaimer">
                            © 2026 Teori-test.no. En uavhengig læringsressurs, ikke tilknyttet Statens vegvesen.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
