import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function MobileNav({ setIsOpen, open }) {
    return (_jsxs("button", { onClick: () => setIsOpen(!open), id: "menu-btn", className: `${open ? "open" : ""} hamburger mt-3 md:hidden z-[999] focus:outline-none self-center`, type: "button", children: [_jsx("span", { className: "hamburger-top" }), _jsx("span", { className: "hamburger-middle" }), _jsx("span", { className: "hamburger-bottom" })] }));
}
