import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router";
import Navigation from "./Navigation";
export default function NotFound() {
    const [open, setIsOpen] = useState(false);
    return (_jsx("div", { className: "image h-screen overscroll-none overflow-hidden", children: _jsxs("div", { className: "grid grid-col-12 grid-rows-[repeat(10,min-content)] overflow-y-auto justify-between h-full", children: [_jsx(Navigation, { open: open, setIsOpen: setIsOpen }), _jsxs("div", { className: "col-start-2 col-span-10 max-w-[120rem] h-[70vh] justify-center content-center mx-auto", children: [_jsx("div", { className: "text-white text-3xl font-bellefair", children: "This page doesn't exist. !please go back" }), _jsx(Link, { to: "/", children: _jsx("div", { className: "text-white text-center mt-4 text-6xl font-bellefair underline underline-offset-8 cursor-pointer hover:text-white/40 transition duration-150", children: "\u2190 Go back" }) })] })] }) }));
}
