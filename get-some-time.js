const firstDayWeek = (week, years) => {
    const date = new Date(years)  
    const d = date.getDay() 
     const addweek = (week - 1) * 7 - d
    const res = new Date(date.getTime() + addweek * 24 * 3600 * 1000)
    return res
}




