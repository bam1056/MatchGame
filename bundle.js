(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// const handleImgClick = () => {
//   console.log('WINNNING!')
//   // this.style.backgroundImage = "url('./images/spaceBG.jpeg')"
// }
let clicked = true

const init = () => {
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 18; i++) {
      const img = "url('./images/spaceBG.jpeg')"
      const images = document.querySelector('.images')
      const div = document.createElement('div')
      div.className = `img ${i}`
      div.style.backgroundImage = img
      div.addEventListener('click', () => {
        console.log('WINNING')
        if (clicked) {
          div.style.backgroundImage = `url('./images/img00${i + 1}.jpeg')`
          clicked = false
        } else {
          div.style.backgroundImage = "url('./images/spaceBG.jpeg')"
          clicked = true
        }
      })
      images.appendChild(div)
    }
  }
}
//   for (let i = 0; i < 18; i++) {
//     const img = "url('./images2/spaceBG.jpeg')"
//     const images = document.querySelector('.images')
//     const div = document.createElement('div')
//     div.className = `img ${i}`
//     div.style.backgroundImage = img
//     div.addEventListener('click', () => {
//       console.log('WINNING')
//       if (clicked) {
//         div.style.backgroundImage = `url('./images2/img00${i + 1}.jpeg')`
//         clicked = false
//       } else {
//         div.style.backgroundImage = "url('./images2/spaceBG.jpeg')"
//         clicked = true
//       }
//     })
//     images.appendChild(div)
//   }
// }

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

},{}]},{},[1]);
