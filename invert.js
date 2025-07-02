

function invert(obj) {

    let key = Object.values(obj)
    let value = Object.keys(obj)
    let stock = {}
    for (let i = 0; i < value.length; i++) {
        stock[key[i]] = value[i]

    }
    
    return stock



}



console.log(invert({ language: 'english' }));

