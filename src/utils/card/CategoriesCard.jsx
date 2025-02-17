import React from "react";
import Link from "next/link";

const CategoriesCard = ({ image, heading, text, link }) => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-3 py-10 px-8 bg-[#F3F6FE]">
      <img src={image} alt="Category Image" className="w-20" />
      <h3 className="text-center font-semibold text-xl lg:text-2xl 2xl:text-3xl">
        {heading}
      </h3>
      <p className='text-center text-sm lg:text-base 2xl:text-lg tracking-wide font-["Creato_Display"]'>
        {text}
      </p>
      <div className="w-full h-full flex items-end justify-center">
        <Link
          href={link}
          className='text-center text-sm lg:text-base 2xl:text-lg tracking-wide text-[#28d1b4] font-["Creato_Display"]'
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default CategoriesCard;
