let k = ''

const repeat = (str, num) => {



    if (num <= 0) {
        return k
    }

    k += str


    return repeat(str, num - 1)



}

console.log(repeat("a", 3))
