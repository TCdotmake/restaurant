"use strict";
(self["webpackChunkresturantv2"] = self["webpackChunkresturantv2"] || []).push([["header"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const contactDiv = document.createElement('div');
contactDiv.setAttribute('id', 'contactDiv');
const label = document.createElement('h1');
label.innerHTML = 'contactDiv';
contactDiv.appendChild(label);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactDiv);

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contentDiv);


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.js */ "./src/router.js");
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.js */ "./src/content.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");







const header = document.createElement('div');
header.setAttribute('id', 'header');

//place holder for logo

const logo = document.createElement('h1');
logo.innerHTML = 'Logo Placeholder';

const logoDiv = document.createElement('div');
logoDiv.innerHTML= logo;
//navigation bar

const homeBtn = document.createElement('li');
homeBtn.innerHTML= 'Home';
const menuBtn = document.createElement('li');
menuBtn.innerHTML= "Menu";
const contactBtn = document.createElement('li');
contactBtn.innerHTML = 'Contact';


const navUl = document.createElement('ul');
navUl.appendChild(homeBtn);
navUl.appendChild(menuBtn);
navUl.appendChild(contactBtn);
const navBar = document.createElement('nav');
navBar.setAttribute('id','navBar');
navBar.appendChild(navUl);

header.appendChild(logo);
header.appendChild(navBar);

homeBtn.addEventListener('click', ()=>(0,_router_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_content_js__WEBPACK_IMPORTED_MODULE_1__["default"], _home_js__WEBPACK_IMPORTED_MODULE_2__["default"]));
menuBtn.addEventListener('click', ()=>(0,_router_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_content_js__WEBPACK_IMPORTED_MODULE_1__["default"], _menu_js__WEBPACK_IMPORTED_MODULE_3__["default"]));
contactBtn.addEventListener('click', ()=>(0,_router_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_content_js__WEBPACK_IMPORTED_MODULE_1__["default"], _contact_js__WEBPACK_IMPORTED_MODULE_4__["default"]));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const homeDiv = document.createElement('div');
homeDiv.setAttribute('id', 'homeDiv');

const label = document.createElement('h1');
label.innerHTML = 'homeDiv';
homeDiv.appendChild(label);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeDiv);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const menuDiv = document.createElement('div');
menuDiv.setAttribute('id', 'menuDiv');
const label = document.createElement('h1');
label.innerHTML = 'menuDiv';
menuDiv.appendChild(label);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuDiv);

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//router
//  arguments: (parent, child)
//  takes in a container/parent element
//  empty it and append child from argument

const route = (parent, child) =>{
    if(parent.hasChildNodes){
        while(parent.firstChild){
            parent.removeChild(parent.lastChild);
        }
    }
    parent.appendChild(child);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (route);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/header.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDUnpCO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RNO0FBQ007QUFDTjtBQUNBO0FBQ007O0FBRXRDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQyxzREFBSyxDQUFDLG1EQUFVLEVBQUUsZ0RBQU87QUFDL0Qsc0NBQXNDLHNEQUFLLENBQUMsbURBQVUsRUFBRSxnREFBTztBQUMvRCx5Q0FBeUMsc0RBQUssQ0FBQyxtREFBVSxFQUFFLG1EQUFVOztBQUVyRSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FDeENyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7O0FDUHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUNSdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50djIvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnR2Mi8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3R1cmFudHYyLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnR2Mi8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3R1cmFudHYyLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50djIvLi9zcmMvcm91dGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWN0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdERpdicpO1xuY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xubGFiZWwuaW5uZXJIVE1MID0gJ2NvbnRhY3REaXYnO1xuY29udGFjdERpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3REaXY7IiwiY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGVudERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnREaXY7XG4iLCJcbmltcG9ydCByb3V0ZSBmcm9tICcuL3JvdXRlci5qcyc7XG5pbXBvcnQgY29udGVudERpdiBmcm9tICcuL2NvbnRlbnQuanMnO1xuaW1wb3J0IGhvbWVEaXYgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBtZW51RGl2IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgY29udGFjdERpdiBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuXG4vL3BsYWNlIGhvbGRlciBmb3IgbG9nb1xuXG5jb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmxvZ28uaW5uZXJIVE1MID0gJ0xvZ28gUGxhY2Vob2xkZXInO1xuXG5jb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sb2dvRGl2LmlubmVySFRNTD0gbG9nbztcbi8vbmF2aWdhdGlvbiBiYXJcblxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5ob21lQnRuLmlubmVySFRNTD0gJ0hvbWUnO1xuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5tZW51QnRuLmlubmVySFRNTD0gXCJNZW51XCI7XG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbmNvbnRhY3RCdG4uaW5uZXJIVE1MID0gJ0NvbnRhY3QnO1xuXG5cbmNvbnN0IG5hdlVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbm5hdlVsLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xubmF2VWwuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5uYXZVbC5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcbmNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xubmF2QmFyLnNldEF0dHJpYnV0ZSgnaWQnLCduYXZCYXInKTtcbm5hdkJhci5hcHBlbmRDaGlsZChuYXZVbCk7XG5cbmhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbmhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PnJvdXRlKGNvbnRlbnREaXYsIGhvbWVEaXYpKTtcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+cm91dGUoY29udGVudERpdiwgbWVudURpdikpO1xuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT5yb3V0ZShjb250ZW50RGl2LCBjb250YWN0RGl2KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjsiLCJcblxuY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaG9tZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWVEaXYnKTtcblxuY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xubGFiZWwuaW5uZXJIVE1MID0gJ2hvbWVEaXYnO1xuaG9tZURpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVEaXY7IiwiXG5cbmNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51RGl2Jyk7XG5jb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5sYWJlbC5pbm5lckhUTUwgPSAnbWVudURpdic7XG5tZW51RGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudURpdjsiLCIvL3JvdXRlclxuLy8gIGFyZ3VtZW50czogKHBhcmVudCwgY2hpbGQpXG4vLyAgdGFrZXMgaW4gYSBjb250YWluZXIvcGFyZW50IGVsZW1lbnRcbi8vICBlbXB0eSBpdCBhbmQgYXBwZW5kIGNoaWxkIGZyb20gYXJndW1lbnRcblxuY29uc3Qgcm91dGUgPSAocGFyZW50LCBjaGlsZCkgPT57XG4gICAgaWYocGFyZW50Lmhhc0NoaWxkTm9kZXMpe1xuICAgICAgICB3aGlsZShwYXJlbnQuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9