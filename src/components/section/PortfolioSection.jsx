"use client";

import React, { useState } from "react";
import Link from "next/link";
import Section2Column from "../../utils/section/Section2Column";
import PortfolioImage from "../../utils/card/PortfolioImage";
import {
  websiteDevelopementData,
  appDevelopementData,
  digitalMarketingData,
  designingData,
} from "../../data/portfolio/PortfolioImageData";

const PortfolioSection = () => {
  // Local States

  const [indexNumber, setIndexNumber] = useState(0);

  return (
    <div className="section w-full flex flex-col justify-center gap-16 py-16 xl:py-28">
      <div className="top w-[80%] md:w-[45%] border-b-[1px] border-[#000000]"></div>
      <div className="bottom px-[30px] sm:px-[50px] xl:px-[12vw]">
        <Section2Column
          mainHeading={"Where Vision Meets Execution!"}
          subHeading={"Portfolio"}
          text={""}
          button={false}
          color={"#000000"}
        />
        <div className="inner w-full flex flex-col gap-12 pt-0 sm:pt-5 md:pt-10">
          <div className="top grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {["Web Development", "App Development", "Digital Marketing"].map(
              (text, index) => {
                return (
                  <span
                    key={index}
                    onClick={() => setIndexNumber(index)}
                    className={`w-full cursor-pointer text-center text-sm sm:text-base xl:text-lg ${
                      indexNumber == index ? "text-[#FFFFFF]" : "text-[#5DD1FF]"
                    } rounded-lg border-[2px] ${
                      indexNumber == index
                        ? "border-[#5DD1FF]"
                        : "border-[#F3F6FE]"
                    } py-3 ${
                      indexNumber == index ? "bg-[#5DD1FF]" : "bg-[#F3F6FE]"
                    } transition-all ease-in-out duration-300 hover:bg-[#5DD1FF] hover:border-[#5DD1FF] hover:text-white`}
                  >
                    {text}
                  </span>
                );
              }
            )}
          </div>
          <div className="bottom">
            <div
              className={`website-images-area ${
                indexNumber == 0 ? "grid" : "hidden"
              } grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`}
            >
              {websiteDevelopementData.map((image, index) => {
                return (
                  <PortfolioImage
                    index={image.id}
                    image={image.image}
                    animation={true}
                    isImage={true}
                  />
                );
              })}
            </div>
            <div
              className={`website-images-area ${
                indexNumber == 1 ? "grid" : "hidden"
              } grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`}
            >
              {appDevelopementData.map((image) => {
                return (
                  <div key={image.id}>
                    <PortfolioImage
                      index={image.id}
                      image={image.image}
                      animation={false}
                      isImage={true}
                    />
                  </div>
                );
              })}
            </div>
            <div
              className={`website-images-area ${
                indexNumber == 2 ? "grid" : "hidden"
              } grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`}
            >
              {digitalMarketingData.map((image) => {
                return (
                  <div key={image.id}>
                    <PortfolioImage
                      index={image.id}
                      image={image.image}
                      animation={false}
                      isImage={true}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
