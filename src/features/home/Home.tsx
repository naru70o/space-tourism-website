import Navigation from "@/ui/Navigation";
import { useState } from "react";
import { Link } from "react-router";

export default function Home() {
  const [open, setIsOpen] = useState<boolean>(false);

  return (
    <div className="image h-screen overscroll-none overflow-hidden">
      <div className="grid grid-col-12 grid-rows-[repeat(10,min-content)] overflow-y-auto justify-between h-full">
        {/* nav */}
        <div className="grid-controller">
          <Navigation open={open} setIsOpen={setIsOpen} />
        </div>

        {/* content */}

        <div className="col-start-2 col-span-10 max-w-[120rem] md:mt-[12rem] px-4 mx-auto h-full text-white fade-in">
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
