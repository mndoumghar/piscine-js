const styles = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
]

let i = 0
var boo =true
export const pimp = () => {
    console.log(i);
    
  const button = document.querySelector(".button")
  if (i < styles.length && boo) {
    button.classList.add(styles[i])
    i++
    if (i === styles.length-1) {
        button.classList.add(styles[i])
        button.classList.add("unpimp")
        boo = false
       return
    }
  } 
  if (!boo) {
    button.classList.remove(styles[i])
    i--
    if (i==-1) {
        button.classList.remove("unpimp")
                boo =true
                i++
                return

    }
  }
  
}