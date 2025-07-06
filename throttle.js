export function throttle(f, wait) {
      let boo = false
      return function(...arg) {
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

    const coldwn = function() {
      if (options.leading === false && target) {
        f.apply(lastTime, target);
      }
      timeout = null;
      target = null;
      lastTime = null;
    };

    timeout = setTimeout(coldwn, wait);
  };
}