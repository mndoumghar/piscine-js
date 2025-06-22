

function chunk(arr, step) {
    let result = []
    let i = 0

    while (i < arr.length) {
        
        let part = arr.slice(i, i + step)
        if ( typeof part != undefined) {
            result.push(part)
        i += step
        }
        
    }

    return result
}



const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(chunk(['a', 'b', 'c', 'd'], 3))