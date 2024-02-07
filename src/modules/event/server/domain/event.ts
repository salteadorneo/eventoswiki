import { Aggregate } from '@/shared/domain/ddd/aggregate'
import { EventCategories } from './value-objects/event-categories'
import { EventColor } from './value-objects/event-color'
import { EventContent } from './value-objects/event-content'
import { EventCover } from './value-objects/event-cover'
import { EventName } from './value-objects/event-name'
import { EventPeriod } from './value-objects/event-period'
import { EventShortDescription } from './value-objects/event-short-description'
import { EventSlug } from './value-objects/event-slug'
import { EventUpdatedAt } from './value-objects/event-updated-at'

interface EventPrimitives {
  slug: string
  name: string
  shortDescription: string
  content: string
  startsAt: string
  endsAt: string
  cover: string
  updatedAt: string
  color: string
  categories: Array<string>
}

export class Event extends Aggregate<EventSlug> {
  private constructor(
    private readonly slug: EventSlug,
    private readonly name: EventName,
    private readonly shortDescription: EventShortDescription,
    private readonly content: EventContent,
    private readonly period: EventPeriod,
    private readonly cover: EventCover,
    private readonly updatedAt: EventUpdatedAt,
    private readonly color: EventColor,
    private readonly categories: EventCategories,
  ) {
    super(slug)
  }

  static fromPrimitives(primitives: EventPrimitives): Event {
    return new Event(
      new EventSlug(primitives.slug),
      new EventName(primitives.name),
      new EventShortDescription(primitives.shortDescription),
      new EventContent(primitives.content),
      new EventPeriod({
        startsAt: new Date(primitives.startsAt),
        endsAt: new Date(primitives.endsAt),
      }),
      new EventCover(primitives.cover),
      new EventUpdatedAt(new Date(primitives.updatedAt)),
      new EventColor(primitives.color),
      new EventCategories(primitives.categories),
    )
  }

  toPrimitives(): EventPrimitives {
    return {
      slug: this.slug.value,
      name: this.name.value,
      shortDescription: this.shortDescription.value,
      content: this.content.value,
      startsAt: this.period.value.startsAt.toISOString(),
      endsAt: this.period.value.endsAt.toISOString(),
      cover: this.cover.value,
      updatedAt: this.updatedAt.value.toISOString(),
      color: this.color.value,
      categories: this.categories?.value,
    }
  }

  getName(): string {
    return this.name.value
  }

  getShortDescription(): string {
    return this.shortDescription.value
  }

  getCover(): string {
    return this.cover.value
  }

  getColor(): string {
    return this.color.value
  }

  getId(): string {
    return this.id.value
  }

  getCategories(): Array<string> {
    return this.categories?.value || []
  }

  getPeriodString(): string {
    return this.period.getPeriodString()
  }

  get path(): string {
    return this.slug.value
  }
}
