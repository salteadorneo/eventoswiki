import { RelationalOperators } from '@/shared/domain/relational-operator'
import { EventCriteria } from './event-criteria'
import type { EventFilters } from './event-filters'
import type { EventOrder } from './event-order'

export class LastEventsCriteria extends EventCriteria {
  private constructor(
    public filters: Partial<EventFilters>,
    public order: Partial<EventOrder>,
    public limit?: number,
    public offset?: number,
  ) {
    super(filters, order, limit, offset)
  }

  static withCount(count: number): LastEventsCriteria {
    const now = new Date()
    return new LastEventsCriteria(
      {
        endsAt: { operator: RelationalOperators.lte, value: now },
      },
      { endsAt: 'desc' },
      count,
    )
  }
}
