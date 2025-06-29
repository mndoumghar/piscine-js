function adder(arr, init) {
  if (init === undefined) {
    init = 0
  }
  return arr.reduce(function(i, j) {
    return i + j
  }, init)
}

function sumOrMul(arr, init) {
  if (init === undefined) {
    init = 0
  }
  return arr.reduce(function(acc, num) {
    if (num % 2 === 0) {
      return acc * num
    } else {
      return acc + num
    }
  }, init)
}

function funcExec(funcs, init) {
  return funcs.reduce(function(acc, fn) {
    return fn(acc)
  }, init)
}
