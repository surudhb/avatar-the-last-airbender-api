const DEFAULT_LIMIT = 50
const MAX_LIMIT = 100

export function getPagination(query) {
  const limit = Math.min(Math.max(parseInt(query.limit ?? DEFAULT_LIMIT, 10) || DEFAULT_LIMIT, 1), MAX_LIMIT)
  const offset = Math.max(parseInt(query.offset ?? 0, 10) || 0, 0)
  return { limit, offset }
}
