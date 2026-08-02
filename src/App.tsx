import { TrafficSignLookPage, TrafficSignNumberIndex } from './components/traffic-signs/TrafficSignLookPage'
// Main App Component
import { useState, useEffect, useCallback, Suspense, lazy, startTransition, useRef } from 'react'
import { Routes, Route, Link, useNavigate, useLocation, Navigate, useParams } from 'react-router-dom'
import StartScreen from './components/StartScreen'

const QuizContainer = lazy(() => import('./components/QuizContainer'))
const TheoryPage = lazy(() => import('./components/TheoryPage'))
const LearningGamesIndex = lazy(() => import('./components/LearningGamesIndex'))
const StoppingDistanceChallenge = lazy(() => import('./components/StoppingDistanceChallenge'))
const RoadMarkingGame = lazy(() => import('./components/RoadMarkingGame'))
const VikepliktSpill = lazy(() => import('./components/VikepliktSpill'))
// MIDLERTIDIG FRAKOBLET 26.07.2026 — Andrés egne demoer for parkering og billys.
// Komponentfilene ligger urørt lokalt (ParkingIsoDemo.tsx, Parking2DDemo.tsx,
// CarLightsDemo.tsx, data/parking2DScenarios.ts), men de er ikke committet.
// App.tsx var derimot committet med importene, så Netlify feilet med TS2307 og
// hele nettstedet stod udeployet fra 20. juli.
// Slik kobler du dem inn igjen når demoene er klare: fjern kommentaren her og på
// de tre rutene under /laeringsspill/, og commit komponentfilene samtidig.
// const ParkingIsoDemo = lazy(() => import('./components/ParkingIsoDemo'))
// const Parking2DDemo = lazy(() => import('./components/Parking2DDemo'))
// const CarLightsDemo = lazy(() => import('./components/CarLightsDemo'))
const SignSpeedGamePage = lazy(() => import('./pages/SignSpeedGamePage'))
const TrafficSignBank = lazy(() => import('./components/traffic-signs/TrafficSignBank'))
const TrafficSignCategoryPage = lazy(() => import('./components/traffic-signs/TrafficSignCategoryPage'))
const TrafficSignDetailPage = lazy(() => import('./components/traffic-signs/TrafficSignDetailPage'))
const MinFremgang = lazy(() => import('./components/MinFremgang'))
const NotFound = lazy(() => import('./components/NotFound'))
const QuestionsIndex = lazy(() => import('./components/QuestionsIndex'))
const QuestionPage = lazy(() => import('./components/QuestionPage'))
import ThemeToggle from './components/ThemeToggle'
import DailyStreak from './components/DailyStreak'
import { recordCompletion } from './utils/streakStore'
import './index.css'
import './fokus.css'
import './theory.css'
import './design-v2.css'
import ScrollToTop from './components/ScrollToTop'
import { Helmet } from 'react-helmet-async'
import { Menu, X } from 'lucide-react'

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
    // Keep the first browser render identical to the prerendered HTML.
    // The saved preference is applied after hydration to avoid a mismatch.
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [themeInitialized, setThemeInitialized] = useState(false)

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
        const saved = localStorage.getItem('darkMode')
        startTransition(() => {
            setIsDarkMode(saved !== 'false') // Default to dark (Antigravity theme)
            setThemeInitialized(true)
        })
    }, [])

    useEffect(() => {
        if (!themeInitialized) return

        if (isDarkMode) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
        localStorage.setItem('darkMode', isDarkMode.toString())
        window.dispatchEvent(new Event('teori-test-theme-change'))
    }, [isDarkMode, themeInitialized])

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev)
    }

    const handleReturnHome = () => {
        navigate('/')
    }

    const [showHeader, setShowHeader] = useState(true)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const lastScrollY = useRef(0)

    // Reset header visibility on page/route transition
    useEffect(() => {
        setShowHeader(true)
        setMobileMenuOpen(false)
    }, [location.pathname])

    // Track scroll direction to hide header on scroll down, show on scroll up on mobile
    useEffect(() => {
        const mobileHeaderQuery = window.matchMedia('(max-width: 760px)')

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (!mobileHeaderQuery.matches) {
                setShowHeader(true)
                lastScrollY.current = currentScrollY
                return
            }

            // Keep header visible when close to the top
            if (currentScrollY < 80) {
                setShowHeader(true)
                lastScrollY.current = currentScrollY
                return
            }

            if (currentScrollY > lastScrollY.current + 6) {
                // Scrolling down -> hide header
                setShowHeader(false)
            } else if (currentScrollY < lastScrollY.current - 6) {
                // Scrolling up -> show header
                setShowHeader(true)
            }
            lastScrollY.current = currentScrollY
        }

        const handleViewportChange = () => {
            setShowHeader(true)
            lastScrollY.current = window.scrollY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        mobileHeaderQuery.addEventListener('change', handleViewportChange)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            mobileHeaderQuery.removeEventListener('change', handleViewportChange)
        }
    }, [])

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
            <Helmet>
                {/* Netlify 301-redirecter alle mappebaserte URL-er til versjonen med skråstrek — canonical må matche */}
                <link rel="canonical" href={"https://teori-test.no" + (location.pathname.endsWith('/') ? location.pathname : location.pathname + '/')} />
                <meta property="og:url" content={"https://teori-test.no" + (location.pathname.endsWith('/') ? location.pathname : location.pathname + '/')} />
            </Helmet>

            <div className={`tt-site-header-wrap ${!showHeader ? 'is-hidden' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
                <header className="tt-site-header">
                    <div className="tt-header-inner">
                        <Link to="/" className="tt-brand" aria-label="Teori-test.no, forsiden">
                            <span className="tt-brand-mark" aria-hidden="true">
                                <svg viewBox="0 0 1000 1000" focusable="false">
                                    <circle className="tt-brand-face" cx="500" cy="500" r="450" strokeWidth="34" />
                                    <g className="tt-brand-glyph">
                                        <rect x="265" y="279.48" width="361.7" height="32.69" />
                                        <rect x="265" y="279.48" width="32.7" height="118.52" />
                                        <rect x="265" y="365.3" width="159.39" height="32.7" />
                                        <rect x="391.7" y="365.3" width="32.69" height="279.96" />
                                        <rect x="391.7" y="612.57" width="118.52" height="32.69" />
                                        <rect x="477.52" y="365.3" width="32.7" height="279.96" />
                                        <rect x="477.52" y="365.3" width="257.48" height="32.7" />
                                        <rect x="702.3" y="365.3" width="32.7" height="112.4" />
                                        <rect x="567.43" y="445" width="167.57" height="32.7" />
                                        <rect x="567.43" y="445" width="32.7" height="259.52" />
                                        <rect x="477.52" y="671.83" width="122.61" height="32.69" />
                                    </g>
                                </svg>
                            </span>
                            <span className="tt-brand-copy">
                                <strong>teori-test.no</strong>
                                <small>Klasse B · Førerkort</small>
                            </span>
                        </Link>

                        <nav className={`tt-main-nav ${mobileMenuOpen ? 'is-open' : ''}`} id="main-navigation" aria-label="Hovednavigasjon">
                            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Øvingsprøve</Link>
                            <Link to="/trafikkskilt" className={location.pathname.startsWith('/trafikkskilt') ? 'active' : ''}>Skiltguide</Link>
                            <Link to="/laeringsressurser" className={location.pathname.startsWith('/laeringsressurser') ? 'active' : ''}>Artikler</Link>
                            <Link to="/laeringsspill" className={location.pathname.startsWith('/laeringsspill') ? 'active' : ''}>Minispill</Link>
                            <Link to="/min-fremgang" className={`tt-progress-link ${location.pathname.startsWith('/min-fremgang') ? 'active' : ''}`}>Min fremgang</Link>
                        </nav>

                        <div className="tt-header-actions">
                            <div className="tt-header-streak">
                                <DailyStreak shouldBounce={streakBounce} onBounceComplete={handleBounceComplete} />
                            </div>
                            <ThemeToggle isDark={isDarkMode} onToggle={toggleDarkMode} />
                            <button
                                className="tt-menu-button"
                                type="button"
                                aria-expanded={mobileMenuOpen}
                                aria-controls="main-navigation"
                                aria-label={mobileMenuOpen ? 'Lukk meny' : 'Åpne meny'}
                                onClick={() => setMobileMenuOpen((open) => !open)}
                            >
                                {mobileMenuOpen ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
                                <span>Meny</span>
                            </button>
                        </div>
                    </div>
                </header>
            </div>

            <main>
                <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', padding: '4rem', color: 'var(--color-text-light)' }}>Laster...</div>}>
                    <Routes>
                        <Route path="/" element={<StartScreen />} />
                        <Route path="/quiz" element={<QuizContainer onReturnHome={handleReturnHome} onQuizComplete={handleQuizComplete} />} />
                        <Route path="/quiz/:category" element={<QuizContainer onReturnHome={handleReturnHome} onQuizComplete={handleQuizComplete} />} />
                        <Route path="/laeringsressurser/:articleId?" element={<TheoryPage />} />
                        <Route path="/teori/:articleId" element={<LegacyTeoriRedirect />} />
                        <Route path="/laeringsspill" element={<LearningGamesIndex />} />
                        <Route path="/laeringsspill/stopplengde" element={<StoppingDistanceChallenge />} />
                        <Route path="/laeringsspill/veimerking" element={<RoadMarkingGame />} />
                        <Route path="/laeringsspill/vikeplikt" element={<VikepliktSpill />} />
                        {/* Midlertidig frakoblet 26.07.2026 — se kommentar ved importene øverst.
                            Rutene lå ikke i sitemap og ingenting lenket til dem, så de var
                            uansett bare nåbare ved å skrive URL-en manuelt. */}
                        {/* <Route path="/laeringsspill/parkering-iso-demo" element={<ParkingIsoDemo />} /> */}
                        {/* <Route path="/laeringsspill/parkering-2d-demo" element={<Parking2DDemo />} /> */}
                        {/* <Route path="/laeringsspill/billys-demo" element={<CarLightsDemo />} /> */}
                        <Route path="/laeringsspill/skiltduellen" element={<SignSpeedGamePage />} />
                        <Route path="/trafikkskilt" element={<TrafficSignBank />} />
                        <Route path="/trafikkskilt/skiltnummer" element={<TrafficSignNumberIndex />} />
                        <Route path="/trafikkskilt/blaa-skilt" element={<TrafficSignLookPage />} />
                        <Route path="/trafikkskilt/rode-skilt" element={<TrafficSignLookPage />} />
                        <Route path="/trafikkskilt/trekantede-skilt" element={<TrafficSignLookPage />} />
                        <Route path="/trafikkskilt/:categorySlug" element={<TrafficSignCategoryPage />} />
                        <Route path="/trafikkskilt/:categorySlug/:signSlug" element={<TrafficSignDetailPage />} />
                        <Route path="/min-fremgang" element={<MinFremgang />} />
                        <Route path="/sporsmal" element={<QuestionsIndex />} />
                        <Route path="/sporsmal/:slug" element={<QuestionPage />} />
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
                            <Link to="/sporsmal" className="footer-link">Teorispørsmål</Link>
                            <span className="footer-separator" aria-hidden="true">•</span>
                            <Link to="/laeringsressurser/personvern" className="footer-link">Personvern og informasjonskapsler</Link>
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
