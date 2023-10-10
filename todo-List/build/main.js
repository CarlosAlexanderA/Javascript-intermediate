/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;0,600;0,800;0,900;1,200;1,400;1,500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --pink-pale: #c38d9e;
  --gray-low: #eee;
  --purple-dark: #501f3a;
  --green-ligth: #3ba395;
  --red: rgb(255, 0, 0);
  --yellow: rgb(250, 250, 3);
  --green: rgb(5, 138, 5);
  --letter-normal: #141414;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", "sans-serif";
  width: 100vw;
  height: 100vh;
}
ul,
li {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}
button {
  border: none;
  background-color: transparent;
}
input[type="checkbox"] {
  width: 1.3em;
  height: 1.3em;
}
input,
textarea {
  border: none;
}
textarea {
  resize: none;
}
input:focus-visible,
textarea:focus-visible {
  outline: none;
}
#content {
  width: 100%;
  height: 100vh;
  background-color: #3ba395;
}

#content > .square-to-do {
  background-color: #f7f7f7;
  width: 80%;
  margin: 0 auto;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}
.container {
  margin: 0 auto;
  padding: 1em 3%;
}
.square-to-do > header.header {
  background-color: var(--pink-pale);
  color: white;
}
header.header .logo > h1 {
  display: flex;
  letter-spacing: 0.15em;
  gap: 0.5em;
}
#content main {
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1em;
}
main > aside {
  background-color: var(--gray-low);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3.5em 3em;
  color: var(--letter-normal);
}
main > aside > nav > ul {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
main > aside > nav > ul > li > a {
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 300;
}
main > aside > nav > ul > li > a:not(.other-list):hover > span,
main > aside > nav > ul > li > a.active > span,
main > aside > nav > ul > li > a.other-list ~ ul a:hover > span,
main > aside > nav > ul > li > a.other-list ~ ul a.active > span {
  color: var(--purple-dark);
  font-weight: 500;
  font-size: 1.2em;
}
main > aside > nav > ul > li > a.active > span::before,
main > aside > nav > ul > li > a:hover > span::before,
main > aside > nav > ul > li > a.other-list ~ ul a:hover > span::before,
main > aside > nav > ul > li > a.other-list ~ ul a.active > span::before {
  content: "//";
  font-size: 0.8em;
  margin-right: 0.4em;
}
.number-round {
  background-color: var(--pink-pale);
  width: 1.5em;
  height: 1.5em;
  padding: 0.3em;
  border-radius: 3em;
  color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
}
.number-round > span {
  font-size: 0.9em;
}

.btn-circle > button {
  /* background-color: transparent; */
  color: white;
  background-color: var(--pink-pale);
  border-radius: 5em;
  overflow: hidden;
  width: 0.8em;
  height: 0.8em;
  font-size: 2em;
  padding: 0.8em;
  display: grid;
  place-content: center;
  box-shadow: 5px 5px 15px -8px rgba(0, 0, 0, 0.75);
  cursor: pointer;
}
main > aside > nav > ul > li > a.other-list ~ ul {
  margin: 1em 0 1em 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
main > aside > nav > ul > li > a.other-list ~ ul > li > a {
  display: flex;
  justify-content: space-between;
  font-weight: 300;
}
main .main-container {
  padding-top: 2em;
}
main .main-container .container {
  height: 100%;
}
main .main-container .container > .list-notes {
  /* background-color: aqua; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1em;
}

.list-notes > .card {
  justify-content: space-between;
  background-color: #eee;
  border-left: 2px solid var(--red);
  padding: 0.6em 0.5em;
  display: none;
}
.list-notes > .card.active {
  display: flex;
}
.list-notes > .card:hover {
  -webkit-transform: scale(1.003);
  transform: scale(1.003);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.list-notes > .card > .left {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7em;
  color: var(--letter-normal);
}
.list-notes > .card > .left > input {
  accent-color: var(--green-ligth);
  border: 2px solid red;
}
.cont {
  display: flex;
  align-items: center;
  transform: scale(1);
}
/* checked */
input[type="checkbox"] {
  height: 1.2rem;
  width: 1.2rem;
  margin: 5px;
  display: inline-block;
  appearance: none;
  position: relative;
  background-color: #f2ecff;
  border-radius: 27%;
  cursor: pointer;
  overflow: hidden;
  border: 0.2em solid var(--green-ligth);
}

input[type="checkbox"]::after {
  content: "";
  display: block;
  height: 0.45rem;
  width: 0.2rem;
  border-bottom: 0.2rem solid #a0ffe7;
  border-right: 0.2rem solid #a0ffe7;
  opacity: 0;
  transform: rotate(45deg) translate(-50%, -50%);
  position: absolute;
  top: 47%;
  left: 18%;
  transition: 0.25s ease;
}

input[type="checkbox"]::before {
  content: "";
  display: block;
  height: 0;
  width: 0;
  background-color: var(--green-ligth);
  border-radius: 50%;
  opacity: 0.5;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 0.3s ease;
}

input[type="checkbox"]:checked::before {
  height: 130%;
  width: 130%;
  opacity: 100%;
}

input[type="checkbox"]:checked::after {
  opacity: 100%;
}
/* sadasdas */
.list-notes > .card > .left > h5 {
  font-weight: 400;
  font-size: 0.8rem;
}
.list-notes > .card > .right {
  display: flex;
  gap: 1em;
  align-items: center;
}
.list-notes > .card > .right > span {
  font-size: 0.8em;
  font-weight: 500;
  color: var(--purple-dark);
  transition: all 0.3s;
}
.list-notes > .card > .right > span:not(#fch-simple):hover {
  color: var(--green-ligth);
  cursor: pointer;
}
.list-notes > .card > .right > button {
  font-size: 0.8em;
  padding: 0.4em 0.5em;
}

#content > .modal-new-nota {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}
#content > .modal-new-nota > .square-form {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    "header header"
    "aside main";
  background-color: aqua;
  width: 60%;
  height: 60%;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  z-index: 1000;
}
#content > .modal-new-nota > .square-form > .top-square-form {
  grid-area: header;
  background-color: var(--pink-pale);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2.5em;
  letter-spacing: 0.15em;
}
#close-modal > i {
  font-size: 1.5rem;
  cursor: pointer;
}
#content > .modal-new-nota > .square-form > aside.left-form {
  grid-area: aside;
  background-color: var(--gray-low);
  padding-top: 1.5em;
  padding-left: 3em;
  font-size: 1.4em;
  color: var(--letter-normal);
}
#content > .modal-new-nota > .square-form > aside.left-form > ul {
  display: flex;
  flex-direction: column;
  gap: 0.7em;
}
#content > .modal-new-nota > .square-form > aside.left-form > ul > li > span {
  font-weight: 300;
}
#content > .modal-new-nota > .square-form > .form-main {
  grid-area: main;
  background-color: white;
  padding: 2em;
}
.form-main > #to-do {
  /* background-color: violet; */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.form-main > #to-do > .text-form {
  display: flex;
  flex-direction: column;
  gap: 2em;
}
.form-main > #to-do > .text-form > input,
.form-main > #to-do > .text-form > textarea {
  outline: none;
  overflow: hidden;
  background-color: #f3f3f3;
  border-radius: 10px;
  transition: all 0.1s;
  padding: 0.5em;
  font-size: 1.2rem;
}

.form-main > #to-do > .text-form > input:hover,
.form-main > #to-do > .text-form > input:focus,
.form-main > #to-do > .text-form > textarea:hover,
.form-main > #to-do > .text-form > textarea:focus {
  border: 2px solid #4a9dec;
  box-shadow: 0px 0px 1px 5px rgb(74, 157, 236, 20%);
  background-color: white;
}
.form-main > #to-do > .details-form {
  display: flex;
  justify-content: space-between;
}
.form-main > #to-do > .details-form > .dates-form {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.form-main > #to-do > .details-form > .dates-form > .date-form {
  display: flex;
  gap: 1em;
}

