
function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (obj instanceof RegExp) {
    
    return new RegExp(obj)
  }

  if (typeof obj === "function") {
    return obj
  }

  if (Array.isArray(obj)) {
    let arr = [];
    for (let i = 0; i < obj.length; i++) {
      arr[i] = deepCopy(obj[i]);
    }
    return arr
  }

  const copy = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}




function replica(assign,obj) {


  const ss = structuredClone(assign,obj)

        return (deepCopy(ss),deepCopy(obj))  
}


console.log(


replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }) // { a: { b: 1, c: 23 } }

)
