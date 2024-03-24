import Text from './components/text'
import Image from './components/image'
import Button from './components/button'
import Flexbox from './components/flexbox'

const components = { Text, Image, Button, Flexbox }

export default function parse(tree) {
  const data = {}
  for(let key in tree) {
    if(key.match(/web-/)) {
      data[key.match(/web-(.*)/)[1]] = tree[key]
      continue
    }
    if(key.match(/.*-/)) continue
    if(key.match(/web/)) {
      data[key.match(/web-(.*)/)[1]] = tree[key]
      continue
    }
    if(tree[`web-${key}`]) continue
    data[key] = tree[key]
  }

  return components[data.type](data, parse)
}
