import parse from '../parser.js'

export const page = {
  async dispatch(req, address) {
    switch (req) {
      case 'redirect':
        let data = await fetch(`/${address}.json`)
        let parsed = parse(await data.json())
        document.getElementById('content').innerHTML = ""
        document.getElementById('content').appendChild(parsed.element)
    }
  }
}
