const TextBanner = ({ headingOne, headingTwo, buttonText, buttonLink }) => {
  return (
    <div className="section w-full flex flex-col items-center gap-8 py-16 px-[30px] sm:px-[50px] xl:px-[12vw] bg-[#F3F6FE]">
      <div className="top w-full flex flex-col items-center gap-3">
        <span className="text-3xl xl:text-4xl 2xl:text-5xl text-center text-[#5DD1FF]">
          {headingOne}
        </span>
        {headingTwo && (
          <span className="text-3xl xl:text-4xl 2xl:text-5xl text-center text-[#5DD1FF]">
            {headingTwo}
          </span>
        )}
      </div>
      <a
        href="#contact-form"
        className="w-fit text-base md:text-xl xl:text-2xl border-[#5DD1FF] border-[2px] py-3 px-16 text-[#5DD1FF] font-['Creato_Display'] bg-transparent"
      >
        {buttonText ? buttonText : "Let's Connect"}
      </a>
    </div>
  );
};

export default TextBanner;
