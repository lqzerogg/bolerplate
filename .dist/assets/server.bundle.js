(self["webpackChunkbolerplate"] = self["webpackChunkbolerplate"] || []).push([["server"],{

/***/ 8376:
/*!*************************!*\
  !*** ./assets/logo.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "103b5fa18196d5665a7e.svg";

/***/ }),

/***/ 3349:
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ 2122:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ 1788:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ 4665);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ 9756:
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ 4665:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ 9547:
/*!************************!*\
  !*** ./client/App.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-loader/root */ 1570);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ 3727);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ 6550);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ 4310);
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test */ 490);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ 8956);
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








function App(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: "tab-ctn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tabs"
  }, _routes__WEBPACK_IMPORTED_MODULE_1__.pages.map(({
    name,
    path
  }) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      className: `tab ${props.location.pathname === path ? 'is-active' : ''}`,
      key: path,
      to: path
    }, name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Switch, null, _routes__WEBPACK_IMPORTED_MODULE_1__.routes));
}

const _default = (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_6__.hot)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.withRouter)(App));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/Zero/projects/bolerplate/client/App.tsx");
  reactHotLoader.register(_default, "default", "/Users/Zero/projects/bolerplate/client/App.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ 2077:
/*!**********************************************!*\
  !*** ./client/dynamic_pages/about/index.tsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ 6550);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ 684);
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




const About = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__.default)(() => __webpack_require__.e(/*! import() */ "client_dynamic_pages_about_About_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./About */ 1296)));
const route = '/about';

const _default = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
  key: route,
  path: route
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(About, null));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(About, "About", "/Users/Zero/projects/bolerplate/client/dynamic_pages/about/index.tsx");
  reactHotLoader.register(route, "route", "/Users/Zero/projects/bolerplate/client/dynamic_pages/about/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/Zero/projects/bolerplate/client/dynamic_pages/about/index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ 3820:
/*!*******************************!*\
  !*** ./client/home/index.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/logo.svg */ 8376);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ 6550);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ 8988);
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






function Home() {
  const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__,
    className: "App-logo",
    alt: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Hello Vite + React!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    onClick: () => setCount(count => count + 1)
  }, "hello world! count: ", count)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Edit ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "App.tsx"), " and save to test HMR updates."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "App-link",
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn React"), ' | ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "App-link",
    href: "https://vitejs.dev/guide/features.html",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Vite Docs")));
}

__signature__(Home, "useState{[count, setCount](0)}");

const _default = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
  exact: true,
  key: "/",
  path: "/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Home, null));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, "Home", "/Users/Zero/projects/bolerplate/client/home/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/Zero/projects/bolerplate/client/home/index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ 4310:
/*!***************************!*\
  !*** ./client/routes.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pages": () => (/* binding */ pages),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ 3820);
/* harmony import */ var _dynamic_pages_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic_pages/about */ 2077);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ 6550);
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "About");
}

function Detail() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Details");
}

const pages = [{
  name: 'Home',
  path: '/'
}, {
  name: 'About',
  path: '/about'
}, {
  name: 'Detail',
  path: '/detail'
}];
const routes = [_home__WEBPACK_IMPORTED_MODULE_1__.default, _dynamic_pages_about__WEBPACK_IMPORTED_MODULE_2__.default, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
  key: "/detail",
  path: "/detail"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Detail, null))];

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(About, "About", "/Users/Zero/projects/bolerplate/client/routes.tsx");
  reactHotLoader.register(Detail, "Detail", "/Users/Zero/projects/bolerplate/client/routes.tsx");
  reactHotLoader.register(pages, "pages", "/Users/Zero/projects/bolerplate/client/routes.tsx");
  reactHotLoader.register(routes, "routes", "/Users/Zero/projects/bolerplate/client/routes.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ 796:
/*!*********************************!*\
  !*** ./client/server-entry.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ 7762);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ 6550);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ 9547);
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





function render(url, context) {
  return react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {
    location: url,
    context: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, null)));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(render, "render", "/Users/Zero/projects/bolerplate/client/server-entry.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ 490:
/*!*************************!*\
  !*** ./client/test.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

console.log('test tsx');


/***/ }),

/***/ 6259:
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./client/App.css ***!
  \****************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".App{text-align:center}body{margin-bottom:50px}.tab-ctn{background:#fff;bottom:0;position:fixed;width:100%}.tab-ctn .tabs{display:-webkit-box;display:-ms-flexbox;display:flex;height:50px;margin:0;padding:0}.tab-ctn .tab{-webkit-box-flex:1;color:blue;-ms-flex:1;flex:1;padding:10px 5px;vertical-align:middle}.tab-ctn .tab.is-active{background:grey;color:red}", "",{"version":3,"sources":["webpack://./client/App.css"],"names":[],"mappings":"AAAA,KACE,iBACF,CAEA,KACE,kBACF,CAEA,SAIE,eAAiB,CADjB,QAAS,CAFT,cAAe,CACf,UAsBF,CAlBE,eAEE,mBAAa,CAAb,mBAAa,CAAb,YAAa,CADb,WAAY,CAEZ,QAAS,CACT,SACF,CAEA,cACE,kBAAO,CAEP,UAAW,CAFX,UAAO,CAAP,MAAO,CACP,gBAAiB,CAEjB,qBAMF,CAJE,wBACE,eAAgB,CAChB,SACF","sourcesContent":[".App {\n  text-align: center;\n}\n\nbody {\n  margin-bottom: 50px;\n}\n\n.tab-ctn {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  background: white;\n\n  & .tabs {\n    height: 50px;\n    display: flex;\n    margin: 0;\n    padding: 0;\n  }\n\n  & .tab {\n    flex: 1;\n    padding: 10px 5px;\n    color: blue;\n    vertical-align: middle;\n\n    &.is-active {\n      background: grey;\n      color: red;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 899:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./client/home/index.css ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".App-logo{height:40vmin;pointer-events:none}@media (prefers-reduced-motion:no-preference){.App-logo{-webkit-animation:App-logo-spin 20s linear infinite;animation:App-logo-spin 20s linear infinite}}.App-header{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;background-color:#282c34;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-size:calc(10px + 2vmin);justify-content:center;min-height:100vh}.App-link{color:#61dafb}@-webkit-keyframes App-logo-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes App-logo-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}button{font-size:calc(10px + 2vmin)}", "",{"version":3,"sources":["webpack://./client/home/index.css"],"names":[],"mappings":"AAAA,UACE,aAAc,CACd,mBACF,CAEA,8CACE,UACE,mDAA4C,CAA5C,2CACF,CACF,CAEA,YAIE,2BAAsB,CAAtB,4BAAsB,CACtB,wBAAmB,CAAnB,qBAAmB,CACnB,uBAAuB,CAAvB,oBAAuB,CADvB,kBAAmB,CAJnB,wBAAyB,CAOzB,UAAY,CALZ,mBAAa,CAAb,mBAAa,CAAb,YAAa,CACb,yBAAsB,CAAtB,qBAAsB,CAGtB,4BAA6B,CAD7B,sBAAuB,CAJvB,gBAOF,CAEA,UACE,aACF,CAEA,iCACE,GACE,8BAAuB,CAAvB,sBACF,CACA,GACE,+BAAyB,CAAzB,uBACF,CACF,CAPA,yBACE,GACE,8BAAuB,CAAvB,sBACF,CACA,GACE,+BAAyB,CAAzB,uBACF,CACF,CAEA,OACE,4BACF","sourcesContent":[".App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\nbutton {\n  font-size: calc(10px + 2vmin);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3645:
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

/***/ 4015:
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 5493:
/*!******************************************************!*\
  !*** ./node_modules/fast-levenshtein/levenshtein.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  'use strict';
  
  var collator;
  try {
    collator = (typeof Intl !== "undefined" && typeof Intl.Collator !== "undefined") ? Intl.Collator("generic", { sensitivity: "base" }) : null;
  } catch (err){
    console.log("Collator could not be initialized and wouldn't be used");
  }
  // arrays to re-use
  var prevRow = [],
    str2Char = [];
  
  /**
   * Based on the algorithm at http://en.wikipedia.org/wiki/Levenshtein_distance.
   */
  var Levenshtein = {
    /**
     * Calculate levenshtein distance of the two strings.
     *
     * @param str1 String the first string.
     * @param str2 String the second string.
     * @param [options] Additional options.
     * @param [options.useCollator] Use `Intl.Collator` for locale-sensitive string comparison.
     * @return Integer the levenshtein distance (0 and above).
     */
    get: function(str1, str2, options) {
      var useCollator = (options && collator && options.useCollator);
      
      var str1Len = str1.length,
        str2Len = str2.length;
      
      // base cases
      if (str1Len === 0) return str2Len;
      if (str2Len === 0) return str1Len;

      // two rows
      var curCol, nextCol, i, j, tmp;

      // initialise previous row
      for (i=0; i<str2Len; ++i) {
        prevRow[i] = i;
        str2Char[i] = str2.charCodeAt(i);
      }
      prevRow[str2Len] = str2Len;

      var strCmp;
      if (useCollator) {
        // calculate current row distance from previous row using collator
        for (i = 0; i < str1Len; ++i) {
          nextCol = i + 1;

          for (j = 0; j < str2Len; ++j) {
            curCol = nextCol;

            // substution
            strCmp = 0 === collator.compare(str1.charAt(i), String.fromCharCode(str2Char[j]));

            nextCol = prevRow[j] + (strCmp ? 0 : 1);

            // insertion
            tmp = curCol + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }
            // deletion
            tmp = prevRow[j + 1] + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }

            // copy current col value into previous (in preparation for next iteration)
            prevRow[j] = curCol;
          }

          // copy last col value into previous (in preparation for next iteration)
          prevRow[j] = nextCol;
        }
      }
      else {
        // calculate current row distance from previous row without collator
        for (i = 0; i < str1Len; ++i) {
          nextCol = i + 1;

          for (j = 0; j < str2Len; ++j) {
            curCol = nextCol;

            // substution
            strCmp = str1.charCodeAt(i) === str2Char[j];

            nextCol = prevRow[j] + (strCmp ? 0 : 1);

            // insertion
            tmp = curCol + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }
            // deletion
            tmp = prevRow[j + 1] + 1;
            if (nextCol > tmp) {
              nextCol = tmp;
            }

            // copy current col value into previous (in preparation for next iteration)
            prevRow[j] = curCol;
          }

          // copy last col value into previous (in preparation for next iteration)
          prevRow[j] = nextCol;
        }
      }
      return nextCol;
    }

  };

  // amd
  if ( true && __webpack_require__.amdD !== null && __webpack_require__.amdO) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return Levenshtein;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // commonjs
  else if ( true && module !== null && typeof exports !== "undefined" && module.exports === exports) {
    module.exports = Levenshtein;
  }
  // web worker
  else if (typeof self !== "undefined" && typeof self.postMessage === 'function' && typeof self.importScripts === 'function') {
    self.Levenshtein = Levenshtein;
  }
  // browser main thread
  else if (typeof window !== "undefined" && window !== null) {
    window.Levenshtein = Levenshtein;
  }
}());



/***/ }),

/***/ 9731:
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBrowserHistory": () => (/* binding */ createBrowserHistory),
/* harmony export */   "createHashHistory": () => (/* binding */ createHashHistory),
/* harmony export */   "createMemoryHistory": () => (/* binding */ createMemoryHistory),
/* harmony export */   "createLocation": () => (/* binding */ createLocation),
/* harmony export */   "locationsAreEqual": () => (/* binding */ locationsAreEqual),
/* harmony export */   "parsePath": () => (/* binding */ parsePath),
/* harmony export */   "createPath": () => (/* binding */ createPath)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 2122);
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ 8273);
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ 5429);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ 5298);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ 2177);






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0,resolve_pathname__WEBPACK_IMPORTED_MODULE_1__.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0,value_equal__WEBPACK_IMPORTED_MODULE_2__.default)(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(prompt == null, 'A history supports only one prompt at a time') : 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__.default)(false, 'Browser history needs a DOM') : 0 : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__.default)(false, 'Hash history needs a DOM') : 0 : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(state === undefined, 'Hash history cannot push state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(state === undefined, 'Hash history cannot replace state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ 8679:
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ 9864);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 5826:
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 4523:
/*!******************************************************************!*\
  !*** ./node_modules/mini-create-react-context/dist/esm/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ 1788);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ 5298);





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (true) {
            (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired), _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react__WEBPACK_IMPORTED_MODULE_0__.createContext || createReactContext;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ 7418:
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 4779:
/*!**********************************************!*\
  !*** ./node_modules/path-to-regexp/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isarray = __webpack_require__(/*! isarray */ 5826)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ 1040:
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 414);
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ 1805:
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ 9864);
var assign = __webpack_require__(/*! object-assign */ 7418);

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 414);
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ 1040);

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 5697:
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ 9864);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ 1805)(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ 414:
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 9822:
/*!****************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.development.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ 7294);
var React__default = _interopDefault(React);
var shallowEqual = _interopDefault(__webpack_require__(/*! shallowequal */ 6774));
var levenshtein = _interopDefault(__webpack_require__(/*! fast-levenshtein */ 5493));
var ReactDOM = _interopDefault(__webpack_require__(/*! react-dom */ 3935));
var PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ 5697));
var defaultPolyfill = __webpack_require__(/*! react-lifecycles-compat */ 6871);
var defaultPolyfill__default = _interopDefault(defaultPolyfill);
var hoistNonReactStatic = _interopDefault(__webpack_require__(/*! hoist-non-react-statics */ 8679));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/* eslint-disable no-underscore-dangle */

var isCompositeComponent = function isCompositeComponent(type) {
  return typeof type === 'function';
};
var isReloadableComponent = function isReloadableComponent(type) {
  return typeof type === 'function' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object';
};

var getComponentDisplayName = function getComponentDisplayName(type) {
  var displayName = type.displayName || type.name;
  return displayName && displayName !== 'ReactComponent' ? displayName : 'Component';
};

var reactLifeCycleMountMethods = ['componentWillMount', 'componentDidMount'];

function isReactClass(Component) {
  return !!(Component.prototype && (React__default.Component.prototype.isPrototypeOf(Component.prototype) ||
  // react 14 support
  Component.prototype.isReactComponent || Component.prototype.componentWillMount || Component.prototype.componentWillUnmount || Component.prototype.componentDidMount || Component.prototype.componentDidUnmount || Component.prototype.render));
}

function isReactClassInstance(Component) {
  return Component && isReactClass({ prototype: Object.getPrototypeOf(Component) });
}

var getInternalInstance = function getInternalInstance(instance) {
  return instance._reactInternalFiber || // React 16
  instance._reactInternalInstance || // React 15
  null;
};

var updateInstance = function updateInstance(instance) {
  var updater = instance.updater,
      forceUpdate = instance.forceUpdate;

  if (typeof forceUpdate === 'function') {
    instance.forceUpdate();
  } else if (updater && typeof updater.enqueueForceUpdate === 'function') {
    updater.enqueueForceUpdate(instance);
  }
};

var isFragmentNode = function isFragmentNode(_ref) {
  var type = _ref.type;
  return React__default.Fragment && type === React__default.Fragment;
};

var ContextType = React__default.createContext ? React__default.createContext() : null;
var ConsumerType = ContextType && ContextType.Consumer.$$typeof;
var ProviderType = ContextType && ContextType.Provider.$$typeof;
var MemoType = React__default.memo && React__default.memo(function () {
  return null;
}).$$typeof;
var LazyType = React__default.lazy && React__default.lazy(function () {
  return null;
}).$$typeof;
var ForwardType = React__default.forwardRef && React__default.forwardRef(function () {
  return null;
}).$$typeof;

var CONTEXT_CURRENT_VALUE = '_currentValue';

