// Action Layer: Quiz Container (Main Orchestrator)
import { useState, useEffect } from 'react'
import { fetchRandomQuestions, fetchQuestionsByCategory, fetchQuestionsByIds } from '../services/questionService'
import { QuizEngine } from '../logic/quizEngine'
import type { Question } from '../services/supabase'
import type { QuizMode } from '../types/quiz.types'
import ProgressBar from './ProgressBar'
import QuestionCard from './QuestionCard'
import ResultScreen from './ResultScreen'
import ReviewMode from './ReviewMode'
import Timer from './Timer'
import { useImagePrefetch } from '../hooks/useImagePrefetch'
import { getWrongAnswers, removeWrongAnswer, addWrongAnswers } from '../utils/wrongAnswersStore'

interface QuizContainerProps {
    mode: QuizMode
    onReturnHome: () => void
    onQuizComplete: () => void
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL

export default function QuizContainer({ mode, onReturnHome, onQuizComplete }: QuizContainerProps) {
    const [questions, setQuestions] = useState<Question[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [engine] = useState(() => new QuizEngine(mode.maxErrors))
    const [showResults, setShowResults] = useState(false)
    const [showReview, setShowReview] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [startTime] = useState(() => Date.now())
    const [timeTaken, setTimeTaken] = useState<number>(0)
    const [showTimeWarning, setShowTimeWarning] = useState(false)

    // 🚀 Prefetch next question's image for instant loading
    useImagePrefetch(questions, currentIndex, SUPABASE_URL)

    useEffect(() => {
        loadQuiz()
    }, [])

    async function loadQuiz() {
        try {
            setLoading(true)
            setError(null)
            console.log(`🚀 Starting ${mode.name}...`)

            let data: Question[]

            // Check if this is Fokus mode
            if (mode.isFokusMode) {
                const wrongIds = getWrongAnswers()
                if (wrongIds.length === 0) {
                    setError('Ingen feil å øve på i Fokus mode')
                    setLoading(false)
                    return
                }
                data = await fetchQuestionsByIds(wrongIds)
            } else if (mode.category) {
                // Category filter (e.g., Skilt-test)
                data = await fetchQuestionsByCategory(mode.questionCount, mode.category)
            } else {
                // Random questions
                data = await fetchRandomQuestions(mode.questionCount)
            }

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

        // If in Fokus mode and answer is correct, remove from wrong answers
        if (mode.isFokusMode && answer === currentQuestion.correct_answer) {
            removeWrongAnswer(currentQuestion.id)
            console.log(`✅ Removed question ${currentQuestion.id} from Fokus mode (answered correctly)`)
        }

        if (currentIndex < questions.length - 1) {
            // Move to next question
            setCurrentIndex(prev => prev + 1)
        } else {
            // Calculate time taken before showing results
            const elapsed = Math.floor((Date.now() - startTime) / 1000)
            setTimeTaken(elapsed)
            // Show results
            setShowResults(true)
            onQuizComplete()
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

    // Timer callbacks
    function handleTimeUp() {
        // Auto-submit quiz when timer expires
        const elapsed = Math.floor((Date.now() - startTime) / 1000)
        setTimeTaken(elapsed)
        setShowResults(true)
    }

    function handleTimeWarning() {
        // Show warning notification at 5 minutes remaining
        setShowTimeWarning(true)
        console.log('⏰ 5 minutes remaining!')
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

        // Add time taken to result if timer was used
        if (mode.useTimer && timeTaken > 0) {
            result.timeTaken = timeTaken
        }

        // If not in Fokus mode, sync wrong answers to localStorage
        if (!mode.isFokusMode) {
            const incorrectIds = engine.getIncorrectAnswerIds()
            if (incorrectIds.length > 0) {
                addWrongAnswers(incorrectIds)
                console.log(`➕ Added ${incorrectIds.length} incorrect answers to Fokus mode`)
            }
        }

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
            {/* Timer component for Full Test with timer enabled */}
            {mode.useTimer && mode.timeLimitMinutes && (
                <Timer
                    timeLimitMinutes={mode.timeLimitMinutes}
                    onTimeUp={handleTimeUp}
                    onTimeWarning={handleTimeWarning}
                />
            )}

            {/* Time warning notification */}
            {showTimeWarning && (
                <div className="time-warning-notification">
                    ⏰ 5 minutter gjenstår!
                </div>
            )}

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
