import type { SocialNetwork } from '@/modules/social-network/server/domain/social-network'
import type { EventSocialNetworkPrimitives } from '@event/server/domain/value-objects/event-social-network'
import { EventTypes } from '@event/server/domain/value-objects/event-type'
import { Event } from '../../domain/event'
import type { SupabaseEventSocialNetworkDto } from '../dtos/supabase-event-social-network.dto'
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
      web: supabaseEventDto.web,
      location: supabaseEventDto.location,
      type: SupabaseEventMapper.toEventTypes(supabaseEventDto.type),
      categories: supabaseEventDto.categories.map(category => category.name),
      socialNetworks: SupabaseEventMapper.toEventSocialNetworks(supabaseEventDto.events_social_networks),
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

  private static toEventSocialNetworks(
    socialNetworksDto: Array<SupabaseEventSocialNetworkDto>,
  ): Array<EventSocialNetworkPrimitives> {
    return socialNetworksDto.map(socialNetworkDto => ({
      socialNetwork: socialNetworkDto.social_networks_network as SocialNetwork,
      url: socialNetworkDto.url,
    }))
  }

  static toDomainList(supabaseEventDtoList: SupabaseEventDto[]): Event[] {
    return supabaseEventDtoList.map(this.toDomain)
  }
}
