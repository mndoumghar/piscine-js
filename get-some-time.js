const firstDayWeek = (week, years) => {

    let theBigDay = new Date(years + "-02-02")

    let mm = theBigDay.getMonth()
    let dd = theBigDay.getDate()

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return dd + '-' + mm + '-' + years




    //({ eq }) => eq(firstDayWeek(1, '1000'), '01-01-1000')

}

console.log(firstDayWeek(1, '1000'))