var isContextConsumer = function isContextConsumer(_ref2) {
  var type = _ref2.type;
  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && '$$typeof' in type && type.$$typeof === ConsumerType && ConsumerType;
};
var isContextProvider = function isContextProvider(_ref3) {
  var type = _ref3.type;
  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && '$$typeof' in type && type.$$typeof === ProviderType && ProviderType;
};
var isMemoType = function isMemoType(_ref4) {
  var type = _ref4.type;
  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && '$$typeof' in type && type.$$typeof === MemoType && MemoType;
};
var isLazyType = function isLazyType(_ref5) {
  var type = _ref5.type;
  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && '$$typeof' in type && type.$$typeof === LazyType && LazyType;
};
var isForwardType = function isForwardType(_ref6) {
  var type = _ref6.type;
  return type && (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && '$$typeof' in type && type.$$typeof === ForwardType && ForwardType;
};
var isContextType = function isContextType(type) {
  return isContextConsumer(type) || isContextProvider(type);
};

var getElementType = function getElementType(type) {
  var element = { type: type };

  if (isContextConsumer(element)) {
    return 'Consumer';
  }
  if (isContextProvider(element)) {
    return 'Provider';
  }
  if (isLazyType(element)) {
    return 'Lazy';
  }
  if (isMemoType(element)) {
    return 'Memo';
  }
  if (isForwardType(element)) {
    return 'Forward';
  }

  if (isReactClass(type)) {
    return 'Class';
  }

  if (typeof element === 'function') {
    return 'FC';
  }

  return 'unknown';
};

var getContextProvider = function getContextProvider(type) {
  return type && type._context;
};

var configuration = {
  // Log level
  logLevel: 'error',

  // Allows using SFC without changes
  pureSFC: true,

  // keep render method unpatched, moving sideEffect to componentDidUpdate
  pureRender: true,

  // Allows SFC to be used, enables "intermediate" components used by Relay, should be disabled for Preact
  allowSFC: true,

  // Allow reload of effect hooks with non zero dependency list
  reloadHooks: true,

  // Allow reload of mount effect hooks - zero deps
  reloadLifeCycleHooks: false,

  // Enables hook reload on hook body change
  reloadHooksOnBodyChange: true,

  // Disable "hot-replacement-render"
  disableHotRenderer: false,

  // @private
  integratedComparator: false,
  // @private
  integratedResolver: false,

  // Disable "hot-replacement-render" when injection into react-dom is made
  disableHotRendererWhenInjected: true,

  // Controls `react-🔥-dom patch` notification
  showReactDomPatchNotification: true,

  // Hook on babel component register.
  onComponentRegister: false,

  // Hook on React renders for a first time component
  onComponentCreate: false,

  // flag to completely disable RHL for SFC. Probably don't use it without dom patch made.
  ignoreSFC: false,

  // ignoreSFC when injection into react-dom is made
  ignoreSFCWhenInjected: true,

  // flag to completely disable RHL for Components
  ignoreComponents: false,

  // default value for AppContainer errorOverlay
  errorReporter: undefined,

  // Global error overlay
  ErrorOverlay: undefined,

  // Actively track lazy loaded components
  trackTailUpdates: true,

  // wrap lazy with AppProvider to allow independent updates
  wrapLazy: true,

  // react hot dom features enabled
  IS_REACT_MERGE_ENABLED: false
};

var internalConfiguration = {
  // control proxy creation
  disableProxyCreation: false
};

var setConfiguration = function setConfiguration(config) {
  // not using Object.assing for IE11 compliance
  for (var i in config) {
    if (config.hasOwnProperty(i)) {
      configuration[i] = config[i];
    }
  }
};

/* eslint-disable no-console */

var logger = {
  debug: function debug() {
    if (['debug'].indexOf(configuration.logLevel) !== -1) {
      var _console;

      (_console = console).debug.apply(_console, arguments);
    }
  },
  log: function log() {
    if (['debug', 'log'].indexOf(configuration.logLevel) !== -1) {
      var _console2;

      (_console2 = console).log.apply(_console2, arguments);
    }
  },
  warn: function warn() {
    if (['debug', 'log', 'warn'].indexOf(configuration.logLevel) !== -1) {
      var _console3;

      (_console3 = console).warn.apply(_console3, arguments);
    }
  },
  error: function error() {
    if (['debug', 'log', 'warn', 'error'].indexOf(configuration.logLevel) !== -1) {
      var _console4;

      (_console4 = console).error.apply(_console4, arguments);
    }
  }
};

/* eslint-disable no-eval, func-names */

function safeReactConstructor(Component, lastInstance) {
  try {
    if (lastInstance) {
      return new Component(lastInstance.props, lastInstance.context);
    }
    return new Component({}, {});
  } catch (e) {
    // some components, like Redux connect could not be created without proper context
  }
  return null;
}

function isNativeFunction(fn) {
  return typeof fn === 'function' ? fn.toString().indexOf('[native code]') > 0 : false;
}

var identity = function identity(a) {
  return a;
};
var indirectEval = eval;

var doesSupportClasses = function () {
  try {
    indirectEval('class Test {}');
    return true;
  } catch (e) {
    return false;
  }
}();

var ES6ProxyComponentFactory = function ES6ProxyComponentFactory(InitialParent, postConstructionAction) {
  return indirectEval('\n(function(InitialParent, postConstructionAction) {\n  return class ' + (InitialParent.name || 'HotComponent') + ' extends InitialParent {\n    /*\n     ! THIS IS NOT YOUR COMPONENT !\n     !  THIS IS REACT-HOT-LOADER  !\n  \n     this is a "' + InitialParent.name + '" component, patched by React-Hot-Loader\n     Sorry, but the real class code was hidden behind this facade\n     Please refer to https://github.com/gaearon/react-hot-loader for details...\n    */    \n    \n    constructor(props, context) {\n      super(props, context)\n      postConstructionAction.call(this)\n    }\n  }\n})\n')(InitialParent, postConstructionAction);
};

var ES5ProxyComponentFactory = function ES5ProxyComponentFactory(InitialParent, postConstructionAction) {
  function ProxyComponent(props, context) {
    InitialParent.call(this, props, context);
    postConstructionAction.call(this);
  }
  ProxyComponent.prototype = Object.create(InitialParent.prototype);
  Object.setPrototypeOf(ProxyComponent, InitialParent);
  return ProxyComponent;
};

var proxyClassCreator = doesSupportClasses ? ES6ProxyComponentFactory : ES5ProxyComponentFactory;

function getOwnKeys(target) {
  return [].concat(Object.getOwnPropertyNames(target), Object.getOwnPropertySymbols(target));
}

function shallowStringsEqual(a, b) {
  for (var key in a) {
    if (String(a[key]) !== String(b[key])) {
      return false;
    }
  }
  return true;
}

function deepPrototypeUpdate(dest, source) {
  var deepDest = Object.getPrototypeOf(dest);
  var deepSrc = Object.getPrototypeOf(source);
  if (deepDest && deepSrc && deepSrc !== deepDest) {
    deepPrototypeUpdate(deepDest, deepSrc);
  }
  if (source.prototype && source.prototype !== dest.prototype) {
    dest.prototype = source.prototype;
  }
}

function safeDefineProperty(target, key, props) {
  try {
    Object.defineProperty(target, key, props);
  } catch (e) {
    logger.warn('Error while wrapping', key, ' -> ', e);
  }
}

var PREFIX = '__reactstandin__';
var PROXY_KEY = PREFIX + 'key';
var GENERATION = PREFIX + 'proxyGeneration';
var REGENERATE_METHOD = PREFIX + 'regenerateByEval';
var UNWRAP_PROXY = PREFIX + 'getCurrent';
var CACHED_RESULT = PREFIX + 'cachedResult';
var PROXY_IS_MOUNTED = PREFIX + 'isMounted';

var RENDERED_GENERATION = 'REACT_HOT_LOADER_RENDERED_GENERATION';

var RESERVED_STATICS = ['length', 'displayName', 'name', 'arguments', 'caller', 'prototype', 'toString', 'valueOf', 'isStatelessFunctionalProxy', PROXY_KEY, UNWRAP_PROXY];

function transferStaticProps(ProxyComponent, savedDescriptors, PreviousComponent, NextComponent) {
  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }

    var prevDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    var savedDescriptor = savedDescriptors[key];

    if (!shallowEqual(prevDescriptor, savedDescriptor)) {
      safeDefineProperty(NextComponent, key, prevDescriptor);
    }
  });

  // Copy newly defined static methods and properties
  Object.getOwnPropertyNames(NextComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }

    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(ProxyComponent, key);
    var savedDescriptor = savedDescriptors[key];

    // Skip redefined descriptors
    if (prevDescriptor && savedDescriptor && !shallowEqual(savedDescriptor, prevDescriptor)) {
      safeDefineProperty(NextComponent, key, prevDescriptor);
      return;
    }

    if (prevDescriptor && !savedDescriptor) {
      safeDefineProperty(ProxyComponent, key, prevDescriptor);
      return;
    }

    var nextDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextComponent, key), {
      configurable: true
    });

    savedDescriptors[key] = nextDescriptor;
    safeDefineProperty(ProxyComponent, key, nextDescriptor);
  });

  // Remove static methods and properties that are no longer defined
  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }
    // Skip statics that exist on the next class
    if (NextComponent.hasOwnProperty(key)) {
      return;
    }
    // Skip non-configurable statics
    var proxyDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    if (proxyDescriptor && !proxyDescriptor.configurable) {
      return;
    }

    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(PreviousComponent, key);
    var savedDescriptor = savedDescriptors[key];

    // Skip redefined descriptors
    if (prevDescriptor && savedDescriptor && !shallowEqual(savedDescriptor, prevDescriptor)) {
      return;
    }

    safeDefineProperty(ProxyComponent, key, {
      value: undefined
    });
  });

  return savedDescriptors;
}

function mergeComponents(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers) {
  var injectedCode = {};
  try {
    var nextInstance = safeReactConstructor(NextComponent, lastInstance);

    try {
      // Bypass babel class inheritance checking
      deepPrototypeUpdate(InitialComponent, NextComponent);
    } catch (e) {
      // It was ES6 class
    }

    var proxyInstance = safeReactConstructor(ProxyComponent, lastInstance);

    if (!nextInstance || !proxyInstance) {
      return injectedCode;
    }

    var mergedAttrs = _extends({}, proxyInstance, nextInstance);
    var hasRegenerate = proxyInstance[REGENERATE_METHOD];
    var ownKeys = getOwnKeys(Object.getPrototypeOf(ProxyComponent.prototype));
    Object.keys(mergedAttrs).forEach(function (key) {
      if (key.indexOf(PREFIX) === 0) return;
      var nextAttr = nextInstance[key];
      var prevAttr = proxyInstance[key];
      if (nextAttr) {
        if (isNativeFunction(nextAttr) || isNativeFunction(prevAttr)) {
          // this is bound method
          var isSameArity = nextAttr.length === prevAttr.length;
          var existsInPrototype = ownKeys.indexOf(key) >= 0 || ProxyComponent.prototype[key];
          if ((isSameArity || !prevAttr) && existsInPrototype) {
            if (hasRegenerate) {
              injectedCode[key] = 'Object.getPrototypeOf(this)[\'' + key + '\'].bind(this)';
            } else {
              logger.warn('React Hot Loader:,', 'Non-controlled class', ProxyComponent.name, 'contains a new native or bound function ', key, nextAttr, '. Unable to reproduce');
            }
          } else {
            logger.warn('React Hot Loader:', 'Updated class ', ProxyComponent.name, 'contains native or bound function ', key, nextAttr, '. Unable to reproduce, use arrow functions instead.', '(arity: ' + nextAttr.length + '/' + prevAttr.length + ', proto: ' + (existsInPrototype ? 'yes' : 'no'));
          }
          return;
        }

        var nextString = String(nextAttr);
        var injectedBefore = injectedMembers[key];
        var isArrow = nextString.indexOf('=>') >= 0;
        var isFunction = nextString.indexOf('function') >= 0 || isArrow;
        var referToThis = nextString.indexOf('this') >= 0;
        if (nextString !== String(prevAttr) || injectedBefore && nextString !== String(injectedBefore) || isArrow && referToThis) {
          if (!hasRegenerate) {
            if (!isFunction) {
              // just copy prop over
              injectedCode[key] = nextAttr;
            } else {
              logger.warn('React Hot Loader:', ' Updated class ', ProxyComponent.name, 'had different code for', key, nextAttr, '. Unable to reproduce. Regeneration support needed.');
            }
          } else {
            injectedCode[key] = nextAttr;
          }
        }
      }
    });
  } catch (e) {
    logger.warn('React Hot Loader:', e);
  }
  return injectedCode;
}

function checkLifeCycleMethods(ProxyComponent, NextComponent) {
  try {
    var p1 = Object.getPrototypeOf(ProxyComponent.prototype);
    var p2 = NextComponent.prototype;
    reactLifeCycleMountMethods.forEach(function (key) {
      var d1 = Object.getOwnPropertyDescriptor(p1, key) || { value: p1[key] };
      var d2 = Object.getOwnPropertyDescriptor(p2, key) || { value: p2[key] };
      if (!shallowStringsEqual(d1, d2)) {
        logger.warn('React Hot Loader:', 'You did update', ProxyComponent.name, 's lifecycle method', key, '. Unable to repeat');
      }
    });
  } catch (e) {
    // Ignore errors
  }
}

function inject(target, currentGeneration, injectedMembers) {
  if (target[GENERATION] !== currentGeneration) {
    var hasRegenerate = !!target[REGENERATE_METHOD];
    Object.keys(injectedMembers).forEach(function (key) {
      try {
        if (hasRegenerate) {
          var usedThis = String(injectedMembers[key]).match(/_this([\d]+)/gi) || [];
          target[REGENERATE_METHOD](key, '(function REACT_HOT_LOADER_SANDBOX () {\n          var _this  = this; // common babel transpile\n          ' + usedThis.map(function (name) {
            return 'var ' + name + ' = this;';
          }) + '\n\n          return ' + injectedMembers[key] + ';\n          }).call(this)');
        } else {
          target[key] = injectedMembers[key];
        }
      } catch (e) {
        logger.warn('React Hot Loader: Failed to regenerate method ', key, ' of class ', target);
        logger.warn('got error', e);
      }
    });

    target[GENERATION] = currentGeneration;
  }
}

var has = Object.prototype.hasOwnProperty;

var proxies = new WeakMap();

var resetClassProxies = function resetClassProxies() {
  proxies = new WeakMap();
};

var blackListedClassMembers = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentDidCatch', 'componentWillReceiveProps', 'componentWillUnmount', 'hotComponentRender', 'getInitialState', 'getDefaultProps'];

var defaultRenderOptions = {
  componentWillRender: identity,
  componentDidUpdate: function componentDidUpdate(result) {
    return result;
  },
  componentDidRender: function componentDidRender(result) {
    return result;
  }
};

var filteredPrototypeMethods = function filteredPrototypeMethods(Proto) {
  return Object.getOwnPropertyNames(Proto).filter(function (prop) {
    var descriptor = Object.getOwnPropertyDescriptor(Proto, prop);
    return descriptor && prop.indexOf(PREFIX) !== 0 && blackListedClassMembers.indexOf(prop) < 0 && typeof descriptor.value === 'function';
  });
};

var defineClassMember = function defineClassMember(Class, methodName, methodBody) {
  return safeDefineProperty(Class.prototype, methodName, {
    configurable: true,
    writable: true,
    enumerable: false,
    value: methodBody
  });
};

var defineClassMembers = function defineClassMembers(Class, methods) {
  return Object.keys(methods).forEach(function (methodName) {
    return defineClassMember(Class, methodName, methods[methodName]);
  });
};

var setSFPFlag = function setSFPFlag(component, flag) {
  return safeDefineProperty(component, 'isStatelessFunctionalProxy', {
    configurable: false,
    writable: false,
    enumerable: false,
    value: flag
  });
};

var copyMethodDescriptors = function copyMethodDescriptors(target, source) {
  if (source) {
    // it is possible to use `function-double` to construct an ideal clone, but does not make a sence
    var keys = Object.getOwnPropertyNames(source);

    keys.forEach(function (key) {
      return safeDefineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });

    safeDefineProperty(target, 'toString', {
      configurable: true,
      writable: false,
      enumerable: false,
      value: function toString() {
        return String(source);
      }
    });
  }

  return target;
};

var knownClassComponents = [];

var forEachKnownClass = function forEachKnownClass(cb) {
  return knownClassComponents.forEach(cb);
};

