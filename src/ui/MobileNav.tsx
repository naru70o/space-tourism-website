import React, { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      id="menu-btn"
      className={`${
        isOpen ? "open" : ""
      } hamburger mt-3 md:hidden focus:outline-none self-center`}
      type="button"
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>
  );
}
