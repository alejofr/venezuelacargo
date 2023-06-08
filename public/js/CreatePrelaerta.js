"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["CreatePrelaerta"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/CreatePrelaerta.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/CreatePrelaerta.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BtnVolver_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/BtnVolver.vue */ "./resources/js/components/BtnVolver.vue");


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
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoaderComponent_vue-_c2860").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/LoaderComponent.vue */ "./resources/js/components/LoaderComponent.vue"));
};

var AlertMessageComponent = function AlertMessageComponent() {
  return __webpack_require__.e(/*! import() */ "AlertMessageComponent").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/AlertMessageComponent.vue */ "./resources/js/components/AlertMessageComponent.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CreatePrelaerta',
  data: function data() {
    return {
      loader: false,
      activeComponent: '',
      alert: {
        msg: '',
        clss: ''
      },
      transportes: [],
      trackings: [],
      id_empresa_transporte: '',
      nro_tracking: '',
      desp_tracking: '',
      fecha_llegada: ''
    };
  },
  beforeCreate: function beforeCreate() {
    this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('sdsd');
              _context.next = 3;
              return this.axios.get('transport-companies').then(function (response) {
                _this.transportes = response.data.results;
              })["catch"](function (error) {
                console.log(error);
              });

            case 3:
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
    addTracking: function addTracking() {
      var _this2 = this;

      this.$validator.validate().then(function (valid) {
        if (valid) {
          if (!_this2.checkId_empresa(_this2.id_empresa_transporte) && _this2.trackings.length > 0) {
            _this2.respAlert(403, 'No puede agregar mas de una empresa de transporte');

            return;
          }

          if (_this2.checkTracking(_this2.nro_tracking) && _this2.trackings.length > 0) {
            _this2.respAlert(403, 'El número de tracking, debe ser único.');

            return;
          }

          var nombre = _this2.transportes.filter(function (transporte) {
            return transporte.id_empresa_transporte == _this2.id_empresa_transporte;
          })[0].nombre;

          _this2.trackings.push({
            id_empresa_transporte: _this2.id_empresa_transporte,
            transporte: nombre,
            tracking: _this2.nro_tracking,
            descripcion: _this2.desp_tracking,
            fecha_llegada: _this2.fecha_llegada
          });
        }
      });
    },
    deleteTracking: function deleteTracking(e) {
      var newTrackings = [];

      for (var i = 0; i < this.trackings.length; i++) {
        if (this.trackings[i].tracking != e.target.parentElement.value) newTrackings.push(this.trackings[i]);
      }

      this.trackings = newTrackings;
    },
    respAlert: function respAlert(status) {
      var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      this.alert = {
        msg: msg,
        clss: status == 200 ? 'updated' : 'error'
      };
      this.activeComponent = AlertMessageComponent;
      return;
    },
    checkId_empresa: function checkId_empresa(id) {
      for (var i = 0; i < this.trackings.length; i++) {
        if (this.trackings[i].id_empresa_transporte == id) {
          return true;
        }
      }

      return false;
    },
    checkTracking: function checkTracking(tracking) {
      for (var i = 0; i < this.trackings.length; i++) {
        if (this.trackings[i].tracking == tracking) {
          return true;
        }
      }

      return false;
    },
    sendSolicitud: function sendSolicitud() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var formData, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this3.trackings.length == 0)) {
                  _context2.next = 3;
                  break;
                }

                _this3.respAlert(403, 'Debe agregar al menos un tracking con su descripción');

                return _context2.abrupt("return");

              case 3:
                formData = {
                  trackings: _this3.trackings
                };
                _this3.loader = true;

                resp = function resp(_resp) {
                  setTimeout(function () {
                    _this3.loader = false;

                    _this3.respAlert(_resp.status, _resp.message);
                  }, 2000);

                  if (_resp.status == 200) {
                    setTimeout(function () {
                      _this3.$router.go(-1);
                    }, 4000);
                  }
                };

                _context2.next = 8;
                return _this3.axios.post('solicitudes', formData).then(function (response) {
                  console.log(response.data);
                  resp(response.data);
                })["catch"](function (error) {
                  console.log(error.response.data);
                  var status = error.response.status;
                  var message = error.response.data.message;

                  if (status == 500) {
                    message = 'Error inesperado. por favor intentar más tarde.';
                  }

                  resp({
                    status: status,
                    message: message
                  });
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
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

/***/ "./resources/js/views/client/CreatePrelaerta.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/client/CreatePrelaerta.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreatePrelaerta_vue_vue_type_template_id_03b6edf1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreatePrelaerta.vue?vue&type=template&id=03b6edf1& */ "./resources/js/views/client/CreatePrelaerta.vue?vue&type=template&id=03b6edf1&");
/* harmony import */ var _CreatePrelaerta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreatePrelaerta.vue?vue&type=script&lang=js& */ "./resources/js/views/client/CreatePrelaerta.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreatePrelaerta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreatePrelaerta_vue_vue_type_template_id_03b6edf1___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreatePrelaerta_vue_vue_type_template_id_03b6edf1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/client/CreatePrelaerta.vue"
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

/***/ "./resources/js/views/client/CreatePrelaerta.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/client/CreatePrelaerta.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePrelaerta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreatePrelaerta.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/CreatePrelaerta.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePrelaerta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/views/client/CreatePrelaerta.vue?vue&type=template&id=03b6edf1&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/client/CreatePrelaerta.vue?vue&type=template&id=03b6edf1& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePrelaerta_vue_vue_type_template_id_03b6edf1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePrelaerta_vue_vue_type_template_id_03b6edf1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePrelaerta_vue_vue_type_template_id_03b6edf1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreatePrelaerta.vue?vue&type=template&id=03b6edf1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/CreatePrelaerta.vue?vue&type=template&id=03b6edf1&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/CreatePrelaerta.vue?vue&type=template&id=03b6edf1&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/CreatePrelaerta.vue?vue&type=template&id=03b6edf1& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "page-body" }, [
    _c("div", { staticClass: "container-xl" }, [
      _c("div", { staticClass: "row row-cards" }, [
        _c(
          "div",
          { staticClass: "col-12", staticStyle: { "min-height": "60vh" } },
          [
            _c("div", { staticClass: "card card-lg" }, [
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
              _c("div", { staticClass: "card-body" }, [
                _vm.activeComponent != ""
                  ? _c(
                      "div",
                      { staticClass: "w-100 mb-3" },
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
                _c("div", { staticClass: "row mb-3" }, [
                  _c("div", { staticClass: "col-md-4 col-lg-4 col-12 mb-3" }, [
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-floating mb-3",
                          class: {
                            "is-invalid": _vm.errors.first("transporte"),
                          },
                        },
                        [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'",
                                },
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.id_empresa_transporte,
                                  expression: "id_empresa_transporte",
                                },
                              ],
                              staticClass: "form-select",
                              attrs: {
                                name: "transporte",
                                id: "transporte",
                                "data-vv-validate-on": "change",
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
                                  _vm.id_empresa_transporte = $event.target
                                    .multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                              },
                            },
                            _vm._l(
                              _vm.transportes,
                              function (transporte, index) {
                                return _c(
                                  "option",
                                  {
                                    key: index,
                                    domProps: {
                                      value: transporte.id_empresa_transporte,
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                                                " +
                                        _vm._s(transporte.codigo) +
                                        " - " +
                                        _vm._s(transporte.nombre) +
                                        "\r\n                                            "
                                    ),
                                  ]
                                )
                              }
                            ),
                            0
                          ),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "transporte" } }, [
                            _vm._v("Selecciona un transporte"),
                          ]),
                          _vm._v(" "),
                          _vm.errors.has("transporte")
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(_vm._s(_vm.errors.first("transporte"))),
                              ])
                            : _vm._e(),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("div", { staticClass: "form-floating mt-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.nro_tracking,
                              expression: "nro_tracking",
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'",
                            },
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.errors.first("nro_tracking"),
                          },
                          attrs: {
                            type: "text",
                            id: "nro_tracking",
                            name: "nro_tracking",
                            "aria-expanded": "false",
                            "data-vv-validate-on": "change",
                          },
                          domProps: { value: _vm.nro_tracking },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.nro_tracking = $event.target.value
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "nro_tracking" } }, [
                          _vm._v("Número de Tracking"),
                        ]),
                        _vm._v(" "),
                        _vm.errors.has("nro_tracking")
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.first("nro_tracking"))),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("div", { staticClass: "form-floating mt-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.desp_tracking,
                              expression: "desp_tracking",
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'",
                            },
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.errors.first("desp_tracking"),
                          },
                          attrs: {
                            type: "text",
                            id: "desp_tracking",
                            name: "desp_tracking",
                            "aria-expanded": "false",
                            "data-vv-validate-on": "change",
                          },
                          domProps: { value: _vm.desp_tracking },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.desp_tracking = $event.target.value
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "desp_tracking" } }, [
                          _vm._v("Descripción del Tracking"),
                        ]),
                        _vm._v(" "),
                        _vm.errors.has("desp_tracking")
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.first("desp_tracking"))),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("div", { staticClass: "form-floating mt-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.fecha_llegada,
                              expression: "fecha_llegada",
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'",
                            },
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.errors.first("fecha_llegada"),
                          },
                          attrs: {
                            type: "date",
                            id: "fecha_llegada",
                            name: "fecha_llegada",
                            "aria-expanded": "false",
                            "data-vv-validate-on": "change",
                          },
                          domProps: { value: _vm.fecha_llegada },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.fecha_llegada = $event.target.value
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "fecha_llegada" } }, [
                          _vm._v("Fecha estimada de llegada"),
                        ]),
                        _vm._v(" "),
                        _vm.errors.has("fecha_llegada")
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.first("fecha_llegada"))),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-dark w-100",
                          attrs: { type: "button" },
                          on: { click: _vm.addTracking },
                        },
                        [_vm._v("Agregar Tracking")]
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-md-8 col-lg-8 col-12 mb-3 ps-4 table-responsive",
                    },
                    [
                      _c(
                        "table",
                        {
                          staticClass:
                            "table table-transparent table-responsive",
                        },
                        [
                          _vm._m(0),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.trackings, function (item, index) {
                              return _c("tr", { key: index }, [
                                _c("td", [
                                  _c("span", [_vm._v(_vm._s(item.transporte))]),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("span", {}, [
                                    _vm._v(" " + _vm._s(item.tracking)),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("span", {}, [
                                    _vm._v(" " + _vm._s(item.descripcion)),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("span", [
                                    _vm._v(_vm._s(item.fecha_llegada)),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "div",
                                    { staticClass: "btn-list flex-nowrap" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          directives: [
                                            {
                                              name: "title",
                                              rawName: "v-title",
                                            },
                                          ],
                                          staticClass: "btn-acticon_spalert",
                                          attrs: {
                                            type: "button",
                                            value: item.tracking,
                                            title: "Quitar",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.deleteTracking($event)
                                            },
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "ti ti-trash",
                                            staticStyle: {
                                              "font-size": "21px",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                              ])
                            }),
                            0
                          ),
                        ]
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-flex align-items-center mt-5" },
                  [
                    _c("btn-volver", { attrs: { classe: "btn-light" } }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info ms-auto",
                        attrs: { type: "submit" },
                        on: { click: _vm.sendSolicitud },
                      },
                      [
                        _vm._v(
                          "\r\n                                Enviar Solicitud\r\n                            "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
            ]),
          ]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "20%" } }, [_vm._v("Transporte")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" } }, [_vm._v("Nro. Tracking")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "40%" } }, [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "15%" } }, [_vm._v("F. Llegada")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "5%" } }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);