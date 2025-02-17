import React from "react";
import ServicesInnerHero from "@/utils/hero/ServicesInnerHero";
import RatingsExperienceSection from "@/utils/section/RatingsExperienceSection";
import ImageAndTextSection from "@/utils/section/ImageAndTextSection";
import TextBanner from "@/utils/banner/TextBanner";
import IconBanner from "@/utils/banner/IconBanner";
import TestimonialSection from "@/components/section/TestimonialSection";
import ServicesContactSection from "@/utils/section/ServicesContactSection";
import { one, two, three, four } from "@/data/dropdown/ReactNativeApplicationFAQData";
import { reactNativeApplicationMetaData } from "@/data/meta/ServicesMetaData";

export const metadata = {
  title: reactNativeApplicationMetaData.title,
  description: reactNativeApplicationMetaData.description,
  keywords: reactNativeApplicationMetaData.focusKeyWord,
  alternates: {
    canonical: reactNativeApplicationMetaData.canonical
  }
};

const ReactNativeApplication = () => {
  return (
    <>
      <ServicesInnerHero
        subHeading={"Solutions"}
        mainHeading={"Premier React Native App Development Company"}
        text={
          "Top React Native app development company, delivering high-performance, cross-platform apps for iOS and Android. We offer efficient development with a single codebase, real-time updates, and reusable components for fast market delivery and seamless user experiences."
        }
        image={"/website-development-service.gif"}
      />
      <RatingsExperienceSection />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/service-react-native-application-1.jpg"}
        heading={
          "Fuel Innovation: Drive Unmatched Growth with Our React Native App Development Company Services."
        }
        text={
          "Four Strokes has always stood out for creating best performing React Native Applications for both platforms iOS and Android. We offer smooth and high quality cross platform features and reign supreme in OTA upgrades and hot reloading, offering high-speed deployment and real-time reinforcement. We are very focused on reusable components at a cost-effective price without native performance compromise. Our support is continued and extended over the lifetime of the application."
        }
        dropdown={one}
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={true}
        image={"/service-react-native-application-2.jpg"}
        heading={"React Native App Development services"}
        text={
          "Our React Native app development services offer a full suite of solutions for creating quality, cross-platform mobile applications with the following:"
        }
        dropdown={two}
      />
      <TextBanner
        headingOne={"Ready to take the next step?"}
        buttonText={"Let's Connect"}
        buttonLink={"/contact"}
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/service-react-native-application-3.jpg"}
        heading={"Native mobile development services"}
        text={
          "Four Strokes Digital offers businesses the chance to hire React Native developers to help companies build high-performance cross-platform mobile applications. This means they have experience with React Native, and apps will run very well on iOS and Android, save money, and shorten development time. From user research and prototyping to UI/UX design, API integration, testing, and App Store Optimization, Four Strokes React Native developers take care of everything. Constant maintenance and support confirm it as the best React Native development company, Four Strokes Digital updates and responds to your app. Continuous maintenance and support align the application according to the user's expectations, thus leading to overall improvement and satisfaction."
        }
        dropdown={three}
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={true}
        image={"/service-react-native-application-4.jpg"}
        heading={"React native mobile app development company services"}
        text={
          "A good mobile strategy is important in today's mobile-first world. Besides native app development with Four Strokes Digital, a leading React Native mobile app development company, here are some other key services you could undertake:"
        }
        dropdown={four}
      />
      <IconBanner
        image={"/flutter-application-card-image.webp"}
        heading={"Flutter Application"}
        buttonText={"Next Service"}
        buttonLink={"/services/flutter-application"}
      />
      <TestimonialSection />
      <ServicesContactSection />
    </>
  );
};

export default ReactNativeApplication;
