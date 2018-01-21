webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Conversion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConversionService = (function () {
    function ConversionService(http) {
        this.http = http;
    }
    ConversionService.prototype.getFullTicker = function () {
        return this.http.get('https://poloniex.com/public?command=returnTicker')
            .map(function (response) { return response.json(); });
    }; // Get Current Ticker
    ConversionService.prototype.getFullCurrencyExchange = function () {
        return this.http.get('https://api.fixer.io/latest?base=USD')
            .map(function (response) { return response.json(); });
    };
    ConversionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], ConversionService);
    return ConversionService;
    var _a;
}());
//# sourceMappingURL=Conversion.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-contents></app-contents>\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,500);", ""]);

// module
exports.push([module.i, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline; }\n\nhtml {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ncaption, th, td {\n  text-align: left;\n  font-weight: normal;\n  vertical-align: middle; }\n\nq, blockquote {\n  quotes: none; }\n  q:before, q:after, blockquote:before, blockquote:after {\n    content: \"\";\n    content: none; }\n\na img {\n  border: none; }\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n  display: block; }\n\n@-webkit-keyframes fade {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes explanation {\n  0% {\n    opacity: 0.00; }\n  100% {\n    opacity: 1; } }\n\n@keyframes explanation {\n  0% {\n    opacity: 0.00; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes amountincrease {\n  0% { }\n  50% {\n    background-color: #34993C;\n    border-color: #34993C;\n    opacity: 0.5; }\n  100% {\n    background-color: #ffffff;\n    border-color: #2e2e2e; } }\n\n@keyframes amountincrease {\n  0% { }\n  50% {\n    background-color: #34993C;\n    border-color: #34993C;\n    opacity: 0.5; }\n  100% {\n    background-color: #ffffff;\n    border-color: #2e2e2e; } }\n\n@-webkit-keyframes amountdecrease {\n  0% { }\n  50% {\n    background-color: #993A2F;\n    border-color: #993A2F;\n    opacity: 0.5; }\n  100% {\n    background-color: #ffffff;\n    border-color: #2e2e2e; } }\n\n@keyframes amountdecrease {\n  0% { }\n  50% {\n    background-color: #993A2F;\n    border-color: #993A2F;\n    opacity: 0.5; }\n  100% {\n    background-color: #ffffff;\n    border-color: #2e2e2e; } }\n\n@-webkit-keyframes nameincrease {\n  0% { }\n  50% {\n    background-color: #34993C;\n    border-color: #34993C;\n    opacity: 0.5; }\n  100% {\n    background-color: #2e2e2e;\n    border-color: #2e2e2e; } }\n\n@keyframes nameincrease {\n  0% { }\n  50% {\n    background-color: #34993C;\n    border-color: #34993C;\n    opacity: 0.5; }\n  100% {\n    background-color: #2e2e2e;\n    border-color: #2e2e2e; } }\n\n@-webkit-keyframes namedecrease {\n  0% { }\n  50% {\n    background-color: #993A2F;\n    border-color: #993A2F;\n    opacity: 0.5; }\n  100% {\n    background-color: #2e2e2e;\n    border-color: #2e2e2e; } }\n\n@keyframes namedecrease {\n  0% { }\n  50% {\n    background-color: #993A2F;\n    border-color: #993A2F;\n    opacity: 0.5; }\n  100% {\n    background-color: #2e2e2e;\n    border-color: #2e2e2e; } }\n\n@-webkit-keyframes fadeHalf {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 0.2; } }\n\n@keyframes fadeHalf {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 0.2; } }\n\n@-webkit-keyframes floatinLeft {\n  0% {\n    opacity: 0;\n    margin-left: -5em; }\n  100% {\n    opacity: 1;\n    margin-left: 0em; } }\n\n@keyframes floatinLeft {\n  0% {\n    opacity: 0;\n    margin-left: -5em; }\n  100% {\n    opacity: 1;\n    margin-left: 0em; } }\n\n@-webkit-keyframes floatin {\n  0% {\n    opacity: 0;\n    margin-top: 10em; }\n  100% {\n    opacity: 1;\n    margin-top: 0em; } }\n\n@keyframes floatin {\n  0% {\n    opacity: 0;\n    margin-top: 10em; }\n  100% {\n    opacity: 1;\n    margin-top: 0em; } }\n\nbody {\n  max-width: 80em;\n  margin-left: auto;\n  margin-right: auto;\n  margin: 0px;\n  font-size: 18px;\n  background: #ffffff; }\n  body:after {\n    content: \" \";\n    display: block;\n    clear: both; }\n\nh1 {\n  font: 500 2em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n\nh2 {\n  font: 400 1.25em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n\nh3 {\n  font: 400 1em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n\ni {\n  font-family: \"Material Icons\"; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    } //Creates a conversionService object so we can call the GetTickerMethod from the service.
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}()); //export class
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_Conversion_service__ = __webpack_require__("../../../../../src/app/Conversion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contents_contents_component__ = __webpack_require__("../../../../../src/app/contents/contents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__filterName_pipe__ = __webpack_require__("../../../../../src/app/filterName.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__contents_contents_component__["a" /* ContentsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__filterName_pipe__["a" /* FilterName */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5_app_Conversion_service__["a" /* ConversionService */], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contents/contents.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Content -->\r\n<section class=\"contents sticky\">\r\n\t<!-- Instructions -->\r\n\t<div class=\"instructions\">\r\n\r\n\t\t<p><span>Welcome to Cryptocheck</span>, \r\n\t\t\t<br> \r\n\t\t\t\tThis application is <span>a free to use tool </span> for monitoring the current value of your crypocurrency and what your holdings can translate to.\t<br><br>\r\n\t\t\t\t<!--><span>Note:</span> Cryptocheck is adding support for all currencies, If your coin is not supported please <span><a href=\"sales@cryptocheck.io\">let us know</a></span> and we will add it.<-->\r\n\t\t</p>\r\n\t\t<hr>\r\n\t</div>\r\n\t<!-- Step One -->\r\n<form class=\"steps\">\r\n\t<!--><p>Check the value of your currency, <span>follow these three steps</span>:</p>-->\r\n\t<div class=\"stepOne\">\r\n\t\t<h1>Step 1 <span>-</span> </h1>\r\n\t\t<h2>Choose A Currency Type</h2>\r\n\t\t<div class=\"selectionWrapper\">\r\n\t\t\t<div class=\"crypocurrencywrapper\">\r\n\t\t\t\t<div class=\"cryptoCurrency\" (click)=\"cryptoSelected = true; regSelected = false; reset()\" [ngClass]=\"{active: cryptoSelected}\">\r\n\t\t\t\t\t\t<img src=\"../../assets/images/cryptocurrency.png\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"regularcurrencywrapper\">\r\n\t\t\t\t<div class=\"regularCurrency\" (click)=\"regSelected = true; cryptoSelected = false; reset()\" [ngClass]=\"{active: regSelected}\">\r\n\t\t\t\t\t\t<img src=\"../../assets/images/regularcurrency.png\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- Step Two -->\r\n\t<div class=\"stepTwo\" [ngClass]=\"{Active: regSelected || cryptoSelected}\">\r\n\t\t<h1>Step 2 <span>-</span> </h1>\r\n\t\t<h2>Choose A Currency</h2>\r\n\t\t<!-- placeholder-->\r\n\t\t<select name=\"cryptocurrency\" class=\"stepTwoDropdown\" disabled *ngIf=\"!cryptoSelected && !regSelected\">\r\n\t\r\n\t\t</select>\r\n\t\t<!-- If Crypto Currency checked in Step 1 -->\r\n\r\n\t\t<select name=\"cryptocurrency\" class=\"stepTwoDropdown\" *ngIf=\"cryptoSelected\" [(ngModel)]=\"step2Selection\" >\r\n\r\n\t\t\t<option \r\n\t\t\t*ngFor=\"let step2AOption of step2AOptions\" \r\n\t\t\tvalue=\"{{step2AOption.name}}\">\r\n\t\t\t\t{{step2AOption.name}}\r\n\t\t\t</option>\r\n\t\t</select>\r\n\t\t<!-- If Regular Currency selected in Step 1 -->\r\n\r\n\t\t<select name=\"regcurrency\" class=\"stepTwoDropdown\" *ngIf=\"regSelected\" [(ngModel)]=\"step2Selection\">\r\n\r\n\t\t\t<option *ngFor=\"let step2BOption of step2BOptions\">{{step2BOption.name}}</option>\r\n\t\t</select>\r\n\t</div>\r\n\t<!-- Step Three -->\r\n\t<div class=\"stepThree\" [ngClass]=\"{Active: step2Selection}\">\r\n\t\t<h1>Step 3 <span>-</span> </h1><h2>Input Amount of Coins or Currency Value</h2>\r\n\t\t<input *ngIf=\"!step2Selection\" type=\"text\" name=\"holdings\" class=\"stepThreeInput\" placeholder=\"\" disabled>\r\n\t\t<input *ngIf=\"step2Selection\"type=\"text\" name=\"holdings\" class=\"stepThreeInput\" placeholder=\"enter your holdings...\" [(ngModel)]=\"holdings\">\r\n\t</div>\t\r\n</form>\r\n\r\n</section>\r\n\r\n<section class=\"results\" *ngIf=\"holdings\">\r\n\t<div class=\"whatyouhave\">\r\n\t\t<div class=\"pinningInstructions\" (click)=\"instructions = !instructions; instructionsToggle()\">\r\n\t\t\t<i class=\"material-icons\">gps_not_fixed</i>\r\n\t\t\t<span>{{ instructionsLabel }}</span>\r\n\t\t</div>\r\n\t\t<div class=\"explanation\" *ngIf=\"instructions\">\r\n\t\t\t<div class=\"iconwrapper\">\r\n\t\t\t\t<i class=\"material-icons\">gps_not_fixed</i>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"explanationwrapper\">\r\n\t\t\t\t<p>This button will allow you to <span> link </span> the selected currency to your browsers title. This will allow you to leave the site while still being able to watch the value of your selected currency at a glance.</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"imagewrapper\"><img src=\"../../assets/images/pinned.jpg\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<hr>\r\n\t<div class=\"search\">\r\n\t\t<input type=\"text\" placeholder=\"Search...\" [(ngModel)]=\"filterName\"/>\t\t\r\n\t</div>\r\n\t<div class=\"instructions\">\r\n\t\t<p>You Could Have...</p>\r\n\t</div>\r\n\t<div class=\"ticker\" *ngFor=\"let coinresult of coinResults | filterName:filterName\">\r\n\t\t<div class=\"wrapper\" *ngIf=\"coinresult.name != step2Selection\">\r\n\t\t\t<div class=\"pin\" (click)=\"pinTitle(coinresult.amount, coinresult.name)\">\r\n\t\t\t\t<i class=\"material-icons\" *ngIf=\"pinnedCoinAmount != coinresult.amount\">gps_not_fixed</i>\r\n\t\t\t\t<i class=\"material-icons selectedCoin\" *ngIf=\"pinnedCoinAmount === coinresult.amount\">gps_fixed</i>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"amount\" [ngClass]=\"{amountpinned: pinnedCoinAmount === coinresult.amount, \r\n\t\t\t\t\t\t\t\t\t\t\tamountincrease: coinresult.increase,\r\n\t\t\t\t\t\t\t\t\t\t\tamountdecrease: coinresult.decrease}\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{coinresult.amount}}\r\n\t\t\t</div>\r\n\t\t\t<div class=\"name\" [ngClass]=\"{\tnamepinned: pinnedCoinAmount === coinresult.amount, \r\n\t\t\t\t\t\t\t\t\t\t\tnameincrease: coinresult.increase,\r\n\t\t\t\t\t\t\t\t\t\t\tnamedecrease: coinresult.decrease}\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{coinresult.name}} \r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/contents/contents.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,500);", ""]);

// module
exports.push([module.i, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline; }\n\nhtml {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ncaption, th, td {\n  text-align: left;\n  font-weight: normal;\n  vertical-align: middle; }\n\nq, blockquote {\n  quotes: none; }\n  q:before, q:after, blockquote:before, blockquote:after {\n    content: \"\";\n    content: none; }\n\na img {\n  border: none; }\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n  display: block; }\n\n@-webkit-keyframes fade {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes explanation {\n  0% {\n    opacity: 0.00; }\n  100% {\n    opacity: 1; } }\n\n@keyframes explanation {\n  0% {\n    opacity: 0.00; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes amountincrease {\n  0% { }\n  50% {\n    background-color: #34993C;\n    border-color: #34993C;\n    opacity: 0.5; }\n  100% {\n    background-color: #ffffff;\n    border-color: #2e2e2e; } }\n\n@keyframes amountincrease {\n  0% { }\n  50% {\n    background-color: #34993C;\n    border-color: #34993C;\n    opacity: 0.5; }\n  100% {\n    background-color: #ffffff;\n    border-color: #2e2e2e; } }\n\n@-webkit-keyframes amountdecrease {\n  0% { }\n  50% {\n    background-color: #993A2F;\n    border-color: #993A2F;\n    opacity: 0.5; }\n  100% {\n    background-color: #ffffff;\n    border-color: #2e2e2e; } }\n\n@keyframes amountdecrease {\n  0% { }\n  50% {\n    background-color: #993A2F;\n    border-color: #993A2F;\n    opacity: 0.5; }\n  100% {\n    background-color: #ffffff;\n    border-color: #2e2e2e; } }\n\n@-webkit-keyframes nameincrease {\n  0% { }\n  50% {\n    background-color: #34993C;\n    border-color: #34993C;\n    opacity: 0.5; }\n  100% {\n    background-color: #2e2e2e;\n    border-color: #2e2e2e; } }\n\n@keyframes nameincrease {\n  0% { }\n  50% {\n    background-color: #34993C;\n    border-color: #34993C;\n    opacity: 0.5; }\n  100% {\n    background-color: #2e2e2e;\n    border-color: #2e2e2e; } }\n\n@-webkit-keyframes namedecrease {\n  0% { }\n  50% {\n    background-color: #993A2F;\n    border-color: #993A2F;\n    opacity: 0.5; }\n  100% {\n    background-color: #2e2e2e;\n    border-color: #2e2e2e; } }\n\n@keyframes namedecrease {\n  0% { }\n  50% {\n    background-color: #993A2F;\n    border-color: #993A2F;\n    opacity: 0.5; }\n  100% {\n    background-color: #2e2e2e;\n    border-color: #2e2e2e; } }\n\n@-webkit-keyframes fadeHalf {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 0.2; } }\n\n@keyframes fadeHalf {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 0.2; } }\n\n@-webkit-keyframes floatinLeft {\n  0% {\n    opacity: 0;\n    margin-left: -5em; }\n  100% {\n    opacity: 1;\n    margin-left: 0em; } }\n\n@keyframes floatinLeft {\n  0% {\n    opacity: 0;\n    margin-left: -5em; }\n  100% {\n    opacity: 1;\n    margin-left: 0em; } }\n\n@-webkit-keyframes floatin {\n  0% {\n    opacity: 0;\n    margin-top: 10em; }\n  100% {\n    opacity: 1;\n    margin-top: 0em; } }\n\n@keyframes floatin {\n  0% {\n    opacity: 0;\n    margin-top: 10em; }\n  100% {\n    opacity: 1;\n    margin-top: 0em; } }\n\nbody {\n  max-width: 80em;\n  margin-left: auto;\n  margin-right: auto;\n  margin: 0px;\n  font-size: 18px;\n  background: #ffffff; }\n  body:after {\n    content: \" \";\n    display: block;\n    clear: both; }\n\nh1 {\n  font: 500 2em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n\nh2 {\n  font: 400 1.25em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n\nh3 {\n  font: 400 1em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n\ni {\n  font-family: \"Material Icons\"; }\n\n.contents {\n  margin-top: 80px; }\n  .contents .instructions {\n    box-sizing: border-box;\n    width: 100%;\n    float: left;\n    padding-left: 0.83333333%;\n    padding-right: 0.83333333%;\n    margin-top: 1em;\n    font: 400 1em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n    .contents .instructions p {\n      line-height: 1.25em; }\n      .contents .instructions p span {\n        font-weight: 500; }\n    .contents .instructions a {\n      text-decoration: none;\n      color: #FFC107; }\n    .contents .instructions a:hover {\n      color: #2e2e2e; }\n    .contents .instructions hr {\n      margin-bottom: 0px; }\n  .contents .steps {\n    box-sizing: border-box;\n    width: 50%;\n    float: left;\n    padding-left: 0.83333333%;\n    padding-right: 0.83333333%;\n    display: inline-block;\n    float: left;\n    padding-top: .5em;\n    border-style: solid; }\n    .contents .steps p {\n      font: 400 1em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n      .contents .steps p span {\n        font-weight: 500; }\n    .contents .steps .stepOne, .contents .steps .stepTwo, .contents .steps .stepThree {\n      display: block;\n      margin-top: .5em;\n      margin-bottom: 1em; }\n      @media (min-width: 0) and (max-width: 1100px) {\n        .contents .steps .stepOne span, .contents .steps .stepTwo span, .contents .steps .stepThree span {\n          display: none; } }\n      .contents .steps .stepOne h1, .contents .steps .stepTwo h1, .contents .steps .stepThree h1 {\n        display: inline-block;\n        font: 500 2em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n      .contents .steps .stepOne h2, .contents .steps .stepTwo h2, .contents .steps .stepThree h2 {\n        display: inline-block;\n        font: 400 1.25em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n        @media (min-width: 0) and (max-width: 1100px) {\n          .contents .steps .stepOne h2, .contents .steps .stepTwo h2, .contents .steps .stepThree h2 {\n            display: block; } }\n    .contents .steps .stepOne {\n      opacity: 0;\n      -webkit-animation-name: fade;\n              animation-name: fade;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-animation-delay: 0.25s;\n              animation-delay: 0.25s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; }\n      .contents .steps .stepOne .selectionWrapper {\n        box-sizing: border-box;\n        width: 100%;\n        float: left;\n        padding-left: 0.83333333%;\n        padding-right: 0.83333333%;\n        margin-top: 1em;\n        margin-bottom: 1em;\n        display: block; }\n      .contents .steps .stepOne .regularcurrencywrapper, .contents .steps .stepOne .crypocurrencywrapper {\n        display: inline-block;\n        box-sizing: border-box;\n        width: 50%;\n        float: left;\n        padding-left: 0.83333333%;\n        padding-right: 0.83333333%; }\n        .contents .steps .stepOne .regularcurrencywrapper .cryptoCurrency, .contents .steps .stepOne .regularcurrencywrapper .regularCurrency, .contents .steps .stepOne .crypocurrencywrapper .cryptoCurrency, .contents .steps .stepOne .crypocurrencywrapper .regularCurrency {\n          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);\n          width: 90%;\n          display: inline-block;\n          border-radius: 10px;\n          overflow: hidden;\n          background-color: #A9A9A9;\n          height: 113px;\n          border-style: solid;\n          border-width: 2px;\n          border-color: transparent;\n          text-align: center; }\n          .contents .steps .stepOne .regularcurrencywrapper .cryptoCurrency img, .contents .steps .stepOne .regularcurrencywrapper .regularCurrency img, .contents .steps .stepOne .crypocurrencywrapper .cryptoCurrency img, .contents .steps .stepOne .crypocurrencywrapper .regularCurrency img {\n            width: 60%;\n            width: 125px;\n            height: auto;\n            margin-top: 30px; }\n        .contents .steps .stepOne .regularcurrencywrapper .cryptoCurrency:hover, .contents .steps .stepOne .regularcurrencywrapper .regularCurrency:hover, .contents .steps .stepOne .crypocurrencywrapper .cryptoCurrency:hover, .contents .steps .stepOne .crypocurrencywrapper .regularCurrency:hover {\n          border-color: #2e2e2e; }\n        .contents .steps .stepOne .regularcurrencywrapper .active, .contents .steps .stepOne .crypocurrencywrapper .active {\n          background-color: #FFC107; }\n    .contents .steps .stepTwo, .contents .steps .stepThree {\n      box-sizing: border-box;\n      width: 100%;\n      float: left;\n      padding-left: 0.83333333%;\n      padding-right: 0.83333333%;\n      opacity: 0; }\n    .contents .steps .stepTwo {\n      -webkit-animation-name: fadeHalf;\n              animation-name: fadeHalf;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-animation-delay: 0.5s;\n              animation-delay: 0.5s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; }\n    .contents .steps .stepThree {\n      -webkit-animation-name: fadeHalf;\n              animation-name: fadeHalf;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-animation-delay: 0.75s;\n              animation-delay: 0.75s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; }\n    .contents .steps .stepTwo .stepTwoDropdown, .contents .steps .stepTwo .stepThreeInput, .contents .steps .stepThree .stepTwoDropdown, .contents .steps .stepThree .stepThreeInput {\n      width: 100%;\n      margin-top: 1em;\n      font: 400 1em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\";\n      display: block;\n      height: 41px;\n      border-style: solid;\n      border-radius: 10px;\n      border-width: 2px;\n      border-color: #2e2e2e; }\n    .contents .steps .stepTwo .stepThreeInput, .contents .steps .stepThree .stepThreeInput {\n      width: 97%;\n      padding-left: 10px; }\n    .contents .steps .Active {\n      -webkit-animation-name: fade;\n              animation-name: fade;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-animation-delay: 0s;\n              animation-delay: 0s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      opacity: 1; }\n    @media (min-width: 0) and (max-width: 883px) {\n      .contents .steps {\n        box-sizing: border-box;\n        width: 100%;\n        float: left;\n        padding-left: 0.83333333%;\n        padding-right: 0.83333333%; } }\n\n.results {\n  border-color: #2e2e2e;\n  border-style: solid;\n  border-width: 0px 0px 0px 1px;\n  padding-top: 0.5em;\n  box-sizing: border-box;\n  width: 50%;\n  float: left;\n  padding-left: 0.83333333%;\n  padding-right: 0.83333333%;\n  display: inline-block;\n  float: left; }\n  .results .warning {\n    opacity: 0.5; }\n    .results .warning p {\n      font: 400 1em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n  .results .instructions {\n    box-sizing: border-box;\n    width: 100%;\n    float: left;\n    padding-left: 0.83333333%;\n    padding-right: 0.83333333%;\n    display: block;\n    margin-top: 1em; }\n    .results .instructions p {\n      font: 400 1em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n  .results .search {\n    display: block;\n    margin-top: 10px;\n    box-sizing: border-box;\n    width: 100%;\n    float: left;\n    padding-left: 0.83333333%;\n    padding-right: 0.83333333%;\n    padding: 0; }\n    .results .search .searchLabel {\n      font: #2e2e2e;\n      display: block; }\n    .results .search input {\n      display: block;\n      font: 400 1em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\";\n      display: block;\n      height: 41px;\n      border-style: solid;\n      border-radius: 10px;\n      border-width: 2px;\n      border-color: #2e2e2e;\n      box-sizing: border-box;\n      width: 100%;\n      float: left;\n      padding-left: 0.83333333%;\n      padding-right: 0.83333333%;\n      height: 41px; }\n    .results .search i {\n      font-weight: 800; }\n  .results .whatyouhave {\n    -webkit-animation-name: floatin;\n            animation-name: floatin;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    display: none;\n    display: block; }\n    .results .whatyouhave:before, .results .whatyouhave:after {\n      content: '';\n      display: table; }\n    .results .whatyouhave:after {\n      clear: both; }\n    .results .whatyouhave .pinningInstructions {\n      margin-top: 1em;\n      font: 400 1em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\";\n      text-align: left;\n      border-radius: 5px;\n      color: #ffffff;\n      background-color: #2e2e2e;\n      padding: .5em;\n      max-width: 200px; }\n      .results .whatyouhave .pinningInstructions i {\n        float: left;\n        margin-left: 1em; }\n      .results .whatyouhave .pinningInstructions span {\n        margin-left: .5em; }\n    .results .whatyouhave .pinningInstructions:hover {\n      background-color: #FFC107;\n      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);\n      transition-duration: 0.5s;\n      -webkit-transtion: 0.5s;\n      cursor: pointer; }\n    .results .whatyouhave .explanation {\n      box-sizing: border-box;\n      width: 100%;\n      float: left;\n      padding-left: 1.66666667%;\n      padding-right: 1.66666667%;\n      font: 400 1em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\";\n      width: 100%;\n      margin-top: 0px;\n      padding: 1em;\n      margin-top: .5em;\n      border-style: solid;\n      border-width: 2px;\n      border-color: #2e2e2e;\n      border-radius: 5px;\n      -webkit-animation-name: explanation;\n              animation-name: explanation;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s; }\n      .results .whatyouhave .explanation span {\n        font-weight: 500; }\n      .results .whatyouhave .explanation .iconwrapper {\n        font-size: 3em;\n        box-sizing: border-box;\n        width: 16.66666667%;\n        float: left;\n        padding-left: 1.66666667%;\n        padding-right: 1.66666667%; }\n        .results .whatyouhave .explanation .iconwrapper:before, .results .whatyouhave .explanation .iconwrapper:after {\n          content: '';\n          display: table; }\n        .results .whatyouhave .explanation .iconwrapper:after {\n          clear: both; }\n      .results .whatyouhave .explanation .explanationwrapper {\n        box-sizing: border-box;\n        width: 83.33333333%;\n        float: left;\n        padding-left: 1.66666667%;\n        padding-right: 1.66666667%;\n        text-align: left; }\n      .results .whatyouhave .explanation .imagewrapper {\n        box-sizing: border-box;\n        width: 100%;\n        float: left;\n        padding-left: 1.66666667%;\n        padding-right: 1.66666667%;\n        margin-top: 1em;\n        text-align: right; }\n        .results .whatyouhave .explanation .imagewrapper img {\n          border-radius: 10px;\n          max-width: 100%;\n          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4); }\n    @media (min-width: 0) and (max-width: 600px) {\n      .results .whatyouhave {\n        display: none; } }\n  .results .ticker {\n    display: inline-block;\n    vertical-align: top;\n    width: 100%;\n    font: 400 1em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n    @media (min-width: 0) and (max-width: 445px) {\n      .results .ticker {\n        font-size: .75em; } }\n    .results .ticker .wrapper {\n      margin-top: 1em;\n      box-sizing: border-box;\n      width: 100%;\n      float: left;\n      padding-left: 0.83333333%;\n      padding-right: 0.83333333%; }\n      .results .ticker .wrapper .pin {\n        display: inline-block; }\n        .results .ticker .wrapper .pin i:hover {\n          color: #FFC107;\n          cursor: pointer; }\n        .results .ticker .wrapper .pin .selectedCoin {\n          color: #FFC107; }\n        .results .ticker .wrapper .pin .selectedCoin:hover {\n          cursor: default; }\n        @media (min-width: 0) and (max-width: 600px) {\n          .results .ticker .wrapper .pin {\n            display: none; } }\n      .results .ticker .wrapper .name {\n        color: #ffffff;\n        padding: 0.5em;\n        padding-left: 1em;\n        border-style: solid;\n        border-width: 2px;\n        border-color: #2e2e2e;\n        border-radius: 0px 10px 10px 0px;\n        display: inline-block;\n        width: 200px;\n        background-color: #2e2e2e;\n        margin-left: -5px; }\n        @media (min-width: 0) and (max-width: 445px) {\n          .results .ticker .wrapper .name {\n            width: 150px; } }\n      .results .ticker .wrapper .namepinned {\n        background-color: #FFC107;\n        border-color: #FFC107;\n        font-weight: 500;\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);\n        transition-duration: 0.5s;\n        -webkit-transtion: 0.5s; }\n      .results .ticker .wrapper .nameincrease {\n        -webkit-animation-name: nameincrease;\n                animation-name: nameincrease;\n        -webkit-animation-duration: 1s;\n                animation-duration: 1s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n      .results .ticker .wrapper .namedecrease {\n        -webkit-animation-name: namedecrease;\n                animation-name: namedecrease;\n        -webkit-animation-duration: 1s;\n                animation-duration: 1s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n      .results .ticker .wrapper .amount {\n        text-align: right;\n        border-radius: 10px 0px 0px 10px;\n        display: inline-block;\n        padding: 0.5em;\n        padding-right: 1.5em;\n        width: 30%;\n        border-style: solid;\n        border-width: 2px;\n        border-color: #2e2e2e; }\n        @media (min-width: 0) and (max-width: 445px) {\n          .results .ticker .wrapper .amount {\n            width: 20%; } }\n      .results .ticker .wrapper .amountpinned {\n        border-color: #FFC107;\n        font-weight: 500;\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);\n        transition-duration: 0.5s;\n        -webkit-transtion: 0.5s; }\n      .results .ticker .wrapper .amountincrease {\n        -webkit-animation-name: amountincrease;\n                animation-name: amountincrease;\n        -webkit-animation-duration: 1s;\n                animation-duration: 1s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n      .results .ticker .wrapper .amountdecrease {\n        -webkit-animation-name: amountdecrease;\n                animation-name: amountdecrease;\n        -webkit-animation-duration: 1s;\n                animation-duration: 1s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n  @media (min-width: 0) and (max-width: 883px) {\n    .results {\n      box-sizing: border-box;\n      width: 100%;\n      float: left;\n      padding-left: 0.83333333%;\n      padding-right: 0.83333333%; } }\n  @media (min-width: 0) and (max-width: 883px) {\n    .results {\n      border-top: 1px;\n      border-color: #2e2e2e;\n      border-style: solid; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contents/contents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Conversion_service__ = __webpack_require__("../../../../../src/app/Conversion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentsComponent = (function () {
    function ContentsComponent(conversionService, titleService) {
        this.conversionService = conversionService;
        this.titleService = titleService;
        // Variables for front end
        this.instructions = false;
        this.instructionsLabel = "What is this?";
        this.pageTitle = "Cryptocheck.io";
        this.cryptoSelected = false; //Determines if crypto is selected
        this.regSelected = false; // Determines if currenecy s selected
        //ADD IN ANY EXTRA CURRENCIES OR COINS YOU WANT (ALSO ADD IT IN THE COINS AND CURRENCY ARRAY BELOW)
        //ALSO GO TO THE CONVERTNAME FUCTION AND ADD IN THE APPROPRIATE NAME (VERY BOTTOM OF FILE
        this.step2AOptions = [
            { name: "Synereo (AMP)" },
            { name: "Ardor (ARDR)" },
            { name: "Bytecoin (BCN)" },
            { name: "BitCrystals (BCY)" },
            { name: "Belacoin (BELA)" },
            { name: "Bitcoin (BTC)" },
            { name: "BlackCoin (BLK)" },
            { name: "BitcoinDark (BTCD)" },
            { name: "Bitmark (BTM)" },
            { name: "BitShares (BTS)" },
            { name: "Burst (BURST)" },
            { name: "CLAMS (CLAM)" },
            { name: "DASH (DASH) " },
            { name: "Decred (DCR)" },
            { name: "DigiByte (DGB)" },
            { name: "Dogecoin (DOGE)" },
            { name: "Einsteinium (EMC2)" },
            { name: "Ethereum Classic (ETC)" },
            { name: "Ethereum (ETH)" },
            { name: "Expanse (EXP)" },
            { name: "Factom (FCT)" },
            { name: "FoldingCoin (FLDC)" },
            { name: "GameCredits (GAME)" },
            { name: "Golem (GNT)" },
            { name: "Gridcoin Research (GRC)" },
            { name: "Huntercoin (HUC)" },
            { name: "LBRY Credits (LBC)" },
            { name: "Lisk (LSK)" },
            { name: "Litecoin (LTC)" },
            { name: "MaidSafeCoin (MAID)" },
            { name: "Nautiluscoin (NAUT)" },
            { name: "NAVCoin (NAV)" },
            { name: "Neoscoin (NEOS)" },
            { name: "Namecoin (NMC)" },
            { name: "DNotes (NOTE)" },
            { name: "Nexium (NXC)" },
            { name: "NST (NXT)" },
            { name: "Omni (OMNI)" },
            { name: "PascalCoin (PASC)" },
            { name: "Pinkcoin (PINK)" },
            { name: "PotCoin (POT)" },
            { name: "Peercoin (PPC)" },
            { name: "Radium (RADS)" },
            { name: "Augur (REP)" },
            { name: "Riecoin (RIC)" },
            { name: "Steem Dollars (SBD)" },
            { name: "Siacoin (SC)" },
            { name: "Storjcoin X (SJCX)" },
            { name: "STEEM (STEEM)" },
            { name: "Stellar (STR)" },
            { name: "Stratis (STRAT)" },
            { name: "Syscoin (SYS)" },
            { name: "Viacoin (VIA)" },
            { name: "VeriCoin (VRC)" },
            { name: "Vertcoin (VTC)" },
            { name: "BitcoinPlus (XBC)" },
            { name: "Counterparty (XCP)" },
            { name: "NEM (XEM)" },
            { name: "Monero (XMR)" },
            { name: "Primecoin (XPM)" },
            { name: "Ripple (XRP)" },
            { name: "Vcash (XVC)" },
            { name: "Zcash (ZEC)" }
        ]; // step2AOptions
        this.step2BOptions = [
            { name: "Canadian (CAD)" },
            { name: "American (USDT)" },
            { name: "Euro (EUR)" },
            { name: "Austrailian (AUD)" },
            { name: "Buglarian (BGN)" },
            { name: "Brazilian (BRL)" },
            { name: "Swiss Franc (CHF)" },
            { name: "Chinese (CNY)" },
            { name: "Czech (CZK)" },
            { name: "Danish (DKK)" },
            { name: "British Pound (GBP)" },
            { name: "Hong Kong (HKD)" },
            { name: "Croatian (HRK)" },
            { name: "Hungarian (HUF)" },
            { name: "Indonesian (IDR)" },
            { name: "Israeli (ILS)" },
            { name: "Indian (INR)" },
            { name: "Japanese (JPY)" },
            { name: "South Korean (KRW)" },
            { name: "Mexican (MXN)" },
            { name: "Malaysian (MYR)" },
            { name: "Norwegian (NOK)" },
            { name: "New Zealand (NZD)" },
            { name: "Philippine (PHP)" },
            { name: "Polish (PLN)" },
            { name: "Romanian (RON)" },
            { name: "Russian (RUB)" },
            { name: "Swedish (SEK)" },
            { name: "Singapore (SGD)" },
            { name: "Thai (THB)" },
            { name: "Turkish (TRY)" },
            { name: "South African (ZAR)" }
        ]; // step2BOptions
        // DONT FORGET TO ADD THE COIN OR CURRENCY BELOW IN THE PROPER FORMAT (CHECK THE TICKER OR CURRENCY EXCHANGE FOR FORMAT)
        this.coins = [
            "BTC_AMP",
            "BTC_ARDR",
            "BTC_BCN",
            "BTC_BCY",
            "BTC_BTC",
            "BTC_BELA",
            "BTC_BLK",
            "BTC_BTCD",
            "BTC_BTM",
            "BTC_BTS",
            "BTC_BURST",
            "BTC_CLAM",
            "BTC_DASH",
            "BTC_DCR",
            "BTC_DGB",
            "BTC_DOGE",
            "BTC_EMC2",
            "BTC_ETC",
            "BTC_ETH",
            "BTC_EXP",
            "BTC_FCT",
            "BTC_FLDC",
            "BTC_GAME",
            "BTC_GNT",
            "BTC_GRC",
            "BTC_HUC",
            "BTC_LBC",
            "BTC_LSK",
            "BTC_LTC",
            "BTC_MAID",
            "BTC_NAUT",
            "BTC_NAV",
            "BTC_NEOS",
            "BTC_NMC",
            "BTC_NOTE",
            "BTC_NXC",
            "BTC_NXT",
            "BTC_OMNI",
            "BTC_PASC",
            "BTC_PINK",
            "BTC_POT",
            "BTC_PPC",
            "BTC_RADS",
            "BTC_REP",
            "BTC_RIC",
            "BTC_SBD",
            "BTC_SC",
            "BTC_SJCX",
            "BTC_STEEM",
            "BTC_STR",
            "BTC_STRAT",
            "BTC_SYS",
            "BTC_VIA",
            "BTC_VRC",
            "BTC_VTC",
            "BTC_XBC",
            "BTC_XCP",
            "BTC_XEM",
            "BTC_XMR",
            "BTC_XPM",
            "BTC_XRP",
            "BTC_XVC",
            "BTC_ZEC"
        ];
        this.currencies = [
            "CAD",
            "EUR",
            'USDT',
            'AUD',
            'BGN',
            'BRL',
            'CHF',
            'CNY',
            'CZK',
            'DKK',
            'GBP',
            'HKD',
            'HRK',
            'HUF',
            'IDR',
            'ILS',
            'INR',
            'JPY',
            'KRW',
            'MXN',
            'MYR',
            'NOK',
            'NZD',
            'PHP',
            'PLN',
            'RON',
            'RUB',
            'SEK',
            'SGD',
            'THB',
            'TRY',
            'ZAR'
        ]; //hold the currencies as a string in the format of currencyExchange
        this.currencyExchange = []; //Holds the exchange values for the currencies
        this.coinResults = []; //Holds all the names and converted values (DISPLAY THIS IN THE DOM)
        this.beforeCoinResults = [];
        this.afterCoinResults = [];
        this.increase = false;
        this.decrease = false;
    }
    ContentsComponent.prototype.reset = function () {
        if (this.step2Selection && this.holdings) {
            this.holdings = null;
            this.step2Selection = null;
        }
    };
    ContentsComponent.prototype.callAPI = function () {
        this.convert();
        // Tells me beforeCoinResults if it is set
        if (this.beforeCoinResults[1]) {
            this.beforeFilled = true;
        } // Tells me afterCoinResults if it is set
        if (this.afterCoinResults[1]) {
            this.afterFilled = true;
        } // if after coins afterFilled
        for (var i = 0; i < this.coinResults.length; i++) {
            if (this.beforeFilled && this.afterFilled) {
                if (this.beforeCoinResults[i].amount < this.afterCoinResults[i].amount) {
                    this.coinResults[i].decrease = false;
                    this.coinResults[i].increase = true;
                }
                else if (this.beforeCoinResults[i].amount > this.afterCoinResults[i].amount) {
                    this.coinResults[i].increase = false;
                    this.coinResults[i].decrease = true;
                } // else if
            } // if
        } // for
    }; // call API
    ContentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // call api every second
        setInterval(function () {
            if (_this.holdings) {
                _this.callAPI();
            }
            ;
        }, 1000);
        //Subscribe
        setInterval(function () {
            _this.conversionService.getFullTicker().subscribe(function (res) {
                _this.ticker = res;
                _this.ticker['BTC_BTC'] = {
                    id: 1,
                    last: 1,
                    lowestAsk: 1,
                    highestBid: 1,
                    percentChange: 1,
                    baseVolume: 1,
                    quoteVolume: 1,
                    isFrozen: 1,
                    high24hr: 1,
                    low24hr: 1
                };
                //end the subscribe function                                                       
            });
            _this.conversionService.getFullCurrencyExchange().subscribe(function (res) {
                _this.currencyExchange = res["rates"];
                _this.currencyExchange['USDT'] = 1;
            });
        }, 1000);
    }; // End OnInit
    // logic block for conversion
    ContentsComponent.prototype.convert = function () {
        this.beforeCoinResults = this.coinResults;
        this.coinResults = [];
        if (this.cryptoSelected && this.step2Selection) {
            //convert all the crypto to currencies
            for (var i = 0; i <= this.currencies.length - 1; i++) {
                var tempName = this.currencies[i];
                this.coinResults.push({
                    name: this.convertName(tempName),
                    amount: Math.round(this.holdings * this.ticker[this.convertName(this.step2Selection)].last * this.ticker['USDT_BTC'].last * this.currencyExchange[tempName] * 100) / 100,
                    increase: false,
                    decrease: false
                }); // push 
            } // for
            //convert all the crypto to crypto
            for (var i = 0; i <= this.coins.length - 1; i++) {
                var tempName = this.coins[i];
                this.coinResults.push({
                    name: this.convertName(tempName),
                    amount: Math.round(this.holdings * this.ticker[this.convertName(this.step2Selection)].last / this.ticker[tempName].last * 100000000) / 100000000,
                    increase: false,
                    decrease: false
                }); // push   
            } // for
        } // if cryptoselected
        if (this.regSelected) {
            //convert currency to currency
            for (var i = 0; i <= this.currencies.length - 1; i++) {
                var tempName = this.currencies[i];
                this.coinResults.push({
                    name: this.convertName(tempName),
                    amount: Math.round(this.holdings / this.currencyExchange[this.convertName(this.step2Selection)] * this.currencyExchange[tempName] * 100) / 100,
                    increase: false,
                    decrease: false
                }); // push
            } // for
            //convert currency to crypto
            for (var i = 0; i <= this.coins.length - 1; i++) {
                var tempName = this.coins[i];
                this.coinResults.push({
                    name: this.convertName(tempName),
                    amount: Math.round(this.holdings / this.currencyExchange[this.convertName(this.step2Selection)] / this.ticker['USDT_BTC'].last / this.ticker[tempName].last * 100000000) / 100000000,
                    increase: false,
                    decrease: false
                }); //push 
            } // for
        } // if   
        this.afterCoinResults = this.coinResults;
    }; // end convert
    // Logic Block for converting names
    ContentsComponent.prototype.convertName = function (name) {
        switch (name) {
            case 'Synereo (AMP)':
                return ('BTC_AMP');
            case 'BTC_AMP':
                return ('Synereo (AMP)');
            case 'Ardor (ARDR)':
                return ('BTC_ARDR');
            case 'BTC_ARDR':
                return ('Ardor (ARDR)');
            case 'Bytecoin (BCN)':
                return ('BTC_BCN');
            case 'BTC_BCN':
                return ('Bytecoin (BCN)');
            case 'BitCrystals (BCY)':
                return ('BTC_BCY');
            case 'BTC_BCY':
                return ('BitCrystals (BCY)');
            case 'Belacoin (BELA)':
                return ('BTC_BELA');
            case 'BTC_BELA':
                return ('Belacoin (BELA)');
            case 'Bitcoin (BTC)':
                return ('BTC_BTC');
            case 'BTC_BTC':
                return ('Bitcoin (BTC)');
            case 'BlackCoin (BLK)':
                return ('BTC_BLK');
            case 'BTC_BLK':
                return ('BlackCoin (BLK)');
            case 'BitcoinDark (BTCD)':
                return ('BTC_BTCD');
            case 'BTC_BTCD':
                return ('BitcoinDark (BTCD)');
            case 'Bitmark (BTM)':
                return ('BTC_BTM');
            case 'BTC_BTM':
                return ('Bitmark (BTM)');
            case 'BitShares (BTS)':
                return ('BTC_BTS');
            case 'BTC_BTS':
                return ('BitShares (BTS)');
            case 'Burst (BURST)':
                return ('BTC_BURST');
            case 'BTC_BURST':
                return ('Burst (BURST)');
            case 'CLAMS (CLAM)':
                return ('BTC_CLAM');
            case 'BTC_CLAM':
                return ('CLAMS (CLAM)');
            case 'DASH (DASH)':
                return ('BTC_DASH');
            case 'BTC_DASH':
                return ('DASH (DASH)');
            case 'Decred (DCR)':
                return ('BTC_DCR');
            case 'BTC_DCR':
                return ('Decred (DCR)');
            case 'DigiByte (DGB)':
                return ('BTC_DGB');
            case 'BTC_DGB':
                return ('DigiByte (DGB)');
            case 'Dogecoin (DOGE)':
                return ('BTC_DOGE');
            case 'BTC_DOGE':
                return ('Dogecoin (DOGE)');
            case 'Einsteinium (EMC2)':
                return ('BTC_EMC2');
            case 'BTC_EMC2':
                return ('Einsteinium (EMC2)');
            case 'Ethereum Classic (ETC)':
                return ('BTC_ETC');
            case 'BTC_ETC':
                return ('Ethereum Classic (ETC)');
            case 'Ethereum (ETH)':
                return ('BTC_ETH');
            case 'BTC_ETH':
                return ('Ethereum (ETH)');
            case 'Expanse (EXP)':
                return ('BTC_EXP');
            case 'BTC_EXP':
                return ('Expanse (EXP)');
            case 'Factom (FCT)':
                return ('BTC_FCT');
            case 'BTC_FCT':
                return ('Factom (FCT)');
            case 'FoldingCoin (FLDC)':
                return ('BTC_FLDC');
            case 'BTC_FLDC':
                return ('FoldingCoin (FLDC)');
            case 'GameCredits (GAME)':
                return ('BTC_GAME');
            case 'BTC_GAME':
                return ('GameCredits (GAME)');
            case 'Golem (GNT)':
                return ('BTC_GNT');
            case 'BTC_GNT':
                return ('Golem (GNT)');
            case 'Gridcoin Research (GRC)':
                return ('BTC_GRC');
            case 'BTC_GRC':
                return ('Gridcoin Research (GRC)');
            case 'Huntercoin (HUC)':
                return ('BTC_HUC');
            case 'BTC_HUC':
                return ('Huntercoin (HUC)');
            case 'LBRY Credits (LBC)':
                return ('BTC_LBC');
            case 'BTC_LBC':
                return ('LBRY Credits (LBC)');
            case 'Lisk (LSK)':
                return ('BTC_LSK');
            case 'BTC_LSK':
                return ('Lisk (LSK)');
            case 'Litecoin (LTC)':
                return ('BTC_LTC');
            case 'BTC_LTC':
                return ('Litecoin (LTC)');
            case 'MaidSafeCoin (MAID)':
                return ('BTC_MAID');
            case 'BTC_MAID':
                return ('MaidSafeCoin (MAID)');
            case 'Nautiluscoin (NAUT)':
                return ('BTC_NAUT');
            case 'BTC_NAUT':
                return ('Nautiluscoin (NAUT)');
            case 'NAVCoin (NAV)':
                return ('BTC_NAV');
            case 'BTC_NAV':
                return ('NAVCoin (NAV)');
            case 'Neoscoin (NEOS)':
                return ('BTC_NEOS');
            case 'BTC_NEOS':
                return ('Neoscoin (NEOS)');
            case 'Namecoin (NMC)':
                return ('BTC_NMC');
            case 'BTC_NMC':
                return ('Namecoin (NMC)');
            case 'DNotes (NOTE)':
                return ('BTC_NOTE');
            case 'BTC_NOTE':
                return ('DNotes (NOTE)');
            case 'Nexium (NXC)':
                return ('BTC_NXC');
            case 'BTC_NXC':
                return ('Nexium (NXC)');
            case 'NST (NXT)':
                return ('BTC_NXT');
            case 'BTC_NXT':
                return ('NST (NXT)');
            case 'Omni (OMNI)':
                return ('BTC_OMNI');
            case 'BTC_OMNI':
                return ('Omni (OMNI)');
            case 'PascalCoin (PASC)':
                return ('PascalCoin (PASC)');
            case 'BTC_PASC':
                return ('PascalCoin (PASC)');
            case 'Pinkcoin (PINK)':
                return ('BTC_PINK');
            case 'BTC_PINK':
                return ('Pinkcoin (PINK)');
            case 'PotCoin (POT)':
                return ('BTC_POT');
            case 'BTC_POT':
                return ('PotCoin (POT)');
            case 'Peercoin (PPC)':
                return ('BTC_PPC');
            case 'BTC_PPC':
                return ('Peercoin (PPC)');
            case 'Radium (RADS)':
                return ('BTC_RADS');
            case 'BTC_RADS':
                return ('Radium (RADS)');
            case 'Augur (REP)':
                return ('BTC_REP');
            case 'BTC_REP':
                return ('Augur (REP)');
            case 'Riecoin (RIC)':
                return ('BTC_RIC');
            case 'BTC_RIC':
                return ('Riecoin (RIC)');
            case 'Steem Dollars (SBD)':
                return ('BTC_SBD');
            case 'BTC_SBD':
                return ('Steem Dollars (SBD)');
            case 'Siacoin (SC)':
                return ('BTC_SC');
            case 'BTC_SC':
                return ('Siacoin (SC)');
            case 'Storjcoin X (SJCX)':
                return ('BTC_SJCX');
            case 'BTC_SJCX':
                return ('Storjcoin X (SJCX)');
            case 'STEEM (STEEM)':
                return ('BTC_STEEM');
            case 'BTC_STEEM':
                return ('STEEM (STEEM)');
            case 'Stellar (STR)':
                return ('BTC_STR');
            case 'BTC_STR':
                return ('Stellar (STR)');
            case 'Stratis (STRAT)':
                return ('BTC_STRAT');
            case 'BTC_STRAT':
                return ('Stratis (STRAT)');
            case 'Syscoin (SYS)':
                return ('BTC_SYS');
            case 'BTC_SYS':
                return ('Syscoin (SYS)');
            case 'Viacoin (VIA)':
                return ('BTC_VIA');
            case 'BTC_VIA':
                return ('Viacoin (VIA)');
            case 'VeriCoin (VRC)':
                return ('BTC_VRC');
            case 'BTC_VRC':
                return ('VeriCoin (VRC)');
            case 'Vertcoin (VTC)':
                return ('BTC_VTC');
            case 'BTC_VTC':
                return ('Vertcoin (VTC)');
            case 'BitcoinPlus (XBC)':
                return ('BTC_XBC');
            case 'BTC_XBC':
                return ('BitcoinPlus (XBC)');
            case 'Counterparty (XCP)':
                return ('BTC_XCP');
            case 'BTC_XCP':
                return ('Counterparty (XCP)');
            case 'NEM (XEM)':
                return ('BTC_XEM');
            case 'BTC_XEM':
                return ('NEM (XEM)');
            case 'Monero (XMR)':
                return ('BTC_XMR');
            case 'BTC_XMR':
                return ('Monero (XMR)');
            case 'Primecoin (XPM)':
                return ('BTC_XPM');
            case 'BTC_XPM':
                return ('Primecoin (XPM)');
            case 'Ripple (XRP)':
                return ('BTC_XRP');
            case 'BTC_XRP':
                return ('Ripple (XRP)');
            case 'Vcash (XVC)':
                return ('BTC_XVC');
            case 'BTC_XVC':
                return ('Vcash (XVC)');
            case 'Zcash (ZEC)':
                return ('BTC_ZEC');
            case 'BTC_ZEC':
                return ('Zcash (ZEC)');
            // Currencies
            case 'American (USDT)':
                return ('USDT');
            case "USDT":
                return ('American (USDT)');
            case 'Canadian (CAD)':
                return ('CAD');
            case 'CAD':
                return ('Canadian (CAD)');
            case 'Austrailian (AUD)':
                return ('AUD');
            case 'AUD':
                return ('Austrailian (AUD)');
            case 'Buglarian (BGN)':
                return ('BGN');
            case 'BGN':
                return ('Buglarian (BGN)');
            case 'Brazilian (BRL)':
                return ('BRL');
            case 'BRL':
                return ('Brazilian (BRL)');
            case 'Swiss Franc (CHF)':
                return ('CHF');
            case 'CHF':
                return ('Swiss Franc (CHF)');
            case 'Chinese (CNY)':
                return ('CNY');
            case 'CNY':
                return ('Chinese (CNY)');
            case 'Czech (CZK)':
                return ('CZK');
            case 'CZK':
                return ('Czech (CZK)');
            case 'Danish (DKK)':
                return ('DKK');
            case 'DKK':
                return ('Danish (DKK)');
            case 'British Pound (GBP)':
                return ('GBP');
            case 'GBP':
                return ('British Pound (GBP)');
            case 'Hong Kong (HKD)':
                return ('HKD');
            case 'HKD':
                return ('Hong Kong (HKD)');
            case 'Croatian (HRK)':
                return ('HRK');
            case 'HRK':
                return ('Croatian (HRK)');
            case 'Hungarian (HUF)':
                return ('HUF');
            case 'HUF':
                return ('Hungarian (HUF)');
            case 'Indonesian (IDR)':
                return ('IDR');
            case 'IDR':
                return ('Indonesian (IDR)');
            case 'Israeli (ILS)':
                return ('ILS');
            case 'ILS':
                return ('Israeli (ILS)');
            case 'Indian (INR)':
                return ('INR');
            case 'INR':
                return ('Indian (INR)');
            case 'Japanese (JPY)':
                return ('JPY');
            case 'JPY':
                return ('Japanese (JPY)');
            case 'South Korean (KRW)':
                return ('KRW');
            case 'KRW':
                return ('South Korean (KRW)');
            case 'Mexican (MXN)':
                return ('MXN');
            case 'MXN':
                return ('Mexican (MXN)');
            case 'Malaysian (MYR)':
                return ('MYR');
            case 'MYR':
                return ('Malaysian (MYR)');
            case 'Norwegian (NOK)':
                return ('NOK');
            case 'NOK':
                return ('Malaysian (NOK)');
            case 'Polish (PLN)':
                return ('PLN');
            case 'PLN':
                return ('Polish (PLN)');
            case 'New Zealand (NZD)':
                return ('NZD');
            case 'NZD':
                return ('New Zealand (NZD)');
            case 'Philippine (PHP)':
                return ('PHP');
            case 'PHP':
                return ('Philippine (PHP)');
            case 'Romanian (RON)':
                return ('RON');
            case 'RON':
                return ('Romanian (RON)');
            case 'Russian (RUB)':
                return ('RUB');
            case 'RUB':
                return ('Russian (RUB)');
            case 'Swedish (SEK)':
                return ('SEK');
            case 'SEK':
                return ('Swedish (SEK)');
            case 'Singapore (SGD)':
                return ('SGD');
            case 'SGD':
                return ('Singapore (SGD)');
            case 'Thai (THB)':
                return ('THB');
            case 'THB':
                return ('Thai (THB)');
            case 'Turkish (TRY)':
                return ('TRY');
            case 'TRY':
                return ('Turkish (TRY)');
            case 'South African (ZAR)':
                return ('ZAR');
            case 'ZAR':
                return ('South African (ZAR)');
            case 'Euro (EUR)':
                return ('EUR');
            case 'EUR':
                return ('Euro (EUR)');
        } //END SWITCH
    }; //END CONVERTNAM
    // gets the value for the browser title and ensure it updates as the API chanhes.
    ContentsComponent.prototype.pinTitle = function (amount, name) {
        var _this = this;
        clearInterval(this.updateTitle);
        this.updateTitle = setInterval(function () {
            for (var i = 0; i <= _this.coinResults.length; i++) {
                if (name === _this.coinResults[i].name) {
                    _this.pinnedCoinAmount = _this.coinResults[i].amount;
                    _this.pinnedCoinName = _this.coinResults[i].name;
                    _this.setTitle(_this.pinnedCoinName + " - " + _this.pinnedCoinAmount.toString());
                } // if
            } // for
        }, 100); // interval
    }; // pinTitle
    // sets the title of the browser tab 
    ContentsComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    }; // set title
    // Logic Block for Instructions button
    ContentsComponent.prototype.instructionsToggle = function () {
        if (this.instructions) {
            this.instructionsLabel = "Close Instructions";
        }
        else {
            this.instructionsLabel = "What is this?";
        } // else
    }; // if
    ContentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'app-contents',
            template: __webpack_require__("../../../../../src/app/contents/contents.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contents/contents.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Conversion_service__["a" /* ConversionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Conversion_service__["a" /* ConversionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === 'function' && _b) || Object])
    ], ContentsComponent);
    return ContentsComponent;
    var _a, _b;
}()); // instruction toggle label
//# sourceMappingURL=contents.component.js.map

/***/ }),

