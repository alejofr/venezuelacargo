"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CalculadoraEnvio_vue-_34de1"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CalculadoraEnvio.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CalculadoraEnvio.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoaderComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoaderComponent.vue */ "./resources/js/components/LoaderComponent.vue");
/* harmony import */ var _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formatPrice.js */ "./resources/js/formatPrice.js");
/* harmony import */ var _helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/calcInvoice */ "./resources/js/helpers/calcInvoice.js");


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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CalculadoraEnvio',
  props: ['show'],
  data: function data() {
    return {
      loader: false,
      estados: [],
      estado_id: '',
      tipo_envio: '',
      reempaque: '',
      alto: '',
      largo: '',
      ancho: '',
      peso: '',
      result: {
        tarifa: '',
        volumen: '',
        pie_cubico: '',
        total: '',
        cost_reempaque: '',
        cost_tracking: ''
      }
    };
  },
  components: {
    loader: _LoaderComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  beforeCreate: function beforeCreate() {
    this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.axios.get('estados').then(function (response) {
                _this.estados = response.data.results.all;
                console.log(_this.estados);
              })["catch"](function (error) {
                console.log(error); //this.componentRender = Error500;
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
  },
  methods: {
    closeModal: function closeModal() {
      this.$emit('closeModalCalcularEnvio');
    },
    calcular: function calcular() {
      var _this2 = this;

      this.$validator.validate().then(function (valid) {
        if (valid) {
          _this2.loader = true;
          var params = {
            estado_id: _this2.estado_id,
            tipo_envio: _this2.tipo_envio,
            reempaque: _this2.reempaque,
            alto: _this2.alto,
            largo: _this2.largo,
            ancho: _this2.ancho,
            peso: _this2.peso
          };
          setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _this2.axios.get('calculadora', {
                      params: params
                    }).then(function (response) {
                      _this2.loader = false;
                      var _response$data$result = response.data.result,
                          tarifa = _response$data$result.tarifa,
                          volumen = _response$data$result.volumen,
                          pie_cubico = _response$data$result.pie_cubico,
                          total = _response$data$result.total,
                          cost_reempaque = _response$data$result.cost_reempaque,
                          cost_tracking = _response$data$result.cost_tracking; //this.result = response.data.message;

                      //this.result = response.data.message;
                      _this2.result = {
                        tarifa: _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice("".concat((0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_3__.parseNum)(tarifa).toFixed(2)), ',', '.'),
                        volumen: (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_3__.parseNum)(volumen).toFixed(2),
                        pie_cubico: (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_3__.parseNum)(pie_cubico).toFixed(2),
                        total: _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice("".concat((0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_3__.parseNum)(total).toFixed(2)), ',', '.'),
                        cost_reempaque: _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice("".concat((0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_3__.parseNum)(cost_reempaque).toFixed(2)), ',', '.'),
                        cost_tracking: _formatPrice_js__WEBPACK_IMPORTED_MODULE_2__.formatPrice.constPrice("".concat((0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_3__.parseNum)(cost_tracking).toFixed(2)), ',', '.')
                      };
                      console.log('response', response.data);
                    })["catch"](function (error) {
                      console.log(error.response.data);
                      _this2.loader = false;
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          })), 1000);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoaderComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoaderComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'VzlacargoLoaderComponent'
});

/***/ }),

/***/ "./resources/js/helpers/calcInvoice.js":
/*!*********************************************!*\
  !*** ./resources/js/helpers/calcInvoice.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add_box": () => (/* binding */ add_box),
/* harmony export */   "cajas": () => (/* binding */ cajas),
/* harmony export */   "calc_total_usd_data": () => (/* binding */ calc_total_usd_data),
/* harmony export */   "calc_total_ves": () => (/* binding */ calc_total_ves),
/* harmony export */   "create_factura": () => (/* binding */ create_factura),
/* harmony export */   "data_contents": () => (/* binding */ data_contents),
/* harmony export */   "generateRandomString": () => (/* binding */ generateRandomString),
/* harmony export */   "parseNum": () => (/* binding */ parseNum),
/* harmony export */   "suma_total_usd_var": () => (/* binding */ suma_total_usd_var),
/* harmony export */   "warehouses_data": () => (/* binding */ warehouses_data)
/* harmony export */ });
/* harmony import */ var _formatPrice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../formatPrice */ "./resources/js/formatPrice.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //detalles

