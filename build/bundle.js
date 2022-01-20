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

/***/ "./src/component/cardGroup/cardGroup.css":
/*!***********************************************!*\
  !*** ./src/component/cardGroup/cardGroup.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://try1/./src/component/cardGroup/cardGroup.css?");

/***/ }),

/***/ "./src/component/footer/footer.css":
/*!*****************************************!*\
  !*** ./src/component/footer/footer.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://try1/./src/component/footer/footer.css?");

/***/ }),

/***/ "./src/component/navbar/navbar.css":
/*!*****************************************!*\
  !*** ./src/component/navbar/navbar.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://try1/./src/component/navbar/navbar.css?");

/***/ }),

/***/ "./src/component/cardGroup/cardGroup.js":
/*!**********************************************!*\
  !*** ./src/component/cardGroup/cardGroup.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cardGroup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardGroup.css */ \"./src/component/cardGroup/cardGroup.css\");\n/* harmony import */ var _assets_burger_dinner_food_hamburger_wallpaper_preview_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/burger-dinner-food-hamburger-wallpaper-preview.jpg */ \"./src/assets/burger-dinner-food-hamburger-wallpaper-preview.jpg\");\n/* harmony import */ var _assets_crust_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/crust-1.jpg */ \"./src/assets/crust-1.jpg\");\n/* harmony import */ var _assets_spaghetti_dish_wooden_background_45583_1175_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/spaghetti-dish-wooden-background_45583-1175.webp */ \"./src/assets/spaghetti-dish-wooden-background_45583-1175.webp\");\n\r\n\r\n\r\n\r\nconst cardgroup = document.createElement(\"div\");\r\ncardgroup.style.marginLeft=\"80px\";\r\ncardgroup.innerHTML=`\r\n<h1 style=\"text-align:center\">Restaurant</h1>\r\n<div>\r\n  <div class=\"card\">\r\n  <img src=\"${_assets_burger_dinner_food_hamburger_wallpaper_preview_jpg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Avatar\" style=\"width:100%\">\r\n  <div class=\"container\">\r\n    <h2><b>Sandwitches</b></h2> \r\n    <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> \r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n<img src=\"${_assets_crust_1_jpg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Avatar\" style=\"width:100%\">\r\n<div class=\"container\">\r\n  <h2><b>Pizza</b></h2> \r\n  <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> \r\n</div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n<img src=\"${_assets_spaghetti_dish_wooden_background_45583_1175_webp__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Avatar\" style=\"width:100%\">\r\n<div class=\"container\">\r\n  <h2><b>Pasta</b></h2> \r\n  <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> \r\n</div>\r\n</div>\r\n\r\n</div>`\r\ndocument.body.appendChild(cardgroup);\n\n//# sourceURL=webpack://try1/./src/component/cardGroup/cardGroup.js?");

/***/ }),

/***/ "./src/component/footer/footer.js":
/*!****************************************!*\
  !*** ./src/component/footer/footer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.css */ \"./src/component/footer/footer.css\");\n\r\nconst footer = document.createElement(\"div\");\r\nfooter.style.clear=\"both\";\r\nfooter.style.marginTop=\"40%\";\r\n\r\nfooter.innerHTML=`\r\n<footer class=\"footer\">\r\n  <div class=\"footer__addr\">\r\n    <h1 class=\"footer__logo\">Something</h1>\r\n        \r\n    <h2>Contact</h2>\r\n    \r\n    <address>\r\n      5534 Somewhere In. The World 22193-10212<br>\r\n          \r\n      <a class=\"footer__btn\" href=\"mailto:example@gmail.com\">Email Us</a>\r\n    </address>\r\n  </div>\r\n  \r\n  <ul class=\"footer__nav\">\r\n    <li class=\"nav__item\">\r\n      <h2 class=\"nav__title\">Media</h2>\r\n\r\n      <ul class=\"nav__ul\">\r\n        <li>\r\n          <a href=\"#\">Online</a>\r\n        </li>\r\n\r\n        <li>\r\n          <a href=\"#\">Print</a>\r\n        </li>\r\n            \r\n        <li>\r\n          <a href=\"#\">Alternative Ads</a>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n    \r\n    <li class=\"nav__item nav__item--extra\">\r\n      <h2 class=\"nav__title\">Technology</h2>\r\n      \r\n      <ul class=\"nav__ul nav__ul--extra\">\r\n        <li>\r\n          <a href=\"#\">Hardware Design</a>\r\n        </li>\r\n        \r\n        <li>\r\n          <a href=\"#\">Software Design</a>\r\n        </li>\r\n        \r\n        <li>\r\n          <a href=\"#\">Digital Signage</a>\r\n        </li>\r\n        \r\n        <li>\r\n          <a href=\"#\">Automation</a>\r\n        </li>\r\n        \r\n        <li>\r\n          <a href=\"#\">Artificial Intelligence</a>\r\n        </li>\r\n        \r\n        <li>\r\n          <a href=\"#\">IoT</a>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n    \r\n    <li class=\"nav__item\">\r\n      <h2 class=\"nav__title\">Legal</h2>\r\n      \r\n      <ul class=\"nav__ul\">\r\n        <li>\r\n          <a href=\"#\">Privacy Policy</a>\r\n        </li>\r\n        \r\n        <li>\r\n          <a href=\"#\">Terms of Use</a>\r\n        </li>\r\n        \r\n        <li>\r\n          <a href=\"#\">Sitemap</a>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n  </ul>\r\n  \r\n  <div class=\"legal\">\r\n    <p>&copy; 2019 Something. All rights reserved.</p>\r\n    \r\n    <div class=\"legal__links\">\r\n      <span>Made with <span class=\"heart\">♥</span> remotely from Anywhere</span>\r\n    </div>\r\n  </div>\r\n</footer>`\r\ndocument.body.appendChild(footer)\n\n//# sourceURL=webpack://try1/./src/component/footer/footer.js?");

