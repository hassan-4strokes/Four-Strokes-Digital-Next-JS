
const ServicesHero = () => {
  return (
    <>
      <div className="section w-full flex flex-col md:flex-row justify-between px-[30px] sm:px-[50px] xl:px-[12vw] py-16 xl:py-28 bg-[#5DD1FF]">
        <div className="left w-full md:w-[70%] flex flex-col justify-start gap-5">
          <div className="top w-full flex flex-col gap-3">
            <h2 className="w-fit uppercase cursor-pointer text-sm xl:text-base font-bold text-white p-2 bg-[#48bfee]">
              Our Services
            </h2>
            <h1
              className={`text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-white`}
            >
              We serve: Digitally revolve your business
            </h1>
          </div>
          <div className="bottom flex flex-col gap-5 text-white">
            <p className="text-justify text-lg xl:text-xl tracking-wide font-['Creato_Display']">
              We take a strategic, data-driven approach to every online
              marketing campaign in a methodological way, making sure that what
              comes out remains profitable.
            </p>
            <p className="text-justify text-lg xl:text-xl tracking-wide font-['Creato_Display']">
              Join us today to take your customer acquisition and retention
              rates through the roof!
            </p>
          </div>
        </div>
        <div className="right w-full md:w-[30%] flex justify-center items-start">
          {/* <img src={image} className="w-full lg:w-[90%] xl:w-[80%]" /> */}
        </div>
      </div>
    </>
  );
};

export default ServicesHero;
