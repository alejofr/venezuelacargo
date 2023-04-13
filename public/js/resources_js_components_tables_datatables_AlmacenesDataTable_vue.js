"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_tables_datatables_AlmacenesDataTable_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/AlmacenesDataTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/AlmacenesDataTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var reItemAlmacen = function reItemAlmacen() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  for (var i = 0; i < data.length; i++) {
    if (data[i].id_almacen === id) return data[i];
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AlmacenesDataTable',
  props: ['data'],
  data: function data() {
    return {
      getId: []
    };
  },
  computed: {
    type: function type() {
      return Object.keys(this.$store.getters['tableadmin/getRequest'].params).length !== 0 && this.$store.getters['tableadmin/getRequest'].params.query.hasOwnProperty('instrucciones') && this.$store.getters['tableadmin/getRequest'].params.query.instrucciones == 'si' && this.$route.name == 'IndexAlmacen' ? 'checkbox' : 'radio';
    }
  },
  beforeCreate: function beforeCreate() {
    this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (this.$store.getters['tableadmin/getRequest'].params.query.instrucciones == 'si') {
                this.getId = this.getStorage();
                this.$emit('getId', this.getId);
              } else {
                window.sessionStorage.removeItem('idLocalStorage');
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
  },
  methods: {
    destroy_wh: function destroy_wh(e) {
      var value = e.target.parentNode.value;
      this.$emit('destroyWH', value);
    },
    getStorage: function getStorage() {
      if (window.sessionStorage.getItem('idLocalStorage') !== undefined && window.sessionStorage.getItem('idLocalStorage')) {
        return JSON.parse(sessionStorage.getItem('idLocalStorage')).data;
      }

      return [];
    },
    changeId: function changeId(e) {
      var value = e.target.value;
      var getDataLocalStorage = {};

      if (window.sessionStorage.getItem('idLocalStorage') !== undefined && window.sessionStorage.getItem('idLocalStorage')) {
        getDataLocalStorage = JSON.parse(sessionStorage.getItem('idLocalStorage'));
      }

      var _reItemAlmacen = reItemAlmacen(this.data, value),
          usuario_id = _reItemAlmacen.usuario_id,
          tipo_envio = _reItemAlmacen.tipo_envio,
          reempaque = _reItemAlmacen.reempaque;

      if (this.getId.includes(value)) {
        var newGetId = [];

        for (var i = 0; i < this.getId.length; i++) {
          if (this.getId[i] != value) newGetId.push(this.getId[i]);
        }

        this.getId = newGetId;
      } else {
        if (Object.keys(getDataLocalStorage).length !== 0) {
          if (getDataLocalStorage.usuario_id !== usuario_id) {
            alert('Por favor, debe agregar los WareHouse que pertenezca a un solo cliente');
            e.preventDefault();
            return;
          } else if (getDataLocalStorage.tipo_envio != tipo_envio) {
            alert('Por favor, debe agregar los WareHouse que pertenezca a un solo tipo de envio');
            e.preventDefault();
            return;
          } else if (getDataLocalStorage.reempaque != reempaque) {
            alert('Por favor, los envios con reempaque se factura por separdo y los directos igual');
            e.preventDefault();
            return;
          }
        }

        this.getId.push(value);
      }

      window.sessionStorage.removeItem('idLocalStorage');
      getDataLocalStorage.usuario_id = usuario_id;
      getDataLocalStorage.tipo_envio = tipo_envio;
      getDataLocalStorage.reempaque = reempaque;
      getDataLocalStorage.data = this.getId;

      if (this.getId.length > 0) {
        window.sessionStorage.setItem('idLocalStorage', JSON.stringify(getDataLocalStorage));
      }

      this.$emit('getId', this.getId);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/tables/datatables/AlmacenesDataTable.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/tables/datatables/AlmacenesDataTable.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AlmacenesDataTable_vue_vue_type_template_id_62f0feea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlmacenesDataTable.vue?vue&type=template&id=62f0feea& */ "./resources/js/components/tables/datatables/AlmacenesDataTable.vue?vue&type=template&id=62f0feea&");
/* harmony import */ var _AlmacenesDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlmacenesDataTable.vue?vue&type=script&lang=js& */ "./resources/js/components/tables/datatables/AlmacenesDataTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlmacenesDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlmacenesDataTable_vue_vue_type_template_id_62f0feea___WEBPACK_IMPORTED_MODULE_0__.render,
  _AlmacenesDataTable_vue_vue_type_template_id_62f0feea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tables/datatables/AlmacenesDataTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/tables/datatables/AlmacenesDataTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/tables/datatables/AlmacenesDataTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlmacenesDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlmacenesDataTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/AlmacenesDataTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlmacenesDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tables/datatables/AlmacenesDataTable.vue?vue&type=template&id=62f0feea&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/tables/datatables/AlmacenesDataTable.vue?vue&type=template&id=62f0feea& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlmacenesDataTable_vue_vue_type_template_id_62f0feea___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlmacenesDataTable_vue_vue_type_template_id_62f0feea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlmacenesDataTable_vue_vue_type_template_id_62f0feea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlmacenesDataTable.vue?vue&type=template&id=62f0feea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/AlmacenesDataTable.vue?vue&type=template&id=62f0feea&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/AlmacenesDataTable.vue?vue&type=template&id=62f0feea&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/datatables/AlmacenesDataTable.vue?vue&type=template&id=62f0feea& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
          _vm.type === "checkbox"
            ? _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.getId,
                    expression: "getId",
                  },
                  {
                    name: "show",
                    rawName: "v-show",
                    value: item.status == 1,
                    expression: "item.status == 1",
                  },
                ],
                staticClass: "form-check-input m-0 align-middle",
                staticStyle: { border: "1px solid #b9b9b9", cursor: "pointer" },
                attrs: {
                  name: "id",
                  "aria-label": "Select invoice",
                  type: "checkbox",
                },
                domProps: {
                  value: item.id_almacen,
                  checked: Array.isArray(_vm.getId)
                    ? _vm._i(_vm.getId, item.id_almacen) > -1
                    : _vm.getId,
                },
                on: {
                  click: function ($event) {
                    return _vm.changeId($event)
                  },
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
              })
            : _vm.type === "radio"
            ? _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.getId,
                    expression: "getId",
                  },
                  {
                    name: "show",
                    rawName: "v-show",
                    value: item.status == 1,
                    expression: "item.status == 1",
                  },
                ],
                staticClass: "form-check-input m-0 align-middle",
                staticStyle: { border: "1px solid #b9b9b9", cursor: "pointer" },
                attrs: {
                  name: "id",
                  "aria-label": "Select invoice",
                  type: "radio",
                },
                domProps: {
                  value: item.id_almacen,
                  checked: _vm._q(_vm.getId, item.id_almacen),
                },
                on: {
                  click: function ($event) {
                    return _vm.changeId($event)
                  },
                  change: function ($event) {
                    _vm.getId = item.id_almacen
                  },
                },
              })
            : _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.getId,
                    expression: "getId",
                  },
                  {
                    name: "show",
                    rawName: "v-show",
                    value: item.status == 1,
                    expression: "item.status == 1",
                  },
                ],
                staticClass: "form-check-input m-0 align-middle",
                staticStyle: { border: "1px solid #b9b9b9", cursor: "pointer" },
                attrs: {
                  name: "id",
                  "aria-label": "Select invoice",
                  type: _vm.type,
                },
                domProps: { value: item.id_almacen, value: _vm.getId },
                on: {
                  click: function ($event) {
                    return _vm.changeId($event)
                  },
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.getId = $event.target.value
                  },
                },
              }),
        ]),
        _vm._v(" "),
        _c("td", [
          _c("span", {}, [
            _vm._v(" " + _vm._s(item.nombres) + " " + _vm._s(item.apellidos)),
          ]),
        ]),
        _vm._v(" "),
        _c("td", [_c("span", {}, [_vm._v(" " + _vm._s(item.warehouse))])]),
        _vm._v(" "),
        _c("td", [_c("span", {}, [_vm._v(" " + _vm._s(item.tracking))])]),
        _vm._v(" "),
        _c("td", [_c("span", {}, [_vm._v(" " + _vm._s(item.peso))])]),
        _vm._v(" "),
        _c("td", [_c("span", {}, [_vm._v(" " + _vm._s(item.volumen))])]),
        _vm._v(" "),
        _c("td", [_c("span", {}, [_vm._v(" " + _vm._s(item.pie_cubico))])]),
        _vm._v(" "),
        _c("td", [_c("span", {}, [_vm._v(" " + _vm._s(item.tipo_envio))])]),
        _vm._v(" "),
        _c("td", [
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: item.status == 1,
                  expression: "item.status == 1",
                },
              ],
            },
            [
              _vm._v(
                " " +
                  _vm._s(
                    "" + (item.reempaque == "no" ? "Directo" : "Reempaque")
                  )
              ),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("td", [
          _c("span", { staticClass: "avatar bg-green-lt status-vzla" }, [
            _vm._v(" " + _vm._s(item.estado)),
          ]),
        ]),
        _vm._v(" "),
        _c("td", [
          _c(
            "div",
            {
              staticClass: "btn-list flex-nowrap m-0-all",
              staticStyle: { "align-items": "center" },
            },
            [
              _c("router-link", {
                directives: [{ name: "title", rawName: "v-title" }],
                staticClass: "btn semaforo-btn align-text-top me-2",
                class: {
                  "btn-danger": item.status == 0,
                  "btn-success": item.status == 1,
                },
                staticStyle: { "margin-bottom": "0 !important" },
                attrs: {
                  to: {
                    name: "InstructAlmacen",
                    params: { id: item.id_solicitud },
                    query: { estado: item.estado_prealerta },
                  },
                  title: item.status == 0 ? "Por Asignar" : "Asigando",
                },
              }),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  directives: [{ name: "title", rawName: "v-title" }],
                  staticClass: "align-text-top nav-link m-0",
                  staticStyle: {
                    padding: "0",
                    "margin-bottom": "0 !important",
                  },
                  attrs: {
                    to: {
                      name: "EditarWarehose",
                      params: { id: item.id_almacen },
                    },
                    title: "Editar WareHouse",
                  },
                },
                [
                  _c("i", {
                    staticClass: "ti ti-edit",
                    staticStyle: { "font-size": "21px" },
                  }),
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  directives: [{ name: "title", rawName: "v-title" }],
                  staticClass: "align-text-top nav-link m-0",
                  staticStyle: {
                    padding: "0",
                    "margin-bottom": "0 !important",
                  },
                  attrs: {
                    type: "button",
                    value: item.id_almacen,
                    title: "Eliminar WH",
                  },
                  on: {
                    click: function ($event) {
                      return _vm.destroy_wh($event)
                    },
                  },
                },
                [_c("i", { staticClass: "ti ti-trash fs-19" })]
              ),
            ],
            1
          ),
        ]),
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);