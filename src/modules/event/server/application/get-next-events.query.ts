import { Query } from '@/shared/application/query'
import { NextEventsCriteria } from '../domain/criterias/next-events-criteria'
import type { Event } from '../domain/event'
import type { EventRepository } from '../domain/repositories/event-repository'

interface GetNextEventsRequest {
  count: number
}
export class GetNextEventsQuery extends Query<Array<Event>, GetNextEventsRequest> {
  constructor(private readonly eventRepository: EventRepository) {
    super()
  }

  execute(param: GetNextEventsRequest): Promise<Event[]> {
    return this.eventRepository.match(NextEventsCriteria.withCount(param.count))
  }
}
