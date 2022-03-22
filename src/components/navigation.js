import { NavLinks } from "./navlinks.js";
import { Logo } from './logo.js';
import { Hamburger } from './hamburger.js'

export const Navigation = (navData) => {
    // console.log('navdata',navData)
    const markUp = document.createElement("div")
    markUp.classList.add("navigation")
    markUp.appendChild(Logo(navData.logo))
    markUp.appendChild(Hamburger(navData.hamburger))
    markUp.appendChild(NavLinks(navData))
    return markUp
}