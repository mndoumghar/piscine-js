function pick(obj, arr) {
    for (const i of arr) {
        if (!obj.hasOwnProperty(i)) {
            return obj
        }
        
    }
    return obj
}

function omit(obj,key) {
    return true
}

const myObject = { a: 1, b: 2, c: 3 };
const keyArray1 = ["a", "b", "c"];
const keyArray2 = ["a", "b", "d"];

console.log(pick(myObject, keyArray1));
console.log(pick(myObject, keyArray2));
