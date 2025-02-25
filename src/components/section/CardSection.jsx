import React from "react";
import Section2Column from "../../utils/section/Section2Column";
import Cards from "@/utils/card/Cards";

const CardSection = ({ CardsHeadingData, cardsData }) => {
  return (
    <div className="section w-full flex flex-col justify-center gap-16 py-28 bg-[#F3F6FE]">
      <div className="top w-[80%] md:w-[45%] border-b-[1px] border-[#000000]"></div>
      <div className="bottom flex flex-col gap-8 md:gap-16 px-[30px] sm:px-[50px] xl:px-[12vw]">
        <Section2Column
          mainHeading={CardsHeadingData.mainHeading}
          subHeading={CardsHeadingData.subHeading}
          text={CardsHeadingData.text}
          button={false}
          color={"#000000"}
        />
        <div className="inner w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cardsData.map((item, index) => {
            return (
              <div key={index} className="w-fit">
                <Cards
                  index={index}
                  image={item.image}
                  heading={item.heading}
                  text={item.text}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
