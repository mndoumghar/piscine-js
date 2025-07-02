
function pick(obj, arr) {
    if (!Array.isArray(arr)) {
        arr = [arr]
    }

    let stock = {}
    for (const i of arr) {
        if (obj.hasOwnProperty(i)) {
            stock[i] = obj[i]
        }

    }
    return stock


}


function omit(obj, arr) {
    if (!Array.isArray(arr)) {
        arr = [arr]
    }

    let stock = {}

    for (const i of arr) {
        if (!obj.hasOwnProperty(i)) {
            stock[i] = obj[i]
            if (obj[i] === undefined) {
                return {}
            }
        }

    }
    return stock

}
 

