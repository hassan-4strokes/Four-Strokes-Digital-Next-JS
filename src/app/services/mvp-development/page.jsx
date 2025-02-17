import React from "react";
import ServicesInnerHero from "@/utils/hero/ServicesInnerHero";
import RatingsExperienceSection from "@/utils/section/RatingsExperienceSection";
import ImageAndTextSection from "@/utils/section/ImageAndTextSection";
import TextBanner from "@/utils/banner/TextBanner";
import IconBanner from "@/utils/banner/IconBanner";
import TestimonialSection from "@/components/section/TestimonialSection";
import ServicesContactSection from "@/utils/section/ServicesContactSection";
import { one, two } from "@/data/dropdown/MVPDevelopmentFAQData";
import { mvpDevelopmentMetaData } from "@/data/meta/ServicesMetaData";

export const metadata = {
  title: mvpDevelopmentMetaData.title,
  description: mvpDevelopmentMetaData.description,
  keywords: mvpDevelopmentMetaData.focusKeyWord,
  alternates: {
    canonical: mvpDevelopmentMetaData.canonical
  }
};

const MVPDevelopment = () => {
  return (
    <>
      <ServicesInnerHero
        subHeading={"Solutions"}
        mainHeading={"MVP Development Company for Startups and Enterprises"}
        text={
          "We turn ideas into reality with expert MVP development services. Specializing in MVP development for startups, we use agile methods to create cost-effective solutions, enabling quick market testing and user feedback. With MVP as a service, we guide future product development for long-term success."
        }
        image={"/website-development-service.gif"}
      />
      <RatingsExperienceSection />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/service-mvp-development-1.jpg"}
        heading={"MVP Development in Accord with Your Vision"}
        text={
          "In fact, as a leading MVP development company, Four Strokes Digital offers MVP development services that allow tech startups to deal with some of the unique challenges around the development of new products. Our MVP development Company have been designed to ensure you can easily validate your product concept, gather user insights, and modify your offering. We work in unison with you to outline essential features and key functionalities and create a user-centric MVP that excites early users and articulates your market assumptions."
        }
        dropdown={one}
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={true}
        image={"/service-mvp-development-2.jpg"}
        heading={"You Innovation Empowered: Expert MVP Development Services"}
        text={
          "Four Strokes Digital is a premier MVP development company that offers sophisticated MVP development service that enhance the product's life cycle from raw concepts to ready-to-use market solutions. Our MVP development Company aim to yield maximum return on investment while ensuring that your MVP reflects your vision and caters to the market's needs."
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
        image={"/service-mvp-development-3.jpg"}
        heading={"Startup MVPs Building"}
        text={
          "Four Strokes Digital understands that startups have some real-time experience in developing MVPs. We create customized MVP software development services that are affordable and fit specific timelines and deadlines. A well-built MVP can be the ticket to onboarding investors and building a customer base. As a company you trust in MVP software development, we ensure that your MVP is such a solid foundation that further product growth and success can be built around it."
        }
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={true}
        image={"/service-mvp-development-4.jpg"}
        heading={"MVP Development Agencies In Your Area"}
        text={
          "Are you looking for an MVP development company that understands what you want and delivers splendid results? At Four Strokes Digital, we offer MVP as a service-oriented organization with which your ideas will be effortless and effective. Contact us for a free consultation, and let's see how we can turn that amazing idea of yours into reality."
        }
      />
      <IconBanner
        image={"/android-application-card-image.webp"}
        heading={"Android Application"}
        buttonText={"Next Service"}
        buttonLink={"/services/android-application"}
      />
      <TestimonialSection />
      <ServicesContactSection />
    </>
  );
};

export default MVPDevelopment;
