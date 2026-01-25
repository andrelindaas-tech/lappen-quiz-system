// Shared type definitions for quiz modes and results

export type QuizMode = {
    name: string
    questionCount: number
    maxErrors: number
    description: string
}

export interface QuizResult {
    correctCount: number
    totalCount: number
    errors: number
    passed: boolean
    percentage: number
    maxErrors: number
}
