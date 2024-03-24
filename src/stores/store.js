import { basket } from './basket'

const stores = { basket }

function getPath(obj, path) {
  let pointer = obj
  for(let i = 0; i < path.length; i++) {
    pointer = pointer[path[i]]
  }
  return pointer
}

function setPath(obj, path, val) {
  let pointer = obj
  for(let i = 0; i < path.length - 1; i++) {
    pointer = pointer[path[i]]
  }
  pointer[path[path.length - 1]] = val
}

export const StoreManager = {
  onChange(data, callback, path=[]) {
    const node = getPath(data, path)
    if(typeof(node) == 'string') {
      const match = node.match(/^\$(\w+)\.(\w+)\((.*)\)$/)
      if(match) {
        const [ storeName, selector, args ] = match.slice(1)
        const store = stores[storeName]
        setPath(data, path, 'bipki')
        const unsub = store.sub(selector, newVal => {
          setPath(data, path, newVal)
          callback(data)
        }, args)
        return unsub
      }
      return () => {}
    }
    
    const unsubs = []
    for(let key in node) {
      if(!data[key]) continue
      unsubs.push(StoreManager.onChange(data, callback, [...path, key]))
    }

    return () => {
      for(let unsub of unsubs) unsub()
    }
  },
  dispatch(command) {
    const [_, storeName, action, args] = command.match(/^\$(\w+)\.(\w+)\((.*)\)$/)
    stores[storeName].dispatch(action, args.split(','))
  }
}
