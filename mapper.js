function forEach(arr, test) {
  for (let i = 0; i < arr.length; i++) {
    test(arr[i], i, arr)
  }
}



let numbers = [10, 20, 30]

forEach(numbers, function(element, index, array) {
  console.log("Element:", element, "Index:", index, "Array:", array)
})






function map(arr, m) {
  const result = []
  forEach(arr, (element, index, array) => {
    result.push(m(element, index, array))
  })
  return result
}

function flatMap(arr, m) {
  const result = []

  forEach(arr, (element, index, array) => {
    const x = m(element, index, array)

    if (Array.isArray(x)
    ) {
      result.push(...x)

    } else {
      result.push(x)
    }
  });
  return result
}