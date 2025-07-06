export function throttle(f, wait) {
      let boo = false
      return function(...arg) {
        if(boo) {
          return
        }
        f(...arg)
        boo = true
        setTimeout(() => {
          boo = false

        }, wait)
      }
}

export function opThrottle(f, wait, options = {}) {
  let timeout = null;
  let lastTime = null;
  let target = null;

  return function(...arg) {
    if (timeout) {
      lastTime = this;  
      target = arg;
      return
    }

    if (options.leading !== false) {
      f.apply(this, arg);
    } else {
      lastTime = this;
      target = arg;
    }



     const coldwn = () => {
            if(options.trailing && target) { func.call(lastTime, ...target) ; lastTime = null ; target = null
                timer = setTimeout(coldwn, wait)
            } else { timeout = null }
        }

    timeout = setTimeout(coldwn, wait)
  };
}