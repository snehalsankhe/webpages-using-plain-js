/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data.js */ \"./src/data/data.js\");\n/* harmony import */ var _components_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation.js */ \"./src/components/navigation.js\");\n/* harmony import */ var _components_banner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/banner.js */ \"./src/components/banner.js\");\n\n\n\n\nconst root = document.getElementById('root')\nconst renderpage = async () => {\n    let data = await (0,_data_data_js__WEBPACK_IMPORTED_MODULE_0__.getData)();\n    // console.log('---ff', data)\n    root.appendChild((0,_components_navigation_js__WEBPACK_IMPORTED_MODULE_1__.Navigation)(data.navData));\n    root.appendChild((0,_components_banner_js__WEBPACK_IMPORTED_MODULE_2__.Banner)(data.bannerData))\n}\nrenderpage();\n\n\n\n//# sourceURL=webpack://webpages-using-plain-js/./src/app.js?");

/***/ }),

/***/ "./src/components/banner.js":
/*!**********************************!*\
  !*** ./src/components/banner.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Banner\": () => (/* binding */ Banner)\n/* harmony export */ });\n\nconst Banner = (bannerData) =>{\n  const bannerCode = document.createElement('div');\n  bannerCode.classList.add('banner-wrapper');\n  bannerCode.style.backgroundImage = `url(${bannerData.bannerImage})`;\n\n  const title = document.createElement('h1');\n  title.classList.add('banner-title');\n  title.textContent = bannerData.companyName;\n\n  const subTitle = document.createElement('p');\n  subTitle.classList.add('subtitle');\n  subTitle.textContent = bannerData.tagline;\n\n  bannerCode.appendChild(title);\n  bannerCode.appendChild(subTitle);\n\n  return bannerCode;\n  }\n\n//# sourceURL=webpack://webpages-using-plain-js/./src/components/banner.js?");

/***/ }),

/***/ "./src/components/hamburger.js":
/*!*************************************!*\
  !*** ./src/components/hamburger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Hamburger\": () => (/* binding */ Hamburger)\n/* harmony export */ });\nconst Hamburger = (data) => {\n    const {\n        menuOpen: {\n            menuIcon: menuOpenIcon,\n            alt: menuIconAlt\n        },\n        close: {\n            closeIcon,\n            alt: closeIconAlt\n        }\n    } = data\n    \n    const menuState = {\n        isMenuOpen: false\n    }\n\n    const openMenu = () => {\n        menuState.isMenuOpen = !menuState.isMenuOpen\n        \n        let navContainer = document.querySelector('.nav-container')\n        if(menuState.isMenuOpen === true) {\n            menuIcon.src = closeIcon\n            menuIcon.alt = closeIconAlt\n            navContainer.classList.add('menu-open')\n\n        } else {\n            menuIcon.src = menuOpenIcon\n            menuIcon.alt = menuIconAlt\n            navContainer.classList.remove('menu-open')\n        }\n    }\n\n    const hamburger = document.createElement('div');\n    hamburger.classList.add('hamburger-menu');\n\n    const menuIcon = document.createElement('img')\n    menuIcon.src = menuOpenIcon\n    menuIcon.alt = menuIconAlt\n\n    hamburger.appendChild(menuIcon)\n\n    hamburger.addEventListener('click', openMenu)\n\n    return hamburger;\n}\n\n//# sourceURL=webpack://webpages-using-plain-js/./src/components/hamburger.js?");

/***/ }),

/***/ "./src/components/logo.js":
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Logo\": () => (/* binding */ Logo)\n/* harmony export */ });\nconst Logo = (data) =>{\n  // console.log('-----check data',data)\n  const navbarBrand = document.createElement('div');\n  navbarBrand.classList.add('company-logo');\n  let logoImg =  document.createElement('img');\n  logoImg.src = data.imgSrc;\n  logoImg.alt = data.alt;\n  logoImg.classList.add('logo-img');\n\n  navbarBrand.appendChild(logoImg);\n  return navbarBrand;\n}\n\n//# sourceURL=webpack://webpages-using-plain-js/./src/components/logo.js?");

/***/ }),

/***/ "./src/components/navigation.js":
/*!**************************************!*\
  !*** ./src/components/navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navigation\": () => (/* binding */ Navigation)\n/* harmony export */ });\n/* harmony import */ var _navlinks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navlinks.js */ \"./src/components/navlinks.js\");\n/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.js */ \"./src/components/logo.js\");\n/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamburger.js */ \"./src/components/hamburger.js\");\n\n\n\n\nconst Navigation = (navData) => {\n    // console.log('navdata',navData)\n    const markUp = document.createElement(\"div\")\n    markUp.classList.add(\"navigation\")\n    markUp.appendChild((0,_logo_js__WEBPACK_IMPORTED_MODULE_1__.Logo)(navData.logo))\n    markUp.appendChild((0,_hamburger_js__WEBPACK_IMPORTED_MODULE_2__.Hamburger)(navData.hamburger))\n    markUp.appendChild((0,_navlinks_js__WEBPACK_IMPORTED_MODULE_0__.NavLinks)(navData))\n    return markUp\n}\n\n//# sourceURL=webpack://webpages-using-plain-js/./src/components/navigation.js?");

/***/ }),

/***/ "./src/components/navlinks.js":
/*!************************************!*\
  !*** ./src/components/navlinks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavLinks\": () => (/* binding */ NavLinks)\n/* harmony export */ });\nconst NavLinks = (navData) => {\n    const markUp = document.createElement('ul')\n    markUp.classList.add(\"nav-container\")\n    navData.navLinks.forEach((link) => {\n        let listEle = document.createElement('li')\n        listEle.classList.add('nav-item')\n        listEle.id = link.linkId\n        let anchor = document.createElement('a')\n        link.isCta ? anchor.classList.add('nav-link','btn') : anchor.classList.add('nav-link')\n        anchor.href= link.href\n        anchor.text = link.title\n        listEle.appendChild(anchor)\n        markUp.appendChild(listEle)\n    });\n    return markUp;\n}\n\n//# sourceURL=webpack://webpages-using-plain-js/./src/components/navlinks.js?");

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nconst dataUrl = 'https://sayalijoshi27.github.io/JS-Tasks/webpage-data.json'\n\nconst getData = async() => {\n  try {\n    let data = await fetch(dataUrl);\n    data = await data.json();\n    return data;\n  } catch(err){\n    console.log(\".............error in rendering\")\n  }\n};\n\n\n//# sourceURL=webpack://webpages-using-plain-js/./src/data/data.js?");

/***/ })

/******/ 	});
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;