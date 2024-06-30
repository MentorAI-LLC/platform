"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FooterBottom_module_css_1 = require("./FooterBottom.module.css");
/**
 * FooterBottom Component
 *
 * A functional component that represents the bottom section of the footer.
 * It includes a list of navigation links and a copyright notice.
 *
 * @returns {JSX.Element} A JSX element representing the footer bottom section.
 */
var FooterBottom = function () {
    return (react_1["default"].createElement("div", { className: FooterBottom_module_css_1["default"].footerBottom },
        react_1["default"].createElement("div", { className: FooterBottom_module_css_1["default"].links },
            react_1["default"].createElement("a", { href: "#about-us" }, "About us"),
            react_1["default"].createElement("a", { href: "#contact" }, "Contact"),
            react_1["default"].createElement("a", { href: "#privacy-policy" }, "Privacy policy"),
            react_1["default"].createElement("a", { href: "#sitemap" }, "Sitemap"),
            react_1["default"].createElement("a", { href: "#terms-of-use" }, "Terms of Use")),
        react_1["default"].createElement("p", null, "\u00A9 2024, All Rights Reserved")));
};
exports["default"] = FooterBottom;
