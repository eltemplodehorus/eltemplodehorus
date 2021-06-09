(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Lhg":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");


class HeaderComponent {
    constructor() {
        this.show = false;
    }
    ngOnInit() {
    }
    toggleCollapse() {
        this.show = !this.show;
    }
    redirectHome() {
        location.assign('/home');
    }
    redirectServicio() {
        location.assign('/servicios');
    }
    redirectBlog() {
        location.assign('/blog');
    }
    redirectContactenos() {
        location.assign('/contactenos');
    }
    redirectAcercaDe() {
        location.assign('/acercade');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 38, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["src", "../../../assets/images/Logo.png", "alt", "imgLogo", 1, "img-logo", "imgr", 3, "click"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "h5"], [1, "navbar-toggler-icon", "span"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "h5", "text-white"], [1, "span"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_1_listener() { return ctx.redirectHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.toggleCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_8_listener() { return ctx.redirectHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_13_listener() { return ctx.redirectServicio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Serv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "icios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_20_listener() { return ctx.redirectBlog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_25_listener() { return ctx.redirectContactenos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cont\u00E1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "ctanos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_32_listener() { return ctx.redirectAcercaDe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Acerca \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " De");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"]], encapsulation: 2 });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Proyectos\respuestasalamor\src\main.ts */"zUnb");


/***/ }),

/***/ "0Pcf":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");


function HomeComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Amarres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Union de Pareja");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Limpias y Protecciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Magia Blanca");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tarot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 16, vars: 0, consts: [[1, "site-wrap"], [1, "site-section"], [1, "container"], [1, "row"], [1, "col-md-12", "text-center"], [1, "caption", "d-block", "mb-2", "font-secondary", "font-weight-bold", "text-white"], [1, "site-section-heading", "text-uppercase", "text-center", "font-secondary", "text-white"], [1, "div-carousel"], ["ngbSlide", "", "data-stellar-background-ratio", "0.5"], [1, "picsum-img-wrapper"], ["src", "assets/images/carrousel1.jpeg", "alt", "Angular Carousel 1", 1, "img-carousel"], [1, "carousel-caption"], [1, "h3-carousel"], ["src", "assets/images/carrousel2.jpeg", "alt", "Angular Carousel 2", 1, "img-carousel"], ["src", "assets/images/carrousel3.jpeg", "alt", "Angular Carousel 3", 1, "img-carousel"], ["src", "assets/images/IMG-20210204-WA0077.jpg", "alt", "Angular Carousel 4", 1, "img-carousel"], ["src", "assets/images/tarot.jpeg", "alt", "Angular Carousel 5", 1, "img-carousel"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Templo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "El templo de horus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngb-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_ng_template_11_Template, 5, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_ng_template_12_Template, 5, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_ng_template_13_Template, 5, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_ng_template_14_Template, 5, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_ng_template_15_Template, 5, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "5YQ+":
/*!********************************************************!*\
  !*** ./src/app/modules/trabajo3/trabajo3.component.ts ***!
  \********************************************************/
/*! exports provided: Trabajo3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trabajo3Component", function() { return Trabajo3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Trabajo3Component {
    constructor() { }
    ngOnInit() {
    }
}
Trabajo3Component.ɵfac = function Trabajo3Component_Factory(t) { return new (t || Trabajo3Component)(); };
Trabajo3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Trabajo3Component, selectors: [["app-trabajo3"]], decls: 3, vars: 0, consts: [[1, "site-wrap"], [1, "site-section"], [1, "container"]], template: function Trabajo3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFiYWpvMy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "J0I4":
/*!**********************************************************!*\
  !*** ./src/app/modules/acerca-de/acerca-de.component.ts ***!
  \**********************************************************/
/*! exports provided: AcercaDeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcercaDeComponent", function() { return AcercaDeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AcercaDeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AcercaDeComponent.ɵfac = function AcercaDeComponent_Factory(t) { return new (t || AcercaDeComponent)(); };
AcercaDeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AcercaDeComponent, selectors: [["app-acerca-de"]], decls: 9, vars: 0, consts: [[1, "site-wrap"], [1, "site-section"], [1, "container"], [1, "row", "tittle-home"], [1, "col-md-12", "text-center"], [1, "caption", "d-block", "mb-2", "font-secondary", "font-weight-bold", "text-white"], [1, "site-section-heading", "text-uppercase", "text-center", "font-secondary", "text-white"]], template: function AcercaDeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Templo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Acerca De");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2VyY2EtZGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "JNQS":
/*!********************************************************!*\
  !*** ./src/app/modules/trabajo1/trabajo1.component.ts ***!
  \********************************************************/
/*! exports provided: Trabajo1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trabajo1Component", function() { return Trabajo1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Trabajo1Component {
    constructor() { }
    ngOnInit() {
    }
}
Trabajo1Component.ɵfac = function Trabajo1Component_Factory(t) { return new (t || Trabajo1Component)(); };
Trabajo1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Trabajo1Component, selectors: [["app-trabajo1"]], decls: 3, vars: 0, consts: [[1, "site-wrap"], [1, "site-section"], [1, "container"]], template: function Trabajo1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFiYWpvMS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "MR0u":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 2, vars: 0, template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sidebar works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/header/header.component */ "/Lhg");
/* harmony import */ var _layout_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/chat/chat.component */ "jIJm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/footer/footer.component */ "kVkw");





class AppComponent {
    constructor() {
        this.title = 'El Templo De Horus';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [["id", "wrapper", 1, "d-flex"], ["id", "page-content-wrapper", 1, "page-content-wrapper"], [1, "container-fluid", 2, "padding-bottom", "20px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _layout_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "VA+8":
/*!********************************************************!*\
  !*** ./src/app/modules/trabajo2/trabajo2.component.ts ***!
  \********************************************************/
/*! exports provided: Trabajo2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trabajo2Component", function() { return Trabajo2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Trabajo2Component {
    constructor() { }
    ngOnInit() {
    }
}
Trabajo2Component.ɵfac = function Trabajo2Component_Factory(t) { return new (t || Trabajo2Component)(); };
Trabajo2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Trabajo2Component, selectors: [["app-trabajo2"]], decls: 3, vars: 0, consts: [[1, "site-wrap"], [1, "site-section"], [1, "container"]], template: function Trabajo2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFiYWpvMi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/home/home.component */ "0Pcf");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/header/header.component */ "/Lhg");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ "MR0u");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/footer/footer.component */ "kVkw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _layout_chat_chat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/chat/chat.component */ "jIJm");
/* harmony import */ var _modules_trabajo1_trabajo1_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/trabajo1/trabajo1.component */ "JNQS");
/* harmony import */ var _modules_trabajo2_trabajo2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/trabajo2/trabajo2.component */ "VA+8");
/* harmony import */ var _modules_trabajo3_trabajo3_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/trabajo3/trabajo3.component */ "5YQ+");
/* harmony import */ var _modules_trabajo4_trabajo4_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/trabajo4/trabajo4.component */ "owRu");
/* harmony import */ var _modules_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/servicios/servicios.component */ "fmVQ");
/* harmony import */ var _modules_blog_blog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/blog/blog.component */ "aArd");
/* harmony import */ var _modules_contactenos_contactenos_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/contactenos/contactenos.component */ "arTt");
/* harmony import */ var _modules_acerca_de_acerca_de_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/acerca-de/acerca-de.component */ "J0I4");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");


























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbAlertModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__["MDBBootstrapModule"].forRoot(),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _modules_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
        _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _layout_chat_chat_component__WEBPACK_IMPORTED_MODULE_13__["ChatComponent"],
        _modules_trabajo1_trabajo1_component__WEBPACK_IMPORTED_MODULE_14__["Trabajo1Component"],
        _modules_trabajo2_trabajo2_component__WEBPACK_IMPORTED_MODULE_15__["Trabajo2Component"],
        _modules_trabajo3_trabajo3_component__WEBPACK_IMPORTED_MODULE_16__["Trabajo3Component"],
        _modules_trabajo4_trabajo4_component__WEBPACK_IMPORTED_MODULE_17__["Trabajo4Component"],
        _modules_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_18__["ServiciosComponent"],
        _modules_blog_blog_component__WEBPACK_IMPORTED_MODULE_19__["BlogComponent"],
        _modules_contactenos_contactenos_component__WEBPACK_IMPORTED_MODULE_20__["ContactenosComponent"],
        _modules_acerca_de_acerca_de_component__WEBPACK_IMPORTED_MODULE_21__["AcercaDeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbAlertModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_22__["MDBRootModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"]] }); })();


/***/ }),

