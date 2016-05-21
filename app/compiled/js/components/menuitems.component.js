System.register(['angular2/core', 'angular2/common', '../Objects/section'], function(exports_1, context_1) {
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
    var core_1, common_1, section_1;
    var menuitems;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (section_1_1) {
                section_1 = section_1_1;
            }],
        execute: function() {
            menuitems = (function () {
                function menuitems() {
                    this.sections = [
                        new section_1.section(1, "Home", "About Me", "Body", "Footer", "null")
                    ];
                }
                menuitems = __decorate([
                    core_1.Component({
                        selector: 'section-menuitems',
                        directives: [common_1.NgFor],
                        templateUrl: 'app/templates/menuitems.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], menuitems);
                return menuitems;
            }());
            exports_1("menuitems", menuitems);
        }
    }
});
//# sourceMappingURL=menuitems.component.js.map