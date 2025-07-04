function defaultCurry(obj1) {
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

function reduceCurry(gg) {
  return function (obj, i = '') {
    const res = Object.entries(obj);
        if (res.length === 0) return i;
    return res.reduce((acc, cr) => gg(acc, cr), i);
  };
}


function filterCurry(funn) {
    return function (obj) {
        const res = Object.fromEntries(Object.entries(obj).filter((key) => funn(key)))
        return res

    }
}

console.log(
reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0)

);

 function reduceScore(personnel, i) {
  const res = filterCurry(([key, val]) => val.isForceUser)(personnel);
  return reduceCurry((acc, [key, val]) => acc + (val.pilotingScore + val.shootingScore)  )(res, i);
}

   function filterForce(personnel) {

  return filterCurry(([_, val]) => val.isForceUser == true&& val.shootingScore >= 80)(personnel);
}
    
function mapAverage(personnel) {
  return mapCurry(([key, val]) => [
    key,
    {
      ...val,
      averageScore: (val.pilotingScore + val.shootingScore) / 2,
    },
  ])(personnel);
}

