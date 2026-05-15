// Task Layer: Supabase Client Initialization
import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/database.types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('❌ Missing Supabase environment variables. Check .env.local file.')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Type exports for convenience
export type Question = Database['public']['Tables']['questions']['Row']

export async function logQuizAnswer({
  questionId,
  topic,
  selectedAnswer,
  correctAnswer,
  isCorrect,
  sessionId,
}: {
  questionId: number;
  topic: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  sessionId: string;
}) {
  try {
    // We cast to any because quiz_answer_events is a new table and might not be in the generated Database types yet
    const { error } = await (supabase.from("quiz_answer_events" as any) as any).insert({
      question_id: questionId,
      topic: topic,
      selected_answer: selectedAnswer,
      correct_answer: correctAnswer,
      is_correct: isCorrect,
      session_id: sessionId,
    });
    
    if (error) {
      console.error('❌ Failed to log answer to Supabase:', error.message);
    }
  } catch (err) {
    console.error('❌ Supabase logging error:', err);
  }
}

export async function getMostMissedQuestions({
  minAttempts = 30,
  limitCount = 10,
  topicFilter = null,
}: {
  minAttempts?: number;
  limitCount?: number;
  topicFilter?: string | null;
} = {}) {
  const { data, error } = await supabase.rpc(
    "get_most_missed_questions",
    {
      min_attempts: minAttempts,
      limit_count: limitCount,
      topic_filter: topicFilter,
    } as any
  );
  if (error) throw error;
  return data;
}
