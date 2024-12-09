import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import data from "@/data.json";
import ErrorComponent from "@/ui/Error";
import Navigation from "@/ui/Navigation";
import TopicName from "@/ui/TopicName";
import { useState } from "react";
const { technology } = data;
function Destination() {
    const [tech, setTech] = useState(0);
    const [open, setIsOpen] = useState(false);
    const currentTech = technology.at(tech);
    if (!currentTech) {
        const error = new Error("An error occurred");
        // To get the error message as a string:
        const errorMessage = error.message;
        return _jsx(ErrorComponent, { message: errorMessage });
    }
    const { name, description, images } = currentTech;
    return (_jsx("div", { className: "image-destination h-screen overscroll-none overflow-hidden", children: _jsxs("div", { className: "grid grid-col-12 grid-rows-[repeat(10,min-content)] overflow-y-auto justify-between h-full", children: [_jsx("div", { className: "grid-controller", children: _jsx(Navigation, { open: open, setIsOpen: setIsOpen }) }), _jsx("div", { className: "grid-controller lg:col-start-2 lg:col-span-12\r\n         row-start-2 row-span-1 py-[2.4rem] md:py-[4rem]  mx-auto fade-in max-w-[120rem]", children: _jsxs("div", { className: "flex flex-col items-center justify-center gap-[2rem]", children: [_jsx("div", { className: "px-14 md:self-start", children: _jsx(TopicName, { number: "01", name: "PICK YOUR DESTINATION" }) }), _jsxs("div", { className: "grid grid-cols-2 w-full pt-[2.4rem] flex-col justify-between items-center gap-[3.2rem]", children: [_jsx("div", { className: "col-start-1 col-span-2 w-full h-[23rem] md:h-[40rem] mb-8 bg-cover bg-center bg-no-repeat lg:col-start-2 lg:h-[50rem] lg:w-[80%]\r\n                ", style: {
                                            backgroundImage: window.innerWidth >= 1024
                                                ? `url(${images.portrait})`
                                                : `url(${images.landscape})`,
                                        } }), _jsx("div", { className: "col-start-1 col-span-2 lg:col-start-1 lg:col-span-1 lg:row-start-1", children: _jsxs("div", { className: "flex flex-col lg:flex-row gap-[6.4rem]", children: [_jsx("div", { className: "flex flex-col justify-center items-center mx-auto", children: _jsx("div", { className: "flex gap-4 items-center justify-center lg:h-full lg:justify-around lg:flex-col py-8", children: Array.from({ length: 3 }, (_, index) => {
                                                            return (_jsx("div", { onClick: () => setTech(index), className: `${tech === index
                                                                    ? "number-active"
                                                                    : "number-unactive"}`, children: _jsx("div", { className: "text-center text-[1.6rem]", children: index + 1 }) }, index));
                                                        }) }) }), _jsxs("div", { className: "text-white flex flex-col items-center justify-center mb-[5rem] lg:mb-0  lg:items-start", children: [_jsxs("div", { className: "flex flex-col items-center justify-center lg:items-start  mb-[2.4rem]", children: [_jsx("h1", { className: "text-[1.8rem] md:text-[2.4rem] lg:text-[3.2rem] font-bellefair opacity-50", children: "THE TERMINOLOG" }), _jsx("h2", { className: "font-bellefair text-[2.4rem] md:text-[4rem] lg:text-[5.6rem]", children: name.toUpperCase() })] }), _jsx("p", { className: "text-[1.6rem] w-[90%] font-barlow leading-[180%] mb-[3.2rem] text-center lg:text-start", children: description })] })] }) })] })] }) })] }) }));
}
export default Destination;
