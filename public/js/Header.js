"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Header"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HeaderComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HeaderComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
var MenuSkeleton = function MenuSkeleton() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_menu_MenuSkeleton_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./menu/MenuSkeleton.vue */ "./resources/js/components/menu/MenuSkeleton.vue"));
};

var MenuClient = function MenuClient() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_menu_MenuClient_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./menu/MenuClient.vue */ "./resources/js/components/menu/MenuClient.vue"));
};

var MenuAdmin = function MenuAdmin() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_menu_MenuAdmin_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./menu/MenuAdmin.vue */ "./resources/js/components/menu/MenuAdmin.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Header',
  data: function data() {
    return {
      links: [],
      theme: 'theme-light',
      MenuComponent: MenuSkeleton //user: {},

    };
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    var re = function re(val) {
      return setTimeout(function () {
        switch (val) {
          case 1:
            _this.MenuComponent = MenuClient;
            break;

          case 2:
            _this.MenuComponent = MenuAdmin;
            break;

          default:
            break;
        }
      }, 2000);
    };

    if (this.$store.state.auth.role == 'client') {
      re(1);
    } else if (this.$store.state.auth.role == 'admin') {
      re(2);
    }
  },
  created: function created() {
    if (window.localStorage.getItem('myTheme') != null) {
      this.theme = window.localStorage.getItem('myTheme');
    }

    document.body.classList.add(this.theme);
  },
  computed: {
    user: function user() {
      return this.$store.state.auth.user;
    },
    rol_user: function rol_user() {
      return this.$store.state.auth.role;
    }
  },
  methods: {
    changeTheme: function changeTheme() {
      var theme = this.theme;
      this.theme = theme == 'theme-light' ? 'theme-dark' : 'theme-light';

      if (window.localStorage.getItem('myTheme') != null) {
        window.localStorage.removeItem('myTheme');
      }

      document.body.classList.remove(theme);
      document.body.classList.add(this.theme);
      localStorage.setItem('myTheme', this.theme);
    },
    logout: function logout() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('logout');

                _this2.axios["delete"]('logout').then(function (response) {
                  console.log(response.data);

                  _this2.$store.dispatch('auth/logout');
                })["catch"](function (error) {
                  console.log(error.response);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/HeaderComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/HeaderComponent.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderComponent_vue_vue_type_template_id_153bfd55___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderComponent.vue?vue&type=template&id=153bfd55& */ "./resources/js/components/HeaderComponent.vue?vue&type=template&id=153bfd55&");
/* harmony import */ var _HeaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/HeaderComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderComponent_vue_vue_type_template_id_153bfd55___WEBPACK_IMPORTED_MODULE_0__.render,
  _HeaderComponent_vue_vue_type_template_id_153bfd55___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/HeaderComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/HeaderComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/HeaderComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HeaderComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/HeaderComponent.vue?vue&type=template&id=153bfd55&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/HeaderComponent.vue?vue&type=template&id=153bfd55& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_template_id_153bfd55___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_template_id_153bfd55___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_template_id_153bfd55___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderComponent.vue?vue&type=template&id=153bfd55& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HeaderComponent.vue?vue&type=template&id=153bfd55&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HeaderComponent.vue?vue&type=template&id=153bfd55&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/HeaderComponent.vue?vue&type=template&id=153bfd55& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "header",
    {
      staticClass:
        "navbar navbar-expand-md navbar-light navbar-overlap d-print-none",
    },
    [
      _c("div", { staticClass: "container-xl" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "h1",
          {
            staticClass:
              "navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3",
          },
          [
            _c("router-link", { attrs: { to: { name: "IndexDashboard" } } }, [
              _c("img", {
                staticClass: "navbar-brand-image",
                attrs: {
                  src: "/images/venezuela-cargo-logo.svg",
                  width: "110",
                  height: "32",
                  alt: "Venezuela Cargo",
                },
              }),
            ]),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "navbar-nav flex-row order-md-last" }, [
          _c("div", { staticClass: "nav-item dropdown" }, [
            _c(
              "a",
              {
                staticClass: "nav-link d-flex lh-1 text-reset p-0",
                attrs: {
                  href: "#",
                  "data-bs-toggle": "dropdown",
                  "aria-label": "Open user menu",
                },
              },
              [
                _c("span", { staticClass: "avatar avatar-sm fs-18" }, [
                  _vm._v(_vm._s(_vm.user.nombre_usuario.charAt(0))),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "d-none d-xl-block ps-2",
                    staticStyle: { "max-width": "100px" },
                  },
                  [
                    _c("div", { staticClass: "text-lg-dcam" }, [
                      _c("span", [_vm._v(_vm._s(_vm.user.nombre_usuario))]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mt-1 small text-muted text-lg-dcam" },
                      [
                        _c("span", [
                          _c("small", [_vm._v(_vm._s(_vm.user.email))]),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "dropdown-menu dropdown-menu-end dropdown-menu-arrow",
              },
              [
                _vm.rol_user == "admin"
                  ? _c(
                      "router-link",
                      {
                        staticClass: "dropdown-item",
                        class: { active: this.$route.name == "UserAdmin" },
                        attrs: { to: { name: "UserAdmin" } },
                      },
                      [_vm._v("Mi Cuenta")]
                    )
                  : _c(
                      "router-link",
                      {
                        staticClass: "dropdown-item",
                        class: { active: this.$route.name == "UserClient" },
                        attrs: { to: { name: "UserClient" } },
                      },
                      [_vm._v("Mi Cuenta")]
                    ),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown-divider" }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "dropdown-item",
                    attrs: { type: "button" },
                    on: { click: _vm.logout },
                  },
                  [_vm._v("Salir")]
                ),
              ],
              1
            ),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "collapse navbar-collapse",
            attrs: { id: "navbar-menu" },
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center",
              },
              [
                _c(
                  "transition",
                  { attrs: { name: "component-fade", mode: "out-in" } },
                  [
                    _c(
                      "keep-alive",
                      [_c(_vm.MenuComponent, { tag: "component" })],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ]
        ),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbar-menu",
        },
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  },
]
render._withStripped = true



/***/ })

}]);