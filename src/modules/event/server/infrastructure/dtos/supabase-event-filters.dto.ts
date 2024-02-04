import type { RelationalOperator } from '@/shared/domain/relational-operator'

export interface SupabaseEventFiltersDto {
  starts_at: {
    operator: RelationalOperator
    value: string
  }
  ends_at: {
    operator: RelationalOperator
    value: string
  }
}
