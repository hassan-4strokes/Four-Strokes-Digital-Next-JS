import React from "react";
import { Link } from "react-router-dom";

const NotFoundHero = () => {
  return (
    <div className="section w-full flex flex-col justify-start gap-12 px-[30px] sm:px-[50px] xl:px-[12vw] pb-10 md:pb-24 2xl:pb-32 pt-24 lg:pt-32">
      <div className="top w-full flex flex-col items-center sm:items-start gap-3">
        <h2 className="uppercase text-center sm:text-left font-bold text-[#28D1B4]">404 Error</h2>
        <h1
          className={`text-center sm:text-left text-5xl xl:text-6xl 2xl:text-7xl text-[#5DD1FF]`}
        >
          Page Not Found
        </h1>
      </div>
      <div className="bottom flex flex-col items-center sm:items-start gap-7 tracking-wide font-['Creato_Display']">
        <Link
          to={"/"}
          className={`w-full sm:w-fit text-center text-lg text-[#FFFFFF] rounded-lg border-[2px] border-[#5DD1FF] py-3 px-10 bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-[#FFFFFF] hover:border-[#5DD1FF] hover:text-[#5DD1FF]`}
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundHero;
