
function deepCopy(obj) {

    if (typeof obj !== "object") {
        return obj
    }
    
    let arr = []
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            arr[i] = deepCopy(obj[i])
        }
        return arr

    }


}
console.log(

    deepCopy({ a: [12, 54] })


);


