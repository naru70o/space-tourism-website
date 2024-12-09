import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
export default function Navigation({ setIsOpen, open }) {
    return (_jsx("div", { className: "grid row-start-1 row-span-1 grid-controller  grid-cols-subgrid flex-col overflow-hidden mt-0 px-[2.4rem] md:px-[0rem] h-fit text-white lg:pt-8 w-full", children: _jsxs("div", { className: "flex justify-between h-fit items-center col-start-1 col-span-12 ", children: [_jsx("div", { className: "py-6 md:px-[4rem] lg:flex justify-center items-center", children: _jsx(Logo, {}) }), _jsx("div", { className: "h-[0.1rem] opacity-25 w-[90%] hidden lg:flex bg-white translate-x-10 z-20" }), _jsx(NavLinks, { open: open }), _jsx(MobileNav, { setIsOpen: setIsOpen, open: open })] }) }));
}
