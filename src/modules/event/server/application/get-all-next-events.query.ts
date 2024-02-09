import { Query } from '@/shared/application/query'
import { AllNextEventsCriteria } from '../domain/criterias/all-next-events-criteria'
import type { Event } from '../domain/event'
import type { EventRepository } from '../domain/repositories/event-repository'

export class GetAllNextEventsQuery extends Query<Array<Event>> {
  constructor(private readonly eventRepository: EventRepository) {
    super()
  }

  execute(): Promise<Event[]> {
    return this.eventRepository.match(AllNextEventsCriteria.create())
  }
}
