const selectors = {
  count: (state, id) => state[id] || 0,
}

const items = {}
const callbacks = []

export const basket = {
  sub(selector, callback, args) {
    console.log('new sub ', selector, args)
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

