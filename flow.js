function flow(arr) {
    return function (f, h) {
        let value = f
        let value2 = h
        for (let i = 0; i < arr.length; i++) {

            value = arr[i](value,value2)
        }
        return value
    }
}

