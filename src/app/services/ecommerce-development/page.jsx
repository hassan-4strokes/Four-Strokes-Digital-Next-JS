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
import { one, two } from "@/data/dropdown/EcommerceDevelopmentFAQData";
import { ecommerceDevelopmentMetaData } from "@/data/meta/ServicesMetaData";

export const metadata = {
  title: ecommerceDevelopmentMetaData.title,
  description: ecommerceDevelopmentMetaData.description,
  keywords: ecommerceDevelopmentMetaData.focusKeyWord,
  alternates: {
    canonical: ecommerceDevelopmentMetaData.canonical,
  },
};

const EcommerceDevelopment = () => {
  return (
    <>
      <Navbar pageName={"Services"} />
      <ServicesInnerHero
        subHeading={"Solutions"}
        mainHeading={"Your Trusted Ecommerce Development Company"}
        text={
          "Four Strokes Digital helps American businesses succeed in e-commerce with custom, secure, and scalable solutions. Our expert team optimizes product pages, checkout processes, and payment gateways to boost conversions, enhance user engagement, and foster customer loyalty, driving growth in the competitive e-commerce landscape."
        }
        image={"/website-development-service.gif"}
      />
      <RatingsExperienceSection />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/service-ecommerce-development-1.jpg"}
        heading={"Premier Ecommerce Development Company in the USA"}
        text={
          "The world of e-commerce is ever-changing, and it requires choosing the right developing partner. Four Strokes Digital is one of the top ecommerce development corporations in the USA, combining American expertise and progressive development capabilities. We are well-esteemed as a premier e-commerce software development company that provides expert e-commerce development services."
        }
        dropdown={one}
      />
      <TextBanner
        headingOne={"Ready to take the next step?"}
        buttonText={"Let's Connect"}
        buttonLink={"/contact"}
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={true}
        image={"/service-ecommerce-development-2.jpg"}
        heading={"Your E-commerce Development Agency Partner"}
        dropdown={two}
      />
      <IconBanner
        image={"/web-application-card-image.png"}
        heading={"Web Application"}
        buttonText={"Next Service"}
        buttonLink={"/services/web-application"}
      />
      <TestimonialSection />
      <ServicesContactSection />
      <Footer />
    </>
  );
};

export default EcommerceDevelopment;
