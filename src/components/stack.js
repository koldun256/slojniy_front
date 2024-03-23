export default function Stack(data, parse) {
  let children = ""
  for(let child of data.children) {
    children += `<div>${parse(child)}</div>`
  }
  return children
}
