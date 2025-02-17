import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { servicesCarouselCards } from "@/data/carousel/ServicesCarouselCards";

const ServicesCarousel = () => {
    const [active, setActive] = useState("1");
  
    const targetRef = useRef();
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["35.8", "-35.8%"]);
  
    const progressBarWidth = useTransform(
      scrollYProgress,
      [0, 1],
      ["4.5%", "100%"]
    );
  return (
    <div
      ref={targetRef}
      className="service-bottom relative hidden lg:block mt-[0px] mb-[50px]"
    >
      <div className="services-container flex flex-col sticky top-[10%] xl:top-[20%]">
        <div className="heading-area w-full flex justify-start pb-16">
        </div>
        <div className="scroller w-full mb-10">
          <div className="progress-bar w-full h-0 border-b-[2px] border-dashed border-black rounded-full">
            <motion.div
              style={{ width: progressBarWidth }}
              className={`progress flex items-center justify-end relative h-full rounded-full`}
            >
              <img src="./rocket.png" alt="Rocket" className="w-22" />
            </motion.div>
          </div>
        </div>
        <motion.div className="services" style={{ x }}>
          {servicesCarouselCards.map((card, index) => {
            return (
              <div
                key={index}
                className={`button-container relative w-[500px] xl:w-[1000px] h-[50vh] flex flex-col justify-between py-4 sm:py-16 px-8 rounded-2xl cursor-pointer transition-all ease-in-out duration-300 bg-[#5DD1FF]`}
              >
                <div className="container-top w-full flex flex-col justify-center gap-10">
                  <h2 className="font-semibold text-white text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-[26px] xl:leading-[30px] 2xl:leading-[36px] text-center sm:text-left">
                    {card.heading}
                  </h2>
                  <span className="text-white text-xl font-['Creato_Display']">{card.text}</span>
                </div>
                <div className="container-bottom w-full flex items-center gap-3">
                  <div className="left">
                    <h3 className="text-white text-7xl">{card.number}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default ServicesCarousel