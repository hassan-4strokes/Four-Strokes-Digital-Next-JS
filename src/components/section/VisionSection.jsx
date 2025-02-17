import React from "react";
import Section2Column from "../../utils/section/Section2Column";
import ImageAndTextSection from "@/utils/section/ImageAndTextSection";
import Button from "../../utils/button/Button";

const VisionSection = () => {
  return (
    <div className="section w-full flex flex-col justify-center gap-16 py-16 xl:py-28">
      <div className="top w-[80%] md:w-[45%] border-b-[1px] border-[#000000]"></div>
      <div className="bottom flex flex-col gap-3 md:gap-10 px-[30px] sm:px-[50px] xl:px-[12vw]">
        <Section2Column
          mainHeading={"Transform your vision into a thriving online presence."}
          subHeading={"In the digital world, one size fits none"}
          text={
            "We love transforming your vision into reality! Here, we dig deep into your business vision to give you a well-planned custom strategy that works. Say goodbye to hard-earned dollars and hello to a powerful online presence."
          }
          button={false}
          color={"#000000"}
        />
        <ImageAndTextSection
          isInner={true}
          isReverse={false}
          image={"./section-image.webp"}
          heading={"Strategic Brand Promotion for Growth and Results"}
          text={
            "We strategically promote brands across online platforms, fueling growth, commercialization, and user engagement. Our expertise corroborates clients' services are accessible and beneficial, delivering tangible outcomes."
          }
        />
        <div className="button-area w-full flex items-center justify-start md:justify-center pt-10 md:pt-16">
          <Button
            text={"Services"}
            link={"/services"}
            color={"#5DD1FF"}
            border={"#5DD1FF"}
          />
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
