"use strict";
(self["webpackChunkresturantv2"] = self["webpackChunkresturantv2"] || []).push([["router"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/router.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50djIvLi9zcmMvcm91dGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vcm91dGVyXG4vLyAgYXJndW1lbnRzOiAocGFyZW50LCBjaGlsZClcbi8vICB0YWtlcyBpbiBhIGNvbnRhaW5lci9wYXJlbnQgZWxlbWVudFxuLy8gIGVtcHR5IGl0IGFuZCBhcHBlbmQgY2hpbGQgZnJvbSBhcmd1bWVudFxuXG5jb25zdCByb3V0ZSA9IChwYXJlbnQsIGNoaWxkKSA9PntcbiAgICBpZihwYXJlbnQuaGFzQ2hpbGROb2Rlcyl7XG4gICAgICAgIHdoaWxlKHBhcmVudC5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=