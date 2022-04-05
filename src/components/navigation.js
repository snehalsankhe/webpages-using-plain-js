import NavLinks from "./navlinks.js";
import { Logo } from './logo.js';
import Hamburger from './hamburger.js'

export const Navigation = (navData) => {
    const markUp = document.createElement("div")
    markUp.classList.add("navigation")
    markUp.appendChild(Logo(navData.logo))
    markUp.appendChild(new NavLinks(navData).render())
    markUp.appendChild(new Hamburger(navData.hamburger, markUp).render())
    // const burgerMenu1 = new Hamburger(navData.hamburger, markUp) 
    // markUp.appendChild(burgerMenu1.render())
    return markUp
}