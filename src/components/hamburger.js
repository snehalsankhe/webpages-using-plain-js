class Hamburger {
	constructor(props, markUp) {
		this.props = props;
		this.isMenuOpen = false;
		this.markUp = markUp;
		this.state = {
			hamburgerIcon: this.isMenuOpen? props.close.closeIcon : props.menuOpen.menuIcon
		}
	}

	openMenu = () => {
		this.isMenuOpen = !this.isMenuOpen
		this.state.hamburgerIcon= this.isMenuOpen? this.props.close.closeIcon :this.props.menuOpen.menuIcon
		let navContainer = this.markUp.querySelector('.nav-container')
		let imageElement = this.hamburger.querySelector(".image-icon")
		imageElement.src = this.state.hamburgerIcon
		
		if (this.isMenuOpen === true) {
			navContainer.classList.add('menu-open')
		} else {
			navContainer.classList.remove('menu-open')
		}
		this.hamburger.menuIcon = imageElement
	}
	render = () =>  {
		const hamburger = document.createElement('div');
		hamburger.classList.add('hamburger-menu');
		const menuIcon = document.createElement('img')
		menuIcon.classList.add('image-icon')
		menuIcon.src = this.state.hamburgerIcon
		hamburger.appendChild(menuIcon)
		hamburger.addEventListener('click', this.openMenu)	
		this.hamburger = hamburger;
		return this.hamburger;
	}
}

export default Hamburger


