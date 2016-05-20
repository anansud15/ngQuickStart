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
var applicant_filter_pipe_1 = require('./applicant-filter.pipe');
var applicant_service_1 = require('../common/applicant.service');
var ApplicantCardsComponent = (function () {
    function ApplicantCardsComponent(_applicantService) {
        this._applicantService = _applicantService;
        this.nameFilter = '';
    }
    ApplicantCardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._applicantService.getApplicants()
            .subscribe(function (applicants) { return _this.applicants = applicants; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ApplicantCardsComponent.prototype, "nameFilter", void 0);
    ApplicantCardsComponent = __decorate([
        core_1.Component({
            selector: 'applicant-cards',
            templateUrl: 'app/applicants/applicant-list.component.html',
            pipes: [applicant_filter_pipe_1.ApplicantFilterPipe]
        }), 
        __metadata('design:paramtypes', [applicant_service_1.ApplicantService])
    ], ApplicantCardsComponent);
    return ApplicantCardsComponent;
}());
exports.ApplicantCardsComponent = ApplicantCardsComponent;
//# sourceMappingURL=applicant-list.component.js.map