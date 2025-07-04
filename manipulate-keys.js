const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

function filterKeys(obj, funn) {
    let ff = Object.fromEntries(Object.entries(obj).filter(([key, value]) => funn(key)))
    return ff
}


function mapKeys(obj, gg) {
    const ff = Object.entries(obj).map(([key, value]) => [gg(key), value])
    return Object.fromEntries(ff)
}



function reduceKeys(obj, gg,i= '') {

    const res = Object.keys(obj)
    if (res.length === 0) return '';

    return res.reduce(gg,i)
}
