(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jerem\RiderProjects\Steinbauer\Steinbauer\ClientApp\main.ts */"QqbR");


/***/ }),

/***/ "0o3n":
/*!***************************************************!*\
  !*** ./ClientApp/app/add/addVehicle.component.ts ***!
  \***************************************************/
/*! exports provided: AddVehicle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehicle", function() { return AddVehicle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_vehicle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/vehicle */ "vJUo");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "g4ZZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AddVehicle_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var type_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r7);
} }
var AddVehicle = /** @class */ (function () {
    function AddVehicle(data, router) {
        this.data = data;
        this.router = router;
        this.vehicleTypes = [
            'Sedan', 'Truck', 'Crossover', 'Compact', 'Semi'
        ];
        this.submitted = false;
        this.errorMessage = "";
        this.model = new _shared_vehicle__WEBPACK_IMPORTED_MODULE_1__["Vehicle"]();
    }
    AddVehicle.prototype.gotoCheckout = function () {
        var _this = this;
        this.errorMessage = "";
        if (this.data.loginRequired) {
            // Force Login
            this.router.navigate(["login"]);
        }
        else {
            this.model.vehicleId = 0;
            for (var i = 0; i < this.data.vehicles.length; i++) {
                if (this.data.getExistingVehicle(i)) {
                    continue;
                }
                this.model.vehicleId = i;
                break;
            }
            this.data.vehicle.vehicleId = this.model.vehicleId;
            this.data.vehicle.ownerName = this.model.ownerName;
            if (this.model.engineRunning == undefined) {
                this.model.engineRunning = false;
            }
            this.data.vehicle.engineRunning = this.model.engineRunning;
            this.data.vehicle.fileName = "dodgeCharger.jpg";
            this.data.vehicle.vehicleType = this.vehicleTypes.indexOf(this.model.vehicleType.toString());
            this.data.vehicle.horsepower = this.model.horsepower;
            this.data.vehicle.torque = this.model.torque;
            this.data.vehicle.modifications = this.model.modifications;
            // Go to checkout             
            this.data.checkoutVehicle()
                .subscribe(function (success) {
                if (success) {
                    _this.router.navigate(["garage"]);
                }
            }, function (err) { return _this.errorMessage = "Failed to save order."; });
        }
    };
    AddVehicle.ɵfac = function AddVehicle_Factory(t) { return new (t || AddVehicle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    AddVehicle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddVehicle, selectors: [["addVehicle"]], decls: 43, vars: 12, consts: [["align", "left"], ["align", "center", 1, "row"], ["novalidate", "", 3, "ngSubmit"], ["vehicleForm", "ngForm"], [1, "form-group"], ["for", "ownerName"], ["type", "text", "id", "ownerName", "required", "", "name", "ownerName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ownerName", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "horsePower"], ["type", "number", "id", "horsePower", "required", "", "name", "horsepower", 1, "form-control", 3, "ngModel", "ngModelChange"], ["horsePower", "ngModel"], ["for", "torque"], ["type", "number", "id", "torque", "required", "", "name", "torque", 1, "form-control", 3, "ngModel", "ngModelChange"], ["torque", "ngModel"], ["for", "vehicleType"], ["id", "vehicleType", "required", "", "name", "vehicleType", 1, "form-control", 3, "ngModel", "ngModelChange"], ["vehicleType", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "engineRunning"], ["type", "checkbox", "id", "engineRunning", "name", "engineRunning", 1, "form-control", 3, "ngModel", "ngModelChange"], ["engineRunning", "ngModel"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [3, "value"]], template: function AddVehicle_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add a Vehicle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddVehicle_Template_form_ngSubmit_4_listener() { return ctx.gotoCheckout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Owner Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddVehicle_Template_input_ngModelChange_9_listener($event) { return ctx.model.ownerName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Owner Name is required. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Horsepower:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddVehicle_Template_input_ngModelChange_16_listener($event) { return ctx.model.horsepower = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Horsepower value is required. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Torque:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddVehicle_Template_input_ngModelChange_22_listener($event) { return ctx.model.torque = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Torque value is required ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Vehicle Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 16, 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddVehicle_Template_select_ngModelChange_29_listener($event) { return ctx.model.vehicleType = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AddVehicle_option_31_Template, 2, 2, "option", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Vehicle type is required. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Engine Running");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 20, 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddVehicle_Template_input_ngModelChange_37_listener($event) { return ctx.model.engineRunning = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Engine running status is required. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Add Vehicle ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.ownerName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.horsepower);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r2.valid || _r2.pristine);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.torque);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r3.valid || _r3.pristine);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.vehicleType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vehicleTypes);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r4.valid || _r4.pristine);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.engineRunning);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r6.valid || _r6.pristine);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2FkZC9hZGRWZWhpY2xlLmNvbXBvbmVudC5jc3MifQ== */"] });
    return AddVehicle;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddVehicle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "addVehicle",
                templateUrl: "addVehicle.component.html",
                styleUrls: ["addVehicle.component.css"]
            }]
    }], function () { return [{ type: _shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Bj0p":
/*!******************************************************!*\
  !*** ./ClientApp/app/checkout/checkout.component.ts ***!
  \******************************************************/
/*! exports provided: Checkout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout", function() { return Checkout; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dataService */ "g4ZZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function Checkout_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function Checkout_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var o_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r2.modificationName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r2.torque);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r2.horsepower);
} }
var Checkout = /** @class */ (function () {
    function Checkout(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
    }
    Checkout.prototype.confirmVehicle = function () {
        var _this = this;
        this.data.checkoutVehicle().subscribe(function (success) {
            if (success) {
                _this.router.navigate(["garage"]);
            }
        }, function (err) { return _this.errorMessage = "Failed to save order."; });
    };
    Checkout.ɵfac = function Checkout_Factory(t) { return new (t || Checkout)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    Checkout.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Checkout, selectors: [["checkout"]], decls: 42, vars: 8, consts: [[1, "row"], ["class", "alert alert-warning", 4, "ngIf"], [1, "table", "table-bordered", "table-hover"], [4, "ngFor", "ngForOf"], [1, "col-md-4", "col-md-offset-8", "text-right"], [1, "table", "table-condensed"], [1, "text-right"], [1, "btn", "btn-success", 3, "click"], ["routerLink", "/", 1, "btn", "btn-info"], [1, "alert", "alert-warning"], ["src", "/lib/img/ramTruck.jpg", "alt", "o.orderName", 1, "img"]], template: function Checkout_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Checkout_div_1_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Confirm Order");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ID");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Owner");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Engine");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "HP");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lb/Ft");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, Checkout_tr_32_Template, 9, 3, "tr", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "table", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Subtotal: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Checkout_Template_button_click_38_listener() { return ctx.confirmVehicle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Complete Purchase");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vehicle.vehicleId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vehicle.ownerName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vehicle.engineRunning);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vehicle.vehicleType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vehicle.horsepower);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vehicle.torque);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.order.modifications);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".vehicle-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 100px;\r\n    float: left;\r\n    margin: 0 2px;\r\n    border: solid 1px black;\r\n}\r\n\r\n.vehicle-info[_ngcontent-%COMP%]   .vehicle-name[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckIiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlaGljbGUtaW5mbyBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG59XHJcblxyXG4udmVoaWNsZS1pbmZvIC52ZWhpY2xlLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"] });
    return Checkout;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Checkout, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "checkout",
                templateUrl: "checkout.component.html",
                styleUrls: ['checkout.component.css']
            }]
    }], function () { return [{ type: _shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "FhR5":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "HJlE":
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent, VehicleType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleType", function() { return VehicleType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #42A948; \r\n}\r\n\r\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\r\n    border-left: 5px solid #a94442; \r\n}\r\n\r\n.label[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    font-family: monospace;\r\n    font-size: small;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    font-size: small;\r\n}\r\n\r\n.vehicle-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 100px;\r\n    float: left;\r\n    margin: 0 2px;\r\n    border: solid 1px black;\r\n}\r\n\r\n.vehicle-info[_ngcontent-%COMP%]   .vehicle-name[_ngcontent-%COMP%] {\r\n    font-size: medium;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFOztBQUU5RTtJQUNJLDhCQUE4QixFQUFFLFVBQVU7QUFDOUM7O0FBRUE7SUFDSSw4QkFBOEIsRUFBRSxRQUFRO0FBQzVDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXHJcbn1cclxuXHJcbi5uZy1pbnZhbGlkOm5vdChmb3JtKSB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGFibGUgdGQge1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi50YWJsZSB0aCB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4udmVoaWNsZS1pbmZvIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbn1cclxuXHJcbi52ZWhpY2xlLWluZm8gLnZlaGljbGUtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ["./app.component.css"]
            }]
    }], null, null); })();
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Sedan"] = 0] = "Sedan";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Crossover"] = 2] = "Crossover";
    VehicleType[VehicleType["Compact"] = 3] = "Compact";
    VehicleType[VehicleType["Semi"] = 4] = "Semi";
})(VehicleType || (VehicleType = {}));


