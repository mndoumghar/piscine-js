function replica(output, ...sources) {
  for (const source of sources) {
    for (const key in source) {
      if (typeof source[key] === 'object' && source[key] !== null && !(source[key] instanceof RegExp)) {

        if (typeof output[key] !== 'object' || output[key] === null || output[key] instanceof RegExp) {
        
          output[key] = Array.isArray(source[key]) ? [] : {};
        
        }
        
        else if (Array.isArray(source[key]) !== Array.isArray(output[key])) {
        
          output[key] = Array.isArray(source[key]) ? [] : {};
        
        }
        
        replica(output[key], source[key]);
      
      } else {
        output[key] = source[key];
      
     
      }
    
    }
  
  }
  
  return output;
}
console.log(


  (replica({ a: 4 }, { a: { b: 1 } })) //, 1)

)

