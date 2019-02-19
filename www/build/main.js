webpackJsonp([5],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppareilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_appareil_single_appareil__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_appareil_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appareil_form_appareil_form__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppareilPage = /** @class */ (function () {
    function AppareilPage(navCtrl, menuCtrl, modalCtrl, navParams, appareilService, toastCtrl, loaddingCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.appareilService = appareilService;
        this.toastCtrl = toastCtrl;
        this.loaddingCtrl = loaddingCtrl;
    }
    AppareilPage.prototype.ngOnInit = function () {
        var _this = this;
        this.appareilSubscription = this.appareilService.appareils$.subscribe(function (appareils) {
            _this.appareilList = appareils.slice();
        });
        this.appareilService.emitAppareil();
    };
    AppareilPage.prototype.onLoadAppareil = function (index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__single_appareil_single_appareil__["a" /* SingleAppareilPage */], { index: index });
        modal.present();
    };
    AppareilPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    AppareilPage.prototype.onNewAppareil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__appareil_form_appareil_form__["a" /* AppareilFormPage */]);
    };
    AppareilPage.prototype.ngOnDestroy = function () {
        this.appareilSubscription.unsubscribe();
    };
    AppareilPage.prototype.onSaveList = function () {
        var _this = this;
        var loader = this.loaddingCtrl.create({
            content: 'Sauvgarde en cours..'
        });
        loader.present();
        this.appareilService.saveData().then(function () {
            loader.dismiss();
            _this.toastCtrl.create({
                message: 'Données sauvgardées !',
                duration: 3000,
                position: 'bottom'
            }).present();
        }).catch(function (error) {
            loader.dismiss();
            _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'bottom'
            }).present();
        });
    };
    AppareilPage.prototype.onFetchList = function () {
        var _this = this;
        var loader = this.loaddingCtrl.create({
            content: 'Récuperation en cours..'
        });
        loader.present();
        this.appareilService.retrieveData().then(function () {
            loader.dismiss();
            _this.toastCtrl.create({
                message: 'Données récupérées!',
                duration: 3000,
                position: 'bottom'
            }).present();
        }).catch(function (error) {
            loader.dismiss();
            _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'bottom'
            }).present();
        });
    };
    AppareilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appareil',template:/*ion-inline-start:"C:\Users\Houssem\ionic\first-project-v3\src\pages\appareil\appareil.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>appareil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item\n            icon-start\n            *ngFor="let appareil of appareilList; let i = index"\n            (click)="onLoadAppareil(i)">\n      <ion-icon name="power" [color]="appareil.isOn ? \'secondary\' : \'danger\'"></ion-icon>\n      {{ appareil.name }}\n    </button>\n    <ion-card>\n      <ion-card-header>Données</ion-card-header>\n      <ion-card-content>\n        <button ion-button block outline (click)="onSaveList()">Enregistrer</button>\n        <button ion-button block outline (click)="onFetchList()">Récupérer</button>\n\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n  <button ion-button  full (click)="onNewAppareil()">Nouvel appareil</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Houssem\ionic\first-project-v3\src\pages\appareil\appareil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_appareil_service__["a" /* AppareilService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AppareilPage);
    return AppareilPage;
}());

