const selectors = {
  count: (state, id) => state[id] || 0,
  countAll: (state) => {
    let result = 0
    for(let count of state) result += count
    return result
  },
  totalCost(state) {
    
  }
}

const items = {}
const callbacks = []

export const basket = {
  getState(selector, args) {
    return selectors[selector](items, ...args)
  },
  sub(selector, callback, args) {
    const i = callbacks.push(data => {
      callback(selectors[selector](data, ...args))
    })
    return () => callbacks.splice(i, 1)
  },
  dispatch(req, id) {
    switch (req) {
      case 'add':
        if(!(id in items)) items[id] = 0
        items[id]++
        break
      case 'remove':
        if(!items[id]) return
        items[id]--
        break
    }
    callbacks.forEach(callback => callback({...items}))
  }
}

