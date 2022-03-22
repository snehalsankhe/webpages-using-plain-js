export const Logo = () =>{
  const navbarBrand = document.createElement('div');
  navbarBrand.classList.add('company-logo');
  let logoImg =  document.createElement('img');
  logoImg.classList.add('logo');
  navbarBrand.appendChild(logoImg);
  return navbarBrand;
}