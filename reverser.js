function reverse(arr) {
    let stock = []

    for (let index = arr.length-1; index >=0 ; index--) {
        stock.push(arr[index])
       // console.log(arr[index])

    }
    return stock
    
}

const array1 = ["one", "two", "three"];

console.log(reverse(array1))