/***/ }),

/***/ "J4hL":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "HJlE");
/* harmony import */ var _garage_vehicleList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./garage/vehicleList.component */ "UAzs");
/* harmony import */ var _garage_modificationList_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./garage/modificationList.component */ "hQ3K");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/dataService */ "g4ZZ");
/* harmony import */ var _garage_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./garage/cart.component */ "Zt2M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _garage_garage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./garage/garage.component */ "YVk9");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkout/checkout.component */ "Bj0p");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "fbMm");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit/edit.component */ "PVaS");
/* harmony import */ var _add_addVehicle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add/addVehicle.component */ "0o3n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

















var routes = [
    { path: "", component: _garage_garage_component__WEBPACK_IMPORTED_MODULE_9__["Garage"] },
    { path: "checkout", component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["Checkout"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["Login"] },
    { path: "edit", component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_12__["Edit"] },
    { path: "addVehicle", component: _add_addVehicle_component__WEBPACK_IMPORTED_MODULE_13__["AddVehicle"] },
    { path: "garage", component: _garage_garage_component__WEBPACK_IMPORTED_MODULE_9__["Garage"] },
    { path: "app", component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            _shared_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    enableTracing: false // for debugging the routes
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _garage_vehicleList_component__WEBPACK_IMPORTED_MODULE_4__["VehicleList"],
        _garage_modificationList_component__WEBPACK_IMPORTED_MODULE_5__["ModificationList"],
        _garage_cart_component__WEBPACK_IMPORTED_MODULE_7__["Cart"],
        _garage_garage_component__WEBPACK_IMPORTED_MODULE_9__["Garage"],
        _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["Checkout"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_11__["Login"],
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_12__["Edit"],
        _add_addVehicle_component__WEBPACK_IMPORTED_MODULE_13__["AddVehicle"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _garage_vehicleList_component__WEBPACK_IMPORTED_MODULE_4__["VehicleList"],
                    _garage_modificationList_component__WEBPACK_IMPORTED_MODULE_5__["ModificationList"],
                    _garage_cart_component__WEBPACK_IMPORTED_MODULE_7__["Cart"],
                    _garage_garage_component__WEBPACK_IMPORTED_MODULE_9__["Garage"],
                    _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["Checkout"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_11__["Login"],
                    _edit_edit_component__WEBPACK_IMPORTED_MODULE_12__["Edit"],
                    _add_addVehicle_component__WEBPACK_IMPORTED_MODULE_13__["AddVehicle"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes, {
                        useHash: true,
                        enableTracing: false // for debugging the routes
                    }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
                ],
                providers: [
                    _shared_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "JqFU":
/*!***************************************!*\
  !*** ./ClientApp/app/shared/order.ts ***!
  \***************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var _vehicle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle */ "vJUo");

var Order = /** @class */ (function () {
    function Order() {
        this.orderDate = new Date();
        this.orderVehicle = new _vehicle__WEBPACK_IMPORTED_MODULE_0__["Vehicle"]();
        this.orderVehicles = new Array();
        this.modifications = new Array();
        /*
            get horsepowerTotal(): number {
                return _.sum(_.map(this.modifications, m => m.horsepower));
            };
        
            get torqueTotal(): number {
                return _.sum(_.map(this.modifications, m => m.torque));
            }; */
    }
    return Order;
}());



/***/ }),

/***/ "PVaS":
/*!**********************************************!*\
  !*** ./ClientApp/app/edit/edit.component.ts ***!
  \**********************************************/
/*! exports provided: Edit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return Edit; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_vehicle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/vehicle */ "vJUo");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "g4ZZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _garage_modificationList_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../garage/modificationList.component */ "hQ3K");








function Edit_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var type_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r7);
} }
var Edit = /** @class */ (function () {
    function Edit(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.vehicle = new _shared_vehicle__WEBPACK_IMPORTED_MODULE_1__["Vehicle"]();
        this.model = new _shared_vehicle__WEBPACK_IMPORTED_MODULE_1__["Vehicle"]();
        this.vehicleTypes = [
            'Sedan', 'Truck', 'Crossover', 'Compact', 'Semi'
        ];
        this.vehicle = data.vehicle;
    }
    Edit.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadVehicle(this.vehicle).subscribe(function () {
            return _this.vehicle = _this.data.vehicle;
        });
    };
    Edit.prototype.onSubmit = function () {
        var _this = this;
        this.vehicle.vehicleType = this.vehicleTypes.indexOf(this.vehicle.vehicleType.toString());
        alert("Engine Status: " + this.vehicle.engineRunning);
        this.data.updateVehicle(this.vehicle)
            .subscribe(function (success) {
            if (success) {
                _this.router.navigate(["/"]);
            }
        }, function (err) { return _this.errorMessage = "Failed to add new vehicle."; });
    };
    Edit.ɵfac = function Edit_Factory(t) { return new (t || Edit)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    Edit.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Edit, selectors: [["edit"]], decls: 48, vars: 13, consts: [["align", "center"], ["align", "center", 1, "row-cols-md-12"], [1, "img-thumbnail", 3, "src"], ["novalidate", "", 3, "ngSubmit"], ["vehicleForm", "ngForm"], [1, "form-group"], ["for", "ownerName"], ["type", "text", "id", "ownerName", "required", "", "name", "ownerName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ownerName", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "horsePower"], ["type", "number", "id", "horsePower", "required", "", "name", "horsepower", 1, "form-control", 3, "ngModel", "ngModelChange"], ["horsePower", "ngModel"], ["for", "torque"], ["type", "number", "id", "torque", "required", "", "name", "torque", 1, "form-control", 3, "ngModel", "ngModelChange"], ["torque", "ngModel"], ["for", "vehicleType"], ["id", "vehicleType", "required", "", "name", "vehicleType", 1, "form-control", 3, "ngModel", "ngModelChange"], ["vehicleType", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "engineRunning"], ["type", "checkbox", "id", "engineRunning", "name", "engineRunning", "ngModel", "checked", 1, "form-control", 3, "ngModel", "ngModelChange"], ["engineRunning", "ngModel"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [3, "value"]], template: function Edit_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Vehicle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function Edit_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Owner Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Edit_Template_input_ngModelChange_9_listener($event) { return ctx.vehicle.ownerName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Owner Name is required. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Horsepower:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Edit_Template_input_ngModelChange_16_listener($event) { return ctx.vehicle.horsepower = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Horsepower value is required. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Torque:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Edit_Template_input_ngModelChange_22_listener($event) { return ctx.vehicle.torque = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Torque value is required ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Vehicle Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 17, 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Edit_Template_select_ngModelChange_29_listener($event) { return ctx.vehicle.vehicleType = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, Edit_option_31_Template, 2, 2, "option", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Vehicle type is required. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Engine Running");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 21, 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Edit_Template_input_ngModelChange_37_listener($event) { return ctx.vehicle.engineRunning = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Engine running status is required. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Submit ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "modification-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/lib/img/", ctx.data.vehicle.fileName, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.vehicle.ownerName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.vehicle.horsepower);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r2.valid || _r2.pristine);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.vehicle.torque);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r3.valid || _r3.pristine);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.vehicle.vehicleType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vehicleTypes);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r4.valid || _r4.pristine);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.vehicle.engineRunning);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r6.valid || _r6.pristine);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _garage_modificationList_component__WEBPACK_IMPORTED_MODULE_6__["ModificationList"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */"] });
    return Edit;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Edit, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "edit",
                templateUrl: "edit.component.html",
                styleUrls: ["edit.component.css"]
            }]
    }], function () { return [{ type: _shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "QqbR":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "FhR5");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "J4hL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "SUrT":
/*!**********************************************!*\
  !*** ./ClientApp/app/shared/modification.ts ***!
  \**********************************************/
/*! exports provided: Modification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modification", function() { return Modification; });
var Modification = /** @class */ (function () {
    function Modification() {
    }
    return Modification;
}());



/***/ }),