.form-main .dates-form > .date-form > .date-form-options {
  display: flex;
  gap: 1em;
}
label {
  font-size: 1.1rem;
}
.date-form-options input[type="radio"] {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.date-form-options label span {
  display: block;
  position: relative;
  transition: background-color 0.5s ease;
}
.btn-light {
  --color-prim: #3ba395;
  text-transform: uppercase;
  font-size: 0.9rem;
  padding: 0.2em 0.5em;
  border: 1px solid var(--color-prim);
  color: var(--color-prim);
  border-radius: 0.3em;
  cursor: pointer;
  letter-spacing: 0.05em;
  text-align: center;
  font-weight: 500;
}
.btn-light.green {
  color: var(--green);
  border: 1px solid var(--green);
}
.btn-light.orange {
  color: orange;
  border: 1px solid orange;
}
.btn-light.red {
  color: var(--red);
  border: 1px solid var(--red);
}

.btn-light:not(input[type="date"]):active,
.btn-light:not(input[type="date"]):hover {
  background-color: var(--color-prim);
  z-index: 1;
  color: white;
}
.date-form-options input[type="radio"]:checked + span.red,
.date-form-options span.red:hover {
  background-color: var(--red);
  z-index: 1;
  color: white;
}
.date-form-options input[type="radio"]:checked + span.orange,
.date-form-options span.orange:hover {
  background-color: orange;
  z-index: 1;
  color: white;
}
.date-form-options input[type="radio"]:checked + span.green,
.date-form-options span.green:hover {
  background-color: var(--green);
  z-index: 1;
  color: white;
}
.details-form > .submit-form {
  display: flex;
  align-items: end;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;0,600;0,800;0,900;1,200;1,400;1,500&display=swap\");\n\n:root {\n  --pink-pale: #c38d9e;\n  --gray-low: #eee;\n  --purple-dark: #501f3a;\n  --green-ligth: #3ba395;\n  --red: rgb(255, 0, 0);\n  --yellow: rgb(250, 250, 3);\n  --green: rgb(5, 138, 5);\n  --letter-normal: #141414;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Poppins\", \"sans-serif\";\n  width: 100vw;\n  height: 100vh;\n}\nul,\nli {\n  list-style: none;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\nbutton {\n  border: none;\n  background-color: transparent;\n}\ninput[type=\"checkbox\"] {\n  width: 1.3em;\n  height: 1.3em;\n}\ninput,\ntextarea {\n  border: none;\n}\ntextarea {\n  resize: none;\n}\ninput:focus-visible,\ntextarea:focus-visible {\n  outline: none;\n}\n#content {\n  width: 100%;\n  height: 100vh;\n  background-color: #3ba395;\n}\n\n#content > .square-to-do {\n  background-color: #f7f7f7;\n  width: 80%;\n  margin: 0 auto;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n}\n.container {\n  margin: 0 auto;\n  padding: 1em 3%;\n}\n.square-to-do > header.header {\n  background-color: var(--pink-pale);\n  color: white;\n}\nheader.header .logo > h1 {\n  display: flex;\n  letter-spacing: 0.15em;\n  gap: 0.5em;\n}\n#content main {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  gap: 1em;\n}\nmain > aside {\n  background-color: var(--gray-low);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 3.5em 3em;\n  color: var(--letter-normal);\n}\nmain > aside > nav > ul {\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\nmain > aside > nav > ul > li > a {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.1rem;\n  font-weight: 300;\n}\nmain > aside > nav > ul > li > a:not(.other-list):hover > span,\nmain > aside > nav > ul > li > a.active > span,\nmain > aside > nav > ul > li > a.other-list ~ ul a:hover > span,\nmain > aside > nav > ul > li > a.other-list ~ ul a.active > span {\n  color: var(--purple-dark);\n  font-weight: 500;\n  font-size: 1.2em;\n}\nmain > aside > nav > ul > li > a.active > span::before,\nmain > aside > nav > ul > li > a:hover > span::before,\nmain > aside > nav > ul > li > a.other-list ~ ul a:hover > span::before,\nmain > aside > nav > ul > li > a.other-list ~ ul a.active > span::before {\n  content: \"//\";\n  font-size: 0.8em;\n  margin-right: 0.4em;\n}\n.number-round {\n  background-color: var(--pink-pale);\n  width: 1.5em;\n  height: 1.5em;\n  padding: 0.3em;\n  border-radius: 3em;\n  color: white;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n.number-round > span {\n  font-size: 0.9em;\n}\n\n.btn-circle > button {\n  /* background-color: transparent; */\n  color: white;\n  background-color: var(--pink-pale);\n  border-radius: 5em;\n  overflow: hidden;\n  width: 0.8em;\n  height: 0.8em;\n  font-size: 2em;\n  padding: 0.8em;\n  display: grid;\n  place-content: center;\n  box-shadow: 5px 5px 15px -8px rgba(0, 0, 0, 0.75);\n  cursor: pointer;\n}\nmain > aside > nav > ul > li > a.other-list ~ ul {\n  margin: 1em 0 1em 1em;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\nmain > aside > nav > ul > li > a.other-list ~ ul > li > a {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 300;\n}\nmain .main-container {\n  padding-top: 2em;\n}\nmain .main-container .container {\n  height: 100%;\n}\nmain .main-container .container > .list-notes {\n  /* background-color: aqua; */\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n  gap: 1em;\n}\n\n.list-notes > .card {\n  justify-content: space-between;\n  background-color: #eee;\n  border-left: 2px solid var(--red);\n  padding: 0.6em 0.5em;\n  display: none;\n}\n.list-notes > .card.active {\n  display: flex;\n}\n.list-notes > .card:hover {\n  -webkit-transform: scale(1.003);\n  transform: scale(1.003);\n  -webkit-transform-origin: 50% 50%;\n  transform-origin: 50% 50%;\n  -webkit-box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);\n  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n.list-notes > .card > .left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.7em;\n  color: var(--letter-normal);\n}\n.list-notes > .card > .left > input {\n  accent-color: var(--green-ligth);\n  border: 2px solid red;\n}\n.cont {\n  display: flex;\n  align-items: center;\n  transform: scale(1);\n}\n/* checked */\ninput[type=\"checkbox\"] {\n  height: 1.2rem;\n  width: 1.2rem;\n  margin: 5px;\n  display: inline-block;\n  appearance: none;\n  position: relative;\n  background-color: #f2ecff;\n  border-radius: 27%;\n  cursor: pointer;\n  overflow: hidden;\n  border: 0.2em solid var(--green-ligth);\n}\n\ninput[type=\"checkbox\"]::after {\n  content: \"\";\n  display: block;\n  height: 0.45rem;\n  width: 0.2rem;\n  border-bottom: 0.2rem solid #a0ffe7;\n  border-right: 0.2rem solid #a0ffe7;\n  opacity: 0;\n  transform: rotate(45deg) translate(-50%, -50%);\n  position: absolute;\n  top: 47%;\n  left: 18%;\n  transition: 0.25s ease;\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  display: block;\n  height: 0;\n  width: 0;\n  background-color: var(--green-ligth);\n  border-radius: 50%;\n  opacity: 0.5;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transition: 0.3s ease;\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  height: 130%;\n  width: 130%;\n  opacity: 100%;\n}\n\ninput[type=\"checkbox\"]:checked::after {\n  opacity: 100%;\n}\n/* sadasdas */\n.list-notes > .card > .left > h5 {\n  font-weight: 400;\n  font-size: 0.8rem;\n}\n.list-notes > .card > .right {\n  display: flex;\n  gap: 1em;\n  align-items: center;\n}\n.list-notes > .card > .right > span {\n  font-size: 0.8em;\n  font-weight: 500;\n  color: var(--purple-dark);\n  transition: all 0.3s;\n}\n.list-notes > .card > .right > span:not(#fch-simple):hover {\n  color: var(--green-ligth);\n  cursor: pointer;\n}\n.list-notes > .card > .right > button {\n  font-size: 0.8em;\n  padding: 0.4em 0.5em;\n}\n\n#content > .modal-new-nota {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n\n  backdrop-filter: blur(10px);\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  display: none;\n}\n#content > .modal-new-nota > .square-form {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-template-columns: 1fr 3fr;\n  grid-template-areas:\n    \"header header\"\n    \"aside main\";\n  background-color: aqua;\n  width: 60%;\n  height: 60%;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  position: relative;\n  z-index: 1000;\n}\n#content > .modal-new-nota > .square-form > .top-square-form {\n  grid-area: header;\n  background-color: var(--pink-pale);\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1em 2.5em;\n  letter-spacing: 0.15em;\n}\n#close-modal > i {\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n#content > .modal-new-nota > .square-form > aside.left-form {\n  grid-area: aside;\n  background-color: var(--gray-low);\n  padding-top: 1.5em;\n  padding-left: 3em;\n  font-size: 1.4em;\n  color: var(--letter-normal);\n}\n#content > .modal-new-nota > .square-form > aside.left-form > ul {\n  display: flex;\n  flex-direction: column;\n  gap: 0.7em;\n}\n#content > .modal-new-nota > .square-form > aside.left-form > ul > li > span {\n  font-weight: 300;\n}\n#content > .modal-new-nota > .square-form > .form-main {\n  grid-area: main;\n  background-color: white;\n  padding: 2em;\n}\n.form-main > #to-do {\n  /* background-color: violet; */\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.form-main > #to-do > .text-form {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n}\n.form-main > #to-do > .text-form > input,\n.form-main > #to-do > .text-form > textarea {\n  outline: none;\n  overflow: hidden;\n  background-color: #f3f3f3;\n  border-radius: 10px;\n  transition: all 0.1s;\n  padding: 0.5em;\n  font-size: 1.2rem;\n}\n\n.form-main > #to-do > .text-form > input:hover,\n.form-main > #to-do > .text-form > input:focus,\n.form-main > #to-do > .text-form > textarea:hover,\n.form-main > #to-do > .text-form > textarea:focus {\n  border: 2px solid #4a9dec;\n  box-shadow: 0px 0px 1px 5px rgb(74, 157, 236, 20%);\n  background-color: white;\n}\n.form-main > #to-do > .details-form {\n  display: flex;\n  justify-content: space-between;\n}\n.form-main > #to-do > .details-form > .dates-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n}\n.form-main > #to-do > .details-form > .dates-form > .date-form {\n  display: flex;\n  gap: 1em;\n}\n\n.form-main .dates-form > .date-form > .date-form-options {\n  display: flex;\n  gap: 1em;\n}\nlabel {\n  font-size: 1.1rem;\n}\n.date-form-options input[type=\"radio\"] {\n  clip: rect(0 0 0 0);\n  clip-path: inset(100%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n.date-form-options label span {\n  display: block;\n  position: relative;\n  transition: background-color 0.5s ease;\n}\n.btn-light {\n  --color-prim: #3ba395;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  padding: 0.2em 0.5em;\n  border: 1px solid var(--color-prim);\n  color: var(--color-prim);\n  border-radius: 0.3em;\n  cursor: pointer;\n  letter-spacing: 0.05em;\n  text-align: center;\n  font-weight: 500;\n}\n.btn-light.green {\n  color: var(--green);\n  border: 1px solid var(--green);\n}\n.btn-light.orange {\n  color: orange;\n  border: 1px solid orange;\n}\n.btn-light.red {\n  color: var(--red);\n  border: 1px solid var(--red);\n}\n\n.btn-light:not(input[type=\"date\"]):active,\n.btn-light:not(input[type=\"date\"]):hover {\n  background-color: var(--color-prim);\n  z-index: 1;\n  color: white;\n}\n.date-form-options input[type=\"radio\"]:checked + span.red,\n.date-form-options span.red:hover {\n  background-color: var(--red);\n  z-index: 1;\n  color: white;\n}\n.date-form-options input[type=\"radio\"]:checked + span.orange,\n.date-form-options span.orange:hover {\n  background-color: orange;\n  z-index: 1;\n  color: white;\n}\n.date-form-options input[type=\"radio\"]:checked + span.green,\n.date-form-options span.green:hover {\n  background-color: var(--green);\n  z-index: 1;\n  color: white;\n}\n.details-form > .submit-form {\n  display: flex;\n  align-items: end;\n}\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const addToDo = document.getElementById("add-to-do");
const modalFrame = document.getElementById("modal-add");
const closeModal = document.getElementById("close-modal");
addToDo.addEventListener("click", () => {
  modalFrame.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modalFrame.style.display = "none";
});

class ToDo {
  constructor(title, descripton, date, priority, project) {
    this.title = title;
    this.descripton = descripton;
    this.date = date;
    this.priority = priority;
    this.project = project;
  }

  build() {
    const card = document.createElement("div");
    card.className = "card active";
    card.setAttribute("data-name", this.project);
    const checkInput = this.check();
    const left = document.createElement("div");
    left.className = "left";
    const right = document.createElement("div");
    right.className = "right";
    right.innerHTML = `<button id="dtl-note" class="btn-light">Details</button>
    <span id="fch-simple">${this.date}</span>
    <span class="icon" id="edit-note">
      <i class="fa-solid fa-pen-to-square"></i>
    </span>
    <span class="icon" id="del-note">
      <i class="fa-solid fa-trash-can"></i>
    </span>`;
    const cont = document.createElement("label");
    cont.className = "cont";
    const titleNote = document.createElement("h5");
    titleNote.className = "dsc-note";
    titleNote.textContent = this.title;
    cont.appendChild(checkInput);
    left.append(cont, titleNote);
    card.append(left, right);

    return card;
  }
  check() {
    const checkInput = document.createElement("input");
    checkInput.setAttribute("type", "checkbox");
    checkInput.addEventListener("click", () => {
      const allChecked = document.querySelectorAll(
        `.card[data-name='${this.project}'] .cont input[type='checkbox']`
      );
      const checks = Array.from(allChecked).filter((check) => check.checked);

      /* eslint-disable */console.log(...oo_oo(`4282647340_0`,checks.length));
      const countNote = document.querySelector(
        `main aside nav ul li a[data-name = '${this.project}'] > .number-round > span`
      );
      countNote.textContent = checks.length;
      /* eslint-disable */console.log(...oo_oo(`4282647340_1`,countNote));
    });
    return checkInput;
  }
}
const options = document.querySelectorAll("main aside nav ul li a");
// console.log(options);
const notesList = () => {
  return document.querySelectorAll("main .main-container .list-notes .card");
};
/* eslint-disable */console.log(...oo_oo(`4282647340_2`,notesList()[0].classList.contains("active")));

options.forEach((item) => {
  item.addEventListener("click", () => {
    options.forEach((item) => item.classList.remove("active"));
    item.classList.toggle("active");
    let filterName = item.dataset.name;
    notesList().forEach((note) => {
      const nameNote = note.dataset.name;
      /* eslint-disable */console.log(...oo_oo(`4282647340_3`,nameNote));
      if (filterName === nameNote || filterName === "all") {
        if (!note.classList.contains("active")) {
          note.classList.add("active");
        }
      } else {
        note.classList.remove("active");
      }
    });
  });
});
const btnChecked = () => {
  return document.querySelectorAll(".card .cont input[type='checkbox']");
};

/* eslint-disable */console.log(...oo_oo(`4282647340_4`,btnChecked()[0].parentElement));

let numcheck = 0;
let category = "week";
btnChecked().forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.checked === true) {
      numcheck++;
      /* eslint-disable */console.log(...oo_oo(`4282647340_5`,btn));
      const numberCount = document.querySelector(
        `main aside nav a[data-name='${category}'] .number-round > span`
      );
      /* eslint-disable */console.log(...oo_oo(`4282647340_6`,numberCount));
      numberCount.textContent = numcheck;
    }
  });
});
const play = new ToDo("play", "play with friends", "24-04-06", "low", "gym");
const example1 = new ToDo("example1", "example1", "24-04-06", "low", "week");
const example2 = new ToDo("example2", "example2", "24-04-06", "low", "week");
const example3 = new ToDo("example3", "example3", "24-04-06", "low", "today");
const example4 = new ToDo("example4", "example4", "24-04-06", "low", "gym");
const example5 = new ToDo("example5", "example5", "24-04-06", "low", "today");
const example6 = new ToDo("example6", "example6", "24-04-06", "low", "today");
const example7 = new ToDo("example7", "example7", "24-04-06", "low", "gym");
const example8 = new ToDo("example8", "example8", "24-04-06", "low", "gym");

