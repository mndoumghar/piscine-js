function RNA(str) {
    let res = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toUpperCase();
        if (char === "C") {
            res.push("G");
        } else if (char === "G") {
            res.push("C");
        } else if (char === "A") {
            res.push("U");
        } else if (char === "T") {
            res.push("A");
        }
    }

    return res.join("");
}

function DNA(str) {
    let res = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toUpperCase();
        if (char === "C") {
            res.push("G");
        } else if (char === "G") {
            res.push("C");
        } else if (char === "U") {
            res.push("A");
        } else if (char === "A") {
            res.push("T");
        }
    }

    return res.join("");
}
