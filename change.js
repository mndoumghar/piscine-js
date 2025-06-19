
function get(key) {

    return sourceObject[key]
}


function set(key, values) {

    sourceObject[key] = values


    return  sourceObject[key]
}


set(sourceObject.num, 16)
console.log(get(sourceObject.num));

