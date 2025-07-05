function throttle(f, wait, options = {}) {
    let lastCallTime = 0;
    let timer = null;
    let lastArgs = null;

    const leading = options.leading !== false;
    const trailing = options.trailing !== false;

    function callFn(args) {
        lastCallTime = Date.now();
        f(...args);
    }

    return function (...args) {
        const now = Date.now();
        lastArgs = args;


        if (!lastCallTime && !leading) {
            lastCallTime = now;
        }

        const timeSinceLastCall = now - lastCallTime;
        const remainingTime = wait - timeSinceLastCall;

        if (remainingTime <= 0 || remainingTime > wait) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            callFn(args);
        }
        else if (!timer && trailing) {
            timer = setTimeout(() => {
                timer = null;
                if (trailing && lastArgs) {
                    callFn(lastArgs);
                    lastArgs = null;
                }
            }, remainingTime);
        }
    };
}

function opThrottle(f, wait, options) {
    return throttle(f, wait, options);
}