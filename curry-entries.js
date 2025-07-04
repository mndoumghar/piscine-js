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


 function reduceScore(personnel) {
  const res = filterCurry(([key, val]) => val.isForceUser)(personnel);
  console.log(res);
  

  return reduceCurry((acc, [key, val]) => acc + (val.pilotingScore + val.shootingScore)  )(res, 0);
}


   function filterForce(personnel) {

// // prettier-ignore
// const personnel = {
//   lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
//   sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//   zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//   ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
//   calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
// }

// console.log(

//     reduceScore(personnel)
// )

// console.log(filterForce(personnel))
// console.log(mapAverage(personnel))


  return filterCurry(([_, val]) => val.isForceUser == true&& val.shootingScore >= 80)(personnel);
}

function mapAverage(personnel) {
    const res = reduceCurry((acc, [key, val]) => acc + (val.pilotingScore + val.shootingScore)) (personnel,0)
    return res/5
}

    

    







// // prettier-ignore
// const personnel = {
//   lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
//   sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//   zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//   ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
//   calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
// }

// console.log(

//     reduceScore(personnel)
// )

// console.log(filterForce(personnel))
// console.log(mapAverage(personnel))

