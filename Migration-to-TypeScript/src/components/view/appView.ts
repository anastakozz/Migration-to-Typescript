import News from './news/news'
import Sources from './sources/sources'
import { type NewsResponse, type SourcesResponse } from '../../types/types'

export class AppView {
  constructor (private readonly news: News, private readonly sources: Sources) {
    this.news = new News()
    this.sources = new Sources()
  }

  drawNews (data: NewsResponse): void {
    const values = data?.articles
    this.news.draw(values)
  }

  drawSources (data: SourcesResponse): void {
    const values = data?.sources
    this.sources.draw(values)
  }
}

export default AppView
