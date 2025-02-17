import React from "react";

const WhoWeAreSection = () => {
  return (
    <div className="section w-full flex flex-col justify-center gap-16 py-28 bg-[#F3F6FE]">
      <div className="top w-[45%] border-b-[1px] border-[#5DD1FF]"></div>
      <div className="bottom flex flex-col md:flex-row gap-16 px-[30px] sm:px-[50px] xl:px-[12vw]">
        <div className="left w-full md:w-[50%]">
          <img src="/who-we-are.png" alt="" />
        </div>
        <div className="right w-full md:w-[50%] flex flex-col gap-5">
          <div className="top w-full flex flex-col gap-3">
            <h3 className="uppercase text-[#28D1B4]">Who We Are</h3>
            <h2 className=" text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#5DD1FF]">
              Four Strokes Digital: Accelerating Your Growth with Results-Driven
              Digital Solutions
            </h2>
          </div>
          <div className="bottom w-full flex flex-col gap-5">
            <p className="w-full text-justify text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
              Four Strokes is a leading digital marketing agency in the USA with a
              novel approach to taking a brand up to world standards. Having
              extensive knowledge in various areas such as digital marketing
              solutions, brand commercialization, website optimization, and
              global reach expansion, we allow businesses to move further in
              this digital age. The breakneck pace of the digital age means
              today is not just a web presence. Our digital marketing strategy
              is aimed at achieving higher brand visibility through conversions,
              building meaningful connections, and dominating the digital front
              with effective strategic digital marketing.
            </p>
            <p className="w-full text-justify text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
              By partnering with Four Strokes, you can transform your digital
              presence and achieve unparalleled success. Our team of
              professionals is committed to achieving significant outcomes that
              drive your business's success. Whether you want to commercialize
              your brand, optimize your website, or expand your global reach, we
              have the expertise and passion to help you succeed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
