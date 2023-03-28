/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/common.js":
/*!**********************!*\
  !*** ./js/common.js ***!
  \**********************/
/***/ (() => {

eval("/**\n * アドレスバーを含まない純粋な表示領域を取得、cssプロパティに設定\n */\nvar setFillHeight = function setFillHeight() {\n  var vh = window.innerHeight * 0.01;\n  document.documentElement.style.setProperty('--vh', \"\".concat(vh, \"px\"));\n  console.log('init');\n};\n\n/**\n * 初期発火関数をまとめる\n */\nvar init = function init() {\n  setFillHeight();\n};\ninit();\n\n//# sourceURL=webpack://aurola/./js/common.js?");

/***/ }),

/***/ "./js/contact.js":
/*!***********************!*\
  !*** ./js/contact.js ***!
  \***********************/
/***/ (() => {

eval("console.log('contact');\n\n//# sourceURL=webpack://aurola/./js/contact.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./js/common.js\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _top__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top */ \"./js/top.js\");\n/* harmony import */ var _top__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_top__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./js/contact.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://aurola/./js/index.js?");

/***/ }),

/***/ "./js/top.js":
/*!*******************!*\
  !*** ./js/top.js ***!
  \*******************/
/***/ (() => {

eval("// console.log('top');$(function () {\n//   const isSp = window.innerWidth <= 650 ? true : false;\n\n//   // 全体のアニメーション構成に影響範囲が大きいため、pc,spで完全に切り分ける\n//   if (!isSp) {\n//     const controller = new ScrollMagic();\n\n//     new ScrollScene({\n//       triggerElement: \"#p-concept\",\n//       triggerHook: 1,\n//       duration: window.innerHeight * .5,\n//     }).on(\"progress\", (prog) => {\n//       const p = prog.progress;\n//       $(\"#p-hero__contents\").css({\n//         opacity: 1 - (1 * p)\n//       });\n//     }).addTo(controller);\n\n//     new ScrollScene({\n//       triggerElement: \"#p-concept\",\n//       duration: window.innerHeight * 2.5,\n//       triggerHook: \"onLeave\",\n//     }).setPin(\"#p-concept\").addTo(controller);\n\n//     new ScrollScene({\n//       triggerElement: \"#p-concept\",\n//       triggerHook: 0,\n//       duration: window.innerHeight,\n//     }).on(\"progress\", (prog) => {\n//       const p = prog.progress;\n//       $(\"#p-concept__image\").css({\n//         transform: `translate(${100 - p*100}%, 0)`\n//       });\n//     }).addTo(controller);\n\n//     new ScrollScene({\n//       triggerElement: \"#p-concept\",\n//       duration: window.innerHeight * .8,\n//     }).on(\"progress\", (prog) => {\n//       const p = prog.progress;\n//       $(\"#p-concept__inner\").css({\n//         opacity: (1 * p)\n//       });\n//     }).addTo(controller);\n\n//     new ScrollScene({\n//       triggerElement: \"#p-detail\",\n//       triggerHook: 1,\n//       offset: -(window.innerHeight * .4),\n//       duration: window.innerHeight * .4,\n//     }).on(\"progress\", (prog) => {\n//       const p = prog.progress;\n//       console.log(p)\n//       $(\"#p-concept__contents\").css({\n//         opacity: 1 - (1 * p)\n//       });\n//       $(\"#p-concept__image\").css({\n//         opacity: 1 - (1 * p)\n//       });\n//     }).addTo(controller);\n\n//     new ScrollScene({\n//       triggerElement: \"#p-detail\",\n//       duration: window.innerHeight * 2.3,\n//       triggerHook: \"onLeave\",\n//     }).setPin(\"#p-detail\").addTo(controller);\n\n//     new ScrollScene({\n//       triggerElement: \"#p-detail\",\n//       offset: window.innerHeight * .7,\n//       duration: window.innerHeight * .6,\n//     }).on(\"progress\", (prog) => {\n//       const p = prog.progress;\n//       $(\"#p-detail__image01\").css({\n//         opacity: (1 * p)\n//       });\n//       $(\"#p-detail__image02\").css({\n//         opacity: (1 * p)\n//       });\n//     }).addTo(controller);\n\n//     new ScrollScene({\n//       triggerElement: \"#p-detail\",\n//       offset: window.innerHeight * .6,\n//       duration: window.innerHeight,\n//     }).on(\"progress\", (prog) => {\n//       const p = prog.progress;\n//       $(\"#p-detail__head01\").css({\n//         opacity: (1 * p)\n//       });\n//       $(\"#p-detail__wat01\").css({\n//         opacity: (1 * p)\n//       });\n//       $(\"#p-detail__text01\").css({\n//         opacity: (1 * p)\n//       });\n//       $(\"#p-detail__head01\").css({\n//         transform: `translate(0, ${1 - p}rem)`\n//       });\n//       $(\"#p-detail__wat01\").css({\n//         transform: `translate(0, ${1 - p}rem)`\n//       });\n//       $(\"#p-detail__text01\").css({\n//         transform: `translate(0, ${1 - p}rem)`\n//       });\n//       $(\"#p-detail__head02\").css({\n//         opacity: (1 * p)\n//       });\n//       $(\"#p-detail__wat02\").css({\n//         opacity: (1 * p)\n//       });\n//       $(\"#p-detail__text02\").css({\n//         opacity: (1 * p)\n//       });\n//       $(\"#p-detail__head02\").css({\n//         transform: `translate(0, ${1 - p}rem)`\n//       });\n//       $(\"#p-detail__wat02\").css({\n//         transform: `translate(0, ${1 - p}rem)`\n//       });\n//       $(\"#p-detail__text02\").css({\n//         transform: `translate(0, ${1 - p}rem)`\n//       });\n//     }).addTo(controller);\n\n//     new ScrollScene({\n//       triggerElement: \"#p-detail\",\n//       offset: window.innerHeight * 2,\n//       duration: window.innerHeight * .4,\n//     }).on(\"progress\", (prog) => {\n//       const p = prog.progress;\n//       $(\"#p-detail__cover\").css({\n//         opacity: (1 * p)\n//       });\n//     }).addTo(controller);\n\n//     new ScrollScene({\n//       triggerElement: \"#p-feature__contents\",\n//       duration: window.innerHeight * 4,\n//       triggerHook: 0,\n//       triggerHook: \"onLeave\",\n//     }).setPin(\"#p-feature__contents\").addTo(controller);\n\n//     new ScrollScene({\n//       triggerElement: \"#p-feature__contents\",\n//       duration: window.innerHeight * 4,\n//       triggerHook: 0,\n//       triggerHook: \"onLeave\",\n//     }).setPin(\"#p-detail__cover\").addTo(controller);\n\n//     new ScrollScene({\n//       triggerElement: \"#p-feature__contents\",\n//       duration: window.innerHeight * 4,\n//       triggerHook: 0,\n//       triggerHook: \"onLeave\",\n//     }).setPin(\"#p-point\").addTo(controller);\n\n//     new ScrollScene({\n//       triggerElement: \"#p-feature__contents\",\n//       triggerHook: 0,\n//       duration: window.innerHeight * .5,\n//     }).on(\"progress\", (prog) => {\n//       const p = prog.progress;\n//       $(\"#p-feature__headArea\").css({\n//         opacity: (1 * p)\n//       });\n//     }).addTo(controller);\n\n//     new ScrollScene({\n//       triggerElement: \"#p-feature__contents\",\n//       triggerHook: 0,\n//       offset: window.innerHeight * .5,\n//       duration: window.innerHeight * .6,\n//     }).on(\"progress\", (prog) => {\n//       const p = prog.progress;\n//       $(\"#p-feature__iconItem01\").css({\n//         opacity: (1 * p)\n//       });\n//       $(\"#p-feature__iconItem01\").css({\n//         transform: `translate(0, ${1 - p}rem)`\n//       });\n\n//     }).addTo(controller);\n//     new ScrollScene({\n//       triggerElement: \"#p-feature__contents\",\n//       triggerHook: 0,\n//       offset: window.innerHeight * 1,\n//       duration: window.innerHeight * .6,\n//     }).on(\"progress\", (prog) => {\n//       const p = prog.progress;\n//       $(\"#p-feature__iconItem02\").css({\n//         opacity: (1 * p)\n//       });\n//       $(\"#p-feature__iconItem02\").css({\n//         transform: `translate(0, ${1 - p}rem)`\n//       });\n\n//     }).addTo(controller);\n//     new ScrollScene({\n//       triggerElement: \"#p-feature__contents\",\n//       triggerHook: 0,\n//       offset: window.innerHeight * 1.5,\n//       duration: window.innerHeight * .6,\n//     }).on(\"progress\", (prog) => {\n//       const p = prog.progress;\n//       $(\"#p-feature__iconItem03\").css({\n//         opacity: (1 * p)\n//       });\n//       $(\"#p-feature__iconItem03\").css({\n//         transform: `translate(0, ${1 - p}rem)`\n//       });\n\n//     }).addTo(controller);\n\n//     new ScrollScene({\n//       triggerElement: \"#p-feature__contents\",\n//       triggerHook: 0,\n//       offset: window.innerHeight * 3,\n//       duration: window.innerHeight * .5,\n//     }).on(\"progress\", (prog) => {\n//       const p = prog.progress;\n//       $(\"#p-feature__iconItem01\").css({\n//         opacity: (1 - 1 * p)\n//       });\n//       $(\"#p-feature__iconItem01\").css({\n//         transform: `translate(0, ${-p}rem)`\n//       });\n//       $(\"#p-feature__iconItem02\").css({\n//         opacity: (1 - 1 * p)\n//       });\n//       $(\"#p-feature__iconItem02\").css({\n//         transform: `translate(0, ${-p}rem)`\n//       });\n//       $(\"#p-feature__iconItem03\").css({\n//         opacity: (1 - 1 * p)\n//       });\n//       $(\"#p-feature__iconItem03\").css({\n//         transform: `translate(0, ${-p}rem)`\n//       });\n//       $(\"#p-feature__headArea\").css({\n//         opacity: (1 - 1 * p)\n//       });\n//     }).addTo(controller);\n\n//     new ScrollScene({\n//       triggerElement: \"#p-feature__contents\",\n//       triggerHook: 0,\n//       offset: window.innerHeight * 3.7,\n//       duration: window.innerHeight * .5,\n//     }).on(\"progress\", (prog) => {\n//       const p = prog.progress;\n//       // $(\"#p-detail__cover\").css({opacity: (1- 1*p)});\n//     }).addTo(controller);\n\n//     new ScrollScene({\n//       triggerElement: \"#p-feature__contents\",\n//       triggerHook: 0,\n//       offset: window.innerHeight * 4.1,\n//       duration: window.innerHeight * .35,\n//     }).on(\"progress\", (prog) => {\n//       const p = prog.progress;\n//       $(\"#p-point\").css({\n//         opacity: (1 * p)\n//       });\n//     }).addTo(controller);\n\n//     const pointImage01 = TweenMax.fromTo(\"#p-point__image01\", .5, {\n//       opacity: '0'\n//     }, {\n//       opacity: '1'\n//     });\n//     new ScrollScene({\n//       triggerElement: \"#p-point__image01\",\n//       triggerHook: 0.8,\n//     }).setTween(pointImage01).addTo(controller);\n\n//     const pointImage02 = TweenMax.fromTo(\"#p-point__image02\", .5, {\n//       opacity: '0'\n//     }, {\n//       opacity: '1'\n//     });\n//     new ScrollScene({\n//       triggerElement: \"#p-point__image02\",\n//       triggerHook: 0.8,\n//     }).setTween(pointImage02).addTo(controller);\n\n//     const pointImage03 = TweenMax.fromTo(\"#p-point__image03\", .5, {\n//       opacity: '0'\n//     }, {\n//       opacity: '1'\n//     });\n//     new ScrollScene({\n//       triggerElement: \"#p-point__image03\",\n//       triggerHook: 0.8,\n//     }).setTween(pointImage03).addTo(controller);\n\n//     const pointImage04 = TweenMax.fromTo(\"#p-point__image04\", .5, {\n//       opacity: '0'\n//     }, {\n//       opacity: '1'\n//     });\n//     new ScrollScene({\n//       triggerElement: \"#p-point__image04\",\n//       triggerHook: 0.8,\n//     }).setTween(pointImage04).addTo(controller);\n\n//     const pointFrame01 = TweenMax.fromTo(\"#p-point__frameInner01\", .5, {\n//       opacity: '0',\n//       transform: 'translate(1rem, 0)'\n//     }, {\n//       opacity: '1',\n//       transform: 'translate(0, 0)'\n//     });\n//     new ScrollScene({\n//       triggerElement: \"#p-point__frameInner01\",\n//       triggerHook: 0.8,\n//     }).setTween(pointFrame01).addTo(controller);\n\n//     const pointFrame02 = TweenMax.fromTo(\"#p-point__frameInner02\", .5, {\n//       opacity: '0',\n//       transform: 'translate(-1rem, 0)'\n//     }, {\n//       opacity: '1',\n//       transform: 'translate(0, 0)'\n//     });\n//     new ScrollScene({\n//       triggerElement: \"#p-point__frameInner02\",\n//       triggerHook: 0.8,\n//     }).setTween(pointFrame02).addTo(controller);\n\n//     const pointFrame03 = TweenMax.fromTo(\"#p-point__frameInner03\", .5, {\n//       opacity: '0',\n//       transform: 'translate(1rem, 0)'\n//     }, {\n//       opacity: '1',\n//       transform: 'translate(0, 0)'\n//     });\n//     new ScrollScene({\n//       triggerElement: \"#p-point__frameInner03\",\n//       triggerHook: 0.8,\n//     }).setTween(pointFrame03).addTo(controller);\n\n//     const pointFrame04 = TweenMax.fromTo(\"#p-point__frameInner04\", .5, {\n//       opacity: '0',\n//       transform: 'translate(-1rem, 0)'\n//     }, {\n//       opacity: '1',\n//       transform: 'translate(0, 0)'\n//     });\n//     new ScrollScene({\n//       triggerElement: \"#p-point__frameInner04\",\n//       triggerHook: 0.8,\n//     }).setTween(pointFrame04).addTo(controller);\n\n//   }\n// });\n\n//# sourceURL=webpack://aurola/./js/top.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;