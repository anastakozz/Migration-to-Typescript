import AppLoader from './appLoader';
import { isHTMLElement } from '../../types/types';
import { NewsResponse } from '../../types/types';
import { SourcesResponse } from '../../types/types';

class AppController extends AppLoader {
    getSources(callback: (data: SourcesResponse) => void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: NewsResponse) => void) {
        let target: EventTarget | null = e.target;
        if(isHTMLElement(target)){
            const newsContainer: HTMLElement = e.currentTarget as HTMLElement;
            if(isHTMLElement(newsContainer)){
                while (target !== newsContainer) {
                    if(isHTMLElement(target)){
                        if (target.classList.contains('source__item')) {
                            const sourceId = target.getAttribute('data-source-id');
                            if (sourceId){
                                if (newsContainer.getAttribute('data-source') !== sourceId) {
                                newsContainer.setAttribute('data-source', sourceId);
                                super.getResp(
                                    {
                                        endpoint: 'everything',
                                        options: {
                                            sources: sourceId,
                                        },
                                    },
                                    callback
                                );
                            }
                            }
                            return;
                        }
                    }
                        if(isHTMLElement(target) && target.parentNode){
                            target = target.parentNode ;
                        }
                    }
            }
        }
    }
}

export default AppController;
