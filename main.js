let clickedBool = Array(36).fill(true)
let turnedCards = []
let matchedCards = []
let playerScore = 0
let numArray = []

const getImageNum = () => {
  let randomIndex = Math.floor(Math.random() * numArray.length)
  let num = numArray.splice(randomIndex, 1)[0]
  return num
}

const setNumArray = () => {
  for (let i = 0; i < 18; i++) {
    numArray.push(i)
  }
  console.log(numArray)
  return numArray
}

function handleImgClick (clickedBool, i, cardImg, bgImg, init) {

  if (turnedCards.length < 2) {
    this.style.backgroundImage = cardImg
    turnedCards.push(this)
    //console.log('FIRST IF: ', etsb, this)
  }
  if (turnedCards.length === 2) {
    //console.log('SECOND IF: ', turnedCards[0].style.backgroundImage, turnedCards[1].style.backgroundImage)
    if (turnedCards[0].style.backgroundImage === turnedCards[1].style.backgroundImage) {
      playerScore ++
      matchedCards.push(turnedCards.pop())
      matchedCards.push(turnedCards.pop())
      if(playerScore === 18) {
        document.querySelector('.images').textContent = 'YOU WIN!!!!'
        console.log("WIN");
      }
      // console.log("COMPARISON", playerScore)
      // console.log(turnedCards)
      // console.log(turnedCards)
    } else {
      setTimeout(() => {
        turnedCards[0].style.backgroundImage = bgImg
        turnedCards[1].style.backgroundImage = bgImg
        // console.log("ELSE", turnedCards[0], turnedCards[1])
        turnedCards.pop()
        turnedCards.pop()
      }, 1000)
    }
  }
}

const init = () => {
  for (let j = 0; j < 2; j++) {
    setNumArray()
    for (let i = 0; i < 18; i++) {
      let num = getImageNum()
      const bgImg = "url('./images/spaceBG.jpeg')"
      const cardImg = `url('./images/img00${num + 1}.jpeg')`
      const images = document.querySelector('.images')
      const div = document.createElement('div')
      div.className = `img ${i}`
      div.style.backgroundImage = bgImg
      div.addEventListener('click', function () {
        handleImgClick.call(this, clickedBool, i, cardImg, bgImg, init)
      })
      images.appendChild(div)
    }
  }
}
document.addEventListener('DOMContentLoaded', init)

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

//

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
