"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/starPeople.jsx":
/*!***************************************!*\
  !*** ./src/components/starPeople.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StarPeople; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\n\n\nfunction StarPeople(_param) {\n    var nome = _param.nome, peso = _param.peso, altura = _param.altura, id = _param.id, filme = _param.filme, starship = _param.starship, dataAni = _param.dataAni, props = _objectWithoutProperties(_param, [\n        \"nome\",\n        \"peso\",\n        \"altura\",\n        \"id\",\n        \"filme\",\n        \"starship\",\n        \"dataAni\"\n    ]);\n    var img = \"/images/\" + nome + \".png\";\n    console.log(img);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    width: \"485px\",\n                    height: \"100%\",\n                    src: img\n                }, void 0, false, {\n                    fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", _objectSpread({}, props, {\n                        children: nome\n                    }), id, false, {\n                        fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", _objectSpread({}, props, {\n                        children: [\n                            \"altura \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: altura\n                            }, void 0, false, {\n                                fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 48\n                            }, this)\n                        ]\n                    }), id, true, {\n                        fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", _objectSpread({}, props, {\n                        children: [\n                            \"peso \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: peso\n                            }, void 0, false, {\n                                fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 46\n                            }, this)\n                        ]\n                    }), id, true, {\n                        fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \"Data Anivers\\xe1rio\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: dataAni\n                            }, void 0, false, {\n                                fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 46\n                            }, this)\n                        ]\n                    }, id, true, {\n                        fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n};\n_c = StarPeople;\nvar _c;\n$RefreshReg$(_c, \"StarPeople\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zdGFyUGVvcGxlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUVmLFNBQVNDLFVBQVUsQ0FBQyxNQUE4RCxFQUFFO1FBQTlEQyxJQUFJLEdBQU4sTUFBOEQsQ0FBNURBLElBQUksRUFBRUMsSUFBSSxHQUFaLE1BQThELENBQXREQSxJQUFJLEVBQUVDLE1BQU0sR0FBcEIsTUFBOEQsQ0FBaERBLE1BQU0sRUFBRUMsRUFBRSxHQUF4QixNQUE4RCxDQUF4Q0EsRUFBRSxFQUFFQyxLQUFLLEdBQS9CLE1BQThELENBQXBDQSxLQUFLLEVBQUVDLFFBQVEsR0FBekMsTUFBOEQsQ0FBN0JBLFFBQVEsRUFBRUMsT0FBTyxHQUFsRCxNQUE4RCxDQUFuQkEsT0FBTyxFQUFLQyxLQUFLLDRCQUE1RCxNQUE4RDtRQUE1RFAsTUFBSTtRQUFFQyxNQUFJO1FBQUVDLFFBQU07UUFBRUMsSUFBRTtRQUFFQyxPQUFLO1FBQUVDLFVBQVE7UUFBRUMsU0FBTzs7SUFFakYsSUFBTUUsR0FBRyxHQUFHLFVBQVUsR0FBRVIsSUFBSSxHQUFFLE1BQU07SUFFcENTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBQztJQUVqQixxQkFDSSw4REFBQ0csS0FBRztRQUFDQyxTQUFTLEVBQUMsTUFBTTs7MEJBQ2pCLDhEQUFDQyxNQUFJOzBCQUNELDRFQUFDZixtREFBSztvQkFDRmdCLEtBQUssRUFBRyxPQUFPO29CQUNmQyxNQUFNLEVBQUcsTUFBTTtvQkFDZkMsR0FBRyxFQUFLUixHQUFHOzs7Ozt3QkFDRjs7Ozs7b0JBQ1Y7MEJBQ1AsOERBQUNTLElBQUU7O2tDQUNDLDhEQUFDQyxJQUFFLG9CQUFjWCxLQUFLO2tDQUFJUCxJQUFJO3dCQUFyQkcsRUFBRTs7Ozs0QkFBMEI7a0NBQ3JDLDhEQUFDZSxJQUFFLG9CQUFjWCxLQUFLOzs0QkFBRSxTQUFPOzBDQUFBLDhEQUFDWSxHQUFDOzBDQUFHakIsTUFBTTs7Ozs7b0NBQU07O3dCQUF2Q0MsRUFBRTs7Ozs0QkFBMEM7a0NBQ3JELDhEQUFDZSxJQUFFLG9CQUFjWCxLQUFLOzs0QkFBRSxPQUFLOzBDQUFBLDhEQUFDWSxHQUFDOzBDQUFHbEIsSUFBSTs7Ozs7b0NBQU07O3dCQUFuQ0UsRUFBRTs7Ozs0QkFBc0M7a0NBR2pELDhEQUFDZSxJQUFFOzs0QkFBVSxxQkFBZ0I7MENBQUEsOERBQUNDLEdBQUM7MENBQUdiLE9BQU87Ozs7O29DQUFNOzt1QkFBdENILEVBQUU7Ozs7NEJBQXlDOzs7Ozs7b0JBQ25EOzs7Ozs7WUFDSCxDQUNUO0NBQ0o7QUF6QnVCSixLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3N0YXJQZW9wbGUuanN4Pzk0MmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJQZW9wbGUoeyBub21lLCBwZXNvLCBhbHR1cmEsIGlkLCBmaWxtZSwgc3RhcnNoaXAsIGRhdGFBbmksIC4uLnByb3BzIH0pIHtcblxuICAgIGNvbnN0IGltZyA9IFwiL2ltYWdlcy9cIisgbm9tZSArXCIucG5nXCI7XG5cbiAgICBjb25zb2xlLmxvZyhpbWcpO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IFwiNDg1cHhcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBcIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBzcmMgPSB7IGltZyB9XG4gICAgICAgICAgICAgICAgICAgID48L0ltYWdlPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkfSB7Li4ucHJvcHN9Pnsgbm9tZSB9PC9saT5cbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpZH0gey4uLnByb3BzfT5hbHR1cmEgPGI+eyBhbHR1cmEgfTwvYj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkfSB7Li4ucHJvcHN9PnBlc28gPGI+eyBwZXNvIH08L2I+PC9saT5cbiAgICAgICAgICAgICAgICB7LyogPGxpIGtleT17aWR9IGNsYXNzTmFtZT1cImZpbG1lXCI+RmlsbWUgPGxpPnsgZmlsbWUgfTwvbGk+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpZH0gY2xhc3NOYW1lPVwibmF2ZVwiPk5hdmUgZG8gcGVyc29uYWdlbTxsaT57IHN0YXJzaGlwIH08L2xpPjwvbGk+ICovfVxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkfT5EYXRhIEFuaXZlcnPDoXJpbzxiPnsgZGF0YUFuaSB9PC9iPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJTdGFyUGVvcGxlIiwibm9tZSIsInBlc28iLCJhbHR1cmEiLCJpZCIsImZpbG1lIiwic3RhcnNoaXAiLCJkYXRhQW5pIiwicHJvcHMiLCJpbWciLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwidWwiLCJsaSIsImIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/starPeople.jsx\n");

/***/ })

});