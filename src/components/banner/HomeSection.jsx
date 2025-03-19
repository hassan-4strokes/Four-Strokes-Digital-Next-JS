"use client"

import React from "react";
import Button from "../../utils/button/Button";

const HomeSection = () => {

  return (
    <div className="section w-full px-[30px] sm:px-[50px] xl:px-[12vw] bg-[#5DD1FF]">
      <div className="inner-section w-full h-full flex flex-col md:flex-row items-center md:items-end justify-center">
        <div className="left h-full w-full md:w-[50%] flex flex-col justify-center gap-16 md:gap-12 lg:gap-16 py-24 md:py-20 lg:py-24 2xl:py-32 pb-32 sm:pb-24">
          <h1 className="leading-tight text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl font-semibold tracking-tight text-white">
            Strategic Digital Marketing for Global Impact and Success
          </h1>
          <div className="button-area w-fit">
            <Button
              text={"Contact Us"}
              link={"/contact"}
              color={"#FFFFFF"}
              border={"#FFFFFF"}
            />
          </div>
        </div>
        <div className="right h-full w-full md:w-[50%] hidden md:flex items-end">
          <img
            src="/hero-section-video.webp"
            alt="Hero Section Video"
            className="w-[100%] sm:w-[100%] md:w-full lg:w-[95%] 2xl:w-[85%] -mb-[2px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