/***/ "UAzs":
/*!*******************************************************!*\
  !*** ./ClientApp/app/garage/vehicleList.component.ts ***!
  \*******************************************************/
/*! exports provided: VehicleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleList", function() { return VehicleList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "g4ZZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function VehicleList_tr_16_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Running");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleList_tr_16_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Stopped");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VehicleList_tr_16_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, VehicleList_tr_16_td_9_Template, 3, 0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, VehicleList_tr_16_td_10_Template, 3, 0, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleList_tr_16_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var v_r1 = ctx.$implicit; var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onEdit(v_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VehicleList_tr_16_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var v_r1 = ctx.$implicit; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onDelete(v_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var v_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](v_r1.ownerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.displayVehicleTypeName(v_r1.vehicleType));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", v_r1.horsepower, "hp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", v_r1.torque, "lb/ft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", v_r1.engineRunning == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", v_r1.engineRunning == false);
} }
var VehicleList = /** @class */ (function () {
    function VehicleList(data, router) {
        var _this = this;
        this.data = data;
        this.router = router;
        this.vehicles = data.vehicles;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.mySubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.router.navigated = false;
            }
        });
    }
    VehicleList.prototype.onEdit = function (vehicle) {
        this.data.vehicle = vehicle;
        this.router.navigate(["edit"]);
    };
    VehicleList.prototype.onDelete = function (vehicle) {
        var _this = this;
        this.data.deleteVehicle(vehicle).subscribe(function () {
            _this.router.navigate(["garage"]);
        });
    };
    VehicleList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadVehicles().subscribe(function () {
            return _this.vehicles = _this.data.vehicles;
        });
    };
    VehicleList.prototype.ngOnDestroy = function () {
        if (this.mySubscription) {
            this.mySubscription.unsubscribe();
        }
    };
    VehicleList.prototype.displayEngineStatus = function (engineStatus) {
        if (engineStatus == true)
            return "Running";
        else
            return "Stopped";
    };
    VehicleList.prototype.displayVehicleTypeName = function (vehicleType) {
        switch (vehicleType) {
            case 0:
                return "Sedan";
            case 1:
                return "Truck";
            case 2:
                return "Crossover";
            case 3:
                return "Compact";
            case 4:
                return "Semi Truck";
        }
        return "Undefined";
    };
    VehicleList.ɵfac = function VehicleList_Factory(t) { return new (t || VehicleList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    VehicleList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleList, selectors: [["vehicle-list"]], decls: 17, vars: 1, consts: [[1, "row"], [1, "vehicle-info", "table", "table-hover"], [1, "hidden-medium"], [4, "ngFor", "ngForOf"], ["class", "table-success", 4, "ngIf"], ["class", "table-warning", 4, "ngIf"], [1, "pull-right"], ["id", "editButton", 1, "btn", "btn-warning", "btn-sm", "margin-right", 3, "click"], [1, "glyphicon", "glyphicon-edit"], [1, "hidden-xs"], ["id", "deleteButton", 1, "btn", "btn-danger", "btn-sm", "margin-right", 3, "click"], [1, "glyphicon", "glyphicon-edit>"], [1, "table-success"], [1, "glyphicon", "glyphicon-success"], [1, "table-warning"], [1, "glyphicon", "glyphicon-remove"]], template: function VehicleList_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Owner's Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Vehicle Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Horsepower");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Torque");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Engine Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, VehicleList_tr_16_Template, 23, 6, "tr", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vehicles);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".vehicle-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 100px;\r\n    float: left;\r\n    margin: 0 2px;\r\n    border: solid 1px black;\r\n}\r\n\r\n.vehicle-info[_ngcontent-%COMP%]   .vehicle-name[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    font-size: small;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvZ2FyYWdlL3ZlaGljbGVMaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvZ2FyYWdlL3ZlaGljbGVMaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVoaWNsZS1pbmZvIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbn1cclxuXHJcbi52ZWhpY2xlLWluZm8gLnZlaGljbGUtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50YWJsZSB0aCB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59Il19 */"] });
    return VehicleList;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "vehicle-list",
                templateUrl: "vehicleList.component.html",
                styleUrls: ["vehicleList.component.css"]
            }]
    }], function () { return [{ type: _shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "YVk9":
/*!**************************************************!*\
  !*** ./ClientApp/app/garage/garage.component.ts ***!
  \**************************************************/
/*! exports provided: Garage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Garage", function() { return Garage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dataService */ "g4ZZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_addVehicle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add/addVehicle.component */ "0o3n");
/* harmony import */ var _vehicleList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicleList.component */ "UAzs");






var Garage = /** @class */ (function () {
    function Garage(data, router) {
        this.data = data;
        this.router = router;
        this.title = 'Steinbauer Garage';
        this.data = data;
    }
    Garage.ɵfac = function Garage_Factory(t) { return new (t || Garage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    Garage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Garage, selectors: [["the-garage"]], decls: 6, vars: 0, consts: [[1, "row"], [1, "col-sm-3"], [1, "col-sm-9"]], template: function Garage_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "addVehicle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "vehicle-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_add_addVehicle_component__WEBPACK_IMPORTED_MODULE_3__["AddVehicle"], _vehicleList_component__WEBPACK_IMPORTED_MODULE_4__["VehicleList"]], encapsulation: 2 });
    return Garage;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Garage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "the-garage",
                templateUrl: "garage.component.html"
            }]
    }], function () { return [{ type: _shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Zt2M":
/*!************************************************!*\
  !*** ./ClientApp/app/garage/cart.component.ts ***!
  \************************************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dataService */ "g4ZZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function Cart_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var o_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r2.modificationName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", o_r2.horsepower, "hp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", o_r2.torque, "lb/ft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r2.horsepower + o_r2.torque);
} }
function Cart_button_17_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Cart_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onCheckout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var Cart = /** @class */ (function () {
    function Cart(data, router) {
        this.data = data;
        this.router = router;
    }
    Cart.prototype.onCheckout = function () {
        if (this.data.loginRequired) {
            // Force Login
            this.router.navigate(["login"]);
        }
        else {
            this.router.navigate(["checkout"]);
            // Go to checkout
        }
    };
    Cart.ɵfac = function Cart_Factory(t) { return new (t || Cart)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    Cart.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Cart, selectors: [["the-cart"]], decls: 18, vars: 3, consts: [[1, "table", "table-condensed", "table-hover"], [4, "ngFor", "ngForOf"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], [1, "btn", "btn-success", 3, "click"]], template: function Cart_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Shopping Cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Product");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "hp");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "lb/ft");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Gains");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Cart_tr_16_Template, 9, 4, "tr", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, Cart_button_17_Template, 2, 0, "button", 2);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ItemCount: ", ctx.data.order.modifications.length, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.order.modifications);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.order.modifications.length > 0);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], encapsulation: 2 });
    return Cart;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Cart, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "the-cart",
                templateUrl: "cart.component.html",
                styleUrls: []
            }]
    }], function () { return [{ type: _shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "fbMm":
/*!************************************************!*\
  !*** ./ClientApp/app/login/login.component.ts ***!
  \************************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dataService */ "g4ZZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function Login_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function Login_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Login_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var Login = /** @class */ (function () {
    function Login(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
            username: "",
            password: ""
        };
    }
    Login.prototype.onLogin = function () {
        var _this = this;
        this.data.login(this.creds)
            .subscribe(function (success) {
            if (_this.data.order.modifications.length == 0) {
                _this.router.navigate(["/"]);
            }
            else {
                _this.router.navigate(["checkout"]);
            }
        }, function (err) { return _this.errorMessage = "Failed to login."; });
    };
    Login.ɵfac = function Login_Factory(t) { return new (t || Login)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    Login.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Login, selectors: [["login"]], decls: 21, vars: 6, consts: [[1, "row"], [1, "col-md-4", "offset-md-4"], ["class", "alert alert-warning", 4, "ngIf"], ["novalidate", "", 3, "submit"], ["theForm", "ngForm"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "submit", "value", "Login", 1, "btn", "btn-success", 3, "disabled"], ["routerLink", "/", 1, "btn", "btn-default"], [1, "alert", "alert-warning"], [1, "text-danger"]], template: function Login_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Login_div_2_Template, 2, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function Login_Template_form_submit_3_listener() { return ctx.onLogin(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Login_Template_input_ngModelChange_8_listener($event) { return ctx.creds.username = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Login_div_10_Template, 2, 0, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Login_Template_input_ngModelChange_14_listener($event) { return ctx.creds.password = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Login_div_16_Template, 2, 0, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.creds.username);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.invalid && _r2.errors.required && _r2.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.creds.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.invalid && _r4.errors.required && _r4.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });
    return Login;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Login, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "login",
                templateUrl: "login.component.html"
            }]
    }], function () { return [{ type: _shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "g4ZZ":
/*!*********************************************!*\
  !*** ./ClientApp/app/shared/dataService.ts ***!
  \*********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _vehicle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vehicle */ "vJUo");
/* harmony import */ var _modification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modification */ "SUrT");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order */ "JqFU");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.token = "";
        this.vehicle = new _vehicle__WEBPACK_IMPORTED_MODULE_2__["Vehicle"]();
        this.order = new _order__WEBPACK_IMPORTED_MODULE_4__["Order"]();
        this.vehicles = [];
        this.modifications = [];
    }
    Object.defineProperty(DataService.prototype, "loginRequired", {
        get: function () {
            //return this.token.length == 0 || this.tokenExpiration > new Date();
            return false;
        },
        enumerable: false,
        configurable: true
    });
    DataService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post("/account/createtoken", creds)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            _this.token = data.token;
            _this.tokenExpiration = data.expiration;
            return true;
        }));
    };
    DataService.prototype.checkout = function () {
        var _this = this;
        if (!this.order.orderVehicle) {
            alert("Vehicle not found.");
        }
        return this.http.post("/api/vehicles", this.order, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            _this.order = new _order__WEBPACK_IMPORTED_MODULE_4__["Order"]();
            return true;
        }));
    };
    DataService.prototype.checkoutVehicle = function () {
        var _this = this;
        return this.http.post("/api/vehicles", this.vehicle, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            _this.vehicle = new _vehicle__WEBPACK_IMPORTED_MODULE_2__["Vehicle"]();
            return true;
        }));
    };
    DataService.prototype.loadVehicles = function () {
        var _this = this;
        return this.http.get("/api/vehicles")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            _this.vehicles = data;
            return true;
        }));
    };
    DataService.prototype.getExistingVehicle = function (id) {
        var url = "/api/vehicles/" + id.toString();
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            if (response.vehicleId == id)
                return true;
        }));
    };
    DataService.prototype.updateVehicle = function (vehicle) {
        var _this = this;
        var url = "/api/vehicles/" + vehicle.vehicleId.toString();
        return this.http.put(url, this.vehicle)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            _this.vehicle = new _vehicle__WEBPACK_IMPORTED_MODULE_2__["Vehicle"]();
            return true;
        }));
    };
    DataService.prototype.loadVehicle = function (vehicle) {
        var _this = this;
        var url = "/api/vehicles/" + vehicle.vehicleId.toString();
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            _this.vehicle = response;
            return true;
        }));
    };
    DataService.prototype.deleteVehicle = function (vehicle) {
        var _this = this;
        var url = "/api/vehicles/" + vehicle.vehicleId.toString();
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            _this.vehicle = new _vehicle__WEBPACK_IMPORTED_MODULE_2__["Vehicle"]();
            return true;
        }));
    };
    DataService.prototype.loadModifications = function () {
        var _this = this;
        return this.http.get("/api/mods")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            _this.modifications = data;
            return true;
        }));
    };
    DataService.prototype.addToOrder = function (newModification) {
        var mod = new _modification__WEBPACK_IMPORTED_MODULE_3__["Modification"]();
        mod.modificationId = newModification.modificationId;
        mod.torque = newModification.torque;
        mod.horsepower = newModification.horsepower;
        mod.modificationName = newModification.modificationName;
        this.order.modifications.push(mod);
    };
    DataService.prototype.removeFromOrder = function (modification) {
        this.order.modifications.splice(this.order.modifications.indexOf(modification), 1);
    };
    DataService.prototype.addVehicleToOrder = function (newVehicle) {
        var veh = new _vehicle__WEBPACK_IMPORTED_MODULE_2__["Vehicle"]();
        veh.vehicleId = newVehicle.vehicleId;
        veh.ownerName = newVehicle.ownerName;
        veh.engineRunning = true;
        veh.date = new Date();
        veh.fileName = "dodgeCharger.jpg";
        //veh.vehicleType = 1;
        veh.horsepower = newVehicle.horsepower;
        veh.torque = newVehicle.torque;
        this.order.orderVehicle = veh;
        this.order.orderVehicles.push(veh);
    };
    DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
    return DataService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "hQ3K":
