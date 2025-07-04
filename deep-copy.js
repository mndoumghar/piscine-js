
function deepCopy(obj) {


return structuredClone(deepCopy(obj))


    // let res = []
    // if (d == 0) {
    //     res.push(point)
    // } else {
    //     ex1 = [...point]
    //     ex1.push(0)
    //     ex2 = [...point]
    //     ex2.push(1)
    //     deepCopy(d - 1, ex1)
    //     deepCopy(d - 1, ex2)
    // }
}

