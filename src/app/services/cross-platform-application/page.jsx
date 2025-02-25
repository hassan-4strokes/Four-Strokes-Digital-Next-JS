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
import { one, two } from "@/data/dropdown/CrossPlatformApplicationFAQData";
import { crossPlatformApplicationMetaData } from "@/data/meta/ServicesMetaData";

export const metadata = {
  title: crossPlatformApplicationMetaData.title,
  description: crossPlatformApplicationMetaData.description,
  keywords: crossPlatformApplicationMetaData.focusKeyWord,
  alternates: {
    canonical: crossPlatformApplicationMetaData.canonical,
  },
};

const CrossPlatformApplication = () => {
  return (
    <>
      <Navbar pageName={"Services"} />
      <ServicesInnerHero
        subHeading={"Solutions"}
        mainHeading={
          "Cross-Platform Mobile App Development Company with Four Strokes Digital"
        }
        text={
          "Four Strokes Digital specializes in affordable cross-platform mobile app development, creating high-performing apps for Android and iOS using frameworks like React Native and Flutter. Our scalable solutions ensure consistent user experiences, effective engagement, and tailored results. Unlock growth with expert custom mobile app development designed to meet your business goals efficiently."
        }
        image={"/service-web-application-3.jpg"}
      />
      <RatingsExperienceSection />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/service-cross-platform-application-1.jpg"}
        heading={
          "Navigating the Cross-Platform Ecosystem: Optimal Strategies for Cross-Platform Mobile App Development"
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
        image={"/service-react-cross-platform-application-2.jpg"}
        heading={
          "Finding Your Trusted Cross-Platform Mobile App Development Partner"
        }
        dropdown={two}
      />
      <IconBanner
        image={"/custom-website-development-card-image.webp"}
        heading={"Web Design"}
        buttonText={"Next Service"}
        buttonLink={"/services/web-design"}
      />
      <TestimonialSection />
      <ServicesContactSection />
      <Footer />
    </>
  );
};

export default CrossPlatformApplication;
