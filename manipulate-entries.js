
function filterEntries(obj, ff) {
  const entries = Object.entries(obj);
  const filteredEntries = entries.filter(entry => ff(entry));
  return Object.fromEntries(filteredEntries);
}


function mapEntries(obj, ff) {
    const entries = Object.entries(obj)
    const mapped = entries.map(entry => ff(entry))
    return Object.fromEntries(mapped)
}


function reduceEntries(obj, ff, i) {
  const entries = Object.entries(obj);
  return entries.reduce(
    (accumulator, entry) => ff(accumulator, entry),
    i
  );
}


function totalCalories(cart) {

    return reduceEntries(cart, (acc, [key, value]) => acc + value.calories,0)
    
}
function lowCarbs(cart) {
  return filterEntries(cart, ([key, value]) => {
    
    if (typeof value === 'object' && value !== null) {
      return value.carbs <= 50;
    }
    if (typeof value === 'number') {
      return value <= 50;
    }
    return false;
  });
}



function cartTotal(cart) {
    
    return mapEntries(cart, ([key,value]) => {
        const total = Object.values(value).reduce((acc, num)=> acc+num, 0)
        return [key,{total}]
    })
}