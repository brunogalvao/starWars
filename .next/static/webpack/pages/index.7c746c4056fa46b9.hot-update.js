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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StarPeople; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\n\n\nfunction StarPeople(_param) {\n    var nome = _param.nome, peso = _param.peso, altura = _param.altura, id = _param.id, filme = _param.filme, starship = _param.starship, dataAni = _param.dataAni, props = _objectWithoutProperties(_param, [\n        \"nome\",\n        \"peso\",\n        \"altura\",\n        \"id\",\n        \"filme\",\n        \"starship\",\n        \"dataAni\"\n    ]);\n    var img = \"/images/people/\" + nome + \".png\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    width: \"485px\",\n                    height: \"100%\",\n                    src: img.replace(\" \", \"\").replace(\" \", \"\")\n                }, void 0, false, {\n                    fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"label\",\n                                children: \"Nome\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 21\n                            }, this),\n                            nome\n                        ]\n                    }, id, true, {\n                        fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"person\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"label\",\n                                        children: \"Altura\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 25\n                                    }, this),\n                                    altura\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"label\",\n                                        children: \"Peso\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 25\n                                    }, this),\n                                    peso\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, id, true, {\n                        fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"label\",\n                                children: \"Data de Nascimento\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, this),\n                            dataAni\n                        ]\n                    }, id, true, {\n                        fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/components/starPeople.jsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n};\n_c = StarPeople;\nvar _c;\n$RefreshReg$(_c, \"StarPeople\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zdGFyUGVvcGxlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRWYsU0FBU0MsVUFBVSxDQUFDLE1BQThELEVBQUU7UUFBOURDLElBQUksR0FBTixNQUE4RCxDQUE1REEsSUFBSSxFQUFFQyxJQUFJLEdBQVosTUFBOEQsQ0FBdERBLElBQUksRUFBRUMsTUFBTSxHQUFwQixNQUE4RCxDQUFoREEsTUFBTSxFQUFFQyxFQUFFLEdBQXhCLE1BQThELENBQXhDQSxFQUFFLEVBQUVDLEtBQUssR0FBL0IsTUFBOEQsQ0FBcENBLEtBQUssRUFBRUMsUUFBUSxHQUF6QyxNQUE4RCxDQUE3QkEsUUFBUSxFQUFFQyxPQUFPLEdBQWxELE1BQThELENBQW5CQSxPQUFPLEVBQUtDLEtBQUssNEJBQTVELE1BQThEO1FBQTVEUCxNQUFJO1FBQUVDLE1BQUk7UUFBRUMsUUFBTTtRQUFFQyxJQUFFO1FBQUVDLE9BQUs7UUFBRUMsVUFBUTtRQUFFQyxTQUFPOztJQUVqRixJQUFNRSxHQUFHLEdBQUcsaUJBQWlCLEdBQUVSLElBQUksR0FBRSxNQUFNO0lBRTNDLHFCQUNJLDhEQUFDUyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxNQUFNOzswQkFDakIsOERBQUNDLE1BQUk7MEJBQ0QsNEVBQUNiLG1EQUFLO29CQUNGYyxLQUFLLEVBQUcsT0FBTztvQkFDZkMsTUFBTSxFQUFHLE1BQU07b0JBQ2ZDLEdBQUcsRUFBS04sR0FBRyxDQUFDTyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDQSxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQzs7Ozs7d0JBQ3BDOzs7OztvQkFDVjswQkFDUCw4REFBQ0MsSUFBRTs7a0NBQ0MsOERBQUNDLElBQUU7OzBDQUVDLDhEQUFDUixLQUFHO2dDQUFDQyxTQUFTLEVBQUMsT0FBTzswQ0FBQyxNQUFJOzs7OztvQ0FBTTs0QkFDL0JWLElBQUk7O3VCQUZERyxFQUFFOzs7OzRCQUdOO2tDQUVMLDhEQUFDYyxJQUFFO3dCQUVDUCxTQUFTLEVBQUMsUUFBUTs7MENBQ2xCLDhEQUFDRCxLQUFHOztrREFDQSw4REFBQ0EsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLE9BQU87a0RBQUMsUUFBTTs7Ozs7NENBQU07b0NBQ2pDUixNQUFNOzs7Ozs7b0NBQ047MENBQ04sOERBQUNPLEtBQUc7O2tEQUNBLDhEQUFDQSxLQUFHO3dDQUFDQyxTQUFTLEVBQUMsT0FBTztrREFBQyxNQUFJOzs7Ozs0Q0FBTTtvQ0FDL0JULElBQUk7Ozs7OztvQ0FDSjs7dUJBVERFLEVBQUU7Ozs7NEJBVU47a0NBRUwsOERBQUNjLElBQUU7OzBDQUNDLDhEQUFDUixLQUFHO2dDQUFDQyxTQUFTLEVBQUMsT0FBTzswQ0FBQyxvQkFBa0I7Ozs7O29DQUFNOzRCQUM3Q0osT0FBTzs7dUJBRkpILEVBQUU7Ozs7NEJBR047Ozs7OztvQkFDSjs7Ozs7O1lBQ0gsQ0FDVDtDQUNKO0FBeEN1QkosS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zdGFyUGVvcGxlLmpzeD85NDJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFyUGVvcGxlKHsgbm9tZSwgcGVzbywgYWx0dXJhLCBpZCwgZmlsbWUsIHN0YXJzaGlwLCBkYXRhQW5pLCAuLi5wcm9wcyB9KSB7XG5cbiAgICBjb25zdCBpbWcgPSBcIi9pbWFnZXMvcGVvcGxlL1wiKyBub21lICtcIi5wbmdcIjtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBcIjQ4NXB4XCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gXCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjID0geyBpbWcucmVwbGFjZSgnICcsICcnKS5yZXBsYWNlKCcgJywgJycpIH1cbiAgICAgICAgICAgICAgICAgICAgPjwvSW1hZ2U+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFiZWwnPk5vbWU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgeyBub21lIH1cbiAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcnNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhYmVsJz5BbHR1cmE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYWx0dXJhIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFiZWwnPlBlc288L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcGVzbyB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYWJlbCc+RGF0YSBkZSBOYXNjaW1lbnRvPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsgZGF0YUFuaSB9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlN0YXJQZW9wbGUiLCJub21lIiwicGVzbyIsImFsdHVyYSIsImlkIiwiZmlsbWUiLCJzdGFyc2hpcCIsImRhdGFBbmkiLCJwcm9wcyIsImltZyIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsInJlcGxhY2UiLCJ1bCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/starPeople.jsx\n");

/***/ })

});