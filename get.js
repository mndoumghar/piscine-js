

function get(src, path) {
    let split = path.split('.')
    let current = src

    for (let i = 0; i < split.length; i++) {


        if (current[split[i]]=== undefined) {
            return undefined
        } else {
            current = current[split[i]]
        }
    }
    return current
}

const src = { nested: { key: 'peekaboo' } }
const path = 'nested.key'
get(src, path) // -> 'peekaboo'

console.log(get(src, path))