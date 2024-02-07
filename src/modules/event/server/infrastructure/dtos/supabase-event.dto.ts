import type { SupabaseEventCategoryDto } from './supabase-event-category.dto'

export interface SupabaseEventDto {
  slug: string
  name: string
  short_description: string
  content: string
  updated_at: string
  cover: string
  color: string
  starts_at: string
  ends_at: string
  categories: Array<SupabaseEventCategoryDto>
}
