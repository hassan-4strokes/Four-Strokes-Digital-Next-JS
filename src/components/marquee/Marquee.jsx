"use client";

import { motion } from "framer-motion";
import Section2Column from "@/utils/section/Section2Column";

const Marquee = ({ mainHeading, subHeading, text, isTextAllowed }) => {
  return (
    <div
      className={`section w-full ${
        isTextAllowed
          ? "flex flex-col justify-center gap-16 pb-32 xl:pb-44 pt-8 xl:pt-16"
          : " px-[30px] sm:px-[50px] xl:px-[12vw]"
      }`}
    >
      {isTextAllowed ? (
        <>
          <div className="top w-[80%] md:w-[45%] border-b-[1px] border-[#000000]"></div>
          <div className="bottom flex flex-col gap-3 md:gap-10 px-[30px] sm:px-[50px] xl:px-[12vw]">
            <Section2Column
              mainHeading={mainHeading}
              subHeading={subHeading}
              text={text}
              button={false}
              color={"#000000"}
            />
            <div className="inner-section w-full overflow-hidden">
              <div className="marquee-area whitespace-nowrap">
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                    duration: 15,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="images-area inline-block"
                >
                  <div className="images flex items-center mr-[1000px] md:mr-[560px] lg:mr-[800px] 2xl:mr-[1100px]">
                    <img
                      src="/client-01.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                    <img
                      src="/client-02.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                    <img
                      src="/client-03.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                    <img
                      src="/client-04.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                    <img
                      src="/client-05.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                    <img
                      src="/client-06.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                    <img
                      src="/client-07.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                    duration: 15,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="images-area inline-block"
                >
                  <div className="images flex items-center mr-[1000px] md:mr-[560px] lg:mr-[800px] 2xl:mr-[1100px]">
                    <img
                      src="/client-01.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                    <img
                      src="/client-02.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                    <img
                      src="/client-03.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                    <img
                      src="/client-04.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                    <img
                      src="/client-05.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                    <img
                      src="/client-06.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                    <img
                      src="/client-07.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                    duration: 15,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="images-area inline-block"
                >
                  <div className="images flex items-center mr-[1000px] md:mr-[560px] lg:mr-[800px] 2xl:mr-[1100px]">
                    <img
                      src="/client-01.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                    <img
                      src="/client-02.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                    <img
                      src="/client-03.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                    <img
                      src="/client-04.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                    <img
                      src="/client-05.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                    <img
                      src="/client-06.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                    <img
                      src="/client-07.webp"
                      alt="Client Images"
                      className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="inner-section w-full overflow-hidden">
          <div className="marquee-area whitespace-nowrap">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
              className="images-area inline-block"
            >
              <div className="images flex items-center mr-[1000px] md:mr-[560px] lg:mr-[800px] 2xl:mr-[1100px]">
                <img
                  src="/client-01.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
                <img
                  src="/client-02.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
                <img
                  src="/client-03.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
                <img
                  src="/client-04.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
                <img
                  src="/client-05.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
                <img
                  src="/client-06.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
                <img
                  src="/client-07.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
              className="images-area inline-block"
            >
              <div className="images flex items-center mr-[1000px] md:mr-[560px] lg:mr-[800px] 2xl:mr-[1100px]">
                <img
                  src="/client-01.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
                <img
                  src="/client-02.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
                <img
                  src="/client-03.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
                <img
                  src="/client-04.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
                <img
                  src="/client-05.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
                <img
                  src="/client-06.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
                <img
                  src="/client-07.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
              className="images-area inline-block"
            >
              <div className="images flex items-center mr-[1000px] md:mr-[560px] lg:mr-[800px] 2xl:mr-[1100px]">
                <img
                  src="/client-01.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
                <img
                  src="/client-02.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
                <img
                  src="/client-03.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
                <img
                  src="/client-04.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
                <img
                  src="/client-05.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
                <img
                  src="/client-06.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
                <img
                  src="/client-07.webp"
                  alt="Client Images"
                  className="w-36 md:w-20 lg:w-28 2xl:w-40 mr-12 md:mr-8 lg:mr-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marquee;
