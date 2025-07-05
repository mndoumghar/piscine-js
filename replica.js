function replica(output, ...sources) {

  for (const source of sources) {

    for (const key in source) {
      
      if (typeof source[key] === 'object' && source[key] !== null) {

        if (!output[key] || typeof output[key] !== 'object') {

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


  replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }) // { a: { b: 1, c: 23 } }

)
