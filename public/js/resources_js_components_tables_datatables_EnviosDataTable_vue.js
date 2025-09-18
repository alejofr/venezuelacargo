"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_tables_datatables_EnviosDataTable_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/EnviosDataTable.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/EnviosDataTable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_shippingStates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/shippingStates */ "./resources/js/helpers/shippingStates.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'EnviosDataTable',
  props: ['data'],
  data: function data() {
    return {
      getId: '',
      showNota: false,
      notaContent: null,
      notaTitle: null
    };
  },
  methods: {
    showStateTitle: function showStateTitle(valueState) {
      var state = _helpers_shippingStates__WEBPACK_IMPORTED_MODULE_0__.shippingStates.find(function (value) {
        return value.valor === valueState;
      });

      if (state) {
        return state.title;
      }

      return valueState;
    },
    openNota: function openNota(title, nota) {
      console.log({
        title: title,
        nota: nota
      });
      this.showNota = true;
      this.notaContent = nota;
      this.notaTitle = title;
    },
    closeNota: function closeNota() {
      this.showNota = false;
    }
  },
  watch: {
    getId: function getId() {
      this.$emit('getId', this.getId);
    }
  }
});

/***/ }),

/***/ "./resources/js/helpers/shippingStates.js":
/*!************************************************!*\
  !*** ./resources/js/helpers/shippingStates.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shippingStates": () => (/* binding */ shippingStates)
/* harmony export */ });
var shippingStates = [{
  title: 'ALMACÉN MIAMI',
  valor: 'FACTURADO',
  check: true,
  active: false
}, {
  title: 'PENDIENTE POR PAGO',
  valor: 'ENVIO-VENEZUELA',
  map: {
    id: "a",
    position: {
      lat: 25.7745431,
      lng: -80.1708802
    }
  },
  check: false,
  active: false
}, {
  title: 'EN TRÁNSITO HACIA VENEZUELA',
  valor: 'ENTRANSITO-VENEZUELA',
  map: {
    id: "b",
    position: {
      lat: 23.732230669979263,
      lng: -71.19582448995914
    }
  },
  check: false,
  active: false
}, {
  title: 'EN PUERTO VENEZOLANO',
  valor: 'PUERTO-VENEZOLANO',
  map: {
    id: "c",
    position: {
      lat: 10.601428576954985,
      lng: -66.96054375984357
    }
  },
  check: false,
  active: false
}, {
  title: 'HACIENDO ADUANA VENEZUELA',
  valor: 'ADUANA-VENEZUELA',
  map: {
    id: "d",
    position: {
      lat: 10.6012894,
      lng: -66.9466783
    }
  },
  check: false,
  active: false
}, {
  title: 'ALMACEN EXTERNO ADUANA',
  valor: 'ALMACEN-EXTERNO-ADUANA',
  map: {
    id: "e",
    position: {
      lat: 10.601428576954985,
      lng: -66.96054375984357
    }
  },
  check: false,
  active: false
}, {
  title: 'ALMACÉN VENEZUELA CARGO LA GUAIRA',
  valor: 'ALMACEN-VENEZUELA',
  map: {
    id: "h",
    position: {
      lat: 10.5997551,
      lng: -66.954827
    }
  },
  check: false,
  active: false
}, {
  title: 'EN RUTA NACIONAL',
  valor: 'EN-RUTA-NACIONAL',
  map: {
    id: "i",
    position: {
      lat: 10.458737617888016,
      lng: -66.91349306300683
    }
  },
  check: false,
  active: false
}, {
  title: 'ENTREGADO',
  valor: 'ENTREGADO',
  check: false,
  active: false
}];

/***/ }),

