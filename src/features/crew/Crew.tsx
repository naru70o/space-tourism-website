import Logo from "@/ui/Logo";
import MobileNav from "@/ui/MobileNav";
import NavLinks from "@/ui/NavLinks";
import TopicName from "@/ui/TopicName";
import { useState } from "react";
import data from "@/data.json";
import ErrorComponent from "@/ui/Error";

type CrewMember = {
  bio: string;
  images: { png: string; webp: string };
  name: string;
  role: string;
};

const { crew }: { crew: CrewMember[] } = data;
console.log(crew);

function Crew() {
  const [ActiveCrew, setActiveCrew] = useState<number>(0);

  const currentCrew = crew.at(ActiveCrew);

  if (!currentCrew) {
    const error = new Error("An error occurred");

    // To get the error message as a string:
    const errorMessage = error.message;
    return <ErrorComponent message={errorMessage} />;
  }

  const { bio, images, name, role } = currentCrew;

  return (
    <div className="image-crew h-screen overscroll-none overflow-hidden">
      {/* nav */}
      <div className="grid grid-col-12 grid-rows-[repeat(10,min-content)] overflow-y-auto h-full">
        {/* nav */}
        <div className="grid col-start-1 row-start-1 row-span-1 col-span-12 grid-cols-subgrid flex-col overflow-hidden mt-0 px-[2.4rem] md:px-[0rem] h-fit text-white lg:pt-8 w-full">
          <div className="flex justify-between h-fit items-center col-start-1 col-span-12 ">
            <div className="py-6 md:px-[4rem] lg:flex justify-center items-center">
              <Logo />
            </div>
            <div className="h-[0.1rem] opacity-25 w-[70%] hidden lg:flex bg-white translate-x-10 z-20"></div>
            <NavLinks />
            <MobileNav />
          </div>
        </div>
        {/* content */}
        <div className="col-start-2 row-start-2 row-span-1 col-span-10 py-[2.4rem] md:py-[4rem] lg:max-w-7xl mx-auto h-full">
          <div className="flex flex-col items-center justify-between gap-[2rem] h-full fade-in">
            {/* topic name */}
            <TopicName number="02" name="MEET YOUR CREW" />
            {/* header container */}

            {/* /////////// */}
            <div className="flex flex-col lg:flex-row justify-between items-center mt-[2.4rem] h-full ">
              {/* /////// */}
              <div className="flex flex-col items-center justify-center md:pt-0 lg:py-[4rem] pb-[2.4rem] h-[80%] lg:justify-between mb-[3.2rem] lg:items-start lg:flex-1">
                <div className="text-white flex flex-col items-center justify-center mb-[5rem] lg:items-start">
                  <div className="flex flex-col items-center justify-center lg:items-start  mb-[2.4rem]">
                    <h1 className="text-[1.8rem] md:text-[2.4rem] font-bellefair opacity-50">
                      {role.toUpperCase()}
                    </h1>
                    <h2 className="font-bellefair text-[2.4rem] md:text-[3rem]">
                      {name.toUpperCase()}
                    </h2>
                  </div>

                  <p className="text-[1.6rem] w-[80%] font-barlow leading-[180%] mb-[3.2rem] text-center lg:text-start">
                    {bio}
                  </p>
                </div>
                <div className="flex text-white gap-8">
                  {Array.from({ length: 4 }, (_, index) => (
                    <div
                      key={index}
                      onClick={() => setActiveCrew(index)}
                      className={`${
                        index === ActiveCrew ? "active-dot" : "dot"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              {/* //////////// */}
              <div className="flex flex-col items-center justify-center w-full lg:flex-1">
                <img
                  src={images.png}
                  alt="man"
                  className="h-[28rem] md:h-[56rem] lg:h-[40rem] lg:w-fit w-fit mask-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
