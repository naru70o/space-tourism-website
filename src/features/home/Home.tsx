import MobileNav from "../../ui/MobileNav";
import Logo from "../../ui/Logo";
import NavLinks from "../../ui/NavLinks";

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen image overscroll-none overflow-x-hidden">
      <div className="grid col-start-1 col-span-12 grid-cols-subgrid flex-col overflow-hidden mt-0 px-[2.4rem] md:px-[0rem] text-white lg:pt-8 w-full">
        <div className="flex justify-between h-fit items-center col-start-1 col-span-12 ">
          <div className="py-6 md:px-[4rem] xl:flex justify-center items-center">
            <Logo />
          </div>
          <div className="h-[0.1rem] opacity-25 w-full hidden lg:flex bg-white translate-x-10 z-20"></div>
          <NavLinks />
          <MobileNav />
        </div>
        <div className="col-start-2 col-span-10">
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
              <button className="btn-explore bg-white text-[2.4rem] self-center text-black font-bellefair my-[6rem] rounded-full h-[20rem] w-[20rem] lg:flex-1">
                EXPLORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
