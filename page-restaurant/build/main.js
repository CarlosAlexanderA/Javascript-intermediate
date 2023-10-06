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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./CascadiaCodePL.ttf */ \"./src/CascadiaCodePL.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./CascadiaCodePL.woff2 */ \"./src/CascadiaCodePL.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;0,600;0,800;0,900;1,200;1,400;1,500&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"Cascadia Code\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"ttf\"),\n    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(\"woff2\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --dark-blue: #042f4b;\n  --pink: #ed1250;\n  --pale-yellow: #fff6da;\n  --orange: #fbc99d;\n  --salmon: rgba(255, 68, 68, 0.28);\n}\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\nh2 {\n  color: inherit;\n}\nul {\n  list-style: none;\n  display: flex;\n  gap: 3.5em;\n}\nbutton {\n  border: none;\n  cursor: pointer;\n}\n\n.container {\n  margin: 0 10%;\n}\nheader.header > .container > nav > ul > li > a.on {\n  color: var(--pink);\n}\nbody {\n  font-family: \"Poppins\", \"sans-serif\";\n  width: 100vw;\n  height: 100vh;\n}\n#content {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  background-color: #ed1250;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: stretch;\n}\n.header {\n  background-color: var(--dark-blue);\n  color: var(--pale-yellow);\n  padding: 1.2em 0.5em;\n  /* position: relative;\n  z-index: 1000; */\n}\n.header > .container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header .logo {\n  color: var(--pink);\n  font-size: 1.3em;\n  font-weight: 900;\n}\n.header nav a {\n  font-weight: 500;\n  font-size: 1.1em;\n}\nmain {\n  width: 100%;\n  flex-grow: 1;\n}\n.active {\n  display: block !important;\n}\nmain > #home {\n  background-image: url(\"https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80\");\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\nmain > #home > .container {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n}\nmain > #home > .container > .hero {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1em;\n}\n\n.hero > h1 {\n  font-size: 3.3em;\n  background-image: linear-gradient(\n    to right,\n    var(--pink) 0%,\n    var(--orange) 100%\n  );\n  background-clip: text;\n  color: transparent;\n  font-weight: 900;\n  text-wrap: balance;\n  text-align: center;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero > p {\n  font-size: 1.3em;\n  color: var(--orange);\n  font-weight: 700;\n  letter-spacing: 0.05em;\n}\n.hero > button {\n  font-size: 1.5em;\n  font-weight: 800;\n  color: var(--pale-yellow);\n  background-color: var(--pink);\n  padding: 0.5em 1em;\n  border-radius: 1em;\n}\nmain > #home > .container > .info {\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: var(--pale-yellow);\n  margin: 2em 6em;\n  border-radius: 0.5em;\n  padding: 1.5em 2em;\n}\n.info .card {\n  flex: 1 1 50%;\n  display: flex;\n  gap: 1em;\n}\n\n.info .card > span,\n.info .card > p {\n  font-weight: 600;\n  font-size: 1.2em;\n}\n.card > span,\n.card > p > span {\n  color: var(--pink);\n}\n#home .info > .card > .material-symbols-outlined {\n  font-size: 1.9em;\n}\n\nmain #menu {\n  background-color: var(--pale-yellow);\n  padding: 2em 0.5em;\n  display: none;\n}\n\nmain #menu .container,\nmain #contact .container {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n}\nmain #menu .hero,\nmain #contact .hero {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\nmain #menu .hero > h3,\nmain #contact .hero > h3 {\n  font-size: 2.5em;\n  position: relative;\n}\nmain #menu .hero > h3::after,\nmain #contact .hero > h3::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  right: 30%;\n  width: 50%;\n  height: 2px;\n  background-color: var(--pink);\n}\nmain #menu .hero > h3 > span {\n  font-size: 1em;\n}\nmain #menu .menu-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));\n  grid-template-rows: repeat(\n    2,\n    auto\n  ); /* Aquí definimos dos filas autoajustables */\n  background-color: var(--orange);\n  padding: 2em 3em;\n  border-radius: 2em;\n  justify-items: stretch;\n  align-items: center;\n  justify-content: space-between;\n  row-gap: 3em;\n  column-gap: 1em;\n}\n.menu-container .card {\n  display: flex;\n  gap: 1em;\n  align-items: center;\n  padding: 1em;\n}\n.menu-container .card > img {\n  width: 182px;\n}\n.menu-container .card > .text-card {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  gap: 0.5em;\n  font-size: 1.4em;\n}\n.card > .text-card > h5 {\n  font-size: 1.1em;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom: 2px dashed var(--dark-blue);\n}\n.card > .text-card > h5 > span {\n  color: var(--pink);\n}\n.card > .text-card > p {\n  word-spacing: 0.3em;\n}\nmain #contact {\n  background-color: var(--pale-yellow);\n  height: 100%;\n  display: none;\n}\nmain #contact .contact-container {\n  flex-grow: 1;\n  background-color: var(--orange);\n  padding: 3.5em;\n  border-radius: 2em;\n  margin: 3em 10rem;\n}\n#contact .contact-container > .contact-square {\n  display: flex;\n  align-items: stretch;\n  gap: 8%;\n}\n\n#contact .contact-container > .contact-square > .contact-form {\n  width: 40%;\n  flex-basis: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5em;\n}\n.contact-form > .form-info {\n  display: flex;\n  gap: 1em;\n  flex-direction: column;\n}\n.contact-form > .form-info > .item > p {\n  line-height: 1.3em;\n}\n.contact-form > .form-info > .item > p > span {\n  color: var(--pink);\n}\n.contact-form > form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5em;\n}\n.contact-form form > .form-title {\n  font-size: 1.3em;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  color: var(--pink);\n  display: flex;\n  gap: 0.4em;\n}\ninput,\ntextarea {\n  border: none;\n  background-color: transparent;\n  border-bottom: 2px solid black;\n  padding: 0.5em 0.3em;\n  font-size: 1.1em;\n  font-family: \"Poppins\";\n  width: 100%;\n}\ntextarea {\n  resize: none;\n}\ntextarea:focus-visible,\ninput:focus-visible {\n  outline: none;\n}\n.contact-form form button {\n  color: white;\n  border: none;\n  background-color: var(--pink);\n  display: inline;\n  padding: 0.8em 2.5em;\n  border-radius: 0.3em;\n  font-size: 1em;\n  font-weight: 500;\n}\n#contact .contact-container > .contact-square > .location-map {\n  /* width: ; */\n  flex-grow: 6;\n  flex-basis: auto;\n}\n.contact-square > .location-map > iframe {\n  width: 100%;\n  height: 100%;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://page-restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://page-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://page-restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://page-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://page-restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://page-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://page-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://page-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://page-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://page-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://page-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nfunction header() {\n  const head = document.createElement(\"header\");\n  head.classList.add(\"header\");\n  const container = document.createElement(\"div\");\n  container.classList.add(\"container\");\n  const logo = document.createElement(\"div\");\n  logo.classList.add(\"logo\");\n  const logoLetter = document.createElement(\"h2\");\n  logoLetter.innerText = \"Foot-on-a-Plate\";\n  logo.appendChild(logoLetter);\n\n  const nav = document.createElement(\"nav\");\n  const ul = document.createElement(\"ul\");\n  for (let i = 0; i < 3; i++) {\n    const li = document.createElement(\"li\");\n    const alink = document.createElement(\"a\");\n    alink.href = \"#\";\n    alink.className = `link ${i === 0 ? \"on\" : \"\"}`;\n\n    switch (i) {\n      case 0:\n        alink.id = \"at-home\";\n        alink.textContent = \"Home\";\n        break;\n      case 1:\n        alink.id = \"at-menu\";\n        alink.textContent = \"Menu\";\n        break;\n      case 2:\n        alink.id = \"at-contact\";\n        alink.textContent = \"Contact us\";\n        break;\n    }\n    li.appendChild(alink);\n    ul.appendChild(li);\n  }\n\n  nav.appendChild(ul);\n  container.append(logo, nav);\n  head.appendChild(container);\n\n  return head;\n}\n\nfunction main() {\n  const mainContent = document.createElement(\"main\");\n\n  //forma mas optima, pero falta añadir mas estructura html de forma en js\n  // for (let i = 0; i < 1; i++) {\n  //   const blockDiv = document.createElement(\"div\");\n  //   const container = document.createElement(\"div\");\n  //   const hero = document.createElement(\"div\");\n  //   hero.classList.add(\"hero\");\n  //   container.appendChild(hero);\n  //   container.classList.add(\"container\");\n  //   blockDiv.appendChild(container);\n\n  //   switch (i) {\n  //     case 0:\n  //       blockDiv.classList.add(\"active\");\n  //       blockDiv.id = \"home\";\n  //       const titleHome = document.createElement(\"h1\");\n  //       const parrfHome = document.createElement(\"p\");\n  //       const btnHome = document.createElement(\"button\");\n  //       titleHome.textContent = \"Come on down for some delicious cuisine!\";\n  //       parrfHome.textContent = \"Tasty and affordable!\";\n  //       btnHome.textContent = \"Order Now\";\n  //       hero.append(titleHome, parrfHome, btnHome);\n\n  //       const info = document.createElement(\"div\");\n  //       info.classList.add(\"info\");\n\n  //       for (let j = 0; j < 2; j++) {\n  //         const card = document.createElement(\"div\");\n  //         card.classList.add(\"card\");\n  //         const icon = document.createElement(\"span\");\n  //         icon.classList.add(\"material-symbols-outlined\");\n  //         const parrCard = document.createElement(\"p\");\n\n  //         switch (j) {\n  //           case 0:\n  //             icon.textContent = \"location_on\";\n  //             parrCard.innerHTML = \"1024 Pakwood Ave <br />San diego, CA 22434\";\n  //             card.append(icon, parrCard);\n  //             info.appendChild(card);\n  //             break;\n  //           case 1:\n  //             icon.textContent = \"schedule\";\n  //             parrCard.innerHTML =\n  //               \"<span>Mon-Thurs: </span>8am-8pm <br /> <span>Fri-Sun: </span>8am-11pm\";\n  //             card.append(icon, parrCard);\n  //             info.appendChild(card);\n  //             break;\n  //         }\n  //       }\n  //       container.appendChild(info);\n  //       break;\n\n  //     default:\n  //       break;\n  //   }\n  //   mainContent.appendChild(blockDiv);\n  // }\n\n  //estructura del codigo html\n  mainContent.innerHTML = `<div id=\"home\" class=\"active\">\n  <div class=\"container\">\n    <div class=\"hero\">\n      <h1>Come on down for some delicious cuisine!</h1>\n      <p>Tasty and affordable!</p>\n      <button class=\"btn btn-order\">Order Now</button>\n    </div>\n    <div class=\"info\">\n      <div class=\"card\">\n        <span class=\"material-symbols-outlined\"> location_on </span>\n        <p>1024 Pakwood Ave <br />San diego, CA 22434</p>\n      </div>\n      <div class=\"card\">\n        <span class=\"material-symbols-outlined\"> schedule </span>\n        <p>\n          <span>Mon-Thurs: </span>8am-8pm <br />\n          <span>Fri-Sun: </span>8am-11pm\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"menu\">\n  <div class=\"container\">\n    <div class=\"hero\">\n      <h3>\n        Menu <span class=\"material-symbols-outlined\"> fastfood </span>\n      </h3>\n    </div>\n    <div class=\"menu-container\">\n      <div class=\"card\">\n        <img\n          src=\"https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png\"\n          alt=\"\"\n        />\n        <div class=\"text-card\">\n          <h5>Hamburguer:<span>$12.49</span></h5>\n          <p>\n            Buns, patty, tomato, onions, lettuce, and our secret family\n            recipe.\n          </p>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img\n          src=\"https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png\"\n          alt=\"\"\n        />\n        <div class=\"text-card\">\n          <h5>Hamburguer:<span>$12.49</span></h5>\n          <p>\n            Buns, patty, tomato, onions, lettuce, and our secret family\n            recipe.\n          </p>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img\n          src=\"https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png\"\n          alt=\"\"\n        />\n        <div class=\"text-card\">\n          <h5>Hamburguer:<span>$12.49</span></h5>\n          <p>\n            Buns, patty, tomato, onions, lettuce, and our secret family\n            recipe.\n          </p>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img\n          src=\"https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png\"\n          alt=\"\"\n        />\n        <div class=\"text-card\">\n          <h5>Hamburguer:<span>$12.49</span></h5>\n          <p>\n            Buns, patty, tomato, onions, lettuce, and our secret family\n            recipe.\n          </p>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img\n          src=\"https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png\"\n          alt=\"\"\n        />\n        <div class=\"text-card\">\n          <h5>Hamburguer:<span>$12.49</span></h5>\n          <p>\n            Buns, patty, tomato, onions, lettuce, and our secret family\n            recipe.\n          </p>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img\n          src=\"https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png\"\n          alt=\"\"\n        />\n        <div class=\"text-card\">\n          <h5>Hamburguer:<span>$12.49</span></h5>\n          <p>\n            Buns, patty, tomato, onions, lettuce, and our secret family\n            recipe.\n          </p>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img\n          src=\"https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png\"\n          alt=\"\"\n        />\n        <div class=\"text-card\">\n          <h5>Hamburguer:<span>$12.49</span></h5>\n          <p>\n            Buns, patty, tomato, onions, lettuce, and our secret family\n            recipe.\n          </p>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img\n          src=\"https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png\"\n          alt=\"\"\n        />\n        <div class=\"text-card\">\n          <h5>Hamburguer:<span>$12.49</span></h5>\n          <p>\n            Buns, patty, tomato, onions, lettuce, and our secret family\n            recipe.\n          </p>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img\n          src=\"https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png\"\n          alt=\"\"\n        />\n        <div class=\"text-card\">\n          <h5>Hamburguer:<span>$12.49</span></h5>\n          <p>\n            Buns, patty, tomato, onions, lettuce, and our secret family\n            recipe.\n          </p>\n        </div>\n      </div>\n      <div class=\"card\">\n        <img\n          src=\"https://static.vecteezy.com/system/resources/previews/024/280/420/non_2x/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png\"\n          alt=\"\"\n        />\n        <div class=\"text-card\">\n          <h5>Hamburguer:<span>$12.49</span></h5>\n          <p>\n            Buns, patty, tomato, onions, lettuce, and our secret family\n            recipe.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"contact\">\n  <div class=\"container\">\n    <div class=\"hero\">\n      <h3>Contact us</h3>\n    </div>\n    <div class=\"contact-container\">\n      <div class=\"contact-square\">\n        <div class=\"contact-form\">\n          <div class=\"form-info\">\n            <div class=\"item\">\n              <p>\n                <span class=\"material-symbols-outlined\">\n                  location_on </span\n                >1024 Oakwood Ave <br />\n                San diego, CA 22434\n              </p>\n            </div>\n            <div class=\"item\">\n              <p>\n                <span class=\"material-symbols-outlined\"> schedule </span\n                >Mon-Thurs: 8am-8pm <br />\n                Fri-Sun: 8am 11pm\n              </p>\n            </div>\n            <div class=\"item\">\n              <p>\n                <span class=\"material-symbols-outlined\"> call </span\n                >(222)-888 5555\n              </p>\n            </div>\n          </div>\n          <form action=\"#\">\n            <h4 class=\"form-title\">\n              <span class=\"material-symbols-outlined\"> mail </span\n              >Messege us\n            </h4>\n            <input\n              type=\"text\"\n              name=\"name\"\n              id=\"name\"\n              placeholder=\"Full Name\"\n            />\n            <input\n              type=\"email\"\n              name=\"mail\"\n              id=\"mail\"\n              placeholder=\"Email\"\n            />\n\n            <textarea\n              name=\"message\"\n              id=\"message\"\n              cols=\"30\"\n              rows=\"2\"\n              placeholder=\"Type your message..\"\n            ></textarea>\n            <div>\n              <button>Send</button>\n            </div>\n          </form>\n        </div>\n        <div class=\"location-map\">\n          <iframe\n            src=\"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d969.8298650801368!2d-71.97896250564764!3d-13.515976266575954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMcDonalds!5e0!3m2!1ses!2spe!4v1696365020346!5m2!1ses!2spe\"\n            style=\"border: 0\"\n            allowfullscreen=\"\"\n            loading=\"lazy\"\n            referrerpolicy=\"no-referrer-when-downgrade\"\n          ></iframe>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>`;\n  return mainContent;\n}\n\nconst content = document.getElementById(\"content\");\ncontent.append(header(), main());\n\nconst home = document.getElementById(\"home\");\nconst menu = document.getElementById(\"menu\");\nconst contact = document.getElementById(\"contact\");\n\nconst links = document.querySelectorAll(\".link\");\nlinks.forEach((link, index) => {\n  link.addEventListener(\"click\", (item) => {\n    links.forEach((link) => link.classList.remove(\"on\"));\n\n    link.classList.add(\"on\");\n    switch (item.target.id) {\n      case \"at-home\":\n        menu.classList.remove(\"active\");\n        contact.classList.remove(\"active\");\n        home.classList.add(\"active\");\n        break;\n      case \"at-menu\":\n        home.classList.remove(\"active\");\n        contact.classList.remove(\"active\");\n        menu.classList.add(\"active\");\n\n        break;\n      case \"at-contact\":\n        home.classList.remove(\"active\");\n        menu.classList.remove(\"active\");\n        contact.classList.add(\"active\");\n        break;\n\n      default:\n        break;\n    }\n  });\n});\n\n\n//# sourceURL=webpack://page-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/CascadiaCodePL.ttf":
/*!********************************!*\
  !*** ./src/CascadiaCodePL.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7b8b2e756cc987b8022f.ttf\";\n\n//# sourceURL=webpack://page-restaurant/./src/CascadiaCodePL.ttf?");

/***/ }),

/***/ "./src/CascadiaCodePL.woff2":
/*!**********************************!*\
  !*** ./src/CascadiaCodePL.woff2 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1d0ee0b0ab06a71d7c17.woff2\";\n\n//# sourceURL=webpack://page-restaurant/./src/CascadiaCodePL.woff2?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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