const menuHamburger = document.querySelector('.menu-hamburger')
const headerNav = document.querySelector('.header-nav')

function toggleMenu(){
    menuHamburger.classList.toggle('ativo')
    headerNav.classList.toggle('ativo')
}

menuHamburger.addEventListener('click', toggleMenu)