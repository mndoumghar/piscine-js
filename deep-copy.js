
function deepCopy(obj) {
    if (typeof obj !== "object") {
        return obj
    }
    let arr = []
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            arr[i] = deepCopy(obj[i])
        }
        return arr
    }

    const copy = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = deepCopy(obj[key])
    }
  }
  return copy;
}