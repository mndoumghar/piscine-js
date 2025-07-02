function pick(obj, arr) {
    for (const i of arr) {
        if (!obj.hasOwnProperty(i)) {
            return false
        }
        
    }
    return true
}

function omit(obj,key) {
    return true
}

