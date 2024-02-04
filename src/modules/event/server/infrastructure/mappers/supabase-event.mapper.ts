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
      updatedAt: supabaseEventDto.updated_at,
      color: supabaseEventDto.color,
    })
  }

  static toDomainList(supabaseEventDtoList: SupabaseEventDto[]): Event[] {
    return supabaseEventDtoList.map(this.toDomain)
  }
}
