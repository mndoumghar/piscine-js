function throttle(f, wait) {
    let shouldwiat = false
    let waitainArg

    const timoutFun = () => {
        if (waitainArg == null) {
            shouldwiat = false
        } else {
            f(...waitainArg)
            waitainArg = null
            setTimeout(timoutFun, wait)
        }
    }
    return function (...arg) {
        if (shouldwiat) {
            waitainArg = arg
            return

        }

        f(...arg)
        shouldwiat = true
        setTimeout(timoutFun, wait)

    }
}

function opThrottle(f, wait) {
    return throttle(f, wait)
}