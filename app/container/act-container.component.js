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
var applicant_list_component_1 = require('../applicants/applicant-list.component');
var search_app_component_1 = require('../search/search-app.component');
var ActContainerComponent = (function () {
    function ActContainerComponent() {
        this.applicants = [
            { "id": "00011", "name": "Mr. Nice", "city": "Phoenix", "state": "Arizona" },
            { "id": "00012", "name": "Narco", "city": "Phoenix", "state": "Arizona" },
            { "id": "00013", "name": "Bombasto", "city": "Phoenix", "state": "Arizona" },
            { "id": "00014", "name": "Celeritas", "city": "Phoenix", "state": "Arizona" },
            { "id": "00015", "name": "Magneta", "city": "Phoenix", "state": "Arizona" },
            { "id": "00016", "name": "RubberMan", "city": "Phoenix", "state": "Arizona" },
            { "id": "00017", "name": "Dynama", "city": "Phoenix", "state": "Arizona" },
            { "id": "00018", "name": "Dr IQ", "city": "Phoenix", "state": "Arizona" },
            { "id": "00019", "name": "Magma", "city": "Phoenix", "state": "Arizona" },
            { "id": "00020", "name": "Tornado", "city": "Phoenix", "state": "Arizona" }
        ];
        this.nameFilter = '';
    }
    ActContainerComponent.prototype.onNameFilterNotify = function (nameString) {
        this.nameFilter = nameString;
    };
    ActContainerComponent = __decorate([
        core_1.Component({
            selector: 'act-container',
            templateUrl: 'app/container/act-container.component.html',
            directives: [applicant_list_component_1.ApplicantCardsComponent, search_app_component_1.SearchAppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ActContainerComponent);
    return ActContainerComponent;
}());
exports.ActContainerComponent = ActContainerComponent;
//# sourceMappingURL=act-container.component.js.map