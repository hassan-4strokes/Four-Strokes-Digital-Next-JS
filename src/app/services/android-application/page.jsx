import React from "react";
import ServicesInnerHero from "@/utils/hero/ServicesInnerHero";
import ImageAndTextSection from "@/utils/section/ImageAndTextSection";
import RatingsExperienceSection from "@/utils/section/RatingsExperienceSection";
import TextBanner from "@/utils/banner/TextBanner";
import IconBanner from "@/utils/banner/IconBanner";
import TestimonialSection from "@/components/section/TestimonialSection";
import ServicesContactSection from "@/utils/section/ServicesContactSection";
import { one, two } from "@/data/dropdown/AndroidApplicationFAQData";
import { androidApplicationMetaData } from "@/data/meta/ServicesMetaData";

export const metadata = {
  title: androidApplicationMetaData.title,
  description: androidApplicationMetaData.description,
  keywords: androidApplicationMetaData.focusKeyWord,
  alternates: {
    canonical: androidApplicationMetaData.canonical
  }
};

const AndroidApplication = () => {
  return (
    <>
      <ServicesInnerHero
        subHeading={"Solutions"}
        mainHeading={"Custom Android Application Development Company"}
        text={
          "Four Strokes Digital offers you the development of custom-built Android applications that will be high-performance applications and also easy to use. As a competitive-built Android app development company, our team helps you with end-to-end services from design to deployment to ensure that any startup or enterprise can access the user engagement and growth-driving capabilities of mobile solutions."
        }
        image={"/website-development-service.gif"}
      />
      <RatingsExperienceSection />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/service-android-application-1.jpg"}
        heading={
          "Four Strokes Digital offers a comprehensive suite of Android application development services, including:"
        }
        dropdown={one}
      />
      <TextBanner
        headingOne={"Ready to take the next step?"}
        buttonText={"Contact Us"}
        buttonLink={"/contact"}
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={true}
        image={"/service-android-application-2.jpg"}
        heading={"Future-Proofing Your Android App with Four Strokes Digital"}
        text={
          "We at Four Strokes Digital believe that the Android system will always change; therefore, future technologies and trends should emerge to make your applications perform better and improve the user experience. As a prominent Android application development company, we believe in future-proofing your app. Our Android app development services will make sure your application is competitive, flexible, and up to date with the latest standards. We are committed to providing customized Android app development, meeting not only the needs of today but the challenges of tomorrow as well, thus making it long-lasting."
        }
        dropdown={two}
      />
      <IconBanner
        image={"/ios-application-card-image.webp"}
        heading={"IOS Application"}
        buttonText={"Next Service"}
        buttonLink={"/services/ios-application"}
      />
      <TestimonialSection />
      <ServicesContactSection />
    </>
  );
};

export default AndroidApplication;
