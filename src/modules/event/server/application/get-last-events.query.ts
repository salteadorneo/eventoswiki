import { Query } from '@/shared/application/query'
import { LastEventsCriteria } from '../domain/criterias/last-events-criteria'
import type { Event } from '../domain/event'
import type { EventRepository } from '../domain/repositories/event-repository'

interface GetLastEventsRequest {
  count: number
}
export class GetLastEventsQuery extends Query<Array<Event>, GetLastEventsRequest> {
  constructor(private readonly eventRepository: EventRepository) {
    super()
  }

  execute(param: GetLastEventsRequest): Promise<Event[]> {
    return this.eventRepository.match(LastEventsCriteria.withCount(param.count))
  }
}
