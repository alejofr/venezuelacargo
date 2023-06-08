"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["BannerApp"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/BannerApp.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/BannerApp.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
var LoaderComponent = function LoaderComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoaderComponent_vue-_c2860").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/LoaderComponent.vue */ "./resources/js/components/LoaderComponent.vue"));
};

var AlertMessageComponent = function AlertMessageComponent() {
  return __webpack_require__.e(/*! import() */ "AlertMessageComponent").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/AlertMessageComponent.vue */ "./resources/js/components/AlertMessageComponent.vue"));
};

var deleteConfirmModal = function deleteConfirmModal() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_ConfirmDeleteModal_vue-_c4370").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/ConfirmDeleteModal.vue */ "./resources/js/components/ConfirmDeleteModal.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'BannerApp',
  data: function data() {
    return {
      fileImage: '',
      componentRender: LoaderComponent,
      componentRenderOne: '',
      activeComponent: '',
      activeComponentSecond: '',
      cardBodyComponent: '',
      deleteData: {
        url: '',
        id: ''
      },
      alert: {},
      alertSecound: {},
      images: [],
      id_imagen: ''
    };
  },
  beforeCreate: function beforeCreate() {
    this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.getImagenes();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));
  },
  methods: {
    changeFileImage: function changeFileImage(e) {
      var file = e.target.files[0];
      this.fileImage = '';

      if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg') {
        this.fileImage = file;
      } else {
        e.target.value = '';
        alert('Por Favor, debe de agregar una imagen. Con una de estas extensiones "/jpg/jpeg/png"');
      }
    },
    sendImage: function sendImage() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this.alert = {};
                _this.alertSecound = '';
                _this.activeComponentSecond = '';
                _this.activeComponent = '';

                if (!(_this.fileImage === '')) {
                  _context3.next = 9;
                  break;
                }

                _this.alert.msg = 'Error,debe agregar una imagen.';
                _this.alert.clss = 'error';
                _this.activeComponent = AlertMessageComponent;
                return _context3.abrupt("return");

              case 9:
                formData = new FormData();
                formData.append('image', _this.fileImage);
                _this.componentRenderOne = LoaderComponent;
                _this.componentRender = LoaderComponent;
                _context3.next = 15;
                return _this.axios.post('banner-app', formData, {
                  headers: {
                    "content-type": "multipart/form-data"
                  }
                }).then( /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(response) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _this.alert = {
                              msg: response.data.message,
                              clss: 'updated'
                            };
                            setTimeout(function () {
                              _this.activeComponent = AlertMessageComponent;
                              _this.componentRenderOne = '';
                            }, 1500);
                            _context2.next = 4;
                            return _this.getImagenes();

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x) {
                    return _ref2.apply(this, arguments);
                  };
                }())["catch"](function (error) {
                  _this.alert = {
                    msg: error.response.status !== 500 ? error.response.data.message : 'Ha ocurrido un error con el servidor por favor intentar mas tarde',
                    clss: 'error'
                  };
                  setTimeout(function () {
                    _this.activeComponent = AlertMessageComponent;
                    _this.componentRenderOne = '';
                  }, 1500);
                });

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getImagenes: function getImagenes() {
      var _arguments = arguments,
          _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var bol;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                bol = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
                _context4.next = 3;
                return _this2.axios.get('banner-app').then(function (response) {
                  console.log(response.data, 'response.data');

                  if (response.data.results != null && response.data.results.length != 0) {
                    _this2.images = response.data.results;

                    for (var i = 0; i < _this2.images.length; i++) {
                      if (_this2.images[i].estado === 'visible') {
                        _this2.id_imagen = _this2.images[i].id_banner;
                        break;
                      }
                    }
                  } else {
                    _this2.images = [];
                    _this2.alertSecound = {
                      msg: 'No hay imagenes',
                      clss: 'error'
                    };
                    setTimeout(function () {
                      _this2.activeComponentSecond = AlertMessageComponent;
                    }, 2500);
                  }

                  setTimeout(function () {
                    _this2.componentRender = '';
                    if (bol) _this2.activeComponentSecond = AlertMessageComponent;
                  }, 2000);
                })["catch"](function (error) {
                  _this2.alertSecound = {
                    msg: error.response.status !== 500 ? error.response.data.message : 'Ha ocurrido un error con el servidor por favor intentar mas tarde',
                    clss: 'error'
                  };
                  console.log(error.response.data);
                  _this2.activeComponentSecond = AlertMessageComponent;
                  setTimeout(function () {
                    _this2.componentRender = '';
                  }, 2000);
                });

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    onChangeImagen: function onChangeImagen(e) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var value;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this3.alert = {};
                _this3.alertSecound = '';
                _this3.activeComponentSecond = '';
                value = e.target.value;
                _this3.id_imagen = value;
                _this3.activeComponent = '';

                if (!(_this3.id_imagen === '')) {
                  _context6.next = 11;
                  break;
                }

                _this3.alertSecound.msg = 'Error, debe seleccionar una image.';
                _this3.alertSecound.clss = 'error';
                _this3.activeComponentSecond = AlertMessageComponent;
                return _context6.abrupt("return");

              case 11:
                _this3.componentRender = LoaderComponent;
                _context6.next = 14;
                return _this3.axios.put("banner-app/".concat(_this3.id_imagen)).then(function (response) {
                  _this3.alertSecound = {
                    msg: response.data.message,
                    clss: 'updated'
                  };
                  setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return _this3.getImagenes(true);

                          case 2:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  })), 1500);
                })["catch"](function (error) {
                  _this3.alertSecound = {
                    msg: error.response.status !== 500 ? error.response.data.message : 'Ha ocurrido un error con el servidor por favor intentar mas tarde',
                    clss: 'error'
                  };
                  _this3.activeComponentSecond = AlertMessageComponent;
                  _this3.componentRender = '';
                });

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    deleteImagen: function deleteImagen(e) {
      this.alert = {};
      this.alertSecound = '';
      this.activeComponentSecond = '';
      this.activeComponent = '';
      var value = e.target.value;
      console.log('vau id', value);
      this.deleteData = {
        url: 'banner-app',
        id: value
      };
      this.cardBodyComponent = deleteConfirmModal;
    },
    getMessageDelete: function getMessageDelete(response) {
      var _this4 = this;

      this.alertSecound = {
        msg: response.message,
        clss: response.status == 200 ? 'updated' : 'error'
      };
      this.cardBodyComponent = '';

      if (response.status == 200) {
        this.componentRender = LoaderComponent;
        setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return _this4.getImagenes(true);

                case 2:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        })), 1000);
      } else {
        this.activeComponentSecond = AlertMessageComponent;
      }

      this.deleteData = {
        url: '',
        id: ''
      };
    },
    getResetId: function getResetId() {}
  }
});

