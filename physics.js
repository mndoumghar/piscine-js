
/*

const getAcceleration = (obj) => {
  if (obj.f != undefined && obj.m != undefined) {
    return obj.f / obj.m;
  } else if (obj.Δv != undefined && obj.Δt != undefined) {
    return obj.Δv / obj.Δt;
  } else if (obj.t != undefined && obj.d != undefined) {
    return 2*obj.d/Math.pow(obj.t,2)
  } else {
    return "impossible";
  }
};
*/

const getAcceleration = (Isaac) =>

    Isaac.f != undefined && Isaac.m != undefined

        ? Isaac.f / Isaac.m


        : Isaac.Δv != undefined && Isaac.Δt != undefined
            ? Isaac.Δv / Isaac.Δt 

            : Isaac.d != undefined && Isaac.t!= undefined

                ? (2 * Isaac.d) / (Isaac.t * Isaac.t)

                    : "impossible"

 