/***/ "../../../../../src/app/filterName.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterName; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterName = (function () {
    function FilterName() {
    }
    FilterName.prototype.transform = function (coinResults, filterName) {
        if (filterName === undefined)
            return coinResults;
        // return update name array
        return coinResults.filter(function (coinResult) {
            return coinResult.name.toLowerCase().includes(filterName.toLowerCase());
        });
    };
    FilterName = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
            name: 'filterName'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterName);
    return FilterName;
}());
//# sourceMappingURL=filterName.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footerBar\">\r\n\r\n        <div class=\"comments\">\r\n                <h3>Have comments or suggestions?</h3>\r\n                <a href=\"mailto:info@Alliemunro.com\">\r\n                        <p>Info@Alliemunro.com</p>\r\n                </a>\r\n        </div>\r\n        <div class=\"donation\">\r\n                <p>Find Cryptocheck.io useful? <br>Consider donating to our bitcoin wallet</p>\r\n                <div class=\"donatebutton\" (click)=\"donatebutton()\">{{donate}}</div>\r\n        </div>\r\n        <div class=\"disclaimer\">\r\n                <p>\r\n                        <span>Disclaimer</span>:\r\n                        CryptoCheck.io is based on realtime exchange rates. We do our best to ensure you have the most up to date information but we are human and can make errors. We accept no repsonsiblity for any damages that may occur due to inaccurate information. By using this free to use application you accept all risks.\r\n                </p>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,500);", ""]);

