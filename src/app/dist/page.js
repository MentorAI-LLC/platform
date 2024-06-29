"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FooterSection_1 = require("../sections/FooterSection");
/**
 * Home Component
 *
 * A functional component that represents the home page of the application.
 * It currently includes only the FooterSection.
 *
 * @returns {JSX.Element} A JSX element representing the home page.
 */
var Home = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(FooterSection_1["default"], null)));
};
exports["default"] = Home;
