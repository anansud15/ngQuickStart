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
var header_component_1 = require('../header/header.component');
var footer_component_1 = require('../footer/footer.component');
var filter_component_1 = require('../filter/filter.component');
var tags_component_1 = require('../tags/tags.component');
var applicant_service_1 = require('../common/applicant.service');
var ActContainerComponent = (function () {
    function ActContainerComponent() {
        this.nameFilter = '';
    }
    ActContainerComponent.prototype.onNameFilterNotify = function (nameString) {
        this.nameFilter = nameString;
    };
    ActContainerComponent = __decorate([
        core_1.Component({
            selector: 'act-container',
            templateUrl: 'app/container/act-container.component.html',
            directives: [applicant_list_component_1.ApplicantListComponent, search_app_component_1.SearchAppComponent,
                header_component_1.HeaderComponent, footer_component_1.FooterComponent, filter_component_1.FilterComponent, tags_component_1.TagsComponent],
            providers: [applicant_service_1.ApplicantService]
        }), 
        __metadata('design:paramtypes', [])
    ], ActContainerComponent);
    return ActContainerComponent;
}());
exports.ActContainerComponent = ActContainerComponent;
//# sourceMappingURL=act-container.component.js.map