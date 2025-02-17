"use client";

import React, { useState } from "react";

const InnerFAQSection = ({ dropdown }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="section w-full flex flex-col gap-5 py-3 border-b-[1px] border-zinc-300">
        <div
          onClick={() => setActive(!active)}
          className="w-full cursor-pointer flex items-center justify-between"
        >
          <h3 className="text-lg xl:text-xl 2xl:text-2xl tracking-tight">
            {dropdown.heading}
          </h3>
          <i className={`fa-solid fa-angle-${active ? "up" : "down"}`}></i>
        </div>
        <div
          className={`w-full flex flex-col gap-3 ${
            active ? "visible" : "hidden"
          }`}
        >
          <p
            className={`text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']`}
          >
            {dropdown.text}
          </p>
          <ul>
            {dropdown.list &&
              dropdown.list.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`list-disc text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']`}
                  >
                    <span className="font-semibold">{item.listTitle} </span>
                    <span>{item.listText}</span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default InnerFAQSection;
