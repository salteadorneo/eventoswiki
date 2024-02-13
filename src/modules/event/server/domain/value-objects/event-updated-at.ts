import { ValueObject } from '@/shared/domain/ddd/value-object'

export class EventUpdatedAt extends ValueObject<Date> {
  static fromString(updatedAt: string): EventUpdatedAt {
    return new EventUpdatedAt(new Date(updatedAt))
  }
}
