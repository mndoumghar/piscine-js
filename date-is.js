
const isValid  = (date) => {
    if( date == 'Invalid Date' || typeof date == 'string' || isNaN(date)) {
        return false
    }

    return true
}

const isAfter = (TimeNow, OldTime) => {
    let Time = OldTime - TimeNow 

    if (Time<0) {
        return true
    } 
        return false
    
}


const isBefore = (TimeNow, OldTime) => {
    let Time = OldTime - TimeNow 
    if (Time>0) {
        return true
    } 
        return false
    
}


const isFuture = (OldTime) => {
    let Time = OldTime -  new Date() 
    if (Time>0) {
        return true
    } 
        return false
    
}


const isPast = (OldTime) => {
    if( OldTime == 'Invalid OldTime' || typeof OldTime == 'string' || isNaN(OldTime)) {
        return false
    }
    let Time = OldTime -  new Date() 

    if (Time<0 ) {
        return true
    } 

        return false
    
}
