import { ValueObject } from '@/shared/domain/ddd/value-object'
import { EventSocialNetwork, type EventSocialNetworkPrimitives } from './event-social-network'

export class EventSocialNetworks extends ValueObject<Array<EventSocialNetwork>> {
  static fromPrimitivesList(socialNetworks: Array<EventSocialNetworkPrimitives>): EventSocialNetworks {
    return new EventSocialNetworks(socialNetworks.map(EventSocialNetwork.fromPrimitives))
  }

  toPrimitivesList(): Array<EventSocialNetworkPrimitives> {
    return this.value.map(socialNetwork => socialNetwork.toPrimitives())
  }
}
