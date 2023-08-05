"use strict";
(self["webpackChunkresturantv2"] = self["webpackChunkresturantv2"] || []).push([["header"],{

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mkEle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mkEle.js */ "./src/mkEle.js");


const header = document.createElement('div');
header.setAttribute('id', 'header');

//place holder for logo
const logo = (0,_mkEle_js__WEBPACK_IMPORTED_MODULE_0__["default"])('h1', 'Logo Placeholder');
const logoDiv = (0,_mkEle_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', logo);

//navigation bar
const navArr = [(0,_mkEle_js__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'Home'), (0,_mkEle_js__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'Menu'), (0,_mkEle_js__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'Contact')];
const navUl = document.createElement('ul');
for(let n of navArr){
    navUl.appendChild(n);
}
const navBar = document.createElement('nav');
navBar.setAttribute('id','navBar');
navBar.appendChild(navUl);

header.appendChild(logo);
header.appendChild(navBar);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./src/mkEle.js":
/*!**********************!*\
  !*** ./src/mkEle.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mkEle = (tag, content)=>{
    const element = document.createElement(tag);
    element.innerHTML = content;
    return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mkEle);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/header.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQjs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBLGFBQWEscURBQUs7QUFDbEIsZ0JBQWdCLHFEQUFLOztBQUVyQjtBQUNBLGdCQUFnQixxREFBSyxnQkFBZ0IscURBQUssZ0JBQWdCLHFEQUFLO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUN0QnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudHYyLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnR2Mi8uL3NyYy9ta0VsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWtFbGUgZnJvbSAnLi9ta0VsZS5qcyc7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG5cbi8vcGxhY2UgaG9sZGVyIGZvciBsb2dvXG5jb25zdCBsb2dvID0gbWtFbGUoJ2gxJywgJ0xvZ28gUGxhY2Vob2xkZXInKTtcbmNvbnN0IGxvZ29EaXYgPSBta0VsZSgnZGl2JywgbG9nbyk7XG5cbi8vbmF2aWdhdGlvbiBiYXJcbmNvbnN0IG5hdkFyciA9IFtta0VsZSgnbGknLCAnSG9tZScpLCBta0VsZSgnbGknLCAnTWVudScpLCBta0VsZSgnbGknLCAnQ29udGFjdCcpXTtcbmNvbnN0IG5hdlVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbmZvcihsZXQgbiBvZiBuYXZBcnIpe1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKG4pO1xufVxuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5uYXZCYXIuc2V0QXR0cmlidXRlKCdpZCcsJ25hdkJhcicpO1xubmF2QmFyLmFwcGVuZENoaWxkKG5hdlVsKTtcblxuaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJhcik7XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjsiLCJjb25zdCBta0VsZSA9ICh0YWcsIGNvbnRlbnQpPT57XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1rRWxlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==