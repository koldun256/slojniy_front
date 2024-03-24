import Text from "./components/text"
import Stack from "./components/stack"

export default function parse(tree) {
  let compClass
  switch(tree.type) {
    case 'text':
      compClass = Text
      break
    case 'stack':
      compClass = Stack
      break
  }
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
  return compClass(data, parse)
}
