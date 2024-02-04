import { Query } from '@/shared/application/query'
import type { Event } from '../domain/event'
import type { EventRepository } from '../domain/repositories/event-repository'

export class GetEventsQuery extends Query<Array<Event>> {
  constructor(private eventRepository: EventRepository) {
    super()
  }

  execute(): Promise<Event[]> {
    return this.eventRepository.findAll()
  }
}
