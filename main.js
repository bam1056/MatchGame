const init = () => {
  let bashir = document.querySelector('.one1')

  bashir.addEventListener('click', () => {
    console.log("Working")
    bashir.style.backgroundImage = "url('./images/spaceBG.jpeg')"
  })
}

document.addEventListener('DOMContentLoaded', init)