function createClassProxy(InitialComponent, proxyKey) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var renderOptions = _extends({}, defaultRenderOptions, options);
  var proxyConfig = _extends({}, configuration, options.proxy);
  // Prevent double wrapping.
  // Given a proxy class, return the existing proxy managing it.
  var existingProxy = proxies.get(InitialComponent);

  if (existingProxy) {
    return existingProxy;
  }

  var CurrentComponent = void 0;
  var savedDescriptors = {};
  var injectedMembers = {};
  var proxyGeneration = 0;
  var classUpdatePostponed = null;
  var instancesCount = 0;
  var isFunctionalComponent = !isReactClass(InitialComponent);

  var lastInstance = null;

  function postConstructionAction() {
    this[GENERATION] = 0;

    lastInstance = this;
    // is there is an update pending
    if (classUpdatePostponed) {
      var callUpdate = classUpdatePostponed;
      classUpdatePostponed = null;
      callUpdate();
    }
    // As long we can't override constructor
    // every class shall evolve from a base class
    inject(this, proxyGeneration, injectedMembers);
  }

  function proxiedUpdate() {
    if (this) {
      inject(this, proxyGeneration, injectedMembers);
    }
  }

  function lifeCycleWrapperFactory(wrapperName) {
    var sideEffect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;

    return copyMethodDescriptors(function wrappedMethod() {
      proxiedUpdate.call(this);
      sideEffect(this);

      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }

      return !isFunctionalComponent && CurrentComponent.prototype[wrapperName] && CurrentComponent.prototype[wrapperName].apply(this, rest);
    }, InitialComponent.prototype && InitialComponent.prototype[wrapperName]);
  }

  function methodWrapperFactory(wrapperName, realMethod) {
    return copyMethodDescriptors(function wrappedMethod() {
      for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        rest[_key2] = arguments[_key2];
      }

      return realMethod.apply(this, rest);
    }, realMethod);
  }

  var fakeBasePrototype = function fakeBasePrototype(Proto) {
    return filteredPrototypeMethods(Proto).reduce(function (acc, key) {
      acc[key] = methodWrapperFactory(key, Proto[key]);
      return acc;
    }, {});
  };

  var componentDidMount = lifeCycleWrapperFactory('componentDidMount', function (target) {
    target[PROXY_IS_MOUNTED] = true;
    target[RENDERED_GENERATION] = get$1();
    instancesCount++;
  });
  var componentDidUpdate = lifeCycleWrapperFactory('componentDidUpdate', renderOptions.componentDidUpdate);
  var componentWillUnmount = lifeCycleWrapperFactory('componentWillUnmount', function (target) {
    target[PROXY_IS_MOUNTED] = false;
    instancesCount--;
  });

  function hotComponentRender() {
    // repeating subrender call to keep RENDERED_GENERATION up to date
    renderOptions.componentWillRender(this);
    proxiedUpdate.call(this);
    var result = void 0;

    // We need to use hasOwnProperty here, as the cached result is a React node
    // and can be null or some other falsy value.
    if (has.call(this, CACHED_RESULT)) {
      result = this[CACHED_RESULT];
      delete this[CACHED_RESULT];
    } else if (isFunctionalComponent) {
      result = CurrentComponent(this.props, this.context);
    } else {
      var renderMethod = CurrentComponent.prototype.render || this.render;
      /* eslint-disable no-use-before-define */
      if (renderMethod === proxiedRender) {
        throw new Error('React-Hot-Loader: you are trying to render Component without .render method');
      }
      /* eslint-enable */
      result = renderMethod.apply(this,
      // eslint-disable-next-line prefer-rest-params
      arguments);
    }

    return renderOptions.componentDidRender.call(this, result);
  }

  function hotComponentUpdate() {
    renderOptions.componentWillRender(this);
    proxiedUpdate.call(this);
  }

  function proxiedRender() {
    renderOptions.componentWillRender(this);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return hotComponentRender.call.apply(hotComponentRender, [this].concat(args));
  }

  var defineProxyMethods = function defineProxyMethods(Proxy) {
    var Base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    defineClassMembers(Proxy, _extends({}, fakeBasePrototype(Base), proxyConfig.pureRender ? {} : { render: proxiedRender }, {
      hotComponentRender: hotComponentRender,
      hotComponentUpdate: hotComponentUpdate,
      componentDidMount: componentDidMount,
      componentDidUpdate: componentDidUpdate,
      componentWillUnmount: componentWillUnmount
    }));
  };

  var _ProxyFacade = void 0;
  var ProxyComponent = null;
  var proxy = void 0;

  if (!isFunctionalComponent) {
    // Component
    ProxyComponent = proxyClassCreator(InitialComponent, postConstructionAction);

    defineProxyMethods(ProxyComponent, InitialComponent.prototype);

    knownClassComponents.push(ProxyComponent);

    _ProxyFacade = ProxyComponent;
  } else if (!proxyConfig.allowSFC) {
    proxyConfig.pureRender = false;
    // SFC Converted to component. Does not support returning precreated instances from render.
    ProxyComponent = proxyClassCreator(React.Component, postConstructionAction);

    defineProxyMethods(ProxyComponent);
    _ProxyFacade = ProxyComponent;
  } else {
    // SFC

    // This function only gets called for the initial mount. The actual
    // rendered component instance will be the return value.

    // eslint-disable-next-line func-names
    _ProxyFacade = function ProxyFacade(props, context) {
      /*
         ! THIS IS NOT YOUR COMPONENT !
        !  THIS IS REACT-HOT-LOADER  !
         And you are probably looking for a function component of yours
        It's hidden, but there is a way to fix this - just reconfigure your application a bit
        see https://github.com/gaearon/react-hot-loader/issues/1311
        */

      var result = CurrentComponent(props, context);

      // This is a Relay-style container constructor. We can't do the prototype-
      // style wrapping for this as we do elsewhere, so just we just pass it
      // through as-is.
      if (isReactClassInstance(result)) {
        ProxyComponent = null;

        // Relay lazily sets statics like getDerivedStateFromProps on initial
        // render in lazy construction, so we need to do the same here.
        transferStaticProps(_ProxyFacade, savedDescriptors, null, CurrentComponent);

        return result;
      }

      // simple SFC, could continue to be SFC
      if (proxyConfig.pureSFC) {
        if (!CurrentComponent.contextTypes) {
          if (!_ProxyFacade.isStatelessFunctionalProxy) {
            setSFPFlag(_ProxyFacade, true);
          }

          return renderOptions.componentDidRender(result);
        }
      }
      setSFPFlag(_ProxyFacade, false);
      proxyConfig.pureRender = false;

      // Otherwise, it's a normal functional component. Build the real proxy
      // and use it going forward.
      ProxyComponent = proxyClassCreator(React.Component, postConstructionAction);

      defineProxyMethods(ProxyComponent);

      var determinateResult = new ProxyComponent(props, context);

      // Cache the initial render result so we don't call the component function
      // a second time for the initial render.
      determinateResult[CACHED_RESULT] = result;
      return determinateResult;
    };
  }

  function get$$1() {
    return _ProxyFacade;
  }

  function getCurrent() {
    return CurrentComponent;
  }

  safeDefineProperty(_ProxyFacade, UNWRAP_PROXY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  safeDefineProperty(_ProxyFacade, PROXY_KEY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: proxyKey
  });

  safeDefineProperty(_ProxyFacade, 'toString', {
    configurable: true,
    writable: false,
    enumerable: false,
    value: function toString() {
      return String(CurrentComponent);
    }
  });

  function update(NextComponent) {
    if (typeof NextComponent !== 'function') {
      throw new Error('Expected a constructor.');
    }

    if (NextComponent === CurrentComponent) {
      return false;
    }

    // Prevent proxy cycles
    var existingProxy = proxies.get(NextComponent);
    if (existingProxy) {
      return false;
    }

    isFunctionalComponent = !isReactClass(NextComponent);

    proxies.set(NextComponent, proxy);

    proxyGeneration++;

    // Save the next constructor so we call it
    var PreviousComponent = CurrentComponent;
    CurrentComponent = NextComponent;

    // Try to infer displayName
    var displayName = getComponentDisplayName(CurrentComponent);

    safeDefineProperty(_ProxyFacade, 'displayName', {
      configurable: true,
      writable: false,
      enumerable: true,
      value: displayName
    });

    if (ProxyComponent) {
      safeDefineProperty(ProxyComponent, 'name', {
        value: displayName
      });
    }

    savedDescriptors = transferStaticProps(_ProxyFacade, savedDescriptors, PreviousComponent, NextComponent);

    if (isFunctionalComponent || !ProxyComponent) ; else {
      var classHotReplacement = function classHotReplacement() {
        checkLifeCycleMethods(ProxyComponent, NextComponent);
        if (proxyGeneration > 1) {
          getElementCloseHook(ProxyComponent);
          filteredPrototypeMethods(ProxyComponent.prototype).forEach(function (methodName) {
            if (!has.call(NextComponent.prototype, methodName)) {
              delete ProxyComponent.prototype[methodName];
            }
          });
        }
        Object.setPrototypeOf(ProxyComponent.prototype, NextComponent.prototype);
        defineProxyMethods(ProxyComponent, NextComponent.prototype);
        if (proxyGeneration > 1) {
          injectedMembers = mergeComponents(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers);
          getElementComparisonHook(ProxyComponent);
        }
      };

      // Was constructed once
      if (instancesCount > 0) {
        classHotReplacement();
      } else {
        classUpdatePostponed = classHotReplacement;
      }
    }

    return true;
  }

  update(InitialComponent);

  var dereference = function dereference() {
    proxies.delete(InitialComponent);
    proxies.delete(_ProxyFacade);
    proxies.delete(CurrentComponent);
  };

  proxy = { get: get$$1, update: update, dereference: dereference, getCurrent: function getCurrent() {
      return CurrentComponent;
    } };

  proxies.set(InitialComponent, proxy);
  proxies.set(_ProxyFacade, proxy);

  safeDefineProperty(proxy, UNWRAP_PROXY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  return proxy;
}

// this counter tracks `register` invocations.
// works good, but code splitting is breaking it
var generation = 1;

// these counters are aimed to mitigate the "first render"
var hotComparisonCounter = 0;
var hotComparisonRuns = 0;
var hotReplacementGeneration = 0;

var nullFunction = function nullFunction() {
  return {};
};

// these callbacks would be called on component update
var onHotComparisonOpen = nullFunction;
var onHotComparisonElement = nullFunction;
var onHotComparisonClose = nullFunction;

// inversion of control
var setComparisonHooks = function setComparisonHooks(open, element, close) {
  onHotComparisonOpen = open;
  onHotComparisonElement = element;
  onHotComparisonClose = close;
};

var getElementComparisonHook = function getElementComparisonHook(component) {
  return onHotComparisonElement(component);
};
var getElementCloseHook = function getElementCloseHook(component) {
  return onHotComparisonClose(component);
};

var hotComparisonOpen = function hotComparisonOpen() {
  return hotComparisonCounter > 0 && hotComparisonRuns > 0 && hotReplacementGeneration > 0;
};

var openGeneration = function openGeneration() {
  return forEachKnownClass(onHotComparisonElement);
};

var closeGeneration = function closeGeneration() {
  return forEachKnownClass(onHotComparisonClose);
};

var incrementHot = function incrementHot() {
  if (!hotComparisonCounter) {
    openGeneration();
    onHotComparisonOpen();
  }
  hotComparisonCounter++;
};
var decrementHot = function decrementHot() {
  hotComparisonCounter--;
  if (!hotComparisonCounter) {
    closeGeneration();
    hotComparisonRuns++;
  }
};

// TODO: shall it be called from incrementHotGeneration?
var enterHotUpdate = function enterHotUpdate() {
  Promise.resolve(incrementHot()).then(function () {
    return setTimeout(decrementHot, 0);
  });
};

// TODO: deprecate?
var increment = function increment() {
  enterHotUpdate();
  return generation++;
};
var get$1 = function get() {
  return generation;
};

// These counters tracks HMR generations, and probably should be used instead of the old one
var incrementHotGeneration = function incrementHotGeneration() {
  return hotReplacementGeneration++;
};
var getHotGeneration = function getHotGeneration() {
  return hotReplacementGeneration;
};

// some `empty` names, React can autoset display name to...
var UNDEFINED_NAMES = {
  Unknown: true,
  Component: true
};

var areNamesEqual = function areNamesEqual(a, b) {
  return a === b || UNDEFINED_NAMES[a] && UNDEFINED_NAMES[b];
};

var isFunctional = function isFunctional(fn) {
  return typeof fn === 'function';
};
var getTypeOf = function getTypeOf(type) {
  if (isReactClass(type)) return 'ReactComponent';
  if (isFunctional(type)) return 'StatelessFunctional';
  return 'Fragment'; // ?
};

function clearStringFast(str) {
  return str.length < 12 ? str : (' ' + str).slice(1);
}

var haveTextSimilarity = function haveTextSimilarity(a, b) {
  return (
    // equal or slight changed
    a === b || levenshtein.get(clearStringFast(a), clearStringFast(b)) < a.length * 0.2
  );
};

var getBaseProto = function getBaseProto(source) {
  return source.prototype.hotComponentRender ? Object.getPrototypeOf(source.prototype) : source.prototype;
};

var equalClasses = function equalClasses(a, b) {
  var prototypeA = getBaseProto(a);
  var prototypeB = getBaseProto(b);

  var hits = 0;
  var misses = 0;
  var comparisons = 0;
  Object.getOwnPropertyNames(prototypeA).forEach(function (key) {
    var descriptorA = Object.getOwnPropertyDescriptor(prototypeA, key);
    var valueA = descriptorA && (descriptorA.value || descriptorA.get || descriptorA.set);
    var descriptorB = Object.getOwnPropertyDescriptor(prototypeB, key);
    var valueB = descriptorB && (descriptorB.value || descriptorB.get || descriptorB.set);

    if (typeof valueA === 'function' && key !== 'constructor') {
      comparisons++;
      if (haveTextSimilarity(String(valueA), String(valueB))) {
        hits++;
      } else {
        misses++;
        if (key === 'render') {
          misses++;
        }
      }
    }
  });
  // allow to add or remove one function
  return hits > 0 && misses <= 1 || comparisons === 0;
};

var areSwappable = function areSwappable(a, b) {
  // both are registered components and have the same name
  if (getIdByType(b) && getIdByType(a) === getIdByType(b)) {
    return true;
  }
  if (getTypeOf(a) !== getTypeOf(b)) {
    return false;
  }
  if (isReactClass(a)) {
    return areNamesEqual(getComponentDisplayName(a), getComponentDisplayName(b)) && equalClasses(a, b);
  }

  if (isFunctional(a)) {
    var nameA = getComponentDisplayName(a);
    if (!areNamesEqual(nameA, getComponentDisplayName(b))) {
      return false;
    }
    return nameA !== 'Component' || haveTextSimilarity(String(a), String(b));
  }
  return false;
};

function merge() {
  var acc = {};

  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }

  for (var _iterator = sources, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var source = _ref;

    if (source instanceof Array) {
      if (!(acc instanceof Array)) {
        acc = [];
      }
      acc = [].concat(acc, source);
    } else if (source instanceof Object) {
      for (var _iterator2 = Object.keys(source), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _babelHelpers$extends;

        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var key = _ref2;

        var value = source[key];
        if (value instanceof Object && key in acc) {
          value = merge(acc[key], value);
        }
        acc = _extends({}, acc, (_babelHelpers$extends = {}, _babelHelpers$extends[key] = value, _babelHelpers$extends));
      }
    }
  }
  return acc;
}

var signatures = void 0;
var proxiesByID = void 0;
var blackListedProxies = void 0;
var registeredComponents = void 0;
var idsByType = void 0;

var elementCount = 0;
var renderOptions = {};

var componentOptions = void 0;

var generateTypeId = function generateTypeId() {
  return 'auto-' + elementCount++;
};

var getIdByType = function getIdByType(type) {
  return idsByType.get(type);
};
var isProxyType = function isProxyType(type) {
  return type[PROXY_KEY];
};

var getProxyById = function getProxyById(id) {
  return proxiesByID[id];
};
var getProxyByType = function getProxyByType(type) {
  return getProxyById(getIdByType(type));
};

var registerComponent = function registerComponent(type) {
  return registeredComponents.set(type, 1);
};
var isRegisteredComponent = function isRegisteredComponent(type) {
  return registeredComponents.has(type);
};

var setStandInOptions = function setStandInOptions(options) {
  renderOptions = options;
};

var updateFunctionProxyById = function updateFunctionProxyById(id, type, updater) {
  // Remember the ID.
  idsByType.set(type, id);
  var proxy = proxiesByID[id];
  if (!proxy) {
    proxiesByID[id] = type;
  }
  updater(proxiesByID[id], type);
  // proxiesByID[id] = type; // keep the first ref

  return proxiesByID[id];
};

var updateProxyById = function updateProxyById(id, type) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!id) {
    return null;
  }
  // Remember the ID.
  idsByType.set(type, id);

  if (!proxiesByID[id]) {
    proxiesByID[id] = createClassProxy(type, id, merge({}, renderOptions, { proxy: componentOptions.get(type) || {} }, options));
  } else if (proxiesByID[id].update(type)) {
    // proxy could be registered again only in case of HMR
    incrementHotGeneration();
  }
  return proxiesByID[id];
};

var createProxyForType = function createProxyForType(type, options) {
  return getProxyByType(type) || updateProxyById(generateTypeId(), type, options);
};

var isColdType = function isColdType(type) {
  return blackListedProxies.has(type);
};

var isTypeBlacklisted = function isTypeBlacklisted(type) {
  return isColdType(type) || isCompositeComponent(type) && (configuration.ignoreSFC && !isReactClass(type) || configuration.ignoreComponents && isReactClass(type));
};
var blacklistByType = function blacklistByType(type) {
  return blackListedProxies.set(type, true);
};

var setComponentOptions = function setComponentOptions(component, options) {
  return componentOptions.set(component, options);
};

var addSignature = function addSignature(type, signature) {
  return signatures.set(type, signature);
};
var getSignature = function getSignature(type) {
  return signatures.get(type);
};

var resetProxies = function resetProxies() {
  proxiesByID = {};
  idsByType = new WeakMap();
  blackListedProxies = new WeakMap();
  registeredComponents = new WeakMap();
  componentOptions = new WeakMap();
  signatures = new WeakMap();
  resetClassProxies();
};

resetProxies();

var tune = {
  allowSFC: false
};

var preactAdapter = function preactAdapter(instance, resolveType) {
  var oldHandler = instance.options.vnode;

  setConfiguration(tune);

  instance.options.vnode = function (vnode) {
    if (vnode.type) {
      vnode.type = resolveType(vnode.type);
    } else if (vnode.nodeName) {
      vnode.nodeName = resolveType(vnode.nodeName);
    }
    if (oldHandler) {
      oldHandler(vnode);
    }
  };
};

