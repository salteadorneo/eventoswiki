import { Query } from '@/shared/application/query'
import { AllPastEventsCriteria } from '../domain/criterias/all-past-events-criteria'
import type { Event } from '../domain/event'
import type { EventRepository } from '../domain/repositories/event-repository'

export class GetAllPastEventsQuery extends Query<Array<Event>> {
  constructor(private readonly eventRepository: EventRepository) {
    super()
  }

  execute(): Promise<Event[]> {
    return this.eventRepository.match(AllPastEventsCriteria.create())
  }
}
