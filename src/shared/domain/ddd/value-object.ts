export abstract class ValueObject<Value> {
  constructor(public readonly value: Value) {
    this.value = value
  }

  equals(valueObject: ValueObject<Value>): boolean {
    return this.value === valueObject.value
  }
}
