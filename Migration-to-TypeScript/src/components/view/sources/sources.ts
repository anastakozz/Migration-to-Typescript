import './sources.css';
import { Source, isHTMLElement } from '../../../types/types';
import { getElement } from '../../../types/types';

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = getElement<HTMLElement>(document.body,'#sourceItemTemp');

        data.forEach((item) => {
            if(sourceItemTemp && sourceItemTemp instanceof HTMLTemplateElement){
                const sourceClone = sourceItemTemp.content.cloneNode(true);
                if(isHTMLElement(sourceClone)){
                    getElement<HTMLElement>(sourceClone, '.source__item-name').textContent = item.name;
            getElement<HTMLElement>(sourceClone, '.source__item').setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
                }
                
            }
            
            
        });

        getElement<HTMLElement>(document.body,'.sources').append(fragment);
    }
}

export default Sources;
