import { Hono } from 'hono';

let globalCounter = 0;
const app = new Hono();

app.get('/', (c) => {
  globalCounter++;
  return c.json({ counter: globalCounter });
});

export default app;
