
function opDebounce(options) {
    return options
}

function debounce(f, wait, options) {
    let res
    return function(...arg) {
        res = setTimeout(() => f(...arg), wait)
        return res
    }
}