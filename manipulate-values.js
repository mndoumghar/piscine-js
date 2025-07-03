function filterValues(obj, funn) {
    let ff = Object.fromEntries(Object.entries(obj).filter(([key, value]) => funn(value)))
    return ff
}

function mapValues(obj, gg) {

    const ff = Object.entries(obj).map(([key, value]) => [key, gg(value)])

    return Object.fromEntries(ff)
}

function reduceValues(obj, gg) {
    const res = Object.values(obj)

    return res.reduce(gg)

}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }


console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))

console.log(mapValues(nutrients, (v) => v + 1))

console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
