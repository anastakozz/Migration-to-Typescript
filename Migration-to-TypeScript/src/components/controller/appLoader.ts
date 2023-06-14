import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: '45f726bbf30f4c21aa1c4afb490448b6'
        });
    }
}

export default AppLoader;
