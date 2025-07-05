function replica(output, ...sources) {
  for (const source of sources) {
    for (const key in source) {
      if (typeof source[key] === 'object' && source[key] !== null && !(source[key] instanceof RegExp)) {
        if (Array.isArray(source[key]) && (!output[key] || !Array.isArray(output[key]))) {
          output[key] = [];
        }
        else if (!Array.isArray(source[key]) && (!output[key] || Array.isArray(output[key]))) {
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


  (replica({ a: { b: [2] } }, { a: [4] }).a, [4])

)

