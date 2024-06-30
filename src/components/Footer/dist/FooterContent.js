"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FooterContent_module_css_1 = require("./FooterContent.module.css");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
/**
 * FooterContent Component
 *
 * A functional component that represents the main content of the footer.
 * It includes the company logo and description, social media icons, company links, and contact information.
 *
 * @returns {JSX.Element} A JSX element representing the footer content.
 */
var FooterContent = function () {
    return (react_1["default"].createElement("div", { className: FooterContent_module_css_1["default"].footerContent },
        react_1["default"].createElement("div", { className: FooterContent_module_css_1["default"].logoColumn },
            react_1["default"].createElement("h3", { className: FooterContent_module_css_1["default"].logo }, "MENTOR AI"),
            react_1["default"].createElement("p", null,
                "Lorem ipsum dolor, consectetur ",
                react_1["default"].createElement("br", null),
                "adipiscing. accumsan ",
                react_1["default"].createElement("br", null),
                "porta idiculus in mattis."),
            react_1["default"].createElement("div", { className: FooterContent_module_css_1["default"].socialIcons },
                react_1["default"].createElement("a", { href: "#", "aria-label": "Twitter" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faTwitter })),
                react_1["default"].createElement("a", { href: "#", "aria-label": "Facebook" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faFacebookF })),
                react_1["default"].createElement("a", { href: "#", "aria-label": "Instagram" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faInstagram })),
                react_1["default"].createElement("a", { href: "#", "aria-label": "GitHub" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faGithub })))),
        react_1["default"].createElement("div", { className: FooterContent_module_css_1["default"].companyColumn },
            react_1["default"].createElement("h4", null, "COMPANY"),
            react_1["default"].createElement("ul", null,
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "#" }, "About")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "#" }, "Features")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "#" }, "Works")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "#" }, "Career")))),
        react_1["default"].createElement("div", { className: FooterContent_module_css_1["default"].contactColumn },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPhone }),
                " Tel"),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEnvelope }),
                " Mail"),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faMapMarkerAlt }),
                " Address"))));
};
exports["default"] = FooterContent;
