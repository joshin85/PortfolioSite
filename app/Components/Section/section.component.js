System.register(['angular2/core', '../Menu/MenuContainer/menucontainer.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, menucontainer_component_1;
    var SectionContainer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (menucontainer_component_1_1) {
                menucontainer_component_1 = menucontainer_component_1_1;
            }],
        execute: function() {
            SectionContainer = (function () {
                function SectionContainer() {
                    this.menuType = "icon";
                    this.menuActive = false;
                }
                SectionContainer.prototype.toggleMenu = function () {
                    this.menuActive = !this.menuActive;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SectionContainer.prototype, "sections", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SectionContainer.prototype, "section", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SectionContainer.prototype, "menuType", void 0);
                SectionContainer = __decorate([
                    core_1.Component({
                        selector: 'section-container',
                        templateUrl: 'app/Components/Section/section.component.html',
                        directives: [menucontainer_component_1.MenuContainer]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SectionContainer);
                return SectionContainer;
            }());
            exports_1("SectionContainer", SectionContainer);
        }
    }
});
//# sourceMappingURL=section.component.js.map