import { FetchHttpClient } from '@/shared/infrastructure/http/fetch-http-client'
import { GetEventsQuery } from '../application/get-events.query'
import { HttpEventRepository } from '../infrastructure/http-event.repository'

export class EventLocator {
  static eventRepository = new HttpEventRepository(FetchHttpClient.getInstance())

  static getNextEventsQuery() {
    return new GetEventsQuery(this.eventRepository)
  }
}
