"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["UserClient"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/UserClient.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/UserClient.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BtnVolver_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/BtnVolver.vue */ "./resources/js/components/BtnVolver.vue");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var LoaderComponent = function LoaderComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoaderComponent_vue-_c2860").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/LoaderComponent.vue */ "./resources/js/components/LoaderComponent.vue"));
};

var Error404 = function Error404() {
  return __webpack_require__.e(/*! import() */ "Error404").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Error404Component.vue */ "./resources/js/components/Error404Component.vue"));
};

var AlertMessageComponent = function AlertMessageComponent() {
  return __webpack_require__.e(/*! import() */ "AlertMessageComponent").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/AlertMessageComponent.vue */ "./resources/js/components/AlertMessageComponent.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserAdmin',
  data: function data() {
    return {
      componentRender: LoaderComponent,
      loader: false,
      activeComponent: '',
      alert: {
        msg: '',
        clss: ''
      },
      usuario_id: '',
      nombres: '',
      apellidos: '',
      telefono: '',
      cedula: '',
      nom_user: '',
      email: '',
      password: '',
      password_confirmation: '',
      passV: 'max:12'
    };
  },
  beforeCreate: function beforeCreate() {
    this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var _this = this;

      var reCom, reErr;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              reCom = function reCom() {
                setTimeout(function () {
                  _this.componentRender = '';
                }, 2000);
              };

              reErr = function reErr() {
                setTimeout(function () {
                  _this.componentRender = Error404;
                }, 2000);
              };

              _context.next = 4;
              return this.axios.get("edit-user/client").then(function (response) {
                var result = _objectSpread({}, response.data.result);

                if (result != null) {
                  document.title = document.title + '  ' + result.nombre_usuario;
                  _this.nombres = result.nombres;
                  _this.apellidos = result.apellidos;
                  _this.telefono = result.telefono;
                  _this.cedula = result.cedula;
                  _this.nom_user = result.nombre_usuario;
                  _this.email = result.email;
                  _this.usuario_id = result.usuario_id;
                  reCom();
                } else {
                  reErr();
                }

                console.log(result);
              })["catch"](function (error) {
                console.log(error.response.data);
                reErr();
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
  },
  components: {
    BtnVolver: _components_BtnVolver_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    loader: LoaderComponent
  },
  methods: {
    changePassword: function changePassword() {
      if (this.password != '') {
        this.passV = 'required|max:12|confirmed:password';
      } else {
        this.passV = 'max:12';
      }
    },
    save: function save() {
      var _this2 = this;

      this.$validator.validate().then(function (valid) {
        if (valid) {
          var formData = {
            apellidos: _this2.apellidos,
            cedula: _this2.cedula,
            email: _this2.email,
            nombre_usuario: _this2.nom_user,
            nombres: _this2.nombres,
            telefono: _this2.telefono,
            password: _this2.password
          };
          _this2.loader = true;

          _this2.axios.put("user/client/".concat(_this2.usuario_id), formData).then(function (response) {
            console.log(response.data);

            _this2.$store.dispatch('auth/user', response.data.user);

            resp(response.data);
          })["catch"](function (error) {
            console.log(error.response);
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

          var resp = function resp(_resp) {
            setTimeout(function () {
              _this2.loader = false;

              _this2.respAlert(_resp.status, _resp.message);
            }, 2000);

            if (_resp.status == 200) {
              setTimeout(function () {
                _this2.$router.go(-1);
              }, 4000);
            }
          };
        }
      });
    },
    respAlert: function respAlert(status) {
      var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      this.alert = {
        msg: msg,
        clss: status == 200 ? 'updated' : 'error'
      };
      this.activeComponent = AlertMessageComponent;
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

/***/ "./resources/js/views/client/UserClient.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/client/UserClient.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserClient_vue_vue_type_template_id_3288bf2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserClient.vue?vue&type=template&id=3288bf2a& */ "./resources/js/views/client/UserClient.vue?vue&type=template&id=3288bf2a&");
/* harmony import */ var _UserClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserClient.vue?vue&type=script&lang=js& */ "./resources/js/views/client/UserClient.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserClient_vue_vue_type_template_id_3288bf2a___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserClient_vue_vue_type_template_id_3288bf2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/client/UserClient.vue"
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

/***/ "./resources/js/views/client/UserClient.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/client/UserClient.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserClient.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/UserClient.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/views/client/UserClient.vue?vue&type=template&id=3288bf2a&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/client/UserClient.vue?vue&type=template&id=3288bf2a& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserClient_vue_vue_type_template_id_3288bf2a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserClient_vue_vue_type_template_id_3288bf2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserClient_vue_vue_type_template_id_3288bf2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserClient.vue?vue&type=template&id=3288bf2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/UserClient.vue?vue&type=template&id=3288bf2a&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/UserClient.vue?vue&type=template&id=3288bf2a&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/UserClient.vue?vue&type=template&id=3288bf2a& ***!
  \************************************************************************************************************************************************************************************************************************/
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
            _c(_vm.componentRender, { tag: "component" }),
            _vm._v(" "),
            _vm.componentRender == ""
              ? _c(
                  "form",
                  {
                    staticClass: "card card-lg",
                    attrs: { name: "user", enctype: "multipart/form-data" },
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.save()
                      },
                    },
                  },
                  [
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
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-12 col-md-6 col-lg-6 col-sm-12 mb-3",
                          },
                          [
                            _c("p", { staticClass: "h3" }, [_vm._v("Nombres")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-floating mt-2" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.nombres,
                                    expression: "nombres",
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|max:45",
                                    expression: "'required|max:45'",
                                  },
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.errors.first("nombres"),
                                },
                                attrs: {
                                  type: "text",
                                  id: "nombres",
                                  name: "nombres",
                                  "aria-expanded": "false",
                                  "data-vv-validate-on": "change",
                                },
                                domProps: { value: _vm.nombres },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.nombres = $event.target.value
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "nombres" } }, [
                                _vm._v("Nombres"),
                              ]),
                              _vm._v(" "),
                              _vm.errors.has("nombres")
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.errors.first("nombres"))
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-12 col-md-6 col-lg-6 col-sm-12 mb-3",
                          },
                          [
                            _c("p", { staticClass: "h3" }, [
                              _vm._v("Apellidos"),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-floating mt-2" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.apellidos,
                                    expression: "apellidos",
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|max:45",
                                    expression: "'required|max:45'",
                                  },
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.errors.first("apellidos"),
                                },
                                attrs: {
                                  type: "text",
                                  id: "apellidos",
                                  name: "apellidos",
                                  "aria-expanded": "false",
                                  "data-vv-validate-on": "change",
                                },
                                domProps: { value: _vm.apellidos },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.apellidos = $event.target.value
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "apellidos" } }, [
                                _vm._v("Apellidos"),
                              ]),
                              _vm._v(" "),
                              _vm.errors.has("apellidos")
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.errors.first("apellidos"))
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-12 col-md-6 col-lg-6 col-sm-12 mb-3",
                          },
                          [
                            _c("p", { staticClass: "h3" }, [
                              _vm._v("Número de Teléfono"),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-floating mt-2" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.telefono,
                                    expression: "telefono",
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|numeric|max:11",
                                    expression: "'required|numeric|max:11'",
                                  },
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.errors.first("telefono"),
                                },
                                attrs: {
                                  type: "text",
                                  id: "telefono",
                                  name: "telefono",
                                  "aria-expanded": "false",
                                  "data-vv-validate-on": "change",
                                },
                                domProps: { value: _vm.telefono },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.telefono = $event.target.value
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "telefono" } }, [
                                _vm._v("Número de Teléfono"),
                              ]),
                              _vm._v(" "),
                              _vm.errors.has("telefono")
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.errors.first("telefono"))
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-12 col-md-6 col-lg-6 col-sm-12 mb-3",
                          },
                          [
                            _c("p", { staticClass: "h3" }, [_vm._v("Cédula")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-floating mt-2" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.cedula,
                                    expression: "cedula",
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|numeric|max:8",
                                    expression: "'required|numeric|max:8'",
                                  },
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.errors.first("cedula"),
                                },
                                attrs: {
                                  type: "text",
                                  id: "cedula",
                                  name: "cedula",
                                  "aria-expanded": "false",
                                  "data-vv-validate-on": "change",
                                },
                                domProps: { value: _vm.cedula },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.cedula = $event.target.value
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "cedula" } }, [
                                _vm._v("Cédula"),
                              ]),
                              _vm._v(" "),
                              _vm.errors.has("cedula")
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(_vm._s(_vm.errors.first("cedula")))]
                                  )
                                : _vm._e(),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-12 col-md-6 col-lg-6 col-sm-12 mb-3",
                          },
                          [
                            _c("p", { staticClass: "h3" }, [
                              _vm._v("Nombre Usuario"),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-floating mt-2" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.nom_user,
                                    expression: "nom_user",
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|max:25",
                                    expression: "'required|max:25'",
                                  },
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.errors.first("nom_user"),
                                },
                                attrs: {
                                  type: "text",
                                  id: "nom_user",
                                  name: "nom_user",
                                  "aria-expanded": "false",
                                  "data-vv-validate-on": "change",
                                },
                                domProps: { value: _vm.nom_user },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.nom_user = $event.target.value
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "nom_user" } }, [
                                _vm._v("Nombre Usuario"),
                              ]),
                              _vm._v(" "),
                              _vm.errors.has("nom_user")
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.errors.first("nom_user"))
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-12 col-md-6 col-lg-6 col-sm-12 mb-3",
                          },
                          [
                            _c("p", { staticClass: "h3" }, [_vm._v("Correo")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-floating mt-2" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.email,
                                    expression: "email",
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|email",
                                    expression: "'required|email'",
                                  },
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.errors.first("email"),
                                },
                                attrs: {
                                  type: "text",
                                  id: "email",
                                  name: "email",
                                  "aria-expanded": "false",
                                  "data-vv-validate-on": "change",
                                },
                                domProps: { value: _vm.email },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.email = $event.target.value
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "email" } }, [
                                _vm._v("Correo"),
                              ]),
                              _vm._v(" "),
                              _vm.errors.has("email")
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(_vm._s(_vm.errors.first("email")))]
                                  )
                                : _vm._e(),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-12 col-md-6 col-lg-6 col-sm-12 mb-3",
                          },
                          [
                            _c("p", { staticClass: "h3" }, [
                              _vm._v("Contraseña"),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-floating mt-2" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.password,
                                    expression: "password",
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "max:12",
                                    expression: "'max:12'",
                                  },
                                ],
                                ref: "password",
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.errors.first("password"),
                                },
                                attrs: {
                                  type: "text",
                                  id: "password",
                                  name: "password",
                                  "aria-expanded": "false",
                                  "data-vv-validate-on": "change",
                                },
                                domProps: { value: _vm.password },
                                on: {
                                  change: _vm.changePassword,
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.password = $event.target.value
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "password" } }, [
                                _vm._v("Contraseña"),
                              ]),
                              _vm._v(" "),
                              _vm.errors.has("password")
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.errors.first("password"))
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-12 col-md-6 col-lg-6 col-sm-12 mb-3",
                          },
                          [
                            _c("p", { staticClass: "h3" }, [
                              _vm._v("Repetir Contraseña"),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-floating mt-2" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.password_confirmation,
                                    expression: "password_confirmation",
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: _vm.passV,
                                    expression: "passV",
                                  },
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.errors.first(
                                    "password_confirmation"
                                  ),
                                },
                                attrs: {
                                  type: "text",
                                  id: "password_confirmation",
                                  name: "password_confirmation",
                                  "aria-expanded": "false",
                                  "data-vv-validate-on": "change",
                                  "data-vv-as": "password",
                                },
                                domProps: { value: _vm.password_confirmation },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.password_confirmation =
                                      $event.target.value
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                { attrs: { for: "password_confirmation" } },
                                [_vm._v("Repetir Contraseña")]
                              ),
                              _vm._v(" "),
                              _vm.errors.has("password_confirmation")
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.first(
                                            "password_confirmation"
                                          )
                                        )
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ]),
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
                            },
                            [
                              _vm._v(
                                "\r\n                                Actualizar\r\n                            "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]
                )
              : _vm._e(),
          ],
          1
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);