import React from "react";
import TermsAndConditionsHero from "@/components/hero/TermsAndConditionsHero";
import TermsAndConditionsSection from "@/components/section/TermsAndConditionsSection";
import { termsAndConditionsMetaData } from "@/data/meta/PagesMetaData";

export const metadata = {
  title: termsAndConditionsMetaData.title,
  description: termsAndConditionsMetaData.description,
  keywords: termsAndConditionsMetaData.focusKeyWord,
  alternates: {
    canonical: termsAndConditionsMetaData.canonical
  }
};

const TermsAndConditions = () => {
  return (
    <>
      <TermsAndConditionsHero />
      <TermsAndConditionsSection />
    </>
  );
};

export default TermsAndConditions;
