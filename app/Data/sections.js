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
            exports_1("sections", sections = [
                new section_1.Section({ id: 1, icon: 'home', name: "Home", headerText: "Home", bodyText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', footerText: "The true value of pain is power", imageURL: "https://lh4.ggpht.com/wKrDLLmmxjfRG2-E-k5L5BUuHWpCOe4lWRF7oVs1Gzdn5e5yvr8fj-ORTlBF43U47yI=w300" }),
                new section_1.Section({ id: 2, icon: 'user', name: "About Me", headerText: "About Me", bodyText: "I am Shinjo", footerText: "None", imageURL: "null" }),
                new section_1.Section({ id: 3, icon: 'home', name: "Control Hub", headerText: "", bodyText: "", footerText: "", imageURL: "null" }),
                new section_1.Section({ id: 4, icon: 'home', name: "Authenticator", headerText: "", bodyText: "", footerText: "", imageURL: "null" })
            ]);
        }
    }
});
//# sourceMappingURL=sections.js.map