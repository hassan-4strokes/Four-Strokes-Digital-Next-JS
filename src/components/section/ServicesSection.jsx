import React from "react";
import Section2Column from "../../utils/section/Section2Column";
import CategoriesCard from "@/utils/card/CategoriesCard";
import { categoriesCardsData } from "@/data/cards/CategoriesCardsData";

const ServicesSection = () => {
  return (
    <div className="section w-full flex flex-col justify-center gap-16 py-16 xl:py-28">
      <div className="top w-[80%] md:w-[45%] border-b-[1px] border-[#000000]"></div>
      <div className="bottom grid grid-cols-1 px-[30px] sm:px-[50px] xl:px-[12vw] gap-20">
        <Section2Column
          mainHeading={"Our Premier Services Include"}
          subHeading={"Our Services"}
          text={
            "Four Strokes is one of the most prominent digital marketing agencies in USA, recognized as one of the best digital marketing agency in the industry. We are glad to be identified for our comprehensive portfolio of digital marketing services to accommodate a variety of industries. We have a line of digital marketing solutions including strategic digital marketing, consultation, and management options designed to enhance every online presence through an effective array of tactics."
          }
          button={false}
          color={"#000000"}
        />
        <div className="inner w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categoriesCardsData.map((item, index) => {
            return (
              <div key={index} className="w-full">
                <CategoriesCard
                  image={item.image}
                  heading={item.heading}
                  text={item.text}
                  link={item.link}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
