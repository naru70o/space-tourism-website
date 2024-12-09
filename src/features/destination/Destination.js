import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import data from "@/data.json";
import Navigation from "@/ui/Navigation";
import ReadMore from "@/ui/ReadMore";
import TopicName from "@/ui/TopicName";
import { useState } from "react";
const { destinations } = data;
function Destination() {
    var _a;
    const [planet, setPlanet] = useState(0);
    const [more, setIsMore] = useState(true);
    const [open, setIsOpen] = useState(false);
    const currentPlanet = (_a = destinations.at(planet)) !== null && _a !== void 0 ? _a : destinations[0];
    const { name, images, description, distance, travel } = currentPlanet;
    return (_jsx("div", { className: "image-destination  h-screen overscroll-none overflow-hidden", children: _jsxs("div", { className: "grid grid-col-12 grid-rows-[repeat(10,min-content)] overflow-y-auto h-full", children: [_jsx(Navigation, { open: open, setIsOpen: setIsOpen }), _jsx("div", { className: "col-start-2 row-start-2 row-span-1 col-span-10 py-[2.4rem] md:py-[4rem] lg:max-w-7xl mx-auto fade-in", children: _jsxs("div", { className: "flex flex-col items-center justify-center gap-[2rem]", children: [_jsx(TopicName, { number: "01", name: "PICK YOUR DESTINATION" }), _jsxs("div", { className: "flex lg:flex-row pt-[2.4rem] flex-col justify-between items-center gap-[3.2rem]", children: [_jsx("img", { src: images.png, className: "h-[15rem] w-[15rem] mb-[3.2rem] md:h-[30rem] md:w-[30rem]", alt: "" }), _jsxs("div", { className: "flex flex-col items-center justify-between ", children: [_jsx("div", { className: "flex gap-[3.2rem] font-barlowCondensed font-normal justify-center md:w-[70%] lg:w-[85%] text-white text-[1.4rem] md:text-[1.8rem] lg:translate-x-2 tracking-widest lg:items-start lg:justify-start", children: destinations.map((destination, index) => {
                                                    return (_jsx("div", { className: `${planet === index ? "active-nav" : "hover-nav"} cursor-pointer select-none`, onClick: () => setPlanet(index), children: destination.name.toUpperCase() }, destination.name));
                                                }) }), _jsxs("div", { className: "flex flex-col items-center text-white py-[2.4rem] md:w-[70%] lg:w-[85%] lg:items-start", children: [_jsx("h1", { className: "font-bellefair text-[5.6rem] md:text-[8rem] font-normal", children: name.toUpperCase() }), _jsxs("h2", { className: "text-center font-barlow text-[1.5rem] md:text-[1.8rem] md:tracking-widest tracking-wide lg:text-start", children: [more ? description.slice(0, 100) : description, _jsx(ReadMore, { more: more, setIsMore: setIsMore })] })] }), _jsx("div", { className: "border-t border-[#979797] h-1 w-full md:w-[70%] lg:w-[85%]" }), _jsxs("div", { className: "flex flex-col py-[2.4rem] md:w-[70%] lg:w-[85%] md:flex-row md:justify-between md:items-center", children: [_jsxs("div", { className: "flex flex-col items-center lg:items-start text-white py-[2.4rem]", children: [_jsx("h1", { className: "font-barlowCondensed tracking-[0.2rem] text-[1.6rem] font-normal", children: "AVG. DISTANCE" }), _jsx("p", { className: "font-bellefair text-[2.8rem] text-center", children: distance.toUpperCase() })] }), _jsxs("div", { className: "flex flex-col items-center lg:items-start text-white py-[2.4rem]", children: [_jsx("h1", { className: "font-barlowCondensed tracking-[0.2rem] text-[1.6rem] font-normal", children: "EST. TRAVEL TIME" }), _jsx("p", { className: "font-bellefair text-[2.8rem] text-center", children: travel.toUpperCase() })] })] })] })] })] }) })] }) }));
}
export default Destination;
