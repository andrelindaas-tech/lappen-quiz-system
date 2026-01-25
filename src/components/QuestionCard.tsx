// Action Layer: Question Card Component
import { useState, useEffect } from 'react'
import type { Question } from '../services/supabase'

interface QuestionCardProps {
    question: Question
    questionNumber: number
    totalQuestions: number
    onAnswer: (answer: string) => void
    onPrevious?: () => void
    previousAnswer?: string | null
}

export default function QuestionCard({ question, questionNumber, totalQuestions, onAnswer, onPrevious, previousAnswer }: QuestionCardProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
    const [hasAnswered, setHasAnswered] = useState(false)

    // Initialize state with previous answer or reset when question changes
    useEffect(() => {
        if (previousAnswer) {
            setSelectedAnswer(previousAnswer)
            setHasAnswered(true)
        } else {
            setSelectedAnswer(null)
            setHasAnswered(false)
        }
    }, [question.id, previousAnswer])

    const handleSelect = (answer: string) => {
        // Only allow selection if not already answered
        if (hasAnswered) return

        setSelectedAnswer(answer)
        setHasAnswered(true)
    }

    const handleConfirm = () => {
        if (selectedAnswer && hasAnswered) {
            onAnswer(selectedAnswer)
            // Note: state will be reset by useEffect when question changes
        }
    }

    // Map array options to lettered format
    const optionLetters = ['A', 'B', 'C', 'D']
    const mappedOptions = question.options.map((text, index) => ({
        letter: optionLetters[index],
        text: text
    }))

    // Generate image URL if image_name exists
    const imageUrl = question.image_name
        ? `https://tdclflxovwhqutaikvuj.supabase.co/storage/v1/object/public/quiz-images/${question.image_name}`
        : null

    // Determine CSS classes for each option
    const getOptionClass = (optionText: string) => {
        if (!hasAnswered) {
            return selectedAnswer === optionText ? 'selected' : ''
        }

        // After answering, show feedback
        const isCorrect = optionText === question.correct_answer
        const isSelected = optionText === selectedAnswer

        if (isSelected) {
            return isCorrect ? 'correct' : 'incorrect'
        }

        // Show correct answer in green even if user didn't select it
        if (isCorrect) {
            return 'correct'
        }

        // Dim other options
        return 'disabled'
    }

    return (
        <div className="question-card">
            <div className="question-number">
                Spørsmål {questionNumber}
            </div>

            <h2 className="question-text">
                {question.question_text}
            </h2>

            {imageUrl && (
                <div className="question-image-container">
                    <img
                        src={imageUrl}
                        alt="Spørsmålsbilde"
                        className="question-image"
                        onError={(e) => {
                            // Hide container if image fails to load
                            const container = e.currentTarget.parentElement
                            if (container) container.style.display = 'none'
                        }}
                    />
                </div>
            )}

            <div className="answers-container">
                {mappedOptions.map((option) => (
                    <button
                        key={option.letter}
                        className={`answer-button ${getOptionClass(option.text)}`}
                        onClick={() => handleSelect(option.text)}
                        type="button"
                        disabled={hasAnswered}
                    >
                        <strong>{option.letter}:</strong> {option.text}
                    </button>
                ))}
            </div>

            {hasAnswered && question.explanation && (
                <div className="explanation-box">
                    <strong>Forklaring:</strong>
                    <p>{question.explanation}</p>
                </div>
            )}

            <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-lg)' }}>
                {onPrevious && questionNumber > 1 && (
                    <button
                        className="button button-secondary"
                        onClick={onPrevious}
                        style={{ flex: 1 }}
                    >
                        ← Tilbake
                    </button>
                )}
                <button
                    className="button"
                    onClick={handleConfirm}
                    disabled={!hasAnswered}
                    style={{ flex: 1 }}
                >
                    {questionNumber === totalQuestions ? 'Avslutt prøve' : 'Neste spørsmål →'}
                </button>
            </div>
        </div>
    )
}