/***/ "aArd":
/*!************************************************!*\
  !*** ./src/app/modules/blog/blog.component.ts ***!
  \************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function BlogComponent_div_10_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlogComponent_div_10_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "em", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlogComponent_div_10_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlogComponent_div_10_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "em", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlogComponent_div_10_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlogComponent_div_10_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "em", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlogComponent_div_10_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlogComponent_div_10_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "em", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlogComponent_div_10_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "em", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlogComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "em", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BlogComponent_div_10_div_9_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BlogComponent_div_10_div_10_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BlogComponent_div_10_div_11_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BlogComponent_div_10_div_12_Template, 4, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BlogComponent_div_10_div_13_Template, 4, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BlogComponent_div_10_div_14_Template, 5, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BlogComponent_div_10_div_15_Template, 5, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BlogComponent_div_10_div_16_Template, 6, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BlogComponent_div_10_div_17_Template, 6, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.descripcion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.star === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.star === 1.5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.star === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.star === 2.5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.star === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.star === 3.5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.star === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.star === 4.5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.star === 5);
} }
class BlogComponent {
    constructor() {
        this.testimonials = [
            {
                nombre: 'Anna Quintana',
                descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus necessitatibus debitis libero eaque vero nihil repellendus maiores saepe. Rem assumenda impedit nihil fugit tempora, rerum asperiores harum voluptatem itaque..',
                img: 'data:image/png;base64,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',
                star: 4
            },
            {
                nombre: 'Pedro Lopez',
                descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus necessitatibus debitis libero eaque vero nihil repellendus maiores saepe. Rem assumenda impedit nihil fugit tempora, rerum asperiores harum voluptatem itaque..',
                img: 'data:image/png;base64,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',
                star: 4.5
            },
            {
                nombre: 'Juan Londoño',
                descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus necessitatibus debitis libero eaque vero nihil repellendus maiores saepe. Rem assumenda impedit nihil fugit tempora, rerum asperiores harum voluptatem itaque..',
                img: 'data:image/png;base64,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',
                star: 5
            },
            {
                nombre: 'Claudia Juliana Perez',
                descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus necessitatibus debitis libero eaque vero nihil repellendus maiores saepe. Rem assumenda impedit nihil fugit tempora, rerum asperiores harum voluptatem itaque..',
                img: 'data:image/png;base64,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',
                star: 5
            },
        ];
    }
    ngOnInit() {
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 11, vars: 1, consts: [[1, "site-wrap"], [1, "site-section"], [1, "container"], [1, "row", "tittle-home"], [1, "col-md-12", "text-center"], [1, "caption", "d-block", "mb-2", "font-secondary", "font-weight-bold", "text-white"], [1, "site-section-heading", "text-uppercase", "text-center", "font-secondary", "text-white"], [1, "row", "text-center"], ["class", "col-md-4 mb-md-0 mb-5", 4, "ngFor", "ngForOf"], [1, "col-md-4", "mb-md-0", "mb-5"], [1, "testimonial"], [1, "avatar", "mx-auto"], ["alt", "img-testimonials", 1, "rounded-circle", "z-depth-1", "img-fluid", 3, "src"], [1, "font-weight-bold", "dark-grey-text", "mt-4", "text-white"], [1, "font-weight-normal", "dark-grey-text", "text-white"], [1, "fas", "fa-quote-left", "pr-2"], ["class", "orange-text", 4, "ngIf"], [1, "orange-text"], [1, "fas", "fa-star"], [1, "fas", "fa-star-half-alt"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Templo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BlogComponent_div_10_Template, 18, 12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testimonials);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "arTt":
/*!**************************************************************!*\
  !*** ./src/app/modules/contactenos/contactenos.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactenosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactenosComponent", function() { return ContactenosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ContactenosComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Faltan campos por diligenciar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactenosComponent {
    constructor() {
    }
    ngOnInit() {
    }
    enviarEmail() {
        this.emailEmpresa = 'info@eltemplodehorus.com';
        this.asunto = 'Consulta%20con%20el%20maestro';
        this.mensajeAEnviar = 'Hola, soy ' + this.nombre + ', ' + this.mensaje + ', mi numero telefonico es ' + this.telefono + ' y mi correo electronico es ' + this.correo;
        const mailTo = 'mailto:' + this.emailEmpresa + '?subject=' + this.asunto + '&body=' + this.mensajeAEnviar;
        window.open(mailTo);
    }
}
ContactenosComponent.ɵfac = function ContactenosComponent_Factory(t) { return new (t || ContactenosComponent)(); };
ContactenosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactenosComponent, selectors: [["app-contactenos"]], decls: 66, vars: 6, consts: [[1, "site-wrap"], ["data-aos", "fade", 1, "site-section"], [1, "container"], [1, "row", "tittle-home"], [1, "col-md-12", "text-center"], [1, "caption", "d-block", "mb-2", "font-secondary", "font-weight-bold", "text-white"], [1, "site-section-heading", "text-uppercase", "text-center", "font-secondary", "text-white"], [1, "row"], [1, "col-md-12", "col-lg-8", "mb-5"], ["action", "#", 1, "p-5"], ["form", "ngForm"], [1, "row", "form-group"], [1, "col-md-12", "mb-3", "mb-md-0"], ["for", "fullname", 1, "font-weight-bold", "text-white"], ["type", "text", "id", "fullname", "placeholder", "Nombre", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-12"], ["for", "email", 1, "font-weight-bold", "text-white"], ["type", "email", "id", "email", "placeholder", "ejemplo@gmail.com", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "phone", 1, "font-weight-bold", "text-white"], ["type", "text", "id", "phone", "placeholder", "Telefono #", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "message", 1, "font-weight-bold", "text-white"], ["name", "message", "id", "message", "cols", "30", "rows", "5", "placeholder", "Digita tu mensaje y se enviara a nuestros expertos", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "h5", "text-white"], [1, "span"], ["type", "submit", "value", "Enviar email", 1, "btn", "btn-secondary-dummy", "text-white", "px-4", 3, "disabled", "click"], ["class", "pl-3 text-white", 4, "ngIf"], [1, "col-lg-4"], [1, "p-4", "mb-3"], [1, "h5", "mb-3", "text-white"], [1, "mb-0", "font-weight-bold", "text-white"], [1, "mb-4"], ["href", "tel:+12816528782", 1, "text-white"], ["href", "mailto:info@eltemplodehorus.com", 1, "text-white"], [1, "mb-0"], ["rel", "noopener noreferrer", 1, "pb-2", "pr-2", "pl-0"], ["src", "assets/images/pagos/Coppel.png", "alt", "img", 1, "content-img-reducer"], ["src", "assets/images/pagos/Intermex.png", "alt", "img", 1, "content-img-reducer"], ["src", "assets/images/pagos/MoneyGram.png", "alt", "img", 1, "content-img-reducer"], ["src", "assets/images/pagos/SigueCorp.png", "alt", "img", 1, "content-img-reducer"], ["src", "assets/images/pagos/WesternUnion.png", "alt", "img", 1, "content-img-reducer"], [1, "pl-3", "text-white"]], template: function ContactenosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Templo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contactenos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactenosComponent_Template_input_ngModelChange_17_listener($event) { return ctx.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Correo Electronico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactenosComponent_Template_input_ngModelChange_22_listener($event) { return ctx.correo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactenosComponent_Template_input_ngModelChange_27_listener($event) { return ctx.telefono = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactenosComponent_Template_textarea_ngModelChange_32_listener($event) { return ctx.mensaje = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactenosComponent_Template_input_click_37_listener() { return ctx.enviarEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ContactenosComponent_span_38_Template, 2, 0, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Cont\u00E1ctenos Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Cont\u00E1cto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "(1) 2816528782");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Correo Electronico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "info@eltemplodehorus.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "M\u00E9todos de Pagos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.correo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.telefono);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mensaje);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0ZW5vcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "fmVQ":
/*!**********************************************************!*\
  !*** ./src/app/modules/servicios/servicios.component.ts ***!
  \**********************************************************/
