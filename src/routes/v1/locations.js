import { Hono } from 'hono'
import { isAlphabetical } from '../../utils/Validator.js'
import { parseRow, parseRows } from '../../utils/db.js'
import { getPagination } from '../../utils/pagination.js'

const app = new Hono()

app.get('/', async (c) => {
  const { limit, offset } = getPagination(c.req.query())
  const { results } = await c.env.DB.prepare(
    'SELECT * FROM locations LIMIT ? OFFSET ?'
  ).bind(limit, offset).all()
  return c.json(parseRows(results))
})

app.get('/:location', async (c) => {
  const location = c.req.param('location')
  if (!isAlphabetical(location)) {
    return c.json({ error: `Invalid input: ${location}. Location names should only contain alphabetical characters.` }, 400)
  }
  const row = await c.env.DB.prepare('SELECT * FROM locations WHERE name = ? COLLATE NOCASE').bind(location).first()
  if (!row) return c.json({ error: 'Not found' }, 404)
  return c.json(parseRow(row))
})

export default app
