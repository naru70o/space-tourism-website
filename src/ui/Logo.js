import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router";
export default function Logo() {
    return (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", className: "cursor-pointer", children: _jsx(Link, { to: "/", children: _jsxs("g", { fill: "none", fillRule: "evenodd", children: [_jsx("circle", { cx: "24", cy: "24", r: "24", fill: "#FFF" }), _jsx("path", { fill: "#0B0D17", d: "M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" })] }) }) }));
}
