import React from "react";
import PrivacyPolicyHero from "@/components/hero/PrivacyPolicyHero";
import PrivacyPolicySection from "@/components/section/PrivacyPolicySection";
import { privacyPolicyMetaData } from "@/data/meta/PagesMetaData";

export const metadata = {
  title: privacyPolicyMetaData.title,
  description: privacyPolicyMetaData.description,
  keywords: privacyPolicyMetaData.focusKeyWord,
  alternates: {
    canonical: privacyPolicyMetaData.canonical
  }
};

const PrivacyPolicy = () => {
  return (
    <>
      <PrivacyPolicyHero />
      <PrivacyPolicySection />
    </>
  );
};

export default PrivacyPolicy;
