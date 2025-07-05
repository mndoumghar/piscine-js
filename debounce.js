function debounce(f, wait, options = {}) {
    
    let res
    return function (...arg) {
        clearTimeout(res)
        res = setTimeout(()=> {f.apply(this, arg)},  wait)
        return res
    }
}

function opDebounce(f, wait, options) {
         return debounce(f, wait, options);
}

