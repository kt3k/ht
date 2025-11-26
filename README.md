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
// equivalent of
// <div>
//  <h1>Heading</h1>
//  <p>Hello <strong>World</strong></p>
// </div>

const p = ht.p`
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
`
// => p has HTMLParagraphElement type
```

Sets attributes to the tag:

```js
import ht from "@kt3k/ht"

const div = ht.div({ id: "foo" }, `
  <p>Hello, world!</p>
`)

const input = ht.input({ type: "text" placeholder: "email" })
// => HTMLInputElement type
// equivalent of
// <input type="text" placeholder="email" />

input.addEventListener("input", ...);

const button = ht.button({ type: "button" }, "Finish editing")
// => HTMLButtonElement type
// equivalent of
// <button type="button">Finish editing</button>

button.onclick = () => { ... }
```

Use Fragment:

```js
import ht from "@kt3k/ht"

const fragment = ht.Fragment`
  <header>Title</header>
  <main>Contents</main>
  <footer>Footer</footer>
`
// => DocumentFragment type
```

# License

MIT
