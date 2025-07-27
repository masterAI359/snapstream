import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface User {
  id: string
  email: string
  name: string
  user_type: "user" | "creator" | "admin"
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface Video {
  id: string
  title: string
  description: string
  creator_id: string
  category: string
  price: number
  duration: string
  file_size: string
  file_url: string
  thumbnail_url: string
  status: "pending" | "approved" | "rejected"
  views: number
  downloads: number
  tags: string[]
  created_at: string
  updated_at: string
}

export interface Download {
  id: string
  user_id: string
  video_id: string
  downloaded_at: string
}

export interface Payment {
  id: string
  user_id: string
  video_id: string
  amount: number
  status: "pending" | "completed" | "failed"
  created_at: string
}
