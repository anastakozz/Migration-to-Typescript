import './sources.css'
import { type SourceI } from '../../../types/types'
import { getElement } from '../../../types/utils'

class Sources {
  draw (data: SourceI[]): void {
    const fragment = document.createDocumentFragment()
    const sourceItemTemp = getElement<HTMLElement>(document.body, '#sourceItemTemp')

    if (sourceItemTemp && sourceItemTemp instanceof HTMLTemplateElement) {
      data.forEach((item) => {
        const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement
        getElement<HTMLElement>(sourceClone, '.source__item-name').textContent = item.name
        getElement<HTMLElement>(sourceClone, '.source__item').setAttribute('data-source-id', item.id)
        fragment.append(sourceClone)
      }
      )
    }
    getElement<HTMLElement>(document.body, '.sources').append(fragment)
  }
}

export default Sources
