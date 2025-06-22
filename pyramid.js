function pyramid(x, y) {
    let res = "";
    const symbolWidth = x.length;

    for (let i = 1; i <= y; ++i ) {
        for (let space = 1; space <= y - i; ++space) {
            res += " ".repeat(symbolWidth);
        }
        for (let k = 0; k < 2 * i - 1; ++k) {
            res += x;
        }
        if (i < y) {
            res += "\n";
        }
    }

    return res; 
}


console.log(pyramid("{}", 5));
