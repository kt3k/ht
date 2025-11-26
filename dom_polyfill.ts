// deno-lint-ignore-file no-explicit-any
import { DOMParser } from "@b-fuze/deno-dom"
const global = globalThis as any
global.document = new DOMParser().parseFromString(
  "<body></body>",
  "text/html",
)
