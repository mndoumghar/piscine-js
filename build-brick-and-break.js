//    import { build, repair, destroy } from './build-brick-and-break.js'

var i = 0
export const build = () => {
    //<div id="brick-1"></div>
    
  const newDiv = document.createElement("div")
      newDiv.classList.add('brick-'+i)


  const newContent = document.createTextNode(i++)

  newDiv.appendChild(newContent)


  const currentDiv = document.getElementById("div1")
  document.body.insertBefore(newDiv, currentDiv)


}

export const repair = () => {
      setInterval(build, 100)
          clearInterval(i)



}

export const destroy = () => {
  const bricks = document.querySelectorAll('.brick');
  if (bricks.length > 0) {
    bricks[bricks.length - 1].remove();
  }


}