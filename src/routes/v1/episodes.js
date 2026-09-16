import { Hono } from 'hono'
import { isAlphabetical, isNumeric } from '../../utils/Validator.js'
import { parseRow, parseRows } from '../../utils/db.js'

const app = new Hono()

app.get('/', async (c) => {
  const { results } = await c.env.DB.prepare('SELECT * FROM episodes').all()
  return c.json(parseRows(results))
})

// /id/:id  e.g. 109 for Season 1 Episode 9
app.get('/id/:id', async (c) => {
  const id = c.req.param('id')
  if (!isNumeric(id)) {
    return c.json({ error: `Invalid input: ${id}. Enter 103 for information on Season 1 Episode 3.` }, 400)
  }
  const row = await c.env.DB.prepare('SELECT * FROM episodes WHERE episodeId = ?').bind(parseInt(id, 10)).first()
  if (!row) return c.json({ error: 'Not found' }, 404)
  return c.json(parseRow(row))
})

app.get('/title/:title', async (c) => {
  const title = c.req.param('title')
  if (!isAlphabetical(title)) {
    return c.json({ error: `Invalid input: ${title}. Episode titles should only contain alphabetical characters.` }, 400)
  }
  const row = await c.env.DB.prepare('SELECT * FROM episodes WHERE name = ? COLLATE NOCASE').bind(title).first()
  if (!row) return c.json({ error: 'Not found' }, 404)
  return c.json(parseRow(row))
})

export default app
