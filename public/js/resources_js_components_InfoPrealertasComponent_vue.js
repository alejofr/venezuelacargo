(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_InfoPrealertasComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BtnVolver.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BtnVolver.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InfoPrealertasComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InfoPrealertasComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BtnVolver_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BtnVolver.vue */ "./resources/js/components/BtnVolver.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var tablebody = function tablebody(viewData) {
  return function () {
    return __webpack_require__("./resources/js/components/tables/datatables lazy recursive ^\\.\\/.*\\.vue$")("./".concat(viewData, ".vue"));
  };
};

var LoaderComponent = function LoaderComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoaderComponent_vue-_c2861").then(__webpack_require__.bind(__webpack_require__, /*! ./LoaderComponent.vue */ "./resources/js/components/LoaderComponent.vue"));
};

var AlertMessageComponent = function AlertMessageComponent() {
  return __webpack_require__.e(/*! import() */ "AlertMessageComponent").then(__webpack_require__.bind(__webpack_require__, /*! ./AlertMessageComponent.vue */ "./resources/js/components/AlertMessageComponent.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['column', 'dataTble', 'tbody', 'h1', 'action'],
  name: 'InfoComponent',
  data: function data() {
    return {
      loader: false,
      activeComponent: '',
      alert: {
        msg: '',
        clss: ''
      }
    };
  },
  components: {
    BtnVolver: _BtnVolver_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    loader: LoaderComponent
  },
  computed: {
    tbodyComponent: function tbodyComponent() {
      return tablebody(this.tbody);
    },
    json: function json() {
      return {
        warehouse: this.action.value != '' ? this.action.value : '',
        trackings: []
      };
    }
  },
  methods: {
    getTrackings: function getTrackings(valores) {
      console.log(valores);
      this.json.trackings = valores;
    },
    save: function save() {
      var _this = this;

      this.loader = true;
      this.$validator.validate().then(function (valid) {
        if (valid) {
          if (_this.json.trackings.length != 0) {
            console.log(_this.json); //let formData = this.json;

            var formData = new FormData();
            var trackings = _this.json.trackings; // config = {headers: { "content-type": "multipart/form-data" } }

            formData.append('warehouse', _this.json.warehouse);

            for (var i = 0; i < trackings.length; i++) {
              var objt = {};
              var arrKeys = []; //agregamos cada tracking

              for (var key in trackings[i]) {
                if (key != 'image') {
                  formData.append("tracking[".concat(key, "]"), trackings[i][key]);
                  arrKeys.push(key);
                } else {
                  formData.append("images[".concat(trackings[i]['id_tracking'], "]"), trackings[i]['image']);
                }
              } //eliminamos el append trackick y agregamos sus valos a un objeto


              for (var j = 0; j < arrKeys.length; j++) {
                objt[arrKeys[j]] = formData.get("tracking[".concat(arrKeys[j], "]"));
                formData["delete"]("tracking[".concat(arrKeys[j], "]"));
              }

              formData.append("trackings[".concat(i, "]"), JSON.stringify(objt));
            }

            _this.axios.post("".concat(_this.action.url, "/").concat(_this.$route.params.id), formData, {
              headers: {
                "content-type": "multipart/form-data"
              }
            }).then(function (response) {
              console.log(response.data);
              _this.loader = false;
              _this.alert = {
                msg: response.data.message,
                clss: 'updated'
              };
              _this.activeComponent = AlertMessageComponent;
              setTimeout(function () {
                _this.$router.go(-1);
              }, 4000);
            })["catch"](function (error) {
              console.log(error.response.data);
              _this.loader = false;
              _this.alert = {
                msg: error.response.data.message,
                clss: 'error'
              };
              _this.activeComponent = AlertMessageComponent;
            });
          } else {
            alert(_this.action.name == 'prealertas' ? 'debe modificar y seleccionar al menos un tracking' : 'Debe Asignar Instruccion a cada unos de los paquetes registrados');
            _this.loader = false;
          }
        } else {
          _this.loader = false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InfoPrealertasComponent.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InfoPrealertasComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.div-loader_white{\n    margin: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InfoPrealertasComponent.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InfoPrealertasComponent.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPrealertasComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoPrealertasComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InfoPrealertasComponent.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPrealertasComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPrealertasComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


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

"use strict";
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

/***/ "./resources/js/components/InfoPrealertasComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/InfoPrealertasComponent.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InfoPrealertasComponent_vue_vue_type_template_id_7c647089___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoPrealertasComponent.vue?vue&type=template&id=7c647089& */ "./resources/js/components/InfoPrealertasComponent.vue?vue&type=template&id=7c647089&");
/* harmony import */ var _InfoPrealertasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoPrealertasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/InfoPrealertasComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _InfoPrealertasComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InfoPrealertasComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/InfoPrealertasComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InfoPrealertasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoPrealertasComponent_vue_vue_type_template_id_7c647089___WEBPACK_IMPORTED_MODULE_0__.render,
  _InfoPrealertasComponent_vue_vue_type_template_id_7c647089___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/InfoPrealertasComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/BtnVolver.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/BtnVolver.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnVolver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BtnVolver.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BtnVolver.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnVolver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/InfoPrealertasComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/InfoPrealertasComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPrealertasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoPrealertasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InfoPrealertasComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPrealertasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/InfoPrealertasComponent.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/InfoPrealertasComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPrealertasComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoPrealertasComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InfoPrealertasComponent.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/BtnVolver.vue?vue&type=template&id=34e53391&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/BtnVolver.vue?vue&type=template&id=34e53391& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnVolver_vue_vue_type_template_id_34e53391___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnVolver_vue_vue_type_template_id_34e53391___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BtnVolver_vue_vue_type_template_id_34e53391___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BtnVolver.vue?vue&type=template&id=34e53391& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BtnVolver.vue?vue&type=template&id=34e53391&");


/***/ }),

/***/ "./resources/js/components/InfoPrealertasComponent.vue?vue&type=template&id=7c647089&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/InfoPrealertasComponent.vue?vue&type=template&id=7c647089& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPrealertasComponent_vue_vue_type_template_id_7c647089___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPrealertasComponent_vue_vue_type_template_id_7c647089___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoPrealertasComponent_vue_vue_type_template_id_7c647089___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoPrealertasComponent.vue?vue&type=template&id=7c647089& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InfoPrealertasComponent.vue?vue&type=template&id=7c647089&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BtnVolver.vue?vue&type=template&id=34e53391&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BtnVolver.vue?vue&type=template&id=34e53391& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InfoPrealertasComponent.vue?vue&type=template&id=7c647089&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InfoPrealertasComponent.vue?vue&type=template&id=7c647089& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card card-lg" }, [
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
      _vm.activeComponent
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
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6" }, [
          _c("p", { staticClass: "h3" }, [_vm._v(_vm._s(_vm.column.one.name))]),
          _vm._v(" "),
          _c(
            "address",
            _vm._l(_vm.column.one.data, function (item, index) {
              return _c("p", { key: index }, [_vm._v(_vm._s(item.name))])
            }),
            0
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6 text-end" }, [
          _c("p", { staticClass: "h3" }, [_vm._v(_vm._s(_vm.column.two.name))]),
          _vm._v(" "),
          _c(
            "address",
            _vm._l(_vm.column.two.data, function (item, index) {
              return _c("p", { key: index }, [_vm._v(_vm._s(item.name))])
            }),
            0
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 my-5" }, [
          _c("h1", [_vm._v(_vm._s(_vm.h1))]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "table",
        { staticClass: "table table-transparent table-responsive mb-5" },
        [
          _c("thead", [
            _c(
              "tr",
              _vm._l(_vm.column.th, function (item, index) {
                return _c("th", { key: index }, [_vm._v(_vm._s(item.name))])
              }),
              0
            ),
          ]),
          _vm._v(" "),
          _c(_vm.tbodyComponent, {
            tag: "component",
            attrs: { data: _vm.dataTble },
            on: { getTrackings: _vm.getTrackings },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex align-items-center mt-5" }, [
        _c(
          "div",
          {
            staticClass: "pagination m-0 ms-auto",
            staticStyle: { width: "330px" },
          },
          [
            _c(
              "form",
              {
                staticClass: "form-floating mb-3 w-100",
                attrs: { enctype: "multipart/form-data" },
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "numeric",
                      expression: "'numeric'",
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.json.warehouse,
                      expression: "json.warehouse",
                    },
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.first("warehouse") },
                  attrs: {
                    type: "text",
                    name: "warehouse",
                    id: "warehouse",
                    autocomplete: "off",
                    "data-vv-validate-on": "change",
                  },
                  domProps: { value: _vm.json.warehouse },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.json, "warehouse", $event.target.value)
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
              ]
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex align-items-center mt-3" },
        [
          _c("btn-volver", { attrs: { classe: "btn-light" } }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-info ms-auto",
              attrs: { type: "button" },
              on: { click: _vm.save },
            },
            [_vm._v("\n                Guardar\n            ")]
          ),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/tables/datatables lazy recursive ^\\.\\/.*\\.vue$":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/tables/datatables/ lazy ^\.\/.*\.vue$ namespace object ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AlmacenesDataTable.vue": [
		"./resources/js/components/tables/datatables/AlmacenesDataTable.vue",
		"resources_js_components_tables_datatables_AlmacenesDataTable_vue"
	],
	"./EmpresasTransportesDataTable.vue": [
		"./resources/js/components/tables/datatables/EmpresasTransportesDataTable.vue",
		"resources_js_components_tables_datatables_EmpresasTransportesDataTable_vue"
	],
	"./GastosExtrasDataTable.vue": [
		"./resources/js/components/tables/datatables/GastosExtrasDataTable.vue",
		"resources_js_components_tables_datatables_GastosExtrasDataTable_vue"
	],
	"./GeoDataTableComponent.vue": [
		"./resources/js/components/tables/datatables/GeoDataTableComponent.vue",
		"resources_js_components_tables_datatables_GeoDataTableComponent_vue"
	],
	"./InfoAlmacenPrealertas.vue": [
		"./resources/js/components/tables/datatables/InfoAlmacenPrealertas.vue",
		"resources_js_components_tables_datatables_InfoAlmacenPrealertas_vue"
	],
	"./InfoPreAlertas.vue": [
		"./resources/js/components/tables/datatables/InfoPreAlertas.vue",
		"resources_js_components_tables_datatables_InfoPreAlertas_vue"
	],
	"./MonedasCambiosDataTable.vue": [
		"./resources/js/components/tables/datatables/MonedasCambiosDataTable.vue",
		"resources_js_components_tables_datatables_MonedasCambiosDataTable_vue"
	],
	"./MonedasCambiosTasasDataTable.vue": [
		"./resources/js/components/tables/datatables/MonedasCambiosTasasDataTable.vue",
		"resources_js_components_tables_datatables_MonedasCambiosTasasDataTable_vue"
	],
	"./PreAlertasDataTable.vue": [
		"./resources/js/components/tables/datatables/PreAlertasDataTable.vue",
		"resources_js_components_tables_datatables_PreAlertasDataTable_vue"
	],
	"./SkeletonDataTables.vue": [
		"./resources/js/components/tables/datatables/SkeletonDataTables.vue",
		"resources_js_components_tables_datatables_SkeletonDataTables_vue"
	],
	"./TasasDestinosTableComponent.vue": [
		"./resources/js/components/tables/datatables/TasasDestinosTableComponent.vue",
		"resources_js_components_tables_datatables_TasasDestinosTableComponent_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/components/tables/datatables lazy recursive ^\\.\\/.*\\.vue$";
module.exports = webpackAsyncContext;

/***/ })

}]);