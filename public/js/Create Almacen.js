"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Create Almacen"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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


var LoaderComponent = function LoaderComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoaderComponent_vue-_c2861").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/LoaderComponent.vue */ "./resources/js/components/LoaderComponent.vue"));
};

var AlertMessageComponent = function AlertMessageComponent() {
  return __webpack_require__.e(/*! import() */ "AlertMessageComponent").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/AlertMessageComponent.vue */ "./resources/js/components/AlertMessageComponent.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CreateAlmacen',
  data: function data() {
    return {
      componentRender: '',
      activeComponent: '',
      trackings: [{
        tracking: '',
        descripcion: '',
        num_piezas: '',
        ancho: '',
        largo: '',
        alto: '',
        peso: '',
        ruta_image: '',
        image: ''
      }],
      id_cliente: '',
      cliente: '',
      usuarios: [],
      transportes: [],
      id_empresa_transporte: '',
      warehouse: '',
      alert: {}
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
              _context.next = 2;
              return this.axios.get('transportes/all').then(function (response) {
                _this.transportes = response.data.results;
              })["catch"](function (error) {
                console.log(error.response.data);
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
    addTracking: function addTracking(e) {
      var newTracking = {
        tracking: '',
        descripcion: '',
        num_piezas: '',
        ancho: '',
        largo: '',
        alto: '',
        peso: '',
        ruta_image: '',
        image: ''
      };

      for (var i = 0; i < this.trackings.length; i++) {
        if (!this.validarFormTracking(this.trackings[i])) return;
      }

      this.trackings.push(newTracking);
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
    deleteTracking: function deleteTracking(e) {
      var newTrackings = [];

      for (var i = 0; i < this.trackings.length; i++) {
        if (i != e.target.parentElement.value) newTrackings.push(this.trackings[i]);
      }

      this.trackings = newTrackings;
    },
    changeFileImage: function changeFileImage(e) {
      var _this2 = this;

      var index = e.target.id;
      var file = e.target.files[0];

      if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg') {
        this.trackings[index].image = file;
        var render = new FileReader();

        render.onload = function (e) {
          _this2.trackings[index].ruta_image = e.target.result;
        };

        render.readAsDataURL(file);
      } else {
        alert('Por Favor, debe de agregar una imagen. Con una de estas extensiones "/jpg/jpeg/png"');
      }
    },
    inputSearch: function inputSearch(e) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var parent, query;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                parent = e.target.offsetParent;
                query = _this3.cliente;
                _context2.next = 4;
                return _this3.axios.get('usuarios', {
                  params: {
                    search: query
                  }
                }).then(function (response) {
                  _this3.usuarios = response.data.results;
                  parent.querySelector('.dropdown-menu').classList.add('show-search');
                })["catch"](function (error) {
                  console.log(error.response.data);
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    clickRadioCheck: function clickRadioCheck(e) {
      var parent = e.target.parentNode.parentNode.parentNode;
      var value = e.target.value;
      var arreglo = this.usuarios;

      if (arreglo.length != 0) {
        for (var i = 0; i < arreglo.length; i++) {
          if (value == arreglo[i].usuario_id) {
            this.id_cliente = arreglo[i].usuario_id;
            this.cliente = "".concat(arreglo[i].cod_usuario, " - ").concat(arreglo[i].nombres, " ").concat(arreglo[i].apellidos);
            break;
          }
        }
      }

      parent.classList.remove('show-search');
      this.usuarios = [];
    },
    save: function save() {
      var _this4 = this;

      for (var i = 0; i < this.trackings.length; i++) {
        if (!this.validarFormTracking(this.trackings[i])) return;
      }

      var aux = '';

      for (var _i = 0; _i < this.trackings.length; _i++) {
        if (aux == this.trackings[_i].tracking) {
          alert('No puede haber dos trancking con el mismo numero.');
          return;
        } else {
          aux = this.trackings[_i].tracking;
        }
      }

      if (this.id_cliente == '') {
        alert('Por favor, debe agregar un cliente');
        return;
      }

      this.$validator.validate().then(function (valid) {
        if (valid) {
          console.log(_this4.trackings);
          var formData = new FormData();
          formData.append('id_cliente', _this4.id_cliente);
          formData.append('id_empresa_transporte', _this4.id_empresa_transporte);
          formData.append('warehouse', _this4.warehouse);
          var paquetes = _this4.trackings;

          for (var _i2 = 0; _i2 < paquetes.length; _i2++) {
            var objt = {};
            var arrKeys = []; //agregamos cada tracking

            for (var key in paquetes[_i2]) {
              if (key != 'image') {
                formData.append("tracking[".concat(key, "]"), paquetes[_i2][key]);
                arrKeys.push(key);
              } else {
                formData.append("images[".concat(paquetes[_i2]['tracking'], "]"), paquetes[_i2]['image']);
              }
            } //eliminamos el append trackick y agregamos sus valores a un objeto


            for (var j = 0; j < arrKeys.length; j++) {
              objt[arrKeys[j]] = formData.get("tracking[".concat(arrKeys[j], "]"));
              formData["delete"]("tracking[".concat(arrKeys[j], "]"));
            }

            formData.append("trackings[".concat(_i2, "]"), JSON.stringify(objt));
          }

          _this4.componentRender = LoaderComponent;

          _this4.axios.post('almacenes-crear', formData, {
            headers: {
              "content-type": "multipart/form-data"
            }
          }).then(function (response) {
            console.log(response.data);
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
            console.log(error.response.data);
            _this4.alert = {
              msg: error.response.data.message,
              clss: 'error'
            };
            _this4.activeComponent = AlertMessageComponent;
            setTimeout(function () {
              _this4.componentRender = '';
            }, 2000);
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.input-file_s{\n    position: absolute;\n    z-index: 1;\n    opacity: 0;\n    height: 100%;\n}\n.dropdown-menu.input-result-search.show{\n    display: none;\n}\n.dropdown-menu.input-result-search.show.show-search{\n    inset: auto !important;\n    transform: none !important;\n    width:100%;\n    padding: 10px 15px;\n}\n.input-result-search.show.show-search{\n    display: block;\n}\n.invalid-feedback{\n    display: block;\n}\n.div-loader_white{\n    margin: 0;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAlmacen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateAlmacen.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAlmacen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAlmacen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/views/admin/almacenes/CreateAlmacen.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/admin/almacenes/CreateAlmacen.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateAlmacen_vue_vue_type_template_id_002349ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateAlmacen.vue?vue&type=template&id=002349ce& */ "./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=template&id=002349ce&");
/* harmony import */ var _CreateAlmacen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateAlmacen.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=script&lang=js&");
/* harmony import */ var _CreateAlmacen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateAlmacen.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CreateAlmacen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateAlmacen_vue_vue_type_template_id_002349ce___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateAlmacen_vue_vue_type_template_id_002349ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/almacenes/CreateAlmacen.vue"
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

/***/ "./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAlmacen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateAlmacen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAlmacen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAlmacen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateAlmacen.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=style&index=0&lang=css&");


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

/***/ "./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=template&id=002349ce&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=template&id=002349ce& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAlmacen_vue_vue_type_template_id_002349ce___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAlmacen_vue_vue_type_template_id_002349ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAlmacen_vue_vue_type_template_id_002349ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateAlmacen.vue?vue&type=template&id=002349ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=template&id=002349ce&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=template&id=002349ce&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/almacenes/CreateAlmacen.vue?vue&type=template&id=002349ce& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
            ? _c(
                "form",
                {
                  staticClass: "card card-lg",
                  attrs: { name: "prealerta", enctype: "multipart/form-data" },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.save()
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
                      _c("div", { staticClass: "col-8" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-6" }, [
                            _c("p", { staticClass: "h3" }, [_vm._v("Cliente")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-floating mt-2" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.cliente,
                                    expression: "cliente",
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'",
                                  },
                                ],
                                staticClass: "form-control dropdown-toggle",
                                class: {
                                  "is-invalid": _vm.errors.first("cliente"),
                                },
                                attrs: {
                                  type: "text",
                                  "data-bs-toggle": "dropdown",
                                  value: "",
                                  id: "cliente",
                                  name: "cliente",
                                  "aria-expanded": "false",
                                  "data-vv-validate-on": "change",
                                },
                                domProps: { value: _vm.cliente },
                                on: {
                                  keyup: function ($event) {
                                    return _vm.inputSearch($event)
                                  },
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.cliente = $event.target.value
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "cliente" } }, [
                                _vm._v("Buscar Cliente"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "ul",
                                {
                                  staticClass:
                                    "dropdown-menu input-result-search",
                                  style:
                                    "" +
                                    (_vm.usuarios.length > 10
                                      ? "height: 220px;overflow-y: auto;"
                                      : ""),
                                  attrs: { id: "cliente" },
                                },
                                [
                                  _vm.usuarios.length == 0
                                    ? _c("li", [
                                        _vm._v("No se encontraron resultados"),
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.usuarios,
                                    function (usuario, index) {
                                      return _c("li", { key: index }, [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-check",
                                            attrs: { for: index },
                                          },
                                          [
                                            _c("input", {
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "radio",
                                                id: index,
                                              },
                                              domProps: {
                                                value: usuario.usuario_id,
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.clickRadioCheck(
                                                    $event
                                                  )
                                                },
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "form-check-label",
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(usuario.cod_usuario) +
                                                    " -  " +
                                                    _vm._s(usuario.nombres) +
                                                    " " +
                                                    _vm._s(usuario.apellidos)
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ])
                                    }
                                  ),
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _vm.errors.has("cliente")
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.errors.first("cliente"))
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-6" }, [
                            _c("p", { staticClass: "h3" }, [
                              _vm._v("Empresa de Transporte"),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "form-floating mb-3",
                                class: {
                                  "is-invalid": _vm.errors.first("transporte"),
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
                                        value: _vm.id_empresa_transporte,
                                        expression: "id_empresa_transporte",
                                      },
                                    ],
                                    staticClass: "form-select",
                                    attrs: {
                                      name: "transporte",
                                      id: "transporte",
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
                                        _vm.id_empresa_transporte = $event
                                          .target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      },
                                    },
                                  },
                                  _vm._l(
                                    _vm.transportes,
                                    function (transporte, index) {
                                      return _c(
                                        "option",
                                        {
                                          key: index,
                                          domProps: {
                                            value:
                                              transporte.id_empresa_transporte,
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                               " +
                                              _vm._s(transporte.codigo) +
                                              " - " +
                                              _vm._s(transporte.nombre) +
                                              "\n                                            "
                                          ),
                                        ]
                                      )
                                    }
                                  ),
                                  0
                                ),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "transporte" } }, [
                                  _vm._v("Selecciona un transporte"),
                                ]),
                                _vm._v(" "),
                                _vm.errors.has("transporte")
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("transporte"))
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-4" }, [
                        _c("p", { staticClass: "h3" }, [_vm._v("WareHouse")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-floating mt-2" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.warehouse,
                                expression: "warehouse",
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'",
                              },
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.errors.first("warehouse"),
                            },
                            attrs: {
                              type: "text",
                              id: "warehouse",
                              name: "warehouse",
                              "aria-expanded": "false",
                              "data-vv-validate-on": "change",
                            },
                            domProps: { value: _vm.warehouse },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.warehouse = $event.target.value
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "warehouse" } }, [
                            _vm._v("WareHouse"),
                          ]),
                          _vm._v(" "),
                          _vm.errors.has("warehouse")
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(_vm._s(_vm.errors.first("warehouse"))),
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
                          "table table-transparent table-responsive mt-4 mb-3",
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
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: item.tracking,
                                        expression: "item.tracking",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      required: "",
                                      name: "tracking",
                                      placeholder: "tracking",
                                    },
                                    domProps: { value: item.tracking },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "tracking",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", {}, [
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: item.descripcion,
                                        expression: "item.descripcion",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      required: "",
                                      name: "example-textarea-input",
                                      rows: "1",
                                      placeholder: "Descripcion",
                                    },
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
                                  }),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", {}, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: item.num_piezas,
                                        expression: "item.num_piezas",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      pattern: "[0-9]+",
                                      required: "",
                                      name: "piezas",
                                      placeholder: "numero de piezas",
                                    },
                                    domProps: { value: item.num_piezas },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "num_piezas",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", {}, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: item.ancho,
                                        expression: "item.ancho",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      pattern: "[0-9,.]+",
                                      required: "",
                                      name: "ancho",
                                      placeholder: "ancho",
                                    },
                                    domProps: { value: item.ancho },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "ancho",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", {}, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: item.largo,
                                        expression: "item.largo",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      pattern: "[0-9,.]+",
                                      required: "",
                                      name: "largo",
                                      placeholder: "largo",
                                    },
                                    domProps: { value: item.largo },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "largo",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", {}, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: item.alto,
                                        expression: "item.alto",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      pattern: "[0-9,.]+",
                                      required: "",
                                      name: "alto",
                                      placeholder: "alto",
                                    },
                                    domProps: { value: item.alto },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "alto",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("span", {}, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: item.peso,
                                        expression: "item.peso",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      pattern: "[0-9,.]+",
                                      required: "",
                                      name: "peso",
                                      placeholder: "peso",
                                    },
                                    domProps: { value: item.peso },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "peso",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "span",
                                  {
                                    staticClass: "avatar avatar-sm",
                                    style:
                                      "background-image: url(" +
                                      item.ruta_image +
                                      ")",
                                  },
                                  [
                                    _c("input", {
                                      staticClass: "form-control input-file_s",
                                      attrs: { type: "file", id: index },
                                      on: {
                                        change: function ($event) {
                                          return _vm.changeFileImage($event)
                                        },
                                      },
                                    }),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                index > 0
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
                                              value: index,
                                              title: "Quitar",
                                            },
                                            on: {
                                              click: function ($event) {
                                                return _vm.deleteTracking(
                                                  $event
                                                )
                                              },
                                            },
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "ti ti-trash",
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
                        _c("btn-volver", { attrs: { classe: "btn-light" } }),
                        _vm._v(" "),
                        _c(
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
                        ),
                      ],
                      1
                    ),
                  ]),
                ]
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
        _c("th", { staticStyle: { width: "20%" } }, [_vm._v("Nro. Tracking")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" } }, [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("nro. Piezas")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Ancho")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Largo")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Alto")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Peso")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Img")]),
        _vm._v(" "),
        _c("th", {}),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);