"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Facturas"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/Facturas.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/Facturas.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
var request = function request() {
  return {
    name: 'IndexFacturas',
    url: 'facturas',
    params: {
      limit: 16,
      page: 1,
      orderBy: 'facturas.fecha_creado',
      ascending: 0,
      query: {
        search: '',
        estado: 'all',
        fecha_inicio: '',
        fecha_final: ''
      }
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Facturas',
  data: function data() {
    return {
      data: {
        th: [{
          name: 'Nro Factura'
        }, {
          name: 'Nro Container'
        }, {
          name: 'Cliente'
        }, {
          name: 'Estado'
        }, {
          name: 'Tipo de Envio'
        }, {
          name: 'Total USD'
        }, {
          name: 'Moneda de Pago'
        }, {
          name: 'Fecha Factura'
        }, {
          name: ''
        }],
        columns: [{
          name: 'Nro Factura',
          value: 'facturas.nro_factura'
        }, {
          name: 'Nro Container',
          value: 'facturas.nro_container'
        }, {
          name: 'Fecha Creado',
          value: 'facturas.fecha_creado'
        }]
      },
      view: 'FacturasDataTable',
      accion: {
        create: '',
        edit: '',
        "delete": 'facturas'
      },
      request: request(),
      filters: {
        name: 'IndexFacturas',
        first: {
          placeholder: 'Busca por numero de factura o por nombre, apellido y codigo de cliente'
        },
        second: [{
          name: 'estado',
          type: 'select',
          title: 'Filtra por estado de facturas',
          option: {
            name: 'title',
            value: 'valor'
          },
          data: [{
            title: 'Todos',
            valor: 'all'
          }, {
            title: 'Pendiente',
            valor: 'pendiente'
          }, {
            title: 'Verificando Pago',
            valor: 'Verificacion-Pago'
          }, {
            title: 'Pago Verificado',
            valor: 'Pago-Verificado'
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
      return __webpack_require__.e(/*! import() | TableAdminComponent */ "TableAdminComponent").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/tables/TableAdminComponent.vue */ "./resources/js/components/tables/TableAdminComponent.vue"));
    },
    filters: function filters() {
      return __webpack_require__.e(/*! import() | FilterComponent */ "FilterComponent").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/FilterComponent.vue */ "./resources/js/components/FilterComponent.vue"));
    }
  },
  methods: {
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

/***/ "./resources/js/views/admin/facturas/Facturas.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/admin/facturas/Facturas.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Facturas_vue_vue_type_template_id_a1506880___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Facturas.vue?vue&type=template&id=a1506880& */ "./resources/js/views/admin/facturas/Facturas.vue?vue&type=template&id=a1506880&");
/* harmony import */ var _Facturas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Facturas.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/facturas/Facturas.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Facturas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Facturas_vue_vue_type_template_id_a1506880___WEBPACK_IMPORTED_MODULE_0__.render,
  _Facturas_vue_vue_type_template_id_a1506880___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/facturas/Facturas.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/facturas/Facturas.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/admin/facturas/Facturas.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Facturas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/Facturas.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/facturas/Facturas.vue?vue&type=template&id=a1506880&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/admin/facturas/Facturas.vue?vue&type=template&id=a1506880& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturas_vue_vue_type_template_id_a1506880___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturas_vue_vue_type_template_id_a1506880___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Facturas_vue_vue_type_template_id_a1506880___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Facturas.vue?vue&type=template&id=a1506880& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/Facturas.vue?vue&type=template&id=a1506880&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/Facturas.vue?vue&type=template&id=a1506880&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/Facturas.vue?vue&type=template&id=a1506880& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
          _c("filters", {
            ref: "filters",
            attrs: { filters: _vm.filters, request: _vm.request },
            on: {
              consulReq: _vm.handleRequest,
              consulReqQury: _vm.handleRequestQuery,
            },
          }),
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);