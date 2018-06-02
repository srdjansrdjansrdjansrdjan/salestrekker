webpackJsonp([1,4],{

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 159;


/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(166);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Srdjan/Desktop/salestrekkerapp/angular-src/src/main.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
        //ovde smo dobili url na kom smo trenutno, ako je finalForm strana onda se ne salje header
        var finalFormTrue = window.location.href.split("/")[3];
        // console.log("current url: " + finalFormTrue);
        if (finalFormTrue == "finalForm") {
            this.navbarOnOff = false;
        }
        else {
            this.navbarOnOff = true;
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(364),
            styles: [__webpack_require__(358)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=C:/Users/Srdjan/Desktop/salestrekkerapp/angular-src/src/app.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_qrcode2__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_form_creation_form_creation_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_dashboard_to_form_creation_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_phone_mask__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_text_mask__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_final_form_final_form_component__ = __webpack_require__(168);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    // {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'formCreation', component: __WEBPACK_IMPORTED_MODULE_17__components_form_creation_form_creation_component__["a" /* FormCreationComponent */] },
    { path: 'finalForm/:finalFormId', component: __WEBPACK_IMPORTED_MODULE_21__components_final_form_final_form_component__["a" /* FinalFormComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_form_creation_form_creation_component__["a" /* FormCreationComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_final_form_final_form_component__["a" /* FinalFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_16_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_19_ngx_phone_mask__["a" /* NgxPhoneMaskModule */],
                __WEBPACK_IMPORTED_MODULE_20_angular2_text_mask__["TextMaskModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_18__services_dashboard_to_form_creation_service__["a" /* DashboardToFormCreationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=C:/Users/Srdjan/Desktop/salestrekkerapp/angular-src/src/app.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dashboard_to_form_creation_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages_module_flash_messages_service__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { NgForm } from "@angular/forms";





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, au, dtf, flashMessage) {
        this.router = router;
        this.au = au;
        this.dtf = dtf;
        this.flashMessage = flashMessage;
        this.formTypes = [
            'company',
            'person'
        ];
        this.requiredDataList = [];
        this.requiredForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            'companyNameRequired': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            'firstNameRequired': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            'middleNameRequired': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            'familyNameRequired': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            'dateOfBirthRequired': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            'maritalStatusRequired': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            'countryOfResidenceRequired': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            'addressOfResidenceRequired': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            'phoneNumberRequired': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            'servicesInterestedInRequired': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            'additionalServicesRequiredRequired': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            'notesRequired': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // dobijemo usera iz baze
        this.au.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            // console.log(profile.user)
            // console.log(profile.user._id)
            _this.currentUserId = profile.user._id;
            // console.log("user id je :" + this.currentUserId);
            // console.log("user je :" + this.user);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent.prototype.deleteFormType = function () {
        this.requiredForm.reset();
    };
    DashboardComponent.prototype.createForm = function (requiredDataList) {
        var _this = this;
        if (this.requiredForm.value.companyNameRequired == true) {
            this.dtf.addPassData({ key: "companyNameRequired", value: "true" });
        }
        if (this.requiredForm.value.firstNameRequired == true) {
            this.dtf.addPassData({ key: "firstNameRequired", value: "true" });
        }
        if (this.requiredForm.value.middleNameRequired == true) {
            this.dtf.addPassData({ key: "middleNameRequired", value: "true" });
        }
        if (this.requiredForm.value.familyNameRequired == true) {
            this.dtf.addPassData({ key: "familyNameRequired", value: "true" });
        }
        if (this.requiredForm.value.dateOfBirthRequired == true) {
            this.dtf.addPassData({ key: "dateOfBirthRequired", value: "true" });
        }
        if (this.requiredForm.value.maritalStatusRequired == true) {
            this.dtf.addPassData({ key: "maritalStatusRequired", value: "true" });
        }
        if (this.requiredForm.value.countryOfResidenceRequired == true) {
            this.dtf.addPassData({ key: "countryOfResidenceRequired", value: "true" });
        }
        if (this.requiredForm.value.addressOfResidenceRequired == true) {
            this.dtf.addPassData({ key: "addressOfResidenceRequired", value: "true" });
        }
        if (this.requiredForm.value.phoneNumberRequired == true) {
            this.dtf.addPassData({ key: "phoneNumberRequired", value: "true" });
        }
        if (this.requiredForm.value.servicesInterestedInRequired == true) {
            this.dtf.addPassData({ key: "servicesInterestedInRequired", value: "true" });
        }
        if (this.requiredForm.value.additionalServicesRequiredRequired == true) {
            this.dtf.addPassData({ key: "additionalServicesRequiredRequired", value: "true" });
        }
        if (this.requiredForm.value.notesRequired == true) {
            this.dtf.addPassData({ key: "notesRequired", value: "true" });
        }
        this.dtf.addPassData({ key: "formType", value: this.formType });
        var userFormCreated = {
            requestedUserId: this.currentUserId,
            fields: this.dtf.getPassData()
        };
        // ODRADJENO - // save treba da ima user id i requiredDataList
        // ODRADJENO - treba u bekendu napraviti save i treba napraviti u auth.service da ide na drugu post adresu
        // ODRADJENO - u bekendu treba da se napravi shema za bazu
        // iscitavamo ovaj sejvovani podatak, tj njegov id da bi dobili url za formu za iFrame
        // provera da li id vec postoji u bazi ako da, ne pravi novi id vec izlistamo postojeci
        // treba da se ne dozvoli odlazak direktno na dashboard stranu vec mora da je user ulogovan
        // sve treba da je izlistano na novoj stranici npr pregled formi 
        this.au.submitUserCreatedForm(userFormCreated).subscribe(function (data) {
            if (data.success) {
                _this.dtf.addfinalFormId(data.CFBU._id);
                // console.log(data.CFBU._id)
                // console.log("dobije se finalFormId: " + data.CFBU._id)
                // if(data.CFBU._id==undefined){
                //   setTimeout(()=>{
                //     console.log("dobije se finalFormId posle cekanja: " + data.CFBU._id)
                //   },6000);
                // }
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 4000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 4000 });
            }
        });
        // this.dtf.addField(requiredDataList);
        this.router.navigate(['formCreation']);
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(365),
            styles: [__webpack_require__(359)],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_dashboard_to_form_creation_service__["a" /* DashboardToFormCreationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_dashboard_to_form_creation_service__["a" /* DashboardToFormCreationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"]) === "function" && _d || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=C:/Users/Srdjan/Desktop/salestrekkerapp/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dashboard_to_form_creation_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages_module_flash_messages_service__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FinalFormComponent = /** @class */ (function () {
    function FinalFormComponent(au, dtf, vs, router, flashMessage) {
        this.au = au;
        this.dtf = dtf;
        this.vs = vs;
        this.router = router;
        this.flashMessage = flashMessage;
        this.mask = ['+', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/];
        this.isDataAvailable = false;
        this.requiredDataListReceive = [];
        this.maritalStatuses = [
            "Single",
            "Married",
            "Divorced"
        ];
        this.countryOfResidences = [
            "Australia",
            "New Zealand",
            "Serbia",
            "Canada",
            "United States"
        ];
        this.servicesInterestedIn = [
            "Web Marketing",
            "Banner Advertising",
            "Native Advertising",
            "PR"
        ];
    }
    FinalFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.au.getFinalForm().subscribe(function (data) {
            // console.log(data)
            // console.log('ovo je podatak koji dobijamo na finalFormStrani: ' + data);
            _this.finalFormUserId = data.userId;
            // console.log(this.finalFormUserId);
            _this.finalFormId = data._id;
            // console.log(this.finalFormId);
            _this.requiredDataListReceive = data.requiredFields;
            // console.log(this.requiredDataListReceive);
        }, function (err) {
            console.log(err);
            return false;
        });
        if (this.requiredDataListReceive == []) {
            console.log("ovo je lista required fields1: " + this.requiredDataListReceive);
        }
        else {
            setTimeout(function () {
                console.log("pauza");
                console.log("ovo je lista required fields pauza: " + _this.requiredDataListReceive);
                _this.createFromOnFrontEnd();
            }, 100);
            console.log("ovo je lista required fields2: " + this.requiredDataListReceive);
        }
        console.log("ovo je lista required fields3: " + this.requiredDataListReceive);
        // this.requiredDataListReceive = this.dtf.getPassData();
        // this.dtf.resetList();
        // this.createFromOnFrontEnd();
    };
    FinalFormComponent.prototype.createFromOnFrontEnd = function () {
        console.log("ovo je lista required fields after init: " + this.requiredDataListReceive);
        for (var i = 0; i < this.requiredDataListReceive.length; i++) {
            if (this.requiredDataListReceive[i].key == "formType") {
                this.formTypeReceive = this.requiredDataListReceive[i].value;
                // console.log('formCreated: ' + this.formTypeReceive);
            }
            if (this.requiredDataListReceive[i].key == "companyNameRequired") {
                this.companyNameRequired = this.requiredDataListReceive[i].value;
                // console.log('companyNameRequired: ' + this.companyNameRequired);
            }
            if (this.requiredDataListReceive[i].key == "firstNameRequired") {
                this.firstNameRequired = this.requiredDataListReceive[i].value;
                // console.log('firstNameRequired: ' + this.firstNameRequired);
            }
            if (this.requiredDataListReceive[i].key == "middleNameRequired") {
                this.middleNameRequired = this.requiredDataListReceive[i].value;
                // console.log('middleNameRequired: ' + this.middleNameRequired);
            }
            if (this.requiredDataListReceive[i].key == "familyNameRequired") {
                this.familyNameRequired = this.requiredDataListReceive[i].value;
                // console.log('familyNameRequired: ' + this.familyNameRequired);
            }
            if (this.requiredDataListReceive[i].key == "dateOfBirthRequired") {
                this.dateOfBirthRequired = this.requiredDataListReceive[i].value;
                // console.log('dateOfBirthRequired: ' + this.dateOfBirthRequired);
            }
            if (this.requiredDataListReceive[i].key == "maritalStatusRequired") {
                this.maritalStatusRequired = this.requiredDataListReceive[i].value;
                // console.log('maritalStatusRequired: ' + this.maritalStatusRequired);
            }
            if (this.requiredDataListReceive[i].key == "countryOfResidenceRequired") {
                this.countryOfResidenceRequired = this.requiredDataListReceive[i].value;
                // console.log('countryOfResidenceRequired: ' + this.countryOfResidenceRequired);
            }
            if (this.requiredDataListReceive[i].key == "addressOfResidenceRequired") {
                this.addressOfResidenceRequired = this.requiredDataListReceive[i].value;
                // console.log('addressOfResidenceRequired: ' + this.addressOfResidenceRequired);
            }
            if (this.requiredDataListReceive[i].key == "eMailRequired") {
                this.eMailRequired = this.requiredDataListReceive[i].value;
                // console.log('eMailRequired: ' + this.eMailRequired);
            }
            if (this.requiredDataListReceive[i].key == "phoneNumberRequired") {
                this.phoneNumberRequired = this.requiredDataListReceive[i].value;
                // console.log('phoneNumberRequired: ' + this.phoneNumberRequired);
            }
            if (this.requiredDataListReceive[i].key == "servicesInterestedInRequired") {
                this.servicesInterestedInRequired = this.requiredDataListReceive[i].value;
                // console.log('serviceInterestedInRequired: ' + this.servicesInterestedInRequired);
            }
            if (this.requiredDataListReceive[i].key == "additionalServicesRequiredRequired") {
                this.additionalServicesRequiredRequired = this.requiredDataListReceive[i].value;
                // console.log('additionalServicesRequiredRequired: ' + this.additionalServicesRequiredRequired);
            }
            if (this.requiredDataListReceive[i].key == "notesRequired") {
                this.notesRequired = this.requiredDataListReceive[i].value;
                // console.log('notesRequired: ' + this.notesRequired);
            }
        }
        this.completeForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({});
        if (this.companyNameRequired == 'true') {
            this.completeForm.setControl("companyName", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(64)]));
        }
        else {
            this.completeForm.setControl("companyName", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        if (this.firstNameRequired == 'true') {
            this.completeForm.setControl("firstName", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(32)]));
        }
        else {
            this.completeForm.setControl("firstName", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        if (this.middleNameRequired == 'true') {
            this.completeForm.setControl("middleName", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(32)]));
        }
        else {
            this.completeForm.setControl("middleName", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        if (this.familyNameRequired == 'true') {
            this.completeForm.setControl("familyName", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(32)]));
        }
        else {
            this.completeForm.setControl("familyName", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        if (this.dateOfBirthRequired == 'true') {
            this.completeForm.setControl("dateOfBirth", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]));
        }
        else {
            this.completeForm.setControl("dateOfBirth", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        if (this.maritalStatusRequired == 'true') {
            this.completeForm.setControl("maritalStatus", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]));
        }
        else {
            this.completeForm.setControl("maritalStatus", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        if (this.countryOfResidenceRequired == 'true') {
            this.completeForm.setControl("countryOfResidence", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]));
        }
        else {
            this.completeForm.setControl("countryOfResidence", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        if (this.addressOfResidenceRequired == 'true') {
            this.completeForm.setControl("addressOfResidence", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(256)]));
        }
        else {
            this.completeForm.setControl("addressOfResidence", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        if (this.eMailRequired == 'true') {
            this.completeForm.setControl("eMail", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]));
        }
        else {
            this.completeForm.setControl("eMail", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]));
        }
        if (this.phoneNumberRequired == 'true') {
            this.completeForm.setControl("phoneNumber", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{3}$/)]));
        }
        else {
            this.completeForm.setControl("phoneNumber", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        // console.log("test za service: " + this.additionalServicesRequired)
        if (this.servicesInterestedInRequired == 'true') {
            this.completeForm.setControl("servicesInterestedIn", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormArray"]([
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
            ], this.validateServiceInterestedIn));
        }
        else {
            this.completeForm.setControl("servicesInterestedIn", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormArray"]([
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
            ]));
        }
        if (this.additionalServicesRequiredRequired == 'true') {
            this.completeForm.setControl("additionalServicesRequired", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]));
        }
        else {
            this.completeForm.setControl("additionalServicesRequired", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        if (this.notesRequired == 'true') {
            this.completeForm.setControl("notes", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]));
        }
        else {
            this.completeForm.setControl("notes", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        this.isDataAvailable = true;
        // OVO JE KRAJ INITA
    };
    // OVDE DOLE JE SVE ZA SUBMIT
    FinalFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var submitData = {
            formDataUserId: this.finalFormUserId,
            companyName: this.completeForm.value.companyName,
            firstName: this.completeForm.value.firstName,
            middleName: this.completeForm.value.middleName,
            familyName: this.completeForm.value.familyName,
            dateOfBirth: this.completeForm.value.dateOfBirth,
            maritalStatus: this.completeForm.value.maritalStatus,
            countryOfResidence: this.completeForm.value.countryOfResidence,
            addressOfResidence: this.completeForm.value.addressOfResidence,
            eMail: this.completeForm.value.eMail,
            phoneNumber: this.completeForm.value.phoneNumber,
            serviceInterestedIn: this.completeForm.value.servicesInterestedIn,
            additionalServicesRequired: this.completeForm.value.additionalServicesRequired,
            notes: this.completeForm.value.notes
        };
        // console.log("submited data: " + submitData.companyName);
        //send data to database
        this.au.submitForm(submitData).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 9000 });
                _this.isDataAvailable = false;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 9000 });
                _this.isDataAvailable = true;
            }
        });
    };
    FinalFormComponent.prototype.validateCompanyName = function (control) {
        if (control.value == undefined || control.value == null || control.value == "") {
            return { "Company name is required": true };
        }
        return null;
    };
    FinalFormComponent.prototype.validateServiceInterestedIn = function (control) {
        if (control.value[0] == true || control.value[1] == true || control.value[2] == true || control.value[3] == true) {
            return null;
        }
        return { "At least one service need to be checked": true };
    };
    FinalFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-final-form',
            template: __webpack_require__(366),
            styles: [__webpack_require__(144)] // ovo je bilo u zagradi: './final-form.component.css'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_dashboard_to_form_creation_service__["a" /* DashboardToFormCreationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_dashboard_to_form_creation_service__["a" /* DashboardToFormCreationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"]) === "function" && _e || Object])
    ], FinalFormComponent);
    return FinalFormComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=C:/Users/Srdjan/Desktop/salestrekkerapp/angular-src/src/final-form.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dashboard_to_form_creation_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages_module_flash_messages_service__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormCreationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FormCreationComponent = /** @class */ (function () {
    function FormCreationComponent(au, dtf, vs, router, flashMessage) {
        this.au = au;
        this.dtf = dtf;
        this.vs = vs;
        this.router = router;
        this.flashMessage = flashMessage;
        this.mask = ['+', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/];
        this.requiredDataListReceive = [];
        this.maritalStatuses = [
            "Single",
            "Married",
            "Divorced"
        ];
        this.countryOfResidences = [
            "Australia",
            "New Zealand",
            "Serbia",
            "Canada",
            "United States"
        ];
        this.servicesInterestedIn = [
            "Web Marketing",
            "Banner Advertising",
            "Native Advertising",
            "PR"
        ];
        this.showFormUrl = false;
    }
    FormCreationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.au.getProfile().subscribe(function (data) {
            _this.finalFormUserId = data.user._id;
            // console.log(data)
            // console.log("ovo je finalFormUserId: " + data.user._id)
        }, function (err) {
            console.log(err);
            return false;
        });
        this.finalFormFormId = this.dtf.getfinalFormId();
        if (this.finalFormFormId == undefined || this.finalFormFormId == "") {
            this.showFormUrl = false;
            setTimeout(function () {
                _this.finalFormFormId = _this.dtf.getfinalFormId();
                if (_this.finalFormFormId == undefined || _this.finalFormFormId == "") {
                    _this.showFormUrl = false;
                    setTimeout(function () {
                        _this.finalFormFormId = _this.dtf.getfinalFormId();
                        _this.showFormUrl = true;
                        // console.log('ovo je finalFormFormId ako je undefind drugi if: ' +this.finalFormFormId)
                    }, 100);
                }
                _this.showFormUrl = true;
                // console.log('ovo je finalFormFormId ako je undefind: ' +this.finalFormFormId)
            }, 20);
        }
        // console.log('ovo je finalFormFormId posle svega: ' +this.finalFormFormId)
        this.requiredDataListReceive = this.dtf.getPassData();
        // console.log("lista koja je preneta sa dashborda gde se kreira: "+this.requiredDataListReceive)
        this.dtf.resetList();
        for (var i = 0; i < this.requiredDataListReceive.length; i++) {
            if (this.requiredDataListReceive[i].key == "formType") {
                this.formTypeReceive = this.requiredDataListReceive[i].value;
                // console.log('formCreated: ' + this.formTypeReceive);
            }
            if (this.requiredDataListReceive[i].key == "companyNameRequired") {
                this.companyNameRequired = this.requiredDataListReceive[i].value;
                // console.log('companyNameRequired: ' + this.companyNameRequired);
            }
            if (this.requiredDataListReceive[i].key == "firstNameRequired") {
                this.firstNameRequired = this.requiredDataListReceive[i].value;
                // console.log('firstNameRequired: ' + this.firstNameRequired);
            }
            if (this.requiredDataListReceive[i].key == "middleNameRequired") {
                this.middleNameRequired = this.requiredDataListReceive[i].value;
                // console.log('middleNameRequired: ' + this.middleNameRequired);
            }
            if (this.requiredDataListReceive[i].key == "familyNameRequired") {
                this.familyNameRequired = this.requiredDataListReceive[i].value;
                // console.log('familyNameRequired: ' + this.familyNameRequired);
            }
            if (this.requiredDataListReceive[i].key == "dateOfBirthRequired") {
                this.dateOfBirthRequired = this.requiredDataListReceive[i].value;
                // console.log('dateOfBirthRequired: ' + this.dateOfBirthRequired);
            }
            if (this.requiredDataListReceive[i].key == "maritalStatusRequired") {
                this.maritalStatusRequired = this.requiredDataListReceive[i].value;
                // console.log('maritalStatusRequired: ' + this.maritalStatusRequired);
            }
            if (this.requiredDataListReceive[i].key == "countryOfResidenceRequired") {
                this.countryOfResidenceRequired = this.requiredDataListReceive[i].value;
                // console.log('countryOfResidenceRequired: ' + this.countryOfResidenceRequired);
            }
            if (this.requiredDataListReceive[i].key == "addressOfResidenceRequired") {
                this.addressOfResidenceRequired = this.requiredDataListReceive[i].value;
                // console.log('addressOfResidenceRequired: ' + this.addressOfResidenceRequired);
            }
            if (this.requiredDataListReceive[i].key == "eMailRequired") {
                this.eMailRequired = this.requiredDataListReceive[i].value;
                // console.log('eMailRequired: ' + this.eMailRequired);
            }
            if (this.requiredDataListReceive[i].key == "phoneNumberRequired") {
                this.phoneNumberRequired = this.requiredDataListReceive[i].value;
                // console.log('phoneNumberRequired: ' + this.phoneNumberRequired);
            }
            if (this.requiredDataListReceive[i].key == "servicesInterestedInRequired") {
                this.servicesInterestedInRequired = this.requiredDataListReceive[i].value;
                // console.log('serviceInterestedInRequired: ' + this.servicesInterestedInRequired);
            }
            if (this.requiredDataListReceive[i].key == "additionalServicesRequiredRequired") {
                this.additionalServicesRequiredRequired = this.requiredDataListReceive[i].value;
                // console.log('additionalServicesRequiredRequired: ' + this.additionalServicesRequiredRequired);
            }
            if (this.requiredDataListReceive[i].key == "notesRequired") {
                this.notesRequired = this.requiredDataListReceive[i].value;
                // console.log('notesRequired: ' + this.notesRequired);
            }
        }
        this.completeForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({});
        if (this.companyNameRequired == 'true') {
            this.completeForm.setControl("companyName", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(64)]));
        }
        else {
            this.completeForm.setControl("companyName", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        if (this.firstNameRequired == 'true') {
            this.completeForm.setControl("firstName", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(32)]));
        }
        else {
            this.completeForm.setControl("firstName", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        if (this.middleNameRequired == 'true') {
            this.completeForm.setControl("middleName", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(32)]));
        }
        else {
            this.completeForm.setControl("middleName", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        if (this.familyNameRequired == 'true') {
            this.completeForm.setControl("familyName", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(32)]));
        }
        else {
            this.completeForm.setControl("familyName", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        if (this.dateOfBirthRequired == 'true') {
            this.completeForm.setControl("dateOfBirth", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]));
        }
        else {
            this.completeForm.setControl("dateOfBirth", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        if (this.maritalStatusRequired == 'true') {
            this.completeForm.setControl("maritalStatus", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]));
        }
        else {
            this.completeForm.setControl("maritalStatus", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        if (this.countryOfResidenceRequired == 'true') {
            this.completeForm.setControl("countryOfResidence", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]));
        }
        else {
            this.completeForm.setControl("countryOfResidence", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        if (this.addressOfResidenceRequired == 'true') {
            this.completeForm.setControl("addressOfResidence", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(256)]));
        }
        else {
            this.completeForm.setControl("addressOfResidence", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        if (this.eMailRequired == 'true') {
            this.completeForm.setControl("eMail", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]));
        }
        else {
            this.completeForm.setControl("eMail", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]));
        }
        if (this.phoneNumberRequired == 'true') {
            this.completeForm.setControl("phoneNumber", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{3}$/)]));
        }
        else {
            this.completeForm.setControl("phoneNumber", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        // console.log("test za service: " + this.additionalServicesRequired)
        if (this.servicesInterestedInRequired == 'true') {
            this.completeForm.setControl("servicesInterestedIn", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormArray"]([
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
            ], this.validateServiceInterestedIn));
        }
        else {
            this.completeForm.setControl("servicesInterestedIn", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormArray"]([
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
            ]));
        }
        if (this.additionalServicesRequiredRequired == 'true') {
            this.completeForm.setControl("additionalServicesRequired", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]));
        }
        else {
            this.completeForm.setControl("additionalServicesRequired", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
        if (this.notesRequired == 'true') {
            this.completeForm.setControl("notes", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]));
        }
        else {
            this.completeForm.setControl("notes", new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]());
        }
    };
    FormCreationComponent.prototype.onSubmit = function () {
        var _this = this;
        var submitData = {
            formDataUserId: this.finalFormUserId,
            companyName: this.completeForm.value.companyName,
            firstName: this.completeForm.value.firstName,
            middleName: this.completeForm.value.middleName,
            familyName: this.completeForm.value.familyName,
            dateOfBirth: this.completeForm.value.dateOfBirth,
            maritalStatus: this.completeForm.value.maritalStatus,
            countryOfResidence: this.completeForm.value.countryOfResidence,
            addressOfResidence: this.completeForm.value.addressOfResidence,
            eMail: this.completeForm.value.eMail,
            phoneNumber: this.completeForm.value.phoneNumber,
            serviceInterestedIn: this.completeForm.value.servicesInterestedIn,
            additionalServicesRequired: this.completeForm.value.additionalServicesRequired,
            notes: this.completeForm.value.notes
        };
        // console.log("ovo je user id koji se submituje: " + submitData.formDataUserId);
        //send data to database
        this.au.submitForm(submitData).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 4000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 4000 });
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    FormCreationComponent.prototype.validateCompanyName = function (control) {
        if (control.value == undefined || control.value == null || control.value == "") {
            return { "Company name is required": true };
        }
        return null;
    };
    FormCreationComponent.prototype.validateServiceInterestedIn = function (control) {
        if (control.value[0] == true || control.value[1] == true || control.value[2] == true || control.value[3] == true) {
            return null;
        }
        return { "At least one service need to be checked": true };
    };
    FormCreationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-creation',
            template: __webpack_require__(367),
            styles: [__webpack_require__(144)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_dashboard_to_form_creation_service__["a" /* DashboardToFormCreationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_dashboard_to_form_creation_service__["a" /* DashboardToFormCreationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"]) === "function" && _e || Object])
    ], FormCreationComponent);
    return FormCreationComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=C:/Users/Srdjan/Desktop/salestrekkerapp/angular-src/src/form-creation.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(368),
            styles: [__webpack_require__(360)]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=C:/Users/Srdjan/Desktop/salestrekkerapp/angular-src/src/home.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(369),
            styles: [__webpack_require__(361)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"]) === "function" && _c || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=C:/Users/Srdjan/Desktop/salestrekkerapp/angular-src/src/login.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show("You are logged out", { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(370)
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"]) === "function" && _c || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=C:/Users/Srdjan/Desktop/salestrekkerapp/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.createdCode = null;
        this.allForms = [];
        this.showHtmlList = false;
        this.allSubmitedFormsForUser = [];
        this.showHtmlSubmitedForms = false;
        this.finalFormObject = {
            finalFormUserId: String,
            finalFormFromId: String,
            finalFormFields: Array
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.name = profile.user.username;
            _this.userId = profile.user._id;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.createBarcode = function () {
        this.createdCode = this.name + ', je covek koji je osmislio Aplikaciju :)';
        // console.log(this.name);
        // console.log(this.userId);
    };
    ProfileComponent.prototype.listAllFormsForUser = function () {
        var _this = this;
        this.authService.getAllFormsForUser(this.userId).subscribe(function (data) {
            // console.log(data)
            _this.allForms = data;
            // console.log(this.allForms)
            _this.showHtmlList = true;
            _this.showHtmlSubmitedForms = false;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.closeWindow = function () {
        this.showHtmlList = false;
    };
    ProfileComponent.prototype.listAllSubmitetFormsForUser = function () {
        var _this = this;
        this.authService.getAllSubmitetFromsForUser(this.userId).subscribe(function (data) {
            _this.allSubmitedFormsForUser = data;
            // console.log(this.allForms)
            _this.showHtmlList = false;
            _this.showHtmlSubmitedForms = true;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.closeUserSubmitedFormsWindow = function () {
        this.showHtmlSubmitedForms = false;
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(371),
            styles: [__webpack_require__(362)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"]) === "function" && _c || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=C:/Users/Srdjan/Desktop/salestrekkerapp/angular-src/src/profile.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    //kad god koristimo service u component moramo da ubacimo u constructor
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        //Required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show("please fill all fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Required email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show("please use valid email", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("You are now registered and can log in", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(372),
            styles: [__webpack_require__(363)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=C:/Users/Srdjan/Desktop/salestrekkerapp/angular-src/src/register.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/Srdjan/Desktop/salestrekkerapp/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Srdjan/Desktop/salestrekkerapp/angular-src/src/environment.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', "application/json");
        // return this.http.post('http://localhost:3000/users/register', user, {headers: headers}).map(res => res.json());
        // ovo je za heroku
        return this.http.post('users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', "application/json");
        // return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers}).map(res => res.json());
        return this.http.post('users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        // na backendu je ova strana protekt pa mora da se posalje i token sa hederom
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', "application/json");
        // return this.http.get('http://localhost:3000/users/profile',{headers: headers}).map(res => res.json());
        return this.http.get('users/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // proverimo da li smo ulogovani da pokazemo login button ili ne(proverimo da li je token tu i da li je expired)
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.storeUserData = function (token, user) {
        // u localStorage ide save kao key value par
        // u browseru na aplication tab odemo da vidimo vrednosti
        //  id_token zato sto smo na backendu koristili passport koji iz headera trazi token i default je id_token
        localStorage.setItem('id_token', token);
        // localStorage moze da primi samo string pa koristimo JSON.stringify(user) da bi dobili string i onda ponovo iz naslova imamo json kad ga posle koristimo
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.submitForm = function (submitData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', "application/json");
        // return this.http.post('http://localhost:3000/form/formCreation', submitData, {headers: headers}).map(res => res.json());
        // ovo je za heroku
        return this.http.post('form/formCreation', submitData, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.submitUserCreatedForm = function (userFormCreated) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', "application/json");
        // return this.http.post('http://localhost:3000/form/formCreatedByUser', userFormCreated, {headers: headers}).map(res => res.json());
        return this.http.post('form/formCreatedByUser', userFormCreated, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getFinalForm = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', "application/json");
        // ovo ispod smo dobili current url pa smo podelili da bi dobili samo id
        var finalFormId = this.router.url.split('/');
        // console.log(finalFormId[2]);
        // return this.http.get('http://localhost:3000/form/finalForm/' + finalFormId[2]).map(res => res.json());
        return this.http.get('form/finalForm/' + finalFormId[2]).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getAllFormsForUser = function (userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', "application/json");
        var finalFormUserId = userId;
        // console.log(finalFormUserId);
        // return this.http.get('http://localhost:3000/form/finalForm/data/' + finalFormUserId).map(res => res.json());
        return this.http.get('form/finalForm/data/' + finalFormUserId).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getAllSubmitetFromsForUser = function (userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', "application/json");
        // console.log(finalFormUserId);
        // return this.http.get('http://localhost:3000/form/form/' + userId).map(res => res.json());
        return this.http.get('form/form/' + userId).map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/Srdjan/Desktop/salestrekkerapp/angular-src/src/auth.service.js.map

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 359:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 360:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 361:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 362:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 364:
/***/ (function(module, exports) {

module.exports = "<app-navbar *ngIf='navbarOnOff'></app-navbar>\r\n<div class=\"container\">\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

module.exports = "<div class='page-header' *ngIf='!personForm || !companyForm'>\n    <h3>Contact type configuration page</h3>\n</div>\n\n<div class='radio' *ngFor='let ft of formTypes' class=\"form-group\">\n    <label>\n        <input type='radio'\n        name='formType'\n        [(ngModel)]=\"formType\"\n        [value]=\"ft\"\n        (click)='deleteFormType()'>\n        {{ft}}\n    </label>\n</div>\n<br>\n<div class=\"col-md-6\">\n    <div *ngIf='formType' class='page-header'>\n        <h3>Select required fields:</h3>\n    </div>\n    <form [formGroup]='requiredForm' (ngSubmit) =\"createForm(requiredDataList)\">\n        <div *ngIf='formType'>\n            <div *ngIf='formType==\"company\"'>\n                <input type=\"checkbox\" id=\"companyNameRequired\" name=\"companyNameRequired\" formControlName=\"companyNameRequired\">\n                <label for=\"companyNameRequired\">Company Name</label>\n            </div>\n            <div *ngIf='formType==\"person\"'>\n                <input type=\"checkbox\" id=\"firstNameRequired\" name=\"firstNameRequired\" formControlName=\"firstNameRequired\">\n                <label for=\"firstNameRequired\">First Name</label>\n            </div>\n            <div *ngIf='formType==\"person\"'>\n                <input type=\"checkbox\" id=\"middleNameRequired\" name=\"middleNameRequired\" formControlName=\"middleNameRequired\">\n                <label for=\"middleNameRequired\">Middle Name</label>\n            </div>\n            <div *ngIf='formType==\"person\"'>\n                <input type=\"checkbox\" id=\"familyNameRequired\" name=\"familyNameRequired\" formControlName=\"familyNameRequired\">\n                <label for=\"familyNameRequired\">Family Name</label>\n            </div>\n            <div *ngIf='formType==\"person\"'>\n                <input type=\"checkbox\" id=\"dateOfBirthRequired\" name=\"dateOfBirthRequired\" formControlName=\"dateOfBirthRequired\">\n                <label for=\"dateOfBirthRequired\">Date Of Birth</label>\n            </div>\n            <div *ngIf='formType==\"person\"'>\n                <input type=\"checkbox\" id=\"maritalStatusRequired\" name=\"maritalStatusRequired\" formControlName=\"maritalStatusRequired\">\n                <label for=\"maritalStatusRequired\">Marital Status</label>\n            </div>\n            <div>\n                <input type=\"checkbox\" id=\"countryOfResidenceRequired\" name=\"countryOfResidenceRequired\" formControlName=\"countryOfResidenceRequired\">\n                <label for=\"countryOfResidenceRequired\">Country of Residence</label>\n            </div>\n            <div>\n                <input type=\"checkbox\" id=\"addressOfResidenceRequired\" name=\"addressOfResidenceRequired\" formControlName=\"addressOfResidenceRequired\">\n                <label for=\"addressOfResidenceRequired\">Address of Residence</label>\n            </div>\n            <div>\n                <input type=\"checkbox\" id=\"phoneNumberRequired\" name=\"phoneNumberRequired\" formControlName=\"phoneNumberRequired\">\n                <label for=\"phoneNumberRequired\">Phone Number</label>\n            </div>\n            <div>\n                <input type=\"checkbox\" id=\"servicesInterestedInRequired\" name=\"servicesInterestedInRequired\" formControlName=\"servicesInterestedInRequired\">\n                <label for=\"servicesInterestedInRequired\">Services Interested In</label>\n            </div>\n            <div>\n                <input type=\"checkbox\" id=\"additionalServicesRequiredRequired\" name=\"additionalServicesRequiredRequired\" formControlName=\"additionalServicesRequiredRequired\">\n                <label for=\"additionalServicesRequiredRequired\">Additional Services Required</label>\n            </div>\n            <div>\n                <input type=\"checkbox\" id=\"notesRequired\" name=\"notesRequired\" formControlName=\"notesRequired\">\n                <label for=\"notesRequired\">Notes</label>\n            </div>\n            <br>\n            <br>\n            <button class='btn btn-primary' type=\"submit\">Apply</button>\n        </div>\n    </form>\n</div>\n\n\n"

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isDataAvailable\" class=\"col-md-7\">\n  <form [formGroup]='completeForm' (ngSubmit) =\"onSubmit()\" novalidate>\n      <div class='page-header' *ngIf='formTypeReceive==\"company\"'>\n          <h3>Company Information</h3>\n      </div>\n      <div class=\"form-group\" *ngIf='formTypeReceive==\"company\"'>\n          <label for=\"companyName\">Company Name</label>\n          <input type=\"text\" class=\"form-control input-sm\" id=\"companyName\" name=\"companyName\" formControlName=\"companyName\">\n          <label class='alert alert-danger' *ngIf='!completeForm.controls[\"companyName\"].valid && completeForm.controls[\"companyName\"].touched'>Company name is required</label>\n      </div>\n      <div class='page-header' *ngIf='formTypeReceive==\"person\"'>\n          <h3>Personal Information</h3>\n      </div>\n      <div class=\"form-group\" *ngIf='formTypeReceive==\"person\"'>\n          <label for=\"firstName\">First Name</label>\n          <input type=\"text\" class=\"form-control input-sm\" id=\"firstName\" name=\"firstName\" formControlName=\"firstName\">\n          <label class='alert alert-danger' *ngIf='!completeForm.controls[\"firstName\"].valid && completeForm.controls[\"firstName\"].touched'>First name is required</label>\n      </div>\n      <div class=\"form-group\" *ngIf='formTypeReceive==\"person\"'>\n          <label for=\"middleName\">Middle Name</label>\n          <input type=\"text\" class=\"form-control input-sm\" id=\"middleName\" name=\"middleName\" formControlName=\"middleName\">\n          <label class='alert alert-danger' *ngIf='!completeForm.controls[\"middleName\"].valid && completeForm.controls[\"middleName\"].touched'>Middle name is required</label>\n      </div>\n      <div class=\"form-group\" *ngIf='formTypeReceive==\"person\"'>\n          <label for=\"familyName\">Family Name</label>\n          <input type=\"text\" class=\"form-control input-sm\" id=\"familyName\" name=\"familyName\" formControlName=\"familyName\">\n          <label class='alert alert-danger' *ngIf='!completeForm.controls[\"familyName\"].valid && completeForm.controls[\"familyName\"].touched'>Family name is required</label>\n      </div>\n      <div class=\"form-group\" *ngIf='formTypeReceive==\"person\"'>\n          <label for=\"dateOfBirth\">Date Of Birth</label>\n          <input type=\"date\" class=\"form-control input-sm\" id=\"dateOfBirth\" name=\"dateOfBirth\" formControlName=\"dateOfBirth\">\n          <label class='alert alert-danger' *ngIf='!completeForm.controls[\"dateOfBirth\"].valid && completeForm.controls[\"dateOfBirth\"].touched'>Date Of Birth name is required</label>\n      </div>\n      <div class='form-group' *ngIf='formTypeReceive==\"person\"'>\n          <label for=\"maritalStatus\">Marital Status</label>\n          <div>\n              <select class=\"form-control input-sm\" formControlName=\"maritalStatus\">\n                  <option *ngFor='let ms of maritalStatuses' [value]='ms' id=\"maritalStatus\" name=\"maritalStatus\">{{ms}}</option>\n              </select>\n          </div>\n          <label class='alert alert-danger' *ngIf='!completeForm.controls[\"maritalStatus\"].valid && completeForm.controls[\"maritalStatus\"].touched'>Marital status name is required</label>\n      </div>\n      <div class='form-group'>\n          <label for=\"countryOfResidence\">Country Of Residence</label>\n          <div>\n              <select class=\"form-control input-sm\"  formControlName=\"countryOfResidence\">\n                  <option *ngFor='let cor of countryOfResidences' [value]='cor' id=\"countryOfResidence\" name=\"countryOfResidence\">{{cor}}</option>\n              </select>\n          </div>\n          <label class='alert alert-danger' *ngIf='!completeForm.controls[\"countryOfResidence\"].valid && completeForm.controls[\"countryOfResidence\"].touched'>Country Of Residence name is required</label>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"addressOfResidence\">Address Of Residence</label>\n          <input type=\"text\" class=\"form-control input-sm\" id=\"addressOfResidence\" name=\"addressOfResidence\" formControlName=\"addressOfResidence\">\n          <label class='alert alert-danger' *ngIf='!completeForm.controls[\"addressOfResidence\"].valid && completeForm.controls[\"addressOfResidence\"].touched'>Address Of Residence name is required</label>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"eMail\">E-Mail</label>\n          <input type=\"text\" class=\"form-control input-sm\" id=\"eMail\" name=\"eMail\" formControlName=\"eMail\">\n          <label class='alert alert-danger' *ngIf='!completeForm.controls[\"eMail\"].valid && completeForm.controls[\"eMail\"].touched'>E-mail name is required</label>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"phoneNumber\">Phone Number</label>\n          <input type=\"text\" class=\"form-control input-sm\" id=\"phoneNumber\" name=\"phoneNumber\" formControlName=\"phoneNumber\" placeholder=\"+(381) 64-29-53-072\" [textMask]=\"{mask: mask}\">\n          <label class='alert alert-danger' *ngIf='!completeForm.controls[\"phoneNumber\"].valid && completeForm.controls[\"phoneNumber\"].touched'>Phone number name is required</label>\n      </div>\n      <div formArrayName='servicesInterestedIn'>\n          <label for=\"serviceInterestedIn\">Services Interested In</label>\n          <div *ngFor=\"let sii of servicesInterestedIn; let i=index\" >\n              \n              <input type=\"checkbox\"[value]=\"sii\" id=\"serviceInterestedIn\" name=\"serviceInterestedIn\" formControlName=\"{{i}}\">{{sii}}\n              <!-- <label for=\"serviceInterestedIn\">{{sii}}</label> -->\n          </div>\n          <label class='alert alert-danger' *ngIf='!completeForm.controls[\"servicesInterestedIn\"].valid && completeForm.controls[\"servicesInterestedIn\"].touched'>At least one service need to be selected</label>\n      </div>\n      <br>\n      <div class=\"form-group\">\n          <label for=\"additionalServicesRequired\">Additional Service Required</label>\n          <textarea type=\"text\" rows=\"5\" cols='40' class=\"form-control input-sm\" id=\"additionalServicesRequired\" name=\"additionalServicesRequired\" formControlName=\"additionalServicesRequired\"></textarea>\n          <label class='alert alert-danger' *ngIf='!completeForm.controls[\"additionalServicesRequired\"].valid && completeForm.controls[\"additionalServicesRequired\"].touched'>Additional Services is required</label>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"notes\">Notes</label>\n          <textarea type=\"text\" rows=\"5\" cols='40' class=\"form-control input-sm\" id=\"notes\" name=\"notes\" formControlName=\"notes\"></textarea>\n          <label class='alert alert-danger' *ngIf='!completeForm.controls[\"notes\"].valid && completeForm.controls[\"notes\"].touched'>Notes are required</label>\n      </div>\n      <button class='btn btn-success' [disabled]=\"!completeForm.valid\" type=\"submit\">Register</button>\n  </form>\n</div>"

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-7\">\n    <form [formGroup]='completeForm' (ngSubmit) =\"onSubmit()\" novalidate>\n        <div class='page-header' *ngIf='formTypeReceive==\"company\"'>\n            <h3>Company Information</h3>\n        </div>\n        <div class=\"form-group\" *ngIf='formTypeReceive==\"company\"'>\n            <label for=\"companyName\">Company Name</label>\n            <input type=\"text\" class=\"form-control input-sm\" id=\"companyName\" name=\"companyName\" formControlName=\"companyName\">\n            <label class='alert alert-danger' *ngIf='!completeForm.controls[\"companyName\"].valid && completeForm.controls[\"companyName\"].touched'>Company name is required</label>\n        </div>\n        <div class='page-header' *ngIf='formTypeReceive==\"person\"'>\n            <h3>Personal Information</h3>\n        </div>\n        <div class=\"form-group\" *ngIf='formTypeReceive==\"person\"'>\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" class=\"form-control input-sm\" id=\"firstName\" name=\"firstName\" formControlName=\"firstName\">\n            <label class='alert alert-danger' *ngIf='!completeForm.controls[\"firstName\"].valid && completeForm.controls[\"firstName\"].touched'>First name is required</label>\n        </div>\n        <div class=\"form-group\" *ngIf='formTypeReceive==\"person\"'>\n            <label for=\"middleName\">Middle Name</label>\n            <input type=\"text\" class=\"form-control input-sm\" id=\"middleName\" name=\"middleName\" formControlName=\"middleName\">\n            <label class='alert alert-danger' *ngIf='!completeForm.controls[\"middleName\"].valid && completeForm.controls[\"middleName\"].touched'>Middle name is required</label>\n        </div>\n        <div class=\"form-group\" *ngIf='formTypeReceive==\"person\"'>\n            <label for=\"familyName\">Family Name</label>\n            <input type=\"text\" class=\"form-control input-sm\" id=\"familyName\" name=\"familyName\" formControlName=\"familyName\">\n            <label class='alert alert-danger' *ngIf='!completeForm.controls[\"familyName\"].valid && completeForm.controls[\"familyName\"].touched'>Family name is required</label>\n        </div>\n        <div class=\"form-group\" *ngIf='formTypeReceive==\"person\"'>\n            <label for=\"dateOfBirth\">Date Of Birth</label>\n            <input type=\"date\" class=\"form-control input-sm\" id=\"dateOfBirth\" name=\"dateOfBirth\" formControlName=\"dateOfBirth\">\n            <label class='alert alert-danger' *ngIf='!completeForm.controls[\"dateOfBirth\"].valid && completeForm.controls[\"dateOfBirth\"].touched'>Date Of Birth name is required</label>\n        </div>\n        <div class='form-group' *ngIf='formTypeReceive==\"person\"'>\n            <label for=\"maritalStatus\">Marital Status</label>\n            <div>\n                <select class=\"form-control input-sm\" formControlName=\"maritalStatus\">\n                    <option *ngFor='let ms of maritalStatuses' [value]='ms' id=\"maritalStatus\" name=\"maritalStatus\">{{ms}}</option>\n                </select>\n            </div>\n            <label class='alert alert-danger' *ngIf='!completeForm.controls[\"maritalStatus\"].valid && completeForm.controls[\"maritalStatus\"].touched'>Marital status name is required</label>\n        </div>\n        <div class='form-group'>\n            <label for=\"countryOfResidence\">Country Of Residence</label>\n            <div>\n                <select class=\"form-control input-sm\"  formControlName=\"countryOfResidence\">\n                    <option *ngFor='let cor of countryOfResidences' [value]='cor' id=\"countryOfResidence\" name=\"countryOfResidence\">{{cor}}</option>\n                </select>\n            </div>\n            <label class='alert alert-danger' *ngIf='!completeForm.controls[\"countryOfResidence\"].valid && completeForm.controls[\"countryOfResidence\"].touched'>Country Of Residence name is required</label>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"addressOfResidence\">Address Of Residence</label>\n            <input type=\"text\" class=\"form-control input-sm\" id=\"addressOfResidence\" name=\"addressOfResidence\" formControlName=\"addressOfResidence\">\n            <label class='alert alert-danger' *ngIf='!completeForm.controls[\"addressOfResidence\"].valid && completeForm.controls[\"addressOfResidence\"].touched'>Address Of Residence name is required</label>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"eMail\">E-Mail</label>\n            <input type=\"text\" class=\"form-control input-sm\" id=\"eMail\" name=\"eMail\" formControlName=\"eMail\">\n            <label class='alert alert-danger' *ngIf='!completeForm.controls[\"eMail\"].valid && completeForm.controls[\"eMail\"].touched'>E-mail name is required</label>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"phoneNumber\">Phone Number</label>\n            <input type=\"text\" class=\"form-control input-sm\" id=\"phoneNumber\" name=\"phoneNumber\" formControlName=\"phoneNumber\" placeholder=\"+(381) 64-29-53-072\" [textMask]=\"{mask: mask}\">\n            <label class='alert alert-danger' *ngIf='!completeForm.controls[\"phoneNumber\"].valid && completeForm.controls[\"phoneNumber\"].touched'>Phone number name is required</label>\n        </div>\n        <div formArrayName='servicesInterestedIn'>\n            <label for=\"serviceInterestedIn\">Services Interested In</label>\n            <div *ngFor=\"let sii of servicesInterestedIn; let i=index\" >\n                <input type=\"checkbox\" [value]=\"sii\" id=\"serviceInterestedIn\" name=\"serviceInterestedIn\" formControlName=\"{{i}}\"> {{sii}}\n            </div>\n            <label class='alert alert-danger' *ngIf='!completeForm.controls[\"servicesInterestedIn\"].valid && completeForm.controls[\"servicesInterestedIn\"].touched'>At least one service need to be selected</label>\n        </div>\n        <br>\n        <div class=\"form-group\">\n            <label for=\"additionalServicesRequired\">Additional Service Required</label>\n            <textarea type=\"text\" rows=\"5\" cols='40' class=\"form-control input-sm\" id=\"additionalServicesRequired\" name=\"additionalServicesRequired\" formControlName=\"additionalServicesRequired\"></textarea>\n            <label class='alert alert-danger' *ngIf='!completeForm.controls[\"additionalServicesRequired\"].valid && completeForm.controls[\"additionalServicesRequired\"].touched'>Additional Services is required</label>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"notes\">Notes</label>\n            <textarea type=\"text\" rows=\"5\" cols='40' class=\"form-control input-sm\" id=\"notes\" name=\"notes\" formControlName=\"notes\"></textarea>\n            <label class='alert alert-danger' *ngIf='!completeForm.controls[\"notes\"].valid && completeForm.controls[\"notes\"].touched'>Notes are required</label>\n        </div>\n        <button class='btn btn-success' [disabled]=\"!completeForm.valid\" type=\"submit\">Register</button>\n    </form>\n</div>\n\n\n<div *ngIf='showFormUrl' class=\"col-md-5\">\n    <label>Copy this url to your website</label>\n    <textarea rows=\"5\" cols='40' disabled><div><iframe src=\"http://localhost:4200/finalForm/{{finalFormFormId}}\" style=\"border:0;height:100%;width:100%;\"></iframe></div></textarea>\n    <!-- <textarea rows=\"5\" cols='40' disabled><div><iframe src=\"https://salestrekker.herokuapp.com/finalForm/{{finalFormFormId}}\" style=\"border:0;height:100%;width:100%;\"></iframe></div></textarea> -->\n</div>\n<div class=\"col-md-7\">\n    <br>\n    <br>\n    <br>\n    <br>\n</div>\n\n"

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Salestrekker App</h1>\n  <p class=\"lead\">Hello to my app</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a><a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>prvi deo</h3>\n    <p>text za prvi deo</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>drugi deo</h3>\n    <p>text za drugi deo</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>treci deo</h3>\n    <p>text za treci deo</p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 369:
/***/ (function(module, exports) {

module.exports = "<h2 class='page-header'>Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class='form-control' [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" class='form-control' [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n\n\n"

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">SalestrekkerApp</a>\n      </div>\n      <div id=\"navbar\" class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav navbar-left\">\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]='[\"/\"]'>Home</a></li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]='[\"/dashboard\"]'>Dashboard</a></li>\n          <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]='[\"/profile\"]'>Profile</a></li>\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]='[\"/login\"]'>Login</a></li>\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]='[\"/register\"]'>Register</a></li>\n          <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"\">Logout</a></li>\n        </ul>\n      </div><!--/.nav-collapse -->\n    </div>\n  </nav>"

/***/ }),

/***/ 371:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li classs=\"list-group-item\">Username: {{user.username}}</li>\n    <li classs=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n<div>\n  <button (click)=\"createBarcode()\">Create Barcode</button>\n  <ngx-qrcode [qrc-value]=\"createdCode\"></ngx-qrcode>\n</div>\n<hr>\n<div>\n  <button class=\"btn btn-primary\" (click)=\"listAllFormsForUser()\">Show all form templates for user</button>\n  <button class=\"btn btn-warning\" (click)=\"closeWindow()\">Close form templates window</button>\n  <button class=\"btn btn-primary\" (click)=\"listAllSubmitetFormsForUser()\">Show all submited forms for user</button>\n  <button class=\"btn btn-warning\" (click)=\"closeUserSubmitedFormsWindow()\">Close submited form window</button>\n</div>\n\n<div *ngIf='showHtmlList'>\n  <br>\n  <ul *ngFor='let data of allForms' class=\"list-group\">\n    <!-- <li *ngFor='let data of allForms' classs=\"list-group-item\" (click)='showAllData()'>formId: {{data._id}}, userId: {{data.userId}}, </li> -->\n    <li class=\"list-group-item\"><label>Form Id: </label> {{data._id}}</li>\n    <li class=\"list-group-item\"><label>User Id: </label> {{data.userId}}</li>\n    <li *ngFor='let requiredField of data.requiredFields' class=\"list-group-item\">\n      <div *ngIf='requiredField.key !=\"formType\"'><label>Required fields in form: </label> {{requiredField.key}}</div>\n      <div *ngIf='requiredField.key ==\"formType\"'><label>Form type: </label> {{requiredField.value}}</div>\n    </li>\n    <li class=\"list-group-item\">\n        <label>Copy this url to your website</label>\n        <br>\n        <textarea rows=\"1\" cols='125' disabled><div><iframe src=\"http://localhost:4200/finalForm/{{data._id}}\" style=\"border:0;height:100%;width:100%;\"></iframe></div></textarea>\n        <!-- <textarea rows=\"1\" cols='125' disabled><div><iframe src=\"https://salestrekker.herokuapp.com/finalForm/{{data._id}}\" style=\"border:0;height:100%;width:100%;\"></iframe></div></textarea> -->\n    </li>\n  </ul>\n</div>\n\n<div *ngIf='showHtmlSubmitedForms'>\n    <br>\n    <ul *ngFor='let data of allSubmitedFormsForUser' class=\"list-group\">\n      <!-- <li *ngFor='let data of allForms' classs=\"list-group-item\" (click)='showAllData()'>formId: {{data._id}}, userId: {{data.userId}}, </li> -->\n      <li class=\"list-group-item\"><label>Form Id: </label> {{data._id}}</li>\n      <!-- <li class=\"list-group-item\"><label>User Id: </label> {{data.userId}}</li> -->\n      <!-- <li *ngFor='let requiredField of data.requiredFields' class=\"list-group-item\">\n        <div *ngIf='requiredField.key !=\"formType\"'><label>Required fields in form: </label> {{requiredField.key}}</div>\n        <div *ngIf='requiredField.key ==\"formType\"'><label>Form type: </label> {{requiredField.value}}</div> -->\n    </ul>\n  </div>\n\n\n<!-- <select class=\"form-control input-sm\" formControlName=\"maritalStatus\">\n  <option *ngFor='let ms of maritalStatuses' [value]='ms' id=\"maritalStatus\" name=\"maritalStatus\">{{ms}}</option>\n</select> -->"

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(160);


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardToFormCreationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardToFormCreationService = /** @class */ (function () {
    function DashboardToFormCreationService() {
        this.passData = [];
    }
    // prenosi listu sa required poljima
    DashboardToFormCreationService.prototype.getPassData = function () {
        return this.passData;
    };
    DashboardToFormCreationService.prototype.addPassData = function (item) {
        this.passData.push(item);
    };
    DashboardToFormCreationService.prototype.resetList = function () {
        this.passData = [];
    };
    // prenosi finalFormId na sledecu stranu
    DashboardToFormCreationService.prototype.getfinalFormId = function () {
        return this.finalFormId;
    };
    DashboardToFormCreationService.prototype.addfinalFormId = function (finalFormId) {
        this.finalFormId = finalFormId;
    };
    DashboardToFormCreationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DashboardToFormCreationService);
    return DashboardToFormCreationService;
}());

//# sourceMappingURL=C:/Users/Srdjan/Desktop/salestrekkerapp/angular-src/src/dashboard-to-form-creation.service.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());

//# sourceMappingURL=C:/Users/Srdjan/Desktop/salestrekkerapp/angular-src/src/validate.service.js.map

/***/ })

},[424]);
//# sourceMappingURL=main.bundle.map