const numbers = "hello zero 01 talnr x poler"


function indexOf(arr, ch, index) {
    if (index === undefined) {
        index = 0
    }



    while (index <= arr.length) {

        if (arr[index] == ch) {
            return index
        }

        index++
    }

    return -1


}

function lastIndexOf(arr, ch, index) {
    if (index === undefined) {
        index = arr.length-1
    }



    while (index >= 0) {

        if (arr[index] == ch) {
            return index
        }


        index--
    }

    return -1


}
function includes(arr,ch, index) {

 if (index === undefined) {
        index = 0
    }



    while (index <= arr.length) {

        if (arr[index] == ch) {
            return true
        }

        index++
    }

    return false



}

    



console.log(lastIndexOf(numbers, 'x', 2))
