import Logo from "@/ui/Logo";
import MobileNav from "@/ui/MobileNav";
import NavLinks from "@/ui/NavLinks";

function Destination() {
  return (
    <div className="image-destination  h-screen overscroll-none overflow-hidden">
      <div className="grid grid-col-12 grid-rows-[repeat(10,min-content)] overflow-y-auto h-full">
        {/* nav */}
        <div className="grid col-start-1 row-start-1 row-span-1 col-span-12 grid-cols-subgrid flex-col overflow-hidden mt-0 px-[2.4rem] md:px-[0rem] h-fit text-white lg:pt-8 w-full">
          <div className="flex justify-between h-fit items-center col-start-1 col-span-12 ">
            <div className="py-6 md:px-[4rem] lg:flex justify-center items-center">
              <Logo />
            </div>
            <div className="h-[0.1rem] opacity-25 w-[90%] hidden lg:flex bg-white translate-x-10 z-20"></div>
            <NavLinks />
            <MobileNav />
          </div>
        </div>

        {/* content */}
        <div className="col-start-2 row-start-2 row-span-1 col-span-10 py-[2.4rem] md:py-[4rem] lg:max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-[2rem]">
            {/* Header text */}
            <div className="flex gap-4 md:self-start md:text-[2rem]">
              <p className="text-[1.6rem]  text-white font-barlowCondensed tracking-widest font-bold md:text-start opacity-15">
                01
              </p>
              <h1 className="text-white font-barlowCondensed text-[1.6rem] tracking-widest">
                PICK YOUR DESTINATION
              </h1>
            </div>

            {/* container for the info */}
            <div className="flex lg:flex-row pt-[2.4rem] flex-col justify-between items-center gap-[3.2rem]">
              {/* image */}
              <img
                src="./image-moon.png"
                className="h-[15rem] w-[15rem] mb-[3.2rem] md:h-[30rem] md:w-[30rem]"
                alt=""
              />

              {/* titles */}
              <div className="flex flex-col items-center justify-between ">
                <div className="flex gap-[3.2rem] font-barlowCondensed font-normal justify-center md:w-[70%] text-white text-[1.4rem] md:text-[1.8rem] tracking-widest lg:items-start lg:justify-start">
                  <div>MOON</div>
                  <div>MARS</div>
                  <div>EUROPA</div>
                  <div>TITAN</div>
                </div>

                {/* topic */}
                <div className="flex flex-col items-center text-white py-[2.4rem] md:w-[70%] lg:items-start">
                  <h1 className="font-bellefair text-[5.6rem] md:text-[8rem] font-normal">
                    MOON
                  </h1>
                  <h2 className="text-center font-barlow text-[1.5rem] md:text-[1.8rem] md:tracking-[180%] tracking-wide lg:text-start">
                    See our planet as you’ve never seen it before. A perfect
                    relaxing trip away to help regain perspective and come back
                    refreshed. While you’re there, take in some history by
                    visiting the Luna 2 and Apollo 11 landing sites.
                  </h2>
                </div>

                {/* line */}
                <div className="border-t border-[#979797] h-1 w-full md:w-[70%]"></div>
                <div className="flex flex-col py-[2.4rem] md:w-[70%] md:flex-row md:justify-between md:items-center">
                  {/* distance */}
                  <div className="flex flex-col items-center lg:items-start text-white py-[2.4rem]">
                    <h1 className="font-barlowCondensed tracking-[0.2rem] text-[1.6rem] font-normal">
                      AVG. DISTANCE
                    </h1>
                    <p className="font-bellefair text-[2.8rem] text-center">
                      384,400 KM
                    </p>
                  </div>
                  <div className="flex flex-col items-center lg:items-start text-white py-[2.4rem]">
                    <h1 className="font-barlowCondensed tracking-[0.2rem] text-[1.6rem] font-normal">
                      Est. TRAVEL TIME
                    </h1>
                    <p className="font-bellefair text-[2.8rem] text-center">
                      3 DAYS{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
