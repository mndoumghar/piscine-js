export const getArchitects = () => {
    const a1 = Array.from(document.getElementsByTagName("a"))
    const a2 = Array.from(document.querySelectorAll("body *:not(a)"))
    return [a1, a2]
}

export const getClassical = () => {
    const a1 = Array.from(document.getElementsByClassName("classical"))
    const a2 = Array.from(document.querySelectorAll("a:not(.classical)"))
    return [a1, a2]
}


export const getActive=  () => {
    const a1 = Array.from(document.querySelectorAll(".classical.active"))
    const a2 = Array.from(document.querySelectorAll(".classical:not(.classical.active)"))
    return [a1, a2]
}



export const getBonannoPisano =  () => {
    const a1 = document.getElementById("BonannoPisano")
    const a2 = Array.from(document.querySelectorAll(".classical.active:not(#BonannoPisano)"))
    return [a1, a2]
}

