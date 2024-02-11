import { SupabaseClient } from '@/shared/infrastructure/supabase/supabase-client'
import { GetAllNextEventsQuery } from '../application/get-all-next-events.query'
import { GetAllPastEventsQuery } from '../application/get-all-past-events.query'
import { GetEventQuery } from '../application/get-event.query'
import { GetLastEventsQuery } from '../application/get-last-events.query'
import { GetNextEventsQuery } from '../application/get-next-events.query'
import { SupabaseEventRepository } from '../infrastructure/supabase-event.repository'

export class EventLocator {
  private static repository = () => {
    return new SupabaseEventRepository(SupabaseClient.getInstance())
  }

  static getNextEventsQuery = () => {
    return new GetNextEventsQuery(this.repository())
  }

  static getLastEventsQuery = () => {
    return new GetLastEventsQuery(this.repository())
  }

  static getAllNextEventsQuery = () => {
    return new GetAllNextEventsQuery(this.repository())
  }

  static getAllPastEventsQuery = () => {
    return new GetAllPastEventsQuery(this.repository())
  }

  static getEventQuery = () => {
    return new GetEventQuery(this.repository())
  }
}
