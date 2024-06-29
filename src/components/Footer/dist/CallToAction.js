"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CallToAction_module_css_1 = require("./CallToAction.module.css");
/**
 * CallToAction Component
 *
 * A functional component that represents a call-to-action section.
 * It includes a heading, a paragraph, and a call-to-action button.
 *
 * @returns {JSX.Element} A JSX element representing the call-to-action section.
 */
var CallToAction = function () {
    return (react_1["default"].createElement("div", { className: CallToAction_module_css_1["default"].callToAction },
        react_1["default"].createElement("h2", null, "Are you ready to get started?"),
        react_1["default"].createElement("p", null, "We got you covered!"),
        react_1["default"].createElement("button", { className: CallToAction_module_css_1["default"].ctaButton }, "Sign Up \u2014 Free")));
};
exports["default"] = CallToAction;