/* global document */

var lastError = [];

var overlayStyle = {
  position: 'fixed',
  left: 0,
  top: 0,
  right: 0,

  backgroundColor: 'rgba(255,200,200,0.9)',

  color: '#000',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  fontSize: '12px',
  margin: 0,
  padding: '16px',
  maxHeight: '50%',
  overflow: 'auto',
  zIndex: 10000
};

var inlineErrorStyle = {
  backgroundColor: '#FEE'
};

var liCounter = {
  position: 'absolute',
  left: '10px'
};

var listStyle = {};

var EmptyErrorPlaceholder = function EmptyErrorPlaceholder(_ref) {
  var component = _ref.component;
  return React__default.createElement(
    'span',
    { style: inlineErrorStyle, role: 'img', 'aria-label': 'Rect-Hot-Loader Error' },
    '\u269B\uFE0F\uD83D\uDD25\uD83E\uDD15 (',
    component ? getComponentDisplayName(component.constructor || component) : 'Unknown location',
    ')',
    component && component.retryHotLoaderError && React__default.createElement(
      'button',
      { onClick: function onClick() {
          return component.retryHotLoaderError();
        }, title: 'Retry' },
      '\u27F3'
    )
  );
};

var errorHeader = function errorHeader(component, componentStack) {
  if (component || componentStack) {
    return React__default.createElement(
      'span',
      null,
      '(',
      component ? getComponentDisplayName(component.constructor || component) : 'Unknown location',
      component && ', ',
      componentStack && componentStack.split('\n').filter(Boolean)[0],
      ')'
    );
  }
  return null;
};

var mapError = function mapError(_ref2) {
  var error = _ref2.error,
      errorInfo = _ref2.errorInfo,
      component = _ref2.component;

  if (!error) {
    error = { message: 'undefined error' };
  }

  return React__default.createElement(
    React__default.Fragment,
    null,
    React__default.createElement(
      'p',
      { style: { color: 'red' } },
      errorHeader(component, errorInfo && errorInfo.componentStack),
      ' ',
      error.toString ? error.toString() : error && error.message || 'undefined error'
    ),
    errorInfo && errorInfo.componentStack ? React__default.createElement(
      'div',
      null,
      React__default.createElement(
        'div',
        null,
        'Stack trace:'
      ),
      React__default.createElement(
        'ul',
        { style: { color: 'red', marginTop: '10px' } },
        error.stack.split('\n').slice(1, 2).map(function (line, i) {
          return React__default.createElement(
            'li',
            { key: String(i) },
            line
          );
        }),
        React__default.createElement('hr', null),
        errorInfo.componentStack.split('\n').filter(Boolean).map(function (line, i) {
          return React__default.createElement(
            'li',
            { key: String(i) },
            line
          );
        })
      )
    ) : error.stack && React__default.createElement(
      'div',
      null,
      React__default.createElement(
        'div',
        null,
        'Stack trace:'
      ),
      React__default.createElement(
        'ul',
        { style: { color: 'red', marginTop: '10px' } },
        error.stack.split('\n').map(function (line, i) {
          return React__default.createElement(
            'li',
            { key: String(i) },
            line
          );
        })
      )
    )
  );
};

var ErrorOverlay = function (_React$Component) {
  inherits(ErrorOverlay, _React$Component);

  function ErrorOverlay() {
    var _temp, _this, _ret;

    classCallCheck(this, ErrorOverlay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      visible: true
    }, _this.toggle = function () {
      return _this.setState({ visible: !_this.state.visible });
    }, _this.retry = function () {
      return _this.setState(function () {
        var errors = _this.props.errors;

        enterHotUpdate();
        clearExceptions();
        errors.map(function (_ref3) {
          var component = _ref3.component;
          return component;
        }).filter(Boolean).filter(function (_ref4) {
          var retryHotLoaderError = _ref4.retryHotLoaderError;
          return !!retryHotLoaderError;
        }).forEach(function (component) {
          return component.retryHotLoaderError();
        });

        return {};
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  ErrorOverlay.prototype.render = function render() {
    var errors = this.props.errors;

    if (!errors.length) {
      return null;
    }
    var visible = this.state.visible;

    return React__default.createElement(
      'div',
      { style: overlayStyle },
      React__default.createElement(
        'h2',
        { style: { margin: 0 } },
        '\u269B\uFE0F\uD83D\uDD25\uD83D\uDE2D: hot update was not successful ',
        React__default.createElement(
          'button',
          { onClick: this.toggle },
          visible ? 'collapse' : 'expand'
        ),
        React__default.createElement(
          'button',
          { onClick: this.retry },
          'Retry'
        )
      ),
      visible && React__default.createElement(
        'ul',
        { style: listStyle },
        errors.map(function (err, i) {
          return React__default.createElement(
            'li',
            { key: i },
            React__default.createElement(
              'span',
              { style: liCounter },
              '(',
              i + 1,
              '/',
              errors.length,
              ')'
            ),
            mapError(err)
          );
        })
      )
    );
  };

  return ErrorOverlay;
}(React__default.Component);

var initErrorOverlay = function initErrorOverlay() {
  if (typeof document === 'undefined' || !document.body) {
    return;
  }
  var div = document.querySelector('.react-hot-loader-error-overlay');
  if (!div) {
    div = document.createElement('div');
    div.className = 'react-hot-loader-error-overlay';
    document.body.appendChild(div);
  }
  if (lastError.length) {
    var Overlay = configuration.ErrorOverlay || ErrorOverlay;
    ReactDOM.render(React__default.createElement(Overlay, { errors: lastError }), div);
  } else {
    div.parentNode.removeChild(div);
  }
};

function clearExceptions() {
  if (lastError.length) {
    lastError = [];
    initErrorOverlay();
  }
}

function logException(error, errorInfo, component) {
  // do not suppress error

  /* eslint-disable no-console */
  console.error(error);
  /* eslint-enable */

  lastError.push({ error: error, errorInfo: errorInfo, component: component });
  initErrorOverlay();
}

/* eslint-disable no-underscore-dangle */

var hotRenderWithHooks = ReactDOM.hotRenderWithHooks || function (fiber, render) {
  return render();
};

function pushStack(stack, node) {
  stack.type = node.type;
  stack.elementType = node.elementType || node.type;
  stack.children = [];
  stack.instance = typeof node.type === 'function' ? node.stateNode : stack;
  stack.fiber = node;

  if (!stack.instance) {
    stack.instance = {
      SFC_fake: stack.type,
      props: {},
      render: function render() {
        return hotRenderWithHooks(node, function () {
          return stack.type(stack.instance.props);
        });
      }
    };
  }
}

function hydrateFiberStack(node, stack) {
  pushStack(stack, node);
  if (node.child) {
    var child = node.child;

    do {
      var childStack = {};
      hydrateFiberStack(child, childStack);
      stack.children.push(childStack);
      child = child.sibling;
    } while (child);
  }
}

/* eslint-disable no-underscore-dangle */

function pushState(stack, type, instance) {
  stack.type = type;
  stack.elementType = type;
  stack.children = [];
  stack.instance = instance || stack;

  if (typeof type === 'function' && type.isStatelessFunctionalProxy) {
    // In React 15 SFC is wrapped by component. We have to detect our proxies and change the way it works
    stack.instance = {
      SFC_fake: type,
      props: {},
      render: function render() {
        return type(stack.instance.props);
      }
    };
  }
}

function hydrateLegacyStack(node, stack) {
  if (node._currentElement) {
    pushState(stack, node._currentElement.type, node._instance || stack);
  }

  if (node._renderedComponent) {
    var childStack = {};
    hydrateLegacyStack(node._renderedComponent, childStack);
    stack.children.push(childStack);
  } else if (node._renderedChildren) {
    Object.keys(node._renderedChildren).forEach(function (key) {
      var childStack = {};
      hydrateLegacyStack(node._renderedChildren[key], childStack);
      stack.children.push(childStack);
    });
  }
}

var shouldNotPatchComponent = function shouldNotPatchComponent(type) {
  return isTypeBlacklisted(type);
};

function resolveUtility(type) {
  // all "utility" types are resolved to their __initial__ shapes
  // that enables to never change reference to them, and gives the ability to maintain React Tree on HMR

  // all operations could be skipped with react-hot-dom enabled

  if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object') {
    if (configuration.integratedComparator) {
      return type;
    }
    var element = { type: type };
    if (isLazyType(element) || isMemoType(element) || isForwardType(element) || isContextType(element)) {
      return getProxyByType(type) || type;
    }
  }

  return undefined;
}

function resolveComponent(type) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var existingProxy = getProxyByType(type);

  // cold API
  if (shouldNotPatchComponent(type)) {
    return existingProxy ? existingProxy.getCurrent() : type;
  }

  if (!existingProxy && configuration.onComponentCreate) {
    configuration.onComponentCreate(type, getComponentDisplayName(type));
    if (shouldNotPatchComponent(type)) {
      return type;
    }
  }

  var proxy = internalConfiguration.disableProxyCreation ? existingProxy : createProxyForType(type, options);

  return proxy ? proxy.get() : undefined;
}

function resolveProxy(type) {
  if (isProxyType(type)) {
    return type;
  }

  return undefined;
}

function resolveNotComponent(type) {
  if (!isCompositeComponent(type)) {
    return type;
  }

  return undefined;
}

var getLatestTypeVersion = function getLatestTypeVersion(type) {
  var existingProxy = getProxyByType(type);
  return existingProxy && existingProxy.getCurrent && existingProxy.getCurrent();
};

var resolveSimpleType = function resolveSimpleType(type) {
  if (!type) {
    return type;
  }

  var simpleResult = resolveProxy(type) || resolveUtility(type) || resolveNotComponent(type);
  if (simpleResult) {
    return simpleResult;
  }

  var lastType = getLatestTypeVersion(type);

  // only lazy loaded components any now failing into this branch

  // if (lastType && lastType !== type) {
  //   console.warn('RHL: used type', type, 'is obsolete. Something is wrong with HMR.');
  // }

  return lastType || type;
};

var resolveType = function resolveType(type) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!type) {
    return type;
  }

  return resolveProxy(type) || resolveUtility(type) || resolveNotComponent(type) || resolveComponent(type, options) || type;
};

/* eslint-disable no-underscore-dangle */

function getReactStack(instance) {
  var rootNode = getInternalInstance(instance);
  var stack = {};
  if (rootNode) {
    // React stack
    var isFiber = typeof rootNode.tag === 'number';
    if (isFiber) {
      hydrateFiberStack(rootNode, stack);
    } else {
      hydrateLegacyStack(rootNode, stack);
    }
  }

  return stack;
}

var markUpdate = function markUpdate(_ref) {
  var fiber = _ref.fiber;

  // do not update what we should not
  if (!fiber || typeof fiber.type === 'string') {
    return;
  }

  var mostResentType = resolveType(fiber.type) || fiber.type;
  fiber.type = mostResentType;
  // do not change fiber.elementType to keep old information for the hot-update

  fiber.expirationTime = 1;
  if (fiber.alternate) {
    fiber.alternate.expirationTime = 1;
    fiber.alternate.type = fiber.type;
  }

  if (fiber.memoizedProps && _typeof(fiber.memoizedProps) === 'object') {
    fiber.memoizedProps = _extends({
      cacheBusterProp: true
    }, fiber.memoizedProps);
  }

  if (fiber.stateNode) ;
};

var cleanupReact = function cleanupReact() {
  if (ReactDOM.hotCleanup) {
    ReactDOM.hotCleanup();
  }
};

var deepMarkUpdate = function deepMarkUpdate(stack) {
  markUpdate(stack);
  if (stack.children) {
    stack.children.forEach(deepMarkUpdate);
  }
};

var renderStack = [];

var stackReport = function stackReport() {
  var rev = renderStack.slice().reverse();
  logger.warn('in', rev[0].name, rev);
};

var emptyMap = new Map();
var stackContext = function stackContext() {
  return (renderStack[renderStack.length - 1] || {}).context || emptyMap;
};

var shouldUseRenderMethod = function shouldUseRenderMethod(fn) {
  return fn && (isReactClassInstance(fn) || fn.SFC_fake);
};

var getElementType$1 = function getElementType$$1(child) {
  return child.type[UNWRAP_PROXY] ? child.type[UNWRAP_PROXY]() : child.type;
};

var filterNullArray = function filterNullArray(a) {
  if (!a) return [];
  return a.filter(function (x) {
    return !!x;
  });
};

var unflatten = function unflatten(a) {
  return a.reduce(function (acc, a) {
    if (Array.isArray(a)) {
      acc.push.apply(acc, unflatten(a));
    } else {
      acc.push(a);
    }
    return acc;
  }, []);
};

var isArray = function isArray(fn) {
  return Array.isArray(fn);
};
var asArray = function asArray(a) {
  return isArray(a) ? a : [a];
};

var render = function render(component, stack) {
  if (!component) {
    return [];
  }
  if (component.hotComponentUpdate) {
    component.hotComponentUpdate();
  }
  if (shouldUseRenderMethod(component)) {
    // not calling real render method to prevent call recursion.
    // stateless components does not have hotComponentRender
    return component.hotComponentRender ? component.hotComponentRender() : component.render();
  }
  if (isForwardType(component)) {
    // render forward type in a sandbox
    return hotRenderWithHooks(stack.fiber, function () {
      return component.type.render(component.props, null);
    });
  }
  if (isArray(component)) {
    return component.map(render);
  }
  if (component.children) {
    return component.children;
  }

  return [];
};

var NO_CHILDREN = { children: [] };
var mapChildren = function mapChildren(children, instances) {
  return {
    children: children.filter(function (c) {
      return c;
    }).map(function (child, index) {
      if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object' || child.isMerged) {
        return child;
      }
      var instanceLine = instances[index] || {};
      var oldChildren = asArray(instanceLine.children || []);

      if (Array.isArray(child)) {
        return _extends({
          type: null
        }, mapChildren(child, oldChildren));
      }

      var newChildren = asArray(child.props && child.props.children || child.children || []);
      var nextChildren = child.type !== 'function' && oldChildren.length && mapChildren(newChildren, oldChildren);

      return _extends({
        nextProps: child.props,
        isMerged: true
      }, instanceLine, nextChildren || {}, {
        type: child.type
      });
    })
  };
};

var mergeInject = function mergeInject(a, b, instance) {
  if (a && !Array.isArray(a)) {
    return mergeInject([a], b);
  }
  if (b && !Array.isArray(b)) {
    return mergeInject(a, [b]);
  }

  if (!a || !b) {
    return NO_CHILDREN;
  }
  if (a.length === b.length) {
    return mapChildren(a, b);
  }

  // in some cases (no confidence here) B could contain A except null children
  // in some cases - could not.
  // this depends on React version and the way you build component.

  var nonNullA = filterNullArray(a);
  if (nonNullA.length === b.length) {
    return mapChildren(nonNullA, b);
  }

  var flatA = unflatten(nonNullA);
  var flatB = unflatten(b);
  if (flatA.length === flatB.length) {
    return mapChildren(flatA, flatB);
  }
  if (flatB.length === 0 && flatA.length === 1 && _typeof(flatA[0]) !== 'object') ; else if (!configuration.IS_REACT_MERGE_ENABLED) {
    logger.warn('React-hot-loader: unable to merge ', a, 'and children of ', instance);
    stackReport();
  }
  return NO_CHILDREN;
};

var transformFlowNode = function transformFlowNode(flow) {
  return flow.reduce(function (acc, node) {
    if (node && isFragmentNode(node)) {
      if (node.props && node.props.children) {
        return [].concat(acc, filterNullArray(asArray(node.props.children)));
      }
      if (node.children) {
        return [].concat(acc, filterNullArray(asArray(node.children)));
      }
    }
    return [].concat(acc, [node]);
  }, []);
};

var scheduledUpdates = [];
var scheduledUpdate = 0;

var flushScheduledUpdates = function flushScheduledUpdates() {
  var instances = scheduledUpdates;
  scheduledUpdates = [];
  scheduledUpdate = 0;
  instances.forEach(function (instance) {
    return instance[PROXY_IS_MOUNTED] && updateInstance(instance);
  });
};

var unscheduleUpdate = function unscheduleUpdate(instance) {
  scheduledUpdates = scheduledUpdates.filter(function (inst) {
    return inst !== instance;
  });
};

var scheduleInstanceUpdate = function scheduleInstanceUpdate(instance) {
  scheduledUpdates.push(instance);
  if (!scheduledUpdate) {
    scheduledUpdate = setTimeout(flushScheduledUpdates, 4);
  }
};

