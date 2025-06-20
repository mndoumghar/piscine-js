
const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y: 75, radius: 24 }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')

 function arrToSet(arr) {
    return new Set(arr)
 }

 function arrToStr(arr) {
    return arr.join('')
 }

 function setToArr(set) {
    return [...set]

 }
 function setToStr(set) {
    return [...set].join('')
 }


function strToArr(str) {
   
    return   ( str.split(""))

}

function strToSet(str) {
   
    return   new Set( str.split(""))

}
function mapToObj(map) {

    return  Object.fromEntries(map)
}
function objToArr(obj) {

    return Object.values(obj)
    
}
function objToMap(obj) {
    return new Map(Object.entries(obj));
}
function arrToObj(arr) {
    // [1, ...]
    // {'1': 1 , ...}
    return Object.assign({},arr)
}
function strToObj(str) {
        return Object.assign({},str)
 
}
const superTypeOf = (type) => {
    
  if (type instanceof Map) {
    return "Map";
  } else if (type instanceof Set) {
    return "Set";
  } else if (Array.isArray(type)) {
    return "Array";
  } else if (type === null) {
    return "null";
  } else {
    if (type !== undefined) {
      let type1 = typeof type;
      return type1.charAt(0).toUpperCase() + type1.slice(1).toLowerCase();
    }
    return "undefined";
  }
}

console.log(arrToSet(arr))
console.log((arrToStr(arr)))
console.log(setToArr(set))
console.log(setToStr(set))
console.log(strToArr(str))
console.log(strToSet(str))
console.log(mapToObj(map))
console.log(objToArr(obj))
console.log(objToMap(obj))
console.log(arrToObj(arr))
console.log(strToObj(str))
console.log(superTypeOf(454))