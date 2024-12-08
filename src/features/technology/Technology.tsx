import data from "@/data.json";
import ErrorComponent from "@/ui/Error";
import Logo from "@/ui/Logo";
import MobileNav from "@/ui/MobileNav";
import NavLinks from "@/ui/NavLinks";
import TopicName from "@/ui/TopicName";
import { error } from "console";
import { useState } from "react";

type UsedTechnology = {
  name: string;
  description: string;
  images: { portrait: string; landscape: string };
};

const { technology }: { technology: UsedTechnology[] } = data;

function Destination() {
  const [tech, setTech] = useState<number>(0);
  const currentTech = technology.at(tech);

  if (!currentTech) {
    const error = new Error("An error occurred");

    // To get the error message as a string:
    const errorMessage = error.message;
    return <ErrorComponent message={errorMessage} />;
  }

  const { name, description, images } = currentTech;
  return (
    <div className="image-destination  h-screen overscroll-none overflow-hidden">
      <div className="grid grid-col-12 grid-rows-[repeat(10,min-content)] overflow-y-auto h-full">
        {/* nav */}
        <div className="grid grid-controller row-start-1 row-span-1 grid-cols-subgrid flex-col overflow-hidden mt-0 px-[2.4rem] md:px-[0rem] h-fit text-white lg:pt-8 w-full">
          <div className="flex justify-between h-fit items-center grid-controller ">
            <div className="py-6 md:px-[4rem] lg:flex justify-center items-center">
              <Logo />
            </div>
            <div className="h-[0.1rem] opacity-25 w-[90%] hidden lg:flex bg-white translate-x-10 z-20"></div>
            <NavLinks />
            <MobileNav />
          </div>
        </div>

        {/* content */}
        <div
          className="grid-controller lg:col-start-2 lg:col-span-12
         row-start-2 row-span-1 py-[2.4rem] md:py-[4rem]  mx-auto fade-in max-w-[120rem]"
        >
          <div className="flex flex-col items-center justify-center gap-[2rem]">
            {/* Header text */}
            <div className="px-14 md:self-start">
              <TopicName number="01" name="PICK YOUR DESTINATION" />
            </div>

            {/* container for the info */}

            <div className="grid grid-cols-2 w-full pt-[2.4rem] flex-col justify-between items-center gap-[3.2rem]">
              {/* image */}
              <div
                className="col-start-1 col-span-2 w-full h-[23rem] md:h-[40rem] mb-8 bg-cover bg-center bg-no-repeat lg:col-start-2 lg:h-[50rem] lg:w-[80%]
                "
                style={{
                  backgroundImage:
                    window.innerWidth >= 1024
                      ? `url(${images.portrait})`
                      : `url(${images.landscape})`,
                }}
              ></div>
              {/* container */}
              <div className="col-start-1 col-span-2 lg:col-start-1 lg:col-span-1 lg:row-start-1">
                {/*  */}
                <div className="flex flex-col lg:flex-row gap-[6.4rem]">
                  <div className="flex flex-col justify-center items-center mx-auto">
                    <div className="flex gap-4 items-center justify-center lg:h-full lg:justify-around lg:flex-col py-8">
                      {Array.from({ length: 3 }, (_, index) => {
                        return (
                          <div
                            onClick={() => setTech(index)}
                            key={index}
                            className={`${
                              tech === index
                                ? "number-active"
                                : "number-unactive"
                            }`}
                          >
                            <div className="text-center text-[1.6rem]">
                              {index + 1}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* ///////////////// */}
                  <div className="text-white flex flex-col items-center justify-center mb-[5rem] lg:mb-0  lg:items-start">
                    <div className="flex flex-col items-center justify-center lg:items-start  mb-[2.4rem]">
                      <h1 className="text-[1.8rem] md:text-[2.4rem] lg:text-[3.2rem] font-bellefair opacity-50">
                        THE TERMINOLOG
                      </h1>
                      <h2 className="font-bellefair text-[2.4rem] md:text-[4rem] lg:text-[5.6rem]">
                        {name.toUpperCase()}
                      </h2>
                    </div>

                    <p className="text-[1.6rem] w-[90%] font-barlow leading-[180%] mb-[3.2rem] text-center lg:text-start">
                      {description}
                    </p>
                  </div>
                </div>
                {/* titles */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
