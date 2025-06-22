function nasa(num) {
    let arr = []

    for (let index = 1; index < num; index++) {
        if (index % 3 == 0 && index % 5 == 0) {
            arr.push("NASA")
        } else if (index % 3 == 0) {
            arr.push("NA")

        } else if (index % 5 == 0) {
            arr.push("SA")
        } else {

            arr.push(String(index))

        }


    }
        return arr.join(' ')
}
console.log(nasa(100))