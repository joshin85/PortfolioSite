System.register(['angular2/core', '../SideMenu/menuside.component', '../Entry/entry.component', '../Section/section.component', '../../Data/sections'], function(exports_1, context_1) {
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
    var core_1, menuside_component_1, entry_component_1, section_component_1, globals;
    var home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (menuside_component_1_1) {
                menuside_component_1 = menuside_component_1_1;
            },
            function (entry_component_1_1) {
                entry_component_1 = entry_component_1_1;
            },
            function (section_component_1_1) {
                section_component_1 = section_component_1_1;
            },
            function (globals_1) {
                globals = globals_1;
            }],
        execute: function() {
            home = (function () {
                function home() {
                    this.sections = globals.sections;
                    this.menuType = "text";
                }
                home.prototype.ngOnInit = function () {
                    this.active = this.sections[0]; //set the default value to the first section
                };
                //Handle enabling and disabling sections
                home.prototype.ngDoCheck = function () {
                    var _this = this;
                    var cur = this.active;
                    this.sections.map(function (x) {
                        //If not current then activate the section
                        if (!x.equals(cur) && x.active) {
                            cur.active = false;
                            _this.active = x;
                        }
                    });
                };
                home = __decorate([
                    core_1.Component({
                        selector: 'Portfolio-Shinjo',
                        templateUrl: 'app/Components/Home/home.component.html',
                        directives: [menuside_component_1.SideMenu, entry_component_1.Entry, section_component_1.SectionContainer],
                        changeDetection: core_1.ChangeDetectionStrategy.CheckAlways
                    }), 
                    __metadata('design:paramtypes', [])
                ], home);
                return home;
            }());
            exports_1("home", home);
        }
    }
});
//# sourceMappingURL=home.js.map