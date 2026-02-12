// Auto-generated TypeScript types for Supabase schema
// Based on standard quiz database structure

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      questions: {
        Row: {
          id: number
          question_text: string
          options: string[] // Array of answer options
          correct_answer: string // Full text of correct answer
          category: string
          image_name: string | null // Image filename, not URL
          explanation: string
        }
        Insert: {
          id?: number
          question_text: string
          options: string[]
          correct_answer: string
          category?: string
          image_name?: string | null
          explanation?: string
        }
        Update: {
          id?: number
          question_text?: string
          options?: string[]
          correct_answer?: string
          category?: string
          image_name?: string | null
          explanation?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_random_questions: {
        Args: {
          p_count: number
        }
        Returns: Database['public']['Tables']['questions']['Row'][]
      }
      get_random_questions_by_category: {
        Args: {
          p_count: number
          p_category: string
        }
        Returns: Database['public']['Tables']['questions']['Row'][]
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}
