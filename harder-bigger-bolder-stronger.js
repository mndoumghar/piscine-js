


export const generateLetters = () => {
    const body = document.querySelector("body")
    const div = document.createElement('div')
    body.append(div)
    let res = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    length = res.length
    for (let i = 1; i <= 120; i++) {
        const CreatDr = document.createElement('div')

        CreatDr.textContent = res.charAt(Math.random() * length)
        CreatDr.style.fontSize = `${i}px`

        if (i < 40) {
            CreatDr.style.fontWeight = 300
        }
        else if (i < 80) {
            CreatDr.style.fontWeight = 400
        }
        else {
            CreatDr.style.fontWeight = 600
        }


        CreatDr.style.fontWeight =

            body.append(CreatDr)


    }


}