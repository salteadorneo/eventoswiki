import type { OrderDirection } from '@/shared/domain/order-direction'

export interface SupabaseEventOrderDto {
  starts_at: OrderDirection
  ends_at: OrderDirection
}
