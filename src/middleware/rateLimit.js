export const rateLimit = async (c, next) => {
  const ip = c.req.header('cf-connecting-ip') ?? 'unknown'
  const { success } = await c.env.RATE_LIMITER.limit({ key: ip })
  if (!success) {
    c.header('Retry-After', '60')
    return c.json({ error: 'Too many requests' }, 429)
  }
  await next()
}
