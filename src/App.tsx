// Main App Component
import { useState, useEffect, useCallback } from 'react'
import { Routes, Route, NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import QuizContainer from './components/QuizContainer'
import StartScreen from './components/StartScreen'
import TheoryPage from './components/TheoryPage'
import OppkjoringPage from './components/OppkjoringPage'
import ThemeToggle from './components/ThemeToggle'
import DailyStreak from './components/DailyStreak'
import { recordCompletion } from './utils/streakStore'
import './index.css'
import './fokus.css'
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

    // Send GA4 page_view for SPA navigation
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
                                Øvingsprøve
                            </NavLink>
                            <NavLink
                                to="/laeringsressurser"
                                className={({ isActive }) => `nav-tab ${isActive || location.pathname.startsWith('/teori') ? 'nav-tab-active' : ''}`}
                                style={{ padding: '0.5rem 0.25rem', textDecoration: 'none' }}
                            >
                                Læringsressurser
                            </NavLink>
                        </nav>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                        <DailyStreak shouldBounce={streakBounce} onBounceComplete={handleBounceComplete} />
                        <ThemeToggle isDark={isDarkMode} onToggle={toggleDarkMode} />
                    </div>
                </div>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<StartScreen />} />
                    <Route path="/quiz" element={<QuizContainer onReturnHome={handleReturnHome} onQuizComplete={handleQuizComplete} />} />
                    <Route path="/quiz/:category" element={<QuizContainer onReturnHome={handleReturnHome} onQuizComplete={handleQuizComplete} />} />
                    <Route path="/laeringsressurser/oppkjoring" element={<OppkjoringPage />} />
                    <Route path="/laeringsressurser/:articleId?" element={<TheoryPage />} />
                    {/* Fallback route */}
                    <Route path="*" element={<StartScreen />} />
                </Routes>
            </main>

            <footer style={{
                marginTop: 'auto',
                padding: 'var(--spacing-xl) 0',
                textAlign: 'center',
                color: 'var(--color-text-light)',
                fontSize: 'var(--font-size-sm)',
                opacity: 0.8
            }}>
                <div className="container">
                    <p>© 2026 Teori-test.no - Øvingsprøve for førerkort</p>
                </div>
            </footer>
        </>
    )
}
