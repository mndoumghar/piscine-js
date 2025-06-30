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
]

let i = 0

export const pimp = () => {
  const button = document.querySelector(".button")
  if (i < styles.length) {
    button.classList.add(styles[i])
    i++;
  } else {

    button.classList.remove(...styles)
    i = 0
  }
}