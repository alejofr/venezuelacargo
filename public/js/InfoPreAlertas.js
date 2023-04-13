"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["InfoPreAlertas"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/prealertas/InfoPreAlertas.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/prealertas/InfoPreAlertas.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
var LoaderComponent = function LoaderComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoaderComponent_vue-_c2860").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/LoaderComponent.vue */ "./resources/js/components/LoaderComponent.vue"));
};

var Error404 = function Error404() {
  return __webpack_require__.e(/*! import() */ "Error404").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/Error404Component.vue */ "./resources/js/components/Error404Component.vue"));
};

var InfoComponent = function InfoComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_InfoPrealertasComponent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/InfoPrealertasComponent.vue */ "./resources/js/components/InfoPrealertasComponent.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'InfoPreAlertas',
  data: function data() {
    return {
      componentRender: LoaderComponent,
      action: {
        url: 'store-trackings',
        name: 'prealertas',
        value: ''
      },
      column: {
        one: {
          name: 'Solicitud de Envio',
          data: []
        },
        two: {
          name: 'Usuario',
          data: []
        },
        th: [{
          name: ''
        }, {
          name: 'Transporte'
        }, {
          name: 'Tracking'
        }, {
          name: 'Descripcion'
        }, {
          name: ''
        }, {
          name: ''
        }]
      },
      data: []
    };
  },
  beforeCreate: function beforeCreate() {
    this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var _this = this;

      var id;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(Object.keys(this.$route.params).length != 0)) {
                _context.next = 6;
                break;
              }

              id = this.$route.params.id;
              _context.next = 4;
              return this.axios.get("prealertas/".concat(id)).then(function (response) {
                console.log(response.data);

                if (response.data.results != null) {
                  var data = response.data.results;
                  _this.column.one.data = [{
                    name: 'Estado: ' + data.estado
                  }, {
                    name: 'Fecha Registro: ' + data.fecha_creado
                  }, {
                    name: 'Fecha LLegada: ' + data.fecha_llegada
                  }, {
                    name: 'Cant. Trackings: ' + data.trackings.length
                  }, {
                    name: 'Tipo. Trackings: ' + data.tipo_tracking
                  }];
                  _this.data = data.trackings;
                  _this.componentRender = InfoComponent;

                  _this.userInfo(data.usuario_id);
                } else {
                  _this.componentRender = Error404;
                }
              })["catch"](function (error) {
                console.log(error.response);
              });

            case 4:
              _context.next = 7;
              break;

            case 6:
              this.componentRender = Error404;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
  },
  methods: {
    userInfo: function userInfo(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.axios.get("usuarios/".concat(id)).then(function (response) {
                  console.log(response.data);
                  var data = response.data.results;
                  _this2.column.two.data = [{
                    name: "".concat(data.nombres, " ").concat(data.apellidos)
                  }, {
                    name: "".concat(data.estado, ", ").concat(data.zona, ", ").concat(data.codigo_postal)
                  }, {
                    name: data.email
                  }, {
                    name: "Tlf: ".concat(data.telefono, " & Cedula: ").concat(data.cedula)
                  }, {
                    name: "direccion: ".concat(data.direccion)
                  }];
                })["catch"](function (error) {
                  console.log(error.response);
                });

              case 2:
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

/***/ "./resources/js/views/admin/prealertas/InfoPreAlertas.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/admin/prealertas/InfoPreAlertas.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InfoPreAlertas_vue_vue_type_template_id_38346c24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoPreAlertas.vue?vue&type=template&id=38346c24& */ "./resources/js/views/admin/prealertas/InfoPreAlertas.vue?vue&type=template&id=38346c24&");
/* harmony import */ var _InfoPreAlertas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoPreAlertas.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/prealertas/InfoPreAlertas.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InfoPreAlertas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoPreAlertas_vue_vue_type_template_id_38346c24___WEBPACK_IMPORTED_MODULE_0__.render,
  _InfoPreAlertas_vue_vue_type_template_id_38346c24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/prealertas/InfoPreAlertas.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/prealertas/InfoPreAlertas.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/admin/prealertas/InfoPreAlertas.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPreAlertas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoPreAlertas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/prealertas/InfoPreAlertas.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPreAlertas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/prealertas/InfoPreAlertas.vue?vue&type=template&id=38346c24&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/admin/prealertas/InfoPreAlertas.vue?vue&type=template&id=38346c24& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPreAlertas_vue_vue_type_template_id_38346c24___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPreAlertas_vue_vue_type_template_id_38346c24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPreAlertas_vue_vue_type_template_id_38346c24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoPreAlertas.vue?vue&type=template&id=38346c24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/prealertas/InfoPreAlertas.vue?vue&type=template&id=38346c24&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/prealertas/InfoPreAlertas.vue?vue&type=template&id=38346c24&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/prealertas/InfoPreAlertas.vue?vue&type=template&id=38346c24& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "col-12", staticStyle: { "min-height": "60vh" } },
        [
          _c(_vm.componentRender, {
            tag: "component",
            attrs: {
              column: _vm.column,
              action: _vm.action,
              dataTble: _vm.data,
              tbody: "InfoPreAlertas",
              h1: "Trackings",
            },
          }),
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