// Review Mode Component - Shows explanations for incorrect answers
import type { Question } from '../services/supabase'

interface ReviewModeProps {
    incorrectAnswers: Array<{ question: Question; userAnswer: string }>
    onRestart: () => void
}

export default function ReviewMode({ incorrectAnswers, onRestart }: ReviewModeProps) {
    if (incorrectAnswers.length === 0) {
        return (
            <div className="review-mode">
                <div className="review-header">
                    <h2>🎉 Perfekt!</h2>
                    <p>Du fikk alle svarene riktig - ingen feil å gå gjennom!</p>
                </div>
                <button
                    className="button"
                    onClick={onRestart}
                    style={{ marginTop: 'var(--spacing-lg)' }}
                >
                    Ta ny prøve
                </button>
            </div>
        )
    }

    return (
        <div className="review-mode">
            <div className="review-header">
                <h2>📚 Gjennomgang av feil</h2>
                <p>Her er de {incorrectAnswers.length} spørsmålene du svarte feil på:</p>
            </div>

            <div className="review-questions">
                {incorrectAnswers.map(({ question, userAnswer }, index) => {
                    // Map options to letters
                    const optionLetters = ['A', 'B', 'C', 'D']
                    const mappedOptions = question.options.map((text, idx) => ({
                        letter: optionLetters[idx],
                        text: text
                    }))

                    const userAnswerLetter = mappedOptions.find(opt => opt.text === userAnswer)?.letter
                    const correctAnswerLetter = mappedOptions.find(opt => opt.text === question.correct_answer)?.letter

                    return (
                        <div key={question.id} className="review-question">
                            <div className="review-question-number">
                                Spørsmål {index + 1} av {incorrectAnswers.length}
                            </div>

                            <h3 className="review-question-text">{question.question_text}</h3>

                            {question.image_name && (
                                <img
                                    src={`https://tdclflxovwhqutaikvuj.supabase.co/storage/v1/object/public/quiz-images/${question.image_name}`}
                                    alt="Spørsmålsbilde"
                                    className="question-image"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none'
                                    }}
                                />
                            )}

                            <div className="review-answers">
                                <div className="review-answer-row incorrect">
                                    <strong>❌ Ditt svar:</strong> {userAnswerLetter}: {userAnswer}
                                </div>
                                <div className="review-answer-row correct">
                                    <strong>✅ Riktig svar:</strong> {correctAnswerLetter}: {question.correct_answer}
                                </div>
                            </div>

                            {question.explanation && (
                                <div className="review-explanation">
                                    <strong>💡 Forklaring:</strong>
                                    <p>{question.explanation}</p>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

            <button
                className="button"
                onClick={onRestart}
                style={{ marginTop: 'var(--spacing-xl)', width: '100%' }}
            >
                Ta ny prøve
            </button>
        </div>
    )
}
