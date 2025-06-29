

function longWords(arr) {

  return arr.every(word => word.length > 6 )
}

function oneLongWord(arr) {

  return arr.some(word => word.length >= 10)
}


function noLongWords(arr) {
    
  return !arr.some(word => word.length >= 7)
}