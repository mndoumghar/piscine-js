


function efaultCurry(obj1) {

    return function name(obj2) {

            return  Object.assign({}, obj1,obj2)
    }

}

console.log(
efaultCurry({http: 403,connection: 'close',contentType: 'multipart/form-data',})({
  http: 200,
  connection: 'open',
  requestMethod: 'GET'
})
);

function mapCurry(gg) {
  return function(obj) {
    const ff = Object.entries(obj).map(gg);
    return Object.fromEntries(ff);
  };
}






// prettier-ignore
const personnel = {
  lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
  sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
  zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
  ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
  calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
}

// output
// {
//   lukeSkywalker_force: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
//   sabineWren_force:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//   zebOrellios_force:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//   ezraBridger_force:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
//   calebDume_force:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
// }

console.log(mapCurry(([k, v]) => [`${k}_force`, v])(personnel))



function reduceCurry(gg,i=0) {

    return function(obj) {

    const res = Object.entries(obj);
     if (res.length === 0) return '';
   
            return res.reduce((acc, cr) => gg(acc, cr),i);

        
        

    }
    
}

console.log(

        reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0)

)

function filterKeys(obj, funn) {
    let ff = Object.fromEntries(Object.entries(obj).filter(([key, value]) => funn(key)))
    return ff
}


function filterCurry(funn) {

    return function(obj) {
        const res = Object.fromEntries(Object.entries(obj).filter((key) => funn(key)))
            return res

    }
    
}


filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
  str: 'string',
  nbr: 1,
  arr: [1, 2],
})
// output
//{ str: 'string', arr: [1, 2] }

console.log(


filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
  str: 'string',
  nbr: 1,
  arr: [1, 2],
})


)






