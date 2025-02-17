import React from "react";
import { Link } from "react-router-dom";

const BlogSingleCard = ({
  image,
  heading,
  text,
  link,
  alternateText,
  index,
}) => {
  return (
    <div
      className={`section w-full flex flex-col md:flex-row justify-between gap-8 xl:gap-16 rounded-xl py-4 xl:py-6 2xl:py-8 px-4 xl:px-6 2xl:px-8 bg-[#F3F6FE]`}
    >
      <div className="left h-full w-full md:w-[50%] lg:w-[40%]">
        <Link to={link}>
          <img src={image} alt={alternateText} className="w-full rounded-lg" />
        </Link>
      </div>
      <div className="right w-full md:w-[60%] h-full flex flex-col gap-5 m-auto">
        <Link to={link}>
          <h2 className="w-fit text-lg md:text-2xl lg:text-3xl 2xl:text-4xl tracking-tight font-semibold">
            {heading}
          </h2>
        </Link>
        <p className="w-fit text-sm md:text-base xl:text-lg tracking-wide font-['Creato_Display']">
          {text}
        </p>
        <Link
          to={link}
          className="w-fit text-base xl:text-lg tracking-wide font-semibold font-['Creato_Display']"
        >
          Read Full Story
        </Link>
      </div>
    </div>
  );
};

export default BlogSingleCard;
