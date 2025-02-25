import React from "react";
import Navbar from "@/utils/navbar/Navbar";
import TermsAndConditionsHero from "@/components/hero/TermsAndConditionsHero";
import TermsAndConditionsSection from "@/components/section/TermsAndConditionsSection";
import Footer from "@/utils/footer/Footer";
import { termsAndConditionsMetaData } from "@/data/meta/PagesMetaData";

export const metadata = {
  title: termsAndConditionsMetaData.title,
  description: termsAndConditionsMetaData.description,
  keywords: termsAndConditionsMetaData.focusKeyWord,
  alternates: {
    canonical: termsAndConditionsMetaData.canonical,
  },
};

const TermsAndConditions = () => {
  return (
    <>
      <Navbar pageName={"Terms And Conditions"} />
      <TermsAndConditionsHero />
      <TermsAndConditionsSection />
      <Footer />
    </>
  );
};

export default TermsAndConditions;
