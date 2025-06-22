function reverse(arr) {
    let stock = []
    let res = ''
    if (Array.isArray(arr)) {

        for (let index = arr.length - 1; index >= 0; index--) {

            stock.push(arr[index])



        }
        return stock


    } else {
        for (let index = arr.length - 1; index >= 0; index--) {
            res += arr[index]
        }
        return res
    }


}

const array1 = ["one", "two", "three"];

console.log(reverse(array1))