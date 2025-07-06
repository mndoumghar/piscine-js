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
  let lastCallTime = 0;
  let hasCalledLeading = false;

  return function (...args) {
    const now = Date.now();

    if (!timeout && leading && !hasCalledLeading) {
      func.apply(this, args);
      hasCalledLeading = true;
      lastCallTime = now;
    } else {
      lastArgs = args;
    }

    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;

        if (trailing && lastArgs) {
          func.apply(this, lastArgs);
          lastCallTime = Date.now();
          lastArgs = null;
        }

        hasCalledLeading = false;
      }, wait);
    }
  };
}

