import Navbar from "@/utils/navbar/Navbar";
import ServicesInnerHero from "@/utils/hero/ServicesInnerHero";
import RatingsExperienceSection from "@/utils/section/RatingsExperienceSection";
import ImageAndTextSection from "@/utils/section/ImageAndTextSection";
import TextBanner from "@/utils/banner/TextBanner";
import IconBanner from "@/utils/banner/IconBanner";
import TestimonialSection from "@/components/section/TestimonialSection";
import ServicesContactSection from "@/utils/section/ServicesContactSection";
import Footer from "@/utils/footer/Footer";
import { one, two } from "@/data/dropdown/AndroidApplicationFAQData";
import { webDesignMetaData } from "@/data/meta/ServicesMetaData";

export const metadata = {
  title: webDesignMetaData.title,
  description: webDesignMetaData.description,
  keywords: webDesignMetaData.focusKeyWord,
  alternates: {
    canonical: webDesignMetaData.canonical,
  },
};

const WebDesign = () => {
  return (
    <>
      <Navbar pageName={"Services"} />
      <ServicesInnerHero
        subHeading={"Solutions"}
        mainHeading={"Creative web design company"}
        text={
          "Four Strokes Digital is a well-reputed web design company that does well in creating appealing yet productive websites that suit every client to fit well with their specific needs. Our design concepts focus on the engagement of users and, majorly, on inspiring them for their progression. International SEO techniques combined with cutting-edge aesthetics and flawless functionality, we build websites around so that your brand stands out and delivers results."
        }
        image={"/website-development-service.gif"}
      />
      <RatingsExperienceSection />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/service-web-design-1.jpg"}
        heading={"Your Award-Winning Web Design Company"}
        text={
          "Create unforgettable and vibrant digital experiences through our award-winning web design services at Four Strokes Digital. A great web design company brings power to every business, especially a small one, to own design across all devices: desktop, tablet, and mobile. We can surely be proud to be among the top contenders in web development services because we understand how essential responsive design would be in this age when many people always access the web digitally. Our most important aspect is not only to provide responsive layouts but also to provide a smooth, seamless experience for each user. We have combined professional web development services with excellent SEO strategies that will help your business grow online. Rely on us for solutions that will not only change your digital visibility but also have long-term results."
        }
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={true}
        image={"/service-web-design-2.jpg"}
        heading={"What Relays Four Strokes Digital from Others"}
        dropdown={one}
      />
      <TextBanner
        headingOne={"Ready to take the next step?"}
        buttonText={"Let's Connect"}
        buttonLink={"/contact"}
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/service-web-design-3.jpg"}
        heading={
          "Reach Us - Together, Let's Create Something Wonderful for the Future!"
        }
        text={
          "Interesting and dazzling website design in a way that takes your business up to the next level? Four Strokes Digital can help you find out and experience something beautiful, functional, and appealing in your online presence functionalities, whether a simple website or a custom web application. Our team of expert web and application developers is ready to complete your project with an end-to-end user-focused solution."
        }
        dropdown={two}
      />
      <IconBanner
        image={"/custom-website-development-card-image.webp"}
        heading={"Custom Website Development"}
        buttonText={"Next Service"}
        buttonLink={"/services/custom-website-development"}
      />
      <TestimonialSection />
      <ServicesContactSection />
      <Footer />
    </>
  );
};

export default WebDesign;
