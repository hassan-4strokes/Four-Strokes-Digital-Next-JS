import React from "react";

const ImageBanner = ({ text, buttonText, buttonLink }) => {
  return (
    <div className="section relative w-full flex justify-between gap-16 py-16 px-[30px] sm:px-[50px] xl:px-[12vw] bg-[#F3F6FE]">
      <div className="left w-full lg:w-[50%] flex flex-col items-start gap-8">
        <div className="top w-full flex flex-col items-center gap-3">
          <span className="text-2xl xl:text-3xl 2xl:text-4xl text-left text-[#5DD1FF]">
            {text}
          </span>
        </div>
        <a
          href="#contact-form"
          className="w-fit text-base md:text-xl xl:text-2xl border-[#5DD1FF] border-[2px] py-3 px-16 text-[#5DD1FF] font-['Creato_Display'] bg-transparent"
        >
          {buttonText ? buttonText : "Let's Connect"}
        </a>
      </div>
      <div className="right h-full w-[50%] hidden lg:flex">
        <img
          src={"/image-banner-1.webp"}
          alt="Banner Image"
          className="w-[350px] xl:w-[450px] 2xl:w-[500px] absolute bottom-0 xl:-bottom-10 left-2/6"
        />
      </div>
    </div>
  );
};

export default ImageBanner;
