import React from "react";
import Button from "../button/Button";

const Section2Column = ({ mainHeading, subHeading, text, button, color }) => {
  return (
    <div className="section w-full flex flex-col md:flex-row justify-center md:justify-between gap-10 md:gap-5 xl:gap-20">
      <div
        className={`left h-full w-full md:w-[50%] flex flex-col gap-4 xl:gap-5`}
      >
        {subHeading && (
          <h3 className="uppercase text-sm xl:text-base font-bold tracking-wider text-[#28D1B4] font-['Creato_Display']">
            {subHeading}
          </h3>
        )}
        <h2
          className={`text-3xl xl:text-4xl 2xl:text-5xl tracking-tight text-[${color}] mb-7`}
        >
          {mainHeading}
        </h2>
        <div className="w-full hidden md:flex">
          {button && (
            <Button
              text={"About Us"}
              link={"/about"}
              color={"#5DD1FF"}
              border={"#5DD1FF"}
            />
          )}
        </div>
      </div>
      <div className="right h-full w-full md:w-[50%] flex flex-col gap-10 xl:gap-5">
        <p className={`text-justify text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display'] text-[${color}]`}>
          {text}
        </p>
        <div className="w-full flex md:hidden">
          {button && (
            <Button
              text={"About Us"}
              link={"/about"}
              color={"#5DD1FF"}
              border={"#5DD1FF"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Section2Column;
