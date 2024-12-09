import { Link } from "react-router";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import { useState } from "react";
import Navigation from "./Navigation";

interface ErrorProps {
  message: string;
}

const ErrorComponent: React.FC<ErrorProps> = ({ message }) => {
  const [open, setIsOpen] = useState<boolean>(false);

  return (
    <div className="image h-screen overscroll-none overflow-hidden">
      {/* nav */}
      <div className="grid grid-col-12 grid-rows-[repeat(10,min-content)] overflow-y-auto justify-between h-full">
        {/* nav */}
        <Navigation open={open} setIsOpen={setIsOpen} />

        {/* content */}
        <div className="col-start-2 col-span-10 max-w-[120rem] h-[70vh] justify-center content-center mx-auto">
          <div className="text-white text-3xl font-bellefair text-center">
            {message}
          </div>
          <Link to="/">
            <div className="text-red-400 text-center mt-4 text-6xl font-bellefair cursor-pointer hover:text-white/40 transition duration-150">
              Try again
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
