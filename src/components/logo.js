export const Logo = (data) =>{
  // console.log('-----check data',data)
  const navbarBrand = document.createElement('div');
  navbarBrand.classList.add('company-logo');
  let logoImg =  document.createElement('img');
  logoImg.src = data.logo.imgSrc;
  logoImg.alt = data.alt;
  logoImg.classList.add('logoImg');

  navbarBrand.appendChild(logoImg);
  return navbarBrand;
}