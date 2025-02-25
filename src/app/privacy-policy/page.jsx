import React from "react";
import PrivacyPolicyHero from "@/components/hero/PrivacyPolicyHero";
import PrivacyPolicySection from "@/components/section/PrivacyPolicySection";
import { privacyPolicyMetaData } from "@/data/meta/PagesMetaData";
import Navbar from "@/utils/navbar/Navbar";
import Footer from "@/utils/footer/Footer";

export const metadata = {
  title: privacyPolicyMetaData.title,
  description: privacyPolicyMetaData.description,
  keywords: privacyPolicyMetaData.focusKeyWord,
  alternates: {
    canonical: privacyPolicyMetaData.canonical,
  },
};

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar pageName={"Privacy Policy"} />
      <PrivacyPolicyHero />
      <PrivacyPolicySection />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
