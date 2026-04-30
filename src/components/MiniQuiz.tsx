import { useState } from 'react'

export interface MiniQuizQuestion {
    question: string
    options: string[]
    correct: string
    explanation: string
}

interface MiniQuizProps {
    questions: MiniQuizQuestion[]
}

export default function MiniQuiz({ questions }: MiniQuizProps) {
    const [current, setCurrent] = useState(0)
    const [selected, setSelected] = useState<string | null>(null)
    const [score, setScore] = useState(0)
    const [done, setDone] = useState(false)
    const [answers, setAnswers] = useState<{ selected: string; correct: string }[]>([])

    const q = questions[current]
    const isCorrect = selected === q.correct
    const isLast = current === questions.length - 1

    function handleSelect(option: string) {
        if (selected) return
        setSelected(option)
        if (option === q.correct) setScore(s => s + 1)
        setAnswers(prev => [...prev, { selected: option, correct: q.correct }])
    }

    function handleNext() {
        if (isLast) {
            setDone(true)
        } else {
            setCurrent(c => c + 1)
            setSelected(null)
        }
    }

    function handleRestart() {
        setCurrent(0)
        setSelected(null)
        setScore(0)
        setDone(false)
        setAnswers([])
    }

    if (done) {
        const pct = Math.round((score / questions.length) * 100)
        const passed = score >= Math.ceil(questions.length * 0.6)
        return (
            <div className="mini-quiz-result">
                <div className="mini-quiz-result-icon">{passed ? '🎉' : '📚'}</div>
                <h4 className="mini-quiz-result-title">
                    {passed ? 'Bra jobbet!' : 'Øv litt mer'}
                </h4>
                <p className="mini-quiz-result-score">
                    {score} av {questions.length} riktige ({pct}%)
                </p>
                <div className="mini-quiz-result-list">
                    {questions.map((q, i) => (
                        <div
                            key={i}
                            className={`mini-quiz-result-item ${answers[i]?.selected === q.correct ? 'correct' : 'wrong'}`}
                        >
                            <span className="mini-quiz-result-item-icon">
                                {answers[i]?.selected === q.correct ? '✓' : '✗'}
                            </span>
                            <span>{q.question}</span>
                        </div>
                    ))}
                </div>
                <button className="mini-quiz-btn-restart" onClick={handleRestart}>
                    Ta quizen på nytt
                </button>
            </div>
        )
    }

    return (
        <div className="mini-quiz">
            <div className="mini-quiz-header">
                <span className="mini-quiz-label">Minitest</span>
                <span className="mini-quiz-progress">
                    {current + 1} / {questions.length}
                </span>
            </div>

            <div className="mini-quiz-progress-bar">
                <div
                    className="mini-quiz-progress-fill"
                    style={{ width: `${((current) / questions.length) * 100}%` }}
                />
            </div>

            <p className="mini-quiz-question">{q.question}</p>

            <div className="mini-quiz-options">
                {q.options.map(option => {
                    let cls = 'mini-quiz-option'
                    if (selected) {
                        if (option === q.correct) cls += ' correct'
                        else if (option === selected) cls += ' wrong'
                        else cls += ' dimmed'
                    }
                    return (
                        <button
                            key={option}
                            className={cls}
                            onClick={() => handleSelect(option)}
                            disabled={!!selected}
                        >
                            {option}
                        </button>
                    )
                })}
            </div>

            {selected && (
                <div className={`mini-quiz-explanation ${isCorrect ? 'correct' : 'wrong'}`}>
                    <strong>{isCorrect ? '✓ Riktig!' : '✗ Feil'}</strong>
                    {q.explanation.split('\n\n').map((paragraph, i) => (
                        <p key={i} style={{ margin: '0 0 8px 0' }}>{paragraph}</p>
                    ))}
                </div>
            )}

            {selected && (
                <button className="mini-quiz-btn-next" onClick={handleNext}>
                    {isLast ? 'Se resultatet' : 'Neste spørsmål →'}
                </button>
            )}
        </div>
    )
}
