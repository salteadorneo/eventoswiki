import { SupabaseClient } from '@/shared/infrastructure/supabase/supabase-client'
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
}