/*!************************************************************!*\
  !*** ./ClientApp/app/garage/modificationList.component.ts ***!
  \************************************************************/
/*! exports provided: ModificationList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationList", function() { return ModificationList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dataService */ "g4ZZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ModificationList_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Horsepower Gains:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Torque:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModificationList_div_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var m_r1 = ctx.$implicit; var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addModificationToOrder(m_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModificationList_div_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var m_r1 = ctx.$implicit; var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.removeModification(m_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var m_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r1.modificationName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r1.horsepower, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r1.torque, "");
} }
var ModificationList = /** @class */ (function () {
    function ModificationList(data) {
        this.data = data;
        this.modifications = [];
        this.modifications = data.modifications;
    }
    ModificationList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadModifications().subscribe(function () {
            return _this.modifications = _this.data.modifications;
        });
    };
    ModificationList.prototype.addModificationToOrder = function (modification) {
        this.data.addToOrder(modification);
    };
    ModificationList.prototype.removeModification = function (modification) {
        this.data.removeFromOrder(modification);
    };
    ModificationList.ɵfac = function ModificationList_Factory(t) { return new (t || ModificationList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
    ModificationList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModificationList, selectors: [["modification-list"]], decls: 2, vars: 1, consts: [[1, "row", "modification-info"], ["class", "col-md-4 well well-sm", 4, "ngFor", "ngForOf"], [1, "col-md-4", "well", "well-sm"], [1, "modification-name"], ["id", "addButton", 1, "btn", "btn-success", "btn-sm", "pull-right", 3, "click"], ["id", "removeButton", 1, "btn", "btn-danger", "btn-sm", "pull-left", 3, "click"]], template: function ModificationList_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModificationList_div_1_Template, 15, 3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.modifications);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".modification-info[_ngcontent-%COMP%]   .modification-name[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvZ2FyYWdlL21vZGlmaWNhdGlvbkxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckIiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9nYXJhZ2UvbW9kaWZpY2F0aW9uTGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGlmaWNhdGlvbi1pbmZvIC5tb2RpZmljYXRpb24tbmFtZSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"] });
    return ModificationList;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModificationList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "modification-list",
                templateUrl: "modificationList.component.html",
                styleUrls: ["modificationList.component.css"]
            }]
    }], function () { return [{ type: _shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "vJUo":
/*!*****************************************!*\
  !*** ./ClientApp/app/shared/vehicle.ts ***!
  \*****************************************/
/*! exports provided: Vehicle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vehicle", function() { return Vehicle; });
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.modifications = new Array();
    }
    return Vehicle;
}());



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