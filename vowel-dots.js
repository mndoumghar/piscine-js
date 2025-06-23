//  const res = /\w\s\d(?!\w)/g
// str1.match(res) || []

function vowelDots(str) {

    const vowels = /([aeiuoAEIUO])/g
    return str.match(vowelDots)
}

console.log(vowelDots("it's .a pen"))