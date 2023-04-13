"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_tables_datatables_InfoPreAlertas_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'InfoPreAlertas',
  props: ['data'],
  data: function data() {
    return {
      getId: [],
      datos: [],
      show: {
        paquete: false,
        images: false
      },
      title: {
        paquete: '',
        images: ''
      },
      dato: {},
      imagenMiniatura: ''
    };
  },
  methods: {
    checkId: function checkId(e) {
      var _this = this;

      var trackings = this.getId;
      var aux = '';
      if (trackings.length == 0) trackings.push(e.target.value);else trackings = this.getId.filter(function (item) {
        return item !== e.target.value;
      });

      var check = function check(val) {
        return _this.datos.filter(function (item) {
          return item.id_tracking === val;
        });
      };

      for (var i = 0; i < trackings.length; i++) {
        if (check(trackings[i]).length == 0) {
          aux = trackings[i];
          break;
        } else {
          var _check$ = check(trackings[i])[0],
              image = _check$.image,
              ancho = _check$.ancho,
              alto = _check$.alto,
              largo = _check$.largo,
              peso = _check$.peso,
              num_piezas = _check$.num_piezas;

          if (image == '' || ancho == '' || alto == '' || largo == '' || peso == '' || num_piezas == '') {
            aux = trackings[i];
          }

          break;
        }
      }

      if (aux != '') {
        var dta = this.data.filter(function (item) {
          return item.id_tracking === aux;
        });
        alert("Por Favor Debe Agregar Los datos del Tracking: ".concat(dta[0].tracking));
        e.preventDefault();
      }

      var datos = this.datos.filter(function (item) {
        return item.id_tracking !== aux;
      });
      this.getId = trackings.filter(function (item) {
        return item !== aux;
      });
      this.$emit('getTrackings', datos.length != 0 && trackings.length != 0 ? datos : []);
    },
    showModal: function showModal(e) {
      var _this2 = this;

      var btn = e.target.parentNode;

      for (var prop in this.show) {
        if (prop != btn.id) {
          this.show[prop] = false;
        }
      }

      this.show[btn.id] = true;
      this.dato = this.propDato();

      var dta = function dta(val) {
        return _this2.data.filter(function (item) {
          return item.id_tracking === val;
        });
      };

      this.title[btn.id] = dta(btn.value)[0].tracking;

      var check = function check(val) {
        return _this2.datos.filter(function (item) {
          return item.id_tracking === val;
        });
      };

      if (check(btn.value).length == 0) this.dato.id_tracking = btn.value;else this.dato = check(btn.value)[0];
    },
    hiddenModal: function hiddenModal() {
      for (var prop in this.show) {
        this.show[prop] = false;
      }
    },
    saveDataPaquete: function saveDataPaquete(e) {
      var _this3 = this;

      this.$validator.validate().then(function (valid) {
        if (valid) {
          _this3.save(e.target.id, _this3.dato.id_tracking);
        }
      });
    },
    saveDataImages: function saveDataImages(e) {
      this.save(e.target.id, this.dato.id_tracking); //this.imagenMiniatura = '';
    },
    save: function save(id, value) {
      var bol = true;

      for (var i = 0; i < this.datos.length; i++) {
        if (this.datos[i].id_tracking == this.dato.id_tracking) {
          this.datos[i] = this.dato;
          bol = false;
          break;
        }
      }

      if (bol) {
        this.datos.push(this.dato);
      }

      this.updateBtnColor(id, value);
      this.hiddenModal();
      this.dato = {};
      console.log(this.datos);
    },
    updateBtnColor: function updateBtnColor(id, val) {
      var domBtns = document.getElementsByClassName('btn-acticon_spalert');
      console.log(id, val);

      for (var i = 0; i < domBtns.length; i++) {
        if (domBtns[i].id == id && domBtns[i].value == val) {
          var clss = 'text-green';

          if (id == 'alert') {
            clss = this.dato.type_notify == 'lime' ? 'text-green' : this.dato.type_notify == 'yellow' ? 'text-yellow' : 'text-red';
          }

          domBtns[i].classList.add(clss);
        }
      }
    },
    changeFileImage: function changeFileImage(e) {
      var _this4 = this;

      var file = e.target.files[0];

      if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg') {
        this.dato.image = file;
        var render = new FileReader();

        render.onload = function (e) {
          _this4.imagenMiniatura = e.target.result;
        };

        render.readAsDataURL(file);
      } else {
        alert('Por Favor agregar imagen');
      }
    },
    propDato: function propDato() {
      return {
        id_tracking: '',
        ancho: '',
        alto: '',
        largo: '',
        peso: '',
        num_piezas: '',
        image: ''
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPreAlertas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoPreAlertas.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPreAlertas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPreAlertas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/tables/datatables/InfoPreAlertas.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/tables/datatables/InfoPreAlertas.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InfoPreAlertas_vue_vue_type_template_id_8cdb3a0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoPreAlertas.vue?vue&type=template&id=8cdb3a0c& */ "./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=template&id=8cdb3a0c&");
/* harmony import */ var _InfoPreAlertas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoPreAlertas.vue?vue&type=script&lang=js& */ "./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=script&lang=js&");
/* harmony import */ var _InfoPreAlertas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InfoPreAlertas.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InfoPreAlertas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoPreAlertas_vue_vue_type_template_id_8cdb3a0c___WEBPACK_IMPORTED_MODULE_0__.render,
  _InfoPreAlertas_vue_vue_type_template_id_8cdb3a0c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tables/datatables/InfoPreAlertas.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPreAlertas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoPreAlertas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPreAlertas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPreAlertas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoPreAlertas.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=template&id=8cdb3a0c&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=template&id=8cdb3a0c& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPreAlertas_vue_vue_type_template_id_8cdb3a0c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPreAlertas_vue_vue_type_template_id_8cdb3a0c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPreAlertas_vue_vue_type_template_id_8cdb3a0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoPreAlertas.vue?vue&type=template&id=8cdb3a0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=template&id=8cdb3a0c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=template&id=8cdb3a0c&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/InfoPreAlertas.vue?vue&type=template&id=8cdb3a0c& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
            staticStyle: {
              border: "1px solid rgb(1 5 12 / 34%)",
              cursor: "pointer",
            },
            attrs: {
              type: "checkbox",
              name: "id",
              "aria-label": "Select invoice",
            },
            domProps: {
              value: item.id_tracking,
              checked: Array.isArray(_vm.getId)
                ? _vm._i(_vm.getId, item.id_tracking) > -1
                : _vm.getId,
            },
            on: {
              click: function ($event) {
                return _vm.checkId($event)
              },
              change: function ($event) {
                var $$a = _vm.getId,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = item.id_tracking,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.getId = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.getId = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.getId = $$c
                }
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("td", [_c("span", {}, [_vm._v(" " + _vm._s(item.nombre))])]),
        _vm._v(" "),
        _c("td", [_c("span", {}, [_vm._v(" " + _vm._s(item.tracking))])]),
        _vm._v(" "),
        _c("td", [_c("span", {}, [_vm._v(" " + _vm._s(item.descripcion))])]),
        _vm._v(" "),
        _vm._m(0, true),
        _vm._v(" "),
        _c("td", [
          _c("div", { staticClass: "btn-list flex-nowrap" }, [
            _c(
              "button",
              {
                directives: [{ name: "title", rawName: "v-title" }],
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
                  staticStyle: { "font-size": "21px" },
                }),
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                directives: [{ name: "title", rawName: "v-title" }],
                staticClass: "btn-acticon_spalert",
                attrs: {
                  id: "images",
                  value: item.id_tracking,
                  type: "button",
                  title: "Imagenes de tracking recibido",
                },
                on: {
                  click: function ($event) {
                    return _vm.showModal($event)
                  },
                },
              },
              [
                _c("i", {
                  staticClass: "ti ti-photo",
                  staticStyle: { "font-size": "21px" },
                }),
              ]
            ),
          ]),
        ]),
      ])
    }),
    0
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("span", {})])
  },
]
render._withStripped = true



/***/ })

}]);