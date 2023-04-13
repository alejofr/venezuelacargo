"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["InfoPrealerta"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/InfoPrealerta.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/InfoPrealerta.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BtnVolver_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/BtnVolver.vue */ "./resources/js/components/BtnVolver.vue");
/* harmony import */ var _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../formatPrice.js */ "./resources/js/formatPrice.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoaderComponent_vue-_c2861").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/LoaderComponent.vue */ "./resources/js/components/LoaderComponent.vue"));
};

var AlertMessageComponent = function AlertMessageComponent() {
  return __webpack_require__.e(/*! import() */ "AlertMessageComponent").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/AlertMessageComponent.vue */ "./resources/js/components/AlertMessageComponent.vue"));
};

var Error404 = function Error404() {
  return __webpack_require__.e(/*! import() */ "Error404").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Error404Component.vue */ "./resources/js/components/Error404Component.vue"));
};

var check = function check() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments.length > 1 ? arguments[1] : undefined;
  var prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  for (var i = 0; i < data.length; i++) {
    for (var key in data[i]) {
      if (key == prop && data[i][key] == value) {
        return data[i];
      }
    }
  }

  return null;
};

var parseIntOrFloat = function parseIntOrFloat(valor) {
  return valor % 1 == 0 ? parseInt(valor) : parseFloat(valor);
};

var diaSemanaBol = function diaSemanaBol() {
  var DIA_EN_MILISEGUNDOS = 1000 * 60 * 60 * 24,
      DIAS_QUE_TIENE_UNA_SEMANA = 7,
      MIERCOLES = 3,
      HORAMIERCOLES = 13;
  var bol = false;
  var fecha = new Date();
  var hora = fecha.getHours();
  fecha = new Date(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()));
  var diaDeLaSemana = fecha.getUTCDay();

  if (diaDeLaSemana == 6 || diaDeLaSemana == 0 || diaDeLaSemana == 1 || diaDeLaSemana == 2) {
    bol = true;
  }

  if (MIERCOLES == diaDeLaSemana && hora <= HORAMIERCOLES) {
    bol = true;
  } //return bol;


  return true;
};

