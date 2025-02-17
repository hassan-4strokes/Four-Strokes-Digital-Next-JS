const AboutHero = () => {
  return (
    <>
      <div className="section w-full flex flex-col md:flex-row justify-between px-[30px] sm:px-[50px] xl:px-[12vw] py-16 xl:py-28 bg-[#5DD1FF]">
        <div className="left w-full md:w-[70%] flex flex-col justify-start gap-5">
          <div className="top w-full flex flex-col gap-3">
            <h2 className="w-fit uppercase cursor-pointer text-sm xl:text-base font-bold text-white p-2 bg-[#48bfee]">
              About Us
            </h2>
            <h1
              className={`text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-white`}
            >
              Four Strokes Digital: Your Strategic Partner in Digital
              Transformation | Digital Marketing Agency
            </h1>
          </div>
          <div className="bottom flex flex-col gap-5 text-white">
            <p className="text-justify text-lg xl:text-xl tracking-wide font-['Creato_Display']">
              At Four Strokes Digital, we exist above the norm for a traditional
              digital marketing agency in the USA. We are positioned as a
              strategic partner for businesses in all industrial verticals to
              amplify marketing efforts and leverage the needed competitive
              edge.
            </p>
            <p className="text-justify text-lg xl:text-xl tracking-wide font-['Creato_Display']">
              Our team is an ethnically diverse panel that exploits innovative
              strategies to deliver tailored solutions directly to you. We
              specialize in custom software development, cross-platform mobile
              app development, and professional graphic design services, so
              every project resonates deeply with your audience.
            </p>
            <p className="text-justify text-lg xl:text-xl tracking-wide font-['Creato_Display']">
              We encourage the quality of long-term business relationships and a
              dynamic team with chemistry and relevant experience.
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

export default AboutHero;
