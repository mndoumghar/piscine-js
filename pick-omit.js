
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
            let stock = {}

        for (let i = 0; i < arr.length; i++) {
            stock[arr] =false
            
        } 
            return stock
        

    }

}


function omit(obj, arr) {
    if (Array.isArray(arr)) {
    let stock = {}

        for (const i of arr) {
            if (!obj.hasOwnProperty(i)) {
                stock[i] = obj[i]
            }

        }
        return stock
    } else {
            let stock = {}

        for (let i = 0; i < arr.length; i++) {
            stock[arr] =false
            
        } 
            return stock
        

    }
}
console.log(pick({a: "dd"}, 'ageVerified'));


