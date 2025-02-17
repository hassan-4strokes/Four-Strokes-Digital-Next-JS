import React from "react";

const TermsAndConditionsHero = () => {
  return (
    <div className="section w-full flex flex-col md:flex-row justify-between px-[30px] sm:px-[50px] xl:px-[12vw] py-16 xl:py-28 bg-[#5DD1FF]">
      <div className="left w-full md:w-[70%] flex flex-col justify-start gap-5">
        <div className="top w-full flex flex-col gap-3">
          <h2 className="w-fit uppercase cursor-pointer text-sm xl:text-base font-bold text-white p-2 bg-[#48bfee]">
            Terms And Conditions
          </h2>
          <h1
            className={`text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-white`}
          >
            Four Strokes Digital Terms And Conditions
          </h1>
        </div>
        <div className="bottom flex flex-col gap-5 text-white">
          <p className="text-justify text-lg xl:text-xl tracking-wide font-['Creato_Display']">
            Welcome to Four Strokes Digital! These Terms and Conditions govern your
            use of our website (fourstrokesdigital.com) and the services we
            provide. By accessing our website and using our services, you agree
            to comply with and be bound by these Terms and Conditions. Please
            read them carefully.
          </p>
        </div>
      </div>
      <div className="right w-full md:w-[30%] flex justify-center items-start">
        {/* <img src={image} className="w-full lg:w-[90%] xl:w-[80%]" /> */}
      </div>
    </div>
  );
};

export default TermsAndConditionsHero;
