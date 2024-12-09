import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TopicName from "@/ui/TopicName";
import { useState } from "react";
import data from "@/data.json";
import ErrorComponent from "@/ui/Error";
import Navigation from "@/ui/Navigation";
const { crew } = data;
console.log(crew);
function Crew() {
    const [ActiveCrew, setActiveCrew] = useState(0);
    const [open, setIsOpen] = useState(false);
    const currentCrew = crew.at(ActiveCrew);
    if (!currentCrew) {
        const error = new Error("An error occurred");
        // To get the error message as a string:
        const errorMessage = error.message;
        return _jsx(ErrorComponent, { message: errorMessage });
    }
    const { bio, images, name, role } = currentCrew;
    return (_jsx("div", { className: "image-crew h-screen overscroll-none overflow-hidden", children: _jsxs("div", { className: "grid grid-col-12 grid-rows-[repeat(10,min-content)] overflow-y-auto h-full", children: [_jsx(Navigation, { open: open, setIsOpen: setIsOpen }), _jsx("div", { className: "col-start-2 row-start-2 row-span-1 col-span-10 py-[2.4rem] md:py-[4rem] lg:max-w-7xl mx-auto h-full", children: _jsxs("div", { className: "flex flex-col items-center justify-between gap-[2rem] h-full fade-in", children: [_jsx(TopicName, { number: "02", name: "MEET YOUR CREW" }), _jsxs("div", { className: "flex flex-col lg:flex-row justify-between items-center mt-[2.4rem] h-full ", children: [_jsxs("div", { className: "flex flex-col items-center justify-center md:pt-0 lg:py-[4rem] pb-[2.4rem] h-[80%] lg:justify-between mb-[3.2rem] lg:items-start lg:flex-1", children: [_jsxs("div", { className: "text-white flex flex-col items-center justify-center mb-[5rem] lg:items-start", children: [_jsxs("div", { className: "flex flex-col items-center justify-center lg:items-start  mb-[2.4rem]", children: [_jsx("h1", { className: "text-[1.8rem] md:text-[2.4rem] font-bellefair opacity-50", children: role.toUpperCase() }), _jsx("h2", { className: "font-bellefair text-[2.4rem] md:text-[3rem]", children: name.toUpperCase() })] }), _jsx("p", { className: "text-[1.6rem] w-[80%] font-barlow leading-[180%] mb-[3.2rem] text-center lg:text-start", children: bio })] }), _jsx("div", { className: "flex text-white gap-8", children: Array.from({ length: 4 }, (_, index) => (_jsx("div", { onClick: () => setActiveCrew(index), className: `${index === ActiveCrew ? "active-dot" : "dot"}` }, index))) })] }), _jsx("div", { className: "flex flex-col items-center justify-center w-full lg:flex-1", children: _jsx("img", { src: images.png, alt: "man", className: "h-[28rem] md:h-[56rem] lg:h-[40rem] lg:w-fit w-fit mask-image" }) })] })] }) })] }) }));
}
export default Crew;
