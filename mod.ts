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
 * - menuitem
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
 * - param
 * - picture
 * - pre
 * - progress
 * - q
 * - rb
 * - rp
 * - rt
 * - rtc
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
 * Creates <a> element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function a(
  attrs: Record<string, string>,
  html?: string,
): HTMLAnchorElement
/**
 * Creates <a> element as tagged template literal
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
 * Creates <abbr> element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function abbr(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates <abbr> element as tagged template literal
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
 * Creates <address> element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function address(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates <address> element as tagged template literal
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
 * Creates <area> element with attributes
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function area(
  attrs: Record<string, string>,
  html?: string,
): HTMLAreaElement
/**
 * Creates <area> element as tagged template literal
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
 * Creates <article> element with attributes and innerHTML
 *
 * @param attrs Attributes to set
 * @param html HTML to set to innnerHTML
 */
export function article(
  attrs: Record<string, string>,
  html?: string,
): HTMLElement
/**
 * Creates <article> element as tagged template literal
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
}

export default ht
