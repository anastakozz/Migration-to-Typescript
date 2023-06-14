import Loader from './loader'

class AppLoader extends Loader {
  constructor () {
    super('https://rss-news-api.onrender.com/', {
      apiKey: '69c66c08747f4db0affa02479db5a460'
    })
  }
}

export default AppLoader
