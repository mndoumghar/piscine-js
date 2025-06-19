const more = (b) => b+1

const less= (x) => x-1

 function add(x, y) {
    return x+y
 }

function sub(w, y) {
    if (w < 0 || y < 0) {
        return 0 
    }
    
    return y-w
}
console.log(sub(3, 10))