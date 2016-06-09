System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Section;
    return {
        setters:[],
        execute: function() {
            Section = (function () {
                function Section(_a) {
                    var id = _a.id, icon = _a.icon, name = _a.name, headerText = _a.headerText, bodyText = _a.bodyText, footerText = _a.footerText, imageURL = _a.imageURL;
                    this.id = id;
                    this.icon = icon;
                    this.name = name;
                    this.headerText = headerText;
                    this.bodyText = bodyText;
                    this.footerText = footerText;
                    this.imageURL = imageURL;
                    this.active = false;
                }
                Section.prototype.equals = function (section) {
                    return typeof section != "undefined" && section.id == this.id;
                };
                return Section;
            }());
            exports_1("Section", Section);
        }
    }
});
//# sourceMappingURL=section.js.map