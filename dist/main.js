/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_testFetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/testFetch.js */ \"./src/scripts/testFetch.js\");\n/* harmony import */ var _scripts_photo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/photo.js */ \"./src/scripts/photo.js\");\n/* harmony import */ var _scripts_photo_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_photo_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n_scripts_testFetch_js__WEBPACK_IMPORTED_MODULE_0__.cleveland();\n_scripts_testFetch_js__WEBPACK_IMPORTED_MODULE_0__.harvard();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUErQztBQUNSO0FBR3ZDQSw0REFBYyxFQUFFO0FBRWhCQSwwREFBWSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdHByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBURVNUIGZyb20gJy4vc2NyaXB0cy90ZXN0RmV0Y2guanMnO1xuaW1wb3J0IFBob3RvIGZyb20gJy4vc2NyaXB0cy9waG90by5qcyc7XG5cblxuVEVTVC5jbGV2ZWxhbmQoKVxuXG5URVNULmhhcnZhcmQoKSJdLCJuYW1lcyI6WyJURVNUIiwiUGhvdG8iLCJjbGV2ZWxhbmQiLCJoYXJ2YXJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/photo.js":
/*!******************************!*\
  !*** ./src/scripts/photo.js ***!
  \******************************/
/***/ (function() {

eval("class Photo {\n  constructor(input) {\n    // { date: value, url: url }\n    this.date = input.date;\n    this.url = input.url;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9waG90by5qcy5qcyIsIm5hbWVzIjpbIlBob3RvIiwiY29uc3RydWN0b3IiLCJpbnB1dCIsImRhdGUiLCJ1cmwiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRwcm9qZWN0Ly4vc3JjL3NjcmlwdHMvcGhvdG8uanM/MGMxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQaG90byB7XG4gICAgY29uc3RydWN0b3IoaW5wdXQpe1xuICAgICAgICAvLyB7IGRhdGU6IHZhbHVlLCB1cmw6IHVybCB9XG4gICAgICAgIHRoaXMuZGF0ZSA9IGlucHV0LmRhdGVcbiAgICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICB9XG5cblxufSJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsS0FBSyxDQUFDO0VBQ1JDLFdBQVdBLENBQUNDLEtBQUssRUFBQztJQUNkO0lBQ0EsSUFBSSxDQUFDQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0MsSUFBSTtJQUN0QixJQUFJLENBQUNDLEdBQUcsR0FBR0YsS0FBSyxDQUFDRSxHQUFHO0VBQ3hCO0FBR0oifQ==\n//# sourceURL=webpack-internal:///./src/scripts/photo.js\n");

/***/ }),

