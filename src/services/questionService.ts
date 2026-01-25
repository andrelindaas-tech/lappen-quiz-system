// Task Layer: Question Data Service
import { supabase, type Question } from './supabase'

/**
 * Fetches random questions from Supabase
 * Self-healing: Handles errors gracefully with descriptive messages
 */
export async function fetchRandomQuestions(count: number): Promise<Question[]> {
  try {
    console.log(`📡 Fetching questions from Supabase...`)

    // Fetch all questions from database
    const { data, error } = await supabase
      .from('questions')
      .select('*')

    if (error) {
      console.error('❌ Supabase query error:', error)
      throw new Error(`Database feil: ${error.message}`)
    }

    if (!data || data.length === 0) {
      throw new Error('Ingen spørsmål funnet i databasen. Vennligst legg til spørsmål først.')
    }

    console.log(`✅ Loaded ${data.length} questions from database`)

    if (data.length < count) {
      console.warn(`⚠️ Requested ${count} questions but only ${data.length} available`)
      // Return all available questions if less than requested
      return shuffleArray(data)
    }

    // Shuffle and return requested count
    const shuffled = shuffleArray(data)
    return shuffled.slice(0, count)

  } catch (err) {
    // Self-healing: Log error for debugging but re-throw for UI handling
    console.error('💥 Question service error:', err)

    if (err instanceof Error) {
      throw err
    }

    throw new Error('En ukjent feil oppstod ved lasting av spørsmål.')
  }
}

/**
 * Fisher-Yates shuffle algorithm for randomizing questions
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * Get total count of questions in database
 * Useful for validation and UI feedback
 */
export async function getQuestionCount(): Promise<number> {
  try {
    const { count, error } = await supabase
      .from('questions')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('❌ Count query error:', error)
      return 0
    }

    return count || 0
  } catch (err) {
    console.error('💥 Error getting question count:', err)
    return 0
  }
}
