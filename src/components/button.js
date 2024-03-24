import './button.css'
import { StoreManager } from '../stores/store'

export default function Button(data, parse) {
  const element = document.createElement('div')
  element.onclick = e => StoreManager.dispatch(data.on_click)

  const setData = data => {
    element.innerText = data.text
    element.className = 'button'
    if(data.classes) {
      for(let className of data.classes) element.className += className
    }
  }
  
  const unsubscribe = 
    StoreManager.onChange({text: data.text, classes: data.classes}, setData)

  setData(data)

  return {
    element,
    destroy: unsubscribe
  }
}
