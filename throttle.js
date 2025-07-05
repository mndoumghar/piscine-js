function throttle(f, wait, options = {}) {
  let timer = null
  let lastArgs = null
  let lastCallTime = 0
  let leading = options.leading ?? true
  let trailing = options.trailing ?? true

  return function (...args) {
    const now = Date.now()

    if (!lastCallTime && !leading) {
      lastCallTime = now
    }

    const remaining = wait - (now - lastCallTime)

    if (remaining <= 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }

      lastCallTime = now
      f(...args)
    } else if (trailing) {
      lastArgs = args

      if (!timer) {
        timer = setTimeout(() => {
          timer = null
          lastCallTime = leading === false ? 0 : Date.now()
          if (lastArgs) {
            f(...lastArgs)
            lastArgs = null
          }
        }, remaining)
      }
    }
  }
}

function opThrottle(f, wait,options) {

    return throttle(f, wait,options)
}