
const multiply = (x, y) => {
    var i = 0
    var sign = ''
    if (x < 0 || y < 0) {

        sign = '-'
    }
    if (x < 0 && y < 0) {

        sign = ''
    }
    x = Math.abs(x)
    y = Math.abs(y)



    var stock = 0
    while (i < y) {

        stock += x
        i++
    }
    return Number(sign + stock)
}
const divide = (x, y) => {
    if (y === 0) return 0 
    if (x === 0) return 0

    let negative = (x < 0) !== (y < 0)

    console.log("rr" ,negative)

    x = Math.abs(x)
    y = Math.abs(y)

    let count = 0;
    while (x >= y) {
        x -= y
        count++
    }

    return negative ? -count : count
}

 console.log(divide(78, 34))

const modulo = (x, y) => {
    if (y === 0) return 0
    if (x === 0) return 0

    let negative = x < 0
    x = Math.abs(x)
    y = Math.abs(y)

    while (x >= y) {
        x -= y;
    }

    return negative ? -x : x
};


console.log(multiply(123, -22))
console.log(multiply(-22, -123))
console.log(modulo(8, 2))