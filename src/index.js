import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { rateLimit } from './middleware/rateLimit.js'
import bending from './routes/v1/bending.js'
import characters from './routes/v1/characters.js'
import episodes from './routes/v1/episodes.js'
import locations from './routes/v1/locations.js'
import organizations from './routes/v1/organizations.js'

const app = new Hono()

app.use('*', cors())
app.use('/api/*', rateLimit)

app.route('/api/v1/bending', bending)
app.route('/api/v1/characters', characters)
app.route('/api/v1/episodes', episodes)
app.route('/api/v1/locations', locations)
app.route('/api/v1/organizations', organizations)

// Fall through to static assets (index.html, 404.html, etc.)
app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw))

export default app
