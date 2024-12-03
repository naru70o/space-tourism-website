import MobileNav from "../../ui/MobileNav";
import Logo from "../../ui/Logo";
import NavLinks from "../../ui/NavLinks";

export default function Home() {
  return (
    <div className="flex image flex-col overflow-hidden h-screen mt-0 px-[2.4rem] md:px-[0rem] text-white xl:pt-8">
      <div className="flex justify-between items-center">
        <div className="py-6 md:px-[4rem] xl:flex justify-center items-center">
          <Logo />
        </div>
        <div className="h-[0.1rem] opacity-25 w-full hidden xl:flex bg-white translate-x-10 z-20"></div>
        <NavLinks />
        <MobileNav />
      </div>
      <div className="flex flex-col xl:flex-row gap-[1.6rem] justify-between items-center max-w-[122.8rem] xl:mx-auto mt-[2.4rem] md:mt-[10rem] h-full py-6 md:px-[4rem]">
        <div className="flex flex-col justify-start items-center xl:items-start xl:flex-1">
          <h1 className="font-barlowCondensed font-thin text-[1.6rem] -tracking-tighter xl:ml-3">
            SO, YOU WANT TO TRAVEL TO{" "}
          </h1>
          <h1 className="text-[8rem] font-bellefair inline-block">SPACE</h1>
          <p className="font-barlow text-center font-normal leading-loose text-[1.6rem] md:w-[70%] xl:text-start">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div>
          <button className="btn-explore bg-white text-[2.4rem] self-center text-black font-bellefair my-[6rem] rounded-full h-[20rem] w-[20rem] xl:flex-1">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
}
