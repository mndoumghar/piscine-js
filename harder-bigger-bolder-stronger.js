export const generateLetters = () => {
    const body = document.querySelector("body");
    let res = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = res.length;
    
    for (let i = 0; i < 120; i++) {
        const creatDr = document.createElement('div');
        creatDr.textContent = res.charAt(Math.floor(Math.random() * length));
        creatDr.style.fontSize = `${i + 11}px`;

        if (i < 40) {
            creatDr.style.fontWeight = 300;
        }
        else if (i < 80) {
            creatDr.style.fontWeight = 400;
        }
        else {
            creatDr.style.fontWeight = 600;
        }

        body.append(creatDr);
    }
}