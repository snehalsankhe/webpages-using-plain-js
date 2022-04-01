import { NavLinks } from "./navlinks.js";
import { Logo } from './logo.js';
import HamburgerMenu from './hamburger.js'

export const Navigation = (navData) => {
    // console.log('navdata',navData)
    const markUp = document.createElement("div")
    markUp.classList.add("navigation")
    markUp.appendChild(Logo(navData.logo))
    const Hamburger = new HamburgerMenu(navData.hamburger)
    markUp.appendChild(Hamburger.render())
    markUp.appendChild(NavLinks(navData))

    return markUp
}