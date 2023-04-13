"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["GastosExtrasForm"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/gastosextras/GastosExtrasForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/gastosextras/GastosExtrasForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formatPrice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../formatPrice.js */ "./resources/js/formatPrice.js");


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
var CardRowFormComponent = function CardRowFormComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_forms_CardRowFormComponent_vue-_14930").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../components/forms/CardRowFormComponent.vue */ "./resources/js/components/forms/CardRowFormComponent.vue"));
};

var LoaderComponent = function LoaderComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoaderComponent_vue-_c2860").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../components/LoaderComponent.vue */ "./resources/js/components/LoaderComponent.vue"));
};

var Error404 = function Error404() {
  return __webpack_require__.e(/*! import() */ "Error404").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../components/Error404Component.vue */ "./resources/js/components/Error404Component.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'GastosExtrasForm',
  data: function data() {
    return {
      componentRender: LoaderComponent,
      card: {
        title: 'Nuevo Gasto Extra',
        "class": '',
        action: 'save',
        url: 'gastos-extras',
        id: '',
        name: 'gastosExtras',
        evento: '',
        row: [{
          "class": 'col-xl-6 col-md-6',
          form: [{
            nodo: 'select',
            type: 'select',
            validate: 'required',
            event: 'change',
            name: 'tipo',
            value: '',
            options: [{
              value: 'TRACKING',
              name: 'TRACKING'
            }, {
              value: 'CAJA',
              name: 'CAJA'
            }, {
              value: 'REEMPAQUE',
              name: 'REEMPAQUE'
            }],
            id: 'tipo',
            opt: {
              id: 'value',
              name: 'name'
            },
            label: {
              title: 'Selección Tipo de Gasto Extra',
              "for": 'tipo'
            }
          }, {
            nodo: 'input',
            type: 'text',
            validate: 'required|max:60',
            event: 'change',
            name: 'nombre',
            value: '',
            id: 'nombre',
            label: {
              title: 'Nombre',
              "for": 'nombre'
            }
          }, {
            nodo: 'input',
            type: 'text',
            validate: 'required|max:15',
            event: 'change',
            name: 'monto_gasto_extra',
            value: '',
            id: 'monto_gasto_extra',
            label: {
              title: 'Monto Gasto Extra',
              "for": 'monto_gasto_extra'
            }
          }, {
            nodo: 'select',
            type: 'select',
            validate: 'required',
            event: 'change',
            name: 'accion',
            value: 'POR-DEFECTO',
            options: [{
              value: 'POR-DEFECTO',
              name: 'POR DEFECTO'
            }, {
              value: 'MANUAL',
              name: 'MANUAL'
            }],
            id: 'accion',
            opt: {
              id: 'value',
              name: 'name'
            },
            label: {
              title: 'Selecciona el tipo de Accion',
              "for": 'accion'
            }
          }, {
            nodo: 'select',
            type: 'select',
            validate: 'required',
            event: 'change',
            name: 'condicion',
            value: '0',
            options: [{
              value: '1',
              name: 'SI'
            }, {
              value: '0',
              name: 'NO'
            }],
            id: 'condicion',
            opt: {
              id: 'value',
              name: 'name'
            },
            label: {
              title: 'Condicion',
              "for": 'condicion'
            }
          }]
        }, {
          "class": 'col-xl-6 col-md-6',
          form: [//
          {
            nodo: 'select',
            type: 'select',
            validate: '',
            event: '',
            name: 'variable_cond',
            value: '',
            options: [{
              value: 'TRACKING',
              name: 'TRACKING'
            }],
            id: 'variable_cond',
            opt: {
              id: 'value',
              name: 'name'
            },
            label: {
              title: 'Variable de Condicion',
              "for": 'variable_cond'
            }
          }, {
            nodo: 'select',
            type: 'select',
            validate: '',
            event: '',
            name: 'tipo_cond',
            value: '',
            options: [{
              value: 'MENOR',
              name: 'Menor a'
            }, {
              value: 'MAYOR',
              name: 'Mayor a'
            }],
            id: 'tipo_cond',
            opt: {
              id: 'value',
              name: 'name'
            },
            label: {
              title: 'Tipo de Condicion',
              "for": 'tipo_cond'
            }
          }, {
            nodo: 'input',
            type: 'text',
            validate: 'numeric|max:15',
            event: 'change',
            name: 'cant_cond',
            value: '',
            id: 'cant_cond',
            label: {
              title: 'Cantidad Condicion',
              "for": 'cant_cond'
            }
          }, {
            nodo: 'input',
            type: 'text',
            validate: '',
            event: '',
            name: 'monto_cond',
            value: '',
            id: 'monto_cond',
            label: {
              title: 'Monto Condicion',
              "for": 'monto_cond'
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
              if (!(Object.keys(this.$route.params).length != 0)) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return this.edit(this.$route.params.id);

            case 3:
              _context.next = 6;
              break;

            case 5:
              this.componentRender = CardRowFormComponent;

            case 6:
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
                return _this.axios.get("gastos-extras/".concat(id, "/edit")).then(function (response) {
                  console.log(response.data);

                  if (response.data.results != null) {
                    var formulario = _this.card.row;
                    _this.card.title = 'Editar Gasto Extra ' + response.data.results.nombre;
                    _this.card.action = 'update';
                    _this.card.id = id;

                    for (var campos in response.data.results) {
                      for (var i = 0; i < formulario.length; i++) {
                        if (formulario[i].form.length != 0) {
                          var form = formulario[i].form;

                          for (var j = 0; j < form.length; j++) {
                            if (form[j].name == "".concat(campos)) {
                              form[j].value = response.data.results[campos] != 'null' ? response.data.results[campos] : '';

                              if (campos == 'monto_gasto_extra') {
                                form[j].value = form[j].value != '' && form[j].value != null ? _formatPrice_js__WEBPACK_IMPORTED_MODULE_1__.formatPrice.constPrice(form[j].value, ',', '.') : form[j].value;
                              } else if (campos == 'monto_cond') {
                                // console.log(form[j].value)
                                form[j].value = form[j].value != '' && form[j].value != null ? _formatPrice_js__WEBPACK_IMPORTED_MODULE_1__.formatPrice.constPrice(form[j].value, ',', '.') : form[j].value;
                              }
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
                  console.log(error);
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

/***/ "./resources/js/formatPrice.js":
/*!*************************************!*\
  !*** ./resources/js/formatPrice.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatPrice": () => (/* binding */ formatPrice)
/* harmony export */ });
var fields = [{
  field: 'tarifa_maritimo',
  money: 'usd'
}, {
  field: 'tarifa_aereo',
  money: 'usd'
}, {
  field: 'monto_tc',
  money: 'ves'
}, {
  field: 'monto_gasto_extra',
  money: 'usd'
}, {
  field: 'monto_cond',
  money: 'usd'
}, {
  field: 'seguro',
  money: 'usd'
}];
var formatPrice = {
  init: function init() {
    console.log('as');

    for (var i = 0; i < fields.length; i++) {
      if (document.getElementById(fields[i].field)) {
        (function () {
          console.log('ass');
          var spdor_decimal = fields[i].money == 'usd' ? '.' : fields[i].money == 'ves' ? ',' : null;
          var spdor_unid = fields[i].money == 'usd' ? ',' : fields[i].money == 'ves' ? '.' : null;
          document.getElementById(fields[i].field).addEventListener('keypress', function (e) {
            var key = window.Event ? e.which : e.keyCod;

            if (key < 48 || key > 57) {
              e.preventDefault();
            }
          });
          /*document.getElementById(fields[i].field).addEventListener('keyup', function(e) {
              let key = window.Event ? e.which : e.keyCod;
                   if( key == 8 || key >= 96 && key <= 105 ){
                  e.target.value = constructPrice(e.target.value, spdor_unid, spdor_decimal);
              }
              
          });*/

          document.getElementById(fields[i].field).addEventListener('click', function (e) {
            if (e.target.value == '') e.target.value = '0' + spdor_decimal + '00';
          });
        })();
      }
    }
  },
  destructPrecio: function destructPrecio(precio, fieldName) {
    var field = function field(val) {
      return fields.filter(function (item) {
        return item.field === val;
      });
    };

    var rePrecio = precio;
    console.log(field(fieldName));

    if (field(fieldName).length != 0) {
      var spdor_unid = field(fieldName)[0].money == 'usd' ? ',' : field(fieldName)[0].money == 'ves' ? '.' : null;

      if (precio.includes(spdor_unid)) {
        var arrPrecio = precio.split(spdor_unid);
        var aux = '';

        for (var i = 0; i < arrPrecio.length; i++) {
          aux = aux + '' + arrPrecio[i];
        }

        rePrecio = aux;
      }
    }

    return rePrecio;
  },
  constPrice: function constPrice(value, spdor_unid, spdor_decimal) {
    return constructPrice(value, spdor_unid, spdor_decimal);
  },
  desctPrice: function desctPrice(precio, spdor_unid) {
    var rePrecio = precio;
    console.log('precio', precio);

    if (precio.includes(spdor_unid)) {
      var arrPrecio = precio.split(spdor_unid);
      var aux = '';

      for (var i = 0; i < arrPrecio.length; i++) {
        aux = aux + '' + arrPrecio[i];
      }

      rePrecio = aux;
    }

    return rePrecio;
  },
  checkField: function checkField(field) {
    for (var i = 0; i < fields.length; i++) {
      if (fields[i].field == field) {
        return true;
      }
    }

    return false;
  },
  moneda: function moneda(field) {
    for (var i = 0; i < fields.length; i++) {
      if (fields[i].field == field) {
        return fields[i].money;
      }
    }
  }
};

var constructPrice = function constructPrice(value, spdor_unid, spdor_decimal) {
  var arrayAux = [];
  var salida = [];
  var arregloValue = value.split('');

  for (var i = 0; i < arregloValue.length; i++) {
    if (!isNaN(parseInt(arregloValue[i]))) {
      arrayAux.push(arregloValue[i]);
    }
  }

  if (arrayAux.length == 1 || arrayAux.length == 2) {
    var arr = arrayAux.length == 2 ? 1 : 2;

    for (var _i = 0; _i < arr; _i++) {
      arrayAux.unshift(0);
    }
  }

  arrayAux = arrayAux.reverse();
  var j = 4;
  /* Recorremosy aguardamos em arreglo de salida  */

  for (var _i2 = 0; _i2 < arrayAux.length; _i2++) {
    var boleano = true;
    var aux = '';

    if (_i2 == 1) {
      aux = spdor_decimal;
      salida.push(arrayAux[_i2]);
    } else if (j == _i2 && _i2 != arrayAux.length - 1 && arrayAux.length > 5) {
      aux = spdor_unid;
      j = j + 3;
      salida.push(arrayAux[_i2]);
    } else if (arrayAux.length == 4 && arrayAux.length - 1 == _i2 && arrayAux[_i2] == 0 && arrayAux[arrayAux.length - 2] == 0 || arrayAux.length == 4 && arrayAux.length - 1 == _i2 && arrayAux[_i2] == 0 && arrayAux[arrayAux.length - 2] != 0) {
      boleano = false;
      console.log('*');
    } else {
      aux = arrayAux[_i2];
    }

    if (boleano) salida.push(aux);
  }
  /*Retornarmos el arreglo salido de forma inversa*/


  return salida.reverse().join('');
};

/***/ }),

/***/ "./resources/js/views/admin/configuracion/gastosextras/GastosExtrasForm.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/admin/configuracion/gastosextras/GastosExtrasForm.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GastosExtrasForm_vue_vue_type_template_id_0423fdfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GastosExtrasForm.vue?vue&type=template&id=0423fdfc& */ "./resources/js/views/admin/configuracion/gastosextras/GastosExtrasForm.vue?vue&type=template&id=0423fdfc&");
/* harmony import */ var _GastosExtrasForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GastosExtrasForm.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/configuracion/gastosextras/GastosExtrasForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GastosExtrasForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GastosExtrasForm_vue_vue_type_template_id_0423fdfc___WEBPACK_IMPORTED_MODULE_0__.render,
  _GastosExtrasForm_vue_vue_type_template_id_0423fdfc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/configuracion/gastosextras/GastosExtrasForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/configuracion/gastosextras/GastosExtrasForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/admin/configuracion/gastosextras/GastosExtrasForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GastosExtrasForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GastosExtrasForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/gastosextras/GastosExtrasForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GastosExtrasForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/configuracion/gastosextras/GastosExtrasForm.vue?vue&type=template&id=0423fdfc&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/views/admin/configuracion/gastosextras/GastosExtrasForm.vue?vue&type=template&id=0423fdfc& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GastosExtrasForm_vue_vue_type_template_id_0423fdfc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GastosExtrasForm_vue_vue_type_template_id_0423fdfc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GastosExtrasForm_vue_vue_type_template_id_0423fdfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GastosExtrasForm.vue?vue&type=template&id=0423fdfc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/gastosextras/GastosExtrasForm.vue?vue&type=template&id=0423fdfc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/gastosextras/GastosExtrasForm.vue?vue&type=template&id=0423fdfc&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/gastosextras/GastosExtrasForm.vue?vue&type=template&id=0423fdfc& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
            attrs: { card: _vm.card },
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