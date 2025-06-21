const multiply = (x, y) => {
    var i = 0
    var sign = ''
    if(x<0 || y<0) {
    
        sign = '-'  
    }
    if(x<0 && y<0) {
    
        sign = ''  
    }
    x=  Math.abs(x)
    y = Math.abs(y)

    

    var stock = 0
    while (i < y) {

        stock += x
        i++
    }
    return Number(sign+stock)
}
const divide = (x, y) => {

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
        var i = 0

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

console.log(multiply(123, -22))
console.log(multiply(-22, -123) )
console.log(divide(8, 4))
console.log(modulo(8,2))