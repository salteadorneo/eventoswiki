import type { HttpClient } from '@/shared/infrastructure/http/http-client'
import type { Event } from '../domain/event'
import type { EventRepository } from '../domain/repositories/event-repository'
import type { HttpEventDto } from './dtos/http-event.dto'
import { HttpEventMapper } from './mappers/http-event.mapper'

export class HttpEventRepository implements EventRepository {
  private readonly EVENTS_PATH = '/events'

  constructor(private readonly httpClient: HttpClient) {}

  async findAll(): Promise<Array<Event>> {
    const response = await this.httpClient.get<Array<HttpEventDto>>(this.EVENTS_PATH)

    return HttpEventMapper.toDomainList(response)
  }
}
