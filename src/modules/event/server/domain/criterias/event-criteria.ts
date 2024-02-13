import type { Criteria } from '@/shared/domain/criteria/criteria'
import type { EventFilters } from './event-filters'
import type { EventOrder } from './event-order'

export class EventCriteria implements Criteria<Partial<EventFilters>, Partial<EventOrder>> {
  constructor(
    public filters?: Partial<EventFilters>,
    public order?: Partial<EventOrder>,
    public limit?: number,
    public offset?: number,
  ) {}

  static create(filters: Partial<EventFilters>, order: Partial<EventOrder>): EventCriteria {
    return new EventCriteria(filters, order)
  }
}
