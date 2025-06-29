

function longWords(arr) {

  return arr.every(word => word.length > 4  )
}

function oneLongWord(arr) {

  return arr.some(word => word.length >= 10)
}


function noLongWords(arr) {
    
  return !arr.some(word => word.length >= 7)
}

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true