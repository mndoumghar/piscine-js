const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
}
function get() {
    return sourceObject.num
}

function set(num) {

    sourceObject.num = num

}

set(11)
console.log(get())
