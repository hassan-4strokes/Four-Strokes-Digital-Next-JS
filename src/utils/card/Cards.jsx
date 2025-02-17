import React from "react";

const Cards = ({ index, image, heading, text }) => {
  return (
    <div
      key={index}
      className={`w-full flex flex-col items-center justify-start gap-5 py-20 md:py-10 2xl:py-20 px-10 md:px-5 2xl:px-10 ${
        index == 1 ? "bg-[#369DC5]" : "bg-[#FFFFFF]"
      }`}
    >
      <img src={image} alt="Card Image" className="w-14 2xl:w-20" />
      <h3
        className={`w-[80%] 2xl:w-[65%] text-center text-xl lg:text-2xl 2xl:text-3xl ${
          index == 1 ? "text-white" : "text-black"
        }`}
      >
        {heading}
      </h3>
      <p
        className={`text-center text-sm lg:text-base 2xl:text-lg ${
          index == 1 ? "text-white" : "text-black"
        } tracking-wide font-['Creato_Display']`}
      >
        {text}
      </p>
    </div>
  );
};

export default Cards;
