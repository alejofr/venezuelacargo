"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["LayoutFormFacturar"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/ContentBody.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/ContentBody.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ContentBody',
  props: ['dataContent']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/ListCajas.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/ListCajas.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ListCajas',
  props: ['listCajas', 'type_form'],
  methods: {
    delete_box: function delete_box(e) {
      var value = e.target.parentNode.value;
      var newExtrasCajas = [];

      for (var i = 0; i < this.listCajas.length; i++) {
        if (this.listCajas[i].id_gasto_extra != value) {
          newExtrasCajas.push(this.listCajas[i]);
        }
      }

      this.$emit('removeCaja', newExtrasCajas);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/WareHouses.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/WareHouses.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formatPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../formatPrice */ "./resources/js/formatPrice.js");
/* harmony import */ var _helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/calcInvoice */ "./resources/js/helpers/calcInvoice.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'WareHouse',
  props: ['warehouses', 'envio', 'whNew', 'type_form'],
  data: function data() {
    return {
      warehousesNew: [],
      getId: [],
      dato: {
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
        seguro: ''
      },
      show: false
    };
  },
  beforeCreate: function beforeCreate() {
    this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.warehousesNew = _toConsumableArray(this.whNew);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
  },
  methods: {
    hiddenModal: function hiddenModal() {
      this.show = false;
    },
    reempaque: function reempaque() {
      if (this.getId.length === 0) {
        alert('Error, debe seleccionar el o los WareHouse a reempacar');
        return;
      }

      if (this.checkIdAlmacen()) {
        alert('Error, ya existe un warehouse, agregado a el rempaque');
        return;
      }

      this.show = true;
    },
    saveData: function saveData() {
      var _this = this;

      this.$validator.validate().then(function (valid) {
        if (valid) {
          _this.dato.almacen_ids = _this.getId;
          _this.dato.id_almacen = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_2__.generateRandomString)(46);
          var wh = _this.warehouses;
          var ids = _this.getId;
          var total_seguro = 0;
          wh.forEach(function (element) {
            var totalseguro = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_2__.parseNum)(_formatPrice__WEBPACK_IMPORTED_MODULE_1__.formatPrice.desctPrice(element.total_seguro, ','));

            for (var i = 0; i < ids.length; i++) {
              if (ids[i] === element.id_almacen) {
                total_seguro = total_seguro + totalseguro;
                _this.dato.warehouse_children = _this.dato.warehouse_children + '' + "".concat(i !== ids.length - 1 ? ', ' + element.warehouse : element.warehouse);
              }
            }
          });
          var seguro = total_seguro * 10 / 100;
          _this.dato.total_seguro = _formatPrice__WEBPACK_IMPORTED_MODULE_1__.formatPrice.constPrice("".concat(total_seguro.toFixed(2)), ',', '.');
          _this.dato.seguro = _formatPrice__WEBPACK_IMPORTED_MODULE_1__.formatPrice.constPrice("".concat(seguro.toFixed(2)), ',', '.');
          var volumen = 0;
          var pie_cubico = 0;
          var _this$dato = _this.dato,
              alto = _this$dato.alto,
              ancho = _this$dato.ancho,
              largo = _this$dato.largo;
          volumen = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_2__.parseNum)(alto) * (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_2__.parseNum)(ancho) * (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_2__.parseNum)(largo) / 166;
          pie_cubico = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_2__.parseNum)(alto) * (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_2__.parseNum)(ancho) * (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_2__.parseNum)(largo) / 1728;

          if (volumen < 7.5) {
            volumen = 7.5;
          }

          if (pie_cubico < 1.67) {
            pie_cubico = 1.67;
          }

          _this.dato.volumen = volumen.toFixed(2);
          _this.dato.pie_cubico = pie_cubico.toFixed(2);

          _this.warehousesNew.push(_this.dato);

          _this.show = false;
          _this.getId = [];
          _this.dato = {
            id_almacen: '',
            almacen_ids: [],
            warehouse: '',
            warehouse_children: '',
            ancho: '',
            alto: '',
            largo: '',
            peso: '',
            total_seguro: '',
            seguro: ''
          };

          _this.$emit('add_new_wh', _this.warehousesNew);
        }
      });
    },
    delete_wh: function delete_wh(e) {
      var value = e.target.parentNode.value;
      var warehouseNew = [];
      this.warehousesNew.forEach(function (element) {
        if (element.id_almacen !== value) {
          warehouseNew.push(element);
        }
      });
      this.warehousesNew = warehouseNew;
      this.$emit('add_new_wh', this.warehousesNew);
    },
    checkIdAlmacen: function checkIdAlmacen() {
      var data = this.getId;
      var wh = this.warehousesNew;
      var bol = false;

      var _loop = function _loop(i) {
        wh.forEach(function (element) {
          for (var j = 0; j < element.almacen_ids.length; j++) {
            if (element.almacen_ids[j] === data[i]) {
              bol = true;
              break;
            }
          }
        });
      };

      for (var i = 0; i < data.length; i++) {
        _loop(i);
      }

      return bol;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_facturas_WareHouses_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/facturas/WareHouses.vue */ "./resources/js/components/facturas/WareHouses.vue");
/* harmony import */ var _components_facturas_ContentBody_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/facturas/ContentBody.vue */ "./resources/js/components/facturas/ContentBody.vue");
/* harmony import */ var _components_facturas_ListCajas_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/facturas/ListCajas.vue */ "./resources/js/components/facturas/ListCajas.vue");
/* harmony import */ var _components_BtnVolver_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/BtnVolver.vue */ "./resources/js/components/BtnVolver.vue");
/* harmony import */ var _helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/calcInvoice */ "./resources/js/helpers/calcInvoice.js");
/* harmony import */ var _formatPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../formatPrice */ "./resources/js/formatPrice.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//componentes de primer plano, para factura



 //componentes de segundo plano

var AlertMessageComponent = function AlertMessageComponent() {
  return __webpack_require__.e(/*! import() */ "AlertMessageComponent").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/AlertMessageComponent.vue */ "./resources/js/components/AlertMessageComponent.vue"));
};

var LoaderComponent = function LoaderComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoaderComponent_vue-_c2861").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/LoaderComponent.vue */ "./resources/js/components/LoaderComponent.vue"));
};

var Error404 = function Error404() {
  return __webpack_require__.e(/*! import() */ "Error404").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/Error404Component.vue */ "./resources/js/components/Error404Component.vue"));
}; //helpers




