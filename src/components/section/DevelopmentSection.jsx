import React from "react";
import Section2Column from "@/utils/section/Section2Column";
import { appDevelopmentStepsData } from "@/data/cards/DevelopmentStepCardsData";
import DevelopmentCard from "@/utils/card/DevelopmentCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const DevelopmentSection = ({ heading, text, development }) => {
  if (window.innerWidth > 1280) {
    useGSAP(() => {
      gsap.to(".slides-container", {
        xPercent: -201,
        ease: "none",
        scrollTrigger: {
          trigger: ".steps-section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      });
    }, []);
  } else if (window.innerWidth > 1024) {
    useGSAP(() => {
      gsap.to(".slides-container", {
        xPercent: -205,
        ease: "none",
        scrollTrigger: {
          trigger: ".steps-section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      });
    }, []);
  }

  return (
    <div className="section steps-section w-full flex flex-col justify-start gap-16 py-16 xl:py-28 bg-[#5DD1FF]">
      <div className="top w-[80%] md:w-[45%] border-b-[1px] border-[#FFFFFF]"></div>
      <div className="slides-bottom grid grid-cols-1 px-[30px] sm:px-[50px] xl:px-[12vw] gap-10">
        <Section2Column
          mainHeading={heading}
          subHeading={""}
          text={text}
          button={false}
          color={"#FFFFFF"}
        />
        {window.innerWidth > 1024 ? (
          <div className="bottom w-full h-full overflow-hidden">
            <div className="slides-container inner w-full h-full flex">
              {development &&
                development.map((step) => {
                  return (
                    <div
                      key={step.id}
                      className={`w-[49%] h-full flex-shrink-0 rounded-lg overflow-hidden ${
                        step.id === 1 ? "ml-0" : "ml-5"
                      }`}
                    >
                      <DevelopmentCard step={step} />
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          <div className="bottom w-full h-full overflow-hidden">
            <div className="slides-container inner w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-5">
              {development &&
                development.map((step) => {
                  return (
                    <div
                      key={step.id}
                      className={`w-full h-full rounded-lg overflow-hidden`}
                    >
                      <DevelopmentCard step={step} />
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DevelopmentSection;