// module
exports.push([module.i, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline; }\n\nhtml {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ncaption, th, td {\n  text-align: left;\n  font-weight: normal;\n  vertical-align: middle; }\n\nq, blockquote {\n  quotes: none; }\n  q:before, q:after, blockquote:before, blockquote:after {\n    content: \"\";\n    content: none; }\n\na img {\n  border: none; }\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n  display: block; }\n\n@-webkit-keyframes fade {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes explanation {\n  0% {\n    opacity: 0.00; }\n  100% {\n    opacity: 1; } }\n\n@keyframes explanation {\n  0% {\n    opacity: 0.00; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes amountincrease {\n  0% { }\n  50% {\n    background-color: #34993C;\n    border-color: #34993C;\n    opacity: 0.5; }\n  100% {\n    background-color: #ffffff;\n    border-color: #2e2e2e; } }\n\n@keyframes amountincrease {\n  0% { }\n  50% {\n    background-color: #34993C;\n    border-color: #34993C;\n    opacity: 0.5; }\n  100% {\n    background-color: #ffffff;\n    border-color: #2e2e2e; } }\n\n@-webkit-keyframes amountdecrease {\n  0% { }\n  50% {\n    background-color: #993A2F;\n    border-color: #993A2F;\n    opacity: 0.5; }\n  100% {\n    background-color: #ffffff;\n    border-color: #2e2e2e; } }\n\n@keyframes amountdecrease {\n  0% { }\n  50% {\n    background-color: #993A2F;\n    border-color: #993A2F;\n    opacity: 0.5; }\n  100% {\n    background-color: #ffffff;\n    border-color: #2e2e2e; } }\n\n@-webkit-keyframes nameincrease {\n  0% { }\n  50% {\n    background-color: #34993C;\n    border-color: #34993C;\n    opacity: 0.5; }\n  100% {\n    background-color: #2e2e2e;\n    border-color: #2e2e2e; } }\n\n@keyframes nameincrease {\n  0% { }\n  50% {\n    background-color: #34993C;\n    border-color: #34993C;\n    opacity: 0.5; }\n  100% {\n    background-color: #2e2e2e;\n    border-color: #2e2e2e; } }\n\n@-webkit-keyframes namedecrease {\n  0% { }\n  50% {\n    background-color: #993A2F;\n    border-color: #993A2F;\n    opacity: 0.5; }\n  100% {\n    background-color: #2e2e2e;\n    border-color: #2e2e2e; } }\n\n@keyframes namedecrease {\n  0% { }\n  50% {\n    background-color: #993A2F;\n    border-color: #993A2F;\n    opacity: 0.5; }\n  100% {\n    background-color: #2e2e2e;\n    border-color: #2e2e2e; } }\n\n@-webkit-keyframes fadeHalf {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 0.2; } }\n\n@keyframes fadeHalf {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 0.2; } }\n\n@-webkit-keyframes floatinLeft {\n  0% {\n    opacity: 0;\n    margin-left: -5em; }\n  100% {\n    opacity: 1;\n    margin-left: 0em; } }\n\n@keyframes floatinLeft {\n  0% {\n    opacity: 0;\n    margin-left: -5em; }\n  100% {\n    opacity: 1;\n    margin-left: 0em; } }\n\n@-webkit-keyframes floatin {\n  0% {\n    opacity: 0;\n    margin-top: 10em; }\n  100% {\n    opacity: 1;\n    margin-top: 0em; } }\n\n@keyframes floatin {\n  0% {\n    opacity: 0;\n    margin-top: 10em; }\n  100% {\n    opacity: 1;\n    margin-top: 0em; } }\n\nbody {\n  max-width: 80em;\n  margin-left: auto;\n  margin-right: auto;\n  margin: 0px;\n  font-size: 18px;\n  background: #ffffff; }\n  body:after {\n    content: \" \";\n    display: block;\n    clear: both; }\n\nh1 {\n  font: 500 2em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n\nh2 {\n  font: 400 1.25em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n\nh3 {\n  font: 400 1em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n\ni {\n  font-family: \"Material Icons\"; }\n\n.footerBar {\n  box-sizing: border-box;\n  width: 100%;\n  float: left;\n  padding-left: 0.83333333%;\n  padding-right: 0.83333333%;\n  font: 400 0.75em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\";\n  color: #ffffff;\n  margin-top: 4em;\n  padding: .5em;\n  background-color: #3f3f3f;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4); }\n  .footerBar .comments {\n    box-sizing: border-box;\n    width: 50%;\n    float: left;\n    padding-left: 0.83333333%;\n    padding-right: 0.83333333%;\n    margin-bottom: 2em; }\n    .footerBar .comments a {\n      color: #FFC107;\n      text-decoration: none; }\n    .footerBar .comments a:hover {\n      color: #ffffff; }\n    @media (min-width: 0) and (max-width: 600px) {\n      .footerBar .comments {\n        box-sizing: border-box;\n        width: 100%;\n        float: left;\n        padding-left: 0.83333333%;\n        padding-right: 0.83333333%;\n        text-align: center; } }\n  .footerBar .donation {\n    box-sizing: border-box;\n    width: 50%;\n    float: left;\n    padding-left: 0.83333333%;\n    padding-right: 0.83333333%;\n    text-align: right; }\n    .footerBar .donation .donatebutton {\n      font: 400 1em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\";\n      padding: 1em;\n      margin-top: .5em;\n      border-style: solid;\n      border-width: 2px;\n      border-color: #2e2e2e;\n      border-radius: 5px;\n      transition-duration: 1s;\n      -webkit-transtion: 1s; }\n    .footerBar .donation .donatebutton:hover {\n      cursor: pointer;\n      background-color: #FFC107;\n      transition-duration: 1s;\n      -webkit-transtion: 1s; }\n    .footerBar .donation .address {\n      color: #FFC107;\n      font-weight: 500; }\n    @media (min-width: 0) and (max-width: 600px) {\n      .footerBar .donation {\n        box-sizing: border-box;\n        width: 100%;\n        float: left;\n        padding-left: 0.83333333%;\n        padding-right: 0.83333333%;\n        text-align: center; } }\n  .footerBar .disclaimer {\n    box-sizing: border-box;\n    width: 100%;\n    float: left;\n    padding-left: 0.83333333%;\n    padding-right: 0.83333333%;\n    margin-top: 2em;\n    text-align: left; }\n    .footerBar .disclaimer p a {\n      color: #FFC107;\n      text-decoration: none; }\n    .footerBar .disclaimer p a:hover {\n      color: #ffffff; }\n    .footerBar .disclaimer p span {\n      font-size: 1.25em;\n      text-decoration: underline;\n      font-weight: 500; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.donate = "Donate Bitcoin";
    }
    FooterComponent.prototype.donatebutton = function () {
        this.donate = "1FP6BsoZSEB7m7ovYANRFxGv49rEAyubts";
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header-->\r\n<div class=\"headerBar sticky\"> \r\n\t<div class=\"brandWrapper\">\r\n\t\t<img class =\"brand\" src=\"../assets/images/cryptocheck.svg\">\r\n\t\t<div class=\"brandTitle\">CryptoCheck.io | BETA</div>\r\n\t</div>\r\n\t<!--<img class= \"donate\" src=\"../assets/images/donate.svg\" mdTooltip=\"Donate\" mdTooltipPosition=\"before\"><-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,500);", ""]);

// module
exports.push([module.i, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline; }\n\nhtml {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ncaption, th, td {\n  text-align: left;\n  font-weight: normal;\n  vertical-align: middle; }\n\nq, blockquote {\n  quotes: none; }\n  q:before, q:after, blockquote:before, blockquote:after {\n    content: \"\";\n    content: none; }\n\na img {\n  border: none; }\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n  display: block; }\n\n@-webkit-keyframes fade {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes explanation {\n  0% {\n    opacity: 0.00; }\n  100% {\n    opacity: 1; } }\n\n@keyframes explanation {\n  0% {\n    opacity: 0.00; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes amountincrease {\n  0% { }\n  50% {\n    background-color: #34993C;\n    border-color: #34993C;\n    opacity: 0.5; }\n  100% {\n    background-color: #ffffff;\n    border-color: #2e2e2e; } }\n\n@keyframes amountincrease {\n  0% { }\n  50% {\n    background-color: #34993C;\n    border-color: #34993C;\n    opacity: 0.5; }\n  100% {\n    background-color: #ffffff;\n    border-color: #2e2e2e; } }\n\n@-webkit-keyframes amountdecrease {\n  0% { }\n  50% {\n    background-color: #993A2F;\n    border-color: #993A2F;\n    opacity: 0.5; }\n  100% {\n    background-color: #ffffff;\n    border-color: #2e2e2e; } }\n\n@keyframes amountdecrease {\n  0% { }\n  50% {\n    background-color: #993A2F;\n    border-color: #993A2F;\n    opacity: 0.5; }\n  100% {\n    background-color: #ffffff;\n    border-color: #2e2e2e; } }\n\n@-webkit-keyframes nameincrease {\n  0% { }\n  50% {\n    background-color: #34993C;\n    border-color: #34993C;\n    opacity: 0.5; }\n  100% {\n    background-color: #2e2e2e;\n    border-color: #2e2e2e; } }\n\n@keyframes nameincrease {\n  0% { }\n  50% {\n    background-color: #34993C;\n    border-color: #34993C;\n    opacity: 0.5; }\n  100% {\n    background-color: #2e2e2e;\n    border-color: #2e2e2e; } }\n\n@-webkit-keyframes namedecrease {\n  0% { }\n  50% {\n    background-color: #993A2F;\n    border-color: #993A2F;\n    opacity: 0.5; }\n  100% {\n    background-color: #2e2e2e;\n    border-color: #2e2e2e; } }\n\n@keyframes namedecrease {\n  0% { }\n  50% {\n    background-color: #993A2F;\n    border-color: #993A2F;\n    opacity: 0.5; }\n  100% {\n    background-color: #2e2e2e;\n    border-color: #2e2e2e; } }\n\n@-webkit-keyframes fadeHalf {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 0.2; } }\n\n@keyframes fadeHalf {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 0.2; } }\n\n@-webkit-keyframes floatinLeft {\n  0% {\n    opacity: 0;\n    margin-left: -5em; }\n  100% {\n    opacity: 1;\n    margin-left: 0em; } }\n\n@keyframes floatinLeft {\n  0% {\n    opacity: 0;\n    margin-left: -5em; }\n  100% {\n    opacity: 1;\n    margin-left: 0em; } }\n\n@-webkit-keyframes floatin {\n  0% {\n    opacity: 0;\n    margin-top: 10em; }\n  100% {\n    opacity: 1;\n    margin-top: 0em; } }\n\n@keyframes floatin {\n  0% {\n    opacity: 0;\n    margin-top: 10em; }\n  100% {\n    opacity: 1;\n    margin-top: 0em; } }\n\nbody {\n  max-width: 80em;\n  margin-left: auto;\n  margin-right: auto;\n  margin: 0px;\n  font-size: 18px;\n  background: #ffffff; }\n  body:after {\n    content: \" \";\n    display: block;\n    clear: both; }\n\nh1 {\n  font: 500 2em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n\nh2 {\n  font: 400 1.25em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n\nh3 {\n  font: 400 1em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\"; }\n\ni {\n  font-family: \"Material Icons\"; }\n\n.headerBar {\n  box-sizing: border-box;\n  width: 100%;\n  float: left;\n  padding-left: 0.83333333%;\n  padding-right: 0.83333333%;\n  padding: .5em;\n  background-color: #FFC107; }\n  .headerBar .brandWrapper {\n    box-sizing: border-box;\n    width: 100%;\n    float: left;\n    padding-left: 0.83333333%;\n    padding-right: 0.83333333%;\n    display: inline-block;\n    padding: 5px 0; }\n    .headerBar .brandWrapper .brand {\n      height: 40px; }\n      @media (min-width: 0) and (max-width: 445px) {\n        .headerBar .brandWrapper .brand {\n          display: none; } }\n    .headerBar .brandWrapper .brandTitle {\n      padding-top: 3px;\n      vertical-align: top;\n      display: block;\n      font: 500 1.75em \"Roboto\", \"Open Sans\", Helvetica, Arial, \"sans-serif\";\n      display: inline-block;\n      color: #ffffff; }\n      @media (min-width: 0) and (max-width: 445px) {\n        .headerBar .brandWrapper .brandTitle {\n          font-size: 1.5em; } }\n\n.sticky {\n  position: fixed;\n  top: 0px;\n  z-index: 1;\n  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.32); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map