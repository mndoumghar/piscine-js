
const modulo = (x, y) => {
    if (y === 0) return 0;
    if (x === 0) return 0;

    let negative = x < 0;
    x = Math.abs(x);
    y = Math.abs(y);

    while (x >= y) {
        let multiple = y;
        let multipleCount = 1;

        while ((multiple + multiple) <= x) {
            multiple += multiple;AA
            multipleCount += multipleCount;
        }

        x -= multiple;
    }

    return negative ? -x : x;
}



function floor(num) {
    let i = modulo(num, 1);
    if (num < 0 && i !== 0) {
        return num - i - 1;
    }
    return num - i;
}

function ceil(num) {
    let i = modulo(num, 1);
    if (num < 0) {
        return num - i;
    }
    if (i === 0) {
        return num - i;
    }
    return num - i + 1;
}

function trunc(nb) {
    return nb < 0 ? ceil(nb) : floor(nb);
}

function round(num) {
    let i = modulo(num, 1);

    if (num < 0) {
        if (i <= -0.5) {
            return floor(num);
        } else {
            return ceil(num);
        }
    } else {
        if (i >= 0.5) {
            return ceil(num);
        } else {
            return floor(num);
        }
    }
}
