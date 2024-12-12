import { Hono } from 'hono'
import { createUniver } from '@univerjs/presets'

const app = new Hono()

app.get('/', (c) => {
  createUniver({})
  return c.text('Hello Hono!')
})

export default app
