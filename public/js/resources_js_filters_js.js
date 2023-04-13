"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_filters_js"],{

/***/ "./resources/js/filters.js":
/*!*********************************!*\
  !*** ./resources/js/filters.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var filters = [{
  url: 'almacenes',
  name: 'IndexAlmacen',
  params: {
    limit: 8,
    page: 1,
    orderBy: 'almacenes.warehouse',
    ascending: 1,
    query: {
      search: '',
      estado: 'all',
      instruciones: 'all',
      fecha_inicio: '',
      fecha_final: ''
    }
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  returnFilter: function returnFilter(name) {
    for (var i = 0; i < filters.length; i++) {
      if (name === filters[i].name) return filters[i];
    }
  }
});

/***/ })

}]);