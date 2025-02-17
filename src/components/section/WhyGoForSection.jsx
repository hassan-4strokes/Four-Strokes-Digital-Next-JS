import Section1Colum from "@/utils/section/Section1Colum";
import React, { useState } from "react";

const WhyGoForSection = ({ heading, text, button, cards }) => {
  // Local States

  const [indexNumber, setIndexNumber] = useState(0);

  return (
    <div
      className={`section w-full flex flex-col justify-center gap-16 bg-[#FFFFFF]`}
    >
      <div className="inner w-full flex flex-col items-center justify-center gap-20 px-[30px] sm:px-[50px] xl:px-[12vw]">
        <div className="top w-full flex flex-col items-center justify-center gap-10">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl tracking-tight text-center text-[#5DD1FF]">
            {heading}
          </h2>
          <p className="w-full text-sm xl:text-base 2xl:text-lg text-center tracking-wider font-['Creato_Display']">
            {text}
          </p>
        </div>
        {cards && (
          <div className="buttons-area w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {cards.map((item, index) => {
              return (
                <div
                  onClick={() => setIndexNumber(index)}
                  key={index}
                  className={`w-full cursor-pointer flex flex-col items-center justify-center gap-3 p-5 py-7 rounded-lg overflow-hidden ${
                    indexNumber == index ? "bg-[#5DD1FF] text-white transition-all ease-in-out duration-300" : "bg-[#F3F6FE] text-black transition-all ease-in-out duration-300"
                  }`}
                >
                  <img src={indexNumber == index ? item.iconWhite : item.iconBlack} alt="Icons" className="w-10 lg:w-12 2xl:w-16 transition-all ease-in-out duration-300" />
                  <span className="w-full text-sm xl:text-sm 2xl:text-lg text-center tracking-wider font-semibold">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        )}
        {cards && (
          <div className="content-area w-full">
            {cards.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`w-full ${ indexNumber == index ? "flex" : "hidden" }`}
                >
                    <Section1Colum heading={item.heading} para={item.para} button={button} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyGoForSection;
