function slice(arr1, start, end) {
    // Declatatoin Tabl array 
    let arr = []
    if (start < 0) {

        start += arr1.length
    }

    if (end < 0) {
        end += arr1.length
    }


    if (end == undefined) {

        for (let i = start; i < arr1.length; i++) {
            // ADD a new elemnts IN array 
            arr.push(arr1[i])
        }

    } else {

        for (let i = start; i < end; i++) {
            arr.push(arr1[i])
        }
    }

    if (typeof arr1 == "string") {
        return arr.join('')
    }
    return arr

}




function chunk(arr, step) {
    let result = []
    let i = 0

    while (i < arr.length) {
        let part = slice(arr, i, i + step)
       // console.log(part,i)
        result.push(part)
        i += step
    }

    return result
}



const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(chunk(animals, 3))