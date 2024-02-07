import { ValueObject } from '@/shared/domain/ddd/value-object'

export class EventCategories extends ValueObject<Array<string>> {
  static fromList(categories: Array<string>): EventCategories {
    return new EventCategories(categories)
  }
}
