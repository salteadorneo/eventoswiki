import type { FindableAllRepository } from '@/shared/domain/repository/findable-all-repository'
import type { MatcheableRepository } from '@/shared/domain/repository/matcheable-repository'
import type { EventCriteria } from '../criterias/event-criteria'
import type { Event } from '../event'

export interface EventRepository extends FindableAllRepository<Event>, MatcheableRepository<EventCriteria, Event> {}
