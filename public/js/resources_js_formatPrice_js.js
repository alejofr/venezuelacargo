"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_formatPrice_js"],{

/***/ "./resources/js/formatPrice.js":
/*!*************************************!*\
  !*** ./resources/js/formatPrice.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var fields = [{
  field: 'tarifa_maritimo',
  money: 'usd'
}, {
  field: 'tarifa_aereo',
  money: 'usd'
}];

var formatPrice = function formatPrice() {
  for (var i = 0; i < fields.length; i++) {
    if (document.getElementById(fields[i].field)) {
      (function () {
        var spdor_decimal = fields[i].money == 'usd' ? '.' : fields[i].money == 'ves' ? ',' : null;
        var spdor_unid = fields[i].money == 'usd' ? ',' : fields[i].money == 'ves' ? '.' : null;
        document.getElementById(fields[i].field).addEventListener('keypress', function (e) {
          var key = window.Event ? e.which : e.keyCod;

          if (key < 48 || key > 57) {
            e.preventDefault();
          }
        });
        document.getElementById(fields[i].field).addEventListener('keyup', function (e) {
          var key = window.Event ? e.which : e.keyCod;

          if (key == 8 || key >= 96 && key <= 105) {
            e.target.value = constructPrice(e.target.value, spdor_unid, spdor_decimal);
          }
        });
        document.getElementById(fields[i].field).addEventListener('click', function (e) {
          if (e.target.value == '') e.target.value = '0' + spdor_decimal + '00';
        });
      })();
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatPrice);

/***/ })

}]);