//# sourceMappingURL=appareil.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appareil_appareil__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.appreilPage = __WEBPACK_IMPORTED_MODULE_1__appareil_appareil__["a" /* AppareilPage */];
        this.settingPage = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Houssem\ionic\first-project-v3\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="appreilPage" tabTitle="Appareil" tabIcon="bulb"></ion-tab>\n  <ion-tab [root]="settingPage" tabTitle="Reglage" tabIcon="settings"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Houssem\ionic\first-project-v3\src\pages\tabs\tabs.html"*/,
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppareilFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_appareil_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Appareil__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppareilFormPage = /** @class */ (function () {
    function AppareilFormPage(navCtrl, formBuilder, appareilService) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.appareilService = appareilService;
    }
    AppareilFormPage.prototype.ngOnInit = function () {
        this.initForm();
    };
    AppareilFormPage.prototype.initForm = function () {
        this.appareilForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            description: this.formBuilder.array([])
        });
    };
    AppareilFormPage.prototype.getDescriptionArray = function () {
        return this.appareilForm.get('description');
    };
    AppareilFormPage.prototype.onAddDescription = function () {
        var newControl = this.formBuilder.control('');
        this.getDescriptionArray().controls.push(newControl);
    };
    AppareilFormPage.prototype.onRemoveDescription = function (index) {
        this.getDescriptionArray().removeAt(index);
    };
    AppareilFormPage.prototype.onSubmitForm = function () {
        var newAppareil = new __WEBPACK_IMPORTED_MODULE_4__models_Appareil__["a" /* Appareil */](this.appareilForm.get('name').value);
        for (var _i = 0, _a = this.getDescriptionArray().controls; _i < _a.length; _i++) {
            var control = _a[_i];
            newAppareil.description.push(control.value);
        }
        this.appareilService.addAppareil(newAppareil);
        this.navCtrl.pop();
    };
    AppareilFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appareil-form',template:/*ion-inline-start:"C:\Users\Houssem\ionic\first-project-v3\src\pages\appareil-form\appareil-form.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Nouvel appareil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="appareilForm">\n    <ion-list>\n      <ion-item-divider>Informations</ion-item-divider>\n      <ion-item>\n        <ion-label>Nom</ion-label>\n        <ion-input placeholder="Appareil" formControlName="name"></ion-input>\n      </ion-item>\n      <ion-item-divider>Description</ion-item-divider>\n      <div formArrayName="description">\n        <ion-item *ngFor="let control of getDescriptionArray().controls; let i = index">\n          <ion-icon item-start\n                    name="remove-circle"\n                    color="danger"\n                    (click)="onRemoveDescription(i)">\n          </ion-icon>\n          <ion-input [formControlName]="i" [placeholder]="i+1 + \'.\'"></ion-input>\n        </ion-item>\n      </div>\n    </ion-list>\n    <button ion-button full (click)="onAddDescription()">Ajouter une ligne</button>\n  <button ion-button full color="secondary" (click)="onSubmitForm()">Enregistre</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Houssem\ionic\first-project-v3\src\pages\appareil-form\appareil-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_appareil_service__["a" /* AppareilService */]])
    ], AppareilFormPage);
    return AppareilFormPage;
}());

//# sourceMappingURL=appareil-form.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OptionPage = /** @class */ (function () {
    function OptionPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
    }
    OptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OptionPage');
    };
    OptionPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    OptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-option',template:/*ion-inline-start:"C:\Users\Houssem\ionic\first-project-v3\src\pages\option\option.html"*/'<!--\n  Generated template for the OptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>option</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<p>modifier les option</p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Houssem\ionic\first-project-v3\src\pages\option\option.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], OptionPage);
    return OptionPage;
}());

