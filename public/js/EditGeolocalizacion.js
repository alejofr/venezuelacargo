"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["EditGeolocalizacion"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/ubigeo/EditGeolocalizacion.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/ubigeo/EditGeolocalizacion.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BtnVolver_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/BtnVolver.vue */ "./resources/js/components/BtnVolver.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//


var LoaderComponent = function LoaderComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoaderComponent_vue-_c2860").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../components/LoaderComponent.vue */ "./resources/js/components/LoaderComponent.vue"));
};

var AlertMessageComponent = function AlertMessageComponent() {
  return __webpack_require__.e(/*! import() */ "AlertMessageComponent").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../components/AlertMessageComponent.vue */ "./resources/js/components/AlertMessageComponent.vue"));
};

var Component404 = function Component404() {
  return __webpack_require__.e(/*! import() */ "Error404").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../components/Error404Component.vue */ "./resources/js/components/Error404Component.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'EditGeolocalizacion',
  data: function data() {
    return {
      categoria: null,
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
  beforeCreate: function beforeCreate() {
    this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.axios.get("geolocalizacion/".concat(this.$route.params.id, "/edit")).then(function (response) {
                _this.categoria = response.data.results.categoria;

                if (_this.categoria != null) {
                  document.title = document.title + ' : ' + _this.categoria.zona;
                  _this.categorias = response.data.results.categorias;
                } else {
                  _this.component404 = Component404;
                }

                console.log(response.data);
              })["catch"](function (error) {
                console.log(error.response);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
  },
  components: {
    loader: LoaderComponent,
    BtnVolver: _components_BtnVolver_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    save: function save() {
      var _this2 = this;

      this.$validator.validate().then(function (valid) {
        if (valid) {
          _this2.loader = true;
          _this2.activeComponent = AlertMessageComponent;

          _this2.axios.put("geolocalizacion/".concat(_this2.$route.params.id), _this2.categoria).then(function (response) {
            console.log(response.data);
            _this2.loader = false;
            _this2.alert = {
              msg: response.data.message,
              clss: 'updated'
            };
          })["catch"](function (error) {
            console.log(error.response);
            _this2.loader = false;
            _this2.alert = {
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

/***/ "./resources/js/views/admin/configuracion/ubigeo/EditGeolocalizacion.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/admin/configuracion/ubigeo/EditGeolocalizacion.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditGeolocalizacion_vue_vue_type_template_id_18f49b84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditGeolocalizacion.vue?vue&type=template&id=18f49b84& */ "./resources/js/views/admin/configuracion/ubigeo/EditGeolocalizacion.vue?vue&type=template&id=18f49b84&");
/* harmony import */ var _EditGeolocalizacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditGeolocalizacion.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/configuracion/ubigeo/EditGeolocalizacion.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditGeolocalizacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditGeolocalizacion_vue_vue_type_template_id_18f49b84___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditGeolocalizacion_vue_vue_type_template_id_18f49b84___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/configuracion/ubigeo/EditGeolocalizacion.vue"
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

/***/ "./resources/js/views/admin/configuracion/ubigeo/EditGeolocalizacion.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/admin/configuracion/ubigeo/EditGeolocalizacion.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditGeolocalizacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditGeolocalizacion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/ubigeo/EditGeolocalizacion.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditGeolocalizacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/views/admin/configuracion/ubigeo/EditGeolocalizacion.vue?vue&type=template&id=18f49b84&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/admin/configuracion/ubigeo/EditGeolocalizacion.vue?vue&type=template&id=18f49b84& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditGeolocalizacion_vue_vue_type_template_id_18f49b84___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditGeolocalizacion_vue_vue_type_template_id_18f49b84___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditGeolocalizacion_vue_vue_type_template_id_18f49b84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditGeolocalizacion.vue?vue&type=template&id=18f49b84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/ubigeo/EditGeolocalizacion.vue?vue&type=template&id=18f49b84&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/ubigeo/EditGeolocalizacion.vue?vue&type=template&id=18f49b84&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/ubigeo/EditGeolocalizacion.vue?vue&type=template&id=18f49b84& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
                _c("div", { staticClass: "card-header" }, [
                  _c("h4", { staticClass: "card-title" }, [
                    _vm._v(_vm._s(_vm.categoria.zona)),
                  ]),
                ]),
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
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.categoria.id_estado,
                                  expression: "categoria.id_estado",
                                },
                              ],
                              staticClass: "form-select",
                              attrs: {
                                id: "estado",
                                "aria-label": "Selecciona un estado",
                              },
                              on: {
                                change: function ($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function (o) {
                                      return o.selected
                                    })
                                    .map(function (o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.categoria,
                                    "id_estado",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                              },
                            },
                            _vm._l(_vm.categorias, function (cat, index) {
                              return _c(
                                "option",
                                {
                                  key: index,
                                  domProps: { value: cat.id_estado },
                                },
                                [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(cat.estado) +
                                      "\n                                        "
                                  ),
                                ]
                              )
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "estado" } }, [
                            _vm._v("Estados"),
                          ]),
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
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);