const addWeek = (dateNow) => {
    let obj = {
        weeks: [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
            "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday",
             "secondSaturday", "secondSunday"
        ]
    }


    let olddaete = new Date('0001-01-01')
    let op = dateNow - olddaete
    let calcul = (op / 1000 / 3600 / 24) % 14
        return obj.weeks[calcul]
}


const timeTravel = ({ date, hour, minute, second }) => {
    date.setMinutes(minute)
    date.setHours(hour)
    date.setSeconds(second)
    return date



}


