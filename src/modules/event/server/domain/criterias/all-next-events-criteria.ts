import { RelationalOperators } from '@/shared/domain/relational-operator'
import { EventCriteria } from './event-criteria'
import type { EventFilters } from './event-filters'
import type { EventOrder } from './event-order'

export class AllNextEventsCriteria extends EventCriteria {
  private constructor(
    public filters: Partial<EventFilters>,
    public order: Partial<EventOrder>,
    public limit?: number,
    public offset?: number,
  ) {
    super(filters, order, limit, offset)
  }

  static create(): AllNextEventsCriteria {
    const now = new Date()
    return new AllNextEventsCriteria(
      { startsAt: { operator: RelationalOperators.gte, value: now } },
      { startsAt: 'asc' },
    )
  }
}
