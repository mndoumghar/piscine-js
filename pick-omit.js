
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
        arr = [arr];
    }

    const result = {};

    for (const key in obj) {
        if (!arr.includes(key)) {
            result[key] = obj[key];
        }
    }

    return result;
}


console.log(omit({drill: 'bosh'}, ['grinders', 'saws']));

 

