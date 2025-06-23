const ionOut = (str) => {
    const regex = /(\w*t(?=ion))/g
    const matches = []
    let match
    while ((match = regex.exec(str)) !== null) {
      //  console.log(matches.push(match[1]))
        matches.push(match[1])
    }

    return matches
};

console.log(ionOut('attention, direction, ghgtionsfhtbb'));
 