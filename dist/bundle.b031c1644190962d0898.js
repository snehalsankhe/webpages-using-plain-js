/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
const dataUrl = 'https://sayalijoshi27.github.io/JS-Tasks/webpage-data.json'

const getData = async() => {
  try {
    let data = await fetch(dataUrl);
    data = await data.json();
    return data;
  } catch(err){
    console.log(".............error in rendering")
  }
};


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navigation": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _navlinks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);




const Navigation = (navData) => {
    const markUp = document.createElement("div")
    markUp.classList.add("navigation")
    markUp.appendChild((0,_logo_js__WEBPACK_IMPORTED_MODULE_1__.Logo)(navData.logo))
    markUp.appendChild(new _navlinks_js__WEBPACK_IMPORTED_MODULE_0__["default"](navData).render())
    markUp.appendChild(new _hamburger_js__WEBPACK_IMPORTED_MODULE_2__["default"](navData.hamburger, markUp).render())
    // const burgerMenu1 = new Hamburger(navData.hamburger, markUp) 
    // markUp.appendChild(burgerMenu1.render())
    return markUp
}

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class NavLinks {
  constructor(props,linkMenu) {
    this.props = props;
    this.linkMenu = linkMenu;
  }

  render = () => {
			const linkMenu = document.createElement("ul");
			linkMenu.classList.add("nav-container");
			this.props.navLinks.forEach((link) => {
			let listEle = document.createElement('li')
			listEle.classList.add('nav-item')
			listEle.id = link.linkId
			let anchor = document.createElement('a')
			link.isCta ? anchor.classList.add('nav-link','btn') : anchor.classList.add('nav-link')
			anchor.href= link.href
			anchor.text = link.title
			listEle.appendChild(anchor)
			linkMenu.appendChild(listEle)
			this.linkMenu = linkMenu
		});
		return this.linkMenu;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLinks);


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logo": () => (/* binding */ Logo)
/* harmony export */ });
const Logo = (data) =>{
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

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Hamburger {
	constructor(props, markUp) {
		this.props = props;
		this.isMenuOpen = false;
		this.markUp = markUp;
		this.state = {
			hamburgerIcon: this.isMenuOpen? props.close.closeIcon : props.menuOpen.menuIcon
		}
	}

	openMenu = () => {
		this.isMenuOpen = !this.isMenuOpen
		this.state.hamburgerIcon= this.isMenuOpen? this.props.close.closeIcon :this.props.menuOpen.menuIcon
		let navContainer = this.markUp.querySelector('.nav-container')
		let imageElement = this.hamburger.querySelector(".image-icon")
		imageElement.src = this.state.hamburgerIcon
		
		if (this.isMenuOpen === true) {
			navContainer.classList.add('menu-open')
		} else {
			navContainer.classList.remove('menu-open')
		}
		this.hamburger.menuIcon = imageElement
	}
	render = () =>  {
		const hamburger = document.createElement('div');
		hamburger.classList.add('hamburger-menu');
		const menuIcon = document.createElement('img')
		menuIcon.classList.add('image-icon')
		menuIcon.src = this.state.hamburgerIcon
		hamburger.appendChild(menuIcon)
		hamburger.addEventListener('click', this.openMenu)	
		this.hamburger = hamburger;
		return this.hamburger;
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hamburger);




/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Banner": () => (/* binding */ Banner)
/* harmony export */ });

const Banner = (bannerData) =>{
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

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _components_banner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);




const root = document.getElementById('root')
const renderpage = async () => {
    let data = await (0,_data_data_js__WEBPACK_IMPORTED_MODULE_0__.getData)();
    // console.log('---ff', data)
    root.appendChild((0,_components_navigation_js__WEBPACK_IMPORTED_MODULE_1__.Navigation)(data.navData));
    root.appendChild((0,_components_banner_js__WEBPACK_IMPORTED_MODULE_2__.Banner)(data.bannerData))
}
renderpage();


})();

/******/ })()
;