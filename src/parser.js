import Text from "./components/text"
import Stack from "./components/stack"

export default function parse(tree) {
  console.log(tree)
  let compClass
  switch(tree.type) {
    case 'text':
      compClass = Text
      break
    case 'stack':
      compClass = Stack
      break
  }
  return compClass(tree, parse)
}
