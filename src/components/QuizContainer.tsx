// Action Layer: Quiz Container (Main Orchestrator)
import { useState, useEffect } from 'react'
import NotFound from './NotFound'
import { useParams, useSearchParams, Link } from 'react-router-dom'
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
import { logQuizAnswer } from "../services/supabase";
import { getSessionId } from "../utils/session";
import { trackEvent } from '../utils/analytics'
import { recordQuizResult } from '../utils/progressStore'

interface QuizContainerProps {
    onReturnHome: () => void
    onQuizComplete: () => void
}

// Gyldige temaquiz-URL-er. Ruta godtok tidligere hvilken som helst streng, så Google
// rakk å indeksere /quiz/fareskilt, /quiz/underskilt, /quiz/forbudsskilt og
// /quiz/fart_og_plassering — alle på posisjon 35–64 med null klikk. Ukjente kategorier
// gir nå en ekte 404 med noindex i stedet for en tom side som svarer 200.
const GYLDIGE_QUIZ_KATEGORIER = ['vikeplikt', 'skilt', 'fartsregler', 'veimerking'] as const

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL

type QuizSeoKey = 'root' | typeof GYLDIGE_QUIZ_KATEGORIER[number]

interface QuizSeoMetadata {
    title: string
    description: string
    heading: string
    intro?: string
}

const QUIZ_SEO: Record<QuizSeoKey, QuizSeoMetadata> = {
    root: {
        title: 'Øvingsprøve klasse B – start testen | Teori-test.no',
        description: 'Start en gratis øvingsprøve for klasse B og få fasit med forklaringer. Prøv full test med 45 spørsmål, ekspresstest eller blandet øving.',
        heading: 'Øvingsprøve for klasse B',
        intro: 'Velg full prøve, ekspresstest eller blandet øving. Du får fasit med forklaring på hvert svar.',
    },
    vikeplikt: {
        title: 'Vikeplikt-quiz – Øv til teoriprøven | Teori-test.no',
        description: 'Test kunnskapene dine om vikeplikt med 10 målrettede spørsmål. Gratis øving til teoriprøven for førerkort klasse B.',
        heading: 'Vikeplikt-quiz',
    },
    skilt: {
        title: 'Skilt-quiz – Test deg på trafikkskilt | Teori-test.no',
        description: 'Test deg på trafikkskilt med 10 spørsmål — gratis og uten registrering. Øv på fareskilt, forbudsskilt og vikepliktskilt til teoriprøven klasse B.',
        heading: 'Skilt-quiz',
    },
    fartsregler: {
        title: 'Fartsregler-quiz – fart og plassering | Teori-test.no',
        description: 'Test deg på fartsgrenser, fartstilpasning, plassering, reaksjonstid og bremselengde. Gratis quiz for teoriprøven klasse B med fasit og forklaringer.',
        heading: 'Fartsregler-quiz: fart og plassering',
    },
    veimerking: {
        title: 'Veimerking-quiz – linjer og oppmerking | Teori-test.no',
        description: 'Test hva sperrelinje, varsellinje, vikelinje og annen vegoppmerking betyr. Gratis quiz for teoriprøven klasse B med fasit og forklaringer.',
        heading: 'Veimerking-quiz',
    },
}

function QuizDocumentHead({ seo, canonicalUrl }: { seo: QuizSeoMetadata; canonicalUrl: string }) {
    return (
        <Helmet>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <link rel="canonical" href={canonicalUrl} />
        </Helmet>
    )
}

function QuizPageHeader({ seo, showIntro = false }: { seo: QuizSeoMetadata; showIntro?: boolean }) {
    return (
        <header className="quiz-page-header">
            <h1 className="quiz-page-heading">{seo.heading}</h1>
            {showIntro && seo.intro && <p className="quiz-page-intro">{seo.intro}</p>}
        </header>
    )
}


