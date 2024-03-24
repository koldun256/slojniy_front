import parse from './parser'

(async () => {
  let data = await fetch('/content.json')
  let parsed = parse(await data.json())
  document.getElementById("content").appendChild(parsed.element)
})()
