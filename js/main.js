window.addEventListener('resize', () => {
  if (window.innerWidth > 1025) {
    navbar.classList.remove('show')
    overlayContainer.classList.remove('active')
  }
})

const navbar = document.querySelector('nav.navbar')
const openMenuButton = document.querySelector('.toggle.icon-menu')
const closeMenuButton = document.querySelector('.toggle.icon-close')
const mainContainer = document.querySelector('.main-container')
const overlayContainer = document.querySelector('.overlay')

openMenuButton.addEventListener('click', () => {
  navbar.classList.add('show')
  overlayContainer.classList.add('active')
})

closeMenuButton.addEventListener('click', () => {
  navbar.classList.remove('show')
  overlayContainer.classList.remove('active')
})

overlayContainer.addEventListener('click', () => {
  navbar.classList.remove('show')
  overlayContainer.classList.remove('active')
})
