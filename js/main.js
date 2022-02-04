const burgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav__items')
const navBar = document.querySelector('.nav__bar')

const showNav = () => {
	burgerBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav__mobile--active')
}
// const handleObserve = () => {
// 	if (window.scrollY > '640') {
// 		navBar.classList.toggle('bars')
// 		// console.log('lol')
// 	}
// }
// handleObserve()
burgerBtn.addEventListener('click', showNav)
