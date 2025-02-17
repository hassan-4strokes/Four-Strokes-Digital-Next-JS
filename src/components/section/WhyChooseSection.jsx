"use client";

import { useState } from "react";
// import CountUp from "react-countup";
// import ScrollTrigger from "react-scroll-trigger";
import { whyChooseUsData } from "@/data/content/WhyChooseUsData";

const WhyChooseSection = () => {
  const [isStartAnimation, setIsStartAnimation] = useState(false);

  return (
    <div className="section w-full flex flex-col justify-center gap-16 py-16 xl:py-28 bg-[#FFFFFF]">
      <div className="inner w-full flex flex-col items-center justify-center gap-10 px-[30px] sm:px-[50px] xl:px-[12vw]">
        <div className="top w-full flex flex-col items-center justify-center gap-5">
          <h2 className="uppercase text-center font-semibold text-lg text-[#5DD1FF]">
            Let’s Create Something Extraordinary
          </h2>
          <p className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] text-center tracking-wider font-['Creato_Display']">
            Ready to redefine your brand’s digital presence? Contact Four
            Strokes Digital today and discover how we can turn your vision into
            reality. Whether you’re aiming to dominate your industry or expand
            your global reach, we have the expertise and creativity to make it
            happen.
          </p>
        </div>
        <div className="bottom w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-10 lg:gap-0">
          {whyChooseUsData.map((item) => (
            <div
              key={item.id}
              className="card w-full flex flex-col items-center justify-center gap-5 md:gap-3"
            >
              <span className="text-6xl md:text-7xl font-normal text-[#5DD1FF]">
                {/* <ScrollTrigger
                  onEnter={() => {
                    setIsStartAnimation(true);
                  }}
                  onExit={() => {
                    setIsStartAnimation(true);
                  }}
                >
                  {isStartAnimation && (
                    <CountUp start={0} end={item.heading} duration={5} />
                  )}
                  </ScrollTrigger> */}
                  {item.heading}{item.symbol}
              </span>
              <p className="text-lg tracking-wider font-['Creato_Display']">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
