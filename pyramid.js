function pyramid(x, y) {
    let res = "";
    let i, space, k = 0;

    for (i = 1; i <= y; ++i ) {
        k = 0
        for (space = 1; space <= y - i; ++space) {
            res += "  "; 
        }
        while (k != 2 * i-1 ) {
            res += x + " ";
            ++k;
        }
        res += "\n";
    }

    return res; 
}

console.log(pyramid("#", 5));
