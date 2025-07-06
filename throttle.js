export const throttle = (fn, wait) => {
    let boo = false
    return (...args) => {
        if (boo) return
        fn(...args)
        boo = true
        setTimeout(() => {
            boo = false
        }, wait)
    }
}

export const opThrottle = (f, wait, options = {}) => {    
    let timeout = null, last = null, trargs = null
    return function (...args) {
        if(timeout) { last = this ; trargs = args ; return }
        if(options.leading){ f.call(this, ...args) } else { last = this
            trargs = args}
        const boo = () => {
            if(options.trailing && trargs) { f.call(last, ...trargs) ; last = null ; trargs = null
                timeout = setTimeout(boo, wait)
            } else { timeout = null }
        }
    timeout = setTimeout(boo, wait)
    }
}