import LocationsCard from "@/utils/card/LocationsCard";
import React, { useState } from "react";
import { locationCardsData } from "@/data/cards/LocationCardsData";

const LocationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="section w-full flex flex-col justify-center gap-16 pb-16 xl:pb-28 pt-8 xl:pt-16 bg-[#FFFFFF]">
      <div className="inner w-full flex flex-col items-center justify-center gap-16 px-[30px] sm:px-[50px] xl:px-[12vw]">
        <div className="top w-full flex flex-col items-center justify-center gap-10">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl tracking-tight text-center text-[#5DD1FF]">
            Locations We Catered
          </h2>
          <p className="w-full text-sm xl:text-base 2xl:text-lg text-center tracking-wider font-['Creato_Display']">
            At Four Strokes Digital, we offer top-tier app development, custom
            software, and digital marketing services across the world including
            USA, UK, Australia & GCC. Our expert app developers deliver
            innovative mobile & web solutions tailored to your business needs,
            regardless of your locations. From Android and iOS app development
            to custom software and game development, we help businesses succeed.
          </p>
        </div>
        <div className="location-area w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:flex gap-2">
          {locationCardsData.map((location, index) => {
            return (
              <div key={index} className="w-fit">
                <LocationsCard
                  location={location}
                  index={index}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
