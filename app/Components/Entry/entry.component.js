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
    var Entry;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (menucontainer_component_1_1) {
                menucontainer_component_1 = menucontainer_component_1_1;
            }],
        execute: function() {
            Entry = (function () {
                function Entry() {
                }
                Entry.prototype.ngAfterContentInit = function () {
                    //Load background image and hide loader
                    var bgImage = new Image();
                    bgImage.src = "http://192.168.1.97:3000/app/images/bandw.jpg";
                    bgImage.onload = function () {
                        var loader = document.getElementById("loader");
                        loader.style.opacity = "0";
                        var background = document.getElementById("background-fixed");
                        var titlebar = document.getElementById("title-bar");
                        var hamburger = document.getElementById("navmenu-side");
                        background.style.background = "url(" + bgImage.src + ")  no-repeat fixed";
                        background.style.backgroundSize = "cover";
                        background.style.opacity = "1";
                        titlebar.style.opacity = "1";
                        if (hamburger != null)
                            hamburger.style.opacity = "1";
                    };
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Entry.prototype, "sections", void 0);
                Entry = __decorate([
                    core_1.Component({
                        selector: 'splash',
                        templateUrl: 'app/Components/Entry/entry.component.html',
                        directives: [menucontainer_component_1.MenuContainer]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Entry);
                return Entry;
            }());
            exports_1("Entry", Entry);
        }
    }
});
//# sourceMappingURL=entry.component.js.map