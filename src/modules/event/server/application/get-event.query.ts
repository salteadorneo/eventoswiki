import { Query } from '@/shared/application/query'
import type { Event } from '../domain/event'
import type { EventRepository } from '../domain/repositories/event-repository'
import { EventSlug } from '../domain/value-objects/event-slug'

interface GetEventRequest {
  slug: string
}

export class GetEventQuery extends Query<Event, GetEventRequest> {
  constructor(private readonly eventRepository: EventRepository) {
    super()
  }

  execute(param: GetEventRequest): Promise<Event> {
    const id = new EventSlug(param.slug)
    return this.eventRepository.find(id)
  }
}
