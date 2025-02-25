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
import { one, two } from "@/data/dropdown/IOSApplicationFAQData";
import { iosApplicationMetaData } from "@/data/meta/ServicesMetaData";

export const metadata = {
  title: iosApplicationMetaData.title,
  description: iosApplicationMetaData.description,
  keywords: iosApplicationMetaData.focusKeyWord,
  alternates: {
    canonical: iosApplicationMetaData.canonical,
  },
};

const IOSApplication = () => {
  return (
    <>
      <Navbar pageName={"Services"} />
      <ServicesInnerHero
        subHeading={"Solutions"}
        mainHeading={
          "IOS Application Development Services by Four Strokes Digital."
        }
        text={
          "Four Strokes Digital is a top-eminent iOS app development agency with custom iOS app solutions to enhance user experiences and boost business growth. As a trusted iOS app development agency, we develop highly performing and secured apps customized to your business requirements. Our highly skilled team ensures seamless design-to-functionality results, delivering superior output amidst the cutthroat competition of the mobile application market."
        }
        image={"/website-development-service.gif"}
      />
      <RatingsExperienceSection />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/service-ios-application-1.jpg"}
        heading={
          "Four Strokes Digital Continues to Offer a Wide Array of IOS Application Development Services."
        }
        text={
          "At Four Strokes Digital, we provide a wide range of iOS development company services comprising all aspects of building high-performance iOS applications. From market research at the beginning to the next phase, maintenance can be ensured of the application, keeping it fit for current competitive markets; we provide custom iOS app development services and solutions for your business requirements. Our iOS app development company services aims to achieve maximum business value by giving significance to user experience, scalability, and performance."
        }
        dropdown={one}
        text2={
          "Whether you're looking to hire iOS developer searching for an exceptional iOS app development agency to partner with, Four Strokes Digital has the expertise and know-how to accurately and creatively develop an application from your creative thinking."
        }
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={true}
        image={"/service-ios-application-2.jpg"}
        heading={"Tailored Solutions for Your iOS App Needs"}
        dropdown={two}
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/service-ios-application-3.jpg"}
        heading={"Custom iOS application development services"}
        text={
          "At Four Strokes Digital, we realize every business has specific needs and objectives. As a foremost iOS application development agency, we present custom iOS app development according to specific needs, and that's why you might wish to ask for only a simple application for internal use or the most complicated, enterprise-level application. Our seasoned iOS application developers work to develop high-performance, scalable applications designed for optimized performance. Our iOS app development company services include conceptual stages  through deployment, strategy, design, and functionality. They provide customized and impactful solutions within the Apple ecosystem to those interested in hiring an iOS developer or partnering with the best iOS app development company."
        }
      />
      <TextBanner
        headingOne={"Ready to take the next step?"}
        buttonText={"Let's Connect"}
        buttonLink={"/contact"}
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={true}
        image={"/service-ios-application-4.jpg"}
        heading={"IOS App Development Service Company"}
        text={
          "Finding the right iOS app development agency is a search for a proven partner committed to excellence. Our iOS app development company services at Four Strokes Digital rely on serious experience and a deep understanding of the Apple ecosystem to craft innovative, user-centric applications. A leading iOS development firm with experience in custom iOS app development designed to meet your exact business need, so if you need to hire an iOS developer or if you want to collaborate with the best iOS app development company, our iOS app design agency focuses on developing scalable, high-quality solutions created with highly experienced iOS application developers by keeping things simple-fun to work with utmost attention to functionality, performance, and user-experience-friendly products."
        }
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/service-ios-application-5.jpg"}
        heading={"IOS Application Development Services Near Me"}
        text={
          "Are you looking for the best near mobile development iOS app development company? Well, your search ends here. Four Strokes Digital offers the most flexible options in iOS app development company service options- remote and on-site- to fulfill your requirements. Being a top-rated iOS development company, we ensure you experience the best professional mobile app development services for building all types of iOS applications through  Apple iOS app development and intuitive design services."
        }
      />
      <IconBanner
        image={"/react-native-application-card-image.webp"}
        heading={"React Native Application"}
        buttonText={"Next Service"}
        buttonLink={"/services/react-native-application"}
      />
      <TestimonialSection />
      <ServicesContactSection />
      <Footer />
    </>
  );
};

export default IOSApplication;
