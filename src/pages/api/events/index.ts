import { EventLocator } from '@/modules/event/server/di/event.locator'
import type { APIContext, APIRoute } from 'astro'

export const GET: APIRoute = async (_context: APIContext) => {
  try {
    const getEventsQuery = EventLocator.getEventsQuery()
    const response = await getEventsQuery.execute()

    return new Response(JSON.stringify(response.map(event => event.toPrimitives())), { status: 200 })
  } catch (error) {
    console.error(error)

    return new Response(JSON.stringify({ message: 'Error' }), { status: 500 })
  }
}
