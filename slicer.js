 function slice(arr1, start, end) {
    // Declatatoin Tabl array 
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

   



                        

    

//let s = [1, 2, 3, 4, 5];
const animals = ["ant", "bison", "camel", "duck", "elephant"];

//onsole.log(animals.slicel(2, -1));
console.log(slice(animals, 2 ,-1));