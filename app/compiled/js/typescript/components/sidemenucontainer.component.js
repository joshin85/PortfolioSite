System.register(['angular2/core', './menuitem.component'], function(exports_1, context_1) {
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
    var core_1, menuitem_component_1;
    var SideMenuContainer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (menuitem_component_1_1) {
                menuitem_component_1 = menuitem_component_1_1;
            }],
        execute: function() {
            SideMenuContainer = (function () {
                function SideMenuContainer() {
                }
                SideMenuContainer.prototype.ngOnInit = function () {
                    this.active = this.sections[0]; //set the default value to the first section
                };
                //Handle enabling and disabling sections
                SideMenuContainer.prototype.ngDoCheck = function () {
                    var _this = this;
                    var cur = this.active;
                    this.sections.map(function (x) {
                        if (!x.equals(cur) && x.active) {
                            cur.active = false;
                            _this.active = x;
                        }
                        else {
                            x.active = false;
                        }
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SideMenuContainer.prototype, "sections", void 0);
                SideMenuContainer = __decorate([
                    core_1.Component({
                        selector: 'section-menuitems',
                        templateUrl: 'app/templates/menucontainer.component.html',
                        directives: [menuitem_component_1.MenuItem],
                        changeDetection: core_1.ChangeDetectionStrategy.CheckAlways
                    }), 
                    __metadata('design:paramtypes', [])
                ], SideMenuContainer);
                return SideMenuContainer;
            }());
            exports_1("SideMenuContainer", SideMenuContainer);
        }
    }
});
//# sourceMappingURL=sidemenucontainer.component.js.map