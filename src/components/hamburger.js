export const Hamburger = () => {
    const menuState = {
        isMenuOpen: false
    }

    const openMenu = () => {
        console.log('clicked', menuState.isMenuOpen)
        menuState.isMenuOpen = !menuState.isMenuOpen
        
        let navContainer = document.querySelector('.nav-container')
        if(menuState.isMenuOpen === true) {
            menuIcon.src = '../../images/close.png'
            navContainer.classList.add('menu-open')

        } else {
            menuIcon.src = '../../images/menu-black.png'
            navContainer.classList.remove('menu-open')
        }
    }

    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger-menu');

    const menuIcon = document.createElement('img')
    menuIcon.src = '../../images/menu-black.png'

    hamburger.appendChild(menuIcon)

    hamburger.addEventListener('click', openMenu)

    return hamburger;
}