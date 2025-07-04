function deepCopy(obj) {
    if (Array.isArray(obj)) {

        return  deepCopy(structuredClone(obj)) 

    } else {
      return obj  
    }
}

console.log(

    deepCopy({ name: "mohamed" })

)
