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
  let lastArgs = null;
  let lastThis = null;
  let lastCallTime = 0;

  return function(...args) {
    const now = Date.now();
    const remaining = wait - (now - lastCallTime);

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      lastCallTime = now;
      if (options.leading !== false) {
        f.apply(this, args);
      } else {
        // Queue for trailing call if leading is disabled
        lastArgs = args;
        lastThis = this;
      }
    } else if (!timeout && options.trailing !== false) {
      lastArgs = args;
      lastThis = this;
      timeout = setTimeout(() => {
        lastCallTime = options.leading === false ? 0 : Date.now();
        timeout = null;
        if (lastArgs) {
          f.apply(lastThis, lastArgs);
          lastArgs = null;
          lastThis = null;
        }
      }, remaining);
    }
  };
}