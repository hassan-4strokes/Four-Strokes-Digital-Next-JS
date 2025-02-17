import React from "react";

const StepsCard = ({ heading, para, button, icons }) => {
  return (
    <div className="w-full h-full flex flex-col gap-20">
      <div className="top w-full flex flex-col gap-10">
        <div className="content-area w-full flex flex-col gap-5">
          <h2
            className={`w-full text-left text-2xl xl:text-3xl 2xl:text-4xl font-semibold tracking-tight text-[#FFFFFF]`}
          >
            {heading}
          </h2>
          <p
            className={`w-full text-sm xl:text-base 2xl:text-lg text-left tracking-wider font-['Creato_Display'] text-[#FFFFFF]`}
          >
            {para}
          </p>
        </div>
        <a
          href="#contact-form"
          className={`w-full md:w-fit text-center text-sm sm:text-base lg:text-lg text-[#5DD1FF] rounded-lg border-[2px] border-[#FFFFFF] py-3 px-0 md:px-16 bg-[#FFFFFF] transition-all ease-in-out duration-300`}
        >
          {button}
        </a>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-2 2xl:grid-cols-4 gap-3 xl:gap-5">
        {icons &&
          icons.map((item) => {
            return (
              <div
                key={item.id}
                className={`w-full flex flex-col items-center md:items-start justify-start gap-5 p-5 rounded-lg bg-[#FFFFFF] shadow-md shadow-zinc-500`}
              >
                <div className={`icon-area w-fit h-fit`}>
                  <img
                    src={item.icon}
                    alt="Icon"
                    className={`w-10 2xl:w-14 h-auto`}
                  />
                </div>
                {item.text && (
                  <span className="w-full text-base 2xl:text-lg font-semibold text-center md:text-left tracking-tight">
                    {item.text}
                  </span>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default StepsCard;
