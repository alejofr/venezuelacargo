"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["FilterComponent"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilterComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilterComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var generateRandomString = function generateRandomString(num) {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result1 = '';
  var charactersLength = characters.length;

  for (var i = 0; i < num; i++) {
    result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result1;
};

var loaderWhite = function loaderWhite() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoaderWhiteComponent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./LoaderWhiteComponent.vue */ "./resources/js/components/LoaderWhiteComponent.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FilterComponent',
  props: ['filters', 'request'],
  data: function data() {
    return {
      params: {},
      query: {}
    };
  },
  created: function created() {
    var newRequest = _objectSpread({}, this.request);

    newRequest = _objectSpread({}, newRequest);
    var _newRequest = newRequest,
        query = _newRequest.params.query; //let request = Object.assign({}, this.initRequest);

    if (Object.keys(this.$route.query).length != 0) {
      query = _objectSpread({}, this.$route.query);
      var aux = {};

      for (var key in query) {
        if (key != 'token') aux[key] = query[key];
      }

      query = aux;
      newRequest.params.query = query;
      newRequest.params.page = this.$route.query.hasOwnProperty("page") && this.$route.query.page.match(/^[0-9]+$/) ? parseInt(this.$route.query.page) : newRequest.params.page;
    }

    this.$store.dispatch('tableadmin/initTable', newRequest); //this.$store.dispatch('tableadmin/initRequesTable', request);
    //addInitRe(Object.assign({}, request));

    this.query = query; //console.log('solo una vez');
  },
  computed: {
    stateStoreTable: function stateStoreTable() {
      return _objectSpread({}, this.$route);
    },
    stateStoreTableInit: function stateStoreTableInit() {
      return _objectSpread({}, this.$store.getters['tableadmin/getInitRequest']);
    },
    noSearch: function noSearch() {
      var query = _objectSpread({}, this.query);

      query.search = '';
      return query;
    },
    cardBodyComponent: function cardBodyComponent() {
      var cmpts = this.$store.getters['tableadmin/getComponents'];
      return cmpts.cardBody == 'loaderWhite' ? loaderWhite : '';
    }
  },
  methods: {
    changeFilter: function changeFilter(e) {
      this.query[e.target.name] = e.target.value;
      this.params = _objectSpread({}, this.query);
      this.params.token = generateRandomString(46);
    },
    resetSearch: function resetSearch() {
      this.params.search = this.query.search = '';
    },
    changeQueryPadre: function changeQueryPadre(newQury) {
      this.query = _objectSpread({}, newQury);
    },
    changeRequestPadre: function changeRequestPadre(newRe) {
      this.$store.dispatch('tableadmin/initTable', _objectSpread({}, newRe));
    }
  },
  watch: {
    stateStoreTable: function stateStoreTable() {
      if (this.$store.getters['tableadmin/getRequest'].url == '' && this.filters.name == this.$route.name) {
        this.$emit('consulReq');
        this.$emit('consulReqQury');
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/FilterComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/FilterComponent.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilterComponent_vue_vue_type_template_id_1c992a4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterComponent.vue?vue&type=template&id=1c992a4a& */ "./resources/js/components/FilterComponent.vue?vue&type=template&id=1c992a4a&");
/* harmony import */ var _FilterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/FilterComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterComponent_vue_vue_type_template_id_1c992a4a___WEBPACK_IMPORTED_MODULE_0__.render,
  _FilterComponent_vue_vue_type_template_id_1c992a4a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilterComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilterComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/FilterComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilterComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilterComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilterComponent.vue?vue&type=template&id=1c992a4a&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/FilterComponent.vue?vue&type=template&id=1c992a4a& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterComponent_vue_vue_type_template_id_1c992a4a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterComponent_vue_vue_type_template_id_1c992a4a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterComponent_vue_vue_type_template_id_1c992a4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilterComponent.vue?vue&type=template&id=1c992a4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilterComponent.vue?vue&type=template&id=1c992a4a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilterComponent.vue?vue&type=template&id=1c992a4a&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilterComponent.vue?vue&type=template&id=1c992a4a& ***!
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
  return _c("div", { staticClass: "mb-3" }, [
    Object.keys(_vm.filters).length != 0
      ? _c(
          "div",
          { staticClass: "inner-form" },
          [
            _c(
              "transition",
              { attrs: { name: "component-fade", mode: "out-in" } },
              [
                _c(
                  "keep-alive",
                  [_c(_vm.cardBodyComponent, { tag: "component" })],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _vm.filters.first.placeholder != false
              ? _c(
                  "div",
                  { staticClass: "input-field first-wrap" },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.query.search,
                          expression: "query.search",
                        },
                        { name: "title", rawName: "v-title" },
                      ],
                      attrs: {
                        type: "text",
                        name: "search",
                        id: "search",
                        placeholder: _vm.filters.first.placeholder,
                        title: _vm.filters.first.placeholder,
                      },
                      domProps: { value: _vm.query.search },
                      on: {
                        change: function ($event) {
                          return _vm.changeFilter($event)
                        },
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.query, "search", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.query.search != ""
                      ? _c(
                          "router-link",
                          {
                            staticClass: "btn-close-search",
                            attrs: {
                              to: {
                                name: _vm.filters.name,
                                query: _vm.noSearch,
                              },
                            },
                            nativeOn: {
                              click: function ($event) {
                                return _vm.resetSearch()
                              },
                            },
                          },
                          [_c("i", { staticClass: "icon-clear ti ti-x" })]
                        )
                      : _vm._e(),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.filters.second, function (field, index) {
              return _c(
                "div",
                {
                  directives: [{ name: "title", rawName: "v-title" }],
                  key: index,
                  staticClass: "input-field second-wrap",
                  attrs: { title: field.title },
                },
                [
                  _c("div", { staticClass: "icon-wrap" }, [
                    _c("span", {
                      class: {
                        "ti ti-selector": field.type == "select",
                        "ti ti-calendar-event": field.type == "date",
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  field.type == "select"
                    ? _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.query[field.name],
                              expression: "query[field.name]",
                            },
                          ],
                          attrs: { name: field.name, id: field.name },
                          on: {
                            change: [
                              function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.query,
                                  field.name,
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function ($event) {
                                return _vm.changeFilter($event)
                              },
                            ],
                          },
                        },
                        _vm._l(field.data, function (data, key) {
                          return _c(
                            "option",
                            {
                              key: key,
                              domProps: { value: data[field.option.value] },
                            },
                            [_vm._v(_vm._s(data[field.option.name]))]
                          )
                        }),
                        0
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  field.type == "date"
                    ? _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.query[field.name],
                            expression: "query[field.name]",
                          },
                        ],
                        attrs: {
                          type: "date",
                          name: field.name,
                          id: field.name,
                        },
                        domProps: { value: _vm.query[field.name] },
                        on: {
                          change: function ($event) {
                            return _vm.changeFilter($event)
                          },
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.query, field.name, $event.target.value)
                          },
                        },
                      })
                    : _vm._e(),
                ]
              )
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "input-field submit-wrap" },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: { name: _vm.filters.name, query: _vm.params },
                    },
                  },
                  [_c("i", { staticClass: "ti ti-search" })]
                ),
              ],
              1
            ),
            _vm._v(" "),
            Object.keys(this.$route.query).length != 0
              ? _c(
                  "div",
                  { staticClass: "input-field reset-wrap" },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: _vm.filters.name } } },
                      [_c("span", { staticClass: "ti ti-trash" })]
                    ),
                  ],
                  1
                )
              : _vm._e(),
          ],
          2
        )
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon-wrap" }, [
      _c("span", { staticClass: "ti ti-search" }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);