import AppLoader from './appLoader'
import { isHTMLElement, type NewsResponse, type SourcesResponse } from '../../types/types'

class AppController extends AppLoader {
  getSources (callback: (data: SourcesResponse) => void): void {
    super.getResp(
      {
        endpoint: 'sources'
      },
      callback
    )
  }

  getNews (e: Event, callback: (data: NewsResponse) => void): void {
    let target: EventTarget | null = e.target
    if (isHTMLElement(target)) {
      const newsContainer: HTMLElement = e.currentTarget as HTMLElement
      if (isHTMLElement(newsContainer)) {
        while (target !== newsContainer) {
          if (isHTMLElement(target)) {
            if (target.classList.contains('source__item')) {
              const sourceId = target.getAttribute('data-source-id')
              if (sourceId !== null) {
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                  newsContainer.setAttribute('data-source', sourceId)
                  super.getResp(
                    {
                      endpoint: 'everything',
                      options: {
                        sources: sourceId
                      }
                    },
                    callback
                  )
                }
              }
              return
            }
          }
          if (isHTMLElement(target) && (target.parentNode != null)) {
            target = target.parentNode
          }
        }
      }
    }
  }
}

export default AppController
