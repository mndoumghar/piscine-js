
function triangle(x, y) {
    let res= ""
    for (let i = 1; i <= y; i++) {
        for (let j = 0; j < i; j++) {
            res += x
        }
        if (i < y) {
            
            res+="\n"

        }
        }
        return res
}

console.log(triangle("#", 5))
