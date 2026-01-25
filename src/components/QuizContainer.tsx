// Action Layer: Quiz Container (Main Orchestrator)
import { useState, useEffect } from 'react'
import { fetchRandomQuestions } from '../services/questionService'
import { QuizEngine } from '../logic/quizEngine'
import type { Question } from '../services/supabase'
import type { QuizMode } from '../types/quiz.types'
import ProgressBar from './ProgressBar'
import QuestionCard from './QuestionCard'
import ResultScreen from './ResultScreen'
import ReviewMode from './ReviewMode'

interface QuizContainerProps {
    mode: QuizMode
    onReturnHome: () => void
}

export default function QuizContainer({ mode, onReturnHome }: QuizContainerProps) {
    const [questions, setQuestions] = useState<Question[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [engine] = useState(() => new QuizEngine(mode.maxErrors))
    const [showResults, setShowResults] = useState(false)
    const [showReview, setShowReview] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        loadQuiz()
    }, [])

    async function loadQuiz() {
        try {
            setLoading(true)
            setError(null)
            console.log(`🚀 Starting ${mode.name}...`)

            const data = await fetchRandomQuestions(mode.questionCount)
            setQuestions(data)
            setLoading(false)

            console.log(`✅ ${mode.name} loaded successfully`)
        } catch (err) {
            console.error('❌ Failed to load quiz:', err)
            setError(err instanceof Error ? err.message : 'En ukjent feil oppstod')
            setLoading(false)
        }
    }

    function handleAnswer(answer: string) {
        const currentQuestion = questions[currentIndex]
        engine.recordAnswer(currentQuestion.id, answer)

        if (currentIndex < questions.length - 1) {
            // Move to next question
            setCurrentIndex(prev => prev + 1)
        } else {
            // Show results
            setShowResults(true)
        }
    }

    function handlePrevious() {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
        }
    }

    function handleRestart() {
        engine.reset()
        setCurrentIndex(0)
        setShowResults(false)
        setShowReview(false)
        loadQuiz()
    }

    function handleShowReview() {
        setShowReview(true)
    }

    // Loading state
    if (loading) {
        return (
            <div className="container">
                <div className="loading">
                    Laster spørsmål...
                </div>
            </div>
        )
    }

    // Error state
    if (error) {
        return (
            <div className="container">
                <div className="error">
                    <h2>Feil ved lasting av quiz</h2>
                    <p>{error}</p>
                    <button
                        className="button"
                        onClick={loadQuiz}
                        style={{ marginTop: 'var(--spacing-md)' }}
                    >
                        Prøv igjen
                    </button>
                </div>
            </div>
        )
    }

    // Review mode state
    if (showReview) {
        const incorrectAnswers = engine.getIncorrectAnswers(questions)
        return (
            <div className="container">
                <ReviewMode incorrectAnswers={incorrectAnswers} onRestart={handleRestart} />
            </div>
        )
    }

    // Results state
    if (showResults) {
        const result = engine.calculateScore(questions)
        return (
            <div className="container">
                <ResultScreen
                    result={result}
                    mode={mode}
                    onRestart={handleRestart}
                    onReview={handleShowReview}
                    onReturnHome={onReturnHome}
                />
            </div>
        )
    }

    // Quiz state
    const currentQuestion = questions[currentIndex]
    const previousAnswer = engine.getAnswer(currentQuestion.id)

    return (
        <div className="container">
            <ProgressBar
                current={currentIndex + 1}
                total={questions.length}
            />

            <QuestionCard
                question={currentQuestion}
                questionNumber={currentIndex + 1}
                totalQuestions={questions.length}
                onAnswer={handleAnswer}
                onPrevious={handlePrevious}
                previousAnswer={previousAnswer}
            />
        </div>
    )
}
