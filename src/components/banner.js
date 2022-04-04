
// export const Banner = (bannerData) =>{
//   const bannerCode = document.createElement('div');
//   bannerCode.classList.add('banner-wrapper');
//   bannerCode.style.backgroundImage = `url(${bannerData.bannerImage})`;

//   const title = document.createElement('h1');
//   title.classList.add('banner-title');
//   title.textContent = bannerData.companyName;

//   const subTitle = document.createElement('p');
//   subTitle.classList.add('subtitle');
//   subTitle.textContent = bannerData.tagline;

//   bannerCode.appendChild(title);
//   bannerCode.appendChild(subTitle);

//   return bannerCode;
//   }



export const Banner = (bannerData) =>{
  const bannerCode = document.createElement('div');
  bannerCode.classList.add('banner-wrapper');
  bannerCode.style.backgroundImage = `url(${bannerData.bannerImage})`;

  const title = document.createElement('h1');
  title.classList.add('banner-title');
  title.textContent = bannerData.companyName;

  const subTitle = document.createElement('p');
  subTitle.classList.add('subtitle');
  subTitle.textContent = bannerData.tagline;

  bannerCode.appendChild(title);
  bannerCode.appendChild(subTitle);

  return bannerCode;
  }