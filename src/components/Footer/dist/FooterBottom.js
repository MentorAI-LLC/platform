"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FooterBottom_module_css_1 = require("./FooterBottom.module.css");
var FooterBottom = function () {
    return (react_1["default"].createElement("div", { className: FooterBottom_module_css_1["default"].footerBottom },
        react_1["default"].createElement("div", { className: FooterBottom_module_css_1["default"].links },
            react_1["default"].createElement("a", { href: "#" }, "About us"),
            react_1["default"].createElement("a", { href: "#" }, "Contact"),
            react_1["default"].createElement("a", { href: "#" }, "Privacy policy"),
            react_1["default"].createElement("a", { href: "#" }, "Sitemap"),
            react_1["default"].createElement("a", { href: "#" }, "Terms of Use")),
        react_1["default"].createElement("div", { className: FooterBottom_module_css_1["default"].copyright }, "\u00A9 2024, All Rights Reserved")));
};
exports["default"] = FooterBottom;
