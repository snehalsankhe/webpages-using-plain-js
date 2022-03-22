import { navData } from "../data/data.js";

export const Logo = (data) =>{
  const navbarBrand = document.createElement('div');
  navbarBrand.classList.add('company-logo');
  let logoImg =  document.createElement('img');
  logoImg.src = data.imgSrc;
  logoImg.alt = data.alt;
  logoImg.classList.add('logoImg');

  navbarBrand.appendChild(logoImg);
  return navbarBrand;
}