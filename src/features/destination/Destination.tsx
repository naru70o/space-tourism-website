import Logo from "@/ui/Logo";
import MobileNav from "@/ui/MobileNav";
import NavLinks from "@/ui/NavLinks";
import data from "@/data.json";
import { useState } from "react";
import TopicName from "@/ui/TopicName";
import ReadMore from "@/ui/ReadMore";

type newPlanet = {
  name: string;
  images: { png: string; webp: string };
  description: string;
  distance: string;
  travel: string;
};

const { destinations }: { destinations: newPlanet[] } = data;

function Destination() {
  const [planet, setPlanet] = useState<number>(0);
  const [more, setIsMore] = useState<boolean>(true);

  const currentPlanet = destinations.at(planet) ?? destinations[0];
  const { name, images, description, distance, travel } = currentPlanet;

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
        <div className="col-start-2 row-start-2 row-span-1 col-span-10 py-[2.4rem] md:py-[4rem] lg:max-w-7xl mx-auto fade-in">
          <div className="flex flex-col items-center justify-center gap-[2rem]">
            {/* Header text */}
            <TopicName number="01" name="PICK YOUR DESTINATION" />

            {/* container for the info */}

            <div className="flex lg:flex-row pt-[2.4rem] flex-col justify-between items-center gap-[3.2rem]">
              {/* image */}
              <img
                src={images.png}
                className="h-[15rem] w-[15rem] mb-[3.2rem] md:h-[30rem] md:w-[30rem]"
                alt=""
              />

              {/* titles */}
              <div className="flex flex-col items-center justify-between ">
                <div className="flex gap-[3.2rem] font-barlowCondensed font-normal justify-center md:w-[70%] lg:w-[85%] text-white text-[1.4rem] md:text-[1.8rem] lg:translate-x-2 tracking-widest lg:items-start lg:justify-start">
                  {destinations.map((destination, index) => {
                    return (
                      <div
                        key={destination.name}
                        className={`${
                          planet === index ? "active-nav" : "hover-nav"
                        } cursor-pointer select-none`}
                        onClick={() => setPlanet(index)}
                      >
                        {destination.name.toUpperCase()}
                      </div>
                    );
                  })}
                </div>

                {/* topic */}
                <div className="flex flex-col items-center text-white py-[2.4rem] md:w-[70%] lg:w-[85%] lg:items-start">
                  <h1 className="font-bellefair text-[5.6rem] md:text-[8rem] font-normal">
                    {name.toUpperCase()}
                  </h1>
                  <h2 className="text-center font-barlow text-[1.5rem] md:text-[1.8rem] md:tracking-[180%] tracking-wide lg:text-start">
                    {more ? description.slice(0, 100) : description}
                    <ReadMore more={more} setIsMore={setIsMore} />
                  </h2>
                </div>

                {/* line */}
                <div className="border-t border-[#979797] h-1 w-full md:w-[70%] lg:w-[85%]"></div>
                <div className="flex flex-col py-[2.4rem] md:w-[70%] lg:w-[85%] md:flex-row md:justify-between md:items-center">
                  {/* distance */}
                  <div className="flex flex-col items-center lg:items-start text-white py-[2.4rem]">
                    <h1 className="font-barlowCondensed tracking-[0.2rem] text-[1.6rem] font-normal">
                      AVG. DISTANCE
                    </h1>
                    <p className="font-bellefair text-[2.8rem] text-center">
                      {distance.toUpperCase()}
                    </p>
                  </div>
                  <div className="flex flex-col items-center lg:items-start text-white py-[2.4rem]">
                    <h1 className="font-barlowCondensed tracking-[0.2rem] text-[1.6rem] font-normal">
                      EST. TRAVEL TIME
                    </h1>
                    <p className="font-bellefair text-[2.8rem] text-center">
                      {travel.toUpperCase()}
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
