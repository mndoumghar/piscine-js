function slice(arr1, start, end) {
    // Declatatoin Tabl array 
    let arr = []

    if (start < 0) {
        start += arr1.length
    }

    if (end < 0) {
        end += arr1.length
    }

    if (end === undefined || end > arr1.length) {
        end = arr1.length
    }

    for (let i = start; i < end; i++) {
        arr.push(arr1[i])
    }

    if (typeof arr1 == "string") {
        return join(arr,'')
    }

    return arr
}


function split(str, step) {
    let arr = []
    let word = ""

    if (step == "") {
        for (let index = 0; index < str.length; index++) {
            arr.push(str[index])
        }
        return arr
    }

    for (let index = 0; index < str.length; index++) {
        if (slice(str, index, index + step.length) === step) {
            arr.push(word)
            word = ""
            index += step.length - 1
        } else {
            word += str[index]
        }
    }
    arr.push(word) 
    return arr
}

function join(arr, sep = "") {
    let result = ""
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
        if (i < arr.length - 1) {
            result += sep
        }
    }
    return result
}
console.log(split('a b c', ' '))