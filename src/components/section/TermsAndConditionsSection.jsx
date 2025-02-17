import React from "react";
import { termsAndConditionsData } from "@/data/content/TermsAndConditionsData";
import InnerFAQSection from "@/utils/faq/InnerFAQSection";

const TermsAndConditionsSection = () => {
  return (
    <div className="section h-fit w-full flex flex-col gap-10 py-16 xl:py-28 px-[30px] sm:px-[50px] xl:px-[12vw]">
      <div className="section w-full flex flex-col justify-center gap-10">
        {termsAndConditionsData &&
          termsAndConditionsData.map((item, index) => {
            return (
              <div
                id={item.link}
                key={index}
                className="w-full flex flex-col gap-3 -mt-5"
              >
                <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                  {item.heading}
                </h2>
                <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                  {item.subHeading}
                </h3>
                {item.text && (
                  <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                    {item.text}
                  </p>
                )}
                {item.banner && <img src={item.banner} alt="Blog Ads Banner" />}
                {item.points && (
                  <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                    {item.points &&
                      item.points.map((item, index) => {
                        return (
                          <>
                            <li key={index} className={`list-disc`}>
                              <span className="font-semibold">
                                {item.pointTitle}{" "}
                              </span>
                              <span>{item.pointText}</span>
                            </li>
                            <ul className="pl-5 mb-2">
                              {item.innerPoints &&
                                item.innerPoints.map((item, index) => {
                                  return (
                                    <li key={index} className={`list-disc`}>
                                      <span className="font-semibold">
                                        {item.pointTitle}{" "}
                                      </span>
                                      <span>{item.pointText}</span>
                                    </li>
                                  );
                                })}
                            </ul>
                          </>
                        );
                      })}
                  </ul>
                )}
                {item.para &&
                  item.para.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']"
                      >
                        {item}
                      </p>
                    );
                  })}
                {item.text2 && (
                  <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                    {item.text2}
                  </p>
                )}
                {item.faq &&
                  item.faq.map((item, index) => {
                    return (
                      <div key={index} className="faq w-full">
                        <InnerFAQSection faq={item} />
                      </div>
                    );
                  })}
              </div>
            );
          })}
        <div className="info flex flex-col">
          <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-semibold font-['Creato_Display']">
            Four Strokes Digital
          </p>
          <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
            1942 Broadway Street STE 314C Boulder, CO, United States, Colorado
          </p>
          <a href="mailto:info@fourstrokesdigital.com">
            <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
              info@fourstrokesdigital.com
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsSection;
