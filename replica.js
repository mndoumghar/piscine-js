

function replica(output, obj) {


  for (const key in obj) {

    if (typeof obj[key] === 'object') {

      output[key] = replica(output[key], obj[key])


    } else {

      output[key] = obj[key]
    }
  }

  return output;
}




console.log(


  replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }) // { a: { b: 1, c: 23 } }

)
