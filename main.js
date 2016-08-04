let firstClick = true
const init = () => {
  let bashir = document.querySelector('.one1')

  bashir.addEventListener('click', () => {
    if (firstClick){
      bashir.style.backgroundImage = "url('./images/bashir.jpeg')"
      firstClick = false
    } else {
      bashir.style.backgroundImage = "url('./images/spaceBG.jpeg')"
      firstClick = true
    }
  })
}

document.addEventListener('DOMContentLoaded', init)
