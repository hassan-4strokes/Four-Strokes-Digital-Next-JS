import React from "react";
import PricingCard from "@/utils/card/PricingCard";

const PricingSection = ({ heading, text, cards }) => {
  return (
    <div className="section w-full flex flex-col justify-center gap-16 bg-[#ffffff]">
      <div className="inner w-full flex flex-col items-center justify-center gap-20 px-[30px] sm:px-[50px] xl:px-[12vw]">
        <div className="top w-full flex flex-col items-center justify-center gap-10">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl tracking-tight text-center text-[#5DD1FF]">
            {heading}
          </h2>
          <div className="w-full flex flex-col gap-3">
            <p className="w-full text-sm xl:text-base 2xl:text-lg text-center tracking-wider font-['Creato_Display']">
              {text}
            </p>
            <p className="w-full text-sm xl:text-base 2xl:text-lg text-center tracking-wider font-['Creato_Display']">
              Let's take a quick glance at the app development price varying
              based on distinct app types.
            </p>
          </div>
        </div>
        <div className="inner w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards && cards.map((item, index) => {
            return (
              <div key={index} className="w-full">
                <PricingCard index={index} heading={item.heading} price={item.price} text={item.text} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
