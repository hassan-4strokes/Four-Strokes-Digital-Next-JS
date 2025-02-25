import React from "react";
import Navbar from "@/utils/navbar/Navbar";
import ServicesInnerHero from "@/utils/hero/ServicesInnerHero";
import RatingsExperienceSection from "@/utils/section/RatingsExperienceSection";
import ImageAndTextSection from "@/utils/section/ImageAndTextSection";
import TextBanner from "@/utils/banner/TextBanner";
import IconBanner from "@/utils/banner/IconBanner";
import TestimonialSection from "@/components/section/TestimonialSection";
import ServicesContactSection from "@/utils/section/ServicesContactSection";
import Footer from "@/utils/footer/Footer";
import { one, two, three } from "@/data/dropdown/FlutterApplicationFAQData";
import { flutterApplicationMetaData } from "@/data/meta/ServicesMetaData";

export const metadata = {
  title: flutterApplicationMetaData.title,
  description: flutterApplicationMetaData.description,
  keywords: flutterApplicationMetaData.focusKeyWord,
  alternates: {
    canonical: flutterApplicationMetaData.canonical,
  },
};

const FlutterApplication = () => {
  return (
    <>
      <Navbar pageName={"Services"} />
      <ServicesInnerHero
        subHeading={"Solutions"}
        mainHeading={
          "Expert Flutter App Development Company | Four Strokes Digital"
        }
        text={
          "Four Strokes Digital is a top-rated Flutter app development company, creating high-performance, scalable apps for both Android and iOS with a single codebase. Our expert team delivers custom Flutter solutions, enhancing user experience and meeting your unique business needs."
        }
        image={"/website-development-service.gif"}
      />
      <RatingsExperienceSection />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/service-flutter-application-1.jpg"}
        heading={"Your Award-Winning Web Design Agency"}
        dropdown={one}
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={true}
        image={"/service-flutter-application-2.jpg"}
        heading={
          "Finding Your Ideal Flutter Development Partner: A Glimpse at Four Strokes Digital"
        }
        dropdown={two}
      />
      <TextBanner
        headingOne={"Ready to take the next step?"}
        headingTwo={"Custom Website development"}
        buttonText={"Contact Us"}
        buttonLink={"#contact-form"}
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/service-flutter-application-3.jpg"}
        heading={"Flutter agency"}
        text={
          "We at Four Strokes Digital are passionate about delivering quality mobile applications that ignite your business growth. Here are the reasons why we are noteworthy."
        }
        dropdown={three}
        text2={
          "This application of Flutter builds a perfectly homogeneous user engagement experience across multiple platforms, which may further reinforce your brand identity."
        }
      />
      <IconBanner
        image={"/cross-platform-application-card-image.webp"}
        heading={"Cross Platform Application"}
        buttonText={"Next Service"}
        buttonLink={"/services/cross-platform-application"}
      />
      <TestimonialSection />
      <ServicesContactSection />
      <Footer />
    </>
  );
};

export default FlutterApplication;
