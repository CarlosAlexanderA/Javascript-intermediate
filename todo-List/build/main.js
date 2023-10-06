/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;0,600;0,800;0,900;1,200;1,400;1,500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --pink-pale: #c38d9e;\n  --gray-low: #eee;\n  --purple-dark: #501f3a;\n  --green-ligth: #3ba395;\n  --red: rgb(255, 0, 0);\n  --yellow: rgb(250, 250, 3);\n  --green: rgb(5, 138, 5);\n  --letter-normal: #141414;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Poppins\", \"sans-serif\";\n  width: 100vw;\n  height: 100vh;\n}\nul,\nli {\n  list-style: none;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\nbutton {\n  border: none;\n  background-color: transparent;\n}\ninput[type=\"checkbox\"] {\n  width: 1.3em;\n  height: 1.3em;\n}\ninput,\ntextarea {\n  border: none;\n}\ntextarea {\n  resize: none;\n}\ninput:focus-visible,\ntextarea:focus-visible {\n  outline: none;\n}\n#content {\n  width: 100%;\n  height: 100vh;\n  background-color: #3ba395;\n}\n\n#content > .square-to-do {\n  background-color: #f7f7f7;\n  width: 80%;\n  margin: 0 auto;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n}\n.container {\n  margin: 0 auto;\n  padding: 1em 3%;\n}\n.square-to-do > header.header {\n  background-color: var(--pink-pale);\n  color: white;\n}\nheader.header .logo > h1 {\n  display: flex;\n  letter-spacing: 0.15em;\n  gap: 0.5em;\n}\n#content main {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  gap: 1em;\n}\nmain > aside {\n  background-color: var(--gray-low);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 3.5em 3em;\n  color: var(--letter-normal);\n}\nmain > aside > nav > ul {\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\nmain > aside > nav > ul > li > a {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.1rem;\n  font-weight: 300;\n}\nmain > aside > nav > ul > li > a:not(.other-list):hover > span,\nmain > aside > nav > ul > li > a.active > span,\nmain > aside > nav > ul > li > a.other-list ~ ul a:hover > span,\nmain > aside > nav > ul > li > a.other-list ~ ul a.active > span {\n  color: var(--purple-dark);\n  font-weight: 500;\n  font-size: 1.2em;\n}\nmain > aside > nav > ul > li > a.active > span::before,\nmain > aside > nav > ul > li > a:hover > span::before,\nmain > aside > nav > ul > li > a.other-list ~ ul a:hover > span::before,\nmain > aside > nav > ul > li > a.other-list ~ ul a.active > span::before {\n  content: \"//\";\n  font-size: 0.8em;\n  margin-right: 0.4em;\n}\n.number-round {\n  background-color: var(--pink-pale);\n  width: 1.5em;\n  height: 1.5em;\n  padding: 0.3em;\n  border-radius: 3em;\n  color: white;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n.number-round > span {\n  font-size: 0.9em;\n}\n\n.btn-circle > button {\n  /* background-color: transparent; */\n  color: white;\n  background-color: var(--pink-pale);\n  border-radius: 5em;\n  overflow: hidden;\n  width: 0.8em;\n  height: 0.8em;\n  font-size: 2em;\n  padding: 0.8em;\n  display: grid;\n  place-content: center;\n  box-shadow: 5px 5px 15px -8px rgba(0, 0, 0, 0.75);\n  cursor: pointer;\n}\nmain > aside > nav > ul > li > a.other-list ~ ul {\n  margin: 1em 0 1em 1em;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\nmain > aside > nav > ul > li > a.other-list ~ ul > li > a {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 300;\n}\nmain .main-container {\n  padding-top: 2em;\n}\nmain .main-container .container {\n  height: 100%;\n}\nmain .main-container .container > .list-notes {\n  /* background-color: aqua; */\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n  gap: 1em;\n}\n\n.list-notes > .card {\n  display: flex;\n  justify-content: space-between;\n  background-color: #eee;\n  border-left: 2px solid var(--red);\n  padding: 0.6em 0.5em;\n}\n.list-notes > .card:hover {\n  -webkit-transform: scale(1.003);\n  transform: scale(1.003);\n  -webkit-transform-origin: 50% 50%;\n  transform-origin: 50% 50%;\n  -webkit-box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);\n  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n.list-notes > .card > .left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.7em;\n  color: var(--letter-normal);\n}\n.list-notes > .card > .left > input {\n  accent-color: var(--green-ligth);\n  border: 2px solid red;\n}\n.cont {\n  display: flex;\n  align-items: center;\n  transform: scale(1);\n}\n/* checked */\ninput[type=\"checkbox\"] {\n  height: 1.2rem;\n  width: 1.2rem;\n  margin: 5px;\n  display: inline-block;\n  appearance: none;\n  position: relative;\n  background-color: #f2ecff;\n  border-radius: 27%;\n  cursor: pointer;\n  overflow: hidden;\n  border: 0.2em solid var(--green-ligth);\n}\n\ninput[type=\"checkbox\"]::after {\n  content: \"\";\n  display: block;\n  height: 0.45rem;\n  width: 0.2rem;\n  border-bottom: 0.2rem solid #a0ffe7;\n  border-right: 0.2rem solid #a0ffe7;\n  opacity: 0;\n  transform: rotate(45deg) translate(-50%, -50%);\n  position: absolute;\n  top: 47%;\n  left: 18%;\n  transition: 0.25s ease;\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  display: block;\n  height: 0;\n  width: 0;\n  background-color: var(--green-ligth);\n  border-radius: 50%;\n  opacity: 0.5;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transition: 0.3s ease;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  height: 130%;\n  width: 130%;\n  opacity: 100%;\n}\n\ninput[type=\"checkbox\"]:checked::after {\n  opacity: 100%;\n}\n/* sadasdas */\n.list-notes > .card > .left > h5 {\n  font-weight: 400;\n  font-size: 0.8rem;\n}\n.list-notes > .card > .right {\n  display: flex;\n  gap: 1em;\n  align-items: center;\n}\n.list-notes > .card > .right > span {\n  font-size: 0.8em;\n  font-weight: 500;\n  color: var(--purple-dark);\n  transition: all 0.3s;\n}\n.list-notes > .card > .right > span:not(#fch-simple):hover {\n  color: var(--green-ligth);\n  cursor: pointer;\n}\n.list-notes > .card > .right > button {\n  font-size: 0.8em;\n  padding: 0.4em 0.5em;\n}\n\n#content > .modal-new-nota {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n\n  backdrop-filter: blur(10px);\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  display: none;\n}\n#content > .modal-new-nota > .square-form {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-template-columns: 1fr 3fr;\n  grid-template-areas:\n    \"header header\"\n    \"aside main\";\n  background-color: aqua;\n  width: 60%;\n  height: 60%;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n#content > .modal-new-nota > .square-form > .top-square-form {\n  grid-area: header;\n  background-color: var(--pink-pale);\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1em 2.5em;\n  letter-spacing: 0.15em;\n}\n\n#content > .modal-new-nota > .square-form > aside.left-form {\n  grid-area: aside;\n  background-color: var(--gray-low);\n  padding-top: 1.5em;\n  padding-left: 3em;\n  font-size: 1.4em;\n  color: var(--letter-normal);\n}\n#content > .modal-new-nota > .square-form > aside.left-form > ul {\n  display: flex;\n  flex-direction: column;\n  gap: 0.7em;\n}\n#content > .modal-new-nota > .square-form > aside.left-form > ul > li > span {\n  font-weight: 300;\n}\n#content > .modal-new-nota > .square-form > .form-main {\n  grid-area: main;\n  background-color: white;\n  padding: 2em;\n}\n.form-main > #to-do {\n  /* background-color: violet; */\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.form-main > #to-do > .text-form {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n}\n.form-main > #to-do > .text-form > input,\n.form-main > #to-do > .text-form > textarea {\n  outline: none;\n  overflow: hidden;\n  background-color: #f3f3f3;\n  border-radius: 10px;\n  transition: all 0.1s;\n  padding: 0.5em;\n  font-size: 1.2rem;\n}\n\n.form-main > #to-do > .text-form > input:hover,\n.form-main > #to-do > .text-form > input:focus,\n.form-main > #to-do > .text-form > textarea:hover,\n.form-main > #to-do > .text-form > textarea:focus {\n  border: 2px solid #4a9dec;\n  box-shadow: 0px 0px 1px 5px rgb(74, 157, 236, 20%);\n  background-color: white;\n}\n.form-main > #to-do > .details-form {\n  display: flex;\n  justify-content: space-between;\n}\n.form-main > #to-do > .details-form > .dates-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n}\n.form-main > #to-do > .details-form > .dates-form > .date-form {\n  display: flex;\n  gap: 1em;\n}\n\n.form-main .dates-form > .date-form > .date-form-options {\n  display: flex;\n  gap: 1em;\n}\nlabel {\n  font-size: 1.1rem;\n}\n.date-form-options input[type=\"radio\"] {\n  clip: rect(0 0 0 0);\n  clip-path: inset(100%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n.date-form-options label span {\n  display: block;\n  position: relative;\n  transition: background-color 0.5s ease;\n}\n.btn-light {\n  --color-prim: #3ba395;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  padding: 0.2em 0.5em;\n  border: 1px solid var(--color-prim);\n  color: var(--color-prim);\n  border-radius: 0.3em;\n  cursor: pointer;\n  letter-spacing: 0.05em;\n  text-align: center;\n  font-weight: 500;\n}\n.btn-light.green {\n  color: var(--green);\n  border: 1px solid var(--green);\n}\n.btn-light.orange {\n  color: orange;\n  border: 1px solid orange;\n}\n.btn-light.red {\n  color: var(--red);\n  border: 1px solid var(--red);\n}\n\n.btn-light:not(input[type=\"date\"]):active,\n.btn-light:not(input[type=\"date\"]):hover {\n  background-color: var(--color-prim);\n  z-index: 1;\n  color: white;\n}\n.date-form-options input[type=\"radio\"]:checked + span.red,\n.date-form-options span.red:hover {\n  background-color: var(--red);\n  z-index: 1;\n  color: white;\n}\n.date-form-options input[type=\"radio\"]:checked + span.orange,\n.date-form-options span.orange:hover {\n  background-color: orange;\n  z-index: 1;\n  color: white;\n}\n.date-form-options input[type=\"radio\"]:checked + span.green,\n.date-form-options span.green:hover {\n  background-color: var(--green);\n  z-index: 1;\n  color: white;\n}\n.details-form > .submit-form {\n  display: flex;\n  align-items: end;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;