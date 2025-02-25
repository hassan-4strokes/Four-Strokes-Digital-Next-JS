import React from "react";
import Navbar from "@/utils/navbar/Navbar";
import SupportHero from "@/components/hero/SupportHero";
import RatingsExperienceSection from "@/utils/section/RatingsExperienceSection";
import ImageAndTextSection from "@/utils/section/ImageAndTextSection";
import TextBanner from "@/utils/banner/TextBanner";
import CardSection from "@/components/section/CardSection";
import TestimonialSection from "@/components/section/TestimonialSection";
import Footer from "@/utils/footer/Footer";
import { supportCardsData } from "@/data/cards/SupportCardsData";
import { supportCardsHeadingData } from "@/data/cards/SupportCardsHeadingData";
import { supportMetaData } from "@/data/meta/PagesMetaData";

export const metadata = {
  title: supportMetaData.title,
  description: supportMetaData.description,
  keywords: supportMetaData.focusKeyWord,
  alternates: {
    canonical: supportMetaData.canonical,
  },
};

const Support = () => {
  return (
    <>
      <Navbar pageName={"Support"} />
      <SupportHero />
      <RatingsExperienceSection />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/support-1.webp"}
        heading={"Fast Response from Our Specialists"}
        text={
          "In the digital world, unforeseen issues can arise at any moment. Server failures, faulty updates, or even hacker attacks can disrupt your online presence. That’s why our support team is always on standby, continuously monitoring your website and ready to respond at a moment’s notice. With Four Strokes Digital, you can rest assured that your website is in good hands, with immediate action taken to resolve any problems that may occur."
        }
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={true}
        image={"/support-2.webp"}
        heading={"Best Support with Your Own Team"}
        text={
          "Your website is unique, and so are your business needs. At your request, we can provide a dedicated team of project managers and developers who are fully acquainted with your website’s requirements. This team will work proactively, ensuring that your website not only meets current standards but is also prepared for future challenges. With a dedicated support team, you can focus on your business, knowing that your website is being handled by professionals who understand your goals."
        }
      />
      <TextBanner
        headingOne={"Ready to take the next step?"}
        buttonText={"Let's Connect"}
        buttonLink={"/contact"}
      />
      <ImageAndTextSection
        isInner={false}
        isReverse={false}
        image={"/support-1.webp"}
        heading={"Make Time for Important Changes"}
        text={
          "Your website is a cornerstone of your business, and as your business evolves, so too must your online presence. Whether you’re looking to refresh your corporate design, launch a new product line, or pivot your marketing strategy, our team at Four Strokes Digital is here to help you implement these changes seamlessly. We ensure that your website stays aligned with your business objectives, delivering the impact you need in a fast-changing market."
        }
      />
      <CardSection
        CardsHeadingData={supportCardsHeadingData}
        cardsData={supportCardsData}
      />
      <TestimonialSection />
      <Footer />
    </>
  );
};

export default Support;
