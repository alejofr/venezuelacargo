"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["EditarTasasCambios"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/monedas/TasasCambiosForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/monedas/TasasCambiosForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
var CardRowFormComponent = function CardRowFormComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_forms_CardRowFormComponent_vue-_14931").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../components/forms/CardRowFormComponent.vue */ "./resources/js/components/forms/CardRowFormComponent.vue"));
};

var LoaderComponent = function LoaderComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoaderComponent_vue-_c2860").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../components/LoaderComponent.vue */ "./resources/js/components/LoaderComponent.vue"));
};

var Error404 = function Error404() {
  return __webpack_require__.e(/*! import() */ "Error404").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../components/Error404Component.vue */ "./resources/js/components/Error404Component.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TazasCambiosForm',
  data: function data() {
    return {
      componentRender: LoaderComponent,
      card: {
        title: 'Nueva Tasa Cambiaria',
        "class": 'max_width480 margin_auto_all',
        action: 'save',
        url: 'tasas-cambios',
        id: '',
        name: 'tasas-cambios',
        evento: '',
        row: [{
          "class": 'col-xl-12 col-md-12',
          form: [{
            nodo: 'input',
            type: 'text',
            validate: 'required',
            event: 'change',
            name: 'monto_tc',
            value: '',
            id: 'monto_tc',
            label: {
              title: 'Monto (tasa cambiaria)',
              "for": 'monto_tc'
            }
          }, {
            nodo: 'input',
            type: 'datetime-local',
            validate: 'required',
            event: 'change',
            name: 'fecha_tc',
            value: '',
            id: 'fecha_tc',
            label: {
              title: 'Fecha Tasa de Cambio',
              "for": 'fecha_tc'
            }
          }]
        }] //fin row

      } //fin card

    };
  },
  beforeCreate: function beforeCreate() {
    this.$nextTick(function () {
      if (Object.keys(this.$route.params).length != 0) {
        this.edit(this.$route.params.id);
      } else {
        this.componentRender = Error404;
      }
    });
  },
  methods: {
    edit: function edit(id) {
      var _this = this;

      this.axios.get("monedas-cambios/".concat(id, "/edit")).then(function (response) {
        console.log(response.data);

        if (response.data.results != null) {
          _this.card.action = 'update';
          _this.card.id = id;
          _this.componentRender = CardRowFormComponent;
        } else {
          _this.componentRender = Error404;
        }
      })["catch"](function (error) {
        console.log(error.response.data);
        _this.componentRender = Error404;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/admin/configuracion/monedas/TasasCambiosForm.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/admin/configuracion/monedas/TasasCambiosForm.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TasasCambiosForm_vue_vue_type_template_id_30f1a69f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TasasCambiosForm.vue?vue&type=template&id=30f1a69f& */ "./resources/js/views/admin/configuracion/monedas/TasasCambiosForm.vue?vue&type=template&id=30f1a69f&");
/* harmony import */ var _TasasCambiosForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TasasCambiosForm.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/configuracion/monedas/TasasCambiosForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TasasCambiosForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TasasCambiosForm_vue_vue_type_template_id_30f1a69f___WEBPACK_IMPORTED_MODULE_0__.render,
  _TasasCambiosForm_vue_vue_type_template_id_30f1a69f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/configuracion/monedas/TasasCambiosForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/configuracion/monedas/TasasCambiosForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/admin/configuracion/monedas/TasasCambiosForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TasasCambiosForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TasasCambiosForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/monedas/TasasCambiosForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TasasCambiosForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/configuracion/monedas/TasasCambiosForm.vue?vue&type=template&id=30f1a69f&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/admin/configuracion/monedas/TasasCambiosForm.vue?vue&type=template&id=30f1a69f& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TasasCambiosForm_vue_vue_type_template_id_30f1a69f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TasasCambiosForm_vue_vue_type_template_id_30f1a69f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TasasCambiosForm_vue_vue_type_template_id_30f1a69f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TasasCambiosForm.vue?vue&type=template&id=30f1a69f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/monedas/TasasCambiosForm.vue?vue&type=template&id=30f1a69f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/monedas/TasasCambiosForm.vue?vue&type=template&id=30f1a69f&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/monedas/TasasCambiosForm.vue?vue&type=template&id=30f1a69f& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row row-cards" }, [
    _c(
      "div",
      { staticClass: "col-12", staticStyle: { "min-height": "60vh" } },
      [
        _c(_vm.componentRender, {
          tag: "component",
          attrs: { card: _vm.card },
        }),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);