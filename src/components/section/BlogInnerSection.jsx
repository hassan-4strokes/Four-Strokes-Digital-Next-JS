import React, { useState } from "react";
import InnerFAQSection from "@/utils/faq/InnerFAQSection";

const BlogInnerSection = ({ blogTableOfContentData, blogInnerData }) => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <div className="section h-full w-full flex flex-col gap-10 pb-16 xl:pb-28 px-[30px] sm:px-[50px] xl:px-[12vw]">
        <div className="top h-full w-full flex flex-col">
          <div className="inner w-full lg:w-[50%] h-full flex flex-col gap-5 rounded-md border-[1px] border-zinc-400 p-3">
            <div
              onClick={() => setDropDown(!dropDown)}
              className="heading-area w-full cursor-pointer flex items-center justify-between"
            >
              <h3 className="text-xl md:text-lg lg:text-xl xl:text-2xl font-semibold text-[#5DD1FF]">
                Table Of Content
              </h3>
              <i
                className={`fa-solid fa-angle-${
                  dropDown ? "up" : "down"
                } text-base md:text-lg lg:text-xl text-[#5DD1FF]`}
              ></i>
            </div>
            <div
              className={`buttons-area w-full ${
                dropDown ? "flex" : "hidden"
              } flex-col gap-1 md:gap-2`}
            >
              {blogTableOfContentData &&
                blogTableOfContentData.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className="text-left text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']"
                    >
                      <a href={item.link}>{item.name}</a>
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="bottom w-full flex flex-col justify-center gap-10">
          {blogInnerData &&
            blogInnerData.map((item, index) => {
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
                  {item.banner && (
                    <img src={item.banner} alt="Blog Ads Banner" />
                  )}
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
        </div>
      </div>
    </>
  );
};

export default BlogInnerSection;
