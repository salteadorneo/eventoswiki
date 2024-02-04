import type { SupabaseEventFiltersDto } from './supabase-event-filters.dto'
import type { SupabaseEventOrderDto } from './supabase-event-order.dto'

export class SupabaseEventCriteriaDto {
  filters?: Partial<SupabaseEventFiltersDto>
  order?: Partial<SupabaseEventOrderDto>
  limit?: number
  offset?: number
}
