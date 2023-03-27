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

/***/ "./node_modules/date-fns/esm/index.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/esm/index.js ***!
  \********************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/home/carlete/Odin/repos/weather-app/node_modules/date-fns/esm/index.js'\");\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/index.js?");

/***/ }),

/***/ "./src/bground.js":
/*!************************!*\
  !*** ./src/bground.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBground\": () => (/* binding */ getBground),\n/* harmony export */   \"images\": () => (/* binding */ images)\n/* harmony export */ });\nconst images = {\n    \"clearDay\": {\n        main: \"Clear\",\n        src: \"../src/assets/backgrounds/clear-day.jpg\",\n        icon: \"../src/assets/icons/clear-day.svg\"\n    },\n    \"clearNight\": {\n        main: \"Clear\",\n        src: \"../src/assets/backgrounds/clear-night.jpg\",\n        icon: \"../src/assets/icons/clear-night.svg\"\n    },\n    \"rainDay\": {\n        main: \"Rain\",\n        src: \"../src/assets/backgrounds/rain-day.jpg\",\n        icon: \"../src/assets/icons/rain.svg\"\n    },\n    \"rainNight\": {\n        main: \"Rain\",\n        src: \"../src/assets/backgrounds/rain-night.jpg\",\n        icon: \"../src/assets/icons/rain.svg\"\n    },\n    \"Thunderstorm\": {\n        main: \"Thunderstorm\",\n        src: \"../src/assets/backgrounds/thunderstorm.jpg\",\n        icon: \"../src/assets/icons/thunderstorm.svg\"\n    },\n    \"cloudsDay\": {\n        main: \"Clouds\",\n        src: \"../src/assets/backgrounds/clouds.jpg\",\n        icon: \"../src/assets/icons/clouds-day.svg\"\n    },\n    \"cloudsNight\": {\n        main: \"Clouds\",\n        src: \"../src/assets/backgrounds/clouds.jpg\",\n        icon: \"../src/assets/icons/clouds-night.svg\"\n    },\n    \"Snow\": {\n        main: \"Snow\",\n        src: \"../src/assets/backgrounds/snow.jpg\",\n        icon: \"../src/assets/icons/snow.svg\"\n    }\n};\n\nfunction getBground(data) {\n    let main = data.weather[0].main;\n    let id = data.weather[0].icon.includes(\"d\");\n\n    if (main == \"Thunderstorm\" || main == \"Snow\") {\n        setBground(main);\n        setIcon(main);\n\n    } else if(main == \"Clouds\") {\n        if(!id) {\n            setBground(\"cloudsNight\");\n            setIcon(\"cloudsNight\");\n        } else {\n            setBground(\"cloudsDay\");\n            setIcon(\"cloudsDay\");\n        }\n\n    } else if (main == \"Clear\") {\n        if(!id) {\n            setBground(\"clearNight\");\n            setIcon(\"clearNight\");\n        } else {\n            setBground(\"clearDay\");\n            setIcon(\"clearDay\");\n        }\n\n    } else if(main == \"Rain\") {\n        if (!id) {\n            setBground(\"rainNight\")\n            setIcon(\"rainNight\");\n        } else {\n            setBground(\"rainDay\");\n            setIcon(\"rainDay\");\n        }\n    }\n};\n\nfunction setBground(main) {\n    document.body.style.background = `url(${images[main].src})`;\n    document.body.style.backgroundSize = \"cover\";\n};\n\nfunction setIcon(main) {\n    const icon = document.querySelector(\".icon\")\n    icon.style.background = `url(${images[main].icon})`;\n    icon.style.backgroundRepeat = \"no-repeat\";\n    icon.style.backgroundSize = \"100%\"\n}   \n\n//# sourceURL=webpack://weather-app/./src/bground.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content),\n/* harmony export */   \"displayLoading\": () => (/* binding */ displayLoading),\n/* harmony export */   \"distributeData\": () => (/* binding */ distributeData)\n/* harmony export */ });\n/* harmony import */ var _bground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bground */ \"./src/bground.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var _five_days__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./five-days */ \"./src/five-days.js\");\n\n\n\n\n\nconst content = document.querySelector(\".content\");\n\nasync function distributeData(city) {\n    try {\n        displayLoading();\n        const data = await (0,_data__WEBPACK_IMPORTED_MODULE_1__.getWeather)(city);\n        await (0,_five_days__WEBPACK_IMPORTED_MODULE_2__.getDaysWeather)(data);\n        (0,_bground__WEBPACK_IMPORTED_MODULE_0__.getBground)(data);\n        await displayToFunctions(data)\n        displayLoading();\n    }\n    catch (err) {\n        displayLoading();\n    }\n};\n\nfunction displayToFunctions(data){\n    displayTitle(data);\n    DisplayTemp(data);\n    displayMain(data);\n    displayWind(data);\n    displayDate();\n}\n\nfunction displayTitle(data) {\n    const title = document.querySelector(\".title\");\n    title.textContent = `${data.name}, ${data.sys.country}`;\n};\n\nfunction DisplayTemp(data) {\n    const currTemp = document.querySelector(\".curr-temp\")\n    const maxTemp = document.querySelector(\".max-temp\");\n    const minTemp = document.querySelector(\".min-temp\")\n\n    currTemp.textContent = `${data.main.temp}°`;\n    maxTemp.textContent = `Max: ${data.main.temp_max}°`;\n    minTemp.textContent = `Min: ${data.main.temp_min}°`;\n}\n\nfunction displayMain(data) {\n    const main = document.querySelector(\".main\");\n    main.textContent = data.weather[0].description;\n}\n\nfunction displayWind(data) {\n    const wind = document.querySelector(\".wind\");\n    wind.textContent = `Wind: ${data.wind.speed}m/s`;\n}\n\nfunction displayDate() {\n    const day = document.querySelector(\".day\");\n    const date = document.querySelector(\".date\");\n    day.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(new Date, 'eeee');\n    date.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(new Date, \"dd/MM/yyyy\");\n\n}\n\nfunction displayLoading() {\n    let div = document.querySelector(\".loading\");\n    if(div.className.includes(\"visible\")) {\n        content.style.display = \"grid\";\n        document.querySelector(\".loading-container\").style.visibility = \"hidden\";\n        div.classList.remove(\"visible\");\n    } else{\n        content.style.display = \"none\";\n        document.querySelector(\".loading-container\").style.visibility = \"visible\";\n        div.classList.add(\"visible\");\n    }\n};\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/content.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserCity\": () => (/* binding */ getUserCity),\n/* harmony export */   \"getUserLocation\": () => (/* binding */ getUserLocation),\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n/* harmony import */ var _error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-handler */ \"./src/error-handler.js\");\n\n\n\nasync function getWeather(city) {\n    try {\n        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=12ba82103cee621b422b9bd770104e91&units=metric`);\n        if (!response.ok) {\n            (0,_error_handler__WEBPACK_IMPORTED_MODULE_1__.errorHandler)();\n        }\n        const weatherData =  await response.json();\n        return weatherData;\n    } catch(error) {\n        (0,_error_handler__WEBPACK_IMPORTED_MODULE_1__.errorHandler)();\n    }\n}\n\nasync function getUserLocation() {\n    const options = {\n        enableHighAccuracy: true,\n        timeout: 3000,\n        maximumAge: 0,\n    };\n\n    const success = async (resp) => {\n        let lat = await resp.coords.latitude;\n        let long = await resp.coords.longitude;\n        getUserCity(lat, long);\n    };\n\n    const error = (error) => { (0,_content__WEBPACK_IMPORTED_MODULE_0__.distributeData)(\"Buenos Aires\") };\n\n    navigator.geolocation.getCurrentPosition(success, error, options);\n}\n\nasync function getUserCity(lat, long) {\n    try {\n        let response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}8&lon=${long}&limit=2&appid=12ba82103cee621b422b9bd770104e91&units=metric`);\n        let data = await response.json();\n        (0,_content__WEBPACK_IMPORTED_MODULE_0__.distributeData)(data[0].name);\n    } catch (error) {\n        console.warn(error);\n        (0,_content__WEBPACK_IMPORTED_MODULE_0__.distributeData)(\"Buenos Aires\");\n    }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/data.js?");

