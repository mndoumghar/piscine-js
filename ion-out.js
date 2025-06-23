const ionOut = (str) => {
    const reg = /(i)ron(?!t)/g

    return str.match(reg)  || []

}
console.log(ionOut('tiron fat iront sat on iron mat. '))