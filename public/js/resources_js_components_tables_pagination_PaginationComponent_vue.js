"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_tables_pagination_PaginationComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PaginationComponent',
  data: function data() {
    return {
      totalPage: 1,
      prev: 1,
      next: 1,
      pages: [],
      query: {},
      fullPath: ''
    };
  },
  computed: {
    pagination: function pagination() {
      this.paginationPage(this.$store.getters['tableadmin/getPagination']);
      return this.$store.getters['tableadmin/getPagination'];
    }
  },
  methods: {
    paginationPage: function paginationPage(pagination) {
      var arregloAux = [];

      if (pagination.resultPage > 0) {
        this.prev = pagination.numPage - 1;
        this.next = pagination.numPage + 1;
        var totalPages = this.totalPage = Math.ceil(pagination.totalResult / pagination.resultPage);
        console.log(Math.ceil(pagination.totalResult / pagination.resultPage), 'ass qaq');
        var init = pagination.numPage; //lo inicializamos en el valor que viene en numPage

        var j = 1; //sirve para el control de orden
        //arreglo auxiliar para el oder de la paginacion

        for (var i = init; i <= totalPages; i++) {
          if (j > 3) //muestra 3: num 1 el prev y  num 2 el valor de page o de la pagina actual y num 3 el depues de page 
            break;

          if (init > 1 && j == 1) {
            //prev antes de page
            for (var k = init - 1; k >= 1; k--) {
              if (j == 2) break;
              arregloAux.unshift(k);
              j++;
            }
          } //valor de page + despues de page


          arregloAux.push(i);
          j++;
        }

        var start = 1; //antes de antes como decir el star o inicio de la paginacio o del num mas cercano a uno o a prev

        if (arregloAux[0] > 2) {
          if (totalPages - 1 == arregloAux[0]) {
            arregloAux.unshift(arregloAux[0] - 1);
          }

          start = arregloAux[0] - 2;
          arregloAux.unshift('');
          arregloAux.unshift(start);
        } else if (arregloAux[0] == 2) {
          arregloAux.unshift(start);
        }

        var indice = arregloAux.length - 1; //definicion de end, para el control del separador antes de end  o end

        if (arregloAux[indice] != totalPages && arregloAux[indice] == totalPages - 1) {
          arregloAux.push(totalPages);
        } else if (arregloAux[indice] != totalPages && arregloAux[indice] != totalPages - 1) {
          arregloAux.push('');
          arregloAux.push(totalPages);
        }
      } else {
        arregloAux.push(1);
      }

      if (Object.keys(this.$route.query) != 0) {
        this.query = this.$route.query;

        if (this.query.hasOwnProperty("page")) {
          console.log('sas');
          delete this.query.page;
        }
      }

      this.fullPath = this.$route.fullPath;
      this.pages = arregloAux;
    }
  },
  watch: {
    /*pagination(){
        this.paginationPage(this.pagination)
    }*/
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.page-item{\n    margin-left: 5px;\n}\n.page-link{\n    background: #fff;\n    font-size: 14px;\n    height: 36px;\n    width: 36px;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 0;\n    min-width: 0;\n    border-radius: 0;\n    background-color: var(--tblr-table-bg);\n    border-width: 1px;\n    box-shadow: inset 0 0 0 9999px var(--tblr-table-accent-bg);\n}\n.arrow-ti{\n    font-size: 16px;\n}\n.page-link.active, .page-link.btn-pagination:hover{\n    z-index: 3;\n    background-color: #ffc107;\n    color: #1f2d3d;\n     border-color: #ffc107;\n}\n.page-item .arrow-ti{\n    color: rgba(98, 105, 118, 1);\n    background-color: #cbd5e1;\n    border-color: #cbd5e1;\n}\n.page-item .arrow-ti.disabled{\n    pointer-events: none;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaginationComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/tables/pagination/PaginationComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/tables/pagination/PaginationComponent.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaginationComponent_vue_vue_type_template_id_44b323c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationComponent.vue?vue&type=template&id=44b323c6& */ "./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=template&id=44b323c6&");
/* harmony import */ var _PaginationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _PaginationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaginationComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PaginationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaginationComponent_vue_vue_type_template_id_44b323c6___WEBPACK_IMPORTED_MODULE_0__.render,
  _PaginationComponent_vue_vue_type_template_id_44b323c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tables/pagination/PaginationComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaginationComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaginationComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=template&id=44b323c6&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=template&id=44b323c6& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_template_id_44b323c6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_template_id_44b323c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationComponent_vue_vue_type_template_id_44b323c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaginationComponent.vue?vue&type=template&id=44b323c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=template&id=44b323c6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=template&id=44b323c6&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/pagination/PaginationComponent.vue?vue&type=template&id=44b323c6& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card-footer d-flex align-items-center" }, [
    _c("p", { staticClass: "m-0 text-muted" }, [
      _vm._v("Mostrando "),
      _c("span", [_vm._v(_vm._s(_vm.pagination.resultPage))]),
      _vm._v(" de "),
      _c("span", [_vm._v(_vm._s(_vm.pagination.totalResult))]),
      _vm._v(" Entradas"),
    ]),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "pagination m-0 ms-auto" },
      [
        _c(
          "li",
          { staticClass: "page-item" },
          [
            this.pagination.numPage == 1
              ? _c(
                  "a",
                  {
                    staticClass: "page-link disabled prev arrow-ti",
                    attrs: {
                      href: "javascript:void(0)",
                      tabindex: "-1",
                      "aria-disabled": "true",
                    },
                  },
                  [_c("i", { staticClass: "ti ti-arrow-left" })]
                )
              : _c(
                  "router-link",
                  {
                    staticClass: "page-link prev arrow-ti",
                    attrs: {
                      to: { path: _vm.fullPath, query: { page: _vm.prev } },
                    },
                  },
                  [_c("i", { staticClass: "ti ti-arrow-left" })]
                ),
          ],
          1
        ),
        _vm._v(" "),
        _vm._l(_vm.pages, function (page, index) {
          return _c(
            "li",
            { key: index, staticClass: "page-item" },
            [
              page != ""
                ? _c(
                    "router-link",
                    {
                      staticClass: "page-link btn-pagination",
                      class: { active: page == _vm.pagination.numPage },
                      attrs: {
                        to: { path: _vm.fullPath, query: { page: page } },
                      },
                    },
                    [_c("span", [_vm._v(_vm._s(page))])]
                  )
                : _c(
                    "a",
                    {
                      staticClass: "page-link btn-pagination",
                      attrs: { href: "javascript:void(0)" },
                    },
                    [
                      _c("i", {
                        staticClass: "ti ti-antenna-bars-1",
                        staticStyle: {
                          "font-size": "22px",
                          "margin-top": "-12px",
                        },
                      }),
                    ]
                  ),
            ],
            1
          )
        }),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "page-item" },
          [
            _vm.totalPage == this.pagination.numPage
              ? _c(
                  "a",
                  {
                    staticClass: "page-link arrow-ti disabled next",
                    attrs: { href: "javascript:void(0)" },
                  },
                  [_c("i", { staticClass: "ti ti-arrow-right" })]
                )
              : _c(
                  "router-link",
                  {
                    staticClass: "page-link arrow-ti next",
                    attrs: {
                      to: { path: _vm.fullPath, query: { page: _vm.next } },
                    },
                  },
                  [_c("i", { staticClass: "ti ti-arrow-right" })]
                ),
          ],
          1
        ),
      ],
      2
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);