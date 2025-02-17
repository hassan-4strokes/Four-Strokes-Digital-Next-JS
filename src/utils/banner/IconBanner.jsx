import Button from "../button/Button";

const IconBanner = ({ image, heading, buttonText, buttonLink }) => {
  return (
    <div className="section w-full flex flex-col md:flex-row items-center justify-center md:justify-start gap:10 md:gap-16 py-16 px-[30px] sm:px-[50px] xl:px-[12vw] bg-[#F3F6FE]">
      <div className="left w-full md:w-fit flex items-center justify-center md:justify-start">
        <img src={image} alt="Service Image" className="w-44" />
      </div>
      <div className="right w-full md:w-fit flex flex-col items-center gap-16">
        <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-center text-[#5DD1FF]">
          {heading}
        </h2>
        <Button
          text={buttonText}
          link={buttonLink}
          color={"#5DD1FF"}
          border={"#5DD1FF"}
        />
      </div>
    </div>
  );
};

export default IconBanner;
