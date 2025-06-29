function filterShortStateName(map) {

  return map.filter(obj => obj.length < 7)

}


function filterStartVowel(map) {
  return map.filter(obj => ['a', 'i', 'e', 'u', 'o', 'O', 'A', 'E', 'I', 'O', 'U'].includes(obj.charAt(0))

  )
}


function filter5Vowels(arr) {
  return arr.filter(obj => {
    let vowelCount = (obj.match(/[aeiouAUOIE]/gi) || []).length
    return vowelCount >= 5
  })
}

function filter1DistinctVowel(arr) {
  return arr.filter(str => {
    let vowels = str.toLowerCase().match(/[aeiou]/g);
    if (!vowels) {
          return false
    } 
    
    let distinctVowels = new Set(vowels);
    return distinctVowels.size === 1;
  });
}


function multiFilter(arr) {

  return arr.filter(obj => {

    let a1 = obj.capital.length >= 8

    let a2 = !/[aeiou]/i.test(obj.name.charAt(0))

    let a3 = /[aeiou]/i.test(obj.tag)

    let a4 = obj.region !== "South"

    return a1 && a2 && a3 && a4
  })
}