"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("@fortawesome/fontawesome-svg-core/styles.css");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
require("../utils/fontawesome");
var google_1 = require("next/font/google");
require("../styles/globals.css");
fontawesome_svg_core_1.config.autoAddCss = false;
var inter = google_1.Inter({ subsets: ['latin'] });
exports.metadata = {
    title: 'Mentor.AI',
    description: 'Mentor.ai personalized roadmaps guiding your tech journey, one step at a time.'
};
/**
 * RootLayout Component
 *
 * The root layout of the application, including head meta tags and global styles.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The children components to be rendered inside the layout.
 * @returns {JSX.Element} A JSX element representing the root layout.
 */
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "ar" },
        React.createElement("head", null,
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" })),
        React.createElement("body", { className: inter.className }, children)));
}
exports["default"] = RootLayout;
