

function dogYears(name, age) {

    if (name == "earth") {      
    
        return Number(((age * 7) / (365.25 * 24 * 60 * 60)).toFixed(2))

    }

        if (name == "mercury") {

            return Number(((age * 7) / (0.2408467 * 24 * 60 * 60)).toFixed(2)) 
        }
    if (name == "venus") {
            return Number(((age * 7) / (0.61519726 * 24 * 60 * 60)).toFixed(2))
        }
    if (name == "mars") {
            return Number(((age * 7) / (1.8808158 * 24 * 60 * 60)).toFixed(2))
        }
    if (name == "jupiter") {
            return Number(((age * 7) / (11.862615 * 24 * 60 * 60)).toFixed(2))
        }
    if (name == "saturn") {
            return Number(((age * 7) / (29.447498 * 24 * 60 * 60)).toFixed(2))
        }
    if (name == "uranus") {
            return Number(((age * 7) / (84.016846 * 24 * 60 * 60)).toFixed(2))
        }
    if (name == "neptune") {
            return Number(((age * 7) / (164.79132 * 24 * 60 * 60)).toFixed(2))
        }


}
console.log(dogYears("earth", 1000000000))