
function interpolation(step, start, end, callback, duration) {
    let evrystep = duration / step

    let res = setInterval(() => {
        let y = start * 0.2
        let x = start * evrystep
        start++

        if (duration == x && y == end) {
            clearInterval(res)
            callback([y, x])

        }


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