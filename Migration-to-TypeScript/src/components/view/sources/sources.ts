import './sources.css'
import { type Source, getElement } from '../../../types/types'

class Sources {
  draw (data: Source[]): void {
    const fragment = document.createDocumentFragment()
    const sourceItemTemp = getElement<HTMLElement>(document.body, '#sourceItemTemp')

    if (sourceItemTemp && sourceItemTemp instanceof HTMLTemplateElement) {
      data.forEach((item) => {
        const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement
        getElement<HTMLElement>(sourceClone, '.source__item-name').textContent = item.name
        getElement<HTMLElement>(sourceClone, '.source__item').setAttribute('data-source-id', item.id)
        fragment.append(sourceClone)
        console.log(fragment)
      }
      )
      console.log('result')
    }
    getElement<HTMLElement>(document.body, '.sources').append(fragment)
  }
}

export default Sources
