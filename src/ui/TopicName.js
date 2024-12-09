import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function TopicName({ number, name }) {
    return (_jsxs("div", { className: "flex gap-4 md:self-start md:text-[2rem]", children: [_jsx("p", { className: "text-[1.6rem]  text-white font-barlowCondensed tracking-widest font-bold md:text-start opacity-15", children: number }), _jsx("h1", { className: "text-white font-barlowCondensed text-[1.6rem] tracking-widest", children: name })] }));
}
