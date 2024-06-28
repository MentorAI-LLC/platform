"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Footer_module_css_1 = require("./Footer.module.css");
var CallToAction_1 = require("./CallToAction");
var FooterContent_1 = require("./FooterContent");
var FooterBottom_1 = require("./FooterBottom");
var Footer = function () {
    return (react_1["default"].createElement("footer", { className: Footer_module_css_1["default"].footer },
        react_1["default"].createElement(CallToAction_1["default"], null),
        react_1["default"].createElement("div", { className: Footer_module_css_1["default"].footerMain },
            react_1["default"].createElement(FooterContent_1["default"], null)),
        react_1["default"].createElement(FooterBottom_1["default"], null)));
};
exports["default"] = Footer;
