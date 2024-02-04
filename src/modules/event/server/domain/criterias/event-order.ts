import type { OrderDirection } from '@/shared/domain/order-direction'

export interface EventOrder {
  startsAt: OrderDirection
  endsAt: OrderDirection
}
