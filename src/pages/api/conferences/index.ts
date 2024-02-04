import type { APIRoute } from 'astro'

export const GET: APIRoute = context => {
  return new Response('Hello, world!')
}
