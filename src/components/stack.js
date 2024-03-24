import { StoreManager } from '../stores/store'

export default function Stack(data, parse) {
  const element = document.createElement('div')
  let children = []

  const setData = data => {
    children.forEach(child => child.destroy)
    element.innerHTML = ""
    children = []

    for(let childData of data.children) {
      const child = parse(childData)
      const childContainer = document.createElement('div')

      children.push(child)
      childContainer.appendChild(child.element)
      element.appendChild(childContainer)
    }
    
    element.className = 'stack'
    if(data.classes) {
      for(let className of data.classes) element.className += className
    }
  }
  
   const unsubscribe = 
     StoreManager.onChange({content: data.content, classes: data.classes}, setData)
  setData(data)

  return {
    element,
    destroy: () => children.forEach(child => child.destroy())
  }
}
