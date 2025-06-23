
function letterSpaceNumber(str1) {

    const res = /\w\s\d(?!\d)/g
    return str1.match(res)
    

}


console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.')) 

// output: ['e 1']