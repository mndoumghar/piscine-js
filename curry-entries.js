function efaultCurry(obj1) {

    return function name(obj2) {

        return Object.assign({}, obj1, obj2)
    }

}

function mapCurry(gg) {
    return function (obj) {
        const ff = Object.entries(obj).map(gg);
        return Object.fromEntries(ff);
    };
}

function reduceCurry(gg, i = 0) {

    return function (obj) {

        const res = Object.entries(obj);
        if (res.length === 0) return '';

        return res.reduce((acc, cr) => gg(acc, cr), i);

    }

}

function filterCurry(funn) {

    return function (obj) {
        const res = Object.fromEntries(Object.entries(obj).filter((key) => funn(key)))
        return res

    }

}


// filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
//     str: 'string',
//     nbr: 1,
// filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
//     str: 'string',
//     nbr: 1,
//     arr: [1, 2],
// })


//     arr: [1, 2],
// })







