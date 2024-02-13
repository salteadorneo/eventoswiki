import type { OrderDirection } from '@/shared/domain/criteria/order-direction'

export interface EventOrder {
  startsAt: OrderDirection
  endsAt: OrderDirection
}
