"use client";

import InnerFAQSection from "../faq/InnerFAQSection";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ImageAndTextSection = ({
  image,
  model,
  heading,
  headingColor,
  text,
  isButton,
  buttonText,
  para,
  icons,
  technologies,
  dropdown,
  text2,
  isInner,
  isReverse,
}) => {
  return (
    <div
      className={`section w-full flex ${
        isReverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
      } justify-center md:justify-between gap-10 md:gap-5 xl:gap-20 ${
        isInner ? "" : "px-[30px] sm:px-[50px] xl:px-[12vw] py-16"
      }`}
    >
      {image && (
        <div
          className={`left h-fit w-full md:w-[50%] flex ${
            isReverse ? "justify-end" : "justify-start"
          }`}
        >
          <img src={image} alt="Section Image" className="w-full h-auto" />
        </div>
      )}
      {model && (
        <div className={`left w-full md:w-[50%] xl:w-[30%] flex justify-center`}>
          <Carousel className="w-fit">
            <CarouselContent>
              {model.map((item, index) => {
                return (
                  <CarouselItem>
                    <div key={index} className="px-1">
                      <Card className="w-full">
                        <CardContent className="flex flex-col items-center justify-center gap-10 px-6">
                          <img
                            src={item}
                            alt="Section Image"
                            className="w-60 2xl:w-72 h-auto"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="hidden xl:flex"><CarouselPrevious /></div>
            <div className="hidden xl:flex"><CarouselNext /></div>
          </Carousel>
        </div>
      )}
      <div className="right w-full md:w-[50%] flex flex-col gap-5">
        <h2
          className={`text-2xl xl:text-3xl 2xl:text-4xl tracking-tight ${
            headingColor && "text-[#5DD1FF]"
          }`}
        >
          {heading}
        </h2>
        {text && (
          <p className="text-justify text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
            {text}
          </p>
        )}
        {para &&
          para.map((item, index) => {
            return (
              <p
                key={index}
                className="text-sm xl:text-base 2xl:text-lg leading-5 xl:leading-6 tracking-wide font-['Creato_Display']"
              >
                {item}
              </p>
            );
          })}
        {dropdown && (
          <div className="dropdown-area w-full flex flex-col">
            {dropdown.map((item, index) => {
              return (
                <div key={index} className="faq w-full">
                  <InnerFAQSection dropdown={item} />
                </div>
              );
            })}
          </div>
        )}
        {icons && (
          <div className="points w-full grid grid-cols-1 gap-5">
            {icons.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`w-full h-full flex flex-row gap-2 xl:gap-5 justify-start`}
                >
                  <div
                    className={`icon-area w-fit h-full flex justify-start items-center`}
                  >
                    <img
                      src={item.icon}
                      alt="Icon"
                      className="w-10 2xl:w-14 h-auto"
                    />
                  </div>
                  <div
                    className={`w-full h-full flex flex-col items-start justify-center`}
                  >
                    {item.heading && (
                      <h3 className="w-full text-sm xl:text-base 2xl:text-lg text-left tracking-tight">
                        {item.heading}
                      </h3>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {technologies && (
          <div className="points w-full grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-3 gap-3 xl:gap-5">
            {technologies.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`cursor-default w-full h-full flex flex-col xl:flex-row gap-2 xl:gap-5 justify-start px-2 xl:pl-4 py-2 border-l-none xl:border-l-[5px] border-[#5DD1FF] shadow-md shadow-[#f3f3f3] hover:shadow-lg`}
                >
                  <div
                    className={`icon-area w-full xl:w-fit h-fit xl:h-full flex justify-center xl:justify-start items-start xl:items-center`}
                  >
                    <img
                      src={item.icon}
                      alt="Icon"
                      className="w-8 sm:w-6 xl:w-8 2xl:w-10 h-auto"
                    />
                  </div>
                  <div
                    className={`w-full h-full flex flex-col items-start justify-start xl:justify-center`}
                  >
                    {item.heading && (
                      <h3 className="w-full text-sm sm:text-xs xl:text-base 2xl:text-lg text-center xl:text-left tracking-tight">
                        {item.heading}
                      </h3>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {isButton && (
          <div className="buttons-area w-full flex justify-center sm:justify-start pt-5">
            <a
              href="#contact-form"
              className={`w-full sm:w-fit text-center text-sm sm:text-base lg:text-lg text-[#FFFFFF] rounded-lg border-[2px] border-[#5DD1FF] py-3 px-16 bg-[#5DD1FF] transition-all ease-in-out duration-300 hover:bg-transparent hover:border-[#5DD1FF] hover:text-[#5DD1FF]`}
            >
              {buttonText}
            </a>
          </div>
        )}
        {text2 && (
          <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
            {text2}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageAndTextSection;
