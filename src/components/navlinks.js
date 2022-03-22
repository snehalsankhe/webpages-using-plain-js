// import { navData } from '../data/data.js'

export const NavLinks = (navData) => {
    const markUp = document.createElement('ul')
    markUp.classList.add("nav-container")
    navData.navLinks.forEach((link) => {
        let listEle = document.createElement('li')
        listEle.classList.add('nav-item')
        listEle.id = link.linkId
        let anchor = document.createElement('a')
        anchor.classList.add('nav-link')
        anchor.href= link.href
        anchor.text = link.title
        listEle.appendChild(anchor)
        markUp.appendChild(listEle)
    });
    return markUp;
}