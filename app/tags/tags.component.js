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
var TagsComponent = (function () {
    function TagsComponent() {
        this.previousFilterEvent = this.filterEvent;
    }
    // ngOnChanges(): void {
    //     this.tags.push(this.filterEvent);
    // }
    // We "know" that the only way the list can change is
    // identity or in length so that's all we check
    TagsComponent.prototype.ngDoCheck = function () {
        console.log('ngDoCheck() in tag.component');
        if (this.previousFilterEvent !== this.filterEvent) {
            this.tags['tags.length'] = this.filterEvent;
            this.previousFilterEvent = this.filterEvent;
        }
    };
    __decorate([
        //implements OnChanges {
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TagsComponent.prototype, "filterEvent", void 0);
    TagsComponent = __decorate([
        core_1.Component({
            selector: 'act-tags',
            templateUrl: 'app/tags/tags.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], TagsComponent);
    return TagsComponent;
}());
exports.TagsComponent = TagsComponent;
//# sourceMappingURL=tags.component.js.map