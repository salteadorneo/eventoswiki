import type { SupabaseEventCategoryDto } from './supabase-event-category.dto'
import type { SupabaseEventSocialNetworkDto } from './supabase-event-social-network.dto'

export interface SupabaseEventDto {
  slug: string
  name: string
  short_description: string
  content: string
  updated_at: string
  cover: string
  thumbnail: string
  color: string
  location: string
  type: string
  starts_at: string
  ends_at: string
  web: string
  categories: Array<SupabaseEventCategoryDto>
  events_social_networks: Array<SupabaseEventSocialNetworkDto>
  address?: string
  address_url?: string
}
