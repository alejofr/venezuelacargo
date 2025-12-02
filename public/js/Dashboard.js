"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/Dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/Dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
var CalculadoraEnvio = function CalculadoraEnvio() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_CalculadoraEnvio_vue-_34de0").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/CalculadoraEnvio.vue */ "./resources/js/components/CalculadoraEnvio.vue"));
};

var request = function request() {
  return {
    name: 'IndexDashboard',
    url: 'solicitudes',
    params: {
      limit: 8,
      page: 1,
      orderBy: 'solicitudes_envios.fecha_llegada',
      ascending: 0,
      query: {
        search: '',
        estado: 'pendiente',
        fecha_inicio: '',
        fecha_final: ''
      }
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IndexDashboard',
  data: function data() {
    return {
      CalcularEnvioComponent: '',
      showModalCalcular: false,
      name: '',
      data: {
        th: [{
          name: 'Transporte'
        }, {
          name: 'Nro. Tracking'
        }, {
          name: 'Descrip. Tracking'
        }, {
          name: 'Registro de PreAlertas'
        }, {
          name: 'Fecha Llegada'
        }, {
          name: ''
        }],
        columns: [{
          name: 'Fecha Llegada',
          value: 'solicitudes_envios.fecha_llegada'
        }, {
          name: 'Fecha Registro',
          value: 'solicitudes_envios.fecha_creado'
        }]
      },
      view: 'SolicitudesClientDataTable',
      accion: {
        create: 'CreatePrelaerta',
        edit: '',
        "delete": ''
      },
      request: request(),
      filters: {
        name: 'IndexDashboard',
        first: {
          placeholder: 'Busca por numero de tracking o nombre de empresa'
        },
        second: [{
          name: 'estado',
          type: 'select',
          title: 'Filtra por estado de prelaertas',
          option: {
            name: 'title',
            value: 'valor'
          },
          data: [{
            title: 'Pendiente',
            valor: 'pendiente'
          }, {
            title: 'Recibido',
            valor: 'recibido'
          }, {
            title: 'Ver Todos',
            valor: 'all'
          }]
        }, {
          name: 'fecha_inicio',
          type: 'date',
          title: 'Desde'
        }, {
          name: 'fecha_final',
          type: 'date',
          title: 'Hasta'
        }]
      }
    };
  },
  components: {
    tables: function tables() {
      return __webpack_require__.e(/*! import() | TableAdminComponent */ "TableAdminComponent").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/tables/TableAdminComponent.vue */ "./resources/js/components/tables/TableAdminComponent.vue"));
    },
    filters: function filters() {
      return __webpack_require__.e(/*! import() | FilterComponent */ "FilterComponent").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/FilterComponent.vue */ "./resources/js/components/FilterComponent.vue"));
    }
  },
  beforeCreate: function beforeCreate() {
    this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(this.$store.state.auth.user);
              _context.next = 3;
              return this.axios.get("edit-user/client").then(function (response) {
                var result = _objectSpread({}, response.data.result);

                var nombre_cod = "".concat(result.nombres).concat(result.cod_usuario);
                _this.name = nombre_cod.split(/\s+/).join('');
                console.log(result);
              })["catch"](function (error) {
                console.log(error.response.data);
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
  },
  methods: {
    abrirCalculadora: function abrirCalculadora() {
      if (this.CalcularEnvioComponent == '') this.CalcularEnvioComponent = CalculadoraEnvio;
      this.showModalCalcular = true;
    },
    closeModalCalcularEnvio: function closeModalCalcularEnvio() {
      this.showModalCalcular = false;
    },
    handleRequest: function handleRequest() {
      //console.log('handleRequest', request())
      this.$refs.filters.changeRequestPadre(_objectSpread({}, request()));
    },
    handleRequestQuery: function handleRequestQuery() {
      // console.log('handleRequestQuery', request().params.query)
      this.$refs.filters.changeQueryPadre(_objectSpread({}, request().params.query));
    }
  }
});

/***/ }),

/***/ "./resources/js/views/client/Dashboard.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/client/Dashboard.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_6cc3fba2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=6cc3fba2& */ "./resources/js/views/client/Dashboard.vue?vue&type=template&id=6cc3fba2&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/client/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_6cc3fba2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_6cc3fba2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/client/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/client/Dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/client/Dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/client/Dashboard.vue?vue&type=template&id=6cc3fba2&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/client/Dashboard.vue?vue&type=template&id=6cc3fba2& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_6cc3fba2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_6cc3fba2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_6cc3fba2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=6cc3fba2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/Dashboard.vue?vue&type=template&id=6cc3fba2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/Dashboard.vue?vue&type=template&id=6cc3fba2&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/Dashboard.vue?vue&type=template&id=6cc3fba2& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container-xl mb-3" }, [
      _c("div", { staticClass: "page-header d-print-none" }, [
        _c("div", { staticClass: "row align-items-center" }, [
          _c("div", { staticClass: "col" }, [
            _c("address", [
              _c("p", [
                _vm._v("Name: "),
                _c("strong", [_vm._v(_vm._s(_vm.name))]),
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _vm._m(4),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-auto ms-auto d-print-none" },
            [
              _c("div", { staticClass: "btn-list" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: { click: _vm.abrirCalculadora },
                  },
                  [
                    _c("i", {
                      staticClass: "ti ti-calculator me-2",
                      staticStyle: { "font-size": "16px" },
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "d-none d-sm-inline-block" }, [
                      _vm._v("Calculadora"),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c(
                "transition",
                { attrs: { name: "component-fade", mode: "out-in" } },
                [
                  _c(
                    "keep-alive",
                    [
                      _c(_vm.CalcularEnvioComponent, {
                        tag: "component",
                        attrs: { show: _vm.showModalCalcular },
                        on: {
                          closeModalCalcularEnvio: _vm.closeModalCalcularEnvio,
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container-xl" }, [
      _c("div", { staticClass: "row row-cards" }, [
        _c(
          "div",
          { staticClass: "col-12" },
          [
            _c("filters", {
              ref: "filters",
              attrs: { filters: _vm.filters, request: _vm.request },
              on: {
                consulReq: _vm.handleRequest,
                consulReqQury: _vm.handleRequestQuery,
              },
            }),
            _vm._v(" "),
            _vm._m(5),
            _vm._v(" "),
            _c("tables", {
              attrs: {
                columns: _vm.data,
                viewData: _vm.view,
                accion: _vm.accion,
              },
            }),
          ],
          1
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
    return _c("p", [
      _vm._v("Last name: "),
      _c("strong", [_vm._v("VZLACARGO")]),
      _vm._v("."),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("Address: "),
      _c("strong", [_vm._v("11017 NW 122ND ST #17")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_vm._v("City: "), _c("strong", [_vm._v("MEDLEY")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_vm._v("State: "), _c("strong", [_vm._v("FLORIDA")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_vm._v("Zip code: "), _c("strong", [_vm._v("33178")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "mb-3 btn-list flex-nowrap",
        staticStyle: { "margin-bottom": "1rem !important" },
      },
      [
        _c("div", { staticClass: "d-flex me-3" }, [
          _c("div", {
            staticClass: "btn semaforo-btn align-text-top me-2 btn-danger",
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Instrucción Por Asignar")]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex me-3" }, [
          _c("div", {
            staticClass: "btn semaforo-btn align-text-top me-2 btn-success",
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Instrucción Asignada")]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);