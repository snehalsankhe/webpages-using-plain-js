import { NavLinks } from "./navlinks.js";
import { Logo } from './logo.js';

export const Navigation = (navData) => {
    // console.log('navdata',navData)
    const markUp = document.createElement("div")
    markUp.classList.add("navigation")
    markUp.appendChild(Logo(navData.logo))
    markUp.appendChild(NavLinks(navData))
    return markUp
}