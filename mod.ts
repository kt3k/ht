/**
 * Type-friendly HTML element factory as tagged template literals.
 *
 * Supported tags:
 * - a
 * - abbr
 * - address
 * - area
 * - article
 * - aside
 * - audio
 * - b
 * - base
 * - bdi
 * - bdo
 * - blockquote
 * - body
 * - br
 * - button
 * - canvas
 * - caption
 * - cite
 * - code
 * - col
 * - colgroup
 * - data
 * - datalist
 * - dd
 * - del
 * - details
 * - dfn
 * - dialog
 * - div
 * - dl
 * - dt
 * - em
 * - embed
 * - fieldset
 * - figcaption
 * - figure
 * - footer
 * - form
 * - h1
 * - h2
 * - h3
 * - h4
 * - h5
 * - h6
 * - head
 * - header
 * - hgroup
 * - hr
 * - html
 * - i
 * - iframe
 * - img
 * - input
 * - ins
 * - kbd
 * - label
 * - legend
 * - li
 * - link
 * - main
 * - map
 * - mark
 * - math
 * - menu
 * - meta
 * - meter
 * - nav
 * - noscript
 * - object
 * - ol
 * - optgroup
 * - option
 * - output
 * - p
 * - picture
 * - pre
 * - progress
 * - q
 * - rp
 * - rt
 * - ruby
 * - s
 * - samp
 * - script
 * - section
 * - select
 * - slot
 * - small
 * - source
 * - span
 * - strong
 * - style
 * - sub
 * - summary
 * - sup
 * - svg
 * - table
 * - tbody
 * - td
 * - template
 * - textarea
 * - tfoot
 * - th
 * - thead
 * - time
 * - title
 * - tr
 * - track
 * - u
 * - ul
 * - var
 * - video
 * - wbr
 *
 * @module ht
 */

