export const isHtmlElement = (element: unknown): element is HTMLElement =>
  element instanceof HTMLElement || element instanceof Node

export function getElement<T extends HTMLElement> (root: HTMLElement, selector: string): T {
  const element = root.querySelector<T>(selector)

  if (element === null) {
    throw new TypeError('Element should exist in DOM')
  }

  return element
}