var hotReplacementRender = function hotReplacementRender(instance, stack) {
  if (isReactClassInstance(instance)) {
    var type = getElementType$1(stack);

    renderStack.push({
      name: getComponentDisplayName(type),
      type: type,
      props: stack.instance.props,
      context: stackContext()
    });
  }

  try {
    var flow = transformFlowNode(filterNullArray(asArray(render(instance, stack))));

    var children = stack.children;


    flow.forEach(function (child, index) {
      var childType = child.type;
      var stackChild = children[index];
      var next = function next(instance) {
        // copy over props as long new component may be hidden inside them
        // child does not have all props, as long some of them can be calculated on componentMount.
        var realProps = instance.props;
        var nextProps = _extends({}, realProps, child.nextProps || {}, child.props || {});

        if (isReactClassInstance(instance) && instance.componentWillUpdate) {
          // Force-refresh component (bypass redux renderedComponent)
          instance.componentWillUpdate(_extends({}, realProps), instance.state);
        }
        instance.props = nextProps;
        hotReplacementRender(instance, stackChild);
        instance.props = realProps;
      };

      // text node
      if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object' || !stackChild || !stackChild.instance) {
        if (stackChild && stackChild.children && stackChild.children.length) {
          logger.error('React-hot-loader: reconciliation failed', 'could not dive into [', child, '] while some elements are still present in the tree.');
          stackReport();
        }
        return;
      }

      // comparing rendered type to fiber.ElementType
      if ((typeof childType === 'undefined' ? 'undefined' : _typeof(childType)) !== _typeof(stackChild.elementType)) {
        // Portals could generate undefined !== null
        if (childType && stackChild.type) {
          logger.warn('React-hot-loader: got ', childType, 'instead of', stackChild.type);
          stackReport();
        }
        return;
      }

      if (isMemoType(child) || isLazyType(child)) {
        // force update memo children
        if (stackChild.children && stackChild.children[0]) {
          scheduleInstanceUpdate(stackChild.children[0].instance);
        }
        childType = childType.type || childType;
      }

      if (isForwardType(child)) {
        next(stackChild.instance);
      } else if (isContextConsumer(child)) {
        try {
          var contextValue = stackContext().get(getContextProvider(childType));
          next({
            children: (child.props ? child.props.children : child.children[0])(contextValue !== undefined ? contextValue : childType[CONTEXT_CURRENT_VALUE])
          });
        } catch (e) {
          // do nothing, yet
        }
      } else if (typeof childType !== 'function') {
        // React
        var childName = childType ? getComponentDisplayName(childType) : 'empty';
        var extraContext = stackContext();

        if (isContextProvider(child)) {
          extraContext = new Map(extraContext);
          extraContext.set(getContextProvider(childType), _extends({}, child.nextProps || {}, child.props || {}).value);
          childName = 'ContextProvider';
        }

        renderStack.push({
          name: childName,
          type: childType,
          props: stack.instance.props,
          context: extraContext
        });

        next(
        // move types from render to the instances of hydrated tree
        mergeInject(transformFlowNode(asArray(child.props ? child.props.children : child.children)), stackChild.instance.children, stackChild.instance));
        renderStack.pop();
      } else {
        if (childType === stackChild.type) {
          next(stackChild.instance);
        } else {
          // unwrap proxy
          var _childType = getElementType$1(child);

          if (isMemoType(child)) {
            _childType = _childType.type || _childType;
          }

          if (!stackChild.type[PROXY_KEY]) {
            if (!configuration.IS_REACT_MERGE_ENABLED) {
              if (isTypeBlacklisted(stackChild.type)) {
                logger.warn('React-hot-loader: cold element got updated ', stackChild.type);
              }
            }
          }

          if (isRegisteredComponent(_childType) || isRegisteredComponent(stackChild.type)) {
            // one of elements are registered via babel plugin, and should not be handled by hot swap
            if (resolveType(_childType) === resolveType(stackChild.type)) {
              next(stackChild.instance);
            }
          } else if (areSwappable(_childType, stackChild.type)) {
            // they are both registered, or have equal code/displayname/signature

            // update proxy using internal PROXY_KEY
            updateProxyById(stackChild.type[PROXY_KEY] || getIdByType(stackChild.type), _childType);

            next(stackChild.instance);
          } else {
            logger.warn('React-hot-loader: a ' + getComponentDisplayName(_childType) + ' was found where a ' + getComponentDisplayName(stackChild) + ' was expected.\n          ' + _childType);
            stackReport();
          }
        }

        scheduleInstanceUpdate(stackChild.instance);
      }
    });
  } catch (e) {
    if (e.then) ; else {
      logger.warn('React-hot-loader: run time error during reconciliation', e);
    }
  }

  if (isReactClassInstance(instance)) {
    renderStack.pop();
  }
};

var hotReplacementRender$1 = (function (instance, stack) {
  if (configuration.disableHotRenderer) {
    return;
  }
  try {
    // disable reconciler to prevent upcoming components from proxying.
    internalConfiguration.disableProxyCreation = true;
    renderStack = [];
    hotReplacementRender(instance, stack);
  } catch (e) {
    logger.warn('React-hot-loader: reconcilation failed due to error', e);
  } finally {
    internalConfiguration.disableProxyCreation = false;
  }
});

var reconcileHotReplacement = function reconcileHotReplacement(ReactInstance) {
  var stack = getReactStack(ReactInstance);
  hotReplacementRender$1(ReactInstance, stack);
  cleanupReact();
  deepMarkUpdate(stack);
};

var renderReconciler = function renderReconciler(target, force) {
  // we are not inside parent reconcilation
  var currentGeneration = get$1();
  var componentGeneration = target[RENDERED_GENERATION];

  target[RENDERED_GENERATION] = currentGeneration;

  if (!internalConfiguration.disableProxyCreation) {
    if ((componentGeneration || force) && componentGeneration !== currentGeneration) {
      enterHotUpdate();
      reconcileHotReplacement(target);
      return true;
    }
  }
  return false;
};

function asyncReconciledRender(target) {
  renderReconciler(target, false);
}

function proxyWrapper(element) {
  // post wrap on post render
  if (!internalConfiguration.disableProxyCreation) {
    unscheduleUpdate(this);
  }

  if (!element) {
    return element;
  }
  if (Array.isArray(element)) {
    return element.map(proxyWrapper);
  }
  if (typeof element.type === 'function') {
    var proxy = getProxyByType(element.type);
    if (proxy) {
      return _extends({}, element, {
        type: proxy.get()
      });
    }
  }
  return element;
}

var ERROR_STATE = 'react_hot_loader_catched_error';
var ERROR_STATE_PROTO = 'react_hot_loader_catched_error-prototype';
var OLD_RENDER = 'react_hot_loader_original_render';

function componentDidCatch(error, errorInfo) {
  this[ERROR_STATE] = {
    location: 'boundary',
    error: error,
    errorInfo: errorInfo,
    generation: get$1()
  };
  Object.getPrototypeOf(this)[ERROR_STATE_PROTO] = this[ERROR_STATE];
  if (!configuration.errorReporter) {
    logException(error, errorInfo, this);
  }
  this.forceUpdate();
}

function componentRender() {
  var _ref = this[ERROR_STATE] || {},
      error = _ref.error,
      errorInfo = _ref.errorInfo,
      generation = _ref.generation;

  if (error && generation === get$1()) {
    return React__default.createElement(configuration.errorReporter || EmptyErrorPlaceholder, {
      error: error,
      errorInfo: errorInfo,
      component: this
    });
  }

  if (this.hotComponentUpdate) {
    this.hotComponentUpdate();
  }
  try {
    var _OLD_RENDER$render;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_OLD_RENDER$render = this[OLD_RENDER].render).call.apply(_OLD_RENDER$render, [this].concat(args));
  } catch (renderError) {
    this[ERROR_STATE] = {
      location: 'render',
      error: renderError,
      generation: get$1()
    };
    if (!configuration.errorReporter) {
      logException(renderError, undefined, this);
    }
    return componentRender.call(this);
  }
}

function retryHotLoaderError() {
  delete this[ERROR_STATE];
  this.forceUpdate();
}

setComparisonHooks(function () {
  return {};
}, function (component) {
  if (!hotComparisonOpen()) {
    return;
  }
  var prototype = component.prototype;

  if (!prototype[OLD_RENDER]) {
    var renderDescriptior = Object.getOwnPropertyDescriptor(prototype, 'render');
    prototype[OLD_RENDER] = {
      descriptor: renderDescriptior ? renderDescriptior.value : undefined,
      render: prototype.render
    };
    prototype.componentDidCatch = componentDidCatch;
    prototype.retryHotLoaderError = retryHotLoaderError;

    prototype.render = componentRender;
  }
  delete prototype[ERROR_STATE];
}, function (_ref2) {
  var prototype = _ref2.prototype;

  if (prototype[OLD_RENDER]) {
    var _ref3 = prototype[ERROR_STATE_PROTO] || {},
        generation = _ref3.generation;

    if (generation === get$1()) ; else {
      delete prototype.componentDidCatch;
      delete prototype.retryHotLoaderError;

      // undo only what we did
      if (prototype.render === componentRender) {
        if (!prototype[OLD_RENDER].descriptor) {
          delete prototype.render;
        } else {
          prototype.render = prototype[OLD_RENDER].descriptor;
        }
      } else {
        console.error('React-Hot-Loader: something unexpectedly mutated Component', prototype);
      }
      delete prototype[ERROR_STATE_PROTO];
      delete prototype[OLD_RENDER];
    }
  }
});

setStandInOptions({
  componentWillRender: asyncReconciledRender,
  componentDidRender: proxyWrapper,
  componentDidUpdate: function componentDidUpdate(component) {
    component[RENDERED_GENERATION] = get$1();
    flushScheduledUpdates();
  }
});

var AppContainer = function (_React$Component) {
  inherits(AppContainer, _React$Component);

  AppContainer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.generation !== get$1()) {
      // Hot reload is happening.
      return {
        error: null,
        generation: get$1()
      };
    }
    return null;
  };

  function AppContainer(props) {
    classCallCheck(this, AppContainer);

    var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

    if (configuration.showReactDomPatchNotification) {
      configuration.showReactDomPatchNotification = false;
      console.warn('React-Hot-Loader: react-🔥-dom patch is not detected. React 16.6+ features may not work.');
    }

    _this.state = {
      error: null,
      errorInfo: null,
      // eslint-disable-next-line react/no-unused-state
      generation: 0
    };
    return _this;
  }

  AppContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(prevProps, prevState) {
    // Don't update the component if the state had an error and still has one.
    // This allows to break an infinite loop of error -> render -> error -> render
    // https://github.com/gaearon/react-hot-loader/issues/696
    if (prevState.error && this.state.error) {
      return false;
    }

    return true;
  };

  AppContainer.prototype.componentDidCatch = function componentDidCatch(error, errorInfo) {
    logger.error(error);

    if (!hotComparisonOpen()) {
      // do not log error outside of HMR cycle

      // trigger update to kick error
      this.setState({});
      throw error;
    }
    var _props$errorReporter = this.props.errorReporter,
        errorReporter = _props$errorReporter === undefined ? configuration.errorReporter : _props$errorReporter;

    if (!errorReporter) {
      logException(error, errorInfo, this);
    }
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  };

  AppContainer.prototype.retryHotLoaderError = function retryHotLoaderError$$1() {
    var _this2 = this;

    this.setState({ error: null }, function () {
      retryHotLoaderError.call(_this2);
    });
  };

  AppContainer.prototype.render = function render() {
    var _state = this.state,
        error = _state.error,
        errorInfo = _state.errorInfo;
    var _props$errorReporter2 = this.props.errorReporter,
        ErrorReporter = _props$errorReporter2 === undefined ? configuration.errorReporter || EmptyErrorPlaceholder : _props$errorReporter2;


    if (error && this.props.errorBoundary) {
      return React__default.createElement(ErrorReporter, { error: error, errorInfo: errorInfo, component: this });
    }

    if (this.hotComponentUpdate) {
      this.hotComponentUpdate();
    } else {
      throw new Error('React-Hot-Loader: AppContainer should be patched');
    }

    return React__default.Children.only(this.props.children);
  };

  return AppContainer;
}(React__default.Component);

AppContainer.reactHotLoadable = false;


AppContainer.propTypes = {
  children: function children(props) {
    if (React__default.Children.count(props.children) !== 1) {
      return new Error('Invalid prop "children" supplied to AppContainer. ' + 'Expected a single React element with your app’s root component, e.g. <App />.');
    }

    return undefined;
  },

  errorReporter: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  errorBoundary: PropTypes.bool
};

AppContainer.defaultProps = {
  errorBoundary: true
};

//  trying first react-lifecycles-compat.polyfill, then trying react-lifecycles-compat, which could be .default
var realPolyfill = defaultPolyfill.polyfill || defaultPolyfill__default;
realPolyfill(AppContainer);

/* eslint-disable no-underscore-dangle */

var lazyConstructor = '_ctor';

var getLazyConstructor = function getLazyConstructor(target) {
  // React 16
  if (target[lazyConstructor]) {
    return target[lazyConstructor];
  }

  // React 17
  if (target._payload) {
    return target._payload._result;
  }
  return null;
};

var setLazyConstructor = function setLazyConstructor(target, replacement) {
  replacement.isPatchedByReactHotLoader = true;

  // React 16
  if (target[lazyConstructor]) {
    target[lazyConstructor] = replacement;
  }
  // React 17
  else if (target._payload) {
      target._payload._hotUpdated = true;
      target._payload._result = replacement;
    } else {
      console.error('could not update lazy component');
    }
};

var patched = function patched(fn) {
  fn.isPatchedByReactHotLoader = true;
  return fn;
};

var patchLazyConstructor = function patchLazyConstructor(target) {
  if (configuration.wrapLazy && !getLazyConstructor(target).isPatchedByReactHotLoader) {
    var ctor = getLazyConstructor(target);
    setLazyConstructor(target, function () {
      return ctor().then(function (m) {
        var C = resolveType(m.default);
        // chunks has been updated - new hot loader process is taking a place
        enterHotUpdate();
        if (!React__default.forwardRef) {
          return {
            default: patched(function (props) {
              return React__default.createElement(
                AppContainer,
                null,
                React__default.createElement(C, props)
              );
            })
          };
        }
        return {
          default: patched(
          // eslint-disable-next-line prefer-arrow-callback
          React__default.forwardRef(function HotLoaderLazyWrapper(props, ref) {
            return React__default.createElement(
              AppContainer,
              null,
              React__default.createElement(C, _extends({}, props, { ref: ref }))
            );
          }))
        };
      });
    });
  }
};

var updateLazy = function updateLazy(target, type) {
  var ctor = getLazyConstructor(type);
  if (getLazyConstructor(target) !== ctor) {
    // just execute `import` and RHL.register will do the job
    ctor();
  }
  patchLazyConstructor(target);
  patchLazyConstructor(type);
};

var updateMemo = function updateMemo(target, _ref) {
  var type = _ref.type;

  target.type = resolveType(type);
};

var updateForward = function updateForward(target, _ref2) {
  var render = _ref2.render;

  target.render = render;
};

var updateContext = function updateContext() {
  // nil
};

var getInnerComponentType = function getInnerComponentType(component) {
  var unwrapper = component[UNWRAP_PROXY];
  return unwrapper ? unwrapper() : component;
};

function haveEqualSignatures(prevType, nextType) {
  try {
    var prevSignature = getSignature(prevType);
    var nextSignature = getSignature(nextType);

    if (prevSignature === undefined && nextSignature === undefined) {
      return true;
    }
    if (prevSignature === undefined || nextSignature === undefined) {
      return false;
    }
    if (prevSignature.key !== nextSignature.key) {
      return false;
    }

    // TODO: we might need to calculate previous signature earlier in practice,
    // such as during the first time a component is resolved. We'll revisit this.
    var prevCustomHooks = prevSignature.getCustomHooks();
    var nextCustomHooks = nextSignature.getCustomHooks();
    if (prevCustomHooks.length !== nextCustomHooks.length) {
      return false;
    }

    for (var i = 0; i < nextCustomHooks.length; i++) {
      if (!haveEqualSignatures(prevCustomHooks[i], nextCustomHooks[i])) {
        return false;
      }
    }
  } catch (e) {
    logger.error('React-Hot-Loader: error occurred while comparing hook signature', e);
    return false;
  }

  return true;
}

var areSignaturesCompatible = function areSignaturesCompatible(a, b) {
  // compare signatures of two components
  // non-equal component have to remount and there is two options to do it
  // - fail the comparison, remounting all tree below
  // - fulfill it, but set `_debugNeedsRemount` on a fiber to drop only local state
  // the second way is not published yet, so going with the first one
  if (!haveEqualSignatures(a, b)) {
    logger.warn('⚛️🔥🎣 Hook order change detected: component', a, 'has been remounted');
    return false;
  }
  return true;
};

var compareRegistered = function compareRegistered(a, b) {
  return getIdByType(a) === getIdByType(b) && getProxyByType(a) === getProxyByType(b) && areSignaturesCompatible(a, b);
};

var areDeepSwappable = function areDeepSwappable(oldType, newType) {
  var type = { type: oldType };

  if (typeof oldType === 'function') {
    return areSwappable(oldType, newType);
  }

  if (isForwardType(type)) {
    return areDeepSwappable(oldType.render, newType.render);
  }

  if (isMemoType(type)) {
    return areDeepSwappable(oldType.type, newType.type);
  }

  // that's not safe
  // if (isLazyType(type)) {
  //   return areDeepSwappable(oldType._ctor, newType._ctor)
  // }

  return false;
};

