
export interface NewsResponse {
  status: string
  totalResults: number
  articles: Article[]
}

export interface Article {
  source: { id: string, name: string }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface SourcesResponse {
  status: string
  sources: Source[]
}

export interface Source {
  id: string
  name: string
  description: string
  url: string
  category: string
  language: string
  country: string
}

export function getElement<T extends HTMLElement> (root: HTMLElement, selector: string): T {
  const element = root.querySelector<T>(selector)
  if (element == null) {
    throw new TypeError('Element should exist in DOM')
  }
  return element
}

export type Callback<T = void> = (data: T) => void

export type Options = Record<string, string>

export function isHTMLElement (element: EventTarget | null): element is HTMLElement {
  return Boolean((element != null) && element instanceof HTMLElement)
}