/*! exports provided: ServiciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosComponent", function() { return ServiciosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ServiciosComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class ServiciosComponent {
    constructor() {
        this.cards = [
            {
                title: 'Amarres',
                description: 'Somos expertos en realizar amarres de amor, y podemos lograr recuperar al ser amado. Que los sentimientos vuelvan a florecer, despertar el amor, la pasión y el deseo. Podemos doblegar su voluntad para que vuelva a respetarte y amarte de verdad. No hay problema si tiene otra relación.',
                buttonText: 'Ver Más',
                img: 'assets/images/carrousel1.jpeg',
                redirect: '/trabajo1',
                value: 748
            },
            {
                title: 'Union de Pareja',
                description: 'Retorno de pareja, amarres de amor, hechizos de amor, conjuros para enamorar, rituales de atracción, magia blanca para el amor, regreso del ser amado, atracción de pareja, rituales para recuperar el amor, conjuros para alejar a terceras personas.',
                buttonText: 'Ver Más',
                img: 'assets/images/IMG-20210204-WA0057.jpg',
                redirect: '/trabajo2',
                value: 658
            },
            {
                title: 'Limpias y Protecciones',
                description: 'Realizamos trabajos para ayudar a proteger de enemigos y ataques psíquicos que te puedan afectar, vive tranquilo y protegido de toda envidia y brujería. Mediante esta limpieza puede librarse de la mala suerte en los negocios y obtener un crecimiento económico que se puede notar al realizar cada uno de los rituales, todo con el fin de ayudarle a ser feliz.',
                buttonText: 'Ver Más',
                img: 'assets/images/IMG-20210204-WA0083.jpg',
                redirect: '/trabajo3',
                value: 271
            },
            {
                title: 'Magia Blanca',
                description: 'La Magia Blanca es un medio ritualistico y mágico, guiada por una serie de conocimientos y dones que generalmente son usados para lograr y obtener resultados en trabajos específicos, bien sean de dinero, amor, salud, etc. La magia funciona efectivamente ya que no trae consecuencias negativas de ninguna clase o tipo, ni para ti, ni para los tuyos.',
                buttonText: 'Ver Más',
                img: 'assets/images/IMG-20210204-WA0059.jpg',
                redirect: '/trabajo4',
                value: 183
            },
            {
                title: 'Lectura del Tarot',
                description: 'Antes de comenzar con tu lectura de Tarot es muy importante que te conectes con la tierra. Esto va a protegerte de la mala energía y ayudará a que te conectes con tus Ángeles Guardianes y Guía Espiritual. Si es que esto suena demasiado para ti entonces cierra los ojos y respira. Inhala y exhala lentamente diez veces y piensa en algo maravilloso que te hace feliz. Cuando estés listo para comenzar con tu lectura de Tarot, contáctanos para que disfrutes de la mejor experiencia.',
                buttonText: 'Ver Más',
                img: 'assets/images/tarot.jpeg',
                redirect: '/trabajo5',
                value: 2089
            }
        ];
        this.slides = [[]];
    }
    ngOnInit() {
        this.slides = this.chunk(this.cards, 2);
    }
    chunk(arr, chunkSize) {
        let R = [];
        for (let i = 0, len = arr.length; i < len; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    }
}
ServiciosComponent.ɵfac = function ServiciosComponent_Factory(t) { return new (t || ServiciosComponent)(); };
ServiciosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiciosComponent, selectors: [["app-servicios"]], decls: 13, vars: 1, consts: [[1, "site-wrap"], [1, "site-section"], [1, "container"], [1, "row"], [1, "col-md-12", "text-center"], [1, "caption", "d-block", "mb-2", "font-secondary", "font-weight-bold", "text-white"], [1, "site-section-heading", "text-uppercase", "text-center", "font-secondary", "text-white"], [1, "col-md-12", "block-13", "nav-direction-white"], [1, "nonloop-block-13", "owl-carousel"], ["class", "media-image", 4, "ngFor", "ngForOf"], [1, "media-image"], ["alt", "Image", 1, "img-fluid", 3, "src"], [1, "media-image-body"], [1, "font-secondary", "text-uppercase", "text-white"], [1, "section-counter"], [1, "counter"]], template: function ServiciosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Templo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ServiciosComponent_div_12_Template, 10, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNpb3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "jIJm":
/*!***********************************************!*\
  !*** ./src/app/layout/chat/chat.component.ts ***!
  \***********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ChatComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pol\u00EDticas de privacidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Este sitio es solo para mayores de 21 a\u00F1os, personas adultas y responsables. La llamada y consulta no tiene costo. Su operador puede aplicar costos de acuerdo a plan adquirido por usted. El uso de la informaci\u00F3n y asesor\u00EDa que est\u00E1 a punto de recibir es bajo su responsabilidad, estos servicios no sustituir\u00E1n la debida atenci\u00F3n m\u00E9dica, legal, financiera, psicol\u00F3gica, psiqui\u00E1trica; todos los casos son diferentes, por tanto los resultados pueden variar de una persona a otra, ante esto los casos pueden llegar a ser probables y no existe evidencia cient\u00EDfica o eficacia en lo mismo. \u00DAnicamente llegamos hasta donde el sentido com\u00FAn lo permite. Respetamos la privacidad, su informaci\u00F3n no ser\u00E1 compartida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_0_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.validatorPol(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Aceptar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChatComponent {
    constructor() {
        this.validatorPolicy = false;
    }
    ngOnInit() {
        this.validatorPolicy = false;
        const valPolicy = sessionStorage.getItem('validatorPolicy');
        this.validatorPolicy = valPolicy == 'true' ? true : false;
    }
    validatorPol() {
        if (this.validatorPolicy) {
            this.validatorPolicy = false;
            sessionStorage.setItem('validatorPolicy', 'false');
        }
        else
            this.validatorPolicy = true;
        sessionStorage.setItem('validatorPolicy', 'true');
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 6, vars: 1, consts: [["class", "card text-left politicas-privacidad", 4, "ngIf"], [1, "btn-whatsapp"], ["href", "https://api.whatsapp.com/send?phone=+12816528782&text=Hola%20quisiera%20hacer%20una%20consulta%20al%20maestro!", "target", "_blank"], [1, "h5", "text-white"], [1, "span"], ["src", "http://s2.accesoperu.com/logos/btn_whatsapp.png", "alt", ""], [1, "card", "text-left", "politicas-privacidad"], [1, "card-body"], [1, "card-title", "text-white"], [1, "card-text", "text-white", "text-small"], [1, "btn", "btn-secondary-dummy", "text-white", "px-4", 3, "click"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatComponent_div_0_Template, 10, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.validatorPolicy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "kVkw":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class FooterComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    redirectHome() {
        this.router.navigate(['home']);
    }
    redirectServicio() {
        this.router.navigate(['servicios']);
    }
    redirectBlog() {
        location.assign('/blog');
    }
    redirectContactenos() {
        location.assign('/contactenos');
    }
    redirectAcercaDe() {
        location.assign('/acercade');
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 82, vars: 0, consts: [[1, "py-5", "bg-primary"], [1, "container"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-md-6", "text-center", "mb-3", "mb-md-0"], [1, "h5", "text-white"], [1, "span"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "btn", "btn-bg-primary", "font-primary", "text-uppercase", 3, "click"], [1, "site-footer", "bg-dark"], [1, "row"], [1, "col-md-4", "mb-4", "mb-md-0"], [1, "footer-heading", "mb-4", "text-white"], [1, "text-white"], [1, "btn", "btn-secondary-dummy", "text-white", "px-4", 3, "click"], [1, "col-md-3", "mb-4", "mb-md-0", "ml-auto"], [1, "row", "mb-4"], [1, "col-md-6"], [1, "list-unstyled"], [3, "click"], [1, "col-md-12"], ["rel", "noopener noreferrer", 1, "pb-2", "pr-2", "pl-0"], ["src", "assets/images/pagos/Coppel.png", "alt", "img", 1, "content-img-reducer"], ["src", "assets/images/pagos/Intermex.png", "alt", "img", 1, "content-img-reducer"], ["src", "assets/images/pagos/MoneyGram.png", "alt", "img", 1, "content-img-reducer"], ["src", "assets/images/pagos/SigueCorp.png", "alt", "img", 1, "content-img-reducer"], ["src", "assets/images/pagos/WesternUnion.png", "alt", "img", 1, "content-img-reducer"], [1, "row", "pt-5", "mt-5", "text-center"], ["rel", "noopener noreferrer", 3, "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_6_listener() { return ctx.redirectContactenos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cont\u00E1ctenos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "TE PODEMOS AYUDAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Con nuestros maestros podr\u00E1s encontrar una mano amiga que te acompa\u00F1ar\u00E1 y guiar\u00E1 en la b\u00FAsqueda de soluciones en las que te sientes desesperado(a).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Somos expertos, con amplia experiencia ayud\u00E1ndote espiritualmente a mejorar tu vida, te ayudamos a recuperar a tu ser amado sin importar la distancia o el sexo, contribuimos a mejorar tu felicidad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_20_listener() { return ctx.redirectAcercaDe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ver M\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Men\u00FA R\u00E1pido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_29_listener() { return ctx.redirectHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_34_listener() { return ctx.redirectServicio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Serv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "icios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_41_listener() { return ctx.redirectBlog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_46_listener() { return ctx.redirectContactenos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Cont\u00E1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "ctanos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_53_listener() { return ctx.redirectAcercaDe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Acerca \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " De");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "M\u00E9todos de Pagos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Copyright \u00A9 All rights reserved by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_80_listener() { return ctx.redirectHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "El Templo De Horus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "owRu":
/*!********************************************************!*\
  !*** ./src/app/modules/trabajo4/trabajo4.component.ts ***!
  \********************************************************/
