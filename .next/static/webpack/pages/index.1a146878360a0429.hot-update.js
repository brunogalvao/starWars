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

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_starPeople__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/starPeople */ \"./src/components/starPeople.jsx\");\n/* harmony import */ var _components_starFilms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/starFilms */ \"./src/components/starFilms.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    var cliR = param.cliR, films = param.films, nave = param.nave;\n    var _this = this;\n    // console.log( cliR.results[0].films.map(i => films.results) );\n    var logo = \"/images/sw_logo.png\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    width: \"496px\",\n                    height: \"194px\",\n                    src: logo\n                }, void 0, false, {\n                    fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/pages/index.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/pages/index.jsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"People\"\n                    }, void 0, false, {\n                        fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/pages/index.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Planetas\"\n                    }, void 0, false, {\n                        fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/pages/index.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Films\"\n                    }, void 0, false, {\n                        fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/pages/index.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/pages/index.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"people\",\n                children: cliR.results.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_starPeople__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        id: item.id,\n                        nome: item.name,\n                        peso: item.mass,\n                        altura: item.height,\n                        // starship = { item.starships.map(starship => nave.results.map(item => { return ( <div> {item.name} </div> )})) }\n                        // starship = { item.starships.map( starships => nave.results.map( i => i.name )) }\n                        dataAni: item.birth_year\n                    }, void 0, false, {\n                        fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/pages/index.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 25\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/pages/index.jsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_starFilms__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: \"id\",\n                films: films.results.map(function(i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: i.title\n                    }, void 0, false, void 0, void 0);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/pages/index.jsx\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/pages/index.jsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBa0Q7QUFDRjtBQUNqQjs7QUF5Q2hCLFNBQVNHLElBQUksQ0FBQyxLQUFxQixFQUFFO1FBQXJCQyxJQUFJLEdBQU4sS0FBcUIsQ0FBbkJBLElBQUksRUFBRUMsS0FBSyxHQUFiLEtBQXFCLENBQWJBLEtBQUssRUFBRUMsSUFBSSxHQUFuQixLQUFxQixDQUFOQSxJQUFJOztJQUU1QyxnRUFBZ0U7SUFFaEUsSUFBTUMsSUFBSSxHQUFHLHFCQUFxQjtJQUVsQyxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsTUFBTTs7MEJBRWpCLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsTUFBTTswQkFDakIsNEVBQUNQLG1EQUFLO29CQUNGUSxLQUFLLEVBQUcsT0FBTztvQkFDZkMsTUFBTSxFQUFHLE9BQU87b0JBQ2hCQyxHQUFHLEVBQUlMLElBQUk7Ozs7O3dCQUNiOzs7OztvQkFDQTswQkFFTiw4REFBQ00sS0FBRzs7a0NBQ0EsOERBQUNDLElBQUU7a0NBQUMsUUFBTTs7Ozs7NEJBQUs7a0NBQ2YsOERBQUNBLElBQUU7a0NBQUMsVUFBUTs7Ozs7NEJBQUs7a0NBQ2pCLDhEQUFDQSxJQUFFO2tDQUFDLE9BQUs7Ozs7OzRCQUFLOzs7Ozs7b0JBQ1o7MEJBRU4sOERBQUNOLEtBQUc7Z0JBQ0FDLFNBQVMsRUFBQyxRQUFROzBCQUNqQkwsSUFBSSxDQUFDVyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBQUEsSUFBSSxFQUFJO29CQUN0QixxQkFDSSw4REFBQ2pCLDhEQUFVO3dCQUNQa0IsRUFBRSxFQUFLRCxJQUFJLENBQUNDLEVBQUU7d0JBQ2RDLElBQUksRUFBS0YsSUFBSSxDQUFDRyxJQUFJO3dCQUNsQkMsSUFBSSxFQUFLSixJQUFJLENBQUNLLElBQUk7d0JBQ2xCQyxNQUFNLEVBQUtOLElBQUksQ0FBQ04sTUFBTTt3QkFDdEIsa0hBQWtIO3dCQUVsSCxtRkFBbUY7d0JBRW5GYSxPQUFPLEVBQUtQLElBQUksQ0FBQ1EsVUFBVTs7Ozs7NkJBQzdCLENBQ0w7aUJBQ0osQ0FBQzs7Ozs7b0JBQ0E7MEJBRU4sOERBQUN4Qiw2REFBUztnQkFDTmlCLEVBQUUsRUFBRyxJQUFJO2dCQUNUYixLQUFLLEVBQUtBLEtBQUssQ0FBQ1UsT0FBTyxDQUFDQyxHQUFHLENBQUVVLFNBQUFBLENBQUMsRUFBSTtvQkFDOUIscUJBQ0ksOERBQUNsQixLQUFHO2tDQUNIa0IsQ0FBQyxDQUFDQyxLQUFLO3FEQUNGLENBQ1Q7aUJBQUMsQ0FBRTs7Ozs7b0JBQ1Q7Ozs7OztZQUVELENBQ1Q7Q0FDSjtBQXREdUJ4QixLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qc3g/ZDM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RhclBlb3BsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdGFyUGVvcGxlXCI7XG5pbXBvcnQgU3RhckZpbG1zIGZyb20gXCIuLi9jb21wb25lbnRzL3N0YXJGaWxtc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG5cbiAgICBjb25zdCBjbGkgPSAnaHR0cHM6Ly9zd2FwaS5kZXYvYXBpL3Blb3BsZSdcbiAgICBjb25zdCBtb3ZpZSA9ICdodHRwczovL3N3YXBpLmRldi9hcGkvZmlsbXMnXG4gICAgY29uc3Qgc3RhcnNoaXAgPSAnaHR0cHM6Ly9zd2FwaS5kZXYvYXBpL3N0YXJzaGlwcy8/cGFnZT0yJ1xuXG4gICAgY29uc3QgY2xpUiA9IGF3YWl0IGZldGNoKGNsaSlcbiAgICAgICAgLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcFxuICAgICAgICB9KVxuXG4gICAgY29uc3QgZmlsbXMgPSBhd2FpdCBmZXRjaChtb3ZpZSlcbiAgICAgICAgLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcFxuICAgICAgICB9KVxuXG4gICAgY29uc3QgbmF2ZSA9IGF3YWl0IGZldGNoKHN0YXJzaGlwKVxuICAgICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwXG4gICAgICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgY2xpUixcbiAgICAgICAgICAgIGZpbG1zLFxuICAgICAgICAgICAgbmF2ZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgY2xpUiwgZmlsbXMsIG5hdmUgfSkge1xuXG4gICAgLy8gY29uc29sZS5sb2coIGNsaVIucmVzdWx0c1swXS5maWxtcy5tYXAoaSA9PiBmaWxtcy5yZXN1bHRzKSApO1xuXG4gICAgY29uc3QgbG9nbyA9IFwiL2ltYWdlcy9zd19sb2dvLnBuZ1wiO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+IFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBcIjQ5NnB4XCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gXCIxOTRweFwiXG4gICAgICAgICAgICAgICAgICAgIHNyYyA9IHtsb2dvfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8bGk+UGVvcGxlPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+UGxhbmV0YXM8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5GaWxtczwvbGk+XG4gICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlb3BsZVwiPlxuICAgICAgICAgICAgICAgIHtjbGlSLnJlc3VsdHMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJQZW9wbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA9IHsgaXRlbS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tZSA9IHsgaXRlbS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXNvID0geyBpdGVtLm1hc3MgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdHVyYSA9IHsgaXRlbS5oZWlnaHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXJzaGlwID0geyBpdGVtLnN0YXJzaGlwcy5tYXAoc3RhcnNoaXAgPT4gbmF2ZS5yZXN1bHRzLm1hcChpdGVtID0+IHsgcmV0dXJuICggPGRpdj4ge2l0ZW0ubmFtZX0gPC9kaXY+ICl9KSkgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhcnNoaXAgPSB7IGl0ZW0uc3RhcnNoaXBzLm1hcCggc3RhcnNoaXBzID0+IG5hdmUucmVzdWx0cy5tYXAoIGkgPT4gaS5uYW1lICkpIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFBbmkgPSB7IGl0ZW0uYmlydGhfeWVhciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPFN0YXJGaWxtc1xuICAgICAgICAgICAgICAgIGlkID0gXCJpZFwiXG4gICAgICAgICAgICAgICAgZmlsbXMgPSB7IGZpbG1zLnJlc3VsdHMubWFwKCBpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfSApIH1cbiAgICAgICAgICAgICAvPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJTdGFyUGVvcGxlIiwiU3RhckZpbG1zIiwiSW1hZ2UiLCJIb21lIiwiY2xpUiIsImZpbG1zIiwibmF2ZSIsImxvZ28iLCJkaXYiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsIm5hdiIsImxpIiwicmVzdWx0cyIsIm1hcCIsIml0ZW0iLCJpZCIsIm5vbWUiLCJuYW1lIiwicGVzbyIsIm1hc3MiLCJhbHR1cmEiLCJkYXRhQW5pIiwiYmlydGhfeWVhciIsImkiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ })

});