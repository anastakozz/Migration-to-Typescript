
export interface NewsResponseI {
  status: string
  totalResults: number
  articles: ArticleI[]
}

export interface ArticleI {
  source: { id: string, name: string }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface SourcesResponseI {
  status: string
  sources: SourceI[]
}

export interface SourceI {
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

  if (element === null) {
    throw new TypeError('Element should exist in DOM')
  }

  return element
}

export type CallbackType<T = void> = (data: T) => void

export type OptionsType = Record<string, string>

export const isHtmlElement = (element: unknown): element is HTMLElement =>
  element instanceof HTMLElement || element instanceof Node

export enum EndpointsEnum {
  Everything = 'everything',
  TopHeadlines = 'top-headlines',
  Sources = 'sources'
}
