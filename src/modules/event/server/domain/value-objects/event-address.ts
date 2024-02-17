import { ValueObject } from '@/shared/domain/ddd/value-object'

interface EventAddressPrimitives {
  address: string
  url: string
}

export class EventAddress extends ValueObject<{ address: string; url: URL }> {
  static fromStrings(address: string, url: string): EventAddress {
    return new EventAddress({
      address,
      url: new URL(url),
    })
  }

  toPrimitives(): EventAddressPrimitives {
    return {
      address: this.value.address,
      url: this.value.url.toString(),
    }
  }

  getAddressUrl(): URL {
    return this.value.url
  }

  getAddress(): string {
    return this.value.address
  }
}
