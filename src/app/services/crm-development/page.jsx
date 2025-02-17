import React from "react";
import ServicesInnerHero from "@/utils/hero/ServicesInnerHero";
import RatingsExperienceSection from "@/utils/section/RatingsExperienceSection";
import ImageAndTextSection from "@/utils/section/ImageAndTextSection";
import TextBanner from "@/utils/banner/TextBanner";
import IconBanner from "@/utils/banner/IconBanner";
import TestimonialSection from "@/components/section/TestimonialSection";
import ServicesContactSection from "@/utils/section/ServicesContactSection";
import { one, two, three } from "@/data/dropdown/CRMDevelopmentFAQData";
import { crmDevelopmentMetaData } from "@/data/meta/ServicesMetaData";

export const metadata = {
  title: crmDevelopmentMetaData.title,
  description: crmDevelopmentMetaData.description,
  keywords: crmDevelopmentMetaData.focusKeyWord,
  alternates: {
    canonical: crmDevelopmentMetaData.canonical
  }
};

const CRMDevelopment = () => {
  return (
    <>
      <ServicesInnerHero
        subHeading={"Solutions"}
        mainHeading={"Custom CRM Development Company"}
        text={
          "Four Strokes Digital is a leading CRM development company, offering custom CRM solutions tailored to your business needs. We provide scalable, data-driven, and affordable CRM software for small businesses and enterprises, enhancing customer relationships and streamlining operations for long-term success. Our CRM solutions are also among the best CRM for customer service, designed to improve communication, resolve issues faster, and deliver a seamless support experience for your clients."
        }
        image={"/website-development-service.gif"}
      />
      <RatingsExperienceSection />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/service-crm-development-1.jpg"}
        heading={"CRM development company Service providers"}
        para={[
          "It's always been frustrating to get forced to manage your business processes and models with a rigid CRM template that does not fulfill your creative needs. Four Strokes Digital is not one of those; it values every client’s needs and believes in creativity and solutions. Being a custom CRM development company, Four Strokes Digital has responsibilities, and it fulfills them completely by understanding the client's needs, goals, and long-term planning.",
          "Four Strokes Digital has an experienced team of developers who work collaboratively to get you the best for customer service software that seamlessly integrates with your existing workflows and adapts according to your business requirements.",
          "Whenever a client requires an advanced set of features, enhanced services, and an accurate reporting system, we can modify his viewpoint into efficient and scalable CRM software that eventually grows your business with exceptional customer service and satisfaction.",
        ]}
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={true}
        image={"/service-crm-development-2.jpg"}
        heading={"Your Award-Winning Web Design Agency"}
        dropdown={one}
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/service-crm-development-3.jpg"}
        heading={
          "Customized CRM software and services to serve your business model"
        }
        text={
          "Four Strokes Digital offers a variety of features in CRM software and does not go with a one-size-fits-all approach. Four Strokes, a CRM software development company, is popular and specializes in crafting customized CRM software to meet the demands and unique needs of your business model across vast industries. Several features can benefit your business."
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
        isReverse={true}
        image={"/service-crm-development-1.jpg"}
        heading={
          "Four Strokes Digital: More than just an Enterprise customer relationship management"
        }
        para={[
          "Four Strokes Digital looks beyond short-term goals and wants to make long-lasting partnerships with clients and customers. Four Strokes offers enterprise customer relationship management with a team of skilled and expert personnel to empower a business, expand its growth, and fulfill business needs. It offers lifelong support and maintenance services and adapts alongside your business model.",
          "Below are the components that sets Four Strokes Digital, other than just a CRM company:",
        ]}
        dropdown={three}
      />
      <IconBanner
        image={"/search-engine-optimization-card-image.webp"}
        heading={"MVP Development"}
        buttonText={"Next Service"}
        buttonLink={"/services/mvp-development"}
      />
      <TestimonialSection />
      <ServicesContactSection />
    </>
  );
};

export default CRMDevelopment;
