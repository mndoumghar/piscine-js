
const first = blockChain({ a: 1 })

console.log(first.index) //           -> 1
console.log(first.data) //            -> { a: 1 }
console.log(first.prev) //            -> { index: 0, hash: "0" }
console.log(first.hash) //            -> '1103f27'
console.log(hashCode('10{"a":1}')) // -> '1103f27'

const second = first.chain({ hello: 'world' })
console.log(second.hash) //                           -> '18drvvc'
console.log(hashCode('21103f27{"hello":"world"}')) // -> '18drvvc'

const chain = second
  .chain({ value: 4455 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' })

const fork = second
  .chain({ value: 335 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' })

console.log(chain.hash) //  -> '1qr3qfs'
console.log(fork.hash) //   -> '1x9gsc1'
console.log(chain.index) // -> 5
console.log(fork.index) //  -> 5