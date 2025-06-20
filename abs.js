const isPositive  = (x) => x >= 0 ? true : false
const abs = (x) => isPositive(x) ? x  : x * -1 

console.log(isPositive(-12))
console.log(abs(0))
