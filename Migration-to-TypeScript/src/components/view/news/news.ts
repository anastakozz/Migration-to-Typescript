import './news.css'
import { type ArticleI } from '../../../types/types'
import { isHtmlElement, getElement } from '../../../types/utils'

class News {
  draw (data: ArticleI[]): void {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data

    const fragment = document.createDocumentFragment()
    const newsItemTemp = getElement<HTMLElement>(document.body, '#newsItemTemp')

    news.forEach((item, idx: number) => {
      if (newsItemTemp && newsItemTemp instanceof HTMLTemplateElement) {
        const newsClone = newsItemTemp.content.cloneNode(true)
        if (isHtmlElement(newsClone)) {
          if (idx % 2) getElement<HTMLElement>(newsClone, '.news__item').classList.add('alt')

          getElement<HTMLElement>(newsClone, '.news__meta-photo').style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`
          getElement<HTMLElement>(newsClone, '.news__meta-author').textContent = item.author || item.source.name
          getElement<HTMLElement>(newsClone, '.news__meta-date').textContent = item.publishedAt
            .slice(0, 10)
            .split('-')
            .reverse()
            .join('-')

          getElement<HTMLElement>(newsClone, '.news__description-title').textContent = item.title
          getElement<HTMLElement>(newsClone, '.news__description-source').textContent = item.source.name
          getElement<HTMLElement>(newsClone, '.news__description-content').textContent = item.description
          getElement<HTMLElement>(newsClone, '.news__read-more a').setAttribute('href', item.url)

          fragment.append(newsClone)
        }
      }
    })
    const newsHtml = getElement<HTMLElement>(document.body, '.news')
    newsHtml.innerHTML = ''
    newsHtml.appendChild(fragment)
  }
}

export default News
