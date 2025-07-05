function throttle(f, wait, options = {}) {
  let timer = Date.now()
  let lastArgs = null
  let shouldCall = !options.leading

  return function (...args) {
    if (timer) {
      if (options.trailing) lastArgs = args
      return
    }

    if (!shouldCall) {
      shouldCall = true
      timer = setTimeout(() => {
        timer = null
        if (options.trailing && lastArgs) {
          f(...lastArgs)
          lastArgs = null
          timer = setTimeout(() => {
            timer = null
          }, wait)
        }
      }, wait)
      return
    }

    f(...args)
    timer = setTimeout(() => {
      timer = null
      if (options.trailing && lastArgs) {
        f(...lastArgs)
        lastArgs = null
        timer = setTimeout(() => {
          timer = null
        }, wait)
      }
    }, wait)
  }
}

function opThrottle(f, wait,options) {
    
    return throttle(f, wait,options)
}