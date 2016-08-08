var moment = require('moment')
moment().format()
let turnedCards = []
let matchedCards = []
let playerScore = 0
let numArray = []
let start = new Date()
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

function handleImgClick (i, cardImg, bgImg, init) {
  if (turnedCards.length < 2) {
    this.style.backgroundImage = cardImg
    turnedCards.push(this)
  }
  if (turnedCards.length === 2) {
    if (turnedCards[0].style.backgroundImage === turnedCards[1].style.backgroundImage) {
      playerScore++
      turnedCards[0].className = 'img matched'
      turnedCards[1].className = 'img matched'
      matchedCards.push(turnedCards.pop())
      matchedCards.push(turnedCards.pop())
      if (playerScore === 18) {
        let end = new Date()
        let diff = end - start
        const win = document.querySelector('.images')
        const time = document.querySelector('.gameLength')
        win.textContent = 'YOU WIN!!!!'
        time.textContent = `You're game lasted ${moment.duration(diff).minutes()} minute(s)`
      }
    } else {
      setTimeout(() => {
        turnedCards[0].style.backgroundImage = bgImg
        turnedCards[1].style.backgroundImage = bgImg
        turnedCards = []
      }, 1000)
    }
  }
}

const init = () => {
  for (let j = 0; j < 2; j++) {
    setNumArray()
    for (let i = 0; i < 18; i++) {
      let num = getImageNum()
      const bgImg = "url('./images/earthBG.jpg')"
      const cardImg = `url('./images/img00${num + 1}.jpeg')`
      const images = document.querySelector('.images')
      const div = document.createElement('div')
      div.className = `img ${i}`
      div.style.backgroundImage = bgImg
      div.addEventListener('click', function () {
        handleImgClick.call(this, i, cardImg, bgImg, init)
      })
      images.appendChild(div)
    }
  }
}
document.addEventListener('DOMContentLoaded', init)