/*! exports provided: Trabajo4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trabajo4Component", function() { return Trabajo4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Trabajo4Component {
    constructor() { }
    ngOnInit() {
    }
}
Trabajo4Component.ɵfac = function Trabajo4Component_Factory(t) { return new (t || Trabajo4Component)(); };
Trabajo4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Trabajo4Component, selectors: [["app-trabajo4"]], decls: 3, vars: 0, consts: [[1, "site-wrap"], [1, "site-section"], [1, "container"]], template: function Trabajo4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFiYWpvNC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_acerca_de_acerca_de_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/acerca-de/acerca-de.component */ "J0I4");
/* harmony import */ var _modules_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/blog/blog.component */ "aArd");
/* harmony import */ var _modules_contactenos_contactenos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contactenos/contactenos.component */ "arTt");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/home/home.component */ "0Pcf");
/* harmony import */ var _modules_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/servicios/servicios.component */ "fmVQ");
/* harmony import */ var _modules_trabajo1_trabajo1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/trabajo1/trabajo1.component */ "JNQS");
/* harmony import */ var _modules_trabajo2_trabajo2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/trabajo2/trabajo2.component */ "VA+8");
/* harmony import */ var _modules_trabajo3_trabajo3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/trabajo3/trabajo3.component */ "5YQ+");
/* harmony import */ var _modules_trabajo4_trabajo4_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/trabajo4/trabajo4.component */ "owRu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    {
        path: '',
        component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'servicios',
        component: _modules_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_5__["ServiciosComponent"]
    },
    {
        path: 'blog',
        component: _modules_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"]
    },
    {
        path: 'contactenos',
        component: _modules_contactenos_contactenos_component__WEBPACK_IMPORTED_MODULE_3__["ContactenosComponent"]
    },
    {
        path: 'acercade',
        component: _modules_acerca_de_acerca_de_component__WEBPACK_IMPORTED_MODULE_1__["AcercaDeComponent"]
    },
    {
        path: 'trabajo1',
        component: _modules_trabajo1_trabajo1_component__WEBPACK_IMPORTED_MODULE_6__["Trabajo1Component"]
    },
    {
        path: 'trabajo2',
        component: _modules_trabajo2_trabajo2_component__WEBPACK_IMPORTED_MODULE_7__["Trabajo2Component"]
    },
    {
        path: 'trabajo3',
        component: _modules_trabajo3_trabajo3_component__WEBPACK_IMPORTED_MODULE_8__["Trabajo3Component"]
    },
    {
        path: 'trabajo4',
        component: _modules_trabajo4_trabajo4_component__WEBPACK_IMPORTED_MODULE_9__["Trabajo4Component"]
    },
    {
        path: '**',
        component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map