
function filterEntries(obj, ff) {
  const entries = Object.entries(obj)
  const filteredEntries = entries.filter(entry => ff(entry))
  return Object.fromEntries(filteredEntries)
}


function mapEntries(obj, ff) {
    const entries = Object.entries(obj)
    const mapped = entries.map(entry => ff(entry))
    return Object.fromEntries(mapped)
}


function reduceEntries(obj, ff, i) {
  const entries = Object.entries(obj)
  return entries.reduce(
    (accumulator, entry) => ff(accumulator, entry),
    i
  )
}
function totalCalories(cart) {
  const total = reduceEntries(cart, (acc, [item, qty]) => {
    const calPer100 = nutritionDB[item]?.calories || 0
    return acc + (qty / 100) * calPer100
  }, 0)
  return Math.round(total * 10) / 10 
}


function lowCarbs(cart) {
  return filterEntries(cart, ([item, qty]) => {
    const carbsPer100 = nutritionDB[item]?.carbs || 0
    const totalCarbs = (qty / 100) * carbsPer100
    return  Math.round(totalCarbs < 50)
  })
}




function cartTotal(cart) {
  return mapEntries(cart, ([item, qty]) => {
    const nutrition = nutritionDB[item] || {}
    const totalNutrition = {}

    for (const [key, value] of Object.entries(nutrition)) {
      totalNutrition[key] = (qty / 100) * value
      totalNutrition[key]= Math.round(total * 100)/100
    }

    return [item, totalNutrition]
  })
}
