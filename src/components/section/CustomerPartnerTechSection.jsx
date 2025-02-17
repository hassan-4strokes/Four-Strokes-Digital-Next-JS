import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageCard from "@/utils/card/ImageCard";
import { customersCardData, technologiesCardData } from "@/data/cards/ImageCardData";

const CustomerPartnerTechSection = ({ heading, text }) => {
  const [indexNumber, setIndexNumber] = useState(0);

  return (
    <div className={`section w-full flex flex-col justify-center gap-16 bg-[#ffffff]`}>
      <div className="inner w-full flex flex-col items-center justify-center gap-20 px-[30px] sm:px-[50px] xl:px-[12vw]">
        <div className="top w-full flex flex-col items-center justify-center gap-10">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl tracking-tight text-center text-[#5DD1FF]">
            {heading}
          </h2>
          <p className="w-full text-sm xl:text-base 2xl:text-lg text-center tracking-wider font-['Creato_Display']">
            {text}
          </p>
        </div>
        <div className="bottom w-full flex flex-col items-center gap-10 md:gap-20">
          <div className="buttons-area w-full md:w-[400px] xl:w-[700px] flex items-center justify-center gap-3">
            {["Customers", "Technologies"].map((text, index) => {
              return (
                <Link
                  key={index}
                  onClick={() => setIndexNumber(index)}
                  className={`w-[50%] flex justify-center text-center text-sm sm:text-base xl:text-lg ${
                    indexNumber == index ? "text-[#FFFFFF]" : "text-[#5DD1FF]"
                  } rounded-lg border-[2px] ${
                    indexNumber == index
                      ? "border-[#5DD1FF]"
                      : "border-[#F3F6FE]"
                  } py-3 px-16 ${
                    indexNumber == index ? "bg-[#5DD1FF]" : "bg-[#F3F6FE]"
                  } transition-all ease-in-out duration-300 hover:bg-[#5DD1FF] hover:border-[#5DD1FF] hover:text-white`}
                >
                  {text}
                </Link>
              );
            })}
          </div>

          <div className="icons-area w-full h-full">
            <div
              className={`website-images-area w-full h-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ${
                indexNumber == 0 ? "grid" : "hidden"
              }`}
            >
              {customersCardData &&
                customersCardData.map((image) => {
                  return (
                    <div key={image.id} className="w-full">
                      <ImageCard image={image.image} size={"32"} />
                    </div>
                  );
                })}
            </div>
            <div
              className={`website-images-area w-full h-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ${
                indexNumber == 1 ? "grid" : "hidden"
              }`}
            >
              {technologiesCardData &&
                technologiesCardData.map((image) => {
                  return (
                    <div key={image.id} className="w-full">
                      <ImageCard image={image.image} size={"16"} />
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

export default CustomerPartnerTechSection;
