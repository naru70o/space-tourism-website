import { useState } from "react";
import { Link } from "react-router";
import Navigation from "./Navigation";

export default function NotFound() {
  const [open, setIsOpen] = useState<boolean>(false);

  return (
    <div className="image h-screen overscroll-none overflow-hidden">
      {/* nav */}
      <div className="grid grid-col-12 grid-rows-[repeat(10,min-content)] overflow-y-auto justify-between h-full">
        {/* nav */}
        <Navigation open={open} setIsOpen={setIsOpen} />

        {/* content */}
        <div className="col-start-2 col-span-10 max-w-[120rem] h-[70vh] justify-center content-center mx-auto">
          <div className="text-white text-3xl font-bellefair">
            This page doesn't exist. !please go back
          </div>
          <Link to="/">
            <div className="text-white text-center mt-4 text-6xl font-bellefair underline underline-offset-8 cursor-pointer hover:text-white/40 transition duration-150">
              &larr; Go back
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
