import { createClient } from '@supabase/supabase-js'

let instance: SupabaseClient

export class SupabaseClient {
  private _client: ReturnType<typeof createClient>

  private constructor() {
    this._client = createClient(import.meta.env.SUPABASE_URL, import.meta.env.SUPABASE_ANON_KEY)
  }

  static getInstance() {
    if (!instance) {
      instance = new SupabaseClient()
    }

    return instance
  }

  get client() {
    return this._client
  }
}
