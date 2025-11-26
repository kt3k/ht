import "./dom_polyfill.ts"
import ht from "./mod.ts"
import { assertEquals } from "@std/assert"

Deno.test("<div>", () => {
  const div = ht.div`<p>Hello World</p>`
  assertEquals(div.outerHTML, `<div><p>Hello World</p></div>`)
})

Deno.test("<a>", () => {
  const a = ht.a({ href: "https://example.com" }, "Example")
  assertEquals(
    a.outerHTML,
    `<a href="https://example.com">Example</a>`,
  )
})
