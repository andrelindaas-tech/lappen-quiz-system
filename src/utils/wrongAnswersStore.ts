/**
 * localStorage utility for managing wrong answers (Fokus mode)
 * Tracks question IDs that were answered incorrectly
 */

const STORAGE_KEY = 'lappen_wrong_answers'

export interface WrongAnswersStore {
    questionIds: number[]
}

/**
 * Get all wrong answer question IDs from localStorage
 */
export function getWrongAnswers(): number[] {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (!stored) return []

        const data: WrongAnswersStore = JSON.parse(stored)
        return data.questionIds || []
    } catch (error) {
        console.error('❌ Error reading wrong answers from localStorage:', error)
        return []
    }
}

/**
 * Get count of wrong answers
 */
export function getWrongAnswersCount(): number {
    return getWrongAnswers().length
}

/**
 * Add a question ID to wrong answers (if not already present)
 */
export function addWrongAnswer(questionId: number): void {
    try {
        const current = getWrongAnswers()

        // Only add if not already in the list
        if (!current.includes(questionId)) {
            current.push(questionId)
            const data: WrongAnswersStore = { questionIds: current }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
            console.log(`➕ Added question ${questionId} to Fokus mode`)
        }
    } catch (error) {
        console.error('❌ Error adding wrong answer to localStorage:', error)
    }
}

/**
 * Remove a question ID from wrong answers (when answered correctly)
 */
export function removeWrongAnswer(questionId: number): void {
    try {
        const current = getWrongAnswers()
        const filtered = current.filter(id => id !== questionId)

        const data: WrongAnswersStore = { questionIds: filtered }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        console.log(`✅ Removed question ${questionId} from Fokus mode`)
    } catch (error) {
        console.error('❌ Error removing wrong answer from localStorage:', error)
    }
}

/**
 * Clear all wrong answers (when Fokus mode is completed or reset)
 */
export function clearWrongAnswers(): void {
    try {
        localStorage.removeItem(STORAGE_KEY)
        console.log('🧹 Cleared all wrong answers from Fokus mode')
    } catch (error) {
        console.error('❌ Error clearing wrong answers from localStorage:', error)
    }
}

/**
 * Add multiple wrong answer IDs at once
 */
export function addWrongAnswers(questionIds: number[]): void {
    try {
        const current = getWrongAnswers()

        // Add new IDs that aren't already in the list
        questionIds.forEach(id => {
            if (!current.includes(id)) {
                current.push(id)
            }
        })

        const data: WrongAnswersStore = { questionIds: current }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        console.log(`➕ Added ${questionIds.length} questions to Fokus mode`)
    } catch (error) {
        console.error('❌ Error adding multiple wrong answers to localStorage:', error)
    }
}
