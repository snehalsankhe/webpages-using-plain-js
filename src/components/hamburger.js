export const Hamburger = (data) => {
    const {
        menuOpen: {
            menuIcon: menuOpenIcon,
            alt: menuIconAlt
        },
        close: {
            closeIcon,
            alt: closeIconAlt
        }
    } = data
    
    const menuState = {
        isMenuOpen: false
    }

    const openMenu = () => {
        console.log('clicked', menuState.isMenuOpen)
        menuState.isMenuOpen = !menuState.isMenuOpen
        
        let navContainer = document.querySelector('.nav-container')
        if(menuState.isMenuOpen === true) {
            menuIcon.src = closeIcon
            menuIcon.alt = closeIconAlt
            navContainer.classList.add('menu-open')

        } else {
            menuIcon.src = menuOpenIcon
            menuIcon.alt = menuIconAlt
            navContainer.classList.remove('menu-open')
        }
    }

    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger-menu');

    const menuIcon = document.createElement('img')
    menuIcon.src = menuOpenIcon
    menuIcon.alt = menuIconAlt

    hamburger.appendChild(menuIcon)

    hamburger.addEventListener('click', openMenu)

    return hamburger;
}