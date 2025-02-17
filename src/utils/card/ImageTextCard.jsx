import React from "react";

const ImageTextCard = ({ isImageFull, cardImage, image, heading, text }) => {
  return (
    <>
      <div className="section w-full">
        {isImageFull ? (
          <div className="w-full h-[30vh] md:h-[55vh] lg:h-[45vh] 2xl:h-[55vh]">
            <img
              src={cardImage}
              alt="Card Image"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div
            className={`w-full flex flex-col items-center justify-start gap-5 py-10 px-5`}
          >
            <img src={image} alt="Card Image" className="w-14 2xl:w-20" />
            <h3
              className={`w-[80%] 2xl:w-[65%] text-center text-lg lg:text-xl 2xl:text-2xl text-black`}
            >
              {heading}
            </h3>
            <p
              className={`text-center text-xs lg:text-sm text-black tracking-wide font-['Creato_Display']`}
            >
              {text}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageTextCard;
