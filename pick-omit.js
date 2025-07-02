
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
function omit(obj, keysToOmit) {
    if (!Array.isArray(keysToOmit)) {
        keysToOmit = [keysToOmit];
    }

    const result = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key) && !keysToOmit.includes(key)) {
            result[key] = obj[key]
        }
    }

    return result;
}


console.log(omit({ something: 5, __proto__: { d: 6 } }, 'something'));

 

