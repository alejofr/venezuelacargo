"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["AddGeolocalizacion"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BtnVolver.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BtnVolver.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'BtnVolver',
  props: ['classe'],
  methods: {
    volver: function volver() {
      this.$router.go(-1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/ubigeo/AddGeolocalizacion.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/ubigeo/AddGeolocalizacion.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_BtnVolver_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/BtnVolver.vue */ "./resources/js/components/BtnVolver.vue");
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
//
//
//
//
//
//
//
//


var LoaderComponent = function LoaderComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoaderComponent_vue-_c2860").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../components/LoaderComponent.vue */ "./resources/js/components/LoaderComponent.vue"));
};

var AlertMessageComponent = function AlertMessageComponent() {
  return __webpack_require__.e(/*! import() */ "AlertMessageComponent").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../components/AlertMessageComponent.vue */ "./resources/js/components/AlertMessageComponent.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'EditGeolocalizacion',
  data: function data() {
    return {
      categoria: {
        estado: '',
        zona: '',
        codigo_postal: '',
        activo: 1
      },
      categorias: [],
      loader: false,
      activeComponent: '',
      component404: '',
      alert: {
        msg: '',
        clss: ''
      }
    };
  },
  beforeCreate: function beforeCreate() {},
  components: {
    loader: LoaderComponent,
    BtnVolver: _components_BtnVolver_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    save: function save() {
      var _this = this;

      this.$validator.validate().then(function (valid) {
        if (valid) {
          _this.loader = true;
          _this.activeComponent = AlertMessageComponent;

          _this.axios.post("geolocalizacion-store", _this.categoria).then(function (response) {
            console.log(response.data);
            _this.loader = false;
            _this.alert = {
              msg: response.data.message,
              clss: 'updated'
            };
          })["catch"](function (error) {
            console.log(error.response);
            _this.loader = false;
            _this.alert = {
              msg: error.response.data.message,
              clss: 'error'
            };
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/BtnVolver.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/BtnVolver.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BtnVolver_vue_vue_type_template_id_34e53391___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BtnVolver.vue?vue&type=template&id=34e53391& */ "./resources/js/components/BtnVolver.vue?vue&type=template&id=34e53391&");
/* harmony import */ var _BtnVolver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BtnVolver.vue?vue&type=script&lang=js& */ "./resources/js/components/BtnVolver.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BtnVolver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BtnVolver_vue_vue_type_template_id_34e53391___WEBPACK_IMPORTED_MODULE_0__.render,
  _BtnVolver_vue_vue_type_template_id_34e53391___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BtnVolver.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/configuracion/ubigeo/AddGeolocalizacion.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/views/admin/configuracion/ubigeo/AddGeolocalizacion.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddGeolocalizacion_vue_vue_type_template_id_65d994bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddGeolocalizacion.vue?vue&type=template&id=65d994bd& */ "./resources/js/views/admin/configuracion/ubigeo/AddGeolocalizacion.vue?vue&type=template&id=65d994bd&");
/* harmony import */ var _AddGeolocalizacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddGeolocalizacion.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/configuracion/ubigeo/AddGeolocalizacion.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddGeolocalizacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddGeolocalizacion_vue_vue_type_template_id_65d994bd___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddGeolocalizacion_vue_vue_type_template_id_65d994bd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/configuracion/ubigeo/AddGeolocalizacion.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/BtnVolver.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/BtnVolver.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnVolver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BtnVolver.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BtnVolver.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnVolver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/configuracion/ubigeo/AddGeolocalizacion.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/admin/configuracion/ubigeo/AddGeolocalizacion.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGeolocalizacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddGeolocalizacion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/ubigeo/AddGeolocalizacion.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGeolocalizacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/BtnVolver.vue?vue&type=template&id=34e53391&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/BtnVolver.vue?vue&type=template&id=34e53391& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnVolver_vue_vue_type_template_id_34e53391___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnVolver_vue_vue_type_template_id_34e53391___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnVolver_vue_vue_type_template_id_34e53391___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BtnVolver.vue?vue&type=template&id=34e53391& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BtnVolver.vue?vue&type=template&id=34e53391&");


/***/ }),

/***/ "./resources/js/views/admin/configuracion/ubigeo/AddGeolocalizacion.vue?vue&type=template&id=65d994bd&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/views/admin/configuracion/ubigeo/AddGeolocalizacion.vue?vue&type=template&id=65d994bd& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGeolocalizacion_vue_vue_type_template_id_65d994bd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGeolocalizacion_vue_vue_type_template_id_65d994bd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddGeolocalizacion_vue_vue_type_template_id_65d994bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddGeolocalizacion.vue?vue&type=template&id=65d994bd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/ubigeo/AddGeolocalizacion.vue?vue&type=template&id=65d994bd&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BtnVolver.vue?vue&type=template&id=34e53391&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BtnVolver.vue?vue&type=template&id=34e53391& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "button",
    {
      staticClass: "btn",
      class: _vm.classe,
      attrs: { type: "button" },
      on: { click: _vm.volver },
    },
    [
      _c("i", { staticClass: "ti ti-arrow-back-up me-1" }),
      _vm._v("\n    Volver\n"),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/ubigeo/AddGeolocalizacion.vue?vue&type=template&id=65d994bd&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/ubigeo/AddGeolocalizacion.vue?vue&type=template&id=65d994bd& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-xl" }, [
    _c("div", { staticClass: "row row-cards" }, [
      _c(
        "div",
        { staticClass: "col-12" },
        [
          _vm.categoria != null
            ? _c("div", { staticClass: "card card-edit" }, [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loader,
                        expression: "loader",
                      },
                    ],
                    staticClass: "div-loader_white",
                  },
                  [_c("loader")],
                  1
                ),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _vm.activeComponent
                      ? _c(
                          "div",
                          { staticClass: "col-xl-12 col-md-12" },
                          [
                            _c(_vm.activeComponent, {
                              tag: "component",
                              attrs: { alert: _vm.alert },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-xl-6 col-md-6" }, [
                      _c("div", { staticClass: "mb-3" }, [
                        _c("div", { staticClass: "form-floating mb-3" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.categoria.estado,
                                expression: "categoria.estado",
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'",
                              },
                            ],
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.errors.first("estado") },
                            attrs: {
                              type: "text",
                              name: "estado",
                              id: "estado",
                            },
                            domProps: { value: _vm.categoria.estado },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.categoria,
                                  "estado",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "estado" } }, [
                            _vm._v("Estado"),
                          ]),
                          _vm._v(" "),
                          _vm.errors.has("estado")
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(_vm._s(_vm.errors.first("estado"))),
                              ])
                            : _vm._e(),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-floating" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|max:60",
                                expression: "'required|max:60'",
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.categoria.zona,
                                expression: "categoria.zona",
                              },
                            ],
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.errors.first("zona") },
                            attrs: { type: "text", name: "zona", id: "zona" },
                            domProps: { value: _vm.categoria.zona },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.categoria,
                                  "zona",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "zona" } }, [
                            _vm._v("Ubicaciòn o Zona"),
                          ]),
                          _vm._v(" "),
                          _vm.errors.has("zona")
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(_vm._s(_vm.errors.first("zona"))),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-xl-6 col-md-6" }, [
                      _c("div", { staticClass: "mb-3" }, [
                        _c("div", { staticClass: "form-floating" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.categoria.codigo_postal,
                                expression: "categoria.codigo_postal",
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|max:30|numeric",
                                expression: "'required|max:30|numeric'",
                              },
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.errors.first("codigo_postal"),
                            },
                            attrs: {
                              type: "text",
                              name: "codigo_postal",
                              id: "codigo_postal",
                            },
                            domProps: { value: _vm.categoria.codigo_postal },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.categoria,
                                  "codigo_postal",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "codigo_postal" } }, [
                            _vm._v("Còdigo Postal"),
                          ]),
                          _vm._v(" "),
                          _vm.errors.has("codigo_postal")
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  _vm._s(_vm.errors.first("codigo_postal"))
                                ),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mb-3" }, [
                        _c("div", { staticClass: "form-label" }, [
                          _vm._v("Visible"),
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "label",
                            { staticClass: "form-check form-check-inline" },
                            [
                              _vm.categoria.activo == 1
                                ? _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.categoria.activo,
                                        expression: "categoria.activo",
                                      },
                                    ],
                                    staticClass: "form-check-input",
                                    attrs: {
                                      name: "activo",
                                      type: "radio",
                                      id: "1",
                                      checked: "",
                                      value: "1",
                                    },
                                    domProps: {
                                      checked: _vm._q(
                                        _vm.categoria.activo,
                                        "1"
                                      ),
                                    },
                                    on: {
                                      change: function ($event) {
                                        return _vm.$set(
                                          _vm.categoria,
                                          "activo",
                                          "1"
                                        )
                                      },
                                    },
                                  })
                                : _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.categoria.activo,
                                        expression: "categoria.activo",
                                      },
                                    ],
                                    staticClass: "form-check-input",
                                    attrs: {
                                      name: "activo",
                                      type: "radio",
                                      id: "0",
                                      value: "1",
                                    },
                                    domProps: {
                                      checked: _vm._q(
                                        _vm.categoria.activo,
                                        "1"
                                      ),
                                    },
                                    on: {
                                      change: function ($event) {
                                        return _vm.$set(
                                          _vm.categoria,
                                          "activo",
                                          "1"
                                        )
                                      },
                                    },
                                  }),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass: "form-check-label",
                                  attrs: { id: "1" },
                                },
                                [_vm._v("Activo")]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "label",
                            { staticClass: "form-check form-check-inline" },
                            [
                              _vm.categoria.activo == 0
                                ? _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.categoria.activo,
                                        expression: "categoria.activo",
                                      },
                                    ],
                                    staticClass: "form-check-input",
                                    attrs: {
                                      name: "activo",
                                      id: "0",
                                      type: "radio",
                                      checked: "",
                                      value: "0",
                                    },
                                    domProps: {
                                      checked: _vm._q(
                                        _vm.categoria.activo,
                                        "0"
                                      ),
                                    },
                                    on: {
                                      change: function ($event) {
                                        return _vm.$set(
                                          _vm.categoria,
                                          "activo",
                                          "0"
                                        )
                                      },
                                    },
                                  })
                                : _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.categoria.activo,
                                        expression: "categoria.activo",
                                      },
                                    ],
                                    staticClass: "form-check-input",
                                    attrs: {
                                      name: "activo",
                                      id: "0",
                                      type: "radio",
                                      value: "0",
                                    },
                                    domProps: {
                                      checked: _vm._q(
                                        _vm.categoria.activo,
                                        "0"
                                      ),
                                    },
                                    on: {
                                      change: function ($event) {
                                        return _vm.$set(
                                          _vm.categoria,
                                          "activo",
                                          "0"
                                        )
                                      },
                                    },
                                  }),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass: "form-check-label",
                                  attrs: { id: "0" },
                                },
                                [_vm._v("Inactivo")]
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-footer text-end" }, [
                  _c(
                    "div",
                    { staticClass: "d-flex" },
                    [
                      _c("btn-volver", { attrs: { classe: "btn-light" } }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary ms-auto",
                          attrs: { type: "submit" },
                          on: { click: _vm.save },
                        },
                        [
                          _c("i", { staticClass: "ti ti-plus me-1" }),
                          _vm._v(
                            "\n                            Guardar\n                        "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ]),
              ])
            : _c(_vm.component404, { tag: "component" }),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [
        _vm._v("Crear nueva ubicación"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);