import { Entity } from './entity'
import type { ValueObject } from './value-object'

export abstract class Aggregate<Id extends ValueObject<Id['value']>> extends Entity<Id> {}
