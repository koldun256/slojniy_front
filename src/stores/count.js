const callbacks = []
let counter = 0

export const count = {
  sub(selector, callback, args) {
    console.log(`adding callback ${selector} ${args}`)
    callbacks.push(callback)
  },
  dispatch: (count) => {
    console.log('disp', count)
    counter += parseInt(count)
    callbacks.forEach(callback => callback(counter))
  }
}

