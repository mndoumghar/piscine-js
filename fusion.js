function fusion(object1, object2) {
    let array = [object1, object2]
    const res = {}

    array.forEach(obj => {

        Object.entries(obj).forEach(([key, value]) => {

            if (res[key] !== undefined) {

                if (typeof value === 'object' &&!Array.isArray(value) && typeof res[key] === 'object' && !Array.isArray(res[key])) {

                         res[key] = fusion(res[key], value)

                } else if (Array.isArray(res[key]) && Array.isArray(value)) {

                    res[key] = res[key].concat(value)

                } else if (typeof res[key] === 'string' && typeof value === 'string') {
                    
                    res[key] = res[key] + value 

                } else if (typeof res[key] === 'number' && typeof value === 'number') {

                    res[key] = res[key] + value
                } else {

                    res[key] = value
                }
            } else {
                if (typeof value == "string") {
                    res[key] = value + " "
                } else {
                    res[key] = value
                }
            }
        })
    })

    return res
}
