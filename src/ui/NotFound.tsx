import { Link } from "react-router";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

export default function NotFound() {
  return (
    <div className="image h-screen overscroll-none overflow-hidden">
      {/* nav */}
      <div className="grid grid-col-12 grid-rows-[repeat(10,min-content)] overflow-y-auto justify-between h-full">
        {/* nav */}
        <div className="grid col-start-1 col-span-12 row-start-1 row-span-1 grid-cols-subgrid flex-col overflow-hidden mt-0 px-[2.4rem] md:px-[0rem] text-white lg:pt-8 w-full">
          {/* nav */}
          <div className="flex justify-between h-fit items-center col-start-1 col-span-12 ">
            <div className="py-6 md:px-[4rem] xl:flex justify-center items-center">
              <Logo />
            </div>
            <div className="h-[0.1rem] opacity-25 w-full hidden lg:flex bg-white translate-x-10 z-20"></div>
            <NavLinks />
            <MobileNav />
          </div>
        </div>
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
