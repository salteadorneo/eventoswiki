import { RelationalOperators } from '@/shared/domain/relational-operator'
import { EventCriteria } from './event-criteria'
import type { EventFilters } from './event-filters'
import type { EventOrder } from './event-order'

export class NextEventsCriteria extends EventCriteria {
  private constructor(
    public filters: Partial<EventFilters>,
    public order: Partial<EventOrder>,
    public limit?: number,
    public offset?: number,
  ) {
    super(filters, order, limit, offset)
  }

  static withCount(count: number): NextEventsCriteria {
    const now = new Date()
    return new NextEventsCriteria(
      { startsAt: { operator: RelationalOperators.gte, value: now } },
      { startsAt: 'asc' },
      count,
    )
  }
}
