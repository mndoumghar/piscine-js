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

export function opThrottle(func, wait, { leading = false, trailing = false } = {}) {
  let last = 0, timeout, lastArgs;
  const run = () => {
    last = Date.now();
    timeout = null;
    func(...lastArgs);
  };
  return (...args) => {
    lastArgs = args;
    const now = Date.now();
    if (leading && now - last >= wait) run();
    else if (!timeout && trailing) {
      timeout = setTimeout(run, wait - (now - last));
    }
  };
}