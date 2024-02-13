import { ValueObject } from '@/shared/domain/ddd/value-object'
import { Datetime } from '@/shared/infrastructure/datetime/datetime'

export class EventPeriod extends ValueObject<{ startsAt: Date; endsAt: Date }> {
  static fromStrings(startsAt: string, endsAt: string): EventPeriod {
    return new EventPeriod({
      startsAt: new Date(startsAt),
      endsAt: new Date(endsAt),
    })
  }
  getPeriodString(): string {
    if (Datetime.areSameDay(this.value.startsAt, this.value.endsAt)) {
      return Datetime.toDateString(this.value.startsAt)
    }

    return `${Datetime.toDateString(this.value.startsAt)} - ${Datetime.toDateString(this.value.endsAt)}`
  }

  getPeriodWithTimeString(): string {
    return `${Datetime.toDateTimeString(this.value.startsAt)} - ${Datetime.toDateTimeString(this.value.endsAt)}`
  }
}
