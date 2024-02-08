import { ValueObject } from '@/shared/domain/ddd/value-object'

export enum EventTypes {
  ONLINE = 'ONLINE',
  ONSITE = 'ONSITE',
}
export class EventType extends ValueObject<EventTypes> {
  isOnline(): boolean {
    return this.value === EventTypes.ONLINE
  }
}
