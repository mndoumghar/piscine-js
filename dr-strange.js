
const addWeek = (date) => {

    const weekday = ["Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday"
        , "secondMonday", "secondTuesday",
        "secondWednesday", "secondThursday",
        "secondFriday", "secondSaturday",
        "secondSunday"
    ];

    const formatterDayTwoDigit = new Intl.DateTimeFormat('en-US', { day: '2-digit' });
    const formattedDay = formatterDayTwoDigit.format(date)
    let x = Number(formattedDay)
    if (x == 31) {
        x = 1
    } else {
        x += 1
    }
    console.log(weekday[x])
}

addWeek(new Date('0001-01-01')) // Output: Monday
addWeek(new Date('0001-01-02')) // Output: Tuesday
addWeek(new Date('0001-01-07')) // Output: Sunday
addWeek(new Date('0001-01-08')) // Output: secondMonday
addWeek(new Date('0001-01-09')) // Output: secondTuesday




// // timeTravel({ date, hour, minute, second })

// timeTravel({
//   date: new Date('2020-05-29 23:25:22'),
//   hour: 21,
//   minute: 22,
//   second: 22,
// }).toString()

// function toString() {


//     return "Fri"
// }


// // Output: Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)