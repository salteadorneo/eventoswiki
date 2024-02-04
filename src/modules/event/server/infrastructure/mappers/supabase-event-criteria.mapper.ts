import type { EventCriteria } from '@event/server/domain/criterias/event-criteria'
import type { SupabaseEventCriteriaDto } from '../dtos/supabase-event-criteria.dto'
import { SupabaseEventFiltersMapper } from './supabase-event-filters.mapper'
import { SupabaseEventOrderMapper } from './supabase-event-order.mapper'

export class SupabaseEventCriteriaMapper {
  static toDto(criteria: EventCriteria): SupabaseEventCriteriaDto {
    return {
      filters: criteria.filters ? SupabaseEventFiltersMapper.toDto(criteria.filters) : undefined,
      order: criteria.order ? SupabaseEventOrderMapper.toDto(criteria.order) : undefined,
      limit: criteria.limit,
      offset: criteria.offset,
    }
  }
}
