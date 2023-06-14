import AppLoader from './appLoader';
import { Callback } from '../../types/types';
import { isHTMLElement } from '../../types/types';

class AppController extends AppLoader {
    getSources(callback: Callback) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: Callback) {
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
