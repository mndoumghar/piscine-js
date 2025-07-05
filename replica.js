function replica(output, ...sources) {

if (output instanceof RegExp) {
    return {}
}


  for (const source of sources) {

    for (const key in source) {
      
      if (typeof source[key] === 'object' && source[key] !== null ) {

        if (!output[key] || typeof output[key] !== 'object' || output[key] instanceof RegExp) {

          output[key] = {};
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


  replica({ con: console.log }, { reg: /hello/ })

)