/***/ "./resources/js/components/tables/datatables/EnviosDataTable.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/tables/datatables/EnviosDataTable.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EnviosDataTable_vue_vue_type_template_id_2bba7e9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnviosDataTable.vue?vue&type=template&id=2bba7e9a& */ "./resources/js/components/tables/datatables/EnviosDataTable.vue?vue&type=template&id=2bba7e9a&");
/* harmony import */ var _EnviosDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EnviosDataTable.vue?vue&type=script&lang=js& */ "./resources/js/components/tables/datatables/EnviosDataTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EnviosDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EnviosDataTable_vue_vue_type_template_id_2bba7e9a___WEBPACK_IMPORTED_MODULE_0__.render,
  _EnviosDataTable_vue_vue_type_template_id_2bba7e9a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tables/datatables/EnviosDataTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/tables/datatables/EnviosDataTable.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/tables/datatables/EnviosDataTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnviosDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EnviosDataTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/EnviosDataTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnviosDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tables/datatables/EnviosDataTable.vue?vue&type=template&id=2bba7e9a&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/tables/datatables/EnviosDataTable.vue?vue&type=template&id=2bba7e9a& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnviosDataTable_vue_vue_type_template_id_2bba7e9a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnviosDataTable_vue_vue_type_template_id_2bba7e9a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnviosDataTable_vue_vue_type_template_id_2bba7e9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EnviosDataTable.vue?vue&type=template&id=2bba7e9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/EnviosDataTable.vue?vue&type=template&id=2bba7e9a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/EnviosDataTable.vue?vue&type=template&id=2bba7e9a&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/EnviosDataTable.vue?vue&type=template&id=2bba7e9a& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    "tbody",
    _vm._l(_vm.data, function (item, index) {
      return _c("tr", { key: index }, [
        _c("td", [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.getId,
                expression: "getId",
              },
            ],
            staticClass: "form-check-input m-0 align-middle",
            staticStyle: { border: "1px solid #b9b9b9", cursor: "pointer" },
            attrs: {
              type: "radio",
              name: "id",
              "aria-label": "Select invoice",
            },
            domProps: {
              value: item.id_envio,
              checked: _vm._q(_vm.getId, item.id_envio),
            },
            on: {
              change: function ($event) {
                _vm.getId = item.id_envio
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("td", [_c("span", {}, [_vm._v(" " + _vm._s(item.nro_factura))])]),
        _vm._v(" "),
        _c("td", [
          _c("span", [_vm._v(" " + _vm._s(item.nro_container) + " ")]),
        ]),
        _vm._v(" "),
        _c("td", [
          _c("span", {}, [
            _vm._v(" " + _vm._s(item.nombres) + " " + _vm._s(item.apellidos)),
          ]),
        ]),
        _vm._v(" "),
        _c("td", [
          _c("span", { staticStyle: { "text-transform": "uppercase" } }, [
            _vm._v(" " + _vm._s(item.tipo_envio)),
          ]),
        ]),
        _vm._v(" "),
        _c("td", [
          _c("span", { staticStyle: { "text-transform": "uppercase" } }, [
            _vm._v(" " + _vm._s(_vm.showStateTitle(item.estado)) + " "),
          ]),
        ]),
        _vm._v(" "),
        _c("td", [_c("span", {}, [_vm._v(" " + _vm._s(item.fecha_editado))])]),
        _vm._v(" "),
        _c("td", [
          item.historial_estado != null
            ? _c("span", [
                _vm._v(
                  _vm._s(
                    item.historial_estado.historial[
                      item.historial_estado.historial.length - 1
                    ].title
                  )
                ),
              ])
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("td", [
          item.nota
            ? _c(
                "button",
                {
                  staticClass: "btn btn-light",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.openNota(item.nro_factura, item.nota)
                    },
                  },
                },
                [_vm._v("\n                Ver Nota\n            ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.showNota
            ? _c(
                "div",
                {
                  staticClass: "modal fade show",
                  staticStyle: {
                    display: "block",
                    "background-color": "#0000007a",
                  },
                  attrs: {
                    tabindex: "-1",
                    "aria-modal": "true",
                    role: "dialog",
                  },
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "modal-dialog modal-dialog-centered",
                      attrs: { role: "document" },
                    },
                    [
                      _c("div", { staticClass: "modal-content" }, [
                        _c("div", { staticClass: "modal-header" }, [
                          _c("h5", { staticClass: "modal-title" }, [
                            _vm._v("Factura: " + _vm._s(_vm.notaTitle)),
                          ]),
                          _vm._v(" "),
                          _c("button", {
                            staticClass: "btn-close",
                            attrs: {
                              type: "button",
                              "data-bs-dismiss": "modal",
                              "aria-label": "Close",
                            },
                            on: { click: _vm.closeNota },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-body" }, [
                          _c("p", [_vm._v(_vm._s(_vm.notaContent))]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-footer" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-secondary",
                              attrs: {
                                type: "button",
                                "data-bs-dismiss": "modal",
                              },
                              on: { click: _vm.closeNota },
                            },
                            [_vm._v("Cerrar")]
                          ),
                        ]),
                      ]),
                    ]
                  ),
                ]
              )
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c(
          "td",
          [
            _c(
              "router-link",
              {
                directives: [{ name: "title", rawName: "v-title" }],
                staticClass: "align-text-top me-2",
                attrs: {
                  to: {
                    name: "ChangeEstadoEnvio",
                    params: { id: item.id_envio },
                    query: { estado: item.estado },
                  },
                  title: "Cambiar el estado de este envio",
                },
              },
              [_c("i", { staticClass: "ti ti-edit fs-19" })]
            ),
          ],
          1
        ),
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);