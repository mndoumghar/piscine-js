const multiply = (x, y) => {
    var i = 0

    var stock = 0
    while (i < y) {

        stock += x
        i++
    }
    return stock
}
const divide = (x, y) => {
    var i = 1

    var res = 0
    if (x == y) {
        return 1
    }

    if (x < y) {
        return 0
    }
    if (y == 1) {
        return x
    }
    if (y == 0 || x == 0) {
        return 0
    }
    while (i < x) {

        x = x - y
        i++
    }
    return i
}
function modulo(x, y) {

    if (x === 0 ) {
        return 0 
    }

    if (x>0  && y > 0) {
    var counter = x
    while (counter>  y) {
        counter -= y
    }
    return counter
    }
}

console.log(multiply(5, 5))
console.log(divide(30, 5))
console.log(modulo(8,2))