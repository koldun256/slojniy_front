import './button.css'
import { StoreManager } from '../stores/store'

export default function Button(data, parse) {
  console.log(data)
  const element = document.createElement('div')
  element.onclick = e => StoreManager.dispatch(data.onclick)

  const setData = data => {
    element.innerText = data.label
    element.className = 'button'
    if(data.classes) {
      for(let className of data.classes) element.className += className
    }
  }
  
  const unsubscribe = 
    StoreManager.onChange({label: data.label, classes: data.classes}, setData)

  setData(data)

  return {
    element,
    destroy: unsubscribe
  }
}
