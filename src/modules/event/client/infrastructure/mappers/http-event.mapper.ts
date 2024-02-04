import { Event } from '../../domain/event'
import type { HttpEventDto } from '../dtos/http-event.dto'

export class HttpEventMapper {
  static toDomain(dto: HttpEventDto): Event {
    return Event.fromPrimitives({
      slug: dto.slug,
      name: dto.name,
      shortDescription: dto.shortDescription,
      content: dto.content,
      startsAt: dto.startsAt,
      endsAt: dto.endsAt,
      cover: dto.cover,
      updatedAt: dto.updatedAt,
      color: dto.color,
    })
  }

  static toDomainList(dtos: Array<HttpEventDto>): Array<Event> {
    return dtos.map(this.toDomain)
  }
}
