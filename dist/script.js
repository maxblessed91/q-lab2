/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Formular-Black\";\n  src: url(\"/src/fonts/Formular-Black.eot\");\n  src: local(\"☺\"), url(\"/src/fonts/Formular-Black.woff\") format(\"woff\"), url(\"/src/fonts/Formular-Black.ttf\") format(\"truetype\"), url(\"/src/fonts/Formular-Black.svg\") format(\"svg\");\n  font-weight: 900;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Formular-Bold\";\n  src: url(\"/src/fonts/Formular-Bold.eot\");\n  src: local(\"☺\"), url(\"/src/fonts/Formular-Bold.woff\") format(\"woff\"), url(\"/src/fonts/Formular-Bold.ttf\") format(\"truetype\"), url(\"/src/fonts/Formular-Bold.svg\") format(\"svg\");\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Formular-Regular\";\n  src: url(\"/src/fonts/Formular-Regular.eot\");\n  src: local(\"☺\"), url(\"/src/fonts/Formular-Regular.woff\") format(\"woff\"), url(\"/src/fonts/Formular-Regular.ttf\") format(\"truetype\"), url(\"/src/fonts/Formular-Regular.svg\") format(\"svg\");\n  font-weight: 400;\n  font-style: normal;\n}\n.stack__title, .promo__title, h3, h2, h1 {\n  font-family: \"Formular-Black\", sans-serif;\n}\n\n.link, .stack__text, .promo__text, .navigation, .button-big, p, h4, body {\n  font-family: \"Formular-Regular\", sans-serif;\n}\n\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  margin: 0;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 29px;\n}\n\nh1 {\n  font-size: 46px;\n  font-style: normal;\n  font-weight: 900;\n  line-height: 56px;\n}\n\nh2 {\n  font-size: 36px;\n  font-style: normal;\n  font-weight: 900;\n  line-height: 44px;\n}\n\nh3 {\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 900;\n  line-height: 29px;\n}\n\nh4 {\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 29px;\n}\n\np {\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 22px;\n}\n\n.button-circle {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  padding: 0px;\n  background: conic-gradient(from 45deg at 0% 100%, #3e007b -31.88deg, #0085ff 31.88deg, #3e007b 328.12deg, #0085ff 391.87deg);\n}\n@media (max-width: 390px) {\n  .button-circle {\n    display: none;\n  }\n}\n@media (max-width: 360px) {\n  .button-circle {\n    display: none;\n  }\n}\n.button-circle:hover {\n  animation: spin 1s ease-in-out 0.3s 1;\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.button-big {\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 27px;\n  color: #ffffff;\n  width: 220px;\n  height: 65px;\n  border-radius: 7px;\n  border: none;\n  background: conic-gradient(from 45deg at 0% 100%, #3e007b -31.88deg, #0085ff 31.88deg, #3e007b 328.12deg, #0085ff 391.87deg);\n  cursor: pointer;\n}\n.button-big:hover {\n  background: conic-gradient(from 64.69deg at 0% 100%, #3e007b -31.88deg, #0085ff 31.88deg, #3e007b 328.12deg, #0085ff 391.87deg);\n  width: 220px;\n  height: 65px;\n  border: 1px solid #000000;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n@media (max-width: 390px) {\n  .button-big {\n    position: relative;\n    bottom: 78px;\n    left: 10px;\n    width: 184px;\n    height: 54px;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 21px;\n  }\n}\n@media (max-width: 360px) {\n  .button-big {\n    position: relative;\n    bottom: 78px;\n    left: 10px;\n    width: 184px;\n    height: 54px;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 21px;\n  }\n}\n\n.hamburger__line, .hamburger:after, .hamburger:before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  background: conic-gradient(from 45deg at 0% 100%, #3e007b -31.88deg, #0085ff 31.88deg, #3e007b 328.12deg, #0085ff 391.87deg);\n  border-radius: 5px;\n  height: 3px;\n  width: 100%;\n}\n\n.hamburger {\n  display: none;\n  position: relative;\n  width: 23px;\n  height: 18px;\n}\n@media (max-width: 390px) {\n  .hamburger {\n    display: inline-block;\n  }\n}\n@media (max-width: 360px) {\n  .hamburger {\n    display: inline-block;\n  }\n}\n.hamburger:before {\n  top: 0;\n  left: 0;\n}\n.hamburger:after {\n  bottom: 0;\n  left: 0;\n}\n\n.hamburger__line {\n  top: calc(50% - 1.5px);\n}\n\n.navigation {\n  display: flex;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 22px;\n}\n@media (max-width: 360px) {\n  .navigation {\n    display: none;\n  }\n}\n@media (max-width: 390px) {\n  .navigation {\n    display: none;\n  }\n}\n\n.navigation__link {\n  list-style: none;\n  color: #000000;\n  padding: 0 21px;\n  cursor: pointer;\n}\n@media (max-width: 360px) {\n  .navigation__link {\n    display: none;\n  }\n}\n@media (max-width: 390px) {\n  .navigation__link {\n    display: none;\n  }\n}\n.navigation__link:hover {\n  text-decoration: underline;\n  text-decoration-color: blue;\n}\n\n.promo {\n  padding: 7px 20px 0 20px;\n  margin: auto;\n}\n@media (max-width: 390px) {\n  .promo {\n    overflow: hidden;\n  }\n}\n@media (max-width: 360px) {\n  .promo {\n    overflow: hidden;\n  }\n}\n\n.promo__wrapper {\n  padding-top: 72px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #eff0f5;\n}\n@media (max-width: 390px) {\n  .promo__wrapper {\n    padding-top: 36px;\n  }\n}\n@media (max-width: 360px) {\n  .promo__wrapper {\n    padding-top: 36px;\n  }\n}\n\n.promo__content {\n  padding-right: 102px;\n  padding-left: 65px;\n  max-width: 567px;\n}\n@media (max-width: 390px) {\n  .promo__content {\n    max-width: 360px;\n    padding-right: 40px;\n    padding-left: 16px;\n  }\n}\n@media (max-width: 360px) {\n  .promo__content {\n    max-width: 360px;\n    padding-right: 40px;\n    padding-left: 16px;\n  }\n}\n\n.promo__title {\n  margin: 0 0 30px;\n  font-size: 46px;\n  font-style: normal;\n  font-weight: 900;\n  line-height: 56px;\n}\n@media (max-width: 390px) {\n  .promo__title {\n    font-size: 27.9px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 34px;\n  }\n}\n@media (max-width: 360px) {\n  .promo__title {\n    font-size: 27.9px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 34px;\n  }\n}\n\n.promo__title_colored {\n  display: block;\n  background: linear-gradient(45deg, #3E007B 33%, #0085FF 100%);\n  -webkit-background-clip: text;\n  background-clip: none;\n  -webkit-text-fill-color: transparent;\n}\n\n.promo__text {\n  max-width: 567px;\n  margin: 0 0 30px;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 27px;\n}\n@media (max-width: 390px) {\n  .promo__text {\n    display: none;\n  }\n}\n@media (max-width: 360px) {\n  .promo__text {\n    display: none;\n  }\n}\n\n.promo__buttons {\n  padding-bottom: 50px;\n}\n@media (max-width: 390px) {\n  .promo__buttons {\n    padding-bottom: 0;\n  }\n}\n@media (max-width: 360px) {\n  .promo__buttons {\n    padding-bottom: 0;\n  }\n}\n\n.promo__image {\n  padding-right: 65px;\n}\n@media (max-width: 390px) {\n  .promo__image {\n    display: none;\n  }\n}\n@media (max-width: 360px) {\n  .promo__image {\n    display: none;\n  }\n}\n\n.promo__image_mobile {\n  display: none;\n}\n@media (max-width: 390px) {\n  .promo__image_mobile {\n    max-width: 115%;\n    padding-left: 0;\n    display: flex;\n  }\n}\n@media (max-width: 360px) {\n  .promo__image_mobile {\n    max-width: 115%;\n    padding-left: 0;\n    display: flex;\n  }\n}\n\n.stack {\n  padding: 7px 20px 0 20px;\n  margin: auto;\n}\n\n.stack__wrapper {\n  padding-top: 72px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media (max-width: 390px) {\n  .stack__wrapper {\n    padding-top: 36px;\n  }\n}\n@media (max-width: 360px) {\n  .stack__wrapper {\n    padding-top: 36px;\n  }\n}\n\n.stack__content {\n  padding-right: 102px;\n  padding-left: 65px;\n}\n@media (max-width: 390px) {\n  .stack__content {\n    max-width: 360px;\n    padding-right: 40px;\n    padding-left: 16px;\n  }\n}\n@media (max-width: 360px) {\n  .stack__content {\n    max-width: 360px;\n    padding-right: 40px;\n    padding-left: 16px;\n  }\n}\n\n.stack__title {\n  margin: 0 0 30px;\n  font-size: 36px;\n  font-style: normal;\n  font-weight: 900;\n  line-height: 44px;\n  max-width: 507px;\n}\n@media (max-width: 390px) {\n  .stack__title {\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 900;\n    line-height: 29px;\n  }\n}\n@media (max-width: 360px) {\n  .stack__title {\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 900;\n    line-height: 29px;\n  }\n}\n\n.stack__text {\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 27px;\n  max-width: 670px;\n}\n@media (max-width: 390px) {\n  .stack__text {\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 21px;\n    max-width: 260px;\n  }\n}\n@media (max-width: 360px) {\n  .stack__text {\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 21px;\n  }\n}\n\n.header__wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.header-left__wrapper {\n  display: flex;\n  align-items: center;\n  padding: 0 43px;\n}\n@media (max-width: 390px) {\n  .header-left__wrapper {\n    padding: 17px 12px 2px 12px;\n  }\n}\n@media (max-width: 360px) {\n  .header-left__wrapper {\n    padding: 17px 12px 2px 12px;\n  }\n}\n\n@media (max-width: 390px) {\n  .logo-object {\n    width: 60%;\n  }\n}\n@media (max-width: 360px) {\n  .logo-object {\n    width: 60%;\n  }\n}\n\n.link {\n  text-decoration: none;\n  color: #000000;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 22px;\n  margin-right: 35px;\n}\n@media (max-width: 390px) {\n  .link {\n    display: none;\n  }\n}\n@media (max-width: 360px) {\n  .link {\n    display: none;\n  }\n}\n\n.header__link {\n  padding: 0 17px 0px 0px;\n}\n\n.wrapper {\n  max-width: 1300px;\n  margin: auto;\n}\n.header__wrapper {\n  max-width: 1920px;\n}\n@media (max-width: 390px) {\n  .header__wrapper {\n    padding: 2px 21px;\n  }\n}\n@media (max-width: 360px) {\n  .header__wrapper {\n    padding: 2px 21px;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    var nonce =  true ? __webpack_require__.nc : undefined;

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=script.js.map