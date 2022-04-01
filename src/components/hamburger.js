class HamburgerMenu {
    constructor(data) {
        this.data = data
        this.menuOpenIcon = this.data.menuOpen.menuIcon
        this.menuIconAlt = this.data.menuOpen.alt
        this.menuCloseIcon = this.data.close.closeIcon
        this.closeIconAlt = this.data.close.alt
        this.isMenuOpen = false    
    }

    openMenu = () => {
        this.isMenuOpen = !this.isMenuOpen
        
        let navContainer = document.querySelector('ul')
        let menuIcon = document.querySelector('.hamburger-menu img')
       
        if (this.isMenuOpen === true) {
            menuIcon.src = this.menuCloseIcon
            menuIcon.alt = this.closeIconAlt
            navContainer.classList.add('menu-open')
        } else {
            menuIcon.src = this.menuOpenIcon
            menuIcon.alt = this.menuIconAlt
            navContainer.classList.remove('menu-open')
        }        
        
    }
    
    render () {
        const hamburger = document.createElement('div');
        hamburger.classList.add('hamburger-menu');

        const menuIcon = document.createElement('img')
        menuIcon.src = this.menuOpenIcon
        menuIcon.alt = this.menuIconAlt

        hamburger.appendChild(menuIcon)
        hamburger.addEventListener('click', this.openMenu)
        return hamburger
    }
}

export default HamburgerMenu