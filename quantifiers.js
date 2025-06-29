function every(arr, test) {
  for (let i = 0; i < arr.length; i++) {
    if (!test(arr[i], i, arr)) {
      return false
    }
  }
  return true

}
function some(arr, test) {
  for (let i = 0; i < arr.length; i++) {
    if (test(arr[i], i, arr)) {
      return true
    }
  }
  return false
  
}
function none(arr, test) {
  for (let i = 0; i < arr.length; i++) {
    if (test(arr[i], i, arr)) {
      return false
    }
  }
  return true
}
