import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconAndTextSection from "@/utils/section/IconAndTextSection";
import {
  appDevelopmentDesignData,
  appDevelopmentFrontendData,
  appDevelopmentBackendData,
  appDevelopmentDatabaseData,
  appDevelopmentCloudData,
  appDevelopmentFrameworkData,
} from "@/data/icons/AppDevelopmentTechData";

const TechnologiesSection = ({ heading, text, tect }) => {

  const [indexNumber, setIndexNumber] = useState(0);

  return (
    <div className="section w-full flex flex-col justify-center gap-16 bg-[#FFFFFF]">
      <div className="inner w-full flex flex-col items-center justify-center gap-10">
        <div className="top w-full flex flex-col items-center justify-center gap-10 px-[30px] sm:px-[50px] xl:px-[12vw]">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl tracking-tight text-center text-[#5DD1FF]">
            {heading}
          </h2>
          <p className="w-full text-sm xl:text-base 2xl:text-lg text-center tracking-wider font-['Creato_Display']">
            {text}
          </p>
        </div>
        <div className="bottom w-full h-full flex flex-col xl:flex-row justify-between gap-3 xl:gap-5 p-3 xl:p-5 bg-[#5DD1FF] px-[30px] sm:px-[50px] xl:px-[12vw]">
          <div className="buttons-area h-full w-full xl:w-[20%] grid grid-cols-2 md:grid-cols-6 xl:grid-cols-1 gap-3 rounded-lg p-3 xl:p-5 bg-white">
            {[
              "Design",
              "Frontend",
              "Backend",
              "Database",
              "Cloud",
              "Framework",
            ].map((text, index) => {
              return (
                <Link
                  key={index}
                  onClick={() => setIndexNumber(index)}
                  className={`w-full text-center text-sm sm:text-base xl:text-lg ${
                    indexNumber == index ? "text-[#FFFFFF]" : "text-[#5DD1FF]"
                  } rounded-lg border-[2px] ${
                    indexNumber == index
                      ? "border-[#5DD1FF]"
                      : "border-[#F3F6FE]"
                  } py-3 ${
                    indexNumber == index ? "bg-[#5DD1FF]" : "bg-[#F3F6FE]"
                  } transition-all ease-in-out duration-300 hover:bg-[#5DD1FF] hover:border-[#5DD1FF] hover:text-white`}
                >
                  {text}
                </Link>
              );
            })}
          </div>
          <div className="icons-area w-full xl:w-[80%] min-h-[40vh] md:min-h-[48vh] rounded-lg p-3 xl:p-5 bg-white">
            <div
              className={`website-images-area h-full ${
                indexNumber == 0 ? "flex" : "hidden"
              }`}
            >
              <IconAndTextSection
                heading={"Design"}
                tech={appDevelopmentDesignData}
              />
            </div>
            <div
              className={`website-images-area h-full ${
                indexNumber == 1 ? "flex" : "hidden"
              }`}
            >
              <IconAndTextSection
                heading={"Frontend"}
                tech={appDevelopmentFrontendData}
              />
            </div>
            <div
              className={`website-images-area h-full ${
                indexNumber == 2 ? "flex" : "hidden"
              }`}
            >
              <IconAndTextSection
                heading={"Backend"}
                tech={appDevelopmentBackendData}
              />
            </div>
            <div
              className={`website-images-area h-full ${
                indexNumber == 3 ? "flex" : "hidden"
              }`}
            >
              <IconAndTextSection
                heading={"Database"}
                tech={appDevelopmentDatabaseData}
              />
            </div>
            <div
              className={`website-images-area h-full ${
                indexNumber == 4 ? "flex" : "hidden"
              }`}
            >
              <IconAndTextSection
                heading={"Cloud"}
                tech={appDevelopmentCloudData}
              />
            </div>
            <div
              className={`website-images-area h-full ${
                indexNumber == 5 ? "flex" : "hidden"
              }`}
            >
              <IconAndTextSection
                heading={"Framework"}
                tech={appDevelopmentFrameworkData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
