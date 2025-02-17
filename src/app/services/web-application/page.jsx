import React from "react";
import ServicesInnerHero from "@/utils/hero/ServicesInnerHero";
import RatingsExperienceSection from "@/utils/section/RatingsExperienceSection";
import ImageAndTextSection from "@/utils/section/ImageAndTextSection";
import TextBanner from "@/utils/banner/TextBanner";
import IconBanner from "@/utils/banner/IconBanner";
import TestimonialSection from "@/components/section/TestimonialSection";
import ServicesContactSection from "@/utils/section/ServicesContactSection";
import { one, two } from "@/data/dropdown/WebApplicationFAQData";
import { webApplicationMetaData } from "@/data/meta/ServicesMetaData";

export const metadata = {
  title: webApplicationMetaData.title,
  description: webApplicationMetaData.description,
  keywords: webApplicationMetaData.focusKeyWord,
  alternates: {
    canonical: webApplicationMetaData.canonical
  }
};

const WebApplication = () => {
  return (
    <>
      <ServicesInnerHero
        subHeading={"Solutions"}
        mainHeading={"Custom Web Application Development Company"}
        text={
          "An effective online presence is important. Generic websites often lack the flexibility and functionality to meet modern business demands. Partnering with a custom web application development company like Four Strokes Digital can make a significant difference. As a leading web application company, we specialize in web application development services, crafting tailored solutions that align with your business needs and deliver exceptional user experiences through our comprehensive web application services."
        }
        image={"/serivce-web-application-1.gif"}
      />
      <RatingsExperienceSection />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/service-web-application-3.jpg"}
        heading={
          "Why Choose a Custom Web Application Development Company Like Four Strokes Digital?"
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
        image={"/service-web-application-1.jpg"}
        heading={
          "Making Custom Web Applications Development Services an End-to-End Offer"
        }
        text={
          "Customized web application development services tailored to your unique needs are what Four Strokes Digital offers as a custom web application development company. Let us check what we have here:"
        }
        dropdown={two}
      />
      <IconBanner
        image={"/crm-development-card-image.webp"}
        heading={"CRM Development"}
        buttonText={"Next Service"}
        buttonLink={"/services/crm-development"}
      />
      <TestimonialSection />
      <ServicesContactSection />
    </>
  );
};

export default WebApplication;
