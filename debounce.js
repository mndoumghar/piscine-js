
function debounce(f, wait, options = {}) {
    let bool;
    let v1 = options.leading && !bool;
    
    let lastArgs;
    return function (...args) {
        lastArgs = args;
        
        if (v1) {
           f(...args);
            v1 = false
        }

        clearTimeout(bool);
        bool = setTimeout(() => {
            if (!options.leading) {
                f(...args);
            }
            bool = null;
            v1 = options.leading;
        }, wait);
    };
}

function opDebounce(f, wait, options) {
    return debounce(f, wait, options);
}

