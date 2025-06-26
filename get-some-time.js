const firstDayWeek = (week, years) => {
    const date = new Date(years)
    const d = date.getDay()
    const addweek = (week - 1) * 7 - d
    const res = new Date(date.getTime() + addweek * 24 * 3600 * 1000)
    let mm = res.getMonth() + 1; 
    let dd = res.getDate();
    let yyyy = res.getFullYear()

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedres = dd + '-' + mm + '-' + yyyy;

    return formattedres
}




