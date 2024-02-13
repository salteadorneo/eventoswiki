import type { SocialNetwork } from '@/modules/social-network/server/domain/social-network'
import { ValueObject } from '@/shared/domain/ddd/value-object'

export interface EventSocialNetworkPrimitives {
  socialNetwork: SocialNetwork
  url: string
}
export class EventSocialNetwork extends ValueObject<{ socialNetwork: SocialNetwork; url: URL }> {
  static fromPrimitives(primitives: EventSocialNetworkPrimitives): EventSocialNetwork {
    const { socialNetwork, url } = primitives
    return new EventSocialNetwork({ socialNetwork, url: new URL(url) })
  }

  getSocialNetwork(): SocialNetwork {
    return this.value.socialNetwork
  }

  getUrl(): URL {
    return this.value.url
  }

  toPrimitives(): EventSocialNetworkPrimitives {
    return {
      socialNetwork: this.value.socialNetwork,
      url: this.value.url.toString(),
    }
  }
}
