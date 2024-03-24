import { StoreManager } from '../stores/store'

const styles = {
  flex_flow: 'flex-flow',
  justify_content: 'justify-content',
  align_items: 'align-items',
  align_content: 'align-content'
}

export default function Flexbox(data, parse) {
  console.log("creating flwxbox")
  const element = document.createElement('div')
  let children = []

  const setData = newData => {
    console.log('setting data')
    children.forEach(child => child.destroy)
    element.innerHTML = ""
    children = []

    for(let childData of data.data) {
      console.log('creating chlid')
      const child = parse(childData)

      children.push(child)
      element.appendChild(child.element)
    }
    
    element.className = 'flex'
    if(newData.classes) {
      for(let className of newData.classes) element.className += className
    }

    let styleStr = ""
    for(let style in styles) {
      if(style in newData) styleStr += `${styles[style]}: ${newData[style]};`
    }

    element.setAttribute('style', styleStr)
  }
  
  const unsubscribe = 
    StoreManager.onChange({...data, data: []}, setData)

  return {
    element,
    destroy: () => {
      unsubscribe()
      children.forEach(child => child.destroy())
    }
  }
}
