const isPositive = (x) => x > 0 ? true : false
const sign = (x) => isPositive(x) ? 1 : (x < 0) ? -1 : 0

const sameSign  = (x,y) => (sign(x)  == sign(y)) ? true : false
console.log(sign(414))
console.log(sameSign(-4,-121))