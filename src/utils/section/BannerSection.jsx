import React from "react";

const BannerSection = ({ text, icon, color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full h-full flex items-center justify-center py-5 px-[30px] sm:px-[50px] xl:px-[12vw]"
    >
      <img src={icon} alt={text} className="w-32 md:w-40 xl:w-56" />
    </div>
  );
};

export default BannerSection;
