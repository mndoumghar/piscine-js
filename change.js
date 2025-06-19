
function get(key) {

    return sourceObject[key]
}


function set(key, values) {

    sourceObject[key] = values



}


set(sourceObject.num, 16)
console.log(get(sourceObject.num));

