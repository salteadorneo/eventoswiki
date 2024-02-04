import { SupabaseClient } from '@/shared/infrastructure/supabase/supabase-client'
import { GetEventsQuery } from '../application/get-events.query'
import { GetLastEventsQuery } from '../application/get-last-events.query'
import { GetNextEventsQuery } from '../application/get-next-events.query'
import { SupabaseEventRepository } from '../infrastructure/supabase-event.repository'

export class EventLocator {
  private static repository = () => {
    return new SupabaseEventRepository(SupabaseClient.getInstance())
  }

  static getEventsQuery = () => {
    return new GetEventsQuery(this.repository())
  }

  static getNextEventsQuery = () => {
    return new GetNextEventsQuery(this.repository())
  }

  static getLastEventsQuery = () => {
    return new GetLastEventsQuery(this.repository())
  }
}
