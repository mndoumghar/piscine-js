function hasCity(country, cities) {


    return function (city) {


        return cities.includes(city) // check if true find city from this country 
            ? `${city} is a city from ${country}`
            : `${city} is not a city from ${country}`

    }


}


