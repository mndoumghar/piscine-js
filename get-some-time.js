const firstDayWeek = (week, years) => {
    let time = new Date()
        time.setYear(Number(years))
        let second  = week *7*24*3600*1000

    // let day = (week *7)
    // let hours = (week *7) * 24
    // let moth =  (week*7) /30
    time.setYear(Number(years))
    // time.setMonth(moth)
    // time.setHours(hours)
    // time.setDate(day);
        return (time + second)

    

}

console.log(firstDayWeek(2,'2000'))