var compareComponents = function compareComponents(oldType, newType, setNewType, baseType) {
  var defaultResult = oldType === newType;

  if (oldType && !newType || !oldType && newType || (typeof oldType === 'undefined' ? 'undefined' : _typeof(oldType)) !== (typeof newType === 'undefined' ? 'undefined' : _typeof(newType)) || getElementType(oldType) !== getElementType(newType) || 0) {
    return defaultResult;
  }

  if (getIdByType(newType) || getIdByType(oldType)) {
    if (!compareRegistered(oldType, newType)) {
      return false;
    }
    defaultResult = true;
  }

  if (isForwardType({ type: oldType }) && isForwardType({ type: newType })) {
    if (!compareRegistered(oldType.render, newType.render)) {
      return false;
    }
    if (oldType.render === newType.render || areDeepSwappable(oldType, newType)) {
      setNewType(newType);
      return true;
    }
    return defaultResult;
  }

  if (isMemoType({ type: oldType }) && isMemoType({ type: newType })) {
    if (!compareRegistered(oldType.type, newType.type)) {
      return false;
    }
    if (oldType.type === newType.type || areDeepSwappable(oldType, newType)) {
      if (baseType) {
        // memo form different fibers, why?
        if (baseType.$$typeof === newType.$$typeof) {
          setNewType(newType);
        } else {
          setNewType(newType.type);
        }
      } else {
        logger.warn('Please update hot-loader/react-dom');
        if (isReactClass(newType.type)) {
          setNewType(newType);
        } else {
          setNewType(newType.type);
        }
      }

      return true;
    }
    return defaultResult;
  }

  if (isLazyType({ type: oldType })) {
    updateLazy(oldType, newType);
    // no need to update
    // setNewType(newType);
    return defaultResult;
  }

  if (isContextType({ type: oldType })) {
    // update provider
    setNewType(newType);
    return defaultResult;
  }

  if (typeof newType === 'function' && (defaultResult || newType !== oldType && areSignaturesCompatible(newType, oldType) && areSwappable(newType, oldType))) {
    var unwrapFactory = newType[UNWRAP_PROXY];
    var oldProxy = unwrapFactory && getProxyByType(unwrapFactory());
    if (oldProxy) {
      oldProxy.dereference();
      updateProxyById(oldType[PROXY_KEY] || getIdByType(oldType), getInnerComponentType(newType));
    } else {
      setNewType(newType);
    }
    return true;
  }

  return defaultResult;
};

var knownPairs = new WeakMap();
var emptyMap$1 = new WeakMap();

var getKnownPair = function getKnownPair(oldType, newType) {
  var pair = knownPairs.get(oldType) || emptyMap$1;
  return pair.get(newType);
};

var hotComponentCompare = function hotComponentCompare(oldType, preNewType, setNewType, baseType) {
  var hotActive = hotComparisonOpen();
  var newType = configuration.integratedResolver ? resolveType(preNewType) : preNewType;

  // TODO: find out the root cause
  // we could not use "fast result" here - go a full part to update a fiber.
  // const knownType = getKnownPair(oldType, newType);
  // if (knownType !== undefined) {
  //   return knownType;
  // }

  var result = oldType === newType;

  if (hotActive) {
    // pre fail components which could not be merged
    if (!isReloadableComponent(oldType) || !isReloadableComponent(newType) || isColdType(oldType) || isColdType(oldType) || !oldType || !newType || 0) {
      return result;
    }

    result = compareComponents(oldType, newType, setNewType, baseType);
    var pair = knownPairs.get(oldType) || new WeakMap();
    pair.set(newType, result);
    knownPairs.set(oldType, pair);
    return result;
  }

  // result - true if components are equal, or were "equal" at any point in the past
  return result || getKnownPair(oldType, newType) || false;
};

/* eslint-disable no-use-before-define */

var forceSimpleSFC = { proxy: { pureSFC: true } };

var hookWrapper = function hookWrapper(hook) {
  var wrappedHook = function wrappedHook(cb, deps) {
    if (configuration.reloadHooks && deps) {
      var inputs = [].concat(deps);

      // reload hooks which have changed string representation
      if (configuration.reloadHooksOnBodyChange) {
        inputs.push(String(cb));
      }

      if (
      // reload hooks with dependencies
      deps.length > 0 ||
      // reload all hooks of option is set
      configuration.reloadLifeCycleHooks && deps.length === 0) {
        inputs.push(getHotGeneration());
      }

      return hook(cb, inputs);
    }
    return hook(cb, deps);
  };
  wrappedHook.isPatchedByReactHotLoader = true;
  return wrappedHook;
};

var noDeps = function noDeps() {
  return [];
};

var reactHotLoader = {
  signature: function signature(type, key) {
    var getCustomHooks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noDeps;

    addSignature(type, { key: key, getCustomHooks: getCustomHooks });
    return type;
  },
  register: function register(type, uniqueLocalName, fileName) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var id = fileName + '#' + uniqueLocalName;

    if (isCompositeComponent(type) && typeof uniqueLocalName === 'string' && uniqueLocalName && typeof fileName === 'string' && fileName) {
      var proxy = getProxyById(id);

      if (proxy && proxy.getCurrent() !== type) {
        if (!configuration.IS_REACT_MERGE_ENABLED) {
          if (isTypeBlacklisted(type) || isTypeBlacklisted(proxy.getCurrent())) {
            logger.error('React-hot-loader: Cold component', uniqueLocalName, 'at', fileName, 'has been updated');
          }
        }
      }

      if (configuration.onComponentRegister) {
        configuration.onComponentRegister(type, uniqueLocalName, fileName);
      }
      if (configuration.onComponentCreate) {
        configuration.onComponentCreate(type, getComponentDisplayName(type));
      }

      registerComponent(updateProxyById(id, type, options).get(), 2);
      registerComponent(type);
      increment();
    }
    if (isContextType({ type: type })) {
      // possible options - Context, Consumer, Provider.
      ['Provider', 'Consumer'].forEach(function (prop) {
        var descriptor = Object.getOwnPropertyDescriptor(type, prop);
        if (descriptor && descriptor.value) {
          updateFunctionProxyById(id + ':' + prop, descriptor.value, updateContext);
        }
      });
      updateFunctionProxyById(id, type, updateContext);
      increment();
    }
    if (isLazyType({ type: type })) {
      updateFunctionProxyById(id, type, updateLazy);
      increment();
    }
    if (isForwardType({ type: type })) {
      reactHotLoader.register(type.render, uniqueLocalName + ':render', fileName, forceSimpleSFC);
      updateFunctionProxyById(id, type, updateForward);
      increment();
    }
    if (isMemoType({ type: type })) {
      reactHotLoader.register(type.type, uniqueLocalName + ':memo', fileName, forceSimpleSFC);
      updateFunctionProxyById(id, type, updateMemo);
      increment();
    }
  },
  reset: function reset() {
    resetProxies();
  },
  preact: function preact(instance) {
    preactAdapter(instance, resolveType);
  },
  resolveType: function resolveType$$1(type) {
    return resolveType(type);
  },
  patch: function patch(React$$1, ReactDOM$$1) {
    var typeResolver = resolveType;
    /* eslint-disable no-console */
    if (ReactDOM$$1 && !ReactDOM$$1.render) {
      logger.error('React-Hot-Loader: broken state detected, please import React-Hot-Loader before react-dom, see https://github.com/gaearon/react-hot-loader/issues/1315');
    }
    if (ReactDOM$$1 && ReactDOM$$1.setHotElementComparator) {
      ReactDOM$$1.setHotElementComparator(hotComponentCompare);
      configuration.disableHotRenderer = configuration.disableHotRendererWhenInjected;

      configuration.ignoreSFC = configuration.ignoreSFCWhenInjected;

      configuration.IS_REACT_MERGE_ENABLED = true;
      configuration.showReactDomPatchNotification = false;
      configuration.integratedComparator = true;

      if (ReactDOM$$1.setHotTypeResolver) {
        configuration.integratedResolver = true;
        typeResolver = resolveSimpleType;
        ReactDOM$$1.setHotTypeResolver(resolveType);
      }
    }

    // PATCH REACT METHODS

    /* eslint-enable */
    if (!React$$1.createElement.isPatchedByReactHotLoader) {
      var originalCreateElement = React$$1.createElement;
      // Trick React into rendering a proxy so that
      // its state is preserved when the class changes.
      // This will update the proxy if it's for a known type.
      React$$1.createElement = function (type) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return originalCreateElement.apply(undefined, [typeResolver(type)].concat(args));
      };
      React$$1.createElement.isPatchedByReactHotLoader = true;
    }

    if (!React$$1.cloneElement.isPatchedByReactHotLoader) {
      var originalCloneElement = React$$1.cloneElement;

      React$$1.cloneElement = function (element) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        var newType = element.type && typeResolver(element.type);
        if (newType && newType !== element.type) {
          return originalCloneElement.apply(undefined, [_extends({}, element, {
            type: newType
          })].concat(args));
        }
        return originalCloneElement.apply(undefined, [element].concat(args));
      };

      React$$1.cloneElement.isPatchedByReactHotLoader = true;
    }

    if (!React$$1.createFactory.isPatchedByReactHotLoader) {
      // Patch React.createFactory to use patched createElement
      // because the original implementation uses the internal,
      // unpatched ReactElement.createElement
      React$$1.createFactory = function (type) {
        var factory = React$$1.createElement.bind(null, type);
        factory.type = type;
        return factory;
      };
      React$$1.createFactory.isPatchedByReactHotLoader = true;
    }

    if (!React$$1.Children.only.isPatchedByReactHotLoader) {
      var originalChildrenOnly = React$$1.Children.only;
      // Use the same trick as React.createElement
      React$$1.Children.only = function (children) {
        return originalChildrenOnly(_extends({}, children, {
          type: typeResolver(children.type)
        }));
      };
      React$$1.Children.only.isPatchedByReactHotLoader = true;
    }

    // PATCH REACT HOOKS

    if (React$$1.useEffect && !React$$1.useEffect.isPatchedByReactHotLoader) {
      React$$1.useEffect = hookWrapper(React$$1.useEffect);
      React$$1.useLayoutEffect = hookWrapper(React$$1.useLayoutEffect);
      React$$1.useCallback = hookWrapper(React$$1.useCallback);
      React$$1.useMemo = hookWrapper(React$$1.useMemo);

      // transform context for useContext
      var useContext = React$$1.useContext;

      React$$1.useContext = function (context) {
        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        return useContext.apply(undefined, [typeResolver(context)].concat(args));
      };
    }

    // reactHotLoader.reset()
  }
};

var openedModules = {};
var lastModuleOpened = '';
var getLastModuleOpened = function getLastModuleOpened() {
  return lastModuleOpened;
};

var hotModules = {};

var createHotModule = function createHotModule() {
  return { instances: [], updateTimeout: 0 };
};

var hotModule = function hotModule(moduleId) {
  if (!hotModules[moduleId]) {
    hotModules[moduleId] = createHotModule();
  }
  return hotModules[moduleId];
};

var isOpened = function isOpened(sourceModule) {
  return sourceModule && !!openedModules[sourceModule.id];
};

var enter = function enter(sourceModule) {
  if (sourceModule && sourceModule.id) {
    lastModuleOpened = sourceModule.id;
    openedModules[sourceModule.id] = true;
  } else {
    logger.warn('React-hot-loader: no `module` variable found. Did you shadow a system variable?');
  }
};

var leave = function leave(sourceModule) {
  if (sourceModule && sourceModule.id) {
    delete openedModules[sourceModule.id];
  }
};

var createQueue = function createQueue() {
  var runner = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (a) {
    return a();
  };

  var promise = void 0;
  var queue = [];

  var runAll = function runAll() {
    var oldQueue = queue;
    oldQueue.forEach(function (cb) {
      return cb();
    });
    queue = [];
  };

  var add = function add(cb) {
    if (queue.length === 0) {
      promise = Promise.resolve().then(function () {
        return runner(runAll);
      });
    }
    queue.push(cb);

    return promise;
  };

  return add;
};

/* eslint-disable camelcase, no-undef */
var requireIndirect =  true ? __webpack_require__ : 0;
/* eslint-enable */

var chargeFailbackTimer = function chargeFailbackTimer(id) {
  return setTimeout(function () {
    var error = 'hot update failed for module "' + id + '". Last file processed: "' + getLastModuleOpened() + '".';
    logger.error(error);
    logException({
      toString: function toString() {
        return error;
      }
    });
    // 100 ms more "code" tolerant that 0, and would catch error in any case
  }, 100);
};

var clearFailbackTimer = function clearFailbackTimer(timerId) {
  return clearTimeout(timerId);
};

var createHoc = function createHoc(SourceComponent, TargetComponent) {
  hoistNonReactStatic(TargetComponent, SourceComponent);
  TargetComponent.displayName = 'HotExported' + getComponentDisplayName(SourceComponent);
  return TargetComponent;
};

var runInRequireQueue = createQueue();
var runInRenderQueue = createQueue(function (cb) {
  if (ReactDOM.unstable_batchedUpdates) {
    ReactDOM.unstable_batchedUpdates(cb);
  } else {
    cb();
  }
});

var makeHotExport = function makeHotExport(sourceModule, moduleId) {
  var updateInstances = function updateInstances(possibleError) {
    if (possibleError && possibleError instanceof Error) {
      console.error(possibleError);
      return;
    }
    var module = hotModule(moduleId);

    var deepUpdate = function deepUpdate() {
      // force flush all updates
      runInRenderQueue(function () {
        enterHotUpdate();
        var gen = getHotGeneration();
        module.instances.forEach(function (inst) {
          return inst.forceUpdate();
        });

        if (configuration.trackTailUpdates) {
          var runLimit = 0;
          var checkTailUpdates = function checkTailUpdates() {
            setTimeout(function () {
              if (getHotGeneration() !== gen) {
                // we know that some components were updated, but not tracking which ones
                // even if their updates might be incorporated automatically (like lazy)
                // we dont know which one should be tracked, and which updates are important
                logger.warn('React-Hot-Loader: some components were updated out-of-bound. Updating your app to reconcile the changes.');
                // increment generator for cache-busting existing tree
                increment();
                deepUpdate();
              } else if (++runLimit < 5) {
                checkTailUpdates();
              }
            }, 16);
          };

          checkTailUpdates();
        }
      });
    };

    // require all modules
    runInRequireQueue(function () {
      try {
        // webpack will require everything by this time
        // but let's double check...
        requireIndirect(moduleId);
      } catch (e) {
        console.error('React-Hot-Loader: error detected while loading', moduleId);
        console.error(e);
      }
    }).then(deepUpdate);
  };

  if (sourceModule.hot) {
    // Mark as self-accepted for Webpack (callback is an Error Handler)
    // Update instances for Parcel (callback is an Accept Handler)
    sourceModule.hot.accept(updateInstances);

    // Webpack way
    if (sourceModule.hot.addStatusHandler) {
      if (sourceModule.hot.status() === 'idle') {
        sourceModule.hot.addStatusHandler(function (status) {
          if (status === 'apply') {
            clearExceptions();
            updateInstances();
          }
        });
      }
    }
  } else {
    logger.warn('React-hot-loader: Hot Module Replacement is not enabled');
  }
};