/**
 * Creates `a` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function a(
  attrs: Record<string, string>,
  html?: string,
): HTMLAnchorElement
/**
 * Creates `a` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function a(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLAnchorElement
export function a(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLAnchorElement {
  return createElement("a", template, ...values)
}

/**
 * Creates `abbr` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function abbr(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `abbr` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function abbr(
  attrs: Record<string, string>,
  html: string,
): HTMLElement
export function abbr(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function abbr(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("abbr", template, ...values)
}

/**
 * Creates `address` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function address(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `address` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function address(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function address(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("address", template, ...values)
}

/**
 * Creates `area` element with attributes
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function area(
  attrs: Record<string, string>,
  html?: string,
): HTMLAreaElement
/**
 * Creates `area` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function area(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLAreaElement
export function area(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLAreaElement {
  return createElement("area", template, ...values)
}

/**
 * Creates `article` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function article(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `article` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function article(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function article(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("article", template, ...values)
}

/**
 * Creates `aside` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function aside(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `aside` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function aside(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function aside(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("aside", template, ...values)
}

/**
 * Creates `audio` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function audio(
  attrs: Record<string, string>,
  html?: string,
): HTMLAudioElement
/**
 * Creates `audio` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function audio(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLAudioElement
export function audio(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLAudioElement {
  return createElement("audio", template, ...values)
}

/**
 * Creates `b` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function b(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `b` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function b(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function b(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("b", template, ...values)
}

/**
 * Creates `base` element with attributes
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function base(
  attrs: Record<string, string>,
  html?: string,
): HTMLBaseElement
/**
 * Creates `base` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function base(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLBaseElement
export function base(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLBaseElement {
  return createElement("base", template, ...values)
}

/**
 * Creates `bdi` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function bdi(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `bdi` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function bdi(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function bdi(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("bdi", template, ...values)
}

/**
 * Creates `bdo` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function bdo(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `bdo` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function bdo(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function bdo(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("bdo", template, ...values)
}

/**
 * Creates `blockquote` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function blockquote(
  attrs: Record<string, string>,
  html?: string,
): HTMLQuoteElement
/**
 * Creates `blockquote` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function blockquote(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLQuoteElement
export function blockquote(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLQuoteElement {
  return createElement("blockquote", template, ...values)
}

/**
 * Creates `body` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function body(
  attrs: Record<string, string>,
  html?: string,
): HTMLBodyElement
/**
 * Creates `body` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function body(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLBodyElement
export function body(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLBodyElement {
  return createElement("body", template, ...values)
}

/**
 * Creates `br` element with attributes
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function br(
  attrs: Record<string, string>,
  html?: string,
): HTMLBRElement
/**
 * Creates `br` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function br(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLBRElement
export function br(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLBRElement {
  return createElement("br", template, ...values)
}

/**
 * Creates `button` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function button(
  attrs: Record<string, string>,
  html?: string,
): HTMLButtonElement
/**
 * Creates `button` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function button(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLButtonElement
export function button(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLButtonElement {
  return createElement("button", template, ...values)
}

/**
 * Creates `canvas` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function canvas(
  attrs: Record<string, string>,
  html?: string,
): HTMLCanvasElement
/**
 * Creates `canvas` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function canvas(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLCanvasElement
export function canvas(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLCanvasElement {
  return createElement("canvas", template, ...values)
}

/**
 * Creates `caption` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function caption(
  attrs: Record<string, string>,
  html?: string,
): HTMLTableCaptionElement
/**
 * Creates `caption` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function caption(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLTableCaptionElement
export function caption(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLTableCaptionElement {
  return createElement("caption", template, ...values)
}

/**
 * Creates `cite` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function cite(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `cite` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function cite(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function cite(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("cite", template, ...values)
}

/**
 * Creates `code` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function code(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `code` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function code(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function code(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("code", template, ...values)
}

/**
 * Creates `col` element with attributes
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function col(
  attrs: Record<string, string>,
  html?: string,
): HTMLTableColElement
/**
 * Creates `col` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function col(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLTableColElement
export function col(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLTableColElement {
  return createElement("col", template, ...values)
}

/**
 * Creates `colgroup` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function colgroup(
  attrs: Record<string, string>,
  html?: string,
): HTMLTableColElement
/**
 * Creates `colgroup` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function colgroup(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLTableColElement
export function colgroup(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLTableColElement {
  return createElement("colgroup", template, ...values)
}

/**
 * Creates `data` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function data(
  attrs: Record<string, string>,
  html?: string,
): HTMLDataElement
/**
 * Creates `data` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function data(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLDataElement
export function data(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLDataElement {
  return createElement("data", template, ...values)
}

/**
 * Creates `datalist` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function datalist(
  attrs: Record<string, string>,
  html?: string,
): HTMLDataListElement
/**
 * Creates `datalist` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function datalist(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLDataListElement
export function datalist(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLDataListElement {
  return createElement("datalist", template, ...values)
}

/**
 * Creates `dd` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function dd(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `dd` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function dd(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function dd(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("dd", template, ...values)
}

/**
 * Creates `del` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function del(
  attrs: Record<string, string>,
  html?: string,
): HTMLModElement
/**
 * Creates `del` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function del(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLModElement
export function del(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLModElement {
  return createElement("del", template, ...values)
}

/**
 * Creates `details` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function details(
  attrs: Record<string, string>,
  html?: string,
): HTMLDetailsElement
/**
 * Creates `details` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function details(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLDetailsElement
export function details(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLDetailsElement {
  return createElement("details", template, ...values)
}

/**
 * Creates `dfn` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function dfn(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `dfn` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function dfn(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function dfn(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("dfn", template, ...values)
}

/**
 * Creates `dialog` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function dialog(
  attrs: Record<string, string>,
  html?: string,
): HTMLDialogElement
/**
 * Creates `dialog` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function dialog(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLDialogElement
export function dialog(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLDialogElement {
  return createElement("dialog", template, ...values)
}

/**
 * Creates `div` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function div(
  attrs: Record<string, string>,
  html?: string,
): HTMLDivElement
/**
 * Creates `div` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function div(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLDivElement
export function div(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLDivElement {
  return createElement("div", template, ...values)
}

/**
 * Creates `dl` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function dl(
  attrs: Record<string, string>,
  html?: string,
): HTMLDListElement
/**
 * Creates `dl` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function dl(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLDListElement
export function dl(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLDListElement {
  return createElement("dl", template, ...values)
}

/**
 * Creates `dt` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function dt(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `dt` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function dt(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function dt(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("dt", template, ...values)
}

/**
 * Creates `em` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function em(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `em` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function em(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function em(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("em", template, ...values)
}

/**
 * Creates `embed` element with attributes
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function embed(
  attrs: Record<string, string>,
  html?: string,
): HTMLEmbedElement
/**
 * Creates `embed` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function embed(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLEmbedElement
export function embed(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLEmbedElement {
  return createElement("embed", template, ...values)
}

/**
 * Creates `fieldset` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function fieldset(
  attrs: Record<string, string>,
  html?: string,
): HTMLFieldSetElement
/**
 * Creates `fieldset` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function fieldset(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLFieldSetElement
export function fieldset(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLFieldSetElement {
  return createElement("fieldset", template, ...values)
}

/**
 * Creates `figcaption` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function figcaption(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `figcaption` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function figcaption(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function figcaption(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("figcaption", template, ...values)
}

/**
 * Creates `figure` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function figure(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `figure` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function figure(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function figure(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("figure", template, ...values)
}

/**
 * Creates `footer` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function footer(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `footer` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function footer(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function footer(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("footer", template, ...values)
}

/**
 * Creates `form` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function form(
  attrs: Record<string, string>,
  html?: string,
): HTMLFormElement
/**
 * Creates `form` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function form(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLFormElement
export function form(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLFormElement {
  return createElement("form", template, ...values)
}

/**
 * Creates `h1` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function h1(
  attrs: Record<string, string>,
  html?: string,
): HTMLHeadingElement
/**
 * Creates `h1` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function h1(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLHeadingElement
export function h1(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLHeadingElement {
  return createElement("h1", template, ...values)
}

/**
 * Creates `h2` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function h2(
  attrs: Record<string, string>,
  html?: string,
): HTMLHeadingElement
/**
 * Creates `h2` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function h2(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLHeadingElement
export function h2(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLHeadingElement {
  return createElement("h2", template, ...values)
}

/**
 * Creates `h3` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function h3(
  attrs: Record<string, string>,
  html?: string,
): HTMLHeadingElement
/**
 * Creates `h3` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function h3(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLHeadingElement
export function h3(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLHeadingElement {
  return createElement("h3", template, ...values)
}

/**
 * Creates `h4` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function h4(
  attrs: Record<string, string>,
  html?: string,
): HTMLHeadingElement
/**
 * Creates `h4` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function h4(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLHeadingElement
export function h4(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLHeadingElement {
  return createElement("h4", template, ...values)
}

/**
 * Creates `h5` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function h5(
  attrs: Record<string, string>,
  html?: string,
): HTMLHeadingElement
/**
 * Creates `h5` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function h5(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLHeadingElement
export function h5(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLHeadingElement {
  return createElement("h5", template, ...values)
}

/**
 * Creates `h6` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function h6(
  attrs: Record<string, string>,
  html?: string,
): HTMLHeadingElement
/**
 * Creates `h6` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function h6(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLHeadingElement
export function h6(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLHeadingElement {
  return createElement("h6", template, ...values)
}

/**
 * Creates `head` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function head(
  attrs: Record<string, string>,
  html?: string,
): HTMLHeadElement
/**
 * Creates `head` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function head(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLHeadElement
export function head(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLHeadElement {
  return createElement("head", template, ...values)
}

/**
 * Creates `header` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function header(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `header` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function header(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function header(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("header", template, ...values)
}

/**
 * Creates `hgroup` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function hgroup(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `hgroup` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function hgroup(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function hgroup(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("hgroup", template, ...values)
}

/**
 * Creates `hr` element with attributes
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function hr(
  attrs: Record<string, string>,
  html?: string,
): HTMLHRElement
/**
 * Creates `hr` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function hr(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLHRElement
export function hr(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLHRElement {
  return createElement("hr", template, ...values)
}

/**
 * Creates `html` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function html(
  attrs: Record<string, string>,
  html?: string,
): HTMLHtmlElement
/**
 * Creates `html` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function html(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLHtmlElement
export function html(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLHtmlElement {
  return createElement("html", template, ...values)
}

/**
 * Creates `i` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function i(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `i` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function i(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function i(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("i", template, ...values)
}

/**
 * Creates `iframe` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function iframe(
  attrs: Record<string, string>,
  html?: string,
): HTMLIFrameElement
/**
 * Creates `iframe` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function iframe(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLIFrameElement
export function iframe(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLIFrameElement {
  return createElement("iframe", template, ...values)
}

/**
 * Creates `img` element with attributes
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function img(
  attrs: Record<string, string>,
  html?: string,
): HTMLImageElement
/**
 * Creates `img` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function img(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLImageElement
export function img(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLImageElement {
  return createElement("img", template, ...values)
}

/**
 * Creates `input` element with attributes
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function input(
  attrs: Record<string, string>,
  html?: string,
): HTMLInputElement
/**
 * Creates `input` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function input(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLInputElement
export function input(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLInputElement {
  return createElement("input", template, ...values)
}

/**
 * Creates `ins` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function ins(
  attrs: Record<string, string>,
  html?: string,
): HTMLModElement
/**
 * Creates `ins` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function ins(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLModElement
export function ins(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLModElement {
  return createElement("ins", template, ...values)
}

/**
 * Creates `kbd` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function kbd(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `kbd` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function kbd(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function kbd(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("kbd", template, ...values)
}

/**
 * Creates `label` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function label(
  attrs: Record<string, string>,
  html?: string,
): HTMLLabelElement
/**
 * Creates `label` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function label(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLLabelElement
export function label(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLLabelElement {
  return createElement("label", template, ...values)
}

/**
 * Creates `legend` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function legend(
  attrs: Record<string, string>,
  html?: string,
): HTMLLegendElement
/**
 * Creates `legend` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function legend(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLLegendElement
export function legend(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLLegendElement {
  return createElement("legend", template, ...values)
}

/**
 * Creates `li` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function li(
  attrs: Record<string, string>,
  html?: string,
): HTMLLIElement
/**
 * Creates `li` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function li(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLLIElement
export function li(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLLIElement {
  return createElement("li", template, ...values)
}

/**
 * Creates `link` element with attributes
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function link(
  attrs: Record<string, string>,
  html?: string,
): HTMLLinkElement
/**
 * Creates `link` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function link(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLLinkElement
export function link(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLLinkElement {
  return createElement("link", template, ...values)
}

/**
 * Creates `main` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function main(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `main` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function main(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function main(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("main", template, ...values)
}

/**
 * Creates `map` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function map(
  attrs: Record<string, string>,
  html?: string,
): HTMLMapElement
/**
 * Creates `map` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function map(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLMapElement
export function map(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLMapElement {
  return createElement("map", template, ...values)
}

/**
 * Creates `mark` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function mark(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `mark` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function mark(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function mark(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("mark", template, ...values)
}

/**
 * Creates `math` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function math(
  attrs: Record<string, string>,
  html?: string,
): MathMLElement
/**
 * Creates `math` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function math(
  template: TemplateStringsArray,
  ...values: unknown[]
): MathMLElement
export function math(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): MathMLElement {
  const math = document.createElementNS(
    "http://www.w3.org/1998/Math/MathML",
    "math",
  )
  if (Array.isArray(template)) {
    math.innerHTML = String.raw({ raw: template }, ...values)
  } else {
    for (const [key, value] of Object.entries(template)) {
      math.setAttribute(key, value)
    }
    const html = values[0]
    if (typeof html === "string") {
      math.innerHTML = html
    }
  }
  return math
}

/**
 * Creates `menu` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function menu(
  attrs: Record<string, string>,
  html?: string,
): HTMLMenuElement
/**
 * Creates `menu` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function menu(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLMenuElement
export function menu(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLMenuElement {
  return createElement("menu", template, ...values)
}

/**
 * Creates `meta` element with attributes
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function meta(
  attrs: Record<string, string>,
  html?: string,
): HTMLMetaElement
/**
 * Creates `meta` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function meta(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLMetaElement
export function meta(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLMetaElement {
  return createElement("meta", template, ...values)
}

/**
 * Creates `meter` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function meter(
  attrs: Record<string, string>,
  html?: string,
): HTMLMeterElement
/**
 * Creates `meter` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function meter(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLMeterElement
export function meter(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLMeterElement {
  return createElement("meter", template, ...values)
}

/**
 * Creates `nav` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function nav(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `nav` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function nav(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function nav(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("nav", template, ...values)
}

/**
 * Creates `noscript` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function noscript(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `noscript` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function noscript(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function noscript(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("noscript", template, ...values)
}

/**
 * Creates `object` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function object(
  attrs: Record<string, string>,
  html?: string,
): HTMLObjectElement
/**
 * Creates `object` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function object(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLObjectElement
export function object(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLObjectElement {
  return createElement("object", template, ...values)
}

/**
 * Creates `ol` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function ol(
  attrs: Record<string, string>,
  html?: string,
): HTMLOListElement
/**
 * Creates `ol` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function ol(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLOListElement
export function ol(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLOListElement {
  return createElement("ol", template, ...values)
}

/**
 * Creates `optgroup` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function optgroup(
  attrs: Record<string, string>,
  html?: string,
): HTMLOptGroupElement
/**
 * Creates `optgroup` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function optgroup(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLOptGroupElement
export function optgroup(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLOptGroupElement {
  return createElement("optgroup", template, ...values)
}

/**
 * Creates `option` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function option(
  attrs: Record<string, string>,
  html?: string,
): HTMLOptionElement
/**
 * Creates `option` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function option(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLOptionElement
export function option(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLOptionElement {
  return createElement("option", template, ...values)
}

/**
 * Creates `output` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function output(
  attrs: Record<string, string>,
  html?: string,
): HTMLOutputElement
/**
 * Creates `output` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function output(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLOutputElement
export function output(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLOutputElement {
  return createElement("output", template, ...values)
}

/**
 * Creates `p` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function p(
  attrs: Record<string, string>,
  html?: string,
): HTMLParagraphElement
/**
 * Creates `p` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function p(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLParagraphElement
export function p(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLParagraphElement {
  return createElement("p", template, ...values)
}

/**
 * Creates `picture` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function picture(
  attrs: Record<string, string>,
  html?: string,
): HTMLPictureElement
/**
 * Creates `picture` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function picture(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLPictureElement
export function picture(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLPictureElement {
  return createElement("picture", template, ...values)
}

/**
 * Creates `pre` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function pre(
  attrs: Record<string, string>,
  html?: string,
): HTMLPreElement
/**
 * Creates `pre` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function pre(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLPreElement
export function pre(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLPreElement {
  return createElement("pre", template, ...values)
}

/**
 * Creates `progress` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function progress(
  attrs: Record<string, string>,
  html?: string,
): HTMLProgressElement
/**
 * Creates `progress` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function progress(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLProgressElement
export function progress(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLProgressElement {
  return createElement("progress", template, ...values)
}

/**
 * Creates `q` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function q(
  attrs: Record<string, string>,
  html?: string,
): HTMLQuoteElement
/**
 * Creates `q` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function q(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLQuoteElement
export function q(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLQuoteElement {
  return createElement("q", template, ...values)
}

/**
 * Creates `rp` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function rp(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `rp` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function rp(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function rp(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("rp", template, ...values)
}

/**
 * Creates `rt` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function rt(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `rt` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function rt(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function rt(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("rt", template, ...values)
}

/**
 * Creates `ruby` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function ruby(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `ruby` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function ruby(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function ruby(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("ruby", template, ...values)
}

/**
 * Creates `s` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function s(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `s` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function s(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function s(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("s", template, ...values)
}

/**
 * Creates `samp` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function samp(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `samp` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function samp(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function samp(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("samp", template, ...values)
}

/**
 * Creates `script` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function script(
  attrs: Record<string, string>,
  html?: string,
): HTMLScriptElement
/**
 * Creates `script` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function script(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLScriptElement
export function script(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLScriptElement {
  return createElement("script", template, ...values)
}

/**
 * Creates `section` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function section(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `section` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function section(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function section(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("section", template, ...values)
}

/**
 * Creates `select` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function select(
  attrs: Record<string, string>,
  html?: string,
): HTMLSelectElement
/**
 * Creates `select` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function select(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLSelectElement
export function select(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLSelectElement {
  return createElement("select", template, ...values)
}

/**
 * Creates `slot` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function slot(
  attrs: Record<string, string>,
  html?: string,
): HTMLSlotElement
/**
 * Creates `slot` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function slot(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLSlotElement
export function slot(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLSlotElement {
  return createElement("slot", template, ...values)
}

/**
 * Creates `small` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function small(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `small` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function small(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function small(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("small", template, ...values)
}

/**
 * Creates `source` element with attributes
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function source(
  attrs: Record<string, string>,
  html?: string,
): HTMLSourceElement
/**
 * Creates `source` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function source(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLSourceElement
export function source(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLSourceElement {
  return createElement("source", template, ...values)
}

/**
 * Creates `span` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function span(
  attrs: Record<string, string>,
  html?: string,
): HTMLSpanElement
/**
 * Creates `span` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function span(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLSpanElement
export function span(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLSpanElement {
  return createElement("span", template, ...values)
}

/**
 * Creates `strong` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function strong(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `strong` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function strong(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function strong(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("strong", template, ...values)
}

/**
 * Creates `style` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function style(
  attrs: Record<string, string>,
  html?: string,
): HTMLStyleElement
/**
 * Creates `style` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function style(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLStyleElement
export function style(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLStyleElement {
  return createElement("style", template, ...values)
}

/**
 * Creates `sub` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function sub(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `sub` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function sub(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function sub(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("sub", template, ...values)
}

/**
 * Creates `summary` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function summary(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `summary` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function summary(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function summary(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("summary", template, ...values)
}

/**
 * Creates `sup` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function sup(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `sup` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function sup(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function sup(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("sup", template, ...values)
}

/**
 * Creates `svg` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function svg(
  attrs: Record<string, string>,
  html?: string,
): SVGSVGElement
/**
 * Creates `svg` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function svg(
  template: TemplateStringsArray,
  ...values: unknown[]
): SVGSVGElement
export function svg(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): SVGSVGElement {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  if (Array.isArray(template)) {
    svg.innerHTML = String.raw(template as TemplateStringsArray, ...values)
  } else {
    const html = values[0]
    if (typeof html === "string") {
      svg.innerHTML = html
    }
    for (const [key, value] of Object.entries(template)) {
      svg.setAttribute(key, value)
    }
  }
  return svg
}

/**
 * Creates `table` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function table(
  attrs: Record<string, string>,
  html?: string,
): HTMLTableElement
/**
 * Creates `table` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function table(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLTableElement
export function table(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLTableElement {
  return createElement("table", template, ...values)
}

/**
 * Creates `tbody` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function tbody(
  attrs: Record<string, string>,
  html?: string,
): HTMLTableSectionElement
/**
 * Creates `tbody` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function tbody(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLTableSectionElement
export function tbody(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLTableSectionElement {
  return createElement("tbody", template, ...values)
}

/**
 * Creates `td` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function td(
  attrs: Record<string, string>,
  html?: string,
): HTMLTableCellElement
/**
 * Creates `td` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function td(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLTableCellElement
export function td(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLTableCellElement {
  return createElement("td", template, ...values)
}

/**
 * Creates `template` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function template(
  attrs: Record<string, string>,
  html?: string,
): HTMLTemplateElement
/**
 * Creates `template` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function template(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLTemplateElement
export function template(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLTemplateElement {
  return createElement("template", template, ...values)
}

/**
 * Creates `textarea` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function textarea(
  attrs: Record<string, string>,
  html?: string,
): HTMLTextAreaElement
/**
 * Creates `textarea` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function textarea(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLTextAreaElement
export function textarea(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLTextAreaElement {
  return createElement("textarea", template, ...values)
}

/**
 * Creates `tfoot` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function tfoot(
  attrs: Record<string, string>,
  html?: string,
): HTMLTableSectionElement
/**
 * Creates `tfoot` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function tfoot(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLTableSectionElement
export function tfoot(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLTableSectionElement {
  return createElement("tfoot", template, ...values)
}

/**
 * Creates `th` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function th(
  attrs: Record<string, string>,
  html?: string,
): HTMLTableCellElement
/**
 * Creates `th` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function th(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLTableCellElement
export function th(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLTableCellElement {
  return createElement("th", template, ...values)
}

/**
 * Creates `thead` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function thead(
  attrs: Record<string, string>,
  html?: string,
): HTMLTableSectionElement
/**
 * Creates `thead` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function thead(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLTableSectionElement
export function thead(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLTableSectionElement {
  return createElement("thead", template, ...values)
}

/**
 * Creates `time` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function time(
  attrs: Record<string, string>,
  html?: string,
): HTMLTimeElement
/**
 * Creates `time` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function time(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLTimeElement
export function time(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLTimeElement {
  return createElement("time", template, ...values)
}

/**
 * Creates `title` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function title(
  attrs: Record<string, string>,
  html?: string,
): HTMLTitleElement
/**
 * Creates `title` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function title(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLTitleElement
export function title(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLTitleElement {
  return createElement("title", template, ...values)
}

/**
 * Creates `tr` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function tr(
  attrs: Record<string, string>,
  html?: string,
): HTMLTableRowElement
/**
 * Creates `tr` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function tr(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLTableRowElement
export function tr(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLTableRowElement {
  return createElement("tr", template, ...values)
}

/**
 * Creates `track` element with attributes
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function track(
  attrs: Record<string, string>,
  html?: string,
): HTMLTrackElement
/**
 * Creates `track` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function track(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLTrackElement
export function track(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLTrackElement {
  return createElement("track", template, ...values)
}

/**
 * Creates `u` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function u(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `u` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function u(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function u(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("u", template, ...values)
}

/**
 * Creates `ul` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function ul(
  attrs: Record<string, string>,
  html?: string,
): HTMLUListElement
/**
 * Creates `ul` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function ul(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLUListElement
export function ul(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLUListElement {
  return createElement("ul", template, ...values)
}

/**
 * Creates `var` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
// deno-lint-ignore camelcase
export function var_(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `var` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
// deno-lint-ignore camelcase
export function var_(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
// deno-lint-ignore camelcase
export function var_(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("var", template, ...values)
}

/**
 * Creates `video` element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function video(
  attrs: Record<string, string>,
  html?: string,
): HTMLVideoElement
/**
 * Creates `video` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function video(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLVideoElement
export function video(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLVideoElement {
  return createElement("video", template, ...values)
}

/**
 * Creates `wbr` element with attributes
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function wbr(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates `wbr` element as tagged template literal
 *
 * @param template Template strings array
 * @param values Values to interpolate
 */