var save_reempaque = 'save-invoice-reempaque';
var save_directo = 'save-invoice-directo';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'LayoutFormFacturar',
  data: function data() {
    return {
      envio: '',
      // factura con envios sin reempaques ( directos ) || o con envios con reempaque ( reempaque )
      type_form: 'new',
      //tipo de form, new es crear factura, edit es editar factura y  show es ver factura,
      componentRender: LoaderComponent,
      //detalles para la factura
      details: {
        id_factura: '',
        tarifa: '0.00',
        fecha_factura: '',
        nro_factura: '',
        tipo_envio: '',
        monto_tc: '0,00',
        nro_container: '',
        fecha_tc: ''
      },
      //informacion del cliente
      client: {},
      //Datos de WareHouse
      warehouses: [],
      //data contents, de la factura
      dataContent: [],
      //cajas
      cajas: [],
      //propiedades para la seccion de imagenes
      caja: '',
      cant_caja: 1,
      //cajas utilizadas en la factura
      list_cajas: [],
      //footer content, total usd, total ves, total reempaque, total costo por tracking
      total_usd: '0.00',
      total_ves: '0,00',
      costo_trackings: '0.00',
      costo_reempaque: '0.00',
      gastos_extras: '0.00',
      //new wh para reempaque
      warehousesNew: [],
      //mostrar confirmar factura
      show: false,
      loaderCard: false,
      activeComponent: '',
      alert: {
        msg: '',
        clss: ''
      }
    };
  },
  components: {
    WareHouses: _components_facturas_WareHouses_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ContentBody: _components_facturas_ContentBody_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ListCajas: _components_facturas_ListCajas_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    BtnVolver: _components_BtnVolver_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    loader: LoaderComponent
  },
  beforeCreate: function beforeCreate() {
    this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var query, url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = this.$route.query;

              if (!(Object.keys(query).length === 0 || Object.keys(query).length !== 0 && (!query.hasOwnProperty('id') || !query.hasOwnProperty('envio') || !query.hasOwnProperty('type')) || Object.keys(query).length !== 0 && query.hasOwnProperty('type') && query.type != 'new' && query.type != 'edit' && query.type != 'show' || Object.keys(query).length !== 0 && query.hasOwnProperty('envio') && query.envio != 'no' && query.envio != 'si' || Object.keys(query).length !== 0 && query.hasOwnProperty('id') && Array.isArray(query.id) && query.hasOwnProperty('type') && (query.type == 'edit' || query.type == 'show'))) {
                _context.next = 4;
                break;
              }

              this.componentRender = Error404;
              return _context.abrupt("return");

            case 4:
              this.envio = query.envio == 'no' ? 'directo' : 'reempaque';
              this.type_form = query.type;
              url = query.type == 'show' ? "facturas/".concat(query.id) : query.type == 'edit' ? "facturas/".concat(query.id, "/edit") : 'almacen/paquetes/data';
              this.get_axios(query, url);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
  },
  methods: {
    //obtener data de wh a facturar o datos de la factura
    get_axios: function get_axios(dataReq, url) {
      var _this = this;

      this.axios.get(url, {
        params: dataReq
      }).then(function (response) {
        console.log('response.data.result', response.data);

        if (response.data.result == null) {
          _this.componentRender = Error404;
          return;
        }

        if (_this.type_form == 'new') {
          var tarifa_aereo = '0.00';
          var tarifa_maritimo = '0.00';
          var _response$data$result = response.data.result,
              almacen = _response$data$result.almacen,
              cliente = _response$data$result.cliente,
              extras = _response$data$result.extras,
              tasaDolar = _response$data$result.tasaDolar;

          var _create_factura = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.create_factura)(almacen, extras, tasaDolar),
              wh = _create_factura.wh,
              details = _create_factura.details,
              costo_trackings = _create_factura.costo_trackings,
              costo_reempaque = _create_factura.costo_reempaque; //tarifas de envios


          tarifa_aereo = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.constPrice(cliente.tarifa_aereo, ',', '.');
          tarifa_maritimo = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.constPrice(cliente.tarifa_maritimo, ',', '.'); //agregamos esta informacion en la cabecera.

          _this.details = details;
          _this.details.tarifa = details.tipo_envio == 'aereo' ? tarifa_aereo : tarifa_maritimo;
          _this.details.monto_tc = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.constPrice(tasaDolar.monto_tc, '.', ',');
          _this.details.fecha_tc = tasaDolar.fecha_tc;
          _this.client = cliente; //agregar warehouses

          _this.warehouses = wh; //agregamos las cajas

          _this.cajas = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.cajas)(extras); //agregar data content de la factura

          if (_this.envio === 'directo') _this.dataContent = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.data_contents)(wh, details.tipo_envio, _this.details.tarifa, _this.envio); //agregando costo por trackings

          _this.costo_trackings = costo_trackings; //agregar total en USD

          _this.total_usd = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.calc_total_usd_data)(_this.dataContent, 'sub_total');
          _this.total_usd = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.suma_total_usd_var)(_this.total_usd, _this.costo_trackings); //sumar costo trackings + total_usd;

          if (_this.envio === 'reempaque') {
            _this.costo_reempaque = costo_reempaque; //sumando costo reempaque + total_usd;

            _this.total_usd = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.suma_total_usd_var)(_this.total_usd, _this.costo_reempaque);
          } //agregar total VES


          _this.total_ves = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.calc_total_ves)(_this.total_usd, _this.details.monto_tc);
        } else if (_this.type_form == 'edit' || _this.type_form == 'show') {
          var _response$data$result2 = response.data.result,
              id_factura = _response$data$result2.id_factura,
              _cliente = _response$data$result2.cliente,
              tarifa_envio = _response$data$result2.tarifa_envio,
              total_usd = _response$data$result2.total_usd,
              tipo_envio = _response$data$result2.tipo_envio,
              nro_factura = _response$data$result2.nro_factura,
              nro_container = _response$data$result2.nro_container,
              warehouses = _response$data$result2.warehouses,
              pago = _response$data$result2.pago,
              _extras = _response$data$result2.extras,
              cost_x_tracking = _response$data$result2.cost_x_tracking,
              cost_reempaque = _response$data$result2.cost_reempaque,
              gastos_extras = _response$data$result2.gastos_extras;
          var _response$data$tasa = response.data.tasa,
              monto_tc = _response$data$tasa.monto_tc,
              fecha_tc = _response$data$tasa.fecha_tc; //agregamos esta informacion en la cabecera.

          _this.details.tipo_envio = tipo_envio;
          _this.details.tarifa = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.constPrice(tarifa_envio, ',', '.');
          _this.details.nro_factura = nro_factura;
          _this.details.nro_container = nro_container;
          _this.details.monto_tc = pago.length > 0 ? response.data.result.monto_tc : monto_tc;
          _this.details.fecha_tc = pago.length > 0 ? response.data.result.fecha_tc : fecha_tc;
          _this.details.id_factura = id_factura;
          _this.client = _cliente;

          var _warehouses_data = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.warehouses_data)(warehouses, _this.envio),
              wh_old = _warehouses_data.wh_old,
              wh_new = _warehouses_data.wh_new;

          console.log(wh_old, wh_new); //agregar warehouses

          _this.warehouses = wh_old; //agregar data content de la factura

          if (_this.envio === 'directo') {
            _this.dataContent = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.data_contents)(wh_old, _this.details.tipo_envio, _this.details.tarifa, _this.envio);
          } else {
            _this.dataContent = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.data_contents)(wh_new, _this.details.tipo_envio, _this.details.tarifa, _this.envio);
            _this.warehousesNew = wh_new;
          } //agregamos las cajas


          _this.cajas = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.cajas)(response.data.extras); //agregar cajas extras

          _extras.forEach(function (element) {
            var _element$detalles = element.detalles,
                cant = _element$detalles.cant,
                id_gasto_extra = _element$detalles.id_gasto_extra,
                monto_gasto_extra = _element$detalles.monto_gasto_extra,
                nombre = _element$detalles.nombre;
            _this.list_cajas = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.add_box)(_this.list_cajas, id_gasto_extra, nombre, monto_gasto_extra, cant);
          }); //agregando costo por trackings


          _this.costo_trackings = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.constPrice(cost_x_tracking, ',', '.');

          if (_this.envio === 'reempaque') {
            _this.costo_reempaque = cost_reempaque;
          } //agregar gastos extras


          _this.gastos_extras = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.constPrice(gastos_extras, ',', '.'); //agregar total en USD

          _this.total_usd = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.constPrice(total_usd, ',', '.'); //agregar total VES

          _this.total_ves = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.calc_total_ves)(_this.total_usd, _this.details.monto_tc);
        }

        setTimeout(function () {
          _this.componentRender = '';
        }, 1000);
      })["catch"](function (error) {
        console.log(error.response.data);
        _this.componentRender = Error404;
      });
    },
    //agregar caja
    addCaja: function addCaja() {
      var _this2 = this;

      if (!isNaN(this.cant_caja) && this.cant_caja % 1 == 0 && this.cant_caja > 0) {
        if (this.caja != '') {
          var _this$cajas$filter$ = this.cajas.filter(function (caja) {
            return caja.id_gasto_extra == _this2.caja;
          })[0],
              id_gasto_extra = _this$cajas$filter$.id_gasto_extra,
              nombre = _this$cajas$filter$.nombre,
              monto_gasto_extra = _this$cajas$filter$.monto_gasto_extra;
          this.list_cajas = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.add_box)(this.list_cajas, id_gasto_extra, nombre, monto_gasto_extra, this.cant_caja);
          this.calculo_totales();
        } else {
          alert('Debe Seleccionar un tipo de caja');
        }
      } else {
        alert('Por favor debe agregar una cantidad, solo numeros enteros y mayor a cero');
      }
    },
    //eliminar caja, de la lista cajas
    removeCaja: function removeCaja() {
      var cajasNew = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.list_cajas = cajasNew;
      this.calculo_totales();
    },
    //funcion para construccion de precion USD
    keyUpPrecio: function keyUpPrecio(e) {
      if (e.target.name !== 'tarifa') {
        this[e.target.name] = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.constPrice(e.target.value, ',', '.');
      } else {
        this.details[e.target.name] = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.constPrice(e.target.value, ',', '.');
      }
    },
    //ejecutar funcion de calcular todo
    changePrecio: function changePrecio(e) {
      this.calculo_totales();
    },
    //ejecutar cambio de tarifa en el dataContent
    changePrecioTarifa: function changePrecioTarifa() {
      var wh = this.envio == 'directo' ? this.warehouses : this.warehousesNew;
      this.dataContent = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.data_contents)(wh, this.details.tipo_envio, this.details.tarifa, this.envio);
      this.calculo_totales();
    },
    //calculo totales se refiere a la suma de todo los subtotal, costo tracking, reempaque y gastos extras.
    calculo_totales: function calculo_totales() {
      this.total_usd = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.calc_total_usd_data)(this.dataContent, 'sub_total');
      this.total_usd = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.suma_total_usd_var)(this.total_usd, this.costo_trackings); //sumar costo trackings + total_usd;

      if (this.envio === 'reempaque') {
        this.total_usd = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.suma_total_usd_var)(this.total_usd, this.costo_reempaque);
      }

      if (this.list_cajas.length > 0) {
        var total = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.calc_total_usd_data)(this.list_cajas, 'sub_total');
        this.total_usd = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.suma_total_usd_var)(this.total_usd, total);
      }

      if (this.gastos_extras !== '0.00') {
        this.total_usd = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.suma_total_usd_var)(this.total_usd, this.gastos_extras);
      }

      this.total_ves = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.calc_total_ves)(this.total_usd, this.details.monto_tc);
    },
    //agregar nuevos wh, esta funcion funciona para facturas con reempaque
    add_new_wh: function add_new_wh() {
      var dataNew = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.warehousesNew = dataNew;
      this.dataContent = (0,_helpers_calcInvoice__WEBPACK_IMPORTED_MODULE_5__.data_contents)(this.warehousesNew, this.details.tipo_envio, this.details.tarifa, this.envio);
      this.calculo_totales();
    },
    //abrir modal confirmar contraseña, y tambien valida antes de abrirlo
    confirmInvoice: function confirmInvoice() {
      if (this.dataContent.length === 0) {
        alert('Error, se debe facturar, y no se puede enviar vacio');
        return;
      }

      if (this.details.tarifa === '0.00' || this.details.tarifa === '') {
        alert('Error, tarifa,  no debe ir en cero o vacio');
        return;
      }

      if (this.details.tarifa === '0.00' || this.details.tarifa === '' || this.details.tarifa == '0') {
        alert('Error, tarifa,  no debe ir en cero o vacio');
        return;
      }

      if (this.details.nro_factura === '0.00' || this.details.nro_container === '') {
        alert('Error, tarifa,  el numero de factura y numero de container es requerido');
        return;
      }

      this.show = true;
    },
    hiddenModal: function hiddenModal() {
      this.show = false;
    },
    //switch para post o put
    sendFactura: function sendFactura() {
      this.show = false;
      this.loaderCard = true;
      var url = this.envio === 'reempaque' ? save_reempaque : save_directo;
      this.post_axios(url);
    },
    post_axios: function post_axios(url) {
      var _this3 = this;

      var warehouses = [];
      var warehouses_new = [];
      var extras_cajas = [];
      var data_content = [];
      var total_usd = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.desctPrice(this.total_usd, ',');
      var total_ves = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.desctPrice(this.total_ves, '.');
      var total_gastos_extras = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.desctPrice(this.gastos_extras, ',');
      var cost_reempaque = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.desctPrice(this.costo_reempaque, ',');
      var cost_x_tracking = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.desctPrice(this.costo_trackings, ',');

      for (var i = 0; i < this.warehouses.length; i++) {
        var wh = _objectSpread({}, this.warehouses[i]);

        wh.total_seguro = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.desctPrice(wh.total_seguro, ',');
        wh.seguro = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.desctPrice(wh.seguro, ',');
        warehouses.push(wh);
      }

      for (var _i = 0; _i < this.warehousesNew.length; _i++) {
        var _wh = _objectSpread({}, this.warehousesNew[_i]);

        _wh.total_seguro = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.desctPrice(_wh.total_seguro, ',');
        _wh.seguro = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.desctPrice(_wh.seguro, ',');
        warehouses_new.push(_wh);
      }

      for (var _i2 = 0; _i2 < this.dataContent.length; _i2++) {
        var data = _objectSpread({}, this.dataContent[_i2]);

        data.sub_total = data.sub_total != '' ? _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.desctPrice(data.sub_total, ',') : '';
        data.seguro = data.seguro != '' ? _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.desctPrice(data.seguro, ',') : '';
        data.cost_env = data.cost_env != '' ? _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.desctPrice(data.cost_env, ',') : '';
        data_content.push(data);
      }

      for (var _i3 = 0; _i3 < this.list_cajas.length; _i3++) {
        var caja = _objectSpread({}, this.list_cajas[_i3]);

        caja.sub_total = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.desctPrice(caja.sub_total, ',');
        caja.monto_gasto_extra = _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.desctPrice(caja.monto_gasto_extra, ',');
        extras_cajas.push(caja);
      }

      var formData = {
        id_factura: this.details.id_factura,
        nro_factura: this.details.nro_factura,
        nro_container: this.details.nro_container,
        tipo_envio: this.details.tipo_envio,
        tarifa_envio: _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.desctPrice(this.details.tarifa, ','),
        usuario_id: this.client.usuario_id,
        cliente: this.client,
        warehouses: warehouses,
        warehouses_new: warehouses_new,
        data_content: data_content,
        extras_cajas: extras_cajas,
        total_usd: total_usd,
        total_ves: total_ves,
        monto_tc: _formatPrice__WEBPACK_IMPORTED_MODULE_6__.formatPrice.desctPrice(this.details.monto_tc, '.'),
        fecha_tc: this.details.fecha_tc,
        total_gastos_extras: total_gastos_extras,
        cost_reempaque: cost_reempaque,
        cost_x_tracking: cost_x_tracking,
        metodo: this.type_form == 'new' ? 'store' : 'updated'
      };
      console.log(formData);
      this.alert = {};
      this.activeComponent = '';
      this.axios.post(url, formData).then(function (response) {
        _this3.alert = {
          msg: response.data.message,
          clss: 'updated'
        };
        _this3.activeComponent = AlertMessageComponent;
        setTimeout(function () {
          _this3.$router.go(-1);
        }, 4000);
        console.log(response.data);
        setTimeout(function () {
          _this3.loaderCard = false;
        }, 2000);
      })["catch"](function (error) {
        _this3.alert = {
          msg: error.response.data.message,
          clss: 'error'
        };
        console.log(error.response.data);
        _this3.activeComponent = AlertMessageComponent;
        setTimeout(function () {
          _this3.loaderCard = false;
        }, 2000);
      });
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/WareHouses.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/WareHouses.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.modal.show{\n    display: block;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.modal.show{\n    display: block;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/WareHouses.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/WareHouses.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WareHouses_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WareHouses.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/WareHouses.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WareHouses_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WareHouses_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFormFacturar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LayoutFormFacturar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFormFacturar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFormFacturar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/facturas/ContentBody.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/facturas/ContentBody.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContentBody_vue_vue_type_template_id_eff48a5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentBody.vue?vue&type=template&id=eff48a5c& */ "./resources/js/components/facturas/ContentBody.vue?vue&type=template&id=eff48a5c&");
/* harmony import */ var _ContentBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentBody.vue?vue&type=script&lang=js& */ "./resources/js/components/facturas/ContentBody.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContentBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContentBody_vue_vue_type_template_id_eff48a5c___WEBPACK_IMPORTED_MODULE_0__.render,
  _ContentBody_vue_vue_type_template_id_eff48a5c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/facturas/ContentBody.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/facturas/ListCajas.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/facturas/ListCajas.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCajas_vue_vue_type_template_id_47db3d52_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListCajas.vue?vue&type=template&id=47db3d52&scoped=true& */ "./resources/js/components/facturas/ListCajas.vue?vue&type=template&id=47db3d52&scoped=true&");
/* harmony import */ var _ListCajas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListCajas.vue?vue&type=script&lang=js& */ "./resources/js/components/facturas/ListCajas.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListCajas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListCajas_vue_vue_type_template_id_47db3d52_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ListCajas_vue_vue_type_template_id_47db3d52_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "47db3d52",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/facturas/ListCajas.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/facturas/WareHouses.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/facturas/WareHouses.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WareHouses_vue_vue_type_template_id_216348e9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WareHouses.vue?vue&type=template&id=216348e9& */ "./resources/js/components/facturas/WareHouses.vue?vue&type=template&id=216348e9&");
/* harmony import */ var _WareHouses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WareHouses.vue?vue&type=script&lang=js& */ "./resources/js/components/facturas/WareHouses.vue?vue&type=script&lang=js&");
/* harmony import */ var _WareHouses_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WareHouses.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/facturas/WareHouses.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WareHouses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WareHouses_vue_vue_type_template_id_216348e9___WEBPACK_IMPORTED_MODULE_0__.render,
  _WareHouses_vue_vue_type_template_id_216348e9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/facturas/WareHouses.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/facturas/LayoutFormFacturar.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/admin/facturas/LayoutFormFacturar.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LayoutFormFacturar_vue_vue_type_template_id_68f1062d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutFormFacturar.vue?vue&type=template&id=68f1062d& */ "./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=template&id=68f1062d&");
