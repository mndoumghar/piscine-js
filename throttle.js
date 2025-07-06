export function throttle(func, wait) {
  let last = 0, timeout;
  return (...args) => {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      func(...args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        last = Date.now();
        func(...args);
      }, wait - (now - last));
    }
  };
}

export function opThrottle(func, wait, { leading = false, trailing = true } = {}) {
  let timeout = null;
  let lastArgs = null;
  
  return function(...args) {
    lastArgs = args;
    
    if (!timeout) {
      if (leading) {
        func.apply(this, lastArgs);
      }
      
      timeout = setTimeout(() => {
        timeout = null;
        if (trailing && lastArgs) {
          func.apply(this, lastArgs);
          lastArgs = null;
        }
      }, wait);
    }
  };
}