//# sourceMappingURL=option.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(alertCtrl, menuCtrl) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
    }
    SettingsPage.prototype.onToggleLight = function () {
        var alert = this.alertCtrl.create({
            title: 'Est-vous certain(e) de vouloire continuer?',
            subTitle: 'Cette action allumera ou eteindra toutes les lumiere de la maison',
            buttons: [
                {
                    text: 'annuler',
                    role: 'cancel'
                },
                {
                    text: 'confirmer',
                    handler: function () { return console.log('confirmer !'); }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Houssem\ionic\first-project-v3\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Reglage</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button icon-start (click)="onToggleLight()">\n    <ion-icon name="power"></ion-icon>Lumiere</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Houssem\ionic\first-project-v3\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 202:
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
webpackEmptyAsyncContext.id = 202;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/appareil-form/appareil-form.module": [
		778,
		4
	],
	"../pages/appareil/appareil.module": [
		779,
		3
	],
	"../pages/option/option.module": [
		780,
		2
	],
	"../pages/settings/settings.module": [
		781,
		1
	],
	"../pages/tabs/tabs.module": [
		782,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 247;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleAppareilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_appareil_service__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleAppareilPage = /** @class */ (function () {
    function SingleAppareilPage(navParams, viewCtrl, appareilService) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.appareilService = appareilService;
    }
    SingleAppareilPage.prototype.ngOnInit = function () {
        this.index = this.navParams.get('index');
        this.appareil = this.appareilService.appreilList[this.index];
    };
    SingleAppareilPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    SingleAppareilPage.prototype.onToggleAppratiel = function () {
        this.appareil.isOn = !this.appareil.isOn;
    };
    SingleAppareilPage.prototype.onSubmitForm = function (form) {
        console.log(form.value);
        this.dismissModal();
    };
    SingleAppareilPage.prototype.onDeleteHoraire = function () {
        this.appareil.startTime = '';
        this.appareil.endTime = '';
        this.dismissModal();
    };
    SingleAppareilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-single-appareil',template:/*ion-inline-start:"C:\Users\Houssem\ionic\first-project-v3\src\pages\appareil\single-appareil\single-appareil.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{  name }}</ion-title>\n    <ion-buttons>\n      <button ion-button clear (click)="dismissModal()">Fermer</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-card [ngClass]="{\'is-on\': appareil.isOn, \'is-off\': !appareil.isOn }">\n  <ion-card-header>{{appareil.name}}</ion-card-header>\n  <ion-card-content>\n    <p *ngFor="let line of appareil.description">{{line}}</p>\n  </ion-card-content>\n</ion-card>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button full color="danger" (click)="onToggleAppratiel()" [disabled]="! appareil.isOn">Eteindre</button>\n        </ion-col>\n          <ion-col>\n        <button ion-button full color="secondaire" (click)="onToggleAppratiel()" [disabled]="appareil.isOn">Alumemr</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <form #f="ngForm" (ngSubmit)="onSubmitForm(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label>Heure d\'allumage></ion-label>\n        <ion-datetime displayFormat="HH:mm"\n                      name="startTime" [(ngModel)]="appareil.startTime" ></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>Heure d\'extinction></ion-label>\n        <ion-datetime displayFormat="HH:mm"\n                      name="endTime" [(ngModel)]="appareil.endTime" ></ion-datetime>\n      </ion-item>\n    </ion-list>\n    <button ion-button full\n            type="button"\n            color="danger"\n    (click)="onDeleteHoraire()">Supprimer horaire</button>\n    <button ion-button full\n            type="submit"\n            color="secondary">Enregistrer horaire</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Houssem\ionic\first-project-v3\src\pages\appareil\single-appareil\single-appareil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_appareil_service__["a" /* AppareilService */]])
    ], SingleAppareilPage);
    return SingleAppareilPage;
}());

//# sourceMappingURL=single-appareil.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthPage = /** @class */ (function () {
    function AuthPage(authService, navParams, menuCtrl, navCtrl, formBuilder) {
        this.authService = authService;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
    }
    AuthPage.prototype.ngOnInit = function () {
        this.mode = this.navParams.get('mode');
        this.initForm();
    };
    AuthPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    AuthPage.prototype.initForm = function () {
        this.authForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    AuthPage.prototype.onSubmitForm = function () {
        var _this = this;
        var email = this.authForm.get('email').value;
        var password = this.authForm.get('password').value;
        if (this.mode === 'new') {
            this.authService.signUpUser(email, password).then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }, function (error) {
                _this.errorMessage = error;
            });
        }
        else if (this.mode === 'connect') {
            this.authService.signInUser(email, password).then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }, function (error) {
                _this.errorMessage = error;
            });
        }
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"C:\Users\Houssem\ionic\first-project-v3\src\pages\auth\auth.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf="mode === \'new\'">Nouvel utilisateur</ion-title>\n    <ion-title *ngIf="mode === \'connect\'">Connexion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="authForm">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Adresse mail</ion-label>\n        <ion-input type="email" formControlName="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Mot de passe</ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button full (click)="onSubmitForm()">Soumettre</button>\n    <span ion-text color="danger">{{ errorMessage }}</span>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Houssem\ionic\first-project-v3\src\pages\auth\auth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = /** @class */ (function () {
    function AuthService() {
        var _this = this;
        this.isAuth = false;
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.isAuth = true;
            }
            else {
                _this.isAuth = false;
            }
        });
    }
    AuthService.prototype.signUpUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().createUserWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signInUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signInWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signOut = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signOut();
    };
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(401);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_appareil_appareil__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_appareil_single_appareil_single_appareil__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_appareil_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_option_option__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_appareil_form_appareil_form__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_auth_auth__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_appareil_appareil__["a" /* AppareilPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_appareil_single_appareil_single_appareil__["a" /* SingleAppareilPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_option_option__["a" /* OptionPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_appareil_form_appareil_form__["a" /* AppareilFormPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_auth_auth__["a" /* AuthPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/appareil-form/appareil-form.module#AppareilFormPageModule', name: 'AppareilFormPage', segment: 'appareil-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appareil/appareil.module#AppareilPageModule', name: 'AppareilPage', segment: 'appareil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/option/option.module#OptionPageModule', name: 'OptionPage', segment: 'option', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_appareil_appareil__["a" /* AppareilPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_appareil_single_appareil_single_appareil__["a" /* SingleAppareilPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_option_option__["a" /* OptionPage */], __WEBPACK_IMPORTED_MODULE_13__pages_appareil_form_appareil_form__["a" /* AppareilFormPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_auth_auth__["a" /* AuthPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_appareil_service__["a" /* AppareilService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appareil; });
var Appareil = /** @class */ (function () {
    function Appareil(name) {
        this.name = name;
        this.isOn = false;
        this.startTime = '';
        this.endTime = '';
        this.description = [];
    }
    return Appareil;
}());

//# sourceMappingURL=Appareil.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_option_option__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.optionsPage = __WEBPACK_IMPORTED_MODULE_6__pages_option_option__["a" /* OptionPage */];
        this.authPage = __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__["a" /* AuthPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            var config = {
                apiKey: "AIzaSyDHOgsghqV5cIdpyrhXEmmtkaAroVNsfG4",
                authDomain: "openclassrooms-ionic.firebaseapp.com",
                databaseURL: "https://openclassrooms-ionic.firebaseio.com",
                projectId: "openclassrooms-ionic",
                storageBucket: "openclassrooms-ionic.appspot.com",
                messagingSenderId: "121353569465"
            };
            __WEBPACK_IMPORTED_MODULE_4_firebase__["initializeApp"](config);
            __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    _this.isAuth = true;
                    _this.content.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    _this.isAuth = false;
                    _this.content.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__["a" /* AuthPage */], { mode: 'connect' });
                }
            });
        });
    }
    MyApp.prototype.onDisconnect = function () {
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().signOut();
        this.menuCtrl.close();
    };
    MyApp.prototype.onNavigate = function (page, data) {
        this.content.setRoot(page, data ? data : null);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */])
    ], MyApp.prototype, "content", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Houssem\ionic\first-project-v3\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item icon-start (click)="onNavigate(tabsPage)" *ngIf="isAuth">\n        <ion-icon name="power"></ion-icon>\n        Appareils\n      </button>\n      <button ion-item icon-start (click)="onNavigate(optionsPage)" *ngIf="isAuth">\n        <ion-icon name="options"></ion-icon>\n        Options\n      </button>\n      <button ion-item icon-start (click)="onNavigate(authPage, {mode: \'new\'})" *ngIf="!isAuth">\n        <ion-icon name="person-add"></ion-icon>\n        Nouvel utilisateur\n      </button>\n      <button ion-item icon-start (click)="onNavigate(authPage, {mode: \'connect\'})" *ngIf="!isAuth">\n        <ion-icon name="person"></ion-icon>\n        Connexion\n      </button>\n      <button ion-item icon-start (click)="onDisconnect()" *ngIf="isAuth">\n        <ion-icon name="exit"></ion-icon>\n        Déconnexion\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="tabsPage" #content></ion-nav>\n'/*ion-inline-end:"C:\Users\Houssem\ionic\first-project-v3\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appareil_appareil__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomePage = /** @class */ (function () {
    function HomePage() {
        this.appreilPage = __WEBPACK_IMPORTED_MODULE_1__appareil_appareil__["a" /* AppareilPage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Houssem\ionic\first-project-v3\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n     page d\'acceil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button [navPush]="appreilPage">Apprareil</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Houssem\ionic\first-project-v3\src\pages\home\home.html"*/
        })
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppareilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);