/* harmony import */ var _LayoutFormFacturar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutFormFacturar.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=script&lang=js&");
/* harmony import */ var _LayoutFormFacturar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayoutFormFacturar.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LayoutFormFacturar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutFormFacturar_vue_vue_type_template_id_68f1062d___WEBPACK_IMPORTED_MODULE_0__.render,
  _LayoutFormFacturar_vue_vue_type_template_id_68f1062d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/facturas/LayoutFormFacturar.vue"
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

/***/ "./resources/js/components/facturas/ContentBody.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/facturas/ContentBody.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContentBody.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/ContentBody.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/facturas/ListCajas.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/facturas/ListCajas.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCajas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListCajas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/ListCajas.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCajas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/facturas/WareHouses.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/facturas/WareHouses.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WareHouses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WareHouses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/WareHouses.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WareHouses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFormFacturar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LayoutFormFacturar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFormFacturar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/facturas/WareHouses.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/facturas/WareHouses.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WareHouses_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WareHouses.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/WareHouses.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFormFacturar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LayoutFormFacturar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=style&index=0&lang=css&");


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

/***/ "./resources/js/components/facturas/ContentBody.vue?vue&type=template&id=eff48a5c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/facturas/ContentBody.vue?vue&type=template&id=eff48a5c& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBody_vue_vue_type_template_id_eff48a5c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBody_vue_vue_type_template_id_eff48a5c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBody_vue_vue_type_template_id_eff48a5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContentBody.vue?vue&type=template&id=eff48a5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/ContentBody.vue?vue&type=template&id=eff48a5c&");


