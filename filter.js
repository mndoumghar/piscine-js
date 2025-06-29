
function forEach(arr, test) {
  for (let i = 0; i < arr.length; i++) {
    test(arr[i], i, arr)
  }
}

function filter(arr, test) {
    const result = [];
    forEach(arr, (element, index, arr) => {
        if (test(element, index, arr)) {
            result.push(element);
        }
    });
    return result;
}

function reject(arr, Y) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Y(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

function partition(arr, Y) {
  const truthy = [];
  const falsy = [];
  for (let i = 0; i < arr.length; i++) {
    if (Y(arr[i], i, arr)) {
      truthy.push(arr[i]);
    } else {
      falsy.push(arr[i]);
    }
  }
  return [truthy, falsy];
}