var hot = function hot(sourceModule) {
  if (!sourceModule) {
    // this is fatal
    throw new Error('React-hot-loader: `hot` was called without any argument provided');
  }
  var moduleId = sourceModule.id || sourceModule.i || sourceModule.filename;
  if (!moduleId) {
    console.error('`module` provided', sourceModule);
    throw new Error('React-hot-loader: `hot` could not find the `name` of the the `module` you have provided');
  }
  var module = hotModule(moduleId);
  makeHotExport(sourceModule, moduleId);

  clearExceptions();
  var failbackTimer = chargeFailbackTimer(moduleId);
  var firstHotRegistered = false;

  // TODO: Ensure that all exports from this file are react components.

  return function (WrappedComponent, props) {
    clearFailbackTimer(failbackTimer);
    // register proxy for wrapped component
    // only one hot per file would use this registration
    if (!firstHotRegistered) {
      firstHotRegistered = true;
      reactHotLoader.register(WrappedComponent, getComponentDisplayName(WrappedComponent), 'RHL' + moduleId);
    }

    return createHoc(WrappedComponent, function (_Component) {
      inherits(ExportedComponent, _Component);

      function ExportedComponent() {
        classCallCheck(this, ExportedComponent);
        return possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      ExportedComponent.prototype.componentDidMount = function componentDidMount() {
        module.instances.push(this);
      };

      ExportedComponent.prototype.componentWillUnmount = function componentWillUnmount() {
        var _this2 = this;

        if (isOpened(sourceModule)) {
          var componentName = getComponentDisplayName(WrappedComponent);
          logger.error('React-hot-loader: Detected AppContainer unmount on module \'' + moduleId + '\' update.\n' + ('Did you use "hot(' + componentName + ')" and "ReactDOM.render()" in the same file?\n') + ('"hot(' + componentName + ')" shall only be used as export.\n') + 'Please refer to "Getting Started" (https://github.com/gaearon/react-hot-loader/).');
        }
        module.instances = module.instances.filter(function (a) {
          return a !== _this2;
        });
      };

      ExportedComponent.prototype.render = function render() {
        return React__default.createElement(
          AppContainer,
          props,
          React__default.createElement(WrappedComponent, this.props)
        );
      };

      return ExportedComponent;
    }(React.Component));
  };
};

reactHotLoader.register(AppContainer, 'AppContainer', 'hot-dev');

var getProxyOrType = function getProxyOrType(type) {
  var proxy = getProxyByType(type);
  return proxy ? proxy.get() : type;
};

var areComponentsEqual = function areComponentsEqual(a, b) {
  return getProxyOrType(a) === getProxyOrType(b);
};

var compareOrSwap = function compareOrSwap(oldType, newType) {
  return hotComponentCompare(oldType, newType);
};

var cold = function cold(type) {
  blacklistByType(type);
  return type;
};

var configureComponent = function configureComponent(component, options) {
  return setComponentOptions(component, options);
};

var setConfig = function setConfig(config) {
  return setConfiguration(config);
};

reactHotLoader.patch(React__default, ReactDOM);

exports.default = reactHotLoader;
exports.AppContainer = AppContainer;
exports.hot = hot;
exports.enterModule = enter;
exports.leaveModule = leave;
exports.areComponentsEqual = areComponentsEqual;
exports.compareOrSwap = compareOrSwap;
exports.cold = cold;
exports.configureComponent = configureComponent;
exports.setConfig = setConfig;


/***/ }),

/***/ 7209:
/*!*******************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports, "__esModule", ({value:!0}));var React=_interopDefault(__webpack_require__(/*! react */ 7294));function AppContainer(e){return AppContainer.warnAboutHMRDisabled&&(AppContainer.warnAboutHMRDisabled=!0,console.error("React-Hot-Loader: misconfiguration detected, using production version in non-production environment."),console.error("React-Hot-Loader: Hot Module Replacement is not enabled.")),React.Children.only(e.children)}AppContainer.warnAboutHMRDisabled=!1;var hot=function e(){return e.shouldWrapWithAppContainer?function(e){return function(n){return React.createElement(AppContainer,null,React.createElement(e,n))}}:function(e){return e}};hot.shouldWrapWithAppContainer=!1;var areComponentsEqual=function(e,n){return e===n},setConfig=function(){},cold=function(e){return e},configureComponent=function(){};exports.AppContainer=AppContainer,exports.hot=hot,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig,exports.cold=cold,exports.configureComponent=configureComponent;


/***/ }),

/***/ 5053:
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else if (false) {} else if (typeof window === 'undefined') {
  // this is just server environment
  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ 7209);
} else if (false) {} else {
  var evalAllowed = false;
  var evalError = null;
  try {
    eval('evalAllowed = true');
  } catch (e) {
    // eval not allowed due to CSP
    evalError = e && e.message ? e.message : 'unknown reason';
  }

  // TODO: dont use eval to update methods. see #1273
  // RHL needs setPrototypeOf to operate Component inheritance, and eval to patch methods
  var jsFeaturesPresent = !!Object.setPrototypeOf;

  if (!jsFeaturesPresent || !evalAllowed) {
    // we are not in prod mode, but RHL could not be activated
    console.warn(
      'React-Hot-Loader is not supported in this environment:',
      [
        !jsFeaturesPresent && "some JS features are missing",
        !evalAllowed && "`eval` is not allowed(" + evalError + ")"
      ].join(','),
      '.'
    );
    module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ 7209);
  } else {
    module.exports = window.reactHotLoaderGlobal = __webpack_require__(/*! ./dist/react-hot-loader.development.js */ 9822);
  }
}


/***/ }),

/***/ 1570:
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
if (true) {
  var hot = __webpack_require__(/*! ./index */ 5053).hot;
  if (true) {
    var cache = __webpack_require__.c;

    if (!module.parents || module.parents.length === 0) {
      throw new Error(
        'React-Hot-Loader: `react-hot-loader/root` is not supported on your system. ' +
        'Please use `import {hot} from "react-hot-loader"` instead'
      );
    }
    // access parent
    var parent = cache[module.parents[0]];
    if (!parent) {
      throw new Error(
        'React-Hot-Loader: `react-hot-loader/root` is not supported on your system. ' +
        'Please use `import {hot} from "react-hot-loader"` instead'
      );
    }

    // remove self from a cache
    delete cache[module.id];

    // setup hot for caller
    exports.hot = hot(parent);
  } else {}
} else {}

function fallbackHot() {
  exports.hot = function (a) {
    return a;
  };
}


/***/ }),

/***/ 2201:
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ 9864:
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ 2201);
}


/***/ }),

/***/ 6871:
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polyfill": () => (/* binding */ polyfill)
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ 6550:
/*!*******************************************************!*\
  !*** ./node_modules/react-router/esm/react-router.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryRouter": () => (/* binding */ MemoryRouter),
/* harmony export */   "Prompt": () => (/* binding */ Prompt),
/* harmony export */   "Redirect": () => (/* binding */ Redirect),
/* harmony export */   "Route": () => (/* binding */ Route),
/* harmony export */   "Router": () => (/* binding */ Router),
/* harmony export */   "StaticRouter": () => (/* binding */ StaticRouter),
/* harmony export */   "Switch": () => (/* binding */ Switch),
/* harmony export */   "__HistoryContext": () => (/* binding */ historyContext),
/* harmony export */   "__RouterContext": () => (/* binding */ context),
/* harmony export */   "generatePath": () => (/* binding */ generatePath),
/* harmony export */   "matchPath": () => (/* binding */ matchPath),
/* harmony export */   "useHistory": () => (/* binding */ useHistory),
/* harmony export */   "useLocation": () => (/* binding */ useLocation),
/* harmony export */   "useParams": () => (/* binding */ useParams),
/* harmony export */   "useRouteMatch": () => (/* binding */ useRouteMatch),
/* harmony export */   "withRouter": () => (/* binding */ withRouter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ 1788);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! history */ 9731);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tiny-warning */ 5298);
/* harmony import */ var mini_create_react_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mini-create-react-context */ 4523);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tiny-invariant */ 2177);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 2122);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path-to-regexp */ 4779);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-is */ 9864);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ 9756);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hoist-non-react-statics */ 8679);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8__);













// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = (0,mini_create_react_context__WEBPACK_IMPORTED_MODULE_3__.default)();
  context.displayName = name;
  return context;
};

var historyContext =
/*#__PURE__*/
createNamedContext("Router-History");

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext$1 = function createNamedContext(name) {
  var context = (0,mini_create_react_context__WEBPACK_IMPORTED_MODULE_3__.default)();
  context.displayName = name;
  return context;
};

var context =
/*#__PURE__*/
createNamedContext$1("Router");

/**
 * The public API for putting history on context.
 */

var Router =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (true) {
  Router.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    history: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
    staticContext: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  };

  Router.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(prevProps.history === this.props.history, "You cannot change <Router history>") : 0;
  };
}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_10__.createMemoryHistory)(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (true) {
  MemoryRouter.propTypes = {
    initialEntries: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
    initialIndex: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    keyLength: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)
  };

  MemoryRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") : 0;
  };
}

var Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You should not use <Prompt> outside a <Router>") : 0 : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (true) {
  var messageType = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]);
  Prompt.propTypes = {
    when: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    message: messageType.isRequired
  };
}

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp__WEBPACK_IMPORTED_MODULE_5___default().compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You should not use <Redirect> outside a <Router>") : 0 : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(prevProps.to);

        if (!(0,history__WEBPACK_IMPORTED_MODULE_10__.locationsAreEqual)(prevLocation, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (true) {
  Redirect.propTypes = {
    push: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    from: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    to: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)]).isRequired
  };
}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_5___default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(value !== undefined, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") : 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You should not use <Route> outside a <Router>") : 0 : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : 0 : children : component ? react__WEBPACK_IMPORTED_MODULE_1__.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : 0 : null);
    });
  };

  return Route;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (true) {
  Route.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)]),
    component: function component(props, propName) {
      if (props[propName] && !(0,react_is__WEBPACK_IMPORTED_MODULE_6__.isValidElementType)(props[propName])) {
        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
      }
    },
    exact: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    path: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string))]),
    render: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    sensitive: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    strict: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
  };

  Route.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : 0;
  };

  Route.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : 0;
  };
}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : (0,history__WEBPACK_IMPORTED_MODULE_10__.createPath)(location);
}

function staticHandler(methodName) {
  return function () {
      true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You cannot %s with <StaticRouter>", methodName) : 0 ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__.default)(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Router, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (true) {
  StaticRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    context: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)])
  };

  StaticRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") : 0;
  };
}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Consumer, null, function (context) {
      !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You should not use <Switch> outside a <Router>") : 0 : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(_this.props.children, function (child) {
        if (match == null && react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (true) {
  Switch.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  };

  Switch.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : 0;
  };
}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__.default)(props, ["wrappedComponentRef"]);

    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Consumer, null, function (context) {
      !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You should not use <" + displayName + " /> outside a <Router>") : 0 : void 0;
      return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (true) {
    C.propTypes = {
      wrappedComponentRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)])
    };
  }

  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8___default()(C, Component);
}

var useContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext;
function useHistory() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You must use React >= 16.8 in order to use useHistory()") : 0 : void 0;
  }

  return useContext(historyContext);
}
function useLocation() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You must use React >= 16.8 in order to use useLocation()") : 0 : void 0;
  }

  return useContext(context).location;
}
function useParams() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You must use React >= 16.8 in order to use useParams()") : 0 : void 0;
  }

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You must use React >= 16.8 in order to use useRouteMatch()") : 0 : void 0;
  }

  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (true) {
  if (typeof window !== "undefined") {
    var global = window;
    var key = "__react_router_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };

    if (global[key] && global[key] !== "esm") {
      var initialBuildName = buildNames[global[key]];
      var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.

      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }

    global[key] = "esm";
  }
}


//# sourceMappingURL=react-router.js.map


/***/ }),

/***/ 8273:
/*!***************************************************************!*\
  !*** ./node_modules/resolve-pathname/esm/resolve-pathname.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolvePathname);


/***/ }),

/***/ 9601:
/*!*********************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler-tracing.development.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v0.20.2
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var DEFAULT_THREAD_ID = 0; // Counters used to generate unique IDs.

var interactionIDCounter = 0;
var threadIDCounter = 0; // Set of currently traced interactions.
// Interactions "stack"–
// Meaning that newly traced interactions are appended to the previously active set.
// When an interaction goes out of scope, the previous set (if any) is restored.

exports.__interactionsRef = null; // Listener(s) to notify when interactions begin and end.

exports.__subscriberRef = null;

{
  exports.__interactionsRef = {
    current: new Set()
  };
  exports.__subscriberRef = {
    current: null
  };
}
function unstable_clear(callback) {

  var prevInteractions = exports.__interactionsRef.current;
  exports.__interactionsRef.current = new Set();

  try {
    return callback();
  } finally {
    exports.__interactionsRef.current = prevInteractions;
  }
}
function unstable_getCurrent() {
  {
    return exports.__interactionsRef.current;
  }
}
function unstable_getThreadID() {
  return ++threadIDCounter;
}
function unstable_trace(name, timestamp, callback) {
  var threadID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THREAD_ID;

  var interaction = {
    __count: 1,
    id: interactionIDCounter++,
    name: name,
    timestamp: timestamp
  };
  var prevInteractions = exports.__interactionsRef.current; // Traced interactions should stack/accumulate.
  // To do that, clone the current interactions.
  // The previous set will be restored upon completion.

  var interactions = new Set(prevInteractions);
  interactions.add(interaction);
  exports.__interactionsRef.current = interactions;
  var subscriber = exports.__subscriberRef.current;
  var returnValue;

  try {
    if (subscriber !== null) {
      subscriber.onInteractionTraced(interaction);
    }
  } finally {
    try {
      if (subscriber !== null) {
        subscriber.onWorkStarted(interactions, threadID);
      }
    } finally {
      try {
        returnValue = callback();
      } finally {
        exports.__interactionsRef.current = prevInteractions;

        try {
          if (subscriber !== null) {
            subscriber.onWorkStopped(interactions, threadID);
          }
        } finally {
          interaction.__count--; // If no async work was scheduled for this interaction,
          // Notify subscribers that it's completed.

          if (subscriber !== null && interaction.__count === 0) {
            subscriber.onInteractionScheduledWorkCompleted(interaction);
          }
        }
      }
    }
  }

  return returnValue;
}
function unstable_wrap(callback) {
  var threadID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THREAD_ID;

  var wrappedInteractions = exports.__interactionsRef.current;
  var subscriber = exports.__subscriberRef.current;

  if (subscriber !== null) {
    subscriber.onWorkScheduled(wrappedInteractions, threadID);
  } // Update the pending async work count for the current interactions.
  // Update after calling subscribers in case of error.


  wrappedInteractions.forEach(function (interaction) {
    interaction.__count++;
  });
  var hasRun = false;

  function wrapped() {
    var prevInteractions = exports.__interactionsRef.current;
    exports.__interactionsRef.current = wrappedInteractions;
    subscriber = exports.__subscriberRef.current;

    try {
      var returnValue;

      try {
        if (subscriber !== null) {
          subscriber.onWorkStarted(wrappedInteractions, threadID);
        }
      } finally {
        try {
          returnValue = callback.apply(undefined, arguments);
        } finally {
          exports.__interactionsRef.current = prevInteractions;

          if (subscriber !== null) {
            subscriber.onWorkStopped(wrappedInteractions, threadID);
          }
        }
      }

      return returnValue;
    } finally {
      if (!hasRun) {
        // We only expect a wrapped function to be executed once,
        // But in the event that it's executed more than once–
        // Only decrement the outstanding interaction counts once.
        hasRun = true; // Update pending async counts for all wrapped interactions.
        // If this was the last scheduled async work for any of them,
        // Mark them as completed.

        wrappedInteractions.forEach(function (interaction) {
          interaction.__count--;

          if (subscriber !== null && interaction.__count === 0) {
            subscriber.onInteractionScheduledWorkCompleted(interaction);
          }
        });
      }
    }
  }

  wrapped.cancel = function cancel() {
    subscriber = exports.__subscriberRef.current;

    try {
      if (subscriber !== null) {
        subscriber.onWorkCanceled(wrappedInteractions, threadID);
      }
    } finally {
      // Update pending async counts for all wrapped interactions.
      // If this was the last scheduled async work for any of them,
      // Mark them as completed.
      wrappedInteractions.forEach(function (interaction) {
        interaction.__count--;

        if (subscriber && interaction.__count === 0) {
          subscriber.onInteractionScheduledWorkCompleted(interaction);
        }
      });
    }
  };

  return wrapped;
}

var subscribers = null;

{
  subscribers = new Set();
}

function unstable_subscribe(subscriber) {
  {
    subscribers.add(subscriber);

    if (subscribers.size === 1) {
      exports.__subscriberRef.current = {
        onInteractionScheduledWorkCompleted: onInteractionScheduledWorkCompleted,
        onInteractionTraced: onInteractionTraced,
        onWorkCanceled: onWorkCanceled,
        onWorkScheduled: onWorkScheduled,
        onWorkStarted: onWorkStarted,
        onWorkStopped: onWorkStopped
      };
    }
  }
}
function unstable_unsubscribe(subscriber) {
  {
    subscribers.delete(subscriber);

    if (subscribers.size === 0) {
      exports.__subscriberRef.current = null;
    }
  }
}

function onInteractionTraced(interaction) {
  var didCatchError = false;
  var caughtError = null;
  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onInteractionTraced(interaction);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onInteractionScheduledWorkCompleted(interaction) {
  var didCatchError = false;
  var caughtError = null;
  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onInteractionScheduledWorkCompleted(interaction);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkScheduled(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;
  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkScheduled(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkStarted(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;
  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkStarted(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkStopped(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;
  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkStopped(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkCanceled(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;
  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkCanceled(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

exports.unstable_clear = unstable_clear;
exports.unstable_getCurrent = unstable_getCurrent;
exports.unstable_getThreadID = unstable_getThreadID;
exports.unstable_subscribe = unstable_subscribe;
exports.unstable_trace = unstable_trace;
exports.unstable_unsubscribe = unstable_unsubscribe;
exports.unstable_wrap = unstable_wrap;
  })();
}


/***/ }),

