import React, { useState } from "react";

const MainFAQArea = ({ faq }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="section w-full flex flex-col gap-0 py-3 border-b-[1px] border-zinc-300">
      <div
        onClick={() => setActive(!active)}
        className="w-full cursor-pointer flex items-center justify-between"
      >
        <h3 className="text-base xl:text-lg 2xl:text-xl tracking-tight">
          {faq.heading}
        </h3>
        <i className={`fa-solid fa-angle-${active ? "up" : "down"}`}></i>
      </div>
      <div
        className={`w-full flex flex-col gap-3 ${
          active ? "visible" : "hidden"
        }`}
      >
        <p
          className={`${
            active ? "visible" : "hidden"
          } text-justify text-[14px] lg:text-[16px] xl:text-[18px] leading-[20px] xl:leading-[30px] pt-5 text-zinc-700`}
        >
          {faq.textOne}
        </p>
        {faq.list && (
          <ul
            className={`${
              active ? "visible" : "hidden"
            } flex flex-col gap-3 text-base xl:text-lg 2xl:text-xl tracking-wide font-['Creato_Display'] pl-5`}
          >
            {faq.list.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${active ? "visible" : "hidden"} list-disc`}
                >
                  <h3
                    className={`${
                      active ? "visible" : "hidden"
                    } inline-block font-semibold`}
                  >
                    {item.innerHeading}
                  </h3>
                  &nbsp;
                  <span className="text-zinc-700">{item.innerText}</span>
                </li>
              );
            })}
          </ul>
        )}

        {faq.points && (
          <ul
            className={`${
              active ? "visible" : "hidden"
            } flex flex-col gap-3 text-[14px] lg:text-[16px] xl:text-[18px] tracking-wide font-['Creato_Display'] pl-5`}
          >
            {faq.points.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${active ? "visible" : "hidden"} list-disc`}
                >
                  <span className="text-zinc-700">{item}</span>
                </li>
              );
            })}
          </ul>
        )}
        <p
          className={`${
            active ? "visible" : "hidden"
          } text-base xl:text-lg 2xl:text-xl tracking-wide font-['Creato_Display']`}
        >
          {faq.textTwo}
        </p>
      </div>
    </div>
  );
};

export default MainFAQArea;
