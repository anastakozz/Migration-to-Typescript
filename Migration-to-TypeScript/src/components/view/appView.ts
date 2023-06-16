import News from './news/news'
import Sources from './sources/sources'
import { type NewsResponseI, type SourcesResponseI } from '../../types/types'

export class AppView {
  private readonly news: News
  private readonly sources: Sources
  constructor () {
    this.news = new News()
    this.sources = new Sources()
  }

  drawNews (data: NewsResponseI): void {
    const values = data?.articles ? data?.articles : []
    this.news.draw(values)
  }

  drawSources (data: SourcesResponseI): void {
    const values = data?.sources ? data?.sources : []
    this.sources.draw(values)
  }
}

export default AppView
