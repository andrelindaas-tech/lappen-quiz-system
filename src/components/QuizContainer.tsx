// Action Layer: Quiz Container (Main Orchestrator)
import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
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
import { getWrongAnswers, removeWrongAnswer, addWrongAnswers, getWrongAnswersCount } from '../utils/wrongAnswersStore'

interface QuizContainerProps {
    onReturnHome: () => void
    onQuizComplete: () => void
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL

export default function QuizContainer({ onReturnHome, onQuizComplete }: QuizContainerProps) {
    const { category } = useParams()
    const [searchParams] = useSearchParams()

    // Construct mode dynamically from URL params
    const modeParam = searchParams.get('mode')
    const timerParam = searchParams.get('timer') === 'true'

    // This runs on init to figure out what type of quiz we are taking based on URL
    const mode: QuizMode = (() => {
        if (category) {
            return {
                name: `${category.charAt(0).toUpperCase() + category.slice(1)}-test`,
                questionCount: 15, // Default for category tests unless specified
                maxErrors: 3,
                description: `Øv på ${category} spørsmål`,
                category: category
            }
        } else if (modeParam === 'hurtig') {
            return {
                name: 'Ekspresstest',
                questionCount: 10,
                maxErrors: 2,
                description: '10 spørsmål - Maks 2 feil'
            }
        } else if (modeParam === 'eksamen') {
            return {
                name: 'Full prøve',
                questionCount: 45,
                maxErrors: 7,
                description: '45 spørsmål - Maks 7 feil',
                timeLimitMinutes: 90,
                useTimer: timerParam
            }
        } else if (modeParam === 'fokus') {
            return {
                name: 'Fokus mode',
                questionCount: getWrongAnswersCount(),
                maxErrors: 0,
                description: 'Øv på feil du har gjort',
                isFokusMode: true
            }
        }

        // Fallback for direct /quiz with no params
        return {
            name: 'Øvingsprøve',
            questionCount: 15,
            maxErrors: 3,
            description: 'Blandet prøve'
        }
    })()

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
    }, [category, modeParam]) // Reload if URL params change

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
                // Category filter (path param)
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
            setCurrentIndex(prev => prev + 1)
        } else {
            const elapsed = Math.floor((Date.now() - startTime) / 1000)
            setTimeTaken(elapsed)
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

    function handleTimeUp() {
        const elapsed = Math.floor((Date.now() - startTime) / 1000)
        setTimeTaken(elapsed)
        setShowResults(true)
    }

    function handleTimeWarning() {
        setShowTimeWarning(true)
        console.log('⏰ 5 minutes remaining!')
    }

    // Dynamic SEO Metadata for Quiz Container
    const metaTitle = category
        ? `Teoriprøve: ${category.charAt(0).toUpperCase() + category.slice(1)} | Teori-test.no`
        : `Start ${mode.name} | Teori-test.no`

    const metaDescription = category
        ? `Øv på ${category} spørsmål for førerkort klasse B. Spesialtilpasset øvingsprøve for ${category}.`
        : `Forbered deg til teoriprøven med vår ${mode.name}.`

    if (loading) {
        return (
            <div className="container">
                <Helmet>
                    <title>{metaTitle}</title>
                </Helmet>
                <div className="loading">
                    Laster spørsmål...
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="container">
                <Helmet>
                    <title>Feil | Teori-test.no</title>
                </Helmet>
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

    if (showReview) {
        const incorrectAnswers = engine.getIncorrectAnswers(questions)
        return (
            <div className="container">
                <Helmet>
                    <title>Gjennomgang av svar | Teori-test.no</title>
                </Helmet>
                <ReviewMode incorrectAnswers={incorrectAnswers} onRestart={handleRestart} />
            </div>
        )
    }

    if (showResults) {
        const result = engine.calculateScore(questions)

        if (mode.useTimer && timeTaken > 0) {
            result.timeTaken = timeTaken
        }

        if (!mode.isFokusMode) {
            const incorrectIds = engine.getIncorrectAnswerIds()
            if (incorrectIds.length > 0) {
                addWrongAnswers(incorrectIds)
                console.log(`➕ Added ${incorrectIds.length} incorrect answers to Fokus mode`)
            }
        }

        return (
            <div className="container">
                <Helmet>
                    <title>Resultat: {result.passed ? 'Bestått' : 'Ikke bestått'} | Teori-test.no</title>
                </Helmet>
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

    const currentQuestion = questions[currentIndex]
    const previousAnswer = engine.getAnswer(currentQuestion.id)

    return (
        <div className="container">
            <Helmet>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
            </Helmet>

            {mode.useTimer && mode.timeLimitMinutes && (
                <Timer
                    timeLimitMinutes={mode.timeLimitMinutes}
                    onTimeUp={handleTimeUp}
                    onTimeWarning={handleTimeWarning}
                />
            )}

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
                key={currentQuestion.id}
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
