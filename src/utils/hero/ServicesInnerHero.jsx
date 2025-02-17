import Link from "next/link";

const ServicesInnerHero = ({ mainHeading, text, buttonText }) => {
  return (
    <>
      <div className="section w-full flex flex-col md:flex-row justify-between px-[30px] sm:px-[50px] xl:px-[12vw] py-16 xl:py-28 bg-[#5DD1FF]">
        <div className="left w-full md:w-[70%] flex flex-col justify-start gap-5">
          <div className="top w-full flex flex-col gap-3">
            <Link href={"/services"}>
              <h2 className="w-fit uppercase cursor-pointer text-sm xl:text-base font-bold text-white p-2 bg-[#48bfee]">
                Solutions
              </h2>
            </Link>
            <h1
              className={`text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-white`}
            >
              {mainHeading}
            </h1>
          </div>
          <div className="bottom flex flex-col gap-10">
            <p className="text-justify text-lg xl:text-xl tracking-wide font-['Creato_Display'] text-white">
              {text}
            </p>
            <a
              initial={{ y: 0 }}
              whilehover={{ y: -10 }}
              transition={{ duration: 0.2, ease: "linear" }}
              href="#contact-form"
              className="w-fit text-base text-white border-[2px] border-white py-3 px-16 font-['Creato_Display'] bg-transparent"
            >
              {buttonText ? buttonText : "Let's Connect"}
            </a>
          </div>
        </div>
        <div className="right w-full md:w-[30%] flex justify-center items-start">
          {/* <img src={image} className="w-full lg:w-[90%] xl:w-[80%]" /> */}
        </div>
      </div>
    </>
  );
};

export default ServicesInnerHero;
