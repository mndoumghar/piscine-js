const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
}

function get(key) {

    return sourceObject[key]
}


function set(key, values) {

    sourceObject[key] = values



}


set(sourceObject.num, 16)
console.log(get(sourceObject.num));

