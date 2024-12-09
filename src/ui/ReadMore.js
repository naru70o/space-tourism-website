import { jsx as _jsx } from "react/jsx-runtime";
export default function ReadMore({ more, setIsMore }) {
    return (_jsx("div", { className: "text-red-300 cursor-pointer", onClick: () => setIsMore((show) => !show), children: more ? "more..." : "less..." }));
}
