export enum RelationalOperators {
  eq = 'eq',
  neq = 'neq',
  gt = 'gt',
  lt = 'lt',
  gte = 'gte',
  lte = 'lte',
  like = 'like',
  ilike = 'ilike',
  in = 'in',
  is = 'is',
  isnot = 'isnot',
  similar = 'similar',
  regex = 'regex',
  iregex = 'iregex',
}
export type RelationalOperator = keyof typeof RelationalOperators