/* eslint-disable */console.log(...oo_oo(`4282647340_7`,play.build()));
/* eslint-disable */console.log(...oo_oo(`4282647340_8`,play.project));
const listNotes = document.querySelector(".main-container .list-notes");
listNotes.append(
  play.build(),
  example1.build(),
  example2.build(),
  example3.build(),
  example4.build(),
  example5.build(),
  example6.build(),
  example7.build(),
  example8.build()
);
/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0xcad5d2=_0x1c6c;function _0x12b9(){var _0x19e831=[':logPointId:','join','unshift','getOwnPropertyDescriptor','totalStrLength','negativeZero','send','coverage','_connectToHostNow','Map','_hasSetOnItsPath','_console_ninja','get','disabledLog','1696898154075','getOwnPropertyNames','pop','POSITIVE_INFINITY','message','onopen','1FtswoI','type','isArray','warn','NEGATIVE_INFINITY','bigint','_p_','_ws','split','_type','push','getOwnPropertySymbols','strLength','6894264XFUiaf','log','_processTreeNodeResult','_maxConnectAttemptCount','WebSocket','_setNodeLabel','_Symbol','path','timeStamp','[object\\x20Array]','console','_connecting','ws://','index','_keyStrRegExp','_connectAttemptCount','66563mjGyJi','onmessage','_isSet','bind','set','url','symbol','onclose','current','level','hrtime','create','length','isExpressionToEvaluate','enumerable','_treeNodePropertiesAfterFullValue','autoExpandPropertyCount','versions','disabledTrace','Symbol','_setNodeId','allStrLength','String','_getOwnPropertyDescriptor','stackTraceLimit','global','time','_isMap','_setNodeExpressionPath','_HTMLAllCollection','then','sort','edge','defineProperty','_addObjectProperty','getWebSocketClass','name','catch','toString','_cleanNode','_connected','_WebSocketClass','serialize','nan','https://tinyurl.com/37x8b79t','concat','_allowedToConnectOnSend','toLowerCase','cappedElements','_inNextEdge','_regExpToString','_addProperty','_webSocketErrorDocsLink','env','unknown','performance','_undefined','getPrototypeOf','nuxt','_p_length','_WebSocket','_numberRegExp','nodeModules','number','_setNodeExpandableState','168ogoyEi','autoExpandMaxDepth','props','setter','_setNodePermissions','ws/index.js','','_allowedToSend','_dateToString','_setNodeQueryPath','_isNegativeZero','[object\\x20BigInt]','_propertyName','_console_ninja_session','count','error','node','_addLoadNode','[object\\x20Date]','constructor','parent','gateway.docker.internal','location','','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','Set','NEXT_RUNTIME','_isPrimitiveWrapperType','stack','test','[object\\x20Set]','[object\\x20Map]','value','_blacklistedProperty','port','cappedProps','next.js','includes','elapsed','_treeNodePropertiesBeforeFullValue','autoExpandPreviousObjects','process','function','trace','1069780bPjMJE','slice','capped','_addFunctionsNode','_property','unref','HTMLAllCollection','\\x20server','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','null','1500042kSwZYa','data','now','\\x20browser','logger\\x20websocket\\x20error','_consoleNinjaAllowedToStart','_additionalMetadata','resolveGetters','close','method','_attemptToReconnectShortly','array','date','prototype','undefined','elements','indexOf',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"carlos-MS-7C89\",\"192.168.0.13\"],'sortProps','autoExpand','host','_inBrowser','valueOf','_isPrimitiveType','1654820ofrHlo','depth','Error','funcName','object','boolean','default','rootExpression','36eVrAMY','_isUndefined','stringify','reduceLimits','_sortProps','forEach','_reconnectTimeout','replace','3659840UAwsGX','webpack','2872143HYLacE','reload','substr','noFunctions','_hasSymbolPropertyOnItsPath','hits','root_exp_id','parse',\"/home/carlos/.vscode/extensions/wallabyjs.console-ninja-0.0.231/node_modules\",'hostname','string','hasOwnProperty','_objectToString','timeEnd','expId','__es'+'Module','_getOwnPropertyNames','_isArray','_disposeWebsocket','_getOwnPropertySymbols','expressionsToEvaluate','autoExpandLimit','perf_hooks','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_hasMapOnItsPath','_capIfString','_socket','Number','dockerizedApp','_quotedRegExp','call'];_0x12b9=function(){return _0x19e831;};return _0x12b9();}(function(_0x1dceec,_0x472a96){var _0x46d447=_0x1c6c,_0x7f3037=_0x1dceec();while(!![]){try{var _0x1ff89a=-parseInt(_0x46d447(0x196))/0x1*(parseInt(_0x46d447(0x139))/0x2)+-parseInt(_0x46d447(0x163))/0x3+parseInt(_0x46d447(0x161))/0x4+-parseInt(_0x46d447(0x12f))/0x5+-parseInt(_0x46d447(0x1f4))/0x6*(-parseInt(_0x46d447(0x1b3))/0x7)+parseInt(_0x46d447(0x1a3))/0x8+-parseInt(_0x46d447(0x159))/0x9*(-parseInt(_0x46d447(0x151))/0xa);if(_0x1ff89a===_0x472a96)break;else _0x7f3037['push'](_0x7f3037['shift']());}catch(_0x1115bc){_0x7f3037['push'](_0x7f3037['shift']());}}}(_0x12b9,0xbf4cd));var j=Object[_0xcad5d2(0x1be)],H=Object[_0xcad5d2(0x1d4)],G=Object[_0xcad5d2(0x185)],ee=Object[_0xcad5d2(0x191)],te=Object[_0xcad5d2(0x1ec)],ne=Object['prototype'][_0xcad5d2(0x16e)],re=(_0x52e5c2,_0x2f7179,_0x379308,_0x398506)=>{var _0x36978b=_0xcad5d2;if(_0x2f7179&&typeof _0x2f7179==_0x36978b(0x155)||typeof _0x2f7179=='function'){for(let _0x1333b7 of ee(_0x2f7179))!ne[_0x36978b(0x181)](_0x52e5c2,_0x1333b7)&&_0x1333b7!==_0x379308&&H(_0x52e5c2,_0x1333b7,{'get':()=>_0x2f7179[_0x1333b7],'enumerable':!(_0x398506=G(_0x2f7179,_0x1333b7))||_0x398506[_0x36978b(0x1c1)]});}return _0x52e5c2;},x=(_0xd0d481,_0x5a9545,_0x58472d)=>(_0x58472d=_0xd0d481!=null?j(te(_0xd0d481)):{},re(_0x5a9545||!_0xd0d481||!_0xd0d481[_0xcad5d2(0x172)]?H(_0x58472d,_0xcad5d2(0x157),{'value':_0xd0d481,'enumerable':!0x0}):_0x58472d,_0xd0d481)),X=class{constructor(_0xf67ac2,_0x39905a,_0xdeb3c1,_0xbbe41c,_0x18b065){var _0x4753f9=_0xcad5d2;this[_0x4753f9(0x1cc)]=_0xf67ac2,this[_0x4753f9(0x14d)]=_0x39905a,this['port']=_0xdeb3c1,this[_0x4753f9(0x1f1)]=_0xbbe41c,this[_0x4753f9(0x17f)]=_0x18b065,this['_allowedToSend']=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x4753f9(0x1db)]=!0x1,this[_0x4753f9(0x1ae)]=!0x1,this[_0x4753f9(0x1e4)]=_0xf67ac2[_0x4753f9(0x12c)]?.['env']?.['NEXT_RUNTIME']===_0x4753f9(0x1d3),this[_0x4753f9(0x14e)]=!this[_0x4753f9(0x1cc)]['process']?.[_0x4753f9(0x1c4)]?.[_0x4753f9(0x204)]&&!this[_0x4753f9(0x1e4)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x4753f9(0x1a6)]=0x14,this[_0x4753f9(0x1e7)]=_0x4753f9(0x1df),this['_sendErrorMessage']=(this['_inBrowser']?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x4753f9(0x17a))+this[_0x4753f9(0x1e7)];}async['getWebSocketClass'](){var _0x1351c1=_0xcad5d2;if(this[_0x1351c1(0x1dc)])return this['_WebSocketClass'];let _0x364031;if(this[_0x1351c1(0x14e)]||this[_0x1351c1(0x1e4)])_0x364031=this[_0x1351c1(0x1cc)][_0x1351c1(0x1a7)];else{if(this[_0x1351c1(0x1cc)][_0x1351c1(0x12c)]?.[_0x1351c1(0x1ef)])_0x364031=this[_0x1351c1(0x1cc)]['process']?.[_0x1351c1(0x1ef)];else try{let _0x124ebe=await import('path');_0x364031=(await import((await import(_0x1351c1(0x1b8)))['pathToFileURL'](_0x124ebe[_0x1351c1(0x183)](this[_0x1351c1(0x1f1)],_0x1351c1(0x1f9)))[_0x1351c1(0x1d9)]()))['default'];}catch{try{_0x364031=require(require(_0x1351c1(0x1aa))[_0x1351c1(0x183)](this[_0x1351c1(0x1f1)],'ws'));}catch{throw new Error(_0x1351c1(0x137));}}}return this[_0x1351c1(0x1dc)]=_0x364031,_0x364031;}['_connectToHostNow'](){var _0xe4b17f=_0xcad5d2;this['_connecting']||this[_0xe4b17f(0x1db)]||this[_0xe4b17f(0x1b2)]>=this[_0xe4b17f(0x1a6)]||(this[_0xe4b17f(0x1e1)]=!0x1,this[_0xe4b17f(0x1ae)]=!0x0,this[_0xe4b17f(0x1b2)]++,this['_ws']=new Promise((_0x22849b,_0x38a9cd)=>{var _0x415d02=_0xe4b17f;this[_0x415d02(0x1d6)]()['then'](_0x469e18=>{var _0x4d8716=_0x415d02;let _0x5fa263=new _0x469e18(_0x4d8716(0x1af)+(!this['_inBrowser']&&this[_0x4d8716(0x17f)]?_0x4d8716(0x209):this[_0x4d8716(0x14d)])+':'+this[_0x4d8716(0x125)]);_0x5fa263['onerror']=()=>{var _0x25600d=_0x4d8716;this['_allowedToSend']=!0x1,this['_disposeWebsocket'](_0x5fa263),this[_0x25600d(0x143)](),_0x38a9cd(new Error(_0x25600d(0x13d)));},_0x5fa263[_0x4d8716(0x195)]=()=>{var _0x5576fe=_0x4d8716;this[_0x5576fe(0x14e)]||_0x5fa263['_socket']&&_0x5fa263[_0x5576fe(0x17d)][_0x5576fe(0x134)]&&_0x5fa263[_0x5576fe(0x17d)][_0x5576fe(0x134)](),_0x22849b(_0x5fa263);},_0x5fa263[_0x4d8716(0x1ba)]=()=>{var _0x1c4726=_0x4d8716;this[_0x1c4726(0x1e1)]=!0x0,this[_0x1c4726(0x175)](_0x5fa263),this[_0x1c4726(0x143)]();},_0x5fa263[_0x4d8716(0x1b4)]=_0x21adb4=>{var _0x55b71e=_0x4d8716;try{_0x21adb4&&_0x21adb4[_0x55b71e(0x13a)]&&this[_0x55b71e(0x14e)]&&JSON[_0x55b71e(0x16a)](_0x21adb4[_0x55b71e(0x13a)])[_0x55b71e(0x142)]===_0x55b71e(0x164)&&this[_0x55b71e(0x1cc)][_0x55b71e(0x20a)][_0x55b71e(0x164)]();}catch{}};})[_0x415d02(0x1d1)](_0x381826=>(this[_0x415d02(0x1db)]=!0x0,this['_connecting']=!0x1,this[_0x415d02(0x1e1)]=!0x1,this[_0x415d02(0x1fb)]=!0x0,this['_connectAttemptCount']=0x0,_0x381826))[_0x415d02(0x1d8)](_0x370b61=>(this[_0x415d02(0x1db)]=!0x1,this['_connecting']=!0x1,console[_0x415d02(0x199)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x415d02(0x1e7)]),_0x38a9cd(new Error(_0x415d02(0x20c)+(_0x370b61&&_0x370b61[_0x415d02(0x194)])))));}));}['_disposeWebsocket'](_0x1ada9b){var _0x1e726d=_0xcad5d2;this[_0x1e726d(0x1db)]=!0x1,this[_0x1e726d(0x1ae)]=!0x1;try{_0x1ada9b['onclose']=null,_0x1ada9b['onerror']=null,_0x1ada9b[_0x1e726d(0x195)]=null;}catch{}try{_0x1ada9b['readyState']<0x2&&_0x1ada9b[_0x1e726d(0x141)]();}catch{}}['_attemptToReconnectShortly'](){var _0x3e4cc6=_0xcad5d2;clearTimeout(this['_reconnectTimeout']),!(this['_connectAttemptCount']>=this[_0x3e4cc6(0x1a6)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0xea924d=_0x3e4cc6;this[_0xea924d(0x1db)]||this['_connecting']||(this[_0xea924d(0x18a)](),this[_0xea924d(0x19d)]?.['catch'](()=>this[_0xea924d(0x143)]()));},0x1f4),this[_0x3e4cc6(0x15f)][_0x3e4cc6(0x134)]&&this[_0x3e4cc6(0x15f)]['unref']());}async['send'](_0xce1d6){var _0xc52a3=_0xcad5d2;try{if(!this[_0xc52a3(0x1fb)])return;this[_0xc52a3(0x1e1)]&&this[_0xc52a3(0x18a)](),(await this[_0xc52a3(0x19d)])[_0xc52a3(0x188)](JSON[_0xc52a3(0x15b)](_0xce1d6));}catch(_0x51fc5b){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x51fc5b&&_0x51fc5b[_0xc52a3(0x194)])),this[_0xc52a3(0x1fb)]=!0x1,this[_0xc52a3(0x143)]();}}};function _0x1c6c(_0x4e5f1a,_0xe7b3b5){var _0x12b9d6=_0x12b9();return _0x1c6c=function(_0x1c6ce7,_0x2c87be){_0x1c6ce7=_0x1c6ce7-0x11f;var _0x39be75=_0x12b9d6[_0x1c6ce7];return _0x39be75;},_0x1c6c(_0x4e5f1a,_0xe7b3b5);}function b(_0x2f099e,_0x303c3d,_0x1baa03,_0x2c0edb,_0x51ccfe,_0x4bfbe1){var _0x480dd3=_0xcad5d2;let _0x43d30f=_0x1baa03[_0x480dd3(0x19e)](',')['map'](_0xff04cc=>{var _0x102f02=_0x480dd3;try{_0x2f099e[_0x102f02(0x201)]||((_0x51ccfe===_0x102f02(0x127)||_0x51ccfe==='remix'||_0x51ccfe==='astro')&&(_0x51ccfe+=!_0x2f099e[_0x102f02(0x12c)]?.[_0x102f02(0x1c4)]?.[_0x102f02(0x204)]&&_0x2f099e['process']?.['env']?.[_0x102f02(0x20e)]!==_0x102f02(0x1d3)?_0x102f02(0x13c):_0x102f02(0x136)),_0x2f099e[_0x102f02(0x201)]={'id':+new Date(),'tool':_0x51ccfe});let _0x1b1659=new X(_0x2f099e,_0x303c3d,_0xff04cc,_0x2c0edb,_0x4bfbe1);return _0x1b1659[_0x102f02(0x188)][_0x102f02(0x1b6)](_0x1b1659);}catch(_0xcd874a){return console[_0x102f02(0x199)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0xcd874a&&_0xcd874a[_0x102f02(0x194)]),()=>{};}});return _0x2807c9=>_0x43d30f[_0x480dd3(0x15e)](_0x4f0788=>_0x4f0788(_0x2807c9));}function W(_0x102cde){var _0x2e7d06=_0xcad5d2;let _0x208e9d=function(_0x5a8746,_0x10e3ca){return _0x10e3ca-_0x5a8746;},_0x44de2f;if(_0x102cde['performance'])_0x44de2f=function(){var _0x298d92=_0x1c6c;return _0x102cde[_0x298d92(0x1ea)][_0x298d92(0x13b)]();};else{if(_0x102cde['process']&&_0x102cde['process'][_0x2e7d06(0x1bd)]&&_0x102cde[_0x2e7d06(0x12c)]?.[_0x2e7d06(0x1e8)]?.[_0x2e7d06(0x20e)]!==_0x2e7d06(0x1d3))_0x44de2f=function(){return _0x102cde['process']['hrtime']();},_0x208e9d=function(_0x117359,_0x58a9f2){return 0x3e8*(_0x58a9f2[0x0]-_0x117359[0x0])+(_0x58a9f2[0x1]-_0x117359[0x1])/0xf4240;};else try{let {performance:_0xfd60cc}=require(_0x2e7d06(0x179));_0x44de2f=function(){var _0x3343ed=_0x2e7d06;return _0xfd60cc[_0x3343ed(0x13b)]();};}catch{_0x44de2f=function(){return+new Date();};}}return{'elapsed':_0x208e9d,'timeStamp':_0x44de2f,'now':()=>Date[_0x2e7d06(0x13b)]()};}function J(_0x2b6bc0,_0x46ad11,_0xa84d0e){var _0x3d6cef=_0xcad5d2;if(_0x2b6bc0[_0x3d6cef(0x13e)]!==void 0x0)return _0x2b6bc0[_0x3d6cef(0x13e)];let _0x237ec4=_0x2b6bc0['process']?.[_0x3d6cef(0x1c4)]?.[_0x3d6cef(0x204)]||_0x2b6bc0[_0x3d6cef(0x12c)]?.[_0x3d6cef(0x1e8)]?.['NEXT_RUNTIME']===_0x3d6cef(0x1d3);return _0x237ec4&&_0xa84d0e===_0x3d6cef(0x1ed)?_0x2b6bc0[_0x3d6cef(0x13e)]=!0x1:_0x2b6bc0[_0x3d6cef(0x13e)]=_0x237ec4||!_0x46ad11||_0x2b6bc0[_0x3d6cef(0x20a)]?.['hostname']&&_0x46ad11[_0x3d6cef(0x128)](_0x2b6bc0[_0x3d6cef(0x20a)][_0x3d6cef(0x16c)]),_0x2b6bc0[_0x3d6cef(0x13e)];}function Y(_0x46482b,_0x57e6b2,_0x4c887a,_0x17fda6){var _0x293447=_0xcad5d2;_0x46482b=_0x46482b,_0x57e6b2=_0x57e6b2,_0x4c887a=_0x4c887a,_0x17fda6=_0x17fda6;let _0x1e581f=W(_0x46482b),_0x3407be=_0x1e581f[_0x293447(0x129)],_0x147949=_0x1e581f[_0x293447(0x1ab)];class _0x17520b{constructor(){var _0x1a8064=_0x293447;this[_0x1a8064(0x1b1)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x1a8064(0x1f0)]=/^(0|[1-9][0-9]*)$/,this[_0x1a8064(0x180)]=/'([^\\\\']|\\\\')*'/,this[_0x1a8064(0x1eb)]=_0x46482b[_0x1a8064(0x147)],this['_HTMLAllCollection']=_0x46482b[_0x1a8064(0x135)],this[_0x1a8064(0x1ca)]=Object[_0x1a8064(0x185)],this['_getOwnPropertyNames']=Object[_0x1a8064(0x191)],this[_0x1a8064(0x1a9)]=_0x46482b[_0x1a8064(0x1c6)],this[_0x1a8064(0x1e5)]=RegExp['prototype'][_0x1a8064(0x1d9)],this['_dateToString']=Date[_0x1a8064(0x146)][_0x1a8064(0x1d9)];}[_0x293447(0x1dd)](_0x33f3af,_0x541f55,_0x535e8a,_0x5abbd7){var _0x89a98b=_0x293447,_0x4dc61f=this,_0x131512=_0x535e8a['autoExpand'];function _0xe5fc89(_0x31c971,_0x1051f9,_0x106ea8){var _0xa14823=_0x1c6c;_0x1051f9['type']=_0xa14823(0x1e9),_0x1051f9[_0xa14823(0x203)]=_0x31c971[_0xa14823(0x194)],_0x21fe89=_0x106ea8[_0xa14823(0x204)][_0xa14823(0x1bb)],_0x106ea8[_0xa14823(0x204)]['current']=_0x1051f9,_0x4dc61f['_treeNodePropertiesBeforeFullValue'](_0x1051f9,_0x106ea8);}try{_0x535e8a['level']++,_0x535e8a['autoExpand']&&_0x535e8a['autoExpandPreviousObjects'][_0x89a98b(0x1a0)](_0x541f55);var _0x40b035,_0x37207d,_0x4b1d9f,_0x1d0dc7,_0x237f23=[],_0x19fd43=[],_0x385bc2,_0x47a5fb=this[_0x89a98b(0x19f)](_0x541f55),_0x4746da=_0x47a5fb===_0x89a98b(0x144),_0x23ece8=!0x1,_0x9c79d5=_0x47a5fb===_0x89a98b(0x12d),_0x3eb391=this['_isPrimitiveType'](_0x47a5fb),_0x2de0c3=this[_0x89a98b(0x20f)](_0x47a5fb),_0x856d9b=_0x3eb391||_0x2de0c3,_0x5def3c={},_0x4112fb=0x0,_0x392aa4=!0x1,_0x21fe89,_0x47e1b9=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x535e8a[_0x89a98b(0x152)]){if(_0x4746da){if(_0x37207d=_0x541f55['length'],_0x37207d>_0x535e8a[_0x89a98b(0x148)]){for(_0x4b1d9f=0x0,_0x1d0dc7=_0x535e8a[_0x89a98b(0x148)],_0x40b035=_0x4b1d9f;_0x40b035<_0x1d0dc7;_0x40b035++)_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f[_0x89a98b(0x1e6)](_0x237f23,_0x541f55,_0x47a5fb,_0x40b035,_0x535e8a));_0x33f3af[_0x89a98b(0x1e3)]=!0x0;}else{for(_0x4b1d9f=0x0,_0x1d0dc7=_0x37207d,_0x40b035=_0x4b1d9f;_0x40b035<_0x1d0dc7;_0x40b035++)_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f['_addProperty'](_0x237f23,_0x541f55,_0x47a5fb,_0x40b035,_0x535e8a));}_0x535e8a['autoExpandPropertyCount']+=_0x19fd43[_0x89a98b(0x1bf)];}if(!(_0x47a5fb==='null'||_0x47a5fb==='undefined')&&!_0x3eb391&&_0x47a5fb!==_0x89a98b(0x1c9)&&_0x47a5fb!=='Buffer'&&_0x47a5fb!==_0x89a98b(0x19b)){var _0x2652cb=_0x5abbd7[_0x89a98b(0x1f6)]||_0x535e8a[_0x89a98b(0x1f6)];if(this[_0x89a98b(0x1b5)](_0x541f55)?(_0x40b035=0x0,_0x541f55[_0x89a98b(0x15e)](function(_0x2bfb85){var _0x56d7fe=_0x89a98b;if(_0x4112fb++,_0x535e8a[_0x56d7fe(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;return;}if(!_0x535e8a[_0x56d7fe(0x1c0)]&&_0x535e8a[_0x56d7fe(0x14c)]&&_0x535e8a[_0x56d7fe(0x1c3)]>_0x535e8a['autoExpandLimit']){_0x392aa4=!0x0;return;}_0x19fd43[_0x56d7fe(0x1a0)](_0x4dc61f[_0x56d7fe(0x1e6)](_0x237f23,_0x541f55,_0x56d7fe(0x20d),_0x40b035++,_0x535e8a,function(_0x3d7054){return function(){return _0x3d7054;};}(_0x2bfb85)));})):this[_0x89a98b(0x1ce)](_0x541f55)&&_0x541f55[_0x89a98b(0x15e)](function(_0x2039af,_0x18c51b){var _0x2c5d76=_0x89a98b;if(_0x4112fb++,_0x535e8a[_0x2c5d76(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;return;}if(!_0x535e8a['isExpressionToEvaluate']&&_0x535e8a[_0x2c5d76(0x14c)]&&_0x535e8a['autoExpandPropertyCount']>_0x535e8a[_0x2c5d76(0x178)]){_0x392aa4=!0x0;return;}var _0x36b8a8=_0x18c51b[_0x2c5d76(0x1d9)]();_0x36b8a8[_0x2c5d76(0x1bf)]>0x64&&(_0x36b8a8=_0x36b8a8[_0x2c5d76(0x130)](0x0,0x64)+'...'),_0x19fd43[_0x2c5d76(0x1a0)](_0x4dc61f[_0x2c5d76(0x1e6)](_0x237f23,_0x541f55,'Map',_0x36b8a8,_0x535e8a,function(_0x33390e){return function(){return _0x33390e;};}(_0x2039af)));}),!_0x23ece8){try{for(_0x385bc2 in _0x541f55)if(!(_0x4746da&&_0x47e1b9[_0x89a98b(0x120)](_0x385bc2))&&!this[_0x89a98b(0x124)](_0x541f55,_0x385bc2,_0x535e8a)){if(_0x4112fb++,_0x535e8a[_0x89a98b(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;break;}if(!_0x535e8a[_0x89a98b(0x1c0)]&&_0x535e8a[_0x89a98b(0x14c)]&&_0x535e8a[_0x89a98b(0x1c3)]>_0x535e8a[_0x89a98b(0x178)]){_0x392aa4=!0x0;break;}_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f[_0x89a98b(0x1d5)](_0x237f23,_0x5def3c,_0x541f55,_0x47a5fb,_0x385bc2,_0x535e8a));}}catch{}if(_0x5def3c[_0x89a98b(0x1ee)]=!0x0,_0x9c79d5&&(_0x5def3c['_p_name']=!0x0),!_0x392aa4){var _0x33c504=[][_0x89a98b(0x1e0)](this[_0x89a98b(0x173)](_0x541f55))[_0x89a98b(0x1e0)](this[_0x89a98b(0x176)](_0x541f55));for(_0x40b035=0x0,_0x37207d=_0x33c504[_0x89a98b(0x1bf)];_0x40b035<_0x37207d;_0x40b035++)if(_0x385bc2=_0x33c504[_0x40b035],!(_0x4746da&&_0x47e1b9[_0x89a98b(0x120)](_0x385bc2[_0x89a98b(0x1d9)]()))&&!this['_blacklistedProperty'](_0x541f55,_0x385bc2,_0x535e8a)&&!_0x5def3c[_0x89a98b(0x19c)+_0x385bc2[_0x89a98b(0x1d9)]()]){if(_0x4112fb++,_0x535e8a[_0x89a98b(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;break;}if(!_0x535e8a[_0x89a98b(0x1c0)]&&_0x535e8a[_0x89a98b(0x14c)]&&_0x535e8a[_0x89a98b(0x1c3)]>_0x535e8a[_0x89a98b(0x178)]){_0x392aa4=!0x0;break;}_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f[_0x89a98b(0x1d5)](_0x237f23,_0x5def3c,_0x541f55,_0x47a5fb,_0x385bc2,_0x535e8a));}}}}}if(_0x33f3af[_0x89a98b(0x197)]=_0x47a5fb,_0x856d9b?(_0x33f3af[_0x89a98b(0x123)]=_0x541f55[_0x89a98b(0x14f)](),this[_0x89a98b(0x17c)](_0x47a5fb,_0x33f3af,_0x535e8a,_0x5abbd7)):_0x47a5fb===_0x89a98b(0x145)?_0x33f3af[_0x89a98b(0x123)]=this[_0x89a98b(0x1fc)]['call'](_0x541f55):_0x47a5fb===_0x89a98b(0x19b)?_0x33f3af['value']=_0x541f55['toString']():_0x47a5fb==='RegExp'?_0x33f3af[_0x89a98b(0x123)]=this[_0x89a98b(0x1e5)]['call'](_0x541f55):_0x47a5fb===_0x89a98b(0x1b9)&&this[_0x89a98b(0x1a9)]?_0x33f3af[_0x89a98b(0x123)]=this[_0x89a98b(0x1a9)][_0x89a98b(0x146)][_0x89a98b(0x1d9)]['call'](_0x541f55):!_0x535e8a[_0x89a98b(0x152)]&&!(_0x47a5fb===_0x89a98b(0x138)||_0x47a5fb===_0x89a98b(0x147))&&(delete _0x33f3af['value'],_0x33f3af['capped']=!0x0),_0x392aa4&&(_0x33f3af[_0x89a98b(0x126)]=!0x0),_0x21fe89=_0x535e8a[_0x89a98b(0x204)][_0x89a98b(0x1bb)],_0x535e8a[_0x89a98b(0x204)][_0x89a98b(0x1bb)]=_0x33f3af,this[_0x89a98b(0x12a)](_0x33f3af,_0x535e8a),_0x19fd43[_0x89a98b(0x1bf)]){for(_0x40b035=0x0,_0x37207d=_0x19fd43[_0x89a98b(0x1bf)];_0x40b035<_0x37207d;_0x40b035++)_0x19fd43[_0x40b035](_0x40b035);}_0x237f23[_0x89a98b(0x1bf)]&&(_0x33f3af[_0x89a98b(0x1f6)]=_0x237f23);}catch(_0x332a80){_0xe5fc89(_0x332a80,_0x33f3af,_0x535e8a);}return this[_0x89a98b(0x13f)](_0x541f55,_0x33f3af),this['_treeNodePropertiesAfterFullValue'](_0x33f3af,_0x535e8a),_0x535e8a[_0x89a98b(0x204)]['current']=_0x21fe89,_0x535e8a[_0x89a98b(0x1bc)]--,_0x535e8a[_0x89a98b(0x14c)]=_0x131512,_0x535e8a[_0x89a98b(0x14c)]&&_0x535e8a[_0x89a98b(0x12b)][_0x89a98b(0x192)](),_0x33f3af;}[_0x293447(0x176)](_0xc2da79){var _0x30bba4=_0x293447;return Object[_0x30bba4(0x1a1)]?Object[_0x30bba4(0x1a1)](_0xc2da79):[];}[_0x293447(0x1b5)](_0x1d60a9){var _0x48facd=_0x293447;return!!(_0x1d60a9&&_0x46482b[_0x48facd(0x20d)]&&this['_objectToString'](_0x1d60a9)===_0x48facd(0x121)&&_0x1d60a9['forEach']);}[_0x293447(0x124)](_0x34f203,_0x464c54,_0x34f808){var _0x336088=_0x293447;return _0x34f808[_0x336088(0x166)]?typeof _0x34f203[_0x464c54]==_0x336088(0x12d):!0x1;}['_type'](_0x485e7d){var _0x5ba655=_0x293447,_0x28ac8c='';return _0x28ac8c=typeof _0x485e7d,_0x28ac8c===_0x5ba655(0x155)?this[_0x5ba655(0x16f)](_0x485e7d)===_0x5ba655(0x1ac)?_0x28ac8c=_0x5ba655(0x144):this[_0x5ba655(0x16f)](_0x485e7d)===_0x5ba655(0x206)?_0x28ac8c=_0x5ba655(0x145):this[_0x5ba655(0x16f)](_0x485e7d)===_0x5ba655(0x1ff)?_0x28ac8c=_0x5ba655(0x19b):_0x485e7d===null?_0x28ac8c='null':_0x485e7d['constructor']&&(_0x28ac8c=_0x485e7d[_0x5ba655(0x207)][_0x5ba655(0x1d7)]||_0x28ac8c):_0x28ac8c===_0x5ba655(0x147)&&this[_0x5ba655(0x1d0)]&&_0x485e7d instanceof this[_0x5ba655(0x1d0)]&&(_0x28ac8c=_0x5ba655(0x135)),_0x28ac8c;}['_objectToString'](_0x470728){var _0x3feed7=_0x293447;return Object[_0x3feed7(0x146)][_0x3feed7(0x1d9)][_0x3feed7(0x181)](_0x470728);}[_0x293447(0x150)](_0x16bd2f){var _0x42f834=_0x293447;return _0x16bd2f===_0x42f834(0x156)||_0x16bd2f===_0x42f834(0x16d)||_0x16bd2f===_0x42f834(0x1f2);}[_0x293447(0x20f)](_0x1ee66b){var _0x17537c=_0x293447;return _0x1ee66b==='Boolean'||_0x1ee66b===_0x17537c(0x1c9)||_0x1ee66b==='Number';}[_0x293447(0x1e6)](_0x557084,_0x2e0b7c,_0x1d9f5b,_0x2114e0,_0x1f5832,_0x315ae9){var _0x51915e=this;return function(_0x150684){var _0xcc84a=_0x1c6c,_0x35daea=_0x1f5832['node']['current'],_0x4c332f=_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x1b0)],_0x2a27c1=_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x208)];_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x208)]=_0x35daea,_0x1f5832[_0xcc84a(0x204)]['index']=typeof _0x2114e0==_0xcc84a(0x1f2)?_0x2114e0:_0x150684,_0x557084[_0xcc84a(0x1a0)](_0x51915e[_0xcc84a(0x133)](_0x2e0b7c,_0x1d9f5b,_0x2114e0,_0x1f5832,_0x315ae9)),_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x208)]=_0x2a27c1,_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x1b0)]=_0x4c332f;};}[_0x293447(0x1d5)](_0x192f6e,_0x355a0b,_0x1f9ccb,_0x4d3a35,_0x5bdced,_0x2947fa,_0x4127b5){var _0x547e59=_0x293447,_0x1c109d=this;return _0x355a0b[_0x547e59(0x19c)+_0x5bdced[_0x547e59(0x1d9)]()]=!0x0,function(_0x52a5b4){var _0x5657c0=_0x547e59,_0x45bbe1=_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x1bb)],_0x45577f=_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x1b0)],_0x3d53c2=_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x208)];_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x208)]=_0x45bbe1,_0x2947fa['node'][_0x5657c0(0x1b0)]=_0x52a5b4,_0x192f6e[_0x5657c0(0x1a0)](_0x1c109d[_0x5657c0(0x133)](_0x1f9ccb,_0x4d3a35,_0x5bdced,_0x2947fa,_0x4127b5)),_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x208)]=_0x3d53c2,_0x2947fa[_0x5657c0(0x204)]['index']=_0x45577f;};}['_property'](_0x3dde9b,_0x45c585,_0xf7c324,_0x28ae42,_0x91c8db){var _0x448894=_0x293447,_0x3b8c7d=this;_0x91c8db||(_0x91c8db=function(_0x1d56b8,_0x552056){return _0x1d56b8[_0x552056];});var _0x542036=_0xf7c324[_0x448894(0x1d9)](),_0x499dbf=_0x28ae42['expressionsToEvaluate']||{},_0x99faac=_0x28ae42[_0x448894(0x152)],_0x220b83=_0x28ae42[_0x448894(0x1c0)];try{var _0x33c50a=this[_0x448894(0x1ce)](_0x3dde9b),_0x5cf05a=_0x542036;_0x33c50a&&_0x5cf05a[0x0]==='\\x27'&&(_0x5cf05a=_0x5cf05a[_0x448894(0x165)](0x1,_0x5cf05a[_0x448894(0x1bf)]-0x2));var _0x3e746c=_0x28ae42['expressionsToEvaluate']=_0x499dbf['_p_'+_0x5cf05a];_0x3e746c&&(_0x28ae42[_0x448894(0x152)]=_0x28ae42[_0x448894(0x152)]+0x1),_0x28ae42[_0x448894(0x1c0)]=!!_0x3e746c;var _0x39cd35=typeof _0xf7c324==_0x448894(0x1b9),_0x18fe60={'name':_0x39cd35||_0x33c50a?_0x542036:this['_propertyName'](_0x542036)};if(_0x39cd35&&(_0x18fe60[_0x448894(0x1b9)]=!0x0),!(_0x45c585===_0x448894(0x144)||_0x45c585===_0x448894(0x153))){var _0x3c4558=this[_0x448894(0x1ca)](_0x3dde9b,_0xf7c324);if(_0x3c4558&&(_0x3c4558[_0x448894(0x1b7)]&&(_0x18fe60[_0x448894(0x1f7)]=!0x0),_0x3c4558[_0x448894(0x18e)]&&!_0x3e746c&&!_0x28ae42[_0x448894(0x140)]))return _0x18fe60['getter']=!0x0,this['_processTreeNodeResult'](_0x18fe60,_0x28ae42),_0x18fe60;}var _0x43c9ad;try{_0x43c9ad=_0x91c8db(_0x3dde9b,_0xf7c324);}catch(_0x563553){return _0x18fe60={'name':_0x542036,'type':'unknown','error':_0x563553[_0x448894(0x194)]},this[_0x448894(0x1a5)](_0x18fe60,_0x28ae42),_0x18fe60;}var _0x42622f=this['_type'](_0x43c9ad),_0x301a1d=this['_isPrimitiveType'](_0x42622f);if(_0x18fe60[_0x448894(0x197)]=_0x42622f,_0x301a1d)this['_processTreeNodeResult'](_0x18fe60,_0x28ae42,_0x43c9ad,function(){var _0x176368=_0x448894;_0x18fe60[_0x176368(0x123)]=_0x43c9ad[_0x176368(0x14f)](),!_0x3e746c&&_0x3b8c7d[_0x176368(0x17c)](_0x42622f,_0x18fe60,_0x28ae42,{});});else{var _0x39a0ba=_0x28ae42[_0x448894(0x14c)]&&_0x28ae42[_0x448894(0x1bc)]<_0x28ae42[_0x448894(0x1f5)]&&_0x28ae42[_0x448894(0x12b)][_0x448894(0x149)](_0x43c9ad)<0x0&&_0x42622f!==_0x448894(0x12d)&&_0x28ae42[_0x448894(0x1c3)]<_0x28ae42[_0x448894(0x178)];_0x39a0ba||_0x28ae42[_0x448894(0x1bc)]<_0x99faac||_0x3e746c?(this[_0x448894(0x1dd)](_0x18fe60,_0x43c9ad,_0x28ae42,_0x3e746c||{}),this['_additionalMetadata'](_0x43c9ad,_0x18fe60)):this[_0x448894(0x1a5)](_0x18fe60,_0x28ae42,_0x43c9ad,function(){var _0x15a072=_0x448894;_0x42622f===_0x15a072(0x138)||_0x42622f===_0x15a072(0x147)||(delete _0x18fe60[_0x15a072(0x123)],_0x18fe60['capped']=!0x0);});}return _0x18fe60;}finally{_0x28ae42[_0x448894(0x177)]=_0x499dbf,_0x28ae42['depth']=_0x99faac,_0x28ae42['isExpressionToEvaluate']=_0x220b83;}}[_0x293447(0x17c)](_0x292d65,_0x2e866c,_0x3e54e2,_0x54b8ae){var _0x433b68=_0x293447,_0xe467f8=_0x54b8ae[_0x433b68(0x1a2)]||_0x3e54e2[_0x433b68(0x1a2)];if((_0x292d65===_0x433b68(0x16d)||_0x292d65===_0x433b68(0x1c9))&&_0x2e866c['value']){let _0x4b6f9d=_0x2e866c[_0x433b68(0x123)][_0x433b68(0x1bf)];_0x3e54e2[_0x433b68(0x1c8)]+=_0x4b6f9d,_0x3e54e2[_0x433b68(0x1c8)]>_0x3e54e2[_0x433b68(0x186)]?(_0x2e866c[_0x433b68(0x131)]='',delete _0x2e866c['value']):_0x4b6f9d>_0xe467f8&&(_0x2e866c[_0x433b68(0x131)]=_0x2e866c[_0x433b68(0x123)][_0x433b68(0x165)](0x0,_0xe467f8),delete _0x2e866c[_0x433b68(0x123)]);}}[_0x293447(0x1ce)](_0x41133b){var _0x4e4a01=_0x293447;return!!(_0x41133b&&_0x46482b['Map']&&this['_objectToString'](_0x41133b)===_0x4e4a01(0x122)&&_0x41133b[_0x4e4a01(0x15e)]);}[_0x293447(0x200)](_0x11d20f){var _0x23db08=_0x293447;if(_0x11d20f['match'](/^\\d+$/))return _0x11d20f;var _0x5adfc1;try{_0x5adfc1=JSON['stringify'](''+_0x11d20f);}catch{_0x5adfc1='\\x22'+this[_0x23db08(0x16f)](_0x11d20f)+'\\x22';}return _0x5adfc1['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x5adfc1=_0x5adfc1['substr'](0x1,_0x5adfc1[_0x23db08(0x1bf)]-0x2):_0x5adfc1=_0x5adfc1[_0x23db08(0x160)](/'/g,'\\x5c\\x27')[_0x23db08(0x160)](/\\\\\"/g,'\\x22')[_0x23db08(0x160)](/(^\"|\"$)/g,'\\x27'),_0x5adfc1;}[_0x293447(0x1a5)](_0x1d7671,_0x498e8f,_0x5d4ebb,_0x2a25f5){var _0x17280d=_0x293447;this[_0x17280d(0x12a)](_0x1d7671,_0x498e8f),_0x2a25f5&&_0x2a25f5(),this['_additionalMetadata'](_0x5d4ebb,_0x1d7671),this[_0x17280d(0x1c2)](_0x1d7671,_0x498e8f);}[_0x293447(0x12a)](_0x31a115,_0x24b39a){var _0x31f20d=_0x293447;this[_0x31f20d(0x1c7)](_0x31a115,_0x24b39a),this[_0x31f20d(0x1fd)](_0x31a115,_0x24b39a),this[_0x31f20d(0x1cf)](_0x31a115,_0x24b39a),this['_setNodePermissions'](_0x31a115,_0x24b39a);}[_0x293447(0x1c7)](_0x47f680,_0x21bac2){}['_setNodeQueryPath'](_0x987612,_0x3a623b){}[_0x293447(0x1a8)](_0x3b02a4,_0x17ac04){}[_0x293447(0x15a)](_0x1a1ba3){var _0x13d424=_0x293447;return _0x1a1ba3===this[_0x13d424(0x1eb)];}[_0x293447(0x1c2)](_0x4b2b5b,_0x210fca){var _0x2a5047=_0x293447;this[_0x2a5047(0x1a8)](_0x4b2b5b,_0x210fca),this[_0x2a5047(0x1f3)](_0x4b2b5b),_0x210fca['sortProps']&&this[_0x2a5047(0x15d)](_0x4b2b5b),this[_0x2a5047(0x132)](_0x4b2b5b,_0x210fca),this[_0x2a5047(0x205)](_0x4b2b5b,_0x210fca),this[_0x2a5047(0x1da)](_0x4b2b5b);}[_0x293447(0x13f)](_0x20792e,_0x1d1cce){var _0x581b38=_0x293447;let _0x4b47bf;try{_0x46482b[_0x581b38(0x1ad)]&&(_0x4b47bf=_0x46482b['console']['error'],_0x46482b[_0x581b38(0x1ad)][_0x581b38(0x203)]=function(){}),_0x20792e&&typeof _0x20792e[_0x581b38(0x1bf)]==_0x581b38(0x1f2)&&(_0x1d1cce[_0x581b38(0x1bf)]=_0x20792e[_0x581b38(0x1bf)]);}catch{}finally{_0x4b47bf&&(_0x46482b['console'][_0x581b38(0x203)]=_0x4b47bf);}if(_0x1d1cce[_0x581b38(0x197)]===_0x581b38(0x1f2)||_0x1d1cce['type']===_0x581b38(0x17e)){if(isNaN(_0x1d1cce['value']))_0x1d1cce[_0x581b38(0x1de)]=!0x0,delete _0x1d1cce[_0x581b38(0x123)];else switch(_0x1d1cce[_0x581b38(0x123)]){case Number[_0x581b38(0x193)]:_0x1d1cce['positiveInfinity']=!0x0,delete _0x1d1cce[_0x581b38(0x123)];break;case Number[_0x581b38(0x19a)]:_0x1d1cce['negativeInfinity']=!0x0,delete _0x1d1cce[_0x581b38(0x123)];break;case 0x0:this[_0x581b38(0x1fe)](_0x1d1cce[_0x581b38(0x123)])&&(_0x1d1cce[_0x581b38(0x187)]=!0x0);break;}}else _0x1d1cce[_0x581b38(0x197)]==='function'&&typeof _0x20792e[_0x581b38(0x1d7)]==_0x581b38(0x16d)&&_0x20792e[_0x581b38(0x1d7)]&&_0x1d1cce[_0x581b38(0x1d7)]&&_0x20792e['name']!==_0x1d1cce['name']&&(_0x1d1cce[_0x581b38(0x154)]=_0x20792e[_0x581b38(0x1d7)]);}['_isNegativeZero'](_0x138f02){var _0x295204=_0x293447;return 0x1/_0x138f02===Number[_0x295204(0x19a)];}[_0x293447(0x15d)](_0x3c496e){var _0x3d54d6=_0x293447;!_0x3c496e[_0x3d54d6(0x1f6)]||!_0x3c496e[_0x3d54d6(0x1f6)][_0x3d54d6(0x1bf)]||_0x3c496e[_0x3d54d6(0x197)]===_0x3d54d6(0x144)||_0x3c496e[_0x3d54d6(0x197)]===_0x3d54d6(0x18b)||_0x3c496e[_0x3d54d6(0x197)]===_0x3d54d6(0x20d)||_0x3c496e[_0x3d54d6(0x1f6)][_0x3d54d6(0x1d2)](function(_0xd835fa,_0x3acc3e){var _0x1cb500=_0x3d54d6,_0x5c1e0b=_0xd835fa['name'][_0x1cb500(0x1e2)](),_0x3a5c54=_0x3acc3e[_0x1cb500(0x1d7)][_0x1cb500(0x1e2)]();return _0x5c1e0b<_0x3a5c54?-0x1:_0x5c1e0b>_0x3a5c54?0x1:0x0;});}['_addFunctionsNode'](_0x446f2b,_0x1b11ba){var _0x366039=_0x293447;if(!(_0x1b11ba[_0x366039(0x166)]||!_0x446f2b[_0x366039(0x1f6)]||!_0x446f2b[_0x366039(0x1f6)]['length'])){for(var _0x10e1ba=[],_0x13339e=[],_0x124074=0x0,_0x2b5050=_0x446f2b[_0x366039(0x1f6)]['length'];_0x124074<_0x2b5050;_0x124074++){var _0x3cf9a2=_0x446f2b[_0x366039(0x1f6)][_0x124074];_0x3cf9a2['type']===_0x366039(0x12d)?_0x10e1ba[_0x366039(0x1a0)](_0x3cf9a2):_0x13339e[_0x366039(0x1a0)](_0x3cf9a2);}if(!(!_0x13339e[_0x366039(0x1bf)]||_0x10e1ba[_0x366039(0x1bf)]<=0x1)){_0x446f2b[_0x366039(0x1f6)]=_0x13339e;var _0x549186={'functionsNode':!0x0,'props':_0x10e1ba};this[_0x366039(0x1c7)](_0x549186,_0x1b11ba),this['_setNodeLabel'](_0x549186,_0x1b11ba),this[_0x366039(0x1f3)](_0x549186),this[_0x366039(0x1f8)](_0x549186,_0x1b11ba),_0x549186['id']+='\\x20f',_0x446f2b[_0x366039(0x1f6)][_0x366039(0x184)](_0x549186);}}}[_0x293447(0x205)](_0x4c40b3,_0x1ff381){}[_0x293447(0x1f3)](_0x117591){}[_0x293447(0x174)](_0x51f5ce){var _0x2c42f0=_0x293447;return Array[_0x2c42f0(0x198)](_0x51f5ce)||typeof _0x51f5ce==_0x2c42f0(0x155)&&this[_0x2c42f0(0x16f)](_0x51f5ce)==='[object\\x20Array]';}[_0x293447(0x1f8)](_0x392cbb,_0x281927){}[_0x293447(0x1da)](_0x4c8651){var _0x165202=_0x293447;delete _0x4c8651[_0x165202(0x167)],delete _0x4c8651[_0x165202(0x18c)],delete _0x4c8651[_0x165202(0x17b)];}[_0x293447(0x1cf)](_0x513945,_0x3b49c2){}}let _0x5b4cef=new _0x17520b(),_0x54ed19={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x4cc6fd={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x51276c(_0x56a223,_0x4d7393,_0x37d4ff,_0x448b33,_0x3bb7c4,_0x4d919b){var _0x371f52=_0x293447;let _0x26f3f4,_0x16ae89;try{_0x16ae89=_0x147949(),_0x26f3f4=_0x4c887a[_0x4d7393],!_0x26f3f4||_0x16ae89-_0x26f3f4['ts']>0x1f4&&_0x26f3f4['count']&&_0x26f3f4['time']/_0x26f3f4['count']<0x64?(_0x4c887a[_0x4d7393]=_0x26f3f4={'count':0x0,'time':0x0,'ts':_0x16ae89},_0x4c887a[_0x371f52(0x168)]={}):_0x16ae89-_0x4c887a[_0x371f52(0x168)]['ts']>0x32&&_0x4c887a[_0x371f52(0x168)][_0x371f52(0x202)]&&_0x4c887a[_0x371f52(0x168)]['time']/_0x4c887a[_0x371f52(0x168)][_0x371f52(0x202)]<0x64&&(_0x4c887a[_0x371f52(0x168)]={});let _0x1ec019=[],_0x2bed04=_0x26f3f4[_0x371f52(0x15c)]||_0x4c887a[_0x371f52(0x168)][_0x371f52(0x15c)]?_0x4cc6fd:_0x54ed19,_0x2002fe=_0x24b007=>{var _0xf5206a=_0x371f52;let _0x18426c={};return _0x18426c[_0xf5206a(0x1f6)]=_0x24b007[_0xf5206a(0x1f6)],_0x18426c['elements']=_0x24b007[_0xf5206a(0x148)],_0x18426c[_0xf5206a(0x1a2)]=_0x24b007[_0xf5206a(0x1a2)],_0x18426c[_0xf5206a(0x186)]=_0x24b007[_0xf5206a(0x186)],_0x18426c[_0xf5206a(0x178)]=_0x24b007[_0xf5206a(0x178)],_0x18426c[_0xf5206a(0x1f5)]=_0x24b007[_0xf5206a(0x1f5)],_0x18426c[_0xf5206a(0x14b)]=!0x1,_0x18426c[_0xf5206a(0x166)]=!_0x57e6b2,_0x18426c[_0xf5206a(0x152)]=0x1,_0x18426c[_0xf5206a(0x1bc)]=0x0,_0x18426c[_0xf5206a(0x171)]=_0xf5206a(0x169),_0x18426c[_0xf5206a(0x158)]='root_exp',_0x18426c['autoExpand']=!0x0,_0x18426c[_0xf5206a(0x12b)]=[],_0x18426c[_0xf5206a(0x1c3)]=0x0,_0x18426c[_0xf5206a(0x140)]=!0x0,_0x18426c[_0xf5206a(0x1c8)]=0x0,_0x18426c[_0xf5206a(0x204)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x18426c;};for(var _0x131ddb=0x0;_0x131ddb<_0x3bb7c4[_0x371f52(0x1bf)];_0x131ddb++)_0x1ec019[_0x371f52(0x1a0)](_0x5b4cef[_0x371f52(0x1dd)]({'timeNode':_0x56a223===_0x371f52(0x1cd)||void 0x0},_0x3bb7c4[_0x131ddb],_0x2002fe(_0x2bed04),{}));if(_0x56a223===_0x371f52(0x12e)){let _0x3a6f25=Error['stackTraceLimit'];try{Error[_0x371f52(0x1cb)]=0x1/0x0,_0x1ec019[_0x371f52(0x1a0)](_0x5b4cef[_0x371f52(0x1dd)]({'stackNode':!0x0},new Error()[_0x371f52(0x11f)],_0x2002fe(_0x2bed04),{'strLength':0x1/0x0}));}finally{Error[_0x371f52(0x1cb)]=_0x3a6f25;}}return{'method':_0x371f52(0x1a4),'version':_0x17fda6,'args':[{'ts':_0x37d4ff,'session':_0x448b33,'args':_0x1ec019,'id':_0x4d7393,'context':_0x4d919b}]};}catch(_0x6fdb2){return{'method':_0x371f52(0x1a4),'version':_0x17fda6,'args':[{'ts':_0x37d4ff,'session':_0x448b33,'args':[{'type':_0x371f52(0x1e9),'error':_0x6fdb2&&_0x6fdb2[_0x371f52(0x194)]}],'id':_0x4d7393,'context':_0x4d919b}]};}finally{try{if(_0x26f3f4&&_0x16ae89){let _0x46ed87=_0x147949();_0x26f3f4['count']++,_0x26f3f4['time']+=_0x3407be(_0x16ae89,_0x46ed87),_0x26f3f4['ts']=_0x46ed87,_0x4c887a[_0x371f52(0x168)]['count']++,_0x4c887a['hits'][_0x371f52(0x1cd)]+=_0x3407be(_0x16ae89,_0x46ed87),_0x4c887a['hits']['ts']=_0x46ed87,(_0x26f3f4[_0x371f52(0x202)]>0x32||_0x26f3f4[_0x371f52(0x1cd)]>0x64)&&(_0x26f3f4[_0x371f52(0x15c)]=!0x0),(_0x4c887a[_0x371f52(0x168)][_0x371f52(0x202)]>0x3e8||_0x4c887a[_0x371f52(0x168)][_0x371f52(0x1cd)]>0x12c)&&(_0x4c887a[_0x371f52(0x168)][_0x371f52(0x15c)]=!0x0);}}catch{}}}return _0x51276c;}((_0x286e60,_0x143385,_0x33d862,_0x140af9,_0x3f48b2,_0x5ca465,_0x5c8d8e,_0x3928e8,_0x5a585c,_0x3f3d25)=>{var _0x4934aa=_0xcad5d2;if(_0x286e60[_0x4934aa(0x18d)])return _0x286e60[_0x4934aa(0x18d)];if(!J(_0x286e60,_0x3928e8,_0x3f48b2))return _0x286e60[_0x4934aa(0x18d)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x286e60[_0x4934aa(0x18d)];let _0x425c22=W(_0x286e60),_0x408ec9=_0x425c22[_0x4934aa(0x129)],_0x4f57cc=_0x425c22[_0x4934aa(0x1ab)],_0x587aeb=_0x425c22[_0x4934aa(0x13b)],_0x4823a2={'hits':{},'ts':{}},_0x1b72ac=Y(_0x286e60,_0x5a585c,_0x4823a2,_0x5ca465),_0x1b1e6b=_0x253605=>{_0x4823a2['ts'][_0x253605]=_0x4f57cc();},_0x57c59a=(_0x599542,_0x1e2fab)=>{let _0x12e671=_0x4823a2['ts'][_0x1e2fab];if(delete _0x4823a2['ts'][_0x1e2fab],_0x12e671){let _0x40c3fd=_0x408ec9(_0x12e671,_0x4f57cc());_0x44510b(_0x1b72ac('time',_0x599542,_0x587aeb(),_0x5731f6,[_0x40c3fd],_0x1e2fab));}},_0x35091e=_0x31d627=>_0x39550d=>{var _0xc1d5f6=_0x4934aa;try{_0x1b1e6b(_0x39550d),_0x31d627(_0x39550d);}finally{_0x286e60[_0xc1d5f6(0x1ad)][_0xc1d5f6(0x1cd)]=_0x31d627;}},_0x6a42e3=_0x30aeda=>_0x4e197f=>{var _0x1c5b5e=_0x4934aa;try{let [_0x1025c3,_0x2db8a6]=_0x4e197f[_0x1c5b5e(0x19e)](_0x1c5b5e(0x182));_0x57c59a(_0x2db8a6,_0x1025c3),_0x30aeda(_0x1025c3);}finally{_0x286e60[_0x1c5b5e(0x1ad)][_0x1c5b5e(0x170)]=_0x30aeda;}};_0x286e60[_0x4934aa(0x18d)]={'consoleLog':(_0x59d10c,_0xdbe705)=>{var _0x42f196=_0x4934aa;_0x286e60['console'][_0x42f196(0x1a4)][_0x42f196(0x1d7)]!==_0x42f196(0x18f)&&_0x44510b(_0x1b72ac('log',_0x59d10c,_0x587aeb(),_0x5731f6,_0xdbe705));},'consoleTrace':(_0x5ae885,_0x2c92c5)=>{var _0x3706a6=_0x4934aa;_0x286e60[_0x3706a6(0x1ad)][_0x3706a6(0x1a4)][_0x3706a6(0x1d7)]!==_0x3706a6(0x1c5)&&_0x44510b(_0x1b72ac('trace',_0x5ae885,_0x587aeb(),_0x5731f6,_0x2c92c5));},'consoleTime':()=>{var _0x169253=_0x4934aa;_0x286e60[_0x169253(0x1ad)]['time']=_0x35091e(_0x286e60[_0x169253(0x1ad)][_0x169253(0x1cd)]);},'consoleTimeEnd':()=>{var _0x218684=_0x4934aa;_0x286e60[_0x218684(0x1ad)][_0x218684(0x170)]=_0x6a42e3(_0x286e60['console']['timeEnd']);},'autoLog':(_0x2d8fba,_0x2f3a42)=>{var _0x5b8014=_0x4934aa;_0x44510b(_0x1b72ac(_0x5b8014(0x1a4),_0x2f3a42,_0x587aeb(),_0x5731f6,[_0x2d8fba]));},'autoLogMany':(_0x15bced,_0xb0778)=>{var _0x54901e=_0x4934aa;_0x44510b(_0x1b72ac(_0x54901e(0x1a4),_0x15bced,_0x587aeb(),_0x5731f6,_0xb0778));},'autoTrace':(_0x31f390,_0x13ce3a)=>{var _0x49313e=_0x4934aa;_0x44510b(_0x1b72ac(_0x49313e(0x12e),_0x13ce3a,_0x587aeb(),_0x5731f6,[_0x31f390]));},'autoTraceMany':(_0x172d93,_0x4bc431)=>{var _0x3375f5=_0x4934aa;_0x44510b(_0x1b72ac(_0x3375f5(0x12e),_0x172d93,_0x587aeb(),_0x5731f6,_0x4bc431));},'autoTime':(_0x4eb614,_0xcaed47,_0x545aa6)=>{_0x1b1e6b(_0x545aa6);},'autoTimeEnd':(_0x4ff496,_0x55180c,_0x50a20f)=>{_0x57c59a(_0x55180c,_0x50a20f);},'coverage':_0x5d797e=>{var _0x2ead12=_0x4934aa;_0x44510b({'method':_0x2ead12(0x189),'version':_0x5ca465,'args':[{'id':_0x5d797e}]});}};let _0x44510b=b(_0x286e60,_0x143385,_0x33d862,_0x140af9,_0x3f48b2,_0x3f3d25),_0x5731f6=_0x286e60[_0x4934aa(0x201)];return _0x286e60[_0x4934aa(0x18d)];})(globalThis,'127.0.0.1','41489',_0xcad5d2(0x16b),_0xcad5d2(0x162),'1.0.0',_0xcad5d2(0x190),_0xcad5d2(0x14a),_0xcad5d2(0x20b),_0xcad5d2(0x1fa));");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/
})();

/******/ })()
;
//# sourceMappingURL=main.js.map