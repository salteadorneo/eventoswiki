import type { EventOrder } from '@event/server/domain/criterias/event-order'
import type { SupabaseEventOrderDto } from '../dtos/supabase-event-order.dto'

export class SupabaseEventOrderMapper {
  static toDto(order: Partial<EventOrder>): Partial<SupabaseEventOrderDto> {
    return {
      starts_at: order.startsAt,
      ends_at: order.endsAt,
    }
  }
}
