import { Query } from '@/shared/application/query'
import type { Event } from '../domain/event'
import type { EventRepository } from '../domain/repositories/event-repository'

export class GetEventsQuery extends Query<Array<Event>> {
  constructor(private readonly eventRepository: EventRepository) {
    super()
  }

  execute(param: void): Promise<Event[]> {
    return this.eventRepository.findAll()
  }
}
