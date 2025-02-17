import React from "react";

const PricingCard = ({ index, heading, price, text }) => {
  return (
    <div
      className={`w-full h-full flex flex-col items-start gap-10 py-10 px-8 ${
        index === 1 ? "bg-[#5DD1FF]" : "bg-[#F3F6FE]"
      }`}
    >
      <h3
        className={`text-left font-semibold text-2xl lg:text-3xl 2xl:text-4xl ${
          index === 1 ? "text-[#FFFFFF]" : "text-[#5DD1FF]"
        }`}
      >
        {heading}
      </h3>
      <div className="w-full flex flex-col gap-5">
        <span
          className={`text-left text-lg lg:text-xl 2xl:text-2xl tracking-wide font-bold font-["Creato_Display"] ${
            index === 1 ? "text-[#FFFFFF]" : "text-[#000000]"
          }`}
        >
          {price}
        </span>
        <p
          className={`text-left text-sm lg:text-base 2xl:text-lg tracking-wide font-["Creato_Display"] ${
            index === 1 ? "text-[#FFFFFF]" : "text-[#000000]"
          }`}
        >
          {text}
        </p>
      </div>
      <div className="btn-area w-full h-full flex items-end">
        <a
          href="#contact-form"
          className={`w-full text-center text-xs lg:text-sm 2xl:text-base border-[2px] py-3 font-['Creato_Display'] transition-all ease-in-out duration-300 ${
            index === 1
              ? "text-[#5DD1FF] bg-[#FFFFFF] border-[#FFFFFF] hover:bg-transparent hover:text-[#FFFFFF]"
              : "text-[#FFFFFF] bg-[#5DD1FF] border-[#5DD1FF] hover:bg-transparent hover:text-[#5DD1FF]"
          }`}
        >
          Get A Free Quote
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