/***/ }),

/***/ "./src/error-handler.js":
/*!******************************!*\
  !*** ./src/error-handler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"error\": () => (/* binding */ error),\n/* harmony export */   \"errorHandler\": () => (/* binding */ errorHandler)\n/* harmony export */ });\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n\n\n\nconst error = document.querySelector(\".error\");\n\n\nfunction errorHandler() {\n    _content__WEBPACK_IMPORTED_MODULE_0__.content.style.visibility = \"hidden\";\n    error.style.display = \"grid\";\n}\n\n\n//# sourceURL=webpack://weather-app/./src/error-handler.js?");

/***/ }),

/***/ "./src/five-days.js":
/*!**************************!*\
  !*** ./src/five-days.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDaysWeather\": () => (/* binding */ getDaysWeather)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n\n\nasync function getDaysWeather(data) {\n    const result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=12ba82103cee621b422b9bd770104e91&units=metric`);\n    const forecast = await result.json();\n    displayDays(forecast);\n}\n\nfunction displayDays(forecast){\n    displayOne(forecast);\n    displayTwo(forecast);\n    displayThree(forecast);\n    displayFour(forecast);\n    displayFive(forecast);\n}\n\nfunction displayOne(forecast) {\n    const date = document.querySelector(\".date-one\");\n    const main = document.querySelector(\".main-one\");\n    const max = document.querySelector(\".max-one\");\n    const pop = document.querySelector(\".pop-one\");\n\n    const day = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.addDays)(new Date(forecast.list[3].dt_txt), 1);\n    date.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(day, \"eeee dd\");\n    main.textContent = forecast.list[3].weather[0].description;\n    max.textContent = `Max: ${forecast.list[3].main.temp_max}°`;\n    pop.textContent = `Rain probability: ${forecast.list[3].pop * 100}%`;\n}\n\nfunction displayTwo(forecast) {\n    const date = document.querySelector(\".date-two\");\n    const main = document.querySelector(\".main-two\");\n    const max = document.querySelector(\".max-two\");\n    const pop = document.querySelector(\".pop-two\");\n\n    const day = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.addDays)(new Date(forecast.list[11].dt_txt), 1);\n    date.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(day, \"eeee dd\");\n    main.textContent = forecast.list[11].weather[0].description;\n    max.textContent = `Max: ${forecast.list[11].main.temp_max}°`;\n    pop.textContent = `Rain probability: ${forecast.list[11].pop * 100}%`;\n}\n\nfunction displayThree(forecast) {\n    const date = document.querySelector(\".date-three\");\n    const main = document.querySelector(\".main-three\");\n    const max = document.querySelector(\".max-three\");\n    const pop = document.querySelector(\".pop-three\");\n\n    const day = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.addDays)(new Date(forecast.list[19].dt_txt), 1);\n    date.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(day, \"eeee dd\");\n    main.textContent = forecast.list[19].weather[0].description;\n    max.textContent = `Max: ${forecast.list[19].main.temp_max}°`;\n    pop.textContent = `Rain probability: ${forecast.list[19].pop * 100}%`;\n}\n\nfunction displayFour(forecast) {\n    const date = document.querySelector(\".date-four\");\n    const main = document.querySelector(\".main-four\");\n    const max = document.querySelector(\".max-four\");\n    const pop = document.querySelector(\".pop-four\");\n\n    const day = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.addDays)(new Date(forecast.list[27].dt_txt), 1);\n    date.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(day, \"eeee dd\");\n    main.textContent = forecast.list[27].weather[0].description;\n    max.textContent = `Max: ${forecast.list[27].main.temp_max}°`;\n    pop.textContent = `Rain probability: ${forecast.list[27].pop * 100}%`;\n}\n\nfunction displayFive(forecast){\n    const date = document.querySelector(\".date-five\");\n    const main = document.querySelector(\".main-five\");\n    const max = document.querySelector(\".max-five\");\n    const pop = document.querySelector(\".pop-five\");\n\n    const day = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.addDays)(new Date(forecast.list[35].dt_txt), 1);\n    date.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(day, \"eeee dd\");\n    main.textContent = forecast.list[35].weather[0].description;\n    max.textContent = `Max: ${forecast.list[35].main.temp_max}°`;\n    pop.textContent = `Rain probability: ${forecast.list[35].pop * 100}%`;\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/five-days.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.js */ \"./src/search.js\");\n/* harmony import */ var _bground_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bground.js */ \"./src/bground.js\");\n/* harmony import */ var _five_days_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./five-days.js */ \"./src/five-days.js\");\n/* harmony import */ var _error_handler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-handler.js */ \"./src/error-handler.js\");\n\n\n\n\n\n\n\n\n\n(0,_data_js__WEBPACK_IMPORTED_MODULE_1__.getUserLocation)();\n\nsubmit.addEventListener(\"click\", () => { _search_js__WEBPACK_IMPORTED_MODULE_3__.getCity() });\n\nwindow.addEventListener(\"keydown\", (e) => {\n    if (e.keyCode == 13 && !_search_js__WEBPACK_IMPORTED_MODULE_3__.input.value == \"\"){\n        _search_js__WEBPACK_IMPORTED_MODULE_3__.getCity();\n    }\n})\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCity\": () => (/* binding */ getCity),\n/* harmony export */   \"input\": () => (/* binding */ input),\n/* harmony export */   \"submit\": () => (/* binding */ submit)\n/* harmony export */ });\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n/* harmony import */ var _error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-handler */ \"./src/error-handler.js\");\n\n\n\n\nlet input = document.querySelector(\"input\");\nlet submit = document.querySelector(\"#submit\");\n\nfunction getCity() {\n    if (_content__WEBPACK_IMPORTED_MODULE_0__.content.style.visibility = \"hidden\"){\n        _content__WEBPACK_IMPORTED_MODULE_0__.content.style.visibility = \"visible\"\n        _error_handler__WEBPACK_IMPORTED_MODULE_1__.error.style.display = \"none\";\n    }\n    if (input.validity.valueMissing) {\n        input.setCustomValidity(\"You must type a city\");\n    } else {\n        input.setCustomValidity(\"\");\n        const city = input.value;\n        (0,_content__WEBPACK_IMPORTED_MODULE_0__.distributeData)(city);\n    }\n\n    input.reportValidity();\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/search.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;