// Crawlbar tekst under quizen. Uten denne er quiz-sidene helt tomme for Google:
// /quiz/skilt rangerer på posisjon 7,7 med null tegn innhold, og de svakere
// quiz-sidene har ingenting å rangere på i det hele tatt. Vises likt for alle.
const QUIZ_INFO: Record<string, { tittel: string; tekst: string; lenker: { to: string; navn: string }[] }> = {
    skilt: {
        tittel: 'Om skilt-testen',
        tekst: 'Testen henter ti tilfeldige spørsmål om norske trafikkskilt — fareskilt, forbudsskilt, påbudsskilt og opplysningsskilt. Du får forklaring på hvert svar, og du kan ta testen så mange ganger du vil. Vil du lese deg opp først, finner du alle 214 skiltene med bilde og forklaring i skiltguiden.',
        // Maks to lenker per quiz. Skiltguiden er hovedmålet; nummeroppslaget dekker
        // det andre behovet etter en test — «jeg husker skiltet, ikke navnet».
        // Farge- og nummersidene lenkes fra skiltguiden og fra hverandre.
        lenker: [
            { to: '/trafikkskilt', navn: 'Skiltguiden – alle 214 skilt' },
            { to: '/trafikkskilt/skiltnummer', navn: 'Slå opp skilt på nummer' },
        ],
    },
    vikeplikt: {
        tittel: 'Om vikeplikt-testen',
        tekst: 'Ti spørsmål om vikeplikt: høyreregelen, rundkjøring, gangfelt, buss fra holdeplass og vikepliktskiltene. Vikeplikt er et av temaene flest stryker på, så det er verdt å ta testen flere ganger.',
        // Spillet beholdes som lenke nummer to: GA4 viser 8m30s og 8,9 visninger
        // per bruker på det, klart høyest av alt innholdet.
        lenker: [
            { to: '/laeringsressurser/vikeplikt', navn: 'Vikeplikt – komplett guide' },
            { to: '/laeringsspill/vikeplikt', navn: 'Vikepliktspillet' },
        ],
    },
    fartsregler: {
        tittel: 'Om fartstesten',
        tekst: 'Spørsmål om fartsgrenser, plassering i kjørefelt, reaksjonstid og bremselengde. Regneoppgavene om stopplengde er blant de vanligste på teoriprøven.',
        // Bremselengde-siden dekker også reaksjonstid, så den lenken er droppet.
        lenker: [
            { to: '/laeringsressurser/fartsgrenser', navn: 'Fartsgrenser i Norge' },
            { to: '/laeringsressurser/bremselengde', navn: 'Bremselengde og stopplengde' },
        ],
    },
    veimerking: {
        tittel: 'Om veimerking-testen',
        tekst: 'Spørsmål om linjene i veibanen: sperrelinje, varsellinje, kombinert linje, kantlinje, vikelinje og sperreområde. Fargen og mønsteret avgjør hva du har lov til.',
        lenker: [
            { to: '/laeringsressurser/veimerking', navn: 'Veimerking forklart med bilder' },
            { to: '/laeringsspill/veimerking', navn: 'Veimerking-spillet' },
        ],
    },
}

