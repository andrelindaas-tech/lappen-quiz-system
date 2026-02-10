// Hook Layer: Image Prefetching for Quiz
import { useEffect } from 'react'
import type { Question } from '../services/supabase'
import { prefetchImage } from '../utils/imagePrefetch'

/**
 * Custom hook that prefetches the next question's image
 * @param questions - Array of all quiz questions
 * @param currentIndex - Current question index
 * @param supabaseUrl - Supabase project URL
 */
export function useImagePrefetch(
    questions: Question[],
    currentIndex: number,
    supabaseUrl: string
) {
    useEffect(() => {
        // Don't prefetch if we're on the last question
        if (currentIndex >= questions.length - 1) {
            return
        }

        // Get the next question
        const nextQuestion = questions[currentIndex + 1]

        // Only prefetch if next question has an image
        if (nextQuestion?.image_name) {
            const imageUrl = `${supabaseUrl}/storage/v1/object/public/quiz-images/${nextQuestion.image_name}`

            // Prefetch in the background
            prefetchImage(imageUrl).catch(err => {
                console.warn('Prefetch failed:', err)
            })
        }
    }, [questions, currentIndex, supabaseUrl])
}

/**
 * Hook that prefetches multiple upcoming images (for aggressive prefetching)
 * @param questions - Array of all quiz questions
 * @param currentIndex - Current question index
 * @param supabaseUrl - Supabase project URL
 * @param lookahead - Number of images to prefetch ahead (default: 2)
 */
export function useAggressiveImagePrefetch(
    questions: Question[],
    currentIndex: number,
    supabaseUrl: string,
    lookahead: number = 2
) {
    useEffect(() => {
        // Calculate range of questions to prefetch
        const endIndex = Math.min(currentIndex + lookahead, questions.length - 1)

        for (let i = currentIndex + 1; i <= endIndex; i++) {
            const question = questions[i]

            if (question?.image_name) {
                const imageUrl = `${supabaseUrl}/storage/v1/object/public/quiz-images/${question.image_name}`

                // Prefetch in the background
                prefetchImage(imageUrl).catch(err => {
                    console.warn(`Prefetch failed for question ${i}:`, err)
                })
            }
        }
    }, [questions, currentIndex, supabaseUrl, lookahead])
}
