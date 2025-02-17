import ServicesHero from "@/components/hero/ServicesHero";
import CardSection from "@/components/section/CardSection";
import ServicesSection from "@/components/section/ServicesSection";
import { servicesCardsData } from "@/data/cards/ServicesCardsData";
import { servicesCardsHeadingData } from "@/data/cards/ServicesCardsHeadingData";
import { servicesMetaData } from "@/data/meta/PagesMetaData";

export const metadata = {
  title: servicesMetaData.title,
  description: servicesMetaData.description,
  keywords: servicesMetaData.focusKeyWord,
  alternates: {
    canonical: servicesMetaData.canonical
  }
};

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesSection />
      <CardSection
        CardsHeadingData={servicesCardsHeadingData}
        cardsData={servicesCardsData}
      />
    </>
  );
};

export default Services;
