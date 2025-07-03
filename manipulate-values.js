function filterValues(obj, funn) {
    let ff = Object.fromEntries(Object.entries(obj).filter(([key, value]) => funn(value)))
    return ff
}

function mapValues(obj, gg) {

    const ff = Object.entries(obj).map(([key, value]) => [key, gg(value)])

    return Object.fromEntries(ff)
}

function reduceValues(obj, gg,i=0) {
    const res = Object.values(obj)

    return res.reduce(gg,i)

}