var details = {
  tarifa: '0.00',
  fecha_factura: '',
  nro_factura: '',
  tipo_envio: '',
  monto_tc: '0,00',
  nro_container: ''
}; // dato de content Aereo

var dataContentAereo = {
  warehouse: '',
  pie_cubico: '',
  volumen: '',
  peso: '',
  total_lb: '',
  cost_env: '0.00',
  seguro: '',
  sub_total: '0.00'
};
/*
id_almacen: '',
almacen_ids: [],
warehouse: '',
warehouse_children: '',
ancho: '',
alto: '',
largo: '',
peso: '',
pie_cubico: '',
volumen: '',
total_seguro: '',
seguro: '',

*/
//funcion de construccion de data para facturar

var create_factura = function create_factura() {
  var almacen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var extras = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var wh = []; //arreglo para determinar los wh
  //let cajas = cajas(extras);

  almacen.forEach(function (element) {
    var tipo_envio = element.tipo_envio,
        id_almacen = element.id_almacen,
        warehouse = element.warehouse,
        trackings = element.trackings;
    details.tipo_envio = tipo_envio;
    trackings.map(function (item) {
      return wh.push(_objectSpread(_objectSpread({}, item), {}, {
        id_almacen: id_almacen,
        warehouse: warehouse,
        total_seguro: _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice(item.total_seguro, ',', '.')
      }));
    });
  });
  var costo_trackings = calc_costo_track_and_reempaque(extras, 'TRACKING', wh);
  var costo_reempaque = calc_costo_track_and_reempaque(extras, 'REEMPAQUE', wh);
  return {
    wh: wh,
    details: details,
    costo_trackings: costo_trackings,
    costo_reempaque: costo_reempaque
  };
};

var cajas = function cajas() {
  var extras = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var box = [];
  extras.forEach(function (element) {
    var id_gasto_extra = element.id_gasto_extra,
        nombre = element.nombre,
        monto_gasto_extra = element.monto_gasto_extra,
        tipo = element.tipo;

    if (tipo === 'CAJA') {
      box.push({
        id_gasto_extra: id_gasto_extra,
        nombre: nombre,
        monto_gasto_extra: _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice(monto_gasto_extra, ',', '.')
      });
    }
  });
  return box;
};

var warehouses_data = function warehouses_data() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var envio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'directo';
  var wh_old = [];
  var wh_new = [];
  data.forEach(function (element) {
    if (element.total_seguro != '') {
      var total_seguro = parseNum(element.total_seguro);
      element.total_seguro = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice("".concat(total_seguro.toFixed(2)), ',', '.');
    }

    if (element.seguro != '') {
      var seguro = parseNum(element.seguro);
      element.seguro = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice("".concat(seguro.toFixed(2)), ',', '.');
    }

    if (envio == 'reempaque') {
      if (element.warehouse_padre == '' || element.warehouse_padre == null) {
        var almacen_ids = [];
        var warehouse_children = '';
        var wh_child = [];
        data.forEach(function (item) {
          if (element.id_factura_tracking == item.warehouse_padre) {
            var _id_almacen = generateRandomString(46);

            wh_old.push(_objectSpread(_objectSpread({}, item), {}, {
              id_almacen: _id_almacen
            }));
            almacen_ids.push(_id_almacen);
            wh_child.push(item.warehouse);
          }
        });

        for (var i = 0; i < wh_child.length; i++) {
          warehouse_children = warehouse_children + '' + "".concat(i !== wh_child.length - 1 ? wh_child[i] + ', ' : wh_child[i]);
        }

        var id_almacen = generateRandomString(46);
        wh_new.push(_objectSpread(_objectSpread({}, element), {}, {
          almacen_ids: almacen_ids,
          warehouse_children: warehouse_children,
          id_almacen: id_almacen
        }));
      }
    } else {
      wh_old.push(element);
    }
  });
  return {
    wh_old: wh_old,
    wh_new: wh_new
  };
}; //costo trackings y costo reempaque


