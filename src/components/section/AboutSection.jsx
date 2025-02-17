import React from "react";
import Section2Column from "../../utils/section/Section2Column";

const AboutSection = () => {
  return (
    <div className="section w-full flex flex-col justify-center gap-16 py-16 xl:py-28 bg-[#F3F6FE]">
      <div className="top w-[80%] md:w-[45%] border-b-[1px] border-[#5DD1FF]"></div>
      <div className="bottom px-[30px] sm:px-[50px] xl:px-[12vw]">
        <Section2Column
          mainHeading={
            "Four Strokes Digital: Accelerating Your Growth with Results-Driven Digital Solutions"
          }
          subHeading={"Who We Are"}
          text={
            "Four Strokes is a leading digital marketing agency in the USA with a novel approach to taking a brand up to world standards. Having extensive knowledge in various areas such as digital marketing solutions, brand commercialization, website optimization, and global reach expansion, we allow businesses to move further in this digital age. The breakneck pace of the digital age means today is not just a web presence. Our digital marketing strategy is aimed at achieving higher brand visibility through conversions, building meaningful connections, and dominating the digital front with effective strategic digital marketing."
          }
          button={true}
          color={"#5DD1FF"}
        />
      </div>
    </div>
  );
};

export default AboutSection;
