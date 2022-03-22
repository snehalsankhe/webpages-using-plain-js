export const Logo = (data) =>{
  // console.log('-----check data',data)
  const navbarBrand = document.createElement('div');
  navbarBrand.classList.add('company-logo');
  let logoImg =  document.createElement('img');
  logoImg.src = data.imgSrc;
  logoImg.alt = data.alt;
  logoImg.classList.add('logo-img');

  navbarBrand.appendChild(logoImg);
  return navbarBrand;
}