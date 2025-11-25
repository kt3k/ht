# ht v0.0.0

Type-friendly HTMLElement factory function as template literal tag.

(`ht` comes from `hypertext`)

# Install

via jsr

```
deno install jsr:@kt3k/ht
```

via npm

```
npx jsr add @kt3k/ht
```

# Usage

Basics:

```js
import ht from "@kt3k/ht"

const div = ht.div`
  <h1>Heading</h1>
  <p>Hello <strong>World</strong></p>
`
// => div has HTMLDivElement type

const p = ht.p`
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
`
// => p has HTMLParagraphElement type
```

Sets attributes to the main tag:

```
import ht from "@kt3k/ht"

const input = ht.input({ type: "text" placeholder: "email" })``
// => HTMLInputType

input.addEventListener("input", ...);

const button = ht.button({ type: "button" })`Finish editing`
// => HTMLButtonElement

button.onclick = () => { ... }
```

# License

MIT
