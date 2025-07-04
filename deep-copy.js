function deepCopy(obj) {
    if (Array.isArray(obj) || obj !== undefined|| typeof obj ==="string" || typeof obj === "int") {

        return  deepCopy(structuredClone(obj)) 

    } else {
      return obj  
    }
}

console.log(

    deepCopy({ user: 'mika', age: 37 }))


//  copyAndCompare(eq, { user: 'mika', age: 37 })