var calc_costo_track_and_reempaque = function calc_costo_track_and_reempaque() {
  var extras = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'TRACKING';
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var costo = 0;
  extras.forEach(function (element) {
    var cant_cond = element.cant_cond,
        condicion = element.condicion,
        activo = element.activo,
        monto_cond = element.monto_cond,
        monto_gasto_extra = element.monto_gasto_extra,
        tipo_cond = element.tipo_cond,
        tipo = element.tipo;

    if (activo === 1 && tipo === type) {
      costo = parseNum(monto_gasto_extra);

      if (condicion === 1) {
        if (tipo_cond == 'MAYOR' && data.length > parseNum(cant_cond)) {
          costo = parseNum(monto_cond) * data.length;
        } else if (tipo_cond == 'MENOR' && data.length < parseNum(cant_cond)) {
          costo = parseNum(monto_cond) * data.length;
        }
      }
    }
  });

  if (type == 'TRACKING') {
    costo = costo * data.length;
  }

  return _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice("".concat(costo.toFixed(2)), ',', '.');
}; //funcion dataContents


var data_contents = function data_contents() {
  var wh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var type_envio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'aereo';
  var tarifa = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0.00';
  var envio = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'directo';
  var data = [];
  var costo_envio = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.desctPrice(tarifa, ',');
  costo_envio = parseNum(costo_envio);
  console.log("ver tipo de envio", envio, type_envio);
  wh.forEach(function (element) {
    var ft = 0,
        vol = 0,
        secure = 0,
        sub_total = 0,
        cost_env = 0,
        pieFt = 0;
    var pie_cubico = element.pie_cubico,
        volumen = element.volumen,
        seguro = element.seguro,
        warehouse = element.warehouse,
        peso = element.peso;
    ft = parseNum(pie_cubico);
    pieFt = parseNum(pie_cubico);
    vol = parseNum(volumen);
    secure = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.desctPrice(seguro, ',');
    secure = parseNum(secure);

    if (type_envio === 'maritimo') {
      if (envio == 'directo' && 1.67 > ft) {
        ft = 1.67;
        pieFt = 1.67;
      }

      cost_env = costo_envio * ft;
    }

    sub_total = cost_env + secure;
    cost_env = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice("".concat(cost_env.toFixed(2)), ',', '.');
    secure = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice("".concat(secure.toFixed(2)), ',', '.');
    sub_total = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice("".concat(sub_total.toFixed(2)), ',', '.');
    data.push({
      warehouse: warehouse,
      pie_cubico: pieFt,
      volumen: volumen,
      peso: peso,
      total_lb: '',
      cost_env: cost_env,
      seguro: secure,
      sub_total: sub_total
    });
  });
  return type_envio == 'aereo' && data.length > 0 ? calc_cost_env_aereo(data, envio, costo_envio) : data;
};

var calc_cost_env_aereo = function calc_cost_env_aereo() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var envio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'directo';
  var costo_envio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var vol = 0,
      peso = 0,
      total_lb = 0,
      cost_env = 0,
      sub_total = 0;
  data.forEach(function (element) {
    var volumen = parseNum(element.volumen);
    var weight = parseNum(element.peso);

    if (envio === 'directo') {
      if (volumen >= weight) {
        total_lb = total_lb + volumen;
      } else {
        total_lb = total_lb + weight;
      }
    } else {
      vol = vol + volumen;
      peso = peso + weight;
    }
  });

  if (envio === 'directo') {
    total_lb = total_lb <= 7.5 ? 7.5 : total_lb;
  } else {
    if (vol > peso && vol > 7.5) {
      total_lb = vol;
    } else if (peso > vol && peso > 7.5) {
      total_lb = peso;
    } else {
      total_lb = 7.5;
    }
  }

  cost_env = total_lb * costo_envio;
  sub_total = cost_env;
  cost_env = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice("".concat(cost_env.toFixed(2)), ',', '.');
  sub_total = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice("".concat(sub_total.toFixed(2)), ',', '.');
  data.push(_objectSpread(_objectSpread({}, dataContentAereo), {}, {
    total_lb: total_lb,
    cost_env: cost_env,
    sub_total: sub_total
  }));
  return data;
}; //calculo de total usd, de acuerdo a la data


