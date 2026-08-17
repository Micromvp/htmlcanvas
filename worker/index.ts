import { Hono } from "hono";

const app = new Hono();

app.get("/api/health", (context) => {
  return context.json({ status: "ok" });
});

export default app;
