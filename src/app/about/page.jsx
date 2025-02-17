import AboutHero from "@/components/hero/AboutHero";
import CardSection from "@/components/section/CardSection";
import OurValueSection from "@/components/section/OurValueSection";
import TestimonialSection from "@/components/section/TestimonialSection";
import VideoSection from "@/components/section/VideoSection";
import WhoWeAreSection from "@/components/section/WhoWeAreSection";
import WhyChooseSection from "@/components/section/WhyChooseSection";
import { homeCardsData } from "@/data/cards/HomeCardsData";
import { homeCardsHeadingData } from "@/data/cards/HomeCardsHeadingData";
import { aboutMetaData } from "@/data/meta/PagesMetaData";

export const metadata = {
  title: aboutMetaData.title,
  description: aboutMetaData.description,
  keywords: aboutMetaData.focusKeyWord,
  alternates: {
    canonical: aboutMetaData.canonical
  }
};

const About = () => {
  return (
    <>
      <AboutHero />
      <VideoSection />
      <WhyChooseSection />
      <WhoWeAreSection />
      <OurValueSection />
      <TestimonialSection />
      <CardSection
        CardsHeadingData={homeCardsHeadingData}
        cardsData={homeCardsData}
      />
    </>
  );
};

export default About;
