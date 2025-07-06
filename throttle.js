export function throttle(f, wait) {
      let boo = false
      return function(...arg) {
        f(...arg)
        boo = true
        setTimeout(() => {
          boo = false

        }, wait)
      }


}

export function opThrottle(f, wait, options = {}) {
  let timeout = null
  let lastTime = null
  let target = null

  return function(...arg) {
    if (timeout) {
      last = this
      target = null
    }
    if (options.leading) {
      f(...arg)
    } else {
      lastTime = this
      target = arg
    }
      const  coldwn  = function() {
        if(options.leading) {
          f.call(this, ...target) 
          lastTime= null
          target = null
          timeout= setTimeout(coldwn, wait)

        } else {
          timeout = null
        }
      }
      timeout = setTimeout(coldwn, wait)
  }

}