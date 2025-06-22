 function slice(arr1, start, end) {
    let arr = []
    if (start < 0) {

            start += arr1.length
        }

         if (end < 0) {
            end += arr1.length
        }


    if (end == undefined) {
        
        for (let i = start; i < arr1.length; i++) {
            // ADD a new elemnts IN array 
            arr.push(arr1[i])
        }

    } else {
       
        for (let i = start; i < end; i++) {
            arr.push(arr1[i])
        }
    }

if (typeof arr1 == "string") {
  return  arr.join('')
} 
return arr

}


function cutFirst(arr1) {
    let res = slice(arr1,2,undefined)
    return res
}
function cutLast(arr1) {
     let res = slice(arr1,0,-2)

    return res
}
function cutFirstLast(arr1) {
    let res = slice(arr1,2,-2)
    return res

    
}
function keepFirst(arr1) {
   
    return arr1[0][0] + arr1[0][1]
}
function keepLast(arr1) {
        return arr1[arr1.length -1 ][0] + arr1[arr1.length -1][1]


}


function keepFirstLast(arr1) {
        return arr1[0][0] + arr1[0][1] + arr1[arr1.length -1 ][0] + arr1[arr1.length -1][1] 


}



const fruits = ["Banana", "Orange", "Apple", "Mango","helo", 'fd'];

console.log(cutFirst(fruits))
console.log(cutLast(fruits))
console.log(cutFirstLast(fruits))

console.log(keepFirst(fruits))
console.log(keepLast(fruits))
console.log(keepFirstLast(fruits))