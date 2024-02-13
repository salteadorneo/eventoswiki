import { Aggregate } from '@/shared/domain/ddd/aggregate'
import { EventCategories } from './value-objects/event-categories'
import { EventColor } from './value-objects/event-color'
import { EventContent } from './value-objects/event-content'
import { EventCover } from './value-objects/event-cover'
import { EventLocation } from './value-objects/event-location'
import { EventName } from './value-objects/event-name'
import { EventPeriod } from './value-objects/event-period'
import { EventShortDescription } from './value-objects/event-short-description'
import { EventSlug } from './value-objects/event-slug'
import type { EventSocialNetwork, EventSocialNetworkPrimitives } from './value-objects/event-social-network'
import { EventSocialNetworks } from './value-objects/event-social-networks'
import { EventThumbnail } from './value-objects/event-thumbnail'
import { EventType, EventTypes } from './value-objects/event-type'
import { EventUpdatedAt } from './value-objects/event-updated-at'
import { EventWeb } from './value-objects/event-web'

interface EventPrimitives {
  slug: string
  name: string
  shortDescription: string
  content: string
  startsAt: string
  endsAt: string
  cover: string
  thumbnail: string
  updatedAt: string
  color: string
  type: EventTypes
  location: string
  categories: Array<string>
  socialNetworks: Array<EventSocialNetworkPrimitives>
  web?: string
}

export class Event extends Aggregate<EventSlug> {
  private constructor(
    private readonly slug: EventSlug,
    private readonly name: EventName,
    private readonly shortDescription: EventShortDescription,
    private readonly content: EventContent,
    private readonly period: EventPeriod,
    private readonly cover: EventCover,
    private readonly thumbnail: EventThumbnail,
    private readonly updatedAt: EventUpdatedAt,
    private readonly color: EventColor,
    private readonly type: EventType,
    private readonly location: EventLocation,
    private readonly categories: EventCategories,
    private readonly socialNetworks: EventSocialNetworks,
    private readonly web: EventWeb,
  ) {
    super(slug)
  }

  static fromPrimitives(primitives: EventPrimitives): Event {
    return new Event(
      new EventSlug(primitives.slug),
      new EventName(primitives.name),
      new EventShortDescription(primitives.shortDescription),
      new EventContent(primitives.content),
      EventPeriod.fromStrings(primitives.startsAt, primitives.endsAt),
      new EventCover(primitives.cover),
      new EventThumbnail(primitives.thumbnail),
      EventUpdatedAt.fromString(primitives.updatedAt),
      new EventColor(primitives.color),
      new EventType(primitives.type),
      new EventLocation(primitives.location),
      new EventCategories(primitives.categories),
      EventSocialNetworks.fromPrimitivesList(primitives.socialNetworks),
      new EventWeb(primitives.web),
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
      thumbnail: this.thumbnail.value,
      updatedAt: this.updatedAt.value.toISOString(),
      color: this.color.value,
      type: this.type.value,
      location: this.location.value,
      categories: this.categories.value,
      web: this.web?.value,
      socialNetworks: this.socialNetworks.toPrimitivesList(),
    }
  }

  getId(): string {
    return this.id.value
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

  getThumbnail(): string {
    return this.thumbnail.value
  }

  getColor(): string {
    return this.color.value
  }

  getLocation(): string {
    return this.location.value
  }

  getCategories(): Array<string> {
    return this.categories.value
  }

  getPeriodString(): string {
    return this.period.getPeriodString()
  }

  getPeriodWithTimeString(): string {
    return this.period.getPeriodWithTimeString()
  }

  getContent(): string {
    return this.content.value
  }

  getSocialNetworks(): Array<EventSocialNetwork> {
    return this.socialNetworks.value
  }

  getWeb(): string {
    return this.web.value || ''
  }

  hasWeb(): boolean {
    return this.web.value !== undefined
  }

  get path(): string {
    return this.slug.value
  }

  isOnline(): boolean {
    return this.type.isOnline()
  }
}
