function throttle(f, wait, options = {}) {
  let lastCallTime = 0;
  let timer = null;
  let lastArgs = null;

  const leading = options.leading !== false;  // true by default
  const trailing = options.trailing !== false; // true by default

  function invoke(args) {
    lastCallTime = Date.now();
    f(...args);
  }

  return function (...args) {
    const now = Date.now();
    if (!lastCallTime && !leading) {
      lastCallTime = now;
    }

    const remaining = wait - (now - lastCallTime);
    lastArgs = args;

    if (remaining <= 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      invoke(args);
    } else if (!timer && trailing) {
      timer = setTimeout(() => {
        timer = null;
        if (trailing && lastArgs) {
          invoke(lastArgs);
          lastArgs = null;
        }
      }, remaining);
    }
  };
}

function opThrottle(f, wait, options) {
  return throttle(f, wait, options);
}

function opThrottle(f, wait,options) {
    
    return throttle(f, wait,options)
}

console.log(
(opThrottle(add, 26, { trailing: true }))    //, 16, 4), 1)


)