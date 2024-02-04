import type { ValueObject } from './value-object'

export abstract class Entity<Id extends ValueObject<Id['value']>> {
  constructor(protected readonly id: Id) {
    this.id = id
  }

  equals(entity: Entity<Id>): boolean {
    return this.id.equals(entity.id)
  }
}
