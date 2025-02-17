import React from "react";
import PortfolioHero from "@/components/hero/PortfolioHero";
import PortfolioSection from "@/components/section/PortfolioSection";
import { portfolioMetaData } from "@/data/meta/PagesMetaData";

export const metadata = {
  title: portfolioMetaData.title,
  description: portfolioMetaData.description,
  keywords: portfolioMetaData.focusKeyWord,
  alternates: {
    canonical: portfolioMetaData.canonical
  }
};

const Portfolio = () => {
  return (
    <>
      <PortfolioHero />
      <PortfolioSection />
    </>
  );
};

export default Portfolio;
