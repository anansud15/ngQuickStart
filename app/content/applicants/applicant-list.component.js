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
var ApplicantCardsComponent = (function () {
    function ApplicantCardsComponent() {
        this.HEROES = [
            { "id": 11, "name": "Mr. Nice", "city": "Phoenix", "state": "Arizona" },
            { "id": 12, "name": "Narco", "city": "Phoenix", "state": "Arizona" },
            { "id": 13, "name": "Bombasto", "city": "Phoenix", "state": "Arizona" },
            { "id": 14, "name": "Celeritas", "city": "Phoenix", "state": "Arizona" },
            { "id": 15, "name": "Magneta", "city": "Phoenix", "state": "Arizona" },
            { "id": 16, "name": "RubberMan", "city": "Phoenix", "state": "Arizona" },
            { "id": 17, "name": "Dynama", "city": "Phoenix", "state": "Arizona" },
            { "id": 18, "name": "Dr IQ", "city": "Phoenix", "state": "Arizona" },
            { "id": 19, "name": "Magma", "city": "Phoenix", "state": "Arizona" },
            { "id": 20, "name": "Tornado", "city": "Phoenix", "state": "Arizona" }
        ];
    }
    ApplicantCardsComponent = __decorate([
        core_1.Component({
            selector: 'applicant-cards',
            templateUrl: 'app/content/applicants/applicant-list.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ApplicantCardsComponent);
    return ApplicantCardsComponent;
}());
exports.ApplicantCardsComponent = ApplicantCardsComponent;
//# sourceMappingURL=applicant-list.component.js.map