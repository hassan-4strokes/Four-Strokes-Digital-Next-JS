import React from "react";

const IconAndTextSection = ({ heading, tech }) => {
  return (
    <div className="w-full h-full flex flex-col gap-10">
      <div className="top w-full">
        <h2
          className={`w-full text-center text-2xl xl:text-3xl 2xl:text-4xl tracking-tight text-[#5DD1FF]`}
        >
          {heading}
        </h2>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-3 xl:gap-5">
        {tech &&
          tech.map((item) => {
            return (
              <div
                key={item.id}
                className={`w-full flex items-center justify-center gap-5 p-3 rounded-lg bg-[#F3F6FE] border-l-4 border-[#5DD1FF] shadow-md shadow-gray-300`}
              >
                <div
                  className={`icon-area w-fit h-fit`}
                >
                  <img
                    src={item.icon}
                    alt="Icon"
                    className={`w-${ item.iconResposive ? item.iconResposive : "10" } 2xl:w-${ item.iconSize ? item.iconSize : "10" } h-auto`}
                  />
                </div>
                <div
                  className={`w-full h-fit`}
                >
                  {item.heading && (
                    <h3 className="w-full text-base 2xl:text-lg text-left tracking-tight">
                      {item.heading}
                    </h3>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default IconAndTextSection;
