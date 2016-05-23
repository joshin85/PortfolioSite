System.register(['../Objects/section'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var section_1;
    var sections;
    return {
        setters:[
            function (section_1_1) {
                section_1 = section_1_1;
            }],
        execute: function() {
            'use strict';
            //Id , Title, Header, Body, Footer, imageURL
            exports_1("sections", sections = [
                new section_1.section(1, "Home", "", "", "", "null"),
                new section_1.section(2, "About Me", "About Me", "Body", "Footer", "null"),
                new section_1.section(3, "Two Factor Authentication", "Dynamic Authentication", "Body", "Footer", "null"),
                new section_1.section(4, "Control Hub", "Control Hub", "Body", "Footer", "null"),
                new section_1.section(5, "Portfolio", "About Me", "Body", "Footer", "null"),
            ]);
        }
    }
});
//# sourceMappingURL=sections.js.map