/***/ 2972:
/*!*************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.development.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v0.20.2
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var enableSchedulerDebugging = false;
var enableProfiling = false;

var requestHostCallback;
var requestHostTimeout;
var cancelHostTimeout;
var requestPaint;
var hasPerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';

if (hasPerformanceNow) {
  var localPerformance = performance;

  exports.unstable_now = function () {
    return localPerformance.now();
  };
} else {
  var localDate = Date;
  var initialTime = localDate.now();

  exports.unstable_now = function () {
    return localDate.now() - initialTime;
  };
}

if ( // If Scheduler runs in a non-DOM environment, it falls back to a naive
// implementation using setTimeout.
typeof window === 'undefined' || // Check if MessageChannel is supported, too.
typeof MessageChannel !== 'function') {
  // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
  // fallback to a naive implementation.
  var _callback = null;
  var _timeoutID = null;

  var _flushCallback = function () {
    if (_callback !== null) {
      try {
        var currentTime = exports.unstable_now();
        var hasRemainingTime = true;

        _callback(hasRemainingTime, currentTime);

        _callback = null;
      } catch (e) {
        setTimeout(_flushCallback, 0);
        throw e;
      }
    }
  };

  requestHostCallback = function (cb) {
    if (_callback !== null) {
      // Protect against re-entrancy.
      setTimeout(requestHostCallback, 0, cb);
    } else {
      _callback = cb;
      setTimeout(_flushCallback, 0);
    }
  };

  requestHostTimeout = function (cb, ms) {
    _timeoutID = setTimeout(cb, ms);
  };

  cancelHostTimeout = function () {
    clearTimeout(_timeoutID);
  };

  exports.unstable_shouldYield = function () {
    return false;
  };

  requestPaint = exports.unstable_forceFrameRate = function () {};
} else {
  // Capture local references to native APIs, in case a polyfill overrides them.
  var _setTimeout = window.setTimeout;
  var _clearTimeout = window.clearTimeout;

  if (typeof console !== 'undefined') {
    // TODO: Scheduler no longer requires these methods to be polyfilled. But
    // maybe we want to continue warning if they don't exist, to preserve the
    // option to rely on it in the future?
    var requestAnimationFrame = window.requestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame;

    if (typeof requestAnimationFrame !== 'function') {
      // Using console['error'] to evade Babel and ESLint
      console['error']("This browser doesn't support requestAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://reactjs.org/link/react-polyfills');
    }

    if (typeof cancelAnimationFrame !== 'function') {
      // Using console['error'] to evade Babel and ESLint
      console['error']("This browser doesn't support cancelAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://reactjs.org/link/react-polyfills');
    }
  }

  var isMessageLoopRunning = false;
  var scheduledHostCallback = null;
  var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main
  // thread, like user events. By default, it yields multiple times per frame.
  // It does not attempt to align with frame boundaries, since most tasks don't
  // need to be frame aligned; for those that do, use requestAnimationFrame.

  var yieldInterval = 5;
  var deadline = 0; // TODO: Make this configurable

  {
    // `isInputPending` is not available. Since we have no way of knowing if
    // there's pending input, always yield at the end of the frame.
    exports.unstable_shouldYield = function () {
      return exports.unstable_now() >= deadline;
    }; // Since we yield every frame regardless, `requestPaint` has no effect.


    requestPaint = function () {};
  }

  exports.unstable_forceFrameRate = function (fps) {
    if (fps < 0 || fps > 125) {
      // Using console['error'] to evade Babel and ESLint
      console['error']('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing frame rates higher than 125 fps is not supported');
      return;
    }

    if (fps > 0) {
      yieldInterval = Math.floor(1000 / fps);
    } else {
      // reset the framerate
      yieldInterval = 5;
    }
  };

  var performWorkUntilDeadline = function () {
    if (scheduledHostCallback !== null) {
      var currentTime = exports.unstable_now(); // Yield after `yieldInterval` ms, regardless of where we are in the vsync
      // cycle. This means there's always time remaining at the beginning of
      // the message event.

      deadline = currentTime + yieldInterval;
      var hasTimeRemaining = true;

      try {
        var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);

        if (!hasMoreWork) {
          isMessageLoopRunning = false;
          scheduledHostCallback = null;
        } else {
          // If there's more work, schedule the next message event at the end
          // of the preceding one.
          port.postMessage(null);
        }
      } catch (error) {
        // If a scheduler task throws, exit the current browser task so the
        // error can be observed.
        port.postMessage(null);
        throw error;
      }
    } else {
      isMessageLoopRunning = false;
    } // Yielding to the browser will give it a chance to paint, so we can
  };

  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = performWorkUntilDeadline;

  requestHostCallback = function (callback) {
    scheduledHostCallback = callback;

    if (!isMessageLoopRunning) {
      isMessageLoopRunning = true;
      port.postMessage(null);
    }
  };

  requestHostTimeout = function (callback, ms) {
    taskTimeoutID = _setTimeout(function () {
      callback(exports.unstable_now());
    }, ms);
  };

  cancelHostTimeout = function () {
    _clearTimeout(taskTimeoutID);

    taskTimeoutID = -1;
  };
}

function push(heap, node) {
  var index = heap.length;
  heap.push(node);
  siftUp(heap, node, index);
}
function peek(heap) {
  var first = heap[0];
  return first === undefined ? null : first;
}
function pop(heap) {
  var first = heap[0];

  if (first !== undefined) {
    var last = heap.pop();

    if (last !== first) {
      heap[0] = last;
      siftDown(heap, last, 0);
    }

    return first;
  } else {
    return null;
  }
}

function siftUp(heap, node, i) {
  var index = i;

  while (true) {
    var parentIndex = index - 1 >>> 1;
    var parent = heap[parentIndex];

    if (parent !== undefined && compare(parent, node) > 0) {
      // The parent is larger. Swap positions.
      heap[parentIndex] = node;
      heap[index] = parent;
      index = parentIndex;
    } else {
      // The parent is smaller. Exit.
      return;
    }
  }
}

function siftDown(heap, node, i) {
  var index = i;
  var length = heap.length;

  while (index < length) {
    var leftIndex = (index + 1) * 2 - 1;
    var left = heap[leftIndex];
    var rightIndex = leftIndex + 1;
    var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.

    if (left !== undefined && compare(left, node) < 0) {
      if (right !== undefined && compare(right, left) < 0) {
        heap[index] = right;
        heap[rightIndex] = node;
        index = rightIndex;
      } else {
        heap[index] = left;
        heap[leftIndex] = node;
        index = leftIndex;
      }
    } else if (right !== undefined && compare(right, node) < 0) {
      heap[index] = right;
      heap[rightIndex] = node;
      index = rightIndex;
    } else {
      // Neither child is smaller. Exit.
      return;
    }
  }
}

function compare(a, b) {
  // Compare sort index first, then task id.
  var diff = a.sortIndex - b.sortIndex;
  return diff !== 0 ? diff : a.id - b.id;
}

// TODO: Use symbols?
var ImmediatePriority = 1;
var UserBlockingPriority = 2;
var NormalPriority = 3;
var LowPriority = 4;
var IdlePriority = 5;

function markTaskErrored(task, ms) {
}

/* eslint-disable no-var */
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111

var maxSigned31BitInt = 1073741823; // Times out immediately

var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out

var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
var NORMAL_PRIORITY_TIMEOUT = 5000;
var LOW_PRIORITY_TIMEOUT = 10000; // Never times out

var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt; // Tasks are stored on a min heap

var taskQueue = [];
var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.

var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.
var currentTask = null;
var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrancy.

var isPerformingWork = false;
var isHostCallbackScheduled = false;
var isHostTimeoutScheduled = false;

function advanceTimers(currentTime) {
  // Check for tasks that are no longer delayed and add them to the queue.
  var timer = peek(timerQueue);

  while (timer !== null) {
    if (timer.callback === null) {
      // Timer was cancelled.
      pop(timerQueue);
    } else if (timer.startTime <= currentTime) {
      // Timer fired. Transfer to the task queue.
      pop(timerQueue);
      timer.sortIndex = timer.expirationTime;
      push(taskQueue, timer);
    } else {
      // Remaining timers are pending.
      return;
    }

    timer = peek(timerQueue);
  }
}

function handleTimeout(currentTime) {
  isHostTimeoutScheduled = false;
  advanceTimers(currentTime);

  if (!isHostCallbackScheduled) {
    if (peek(taskQueue) !== null) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    } else {
      var firstTimer = peek(timerQueue);

      if (firstTimer !== null) {
        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
      }
    }
  }
}

function flushWork(hasTimeRemaining, initialTime) {


  isHostCallbackScheduled = false;

  if (isHostTimeoutScheduled) {
    // We scheduled a timeout but it's no longer needed. Cancel it.
    isHostTimeoutScheduled = false;
    cancelHostTimeout();
  }

  isPerformingWork = true;
  var previousPriorityLevel = currentPriorityLevel;

  try {
    if (enableProfiling) {
      try {
        return workLoop(hasTimeRemaining, initialTime);
      } catch (error) {
        if (currentTask !== null) {
          var currentTime = exports.unstable_now();
          markTaskErrored(currentTask, currentTime);
          currentTask.isQueued = false;
        }

        throw error;
      }
    } else {
      // No catch in prod code path.
      return workLoop(hasTimeRemaining, initialTime);
    }
  } finally {
    currentTask = null;
    currentPriorityLevel = previousPriorityLevel;
    isPerformingWork = false;
  }
}

function workLoop(hasTimeRemaining, initialTime) {
  var currentTime = initialTime;
  advanceTimers(currentTime);
  currentTask = peek(taskQueue);

  while (currentTask !== null && !(enableSchedulerDebugging )) {
    if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || exports.unstable_shouldYield())) {
      // This currentTask hasn't expired, and we've reached the deadline.
      break;
    }

    var callback = currentTask.callback;

    if (typeof callback === 'function') {
      currentTask.callback = null;
      currentPriorityLevel = currentTask.priorityLevel;
      var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;

      var continuationCallback = callback(didUserCallbackTimeout);
      currentTime = exports.unstable_now();

      if (typeof continuationCallback === 'function') {
        currentTask.callback = continuationCallback;
      } else {

        if (currentTask === peek(taskQueue)) {
          pop(taskQueue);
        }
      }

      advanceTimers(currentTime);
    } else {
      pop(taskQueue);
    }

    currentTask = peek(taskQueue);
  } // Return whether there's additional work


  if (currentTask !== null) {
    return true;
  } else {
    var firstTimer = peek(timerQueue);

    if (firstTimer !== null) {
      requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
    }

    return false;
  }
}

function unstable_runWithPriority(priorityLevel, eventHandler) {
  switch (priorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
    case LowPriority:
    case IdlePriority:
      break;

    default:
      priorityLevel = NormalPriority;
  }

  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
}

function unstable_next(eventHandler) {
  var priorityLevel;

  switch (currentPriorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
      // Shift down to normal priority
      priorityLevel = NormalPriority;
      break;

    default:
      // Anything lower than normal priority should remain at the current level.
      priorityLevel = currentPriorityLevel;
      break;
  }

  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
}

function unstable_wrapCallback(callback) {
  var parentPriorityLevel = currentPriorityLevel;
  return function () {
    // This is a fork of runWithPriority, inlined for performance.
    var previousPriorityLevel = currentPriorityLevel;
    currentPriorityLevel = parentPriorityLevel;

    try {
      return callback.apply(this, arguments);
    } finally {
      currentPriorityLevel = previousPriorityLevel;
    }
  };
}

function unstable_scheduleCallback(priorityLevel, callback, options) {
  var currentTime = exports.unstable_now();
  var startTime;

  if (typeof options === 'object' && options !== null) {
    var delay = options.delay;

    if (typeof delay === 'number' && delay > 0) {
      startTime = currentTime + delay;
    } else {
      startTime = currentTime;
    }
  } else {
    startTime = currentTime;
  }

  var timeout;

  switch (priorityLevel) {
    case ImmediatePriority:
      timeout = IMMEDIATE_PRIORITY_TIMEOUT;
      break;

    case UserBlockingPriority:
      timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
      break;

    case IdlePriority:
      timeout = IDLE_PRIORITY_TIMEOUT;
      break;

    case LowPriority:
      timeout = LOW_PRIORITY_TIMEOUT;
      break;

    case NormalPriority:
    default:
      timeout = NORMAL_PRIORITY_TIMEOUT;
      break;
  }

  var expirationTime = startTime + timeout;
  var newTask = {
    id: taskIdCounter++,
    callback: callback,
    priorityLevel: priorityLevel,
    startTime: startTime,
    expirationTime: expirationTime,
    sortIndex: -1
  };

  if (startTime > currentTime) {
    // This is a delayed task.
    newTask.sortIndex = startTime;
    push(timerQueue, newTask);

    if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
      // All tasks are delayed, and this is the task with the earliest delay.
      if (isHostTimeoutScheduled) {
        // Cancel an existing timeout.
        cancelHostTimeout();
      } else {
        isHostTimeoutScheduled = true;
      } // Schedule a timeout.


      requestHostTimeout(handleTimeout, startTime - currentTime);
    }
  } else {
    newTask.sortIndex = expirationTime;
    push(taskQueue, newTask);
    // wait until the next time we yield.


    if (!isHostCallbackScheduled && !isPerformingWork) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    }
  }

  return newTask;
}

function unstable_pauseExecution() {
}

function unstable_continueExecution() {

  if (!isHostCallbackScheduled && !isPerformingWork) {
    isHostCallbackScheduled = true;
    requestHostCallback(flushWork);
  }
}

function unstable_getFirstCallbackNode() {
  return peek(taskQueue);
}

function unstable_cancelCallback(task) {
  // remove from the queue because you can't remove arbitrary nodes from an
  // array based heap, only the first one.)


  task.callback = null;
}

function unstable_getCurrentPriorityLevel() {
  return currentPriorityLevel;
}

var unstable_requestPaint = requestPaint;
var unstable_Profiling =  null;

exports.unstable_IdlePriority = IdlePriority;
exports.unstable_ImmediatePriority = ImmediatePriority;
exports.unstable_LowPriority = LowPriority;
exports.unstable_NormalPriority = NormalPriority;
exports.unstable_Profiling = unstable_Profiling;
exports.unstable_UserBlockingPriority = UserBlockingPriority;
exports.unstable_cancelCallback = unstable_cancelCallback;
exports.unstable_continueExecution = unstable_continueExecution;
exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
exports.unstable_next = unstable_next;
exports.unstable_pauseExecution = unstable_pauseExecution;
exports.unstable_requestPaint = unstable_requestPaint;
exports.unstable_runWithPriority = unstable_runWithPriority;
exports.unstable_scheduleCallback = unstable_scheduleCallback;
exports.unstable_wrapCallback = unstable_wrapCallback;
  })();
}


/***/ }),

/***/ 3840:
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.development.js */ 2972);
}


/***/ }),

/***/ 6722:
/*!*******************************************!*\
  !*** ./node_modules/scheduler/tracing.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler-tracing.development.js */ 9601);
}


/***/ }),

/***/ 6774:
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ 8956:
/*!************************!*\
  !*** ./client/App.css ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ 695);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./App.css */ 6259);

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_App_css__WEBPACK_IMPORTED_MODULE_4__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_App_css__WEBPACK_IMPORTED_MODULE_4__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_App_css__WEBPACK_IMPORTED_MODULE_4__.default.locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_App_css__WEBPACK_IMPORTED_MODULE_4__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_App_css__WEBPACK_IMPORTED_MODULE_4__.default.locals;

    module.hot.accept(
      /*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./App.css */ 6259,
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./App.css */ 6259);
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_App_css__WEBPACK_IMPORTED_MODULE_4__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_App_css__WEBPACK_IMPORTED_MODULE_4__.default.locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_App_css__WEBPACK_IMPORTED_MODULE_4__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_App_css__WEBPACK_IMPORTED_MODULE_4__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_App_css__WEBPACK_IMPORTED_MODULE_4__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_App_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_App_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_App_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ 8988:
/*!*******************************!*\
  !*** ./client/home/index.css ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ 695);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./index.css */ 899);

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_index_css__WEBPACK_IMPORTED_MODULE_4__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_index_css__WEBPACK_IMPORTED_MODULE_4__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_index_css__WEBPACK_IMPORTED_MODULE_4__.default.locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_index_css__WEBPACK_IMPORTED_MODULE_4__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_index_css__WEBPACK_IMPORTED_MODULE_4__.default.locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./index.css */ 899,
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./index.css */ 899);
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_index_css__WEBPACK_IMPORTED_MODULE_4__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_index_css__WEBPACK_IMPORTED_MODULE_4__.default.locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_index_css__WEBPACK_IMPORTED_MODULE_4__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_index_css__WEBPACK_IMPORTED_MODULE_4__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_index_css__WEBPACK_IMPORTED_MODULE_4__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_index_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_index_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_index_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ 695:
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}

module.exports = getTarget;

/***/ }),

/***/ 3379:
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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

/***/ 9216:
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 7795:
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 2177:
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (invariant);


/***/ }),

/***/ 5298:
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (warning);


/***/ }),

/***/ 5429:
/*!*****************************************************!*\
  !*** ./node_modules/value-equal/esm/value-equal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (valueEqual);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/startup prefetch */
/******/ (() => {
/******/ 	__webpack_require__.O(0, ["server"], () => (__webpack_require__.E("client_dynamic_pages_about_About_tsx")), 5);
/******/ })();
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(796)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=server.bundle.js.map