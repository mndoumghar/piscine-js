
escapeStr = "'\\/\""

arr = [4, '2']

obj = {
    str: "hello ",
    num: 1,
    bool: true,
    undef: undefined
}
nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: "hello ",
        num: 1,
        bool: true,
    }
}
Object.freeze(nested)
Object.freeze(obj)



