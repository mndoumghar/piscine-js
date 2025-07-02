
function pick(obj, arr) {
    let stock = {}
    for (const i of arr) {
        if (obj.hasOwnProperty(i)) {
            stock[i] = obj[i]
        }

    }
    return stock
}


function omit(obj, arr) {
   let stock = {}
    for (const i of arr) {
        if (!obj.hasOwnProperty(i)) {
            stock[i] = obj[i]
        }

    }
    return stock
}

