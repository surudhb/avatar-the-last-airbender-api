# Avatar: The Last Airbender API

A REST API for the greatest animated show of all time, built with [Hono](https://hono.dev/) and deployed on [Cloudflare Workers](https://workers.cloudflare.com/) with a [D1](https://developers.cloudflare.com/d1/) SQLite database.

## Base URL

```
https://avatar-the-last-airbender-api.surudhb.workers.dev
```

## Endpoints

All endpoints are prefixed with `/api/v1`.

| Route | Description |
|---|---|
| `GET /bending` | All bending types |
| `GET /bending/:form` | Single bending type by name (e.g. `firebending`) |
| `GET /episodes` | All episodes |
| `GET /episodes/id/:id` | Episode by ID (e.g. `203` = Book 2, Ep 3) |
| `GET /episodes/title/:title` | Episode by title (e.g. `Avatar Day`) |
| `GET /locations` | All locations |
| `GET /locations/:name` | Location by name (e.g. `Omashu`) |
| `GET /organizations` | All organizations |
| `GET /organizations/:name` | Organization by name (e.g. `Kyoshi Warriors`) |

### Pagination

List endpoints support `?limit` (default 50, max 100) and `?offset` query params.

```
GET /api/v1/episodes?limit=10&offset=20
```

### Rate Limiting

60 requests per minute per IP. Exceeding this returns `429 Too Many Requests` with a `Retry-After: 60` header.

## Local Development

```bash
npm install
npm run db:init   # initialise local D1 database
npm run dev       # start wrangler dev server
```

## Deployment

Pushes to `master` automatically deploy via GitHub Actions.

```bash
npm run deploy    # manual deploy
```

## Roadmap

- Characters (major and minor)
- Wildlife
- Quotes `{ by, quote, episode }`
- Sub-bending types
- Missing locations and episodes
- Legend of Korra support
- `/v2`
