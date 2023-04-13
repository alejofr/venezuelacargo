"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["EmpresasTransportesForm"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/empresas/EmpresasTransportesForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/empresas/EmpresasTransportesForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
var CardRowFormComponent = function CardRowFormComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_forms_CardRowFormComponent_vue-_14931").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../components/forms/CardRowFormComponent.vue */ "./resources/js/components/forms/CardRowFormComponent.vue"));
};

var LoaderComponent = function LoaderComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoaderComponent_vue-_c2860").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../components/LoaderComponent.vue */ "./resources/js/components/LoaderComponent.vue"));
};

var Error404 = function Error404() {
  return __webpack_require__.e(/*! import() */ "Error404").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../components/Error404Component.vue */ "./resources/js/components/Error404Component.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'EmpresasTransportesForm',
  data: function data() {
    return {
      componentRender: LoaderComponent,
      card: {
        title: 'Nueva Empresa de Transportes',
        "class": 'max_width480 margin_auto_all',
        action: 'save',
        url: 'empresas-transportes',
        id: '',
        name: 'EmpresasTransportes',
        evento: '',
        row: [{
          "class": 'col-xl-12 col-md-12',
          form: [{
            nodo: 'input',
            type: 'text',
            validate: 'required|max:120',
            event: 'change',
            name: 'nombre',
            value: '',
            id: 'nombre',
            label: {
              title: 'Nombre de empresa',
              "for": 'nombre'
            }
          }, {
            nodo: 'input',
            type: 'text',
            validate: 'required|max:25',
            event: 'change',
            name: 'codigo',
            value: '',
            id: 'codigo',
            label: {
              title: 'Codigo',
              "for": 'codigo'
            }
          }, {
            nodo: 'input',
            type: 'text',
            validate: 'required|max:180',
            event: 'change',
            name: 'descripcion',
            value: '',
            id: 'descripcion',
            label: {
              title: 'Descripcion',
              "for": 'descripcion'
            }
          }]
        }] //fin row

      } //fin card

    };
  },
  beforeCreate: function beforeCreate() {
    this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (Object.keys(this.$route.params).length != 0) this.edit(this.$route.params.id);else this.componentRender = CardRowFormComponent;

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
  },
  components: {
    FormCardRow: CardRowFormComponent
  },
  methods: {
    edit: function edit(id) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.axios.get("empresas-transportes/".concat(id, "/edit")).then(function (response) {
                  console.log(response.data);

                  if (response.data.results != null) {
                    var formulario = _this.card.row;
                    _this.card.title = 'Editar ' + response.data.results.nombre;
                    _this.card.action = 'update';
                    _this.card.id = id;

                    for (var campos in response.data.results) {
                      for (var i = 0; i < formulario.length; i++) {
                        if (formulario[i].form.length != 0) {
                          var form = formulario[i].form;

                          for (var j = 0; j < form.length; j++) {
                            if (form[j].name == "".concat(campos)) {
                              form[j].value = response.data.results[campos] != 'null' ? response.data.results[campos] : '';
                            }
                          }
                        }
                      }
                    }

                    _this.componentRender = CardRowFormComponent;
                  } else {
                    _this.componentRender = Error404;
                  }
                })["catch"](function (error) {
                  _this.componentRender = Error404;
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

/***/ "./resources/js/views/admin/configuracion/empresas/EmpresasTransportesForm.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/admin/configuracion/empresas/EmpresasTransportesForm.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmpresasTransportesForm_vue_vue_type_template_id_c69fa9da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmpresasTransportesForm.vue?vue&type=template&id=c69fa9da& */ "./resources/js/views/admin/configuracion/empresas/EmpresasTransportesForm.vue?vue&type=template&id=c69fa9da&");
/* harmony import */ var _EmpresasTransportesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmpresasTransportesForm.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/configuracion/empresas/EmpresasTransportesForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmpresasTransportesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmpresasTransportesForm_vue_vue_type_template_id_c69fa9da___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmpresasTransportesForm_vue_vue_type_template_id_c69fa9da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/configuracion/empresas/EmpresasTransportesForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/configuracion/empresas/EmpresasTransportesForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/admin/configuracion/empresas/EmpresasTransportesForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresasTransportesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmpresasTransportesForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/empresas/EmpresasTransportesForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresasTransportesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/configuracion/empresas/EmpresasTransportesForm.vue?vue&type=template&id=c69fa9da&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/views/admin/configuracion/empresas/EmpresasTransportesForm.vue?vue&type=template&id=c69fa9da& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresasTransportesForm_vue_vue_type_template_id_c69fa9da___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresasTransportesForm_vue_vue_type_template_id_c69fa9da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresasTransportesForm_vue_vue_type_template_id_c69fa9da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmpresasTransportesForm.vue?vue&type=template&id=c69fa9da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/empresas/EmpresasTransportesForm.vue?vue&type=template&id=c69fa9da&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/empresas/EmpresasTransportesForm.vue?vue&type=template&id=c69fa9da&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/empresas/EmpresasTransportesForm.vue?vue&type=template&id=c69fa9da& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row row-cards" }, [
    _c(
      "div",
      { staticClass: "col-12", staticStyle: { "min-height": "60vh" } },
      [
        _c(_vm.componentRender, {
          tag: "component",
          attrs: { card: _vm.card },
        }),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);