var calc_total_usd_data = function calc_total_usd_data() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'sub_total';
  var total = 0;
  data.forEach(function (element) {
    for (var property in element) {
      if (property === field) {
        var sub_total = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.desctPrice(element[property], ',');
        sub_total = parseNum(sub_total);
        total = total + sub_total;
      }
    }
  });
  return _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice("".concat(total.toFixed(2)), ',', '.');
}; //suma de cualquier variable a la variable total USD


var suma_total_usd_var = function suma_total_usd_var(total, field) {
  var total_usd = 0;
  var usd = parseNum(_formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.desctPrice(total, ','));
  var varField = parseNum(_formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.desctPrice(field, ','));
  total_usd = usd + varField;
  return _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice("".concat(total_usd.toFixed(2)), ',', '.');
}; //calculo de total en VES


var calc_total_ves = function calc_total_ves(total, tasa) {
  var total_usd = parseNum(_formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.desctPrice(total, ','));
  var tasa_ves = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.desctPrice(tasa, '.');
  tasa_ves = tasa_ves.replace(',', '.');
  tasa_ves = parseNum(tasa_ves);
  var total_ves = total_usd * tasa_ves;
  total_ves = total_ves.toFixed(2);
  total_ves = total_ves.replace('.', ',');
  return _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice("".concat(total_ves), '.', ',');
}; //agregar caja a listCajas


var add_box = function add_box() {
  var listCajas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var id_gasto_extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var nombre = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var monto_gasto_extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '0.00';
  var cant_caja = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var monto = 0,
      cant = 0,
      sub_total = 0;
  monto = parseNum(_formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.desctPrice(monto_gasto_extra, ','));
  cant = parseNum(cant_caja);
  var check = listCajas.filter(function (caja) {
    return caja.id_gasto_extra == id_gasto_extra;
  });

  if (check.length == 0) {
    sub_total = cant * monto;
    sub_total = sub_total.toFixed(2);
    listCajas.push({
      id_gasto_extra: id_gasto_extra,
      nombre: nombre,
      monto_gasto_extra: monto_gasto_extra,
      cant: cant,
      sub_total: _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice("".concat(sub_total), ',', '.')
    });
  } else {
    for (var i = 0; i < listCajas.length; i++) {
      if (listCajas[i].id_gasto_extra == id_gasto_extra) {
        cant = cant + parseNum(listCajas[i].cant);
        sub_total = cant * monto;
        sub_total = sub_total.toFixed(2);
        listCajas[i].cant = cant;
        listCajas[i].sub_total = _formatPrice__WEBPACK_IMPORTED_MODULE_0__.formatPrice.constPrice("".concat(sub_total), ',', '.');
        break;
      }
    }
  }

  return listCajas;
}; //parseNum, es un numero entero o flotante


var parseNum = function parseNum(val) {
  return val % 1 == 0 ? parseInt(val) : parseFloat(val);
};

