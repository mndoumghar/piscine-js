function throttle(f, wait, options = {}) {
  let lastCallTime = null;
  let timer = null;
  let lastArgs = null;
  
  const leading = options.leading !== false;
  const trailing = options.trailing !== false;

  function callFn(args) {
    lastCallTime = Date.now();
    f(...args);
    lastArgs = null;
  }

  return function (...args) {
    const now = Date.now();
    lastArgs = args;

    if (lastCallTime === null || now - lastCallTime >= wait) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      if (leading) {
        callFn(args);
      }
    } 
    
    else if (!timer && trailing) {
      timer = setTimeout(() => {
        timer = null;
        if (trailing && lastArgs) {
          callFn(lastArgs);
        }
      }, wait - (now - lastCallTime));
    }
  };
}

function opThrottle(f, wait, options) {
  return throttle(f, wait, options);
}