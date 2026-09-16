import { Hono } from 'hono'
import { isAlphabetical } from '../../utils/Validator.js'
import { parseRow, parseRows } from '../../utils/db.js'

const app = new Hono()

app.get('/', async (c) => {
  const { results } = await c.env.DB.prepare('SELECT * FROM bending').all()
  return c.json(parseRows(results))
})

app.get('/:form', async (c) => {
  const form = c.req.param('form')
  if (!isAlphabetical(form)) {
    return c.json({ error: `Invalid input: ${form}. Bending type should only contain alphabetical characters.` }, 400)
  }
  const row = await c.env.DB.prepare('SELECT * FROM bending WHERE name = ?').bind(form.toLowerCase()).first()
  if (!row) return c.json({ error: 'Not found' }, 404)
  return c.json(parseRow(row))
})

export default app