export function wbr(
  template: TemplateStringsArray,
  ...values: unknown[]
): HTMLElement
export function wbr(
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElement {
  return createElement("wbr", template, ...values)
}

function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  template: TemplateStringsArray | Record<string, string>,
  ...values: unknown[]
): HTMLElementTagNameMap[K] {
  const el = document.createElement(tagName)
  if (Array.isArray(template)) {
    el.innerHTML = String.raw(template as TemplateStringsArray, ...values)
      .trim()
  } else {
    const html = values[0]
    if (typeof html === "string") {
      el.innerHTML = html
    }
    for (const [key, value] of Object.entries(template)) {
      el.setAttribute(key, value)
    }
  }
  return el
}

/** The ht namespace */
const ht = {
  a,
  abbr,
  address,
  area,
  article,
  aside,
  audio,
  b,
  base,
  bdi,
  bdo,
  blockquote,
  body,
  br,
  button,
  canvas,
  caption,
  cite,
  code,
  col,
  colgroup,
  data,
  datalist,
  dd,
  del,
  details,
  dfn,
  dialog,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  head,
  header,
  hgroup,
  hr,
  html,
  i,
  iframe,
  img,
  input,
  ins,
  kbd,
  label,
  legend,
  li,
  link,
  main,
  map,
  mark,
  math,
  menu,
  meta,
  meter,
  nav,
  noscript,
  object,
  ol,
  optgroup,
  option,
  output,
  p,
  picture,
  pre,
  progress,
  q,
  rp,
  rt,
  ruby,
  s,
  samp,
  script,
  section,
  select,
  slot,
  small,
  source,
  span,
  strong,
  style,
  sub,
  summary,
  sup,
  svg,
  table,
  tbody,
  td,
  template,
  textarea,
  tfoot,
  th,
  thead,
  time,
  title,
  tr,
  track,
  u,
  ul,
  var: var_,
  video,
  wbr,
}

export default ht
