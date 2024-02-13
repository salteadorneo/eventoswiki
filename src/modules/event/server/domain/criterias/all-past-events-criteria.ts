import { RelationalOperators } from '@/shared/domain/criteria/relational-operator'
import { EventCriteria } from './event-criteria'
import type { EventFilters } from './event-filters'
import type { EventOrder } from './event-order'

export class AllPastEventsCriteria extends EventCriteria {
  private constructor(
    public filters: Partial<EventFilters>,
    public order: Partial<EventOrder>,
    public limit?: number,
    public offset?: number,
  ) {
    super(filters, order, limit, offset)
  }

  static create(): AllPastEventsCriteria {
    const now = new Date()
    return new AllPastEventsCriteria({ endsAt: { operator: RelationalOperators.lte, value: now } }, { endsAt: 'desc' })
  }
}
