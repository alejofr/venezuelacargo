"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_auth_Registro_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Registro.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Registro.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      pass: 'ti ti-eye',
      typePass: 'password'
    };
  },
  methods: {
    register: function register(event) {
      console.log(event);
    },
    viewHidePass: function viewHidePass() {
      this.typePass = this.pass == 'ti ti-eye' ? 'text' : 'password';
      this.pass = this.pass == 'ti ti-eye' ? 'ti ti-eye-off' : 'ti ti-eye';
    },
    formChange: function formChange(event) {
      var el = event.target;
      var formSubmit = el.form.querySelector('#btnSubmit');
      var type = this.user.email != "" && !this.$validator.errors.has('email') && this.user.password != '' && !this.$validator.errors.has('password') && this.user.username != '' && !this.$validator.errors.has('username') ? 'submit' : 'button';
      var disable = type == 'button' ? 'disable' : '';

      if (disable == '') {
        formSubmit.classList.remove('disable');
        formSubmit.removeAttribute('disabled');
      } else {
        formSubmit.classList.add(disable);
        formSubmit.setAttribute('disabled', 'disabled');
      }

      formSubmit.setAttribute('type', type);
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/auth/Registro.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/auth/Registro.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Registro_vue_vue_type_template_id_02b53d7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registro.vue?vue&type=template&id=02b53d7e& */ "./resources/js/pages/auth/Registro.vue?vue&type=template&id=02b53d7e&");
/* harmony import */ var _Registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registro.vue?vue&type=script&lang=js& */ "./resources/js/pages/auth/Registro.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registro_vue_vue_type_template_id_02b53d7e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Registro_vue_vue_type_template_id_02b53d7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/Registro.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/Registro.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/auth/Registro.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registro.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Registro.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/auth/Registro.vue?vue&type=template&id=02b53d7e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/auth/Registro.vue?vue&type=template&id=02b53d7e& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_template_id_02b53d7e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_template_id_02b53d7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_template_id_02b53d7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registro.vue?vue&type=template&id=02b53d7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Registro.vue?vue&type=template&id=02b53d7e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Registro.vue?vue&type=template&id=02b53d7e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/auth/Registro.vue?vue&type=template&id=02b53d7e& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "div",
    {
      staticClass: "w-100 h-100 img-size-0",
      staticStyle: { "background-image": "url('/images/bg-01.jpg')" },
    },
    [
      _c("div", { staticClass: "container h-100" }, [
        _c("div", { staticClass: "page-vzlc w-100 h-100" }, [
          _c("div", { staticClass: "auth-page" }, [
            _c("div", { staticClass: "forn_auth" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass: "form-lg_auth form-rgtr_auth",
                  attrs: { method: "POST", name: "formRegister" },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.register($event)
                    },
                    change: function ($event) {
                      return _vm.formChange($event)
                    },
                  },
                },
                [
                  _c("div", { staticClass: "form-group mb-3" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.user.username,
                          expression: "user.username",
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|alpha_num|max:15",
                          expression: "'required|alpha_num|max:15'",
                        },
                      ],
                      staticClass: "form-control _input_style-0",
                      class: { "is-invalid": _vm.errors.first("username") },
                      attrs: {
                        type: "text",
                        name: "username",
                        placeholder: "Nombre de Usuario",
                        "data-vv-validate-on": "change",
                      },
                      domProps: { value: _vm.user.username },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.user, "username", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.has("username")
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.first("username"))),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group mb-3" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.user.email,
                          expression: "user.email",
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|email",
                          expression: "'required|email'",
                        },
                      ],
                      staticClass: "form-control _input_style-0",
                      class: { "is-invalid": _vm.errors.first("email") },
                      attrs: {
                        type: "email",
                        name: "email",
                        placeholder: "Correo Electrónico",
                        "data-vv-validate-on": "change",
                      },
                      domProps: { value: _vm.user.email },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.user, "email", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.has("email")
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.first("email"))),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group mb-3 position-relative" },
                    [
                      _vm.typePass === "checkbox"
                        ? _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.password,
                                expression: "user.password",
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|max:12",
                                expression: "'required|max:12'",
                              },
                            ],
                            staticClass: "form-control _input_style-0",
                            class: {
                              "is-invalid": _vm.errors.first("password"),
                            },
                            attrs: {
                              name: "password",
                              placeholder: "Contraseña",
                              "data-vv-validate-on": "change",
                              type: "checkbox",
                            },
                            domProps: {
                              checked: Array.isArray(_vm.user.password)
                                ? _vm._i(_vm.user.password, null) > -1
                                : _vm.user.password,
                            },
                            on: {
                              change: function ($event) {
                                var $$a = _vm.user.password,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.user,
                                        "password",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.user,
                                        "password",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.user, "password", $$c)
                                }
                              },
                            },
                          })
                        : _vm.typePass === "radio"
                        ? _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.password,
                                expression: "user.password",
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|max:12",
                                expression: "'required|max:12'",
                              },
                            ],
                            staticClass: "form-control _input_style-0",
                            class: {
                              "is-invalid": _vm.errors.first("password"),
                            },
                            attrs: {
                              name: "password",
                              placeholder: "Contraseña",
                              "data-vv-validate-on": "change",
                              type: "radio",
                            },
                            domProps: {
                              checked: _vm._q(_vm.user.password, null),
                            },
                            on: {
                              change: function ($event) {
                                return _vm.$set(_vm.user, "password", null)
                              },
                            },
                          })
                        : _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.password,
                                expression: "user.password",
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|max:12",
                                expression: "'required|max:12'",
                              },
                            ],
                            staticClass: "form-control _input_style-0",
                            class: {
                              "is-invalid": _vm.errors.first("password"),
                            },
                            attrs: {
                              name: "password",
                              placeholder: "Contraseña",
                              "data-vv-validate-on": "change",
                              type: _vm.typePass,
                            },
                            domProps: { value: _vm.user.password },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "password",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                      _vm._v(" "),
                      !_vm.errors.has("password")
                        ? _c(
                            "button",
                            {
                              staticClass:
                                "button button-secondary wp-hide-pw hide-if-no-js",
                              attrs: { type: "button" },
                              on: { click: _vm.viewHidePass },
                            },
                            [_c("i", { class: _vm.pass })]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.errors.has("password")
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(_vm._s(_vm.errors.first("password"))),
                          ])
                        : _vm._e(),
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group d-md-flex" }, [
                    _c(
                      "p",
                      { staticClass: "fs-14 mt-2" },
                      [
                        _vm._v("¿Ya tienes Cuenta?  "),
                        _c(
                          "router-link",
                          {
                            staticClass: "cl0 fw-bold fs-14 py-0 px-0",
                            attrs: { to: { name: "Login" } },
                          },
                          [_vm._v("Ingresar Ahora")]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "img" }, [
      _c("img", {
        attrs: { src: "/images/venezuela-cargo-logo.svg", alt: "", srcset: "" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-100 mb-3" }, [
      _c(
        "button",
        {
          staticClass: "btn_style_0 disable fw-bold mt-3",
          attrs: { type: "button", id: "btnSubmit", disabled: "" },
        },
        [_vm._v("Crear Cuenta")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);