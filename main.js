
const init = () => {
  for (let i = 0; i < 36; i++) {
    const img = `./images/00${i + 1}.jpeg`
    const inputs = document.querySelector('.input')
    const div = document.createElement('div')
    div.style.backgroundImage = img
    div.addEventListener('click', handleLetterClick)
    inputs.appendChild(div)
  }
}




// const state = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0]
// ]
// let numArray = []
//
// let cardArray = []
//
// function Card (img, ref) {
//   this.bgLink = './images/spaceBG.jpeg'
//   this.tableRef = ref
//   this.image = img
//   this.clicked = false
//   this.matched = false
// }
//
// const handleClickEvent = (i, j) => {
//   console.log(cardArray)
// }
//
// const setNumArray = () => {
//   for (let i = 0; i < 36; i++) {
//     numArray.push(i)
//   }
//   return numArray
// }
//
// const getImageNum = () => {
//   let randomIndex = Math.floor(Math.random() * numArray.length)
//   let num = numArray.splice(randomIndex, 1)[0]
//   // console.log(num, numArray)
//   return num
// }
//
// const drawBoard = () => {
//   let imageNum
//   for (let i = 0; i < state.length; i++) {
//     for (let j = 0; j < state[i].length; j++) {
//       const cell = document.querySelector(
//         `table tr:nth-child(${i + 1}) td:nth-child(${j + 1})`
//       )
//       imageNum = getImageNum()
//       let curCard = new Card(`url('./images/img00${imageNum + 1}.jpeg')`, cell)
//       cardArray.push(curCard)
//       cell.style.backgroundImage = curCard.image
//     }
//   }
//       console.log(cardArray)
// }
//
// const init = () => {
//   setNumArray()
//   drawBoard()
//   const rows = document.querySelectorAll('tr')
//   for (let i = 0; i < rows.length; i++) {
//     const cols = rows[i].querySelectorAll('td')
//     for (let j = 0; j < cols.length; j++) {
//       cols[j].addEventListener('click', () => {
//         handleClickEvent(i, j)
//       })
//     }
//   }
// }
//
// document.addEventListener('DOMContentLoaded', init)
