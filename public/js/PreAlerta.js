"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["PreAlerta"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BtnVolver_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/BtnVolver.vue */ "./resources/js/components/BtnVolver.vue");


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
var LoaderComponent = function LoaderComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoaderComponent_vue-_c2861").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/LoaderComponent.vue */ "./resources/js/components/LoaderComponent.vue"));
};

var Error404 = function Error404() {
  return __webpack_require__.e(/*! import() */ "Error404").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/Error404Component.vue */ "./resources/js/components/Error404Component.vue"));
};

var AlertMessageComponent = function AlertMessageComponent() {
  return __webpack_require__.e(/*! import() */ "AlertMessageComponent").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/AlertMessageComponent.vue */ "./resources/js/components/AlertMessageComponent.vue"));
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PreAlerta',
  data: function data() {
    return {
      componentRender: LoaderComponent,
      activeComponent: '',
      pdfSolicitud: '',
      user: {},
      prealerta: {},
      trackings: [],
      solicitud: {
        id_solicitud: '',
        estado: '',
        warehouse: '',
        id_almacen: '',
        cod_usuario: '',
        usuario_id: '',
        trackings: []
      },
      show: false,
      dato: {},
      title: '',
      imagenMiniatura: '',
      jsonData: {
        recibo: '',
        fecha_recibo: '',
        ruta_pdf: '',
        total_piezas: 0,
        total_peso: 0,
        total_volumen: 0,
        total_piecub: 0,
        cliente: {},
        trackings: []
      },
      alert: {},
      sendBol: false
    };
  },
  components: {
    BtnVolver: _components_BtnVolver_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  beforeCreate: function beforeCreate() {
    this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(Object.keys(this.$route.params).length != 0 && Object.keys(this.$route.query).length != 0 && this.$route.query.hasOwnProperty("estado"))) {
                _context.next = 6;
                break;
              }

              this.sendBol = this.$route.query.estado == 'pendiente' ? true : false;
              _context.next = 4;
              return this.axios.get("prealertas/".concat(this.$route.params.id), {
                params: {
                  estado: this.$route.query.estado
                }
              }).then(function (response) {
                console.log(response);
                setTimeout(function () {
                  _this.componentRender = '';
                }, 2000);
                _this.user = {
                  usuario_id: response.data.results.usuario_id,
                  cod_usuario: response.data.results.cod_usuario,
                  email: response.data.results.email,
                  nombres: response.data.results.nombres,
                  apellidos: response.data.results.apellidos,
                  cedula: response.data.results.cedula,
                  telefono: response.data.results.telefono,
                  estado: response.data.results.estado_ve,
                  zona: response.data.results.zona,
                  direccion: response.data.results.direccion,
                  ref_direccion: response.data.results.ref_direccion,
                  codigo_postal: response.data.results.codigo_postal
                };
                _this.prealerta = {
                  id_solicitud: response.data.results.id_solicitud,
                  id_empresa_transporte: response.data.results.id_empresa_transporte,
                  nombre: response.data.results.nombre,
                  estado: response.data.results.estado,
                  fecha_creado: response.data.results.fecha_creado,
                  fecha_llegada: response.data.results.fecha_llegada
                };
                _this.trackings = response.data.results.trackings;
                _this.solicitud.estado = _this.$route.query.estado;
                _this.solicitud.id_solicitud = response.data.results.id_solicitud;
                _this.solicitud.usuario_id = _this.user.usuario_id;
                _this.solicitud.cod_usuario = _this.user.cod_usuario;

                if (_this.solicitud.cod_usuario === null) {
                  _this.solicitud.cod_usuario = '';
                }

                if (response.data.results.warehouse != null) {
                  _this.solicitud.warehouse = response.data.results.warehouse;
                }

                if (response.data.results.id_almacen != null) {
                  _this.solicitud.id_almacen = response.data.results.id_almacen;
                }
              })["catch"](function (error) {
                _this.componentRender = Error404;
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
    showModal: function showModal(e) {
      var value = e.target.parentNode.value;

      var _check = check(this.trackings, value, 'id_tracking'),
          tracking = _check.tracking,
          id_tracking = _check.id_tracking,
          alto = _check.alto,
          ancho = _check.ancho,
          largo = _check.largo,
          peso = _check.peso,
          num_piezas = _check.num_piezas;

      this.title = tracking;
      this.dato = {
        id_tracking: id_tracking,
        alto: alto,
        ancho: ancho,
        largo: largo,
        peso: peso,
        num_piezas: num_piezas,
        image: ''
      };

      if (check(this.solicitud.trackings, value, 'id_tracking') != null) {
        this.dato.alto = check(this.solicitud.trackings, value, 'id_tracking').alto;
        this.dato.ancho = check(this.solicitud.trackings, value, 'id_tracking').ancho;
        this.dato.largo = check(this.solicitud.trackings, value, 'id_tracking').largo;
        this.dato.peso = check(this.solicitud.trackings, value, 'id_tracking').peso;
        this.dato.num_piezas = check(this.solicitud.trackings, value, 'id_tracking').num_piezas;
        this.dato.image = check(this.solicitud.trackings, value, 'id_tracking').image;
      }

      this.show = true;
    },
    hiddenModal: function hiddenModal() {
      this.show = false;
    },
    changeFileImage: function changeFileImage(e) {
      var file = e.target.files[0];

      if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg') {
        this.dato.image = file;
        this.imgMini(file);
      } else {
        alert('Por Favor, debe de agregar una imagen. Con una de estas extensiones "/jpg/jpeg/png"');
      }
    },
    imgMini: function imgMini(file) {
      var _this2 = this;

      var render = new FileReader();

      render.onload = function (e) {
        _this2.imagenMiniatura = e.target.result;
      };

      render.readAsDataURL(file);
    },
    saveDataPaquete: function saveDataPaquete() {
      var _this3 = this;

      this.$validator.validate().then(function (valid) {
        if (valid) {
          if (_this3.dato.image != '') {
            var trackings = _this3.solicitud.trackings;

            if (trackings.length != 0) {
              for (var i = 0; i < trackings.length; i++) {
                if (trackings[i].id_tracking == _this3.dato.id_tracking) {
                  _this3.solicitud.trackings[i] = _this3.dato;
                  break;
                }
              }
            } else {
              _this3.solicitud.trackings.push(_this3.dato);
            }

            _this3.imgMini(_this3.dato.image);

            for (var _i = 0; _i < _this3.trackings.length; _i++) {
              if (_this3.trackings[_i].id_tracking == _this3.dato.id_tracking) {
                _this3.trackings[_i].alto = _this3.dato.alto;
                _this3.trackings[_i].ancho = _this3.dato.ancho;
                _this3.trackings[_i].largo = _this3.dato.largo;
                _this3.trackings[_i].peso = _this3.dato.peso;
                _this3.trackings[_i].num_piezas = _this3.dato.num_piezas;
                _this3.trackings[_i].ruta_image = _this3.imagenMiniatura;
                _this3.trackings[_i].image = _this3.dato.image;
              }
            }

            _this3.show = false;
            _this3.dato = {};
            _this3.imagenMiniatura = '';
            document.getElementById('fileimage').value = '';
          } else {
            alert('Por Favor, debe de agregar una imagen. Con una de estas extensiones "/jpg/jpeg/png"');
          }
        }
      });
    },
    validarFormTracking: function validarFormTracking(_ref2) {
      var tracking = _ref2.tracking,
          descripcion = _ref2.descripcion,
          num_piezas = _ref2.num_piezas,
          ancho = _ref2.ancho,
          largo = _ref2.largo,
          alto = _ref2.alto,
          peso = _ref2.peso,
          image = _ref2.image;

      switch (true) {
        case tracking == '' && tracking != null || descripcion == '' && descripcion != null || num_piezas == '' && num_piezas != null || ancho == '' && ancho != null || largo == '' && largo != null || alto == '' && alto != null || peso == '' && peso != null || image == '' && image != null:
          alert('Por favor, debe agregar datos en todos los campos.');
          return false;

        case isNaN(num_piezas) || isNaN(ancho) || isNaN(largo) || isNaN(alto) || isNaN(peso):
          alert('Por favor, los datos deben ser numeros, en los campos numero piezas, ancho, largo, alto y peso.');
          return false;

        case num_piezas % 1 != 0:
          alert('Por favor, los datos deben ser numeros enteros, en el campo numero piezas.');
          return false;

        default:
          return true;
      }
    },
    savePaquete: function savePaquete() {
      var _this4 = this;

      var paquetes = this.trackings;
      console.log(paquetes);
      this.alert = {};

      for (var i = 0; i < this.trackings.length; i++) {
        if (!this.validarFormTracking(this.trackings[i])) return;
      }

      if (this.sendBol) {
        if (paquetes.length == 0 && this.solicitud.estado == 'pendiente') {
          this.alert.msg = 'Error, Debe Registrar Los Paquetes Recibidos. Para Ser Guardado En El Almacen.';
          this.alert.clss = 'error';
          this.activeComponent = AlertMessageComponent;
        }
        /*else if( paquetes.length == 0 && this.solicitud.estado == 'Almacen-Miami' ){
           paquetes = this.trackings;
        }*/


        if (this.solicitud.cod_usuario == '') {
          this.alert.msg = 'Error, Debe Registrar El Código Del Usuario.';
          this.alert.clss = 'error';
          this.activeComponent = AlertMessageComponent;
          return;
        }

        if (this.solicitud.warehouse == '') {
          this.alert.msg = 'Error, Debe Registrar Un WareHouse.';
          this.alert.clss = 'error';
          this.activeComponent = AlertMessageComponent;
          return;
        }

        var formData = new FormData();
        formData.append('id_solicitud', this.solicitud.id_solicitud);
        formData.append('estado_solicitud', this.solicitud.estado);
        formData.append('id_solicitud', this.solicitud.id_solicitud);
        formData.append('cod_usuario', this.solicitud.cod_usuario);
        formData.append('warehouse', this.solicitud.warehouse);
        formData.append('usuario_id', this.solicitud.usuario_id);
        formData.append('id_almacen', this.solicitud.id_almacen);

        for (var _i2 = 0; _i2 < paquetes.length; _i2++) {
          var objt = {};
          var arrKeys = []; //agregamos cada tracking

          for (var key in paquetes[_i2]) {
            if (key != 'image') {
              formData.append("tracking[".concat(key, "]"), paquetes[_i2][key]);
              arrKeys.push(key);
            } else {
              formData.append("images[".concat(paquetes[_i2]['id_tracking'], "]"), paquetes[_i2]['image']);
            }
          } //eliminamos el append trackick y agregamos sus valores a un objeto


          for (var j = 0; j < arrKeys.length; j++) {
            objt[arrKeys[j]] = formData.get("tracking[".concat(arrKeys[j], "]"));
            formData["delete"]("tracking[".concat(arrKeys[j], "]"));
          }

          formData.append("trackings[".concat(_i2, "]"), JSON.stringify(objt));
        }

        console.log(formData.getAll('trackings'));
        this.componentRender = LoaderComponent;
        var apiUrl = this.solicitud.estado == 'recibido' ? 'almacenes-actualizar' : 'almacenes';
        this.axios.post(apiUrl, formData, {
          headers: {
            "content-type": "multipart/form-data"
          }
        }).then(function (response) {
          _this4.loader = false;
          _this4.alert = {
            msg: response.data.message,
            clss: 'updated'
          };
          _this4.activeComponent = AlertMessageComponent;
          setTimeout(function () {
            _this4.$router.go(-1);
          }, 4000);
          setTimeout(function () {
            _this4.componentRender = '';
          }, 2000);
        })["catch"](function (error) {
          _this4.loader = false;
          _this4.alert = {
            msg: error.response.status !== 500 ? error.response.data.message : 'Ha ocurrido un error con el servidor por favor intentar mas tarde',
            clss: 'error'
          };
          console.log(error.response.data);
          _this4.activeComponent = AlertMessageComponent;
          setTimeout(function () {
            _this4.componentRender = '';
          }, 2000);
        });
      } else {
        this.alert.msg = 'Error, Ya esta solicitud no se puede actualizar.';
        this.alert.clss = 'error';
        this.activeComponent = AlertMessageComponent;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreAlerta_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PreAlerta.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreAlerta_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreAlerta_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/views/admin/prealertas/PreAlerta.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/admin/prealertas/PreAlerta.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PreAlerta_vue_vue_type_template_id_276a5563___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreAlerta.vue?vue&type=template&id=276a5563& */ "./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=template&id=276a5563&");
/* harmony import */ var _PreAlerta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreAlerta.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=script&lang=js&");
/* harmony import */ var _PreAlerta_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreAlerta.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PreAlerta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PreAlerta_vue_vue_type_template_id_276a5563___WEBPACK_IMPORTED_MODULE_0__.render,
  _PreAlerta_vue_vue_type_template_id_276a5563___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/prealertas/PreAlerta.vue"
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

/***/ "./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreAlerta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PreAlerta.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreAlerta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreAlerta_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PreAlerta.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=style&index=0&lang=css&");


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

/***/ "./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=template&id=276a5563&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=template&id=276a5563& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreAlerta_vue_vue_type_template_id_276a5563___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreAlerta_vue_vue_type_template_id_276a5563___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreAlerta_vue_vue_type_template_id_276a5563___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PreAlerta.vue?vue&type=template&id=276a5563& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=template&id=276a5563&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=template&id=276a5563&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/prealertas/PreAlerta.vue?vue&type=template&id=276a5563& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
          _vm.componentRender == "" && _vm.pdfSolicitud == ""
            ? _c(
                "form",
                {
                  staticClass: "card card-lg",
                  attrs: { name: "prealerta", enctype: "multipart/form-data" },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.savePaquete($event)
                    },
                  },
                },
                [
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
                    _c("div", { staticClass: "row mb-3" }, [
                      _c("div", { staticClass: "col-6" }, [
                        _c("p", { staticClass: "h3" }, [
                          _vm._v("Solicitud Envío"),
                        ]),
                        _vm._v(" "),
                        _c("address", [
                          _c("p", [
                            _vm._v(
                              "Empresa de Transporte: " +
                                _vm._s(_vm.prealerta.nombre)
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Estado de Solicitud: " +
                                _vm._s(_vm.prealerta.estado)
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
                                _vm._s(_vm.prealerta.fecha_creado)
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Fecha De Llegada: " +
                                _vm._s(_vm.prealerta.fecha_llegada)
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
                              "Correo Electrónico: " + _vm._s(_vm.user.email)
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Nombre Completo: " +
                                _vm._s(_vm.user.nombres) +
                                " " +
                                _vm._s(_vm.user.apellidos)
                            ),
                          ]),
                          _vm._v(" "),
                          _vm.user.cod_usuario != null
                            ? _c("p", [
                                _vm._v(
                                  "Código Usuario: " +
                                    _vm._s(_vm.user.cod_usuario)
                                ),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("Teléfono: " + _vm._s(_vm.user.telefono)),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("Cédula: " + _vm._s(_vm.user.cedula)),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Dirección: " +
                                _vm._s(_vm.user.direccion) +
                                ". " +
                                _vm._s(_vm.user.estado) +
                                " " +
                                _vm._s(
                                  "" +
                                    (_vm.user.zona != null
                                      ? ", " +
                                        _vm.user.zona +
                                        ", " +
                                        _vm.user.codigo_postal
                                      : "")
                                )
                            ),
                          ]),
                          _vm._v(" "),
                          _vm.user.ref_direccion != null
                            ? _c("p", [
                                _vm._v(
                                  "Ref. Dirección: " +
                                    _vm._s(_vm.user.ref_direccion)
                                ),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-transparent table-responsive mt-4 mb-5",
                      },
                      [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.trackings, function (item, index) {
                            return _c("tr", { key: index }, [
                              _c("td", [
                                _c("span", {}, [
                                  _vm._v(" " + _vm._s(item.tracking)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm.sendBol
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: item.descripcion,
                                          expression: "item.descripcion",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "text" },
                                      domProps: { value: item.descripcion },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item,
                                            "descripcion",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    })
                                  : _c("span", [
                                      _vm._v(
                                        " " + _vm._s(item.descripcion) + " "
                                      ),
                                    ]),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", {}, [
                                  _vm._v(_vm._s(item.num_piezas)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", {}, [_vm._v(_vm._s(item.ancho))]),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", {}, [_vm._v(_vm._s(item.largo))]),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", {}, [_vm._v(_vm._s(item.alto))]),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", {}, [_vm._v(_vm._s(item.peso))]),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", {
                                  staticClass: "avatar avatar-sm",
                                  style:
                                    "background-image: url(" +
                                    item.ruta_image +
                                    ")",
                                }),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm.sendBol
                                  ? _c(
                                      "div",
                                      { staticClass: "btn-list flex-nowrap" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "title",
                                                rawName: "v-title",
                                              },
                                            ],
                                            staticClass: "btn-acticon_spalert",
                                            attrs: {
                                              type: "button",
                                              id: "paquete",
                                              value: item.id_tracking,
                                              title: "Tracking Recibido",
                                            },
                                            on: {
                                              click: function ($event) {
                                                return _vm.showModal($event)
                                              },
                                            },
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "ti ti-package",
                                              staticStyle: {
                                                "font-size": "21px",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                              ]),
                            ])
                          }),
                          0
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center mt-5" },
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
                                _vm.sendBol
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.solicitud.warehouse,
                                          expression: "solicitud.warehouse",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "warehouse",
                                        id: "warehouse",
                                      },
                                      domProps: {
                                        value: _vm.solicitud.warehouse,
                                      },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.solicitud,
                                            "warehouse",
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
                                          value: _vm.solicitud.warehouse,
                                          expression: "solicitud.warehouse",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "warehouse",
                                        id: "warehouse",
                                        disabled: "",
                                      },
                                      domProps: {
                                        value: _vm.solicitud.warehouse,
                                      },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.solicitud,
                                            "warehouse",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "warehouse" } }, [
                                  _vm._v("Warehouse"),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _vm.user.cod_usuario == null
                              ? _c(
                                  "div",
                                  { staticClass: "form-floating mb-3 w-100" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.solicitud.cod_usuario,
                                          expression: "solicitud.cod_usuario",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "cod_usuario",
                                        id: "cod_usuario",
                                      },
                                      domProps: {
                                        value: _vm.solicitud.cod_usuario,
                                      },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.solicitud,
                                            "cod_usuario",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      { attrs: { for: "cod_usuario" } },
                                      [_vm._v("Código Usuario")]
                                    ),
                                  ]
                                )
                              : _vm._e(),
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
                        _vm.sendBol
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-info ms-auto",
                                attrs: { type: "submit" },
                              },
                              [
                                _vm._v(
                                  "\n                            Guardar\n                        "
                                ),
                              ]
                            )
                          : _vm._e(),
                      ],
                      1
                    ),
                  ]),
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
                      _c("h5", { staticClass: "modal-title" }, [
                        _vm._v("Registrar tracking: " + _vm._s(_vm.title)),
                      ]),
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
                      _vm._v(" "),
                      _c("div", { staticClass: "form-floating mb-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|regex:^[0-9]+([.][0-9]{2})?$",
                              expression:
                                "'required|regex:^[0-9]+([.][0-9]{2})?$'",
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
                          class: {
                            "is-invalid": _vm.errors.first("num_piezas"),
                          },
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
                              _vm.$set(
                                _vm.dato,
                                "num_piezas",
                                $event.target.value
                              )
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
                      _vm._v(" "),
                      _c("div", { staticClass: "mb-3" }, [
                        _c("div", { staticClass: "form-label" }, [
                          _vm._v("Selecciona la Imagen de este Tracking"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "file", id: "fileimage" },
                          on: {
                            change: function ($event) {
                              return _vm.changeFileImage($event)
                            },
                          },
                        }),
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
                          on: { click: _vm.saveDataPaquete },
                        },
                        [_vm._v("Guardar")]
                      ),
                    ]),
                  ]),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _vm.componentRender == ""
            ? _c(
                "transition",
                { attrs: { name: "component-fade", mode: "out-in" } },
                [
                  _c(
                    "keep-alive",
                    [
                      _c(_vm.pdfSolicitud, {
                        tag: "component",
                        attrs: { data: _vm.jsonData },
                      }),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
        ],
        1
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
        _c("th", {}, [_vm._v("nro. Tracking")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("nro. Piezas")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Ancho")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Largo")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Alto")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Peso")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Img")]),
        _vm._v(" "),
        _c("th", {}),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);