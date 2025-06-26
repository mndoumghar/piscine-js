const firstDayWeek = (week, years) => {
    const date = new Date(years,0,1)
    const d = date.getDay()
    const addweek = (week - 1) * 7 - d
    let res = new Date(date.getTime() + addweek * 24 * 3600 * 1000)
    let mm = res.getMonth() + 1; 
    let dd = res.getDate();
    let yyyy = res.getFullYear()

    if (yyyy < Number(years)) {
         let mm = date.getMonth()+1 
        let dd = date.getDate()
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
            const formattedres = dd + '-' + mm + '-' + years

             return formattedres
    }   

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedres = dd + '-' + mm + '-' + yyyy;

    return formattedres 
}

console.log(firstDayWeek(1,'1000'))