/***/ }),

/***/ "./resources/js/components/facturas/ListCajas.vue?vue&type=template&id=47db3d52&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/facturas/ListCajas.vue?vue&type=template&id=47db3d52&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCajas_vue_vue_type_template_id_47db3d52_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCajas_vue_vue_type_template_id_47db3d52_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCajas_vue_vue_type_template_id_47db3d52_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListCajas.vue?vue&type=template&id=47db3d52&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/ListCajas.vue?vue&type=template&id=47db3d52&scoped=true&");


/***/ }),

/***/ "./resources/js/components/facturas/WareHouses.vue?vue&type=template&id=216348e9&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/facturas/WareHouses.vue?vue&type=template&id=216348e9& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WareHouses_vue_vue_type_template_id_216348e9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WareHouses_vue_vue_type_template_id_216348e9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WareHouses_vue_vue_type_template_id_216348e9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WareHouses.vue?vue&type=template&id=216348e9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/WareHouses.vue?vue&type=template&id=216348e9&");


/***/ }),

/***/ "./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=template&id=68f1062d&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=template&id=68f1062d& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFormFacturar_vue_vue_type_template_id_68f1062d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFormFacturar_vue_vue_type_template_id_68f1062d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutFormFacturar_vue_vue_type_template_id_68f1062d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LayoutFormFacturar.vue?vue&type=template&id=68f1062d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=template&id=68f1062d&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/ContentBody.vue?vue&type=template&id=eff48a5c&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/ContentBody.vue?vue&type=template&id=eff48a5c& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "mb-3 table-responsive" }, [
    _c("table", { staticClass: "table table-transparent table-responsive" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.dataContent, function (item, index) {
          return _c("tr", { key: index }, [
            _c("td", [_vm._v(_vm._s(item.warehouse))]),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }, [
              _vm._v(_vm._s(item.volumen)),
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }, [
              _vm._v(_vm._s(item.peso)),
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }, [
              _vm._v(_vm._s(item.pie_cubico)),
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }, [
              _vm._v(_vm._s(item.total_lb)),
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }, [
              _vm._v(_vm._s(item.cost_env)),
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }, [
              _vm._v(_vm._s(item.seguro)),
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "text-end" }, [
              _vm._v(" " + _vm._s(item.sub_total) + " "),
            ]),
          ])
        }),
        0
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "20%" } }, [_vm._v("Nro. WareHouse")]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "10%" } },
          [_vm._v("Volumen")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "10%" } },
          [_vm._v("Peso")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "10%" } },
          [_vm._v("Pie Cubico")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "10%" } },
          [_vm._v("TOTAL LB/VOL")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "10%" } },
          [_vm._v("Costo Env.")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "10%" } },
          [_vm._v("Seguro")]
        ),
        _vm._v(" "),
        _c("th", { staticClass: "text-end", staticStyle: { width: "20%" } }, [
          _vm._v("Sub Total"),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/ListCajas.vue?vue&type=template&id=47db3d52&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/ListCajas.vue?vue&type=template&id=47db3d52&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "table-responsive" }, [
    _c("table", { staticClass: "table table-transparent table-responsive" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.listCajas, function (item, index) {
          return _c("tr", { key: index }, [
            _c("td", [
              _vm.type_form != "show"
                ? _c(
                    "button",
                    {
                      directives: [{ name: "title", rawName: "v-title" }],
                      staticClass: "btn-acticon_spalert",
                      attrs: {
                        type: "button",
                        value: item.id_gasto_extra,
                        title: "Elimnar Caja",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.delete_box($event)
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "ti ti-trash",
                        staticStyle: { "font-size": "21px" },
                      }),
                    ]
                  )
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }, [
              _vm._v(_vm._s(item.nombre)),
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }, [
              _vm._v(_vm._s(item.monto_gasto_extra)),
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }, [
              _vm._v(_vm._s(item.cant)),
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }),
            _vm._v(" "),
            _c("td", { staticClass: "text-center" }),
            _vm._v(" "),
            _c("td", { staticClass: "text-end" }, [
              _vm._v(" " + _vm._s(item.sub_total) + " "),
            ]),
          ])
        }),
        0
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "5%" } }),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "25%" } },
          [_vm._v("Tipo de caja")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "10%" } },
          [_vm._v("Costo")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "10%" } },
          [_vm._v("Cantidad")]
        ),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", staticStyle: { width: "10%" } }),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", staticStyle: { width: "10%" } }),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", staticStyle: { width: "10%" } }),
        _vm._v(" "),
        _c("th", { staticClass: "text-end", staticStyle: { width: "20%" } }, [
          _vm._v("Sub Total"),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/WareHouses.vue?vue&type=template&id=216348e9&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/facturas/WareHouses.vue?vue&type=template&id=216348e9& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "mb-4 table-responsive" }, [
    _vm.envio === "reempaque" && _vm.type_form != "show"
      ? _c("div", { staticClass: "d-flex align-items-center mb-3" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-info ms-auto",
              attrs: { type: "button" },
              on: { click: _vm.reempaque },
            },
            [_c("span", [_vm._v("Reempacar")])]
          ),
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "table",
      { staticClass: "table table-transparent table-responsive mb-3" },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.warehouses, function (item, index) {
            return _c("tr", { key: index }, [
              _c("td", [
                _vm.envio === "reempaque" && _vm.type_form != "show"
                  ? _c("span", {}, [
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
                        staticStyle: {
                          border: "1px solid #b9b9b9",
                          cursor: "pointer",
                        },
                        attrs: {
                          type: "checkbox",
                          name: "id",
                          "aria-label": "Select invoice",
                        },
                        domProps: {
                          value: item.id_almacen,
                          checked: Array.isArray(_vm.getId)
                            ? _vm._i(_vm.getId, item.id_almacen) > -1
                            : _vm.getId,
                        },
                        on: {
                          change: function ($event) {
                            var $$a = _vm.getId,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = item.id_almacen,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 && (_vm.getId = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (_vm.getId = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.getId = $$c
                            }
                          },
                        },
                      }),
                    ])
                  : _vm._e(),
              ]),
              _vm._v(" "),
              _c("td", [_c("span", {}, [_vm._v(_vm._s(item.warehouse))])]),
              _vm._v(" "),
              _c("td", [_c("span", {}, [_vm._v(_vm._s(item.tracking))])]),
              _vm._v(" "),
              _c("td", [_c("span", {}, [_vm._v(_vm._s(item.descripcion))])]),
              _vm._v(" "),
              _c("td", [_c("span", {}, [_vm._v(_vm._s(item.alto))])]),
              _vm._v(" "),
              _c("td", [_c("span", {}, [_vm._v(_vm._s(item.ancho))])]),
              _vm._v(" "),
              _c("td", [_c("span", {}, [_vm._v(_vm._s(item.largo))])]),
              _vm._v(" "),
              _c("td", [_c("span", {}, [_vm._v(_vm._s(item.peso))])]),
              _vm._v(" "),
              _c("td", [_c("span", {}, [_vm._v(_vm._s(item.num_piezas))])]),
              _vm._v(" "),
              _c("td", [_c("span", {}, [_vm._v(_vm._s(item.total_seguro))])]),
            ])
          }),
          0
        ),
      ]
    ),
    _vm._v(" "),
    _vm.envio === "reempaque"
      ? _c(
          "table",
          { staticClass: "table table-transparent table-responsive mb-3" },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.warehousesNew, function (item, index) {
                return _c("tr", { key: index }, [
                  _c("td", [
                    _vm.type_form != "show"
                      ? _c(
                          "button",
                          {
                            directives: [{ name: "title", rawName: "v-title" }],
                            staticClass: "btn-acticon_spalert",
                            attrs: {
                              type: "button",
                              value: item.id_almacen,
                              title: "Elimnar WH",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.delete_wh($event)
                              },
                            },
                          },
                          [
                            _c("i", {
                              staticClass: "ti ti-trash",
                              staticStyle: { "font-size": "21px" },
                            }),
                          ]
                        )
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("td", [_c("span", {}, [_vm._v(_vm._s(item.warehouse))])]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", {}, [_vm._v(_vm._s(item.warehouse_children))]),
                  ]),
                  _vm._v(" "),
                  _c("td", [_c("span", {}, [_vm._v(_vm._s(item.alto))])]),
                  _vm._v(" "),
                  _c("td", [_c("span", {}, [_vm._v(_vm._s(item.ancho))])]),
                  _vm._v(" "),
                  _c("td", [_c("span", {}, [_vm._v(_vm._s(item.largo))])]),
                  _vm._v(" "),
                  _c("td", [_c("span", {}, [_vm._v(_vm._s(item.peso))])]),
                  _vm._v(" "),
                  _c("td", [_c("span", {}, [_vm._v(_vm._s(item.num_piezas))])]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", {}, [_vm._v(_vm._s(item.total_seguro))]),
                  ]),
                ])
              }),
              0
            ),
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "form",
      {
        staticClass: "modal modal-blur fade",
        class: { show: _vm.show == true },
        attrs: {
          id: "paquete",
          tabindex: "-1",
          "aria-modal": "true",
          role: "dialog",
        },
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-lg modal-dialog-centered",
            attrs: { name: "paquete", role: "document" },
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [_vm._v("Reempacar")]),
                _vm._v(" "),
                _c("button", {
                  staticClass: "btn-close",
                  attrs: {
                    type: "button",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                  },
                  on: {
                    click: function ($event) {
                      return _vm.hiddenModal()
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "form-floating mb-3 w-100" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.dato.warehouse,
                        expression: "dato.warehouse",
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'",
                      },
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.errors.first("warehouse") },
                    attrs: { type: "text", name: "warehouse", id: "warehouse" },
                    domProps: { value: _vm.dato.warehouse },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.dato, "warehouse", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "warehouse" } }, [
                    _vm._v("Warehouse"),
                  ]),
                  _vm._v(" "),
                  _vm.errors.has("warehouse")
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.first("warehouse"))),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-floating mb-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|numeric",
                        expression: "'required|numeric'",
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.dato.ancho,
                        expression: "dato.ancho",
                      },
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.errors.first("ancho") },
                    attrs: {
                      type: "text",
                      name: "ancho",
                      id: "ancho",
                      "data-vv-validate-on": "change",
                    },
                    domProps: { value: _vm.dato.ancho },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.dato, "ancho", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "ancho" } }, [_vm._v("Ancho")]),
                  _vm._v(" "),
                  _vm.errors.has("ancho")
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.first("ancho"))),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-floating mb-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|numeric",
                        expression: "'required|numeric'",
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.dato.alto,
                        expression: "dato.alto",
                      },
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.errors.first("alto") },
                    attrs: {
                      type: "text",
                      name: "alto",
                      id: "alto",
                      "data-vv-validate-on": "change",
                    },
                    domProps: { value: _vm.dato.alto },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.dato, "alto", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "alto" } }, [_vm._v("Alto")]),
                  _vm._v(" "),
                  _vm.errors.has("alto")
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.first("alto"))),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-floating mb-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|numeric",
                        expression: "'required|numeric'",
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.dato.largo,
                        expression: "dato.largo",
                      },
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.errors.first("largo") },
                    attrs: {
                      type: "text",
                      name: "largo",
                      id: "largo",
                      "data-vv-validate-on": "change",
                    },
                    domProps: { value: _vm.dato.largo },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.dato, "largo", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "largo" } }, [_vm._v("Largo")]),
                  _vm._v(" "),
                  _vm.errors.has("largo")
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.first("largo"))),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-floating mb-3" }, [
                  _c("input", {
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
                        value: _vm.dato.peso,
                        expression: "dato.peso",
                      },
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.errors.first("peso") },
                    attrs: {
                      type: "text",
                      name: "peso",
                      id: "largo",
                      "data-vv-validate-on": "change",
                    },
                    domProps: { value: _vm.dato.peso },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.dato, "peso", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "peso" } }, [_vm._v("Peso")]),
                  _vm._v(" "),
                  _vm.errors.has("peso")
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.first("peso"))),
                      ])
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-floating mb-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|numeric",
                        expression: "'required|numeric'",
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.dato.num_piezas,
                        expression: "dato.num_piezas",
                      },
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.errors.first("num_piezas") },
                    attrs: {
                      type: "text",
                      name: "num_piezas",
                      id: "largo",
                      "data-vv-validate-on": "change",
                    },
                    domProps: { value: _vm.dato.num_piezas },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.dato, "num_piezas", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "num_piezas" } }, [
                    _vm._v("Numero de Piezas"),
                  ]),
                  _vm._v(" "),
                  _vm.errors.has("num_piezas")
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.first("num_piezas"))),
                      ])
                    : _vm._e(),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn me-auto",
                    attrs: { type: "button", "data-bs-dismiss": "modal" },
                    on: {
                      click: function ($event) {
                        return _vm.hiddenModal()
                      },
                    },
                  },
                  [_vm._v("Cerrar")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      type: "button",
                      id: "paquete",
                      "data-bs-dismiss": "modal",
                    },
                    on: { click: _vm.saveData },
                  },
                  [_vm._v("Guardar")]
                ),
              ]),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "10%" } }),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "15%" } }, [_vm._v("Nro. WareHouse")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" } }, [_vm._v("Nro. Tracking")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" } }, [_vm._v("Descripcion")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "5%" } }, [_vm._v("Alto")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "5%" } }, [_vm._v("Ancho")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "5%" } }, [_vm._v("Largo")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "5%" } }, [_vm._v("Peso")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "5%" } }, [_vm._v("Piezas")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Total Seguro")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "5%" } }),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" } }, [_vm._v("Nro. WareHouse")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" } }, [_vm._v("WH secundarios")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Alto")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Ancho")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Largo")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Peso")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "5%" } }, [_vm._v("Piezas")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Total Seguro")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=template&id=68f1062d&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/facturas/LayoutFormFacturar.vue?vue&type=template&id=68f1062d& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
                        value: _vm.loaderCard,
                        expression: "loaderCard",
                      },
                    ],
                    staticClass: "div-loader_white",
                    staticStyle: { margin: "0" },
                  },
                  [_c("loader")],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
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
                    _c("div", { staticClass: "row mb-4" }, [
                      _c("div", { staticClass: "col-6" }, [
                        _c("p", { staticClass: "h3" }, [_vm._v("Detalles")]),
                        _vm._v(" "),
                        _c("address", [
                          _c(
                            "p",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.details.fecha_factura != "",
                                  expression: "details.fecha_factura != ''",
                                },
                              ],
                            },
                            [
                              _vm._v("Fecha Factura: "),
                              _c(
                                "span",
                                {
                                  staticStyle: {
                                    "text-transform": "uppercase",
                                  },
                                },
                                [_vm._v(_vm._s(_vm.details.fecha_factura))]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Numero Factura: " +
                                _vm._s(_vm.details.nro_factura)
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Numero Container: " +
                                _vm._s(_vm.details.nro_container)
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Tarifa Envio: " +
                                _vm._s(_vm.details.tarifa) +
                                " USD"
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("Tipo Envio:  "),
                            _c(
                              "span",
                              {
                                staticStyle: { "text-transform": "uppercase" },
                              },
                              [_vm._v(_vm._s(_vm.details.tipo_envio))]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Tasa Bs: " +
                                _vm._s(_vm.details.monto_tc) +
                                " VES"
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-6 text-end" }, [
                        _c("p", { staticClass: "h3" }, [_vm._v("Cliente")]),
                        _vm._v(" "),
                        _c("address", [
                          _c("p", [
                            _vm._v(
                              "Nombre Completo: " +
                                _vm._s(_vm.client.nombres) +
                                " " +
                                _vm._s(_vm.client.apellidos)
                            ),
                          ]),
                          _vm._v(" "),
                          _vm.client.cod_usuario != null
                            ? _c("p", [
                                _vm._v(
                                  "Código Usuario: " +
                                    _vm._s(_vm.client.cod_usuario)
                                ),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("Teléfono: " + _vm._s(_vm.client.telefono)),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("Cédula: " + _vm._s(_vm.client.cedula)),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Dirección: " +
                                _vm._s(_vm.client.direccion) +
                                " " +
                                _vm._s(_vm.client.estado_ve) +
                                " " +
                                _vm._s(
                                  "" +
                                    (_vm.client.zona != null
                                      ? ", " +
                                        _vm.client.zona +
                                        ", " +
                                        _vm.client.codigo_postal
                                      : "")
                                )
                            ),
                          ]),
                          _vm._v(" "),
                          _vm.client.ref_direccion != null
                            ? _c("p", [
                                _vm._v(
                                  "Ref. Dirección: " +
                                    _vm._s(_vm.client.ref_direccion)
                                ),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("ware-houses", {
                      attrs: {
                        warehouses: _vm.warehouses,
                        envio: _vm.envio,
                        whNew: _vm.warehousesNew,
                        type_form: _vm.type_form,
                      },
                      on: { add_new_wh: _vm.add_new_wh },
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-100 mb-4" }, [
                      _vm.type_form === "new" || _vm.type_form === "edit"
                        ? _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-4" }, [
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-6" }, [
                                  _c(
                                    "div",
                                    { staticClass: "form-group mb-3 " },
                                    [
                                      _c(
                                        "label",
                                        { staticClass: "form-label" },
                                        [_vm._v("Cajas")]
                                      ),
                                      _vm._v(" "),
                                      _c("div", [
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.caja,
                                                expression: "caja",
                                              },
                                            ],
                                            staticClass: "form-select",
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
                                                _vm.caja = $event.target
                                                  .multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              },
                                            },
                                          },
                                          _vm._l(
                                            _vm.cajas,
                                            function (item, index) {
                                              return _c(
                                                "option",
                                                {
                                                  key: index,
                                                  domProps: {
                                                    value: item.id_gasto_extra,
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(item.nombre) +
                                                      " - $" +
                                                      _vm._s(
                                                        item.monto_gasto_extra
                                                      )
                                                  ),
                                                ]
                                              )
                                            }
                                          ),
                                          0
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "row col-6",
                                    staticStyle: { "padding-left": "0" },
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "form-group mb-3 col-6" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "form-label" },
                                          [_vm._v("Cant.")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.cant_caja,
                                              expression: "cant_caja",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "number",
                                            min: "1",
                                            pattern: "^[0-9]+",
                                            name: "example-password-input",
                                            placeholder: "Cantidad Caja",
                                          },
                                          domProps: { value: _vm.cant_caja },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.cant_caja =
                                                $event.target.value
                                            },
                                          },
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "form-group mb-3 col-6",
                                        staticStyle: { "padding-left": "0" },
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-label",
                                            staticStyle: { opacity: "0" },
                                          },
                                          [_vm._v("agegar")]
                                        ),
                                        _vm._v(" "),
                                        _c("div", [
                                          _c(
                                            "button",
                                            {
                                              staticClass: "btn btn-light",
                                              attrs: { type: "button" },
                                              on: { click: _vm.addCaja },
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                    Agregar\r\n                                                "
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
                            ]),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("content-body", {
                      attrs: { dataContent: _vm.dataContent },
                    }),
                    _vm._v(" "),
                    _c("list-cajas", {
                      attrs: {
                        listCajas: _vm.list_cajas,
                        type_form: _vm.type_form,
                      },
                      on: { removeCaja: _vm.removeCaja },
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center mt-4 mb-3" },
                      [
                        _c("div", { staticClass: " m-0 ms-auto" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex align-items-center mb-3 justify-content-end",
                            },
                            [
                              _c("span", { staticClass: "me-2" }, [
                                _vm._v(
                                  "\r\n                                    Total WH\r\n                                "
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticStyle: { "max-width": "80px" } },
                                [
                                  _vm.type_form === "new" ||
                                  _vm.type_form === "edit"
                                    ? _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.costo_trackings,
                                            expression: "costo_trackings",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        staticStyle: {
                                          padding: "0.4375rem 5px",
                                          "text-align": "end",
                                        },
                                        attrs: {
                                          type: "text",
                                          name: "costo_trackings",
                                        },
                                        domProps: {
                                          value: _vm.costo_trackings,
                                        },
                                        on: {
                                          keyup: function ($event) {
                                            return _vm.keyUpPrecio($event)
                                          },
                                          change: function ($event) {
                                            return _vm.changePrecio($event)
                                          },
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.costo_trackings =
                                              $event.target.value
                                          },
                                        },
                                      })
                                    : _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.costo_trackings,
                                            expression: "costo_trackings",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        staticStyle: {
                                          padding: "0.4375rem 5px",
                                          "text-align": "end",
                                        },
                                        attrs: {
                                          disabled: "",
                                          type: "text",
                                          name: "costo_trackings",
                                        },
                                        domProps: {
                                          value: _vm.costo_trackings,
                                        },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.costo_trackings =
                                              $event.target.value
                                          },
                                        },
                                      }),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _vm.envio === "reempaque"
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex align-items-center mb-3 justify-content-end",
                                },
                                [
                                  _c("span", { staticClass: "me-2" }, [
                                    _vm._v(
                                      "\r\n                                    Total WH Reemp.\r\n                                "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticStyle: { "max-width": "80px" } },
                                    [
                                      _vm.type_form === "new" ||
                                      _vm.type_form === "edit"
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.costo_reempaque,
                                                expression: "costo_reempaque",
                                              },
                                            ],
                                            staticClass: "form-control",
                                            staticStyle: {
                                              padding: "0.4375rem 5px",
                                              "text-align": "end",
                                            },
                                            attrs: {
                                              type: "text",
                                              name: "costo_reempaque",
                                            },
                                            domProps: {
                                              value: _vm.costo_reempaque,
                                            },
                                            on: {
                                              keyup: function ($event) {
                                                return _vm.keyUpPrecio($event)
                                              },
                                              change: function ($event) {
                                                return _vm.changePrecio($event)
                                              },
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.costo_reempaque =
                                                  $event.target.value
                                              },
                                            },
                                          })
                                        : _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.costo_reempaque,
                                                expression: "costo_reempaque",
                                              },
                                            ],
                                            staticClass: "form-control",
                                            staticStyle: {
                                              padding: "0.4375rem 5px",
                                              "text-align": "end",
                                            },
                                            attrs: {
                                              disabled: "",
                                              type: "text",
                                              name: "costo_reempaque",
                                            },
                                            domProps: {
                                              value: _vm.costo_reempaque,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.costo_reempaque =
                                                  $event.target.value
                                              },
                                            },
                                          }),
                                    ]
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex align-items-center mb-3 justify-content-end",
                            },
                            [
                              _c("span", { staticClass: "me-2" }, [
                                _vm._v(
                                  "\r\n                                    Gastos Extras\r\n                                "
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticStyle: { "max-width": "80px" } },
                                [
                                  _vm.type_form === "new" ||
                                  _vm.type_form === "edit"
                                    ? _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.gastos_extras,
                                            expression: "gastos_extras",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        staticStyle: {
                                          padding: "0.4375rem 5px",
                                          "text-align": "end",
                                        },
                                        attrs: {
                                          type: "text",
                                          name: "gastos_extras",
                                        },
                                        domProps: { value: _vm.gastos_extras },
                                        on: {
                                          keyup: function ($event) {
                                            return _vm.keyUpPrecio($event)
                                          },
                                          change: function ($event) {
                                            return _vm.changePrecio($event)
                                          },
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.gastos_extras =
                                              $event.target.value
                                          },
                                        },
                                      })
                                    : _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.gastos_extras,
                                            expression: "gastos_extras",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        staticStyle: {
                                          padding: "0.4375rem 5px",
                                          "text-align": "end",
                                        },
                                        attrs: {
                                          disabled: "",
                                          type: "text",
                                          name: "gastos_extras",
                                        },
                                        domProps: { value: _vm.gastos_extras },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.gastos_extras =
                                              $event.target.value
                                          },
                                        },
                                      }),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex align-items-center mb-3 justify-content-end",
                            },
                            [
                              _c("span", { staticClass: "me-2" }, [
                                _vm._v(
                                  "\r\n                                    Total USD\r\n                                "
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass: "text-end",
                                  staticStyle: { width: "80px" },
                                },
                                [
                                  _vm._v(
                                    "\r\n                                    " +
                                      _vm._s(_vm.total_usd) +
                                      "\r\n                                "
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
                                "d-flex align-items-center mb-3 justify-content-end",
                            },
                            [
                              _c("span", { staticClass: "me-2" }, [
                                _vm._v(
                                  "\r\n                                    Total VES\r\n                                "
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass: "text-end",
                                  staticStyle: { width: "80px" },
                                },
                                [
                                  _vm._v(
                                    "\r\n                                    " +
                                      _vm._s(_vm.total_ves) +
                                      "\r\n                                "
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center mt-5 mb-3" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: " m-0 ms-auto",
                            staticStyle: { width: "330px" },
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "form-floating mb-3 w-100" },
                              [
                                _vm.type_form === "new" ||
                                _vm.type_form === "edit"
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.details.nro_factura,
                                          expression: "details.nro_factura",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "nro_factura",
                                        id: "nro_factura",
                                      },
                                      domProps: {
                                        value: _vm.details.nro_factura,
                                      },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.details,
                                            "nro_factura",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    })
                                  : _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.details.nro_factura,
                                          expression: "details.nro_factura",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        disabled: "",
                                        type: "text",
                                        name: "nro_factura",
                                        id: "nro_factura",
                                      },
                                      domProps: {
                                        value: _vm.details.nro_factura,
                                      },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.details,
                                            "nro_factura",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "nro_factura" } }, [
                                  _vm._v("Nro. Factura"),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-floating mb-3 w-100" },
                              [
                                _vm.type_form === "new" ||
                                _vm.type_form === "edit"
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.details.nro_container,
                                          expression: "details.nro_container",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "nro_container",
                                        id: "nro_container",
                                      },
                                      domProps: {
                                        value: _vm.details.nro_container,
                                      },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.details,
                                            "nro_container",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    })
                                  : _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.details.nro_container,
                                          expression: "details.nro_container",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        disabled: "",
                                        type: "text",
                                        name: "nro_container",
                                        id: "nro_container",
                                      },
                                      domProps: {
                                        value: _vm.details.nro_container,
                                      },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.details,
                                            "nro_container",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  { attrs: { for: "nro_container" } },
                                  [_vm._v("Nro. Container")]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-floating mb-3 w-100" },
                              [
                                _vm.type_form === "new" ||
                                _vm.type_form === "edit"
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.details.tarifa,
                                          expression: "details.tarifa",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "tarifa",
                                        id: "tarifa",
                                      },
                                      domProps: { value: _vm.details.tarifa },
                                      on: {
                                        keyup: function ($event) {
                                          return _vm.keyUpPrecio($event)
                                        },
                                        change: _vm.changePrecioTarifa,
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.details,
                                            "tarifa",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    })
                                  : _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.details.tarifa,
                                          expression: "details.tarifa",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        disabled: "",
                                        type: "text",
                                        name: "tarifa",
                                        id: "tarifa",
                                      },
                                      domProps: { value: _vm.details.tarifa },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.details,
                                            "tarifa",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "tarifa" } }, [
                                  _vm._v(
                                    "Tarifa de Envio ( " +
                                      _vm._s(_vm.details.tipo_envio) +
                                      " )"
                                  ),
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
                      { staticClass: "d-flex align-items-center mt-3" },
                      [
                        _c("btn-volver", { attrs: { classe: "btn-light" } }),
                        _vm._v(" "),
                        _vm.type_form === "new" || _vm.type_form === "edit"
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-info ms-auto",
                                attrs: { type: "button" },
                                on: { click: _vm.confirmInvoice },
                              },
                              [_c("span", [_vm._v("Guardar")])]
                            )
                          : _vm._e(),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ])
            : _vm._e(),
        ],
        1
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal modal-blur fade",
        class: { show: _vm.show == true },
        attrs: { id: "modal-success", tabindex: "-1", "aria-hidden": "true" },
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-sm modal-dialog-centered",
            attrs: { role: "document" },
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("button", {
                staticClass: "btn-close",
                attrs: {
                  type: "button",
                  "data-bs-dismiss": "modal",
                  "aria-label": "Close",
                },
                on: {
                  click: function ($event) {
                    return _vm.hiddenModal()
                  },
                },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "modal-status bg-success" }),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body text-center py-4" }, [
                _c(
                  "svg",
                  {
                    staticClass: "icon mb-2 text-green icon-lg",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      "stroke-width": "2",
                      stroke: "currentColor",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                    },
                  },
                  [
                    _c("path", {
                      attrs: {
                        stroke: "none",
                        d: "M0 0h24v24H0z",
                        fill: "none",
                      },
                    }),
                    _c("circle", { attrs: { cx: "12", cy: "12", r: "9" } }),
                    _c("path", { attrs: { d: "M9 12l2 2l4 -4" } }),
                  ]
                ),
                _vm._v(" "),
                _c("h3", [
                  _vm._v(
                    _vm._s(
                      "" +
                        (_vm.type_form === "new"
                          ? "¿Estás seguro de crear la factura?"
                          : "¿Estás seguro de actualizar la factura?")
                    )
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-muted" }, [
                  _vm._v(
                    "\r\n                    Para crear la factura, asegurate que los datos esten correctos...\r\n                "
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c("div", { staticClass: "w-100" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn w-100",
                          attrs: { type: "button", "data-bs-dismiss": "modal" },
                          on: {
                            click: function ($event) {
                              return _vm.hiddenModal()
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\r\n                            Cancelar\r\n                        "
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-success w-100",
                          attrs: { type: "button", "data-bs-dismiss": "modal" },
                          on: { click: _vm.sendFactura },
                        },
                        [
                          _vm._v(
                            "\r\n                            " +
                              _vm._s(
                                "" +
                                  (_vm.type_form === "new"
                                    ? "Crear Factura"
                                    : "Actualizar")
                              ) +
                              "\r\n                        "
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);