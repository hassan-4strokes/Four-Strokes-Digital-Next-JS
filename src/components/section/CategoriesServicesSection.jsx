import React from "react";
import Section2Column from "../../utils/section/Section2Column";
import CategoriesCard from "../../utils/card/CategoriesCard";
import { appDevelopmentCardsData } from "../../data/cards/CategoriesServicesCardsData";

const CategoriesServicesSection = ({ heading, text }) => {
  return (
    <div className="section w-full flex flex-col justify-center gap-16">
      <div className="top w-[80%] md:w-[45%] border-b-[1px] border-[#000000]"></div>
      <div className="bottom grid grid-cols-1 px-[30px] sm:px-[50px] xl:px-[12vw] gap-20">
        <Section2Column
          mainHeading={heading}
          subHeading={"Our Services"}
          text={text}
          button={false}
          color={"#000000"}
        />
        <div className="inner w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {appDevelopmentCardsData.map((item, index) => {
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

export default CategoriesServicesSection;