var AppareilService = /** @class */ (function () {
    function AppareilService() {
        this.appareils$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.appreilList = [
            {
                name: 'machine',
                description: [
                    'Volume 6 litre',
                    'Temps de lavage: 2 heures',
                    'Consommation: 173 kWh/an'
                ],
                isOn: true,
                startTime: '',
                endTime: ''
            },
            {
                name: 'television',
                description: [
                    'dimension: 40 pouces',
                    'Consommation: 22kWh/an'
                ],
                isOn: true,
                startTime: '',
                endTime: ''
            },
            {
                name: 'ordinateur',
                description: [
                    'Marque: fait maison',
                    'Consoomation: 500kWh/an'
                ],
                isOn: false,
                startTime: '',
                endTime: ''
            }
        ];
    }
    AppareilService.prototype.addAppareil = function (appareil) {
        this.appreilList.push(appareil);
        this.emitAppareil();
    };
    AppareilService.prototype.emitAppareil = function () {
        this.appareils$.next(this.appreilList.slice());
    };
    AppareilService.prototype.saveData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('appareils').set(_this.appreilList).then(function (data) {
                resolve(data);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    AppareilService.prototype.retrieveData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('appareils').once('value').then(function (data) {
                _this.appreilList = data.val();
                _this.emitAppareil();
                resolve('Données recupere avec succes');
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    return AppareilService;
}());

//# sourceMappingURL=appareil.service.js.map

/***/ })

},[396]);
//# sourceMappingURL=main.js.map