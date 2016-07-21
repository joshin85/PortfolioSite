System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var MenuItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MenuItem = (function () {
                function MenuItem() {
                    this.icon = false;
                    //If menu item then show icon - to avoid the convoluted world of dynamic component loaders and due to the limitation of not having dynamic template loading
                    //As unfortunatley components are rendored at runtime
                    if (this.menuType == "icon")
                        this.icon = true;
                }
                MenuItem.prototype.activateSection = function () {
                    this.section.active = true;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MenuItem.prototype, "section", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MenuItem.prototype, "menuType", void 0);
                MenuItem = __decorate([
                    core_1.Component({
                        selector: 'menuitem',
                        templateUrl: 'app/templates/menuitem.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MenuItem);
                return MenuItem;
            }());
            exports_1("MenuItem", MenuItem);
        }
    }
});
//# sourceMappingURL=menuitem.component.js.map