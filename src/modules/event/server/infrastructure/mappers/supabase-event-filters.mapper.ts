import type { EventFilters } from '@event/server/domain/criterias/event-filters'
import type { SupabaseEventFiltersDto } from '../dtos/supabase-event-filters.dto'

export class SupabaseEventFiltersMapper {
  static toDto(filters: Partial<EventFilters>): Partial<SupabaseEventFiltersDto> {
    const starts_at = filters.startsAt
      ? { operator: filters.startsAt.operator, value: filters.startsAt.value.toUTCString() }
      : undefined
    const ends_at = filters.endsAt
      ? { operator: filters.endsAt.operator, value: filters.endsAt.value.toUTCString() }
      : undefined

    return {
      starts_at,
      ends_at,
    }
  }
}
