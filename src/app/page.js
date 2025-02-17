import HomeSection from "@/components/banner/HomeSection";
import RatingsExperienceSection from "@/utils/section/RatingsExperienceSection";
import AboutSection from "@/components/section/AboutSection";
import VisionSection from "@/components/section/VisionSection";
import ServicesSection from "@/components/section/ServicesSection";
import PortfolioSection from "@/components/section/PortfolioSection";
import Marquee from "@/components/marquee/Marquee";
import TestimonialSection from "@/components/section/TestimonialSection";
import CardSection from "@/components/section/CardSection";
import WhyChooseSection from "@/components/section/WhyChooseSection";
import { homeCardsData } from "@/data/cards/HomeCardsData";
import { homeCardsHeadingData } from "@/data/cards/HomeCardsHeadingData";
import { homeMetaData } from "@/data/meta/PagesMetaData";

export const metadata = {
  title: homeMetaData.title,
  description: homeMetaData.description,
  keywords: homeMetaData.focusKeyWord,
  alternates: {
    canonical: homeMetaData.canonical
  }
};

const page = () => {
  return (
    <>
      <HomeSection />
      <RatingsExperienceSection />
      <AboutSection />
      <VisionSection />
      <ServicesSection />
      <PortfolioSection />
      <Marquee isTextAllowed={false} />
      <TestimonialSection />
      <CardSection
        CardsHeadingData={homeCardsHeadingData}
        cardsData={homeCardsData}
      />
      <WhyChooseSection />
    </>
  );
};

export default page;
