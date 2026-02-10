// Main App Component
import { useState, useEffect } from 'react'
import QuizContainer from './components/QuizContainer'
import StartScreen from './components/StartScreen'
import TheoryPage from './components/TheoryPage'
import ThemeToggle from './components/ThemeToggle'
import type { QuizMode } from './types/quiz.types'
import './index.css'
import './fokus.css'
import './theory.css'

type AppPage = 'quiz' | 'theory'

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Initialize from localStorage or default to false
        const saved = localStorage.getItem('darkMode')
        return saved === 'true'
    })

    const [currentPage, setCurrentPage] = useState<AppPage>('quiz')
    const [currentMode, setCurrentMode] = useState<QuizMode | null>(null)

    useEffect(() => {
        // Apply dark mode class to body
        if (isDarkMode) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }

        // Save preference to localStorage
        localStorage.setItem('darkMode', isDarkMode.toString())
    }, [isDarkMode])

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev)
    }

    const handleStartQuiz = (mode: QuizMode) => {
        setCurrentMode(mode)
    }

    const handleReturnHome = () => {
        setCurrentMode(null)
    }

    const handlePageChange = (page: AppPage) => {
        setCurrentPage(page)
        setCurrentMode(null) // Reset quiz when switching
    }

    return (
        <>
            <header style={{
                backgroundColor: 'var(--color-bg)',
                borderBottom: '1px solid var(--color-border)',
                padding: 'var(--spacing-lg) 0',
                marginBottom: 'var(--spacing-xl)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'background-color 0.3s ease, border-color 0.3s ease'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div>
                        <h1 style={{ marginBottom: 0 }}>
                            🏁 Lappen.no
                        </h1>
                        <nav className="nav-tabs">
                            <button
                                className={`nav-tab ${currentPage === 'quiz' ? 'nav-tab-active' : ''}`}
                                onClick={() => handlePageChange('quiz')}
                            >
                                📝 Øvingsprøve
                            </button>
                            <button
                                className={`nav-tab ${currentPage === 'theory' ? 'nav-tab-active' : ''}`}
                                onClick={() => handlePageChange('theory')}
                            >
                                📖 Teori
                            </button>
                        </nav>
                    </div>
                    <ThemeToggle isDark={isDarkMode} onToggle={toggleDarkMode} />
                </div>
            </header>

            <main>
                {currentPage === 'theory' ? (
                    <TheoryPage />
                ) : currentMode ? (
                    <QuizContainer
                        mode={currentMode}
                        onReturnHome={handleReturnHome}
                    />
                ) : (
                    <StartScreen onStartQuiz={handleStartQuiz} />
                )}
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
                    <p>© 2026 Lappen.no - Øvingsprøve for førerkort</p>
                </div>
            </footer>
        </>
    )
}

