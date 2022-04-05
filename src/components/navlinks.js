class NavLinks {
  constructor(props,linkMenu) {
    this.props = props;
    this.linkMenu = linkMenu;
  }

  render = () => {
			const linkMenu = document.createElement("ul");
			linkMenu.classList.add("nav-container");
			this.props.navLinks.forEach((link) => {
			let listEle = document.createElement('li')
			listEle.classList.add('nav-item')
			listEle.id = link.linkId
			let anchor = document.createElement('a')
			link.isCta ? anchor.classList.add('nav-link','btn') : anchor.classList.add('nav-link')
			anchor.href= link.href
			anchor.text = link.title
			listEle.appendChild(anchor)
			linkMenu.appendChild(listEle)
			this.linkMenu = linkMenu
		});
		return this.linkMenu;
  };
}

export default NavLinks;
