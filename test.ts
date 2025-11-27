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

Deno.test("<canvas>", () => {
  const canvas = ht.canvas({ width: 300, height: 150 })
  assertEquals(
    canvas.outerHTML,
    `<canvas width="300" height="150"></canvas>`,
  )
})

Deno.test("<input>", () => {
  const input = ht.input({ type: "text", value: "Hello" })
  assertEquals(
    input.outerHTML,
    `<input type="text" value="Hello">`,
  )
})
