const state = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
]
let numArray = []

// const Card = (image, clicked, ref) => {
//   this.imageLink = image
//   this.bgLink = '"url(./images/spaceBG.jpeg)"',
//   this.clicked = clicked
//   this.tableRef = ref
// }

const handleClickEvent = () => {
  console.log('Working')
}

const setNumArray = () => {
  for (let i = 0; i < 36; i++) {
    numArray.push(i)
  }
  return numArray
}

const getImageNum = () => {
  let randomIndex = Math.floor(Math.random() * numArray.length)
  let num = numArray.splice(randomIndex, 1)[0]
  // console.log(num, numArray)
  return num
}

const drawBoard = () => {
  let imageNum
  for (let i = 0; i < state.length; i++) {
    for (let j = 0; j < state[i].length; j++) {
      const cell = document.querySelector(
        `table tr:nth-child(${i + 1}) td:nth-child(${j + 1})`
      )
      imageNum = getImageNum()
      // let curCard = new Card(`url('./images/img00${imageNum + 1}.jpeg')`,"url('./images/spaceBG.jpeg')", false, cell)
      // console.log(curCard)
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
        handleClickEvent()
      })
    }
  }
}

document.addEventListener('DOMContentLoaded', init)
