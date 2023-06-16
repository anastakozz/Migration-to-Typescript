import { type OptionsType } from '../../types/types'

class Loader {
  constructor (private readonly baseLink: string, private readonly options: OptionsType) {
    this.baseLink = baseLink
    this.options = options
  }

  public getResp<T>(
    { endpoint, options = {} }: { endpoint: string, options?: OptionsType },
    callback: (data: T) => void
  ): void {
    this.load('GET', endpoint, callback, options)
  }

  private errorHandler (res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) { console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`) }
      throw Error(res.statusText)
    }

    return res
  }

  private makeUrl (options: OptionsType, endpoint: string): string {
    const urlOptions = { ...this.options, ...options }
    let url = `${this.baseLink}${endpoint}?`

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`
    })

    return url.slice(0, -1)
  }

  private load<T>(method: string, endpoint: string, callback: (data: T) => void, options = {}): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then(async (res) => await res.json())
      .then((data: T) => { callback(data) })
      .catch((err) => { console.error(err) })
  }
}

export default Loader
