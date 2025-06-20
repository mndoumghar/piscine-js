

const getAcceleration = (Isaac) =>

    Isaac.f != undefined && Isaac.m != undefined

        ? Isaac.f / Isaac.m


        : Isaac.Δv != undefined && Isaac.Δt != undefined
            ? Isaac.Δv / Isaac.Δt 

            : Isaac.d != undefined && Isaac.t!= undefined

                ? (2 * Isaac.d) / (Isaac.t * Isaac.t)

                    : "impossible"

 