var generateRandomString = function generateRandomString(num) {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result1 = '';
  var charactersLength = characters.length;

  for (var i = 0; i < num; i++) {
    result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result1;
};



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CalculadoraEnvio.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CalculadoraEnvio.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.show{\n    display: block;\n    transition: opacity .3s ease;\n}\n.div-loader_white{\n    margin: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoaderComponent.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoaderComponent.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.container-preloader {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    visibility: visible;\r\n    transition: all .4s;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\n}\n.container-preloader.hidden{\r\n    -webkit-animation-duration: 1500ms;\r\n            animation-duration: 1500ms;\r\n    opacity: 0;\r\n    visibility: hidden;\n}\n.animsition-loading-1 {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\n}\n.preloader {\r\n    width: 56px;\r\n    height: 56px;\r\n    border: 4px solid #24298D;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    -webkit-animation: loader-scale 1s ease-out infinite;\r\n            animation: loader-scale 1s ease-out infinite;\r\n    top: 50%;\r\n    margin: -28px auto 0 auto;\n}\n@-webkit-keyframes loader-scale {\n0% {\r\n    transform: scale(0);\r\n    opacity: 0;\n}\n50% {\r\n    opacity: 1;\n}\n100% {\r\n    transform: scale(1);\r\n    opacity: 0;\n}\n}\n@keyframes loader-scale {\n0% {\r\n    transform: scale(0);\r\n    opacity: 0;\n}\n50% {\r\n    opacity: 1;\n}\n100% {\r\n    transform: scale(1);\r\n    opacity: 0;\n}\n}\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CalculadoraEnvio.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CalculadoraEnvio.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalculadoraEnvio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CalculadoraEnvio.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CalculadoraEnvio.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalculadoraEnvio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalculadoraEnvio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoaderComponent.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoaderComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoaderComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoaderComponent.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/CalculadoraEnvio.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/CalculadoraEnvio.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CalculadoraEnvio_vue_vue_type_template_id_eb42b662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalculadoraEnvio.vue?vue&type=template&id=eb42b662& */ "./resources/js/components/CalculadoraEnvio.vue?vue&type=template&id=eb42b662&");
/* harmony import */ var _CalculadoraEnvio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalculadoraEnvio.vue?vue&type=script&lang=js& */ "./resources/js/components/CalculadoraEnvio.vue?vue&type=script&lang=js&");
/* harmony import */ var _CalculadoraEnvio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalculadoraEnvio.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/CalculadoraEnvio.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CalculadoraEnvio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CalculadoraEnvio_vue_vue_type_template_id_eb42b662___WEBPACK_IMPORTED_MODULE_0__.render,
  _CalculadoraEnvio_vue_vue_type_template_id_eb42b662___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CalculadoraEnvio.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/LoaderComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/LoaderComponent.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoaderComponent_vue_vue_type_template_id_0ccf4ce2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoaderComponent.vue?vue&type=template&id=0ccf4ce2& */ "./resources/js/components/LoaderComponent.vue?vue&type=template&id=0ccf4ce2&");
/* harmony import */ var _LoaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoaderComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/LoaderComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _LoaderComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoaderComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/LoaderComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoaderComponent_vue_vue_type_template_id_0ccf4ce2___WEBPACK_IMPORTED_MODULE_0__.render,
  _LoaderComponent_vue_vue_type_template_id_0ccf4ce2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LoaderComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CalculadoraEnvio.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/CalculadoraEnvio.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalculadoraEnvio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CalculadoraEnvio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CalculadoraEnvio.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CalculadoraEnvio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/LoaderComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/LoaderComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoaderComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoaderComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CalculadoraEnvio.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/CalculadoraEnvio.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CalculadoraEnvio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CalculadoraEnvio.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CalculadoraEnvio.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/LoaderComponent.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/LoaderComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoaderComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoaderComponent.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/CalculadoraEnvio.vue?vue&type=template&id=eb42b662&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/CalculadoraEnvio.vue?vue&type=template&id=eb42b662& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalculadoraEnvio_vue_vue_type_template_id_eb42b662___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalculadoraEnvio_vue_vue_type_template_id_eb42b662___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalculadoraEnvio_vue_vue_type_template_id_eb42b662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CalculadoraEnvio.vue?vue&type=template&id=eb42b662& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CalculadoraEnvio.vue?vue&type=template&id=eb42b662&");


/***/ }),

