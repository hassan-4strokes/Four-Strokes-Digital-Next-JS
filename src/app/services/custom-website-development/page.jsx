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
import {
  one,
  two,
  three,
} from "@/data/dropdown/CustomWebsiteDevelopmentFAQData";
import { customWebsiteDevelopmentMetaData } from "@/data/meta/ServicesMetaData";

export const metadata = {
  title: customWebsiteDevelopmentMetaData.title,
  description: customWebsiteDevelopmentMetaData.description,
  keywords: customWebsiteDevelopmentMetaData.focusKeyWord,
  alternates: {
    canonical: customWebsiteDevelopmentMetaData.canonical,
  },
};

const CustomWebsiteDevelopment = () => {
  return (
    <>
      <Navbar pageName={"Services"} />
      <ServicesInnerHero
        subHeading={"Solutions"}
        mainHeading={"Custom Web Development Company"}
        text={
          "In a fast-changing digital world, the importance of a strong online presence is becoming ten-fold for any business. Four Strokes Digital is the leading custom Web Development Company offering tailored, scalable solutions to build customized impact-function websites, which would lead to growth and engagement."
        }
        image={"/website-development-service.gif"}
      />
      <RatingsExperienceSection />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/service-custom-website-development-1.webp"}
        heading={"Why Four Strokes Digital for Custom Web Development?"}
        text={
          "Each enterprise is unique; here at a custom web development company, we prefer to customize our solutions to suit a proprietary brand match matched with the preferences and tendencies of the target audience and the business goals. Our well-trained team uses a few latest tools and technologies that craft amazing, effective websites."
        }
        dropdown={one}
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={true}
        image={"/service-custom-website-development-2.webp"}
        heading={"Comprehensive Custom Web Development Services"}
        text={
          "We have tailored our comprehensive suite of custom web development services to serve every category of business, from small startups to huge enterprises. Behind every successful project is a team of skilled, adept designers and developers who have strategized and executed every project with precision and care."
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
        image={"/service-custom-website-development-3.jpg"}
        heading={"Benefits of working with Four Strokes Digital"}
        text={
          "Custom web development companies may be the defining factor of digital success. Here is what we offer:"
        }
        dropdown={three}
      />
      <IconBanner
        image={"/ecommerce-development-card-image.webp"}
        heading={"Ecommerce Development"}
        buttonText={"Next Service"}
        buttonLink={"/services/ecommerce-development"}
      />
      <TestimonialSection />
      <ServicesContactSection />
      <Footer />
    </>
  );
};

export default CustomWebsiteDevelopment;
