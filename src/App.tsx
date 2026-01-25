// Main App Component
import { useState, useEffect } from 'react'
import QuizContainer from './components/QuizContainer'
import StartScreen from './components/StartScreen'
import ThemeToggle from './components/ThemeToggle'
import type { QuizMode } from './types/quiz.types'
import './index.css'

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Initialize from localStorage or default to false
        const saved = localStorage.getItem('darkMode')
        return saved === 'true'
    })

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

    return (
        <>
            <header style={{
                backgroundColor: 'var(--color-bg)',
                borderBottom: '1px solid var(--color-border)',
                padding: 'var(--spacing-lg) 0',
                marginBottom: 'var(--spacing-xl)',
                transition: 'background-color 0.3s ease, border-color 0.3s ease'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div>
                        <h1 style={{ marginBottom: 0 }}>
                            🚗 Lappen.no - Teoriprøve
                        </h1>
                        <p style={{
                            color: 'var(--color-text-light)',
                            fontSize: 'var(--font-size-sm)',
                            marginTop: 'var(--spacing-xs)'
                        }}>
                            Klasse B (Personbil)
                        </p>
                    </div>
                    <ThemeToggle isDark={isDarkMode} onToggle={toggleDarkMode} />
                </div>
            </header>

            <main>
                {currentMode ? (
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
                fontSize: 'var(--font-size-sm)'
            }}>
                <div className="container">
                    <p>© 2026 Lappen.no - Øvingsprøve for førerkort</p>
                </div>
            </footer>
        </>
    )
}
