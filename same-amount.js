function sameAmount(str, rg1, rg2) {
    const r1 = new RegExp(rg1.source, 'g');
    const r2 = new RegExp(rg2.source, 'g')


    const match1 = str.match(r1) || []
    const match2 = str.match(r2) || []
    console.log(match1, match2)
    

    return match1.length=== match2.length  

}

const str = "table fiootball"
const regix = /fo+/
const globalRegix = /fbo+/g

console.log(sameAmount(str,regix, globalRegix ))