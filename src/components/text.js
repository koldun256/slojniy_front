import './text.css'
export default function Text(data, parse) {
  let classes = ['text']
  if(data.classes) for(let className of data.classes) classes.push(className)
  return `<span class="${classes.join(' ')}">${data.content}</span>`
}
