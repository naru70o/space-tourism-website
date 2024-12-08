import MobileNav from "../../ui/MobileNav";
import Logo from "../../ui/Logo";
import NavLinks from "../../ui/NavLinks";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="image h-screen overscroll-none overflow-hidden">
      {/* nav */}
      <div className="grid grid-col-12 grid-rows-[repeat(10,min-content)] overflow-y-auto justify-between h-full">
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

        <div className="col-start-2 col-span-10 max-w-[120rem] md:mt-[12rem] mx-auto h-full text-white fade-in">
          <div className="flex flex-col lg:flex-row gap-[1.6rem] justify-between items-center max-w-[122.8rem] lg:mx-auto mt-[2.4rem] md:mt-[1rem] h-full py-6">
            <div className="flex flex-col justify-start items-center lg:items-start lg:flex-1">
              {/* header */}
              <h1 className="font-barlowCondensed font-thin text-[1.6rem] -tracking-tighter lg:ml-3">
                SO, YOU WANT TO TRAVEL TO{" "}
              </h1>
              <h1 className="text-[8rem] font-bellefair inline-block">SPACE</h1>

              {/* sub header */}
              <p className="font-barlow text-center font-normal leading-loose text-[1.6rem] md:w-[70%] lg:text-start">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>

            {/* button */}
            <div>
              <Link to="/destination">
                <button className="relative bg-white text-[2.4rem] self-center text-black hover:text-black/50 font-bellefair my-[6rem] rounded-full h-[20rem] z-10 w-[20rem] lg:flex-1 home-button transition duration-150">
                  EXPLORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
