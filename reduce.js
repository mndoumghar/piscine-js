function fold(arr, fn, test) {
  for (let i = 0; i < arr.length; i++) {

    test = fn(test, arr[i], i, arr)
  }
  return test
}


function foldRight(arr, fn, test) {
  for (let i = arr.length - 1; i >= 0; i--) {
    
    test = fn(test, arr[i], i, arr)
  }
  return test
}

function reduce(arr, fn) {
  
  let test = arr[0]
  for (let i = 1; i < arr.length; i++) {

    test = fn(test, arr[i], i, arr)
  }
  return test
}

function reduceRight(arr, fn) {
 
  let test = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    test = fn(test, arr[i], i, arr)
  }
  return test
}
