import News from './news/news'
import Sources from './sources/sources'
import { type NewsResponse, type SourcesResponse } from '../../types/types'

export class AppView {
  private readonly news: News
  private readonly sources: Sources
  constructor () {
    this.news = new News()
    this.sources = new Sources()
  }

  drawNews (data: NewsResponse): void {
    const values = data?.articles ? data?.articles : []
    console.log(values)
    this.news.draw(values)
  }

  drawSources (data: SourcesResponse): void {
    const values = data?.sources ? data?.sources : []
    this.sources.draw(values)
  }
}

export default AppView