/***/ }),

/***/ "./src/component/navbar/navbar.js":
/*!****************************************!*\
  !*** ./src/component/navbar/navbar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.css */ \"./src/component/navbar/navbar.css\");\n\r\n\r\nconst navbar = document.createElement(\"div\");\r\nnavbar.style.height=\"50px\";\r\nnavbar.style.marginBottom=\"60px\"\r\nnavbar.innerHTML= `\r\n<ul class=\"nav-ul\">\r\n<li><img src=${_assets_logo_png__WEBPACK_IMPORTED_MODULE_0__} style=\"width:100px;margin:0px\"/></li>\r\n  <li><a class=\"active\" href=\"#home\">Home</a></li>\r\n  <li><a href=\"#news\">Menu</a></li>\r\n  <li><a href=\"#contact\">Contact</a></li>\r\n  <li><a href=\"#about\">About</a></li>\r\n</ul>`\r\ndocument.body.appendChild(navbar);\r\n\r\n\n\n//# sourceURL=webpack://try1/./src/component/navbar/navbar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_navbar_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/navbar/navbar */ \"./src/component/navbar/navbar.js\");\n/* harmony import */ var _component_cardGroup_cardGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/cardGroup/cardGroup */ \"./src/component/cardGroup/cardGroup.js\");\n/* harmony import */ var _component_footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/footer/footer */ \"./src/component/footer/footer.js\");\n// import hello from './hello world';\n// hello()\n\n\n\n// // nooo\n// import \"./style.css\"\n// import bio from \"./component/bio/bio\"\n\n//# sourceURL=webpack://try1/./src/index.js?");

/***/ }),

/***/ "./src/assets/burger-dinner-food-hamburger-wallpaper-preview.jpg":
/*!***********************************************************************!*\
  !*** ./src/assets/burger-dinner-food-hamburger-wallpaper-preview.jpg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/burger-dinner-food-hamburger-wallpaper-preview.jpg\";\n\n//# sourceURL=webpack://try1/./src/assets/burger-dinner-food-hamburger-wallpaper-preview.jpg?");

/***/ }),

/***/ "./src/assets/crust-1.jpg":
/*!********************************!*\
  !*** ./src/assets/crust-1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/crust-1.jpg\";\n\n//# sourceURL=webpack://try1/./src/assets/crust-1.jpg?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/logo.png\";\n\n//# sourceURL=webpack://try1/./src/assets/logo.png?");

/***/ }),

/***/ "./src/assets/spaghetti-dish-wooden-background_45583-1175.webp":
/*!*********************************************************************!*\
  !*** ./src/assets/spaghetti-dish-wooden-background_45583-1175.webp ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/spaghetti-dish-wooden-background_45583-1175.webp\";\n\n//# sourceURL=webpack://try1/./src/assets/spaghetti-dish-wooden-background_45583-1175.webp?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;