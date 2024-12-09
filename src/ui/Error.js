import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router";
import { useState } from "react";
import Navigation from "./Navigation";
const ErrorComponent = ({ message }) => {
    const [open, setIsOpen] = useState(false);
    return (_jsx("div", { className: "image h-screen overscroll-none overflow-hidden", children: _jsxs("div", { className: "grid grid-col-12 grid-rows-[repeat(10,min-content)] overflow-y-auto justify-between h-full", children: [_jsx(Navigation, { open: open, setIsOpen: setIsOpen }), _jsxs("div", { className: "col-start-2 col-span-10 max-w-[120rem] h-[70vh] justify-center content-center mx-auto", children: [_jsx("div", { className: "text-white text-3xl font-bellefair text-center", children: message }), _jsx(Link, { to: "/", children: _jsx("div", { className: "text-red-400 text-center mt-4 text-6xl font-bellefair cursor-pointer hover:text-white/40 transition duration-150", children: "Try again" }) })] })] }) }));
};
export default ErrorComponent;