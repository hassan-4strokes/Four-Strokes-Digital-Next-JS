import React from "react";

const RatingsExperienceSection = () => {
  return (
    <>
      <div className="section w-full flex flex-col xl:flex-row py-8 xl:py-16 px-[30px] sm:px-[50px] xl:px-[12vw]">
        <div className="inner w-full grid grid-cols-1 md:grid-cols-2 xl:w-[40%] py-0 md:py-5 xl:py-0">
          <div className="inner w-full flex justify-center py-5 md:py-0 border-b-[2px] md:border-b-0 border-zinc-200">
            <a href="https://g.co/kgs/pJATqCE" target="_blank">
              <div className="w-full cursor-pointer flex flex-col md:flex-row items-center gap-3">
                <div className="left">
                  <img
                    src="/icon-google.webp"
                    alt="Google Icon"
                    className="w-10 2xl:w-12"
                  />
                </div>
                <div className="right flex flex-col items-center md:items-start">
                  <div className="flex gap-3">
                    <span className="text-base 2xl:text-xl font-semibold">
                      4.5
                    </span>
                    <div className="ratings">
                      <i className="fa-solid fa-star text-xs lg:text-sm 2xl:text-base text-yellow-400"></i>
                      <i className="fa-solid fa-star text-xs lg:text-sm 2xl:text-base text-yellow-400"></i>
                      <i className="fa-solid fa-star text-xs lg:text-sm 2xl:text-base text-yellow-400"></i>
                      <i className="fa-solid fa-star text-xs lg:text-sm 2xl:text-base text-yellow-400"></i>
                      <i className="fa-solid fa-star-half text-xs lg:text-sm 2xl:text-base text-yellow-400"></i>
                    </div>
                  </div>
                  <span className="text-sm 2xl:text-base tracking-wide font-['Creato_Display']">
                    Customer Reviews
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="inner w-full flex justify-center py-5 md:py-0 border-b-[2px] md:border-b-0 border-l-0 md:border-l-[2px] border-zinc-200">
            <a href="https://www.trustpilot.com/review/4strokesdigital.com" target="_blank">
              <div className="w-full cursor-pointer flex flex-col md:flex-row items-center gap-3">
                <div className="left">
                  <img
                    src="/icon-trustpilot.webp"
                    alt="Trustpilot Icon"
                    className="w-10 2xl:w-12"
                  />
                </div>
                <div className="right flex flex-col items-center md:items-start">
                  <div className="flex gap-3">
                    <span className="text-base 2xl:text-xl font-semibold">
                      4.0
                    </span>
                    <div className="ratings">
                      <i className="fa-solid fa-star text-xs lg:text-sm 2xl:text-base text-yellow-400"></i>
                      <i className="fa-solid fa-star text-xs lg:text-sm 2xl:text-base text-yellow-400"></i>
                      <i className="fa-solid fa-star text-xs lg:text-sm 2xl:text-base text-yellow-400"></i>
                      <i className="fa-solid fa-star text-xs lg:text-sm 2xl:text-base text-yellow-400"></i>
                      {/* <i className="fa-solid fa-star-half text-xs lg:text-sm 2xl:text-base text-yellow-400"></i> */}
                    </div>
                  </div>
                  <span className="text-sm 2xl:text-base tracking-wide font-['Creato_Display']">
                    Trustpilot Reviews
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="inner w-full xl:w-[60%] grid grid-cols-1 md:grid-cols-3 py-0 md:py-5 xl:py-0">
          <div className="w-full flex flex-col items-center py-10 md:py-0 border-b-[2px] md:border-b-0 border-l-0 md:border-l-0 xl:border-l-[2px] border-zinc-200">
            <div className="flex flex-col text-center md:items-start">
              <span className="text-base 2xl:text-xl font-semibold">
                8+ Years
              </span>
              <span className="text-left text-sm 2xl:text-base tracking-wide font-['Creato_Display']">
                Driving Digital Success
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col items-center py-10 md:py-0 border-b-[2px] md:border-b-0 border-l-0 md:border-l-[2px] border-zinc-200">
            <div className="flex flex-col text-center md:items-start">
              <span className="text-base 2xl:text-xl font-semibold">
                10+ Industries
              </span>
              <span className="text-left text-sm 2xl:text-base tracking-wide font-['Creato_Display']">
                Of in-depth experience
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col items-center py-10 md:py-0 border-l-0 md:border-l-[2px] border-zinc-200">
            <div className="flex flex-col text-center md:items-start">
              <span className="text-base 2xl:text-xl font-semibold">
                100%
              </span>
              <span className="text-left text-sm 2xl:text-base tracking-wide font-['Creato_Display']">
                focused on delivering results
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingsExperienceSection;
