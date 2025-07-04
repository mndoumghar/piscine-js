
function filterEntries(obj,ff) {

    const entries = Object.entries(obj)
    const filterredEntries = entries.filter(([key, value]) =>ff(key, value)    
)

    return  Object.fromEntries(filterredEntries)
}
function mapEntries(obj, ff) {
    const entries = Object.entries(obj)
    const mapped = entries.map(([key, value]) => ff(key, value))
    return Object.fromEntries(mapped)
}

function reduceEntries(obj, ff, i) {
  const entries = Object.entries(obj)
  return entries.reduce(
    (accumulator, [key, value]) => ff(accumulator, key, value),
    i
  )
}

function totalCalories(cart) {

    return reduceEntries(cart, (acc, key, value) => acc + value.calories,0)


    
}
function lowCarbs(cart) {
    return filterEntries(cart,(key, value ) => value.carbs<=50)

}

function cartTotal(cart) {
    
    return mapEntries(cart, (key,value) => {
        const total = Object.values(value).reduce((acc, num)=> acc+num, 0)
        return [key,{total}]
    })
}