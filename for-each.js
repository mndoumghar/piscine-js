function forEach(arr, test) {
  for (let i = 0; i < arr.length; i++) {
    test(arr[i], i, arr);
  }
}