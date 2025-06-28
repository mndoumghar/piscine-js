
function citiesOnly(map) {
    let arr = []
    for (let i = 0; i < map.length; i++) {
        arr.push(map[i].city)

    }
    return arru
}



function upperCasingStates(arr) {
    var stock = []
    if (Array.isArray(arr)) {
        var arru = []
        for (let i = 0; i < arr.length; i++) {
            var splt = arr[i].split(" ")
            for (let j = 0; j < splt.length; j++) {

                arru.push(capitalizeFirstLetter(splt[j]))
            }
            stock.push(arru.join(" "))
            arru = []
        }

        return stock
    }
}



function capitalizeFirstLetter(val) {

    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}




function fahrenheitToCelsius(f) {
    var arr = []
    for (let i = 0; i < f.length; i++) {
        arr.push(Math.floor((parseInt(f[i]) - 32) / 1.8).toFixed() + '°C')
    }

    return arr

}


function trimTemp(map) {
  let result = [];
  for (let i = 0; i < map.length; i++) {
    let city = map[i].city
    let temperature = map[i].temperature.replace(/\s+/g, '')
    result.push({
      city: city,
      temperature: temperature,
    });
  }

  return result
}


function tempForecasts(map) {
        let res = []

        for (let i = 0; i < map.length; i++) {

        res.push(Math.floor((parseInt(map[i].temperature) - 32) / 1.8).toFixed() + '°Celsius in '+ map[i].city + ", "+map[i].state)
            
        }


        return res


    
}
