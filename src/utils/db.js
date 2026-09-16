const ARRAY_FIELDS = new Set([
  'aliases', 'organizations', 'allies', 'enemies', 'loveInterests',
  'professions', 'weaponsOfChoice', 'fightingStyles',
  'pioneers', 'notableUsers', 'techniques', 'advancedTechniques',
  'specializations', 'strengths', 'weaknesses',
  'writtenBy', 'notableLeaders', 'notableMembers',
  'founders', 'leaders', 'affiliations', 'headquarters',
])

export function parseRow(row) {
  if (!row) return null
  const out = {}
  for (const [k, v] of Object.entries(row)) {
    out[k] = ARRAY_FIELDS.has(k) && typeof v === 'string' ? JSON.parse(v || '[]') : v
  }
  return out
}

export function parseRows(rows) {
  return rows.map(parseRow)
}
