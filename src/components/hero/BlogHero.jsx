import React from "react";

const BlogHero = () => {
  return (
    <div className="section w-full flex flex-col justify-start gap-12 px-[30px] sm:px-[50px] xl:px-[12vw] pb-5 md:pb-24 2xl:pb-32 pt-24 lg:pt-32">
      <div className="top w-full flex flex-col gap-3">
        <h1
          className={`text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl w-full text-center text-[#5DD1FF]`}
        >
          Four Strokes Digital Blog
        </h1>
      </div>
    </div>
  );
};

export default BlogHero;
