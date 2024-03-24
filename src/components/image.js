import './image.css'
import { StoreManager } from '../stores/store'

export default function Image(data, parse) {
  const element = document.createElement('div')
  const image = document.createElement('img')
  element.appendChild(image)

  const setData = data => {
    image.setAttribute('src', data.content)
    image.setAttribute('alt', data.alt)

    element.className = 'image'
    if(data.classes) {
      for(let className of data.classes) element.className += className
    }
  }
  
  const unsubscribe = 
    StoreManager.onChange({content: data.content, alt: data.alt}, setData)

  setData(data)

  return {
    element,
    destroy: unsubscribe
  }
}
