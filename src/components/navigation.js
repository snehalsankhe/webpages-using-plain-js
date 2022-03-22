import { NavLinks } from "./navlinks.js";
export const Navigation = (navData) => {
    const markUp = document.createElement("div")
    markUp.classList.add("navigation")
    markUp.appendChild(NavLinks(navData))
    return markUp
}