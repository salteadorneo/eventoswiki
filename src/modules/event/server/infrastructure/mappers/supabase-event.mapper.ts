import { EventTypes } from '@event/server/domain/value-objects/event-type'
import { Event } from '../../domain/event'
import type { SupabaseEventDto } from '../dtos/supabase-event.dto'

export class SupabaseEventMapper {
  static toDomain(supabaseEventDto: SupabaseEventDto): Event {
    return Event.fromPrimitives({
      slug: supabaseEventDto.slug,
      name: supabaseEventDto.name,
      shortDescription: supabaseEventDto.short_description,
      content: supabaseEventDto.content,
      startsAt: supabaseEventDto.starts_at,
      endsAt: supabaseEventDto.ends_at,
      cover: supabaseEventDto.cover,
      thumbnail: supabaseEventDto.thumbnail,
      updatedAt: supabaseEventDto.updated_at,
      color: supabaseEventDto.color,
      location: supabaseEventDto.location,
      type: SupabaseEventMapper.toEventTypes(supabaseEventDto.type),
      categories: supabaseEventDto.categories.map(category => category.name),
    })
  }

  private static toEventTypes(type: string): EventTypes {
    switch (type) {
      case 'ONLINE':
        return EventTypes.ONLINE
      case 'ONSITE':
        return EventTypes.ONSITE
      default:
        throw new Error('Invalid event type')
    }
  }

  static toDomainList(supabaseEventDtoList: SupabaseEventDto[]): Event[] {
    return supabaseEventDtoList.map(this.toDomain)
  }
}
