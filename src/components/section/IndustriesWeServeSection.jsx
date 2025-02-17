import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageAndTextSection from "@/utils/section/ImageAndTextSection";

const IndustriesWeServeSection = () => {

  const [indexNumber, setIndexNumber] = useState(0);

  return (
    <div className="section w-full flex flex-col justify-center gap-16 bg-[#ffffff]">
      <div className="inner w-full flex flex-col items-center justify-center gap-20 px-[30px] sm:px-[50px] xl:px-[12vw]">
        <div className="top w-full flex flex-col items-center justify-center gap-10">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl tracking-tight text-center text-[#5DD1FF]">
            Industries We Serve as a Custom Mobile Application Development
            Company
          </h2>
          <p className="w-full text-sm xl:text-base 2xl:text-lg text-center tracking-wider font-['Creato_Display']">
            At Four Strokes Digital, we pride ourselves on our versatility and ability to
            deliver exceptional mobile app solutions across a wide range of
            industries. Whether it's healthcare, retail, finance, or any other
            sector, our team of skilled developers adapts seamlessly to your
            business needs. While we cater to various industries, here are some
            sectors where we've truly excelled.
          </p>
        </div>
        <div className="bottom w-full flex flex-col gap-20">
          <div className="buttons-area w-full grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              "Education",
              "Healthcare",
              "Ecommerce",
              "Restaurant",
              "Real Estate",
              "FinTech",
              "Transport & Navigation",
              "Sports",
            ].map((text, index) => {
              return (
                <Link
                  key={index}
                  onClick={() => setIndexNumber(index)}
                  className={`w-full text-center text-sm sm:text-base lg:text-lg ${
                    indexNumber == index ? "text-[#FFFFFF]" : "text-[#5DD1FF]"
                  } rounded-lg border-[2px] ${
                    indexNumber == index
                      ? "border-[#5DD1FF]"
                      : "border-[#F3F6FE]"
                  } py-3 ${
                    indexNumber == index ? "bg-[#5DD1FF]" : "bg-[#F3F6FE]"
                  } transition-all ease-in-out duration-300 hover:bg-[#5DD1FF] hover:border-[#5DD1FF] hover:text-white`}
                >
                  {text}
                </Link>
              );
            })}
          </div>
          <div className="bottom">
            <div
              className={`website-images-area ${
                indexNumber == 0 ? "flex" : "hidden"
              }`}
            >
              <ImageAndTextSection
                isInner={true}
                isReverse={true}
                model={["/mobile-education-1.webp", "/mobile-education-2.webp", "/mobile-education-3.webp"]}
                heading={"Education"}
                headingColor={true}
                text={
                  "We provide premier mobile app development services to help you create impactful eLearning apps and websites that stand out. Whether you're developing a new educational platform or upgrading an existing one, our application developers are here to bring your ideas to life. With custom mobile apps development solutions, we deliver interactive, user-friendly educational tools that enhance the learning experience."
                }
                isButton={true}
                buttonText={"Start Now"}
              />
            </div>
            <div
              className={`website-images-area ${
                indexNumber == 1 ? "flex" : "hidden"
              }`}
            >
              <ImageAndTextSection
                isInner={true}
                isReverse={true}
                model={["/mobile-healthcare-1.webp", "/mobile-healthcare-2.webp", "/mobile-healthcare-3.webp"]}
                heading={"Healthcare"}
                headingColor={true}
                text={
                  "When it comes to healthcare innovation, we are your go-to mobile application company. Our apps development services focus on creating solutions that make healthcare more accessible, efficient, and user-friendly. With years of experience in the healthcare industry, our healthcare mobile app developers deliver apps that improve patient care, streamline medical operations, and enhance overall healthcare experiences."
                }
                isButton={true}
                buttonText={"Start Now"}                
              />
            </div>
            <div
              className={`website-images-area ${
                indexNumber == 2 ? "flex" : "hidden"
              }`}
            >
              <ImageAndTextSection
                isInner={true}
                isReverse={true}
                model={["/mobile-ecommerce-1.webp", "/mobile-ecommerce-2.webp", "/mobile-ecommerce-3.webp"]}
                heading={"Ecommerce"}
                headingColor={true}
                text={
                  "Take your eCommerce business to the next level with our mobile apps development services. As a trusted eCommerce mobile app development company, we create intuitive mobile applications that help businesses increase conversions and drive sales. Our mobile application company ensures your customers have a seamless shopping experience, empowering your business with the latest features to stay ahead in a competitive market."
                }
                isButton={true}
                buttonText={"Start Now"}                
              />
            </div>
            <div
              className={`website-images-area ${
                indexNumber == 3 ? "flex" : "hidden"
              }`}
            >
              <ImageAndTextSection
                isInner={true}
                isReverse={true}
                model={["/mobile-restaurant-1.webp", "/mobile-restaurant-2.webp", "/mobile-restaurant-3.webp"]}
                heading={"Restaurant"}
                headingColor={true}
                text={
                  "Upgrade your restaurant’s operations with customized mobile apps. Our mobile app development services enable smooth reservation systems, efficient order management, and better customer interaction. Whether you're launching a new restaurant app or enhancing an existing one, our mobile application company provides tailored solutions that improve the overall dining experience for your customers."
                }
                isButton={true}
                buttonText={"Start Now"}                
              />
            </div>
            <div
              className={`website-images-area ${
                indexNumber == 4 ? "flex" : "hidden"
              }`}
            >
              <ImageAndTextSection
                isInner={true}
                isReverse={true}
                model={["/mobile-real-estate-1.webp", "/mobile-real-estate-2.webp", "/mobile-real-estate-3.webp"]}
                heading={"Real Estate"}
                headingColor={true}
                text={
                  "In the real estate market, mobile apps offer more flexibility and engagement than traditional websites. Our mobile app development company specializes in creating real estate apps that streamline property searches, enhance client interaction, and simplify transactions. With our custom application development solutions, you can elevate the real estate experience for both clients and agents."
                }
                isButton={true}
                buttonText={"Start Now"}                
              />
            </div>
            <div
              className={`website-images-area ${
                indexNumber == 5 ? "flex" : "hidden"
              }`}
            >
              <ImageAndTextSection
                isInner={true}
                isReverse={true}
                model={["/mobile-fintech-1.webp", "/mobile-fintech-2.webp", "/mobile-fintech-3.webp"]}
                heading={"FinTech"}
                headingColor={true}
                text={
                  "Revolutionize your financial services with our mobile app development services. Whether you need a secure app to manage finances, track portfolios, or provide investment insights, our mobile app developers have you covered. As a top mobile application company, we design enterprise-grade solutions that prioritize security, enhance functionality, and offer a seamless user experience, ensuring you stay competitive in the FinTech space."
                }
                isButton={true}
                buttonText={"Start Now"}                
              />
            </div>
            <div
              className={`website-images-area ${
                indexNumber == 6 ? "flex" : "hidden"
              }`}
            >
              <ImageAndTextSection
                isInner={true}
                isReverse={true}
                model={["/mobile-transportation-1.webp", "/mobile-transportation-2.webp", "/mobile-transportation-3.webp"]}
                heading={"Transport & Navigation"}
                headingColor={true}
                text={
                  "Stay ahead in the transport industry with cutting-edge mobile app solutions. Our transport application development services help create real-time navigation, route planning, and logistics apps that improve efficiency. Whether you’re building a transport tracking system or a dynamic navigation tool, our mobile apps development company provides the technology and expertise to drive success."
                }
                isButton={true}
                buttonText={"Start Now"}                
              />
            </div>
            <div
              className={`website-images-area ${
                indexNumber == 7 ? "flex" : "hidden"
              }`}
            >
              <ImageAndTextSection
                isInner={true}
                isReverse={true}
                model={["/mobile-sports-1.webp", "/mobile-sports-2.webp", "/mobile-sports-3.webp"]}
                heading={"Sports"}
                headingColor={true}
                text={
                  "Transform the sports industry with innovative mobile app solutions. From fan engagement to live event tracking, our mobile application company specializes in developing sports apps that keep sports fans connected and enhance game-day experiences. With tailored application development solutions, we help sports businesses deliver interactive, user-friendly experiences that keep fans engaged and loyal."
                }
                isButton={true}
                buttonText={"Start Now"}                
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServeSection;
