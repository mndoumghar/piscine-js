
function letterSpaceNumber(str1) {

    const res = /\w\s\d(?!\w)/g
    return str1.match(res) || []
    

}


console.log(letterSpaceNumber('I like 7up.')) 

// output: ['e 1']