var estados = [{
  title: 'Pendiente por recibir',
  valor: 'pendiente',
  check: false
}, {
  title: 'Recibido en Miami',
  valor: 'recibido',
  check: false
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'InfoPrealerta',
  data: function data() {
    return {
      loader: false,
      componentRender: LoaderComponent,
      activeComponent: '',
      alert: {
        msg: '',
        clss: ''
      },
      trackings: [],
      prealerta: {
        nombre_transporte: '',
        fecha_solicitud: '',
        fecha_llegada_solicitud: '',
        nro_warehouse: ''
      },
      estado: false,
      almacen_status: false,
      estados: [],
      solicitud: {
        tipo_envio: '',
        id_almacen: '',
        id_solicitud: '',
        id_tracking: '',
        reempaque: '',
        total_seguro: '0.00'
      },
      show: false,
      tracking: {}
    };
  },
  components: {
    loader: LoaderComponent,
    BtnVolver: _components_BtnVolver_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  beforeCreate: function beforeCreate() {
    this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('sdsd');

              if (!(Object.keys(this.$route.params).length != 0 && this.$route.query.length != 0 && this.$route.query.hasOwnProperty('estado'))) {
                _context.next = 6;
                break;
              }

              _context.next = 4;
              return this.axios.get("solicitudes/".concat(this.$route.params.id), {
                params: {
                  estado: this.$route.query.estado
                }
              }).then(function (response) {
                //this.transportes = response.data.result;
                if (response.data.results != null) {
                  var _response$data$result = response.data.results,
                      transporte_nombre = _response$data$result.transporte_nombre,
                      solicitud_fecha_creado = _response$data$result.solicitud_fecha_creado,
                      solicitud_fecha_llegada = _response$data$result.solicitud_fecha_llegada,
                      almacen_warehouse = _response$data$result.almacen_warehouse,
                      solicitud_estado = _response$data$result.solicitud_estado,
                      tracking = _response$data$result.tracking,
                      id_solicitud = _response$data$result.id_solicitud;
                  _this.prealerta = {
                    nombre_transporte: transporte_nombre,
                    fecha_solicitud: solicitud_fecha_creado,
                    fecha_llegada_solicitud: solicitud_fecha_llegada,
                    nro_warehouse: almacen_warehouse
                  };

                  for (var i = 0; i < estados.length; i++) {
                    if (estados[i].valor == solicitud_estado) {
                      estados[i].check = true;
                    }
                  }

                  if (solicitud_estado == 'recibido' || solicitud_estado == 'enviado') {
                    estados[0].check = true;
                  }

                  if (solicitud_estado == 'enviado') {
                    estados[1].check = true;
                  }

                  if (response.data.results.almacen_status == 0) {
                    _this.estado = true;
                    _this.solicitud.id_almacen = response.data.results.id_almacen;
                  }

                  if (response.data.results.almacen_status == 1) {
                    _this.almacen_status = true;
                  }

                  _this.estados = estados;
                  _this.trackings = tracking;

                  for (var _i = 0; _i < _this.trackings.length; _i++) {
                    var total_seguro = _this.trackings[_i].total_seguro;
                    total_seguro = parseIntOrFloat(total_seguro);
                    total_seguro = total_seguro.toFixed(2);
                    total_seguro = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice(total_seguro, ',', '.');
                    _this.trackings[_i].total_seguro = total_seguro;
                    _this.solicitud.id_tracking = _this.trackings[_i].id_tracking;
                  }

                  _this.solicitud.id_solicitud = id_solicitud;
                  console.log(_this.trackings);
                  _this.componentRender = '';
                } else {
                  _this.componentRender = Error404;
                }

                console.log(response.data);
              })["catch"](function (error) {
                console.log(error);
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
    changeTotalSeguro: function changeTotalSeguro(e) {
      this.solicitud.total_seguro = _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice(e.target.value, ',', '.');
    },
    sendInstruccion: function sendInstruccion() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this2.estado) {
                  _this2.$validator.validate().then( /*#__PURE__*/function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(valid) {
                      var formData, resp;
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              if (!valid) {
                                _context2.next = 13;
                                break;
                              }

                              if (!(_this2.solicitud.tipo_envio == '')) {
                                _context2.next = 4;
                                break;
                              }

                              _this2.respAlert(403, 'Por Favor debe indicar un tipo de envio');

                              return _context2.abrupt("return");

                            case 4:
                              if (!(_this2.solicitud.reempaque == '')) {
                                _context2.next = 7;
                                break;
                              }

                              _this2.respAlert(403, 'Por Favor debe indicar si quiere o no con reempaque');

                              return _context2.abrupt("return");

                            case 7:
                              formData = {
                                tipo_envio: _this2.solicitud.tipo_envio,
                                id_almacen: _this2.solicitud.id_almacen,
                                id_tracking: _this2.solicitud.id_tracking,
                                reempaque: _this2.solicitud.reempaque,
                                total_seguro: _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.desctPrice("".concat(_this2.solicitud.total_seguro), ',')
                              };
                              console.log(formData);
                              _this2.loader = true;

                              resp = function resp(_resp) {
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

                              _context2.next = 13;
                              return _this2.axios.post("solicitudes-instruccion/".concat(_this2.solicitud.id_solicitud), formData).then(function (response) {
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

                            case 13:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));

                    return function (_x) {
                      return _ref2.apply(this, arguments);
                    };
                  }());
                }

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    respAlert: function respAlert(status) {
      var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      this.alert = {
        msg: msg,
        clss: status == 200 ? 'updated' : 'error'
      };
      this.activeComponent = AlertMessageComponent;
      return;
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/InfoPrealerta.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/InfoPrealerta.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.client-inf-prealerta .dropdown-item.disabled{padding-top: 0; padding-bottom: 0;}\n.modal.show{\n    display: block;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/InfoPrealerta.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/InfoPrealerta.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPrealerta_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoPrealerta.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/InfoPrealerta.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPrealerta_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPrealerta_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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

/***/ "./resources/js/views/client/InfoPrealerta.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/client/InfoPrealerta.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InfoPrealerta_vue_vue_type_template_id_18ae78f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoPrealerta.vue?vue&type=template&id=18ae78f5& */ "./resources/js/views/client/InfoPrealerta.vue?vue&type=template&id=18ae78f5&");
/* harmony import */ var _InfoPrealerta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoPrealerta.vue?vue&type=script&lang=js& */ "./resources/js/views/client/InfoPrealerta.vue?vue&type=script&lang=js&");
/* harmony import */ var _InfoPrealerta_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InfoPrealerta.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/client/InfoPrealerta.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InfoPrealerta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoPrealerta_vue_vue_type_template_id_18ae78f5___WEBPACK_IMPORTED_MODULE_0__.render,
  _InfoPrealerta_vue_vue_type_template_id_18ae78f5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/client/InfoPrealerta.vue"
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

/***/ "./resources/js/views/client/InfoPrealerta.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/client/InfoPrealerta.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPrealerta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoPrealerta.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/InfoPrealerta.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPrealerta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/client/InfoPrealerta.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/client/InfoPrealerta.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPrealerta_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoPrealerta.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/InfoPrealerta.vue?vue&type=style&index=0&lang=css&");


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

/***/ "./resources/js/views/client/InfoPrealerta.vue?vue&type=template&id=18ae78f5&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/client/InfoPrealerta.vue?vue&type=template&id=18ae78f5& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPrealerta_vue_vue_type_template_id_18ae78f5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPrealerta_vue_vue_type_template_id_18ae78f5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPrealerta_vue_vue_type_template_id_18ae78f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoPrealerta.vue?vue&type=template&id=18ae78f5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/InfoPrealerta.vue?vue&type=template&id=18ae78f5&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/InfoPrealerta.vue?vue&type=template&id=18ae78f5&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/client/InfoPrealerta.vue?vue&type=template&id=18ae78f5& ***!
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
              ? _c("div", { staticClass: "card card-lg" }, [
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
                    _c("div", { staticClass: "row mb-5" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-7 col-lg-7 col-sm-12" },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col-12 col-md-12 col-sm-4 col-lg-12 mb-3",
                              },
                              [
                                _c("p", { staticClass: "h3" }, [
                                  _vm._v("Solicitud Envío"),
                                ]),
                                _vm._v(" "),
                                _c("address", [
                                  _c("p", [
                                    _vm._v(
                                      "Empresa de Transporte: " +
                                        _vm._s(_vm.prealerta.nombre_transporte)
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "Cantidad Trackings: " +
                                        _vm._s(_vm.trackings.length)
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "Fecha De Solicitud: " +
                                        _vm._s(_vm.prealerta.fecha_solicitud)
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "Fecha De Llegada: " +
                                        _vm._s(
                                          _vm.prealerta.fecha_llegada_solicitud
                                        )
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "Número de Warehouse: " +
                                        _vm._s(
                                          " " +
                                            (_vm.prealerta.nro_warehouse != null
                                              ? _vm.prealerta.nro_warehouse
                                              : "N/A") +
                                            " "
                                        )
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col-12 col-md-12 col-sm-8 col-lg-12",
                              },
                              [
                                _c("p", { staticClass: "h3" }, [
                                  _vm._v("Estado de Solicitud"),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "row" },
                                  _vm._l(_vm.estados, function (estado, index) {
                                    return _c(
                                      "div",
                                      {
                                        key: index,
                                        staticClass:
                                          "col-md-12 col-sm-12 col-12 mb-3",
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "avatar text-uppercase w-100",
                                            class: {
                                              "bg-green-lt": estado.check,
                                              "bg-muted-lt": !estado.check,
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                   " +
                                                _vm._s(estado.title) +
                                                "\n                                               "
                                            ),
                                          ]
                                        ),
                                      ]
                                    )
                                  }),
                                  0
                                ),
                              ]
                            ),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-5 col-lg-5 col-sm-12 mb-3" },
                        [
                          _c("p", { staticClass: "h3" }, [
                            _vm._v("Tracking: "),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "card mb-4" }, [
                            _c(
                              "div",
                              {
                                staticClass: "card-body",
                                staticStyle: {
                                  padding: "1rem 1rem !important",
                                },
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "divide-y" },
                                  _vm._l(_vm.trackings, function (item, index) {
                                    return _c("div", { key: index }, [
                                      _c("div", { staticClass: "row" }, [
                                        _c("div", { staticClass: "col-auto" }, [
                                          item.ruta_image != null
                                            ? _c("a", {
                                                staticClass: "avatar",
                                                style:
                                                  "background-image: url(" +
                                                  item.ruta_image +
                                                  ")",
                                                attrs: {
                                                  href: item.ruta_image,
                                                  target: "_blank",
                                                  rel: "noopener noreferrer",
                                                },
                                              })
                                            : _c("span", {
                                                staticClass: "avatar",
                                                style:
                                                  "background-image: url(" +
                                                  item.ruta_image +
                                                  ")",
                                              }),
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col" }, [
                                          _c(
                                            "div",
                                            { staticClass: "text-truncate" },
                                            [
                                              _vm._v(
                                                "\n                                                           " +
                                                  _vm._s(item.descripcion) +
                                                  "\n                                                       "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "text-muted" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "small text-muted me-1",
                                                },
                                                [_vm._v("Tracking:")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "small text-mute",
                                                },
                                                [_vm._v(_vm._s(item.tracking))]
                                              ),
                                            ]
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-auto" }, [
                                          _c(
                                            "div",
                                            { staticClass: "dropdown" },
                                            [
                                              _vm._m(0, true),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "dropdown-menu dropdown-menu-demo dropdown-menu-end client-inf-prealerta",
                                                },
                                                [
                                                  _c(
                                                    "h6",
                                                    {
                                                      staticClass:
                                                        "dropdown-header",
                                                    },
                                                    [_vm._v("Más Información")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("div", {
                                                    staticClass:
                                                      "dropdown-divider",
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "dropdown-item disabled",
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "small text-muted me-1",
                                                        },
                                                        [_vm._v("Ancho:")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("div", [
                                                        _c("strong", [
                                                          _vm._v(
                                                            _vm._s(
                                                              " " +
                                                                (item.ancho !=
                                                                null
                                                                  ? item.ancho
                                                                  : "N/A") +
                                                                " "
                                                            )
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "dropdown-item disabled",
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "small text-muted me-1",
                                                        },
                                                        [_vm._v("Alto:")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("div", [
                                                        _c("strong", [
                                                          _vm._v(
                                                            _vm._s(
                                                              " " +
                                                                (item.alto !=
                                                                null
                                                                  ? item.alto
                                                                  : "N/A") +
                                                                " "
                                                            )
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "dropdown-item disabled",
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "small text-muted me-1",
                                                        },
                                                        [_vm._v("Largo:")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("div", [
                                                        _c("strong", [
                                                          _vm._v(
                                                            _vm._s(
                                                              " " +
                                                                (item.largo !=
                                                                null
                                                                  ? item.largo
                                                                  : "N/A") +
                                                                " "
                                                            )
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "dropdown-item disabled",
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "small text-muted me-1",
                                                        },
                                                        [_vm._v("Peso:")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("div", [
                                                        _c("strong", [
                                                          _vm._v(
                                                            _vm._s(
                                                              " " +
                                                                (item.peso !=
                                                                null
                                                                  ? item.peso
                                                                  : "N/A")
                                                            )
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "dropdown-item disabled",
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "small text-muted me-1",
                                                        },
                                                        [_vm._v("FT³:")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("div", [
                                                        _c("strong", [
                                                          _vm._v(
                                                            _vm._s(
                                                              item.pie_cubico
                                                            )
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "dropdown-item disabled",
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "small text-muted me-1",
                                                        },
                                                        [_vm._v("VOL:")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("div", [
                                                        _c("strong", [
                                                          _vm._v(
                                                            _vm._s(
                                                              " " +
                                                                (item.volumen !=
                                                                null
                                                                  ? item.volumen
                                                                  : "N/A")
                                                            )
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "dropdown-item disabled",
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "small text-muted me-1",
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Número de Piezas:"
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("div", [
                                                        _c("strong", [
                                                          _vm._v(
                                                            _vm._s(
                                                              " " +
                                                                (item.num_piezas !=
                                                                null
                                                                  ? item.num_piezas
                                                                  : "N/A")
                                                            )
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "dropdown-item disabled",
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "small text-muted me-1",
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Total Seguro:"
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("div", [
                                                        _c("strong", [
                                                          _vm._v(
                                                            _vm._s(
                                                              " " +
                                                                (!_vm.almacen_status
                                                                  ? "N/A"
                                                                  : item.total_seguro)
                                                            )
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "dropdown-item disabled",
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "small text-muted me-1",
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Con Reempaque:"
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("div", [
                                                        _c("strong", [
                                                          _vm._v(
                                                            _vm._s(
                                                              " " +
                                                                (!_vm.almacen_status
                                                                  ? "N/A"
                                                                  : item.reempaque)
                                                            )
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ]),
                                    ])
                                  }),
                                  0
                                ),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _vm.estado
                            ? _c("div", { staticClass: "m-0 w-100" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "form-floating mb-3",
                                    class: {
                                      "is-invalid":
                                        _vm.errors.first("tipo_envio"),
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
                                            value: _vm.solicitud.tipo_envio,
                                            expression: "solicitud.tipo_envio",
                                          },
                                        ],
                                        staticClass: "form-select",
                                        attrs: {
                                          name: "tipo_envio",
                                          id: "tipo_envio",
                                          "data-vv-validate-on": "change",
                                        },
                                        on: {
                                          change: function ($event) {
                                            var $$selectedVal =
                                              Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function (o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function (o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                            _vm.$set(
                                              _vm.solicitud,
                                              "tipo_envio",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          },
                                        },
                                      },
                                      [
                                        _c(
                                          "option",
                                          { attrs: { value: "aereo" } },
                                          [
                                            _vm._v(
                                              "\n                                               Aereo\n                                           "
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "maritimo" } },
                                          [
                                            _vm._v(
                                              "\n                                               Maritimo\n                                           "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      { attrs: { for: "tipo_envio" } },
                                      [_vm._v("Selecciona el tipo de envio")]
                                    ),
                                    _vm._v(" "),
                                    _vm.errors.has("tipo_envio")
                                      ? _c(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first("tipo_envio")
                                              )
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-floating mb-3" },
                                  [
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.solicitud.reempaque,
                                            expression: "solicitud.reempaque",
                                          },
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: "required",
                                            expression: "'required'",
                                          },
                                        ],
                                        staticClass: "form-select",
                                        class: {
                                          "is-invalid":
                                            _vm.errors.first("tipo_envio"),
                                        },
                                        attrs: {
                                          name: "reempaque",
                                          id: "reempaque",
                                          "data-vv-validate-on": "change",
                                        },
                                        on: {
                                          change: function ($event) {
                                            var $$selectedVal =
                                              Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function (o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function (o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                            _vm.$set(
                                              _vm.solicitud,
                                              "reempaque",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          },
                                        },
                                      },
                                      [
                                        _c(
                                          "option",
                                          { attrs: { value: "si" } },
                                          [
                                            _vm._v(
                                              "\n                                               SI\n                                           "
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "no" } },
                                          [
                                            _vm._v(
                                              "\n                                               NO\n                                           "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      { attrs: { for: "reempaque" } },
                                      [_vm._v("Con Reempaque")]
                                    ),
                                    _vm._v(" "),
                                    _vm.errors.has("reempaque")
                                      ? _c(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first("reempaque")
                                              )
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-floating mb-3 w-100" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.solicitud.total_seguro,
                                          expression: "solicitud.total_seguro",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "total_seguro",
                                        id: "total_seguro",
                                        pattern: "[0-9,.]+",
                                      },
                                      domProps: {
                                        value: _vm.solicitud.total_seguro,
                                      },
                                      on: {
                                        keyup: function ($event) {
                                          return _vm.changeTotalSeguro($event)
                                        },
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.solicitud,
                                            "total_seguro",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      { attrs: { for: "total_seguro" } },
                                      [_vm._v("Total Seguro")]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(1),
                              ])
                            : _vm._e(),
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
                        _vm.estado
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-info ms-auto",
                                staticStyle: { "background-color": "#2C2E88" },
                                attrs: { type: "submit" },
                                on: { click: _vm.sendInstruccion },
                              },
                              [
                                _vm._v(
                                  "\n                               Enviar Instrucción\n                           "
                                ),
                              ]
                            )
                          : _vm._e(),
                      ],
                      1
                    ),
                  ]),
                ])
              : _vm._e(),
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
    return _c(
      "button",
      {
        staticClass: "text-muted card-dropdown",
        attrs: {
          type: "button",
          "data-bs-toggle": "dropdown",
          "data-bs-auto-close": "outside",
          role: "button",
          "aria-expanded": "false",
        },
      },
      [_c("span", { staticStyle: { color: "#24298D" } }, [_vm._v("Más Inf.")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "form-check-description" }, [
      _vm._v("\n                                       El seguro "),
      _c("strong", [_vm._v("solo cubre HURTOS")]),
      _vm._v(
        ", no cubre DECOMISOS O PROCESOS ADUANALES\n                                   "
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);