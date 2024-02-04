import type { Criteria } from '../criteria'

export interface MatcheableRepository<C extends Criteria<C['filters'], C['order']>, Value> {
  match(criteria: C): Promise<Array<Value>>
}
