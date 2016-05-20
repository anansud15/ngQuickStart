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
var SearchAppComponent = (function () {
    function SearchAppComponent() {
        this.nameFilter = '';
        this.nameFilterNotify = new core_1.EventEmitter();
    }
    SearchAppComponent.prototype.emitNameFilter = function () {
        this.nameFilterNotify.emit(this.nameFilter);
        console.log("onclick .. onsearchnotify .. ");
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SearchAppComponent.prototype, "nameFilterNotify", void 0);
    SearchAppComponent = __decorate([
        core_1.Component({
            selector: 'search-app',
            templateUrl: 'app/search/search-app.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], SearchAppComponent);
    return SearchAppComponent;
}());
exports.SearchAppComponent = SearchAppComponent;
//# sourceMappingURL=search-app.component.js.map