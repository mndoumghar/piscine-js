const isPositive  = (x) => x > 0 ? true : false
const abs = (x) => isPositive(x) || x== 0 ? x  : x * -1 

console.log(isPositive(0))
console.log(abs(0))
