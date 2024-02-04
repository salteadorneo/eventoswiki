import type { FindableAllRepository } from '@/shared/domain/repository/findable-all-repository'
import type { Event } from '../event'

export interface EventRepository extends FindableAllRepository<Event> {}
