const state = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
]
let firstClick = true
const cellValues = {0:"url('./images/spaceBG.jpeg')"}

const drawBoard = () => {
  for (let i = 0; i < state.length; i++) {
    for (let j = 0; j < state[i].length; j++) {
      const col = state[i][j]
      const cell = document.querySelector(
        `table tr:nth-child(${i+1}) td:nth-child(${j+1})`
      )
      //console.log("Winning", cellValues[col],cell)
      //cell.textContent = "HELP ME!!!"
      cell.style.backgroundImage = cellValues[col]
    }
    //console.log('After the for loop:',cell)
  }
}

const init = () => {
  drawBoard()
  const rows = document.querySelectorAll('tr')
  for (let i = 0; i < rows.length; i++) {
    const cols = rows[i].querySelectorAll('td')
    for (let j = 0; j < cols.length; j++) {
      cols[j].addEventListener('click', () => {
        drawBoard()
      })
    }
  }
  // drawBoard()
  //let bashir = document.querySelector('.one1')

  // bashir.addEventListener('click', () => {
  //   if (firstClick){
  //     bashir.style.backgroundImage = "url('./images/bashir.jpeg')"
  //     firstClick = false
  //   } else {
  //     bashir.style.backgroundImage = "url('./images/spaceBG.jpeg')"
  //     firstClick = true
  //   }
  // })
}

document.addEventListener('DOMContentLoaded', init)
