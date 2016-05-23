System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var section;
    return {
        setters:[],
        execute: function() {
            section = (function () {
                function section(id, name, headerText, bodyText, footerText, imageURL) {
                    this.id = id;
                    this.name = name;
                    this.headerText = headerText;
                    this.bodyText = bodyText;
                    this.footerText = footerText;
                    this.imageURL = imageURL;
                    this.active = false;
                }
                return section;
            }());
            exports_1("section", section);
        }
    }
});
//# sourceMappingURL=section.js.map