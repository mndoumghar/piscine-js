
function letterSpaceNumber(str1) {

    const res = /[e|E]\s\d(?!\d)/g
    return str1.match(res)
    

}


console.log(letterSpaceNumber('examplE 1e, example 2000e')) 

// output: ['e 1']