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
       
        if(this.isMenuOpen === true) {
            document.querySelector('.hamburger-menu img').src = this.menuCloseIcon
            document.querySelector('.hamburger-menu img').alt = this.closeIconAlt
            navContainer.classList.add('menu-open')
        } else {
            document.querySelector('.hamburger-menu img').src = this.menuOpenIcon
            document.querySelector('.hamburger-menu img').alt = this.menuIconAlt
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