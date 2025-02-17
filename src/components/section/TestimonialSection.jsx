"use client"

import Section2Column from "@/utils/section/Section2Column";
import { testimonialsData } from "@/data/testimonials/testimonialsData";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialSection = () => {
  return (
    <div className="section w-full flex flex-col justify-center gap-16 py-16 xl:py-28">
      <div className="top w-[80%] md:w-[45%] border-b-[1px] border-[#000000]"></div>
      <div className="bottom flex flex-col gap-10 px-[30px] sm:px-[50px] xl:px-[12vw]">
        <Section2Column
          mainHeading={"Testimonials"}
          subHeading={"Four Strokes Digital"}
          text={""}
          button={false}
          color={"#000000"}
        />
        <div className="inner w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonialsData.map((item, index) => {
                return (
                  <CarouselItem>
                    <div key={index} className="p-1">
                      <Card className="border-none shadow-none">
                        <CardContent className="flex flex-col items-center justify-center gap-10 p-6">
                          <div className="top w-full flex flex-col items-center justify-center gap-5">
                            <p className="w-full md:w-[90%] lg:w-[80%] xl:w-[65%] text-center tracking-wider font-['Creato_Display']">{item.text}</p>
                            <div className="star-ratings flex items-center gap-1">
                              <i className="fa-solid fa-star text-xl text-yellow-400"></i>
                              <i className="fa-solid fa-star text-xl text-yellow-400"></i>
                              <i className="fa-solid fa-star text-xl text-yellow-400"></i>
                              <i className="fa-solid fa-star text-xl text-yellow-400"></i>
                              <i className="fa-solid fa-star-half text-xl text-yellow-400"></i>
                            </div>
                          </div>
                          <div className="bottom w-full flex flex-col items-center justify-center gap-3">
                            <img
                              src={item.image}
                              alt="Testimonial Image"
                              className="w-16 rounded-full"
                            />
                            <h2 className="text-lg lg:text-xl font-semibold">
                              {item.name}
                            </h2>
                            <h3 className="text-zinc-500 text-sm lg:text-base tracking-wider font-['Creato_Display']">{item.profession}</h3>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
