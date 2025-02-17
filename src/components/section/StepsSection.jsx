import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconAndTextSection from "@/utils/section/IconAndTextSection";
import {
  appDevelopmentDesignData,
  appDevelopmentFrontendData,
  appDevelopmentBackendData,
  appDevelopmentDatabaseData,
  appDevelopmentCloudData,
  appDevelopmentFrameworkData,
} from "@/data/icons/AppDevelopmentTechData";
import StepsCard from "@/utils/card/StepsCard";

const StepsSection = ({ heading, text, button, steps }) => {
  const [indexNumber, setIndexNumber] = useState(0);

  return (
    <div className="section relative w-full flex flex-col justify-center gap-16 bg-[#FFFFFF]">
      <div className="inner w-full flex flex-col items-center justify-center gap-10">
        <div className="top w-full flex flex-col items-center justify-center gap-10 px-[30px] sm:px-[50px] xl:px-[12vw]">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl tracking-tight text-center text-[#5DD1FF]">
            {heading}
          </h2>
          <p className="w-full text-sm xl:text-base 2xl:text-lg text-center tracking-wider font-['Creato_Display']">
            {text}
          </p>
        </div>
        <div className="bottom w-full h-full flex flex-col xl:flex-row justify-between gap-10 xl:gap-5 p-3 xl:p-5 bg-[#5DD1FF] px-[30px] sm:px-[50px] xl:px-[12vw]">
          <div className="buttons-area h-full w-full xl:w-[30%] 2xl:w-[20%] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-1 gap-3 rounded-lg p-3 xl:p-5 bg-white">
            {button.map((item, index) => {
              return (
                <Link
                  key={index}
                  onClick={() => setIndexNumber(index)}
                  className={`w-full text-center md:text-left text-sm sm:text-base xl:text-lg 2xl:text-xl flex flex-row xl:flex-col justify-center md:justify-start xl:justify-center items-center xl:items-start gap-3 ${
                    indexNumber == index ? "text-[#FFFFFF]" : "text-[#5DD1FF]"
                  } rounded-lg border-[2px] ${
                    indexNumber == index
                      ? "border-[#5DD1FF]"
                      : "border-[#F3F6FE]"
                  } py-3 xl:py-8 px-3 ${
                    indexNumber == index ? "bg-[#5DD1FF]" : "bg-[#F3F6FE]"
                  } transition-all ease-in-out duration-300 hover:bg-[#5DD1FF] hover:border-[#5DD1FF] hover:text-white`}
                >
                  <i className={`${item.icon} hidden md:flex text-xl xl:text-2xl`}></i>
                  <span>{item.text}</span>
                </Link>
              );
            })}
          </div>
          <div className="icons-area w-full xl:w-[70%] 2xl:w-[80%] h-full rounded-lg p-3 xl:p-5 sticky top-0">
            {steps &&
              steps.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`website-images-area h-full ${
                      indexNumber == index ? "flex" : "hidden"
                    }`}
                  >
                    <StepsCard
                      index={index}
                      heading={item.heading}
                      para={item.para}
                      button={item.button}
                      icons={item.icons}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
