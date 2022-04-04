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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data.js */ \"./src/data/data.js\");\n/* harmony import */ var _components_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation.js */ \"./src/components/navigation.js\");\n/* harmony import */ var _components_banner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/banner.js */ \"./src/components/banner.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar root = document.getElementById('root');\n\nvar renderpage = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var data;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return (0,_data_data_js__WEBPACK_IMPORTED_MODULE_0__.getData)();\n\n          case 2:\n            data = _context.sent;\n            // console.log('---ff', data)\n            root.appendChild((0,_components_navigation_js__WEBPACK_IMPORTED_MODULE_1__.Navigation)(data.navData));\n            root.appendChild((0,_components_banner_js__WEBPACK_IMPORTED_MODULE_2__.Banner)(data.bannerData));\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function renderpage() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nrenderpage();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/banner.js":
/*!**********************************!*\
  !*** ./src/components/banner.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Banner\": () => (/* binding */ Banner)\n/* harmony export */ });\n// export const Banner = (bannerData) =>{\n//   const bannerCode = document.createElement('div');\n//   bannerCode.classList.add('banner-wrapper');\n//   bannerCode.style.backgroundImage = `url(${bannerData.bannerImage})`;\n//   const title = document.createElement('h1');\n//   title.classList.add('banner-title');\n//   title.textContent = bannerData.companyName;\n//   const subTitle = document.createElement('p');\n//   subTitle.classList.add('subtitle');\n//   subTitle.textContent = bannerData.tagline;\n//   bannerCode.appendChild(title);\n//   bannerCode.appendChild(subTitle);\n//   return bannerCode;\n//   }\nvar Banner = function Banner(bannerData) {\n  var bannerCode = document.createElement('div');\n  bannerCode.classList.add('banner-wrapper');\n  bannerCode.style.backgroundImage = \"url(\".concat(bannerData.bannerImage, \")\");\n  var title = document.createElement('h1');\n  title.classList.add('banner-title');\n  title.textContent = bannerData.companyName;\n  var subTitle = document.createElement('p');\n  subTitle.classList.add('subtitle');\n  subTitle.textContent = bannerData.tagline;\n  bannerCode.appendChild(title);\n  bannerCode.appendChild(subTitle);\n  return bannerCode;\n};\n\n//# sourceURL=webpack:///./src/components/banner.js?");

/***/ }),

/***/ "./src/components/hamburger.js":
/*!*************************************!*\
  !*** ./src/components/hamburger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Hamburger\": () => (/* binding */ Hamburger)\n/* harmony export */ });\nvar Hamburger = function Hamburger(data) {\n  var _data$menuOpen = data.menuOpen,\n      menuOpenIcon = _data$menuOpen.menuIcon,\n      menuIconAlt = _data$menuOpen.alt,\n      _data$close = data.close,\n      closeIcon = _data$close.closeIcon,\n      closeIconAlt = _data$close.alt;\n  var menuState = {\n    isMenuOpen: false\n  };\n\n  var openMenu = function openMenu() {\n    menuState.isMenuOpen = !menuState.isMenuOpen;\n    var navContainer = document.querySelector('.nav-container');\n\n    if (menuState.isMenuOpen === true) {\n      menuIcon.src = closeIcon;\n      menuIcon.alt = closeIconAlt;\n      navContainer.classList.add('menu-open');\n    } else {\n      menuIcon.src = menuOpenIcon;\n      menuIcon.alt = menuIconAlt;\n      navContainer.classList.remove('menu-open');\n    }\n  };\n\n  var hamburger = document.createElement('div');\n  hamburger.classList.add('hamburger-menu');\n  var menuIcon = document.createElement('img');\n  menuIcon.src = menuOpenIcon;\n  menuIcon.alt = menuIconAlt;\n  hamburger.appendChild(menuIcon);\n  hamburger.addEventListener('click', openMenu);\n  return hamburger;\n};\n\n//# sourceURL=webpack:///./src/components/hamburger.js?");

/***/ }),

