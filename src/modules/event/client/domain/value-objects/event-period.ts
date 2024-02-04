import { ValueObject } from '@/shared/domain/ddd/value-object'

export class EventPeriod extends ValueObject<{ startsAt: Date; endsAt: Date }> {}
