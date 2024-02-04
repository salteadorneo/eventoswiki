import type { HttpClient } from '@/shared/infrastructure/http/http-client'

let instance: HttpClient
export class FetchHttpClient implements HttpClient {
  private readonly _fetch = fetch
  private constructor() {}

  static getInstance() {
    if (!instance) {
      instance = new FetchHttpClient()
    }

    return instance
  }

  get<T>(url: string): Promise<T> {
    return fetch(url).then(response => response.json())
  }
}
