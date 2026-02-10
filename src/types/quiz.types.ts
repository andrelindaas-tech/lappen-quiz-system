// Shared type definitions for quiz modes and results

export type QuizMode = {
    name: string
    questionCount: number
    maxErrors: number
    description: string
    category?: string  // Optional: filter questions by category (e.g., 'skilt')
    isFokusMode?: boolean  // Optional: flag to identify Fokus mode for special handling
    timeLimitMinutes?: number  // Optional: time limit in minutes
    useTimer?: boolean  // Optional: whether timer is enabled for this session
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
