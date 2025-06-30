export const styles = [
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
  'fifteen'
]

let i = 0

export const pimp = () => {
  const buttons = document.getElementsByClassName("button")
  
  for (const button of buttons) {
    if (i <= styles.length+1) {
      button.classList.add(styles[i])
      console.log(button.classList.add(styles[i]))
    }
  }
  
  i++
  
  if (i >= styles.length) {
    i = 0
    for (const button of buttons) {
      button.className = 'button'
    }
  }
}