/***/ "./resources/js/components/LoaderComponent.vue?vue&type=template&id=0ccf4ce2&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/LoaderComponent.vue?vue&type=template&id=0ccf4ce2& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderComponent_vue_vue_type_template_id_0ccf4ce2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderComponent_vue_vue_type_template_id_0ccf4ce2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderComponent_vue_vue_type_template_id_0ccf4ce2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoaderComponent.vue?vue&type=template&id=0ccf4ce2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoaderComponent.vue?vue&type=template&id=0ccf4ce2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CalculadoraEnvio.vue?vue&type=template&id=eb42b662&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CalculadoraEnvio.vue?vue&type=template&id=eb42b662& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "transition",
    { attrs: { name: "component-fade", mode: "out-in" } },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.show,
              expression: "show",
            },
          ],
          staticClass: "modal modal-blur fade",
          class: { show: _vm.show == true },
          attrs: {
            id: "modal-danger",
            tabindex: "-1",
            "aria-modal": "true",
            role: "dialog",
          },
        },
        [
          _c(
            "div",
            {
              staticClass: "modal-dialog modal-lg",
              attrs: { role: "document" },
            },
            [
              _c("div", { staticClass: "modal-content" }, [
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
                _c("div", { staticClass: "modal-header" }, [
                  _c("h5", { staticClass: "modal-title" }, [
                    _vm._v("Calculadora de Envío"),
                  ]),
                  _vm._v(" "),
                  _c("button", {
                    staticClass: "btn-close",
                    attrs: {
                      type: "button",
                      "data-bs-dismiss": "modal",
                      "aria-label": "Close",
                    },
                    on: { click: _vm.closeModal },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "mb-3" }, [
                    _c(
                      "div",
                      {
                        staticClass: "form-floating",
                        class: { "is-invalid": _vm.errors.first("estado") },
                      },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.estado_id,
                                expression: "estado_id",
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'",
                              },
                            ],
                            staticClass: "form-select",
                            attrs: {
                              id: "selectEstados",
                              name: "estado",
                              "data-vv-validate-on": "change",
                            },
                            on: {
                              change: function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.estado_id = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                            },
                          },
                          _vm._l(_vm.estados, function (item, index) {
                            return _c(
                              "option",
                              {
                                key: index,
                                domProps: { value: item.id_estado },
                              },
                              [_vm._v(_vm._s(item.estado))]
                            )
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "floatingSelect" } }, [
                          _vm._v("Selecciona el Destino"),
                        ]),
                        _vm._v(" "),
                        _vm.errors.has("estado")
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.first("estado"))),
                            ])
                          : _vm._e(),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-12" }, [
                      _c("div", { staticClass: "mb-3" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-floating",
                            class: {
                              "is-invalid": _vm.errors.first("tipo_envio"),
                            },
                          },
                          [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.tipo_envio,
                                    expression: "tipo_envio",
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'",
                                  },
                                ],
                                staticClass: "form-select",
                                attrs: {
                                  id: "selectEstados",
                                  name: "tipo_envio",
                                  "data-vv-validate-on": "change",
                                },
                                on: {
                                  change: function ($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call(
                                        $event.target.options,
                                        function (o) {
                                          return o.selected
                                        }
                                      )
                                      .map(function (o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.tipo_envio = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                },
                              },
                              [
                                _c("option", { attrs: { value: "aereo" } }, [
                                  _vm._v("Aéreo"),
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "maritimo" } }, [
                                  _vm._v("Maritimo"),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _c("label", { attrs: { for: "floatingSelect" } }, [
                              _vm._v("Selección de tipo de envío"),
                            ]),
                            _vm._v(" "),
                            _vm.errors.has("tipo_envio")
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("tipo_envio"))
                                  ),
                                ])
                              : _vm._e(),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-12" }, [
                      _c("div", { staticClass: "mb-3" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-floating",
                            class: {
                              "is-invalid": _vm.errors.first("reempaque"),
                            },
                          },
                          [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.reempaque,
                                    expression: "reempaque",
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'",
                                  },
                                ],
                                staticClass: "form-select",
                                attrs: {
                                  id: "reempaque",
                                  name: "reempaque",
                                  "data-vv-validate-on": "change",
                                },
                                on: {
                                  change: function ($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call(
                                        $event.target.options,
                                        function (o) {
                                          return o.selected
                                        }
                                      )
                                      .map(function (o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.reempaque = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                },
                              },
                              [
                                _c("option", { attrs: { value: "no" } }, [
                                  _vm._v("No"),
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "si" } }, [
                                  _vm._v("Si"),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _c("label", { attrs: { for: "reempaque" } }, [
                              _vm._v("Con Reempaque"),
                            ]),
                            _vm._v(" "),
                            _vm.errors.has("reempaque")
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(_vm._s(_vm.errors.first("reempaque"))),
                                ])
                              : _vm._e(),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row mb-4" }, [
                    _c("div", { staticClass: "col-lg-3 col-md-3 col-sm-12" }, [
                      _c("div", { staticClass: "form-floating mb-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.alto,
                              expression: "alto",
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|numeric",
                              expression: "'required|numeric'",
                            },
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.first("alto") },
                          attrs: {
                            type: "text",
                            id: "alto",
                            name: "alto",
                            "data-vv-validate-on": "change",
                          },
                          domProps: { value: _vm.alto },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.alto = $event.target.value
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "alto" } }, [
                          _vm._v("Alto"),
                        ]),
                        _vm._v(" "),
                        _vm.errors.has("alto")
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.first("alto"))),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-3 col-md-3 col-sm-12" }, [
                      _c("div", { staticClass: "form-floating mb-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.largo,
                              expression: "largo",
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|numeric",
                              expression: "'required|numeric'",
                            },
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.first("largo") },
                          attrs: {
                            type: "text",
                            id: "largo",
                            name: "largo",
                            "data-vv-validate-on": "change",
                          },
                          domProps: { value: _vm.largo },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.largo = $event.target.value
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "largo" } }, [
                          _vm._v("Largo"),
                        ]),
                        _vm._v(" "),
                        _vm.errors.has("largo")
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.first("largo"))),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-3 col-md-3 col-sm-12" }, [
                      _c("div", { staticClass: "form-floating mb-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.ancho,
                              expression: "ancho",
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|numeric",
                              expression: "'required|numeric'",
                            },
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.first("ancho") },
                          attrs: {
                            type: "text",
                            id: "ancho",
                            name: "ancho",
                            "data-vv-validate-on": "change",
                          },
                          domProps: { value: _vm.ancho },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.ancho = $event.target.value
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "ancho" } }, [
                          _vm._v("Ancho"),
                        ]),
                        _vm._v(" "),
                        _vm.errors.has("ancho")
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.first("ancho"))),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-3 col-md-3 col-sm-12" }, [
                      _c("div", { staticClass: "form-floating mb-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.peso,
                              expression: "peso",
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|regex:^[0-9]+([.][0-9]{2})?$",
                              expression:
                                "'required|regex:^[0-9]+([.][0-9]{2})?$'",
                            },
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.first("peso") },
                          attrs: {
                            type: "text",
                            id: "peso",
                            name: "peso",
                            "data-vv-validate-on": "change",
                          },
                          domProps: { value: _vm.peso },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.peso = $event.target.value
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "peso" } }, [
                          _vm._v("Peso"),
                        ]),
                        _vm._v(" "),
                        _vm.errors.has("peso")
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(_vm._s(_vm.errors.first("peso"))),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-status-bottom bg-success" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("h3", { staticClass: "card-title" }, [
                        _vm._v("Resultado"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.result.total != "",
                              expression: "result.total != ''",
                            },
                          ],
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "TARIFA DE ENVIÓ: " +
                                _vm._s(_vm.result.tarifa) +
                                " USD"
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("VOLUMEN: " + _vm._s(_vm.result.volumen)),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "PIE CUBICO: " + _vm._s(_vm.result.pie_cubico)
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "COSTO REEMPAQUE: " +
                                _vm._s(_vm.result.cost_reempaque) +
                                " USD"
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "COSTO X TRACKING: " +
                                _vm._s(_vm.result.cost_tracking) +
                                " USD"
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "TOTAL DE ENVIÓ: " +
                                _vm._s(_vm.result.total) +
                                " USD"
                            ),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn",
                      attrs: { type: "button", "data-bs-dismiss": "modal" },
                      on: { click: _vm.closeModal },
                    },
                    [
                      _vm._v(
                        "\r\n                        Cancelar\r\n                    "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary ms-auto",
                      attrs: { type: "button", "data-bs-dismiss": "modal" },
                      on: { click: _vm.calcular },
                    },
                    [
                      _vm._v(
                        "\r\n                        Calcular\r\n                    "
                      ),
                    ]
                  ),
                ]),
              ]),
            ]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoaderComponent.vue?vue&type=template&id=0ccf4ce2&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoaderComponent.vue?vue&type=template&id=0ccf4ce2& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-preloader" }, [
      _c("div", { staticClass: "animsition-loading-1" }, [
        _c("div", { staticClass: "preloader" }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);