/**
 * Network Layer: Quiz Engine
 * Manages quiz state, scoring, and validation
 * Official Norwegian Theory Exam Criteria:
 * - 45 questions per exam
 * - Maximum 7 errors allowed to pass (84.4% pass rate)
 */

import type { Question } from '../services/supabase'

export interface QuizAnswer {
    questionId: number
    selectedAnswer: string
    isCorrect?: boolean
}

export interface QuizResult {
    correctCount: number
    totalCount: number
    errors: number
    passed: boolean
    percentage: number
    maxErrors: number
    timeTaken?: number  // Time taken in seconds
}

export class QuizEngine {
    private answers: QuizAnswer[] = []
    private readonly maxErrors: number

    constructor(maxErrors: number = 7) {
        this.maxErrors = maxErrors
    }

    /**
     * Record a user's answer to a question
     */
    recordAnswer(questionId: number, selectedAnswer: string): void {
        const existingIndex = this.answers.findIndex(a => a.questionId === questionId)

        if (existingIndex >= 0) {
            // Update existing answer if user changes their mind
            this.answers[existingIndex] = { questionId, selectedAnswer }
        } else {
            // Add new answer
            this.answers.push({ questionId, selectedAnswer })
        }

        console.log(`📝 Recorded answer for question ${questionId}: ${selectedAnswer}`)
    }

    /**
     * Calculate quiz results and mark correct/incorrect answers
     * Pass criteria varies by mode (Express: max 2 errors, Full: max 7 errors)
     */
    calculateScore(questions: Question[]): QuizResult {
        let correctCount = 0

        // Count correct answers and mark each answer
        for (const answer of this.answers) {
            const question = questions.find(q => q.id === answer.questionId)
            if (question && question.correct_answer === answer.selectedAnswer) {
                answer.isCorrect = true
                correctCount++
            } else {
                answer.isCorrect = false
            }
        }

        const totalCount = questions.length
        const errors = totalCount - correctCount
        const passed = errors <= this.maxErrors
        const percentage = Math.round((correctCount / totalCount) * 100)

        console.log(`📊 Quiz Results:`)
        console.log(`   Correct: ${correctCount}/${totalCount}`)
        console.log(`   Errors: ${errors}`)
        console.log(`   Max Errors Allowed: ${this.maxErrors}`)
        console.log(`   Percentage: ${percentage}%`)
        console.log(`   Status: ${passed ? '✅ Bestått' : '❌ Ikke bestått'}`)

        return {
            correctCount,
            totalCount,
            errors,
            passed,
            percentage,
            maxErrors: this.maxErrors
        }
    }

    /**
     * Get all incorrect answers with their question details
     */
    getIncorrectAnswers(questions: Question[]): Array<{ question: Question; userAnswer: string }> {
        return this.answers
            .filter(answer => answer.isCorrect === false)
            .map(answer => {
                const question = questions.find(q => q.id === answer.questionId)!
                return { question, userAnswer: answer.selectedAnswer }
            })
    }

    /**
     * Check if a specific answer was correct
     */
    isAnswerCorrect(questionId: number, questions: Question[]): boolean | null {
        const answer = this.answers.find(a => a.questionId === questionId)
        if (!answer) return null

        const question = questions.find(q => q.id === questionId)
        if (!question) return null

        return question.correct_answer === answer.selectedAnswer
    }

    /**
     * Get the user's answer for a question
     */
    getAnswer(questionId: number): string | null {
        const answer = this.answers.find(a => a.questionId === questionId)
        return answer?.selectedAnswer || null
    }

    /**
     * Reset quiz state for a new session
     */
    reset(): void {
        this.answers = []
        console.log('🔄 Quiz engine reset')
    }

    /**
     * Get current progress (how many questions answered)
     */
    getProgress(): number {
        return this.answers.length
    }

    /**
     * Get IDs of questions answered incorrectly
     * Used to sync with localStorage for Fokus mode
     */
    getIncorrectAnswerIds(): number[] {
        return this.answers
            .filter(answer => answer.isCorrect === false)
            .map(answer => answer.questionId)
    }
}
