import './text.css'
import { StoreManager } from '../stores/store'

export default function Text(data, parse) {
  const element = document.createElement('span')

  const setData = data => {
    element.innerText = data.content
    element.className = 'text'
    if(data.classes) {
      for(let className of data.classes) element.className += className
    }
  }
  
  const unsubscribe = 
    StoreManager.onChange({content: data.content, classes: data.classes}, setData)

  return {
    element,
    destroy: unsubscribe
  }
}
