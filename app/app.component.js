"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var act_container_component_1 = require('./container/act-container.component');
var login_component_1 = require('./login/login.component');
var applicant_detail_component_1 = require('./applicants/applicant-detail.component');
var login_service_1 = require('./login/login.service');
var http_1 = require('@angular/http');
require('rxjs/Rx'); // load all features
var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._router.navigate(['/login']);
    };
    AppComponent = __decorate([
        // load all features
        core_1.Component({
            selector: 'app',
            templateUrl: 'app/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, login_service_1.LoginService]
        }),
        router_1.Routes([
            { path: '/login', component: login_component_1.LoginComponent },
            { path: '/applicants', component: act_container_component_1.ActContainerComponent },
            { path: '/applicant/:id', component: applicant_detail_component_1.ApplicantDetailComponent },
            { path: '*', component: login_component_1.LoginComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map