var i = 1
export const build = (conter) => {
    //<div id="brick-1"></div>
  const root = document.querySelector("body")
  const inter = setInterval(() => {
    if (i <= conter) {
      let div = document.createElement("div")
      div.id = "brick-"+ i
      div.innerHTML = i
      if (i % 3 === 2) {
        div.dataset.foundation = "true"
      }
      root.append(div)
      i++
    } 
  },100)


        return inter
}
  
export const repair = (...ids) => {
  ids.forEach((id) => {
    let brick = document.getElementById(`${id}`)
    if (brick.dataset.foundation == "true") {
      brick.dataset.repaired = "in progress";
    } else {
      brick.dataset.repaired = "true";
    }
  });
};

export const destroy = () => {
  const bricks = document.querySelectorAll('div[id^="brick-"]')
  if (bricks.length > 0) {
    bricks[bricks.length - 1].remove()
  }
}