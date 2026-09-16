import { Hono } from 'hono'
import { isAlphabetical } from '../../utils/Validator.js'
import { parseRow, parseRows } from '../../utils/db.js'

const app = new Hono()

app.get('/', async (c) => {
  const { results } = await c.env.DB.prepare('SELECT * FROM characters').all()
  return c.json(parseRows(results))
})

app.get('/:name', async (c) => {
  const name = c.req.param('name')
  if (!isAlphabetical(name)) {
    return c.json({ error: `Invalid input: ${name}. Name should only contain alphabetical characters.` }, 400)
  }
  const row = await c.env.DB.prepare('SELECT * FROM characters WHERE name = ? COLLATE NOCASE').bind(name).first()
  if (!row) return c.json({ error: 'Not found' }, 404)
  return c.json(parseRow(row))
})

export default app
