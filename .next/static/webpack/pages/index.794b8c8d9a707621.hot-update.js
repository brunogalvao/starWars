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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_starPeople__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/starPeople */ \"./src/components/starPeople.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    var cliR = param.cliR, films = param.films, nave = param.nave;\n    var _this = this;\n    console.log(cliR.results[0].films.map(function(i) {\n        return films.results;\n    }));\n    var logo = \"/images/sw_logo.png\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    width: \"497px\",\n                    height: \"194px\",\n                    src: logo\n                }, void 0, false, {\n                    fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/pages/index.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/pages/index.jsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"people\",\n                children: cliR.results.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_starPeople__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        id: item.id,\n                        nome: item.name,\n                        peso: item.mass,\n                        altura: item.height,\n                        // starship = { item.starships.map(starship => nave.results.map(item => { return ( <div> {item.name} </div> )})) }\n                        // starship = { item.starships.map( starships => nave.results.map( i => i.name )) }\n                        // starship = { item.starships }\n                        dataAni: item.birth_year\n                    }, void 0, false, {\n                        fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/pages/index.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 25\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/pages/index.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/brunogalvao/Documents/GitHub/starWars/src/pages/index.jsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUNuQjs7QUF5Q2hCLFNBQVNFLElBQUksQ0FBQyxLQUFxQixFQUFFO1FBQXJCQyxJQUFJLEdBQU4sS0FBcUIsQ0FBbkJBLElBQUksRUFBRUMsS0FBSyxHQUFiLEtBQXFCLENBQWJBLEtBQUssRUFBRUMsSUFBSSxHQUFuQixLQUFxQixDQUFOQSxJQUFJOztJQUU1Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUVKLElBQUksQ0FBQ0ssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDSixLQUFLLENBQUNLLEdBQUcsQ0FBQ0MsU0FBQUEsQ0FBQztlQUFJTixLQUFLLENBQUNJLE9BQU87S0FBQSxDQUFDLENBQUUsQ0FBQztJQUU3RCxJQUFNRyxJQUFJLEdBQUcscUJBQXFCO0lBRWxDLHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxNQUFNOzswQkFFakIsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxNQUFNOzBCQUVqQiw0RUFBQ1osbURBQUs7b0JBQ0ZhLEtBQUssRUFBRyxPQUFPO29CQUNmQyxNQUFNLEVBQUcsT0FBTztvQkFDaEJDLEdBQUcsRUFBSUwsSUFBSTs7Ozs7d0JBQ2I7Ozs7O29CQUNBOzBCQUVOLDhEQUFDQyxLQUFHO2dCQUNBQyxTQUFTLEVBQUMsUUFBUTswQkFDakJWLElBQUksQ0FBQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUNRLFNBQUFBLElBQUksRUFBSTtvQkFDdEIscUJBQ0ksOERBQUNqQiw4REFBVTt3QkFDUGtCLEVBQUUsRUFBS0QsSUFBSSxDQUFDQyxFQUFFO3dCQUNkQyxJQUFJLEVBQUtGLElBQUksQ0FBQ0csSUFBSTt3QkFDbEJDLElBQUksRUFBS0osSUFBSSxDQUFDSyxJQUFJO3dCQUNsQkMsTUFBTSxFQUFLTixJQUFJLENBQUNGLE1BQU07d0JBQ3RCLGtIQUFrSDt3QkFFbEgsbUZBQW1GO3dCQUVuRixnQ0FBZ0M7d0JBQ2hDUyxPQUFPLEVBQUtQLElBQUksQ0FBQ1EsVUFBVTs7Ozs7NkJBQzdCLENBQ0w7aUJBQ0osQ0FBQzs7Ozs7b0JBQ0E7Ozs7OztZQUVKLENBQ1Q7Q0FDSjtBQXhDdUJ2QixLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qc3g/ZDM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RhclBlb3BsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdGFyUGVvcGxlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcblxuICAgIGNvbnN0IGNsaSA9ICdodHRwczovL3N3YXBpLmRldi9hcGkvcGVvcGxlJ1xuICAgIGNvbnN0IG1vdmllID0gJ2h0dHBzOi8vc3dhcGkuZGV2L2FwaS9maWxtcydcbiAgICBjb25zdCBzdGFyc2hpcCA9ICdodHRwczovL3N3YXBpLmRldi9hcGkvc3RhcnNoaXBzLz9wYWdlPTInXG5cbiAgICBjb25zdCBjbGlSID0gYXdhaXQgZmV0Y2goY2xpKVxuICAgICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwXG4gICAgICAgIH0pXG5cbiAgICBjb25zdCBmaWxtcyA9IGF3YWl0IGZldGNoKG1vdmllKVxuICAgICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwXG4gICAgICAgIH0pXG5cbiAgICBjb25zdCBuYXZlID0gYXdhaXQgZmV0Y2goc3RhcnNoaXApXG4gICAgICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BcbiAgICAgICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBjbGlSLFxuICAgICAgICAgICAgZmlsbXMsXG4gICAgICAgICAgICBuYXZlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBjbGlSLCBmaWxtcywgbmF2ZSB9KSB7XG5cbiAgICBjb25zb2xlLmxvZyggY2xpUi5yZXN1bHRzWzBdLmZpbG1zLm1hcChpID0+IGZpbG1zLnJlc3VsdHMpICk7XG5cbiAgICBjb25zdCBsb2dvID0gXCIvaW1hZ2VzL3N3X2xvZ28ucG5nXCI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj4gXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImltYWdlcy9zd19sb2dvLnBuZ1wiIC8+ICovfVxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IFwiNDk3cHhcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBcIjE5NHB4XCJcbiAgICAgICAgICAgICAgICAgICAgc3JjID0ge2xvZ299XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVvcGxlXCI+XG4gICAgICAgICAgICAgICAge2NsaVIucmVzdWx0cy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhclBlb3BsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkID0geyBpdGVtLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21lID0geyBpdGVtLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlc28gPSB7IGl0ZW0ubWFzcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0dXJhID0geyBpdGVtLmhlaWdodCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhcnNoaXAgPSB7IGl0ZW0uc3RhcnNoaXBzLm1hcChzdGFyc2hpcCA9PiBuYXZlLnJlc3VsdHMubWFwKGl0ZW0gPT4geyByZXR1cm4gKCA8ZGl2PiB7aXRlbS5uYW1lfSA8L2Rpdj4gKX0pKSB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGFyc2hpcCA9IHsgaXRlbS5zdGFyc2hpcHMubWFwKCBzdGFyc2hpcHMgPT4gbmF2ZS5yZXN1bHRzLm1hcCggaSA9PiBpLm5hbWUgKSkgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhcnNoaXAgPSB7IGl0ZW0uc3RhcnNoaXBzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQW5pID0geyBpdGVtLmJpcnRoX3llYXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlN0YXJQZW9wbGUiLCJJbWFnZSIsIkhvbWUiLCJjbGlSIiwiZmlsbXMiLCJuYXZlIiwiY29uc29sZSIsImxvZyIsInJlc3VsdHMiLCJtYXAiLCJpIiwibG9nbyIsImRpdiIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiaXRlbSIsImlkIiwibm9tZSIsIm5hbWUiLCJwZXNvIiwibWFzcyIsImFsdHVyYSIsImRhdGFBbmkiLCJiaXJ0aF95ZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ })

});