import { jsx as _jsx } from "react/jsx-runtime";
export default function Loading() {
    return (_jsx("div", { className: "image h-screen overscroll-none overflow-hidden", children: _jsx("div", { className: "grid grid-col-12 grid-rows-[repeat(10,min-content)] overflow-y-auto justify-between h-full bg-black/80", children: _jsx("div", { className: "col-start-2 col-span-10 max-w-[120rem] h-screen justify-center content-center mx-auto", children: _jsx("div", { className: "w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin" }) }) }) }));
}
