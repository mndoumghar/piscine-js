function throttle(f, wait, options) {
  let lasttime = 0
  return function(...arg) {
      let now  = Date.now()
      if(now - lasttime>= wait) {
          f(...arg)
          lasttime = now
      }
  }
}

function opThrottle(f, wait, options) {
  
  return throttle(f, wait, options);
}
