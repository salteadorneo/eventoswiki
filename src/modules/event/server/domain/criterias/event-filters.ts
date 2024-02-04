import type { RelationalOperator } from '@/shared/domain/relational-operator'

export interface EventFilters {
  startsAt: {
    operator: RelationalOperator
    value: Date
  }
  endsAt: {
    operator: RelationalOperator
    value: Date
  }
}