/***/ "./src/scripts/testFetch.js":
/*!**********************************!*\
  !*** ./src/scripts/testFetch.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chicago\": function() { return /* binding */ chicago; },\n/* harmony export */   \"chicago2\": function() { return /* binding */ chicago2; },\n/* harmony export */   \"cleveland\": function() { return /* binding */ cleveland; },\n/* harmony export */   \"harvard\": function() { return /* binding */ harvard; }\n/* harmony export */ });\nconst harvardUrl = \"https://api.harvardartmuseums.org/object?q=totalpageviews:0&size=10&apikey=12403398-3c09-42ff-af07-f434bfd000a1\";\nconst harvard = async e => {\n  let res = await fetch(harvardUrl, {\n    headers: {\n      \"Accept\": \"application/json\"\n    }\n  });\n  console.log(res, \"response\");\n  let data = await res.json();\n  console.log(data, \"data\");\n  // console.log(data.records[0].primaryimageurl)\n  // console.log(data.response[0])\n  for (let i = 0; i < data.records.length; i++) {\n    if (data.records[i].primaryimageurl) {\n      let newImg = document.createElement(\"img\");\n      newImg.src = data.records[i].primaryimageurl;\n      document.querySelector(\"#display-element\").appendChild(newImg);\n    }\n  }\n};\n\n// things to group by: color date \n//  data.records[0].colors[0].hue\n// https://github.com/harvardartmuseums/api-docs\n\nconst clevelandURL = \"https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&limit=10\";\nconst cleveland = async e => {\n  let res = await fetch(clevelandURL, {\n    headers: {\n      \"Accept\": \"application/json\"\n    }\n  });\n  console.log(res, \"response\");\n  let data = await res.json();\n  console.log(data, \"data\");\n  console.log(data.data[0].images.web.url);\n  // console.log(data.response[0])\n  for (let i = 0; i < data.data.length; i++) {\n    if (data.data[i].images.web.url) {\n      let newImg = document.createElement(\"img\");\n      newImg.src = data.data[i].images.web.url;\n      document.querySelector(\"#display-element\").appendChild(newImg);\n    }\n  }\n};\n// no color attribute but had date in a aproxomate format\n\nconst chicagoURL = \"https://api.artic.edu/api/v1/artworks/search?q=cats/manifest.json\";\nconst chicagoURL2 = \"https://api.artic.edu/api/v1/artworks/656\";\nconst chicago2 = async url => {\n  let res = await fetch(url, {\n    headers: {\n      \"Accept\": \"application/json\"\n    }\n  });\n\n  // console.log(res, \"response\")\n  let data = await res.json();\n  // console.log(data, \"data\")\n  return data.config.iiif_url + \"/\" + data.data.image_id + \"/full/843,/0/default.jpg\";\n};\n\n// ^^to get each img link\n\nconst chicago = async e => {\n  let res = await fetch(chicagoURL, {\n    headers: {\n      \"Accept\": \"application/json\"\n    }\n  });\n  console.log(res, \"response\");\n  let data = await res.json();\n  console.log(data, \"data\");\n\n  // console.log(link)\n  for (let i = 0; i < data.data.length; i++) {\n    if (data.data[i].images.web.url) {\n      const link = await data.data[i].api_link.json();\n      let newImg = document.createElement(\"img\");\n      newImg.src = chicago2(link);\n      document.querySelector(\"#display-element\").appendChild(newImg);\n    }\n  }\n};\n\n// https://api.artic.edu/docs/#iiif-image-api//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtCLENBQUMsQ0FBQ0MsV0FBVyxDQUFDTCxNQUFNLENBQUM7SUFDbEU7RUFDSjtBQUNKLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0cHJvamVjdC8uL3NyYy9zY3JpcHRzL3Rlc3RGZXRjaC5qcz81YzhjIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgaGFydmFyZFVybCA9IFwiaHR0cHM6Ly9hcGkuaGFydmFyZGFydG11c2V1bXMub3JnL29iamVjdD9xPXRvdGFscGFnZXZpZXdzOjAmc2l6ZT0xMCZhcGlrZXk9MTI0MDMzOTgtM2MwOS00MmZmLWFmMDctZjQzNGJmZDAwMGExXCJcblxuZXhwb3J0IGNvbnN0IGhhcnZhcmQgPSBhc3luYyAoZSkgPT4ge1xuXG4gICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKGhhcnZhcmRVcmwsIHtcbiAgICAgICAgaGVhZGVyczogeyBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKHJlcywgXCJyZXNwb25zZVwiKVxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGNvbnNvbGUubG9nKGRhdGEsIFwiZGF0YVwiKVxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEucmVjb3Jkc1swXS5wcmltYXJ5aW1hZ2V1cmwpXG4gICAgLy8gY29uc29sZS5sb2coZGF0YS5yZXNwb25zZVswXSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEucmVjb3Jkcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGlmIChkYXRhLnJlY29yZHNbaV0ucHJpbWFyeWltYWdldXJsKSB7XG4gICAgICAgICAgICBsZXQgbmV3SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICAgICAgbmV3SW1nLnNyYyA9IGRhdGEucmVjb3Jkc1tpXS5wcmltYXJ5aW1hZ2V1cmxcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzcGxheS1lbGVtZW50XCIpLmFwcGVuZENoaWxkKG5ld0ltZylcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4vLyB0aGluZ3MgdG8gZ3JvdXAgYnk6IGNvbG9yIGRhdGUgXG4vLyAgZGF0YS5yZWNvcmRzWzBdLmNvbG9yc1swXS5odWVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9oYXJ2YXJkYXJ0bXVzZXVtcy9hcGktZG9jc1xuXG5jb25zdCBjbGV2ZWxhbmRVUkwgPSBcImh0dHBzOi8vb3BlbmFjY2Vzcy1hcGkuY2xldmVsYW5kYXJ0Lm9yZy9hcGkvYXJ0d29ya3MvP2hhc19pbWFnZT0xJmxpbWl0PTEwXCJcblxuZXhwb3J0IGNvbnN0IGNsZXZlbGFuZCA9IGFzeW5jIChlKSA9PiB7XG5cbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goY2xldmVsYW5kVVJMLCB7XG4gICAgICAgIGhlYWRlcnM6IHsgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfVxuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZyhyZXMsIFwicmVzcG9uc2VcIilcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBjb25zb2xlLmxvZyhkYXRhLCBcImRhdGFcIilcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGFbMF0uaW1hZ2VzLndlYi51cmwpXG4gICAgLy8gY29uc29sZS5sb2coZGF0YS5yZXNwb25zZVswXSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZGF0YS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGlmIChkYXRhLmRhdGFbaV0uaW1hZ2VzLndlYi51cmwpIHtcbiAgICAgICAgICAgIGxldCBuZXdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICAgICAgICBuZXdJbWcuc3JjID0gZGF0YS5kYXRhW2ldLmltYWdlcy53ZWIudXJsXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3BsYXktZWxlbWVudFwiKS5hcHBlbmRDaGlsZChuZXdJbWcpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbi8vIG5vIGNvbG9yIGF0dHJpYnV0ZSBidXQgaGFkIGRhdGUgaW4gYSBhcHJveG9tYXRlIGZvcm1hdFxuXG5cbmNvbnN0IGNoaWNhZ29VUkwgPSBcImh0dHBzOi8vYXBpLmFydGljLmVkdS9hcGkvdjEvYXJ0d29ya3Mvc2VhcmNoP3E9Y2F0cy9tYW5pZmVzdC5qc29uXCJcblxuY29uc3QgY2hpY2Fnb1VSTDIgPSBcImh0dHBzOi8vYXBpLmFydGljLmVkdS9hcGkvdjEvYXJ0d29ya3MvNjU2XCJcblxuZXhwb3J0IGNvbnN0IGNoaWNhZ28yID0gYXN5bmMgKHVybCkgPT4ge1xuXG4gICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBoZWFkZXJzOiB7IFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiIH1cbiAgICB9KVxuXG4gICAgLy8gY29uc29sZS5sb2cocmVzLCBcInJlc3BvbnNlXCIpXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSwgXCJkYXRhXCIpXG4gICAgcmV0dXJuIChkYXRhLmNvbmZpZy5paWlmX3VybCArIFwiL1wiICsgZGF0YS5kYXRhLmltYWdlX2lkICsgXCIvZnVsbC84NDMsLzAvZGVmYXVsdC5qcGdcIilcbn1cblxuLy8gXl50byBnZXQgZWFjaCBpbWcgbGlua1xuXG5leHBvcnQgY29uc3QgY2hpY2FnbyA9IGFzeW5jIChlKSA9PiB7XG5cbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goY2hpY2Fnb1VSTCwge1xuICAgICAgICBoZWFkZXJzOiB7IFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiIH1cbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2cocmVzLCBcInJlc3BvbnNlXCIpXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgY29uc29sZS5sb2coZGF0YSwgXCJkYXRhXCIpXG4gIFxuICAgIC8vIGNvbnNvbGUubG9nKGxpbmspXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmRhdGEubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBpZiAoZGF0YS5kYXRhW2ldLmltYWdlcy53ZWIudXJsKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gYXdhaXQgZGF0YS5kYXRhW2ldLmFwaV9saW5rLmpzb24oKVxuICAgICAgICAgICAgbGV0IG5ld0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgICAgIG5ld0ltZy5zcmMgPSBjaGljYWdvMihsaW5rKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5LWVsZW1lbnRcIikuYXBwZW5kQ2hpbGQobmV3SW1nKVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBodHRwczovL2FwaS5hcnRpYy5lZHUvZG9jcy8jaWlpZi1pbWFnZS1hcGlcblxuXG4iXSwibmFtZXMiOlsiaGFydmFyZFVybCIsImhhcnZhcmQiLCJlIiwicmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJqc29uIiwiaSIsInJlY29yZHMiLCJsZW5ndGgiLCJwcmltYXJ5aW1hZ2V1cmwiLCJuZXdJbWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJjbGV2ZWxhbmRVUkwiLCJjbGV2ZWxhbmQiLCJpbWFnZXMiLCJ3ZWIiLCJ1cmwiLCJjaGljYWdvVVJMIiwiY2hpY2Fnb1VSTDIiLCJjaGljYWdvMiIsImNvbmZpZyIsImlpaWZfdXJsIiwiaW1hZ2VfaWQiLCJjaGljYWdvIiwibGluayIsImFwaV9saW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/testFetch.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0cHJvamVjdC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;