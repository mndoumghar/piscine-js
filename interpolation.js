function interpolation(step, start, end, callback, duration) {
    let evrystep = duration / step
    let z = start
        let conter = 0
        const increment = (end - start) 
    let res = setInterval(() => {
        let y = z* 0.2
        let x = conter * evrystep+2


        z+= increment

        conter +=  evrystep


        if ( z== step || end == y) {
            clearInterval(res)
            callback([y, x])
        }
        conter= z


    }, 1000 * evrystep)

}

interpolation(
    5,
    0,
    1,
    (([x, y]) => {
        console.log([x, y])
    })
    ,
    10)