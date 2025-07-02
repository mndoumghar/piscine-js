
function pick(obj, arr) {

    let stock = {}
    if (Array.isArray(arr)) {
        for (const i of arr) {
            if (obj.hasOwnProperty(i)) {
                stock[i] = obj[i]
            }

        }
        return stock
    } else {

        return {arr: false}

    }

}


function omit(obj, arr) {
    let stock = {}
    if (Array.isArray(arr)) {

        for (const i of arr) {
            if (!obj.hasOwnProperty(i)) {
                stock[i] = obj[i]
            }

        }
        return stock
    } else {
        return {arr: false}
    }
}

