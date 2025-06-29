export const getArchitects = () => {
    const a1 = Array.from(document.getElementsByTagName("a"))
    const a2 = Array.from(document.querySelectorAll("body *:not(a)"))
    return [a1, a2]
}

export const getClassical=  () => {
    const a1 = Array.from(document.getElementsByTagName("classical"))
    const a2 = Array.from(document.querySelectorAll("body *:not(classical)"))
    return [a1, a2]
}


export const getActive=  () => {
    const a1 = Array.from(document.getElementsByTagName("classical.active"))
    const a2 = Array.from(document.querySelectorAll("body *:not(classical.active)"))
    return [a1, a2]
}



export const getBonannoPisano=  () => {

    const a1 = Array.from(document.getElementsByTagName("BonannoPisano"))
    const a2 = Array.from(document.querySelectorAll("body *:not(BonannoPisano)"))
    return [a1, a2]
}