/***/ "./src/components/logo.js":
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Logo\": () => (/* binding */ Logo)\n/* harmony export */ });\nvar Logo = function Logo(data) {\n  // console.log('-----check data',data)\n  var navbarBrand = document.createElement('div');\n  navbarBrand.classList.add('company-logo');\n  var logoImg = document.createElement('img');\n  logoImg.src = data.imgSrc;\n  logoImg.alt = data.alt;\n  logoImg.classList.add('logo-img');\n  navbarBrand.appendChild(logoImg);\n  return navbarBrand;\n};\n\n//# sourceURL=webpack:///./src/components/logo.js?");

/***/ }),

/***/ "./src/components/navigation.js":
/*!**************************************!*\
  !*** ./src/components/navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navigation\": () => (/* binding */ Navigation)\n/* harmony export */ });\n/* harmony import */ var _navlinks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navlinks.js */ \"./src/components/navlinks.js\");\n/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.js */ \"./src/components/logo.js\");\n/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamburger.js */ \"./src/components/hamburger.js\");\n// import { NavLinks } from \"./navlinks.js\";\n// import { Logo } from './logo.js';\n// import { Hamburger } from './hamburger.js'\n// export const Navigation = (navData) => {\n//     // console.log('navdata',navData)\n//     const markUp = document.createElement(\"div\")\n//     markUp.classList.add(\"navigation\")\n//     markUp.appendChild(Logo(navData.logo))\n//     markUp.appendChild(Hamburger(navData.hamburger))\n//     markUp.appendChild(NavLinks(navData))\n//     return markUp\n// }\n\n\n\nvar Navigation = function Navigation(navData) {\n  // console.log('navdata',navData)\n  var markUp = document.createElement(\"div\");\n  markUp.classList.add(\"navigation\");\n  markUp.appendChild((0,_logo_js__WEBPACK_IMPORTED_MODULE_1__.Logo)(navData.logo));\n  markUp.appendChild((0,_hamburger_js__WEBPACK_IMPORTED_MODULE_2__.Hamburger)(navData.hamburger));\n  markUp.appendChild((0,_hamburger_js__WEBPACK_IMPORTED_MODULE_2__.Hamburger)(navData.hamburger));\n  markUp.appendChild((0,_navlinks_js__WEBPACK_IMPORTED_MODULE_0__.NavLinks)(navData));\n  return markUp;\n};\n\n//# sourceURL=webpack:///./src/components/navigation.js?");

/***/ }),

/***/ "./src/components/navlinks.js":
/*!************************************!*\
  !*** ./src/components/navlinks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavLinks\": () => (/* binding */ NavLinks)\n/* harmony export */ });\n// export const NavLinks = (navData) => {\n//     const markUp = document.createElement('ul')\n//     markUp.classList.add(\"nav-container\")\n//     navData.navLinks.forEach((link) => {\n//         let listEle = document.createElement('li')\n//         listEle.classList.add('nav-item')\n//         listEle.id = link.linkId\n//         let anchor = document.createElement('a')\n//         link.isCta ? anchor.classList.add('nav-link','btn') : anchor.classList.add('nav-link')\n//         anchor.href= link.href\n//         anchor.text = link.title\n//         listEle.appendChild(anchor)\n//         markUp.appendChild(listEle)\n//     });\n//     return markUp;\n// }\nvar NavLinks = function NavLinks(navData) {\n  var markUp = document.createElement('ul');\n  markUp.classList.add(\"nav-container\");\n  navData.navLinks.forEach(function (link) {\n    var listEle = document.createElement('li');\n    listEle.classList.add('nav-item');\n    listEle.id = link.linkId;\n    var anchor = document.createElement('a');\n    link.isCta ? anchor.classList.add('nav-link', 'btn') : anchor.classList.add('nav-link');\n    anchor.href = link.href;\n    anchor.text = link.title;\n    listEle.appendChild(anchor);\n    markUp.appendChild(listEle);\n  });\n  return markUp;\n};\n\n//# sourceURL=webpack:///./src/components/navlinks.js?");

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar dataUrl = 'https://sayalijoshi27.github.io/JS-Tasks/webpage-data.json';\nvar getData = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var data;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch(dataUrl);\n\n          case 3:\n            data = _context.sent;\n            _context.next = 6;\n            return data.json();\n\n          case 6:\n            data = _context.sent;\n            return _context.abrupt(\"return\", data);\n\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(\".............error in rendering\");\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 10]]);\n  }));\n\n  return function getData() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/data/data.js?");

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