const state = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
]
// let firstClick = true
const cellValues = { 0: "url('./images/spaceBG.jpeg')" }
let numArray = []

const setNumArray = () => {
  for (let i = 0; i < 36; i++) {
    numArray.push(i)
  }
  return numArray
}

const getImageNum = () => {
  var randomIndex = Math.floor(Math.random() * numArray.length)
   return numArray.splice(randomIndex, 1)[0]
}

const drawBoard = () => {
  let imageNum
  for (let i = 0; i < state.length; i++) {
    for (let j = 0; j < state[i].length; j++) {
      const cell = document.querySelector(
        `table tr:nth-child(${i + 1}) td:nth-child(${j + 1})`
      )
      imageNum = getImageNum()
      cell.style.backgroundImage = `url('./images/img00${imageNum + 1}.jpeg')`
    }
  }
}

const init = () => {
  setNumArray()
  drawBoard()
  const rows = document.querySelectorAll('tr')
  for (let i = 0; i < rows.length; i++) {
    const cols = rows[i].querySelectorAll('td')
    for (let j = 0; j < cols.length; j++) {
      cols[j].addEventListener('click', () => {
      })
    }
  }
}

document.addEventListener('DOMContentLoaded', init)