function QuizInfo({ kategori }: { kategori?: string }) {
    const info = kategori ? QUIZ_INFO[kategori.toLowerCase()] : undefined
    if (!info) return null
    return (
        <section style={{ maxWidth: '46rem', margin: '2.5rem auto 0', padding: '1.25rem 1.5rem', borderTop: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.6rem' }}>{info.tittel}</h2>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.65, margin: '0 0 0.9rem' }}>{info.tekst}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem 1.1rem', fontSize: '0.95rem' }}>
                {info.lenker.map((l) => (
                    <Link key={l.to} to={l.to} style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>
                        {l.navn}
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default function QuizContainer({ onReturnHome, onQuizComplete }: QuizContainerProps) {
    const { category: rawCategory } = useParams()
    const publicCategory = rawCategory?.toLowerCase()
    const kjentKategori = !!publicCategory && GYLDIGE_QUIZ_KATEGORIER.includes(publicCategory as typeof GYLDIGE_QUIZ_KATEGORIER[number])
    const ukjentKategori = !!publicCategory && !kjentKategori
    // Den offentlige URL-en heter fartsregler, mens spørsmålsdatabasen fortsatt
    // bruker det interne kategorinavnet fart_og_plassering.
    const category = publicCategory === 'fartsregler' ? 'fart_og_plassering' : publicCategory
    const [searchParams] = useSearchParams()

    // Construct mode dynamically from URL params
    const modeParam = searchParams.get('mode')
    const timerParam = searchParams.get('timer') === 'true'

    // This runs on init to figure out what type of quiz we are taking based on URL
    const mode: QuizMode = (() => {
        if (category) {
            const isSkilt = category.toLowerCase() === 'skilt';
            const isVikeplikt = category.toLowerCase() === 'vikeplikt';
            
            return {
                name: isSkilt ? 'Skilttest' : (isVikeplikt ? 'Vikepliktstest' : `${category.charAt(0).toUpperCase() + category.slice(1)}-test`),
                questionCount: (isSkilt || isVikeplikt) ? 10 : 15,
                maxErrors: isSkilt ? 1 : (isVikeplikt ? 2 : 3),
                description: isSkilt ? '10 skilte spørsmål - Maks 1 feil' : (isVikeplikt ? '10 spørsmål – maks 2 feil' : `Øv på ${category} spørsmål`),
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
                useTimer: timerParam,
                isExamMode: true
            }
        } else if (modeParam === 'fokus') {
            return {
                name: 'Fokusmodus',
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
                    setError('Ingen feil å øve på i Fokusmodus')
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

            // GA4: quiz started
            trackEvent('quiz_started', {
                quiz_name: mode.name,
                question_count: data.length,
            })

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
        
        // Log answer to Supabase (fire-and-forget)
        logQuizAnswer({
            questionId: currentQuestion.id,
            topic: (currentQuestion as any).topic ?? currentQuestion.category ?? "ukjent",
            selectedAnswer: answer,
            correctAnswer: currentQuestion.correct_answer,
            isCorrect: answer === currentQuestion.correct_answer,
            sessionId: getSessionId(),
        });

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

            // GA4: quiz completed (marker som key event i GA4-innstillingene)
            const finalResult = engine.calculateScore(questions)
            trackEvent('quiz_completed', {
                quiz_name: mode.name,
                question_count: questions.length,
                correct_count: finalResult.correctCount,
                passed: finalResult.passed,
                time_taken_seconds: elapsed,
            })

            // «Min fremgang»: lagre resultatet lokalt
            recordQuizResult({
                name: mode.name,
                correct: finalResult.correctCount,
                total: questions.length,
                passed: finalResult.passed,
            })

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

    const seoKey: QuizSeoKey = kjentKategori
        ? publicCategory as typeof GYLDIGE_QUIZ_KATEGORIER[number]
        : 'root'
    const quizSeo = QUIZ_SEO[seoKey]
    const canonicalUrl = `https://teori-test.no/quiz${publicCategory ? `/${publicCategory}` : ''}/`
    const showRootIntro = !publicCategory && !modeParam

    if (ukjentKategori) return <NotFound />

    if (loading) {
        return (
            <div className="container">
                <QuizDocumentHead seo={quizSeo} canonicalUrl={canonicalUrl} />
                <QuizPageHeader seo={quizSeo} showIntro={showRootIntro} />
                <div className="loading">
                    Laster spørsmål...
                </div>
                {/* Crawleren ser denne tilstanden, ikke den ferdige quizen — teksten må stå her også. */}
                <QuizInfo kategori={rawCategory} />
            </div>
        )
    }

    if (error) {
        return (
            <div className="container">
                <QuizDocumentHead seo={quizSeo} canonicalUrl={canonicalUrl} />
                <QuizPageHeader seo={quizSeo} showIntro={showRootIntro} />
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
                <QuizDocumentHead seo={quizSeo} canonicalUrl={canonicalUrl} />
                <QuizPageHeader seo={quizSeo} showIntro={showRootIntro} />
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
                <QuizDocumentHead seo={quizSeo} canonicalUrl={canonicalUrl} />
                <QuizPageHeader seo={quizSeo} showIntro={showRootIntro} />
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
            <QuizDocumentHead seo={quizSeo} canonicalUrl={canonicalUrl} />
            <QuizPageHeader seo={quizSeo} showIntro={showRootIntro} />

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

            <QuizInfo kategori={rawCategory} />
        </div>
    )
}
