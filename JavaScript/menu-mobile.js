const menuHamburger = document.querySelector('.menu-hamburger')
const headerNav = document.querySelector('.header-nav')
const backshadow = document.querySelector('#backshadow')

console.log(backshadow)

function toggleMenu(){
    menuHamburger.classList.toggle('ativo')
    headerNav.classList.toggle('ativo')
    backshadow.classList.toggle('ativo')
}

menuHamburger.addEventListener('click', toggleMenu)