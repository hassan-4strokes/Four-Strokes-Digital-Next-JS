import BannerSection from "@/utils/section/BannerSection";
import React from "react";

const TrustPilotSection = () => {
  return (
    <div className="section w-full flex items-center justify-center">
      <a href="https://www.trustpilot.com/review/fourstrokesdigital.com" target="_blank">
        <BannerSection
          icon={"./trustpilot-image.webp"}
          text={"Trustpilot Logo"}
          color={"#838484"}
        />
      </a>
    </div>
  );
};

export default TrustPilotSection;
