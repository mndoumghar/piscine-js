 function debounce(f, wait, options) {
    return function(...arg) {
            return setTimeout(f(...arg), wait)
    }
}

function opDebounce(options) {
    return options
}