import React from "react";
import Section2Column from "@/utils/section/Section2Column";
import MainFAQArea from "@/utils/faq/MainFAQArea";

const FAQSection = ({ heading, faq }) => {
  return (
    <div className="section w-full flex flex-col justify-center gap-16 py-16 xl:py-28 bg-[#F3F6FE]">
      <div className="top w-[80%] md:w-[45%] border-b-[1px] border-[#000000]"></div>
      <div className="bottom w-full flex flex-col px-[30px] sm:px-[50px] xl:px-[12vw]">
        {/* <h2 className="text-3xl xl:text-4xl 2xl:text-5xl tracking-tight">
        {heading}
      </h2> */}
        <Section2Column
          mainHeading={heading}
          subHeading={"FAQs"}
          text={""}
          button={false}
          color={"#000000"}
        />

        <div className="faq-area w-full flex flex-col">
          {faq &&
            faq.map((item, index) => {
              return (
                <div key={index} className="faq w-full">
                  <MainFAQArea faq={item} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
