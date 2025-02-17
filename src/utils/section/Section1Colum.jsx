import React from "react";

const Section1Colum = ({ heading, para, button }) => {
  return (
    <div className={`section w-full flex`}>
      <div className="right w-full flex flex-col gap-10">
        <h2
          className={`text-3xl xl:text-4xl 2xl:text-5xl tracking-tight text-[#5DD1FF]`}
        >
          {heading}
        </h2>
        {para && (
          <p className="text-sm xl:text-base 2xl:text-lg leading-5 xl:leading-6 tracking-wide font-['Creato_Display']">
            {para}
          </p>
        )}
        <div className="buttons-area w-full flex justify-center sm:justify-start pt-5">
          <a
            href="#contact-form"
            className={`w-full sm:w-fit text-center text-sm sm:text-base lg:text-lg text-[#FFFFFF] rounded-lg border-[2px] border-[#5DD1FF] py-3 px-16 bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-transparent hover:border-[#5DD1FF] hover:text-[#5DD1FF]`}
          >
            {button}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section1Colum;
