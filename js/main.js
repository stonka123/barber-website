const burgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav__items')
const navItem = document.querySelectorAll('.nav__item')
const navBar = document.querySelector('.nav__bar')
const time = document.getElementById('myTime')
const footer = document.querySelector('.footer__text--year')
const main = document.querySelector('.main')

document.getElementById('today').value = new Date().toISOString().substring(0, 10)

const showNav = () => {
	burgerBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav__mobile--active')

	navItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav__mobile--active')
			burgerBtn.classList.remove('is-active')
		})
	})
	handleNavItemsAnimation()
}

const handleObserve = () => {
	const currentY = window.scrollY
	if (main.classList.contains('main') && main.offsetTop <= currentY + 40) {
		navBar.classList.add('nav__bar--gray')
	} else {
		navBar.classList.remove('nav__bar--gray')
	}
}
const handleNavItemsAnimation = () => {
	let delayTime = 0
	navItem.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}
// footer

const checkYear = () => {
	const year = new Date().getFullYear()
	footer.textContent = year
}
checkYear()

burgerBtn.addEventListener('click', showNav)
window.addEventListener('scroll', handleObserve)
