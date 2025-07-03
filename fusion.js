function fusion(object1, object2) {
    let array = [object1, object2]
    const res = {}

    array.forEach(obj => {

        Object.entries(obj).forEach(([key, value]) => {

            if (res[key] !== undefined) {

                if (typeof value === 'object' &&!Array.isArray(value) && typeof res[key] === 'object' && !Array.isArray(res[key])) {

                         res[key] = fusion(res[key], value)

                } else if (Array.isArray(res[key]) && Array.isArray(value)) {

                    res[key] = res[key].concat(value)

                } else if (typeof res[key] === 'string' && typeof value === 'string') {
                    
                    res[key] = res[key] + value 

                } else if (typeof res[key] === 'number' && typeof value === 'number') {

                    res[key] = res[key] + value
                } else {

                    res[key] = value
                }
            } else {
                if (typeof value == "string") {
                    res[key] = value + " "
                } else {
                    res[key] = value
                }
            }
        })
    })

    return res
}

//fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }); // -> { a: 20, b: 10, c: 1 }

console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }));


console.log(fusion({ arr: [1, "2"] }, { arr: [2] }));

//fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }); // ->{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }



console.log(fusion({ arr: [], arr1: [5] }, { arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }));

//fusion({ str: "salem" }, { str: "alem" }); // -> { str: 'salem alem' }
console.log(fusion({ str: "salem" }, { str: "alem" }));
//fusion({ str: "salem" }, { str: "" }); // -> { str: 'salem ' }

console.log(fusion({ str: "salem" }, { str: "" }));

///fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }); // -> { a: 11, x: [], b: { c: 'Salem alem' } }

//console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }))



//fusion( { a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } }); // -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }
console.log(fusion( { a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } }));
//  eq(fusion({ str: 'hello' }, { str: 'there' }).str, 'hello there')
console.log(fusion({ str: 'hello' }, { str: 'there' }));



