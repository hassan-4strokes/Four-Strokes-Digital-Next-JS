import React from "react";
import Navbar from "@/utils/navbar/Navbar";
import PortfolioHero from "@/components/hero/PortfolioHero";
import PortfolioSection from "@/components/section/PortfolioSection";
import Footer from "@/utils/footer/Footer";
import { portfolioMetaData } from "@/data/meta/PagesMetaData";

export const metadata = {
  title: portfolioMetaData.title,
  description: portfolioMetaData.description,
  keywords: portfolioMetaData.focusKeyWord,
  alternates: {
    canonical: portfolioMetaData.canonical,
  },
};

const Portfolio = () => {
  return (
    <>
      <Navbar pageName={"Portfolio"} />
      <PortfolioHero />
      <PortfolioSection />
      <Footer />
    </>
  );
};

export default Portfolio;
