const burgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav__items')

const showNav = () => {
	burgerBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav__mobile--active')
}

burgerBtn.addEventListener('click', showNav)
