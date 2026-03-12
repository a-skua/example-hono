import { Hono } from "hono";
import { fire } from "@bytecodealliance/jco-std/wasi/0.2.6/http/adapters/hono/server";

const app = new Hono();

app.get("/hello", (c) => {
  return c.json({ message: "Hello hono with wasi:http/proxy!" });
});

fire(app);

export { incomingHandler } from "@bytecodealliance/jco-std/wasi/0.2.6/http/adapters/hono/server";