/***/ }),

/***/ "./resources/js/views/admin/configuracion/BannerApp.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/admin/configuracion/BannerApp.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BannerApp_vue_vue_type_template_id_56397c1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BannerApp.vue?vue&type=template&id=56397c1e& */ "./resources/js/views/admin/configuracion/BannerApp.vue?vue&type=template&id=56397c1e&");
/* harmony import */ var _BannerApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BannerApp.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/configuracion/BannerApp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BannerApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BannerApp_vue_vue_type_template_id_56397c1e___WEBPACK_IMPORTED_MODULE_0__.render,
  _BannerApp_vue_vue_type_template_id_56397c1e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/configuracion/BannerApp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/configuracion/BannerApp.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/admin/configuracion/BannerApp.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BannerApp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/BannerApp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/configuracion/BannerApp.vue?vue&type=template&id=56397c1e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/admin/configuracion/BannerApp.vue?vue&type=template&id=56397c1e& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerApp_vue_vue_type_template_id_56397c1e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerApp_vue_vue_type_template_id_56397c1e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerApp_vue_vue_type_template_id_56397c1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BannerApp.vue?vue&type=template&id=56397c1e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/BannerApp.vue?vue&type=template&id=56397c1e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/BannerApp.vue?vue&type=template&id=56397c1e&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/configuracion/BannerApp.vue?vue&type=template&id=56397c1e& ***!
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
    _c(
      "div",
      { staticClass: "row row-cards" },
      [
        _c("div", { staticClass: "col-12" }, [
          _c(
            "form",
            {
              staticClass: "card card-lg",
              attrs: { name: "bannerapp", enctype: "multipart/form-data" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.sendImage($event)
                },
              },
            },
            [
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c(_vm.componentRenderOne, { tag: "component" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.componentRenderOne === "",
                          expression: "componentRenderOne === ''",
                        },
                      ],
                      staticStyle: {
                        "justify-content": "center",
                        "flex-direction": "column",
                        display: "flex",
                        margin: "0 auto",
                        "max-width": "380px",
                      },
                    },
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
                      _c("div", { staticClass: "mb-3" }, [
                        _c("div", { staticClass: "form-label" }, [
                          _vm._v("Selecciona una imagen"),
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
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-info m-auto mt-3",
                          attrs: { type: "submit" },
                        },
                        [
                          _vm._v(
                            "\r\n                            Guardar\r\n                        "
                          ),
                        ]
                      ),
                    ]
                  ),
                ],
                1
              ),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card card-lg" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _vm.activeComponentSecond != ""
                  ? _c(
                      "div",
                      { staticClass: "w-100 mb-3" },
                      [
                        _c(_vm.activeComponentSecond, {
                          tag: "component",
                          attrs: { alert: _vm.alertSecound },
                        }),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(_vm.componentRender, { tag: "component" }),
                _vm._v(" "),
                _vm.componentRender === ""
                  ? _c(
                      "div",
                      { staticClass: "row row-cards mb-3" },
                      _vm._l(_vm.images, function (imagen, index) {
                        return _c(
                          "div",
                          {
                            key: index,
                            staticClass:
                              "col-12 col-sm-6 col-md-4 col-lg-4 mb-3",
                          },
                          [
                            _c("div", { staticClass: "card card-sm" }, [
                              _c(
                                "a",
                                {
                                  directives: [
                                    { name: "title", rawName: "v-title" },
                                  ],
                                  staticClass: "d-block",
                                  staticStyle: { height: "220px" },
                                  attrs: {
                                    href: imagen.ruta_image,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    title: "Ver Imagen",
                                  },
                                },
                                [
                                  _c("img", {
                                    staticClass: "card-img-top",
                                    staticStyle: {
                                      height: "100%",
                                      width: "100%",
                                      "object-fit": "cover",
                                    },
                                    attrs: { src: imagen.ruta_image },
                                  }),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "card-body",
                                  staticStyle: { padding: "10px 8px" },
                                },
                                [
                                  _c(
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
                                          staticClass:
                                            "align-text-top me-2 nav-link mb-0 btn btn-danger",
                                          staticStyle: { padding: "5px" },
                                          attrs: {
                                            value: imagen.id_banner,
                                            type: "button",
                                            title: "Eliminar Imagen",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.deleteImagen($event)
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                            Eliminar\r\n                                        "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          directives: [
                                            {
                                              name: "title",
                                              rawName: "v-title",
                                            },
                                          ],
                                          staticClass:
                                            "align-text-top me-2 nav-link mb-0 btn",
                                          class: {
                                            "btn-light":
                                              imagen.estado == "visible",
                                            "btn-outline-warning":
                                              imagen.estado == "no-visible",
                                          },
                                          staticStyle: { padding: "5px" },
                                          attrs: {
                                            value: imagen.id_banner,
                                            type: "button",
                                            title:
                                              imagen.estado === "no-visible"
                                                ? "Cambiar a visible"
                                                : "Cambiar a no visible",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.onChangeImagen($event)
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                            " +
                                              _vm._s(
                                                "" +
                                                  (imagen.estado ===
                                                  "no-visible"
                                                    ? "No visible"
                                                    : "Visible")
                                              ) +
                                              "\r\n                                        "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                          ]
                        )
                      }),
                      0
                    )
                  : _vm._e(),
              ],
              1
            ),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "transition",
          { attrs: { name: "component-fade", mode: "out-in" } },
          [
            _c(
              "keep-alive",
              [
                _c(_vm.cardBodyComponent, {
                  tag: "component",
                  attrs: { deleteData: _vm.deleteData },
                  on: {
                    getMessageDelete: _vm.getMessageDelete,
                    getResetId: _vm.getResetId,
                  },
                }),
              ],
              1
            ),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);